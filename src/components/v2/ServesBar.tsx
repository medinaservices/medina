import { Building } from '@/lib/icons';
import { serves } from '@/lib/content';

/** Full-bleed "Built for" audience segmentation (ui-ux-pro-max "Enterprise Gateway" idea). */
export default function ServesBar() {
  return (
    <section className="v2-serves" aria-label="Who we serve">
      <span className="v2-serves__label">
        <Building width={18} height={18} /> Built for
      </span>
      {serves.map((s) => (
        <span className="v2-serves__item" key={s}>
          {s}
        </span>
      ))}
    </section>
  );
}
