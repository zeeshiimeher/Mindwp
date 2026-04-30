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
  /** Primary CTA buttons only. */
  actions: readonly SectionLink[];
  /** Optional bullet list of trust supports rendered with the CTA. */
  supports?: readonly string[];
  /** Optional list of CTA microcopy lines. */
  ctaList?: string[];
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
}: PrimaryCTASectionProps) {
  // Guard: must have title and description
  if (!heading?.title || !heading?.description)
    throw new Error('PrimaryCTASection requires heading.title and heading.description');
  // Guard: must have at least one action
  if (!actions?.length) throw new Error('PrimaryCTASection requires at least one action');

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
            <p className='cta-section__description'>{heading.description}</p>

            <div className='cta-section__buttons'>
              {actions.map((action, index) => (
                <a
                  key={`${action.label}-${index}`}
                  href={action.href}
                  className={'rd-btn rd-btn--primary'}
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
              {supports.map((support, index) => (
                <li key={`${support}-${index}`} className='cta-section__support'>
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
