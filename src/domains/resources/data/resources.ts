import { FileText } from 'lucide-react';

import { buildContactHref } from '@/lib/contact/contactHref';

import { RESOURCE_REGISTRY } from '../generatedRegistry';
import type { ResourceCategory, ResourceCategoryMetadata } from '../types';

type ResourcesHubData = {
  seo: {
    title: string;
    description: string;
    canonical: string;
  };
  hero: {
    badge: string;
    title: string;
    description: string;
    primaryAction: { label: string; href: string };
    secondaryAction: { label: string; href: string };
  };
  topics: {
    title: string;
    description: string;
    countSuffix: string;
  };
  guides: {
    badge: string;
    title: string;
    description: string;
    initialVisibleCount: number;
    loadMoreLabel: string;
    comingSoonText: string;
  };
  faqPreview: {
    title: string;
    description: string;
    action: { label: string; href: string };
  };
  cta: {
    title: string;
    description: string;
    primaryAction: { label: string; href: string };
    secondaryAction: { label: string; href: string };
  };
};

type ResourceCategoryPresentation = ResourceCategoryMetadata & {
  iconComponent: typeof FileText;
};

export const RESOURCE_HUB_DATA: ResourcesHubData = {
  seo: {
    title: 'Resources | CRM & Automation Guides for Businesses',
    description:
      'Free resources, guides, and automation templates for service businesses. CRM setup, workflow automation, and growth strategies explained.',
    canonical: '/resources',
  },
  hero: {
    badge: 'Free Resources',
    title: 'Resources to Grow Your Service Business',
    description:
      'Practical guides, step-by-step tutorials, and proven strategies to help you get more customers, automate your business, and lead in local search.',
    primaryAction: { label: 'Browse Guides', href: '#guides' },
    secondaryAction: { label: 'View Blog', href: '/blog' },
  },
  topics: {
    title: 'Browse by Topic',
    description: 'Find solutions to the most common challenges service businesses face',
    countSuffix: 'guides',
  },
  guides: {
    badge: 'Featured Guides',
    title: 'Problem/Solution Guides',
    description:
      'Deep-dive guides that identify common problems and provide both DIY fixes and automated solutions',
    initialVisibleCount: 9,
    loadMoreLabel: 'Load more resources',
    comingSoonText: 'More guides coming soon on automation, reviews, and website performance',
  },
  faqPreview: {
    title: 'Have Questions?',
    description:
      'Browse our comprehensive FAQ section for quick answers to common questions about Smart Websites, SEO, automation, and more.',
    action: { label: 'Browse FAQ', href: '/faq' },
  },
  cta: {
    title: 'Ready to Apply the Right System?',
    description:
      'These guides show how the pieces fit together. We will show you how to turn website traffic into clearer, more consistent enquiries.',
    primaryAction: {
      label: 'Turn Website Traffic Into Leads',
      href: buildContactHref({
        system: 'smart-website-systems',
        sourceType: 'resource',
        slug: 'resources',
      }),
    },
    secondaryAction: { label: 'View All Services', href: '/services' },
  },
};

export const RESOURCE_CATEGORIES: ResourceCategoryPresentation[] = [
  {
    id: 'crm-automation',
    label: 'Automation & CRM',
    description:
      'Automations, workflows, and CRM setups that turn enquiries into bookings with less manual follow-up.',
    slug: 'crm-automation',
    colors: {
      badgeClass: 'resource-badge resource-badge--crm-automation',
    },
    icon: 'settings',
    iconComponent: FileText,
  },
  {
    id: 'smart-website-systems',
    label: 'Smart Website Systems',
    description:
      'Infrastructure-first website strategies that convert visitors into leads with intelligent systems.',
    slug: 'smart-website-systems',
    colors: {
      badgeClass: 'resource-badge resource-badge--smart-website-systems',
    },
    icon: 'globe',
    iconComponent: FileText,
  },
  {
    id: 'ai-lead-handling',
    label: 'AI Lead Handling',
    description:
      'AI-powered lead capture, routing, and follow-up systems that respond faster than any human team.',
    slug: 'ai-lead-handling',
    colors: {
      badgeClass: 'resource-badge resource-badge--ai-lead-handling',
    },
    icon: 'bot',
    iconComponent: FileText,
  },
  {
    id: 'local-seo-authority',
    label: 'Local Authority & SEO',
    description:
      'Strategies to build local search authority, improve rankings, and lead in your service area.',
    slug: 'local-seo-authority',
    colors: {
      badgeClass: 'resource-badge resource-badge--local-seo-authority',
    },
    icon: 'map-pin',
    iconComponent: FileText,
  },
  {
    id: 'reputation-review',
    label: 'Reputation & Reviews',
    description:
      'Automated review generation, reputation monitoring, and social proof systems for local businesses.',
    slug: 'reputation-review',
    colors: {
      badgeClass: 'resource-badge resource-badge--reputation-review',
    },
    icon: 'star',
    iconComponent: FileText,
  },
  {
    id: 'revenue-growth',
    label: 'Revenue Growth',
    description:
      'Revenue optimisation strategies including upsells, retention, and customer lifetime value growth.',
    slug: 'revenue-growth',
    colors: {
      badgeClass: 'resource-badge resource-badge--revenue-growth',
    },
    icon: 'trending-up',
    iconComponent: FileText,
  },
];

export const resources = Object.values(RESOURCE_REGISTRY);
export const categories = RESOURCE_CATEGORIES;

export function getCategoryBySlug(categorySlug: string) {
  return categories.find(category => category.slug === categorySlug);
}

export function getCategoryColors(category: ResourceCategory) {
  const metadata = categories.find(cat => cat.id === category);
  return (
    metadata?.colors || {
      badgeClass: 'resource-badge resource-badge--default',
    }
  );
}
