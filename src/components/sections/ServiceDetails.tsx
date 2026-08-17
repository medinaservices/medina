import Reveal from '@/components/Reveal';
import Button from '@/components/Button';
import SlotImage from '@/components/SlotImage';
import { serviceDetails } from '@/lib/content';

/** S4–S6 — three service-line detail sections, alternating image side.
 *  Layout: 2 zones.
 *  Zone 1: 50/50 grid — full-height cover image / intro text (heading + paragraphs).
 *  Zone 2: full-width hairline bullet grid + CTA block below.
 */
export default function ServiceDetails() {
  return (
    <>
      {serviceDetails.map((svc, i) => {
        const flip = i % 2 === 1;
        const num = String(i + 1).padStart(2, '0');
        return (
          <section
            className={`section ${flip ? 'section--alt' : ''}`}
            id={svc.id}
            key={svc.id}
            aria-labelledby={`${svc.id}-h`}
          >
            <div className="container">

              {/* Blueprint header strip — index node links back to the S3 card */}
              <div className="svc-rail">
                <span className="svc-rail__node" aria-hidden="true">{num}</span>
                <span className="svc-rail__label">{svc.label}</span>
                <span className="svc-rail__line" aria-hidden="true" />
              </div>

              {/* Zone 1: image + intro */}
              <div className={`svc ${flip ? 'svc--flip' : ''}`}>
                <div className="svc__media">
                  <Reveal variant="clip">
                    <SlotImage
                      slot={svc.image}
                      sizes="(max-width: 900px) 100vw, 50vw"
                      objectPosition={svc.imagePosition}
                    />
                  </Reveal>
                </div>

                <div className="svc__body">
                  <Reveal as="h2" className="display-h" index={1}>
                    <span id={`${svc.id}-h`}>
                      {(() => {
                        const [b, a] = svc.h2.split(svc.accent);
                        return (
                          <>
                            {b}<em>{svc.accent}</em>{a}
                          </>
                        );
                      })()}
                    </span>
                  </Reveal>
                  <div className="prose svc__prose">
                    {svc.paragraphs.map((p) => (
                      <p key={p.slice(0, 24)}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Zone 2: capability list */}
              <ul className="svc__bullets">
                {svc.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              {/* Zone 3: CTA */}
              <div className="svc__cta">
                <p>{svc.ctaLead}</p>
                <div className="svc__cta-row">
                  {svc.ctas.map((cta, idx) => (
                    <Button
                      key={cta.label}
                      href={cta.href}
                      variant={idx === 0 ? 'primary' : 'secondary'}
                      withArrow={idx === 0}
                    >
                      {cta.label}
                    </Button>
                  ))}
                </div>
              </div>

            </div>
          </section>
        );
      })}
    </>
  );
}
