import React from 'react';

import { FAQSection } from '@/components/reusable/single/FAQSection';

export interface CaseStudyFAQItem {
  question: string;
  answer: string;
}

export interface CaseStudyFAQSectionProps {
  badge?: string;
  title?: string;
  description?: string;
  items: CaseStudyFAQItem[];
  backgroundColor?: string;
}

export function CaseStudyFAQSection({
  badge,
  title = 'FAQ',
  description,
  items,
  backgroundColor = '',
}: CaseStudyFAQSectionProps) {
  return (
    <FAQSection
      {...(badge !== undefined && { badge })}
      title={title}
      {...(description !== undefined && { description })}
      faqs={items}
      backgroundColor={backgroundColor}
      cssPrefix='case-study-detail-faq'
      displayMode='accordion'
    />
  );
}
