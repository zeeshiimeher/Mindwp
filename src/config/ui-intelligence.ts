/**
 * UI Intelligence Config
 *
 * Pure config for graph-powered UI components.
 * No logic — just lookup tables consumed by SmartRelatedSection, SmartCTA,
 * and ClusterPageLayout.
 *
 * Rules:
 * - All data flows from graph query API
 * - No hardcoded slugs or paths
 * - Config is type-level only (keyed by ContentNodeType)
 */

import type { ContentNodeType } from '@/lib/content-graph/types';

// ── Related Section Config ───────────────────────────────────────────

/**
 * Contextual titles for related content blocks, keyed by page type.
 * Each entry maps a slot name (services, resources, etc.) to a display title + description.
 */
export const RELATED_SECTION_LABELS: Record<
  ContentNodeType,
  Record<string, { title: string; description: string }>
> = {
  blog: {
    resources: {
      title: 'Apply What You Just Read',
      description: 'Practical resources that help you act on what you just read.',
    },
    industries: {
      title: 'See Where This Applies',
      description: 'Industry contexts where these ideas work in practice.',
    },
  },
  resource: {
    services: {
      title: 'The Service Behind This',
      description: 'Services that connect directly to what this resource covers.',
    },
    industries: {
      title: 'Industries Using This',
      description: 'Industry contexts where this resource has the most impact.',
    },
  },
  'case-study': {
    industries: {
      title: 'Industries With Similar Challenges',
      description: 'Other industries facing the same operational patterns.',
    },
    resources: {
      title: 'What You Need Next',
      description: 'Practical resources to plan and apply what this case study demonstrates.',
    },
  },
  service: {
    services: {
      title: 'Related Services',
      description: 'Services that work alongside this one to support your wider system.',
    },
  },
  feature: {
    services: {
      title: 'Services This Supports',
      description: 'The services that use this capability.',
    },
  },
  'industry-detail': {
    services: {
      title: 'Services for This Industry',
      description: 'Purpose-built services designed for this industry context.',
    },
    caseStudies: {
      title: 'Proof It Works',
      description: 'Real results from businesses in this industry.',
    },
    resources: {
      title: 'Continue Learning',
      description: 'Resources that go deeper on the challenges this industry faces.',
    },
  },
  'industry-category': {
    services: {
      title: 'Services for This Category',
      description: 'Services designed for businesses in this category.',
    },
  },
};

export const RELATED_SECTION_META: Record<ContentNodeType, { title: string; description: string }> =
  {
    blog: {
      title: 'Apply What You Just Read',
      description: 'Resources and industry pages that move this topic into an action path.',
    },
    resource: {
      title: 'Where To Go Next',
      description: 'Services and industry pages that connect this resource to implementation.',
    },
    'case-study': {
      title: 'Next Best Steps',
      description: 'One service path and supporting resources that carry this proof forward.',
    },
    service: {
      title: 'Related Services',
      description: 'Services that support the same decision path without widening the page scope.',
    },
    feature: {
      title: 'Services This Supports',
      description: 'The parent and related services that turn this capability into a full system.',
    },
    'industry-detail': {
      title: 'Action And Proof For This Industry',
      description: 'Service options first, then the strongest validating proof for this industry.',
    },
    'industry-category': {
      title: 'Explore This Category',
      description: 'Sub-industries first, then the strongest service path for this category.',
    },
  };

// ── CTA Intensity Config ─────────────────────────────────────────────

export type CTAIntensity = 'soft' | 'mid' | 'strong';

interface CTAConfig {
  intensity: CTAIntensity;
  title: string;
  description: string;
}

/**
 * CTA configuration per page type.
 * Intensity determines visual weight by page type only.
 */
export const CTA_CONFIG: Record<ContentNodeType, CTAConfig> = {
  blog: {
    intensity: 'soft',
    title: 'Want to Explore This Further?',
    description: 'If this resonated, a conversation is the next step — no pressure, no pitch.',
  },
  resource: {
    intensity: 'mid',
    title: 'Ready to Apply This?',
    description:
      'This resource gives you the framework. We can help you apply it to your specific situation.',
  },
  'case-study': {
    intensity: 'strong',
    title: 'Want a System Like This?',
    description:
      'We can map the same operating principles to your business and show what implementation would look like.',
  },
  service: {
    intensity: 'strong',
    title: 'Ready to Put This in Place?',
    description:
      'We can scope the right system, the implementation path, and what it should support in your business.',
  },
  feature: {
    intensity: 'mid',
    title: 'Want to See This in Your Workflow?',
    description:
      'We can show how this capability fits into the wider system and whether it belongs in your stack.',
  },
  'industry-detail': {
    intensity: 'strong',
    title: 'Need This Built for Your Industry?',
    description:
      'We adapt the system to your service model, lead flow, and operational constraints.',
  },
  'industry-category': {
    intensity: 'mid',
    title: 'Exploring the Right Fit?',
    description:
      'We can help you decide which system and rollout path make sense for your business category.',
  },
};

// ── Cluster Page Config ──────────────────────────────────────────────

export type ClusterType = 'topic' | 'system' | 'industry';

interface ClusterPageConfig {
  titlePrefix: string;
  description: string;
  sectionOrder: ContentNodeType[];
}

/**
 * Config for auto-generated cluster pages.
 * sectionOrder determines which content types appear first.
 */
export const CLUSTER_PAGE_CONFIG: Record<ClusterType, ClusterPageConfig> = {
  topic: {
    titlePrefix: 'Everything About',
    description: 'All content related to this topic, organized by type.',
    sectionOrder: ['service', 'resource', 'case-study', 'blog', 'industry-detail'],
  },
  system: {
    titlePrefix: 'System:',
    description: 'All content powered by this system.',
    sectionOrder: ['service', 'feature', 'resource', 'case-study', 'blog'],
  },
  industry: {
    titlePrefix: 'Industry:',
    description: 'All content for this industry context.',
    sectionOrder: ['service', 'case-study', 'resource', 'blog'],
  },
};

/**
 * Display labels for content types in cluster page section headings.
 */
export const CONTENT_TYPE_LABELS: Record<ContentNodeType, string> = {
  service: 'Services',
  feature: 'Features',
  'industry-detail': 'Industry Pages',
  'industry-category': 'Industry Categories',
  'case-study': 'Case Studies',
  resource: 'Resources',
  blog: 'Blog Posts',
};
