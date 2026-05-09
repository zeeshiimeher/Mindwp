import type { IndustryCategory } from '@/domains/industries/catalog';

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

export type IndustryHeroData = {
  badge: string;
  title: string;
  description: string;
  list: string[];
};

export type IndustrySectionHeading = {
  kicker?: string;
  title: string;
  description?: string;
};

export type IndustrySectionData = {
  header: IndustrySectionHeading;
  items?: string[];
  routes?: IndustryRouteSummary[];
  systems?: string[];
};

export type IndustryRouteSummary = {
  title: string;
  href: string;
  description?: string;
};

export type IndustryFaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type IndustryFaqData = {
  header: IndustrySectionHeading;
  items: IndustryFaqItem[];
};

export type IndustryCtaData = {
  heading: {
    kicker?: string;
    title: string;
    description: string;
  };
  expectations?: {
    num?: string;
    text: string;
  }[];
  reassurance?: {
    noSell?: string;
    tone?: string;
  };
};

type IndustryPageDataBase = {
  seo: IndustrySeoData;
  slug: string;
  hero: IndustryHeroData;
  industries?: string[];
  systems: string[];
  topics?: string[];
  faq: IndustryFaqData;
  cta: IndustryCtaData;
  sections?: {
    type: string;
    title?: string;
    description?: string;
  }[];
};

export type IndustryCategoryPageData = IndustryPageDataBase & {
  type: 'category';
  category: IndustryCategory;
  categoryLeaks: IndustrySectionData;
  sharedPattern: IndustrySectionData;
  breakpoints: IndustrySectionData;
  operatingModels: IndustrySectionData;
  pathwayMap: IndustrySectionData;
  startingSystems: IndustrySectionData;
  detailRoutes: IndustrySectionData;
  handledState: IndustrySectionData;
  scenarioStrip: IndustrySectionData;
  parentSlug?: undefined;
};

export type IndustryDetailPageData = IndustryPageDataBase & {
  type: 'detail';
  parentSlug: IndustryCategory;
  industryPattern: IndustrySectionData;
  leakTimeline: IndustrySectionData;
  beforeAfter: IndustrySectionData;
  workbench: IndustrySectionData;
  startingPoints: IndustrySectionData;
  workflowExamples: IndustrySectionData;
  relevantSystems: IndustrySectionData;
  scenario: IndustrySectionData;
};

export type IndustryCategoryRendererProps = {
  data: IndustryCategoryPageData;
  slug: string;
};

export type IndustryDetailRendererProps = {
  data: IndustryDetailPageData;
  slug: string;
};

export type IndustryPageData = IndustryCategoryPageData | IndustryDetailPageData;
