import Parallax from '@/components/Parallax';
import Reveal from '@/components/Reveal';
import SlotImage from '@/components/SlotImage';
import Button from '@/components/Button';
import { hero } from '@/lib/content';

/**
 * Hero — full-bleed documentary photo with the H1 statement overlaid, left-aligned.
 * H1 words are verbatim from the closed copy; "Trusted Contractor" set in Cormorant
 * italic (light-blue for contrast over the photo). Left-weighted navy scrim for legibility.
 */
export default function Hero() {
  const phrase = 'Trusted Contractor';
  const [before, after] = hero.h1.split(phrase);

  return (
    <section className="hero" id="top">
      <div className="hero__media">
        <Parallax amount={40}>
          <SlotImage slot="IMG-01" fill priority sizes="100vw" />
        </Parallax>
      </div>

      <div className="container hero__inner">
        <Reveal as="p" className="eyebrow hero__eyebrow" index={0}>
          Licensed &amp; Insured · Minority-Owned · Owner-Accountable
        </Reveal>
        <Reveal as="h1" className="hero__title" index={1}>
          {before}
          <em>{phrase}</em>
          {after}
        </Reveal>
        <Reveal as="p" className="hero__sub" index={2}>
          {hero.sub}
        </Reveal>
        <Reveal className="hero__ctas" index={3}>
          <Button href={hero.primaryCta.href} variant="on-navy" withArrow>
            {hero.primaryCta.label}
          </Button>
          <Button href={hero.secondaryCta.href} variant="outline-light">
            {hero.secondaryCta.label}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
