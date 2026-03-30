import React from 'react';

import { AlertCard, SectionIntro } from '@/components/reusable/single';
import { cn } from '@/components/ui/utils';

export interface CaseStudyBusinessImpactSectionProps {
  badge?: string;
  title: string;
  description?: string;
  impacts: string[];
}

export function CaseStudyBusinessImpactSection({
  badge,
  title,
  description,
  impacts,
}: CaseStudyBusinessImpactSectionProps) {
  const BLOCK = 'case-study-detail-business-impact';

  return (
    <section className={cn(BLOCK, 'l-section', 'bg-muted/30')}>
      <div className='l-container'>
        <SectionIntro
          {...(badge !== undefined && { badge })}
          title={title}
          {...(description !== undefined && { description })}
          className={`${BLOCK}__header`}
        />

        <div className={`${BLOCK}__grid`}>
          {impacts.map((impact, index) => (
            <AlertCard key={index}>
              <p className={`${BLOCK}__item`}>{impact}</p>
            </AlertCard>
          ))}
        </div>
      </div>
    </section>
  );
}
