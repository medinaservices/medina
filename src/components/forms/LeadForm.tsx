'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { Arrow } from '@/lib/icons';

type Variant = 'estimate' | 'contact';

type Errors = Record<string, string>;

/**
 * Estimate + Contact form UI with client-side validation and success/error states.
 * Submits to the /api/lead Route Handler, which emails info@medinaservices.us.
 * The client-side validation here is for UX only — the route revalidates everything.
 */
export default function LeadForm({ variant = 'estimate' }: { variant?: Variant }) {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorKind, setErrorKind] = useState<'generic' | 'rate_limited'>('generic');
  /** Set on mount, sent with the payload so the route can reject instant submits. */
  const mountedAt = useRef(0);

  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);

  /** The property address is required on both forms (client request, 2026-08-17).
   *  The phone stays required only on the estimate, where someone has to be called
   *  back to schedule a visit. */
  const estimate = variant === 'estimate';

  function validate(data: FormData): Errors {
    const e: Errors = {};
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const address = String(data.get('address') || '').trim();
    const message = String(data.get('message') || '').trim();
    if (!name) e.name = 'Please enter your name.';
    if (!email) e.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Please enter a valid email.';
    if (estimate && !phone) e.phone = 'Please enter a phone number so we can reach you.';
    if (!address) e.address = 'Please enter the property address.';
    if (!message) e.message = 'Please tell us a little about your needs.';
    return e;
  }

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const data = new FormData(form);
    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus('idle');
      return;
    }
    setStatus('submitting');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          phone: data.get('phone'),
          address: data.get('address'),
          service: data.get('service'),
          message: data.get('message'),
          company_website: data.get('company_website'),
          source: variant,
          t: mountedAt.current,
        }),
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
        return;
      }

      const payload = (await res.json().catch(() => null)) as
        | { error?: string; fields?: Errors }
        | null;

      if (res.status === 422 && payload?.fields) {
        setErrors(payload.fields);
        setStatus('idle');
        return;
      }

      setErrorKind(res.status === 429 ? 'rate_limited' : 'generic');
      setStatus('error');
    } catch {
      setErrorKind('generic');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="form">
        <div className="form__status" data-kind="success" role="status">
          Thank you — your request has been received. We respond within one business day.
        </div>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate aria-label={variant === 'estimate' ? 'Request a free estimate' : 'Contact us'}>
      <div className="form__row">
        <div className="field" data-error={Boolean(errors.name)}>
          <label htmlFor="lf-name">
            Name <span className="req" aria-hidden="true">*</span>
          </label>
          <input
            id="lf-name"
            name="name"
            type="text"
            autoComplete="name"
            aria-required="true"
            aria-invalid={Boolean(errors.name)}
            aria-describedby="lf-name-err"
          />
          <span className="field__error" id="lf-name-err">
            {errors.name}
          </span>
        </div>
        <div className="field" data-error={Boolean(errors.email)}>
          <label htmlFor="lf-email">
            Email <span className="req" aria-hidden="true">*</span>
          </label>
          <input
            id="lf-email"
            name="email"
            type="email"
            autoComplete="email"
            aria-required="true"
            aria-invalid={Boolean(errors.email)}
            aria-describedby="lf-email-err"
          />
          <span className="field__error" id="lf-email-err">
            {errors.email}
          </span>
        </div>
      </div>

      <div className="form__row">
        <div className="field" data-error={Boolean(errors.phone)}>
          <label htmlFor="lf-phone">
            Phone{' '}
            {estimate ? (
              <span className="req" aria-hidden="true">*</span>
            ) : (
              <span className="field__hint">(optional)</span>
            )}
          </label>
          <input
            id="lf-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            aria-required={estimate}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby="lf-phone-err"
          />
          <span className="field__error" id="lf-phone-err">
            {errors.phone}
          </span>
        </div>
        <div className="field">
          <label htmlFor="lf-service">Service of interest</label>
          <select id="lf-service" name="service" defaultValue="">
            <option value="" disabled>
              Select…
            </option>
            <option>Grounds Maintenance</option>
            <option>Property Maintenance &amp; Repair</option>
            <option>Remodeling &amp; Construction</option>
            <option>Not sure yet</option>
          </select>
        </div>
      </div>

      <div className="field" data-error={Boolean(errors.address)}>
        <label htmlFor="lf-address">
          Property address <span className="req" aria-hidden="true">*</span>
        </label>
        <input
          id="lf-address"
          name="address"
          type="text"
          autoComplete="street-address"
          placeholder="Street, city, ZIP"
          aria-required="true"
          aria-invalid={Boolean(errors.address)}
          aria-describedby="lf-address-err"
        />
        <span className="field__error" id="lf-address-err">
          {errors.address}
        </span>
      </div>

      <div className="field" data-error={Boolean(errors.message)}>
        <label htmlFor="lf-message">
          {variant === 'estimate' ? 'Tell us about your property and needs' : 'How can we help?'}{' '}
          <span className="req" aria-hidden="true">*</span>
        </label>
        <textarea
          id="lf-message"
          name="message"
          rows={4}
          aria-required="true"
          aria-invalid={Boolean(errors.message)}
          aria-describedby="lf-message-err"
        />
        <span className="field__error" id="lf-message-err">
          {errors.message}
        </span>
      </div>

      {/* Honeypot — hidden from sight, screen readers and the tab order. Bots fill it; people don't. */}
      <div className="form__hp" aria-hidden="true">
        <label htmlFor="lf-company-website">Company website</label>
        <input
          id="lf-company-website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status === 'error' && (
        <div className="form__status" data-kind="error" role="alert">
          {errorKind === 'rate_limited'
            ? 'Too many submissions from this connection. Please wait a few minutes, or call us at (571) 395-3927.'
            : 'Something went wrong and your message was not sent. Please call us at (571) 395-3927 or email info@medinaservices.us.'}
        </div>
      )}

      <button className="btn btn--primary" type="submit" disabled={status === 'submitting'}>
        {status === 'submitting'
          ? 'Sending…'
          : variant === 'estimate'
            ? 'Request a Free Estimate'
            : 'Send Message'}
        <Arrow />
      </button>
    </form>
  );
}
