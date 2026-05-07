import type { ReactElement } from 'react';

import { CTARegistryProvider } from '@/components/system/PageEnforcement';
import { SmartRelatedSection } from '@/components/system/SmartRelatedSection';
import { SERVICE_DOMAIN_REGISTRY, type ServicePageDataBySlug } from '@/domains/services/pageData';

type ServiceEntry<TData> = {
  data: TData;
  render: (data: TData, slug: string) => ReactElement;
};

type ServiceDataSlug = keyof typeof SERVICE_DOMAIN_REGISTRY & keyof ServicePageDataBySlug & string;
type AnyServiceEntry = ServiceEntry<ServicePageDataBySlug[keyof ServicePageDataBySlug]>;

const createServiceEntry = <TData,>(
  data: TData,
  render: (data: TData, slug: string) => ReactElement
): ServiceEntry<TData> => ({ data, render });

function renderServiceEntry(slug: ServiceSlug): ReactElement {
  const entry = SERVICE_ENTRY_BY_SLUG_WITH_ALIASES[slug] as AnyServiceEntry;
  const primarySystem = (entry.data as { systems?: string[] }).systems?.[0];

  if (!primarySystem) {
    throw new Error(`Service config requires systems[0] for ${slug}.`);
  }

  const registryEntry = SERVICE_DOMAIN_REGISTRY[slug as keyof typeof SERVICE_DOMAIN_REGISTRY];
  const relatedEnabled = registryEntry?.options?.relatedSection?.enabled ?? true;

  return (
    <CTARegistryProvider
      pageId={`service:${slug}`}
      pageType='service'
      primarySystem={primarySystem}
    >
      {entry.render(entry.data, slug)}
      {relatedEnabled && (
        <SmartRelatedSection pageId={`service:${slug}`} pageType='service' slug={slug} />
      )}
    </CTARegistryProvider>
  );
}

function getServiceDataOrThrow<TSlug extends ServiceDataSlug>(
  slug: TSlug
): ServicePageDataBySlug[TSlug] {
  const data = SERVICE_DOMAIN_REGISTRY[slug].data;

  if (!data) {
    throw new Error(`Missing service page data for slug "${slug}".`);
  }

  return data as ServicePageDataBySlug[TSlug];
}

function buildServiceEntry<TSlug extends ServiceDataSlug>(slug: TSlug) {
  const entry = SERVICE_DOMAIN_REGISTRY[slug];
  const Renderer = entry.renderer as (props: {
    data: ServicePageDataBySlug[TSlug];
    slug: string;
  }) => ReactElement;

  return [
    slug,
    createServiceEntry(getServiceDataOrThrow(slug), (data, serviceSlug) => {
      return <Renderer data={data} slug={serviceSlug} />;
    }),
  ] as const;
}

export const SERVICE_ENTRY_BY_SLUG = Object.fromEntries(
  (Object.keys(SERVICE_DOMAIN_REGISTRY) as ServiceDataSlug[]).map(slug => buildServiceEntry(slug))
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
  return (SERVICE_ENTRY_BY_SLUG_WITH_ALIASES[slug] as AnyServiceEntry).data;
};

export const renderServicePageBySlug = (slug: ServiceSlug): ReactElement => {
  return renderServiceEntry(slug);
};

export const getSlugFromCanonical = (canonical: string) => {
  const segments = canonical.split('/').filter(Boolean);
  return segments[segments.length - 1] ?? '';
};
