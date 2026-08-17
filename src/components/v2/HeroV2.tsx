import Reveal from '@/components/Reveal';
import SlotImage from '@/components/SlotImage';
import Button from '@/components/Button';
import { hero } from '@/lib/content';

export default function HeroV2() {
  const phrase = 'Trusted Contractor';
  const [before, after] = hero.h1.split(phrase);
  return (
    <section className="v2-hero" id="top">
      <div className="container container-wide">
        <div className="v2-hero__grid">
          <div className="v2-hero__content">
            <Reveal as="p" className="v2-eyebrow" index={0}>
              Licensed · Minority-Owned · Government-Ready
            </Reveal>
            <Reveal as="h1" className="v2-hero__title" index={1}>
              {before}
              <em>{phrase}</em>
              {after}
            </Reveal>
            <Reveal as="p" className="v2-hero__sub" index={2}>
              {hero.sub}
            </Reveal>
            <Reveal className="v2-hero__ctas" index={3}>
              <Button href={hero.primaryCta.href} variant="primary" withArrow>
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} variant="secondary">
                {hero.secondaryCta.label}
              </Button>
            </Reveal>
          </div>
          <div className="v2-hero__media">
            <SlotImage slot="IMG-01" fill priority sizes="(max-width: 900px) 100vw, 50vw" />
            <span className="v2-hero__tag">VA Class A Licensed · SAM.gov Registered</span>
          </div>
        </div>
      </div>
    </section>
  );
}
