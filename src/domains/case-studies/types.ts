import type { ReactNode } from 'react';

import type { OpenGraphData, SharedSeoData } from '@/domains/shared/seo';

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
  metaTitle: string;
  metaDescription: string;

  industryCategory: string;
  industryLabel: string;
  industries: string[];
  systems: string[];
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

  seo: {
    canonical: string;
    openGraph: OpenGraphData;
  } & SharedSeoData;

  sections: CaseStudySection[];

  templateOverrides?: {
    hero?: {
      scenarioBadgeLabel?: string;
    };
    metrics?: {
      resultsSectionTitle?: string;
    };
    problem?: {
      challengeBadgeLabel?: string;
    };
    solution?: {
      solutionBadgeLabel?: string;
    };
    workflows?: {
      workflowsBadgeLabel?: string;
    };
    deliverables?: {
      deliverablesBadgeLabel?: string;
    };
    process?: {
      implementationBadgeLabel?: string;
      implementationSectionTitle?: string;
      implementationSectionSubtitle?: string;
    };
    features?: {
      techStackBadgeLabel?: string;
      techStackSectionTitle?: string;
      techStackSectionSubtitle?: string;
    };
    results?: {
      detailedResultsBadgeLabel?: string;
      detailedResultsSectionTitle?: string;
    };
    testimonial?: {
      testimonialSectionAriaLabel?: string;
    };
    investment?: {
      investmentBadgeLabel?: string;
      investmentSectionTitle?: string;
      investmentFooterNoteHtml?: ReactNode;
    };
    cta?: {
      metaItems?: { text: string }[];
    };
  };
}

export type CaseStudyTemplateMetadata = Pick<
  CaseStudyData,
  | 'slug'
  | 'metaDescription'
  | 'industryCategory'
  | 'industryLabel'
  | 'systems'
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
