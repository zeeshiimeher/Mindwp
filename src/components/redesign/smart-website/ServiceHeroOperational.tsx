import { ArrowRight } from 'lucide-react';

import { type OperationalRow, OperationalStatusMockup } from './OperationalStatusMockup';

interface ServiceHeroOperationalProps {
  badge: string;
  title: string;
  description: string;
  chips: readonly string[];
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  mockupRows: readonly OperationalRow[];
  mockupTitle: string;
  mockupSubtitle: string;
  mockupBrand: string;
  mockupFooterPrimary: string;
  mockupFooterSecondary: string;
}

export function ServiceHeroOperational({
  badge,
  title,
  description,
  chips,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  mockupRows,
  mockupTitle,
  mockupSubtitle,
  mockupBrand,
  mockupFooterPrimary,
  mockupFooterSecondary,
}: ServiceHeroOperationalProps) {
  return (
    <section className='rd-sws-hero'>
      <span className='rd-sws-hero__glow rd-glow-breathe' aria-hidden='true' />
      <div className='rd-container rd-container--wide'>
        <div className='rd-split'>
          <div className='rd-sws-hero__copy rd-reveal-up'>
            <span className='rd-section-kicker rd-sws-hero__kicker'>
              <span className='rd-dot rd-dot--neutral rd-pulse' />
              {badge}
            </span>
            <h1 className='rd-sws-hero__title'>{title}</h1>
            <p className='rd-sws-hero__description'>{description}</p>

            <div className='rd-sws-hero__chips rd-stagger'>
              {chips.map(chip => (
                <span key={chip} className='rd-sws-hero__chip'>
                  <span className='rd-dot rd-dot--risk' />
                  {chip}
                </span>
              ))}
            </div>

            <div className='rd-sws-hero__actions'>
              <a className='rd-btn rd-btn--primary-dark' href={primaryCtaHref}>
                {primaryCtaLabel}
                <ArrowRight aria-hidden='true' size={16} />
              </a>
              {secondaryCtaLabel && secondaryCtaHref ? (
                <a className='rd-btn rd-btn--ghost-dark' href={secondaryCtaHref}>
                  {secondaryCtaLabel}
                </a>
              ) : null}
            </div>
          </div>

          <div className='rd-sws-hero__visual rd-reveal'>
            <OperationalStatusMockup
              rows={mockupRows}
              title={mockupTitle}
              subtitle={mockupSubtitle}
              brand={mockupBrand}
              footerPrimary={mockupFooterPrimary}
              footerSecondary={mockupFooterSecondary}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
