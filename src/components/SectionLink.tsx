'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode, MouseEventHandler } from 'react';

/**
 * A nav/footer link that targets a homepage section. In-page hash anchors (#section) only
 * resolve on the home page; from /about, /contact, etc. they must point at /#section.
 * This resolves the correct form based on the current route, so the same links work everywhere
 * (smooth in-page scroll on home; navigate-then-scroll elsewhere).
 */
export default function SectionLink({
  href,
  className,
  onClick,
  children,
}: {
  href: string;
  className?: string;
  onClick?: MouseEventHandler;
  children: ReactNode;
}) {
  const pathname = usePathname();

  if (href.startsWith('#')) {
    const resolved = pathname === '/' ? href : `/${href}`;
    return (
      <a className={className} href={resolved} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href} onClick={onClick}>
      {children}
    </Link>
  );
}
