import React from 'react';

import { ChecklistCardsSection } from '@/components/reusable/sections/core';

export interface CaseStudyDeliverablesSectionProps {
  badge?: string;
  title: string;
  description?: string;
  items: string[];
  columns?: 2 | 3 | 4;
}

export function CaseStudyDeliverablesSection({
  badge,
  title,
  description,
  items,
  columns = 2,
}: CaseStudyDeliverablesSectionProps) {
  return (
    <ChecklistCardsSection
      {...(badge !== undefined && { badge })}
      title={title}
      {...(description !== undefined && { description })}
      items={items}
      columns={columns}
      backgroundColor='bg-section-base'
      cssPrefix='case-study-detail-deliverables'
    />
  );
}
