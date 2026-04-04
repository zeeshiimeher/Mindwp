import { CardGrid, SectionWrapper } from '@/components/reusable/primitives';
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
  backgroundColor = '',
}: ProcessStepsSectionProps) {
  return (
    <SectionWrapper background={backgroundColor} className={cn(BLOCK, cssPrefix)}>
      {(badge || title || description) && (
        <SectionIntro
          {...(badge !== undefined && { badge })}
          title={title || ''}
          {...(description !== undefined && { description })}
          className={`${BLOCK}__header`}
        />
      )}
      <CardGrid
        columns={columns}
        mode='controlled'
      >
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
      </CardGrid>
    </SectionWrapper>
  );
}
