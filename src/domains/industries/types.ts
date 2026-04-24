import type { ComponentProps } from 'react';

import type { ImageAccordionStripSection } from '@/components/reusable/sections/core/ImageAccordionStripSection';
import type { RelatedCardsSection } from '@/components/reusable/sections/core/RelatedCardsSection';
import {
  IndustryCaseStudiesSection,
  IndustryChallengesSection,
  IndustryChecklistSection,
  IndustryComparisonSection,
  IndustryHeroSection,
  IndustryOperatingPatternsSection,
  IndustryPackagesSection,
  IndustryPathwaysSection,
  IndustryProcessSection,
  IndustryServiceEnvironmentsSection,
  IndustrySolutionsSection,
  IndustrySpectrumSection,
  IndustryWorkflowExamplesSection,
} from '@/components/reusable/sections/industries';
import type { FAQSection } from '@/components/reusable/single/FAQSection';
import type { SmartCTAProps } from '@/components/system/SmartCTA';
import type { IndustryCategory } from '@/domains/industries/catalog';
import type { IndustryExploreSection } from '@/domains/industries/components/IndustryExploreSection';

type IndustryHeroProps = ComponentProps<typeof IndustryHeroSection>;
type IndustryChallengesProps = ComponentProps<typeof IndustryChallengesSection>;
type IndustryChecklistProps = ComponentProps<typeof IndustryChecklistSection>;
type IndustrySolutionsProps = ComponentProps<typeof IndustrySolutionsSection>;
type IndustryComparisonProps = ComponentProps<typeof IndustryComparisonSection>;
type IndustryPackagesProps = ComponentProps<typeof IndustryPackagesSection>;
type IndustryOperatingPatternsProps = ComponentProps<typeof IndustryOperatingPatternsSection>;
type IndustryPathwaysProps = ComponentProps<typeof IndustryPathwaysSection>;
type IndustryProcessProps = ComponentProps<typeof IndustryProcessSection>;
type IndustryServiceEnvironmentsProps = ComponentProps<typeof IndustryServiceEnvironmentsSection>;
type IndustrySpectrumProps = ComponentProps<typeof IndustrySpectrumSection>;
type IndustryImageStripProps = ComponentProps<typeof ImageAccordionStripSection>;
type IndustryDetailRoutesProps = ComponentProps<typeof RelatedCardsSection>;
type IndustryExploreProps = Omit<ComponentProps<typeof IndustryExploreSection>, 'title'>;
type IndustryCaseStudiesProps = ComponentProps<typeof IndustryCaseStudiesSection>;
type IndustryFaqProps = ComponentProps<typeof FAQSection>;
type IndustryCtaProps = Pick<
  SmartCTAProps,
  | 'title'
  | 'description'
  | 'metaItems'
  | 'cssPrefix'
  | 'backgroundColor'
  | 'headingLevel'
  | 'wrapper'
  | 'includeContainer'
> & {
  primaryAction?: { variant?: SmartCTAProps['primaryActionVariant'] };
};
type IndustryWorkflowExamplesProps = ComponentProps<typeof IndustryWorkflowExamplesSection>;

type IndustryCategorySectionControls = {
  subIndustries?: {
    enabled?: boolean;
    description?: string;
    cssPrefix?: string;
  };
  caseStudies?: {
    enabled?: boolean;
  };
};

export type IndustrySeoData = {
  title: string;
  description: string;
  canonical: string;
  openGraph?: {
    title?: string;
    description?: string;
    images?: string[];
  };
};

type IndustryPageDataBase = {
  slug: string;
  industries?: string[];
  systems?: string[];
  topics?: string[];
  seo: IndustrySeoData;
  hero: IndustryHeroProps;
  cta: IndustryCtaProps;
  relatedContent?: {
    enabled?: boolean;
  };
  sections?: {
    type: string;
    title?: string;
    description?: string;
  }[];
};

export type IndustryCategoryPageData = IndustryPageDataBase & {
  type: 'category';
  category: IndustryCategory;
  challenges?: IndustryChallengesProps;
  operatingPatterns?: IndustryOperatingPatternsProps;
  imageStrip?: IndustryImageStripProps;
  spectrum?: IndustrySpectrumProps;
  decisionChecklist?: IndustryChecklistProps;
  serviceEnvironments?: IndustryServiceEnvironmentsProps;
  solutions?: IndustrySolutionsProps;
  systemLayers?: IndustrySolutionsProps;
  process?: IndustryProcessProps;
  comparison?: IndustryComparisonProps;
  packages?: IndustryPackagesProps;
  pathways?: IndustryPathwaysProps;
  explore?: IndustryExploreProps;
  detailRoutes?: IndustryDetailRoutesProps;
  sectionControls?: IndustryCategorySectionControls;
  parentSlug?: undefined;
  caseStudies?: undefined;
  faq?: undefined;
};

export type IndustryDetailPageData = IndustryPageDataBase & {
  type: 'detail';
  parentSlug: IndustryCategory;
  challenges?: IndustryChallengesProps;
  operatingPatterns?: IndustryOperatingPatternsProps;
  imageStrip?: IndustryImageStripProps;
  solutions?: IndustrySolutionsProps;
  systemLayers?: IndustrySolutionsProps;
  comparison?: IndustryComparisonProps;
  packages?: IndustryPackagesProps;
  pathways?: IndustryPathwaysProps;
  workflowExamples?: IndustryWorkflowExamplesProps;
  explore?: IndustryExploreProps;
  caseStudies?: IndustryCaseStudiesProps;
  faq: IndustryFaqProps;
};

export type IndustryPageData = IndustryCategoryPageData | IndustryDetailPageData;
