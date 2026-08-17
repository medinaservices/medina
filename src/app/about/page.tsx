import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import Button from '@/components/Button';
import SlotImage from '@/components/SlotImage';
import { about } from '@/lib/content';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Medina Services, LLC — a Virginia Class A Licensed, family-owned and minority-owned contracting firm serving Northern Virginia since 2016. Owner-accountable, faith-led, craftsmanship-driven.',
  // Resolves against metadataBase, so every host this is deployed to (preview URLs,
  // *.vercel.app) points search engines at the real domain instead of competing with it.
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <section className="section section--alt" aria-labelledby="creds-h">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Government Contracting</span>
            <h2 className="h2" id="creds-h">Credentials &amp; registrations</h2>
            <p>Registered, licensed, and contract-ready for commercial and government work.</p>
          </div>
          <ul className="creds">
            <li className="creds__item">
              <span className="creds__label">Virginia Class A License</span>
              <span className="creds__val">#2705196283</span>
            </li>
            <li className="creds__item">
              <span className="creds__label">Unique Entity ID (UEI)</span>
              <span className="creds__val">LXG1KCA49SG1</span>
            </li>
            <li className="creds__item">
              <span className="creds__label">CAGE Code</span>
              <span className="creds__val">88GC1</span>
            </li>
            <li className="creds__item">
              <span className="creds__label">Business Status</span>
              <span className="creds__val">Small, Minority-Owned Business</span>
            </li>
            <li className="creds__item">
              <span className="creds__label">Virginia SWaM</span>
              <span className="creds__val">Certified — #844821</span>
            </li>
            <li className="creds__item">
              <span className="creds__label">Certifications</span>
              <span className="creds__val">8(a) — in progress</span>
            </li>
            <li className="creds__item">
              <span className="creds__label">SAM.gov</span>
              <span className="creds__val">Registered &amp; active</span>
            </li>
          </ul>
          <div className="btn-row">
            <a
              className="btn btn--primary"
              href="/Medina-Services-Government-Capability-Statement.pdf"
              target="_blank"
              rel="noopener"
            >
              Download Capability Statement (PDF)
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="svc">
            <div className="svc__media">
              <Reveal variant="clip">
                <SlotImage slot="IMG-A1" ratio="4 / 3" priority sizes="(max-width: 900px) 100vw, 50vw" />
              </Reveal>
            </div>
            <div className="svc__body">
              <span className="eyebrow">{about.storyHeading}</span>
              {/* Page h1: the About hero was removed at the client's request (2026-08-13),
                  so the story heading carries the document title. Styled as .h2 — no visual change. */}
              <Reveal as="h1" className="h2" index={1}>
                Keeping properties performing at their best.
              </Reveal>
              <div className="prose">
                {about.story.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What Drives Us</span>
            <h2 className="h2">Built on values, delivered with accountability</h2>
          </div>
          <div className="cards">
            {about.values.map((v, i) => (
              <Reveal className="card" key={v.title} index={i}>
                <h3 className="h3">{v.title}</h3>
                <p>{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <div className="company__grid">
            <div>
              <span className="eyebrow">Ready When You Are</span>
              <Reveal as="h2" className="h2">
                Let&rsquo;s get to work on your property.
              </Reveal>
              <div className="btn-row btn-row--spaced">
                <Button href="/#estimate" variant="on-navy" withArrow>
                  Request a Free Estimate
                </Button>
                <Button href="/contact" variant="outline-light">
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="company__media">
              <Reveal variant="clip" index={1}>
                <SlotImage slot="IMG-A2" ratio="4 / 5" sizes="(max-width: 900px) 100vw, 40vw" />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
