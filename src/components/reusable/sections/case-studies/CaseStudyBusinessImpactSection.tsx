import React from 'react';

import { SectionWrapper } from '@/components/reusable/primitives';
import { AlertCard, SectionIntro } from '@/components/reusable/single';

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
    <SectionWrapper background='bg-muted/30' className={BLOCK}>
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
    </SectionWrapper>
  );
}
