import { SectionWrapper, SplitLayout } from '@/components/reusable/primitives';
import { SectionIntro } from '@/components/reusable/single';
import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

const BLOCK = 'c-outcome-timeline-section';

export interface OutcomeTimelineStage {
  step?: number | string;
  title: string;
  description: string;
  outcomes: string[];
}

export interface OutcomeTimelineSectionProps {
  badge?: string;
  title: string;
  description?: string;
  stages: OutcomeTimelineStage[];
  backgroundColor?: string;
  cssPrefix?: string;
}

export function OutcomeTimelineSection({
  badge,
  title,
  description,
  stages,
  backgroundColor = '',
  cssPrefix = '',
}: OutcomeTimelineSectionProps) {
  return (
    <SectionWrapper background={backgroundColor} className={cn(BLOCK, cssPrefix)}>
      <SectionIntro
        {...(badge !== undefined && { badge })}
        title={title}
        {...(description !== undefined && { description })}
        className={`${BLOCK}__header`}
      />

      <div className={`${BLOCK}__timeline l-stack l-gap-8`}>
        {stages.map((stage, index) => (
          <SplitLayout key={`${stage.title}-${index}`} breakpoint='lg' ratio='40/60' gap={8}>
            <div className={`${BLOCK}__rail`}>
              {stage.step !== undefined && (
                <span className={`${BLOCK}__step`} aria-label={`Step ${String(stage.step)}`}>
                  {stage.step}
                </span>
              )}
            </div>

            <Card className={`${BLOCK}__card`}>
              <h3 className={`${BLOCK}__title`}>{stage.title}</h3>
              <p className={`${BLOCK}__description`}>{stage.description}</p>
              <ul className={`${BLOCK}__outcomes l-stack`}>
                {stage.outcomes.map((outcome, outcomeIndex) => (
                  <li key={outcomeIndex} className={`${BLOCK}__outcome`}>
                    {outcome}
                  </li>
                ))}
              </ul>
            </Card>
          </SplitLayout>
        ))}
      </div>
    </SectionWrapper>
  );
}
