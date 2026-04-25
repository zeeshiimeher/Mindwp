import { Facebook, Linkedin, Mail, Youtube } from 'lucide-react';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

import { buildGlobalPrimaryCtaLinks, getSecondaryCTA } from '@/lib/cta/primaryAction';

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

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { primaryAction } = buildGlobalPrimaryCtaLinks();
  const secondaryActionLabel = getSecondaryCTA(true);

  const utilityLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'Sitemap', href: '/sitemap.xml' },
  ];

  return (
    <footer className='footer footer--primary'>
      <div className='footer__container'>
        {/* Main Footer Content */}
        <div className='footer__grid'>
          {/* Brand Column */}
          <div className='footer__column footer__column--brand'>
            <Logo variant='footer' />
            <p className='footer__description'>
              For service businesses where calls get missed, follow-up slips, and good leads quietly
              disappear. We put the routing, follow-up, and visibility in place so the work already
              coming in actually turns into work.
            </p>
          </div>

          {/* Services Column */}
          <div className='footer__column footer__column--services'>
            <h4 className='footer__heading'>Services</h4>
            <ul className='footer__list'>
              <li className='footer__item'>
                <InternalLink href='/services/smart-website-systems' className='footer__link'>
                  Smart Websites
                </InternalLink>
              </li>
              <li className='footer__item'>
                <InternalLink href='/services/local-seo-authority' className='footer__link'>
                  Website SEO
                </InternalLink>
              </li>
              <li className='footer__item'>
                <InternalLink
                  href='/services/crm-infrastructure-implementation'
                  className='footer__link'
                >
                  CRM Infrastructure
                </InternalLink>
              </li>
              <li className='footer__item'>
                <InternalLink href='/services/ai-lead-handling' className='footer__link'>
                  AI Chat
                </InternalLink>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className='footer__column footer__column--company'>
            <h4 className='footer__heading'>Company</h4>
            <ul className='footer__list'>
              <li className='footer__item'>
                <InternalLink href='/about' className='footer__link'>
                  About
                </InternalLink>
              </li>
              <li className='footer__item'>
                <InternalLink href='/industries' className='footer__link'>
                  Industries
                </InternalLink>
              </li>
              <li className='footer__item'>
                <InternalLink href='/case-studies' className='footer__link'>
                  Case Studies
                </InternalLink>
              </li>
              <li className='footer__item'>
                <InternalLink href={primaryAction.href} className='footer__link'>
                  {primaryAction.label}
                </InternalLink>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className='footer__column footer__column--resources'>
            <h4 className='footer__heading'>Resources</h4>
            <ul className='footer__list'>
              <li className='footer__item'>
                <InternalLink href='/resources' className='footer__link'>
                  Resource Hub
                </InternalLink>
              </li>
              <li className='footer__item'>
                <InternalLink href='/blog' className='footer__link'>
                  Blog
                </InternalLink>
              </li>
              <li className='footer__item'>
                <InternalLink href='/faq' className='footer__link'>
                  FAQ
                </InternalLink>
              </li>
              <li className='footer__item'>
                <a href={primaryAction.href} className='footer__cta'>
                  {secondaryActionLabel}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='footer__separator' />

        {/* Utility Links */}
        <div className='footer__utility-links'>
          {utilityLinks.map((link, index) => (
            <span key={link.label} className='footer__utility-item'>
              <InternalLink href={link.href} className='footer__utility-link'>
                {link.label}
              </InternalLink>
              {index < utilityLinks.length - 1 && (
                <span className='footer__utility-separator'>|</span>
              )}
            </span>
          ))}
        </div>

        {/* Bottom Row - Copyright & Social */}
        <div className='footer__bottom'>
          <p className='footer__copyright'>© {currentYear} MindWP. All rights reserved.</p>
          {/* Social links are intentionally hidden until accounts are ready */}
          <div className='footer__social footer__social--hidden'>
            <button className='footer__social-link' disabled>
              <Facebook className='footer__social-icon' />
              <span>Facebook</span>
            </button>
            <button className='footer__social-link' disabled>
              <Linkedin className='footer__social-icon' />
              <span>LinkedIn</span>
            </button>
            <button className='footer__social-link' disabled>
              <Youtube className='footer__social-icon' />
              <span>YouTube</span>
            </button>
            <button className='footer__social-link' disabled>
              <Mail className='footer__social-icon' />
              <span>Email</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
