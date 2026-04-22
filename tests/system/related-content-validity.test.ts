// @vitest-environment node

import { beforeAll, describe, expect, test } from 'vitest';

import { getRelatedContent } from '@/lib/graph/query';

import { getGraphNodes, initRuntime } from './runtime';

describe('system invariant: related content stays valid at runtime', () => {
  beforeAll(async () => {
    await initRuntime();
  });

  test('related content never points to the current page and every target resolves to a live graph node', () => {
    for (const node of getGraphNodes()) {
      const related = getRelatedContent(node.slug, node.type);

      for (const items of Object.values(related)) {
        for (const item of items) {
          expect(item.slug, `Related content self-linked on ${node.path}`).not.toBe(node.slug);

          const targetNode = getGraphNodes().find(candidate => candidate.path === item.path);
          expect(
            targetNode,
            `Dead related-content target "${item.path}" from ${node.path}`
          ).toBeDefined();
          expect(
            targetNode?.slug,
            `Slug drift for related-content target "${item.path}" from ${node.path}`
          ).toBe(item.slug);
          expect(
            item.title.length,
            `Missing related-content title for "${item.slug}" from ${node.path}`
          ).toBeGreaterThan(0);
        }
      }
    }
  });
});
