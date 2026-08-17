import Link from 'next/link';

/**
 * Brand logo (real client assets in /public/logo). Full-color on light grounds (nav),
 * white reversed on navy (footer). Per brand guide: use as supplied, no recolor/effects.
 */
export default function Logo({ variant = 'color' }: { variant?: 'color' | 'white' }) {
  const src = variant === 'white' ? '/logo/white.svg' : '/logo/full-color.svg';
  return (
    <Link href="/" className="logo" aria-label="Medina Services, LLC — home">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="Medina Services, LLC" className="logo__img" width={66} height={53} />
    </Link>
  );
}
