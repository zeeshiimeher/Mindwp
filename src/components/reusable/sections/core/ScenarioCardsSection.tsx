import React from 'react';

import { ScenarioSolutionCard, SectionIntro } from '@/components/reusable/single';
import { cn } from '@/components/ui/utils';

const BLOCK = 'c-scenario-cards-section';

export interface UseCase {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  scenario: string;
  solution: string;
  result: string;
}

interface UseCasesSectionProps {
  badge?: string;
  title: string;
  description?: string;
  useCases: UseCase[];
  backgroundColor?: string;
  /** Additional class(es) for the root element (additive only). */
  cssPrefix?: string;
  scenarioLabel?: string;
  solutionLabel?: string;
  iconBackground?: string;
}

export function ScenarioCardsSection({
  badge,
  title,
  description,
  useCases,
  backgroundColor = '',
  cssPrefix = '',
  scenarioLabel = 'Scenario',
  solutionLabel = 'Feature',
  iconBackground = '',
}: UseCasesSectionProps) {

  return (
    <section className={cn(BLOCK, 'l-section', backgroundColor, cssPrefix)}>
      <div className={cn(`${BLOCK}__container`, 'l-container')}>
        <SectionIntro
          {...(badge !== undefined && { badge })}
          title={title}
          {...(description !== undefined && { description })}
          className={`${BLOCK}__header`}
        />

        <div className={`${BLOCK}__grid`}>
          {useCases.map((useCase, index) => (
            <ScenarioSolutionCard
              key={index}
              icon={useCase.icon}
              title={useCase.title}
              scenario={useCase.scenario}
              solution={useCase.solution}
              result={useCase.result}
              scenarioLabel={scenarioLabel}
              solutionLabel={solutionLabel}
              iconBackground={iconBackground}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
