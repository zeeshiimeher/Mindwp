import type { ReactNode } from 'react';

import type { CaseStudyData, CaseStudyTemplateMetadata } from '@/domains/case-studies/types';

export type CaseStudyMetadata = CaseStudyTemplateMetadata;

export type CaseStudyContent = {
  keyMetrics: Array<CaseStudyData['keyMetrics'][number] & { icon: string }>;
  problemHeading: string;
  problemDescription: string[];
  painPoints: string[];
  solutionHeading: string;
  solutionDescription: string;
  whatWeDid: {
    title: string;
    description: string;
    icon: string;
  }[];
  howWeDidIt: {
    phase: string;
    title: string;
    description: string;
    duration: string;
  }[];
  featuresUsed: {
    category: string;
    features: string[];
  }[];
  results: {
    metric: string;
    before: string;
    after: string;
    improvement: string;
    description: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  investment: {
    setup: string;
    monthly: string;
    roi?: string;
  };
};

export type CaseStudyTemplateCopy = {
  backToCaseStudiesLabel: string;

  heroIntroHtml: ReactNode;

  resultsSectionTitle: string;
  challengeBadgeLabel: string;
  solutionBadgeLabel: string;
  implementationBadgeLabel: string;
  implementationSectionTitle: string;
  implementationSectionSubtitle: string;
  techStackBadgeLabel: string;
  techStackSectionTitle: string;
  techStackSectionSubtitle: string;
  detailedResultsBadgeLabel: string;
  detailedResultsSectionTitle: string;

  resultsTableMetricLabel: string;
  resultsTableBeforeLabel: string;
  resultsTableAfterLabel: string;
  resultsTableImprovementLabel: string;

  testimonialSectionAriaLabel: string;

  investmentBadgeLabel: string;
  investmentSectionTitle: string;
  investmentCardTitle: string;
  investmentSetupFeeLabel: string;
  investmentMonthlyLabel: string;
  investmentTotalFirstYearLabel: string;
  investmentReturnCardTitle: string;
  investmentRoiSummaryLabel: string;
  investmentFooterNoteHtml: ReactNode;
  investmentTotalFirstYearUnavailableLabel: string;

  moreSuccessStoriesTitle: string;
  viewAllCaseStudiesLabel: string;

  ctaHeading: string;
  ctaBody: string;
  ctaPrimaryButtonLabel: string;
  ctaPrimaryButtonHref: string;
  ctaMetaItems: string[];
};
