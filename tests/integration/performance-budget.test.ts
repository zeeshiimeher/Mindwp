// @vitest-environment node

import { performance } from 'node:perf_hooks';

import { beforeAll, describe, expect, test } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';

import homePage from '@/app/page';
import blogPage from '@/app/blog/[slug]/page';
import resourcePage from '@/app/resources/[slug]/page';
import servicePage from '@/app/services/[...slug]/page';

import { getGraphNodes, initRuntime, toCatchAllParam } from '../system/runtime';

const RENDER_BUDGET_MS = 5_000;
const HTML_BUDGET_BYTES = 600_000;

describe('integration: basic render budgets', () => {
  beforeAll(async () => {
    await initRuntime();
  });

  test('high-value routes stay within basic server render budgets', async () => {
    const serviceNode = getGraphNodes('service')[0];
    const blogNode = getGraphNodes('blog')[0];
    const resourceNode = getGraphNodes('resource')[0];

    const cases = [
      { label: 'home', render: () => homePage() },
      {
        label: serviceNode.path,
        render: () => servicePage({ params: Promise.resolve({ slug: toCatchAllParam(serviceNode.path, '/services/') }) }),
      },
      {
        label: blogNode.path,
        render: () => blogPage({ params: Promise.resolve({ slug: blogNode.slug }) }),
      },
      {
        label: resourceNode.path,
        render: () => resourcePage({ params: Promise.resolve({ slug: resourceNode.slug }) }),
      },
    ];

    for (const entry of cases) {
      const startedAt = performance.now();
      const markup = renderToStaticMarkup(await entry.render());
      const elapsed = performance.now() - startedAt;

      expect(elapsed, `${entry.label} exceeded render budget`).toBeLessThan(RENDER_BUDGET_MS);
      expect(Buffer.byteLength(markup, 'utf8'), `${entry.label} exceeded HTML size budget`).toBeLessThan(
        HTML_BUDGET_BYTES
      );
    }
  }, 60_000);
});