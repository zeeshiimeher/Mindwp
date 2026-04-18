import { CardGrid, SectionWrapper, SplitLayout } from '@/components/reusable/primitives';
import { type ProcessStep, ProcessStepCard, SectionIntro } from '@/components/reusable/single';
import { Card } from '@/components/reusable/single/Card';
import { SmartCTA, type SmartCTAProps } from '@/components/system/SmartCTA';
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
  cta?: SmartCTAProps;
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
  cta,
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

          {cta ? (
            <div className={`${BLOCK}__cta l-mt-8`}>
              <SmartCTA {...cta} wrapper='none' includeContainer={false} />
            </div>
          ) : null}
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
            {steps.map((step, index) => (
              <Card key={index} className={`${BLOCK}__rail-step`}>
                <div className={`${BLOCK}__rail-step-head`}>
                  <h3 className={`${BLOCK}__rail-step-title`}>{step.title}</h3>
                  <span className={`${BLOCK}__rail-step-number`}>{step.number}</span>
                </div>
                <p className={`${BLOCK}__rail-step-description`}>{step.description}</p>
              </Card>
            ))}

            {cta ? (
              <div className={`${BLOCK}__cta`}>
                <SmartCTA {...cta} wrapper='none' includeContainer={false} />
              </div>
            ) : null}
          </div>
        </SplitLayout>
      ) : null}
    </SectionWrapper>
  );
}
