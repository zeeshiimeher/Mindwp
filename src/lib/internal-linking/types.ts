/**
 * INTERNAL LINKING TYPES
 *
 * Shared type definitions for the internal linking system.
 * All link generation, placement, and injection modules
 * operate on these types.
 */

import type { ContentNodeType } from '@/lib/graph/query';

export type LinkIntent = 'learn' | 'compare' | 'buy';

export type InternalLink = {
  sourceSlug: string;
  targetSlug: string;
  targetType: ContentNodeType;

  anchor: string;
  reason: 'authority' | 'cluster' | 'journey' | 'fallback';

  priority: 'high' | 'medium' | 'low';
  score: number;
  intent: LinkIntent;
};
