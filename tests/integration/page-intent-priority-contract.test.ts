// @vitest-environment node

import { describe, expect, test } from 'vitest';

import { ensureGraphInitialized } from '@/domains/init/ensureGraphInitialized';
import {
  resolveConversionGoal,
  resolveConversionPriorityTier,
} from '@/lib/content-graph/conversionGoals';
import { getStructuredContentGraph } from '@/lib/content-graph/registry';
import { inferPageIntent, type PageType } from '@/lib/page/pageIdentity';

const EXPECTED_PAGE_INTENTS: Record<PageType, ReturnType<typeof inferPageIntent>> = {
  service: 'conversion',
  feature: 'comparison',
  blog: 'entry',
  resource: 'entry',
  'case-study': 'diagnostic',
  'industry-detail': 'comparison',
  'industry-category': 'comparison',
  page: 'entry',
};

describe('integration: page intent and priority contract', () => {
  test('page types resolve deterministic default CTA intents', () => {
    for (const [pageType, intent] of Object.entries(EXPECTED_PAGE_INTENTS) as Array<
      [PageType, ReturnType<typeof inferPageIntent>]
    >) {
      expect(inferPageIntent(pageType)).toBe(intent);
    }
  });

  test('graph nodes expose the shared conversion goal and priority mapping', async () => {
    await ensureGraphInitialized();

    for (const node of getStructuredContentGraph().nodes) {
      const expected = resolveConversionGoal(node.type);

      expect(node.conversionGoal, `${node.type}/${node.slug} conversionGoal`).toBe(
        expected.conversionGoal
      );
      expect(node.conversionPriority, `${node.type}/${node.slug} conversionPriority`).toBe(
        expected.conversionPriority
      );
      expect(resolveConversionPriorityTier(node.type)).toMatch(/^(high|medium|low)$/);
    }
  });
});