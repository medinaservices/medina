/**
 * Line icons — single-weight, rounded joins, navy/white via currentColor.
 * Matches the brand guide iconography (p11): functional, minimal, no fills.
 * 24px grid, ~1.6 stroke. Decorative by default (aria-hidden); pass a `title` for meaning.
 */
import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { title?: string };

function Base({ title, children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

export const Tree = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 22v-6" />
    <path d="M12 16c-3 0-5-2-5-4.5C7 9 8.5 7.5 9 7c0-2 1.5-3.5 3-3.5S15 5 15 7c.5.5 2 2 2 4.5C17 14 15 16 12 16Z" />
  </Base>
);

export const Gear = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8l1.8-1.8M18 6l1.8-1.8" />
  </Base>
);

export const Building = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 22V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v18" />
    <path d="M15 9h3a1 1 0 0 1 1 1v12" />
    <path d="M3 22h18" />
    <path d="M8 7h2M8 11h2M8 15h2" />
  </Base>
);

export const Shield = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </Base>
);

export const Badge = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="9" r="5" />
    <path d="m9 13-1.5 7L12 18l4.5 2L15 13" />
  </Base>
);

export const Handshake = (p: IconProps) => (
  <Base {...p}>
    <path d="M11 17 8.5 14.5a1.8 1.8 0 0 1 2.5-2.6l1.5 1.4" />
    <path d="m13 8 3-2 5 4-2 6-2-1" />
    <path d="M3 10 8 6l4 3" />
    <path d="m12 13 2 2 1.5-1" />
  </Base>
);

export const Arrow = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </Base>
);

export const Chevron = (p: IconProps) => (
  <Base {...p}>
    <path d="m6 9 6 6 6-6" />
  </Base>
);

export const Phone = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 4h3l2 5-2 1.5a11 11 0 0 0 5 5L16 13l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </Base>
);

export const Mail = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="5" width="18" height="14" rx="1" />
    <path d="m3 7 9 6 9-6" />
  </Base>
);

export const Pin = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 22c4-4 7-7.5 7-11a7 7 0 1 0-14 0c0 3.5 3 7 7 11Z" />
    <circle cx="12" cy="11" r="2.5" />
  </Base>
);

export const Menu = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </Base>
);

export const Close = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Base>
);

export const icons = {
  tree: Tree,
  gear: Gear,
  building: Building,
  shield: Shield,
  badge: Badge,
  handshake: Handshake,
  arrow: Arrow,
} as const;

export type IconName = keyof typeof icons;

export function Icon({ name, ...props }: { name: IconName } & IconProps) {
  const Cmp = icons[name] ?? Building;
  return <Cmp {...props} />;
}
