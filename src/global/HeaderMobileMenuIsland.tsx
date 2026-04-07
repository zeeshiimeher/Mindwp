'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

import { PrimaryCta } from '@/components/PrimaryCta';
import { buildGlobalContactHref } from '@/lib/contact/contactHref';

type HeaderMobileMenuIslandProps = {
  navLinks: Array<{ label: string; to: string }>;
};

export function HeaderMobileMenuIsland({ navLinks }: HeaderMobileMenuIslandProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const globalContactHref = buildGlobalContactHref();

  return (
    <>
      <button
        className='header-mobile-toggle md:hidden p-2 rounded-lg transition-colors'
        onClick={() => setMobileMenuOpen(open => !open)}
        aria-label='Toggle menu'
      >
        {mobileMenuOpen ? (
          <X className='icon-text-primary' />
        ) : (
          <Menu className='icon-text-primary' />
        )}
      </button>

      {mobileMenuOpen && (
        <div className='header-mobile-menu md:hidden py-4 border-t'>
          <nav className='header-mobile-nav l-row flex-col'>
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.to}
                className={`header-mobile-link header-mobile-link-${index + 1} py-2 transition-colors`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className='header-mobile-cta l-row flex-col l-gap-3 pt-4 border-t'>
              <a
                href={globalContactHref}
                className='btn btn-outline btn-small btn-block header-mobile-button-1'
              >
                Contact Us
              </a>
              <PrimaryCta
                className='btn btn-primary btn-small btn-block header-mobile-button-2'
                hrefOverride={globalContactHref}
              />
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
