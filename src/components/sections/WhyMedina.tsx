import Reveal from '@/components/Reveal';
import SlotImage from '@/components/SlotImage';
import { whyMedina } from '@/lib/content';

/** S8 — differentiators. Sticky documentary image (left) + single-column numbered
 * list (right). Credential codes in each title are split off into a muted secondary line. */
export default function WhyMedina() {
  return (
    <section className="section section--alt" id="why" aria-labelledby="why-h">
      <span className="utility-anchor" />
      <div className="container container-wide">
        <div className="section-head">
          <span className="ornament" aria-hidden="true" />
          <span className="eyebrow">{whyMedina.label}</span>
          <Reveal as="h2" className="display-h">
            <span id="why-h">
              Built for Residential, Commercial &amp; <em>Government</em> Clients
            </span>
          </Reveal>
          <Reveal as="p" className="lead" index={1}>
            {whyMedina.intro}
          </Reveal>
        </div>

        <div className="why__layout">
          <div className="why__media">
            <div className="why__media-inner">
              <Reveal variant="clip">
                <SlotImage slot="IMG-A1" ratio="4 / 5" sizes="(max-width: 900px) 100vw, 40vw" />
              </Reveal>
            </div>
          </div>

          <ol className="why__list">
            {whyMedina.blocks.map((block, i) => {
              const [name, code] = block.title.split(' — ');
              return (
                <Reveal as="li" className="why__row" key={block.title} index={i}>
                  <span className="why__row-num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="why__row-text">
                    <h3 className="why__row-title">{name}</h3>
                    {code && <span className="why__code">{code}</span>}
                    <p>{block.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
