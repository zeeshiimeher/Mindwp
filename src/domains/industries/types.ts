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

export type IndustryCategoryPageData = {
  seo: IndustrySeoData;
  slug: string;
  type: 'category';
  category: IndustryCategory;
  hero: IndustryHeroData;
  systems: string[];
  industries?: string[];
  topics?: string[];
  faq: IndustryFaqData;
  cta: IndustryCtaData;
};

export type IndustryDetailPageData = {
  seo: IndustrySeoData;
  slug: string;
  type: 'detail';
  parentSlug: IndustryCategory;
  hero: IndustryHeroData;
  systems: string[];
  industries: string[];
  topics?: string[];
  faq: IndustryFaqData;
  cta: IndustryCtaData;
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
