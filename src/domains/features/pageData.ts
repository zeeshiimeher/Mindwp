import { aiChatData } from '@/domains/features/data/aichat';
import { calendarsData } from '@/domains/features/data/calendars';
import { crmData } from '@/domains/features/data/crm';
import { inboxData } from '@/domains/features/data/inbox';
import { reputationData } from '@/domains/features/data/reputation';
import { voiceCallsData } from '@/domains/features/data/voice-calls';
import { workflowsData } from '@/domains/features/data/workflows';
import { AIChatRenderer } from '@/domains/features/renderers/AIChatRenderer';
import { CalendarsRenderer } from '@/domains/features/renderers/CalendarsRenderer';
import { CRMRenderer } from '@/domains/features/renderers/CRMRenderer';
import { InboxRenderer } from '@/domains/features/renderers/InboxRenderer';
import { ReputationRenderer } from '@/domains/features/renderers/ReputationRenderer';
import { VoiceCallsRenderer } from '@/domains/features/renderers/VoiceCallsRenderer';
import { WorkflowsRenderer } from '@/domains/features/renderers/WorkflowsRenderer';
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
  aichat: FeatureDomainEntry<typeof aiChatData>;
  reputation: FeatureDomainEntry<typeof reputationData>;
  inbox: FeatureDomainEntry<typeof inboxData>;
  workflows: FeatureDomainEntry<typeof workflowsData>;
  calendars: FeatureDomainEntry<typeof calendarsData>;
  crm: FeatureDomainEntry<typeof crmData>;
};

const createFeatureEntry = <TData extends FeaturePageData>(
  data: TData,
  renderer: FeatureRenderer<TData>
): FeatureDomainEntry<TData> => ({
  id: `feature:${data.slug}`,
  slug: data.slug,
  data,
  renderer,
});

export const FEATURE_DOMAIN_REGISTRY: FeatureDomainRegistry = {
  'voice-calls': createFeatureEntry(voiceCallsData, VoiceCallsRenderer),
  aichat: createFeatureEntry(aiChatData, AIChatRenderer),
  reputation: createFeatureEntry(reputationData, ReputationRenderer),
  inbox: createFeatureEntry(inboxData, InboxRenderer),
  workflows: createFeatureEntry(workflowsData, WorkflowsRenderer),
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
