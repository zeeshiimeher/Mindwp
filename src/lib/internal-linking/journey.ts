/**
 * Journey Engine
 *
 * Resolves the next logical content type in the conversion funnel
 * for a given page type. Used by the internal linking engine to
 * boost links that move users forward in the journey.
 *
 * Journey flow:
 * blog → resource → case-study → service
 * resource → case-study → service
 * industry-category → industry-detail → service
 * feature → service
 * case-study → service
 */

import type { ContentNodeType } from '@/lib/content-graph/types';

// --- Next-step mapping ---

const NEXT_STEP: Partial<Record<ContentNodeType, ContentNodeType[]>> = {
  blog: ['resource', 'case-study'],
  resource: ['case-study', 'service'],
  'case-study': ['service'],
  'industry-category': ['industry-detail', 'service'],
  'industry-detail': ['service'],
  feature: ['service'],
};

// --- Resolve next journey step(s) for a content type ---

export function resolveNextStep(type: ContentNodeType): ContentNodeType[] {
  return NEXT_STEP[type] ?? [];
}

// --- Check if a target type is a valid next step for a source type ---

export function isJourneyNextStep(
  sourceType: ContentNodeType,
  targetType: ContentNodeType
): boolean {
  const nextSteps = NEXT_STEP[sourceType];
  if (!nextSteps) return false;
  return nextSteps.includes(targetType);
}
