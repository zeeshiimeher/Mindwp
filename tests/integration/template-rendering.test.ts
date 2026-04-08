// @vitest-environment node

import { beforeAll, describe, expect, test } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';

import blogPage from '@/app/blog/[slug]/page';
import caseStudyPage from '@/app/case-study/[slug]/page';
import featurePage from '@/app/features/[...slug]/page';
import industryPage from '@/app/industries/[...slug]/page';
import resourcePage from '@/app/resources/[slug]/page';
import servicePage from '@/app/services/[...slug]/page';
import type { ContentGraphNode } from '@/lib/content-graph/types';

import { getGraphNodes, initRuntime, toCatchAllParam } from '../system/runtime';

async function renderNode(node: ContentGraphNode) {
  switch (node.type) {
    case 'service':
      return renderToStaticMarkup(
        await servicePage({ params: Promise.resolve({ slug: toCatchAllParam(node.path, '/services/') }) })
      );
    case 'feature':
      return renderToStaticMarkup(
        await featurePage({ params: Promise.resolve({ slug: toCatchAllParam(node.path, '/features/') }) })
      );
    case 'industry-category':
    case 'industry-detail':
      return renderToStaticMarkup(
        await industryPage({ params: Promise.resolve({ slug: toCatchAllParam(node.path, '/industries/') }) })
      );
    case 'blog':
      return renderToStaticMarkup(await blogPage({ params: Promise.resolve({ slug: node.slug }) }));
    case 'resource':
      return renderToStaticMarkup(
        await resourcePage({ params: Promise.resolve({ slug: node.slug }) })
      );
    case 'case-study':
      return renderToStaticMarkup(
        await caseStudyPage({ params: Promise.resolve({ slug: node.slug }) })
      );
  }
}

describe('integration: template rendering across all publishable content', () => {
  beforeAll(async () => {
    await initRuntime();
  });

  test('every publishable graph node renders non-empty HTML without runtime placeholders', async () => {
    for (const node of getGraphNodes()) {
      const markup = await renderNode(node);
      expect(markup.length, `Empty markup for ${node.path}`).toBeGreaterThan(100);
      expect(markup.includes('Page not found.'), `Route fell through to a 404 render for ${node.path}`).toBe(false);
    }
  }, 300_000);
});