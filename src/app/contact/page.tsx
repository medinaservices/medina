import type { Metadata } from 'next';
import LeadForm from '@/components/forms/LeadForm';
import { Phone, Mail, Pin, Building } from '@/lib/icons';
import { company } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Medina Services, LLC for grounds maintenance, property repair, and renovation across Northern Virginia. Call (571) 395-3927 or request a free estimate. We respond within one business day.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1>Let&rsquo;s get to work.</h1>
          <p>
            Serving commercial, government, and residential clients throughout Northern Virginia. We
            respond within one business day.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact__grid contact--light">
            <div>
              <span className="eyebrow">Reach Us</span>
              <h2 className="h2 heading-spaced">Get in touch</h2>
              <div className="contact__details">
                <a className="contact__row" href={company.phoneHref}>
                  <Phone /> <span>{company.phone}</span>
                </a>
                <a className="contact__row" href={company.emailHref}>
                  <Mail /> <span>{company.email}</span>
                </a>
                <p className="contact__row">
                  <Pin /> <span>{company.address}</span>
                </p>
                <p className="contact__row">
                  <Building /> <span>Serving {company.serviceArea}</span>
                </p>
              </div>
              <p className="booking-note booking-note--spaced" id="booking">
                Prefer to talk it through? <strong>Call us or send the form</strong>, and we&rsquo;ll
                schedule a consultation that fits your timeline.
              </p>
            </div>

            <div>
              <LeadForm variant="contact" />
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Map" style={{ borderTop: 'var(--border)' }}>
        <iframe
          title="Medina Services service area — Gainesville, Northern Virginia"
          src="https://maps.google.com/maps?q=Gainesville%2C%20VA&t=&z=11&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="420"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0, display: 'block' }}
        />
      </section>
    </>
  );
}
