import { credentials } from '@/lib/content';

const items = credentials.map(c => (c.code ? `${c.label} ${c.code}` : c.label));

function TrackRow({ hidden }: { hidden?: boolean }) {
  return (
    <ul className="trust__row" aria-hidden={hidden || undefined}>
      {items.map((text) => (
        <li key={text} className="trust__item">
          <span className="trust__text">{text}</span>
          <span className="trust__sep" aria-hidden="true">·</span>
        </li>
      ))}
    </ul>
  );
}

export default function TrustBar() {
  return (
    <section className="trust" aria-label="Credentials and certifications">
      {/* Screen-reader version — static, visible to AT only */}
      <ul className="sr-only">
        {items.map((text) => <li key={text}>{text}</li>)}
      </ul>

      {/* Visual marquee — two identical rows for seamless loop */}
      <div className="trust__track" aria-hidden="true">
        <TrackRow />
        <TrackRow hidden />
      </div>
    </section>
  );
}
