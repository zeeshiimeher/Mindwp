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
    title: 'Resources — Website and Handling Guides for Service Businesses',
    description:
      'Resources and guides for website clarity, local visibility, response, follow-up, reviews, and implementation decisions.',
    canonical: '/resources',
  },
  hero: {
    eyebrow: 'Free Resources',
    title: 'Resources That Expose Where Work Still Leaks',
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
      'Each guide shows what is breaking, what manual fixes look like, and where a clearer handling system starts to help.',
    initialVisibleCount: 15,
    loadMoreLabel: 'Load more resources',
    comingSoonText:
      'More guides are being added for website clarity, review timing, response handling, and follow-up.',
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
    id: 'website-clarity',
    label: 'Website Clarity',
    description: 'Guides for clearer pages, trust signals, enquiry paths, and website handoff.',
    slug: 'website-clarity',
    icon: 'settings',
    iconComponent: FileText,
  },
  {
    id: 'local-visibility',
    label: 'Local Visibility',
    description: 'Guides for local discovery, verification, service areas, and trust signals.',
    slug: 'local-visibility',
    icon: 'globe',
    iconComponent: FileText,
  },
  {
    id: 'lead-response',
    label: 'Lead Response',
    description: 'Guides for missed calls, forms, messages, booking handoff, and enquiry routing.',
    slug: 'lead-response',
    icon: 'bot',
    iconComponent: FileText,
  },
  {
    id: 'follow-up-crm',
    label: 'Follow-Up & CRM',
    description: 'Guides for enquiry ownership, quote follow-up, status, and next steps.',
    slug: 'follow-up-crm',
    icon: 'map-pin',
    iconComponent: FileText,
  },
  {
    id: 'reviews-proof',
    label: 'Reviews & Proof',
    description: 'Guides for review timing, feedback routing, visible proof, and local trust.',
    slug: 'reviews-proof',
    icon: 'star',
    iconComponent: FileText,
  },
  {
    id: 'frameworks',
    label: 'Frameworks',
    description: 'Decision guides and maps for finding what should be fixed first.',
    slug: 'frameworks',
    icon: 'trending-up',
    iconComponent: FileText,
  },
];

export const resources = Object.values(RESOURCE_REGISTRY);
export const categories = RESOURCE_CATEGORIES;

export function getCategoryBySlug(categorySlug: string) {
  return categories.find(category => category.slug === categorySlug);
}
