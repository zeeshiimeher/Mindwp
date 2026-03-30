import type { ComponentType } from 'react';

import { aiChatData } from '@/domains/features/data/aichat';
import { calendarsData } from '@/domains/features/data/calendars';
import { crmData } from '@/domains/features/data/crm';
import { inboxData } from '@/domains/features/data/inbox';
import { reputationData } from '@/domains/features/data/reputation';
import { voicecallsData } from '@/domains/features/data/voicecalls';
import { workflowsData } from '@/domains/features/data/workflows';
import AiChat from '@/domains/features/pages/aichat';
import Calendars from '@/domains/features/pages/calendars';
import Crm from '@/domains/features/pages/crm';
import Inbox from '@/domains/features/pages/inbox';
import Reputation from '@/domains/features/pages/reputation';
import VoiceCalls from '@/domains/features/pages/voicecalls';
import Workflows from '@/domains/features/pages/workflows';
import type { FeaturePageData } from '@/domains/features/types';

type FeatureEntry<TData extends FeaturePageData = FeaturePageData> = {
  data: TData;
  page: ComponentType;
};

const createFeatureEntry = <TData extends FeaturePageData>(
  data: TData,
  page: ComponentType
): FeatureEntry<TData> => ({ data, page });

export const FEATURE_ENTRY_BY_SLUG = {
  voicecalls: createFeatureEntry(voicecallsData, VoiceCalls),
  aichat: createFeatureEntry(aiChatData, AiChat),
  reputation: createFeatureEntry(reputationData, Reputation),
  inbox: createFeatureEntry(inboxData, Inbox),
  workflows: createFeatureEntry(workflowsData, Workflows),
  calendars: createFeatureEntry(calendarsData, Calendars),
  crm: createFeatureEntry(crmData, Crm),
} as const;

export type FeatureSlug = keyof typeof FEATURE_ENTRY_BY_SLUG;

export const isFeatureSlug = (slug: string): slug is FeatureSlug => {
  return slug in FEATURE_ENTRY_BY_SLUG;
};

export const getFeatureDataBySlug = (slug: FeatureSlug) => {
  return FEATURE_ENTRY_BY_SLUG[slug].data;
};

export const getFeaturePageBySlug = (slug: FeatureSlug) => {
  return FEATURE_ENTRY_BY_SLUG[slug].page;
};

export const renderFeaturePageBySlug = (slug: FeatureSlug) => {
  const FeaturePage = getFeaturePageBySlug(slug);
  return <FeaturePage />;
};

export const getFeatureConfigEntries = () =>
  Object.entries(FEATURE_ENTRY_BY_SLUG) as Array<
    [FeatureSlug, (typeof FEATURE_ENTRY_BY_SLUG)[FeatureSlug]]
  >;
