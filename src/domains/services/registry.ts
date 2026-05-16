import { SERVICE_DOMAIN_REGISTRY } from '@/domains/services/pageData';
import type { ActiveSystem } from '@/lib/content-graph/canonical';

export interface ServiceMetadata {
  slug: string;
  path: string;
  title: string;
  description: string;
  badge: string;
  category: string;
  primarySystem: ActiveSystem;
  supportingSystems?: ActiveSystem[];
  topics: string[];
  kind: 'primary' | 'implementation';
}

export const SERVICE_REGISTRY = Object.fromEntries(
  (
    Object.values(SERVICE_DOMAIN_REGISTRY) as Array<
      (typeof SERVICE_DOMAIN_REGISTRY)[keyof typeof SERVICE_DOMAIN_REGISTRY]
    >
  ).map(entry => [
    entry.slug,
    {
      slug: entry.slug,
      path: entry.data.seo.canonical,
      title: entry.data.seo.title,
      description: entry.data.seo.description,
      badge: entry.data.eyebrow,
      category: entry.data.category,
      primarySystem: entry.data.primarySystem,
      supportingSystems: entry.data.supportingSystems,
      topics: entry.data.topics,
      kind: entry.kind,
    } satisfies ServiceMetadata,
  ])
) satisfies Record<string, ServiceMetadata>;

export const getServiceSlugs = (): string[] => {
  return Object.keys(SERVICE_REGISTRY);
};

export const getPrimaryServiceSlugs = (): string[] => {
  return Object.values(SERVICE_REGISTRY)
    .filter(service => service.kind === 'primary')
    .map(service => service.slug);
};

export const getImplementationServiceSlugs = (): string[] => {
  return Object.values(SERVICE_REGISTRY)
    .filter(service => service.kind === 'implementation')
    .map(service => service.slug);
};
