import { caseStudies } from './registry';
import type { CaseStudyTemplateMetadata } from './types';

export function getCaseStudiesTemplateMetadata(): CaseStudyTemplateMetadata[] {
  return caseStudies;
}

export function getCaseStudiesTemplateMetadataByIndustryCategory(
  category: string
): CaseStudyTemplateMetadata[] {
  return caseStudies.filter(study => study.industryCategory === category);
}
