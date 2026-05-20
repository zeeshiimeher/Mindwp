import {
  Badge,
  Calendar,
  Database,
  type LucideIcon,
  MessageSquare,
  Phone,
  Route,
} from 'lucide-react';

import { FEATURE_OWNERSHIP } from '@/domains/features/ownership';
import { FEATURE_DOMAIN_REGISTRY } from '@/domains/features/pageData';
import type { FeaturePageData } from '@/domains/features/types';
import type { ActiveSystem } from '@/lib/content-graph/canonical';

export type FeatureMetadata = {
  slug: string;
  path: string;
  title: string;
  description: string;
  icon: LucideIcon;
  primarySystem?: ActiveSystem;
  supportingSystems?: ActiveSystem[];
  publicMeaning: string;
  avoid: string;
  topics?: string[];
};

type FeatureSlug = keyof typeof FEATURE_DOMAIN_REGISTRY;

const FEATURE_ICON_BY_SLUG: Record<FeatureSlug, LucideIcon> = {
  'voice-calls': Phone,
  'website-chat': MessageSquare,
  reputation: Badge,
  inbox: Database,
  'handling-paths': Route,
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
  primarySystem: data.primarySystem,
  supportingSystems: data.supportingSystems,
  publicMeaning: FEATURE_OWNERSHIP[data.slug as FeatureSlug].publicMeaning,
  avoid: FEATURE_OWNERSHIP[data.slug as FeatureSlug].avoid,
  topics: data.topics,
}));
