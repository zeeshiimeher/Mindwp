import Link from 'next/link';

import { Logo } from './Logo';
import { Nav } from './Nav';

export function Header() {
  return (
    <header
      className='header sticky top-0 z-50 bg-white border-b shadow-sm'
    >
      <div className='header-container l-container'>
        <div className='header-content l-row l-items-center l-justify-between h-16'>
          <div className='header-logo l-row l-items-center'>
            <Link href='/' className='header-logo-link hover:opacity-80 transition-opacity'>
              <Logo />
            </Link>
          </div>

          <Nav className='header-nav md:flex hidden l-items-center l-gap-8' />

          <nav className='header-nav md:flex hidden l-items-center l-gap-6'>
            <Link href='/contact' className='btn btn-outline btn-small header-button-1'>
              Contact Us
            </Link>
            <Link href='/contact' className='btn btn-primary btn-small header-button-2'>
              Start a Conversation
            </Link>
          </nav>
        </div>

        <div
          className='header-mobile-menu md:hidden py-3 border-t'
        >
          <Nav className='header-mobile-nav l-row flex-col' mobile />
        </div>
      </div>
    </header>
  );
}
