import {
  CaseStudyCardsSection,
  type CaseStudyCardsSectionItem,
} from '@/components/reusable/sections/core/CaseStudyCardsSection';
import { getCaseStudiesTemplateMetadataByIndustryCategory } from '@/domains/case-studies/data';
import type { IndustryCategory } from '@/domains/industries/catalog';

/**
 * Renders related case studies for an industry category.
 * Resolves metadata by category and passes it to `CaseStudyCardsSection`.
 */
export interface IndustryCaseStudiesSectionProps {
  category: IndustryCategory;
  title?: string;
  description?: string;
  limit?: number;
}

export function IndustryCaseStudiesSection({
  category,
  title = 'Related Case Studies',
  description = 'Examples of how the system supports businesses in this industry.',
  limit,
}: IndustryCaseStudiesSectionProps) {
  const studies = getCaseStudiesTemplateMetadataByIndustryCategory(category);
  const cardStudies: CaseStudyCardsSectionItem[] = studies.slice(0, limit).map(study => ({
    slug: study.slug,
    industry: study.industryLabel,
    client: study.client,
    location: study.location,
    metaDescription: study.metaDescription,
    publishDate: study.publishDate,
  }));

  return (
    <CaseStudyCardsSection
      title={title}
      description={description}
      studies={cardStudies}
      cssPrefix='industry-case-studies-section'
    />
  );
}
