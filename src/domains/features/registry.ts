import {
  Badge,
  Calendar,
  Database,
  type LucideIcon,
  MessageSquare,
  Phone,
  Workflow,
} from 'lucide-react';

import { FEATURE_DOMAIN_REGISTRY } from '@/domains/features/pageData';
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

type FeatureSlug = keyof typeof FEATURE_DOMAIN_REGISTRY;

const FEATURE_ICON_BY_SLUG: Record<FeatureSlug, LucideIcon> = {
  voicecalls: Phone,
  aichat: MessageSquare,
  reputation: Badge,
  inbox: Database,
  workflows: Workflow,
  calendars: Calendar,
  crm: Database,
};

const FEATURE_DATA = Object.values(FEATURE_DOMAIN_REGISTRY).map(
  entry => entry.data
) as readonly FeaturePageData[];

export const FEATURE_REGISTRY: FeatureMetadata[] = FEATURE_DATA.map(data => ({
  slug: data.slug,
  path: data.seo.canonical,
  title: data.seo.title,
  description: data.seo.description,
  icon: FEATURE_ICON_BY_SLUG[data.slug as FeatureSlug],
  systems: data.systems,
  topics: data.topics,
}));
