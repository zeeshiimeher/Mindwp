import type { AnchorHTMLAttributes, ReactNode } from 'react';

import { PrimaryCta } from '@/components/PrimaryCta';
import { buildGlobalContactHref } from '@/lib/contact/contactHref';
import { getPrimaryNavigationEntries } from '@/lib/content-quality/inventory';

import { HeaderMobileMenuIsland } from './HeaderMobileMenuIsland';
import { Logo } from './Logo';

type InternalLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: string;
  children: ReactNode;
};

function InternalLink({ href, children, ...props }: InternalLinkProps) {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}

const PRIMARY_NAV_PATHS = [
  '/services',
  '/features',
  '/industries',
  '/case-studies',
  '/blog',
] as const;

export async function Header() {
  const globalContactHref = buildGlobalContactHref();
  const inventoryEntries = await getPrimaryNavigationEntries(PRIMARY_NAV_PATHS);
  const navLinks = inventoryEntries.map(entry => ({
    label: entry.title.replace(/^MindWP\s+/i, ''),
    to: entry.path,
  }));

  return (
    <header className='header sticky top-0 z-50 bg-white border-b shadow-sm'>
      <div className='header-container l-container'>
        <div className='header-content l-row l-items-center l-justify-between h-16'>
          {/* Logo */}
          <div className='header-logo l-row l-items-center'>
            <InternalLink href='/' className='header-logo-link hover:opacity-80 transition-opacity'>
              <Logo />
            </InternalLink>
          </div>

          {/* Desktop Navigation */}
          <nav className='header-nav md:l-row hidden l-items-center l-gap-8'>
            {navLinks.map((link, index) => (
              <InternalLink
                key={link.label}
                href={link.to}
                className={`link-primary header-nav-link header-nav-link-${index + 1} transition-colors`}
              >
                {link.label}
              </InternalLink>
            ))}
          </nav>

          {/* CTA Buttons */}
          <nav className='header-nav md:l-row hidden l-items-center l-gap-6'>
            <InternalLink
              href={globalContactHref}
              className='btn btn-outline btn-small header-button-1'
            >
              Contact Us
            </InternalLink>
            <PrimaryCta
              className='btn btn-primary btn-small header-button-2'
              hrefOverride={globalContactHref}
            />
          </nav>

          <HeaderMobileMenuIsland navLinks={navLinks} />
        </div>
      </div>
    </header>
  );
}
