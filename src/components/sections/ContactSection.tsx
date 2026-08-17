import Reveal from '@/components/Reveal';
import LeadForm from '@/components/forms/LeadForm';
import { Phone, Mail, Pin, Building } from '@/lib/icons';
import { contact, company } from '@/lib/content';

/** S10 — quick contact + estimate form (full form + map live on /contact). */
export default function ContactSection() {
  return (
    <section className="section section--navy" id="contact" aria-labelledby="contact-h">
      <span className="utility-anchor" id="estimate" />
      <div className="container">
        <div className="contact__grid">
          <div>
            <span className="ornament" aria-hidden="true" />
            <span className="eyebrow">Get in Touch</span>
            <Reveal as="h2" className="display-h heading-spaced">
              <span id="contact-h">
                Let&rsquo;s Get to <em>Work</em>
              </span>
            </Reveal>
            <p className="lead">{contact.intro}</p>

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
            <LeadForm variant="estimate" />
          </div>
        </div>
      </div>
    </section>
  );
}
