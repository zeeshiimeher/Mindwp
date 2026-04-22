import { SectionWrapper, SplitLayout } from '@/components/reusable/primitives';
import { type ButtonProps, SectionIntro } from '@/components/reusable/single';
import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

const BLOCK = 'c-step-cards-split-section';

interface StepCardsSplitItem {
  number: string;
  title: string;
  description: string;
}

export interface StepCardsSplitSectionProps {
  badge?: string;
  title: string;
  description?: string;
  primaryAction?: ButtonProps;
  secondaryAction?: ButtonProps;
  steps: StepCardsSplitItem[];
  backgroundColor?: string;
  cssPrefix?: string;
}

export function StepCardsSplitSection({
  badge,
  title,
  description,
  primaryAction,
  secondaryAction,
  steps,
  backgroundColor = '',
  cssPrefix = '',
}: StepCardsSplitSectionProps) {
  return (
    <SectionWrapper background={backgroundColor} className={cn(BLOCK, cssPrefix)}>
      <SplitLayout breakpoint='lg' ratio='50/70' gap={8}>
        <SectionIntro
          {...(badge !== undefined && { badge })}
          title={title}
          {...(description !== undefined && { description })}
          {...(primaryAction !== undefined && { primaryAction })}
          {...(secondaryAction !== undefined && { secondaryAction })}
          className={`${BLOCK}__header`}
        />

        <div className={`${BLOCK}__steps`}>
          {steps.map((step, index) => (
            <Card key={`${step.number}-${index}`} className={`${BLOCK}__step`}>
              <div className={`${BLOCK}__step-head`}>
                <h3 className={`${BLOCK}__step-title`}>{step.title}</h3>
                <span className={`${BLOCK}__step-number`}>{step.number}</span>
              </div>
              <p className={`${BLOCK}__step-description`}>{step.description}</p>
            </Card>
          ))}
        </div>
      </SplitLayout>
    </SectionWrapper>
  );
}
