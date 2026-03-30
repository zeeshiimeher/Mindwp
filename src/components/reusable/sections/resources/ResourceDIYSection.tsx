import { Lightbulb } from 'lucide-react';

import { ActionStepCard } from '@/components/reusable/single/ActionStepCard';
import { Callout } from '@/components/reusable/single/Callout';
import { cn } from '@/components/ui/utils';

import { ResourceSectionHeader } from './ResourceSectionHeader';

export interface DIYStep {
  step: number;
  title: string;
  action: string;
  expectedResult: string;
}

export interface ResourceDIYSectionProps {
  heading: string;
  subheading?: string;
  timeToComplete?: string;
  steps: DIYStep[];
  proTip?: string;
  className?: string;
}

export function ResourceDIYSection({
  heading,
  subheading,
  steps,
  proTip,
  className = '',
}: ResourceDIYSectionProps) {
  const BLOCK = 'diy-section';

  return (
    <section className={cn(BLOCK, className)}>
      <ResourceSectionHeader
        icon={Lightbulb}
        title={heading}
        {...(subheading !== undefined && { subtitle: subheading })}
        variant='diy'
      />

      <div className={`${BLOCK}__steps`}>
        {steps.map((step, index) => (
          <ActionStepCard
            key={index}
            step={step.step}
            title={step.title}
            action={step.action}
            expectedResult={step.expectedResult}
          />
        ))}
      </div>

      {proTip && (
        <div className={`${BLOCK}__pro-tip`}>
          <Callout type='info'>
            <p className={`${BLOCK}__pro-tip-text`}>{proTip}</p>
          </Callout>
        </div>
      )}
    </section>
  );
}
