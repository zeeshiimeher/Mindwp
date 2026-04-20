import type { ComponentType } from 'react';

import { CTARegistryProvider } from '@/components/system/PageEnforcement';
import { SmartRelatedSection } from '@/components/system/SmartRelatedSection';
import AiChat from '@/domains/features/pages/aichat';
import Calendars from '@/domains/features/pages/calendars';
import Crm from '@/domains/features/pages/crm';
import Inbox from '@/domains/features/pages/inbox';
import Reputation from '@/domains/features/pages/reputation';
import VoiceCalls from '@/domains/features/pages/voicecalls';
import Workflows from '@/domains/features/pages/workflows';
import { getFeaturePageDataBySlug } from '@/domains/features/registry';
import type { FeaturePageData } from '@/domains/features/types';

type FeatureEntry<TData extends FeaturePageData = FeaturePageData> = {
  page: ComponentType<{ data: TData }>;
};

const createFeatureEntry = <TData extends FeaturePageData>(
  page: ComponentType<{ data: TData }>
): FeatureEntry<TData> => ({ page });

export const FEATURE_ENTRY_BY_SLUG = {
  voicecalls: createFeatureEntry(VoiceCalls),
  aichat: createFeatureEntry(AiChat),
  reputation: createFeatureEntry(Reputation),
  inbox: createFeatureEntry(Inbox),
  workflows: createFeatureEntry(Workflows),
  calendars: createFeatureEntry(Calendars),
  crm: createFeatureEntry(Crm),
} as const;

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

  return (
    <CTARegistryProvider pageId={`feature:${slug}`} pageType='feature'>
      <FeaturePage data={data} />
      <SmartRelatedSection pageId={`feature:${slug}`} pageType='feature' slug={slug} />
    </CTARegistryProvider>
  );
};

export const getFeatureConfigEntries = () =>
  Object.entries(FEATURE_ENTRY_BY_SLUG) as Array<
    [FeatureSlug, (typeof FEATURE_ENTRY_BY_SLUG)[FeatureSlug]]
  >;
