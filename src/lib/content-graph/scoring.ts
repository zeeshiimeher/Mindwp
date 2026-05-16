/**
 * Count metadata overlaps between two string arrays.
 */
export function overlapCount(a: string[] | undefined, b: string[] | undefined): number {
  if (!a?.length || !b?.length) return 0;
  const setB = new Set(b);
  return a.filter(v => setB.has(v)).length;
}

/**
 * Check if two string arrays share at least one element.
 */
export function hasOverlap(a: string[] | undefined, b: string[] | undefined): boolean {
  return overlapCount(a, b) > 0;
}

/**
 * Unified scoring function (LOCKED).
 *
 * score = (systemOverlap × 3) + (topicOverlap × 2) + (industryOverlap × 1)
 *
 * This is the ONLY scoring function in the system. All scoring
 * must go through this function. No duplicates allowed.
 */
export function scoreRelationship(
  nodeA: {
    primarySystem?: ActiveSystem;
    supportingSystems?: ActiveSystem[];
    topics?: string[];
    industries?: string[];
  },
  nodeB: {
    primarySystem?: ActiveSystem;
    supportingSystems?: ActiveSystem[];
    topics?: string[];
    industries?: string[];
  }
): number {
  return (
    overlapCount(getNodeSystems(nodeA), getNodeSystems(nodeB)) * 3 +
    overlapCount(nodeA.topics, nodeB.topics) * 2 +
    overlapCount(nodeA.industries, nodeB.industries) * 1
  );
}
import type { ActiveSystem } from './canonical';
import { getNodeSystems } from './canonical';
