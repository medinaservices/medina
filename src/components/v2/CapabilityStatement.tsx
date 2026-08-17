import Reveal from '@/components/Reveal';
import { company } from '@/lib/content';

/**
 * Govcon "capability statement" panel — credentials as on-the-record spec data.
 * All values straight from the copy / company facts (no fabrication).
 */
const cells: { k: string; v: string }[] = [
  { k: 'License', v: 'Virginia Class A · #2705196283' },
  { k: 'SAM.gov UEI', v: 'LXG1KCA49SG1' },
  { k: 'CAGE Code', v: '88GC1' },
  { k: 'Business Status', v: 'Minority-Owned Small Business' },
  { k: 'Virginia SWaM', v: 'Certified · #844821' },
  { k: 'Certifications', v: '8(a) — In Progress' },
  { k: 'In Operation Since', v: String(company.since) },
];

export default function CapabilityStatement() {
  return (
    <section className="section" id="capability" aria-labelledby="capability-h">
      <div className="container">
        <div className="v2-capab__head">
          <div>
            <span className="v2-eyebrow">Capability Statement</span>
            <h2 className="h2 heading-spaced" id="capability-h">
              Credentials, on the record.
            </h2>
          </div>
        </div>
        <div className="v2-capab__grid">
          {cells.map((c, i) => (
            <Reveal className="v2-capab__cell" key={c.k} index={i % 3}>
              <span className="v2-capab__k">{c.k}</span>
              <span className="v2-capab__v">{c.v}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
