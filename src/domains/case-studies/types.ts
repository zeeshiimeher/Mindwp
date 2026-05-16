import type { OpenGraphData, SharedSeoData } from '@/domains/shared/seo';
import type { ActiveSystem } from '@/lib/content-graph/canonical';

import type { CaseStudyTemplateSection } from './templates';

export type CaseStudySection = CaseStudyTemplateSection;

export interface CaseStudyMetricPreview {
  value: string;
  label: string;
  color?: string;
}

export interface CaseStudyData {
  slug: string;
  title: string;
  industryCategory: string;
  industryLabel: string;
  industries: string[];
  primarySystem: ActiveSystem;
  supportingSystems?: ActiveSystem[];
  topics?: string[];
  publishDate: string;
  client: string;
  location: string;
  business: string;
  duration: string;
  completedDate: string;
  heroHeadline: string;
  keyMetrics: CaseStudyMetricPreview[];
  tags: string[];
  seo: SharedSeoData & {
    openGraph?: OpenGraphData;
  };
  sections: CaseStudySection[];
  templateOverrides?: Record<string, unknown>;
  [key: string]: unknown;
}

export type CaseStudyTemplateMetadata = Pick<
  CaseStudyData,
  | 'slug'
  | 'seo'
  | 'industryCategory'
  | 'industryLabel'
  | 'primarySystem'
  | 'supportingSystems'
  | 'publishDate'
  | 'client'
  | 'location'
  | 'business'
  | 'duration'
  | 'completedDate'
  | 'heroHeadline'
  | 'keyMetrics'
  | 'tags'
>;
