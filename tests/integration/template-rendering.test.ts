// @vitest-environment node

import { beforeAll, describe, expect, test } from 'vitest';
import { renderPublishableNode } from '@/lib/content-graph/publishable';

import { getGraphNodes, initRuntime } from '../system/runtime';

describe('integration: template rendering across all publishable content', () => {
  beforeAll(async () => {
    await initRuntime();
  });

  test('every publishable graph node renders non-empty HTML without runtime placeholders', async () => {
    for (const node of getGraphNodes()) {
      const markup = await renderPublishableNode(node);
      expect(markup.length, `Empty markup for ${node.path}`).toBeGreaterThan(100);
      expect(
        markup.includes('Page not found.'),
        `Route fell through to a 404 render for ${node.path}`
      ).toBe(false);
    }
  }, 300_000);
});
