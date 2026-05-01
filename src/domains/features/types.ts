import type { LucideIcon } from 'lucide-react';

import type {
  FeatureCategory,
  ProcessStep,
  ScenarioSolutionCardProps,
  ServiceBenefitItem,
} from '@/components/reusable/single';
import type { SharedSeoData } from '@/domains/shared/seo';
import type { VariantType } from '@/lib/ui/variantStyles';

type StatItem = {
  value: string;
  label: string;
};

type ProcessSection = {
  badge?: string;
  title: string;
  description?: string;
  steps: ProcessStep[];
};

type IconBenefitCardsSection = {
  badge?: string;
  title: string;
  description?: string;
  items: ServiceBenefitItem[];
};

type ScenarioCardsSection = {
  badge?: string;
  title: string;
  description?: string;
  scenarioLabel?: string;
  solutionLabel?: string;
  items: ScenarioSolutionCardProps[];
};

type CapabilitiesSection = {
  badge?: string;
  title: string;
  description?: string;
  featureCategories: FeatureCategory[];
  columns?: 2 | 3 | 4;
  variant?: 'default' | 'stacked';
};

type FAQSection = {
  badge?: string;
  title: string;
  description?: string;
  items: Array<{ question: string; answer: string }>;
};

type ExploreSection = {
  badge?: string;
  title: string;
  description?: string;
  cards: Array<{
    icon: LucideIcon;
    title: string;
    description: string;
    href: string;
    gradient?: string;
    iconBg?: string;
    iconType?: VariantType;
  }>;
};

type IconInfoCardsSection = {
  badge?: string;
  title: string;
  description?: string;
  items: Array<{
    icon: LucideIcon;
    title: string;
    description: string;
  }>;
};

type ProblemCardsSection = {
  badge?: string;
  title: string;
  items: Array<{
    before: string;
    after: string;
  }>;
};

type TestimonialsSection = {
  badge?: string;
  title: string;
  description?: string;
  items: Array<{
    quote: string;
    author: string;
    business: string;
    rating: number;
  }>;
};

type TestimonialSection = {
  title?: string;
  quote: string;
  author: string;
  business: string;
  rating: number;
};

type VisualFlowSection = {
  title: string;
  triggerTitle: string;
  triggerSubtitle: string;
  actions: Array<{
    icon: LucideIcon;
    title: string;
    subtitle: string;
  }>;
  triggerIcon: LucideIcon;
  connectorIcon: LucideIcon;
};

export type FeaturePageData = {
  slug: string;
  badge?: string;
  category?: string;
  systems: string[];
  topics?: string[];

  seo: SharedSeoData;

  hero: {
    badge: string;
    title: string;
    description: string;
    stats?: StatItem[];
  };

  sections: {
    process: ProcessSection;
    benefits: IconBenefitCardsSection;
    useCases: ScenarioCardsSection;
    capabilities: CapabilitiesSection;
    faq: FAQSection;
    explore: ExploreSection;
    channels?: IconInfoCardsSection;
    painPoints?: ProblemCardsSection;
    testimonials?: TestimonialsSection;
    testimonial?: TestimonialSection;
    visualFlow?: VisualFlowSection;
  };

  cta: {
    heading: {
      title: string;
      description: string;
      kicker?: string;
    };
    actions: [{ label: string; href: string; primary: true }];
  };
};
