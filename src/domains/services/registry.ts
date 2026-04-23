import { SERVICE_DOMAIN_REGISTRY } from '@/domains/services/pageData';

export interface ServiceMetadata {
  slug: string;
  path: string;
  title: string;
  description: string;
  keywords: string[];
  badge: string;
  category: string;
  systems: string[];
  topics: string[];
}

export const SERVICE_REGISTRY = Object.fromEntries(
  Object.values(SERVICE_DOMAIN_REGISTRY).map(({ data, slug }) => [
    slug,
    {
      slug,
      path: data.seo.canonical,
      title: data.seo.title,
      description: data.seo.description,
      keywords: data.keywords,
      badge: data.badge,
      category: data.category,
      systems: data.systems,
      topics: data.topics,
    } satisfies ServiceMetadata,
  ])
) satisfies Record<string, ServiceMetadata>;

export const getServiceSlugs = (): string[] => {
  return Object.keys(SERVICE_REGISTRY);
};
