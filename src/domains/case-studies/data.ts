import { caseStudies } from './registry';
import type { CaseStudyTemplateMetadata } from './types';

export function getCaseStudiesTemplateMetadata(): CaseStudyTemplateMetadata[] {
  return caseStudies;
}

function sortNewestFirst(studies: CaseStudyTemplateMetadata[]) {
  return [...studies].sort(
    (left, right) => new Date(right.publishDate).getTime() - new Date(left.publishDate).getTime()
  );
}

export function getLatestCaseStudiesTemplateMetadata(limit = 3): CaseStudyTemplateMetadata[] {
  return sortNewestFirst(caseStudies).slice(0, limit);
}

export function getCaseStudiesTemplateMetadataBySystems(
  systems: string[],
  limit = 3
): CaseStudyTemplateMetadata[] {
  const systemSet = new Set(systems);

  return sortNewestFirst(
    caseStudies.filter(study => study.systems.some(system => systemSet.has(system)))
  ).slice(0, limit);
}

export function getCaseStudiesTemplateMetadataByIndustryCategory(
  category: string
): CaseStudyTemplateMetadata[] {
  return caseStudies.filter(study => study.industryCategory === category);
}
