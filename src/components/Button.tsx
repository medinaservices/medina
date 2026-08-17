import Link from 'next/link';
import type { ReactNode } from 'react';
import { Arrow } from '@/lib/icons';

type Variant = 'primary' | 'secondary' | 'on-navy' | 'outline-light' | 'ghost';

export default function Button({
  href,
  children,
  variant = 'primary',
  withArrow = false,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  withArrow?: boolean;
}) {
  const className = `btn btn--${variant}`;
  const content = (
    <>
      {children}
      {(withArrow || variant === 'ghost') && <Arrow />}
    </>
  );

  // Hash anchors stay on the page (smooth scroll); routes use next/link.
  const isHash = href.startsWith('#');
  if (isHash) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
