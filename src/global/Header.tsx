import type { AnchorHTMLAttributes, ReactNode } from 'react';

import { PrimaryCta } from '@/components/PrimaryCta';

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

export function Header() {
  const navLinks = [
    { label: 'Services', to: '/services' },
    { label: 'Features', to: '/features' },
    { label: 'Industries', to: '/industries' },
    { label: 'Case Studies', to: '/case-studies' },
    { label: 'Blog', to: '/blog' },
  ];

  return (
    <header
      className='header sticky top-0 z-50 bg-white border-b shadow-sm'
    >
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
            <InternalLink href='/contact' className='btn btn-outline btn-small header-button-1'>
              Contact Us
            </InternalLink>
            <PrimaryCta className='btn btn-primary btn-small header-button-2' />
          </nav>

          <HeaderMobileMenuIsland navLinks={navLinks} />
        </div>
      </div>
    </header>
  );
}
