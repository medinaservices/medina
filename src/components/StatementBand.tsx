import Reveal from '@/components/Reveal';
import Button from '@/components/Button';

/**
 * Full-bleed "billboard" statement band — the brand guide's signature editorial moment
 * (taglines p7/p12/p14). Lead in light Raleway, emphasis in large Cormorant Garamond,
 * revealed with a clip-path mask-wipe.
 * Optional `figure` (a filename in /public/images) renders a transparent-PNG cutout at
 * bottom-right via background-image — so a missing asset degrades gracefully (no broken img).
 * Optional `cta` turns the band into a call to action (white button, high contrast).
 */
export default function StatementBand({
  lead,
  emphasis,
  support,
  tone = 'navy',
  figure,
  cta,
}: {
  lead: string;
  emphasis: string;
  support?: string;
  tone?: 'navy' | 'green';
  figure?: string;
  cta?: { label: string; href: string };
}) {
  return (
    <section
      className={`statement statement--${tone}${figure ? ' statement--figure' : ''}`}
      aria-label={`${lead} ${emphasis}`}
    >
      <div className="container statement__inner">
        <div className="statement__text">
          <p className="statement__lead">{lead}</p>
          <Reveal as="p" variant="clip" className="statement__emphasis">
            {emphasis}
          </Reveal>
          {support && (
            <Reveal as="p" className="statement__support" index={1}>
              {support}
            </Reveal>
          )}
          {cta && (
            <div className="statement__cta">
              <Button href={cta.href} variant="on-navy" withArrow>
                {cta.label}
              </Button>
            </div>
          )}
        </div>
      </div>
      {figure && (
        <div
          className="statement__figure"
          style={{ backgroundImage: `url(/images/${figure})` }}
          aria-hidden="true"
        />
      )}
    </section>
  );
}
