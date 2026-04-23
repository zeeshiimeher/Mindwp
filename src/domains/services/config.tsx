import type { ReactElement } from 'react';

import { CTARegistryProvider } from '@/components/system/PageEnforcement';
import { SmartRelatedSection } from '@/components/system/SmartRelatedSection';
import { SERVICE_DOMAIN_REGISTRY, type ServicePageDataBySlug } from '@/domains/services/pageData';

type ServiceEntry<TData> = {
  data: TData;
  render: (data: TData, slug: string) => ReactElement;
};

const createServiceEntry = <TData,>(
  data: TData,
  render: (data: TData, slug: string) => ReactElement
): ServiceEntry<TData> => ({ data, render });

function renderServiceEntry(slug: ServiceSlug): ReactElement {
  const entry = SERVICE_ENTRY_BY_SLUG_WITH_ALIASES[slug];
  const render = entry.render as (data: typeof entry.data, slug: string) => ReactElement;

  return (
    <CTARegistryProvider pageId={`service:${slug}`} pageType='service'>
      {render(entry.data, slug)}
      <SmartRelatedSection pageId={`service:${slug}`} pageType='service' slug={slug} />
    </CTARegistryProvider>
  );
}

function getServiceDataOrThrow<TSlug extends keyof ServicePageDataBySlug>(
  slug: TSlug
): ServicePageDataBySlug[TSlug] {
  const data = SERVICE_DOMAIN_REGISTRY[slug].data;

  if (!data) {
    throw new Error(`Missing service page data for slug "${slug}".`);
  }

  return data as ServicePageDataBySlug[TSlug];
}

export const SERVICE_ENTRY_BY_SLUG = Object.fromEntries(
  Object.entries(SERVICE_DOMAIN_REGISTRY).map(([slug, entry]) => [
    slug,
    createServiceEntry(getServiceDataOrThrow(slug as keyof ServicePageDataBySlug), (data, serviceSlug) => {
      const Renderer = entry.renderer;
      return <Renderer data={data} slug={serviceSlug} />;
    }),
  ])
) as {
  [K in keyof typeof SERVICE_DOMAIN_REGISTRY]: ServiceEntry<ServicePageDataBySlug[K]>;
};

export const SERVICE_ENTRY_ALIASES_BY_SLUG = {} as const;

export const SERVICE_ENTRY_BY_SLUG_WITH_ALIASES = {
  ...SERVICE_ENTRY_BY_SLUG,
  ...SERVICE_ENTRY_ALIASES_BY_SLUG,
} as const;

export type ServiceSlug = keyof typeof SERVICE_ENTRY_BY_SLUG_WITH_ALIASES;

export const isServiceSlug = (slug: string): slug is ServiceSlug => {
  return slug in SERVICE_ENTRY_BY_SLUG_WITH_ALIASES;
};

export const getServiceDataBySlug = (slug: ServiceSlug) => {
  return SERVICE_ENTRY_BY_SLUG_WITH_ALIASES[slug].data;
};

export const renderServicePageBySlug = (slug: ServiceSlug): ReactElement => {
  return renderServiceEntry(slug);
};

export const getSlugFromCanonical = (canonical: string) => {
  const segments = canonical.split('/').filter(Boolean);
  return segments[segments.length - 1] ?? '';
};
