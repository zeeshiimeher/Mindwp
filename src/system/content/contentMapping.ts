/**
 * Content Mapping System (Phase 10.1)
 *
 * Centralized control layer for content intent, primary system, and CTA targets.
 * Used by ctaResolver to drive deterministic CTA routing without editing content files.
 *
 * Generated from reports/phase10-content-audit.json
 * Validated by scripts/analyzers/validate-content-mapping.ts
 */

import type { BlogIntent, ResourceIntent } from '@/lib/ui/ctaEngine';

export type ContentMapping = {
  slug: string;
  contentType: 'blog' | 'resource';
  intent: BlogIntent | ResourceIntent;
  primarySystem?: string;
  ctaTarget?: string;
  notes?: string;
};

export const CONTENT_MAPPING: Record<string, ContentMapping> = {};
