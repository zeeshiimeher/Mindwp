import { resources } from '@/domains/resources/registry';
import type { ResourceCategory } from '@/domains/resources/types';

export type RelatedResource = {
  title: string;
  description: string;
  url: string;
  categoryLabel: string;
  featured?: boolean;
  featuredBadge?: string;
};

const RESOURCE_CATEGORY_LABEL_BY_ID = new Map<ResourceCategory, string>([
  ['website-clarity', 'Website Clarity'],
  ['local-visibility', 'Local Visibility'],
  ['lead-response', 'Lead Response'],
  ['follow-up-crm', 'Follow-Up & CRM'],
  ['reviews-proof', 'Reviews & Proof'],
  ['implementation-services', 'Implementation Services'],
  ['home-services-examples', 'Home Services Examples'],
  ['healthcare-practice-examples', 'Healthcare Practice Examples'],
  ['frameworks', 'Frameworks'],
]);

function labelForCategory(category: ResourceCategory) {
  return RESOURCE_CATEGORY_LABEL_BY_ID.get(category) ?? 'Resources';
}

export function getRelatedResources(
  category: ResourceCategory,
  currentUrl?: string,
  limit = 3
): RelatedResource[] {
  return resources
    .filter(resource => resource.category === category && resource.seo.canonical !== currentUrl)
    .slice(0, limit)
    .map((resource, index) => ({
      title: resource.title,
      description: resource.description,
      url: resource.seo.canonical,
      categoryLabel: labelForCategory(resource.category),
      featured: index === 0,
      featuredBadge: index === 0 ? 'Related framework' : undefined,
    }));
}

export function getRelatedResourcesContent(category: ResourceCategory): string[] {
  return [`Related ${labelForCategory(category).toLowerCase()} resources.`];
}

export function getRelatedResourcesHeading(category: ResourceCategory): string {
  return `More ${labelForCategory(category)} Resources`;
}
