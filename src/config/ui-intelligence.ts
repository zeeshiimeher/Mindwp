/**
 * UI Intelligence Config
 *
 * Pure config for graph-powered UI components.
 * No logic — just lookup tables consumed by RelatedSection, PrimaryCTASection,
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
      title: 'Systems That Usually Matter Here',
      description:
        'Service paths that connect to this industry’s lead flow, follow-up, and proof gaps.',
    },
    caseStudies: {
      title: 'Related Examples',
      description: 'Relevant examples or scenarios with the proof type made clear.',
    },
    resources: {
      title: 'Helpful Next Reading',
      description: 'Practical resources for the operating problems this page describes.',
    },
  },
  'industry-category': {
    services: {
      title: 'Systems That Support This Category',
      description: 'Common starting points for businesses in this category.',
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
      title: 'Where This Usually Connects Next',
      description: 'Relevant systems, examples, and next steps for this kind of business.',
    },
    'industry-category': {
      title: 'Choose the Closest Path',
      description:
        'Start with the business type or system pattern that looks closest to your working week.',
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
    title: 'Show Us Where Work Slips',
    description:
      'We can map the enquiry, follow-up, and proof gaps around how this kind of business actually runs.',
  },
  'industry-category': {
    intensity: 'mid',
    title: 'Find the Right Starting Point',
    description:
      'We can help you identify which leak pattern, business type, or system path should come first.',
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
    titlePrefix: 'Industry Context:',
    description: 'Services, examples, and resources connected to this kind of business.',
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
