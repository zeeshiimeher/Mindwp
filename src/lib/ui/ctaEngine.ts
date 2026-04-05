/**
 * Deterministic CTA Engine
 *
 * Maps content type + intent classification to CTA target and intensity.
 * ONE CTA per page. No fallback logic. No randomness.
 *
 * Blog intents: PROBLEM, SYSTEM, FRAMEWORK
 * Resource intents: ACTIONABLE, EDUCATIONAL, EXAMPLE
 *
 * Routing rules (LOCKED — Phase 10):
 *   BLOG PROBLEM    → service (strong)
 *   BLOG SYSTEM     → resource (mid)
 *   BLOG FRAMEWORK  → resource or industry (soft)
 *   RESOURCE ACTIONABLE  → service (strong)
 *   RESOURCE EDUCATIONAL → service (mid)
 *   RESOURCE EXAMPLE     → case-study (soft)
 */

import type { ContentNodeType } from '@/lib/content-graph/types';

// ── Intent Types ─────────────────────────────────────────────────────

export type BlogIntent = 'PROBLEM' | 'SYSTEM' | 'FRAMEWORK';
export type ResourceIntent = 'ACTIONABLE' | 'EDUCATIONAL' | 'EXAMPLE';
export type ContentIntent = BlogIntent | ResourceIntent;

// ── CTA Target Config ────────────────────────────────────────────────

export type CTATargetType = ContentNodeType;
export type CTAIntensity = 'soft' | 'mid' | 'strong';

export interface CTARouting {
  targetType: CTATargetType;
  intensity: CTAIntensity;
}

// ── Routing Tables ───────────────────────────────────────────────────

const BLOG_ROUTING: Record<BlogIntent, CTARouting> = {
  PROBLEM: { targetType: 'service', intensity: 'strong' },
  SYSTEM: { targetType: 'resource', intensity: 'mid' },
  FRAMEWORK: { targetType: 'resource', intensity: 'soft' },
};

const RESOURCE_ROUTING: Record<ResourceIntent, CTARouting> = {
  ACTIONABLE: { targetType: 'service', intensity: 'strong' },
  EDUCATIONAL: { targetType: 'service', intensity: 'mid' },
  EXAMPLE: { targetType: 'case-study', intensity: 'soft' },
};

// ── Default routing when intent is not classified ────────────────────

const DEFAULT_ROUTING: Partial<Record<ContentNodeType, CTARouting>> = {
  blog: { targetType: 'service', intensity: 'soft' },
  resource: { targetType: 'service', intensity: 'mid' },
  'case-study': { targetType: 'service', intensity: 'mid' },
  service: { targetType: 'service', intensity: 'strong' },
  feature: { targetType: 'service', intensity: 'strong' },
  'industry-detail': { targetType: 'service', intensity: 'mid' },
  'industry-category': { targetType: 'service', intensity: 'mid' },
};

// ── System → Service Path Mapping ────────────────────────────────────

export const SYSTEM_TO_SERVICE_PATH: Record<string, string> = {
  'ai-lead-handling': '/services/ai-lead-handling',
  'crm-automation': '/services/crm-infrastructure-implementation',
  'smart-website-systems': '/services/smart-website-systems',
  'local-seo-authority': '/services/local-seo-authority',
  'reputation-review': '/services/reputation-review-systems',
  'revenue-growth': '/services/growth-revenue-systems',
};

// ── Engine ────────────────────────────────────────────────────────────

export function getCTAConfig(
  contentType: ContentNodeType,
  intent?: ContentIntent,
): CTARouting {
  if (contentType === 'blog' && intent) {
    return BLOG_ROUTING[intent as BlogIntent];
  }

  if (contentType === 'resource' && intent) {
    return RESOURCE_ROUTING[intent as ResourceIntent];
  }

  return DEFAULT_ROUTING[contentType] ?? { targetType: 'service', intensity: 'soft' };
}

/**
 * Resolve the service path for a blog post based on its primary system.
 * Uses systems[0] as primary system per Phase 10 resolution rules.
 */
export function resolveServicePath(systems: string[]): string | null {
  if (systems.length === 0) return null;
  return SYSTEM_TO_SERVICE_PATH[systems[0]] ?? null;
}
