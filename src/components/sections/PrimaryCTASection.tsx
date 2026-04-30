import { Check } from 'lucide-react';

import { SectionShell } from './SectionShell';
import type { SectionDensity, SectionHeading, SectionLink, SectionTone } from './types';

export type PrimaryCTASectionVariant = 'soft-panel' | 'split-card';

export interface PrimaryCTASectionProps {
  variant?: PrimaryCTASectionVariant;
  /** Default soft tone keeps CTA off pure dark before the dark footer. */
  tone?: SectionTone;
  /** Optional: controls the background of the CTA shell. */
  shellTone?: SectionTone;
  density?: SectionDensity;
  heading: SectionHeading;
  /** Primary + (optional) secondary CTA buttons. */
  actions: readonly SectionLink[];
  /** Optional bullet list of trust supports rendered with the CTA. */
  supports?: readonly string[];
  /** Optional list of CTA microcopy lines. */
  ctaList?: string[];
  /** Explicitly allow secondary button rendering. */
  allowSecondary?: boolean;
}

/**
 * PrimaryCTASection — section-scoped CTA block.
 *
 * NOTE: This component intentionally does NOT use class names containing
 * `cta__panel`, `cta__content` or `cta__actions` — those substrings are
 * reserved by `validate-primary-cta.ts` for the global `PrimaryCTASection`.
 *
 * For the deterministic global CTA contract, use `PrimaryCTASection`.
 * Use this component for section-level / mid-page CTAs.
 */
export function PrimaryCTASection({
  variant = 'soft-panel',
  tone = 'soft',
  shellTone = 'gradient-cta',
  density = 'default',
  heading,
  actions,
  supports,
  ctaList,
  allowSecondary = false,
}: PrimaryCTASectionProps) {
  return (
    <SectionShell
      tone={tone}
      density={density}
      sectionClassName={`cta-section cta-section--${variant}`}
      bare
    >
      <div className='cta-section__inner'>
        <div className={`cta-section__shell rd-animate-panel cta-section__shell--${shellTone}`}>
          <div className='cta-section__body'>
            {heading.kicker ? <span className='rd-section-kicker'>{heading.kicker}</span> : null}
            <h2 className='cta-section__title'>{heading.title}</h2>
            {heading.description ? (
              <p className='cta-section__description'>{heading.description}</p>
            ) : null}

            <div className='cta-section__buttons'>
              {actions
                .filter(action => action.primary || allowSecondary)
                .map(action => (
                  <a
                    key={action.label}
                    href={action.href}
                    className={
                      action.primary ? 'rd-btn rd-btn--primary' : 'rd-btn rd-btn--secondary'
                    }
                  >
                    {action.label}
                  </a>
                ))}
            </div>

            {ctaList && ctaList.length > 0 ? (
              <ul className='cta-section__list'>
                {ctaList.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            ) : null}
          </div>

          {supports && supports.length > 0 ? (
            <ul className='cta-section__supports rd-animate-stagger'>
              {supports.map(support => (
                <li key={support} className='cta-section__support'>
                  <span className='cta-section__support-icon' aria-hidden='true'>
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span>{support}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </SectionShell>
  );
}
