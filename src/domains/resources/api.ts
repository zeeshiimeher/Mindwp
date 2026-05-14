import { FileText } from 'lucide-react';

import { RESOURCE_REGISTRY } from '@/domains/resources/generatedRegistry';
import type { ResourceCategoryMetadata } from '@/domains/resources/types';

type ResourcesHubData = {
  seo: {
    title: string;
    description: string;
    canonical: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  topics: {
    title: string;
    description: string;
    countSuffix: string;
  };
  guides: {
    eyebrow: string;
    title: string;
    description: string;
    initialVisibleCount: number;
    loadMoreLabel: string;
    comingSoonText: string;
  };
  cta: {
    heading: {
      title: string;
      description: string;
      eyebrow?: string;
    };
  };
};

type ResourceCategoryPresentation = ResourceCategoryMetadata & {
  iconComponent: typeof FileText;
};

export const RESOURCE_HUB_DATA: ResourcesHubData = {
  seo: {
    title: 'Resources — Automation & CRM Guides for Local Businesses',
    description:
      'Free resources, guides, and automation templates for local businesses. CRM automation, workflow setup, and business growth strategies.',
    canonical: '/resources',
  },
  hero: {
    eyebrow: 'Free Resources',
    title: 'Resources That Expose Where Revenue Still Leaks',
    description:
      'Use these guides to identify where visibility, response speed, follow-up, and conversion still depend on guesswork, then move toward the system that fixes it.',
  },
  topics: {
    title: 'Browse by operating problem',
    description:
      'Choose the problem cluster first so each next page points toward the system decision that matters.',
    countSuffix: 'guides',
  },
  guides: {
    eyebrow: 'Featured Guides',
    title: 'Guides that move from symptom to system fix',
    description:
      'Each guide shows what is breaking, what manual fixes look like, and where a structured operating system starts paying back.',
    initialVisibleCount: 15,
    loadMoreLabel: 'Load more resources',
    comingSoonText:
      'More guides are being added for automation, review generation, response handling, and conversion control.',
  },
  cta: {
    heading: {
      title: 'Ready to turn the right diagnosis into a working system?',
      description:
        'These guides isolate the bottleneck. We will show you which service path fixes it without adding more manual work or disconnected tools.',
    },
  },
};

export const RESOURCE_CATEGORIES: ResourceCategoryPresentation[] = [
  {
    id: 'crm-automation',
    label: 'Automation & CRM',
    description:
      'Automations, workflows, and CRM setups that turn enquiries into bookings with less manual follow-up.',
    slug: 'crm-automation',
    icon: 'settings',
    iconComponent: FileText,
  },
  {
    id: 'smart-website-systems',
    label: 'Smart Website Systems',
    description:
      'Infrastructure-first website strategies that convert visitors into leads with intelligent systems.',
    slug: 'smart-website-systems',
    icon: 'globe',
    iconComponent: FileText,
  },
  {
    id: 'ai-lead-handling',
    label: 'AI Lead Handling',
    description:
      'AI-powered lead capture, routing, and follow-up systems that respond faster than any human team.',
    slug: 'ai-lead-handling',
    icon: 'bot',
    iconComponent: FileText,
  },
  {
    id: 'local-seo-authority',
    label: 'Local Authority & SEO',
    description:
      'Strategies to build local search authority, improve rankings, and dominate your service area.',
    slug: 'local-seo-authority',
    icon: 'map-pin',
    iconComponent: FileText,
  },
  {
    id: 'reputation-review',
    label: 'Reputation & Reviews',
    description:
      'Automated review generation, reputation monitoring, and social proof systems for local businesses.',
    slug: 'reputation-review',
    icon: 'star',
    iconComponent: FileText,
  },
  {
    id: 'revenue-growth',
    label: 'Revenue Growth',
    description:
      'Revenue optimisation strategies including upsells, retention, and customer lifetime value growth.',
    slug: 'revenue-growth',
    icon: 'trending-up',
    iconComponent: FileText,
  },
];

export const resources = Object.values(RESOURCE_REGISTRY);
export const categories = RESOURCE_CATEGORIES;

export function getCategoryBySlug(categorySlug: string) {
  return categories.find(category => category.slug === categorySlug);
}
