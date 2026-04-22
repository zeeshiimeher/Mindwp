import React from 'react';
import { CheckCircle2, Inbox } from 'lucide-react';

import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

const BLOCK = 'use-case-card';

/**
 * ScenarioSolutionCard - Individual use case card component
 *
 * Displays a single use case in scenario/solution/result format with a gradient
 * icon background and structured content sections. Perfect for showing how
 * features work in real-world scenarios with clear problem/solution/result flow.
 *
 * @example
 * ```tsx
 * import { Calendar } from "lucide-react";
 *
 * <ScenarioSolutionCard
 *   icon={Calendar}
 *   title="Daily Scheduling"
 *   scenario="Clients book appointments online and select available times."
 *   solution="Bookings appear instantly in your calendar and dashboard."
 *   result="Stay organized and keep track of appointments."
 *   scenarioLabel="Problem"
 *   solutionLabel="Solution"
 * />
 * ```
 */
export interface ScenarioSolutionCardProps {
  /** Icon component to display at the top of the card */
  icon: React.ComponentType<{ className?: string }>;

  /** Use case title */
  title: string;

  /** Scenario/problem description */
  scenario: string;

  /** Solution/feature description */
  solution: string;

  /** Result/benefit description */
  result: string;

  /**
   * Label for the scenario section
   * @default "Scenario"
   */
  scenarioLabel?: string;

  /**
   * Label for the solution section
   * @default "Feature"
   */
  solutionLabel?: string;

  /**
   * Additional class(es) for the root element.
   *
   * Note: The component always applies its internal BEM block class (`use-case-card`).
   * This prop is additive and will not change the BEM base.
   */
  cssPrefix?: string;

  /**
   * Background color/styling for the icon container.
   * If omitted, the component uses its default gradient defined in CSS.
   * Treated as an additive className.
   */
  iconBackground?: string;
}

export function ScenarioSolutionCard({
  icon: Icon,
  title,
  scenario,
  solution,
  result,
  scenarioLabel = 'Scenario',
  solutionLabel = 'Feature',
  cssPrefix = '',
  iconBackground = '',
}: ScenarioSolutionCardProps) {
  return (
    <Card className={cn(BLOCK, cssPrefix)}>
      <div className={`${BLOCK}__stack`}>
        <div className={cn(`${BLOCK}__icon-wrap`, iconBackground)}>
          <Icon className={`${BLOCK}__icon`} />
        </div>
        <h4 className={`${BLOCK}__title`}>{title}</h4>
        <div className={`${BLOCK}__section`}>
          <div className={`${BLOCK}__label`}>{scenarioLabel}</div>
          <p className={`${BLOCK}__text`}>{scenario}</p>
        </div>
        <div className={`${BLOCK}__section`}>
          <div className={`${BLOCK}__label ${BLOCK}__label--primary`}>
            <Inbox className={`${BLOCK}__label-icon`} />
            {solutionLabel}
          </div>
          <p className={`${BLOCK}__text`}>{solution}</p>
        </div>
        <div className={`${BLOCK}__result`}>
          <div className={`${BLOCK}__result-row`}>
            <CheckCircle2 className={`${BLOCK}__result-icon`} />
            <span className={`${BLOCK}__result-text`}>{result}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
