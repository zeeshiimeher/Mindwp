'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

import { buildGlobalPrimaryCtaLinks } from '@/lib/cta/primaryAction';

type HeaderMobileMenuIslandProps = {
  navLinks: Array<{ label: string; to: string }>;
};

export function HeaderMobileMenuIsland({ navLinks }: HeaderMobileMenuIslandProps) {
  const [open, setOpen] = useState(false);
  const { primaryAction } = buildGlobalPrimaryCtaLinks();

  // Close on Escape, and lock body scroll when open.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <button
        type='button'
        className='header__mobile-toggle'
        onClick={() => setOpen(value => !value)}
        aria-expanded={open}
        aria-controls='header-mobile-panel'
        aria-label={open ? 'Close menu' : 'Open menu'}
      >
        {open ? <X aria-hidden='true' /> : <Menu aria-hidden='true' />}
      </button>

      {open && (
        <div id='header-mobile-panel' className='header__mobile-panel'>
          <nav className='header__mobile-nav' aria-label='Mobile primary'>
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.to}
                className='header__mobile-link'
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className='header__mobile-cta'>
              <a
                href={primaryAction.href}
                className='mw-btn mw-btn--primary'
                onClick={() => setOpen(false)}
              >
                {primaryAction.label}
                <span className='mw-btn__dot' aria-hidden='true' />
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
