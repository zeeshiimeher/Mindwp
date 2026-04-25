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
import AIChatPage from '@/domains/features/pages/aichat';
import CalendarsPage from '@/domains/features/pages/calendars';
import CRMPage from '@/domains/features/pages/crm';
import InboxPage from '@/domains/features/pages/inbox';
import ReputationPage from '@/domains/features/pages/reputation';
import VoiceCallsPage from '@/domains/features/pages/voicecalls';
import WorkflowsPage from '@/domains/features/pages/workflows';
import type { FeaturePageData } from '@/domains/features/types';

type FeaturePageComponent<TData extends FeaturePageData = FeaturePageData> = (props: {
  data: TData;
}) => React.JSX.Element;

type FeatureDomainEntry<TData extends FeaturePageData = FeaturePageData> = {
  id: string;
  slug: string;
  data: TData;
  icon: LucideIcon;
  page: FeaturePageComponent<TData>;
};

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

const FEATURE_ICON_BY_SLUG: Record<FeatureSlug, LucideIcon> = {
  voicecalls: Phone,
  aichat: MessageSquare,
  reputation: Badge,
  inbox: Database,
  workflows: Workflow,
  calendars: Calendar,
  crm: Database,
};

const createFeatureEntry = <TSlug extends FeatureSlug>(
  slug: TSlug,
  data: FeaturePageData,
  page: FeaturePageComponent,
  icon: LucideIcon
) =>
  ({
    id: `feature:${slug}`,
    slug,
    data,
    page,
    icon,
  }) satisfies FeatureDomainEntry;

export const FEATURE_DOMAIN_REGISTRY = {
  voicecalls: createFeatureEntry(
    'voicecalls',
    voicecallsData,
    VoiceCallsPage,
    FEATURE_ICON_BY_SLUG.voicecalls
  ),
  aichat: createFeatureEntry('aichat', aiChatData, AIChatPage, FEATURE_ICON_BY_SLUG.aichat),
  reputation: createFeatureEntry(
    'reputation',
    reputationData,
    ReputationPage,
    FEATURE_ICON_BY_SLUG.reputation
  ),
  inbox: createFeatureEntry('inbox', inboxData, InboxPage, FEATURE_ICON_BY_SLUG.inbox),
  workflows: createFeatureEntry(
    'workflows',
    workflowsData,
    WorkflowsPage,
    FEATURE_ICON_BY_SLUG.workflows
  ),
  calendars: createFeatureEntry(
    'calendars',
    calendarsData,
    CalendarsPage,
    FEATURE_ICON_BY_SLUG.calendars
  ),
  crm: createFeatureEntry('crm', crmData, CRMPage, FEATURE_ICON_BY_SLUG.crm),
} as const satisfies Record<FeatureSlug, FeatureDomainEntry>;

export const FEATURE_PAGE_DATA_BY_SLUG = Object.fromEntries(
  Object.entries(FEATURE_DOMAIN_REGISTRY).map(([slug, entry]) => [slug, entry.data])
) as { [K in FeatureSlug]: (typeof FEATURE_DOMAIN_REGISTRY)[K]['data'] };

const FEATURE_DATA = Object.values(FEATURE_DOMAIN_REGISTRY).map(
  entry => entry.data
) as readonly FeaturePageData[];

export const FEATURE_REGISTRY: FeatureMetadata[] = FEATURE_DATA.map(data => ({
  slug: data.slug,
  path: data.seo.canonical,
  title: data.seo.title,
  description: data.seo.description,
  icon: FEATURE_DOMAIN_REGISTRY[data.slug as FeatureSlug].icon,
  systems: data.systems,
  topics: data.topics,
}));

export const getFeaturePageDataBySlug = (slug: string): FeaturePageData | undefined => {
  return FEATURE_PAGE_DATA_BY_SLUG[slug as FeatureSlug];
};
