import Reveal from '@/components/Reveal';
import SlotImage from '@/components/SlotImage';
import Button from '@/components/Button';
import { recentWork } from '@/lib/content';

/** SW — Recent Work: uniform 4:5 captioned card grid (documentary imagery).
 * Each card carries its service-line category + a factual one-line descriptor. */
export default function RecentWork() {
  return (
    <section className="section" id="recent-work" aria-labelledby="recent-work-h">
      <div className="container container-wide">
        <div className="section-head">
          <span className="ornament" aria-hidden="true" />
          <span className="eyebrow">Our Portfolio</span>
          <Reveal as="h2" className="display-h">
            <span id="recent-work-h">
              Recent <em>Work</em>
            </span>
          </Reveal>
          <Reveal as="p" className="lead" index={1}>
            {recentWork.intro}
          </Reveal>
        </div>

        <ul className="gallery">
          {recentWork.items.map((item, i) => (
            <Reveal as="li" className="gallery__item" key={item.slot} index={i % 3}>
              <figure className="work-card">
                <span className="work-card__media">
                  <SlotImage
                    slot={item.slot}
                    ratio="4 / 3"
                    sizes="(max-width: 560px) 100vw, (max-width: 960px) 50vw, 33vw"
                  />
                </span>
                <figcaption className="work-card__caption">
                  <span className="work-card__category">{item.category}</span>
                  <span className="work-card__desc">{item.caption}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>

        <div className="gallery__cta">
          <Button href={recentWork.cta.href} variant="primary" withArrow>
            {recentWork.cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
