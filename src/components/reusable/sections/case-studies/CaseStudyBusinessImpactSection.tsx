import React from 'react';

import { SectionWrapper } from '@/components/reusable/primitives';
import { AlertCard, SectionIntro } from '@/components/reusable/single';

const BLOCK = 'case-study-detail-business-impact';

export interface CaseStudyBusinessImpactSectionProps {
  badge?: string;
  title: string;
  description: string;
  impacts: string[];
}

export function CaseStudyBusinessImpactSection({
  badge,
  title,
  description,
  impacts,
}: CaseStudyBusinessImpactSectionProps) {
  return (
    <SectionWrapper background='bg-muted/30' className={BLOCK}>
      <SectionIntro
        {...(badge !== undefined && { badge })}
        title={title}
        description={description}
        className={`${BLOCK}__header`}
      />

      <div className={`${BLOCK}__grid`}>
        {impacts.map(impact => (
          <AlertCard key={impact}>
            <p className={`${BLOCK}__item`}>{impact}</p>
          </AlertCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
