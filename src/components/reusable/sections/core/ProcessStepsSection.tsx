import { CardGrid, SectionWrapper, SplitLayout } from '@/components/reusable/primitives';
import { type ProcessStep, ProcessStepCard, SectionIntro } from '@/components/reusable/single';
import { Card } from '@/components/reusable/single/Card';
import {
  PrimaryCTASection,
  type PrimaryCTASectionProps,
} from '@/components/sections/PrimaryCTASection';
import { cn } from '@/components/ui/utils';

const BLOCK = 'c-process-steps-section';

/**
 * ProcessStepsSection - Responsive process workflow section
 *
 * Displays a series of process steps in a responsive grid layout.
 */
export interface ProcessStepsSectionProps {
  badge?: string;
  title?: string;
  description?: string;
  steps: ProcessStep[];
  columns?: 2 | 3 | 4;
  /** Additional class(es) for the root element (additive only). */
  cssPrefix?: string;
  /** Background variant or additive class string (prefer variants). */
  backgroundColor?: string;
  layout?: 'grid' | 'split-rail' | 'timeline';
}

export function ProcessStepsSection({
  badge,
  title,
  description,
  steps,
  columns = 4,
  cssPrefix = '',
  backgroundColor = '',
  layout,
}: ProcessStepsSectionProps) {
  const layoutMode = layout ?? 'grid';
  const isTimelineLayout = layoutMode === 'split-rail' || layoutMode === 'timeline';

  return (
    <SectionWrapper background={backgroundColor} className={cn(BLOCK, cssPrefix)}>
      {!isTimelineLayout && (badge || title || description) && (
        <SectionIntro
          {...(badge !== undefined && { badge })}
          title={title || ''}
          {...(description !== undefined && { description })}
          className={`${BLOCK}__header`}
        />
      )}
      {layoutMode === 'grid' ? (
        <>
          <CardGrid columns={columns} mode='controlled'>
            {steps.map(step => (
              <ProcessStepCard
                key={`${step.number}-${step.title}`}
                number={step.number}
                title={step.title}
                description={step.description}
                {...(step.icon !== undefined && { icon: step.icon })}
                {...(step.iconType !== undefined && { iconType: step.iconType })}
                cssPrefix={`${BLOCK}__step`}
              />
            ))}
          </CardGrid>
        </>
      ) : isTimelineLayout ? (
        <SplitLayout breakpoint='lg' ratio='50/70' gap={8}>
          <div className={`${BLOCK}__rail-copy`}>
            {(badge || title || description) && (
              <SectionIntro
                {...(badge !== undefined && { badge })}
                title={title || ''}
                {...(description !== undefined && { description })}
                className={`${BLOCK}__header ${BLOCK}__header--split-rail`}
              />
            )}
          </div>

          <div className={`${BLOCK}__rail-steps l-stack l-gap-6`}>
            {steps.map(step => (
              <Card key={`${step.number}-${step.title}`} className={`${BLOCK}__rail-step`}>
                <div className={`${BLOCK}__rail-step-head`}>
                  <h3 className={`${BLOCK}__rail-step-title`}>{step.title}</h3>
                  <span className={`${BLOCK}__rail-step-number`}>{step.number}</span>
                </div>
                <p className={`${BLOCK}__rail-step-description`}>{step.description}</p>
              </Card>
            ))}
          </div>
        </SplitLayout>
      ) : null}
    </SectionWrapper>
  );
}
