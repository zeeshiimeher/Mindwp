import type { LucideIcon } from 'lucide-react';

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
  badge: string;
  category: string;
  systems: string[];
  topics: string[];
  industries?: string[];
  features?: string[];

  seo: import('@/domains/shared/seo').SharedSeoData;

  hero: {
    badge?: string;
    title: string;
    description: string;
    list?: string[];
    cssPrefix?: string;
    backgroundColor?: string;
    [key: string]: unknown;
  };

  sections: TSections;

  cta: {
    title: string;
    description: string;
  };
  inlineCta?: {
    title: string;
    description: string;
  };
}
