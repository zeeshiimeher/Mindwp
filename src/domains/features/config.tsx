import type { ComponentType } from 'react';

import { CTARegistryProvider } from '@/components/system/PageEnforcement';
import { SmartRelatedSection } from '@/components/system/SmartRelatedSection';
import { FEATURE_DOMAIN_REGISTRY, getFeaturePageDataBySlug } from '@/domains/features/registry';
import type { FeaturePageData } from '@/domains/features/types';

type FeatureEntry<TData extends FeaturePageData = FeaturePageData> = {
  page: ComponentType<{ data: TData }>;
};

const createFeatureEntry = <TData extends FeaturePageData>(
  page: ComponentType<{ data: TData }>
): FeatureEntry<TData> => ({ page });

export const FEATURE_ENTRY_BY_SLUG = Object.fromEntries(
  Object.entries(FEATURE_DOMAIN_REGISTRY).map(([slug, entry]) => [
    slug,
    createFeatureEntry(entry.page),
  ])
) as {
  [K in keyof typeof FEATURE_DOMAIN_REGISTRY]: FeatureEntry<
    (typeof FEATURE_DOMAIN_REGISTRY)[K]['data']
  >;
};

export type FeatureSlug = keyof typeof FEATURE_ENTRY_BY_SLUG;

export const isFeatureSlug = (slug: string): slug is FeatureSlug => {
  return slug in FEATURE_ENTRY_BY_SLUG;
};

export const getFeatureDataBySlug = (slug: FeatureSlug) => {
  const data = getFeaturePageDataBySlug(slug);

  if (!data) {
    throw new Error(`Missing feature page data for slug "${slug}".`);
  }

  return data;
};

export const getFeaturePageBySlug = (slug: FeatureSlug) => {
  return FEATURE_ENTRY_BY_SLUG[slug].page;
};

export const renderFeaturePageBySlug = (slug: FeatureSlug) => {
  const FeaturePage = getFeaturePageBySlug(slug);
  const data = getFeatureDataBySlug(slug);
  const primarySystem = data.systems?.[0];

  if (!primarySystem) {
    throw new Error(`Feature config requires systems[0] for ${slug}.`);
  }

  return (
    <CTARegistryProvider
      pageId={`feature:${slug}`}
      pageType='feature'
      primarySystem={primarySystem}
    >
      <FeaturePage data={data} />
      <SmartRelatedSection pageId={`feature:${slug}`} pageType='feature' slug={slug} />
    </CTARegistryProvider>
  );
};

export const getFeatureConfigEntries = () =>
  Object.entries(FEATURE_ENTRY_BY_SLUG) as Array<
    [FeatureSlug, (typeof FEATURE_ENTRY_BY_SLUG)[FeatureSlug]]
  >;
