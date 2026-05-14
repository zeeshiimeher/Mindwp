import type { ReactNode } from 'react';

import type { CaseStudyData, CaseStudyTemplateMetadata } from '@/domains/case-studies/types';

export type CaseStudyMetadata = CaseStudyTemplateMetadata;

export type CaseStudyContent = Record<string, unknown>;

export type CaseStudyTemplateCopy = {
  backToCaseStudiesLabel?: string;
  heroIntroHtml?: ReactNode;
  ctaHeading?: string;
  ctaBody?: string;
  ctaMetaItems?: string[];
  [key: string]: unknown;
};

export type CaseStudyTemplateData = CaseStudyData;
