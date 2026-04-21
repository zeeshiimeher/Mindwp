/**
 * Conversion Goal Resolver
 *
 * Pure mapping from ContentNodeType to ConversionGoal + priority.
 * Used by authority map generator, CTA resolver, conversion analyzer,
 * and the journey engine.
 */

import { getContentPolicy } from '../../../config/contentPolicy';
import type { ContentNodeType, ConversionGoal } from './types';

// --- Resolve conversion goal for a content node type ---

export function resolveConversionGoal(type: ContentNodeType): {
  conversionGoal: ConversionGoal;
  conversionPriority: number;
} {
  const policy = getContentPolicy(type);

  return {
    conversionGoal: policy?.conversionGoal ?? 'none',
    conversionPriority: policy?.conversionPriority ?? 0,
  };
}

export function resolveConversionPriorityTier(type: ContentNodeType): 'high' | 'medium' | 'low' {
  const priority = getContentPolicy(type).conversionPriority;

  if (priority >= 80) {
    return 'high';
  }

  if (priority >= 50) {
    return 'medium';
  }

  return 'low';
}
