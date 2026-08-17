import Reveal from '@/components/Reveal';
import SlotImage from '@/components/SlotImage';
import { Chevron } from '@/lib/icons';
import { servicesOverview, whoWeServe } from '@/lib/content';

/** S3 — Services overview. Each card carries the index number + the same documentary
 * photo as its detail section below (image echo), linking overview → detail. */
export default function ServicesOverview() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head">
          <span className="ornament" aria-hidden="true" />
          <span className="eyebrow">Our Services</span>
          <h2 className="display-h">
            What We <em>Do</em>
          </h2>
          <p className="lead">{servicesOverview.intro}</p>
        </div>

        <div className="svc-grid">
          {servicesOverview.cards.map((card, i) => {
            const num = String(i + 1).padStart(2, '0');
            return (
              <Reveal className="svc-cell" key={card.title} index={i}>
                <a className="svc-cell__link" href={card.href} aria-label={`Learn more about ${card.title}`}>
                  <span className="svc-cell__thumb">
                    <SlotImage slot={card.image} ratio="16 / 10" sizes="(max-width: 760px) 100vw, 33vw" />
                    <span className="svc-cell__index" aria-hidden="true">{num}</span>
                  </span>
                  <span className="svc-cell__head">
                    <span className="svc-cell__icon" aria-hidden="true">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`/icons/${card.icon}.png`} alt="" />
                    </span>
                    <h3 className="svc-cell__title">
                      {card.titleLines.map((line, n) => (
                        <span key={line}>
                          {n > 0 && <br />}
                          {line}
                        </span>
                      ))}
                    </h3>
                  </span>
                  <span className="svc-cell__body">{card.body}</span>
                  <span className="svc-cell__more">
                    Learn More
                    <Chevron />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>

        {/* Who We Serve — audience segments, directly under the service lines */}
        <Reveal className="svc__serve">
          <h3 className="svc__serve-label">{whoWeServe.h3}</h3>
          <ul className="svc__serve-list">
            {whoWeServe.items.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
