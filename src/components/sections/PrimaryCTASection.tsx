import { Check } from 'lucide-react';

import { SectionShell } from './SectionShell';
import type { SectionDensity, SectionHeading, SectionTone } from './types';

export type PrimaryCTASectionVariant = 'soft-panel' | 'split-card';

type PrimaryCTAAction = {
  label: string;
  href: string;
  primary: true;
};

export interface PrimaryCTASectionProps {
  variant?: PrimaryCTASectionVariant;
  /** Default soft tone keeps CTA off pure dark before the dark footer. */
  tone?: SectionTone;
  /** Optional: controls the background of the CTA shell. */
  shellTone?: SectionTone;
  density?: SectionDensity;
  heading: SectionHeading;
  actions: [PrimaryCTAAction];
  /** Optional bullet list of trust supports rendered with the CTA. */
  supports?: readonly string[];
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
}: PrimaryCTASectionProps) {
  if (!heading || typeof heading !== 'object') {
    throw new Error('PrimaryCTASection requires heading');
  }

  if (!heading.title || typeof heading.title !== 'string') {
    throw new Error('PrimaryCTASection requires heading.title');
  }

  if (!heading.description || typeof heading.description !== 'string') {
    throw new Error('PrimaryCTASection requires heading.description');
  }

  if (!Array.isArray(actions)) {
    throw new Error('PrimaryCTASection requires actions');
  }

  if (actions.length !== 1) {
    throw new Error('PrimaryCTASection must have exactly one CTA');
  }

  const action = actions[0];

  if (!action || !action.label || !action.href || action.primary !== true) {
    throw new Error('PrimaryCTASection requires one primary CTA action');
  }

  return (
    <section data-testid="smart-cta">
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
                <a href={action.href} className='rd-btn rd-btn--primary'>
                  {action.label}
                </a>
              </div>
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
    </section>
  );
}
