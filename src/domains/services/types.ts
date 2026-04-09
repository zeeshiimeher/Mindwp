import type { LucideIcon } from 'lucide-react';

import type { ButtonProps } from '@/components/reusable/single/Button';

export type RelatedCardsVariant =
  | 'domain-only'
  | 'mix-ranked'
  | 'one-each-sic'
  | 'domain-resource-blog';

export interface RelatedCardsConfig {
  variant?: RelatedCardsVariant;
  title?: string;
  description?: string;
  enabled?: boolean;
}

export interface SectionIntro {
  title: string;
  description?: string;
  badge?: string;
}

export interface IconCardItem {
  icon: LucideIcon;
  title: string;
  description: string;
  iconType?: 'primary' | 'secondary' | 'accent';
  keywords?: string;
}

export interface ComparisonBlock {
  type: 'before' | 'after';
  title: string;
  items: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  q?: string;
  a?: string;
}

export interface QualificationBlock {
  header: SectionIntro;
  strongFitTitle: string;
  notForTitle: string;
  strongFit: {
    title: string;
    description: string;
  }[];
  notFor: {
    title: string;
    description: string;
  }[];
}

export interface ServicePageSections {
  comparison?: {
    header: SectionIntro;
    items: ComparisonBlock[];
  };

  value?: {
    header: SectionIntro;
    items: IconCardItem[];
  };

  coreLayer?: {
    header: SectionIntro;
    cards: {
      title: string;
      description: string;
      points: string[];
      featured?: boolean;
    }[];
    primaryAction?: ButtonProps;
  };

  types?: {
    header: SectionIntro;
    items: IconCardItem[];
  };

  included?: {
    header: SectionIntro;
    items: string[];
  };

  process?: {
    header: SectionIntro;
    steps: {
      number: string;
      title: string;
      description: string;
    }[];
  };

  visibilityFoundations?: {
    header: SectionIntro;
    tagline?: string;
    narrativeTitle: string;
    narrativeParagraphs: string[];
    items: IconCardItem[];
  };

  technologies?: {
    header: SectionIntro;
    items: {
      name: string;
      description: string;
      icon: LucideIcon;
    }[];
  };

  businessSizes?: {
    header: SectionIntro;
    items: {
      icon: LucideIcon;
      title: string;
      benefit: string;
      description: string;
      iconType?: 'primary' | 'secondary' | 'accent';
    }[];
  };

  concerns?: {
    header: SectionIntro;
    items: IconCardItem[];
  };

  qualification?: QualificationBlock;

  faq?: {
    header: SectionIntro;
    items: FAQItem[];
  };
}

export interface ServicePageData<
  TSections extends Record<string, unknown> = Record<string, unknown>,
> {
  slug: string;
  keywords: string[];
  badge: string;
  category: string;
  systems: string[];
  topics: string[];
  industries?: string[];
  features?: string[];

  seo: {
    title: string;
    description: string;
    canonical: string;
    openGraph?: {
      title?: string;
      description?: string;
      images?: string[];
      url?: string;
      [key: string]: unknown;
    };
    schema: {
      service: Record<string, unknown>;
    };
  };

  hero: {
    badge?: string;
    title: string;
    description: string;
    primaryAction?: ButtonProps;
    secondaryAction?: ButtonProps;
    list?: string[];
    cssPrefix?: string;
    backgroundColor?: string;
    [key: string]: unknown;
  };

  sections: TSections;

  cta?: {
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
  };
  inlineCta?: {
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
  };

  related?: RelatedCardsConfig;
}
