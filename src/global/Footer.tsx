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
              For service businesses where calls get missed, follow-up slips, and good leads quietly
              disappear. We put the routing, follow-up, and visibility in place so the work already
              coming in actually turns into work.
            </p>
          </div>

          <div className='footer__column'>
            <h4 className='footer__heading'>Systems</h4>
            <ul className='footer__list'>
              <li className='footer__item'>
                <InternalLink href='/systems/smart-website-systems' className='footer__link'>
                  Smart Website Systems
                </InternalLink>
              </li>
              <li className='footer__item'>
                <InternalLink href='/systems/local-seo-authority' className='footer__link'>
                  Local SEO Authority
                </InternalLink>
              </li>
              <li className='footer__item'>
                <InternalLink href='/systems/ai-lead-handling' className='footer__link'>
                  AI Lead Handling
                </InternalLink>
              </li>
              <li className='footer__item'>
                <InternalLink href='/systems/crm-automation' className='footer__link'>
                  CRM &amp; Automation
                </InternalLink>
              </li>
              <li className='footer__item'>
                <InternalLink href='/systems/reputation-review' className='footer__link'>
                  Reputation &amp; Reviews
                </InternalLink>
              </li>
              <li className='footer__item'>
                <InternalLink href='/systems/revenue-growth' className='footer__link'>
                  Revenue Growth
                </InternalLink>
              </li>
            </ul>
          </div>

          <div className='footer__column'>
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
            © {currentYear} MindWP. Connected systems for service businesses.
          </p>
          <span className='footer__status'>
            <span className='footer__status-dot' aria-hidden='true' />
            All systems operational
          </span>
        </div>
      </div>
    </footer>
  );
}
