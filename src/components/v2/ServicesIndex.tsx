import Reveal from '@/components/Reveal';
import Button from '@/components/Button';
import { servicesOverview } from '@/lib/content';

/** Services as a spec-sheet index (numbered rows) instead of a card grid. */
export default function ServicesIndex() {
  return (
    <section className="section section--alt" id="services" aria-labelledby="services-h">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">What We Do</span>
          <h2 className="h2" id="services-h">
            {servicesOverview.h2}
          </h2>
          <p className="lead">{servicesOverview.intro}</p>
        </div>

        <div className="v2-index">
          {servicesOverview.cards.map((card, i) => (
            <Reveal className="v2-index__row" key={card.title} index={i}>
              <span className="v2-index__num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="v2-index__title">{card.title}</span>
              <p className="v2-index__desc">{card.body}</p>
              <span className="v2-index__cta">
                <Button href={card.href} variant="ghost">
                  Details
                </Button>
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
