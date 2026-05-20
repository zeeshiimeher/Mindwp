import { calendarsData } from '@/domains/features/data/calendars';
import { crmData } from '@/domains/features/data/crm';
import { handlingPathsData } from '@/domains/features/data/handling-paths';
import { inboxData } from '@/domains/features/data/inbox';
import { reputationData } from '@/domains/features/data/reputation';
import { voiceCallsData } from '@/domains/features/data/voice-calls';
import { websiteChatData } from '@/domains/features/data/website-chat';
import { assertFeatureOwnership } from '@/domains/features/ownership';
import { CalendarsRenderer } from '@/domains/features/renderers/CalendarsRenderer';
import { CRMRenderer } from '@/domains/features/renderers/CRMRenderer';
import { HandlingPathsRenderer } from '@/domains/features/renderers/HandlingPathsRenderer';
import { InboxRenderer } from '@/domains/features/renderers/InboxRenderer';
import { ReputationRenderer } from '@/domains/features/renderers/ReputationRenderer';
import { VoiceCallsRenderer } from '@/domains/features/renderers/VoiceCallsRenderer';
import { WebsiteChatRenderer } from '@/domains/features/renderers/WebsiteChatRenderer';
import type { FeaturePageData } from '@/domains/features/types';

export type FeatureRenderer<TData extends FeaturePageData = FeaturePageData> = (props: {
  data: TData;
}) => React.JSX.Element;

export type FeatureDomainEntry<TData extends FeaturePageData = FeaturePageData> = {
  id: string;
  slug: string;
  data: TData;
  renderer: FeatureRenderer<TData>;
};

type FeatureDomainRegistry = {
  'voice-calls': FeatureDomainEntry<typeof voiceCallsData>;
  'website-chat': FeatureDomainEntry<typeof websiteChatData>;
  reputation: FeatureDomainEntry<typeof reputationData>;
  inbox: FeatureDomainEntry<typeof inboxData>;
  'handling-paths': FeatureDomainEntry<typeof handlingPathsData>;
  calendars: FeatureDomainEntry<typeof calendarsData>;
  crm: FeatureDomainEntry<typeof crmData>;
};

const createFeatureEntry = <TData extends FeaturePageData>(
  data: TData,
  renderer: FeatureRenderer<TData>
): FeatureDomainEntry<TData> => {
  assertFeatureOwnership(data);

  return {
    id: `feature:${data.slug}`,
    slug: data.slug,
    data,
    renderer,
  };
};

export const FEATURE_DOMAIN_REGISTRY: FeatureDomainRegistry = {
  'voice-calls': createFeatureEntry(voiceCallsData, VoiceCallsRenderer),
  'website-chat': createFeatureEntry(websiteChatData, WebsiteChatRenderer),
  reputation: createFeatureEntry(reputationData, ReputationRenderer),
  inbox: createFeatureEntry(inboxData, InboxRenderer),
  'handling-paths': createFeatureEntry(handlingPathsData, HandlingPathsRenderer),
  calendars: createFeatureEntry(calendarsData, CalendarsRenderer),
  crm: createFeatureEntry(crmData, CRMRenderer),
} as const;

export type FeaturePageDataBySlug = {
  [K in keyof FeatureDomainRegistry]: FeatureDomainRegistry[K]['data'];
};

export const FEATURE_PAGE_DATA_BY_SLUG = Object.fromEntries(
  Object.entries(FEATURE_DOMAIN_REGISTRY).map(([slug, entry]) => [slug, entry.data])
) as FeaturePageDataBySlug;

export const getFeaturePageDataBySlug = (slug: string): FeaturePageData | undefined => {
  return FEATURE_PAGE_DATA_BY_SLUG[slug as keyof FeaturePageDataBySlug];
};
