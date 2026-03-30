import type { ContentNodeType } from '@/lib/graph/query';

import type { InternalLink } from './types';

/**
 * CONVERSION PRIORITY ENGINE
 *
 * Purpose:
 * Sorts internal links by conversion potential.
 * Services rank highest because they drive direct business outcomes.
 *
 * Priority order: service (4) > case-study (3) > resource (2) > blog (1)
 */

const CONVERSION_WEIGHT: Partial<Record<ContentNodeType, number>> = {
  service: 4,
  'case-study': 3,
  resource: 2,
  blog: 1,
};

export function prioritizeLinks(links: InternalLink[]): InternalLink[] {
  return [...links].sort(
    (a, b) => (CONVERSION_WEIGHT[b.targetType] ?? 0) - (CONVERSION_WEIGHT[a.targetType] ?? 0)
  );
}
