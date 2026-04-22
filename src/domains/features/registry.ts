import {
  Badge,
  Calendar,
  Database,
  type LucideIcon,
  MessageSquare,
  Phone,
  Workflow,
} from 'lucide-react';

import { aiChatData } from '@/domains/features/data/aichat';
import { calendarsData } from '@/domains/features/data/calendars';
import { crmData } from '@/domains/features/data/crm';
import { inboxData } from '@/domains/features/data/inbox';
import { reputationData } from '@/domains/features/data/reputation';
import { voicecallsData } from '@/domains/features/data/voicecalls';
import { workflowsData } from '@/domains/features/data/workflows';
import type { FeaturePageData } from '@/domains/features/types';

export type FeatureMetadata = {
  slug: string;
  path: string;
  title: string;
  description: string;
  icon: LucideIcon;
  systems?: string[];
  topics?: string[];
};

type FeatureSlug =
  | 'voicecalls'
  | 'aichat'
  | 'reputation'
  | 'inbox'
  | 'workflows'
  | 'calendars'
  | 'crm';

export const FEATURE_PAGE_DATA_BY_SLUG = {
  voicecalls: voicecallsData,
  aichat: aiChatData,
  reputation: reputationData,
  inbox: inboxData,
  workflows: workflowsData,
  calendars: calendarsData,
  crm: crmData,
} as const satisfies Record<FeatureSlug, FeaturePageData>;

const FEATURE_DATA = [
  voicecallsData,
  aiChatData,
  reputationData,
  inboxData,
  workflowsData,
  calendarsData,
  crmData,
] as const;

const FEATURE_ICON_BY_SLUG: Record<FeatureSlug, LucideIcon> = {
  voicecalls: Phone,
  aichat: MessageSquare,
  reputation: Badge,
  inbox: Database,
  workflows: Workflow,
  calendars: Calendar,
  crm: Database,
};

export const FEATURE_REGISTRY: FeatureMetadata[] = FEATURE_DATA.map(data => ({
  slug: data.slug,
  path: data.seo.canonical,
  title: data.seo.schema?.primary?.name?.toString() ?? data.hero.badge,
  description: data.seo.description,
  icon: FEATURE_ICON_BY_SLUG[data.slug as FeatureSlug],
  systems: data.systems,
  topics: data.topics,
}));

export const getFeaturePageDataBySlug = (slug: string): FeaturePageData | undefined => {
  return FEATURE_PAGE_DATA_BY_SLUG[slug as FeatureSlug];
};
