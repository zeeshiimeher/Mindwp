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
    description:
      'Articles and guides about clearer service, treatment, or procedure pages, trust signals, enquiry or booking paths, and website front-door clarity.',
    slug: 'website-clarity',
    icon: 'settings',
    iconComponent: FileText,
  },
  {
    id: 'local-visibility',
    label: 'Local Visibility',
    description:
      'Articles and guides about nearby customers or patients finding, checking, and trusting a business, clinic, or practice.',
    slug: 'local-visibility',
    icon: 'globe',
    iconComponent: FileText,
  },
  {
    id: 'lead-response',
    label: 'Lead Response',
    description:
      'Articles and guides about calls, forms, messages, booking requests, consultation requests, response paths, and enquiry routing.',
    slug: 'lead-response',
    icon: 'bot',
    iconComponent: FileText,
  },
  {
    id: 'follow-up-crm',
    label: 'Follow-Up & CRM',
    description:
      'Articles and guides about ownership, next steps, quote follow-up, consultation follow-up, reminders, and visible status.',
    slug: 'follow-up-crm',
    icon: 'map-pin',
    iconComponent: FileText,
  },
  {
    id: 'reviews-proof',
    label: 'Reviews & Proof',
    description:
      'Articles and guides about review timing, feedback routing, trust signals, public proof, and completed work or patient experience becoming visible.',
    slug: 'reviews-proof',
    icon: 'star',
    iconComponent: FileText,
  },
  {
    id: 'implementation-services',
    label: 'Implementation Services',
    description:
      'Articles and guides about practical website implementation paths under Smart Website Systems.',
    slug: 'implementation-services',
    icon: 'settings',
    iconComponent: FileText,
  },
  {
    id: 'home-services-examples',
    label: 'Home Services Examples',
    description:
      'Home-service examples showing how website clarity, local trust, enquiries, quotes, follow-up, reviews, and proof work in real service-business conditions.',
    slug: 'home-services-examples',
    icon: 'file-text',
    iconComponent: FileText,
  },
  {
    id: 'healthcare-practice-examples',
    label: 'Healthcare Practice Examples',
    description:
      'Specialist-clinic and private-practice examples where the website acts as the practice front door for patient trust, service/treatment clarity, booking, consultation follow-up, reviews, and proof.',
    slug: 'healthcare-practice-examples',
    icon: 'file-text',
    iconComponent: FileText,
  },
  {
    id: 'frameworks',
    label: 'Frameworks',
    description:
      'Frameworks, maps, checklists, and decision guides for understanding what should be fixed first.',
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
