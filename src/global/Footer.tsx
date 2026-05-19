import { buildGlobalPrimaryCtaLinks, getSecondaryCTA } from '@/lib/cta/primaryAction';

import { InternalLink } from './InternalLink';
import { Logo } from './Logo';

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
    <footer className='footer'>
      <div className='mw-container'>
        <div className='footer__grid'>
          <div className='footer__column footer__column--brand'>
            <Logo variant='footer' />
            <p className='footer__description'>
              For service businesses and specialist clinics where calls get missed, follow-up slips,
              and good enquiries quietly disappear. We put the website, handling, follow-up, and
              proof in place so the work already coming in actually turns into work.
            </p>
          </div>

          <div className='footer__column'>
            <h4 className='footer__heading'>Primary Systems</h4>
            <ul className='footer__list'>
              <li className='footer__item'>
                <InternalLink href='/services/smart-website-systems' className='footer__link'>
                  Smart Website Systems
                </InternalLink>
              </li>
              <li className='footer__item'>
                <InternalLink href='/services/local-seo-authority' className='footer__link'>
                  Local SEO Authority Systems
                </InternalLink>
              </li>
              <li className='footer__item'>
                <InternalLink href='/services/lead-response-handling' className='footer__link'>
                  Lead Response &amp; Handling Systems
                </InternalLink>
              </li>
              <li className='footer__item'>
                <InternalLink href='/services/follow-up-crm' className='footer__link'>
                  Follow-Up &amp; CRM Systems
                </InternalLink>
              </li>
              <li className='footer__item'>
                <InternalLink href='/services/reputation-review-systems' className='footer__link'>
                  Reputation &amp; Review Systems
                </InternalLink>
              </li>
            </ul>
          </div>

          <div className='footer__column'>
            <h4 className='footer__heading'>Implementation Services</h4>
            <ul className='footer__list'>
              <li className='footer__item'>
                <InternalLink
                  href='/services/implementation/wordpress-development'
                  className='footer__link'
                >
                  WordPress Development
                </InternalLink>
              </li>
              <li className='footer__item'>
                <InternalLink href='/services/implementation/elementor' className='footer__link'>
                  Elementor
                </InternalLink>
              </li>
              <li className='footer__item'>
                <InternalLink
                  href='/services/implementation/bricks-builder'
                  className='footer__link'
                >
                  Bricks Builder
                </InternalLink>
              </li>
              <li className='footer__item'>
                <InternalLink href='/services/implementation/divi5' className='footer__link'>
                  Divi
                </InternalLink>
              </li>
              <li className='footer__item'>
                <InternalLink href='/services/implementation/woocommerce' className='footer__link'>
                  WooCommerce
                </InternalLink>
              </li>
              <li className='footer__item'>
                <InternalLink
                  href='/services/implementation/website-redesign-system-rebuild'
                  className='footer__link'
                >
                  Website Redesign / Rebuild
                </InternalLink>
              </li>
            </ul>
          </div>

          <div className='footer__column'>
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
                <InternalLink href='/case-studies' className='footer__link'>
                  Case Studies
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

        <div className='footer__bottom'>
          <p className='footer__copyright'>
            © {currentYear} MindWP. Conversion-focused website systems with connected handling.
          </p>
          <span className='footer__status'>
            <span className='footer__status-dot' aria-hidden='true' />
            Conversion-focused website systems with connected handling
          </span>
        </div>
      </div>
    </footer>
  );
}
