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

// ── CTA Intensity Config ─────────────────────────────────────────────

export type CTAIntensity = 'soft' | 'mid' | 'strong';

interface CTAConfig {
  intensity: CTAIntensity;
  title: string;
  description: string;
  actionLabel: string;
  actionHref: string;
}

/**
 * CTA configuration per page type.
 * Intensity determines visual weight and copy urgency.
 * - soft: light suggestion (blog readers exploring)
 * - mid: moderate prompt (resource readers planning)
 * - strong: clear conversion (service page visitors ready to act)
 */
export const CTA_CONFIG: Record<ContentNodeType, CTAConfig> = {
  blog: {
    intensity: 'soft',
    title: 'Want to Explore This Further?',
    description: 'If this resonated, a conversation is the next step — no pressure, no pitch.',
    actionLabel: 'Start a Conversation',
    actionHref: '/contact',
  },
  resource: {
    intensity: 'mid',
    title: 'Ready to Apply This?',
    description:
      'This resource gives you the framework. We can help you apply it to your specific situation.',
    actionLabel: 'Start a Conversation',
    actionHref: '/contact',
  },
  'case-study': {
    intensity: 'mid',
    title: 'Want Results Like These?',
    description: 'Every case study starts with a conversation about where you are now.',
    actionLabel: 'Start a Conversation',
    actionHref: '/contact',
  },
  service: {
    intensity: 'strong',
    title: 'See How This Fits Your Business',
    description: 'Every engagement starts with understanding your situation — not a sales pitch.',
    actionLabel: 'Start a Conversation',
    actionHref: '/contact',
  },
  feature: {
    intensity: 'strong',
    title: 'See This in Action',
    description: 'Understand how this capability works for your business.',
    actionLabel: 'Explore the Approach',
    actionHref: '/contact',
  },
  'industry-detail': {
    intensity: 'mid',
    title: 'Built for Your Industry',
    description: 'See how these systems apply to your specific industry context.',
    actionLabel: 'Start a Conversation',
    actionHref: '/contact',
  },
  'industry-category': {
    intensity: 'mid',
    title: 'Explore Your Industry',
    description: 'Find the specific context that matches your business.',
    actionLabel: 'Start a Conversation',
    actionHref: '/contact',
  },
};

// ── Intent-Based CTA Overrides ───────────────────────────────────────

/**
 * Intent-specific overrides for CTA title and description.
 * Keyed by `{pageType}:{contentIntent}` (e.g. "blog:PROBLEM").
 * Labels stay governed by CTA_CONFIG — only title/description vary.
 */
export const CTA_INTENT_OVERRIDES: Record<string, { title: string; description: string }> = {
  // Blog intents
  'blog:PROBLEM': {
    title: 'Ready to Fix This?',
    description:
      'You\u2019ve seen the problem. We build the system that solves it \u2014 no guesswork, no generic fixes.',
  },
  'blog:SYSTEM': {
    title: 'See How This Works for Your Business',
    description:
      'This system is built for businesses like yours. A conversation helps us map it to your exact situation.',
  },
  'blog:FRAMEWORK': {
    title: 'Explore the Full Approach',
    description:
      'Frameworks only work when applied. We can help you see where this fits into your business.',
  },
  // Resource intents
  'resource:ACTIONABLE': {
    title: 'Ready to Implement This?',
    description:
      'You\u2019ve got the blueprint. We handle the implementation so it actually gets done right.',
  },
  'resource:EDUCATIONAL': {
    title: 'Want Help Applying This?',
    description:
      'Understanding is the first step. We can help you turn this knowledge into a working system.',
  },
  'resource:EXAMPLE': {
    title: 'Want Results Like These?',
    description:
      'Every example started with a conversation about where things stood. Yours can too.',
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
