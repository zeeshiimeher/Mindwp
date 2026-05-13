/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ReactNode } from 'react';

import type { CaseStudyData, CaseStudyTemplateMetadata } from '@/domains/case-studies/types';

export type DesignModeValue = any;

export type CaseStudyMetadata = CaseStudyTemplateMetadata;

export type CaseStudyContent = Record<string, DesignModeValue>;

export type CaseStudyTemplateCopy = {
  backToCaseStudiesLabel?: string;
  heroIntroHtml?: ReactNode;
  ctaHeading?: string;
  ctaBody?: string;
  ctaMetaItems?: string[];
  [key: string]: DesignModeValue;
};

export type CaseStudyTemplateData = CaseStudyData;
