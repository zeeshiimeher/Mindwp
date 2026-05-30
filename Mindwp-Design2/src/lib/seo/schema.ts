import { SITE } from '@/config/site';
import { toAbsoluteUrl } from '@/lib/seo/metadata';

/** JSON-LD builders. Kept light — Organization, WebSite, Service, Breadcrumb. */

type JsonLdObject = Record<string, unknown>;

export function organizationSchema(): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: `${SITE.origin}/`,
    description: SITE.description,
  };
}

export function websiteSchema(): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: `${SITE.origin}/`,
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
}): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: input.name,
    description: input.description,
    url: toAbsoluteUrl(input.path),
    provider: {
      '@type': 'Organization',
      name: SITE.name,
      url: `${SITE.origin}/`,
    },
  };
}

export function breadcrumbSchema(
  crumbs: { name: string; path: string }[]
): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: toAbsoluteUrl(crumb.path),
    })),
  };
}
