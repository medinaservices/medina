import { NextResponse } from 'next/server';

/**
 * Lead intake — POST /api/lead
 *
 * Receives the estimate/contact form and emails it to the address in LEAD_TO_EMAIL
 * via the Resend REST API (called with fetch — no SDK dependency on purpose).
 *
 * Required env vars (Vercel → Project → Settings → Environment Variables):
 *   RESEND_API_KEY   re_...            server-side only, never exposed to the client
 *   LEAD_TO_EMAIL    info@medinaservices.us
 *   LEAD_FROM_EMAIL  "Medina Services Website <leads@a-verified-domain.com>"
 *                    the domain MUST be verified in Resend or the send is rejected
 * Optional:
 *   LEAD_CC_EMAIL    second recipient
 *   LEAD_AUTOREPLY   "true" → also send a confirmation to the person who submitted
 *
 * Spam handling is layered and deliberately lightweight for this traffic level:
 * a honeypot field, a minimum fill time, and a best-effort per-IP rate limit.
 * The rate limit lives in module memory, so it is per serverless instance — it
 * blunts a naive flood, it does not stop a determined one. If the inbox ever gets
 * hit for real, add Cloudflare Turnstile in front of this route.
 */

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const RESEND_ENDPOINT = 'https://api.resend.com/emails';

const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;
/** Minimum time a human plausibly needs to fill the form. */
const MIN_FILL_MS = 2500;
/** A page left open all day is fine; a stale timestamp beyond this is replayed. */
const MAX_FILL_MS = 12 * 60 * 60 * 1000;

const LIMITS = {
  name: 120,
  email: 200,
  phone: 60,
  address: 200,
  service: 120,
  message: 4000,
} as const;

const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  // Keep the map from growing without bound on a long-lived instance.
  if (hits.size > 500) {
    for (const [key, stamps] of hits) {
      if (stamps.every((t) => now - t >= RATE_WINDOW_MS)) hits.delete(key);
    }
  }
  return recent.length > RATE_MAX;
}

/** Single-line fields go into a subject/header-ish context — drop newlines. */
function oneLine(value: unknown, max: number): string {
  return String(value ?? '')
    .replace(/[\r\n\t]+/g, ' ')
    .trim()
    .slice(0, max);
}

