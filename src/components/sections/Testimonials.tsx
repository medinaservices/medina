import Reveal from '@/components/Reveal';
import { testimonials, serves } from '@/lib/content';

/** S9 — Track record. Renders the client-quote grid. While `isPlaceholder` is true the
 * quotes are SAMPLE content (shown for layout) and a discreet note flags that; swap in
 * real reviews (or hide the section) before launch. Sectors served stay as factual proof. */
export default function Testimonials() {
  return (
    <section className="section" id="testimonials" aria-labelledby="testimonials-h">
      <div className="container container-wide">
        <div className="quote-head">
          <span className="ornament" aria-hidden="true" />
          <span className="eyebrow">Track Record</span>
          <h2 className="display-h" id="testimonials-h">
            What Our Clients <em>Say</em>
          </h2>
        </div>

        <ul className="quote-grid">
          {testimonials.quotes.map((q, i) => (
            <Reveal as="li" className="quote-card" key={q.attribution} index={i}>
              <span className="quote-card__mark" aria-hidden="true">&ldquo;</span>
              <blockquote className="quote-card__text">{q.quote}</blockquote>
              <figcaption className="quote-card__by">{q.attribution}</figcaption>
            </Reveal>
          ))}
        </ul>

        <div className="quote-foot">
          <ul className="quote__sectors" aria-label="Client sectors served">
            {serves.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
