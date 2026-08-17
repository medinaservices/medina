'use client';

import { useState, useEffect } from 'react';
import Logo from './Logo';
import SectionLink from './SectionLink';
import { nav } from '@/lib/content';
import { Chevron, Menu, Close } from '@/lib/icons';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll(); // honor initial scroll position (e.g. on reload mid-page)
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`.trim()}>
      <div className="container container-wide nav__inner">
        <Logo />

        <nav aria-label="Primary">
          <ul className={`nav__links ${open ? 'is-open' : ''}`.trim()}>
            {nav.links.map((link) =>
              link.children ? (
                <li className="nav__group" key={link.label}>
                  <SectionLink className="nav__link" href={link.href}>
                    {link.label}
                    <Chevron width={16} height={16} style={{ display: 'inline', verticalAlign: 'middle' }} />
                  </SectionLink>
                  <div className="nav__dropdown">
                    {link.children.map((child) => (
                      <SectionLink key={child.href} href={child.href} onClick={closeMenu}>
                        {child.label}
                      </SectionLink>
                    ))}
                  </div>
                </li>
              ) : (
                <li key={link.label} onClick={closeMenu}>
                  <SectionLink className="nav__link" href={link.href}>
                    {link.label}
                  </SectionLink>
                </li>
              )
            )}
            <li className="nav__cta-mobile">
              <SectionLink className="btn btn--primary" href={nav.cta.href} onClick={closeMenu}>
                {nav.cta.label}
              </SectionLink>
            </li>
          </ul>
        </nav>

        <SectionLink className="btn btn--primary nav__cta-desktop" href={nav.cta.href}>
          {nav.cta.label}
        </SectionLink>

        <button
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
