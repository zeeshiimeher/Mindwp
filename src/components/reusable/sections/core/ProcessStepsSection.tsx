import { type ProcessStep, ProcessStepCard, SectionIntro } from '@/components/reusable/single';
import { cn } from '@/components/ui/utils';

const BLOCK = 'c-process-steps-section';

/**
 * ProcessStepsSection - Responsive process workflow section
 *
 * Displays a series of process steps in a responsive grid layout.
 */
interface ProcessStepsSectionProps {
  badge?: string;
  title?: string;
  description?: string;
  steps: ProcessStep[];
  columns?: 2 | 3 | 4;
  /** Additional class(es) for the root element (additive only). */
  cssPrefix?: string;
  /** Background variant or additive class string (prefer variants). */
  backgroundColor?: string;
}

export function ProcessStepsSection({
  badge,
  title,
  description,
  steps,
  columns = 4,
  cssPrefix = '',
  backgroundColor = 'muted',
}: ProcessStepsSectionProps) {
  const mutedBackgrounds = ['muted', 'bg-muted', 'bg-muted/30', 'bg-muted/50'] as const;

  const backgroundClassName =
    backgroundColor === 'default' || backgroundColor === 'bg-background'
      ? `${BLOCK}--bg-default`
      : backgroundColor === 'white' || backgroundColor === 'bg-white'
        ? `${BLOCK}--bg-white`
        : mutedBackgrounds.includes(backgroundColor as (typeof mutedBackgrounds)[number])
          ? `${BLOCK}--bg-muted`
          : backgroundColor;

  const columnsClass =
    columns === 2
      ? `${BLOCK}__grid--cols-2`
      : columns === 3
        ? `${BLOCK}__grid--cols-3`
        : `${BLOCK}__grid--cols-4`;

  return (
    <section className={cn(BLOCK, 'l-section', backgroundClassName, cssPrefix)}>
      <div className={cn(`${BLOCK}__container`, 'l-container')}>
        {(badge || title || description) && (
          <SectionIntro
            {...(badge !== undefined && { badge })}
            title={title || ''}
            {...(description !== undefined && { description })}
            className={`${BLOCK}__header`}
          />
        )}
        <div className={cn(`${BLOCK}__grid`, columnsClass)}>
          {steps.map((step, index) => (
            <ProcessStepCard
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              {...(step.icon !== undefined && { icon: step.icon })}
              {...(step.iconType !== undefined && { iconType: step.iconType })}
              cssPrefix={`${BLOCK}__step`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
