/**
 * UI Intelligence Config
 *
 * Pure config for graph-powered UI components.
 * No logic — just lookup tables consumed by related-content UI.
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
      title: 'Where This Connects',
      description: 'Relevant system paths connected to what this resource helps diagnose.',
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
      title: 'Connected Next Steps',
      description: 'Adjacent system context without widening this page into a full menu.',
    },
  },
  feature: {
    services: {
      title: 'Where This Capability Fits',
      description: 'System paths where this capability may support enquiry handling.',
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
      title: 'Connected Next Steps',
      description: 'System paths that support the same decision without widening the page scope.',
    },
    feature: {
      title: 'Where This Capability Fits',
      description: 'Relevant system context for deciding whether this capability belongs here.',
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
    title: 'Review the Right Next Step',
    description:
      'We can review the weak point, the implementation path, and what should be fixed first.',
  },
  feature: {
    intensity: 'mid',
    title: 'Review Where This Fits',
    description:
      'We can look at where this capability belongs in the wider website and handling path.',
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
