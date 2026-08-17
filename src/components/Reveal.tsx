'use client';

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  /** 'fade' = materialize fade-up · 'clip' = clip-path wipe (images/statements) */
  variant?: 'fade' | 'clip';
  /** stagger index → CSS --i (×70/90ms) */
  index?: number;
  as?: ElementType;
  className?: string;
};

/**
 * Scroll-reveal by POSITION (not scroll-speed): IntersectionObserver toggles
 * `.is-visible` once, then unobserves. CSS (globals.css) owns the transition and
 * the prefers-reduced-motion fallback (jump to final state). No-JS users see content
 * via the <noscript> override in layout.tsx. See design/Motion-Principles.md.
 */
export default function Reveal({
  children,
  variant = 'fade',
  index = 0,
  as,
  className,
}: RevealProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag = (as ?? 'div') as any; // dynamic element; ref/style props vary by tag
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Robustness: never leave content permanently hidden.
    // Reduced motion or no IO support → show immediately.
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    // Already in (or above) the viewport on mount → show now, no wait.
    if (el.getBoundingClientRect().top < (window.innerHeight || 0)) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    // Safety net: reveal anything still hidden after a short window (covers
    // full-page screenshot tools and any IO edge case). Reveal-once, so harmless.
    const safety = window.setTimeout(() => setVisible(true), 2500);
    return () => {
      io.disconnect();
      window.clearTimeout(safety);
    };
  }, []);

  const classes = [className, visible ? 'is-visible' : null].filter(Boolean).join(' ');

  return (
    <Tag
      ref={ref}
      className={classes || undefined}
      data-reveal={variant === 'clip' ? 'clip' : ''}
      style={{ ['--i' as string]: index } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
