/**
 * Conversion Goal Resolver
 *
 * Pure mapping from ContentNodeType to ConversionGoal + priority.
 * Used by CTA resolution, conversion analysis, and journey helpers.
 */

import { getContentPolicy } from '../../../config/contentPolicy';

import type { ContentNodeType, ConversionGoal } from './types';

const VALID_CONVERSION_GOALS: readonly ConversionGoal[] = [
  'lead',
  'consultation',
  'demo',
  'email-capture',
  'none',
];

function assertConversionPolicy(type: ContentNodeType) {
  const policy = getContentPolicy(type);

  if (!policy || !VALID_CONVERSION_GOALS.includes(policy.conversionGoal)) {
    throw new Error(`Invalid conversion goal policy for ${type}.`);
  }

  if (!Number.isFinite(policy.conversionPriority)) {
    throw new Error(`Invalid conversion priority for ${type}.`);
  }

  return policy;
}

// --- Resolve conversion goal for a content node type ---

export function resolveConversionGoal(type: ContentNodeType): {
  conversionGoal: ConversionGoal;
  conversionPriority: number;
} {
  const policy = assertConversionPolicy(type);

  return {
    conversionGoal: policy?.conversionGoal ?? 'none',
    conversionPriority: policy?.conversionPriority ?? 0,
  };
}

export function resolveConversionPriorityTier(type: ContentNodeType): 'high' | 'medium' | 'low' {
  const priority = assertConversionPolicy(type).conversionPriority;

  if (priority >= 80) {
    return 'high';
  }

  if (priority >= 50) {
    return 'medium';
  }

  return 'low';
}
