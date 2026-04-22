import React from 'react';
import { Target } from 'lucide-react';

import { SectionWrapper } from '@/components/reusable/primitives';
import { HighlightCard } from '@/components/reusable/single/HighlightCard';
import { SolutionDetailCard } from '@/components/reusable/single/SolutionDetailCard';
import { cn } from '@/components/ui/utils';

import { ResourceSectionHeader } from './ResourceSectionHeader';

const BLOCK = 'framework-section';

export interface AutomatedSolution {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface ResourceSolutionsSectionProps {
  heading: string;
  subheading?: string;
  solutions: AutomatedSolution[];
  differenceHeading?: string;
  differenceContent?: string;
  className?: string;
}

export function ResourceSolutionsSection({
  heading,
  subheading,
  solutions,
  differenceHeading,
  differenceContent,
  className = '',
}: ResourceSolutionsSectionProps) {
  return (
    <SectionWrapper padding='none' container='none' className={cn(BLOCK, className)}>
      <ResourceSectionHeader
        icon={Target}
        title={heading}
        {...(subheading !== undefined && { subtitle: subheading })}
        variant='solution'
      />

      <div className={`${BLOCK}__grid`}>
        {solutions.map(solution => (
          <SolutionDetailCard
            key={solution.title}
            title={solution.title}
            description={solution.description}
            icon={solution.icon}
          />
        ))}
      </div>

      <div className={`${BLOCK}__difference`}>
        <HighlightCard title={differenceHeading || ''} description={differenceContent || ''} />
      </div>
    </SectionWrapper>
  );
}
