import Link from 'next/link';

import { buildGlobalContactHref } from '@/lib/contact/contactHref';

import { Logo } from './Logo';

const utilityLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookies' },
  { label: 'Sitemap', href: '/sitemap.xml' },
];

const globalContactHref = buildGlobalContactHref();

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer footer--primary'>
      <div className='footer__container'>
        <div className='footer__grid'>
          <div className='footer__column footer__column--brand'>
            <Logo variant='footer' />
            <p className='footer__description'>
              Smart websites that work while you sleep. We combine WordPress, SEO, automation, and
              AI to help service businesses get found, capture leads, and grow consistently.
            </p>
          </div>

          <div className='footer__column footer__column--services'>
            <h4 className='footer__heading'>Services</h4>
            <ul className='footer__list'>
              <li className='footer__item'>
                <Link className='footer__link' href='/services/smart-website-systems'>
                  Smart Websites
                </Link>
              </li>
              <li className='footer__item'>
                <Link className='footer__link' href='/services/local-seo-authority'>
                  Website SEO
                </Link>
              </li>
              <li className='footer__item'>
                <Link className='footer__link' href='/services/crm-infrastructure-implementation'>
                  CRM Infrastructure
                </Link>
              </li>
              <li className='footer__item'>
                <Link className='footer__link' href='/services/ai-lead-handling'>
                  AI Chat
                </Link>
              </li>
            </ul>
          </div>

          <div className='footer__column footer__column--company'>
            <h4 className='footer__heading'>Company</h4>
            <ul className='footer__list'>
              <li className='footer__item'>
                <Link className='footer__link' href='/about'>
                  About
                </Link>
              </li>
              <li className='footer__item'>
                <Link className='footer__link' href='/industries'>
                  Industries
                </Link>
              </li>
              <li className='footer__item'>
                <Link className='footer__link' href='/case-studies'>
                  Case Studies
                </Link>
              </li>
              <li className='footer__item'>
                <Link className='footer__link' href={globalContactHref}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className='footer__column footer__column--resources'>
            <h4 className='footer__heading'>Resources</h4>
            <ul className='footer__list'>
              <li className='footer__item'>
                <Link className='footer__link' href='/resources'>
                  Resource Hub
                </Link>
              </li>
              <li className='footer__item'>
                <Link className='footer__link' href='/blog'>
                  Blog
                </Link>
              </li>
              <li className='footer__item'>
                <Link className='footer__link' href='/faq'>
                  FAQ
                </Link>
              </li>
              <li className='footer__item'>
                <Link className='footer__link' href={globalContactHref}>
                  Start a Conversation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='footer__separator' />

        <div className='footer__utility-links'>
          {utilityLinks.map((link, index) => (
            <span key={link.label} className='footer__utility-item'>
              <Link className='footer__utility-link' href={link.href}>
                {link.label}
              </Link>
              {index < utilityLinks.length - 1 && (
                <span className='footer__utility-separator'>|</span>
              )}
            </span>
          ))}
        </div>

        <div className='footer__bottom footer__bottom--compact'>
          <p className='footer__copyright'>© {currentYear} MindWP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
