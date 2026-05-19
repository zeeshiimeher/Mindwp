import { getPrimaryNavigationEntries } from '@/lib/content-quality/inventory';
import { buildGlobalPrimaryCtaLinks } from '@/lib/cta/primaryAction';

import { HeaderMobileMenuIsland } from './HeaderMobileMenuIsland';
import { InternalLink } from './InternalLink';
import { Logo } from './Logo';

const PRIMARY_NAV_PATHS = ['/services', '/industries', '/resources', '/contact'] as const;

export async function Header() {
  const { primaryAction } = buildGlobalPrimaryCtaLinks();
  const inventoryEntries = await getPrimaryNavigationEntries(PRIMARY_NAV_PATHS);
  const navLinks = inventoryEntries.map(entry => ({
    label: entry.title.replace(/^MindWP\s+/i, ''),
    to: entry.path,
  }));

  return (
    <header className='header'>
      <div className='mw-container header__inner'>
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
          <a href={primaryAction.href} className='mw-btn mw-btn--primary'>
            {primaryAction.label}
            <span className='mw-btn__dot' aria-hidden='true' />
          </a>
        </div>

        <HeaderMobileMenuIsland navLinks={navLinks} />
      </div>
    </header>
  );
}
