/* Resource utility helpers (related resources, metadata-driven fallbacks). */

import type { ResourceCategory } from '@/domains/resources/types';

export type RelatedResource = {
  title: string;
  description: string;
  url: string;
  categoryLabel: string;
  featured?: boolean;
  featuredBadge?: string;
};

type ResourceIndexItem = {
  title: string;
  description: string;
  category: ResourceCategory;
  seo: {
    canonical: string;
  };
  publishedAt: string;
  updatedAt?: string;
};

const RESOURCE_CATEGORY_LABEL_BY_ID = new Map<ResourceCategory, string>([
  ['crm-automation', 'Automation & CRM'],
  ['smart-website-systems', 'Smart Website Systems'],
  ['ai-lead-handling', 'AI Lead Handling'],
  ['local-seo-authority', 'Local Authority & SEO'],
  ['reputation-review', 'Reputation & Reviews'],
  ['revenue-growth', 'Revenue Growth'],
]);

const RESOURCE_INDEX: ResourceIndexItem[] = [
  {
    title: 'Build a 5-Minute Auto-Reply Funnel (SMS + Email Template)',
    description:
      'Set up automatic replies for enquiries in 5 minutes. Get more bookings with instant SMS and email responses that feel personal but run on autopilot.',
    category: 'crm-automation',
    seo: { canonical: '/resources/auto-reply-funnel' },
    publishedAt: '2026-01-28',
  },
  {
    title: 'CRM Pipeline Automation: Stop Losing Leads (Stages + Follow-Up Templates)',
    description:
      'A practical CRM pipeline you can set up in under an hour: stages, automation triggers, and follow-up templates so every lead gets a next step.',
    category: 'crm-automation',
    seo: { canonical: '/resources/crm-pipeline-automation' },
    publishedAt: '2026-02-05',
  },
];

/**
 * Generates related resources for a given resource category
 */
export function getRelatedResources(
  category: ResourceCategory,
  currentUrl: string,
  limit = 3
): RelatedResource[] {
  const categoryLabelById = RESOURCE_CATEGORY_LABEL_BY_ID;
  const getCanonical = (resource: ResourceIndexItem) => resource.seo.canonical;

  const sortByNewest = (a: ResourceIndexItem, b: ResourceIndexItem) => {
    const aDate = Date.parse(`${a.updatedAt ?? a.publishedAt}T00:00:00Z`);
    const bDate = Date.parse(`${b.updatedAt ?? b.publishedAt}T00:00:00Z`);
    return bDate - aDate;
  };

  const guideCandidates = RESOURCE_INDEX.filter(r => getCanonical(r) !== currentUrl)
    .slice()
    .sort(sortByNewest);

  const sameCategoryGuides = guideCandidates
    .filter(r => r.category === category)
    .slice(0, limit)
    .map(r => ({
      title: r.title,
      description: r.description,
      url: getCanonical(r),
      categoryLabel: categoryLabelById.get(r.category) ?? 'Resources',
    }));

  if (sameCategoryGuides.length) return sameCategoryGuides;

  const otherGuides = guideCandidates.slice(0, limit).map(r => ({
    title: r.title,
    description: r.description,
    url: getCanonical(r),
    categoryLabel: categoryLabelById.get(r.category) ?? 'Resources',
  }));

  if (otherGuides.length) return otherGuides;

  const curatedFallbackByCategory: Partial<Record<ResourceCategory, RelatedResource[]>> = {
    ['crm-automation']: [
      {
        title: 'CRM Infrastructure: Turn Leads Into Customers',
        description:
          'Set up automated workflows that nurture leads and close deals without manual follow-up.',
        url: '/services/crm-infrastructure-implementation',
        categoryLabel: 'CRM Infrastructure',
        featured: true,
        featuredBadge: 'Most Popular',
      },
      {
        title: 'Workflow Automation: Streamline Your Business',
        description:
          'Create automated processes that handle repetitive tasks and improve efficiency.',
        url: '/features/workflows',
        categoryLabel: 'Automation',
      },
      {
        title: 'Smart CRM: Intelligent Customer Management',
        description: 'AI-powered CRM that understands your customers and predicts their needs.',
        url: '/features/crm',
        categoryLabel: 'CRM',
      },
    ],
  };

  return curatedFallbackByCategory[category] || [];
}

/**
 * Generates related resources content for a given resource category
 */
export function getRelatedResourcesContent(category: ResourceCategory): string[] {
  const categoryLabel = RESOURCE_CATEGORY_LABEL_BY_ID.get(category) ?? 'Resources';

  return [
    `More in ${categoryLabel}`,
    'Keep going with these guides in the same category.',
    'Read Guide',
  ];
}

/**
 * Generates related resources heading for a given resource category
 */
export function getRelatedResourcesHeading(category: ResourceCategory): string {
  const categoryLabel = RESOURCE_CATEGORY_LABEL_BY_ID.get(category) ?? 'Resources';

  return `More ${categoryLabel} Guides`;
}
