# Medina Services — Website

Marketing site for **Medina Services, LLC**, a Virginia Class A Licensed, minority-owned
contracting firm serving commercial, government, and residential clients across Northern
Virginia. Three service lines: Grounds Maintenance, Property Maintenance & Repair, and
Remodeling & Construction.

Built with **Next.js 14** (App Router, TypeScript). A single-page home plus `/about` and
`/contact`.

---

## Running it

The application lives in `src/`.

```bash
cd src
npm install
npm run dev          # http://localhost:3000
```

```bash
npm run build && npm start   # production build
```

Requires Node 18.17 or newer.

---

## Deploying

Hosted on Vercel. Two project settings matter:

| Setting | Value |
|---|---|
| **Root Directory** | `src` |
| **Framework Preset** | Next.js |

Pushes to `main` deploy to production; every other branch gets a preview URL.

### Environment variables

Set these in **Production and Preview**, then redeploy — a new variable does not reach an
already-built deployment.

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend API key. Server-side only — never prefix with `NEXT_PUBLIC_`. |
| `LEAD_TO_EMAIL` | Where form submissions land. Currently `medinaservicesva@gmail.com`. |
| `LEAD_FROM_EMAIL` | Sender. Currently `Medina Services Website <onboarding@resend.dev>`. |
| `LEAD_CC_EMAIL` | Optional. Copies a second inbox. |
| `LEAD_AUTOREPLY` | Optional. `true` also sends a confirmation to whoever submitted the form. |

`src/.env.example` documents the same list, with the reasoning behind the two email
values. Copy it to `src/.env.local` for local work; that file is git-ignored.

**Why the sender is `onboarding@resend.dev` and not the company domain.** Sending as
`@medinaservices.us` requires verifying the domain in Resend, which requires an MX record
on a `send` subdomain. The domain's DNS sits on Namecheap with Private Email, and that
panel will not add a subdomain MX without switching Mail Settings to "Custom MX" — which
removes the records that let `info@medinaservices.us` receive mail. `onboarding@resend.dev`
sends without any domain verification, but only to the Resend account owner's address,
which is why leads currently go to the Gmail account. Reply-to is always the lead's own
address, so replying reaches them directly either way.

To move to the company domain later: finish verifying `medinaservices.us` in Resend — DKIM
and the SPF TXT record are already published, only the `send` MX is missing — then point
`LEAD_FROM_EMAIL` at `leads@medinaservices.us`, `LEAD_TO_EMAIL` at `info@medinaservices.us`,
and redeploy. No code changes.

---

## Structure

```
src/
  app/
    layout.tsx          fonts, metadata, JSON-LD, nav and footer
    page.tsx            home
    about/, contact/
    api/lead/route.ts   form submissions → email
    globals.css         design tokens, motion, every section's styles
    sitemap.ts, robots.ts
  components/
    sections/           one component per home section
    forms/LeadForm.tsx  estimate and contact form
    ...                 Nav, Footer, Logo, Button, Reveal, SlotImage, BeforeAfter
  lib/
    content.ts          all site copy
    icons.tsx           brand icons
  public/               images, logo, capability statement PDF
```

**All copy lives in `src/lib/content.ts`.** Text changes belong there, not in components.
Images are mapped by slot id in `src/components/SlotImage.tsx`.

---

## The lead form

`POST /api/lead` validates the submission server-side and sends it through the Resend REST
API. It carries a honeypot field, a minimum fill time, and a best-effort per-IP rate limit.
`reply_to` is set to the sender's own address, so replying from the inbox goes straight
back to them.

If the environment variables are missing the route returns 500 and the form shows the
phone and email fallback. It never reports success for a message it did not send.

---

## Known limitations

- **Testimonials are sample copy.** The three quotes under "What Our Clients Say" were
  written to fill the layout and are not real client reviews. Replace them with genuine
  ones or hide the section.
- **No booking tool.** "Book a Consultation" was removed because no scheduling tool was
  chosen. Add the CTA back alongside whichever tool gets picked.
- **The Before/After slider uses plain `<img>` tags** and bypasses `next/image`, so those
  photos are not automatically optimised.
- **ESLint is not configured**, so builds skip it. Type checking runs and passes.
