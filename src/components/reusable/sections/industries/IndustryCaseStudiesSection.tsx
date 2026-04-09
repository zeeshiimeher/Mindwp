import {
  CaseStudyCardsSection,
  type CaseStudyCardsSectionItem,
} from '@/components/reusable/sections/core/CaseStudyCardsSection';
import type { IndustryCategory } from '@/domains/industries/catalog';

export interface IndustryCaseStudiesSectionProps {
  studies?: CaseStudyCardsSectionItem[];
  category?: IndustryCategory;
  title?: string;
  description?: string;
  limit?: number;
}

export function IndustryCaseStudiesSection({
  studies = [],
  title = 'Related Case Studies',
  description = 'Examples of how the system supports businesses in this industry.',
}: IndustryCaseStudiesSectionProps) {
  if (studies.length === 0) return null;

  return (
    <CaseStudyCardsSection
      title={title}
      description={description}
      studies={studies}
      cssPrefix='industry-case-studies-section'
    />
  );
}
