/**
 * Conversion Goal Resolver
 *
 * Pure mapping from ContentNodeType to ConversionGoal + priority.
 * Used by authority map generator, CTA resolver, conversion analyzer,
 * and the journey engine.
 */

import type { ContentNodeType, ConversionGoal } from './types';

// --- Type → Conversion Goal mapping ---

const TYPE_TO_GOAL: Record<ContentNodeType, ConversionGoal> = {
  service: 'consultation',
  feature: 'demo',
  'industry-category': 'lead',
  'industry-detail': 'lead',
  'case-study': 'consultation',
  blog: 'email-capture',
  resource: 'email-capture',
};

// --- Type → Conversion Priority mapping ---

const TYPE_TO_PRIORITY: Record<ContentNodeType, number> = {
  service: 100,
  'industry-detail': 90,
  feature: 80,
  'case-study': 70,
  'industry-category': 60,
  resource: 50,
  blog: 40,
};

// --- Resolve conversion goal for a content node type ---

export function resolveConversionGoal(type: ContentNodeType): {
  conversionGoal: ConversionGoal;
  conversionPriority: number;
} {
  return {
    conversionGoal: TYPE_TO_GOAL[type] ?? 'none',
    conversionPriority: TYPE_TO_PRIORITY[type] ?? 0,
  };
}

export function resolveConversionPriorityTier(type: ContentNodeType): 'high' | 'medium' | 'low' {
  const priority = TYPE_TO_PRIORITY[type] ?? 0;

  if (priority >= 80) {
    return 'high';
  }

  if (priority >= 50) {
    return 'medium';
  }

  return 'low';
}
