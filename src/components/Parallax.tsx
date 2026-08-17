'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/**
 * Subtle parallax on large work photography only (never text). Scroll-linked via rAF,
 * small range, eased by the browser's compositor (transform: translate3d). Fully disabled
 * under prefers-reduced-motion. See design/Motion-Principles.md.
 */
export default function Parallax({
  children,
  amount = 40,
  className,
}: {
  children: ReactNode;
  /** max travel in px (range ≈ ±amount/2) */
  amount?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // progress: -1 (below view) → 1 (above view), 0 when centered
      const progress = (rect.top + rect.height / 2 - vh / 2) / (vh / 2 + rect.height / 2);
      const py = Math.max(-1, Math.min(1, progress)) * (amount / 2);
      el.style.setProperty('--py', `${py.toFixed(1)}px`);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        raf = requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [amount]);

  return (
    <div ref={ref} className={`parallax-img ${className ?? ''}`.trim()}>
      {children}
    </div>
  );
}
