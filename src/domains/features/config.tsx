import type { ReactElement } from 'react';

import { RelatedSection } from '@/components/navigation/RelatedSection';
import { CTARegistryProvider } from '@/components/system/PageEnforcement';
import { FEATURE_DOMAIN_REGISTRY, type FeaturePageDataBySlug } from '@/domains/features/pageData';

type FeatureEntry<TData> = {
  data: TData;
  render: (data: TData) => ReactElement;
};

type FeatureDataSlug = keyof typeof FEATURE_DOMAIN_REGISTRY & keyof FeaturePageDataBySlug & string;
type AnyFeatureEntry = FeatureEntry<FeaturePageDataBySlug[keyof FeaturePageDataBySlug]>;

const createFeatureEntry = <TData,>(
  data: TData,
  render: (data: TData) => ReactElement
): FeatureEntry<TData> => ({ data, render });

function getFeatureDataOrThrow<TSlug extends FeatureDataSlug>(
  slug: TSlug
): FeaturePageDataBySlug[TSlug] {
  const data = FEATURE_DOMAIN_REGISTRY[slug].data;

  if (!data) {
    throw new Error(`Missing feature page data for slug "${slug}".`);
  }

  return data as FeaturePageDataBySlug[TSlug];
}

function buildFeatureEntry<TSlug extends FeatureDataSlug>(slug: TSlug) {
  const entry = FEATURE_DOMAIN_REGISTRY[slug];
  const Renderer = entry.renderer as (props: {
    data: FeaturePageDataBySlug[TSlug];
  }) => ReactElement;

  return [
    slug,
    createFeatureEntry(getFeatureDataOrThrow(slug), data => {
      return <Renderer data={data} />;
    }),
  ] as const;
}

export const FEATURE_ENTRY_BY_SLUG = Object.fromEntries(
  (Object.keys(FEATURE_DOMAIN_REGISTRY) as FeatureDataSlug[]).map(slug => buildFeatureEntry(slug))
) as {
  [K in keyof typeof FEATURE_DOMAIN_REGISTRY]: FeatureEntry<FeaturePageDataBySlug[K]>;
};

export type FeatureSlug = keyof typeof FEATURE_ENTRY_BY_SLUG;

export const isFeatureSlug = (slug: string): slug is FeatureSlug => {
  return slug in FEATURE_ENTRY_BY_SLUG;
};

export const getFeatureDataBySlug = (slug: FeatureSlug) => {
  return (FEATURE_ENTRY_BY_SLUG[slug] as AnyFeatureEntry).data;
};

export const renderFeaturePageBySlug = (slug: FeatureSlug): ReactElement => {
  const entry = FEATURE_ENTRY_BY_SLUG[slug] as AnyFeatureEntry;
  const primarySystem = entry.data.primarySystem;

  if (!primarySystem) {
    throw new Error(`Feature config requires primarySystem for ${slug}.`);
  }

  return (
    <CTARegistryProvider
      pageId={`feature:${slug}`}
      pageType='feature'
      primarySystem={primarySystem}
    >
      {entry.render(entry.data)}
      <RelatedSection pageId={`feature:${slug}`} pageType='feature' slug={slug} />
    </CTARegistryProvider>
  );
};

export const getFeatureConfigEntries = () =>
  Object.entries(FEATURE_ENTRY_BY_SLUG) as Array<
    [FeatureSlug, (typeof FEATURE_ENTRY_BY_SLUG)[FeatureSlug]]
  >;
