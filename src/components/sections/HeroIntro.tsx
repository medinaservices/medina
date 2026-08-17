import Reveal from '@/components/Reveal';
import { heroBanner, credentials } from '@/lib/content';

/**
 * Section directly beneath the hero. Pairs the brand's primary tagline + hero
 * statement (Brand Guidelines p.8 / p.13) with the credentials the
 * commercial/government audience scans for (p.19 — "feature credentials prominently").
 * Replaces the former TrustBar marquee: same credibility signals, now a real section.
 */
export default function HeroIntro() {
  return (
    <section className="intro" aria-label="Quality craftsmanship backed by people you trust">
      <div className="container intro__inner">
        <div className="intro__statement">
          <Reveal as="p" className="intro__lead" index={0}>
            {heroBanner.lead}
          </Reveal>
          <Reveal as="p" variant="clip" className="intro__emphasis" index={1}>
            {heroBanner.emphasis}
          </Reveal>
          <Reveal as="p" className="intro__support" index={2}>
            {heroBanner.support}
          </Reveal>
        </div>

        <Reveal as="ul" className="intro__creds" index={3}>
          {credentials.map((c) => (
            <li key={c.label} className="intro__cred">
              <span className="intro__cred-label">{c.label}</span>
              {c.code && <span className="intro__cred-code">{c.code}</span>}
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
