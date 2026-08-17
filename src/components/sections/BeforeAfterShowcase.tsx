import Reveal from '@/components/Reveal';
import BeforeAfter from '@/components/BeforeAfter';
import { beforeAfter } from '@/lib/content';

/** Before & After — interactive comparison sliders for real project pairs. */
export default function BeforeAfterShowcase() {
  return (
    <section className="section section--alt" id="before-after" aria-labelledby="ba-h">
      <div className="container">
        <div className="section-head">
          <span className="ornament" aria-hidden="true" />
          <span className="eyebrow">Proof of Work</span>
          <h2 className="display-h" id="ba-h">
            Before &amp; <em>After</em>
          </h2>
          <p className="lead">{beforeAfter.intro}</p>
        </div>

        <div className="ba-grid">
          {beforeAfter.pairs.map((p, i) => (
            <Reveal key={p.after} index={i}>
              <BeforeAfter {...p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