function multiLine(value: unknown, max: number): string {
  return String(value ?? '')
    .replace(/\r\n/g, '\n')
    .trim()
    .slice(0, max);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Lead = {
  name: string;
  email: string;
  phone: string;
  address: string;
  service: string;
  message: string;
  source: string;
};

function renderText(lead: Lead): string {
  return [
    `New ${lead.source === 'contact' ? 'contact message' : 'estimate request'} from the website`,
    '',
    `Name:    ${lead.name}`,
    `Email:   ${lead.email}`,
    `Phone:   ${lead.phone || '—'}`,
    `Address: ${lead.address || '—'}`,
    `Service: ${lead.service || '—'}`,
    '',
    'Message:',
    lead.message,
    '',
    `— Sent from the form on medinaservices.us (${lead.source})`,
  ].join('\n');
}

function renderHtml(lead: Lead): string {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:4px 16px 4px 0;color:#949496;font:14px Arial,sans-serif;vertical-align:top">${label}</td>` +
    `<td style="padding:4px 0;color:#001F4D;font:14px Arial,sans-serif">${escapeHtml(value || '—')}</td></tr>`;

  return [
    '<div style="font:16px Arial,sans-serif;color:#001F4D">',
    `<p style="margin:0 0 16px"><strong>New ${lead.source === 'contact' ? 'contact message' : 'estimate request'}</strong> from the website.</p>`,
    '<table style="border-collapse:collapse;margin:0 0 16px">',
    row('Name', lead.name),
    row('Email', lead.email),
    row('Phone', lead.phone),
    row('Address', lead.address),
    row('Service', lead.service),
    '</table>',
    '<p style="margin:0 0 4px;color:#949496;font:14px Arial,sans-serif">Message</p>',
    `<p style="margin:0;white-space:pre-wrap">${escapeHtml(lead.message)}</p>`,
    `<p style="margin:24px 0 0;color:#949496;font:12px Arial,sans-serif">Sent from the ${escapeHtml(lead.source)} form on medinaservices.us</p>`,
    '</div>',
  ].join('');
}

async function sendEmail(payload: Record<string, unknown>, apiKey: string): Promise<void> {
  const res = await fetch(RESEND_ENDPOINT, {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    throw new Error(`Resend responded ${res.status}: ${detail.slice(0, 500)}`);
  }
}

export async function POST(request: Request) {
  const ip = (request.headers.get('x-forwarded-for') ?? '').split(',')[0].trim() || 'unknown';
  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: 'rate_limited' },
      { status: 429, headers: { 'Retry-After': '600' } },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: 'bad_request' }, { status: 400 });
  }

  // Honeypot: a real browser never fills this, it is hidden and off the tab order.
  // Answer 200/ok so the bot logs a success and does not retry with variations.
  if (oneLine(body.company_website, 200) !== '') {
    return NextResponse.json({ ok: true });
  }

  // Fill-time gate. A missing/garbled timestamp is treated as suspicious, not fatal:
  // only an implausibly fast submit is dropped.
  const startedAt = Number(body.t);
  if (Number.isFinite(startedAt) && startedAt > 0) {
    const elapsed = Date.now() - startedAt;
    if (elapsed < MIN_FILL_MS || elapsed > MAX_FILL_MS) {
      return NextResponse.json({ ok: true });
    }
  }

  const lead: Lead = {
    name: oneLine(body.name, LIMITS.name),
    email: oneLine(body.email, LIMITS.email),
    phone: oneLine(body.phone, LIMITS.phone),
    address: oneLine(body.address, LIMITS.address),
    service: oneLine(body.service, LIMITS.service),
    message: multiLine(body.message, LIMITS.message),
    source: oneLine(body.source, 20) === 'contact' ? 'contact' : 'estimate',
  };

  // Server-side revalidation — the client checks are for UX only.
  const fields: Record<string, string> = {};
  if (!lead.name) fields.name = 'Please enter your name.';
  if (!lead.email) fields.email = 'Please enter your email.';
  else if (!EMAIL_RE.test(lead.email)) fields.email = 'Please enter a valid email.';
  // The property address is required on both forms; the phone only on the estimate,
  // where someone has to be called back to schedule a visit.
  if (lead.source === 'estimate' && !lead.phone) {
    fields.phone = 'Please enter a phone number so we can reach you.';
  }
  if (!lead.address) fields.address = 'Please enter the property address.';
  if (!lead.message) fields.message = 'Please tell us a little about your needs.';
  if (Object.keys(fields).length > 0) {
    return NextResponse.json({ ok: false, error: 'validation', fields }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL;
  const from = process.env.LEAD_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    // Never fake success — the form shows the phone/email fallback instead.
    console.error(
      '[lead] misconfigured: RESEND_API_KEY / LEAD_TO_EMAIL / LEAD_FROM_EMAIL must all be set',
    );
    return NextResponse.json({ ok: false, error: 'not_configured' }, { status: 500 });
  }

  const cc = process.env.LEAD_CC_EMAIL;
  const subject =
    lead.source === 'contact'
      ? `Website message — ${lead.name}`
      : `Estimate request — ${lead.name}${lead.service ? ` (${lead.service})` : ''}`;

  try {
    await sendEmail(
      {
        from,
        to: [to],
        ...(cc ? { cc: [cc] } : {}),
        reply_to: lead.email,
        subject,
        text: renderText(lead),
        html: renderHtml(lead),
      },
      apiKey,
    );
  } catch (err) {
    console.error('[lead] send failed', err);
    return NextResponse.json({ ok: false, error: 'send_failed' }, { status: 502 });
  }

  if (process.env.LEAD_AUTOREPLY === 'true') {
    // The lead is already captured — an auto-reply failure must not fail the request.
    try {
      await sendEmail(
        {
          from,
          to: [lead.email],
          reply_to: to,
          subject: 'We received your request — Medina Services',
          text: [
            `Hi ${lead.name},`,
            '',
            'Thank you for reaching out to Medina Services. We received your request and will respond within one business day.',
            '',
            'If it is urgent, call us at (571) 395-3927.',
            '',
            '— Medina Services',
            'info@medinaservices.us · (571) 395-3927',
          ].join('\n'),
        },
        apiKey,
      );
    } catch (err) {
      console.error('[lead] autoreply failed', err);
    }
  }

  return NextResponse.json({ ok: true });
}
