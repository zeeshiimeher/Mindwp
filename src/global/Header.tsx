import type { AnchorHTMLAttributes, ReactNode } from 'react';

import { getPrimaryNavigationEntries } from '@/lib/content-quality/inventory';
import { buildGlobalPrimaryCtaLinks } from '@/lib/cta/primaryAction';

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
  const { primaryAction } = buildGlobalPrimaryCtaLinks();
  const inventoryEntries = await getPrimaryNavigationEntries(PRIMARY_NAV_PATHS);
  const navLinks = inventoryEntries.map(entry => ({
    label: entry.title.replace(/^MindWP\s+/i, ''),
    to: entry.path,
  }));

  return (
    <header className='header'>
      <div className='rd-container header__inner'>
        <InternalLink href='/' className='header__brand' aria-label='MindWP home'>
          <Logo />
        </InternalLink>

        <nav className='header__nav' aria-label='Primary'>
          {navLinks.map(link => (
            <InternalLink key={link.label} href={link.to} className='header__nav-link'>
              {link.label}
            </InternalLink>
          ))}
        </nav>

        <div className='header__actions'>
          <a href={primaryAction.href} className='rd-btn rd-btn--primary'>
            {primaryAction.label}
          </a>
        </div>

        <HeaderMobileMenuIsland navLinks={navLinks} />
      </div>
    </header>
  );
}
