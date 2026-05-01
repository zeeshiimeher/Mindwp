import { resolveSectionIcon, type SectionIconKey } from './icons';
import { SectionShell } from './SectionShell';
import type { SectionDensity, SectionHeading, SectionTone } from './types';

export type ProcessStepsVariant = 'timeline' | 'cycle';

export interface ProcessStep {
  /** Position label (e.g. "01"). */
  index: string;
  iconKey?: SectionIconKey;
  title: string;
  description: string;
  /** Optional short outcome line shown under description. */
  outcome?: string;
}

export interface ProcessStepsSectionProps {
  variant?: ProcessStepsVariant;
  tone?: SectionTone;
  density?: SectionDensity;
  heading: SectionHeading;
  steps: readonly ProcessStep[];
}

/**
 * ProcessStepsSection — numbered, connected operational flow.
 *
 * Replaces prototype `OperationalFlowTimeline`. Must read as a flow,
 * NOT a card grid: numbered indices, animated connector line between
 * steps, distinct typography from `GridCardsSection`.
 */
export function ProcessStepsSection({
  variant = 'timeline',
  tone = 'light',
  density = 'default',
  heading,
  steps,
}: ProcessStepsSectionProps) {
  if (steps.length === 0) {
    throw new Error('[ProcessStepsSection] Invalid data');
  }

  for (const step of steps) {
    if (
      step.index.trim().length === 0 ||
      step.title.trim().length === 0 ||
      step.description.trim().length === 0
    ) {
      throw new Error('[ProcessStepsSection] Invalid data');
    }
  }

  return (
    <SectionShell
      tone={tone}
      density={density}
      heading={heading}
      sectionClassName={`process-steps process-steps--${variant}`}
    >
      <ol className='process-steps__list rd-animate-stagger'>
        {steps.map((step, position) => {
          const Icon = resolveSectionIcon(step.iconKey);
          const isLast = position === steps.length - 1;
          return (
            <li key={step.index} className='process-steps__item'>
              <div className='process-steps__marker' aria-hidden='true'>
                <span className='process-steps__index'>{step.index}</span>
                {!isLast ? <span className='process-steps__connector' /> : null}
              </div>
              <div className='process-steps__body'>
                {Icon ? (
                  <span className='rd-icon-tile rd-icon-tile--sm' aria-hidden='true'>
                    <Icon size={16} />
                  </span>
                ) : null}
                <h3 className='process-steps__title'>{step.title}</h3>
                <p className='process-steps__description'>{step.description}</p>
                {step.outcome ? (
                  <p className='process-steps__outcome'>
                    <span className='rd-dot rd-dot--good' aria-hidden='true' /> {step.outcome}
                  </p>
                ) : null}
              </div>
            </li>
          );
        })}
      </ol>
    </SectionShell>
  );
}
