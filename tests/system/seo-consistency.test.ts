// @vitest-environment node

import { beforeAll, describe, expect, test } from 'vitest';

import * as blogRoute from '@/app/blog/[slug]/page';
import * as caseStudyRoute from '@/app/case-study/[slug]/page';
import * as featureRoute from '@/app/features/[...slug]/page';
import * as industryRoute from '@/app/industries/[...slug]/page';
import * as resourceRoute from '@/app/resources/[slug]/page';
import * as serviceRoute from '@/app/services/[...slug]/page';
import sitemap from '@/app/sitemap';
import { toAbsoluteUrl } from '@/lib/seo/config';
import type { ContentGraphNode } from '@/lib/content-graph/types';

import { getGraphNodes, initRuntime, toCatchAllParam } from './runtime';

function toCanonicalPath(value: unknown): string {
  if (typeof value === 'string') {
    return value;
  }

  if (value instanceof URL) {
    return value.pathname;
  }

  return '';
}

function toAbsolute(value: unknown): string {
  if (typeof value === 'string') {
    return value;
  }

  if (value instanceof URL) {
    return value.toString();
  }

  return '';
}

async function getMetadataForNode(node: ContentGraphNode) {
  switch (node.type) {
    case 'service':
      return serviceRoute.generateMetadata({
        params: Promise.resolve({ slug: toCatchAllParam(node.path, '/services/') }),
      });
    case 'feature':
      return featureRoute.generateMetadata({
        params: Promise.resolve({ slug: toCatchAllParam(node.path, '/features/') }),
      });
    case 'industry-category':
    case 'industry-detail':
      return industryRoute.generateMetadata({
        params: Promise.resolve({ slug: toCatchAllParam(node.path, '/industries/') }),
      });
    case 'blog':
      return blogRoute.generateMetadata({ params: Promise.resolve({ slug: node.slug }) });
    case 'resource':
      return resourceRoute.generateMetadata({ params: Promise.resolve({ slug: node.slug }) });
    case 'case-study':
      return caseStudyRoute.generateMetadata({ params: Promise.resolve({ slug: node.slug }) });
  }
}

describe('system invariant: metadata, canonicals, and sitemap stay consistent', () => {
  beforeAll(async () => {
    await initRuntime();
  });

  test('every publishable node appears in the sitemap', async () => {
    const entries = await sitemap();
    const sitemapUrls = new Set(entries.map(entry => entry.url.toString()));

    for (const node of getGraphNodes()) {
      expect(sitemapUrls.has(toAbsoluteUrl(node.path)), `Missing sitemap entry for ${node.path}`).toBe(true);
    }
  });

  test('every publishable node generates metadata with a matching canonical and Open Graph URL', async () => {
    for (const node of getGraphNodes()) {
      const metadata = await getMetadataForNode(node);
      expect(metadata, `Missing metadata for ${node.path}`).toBeTruthy();

      const canonical = toCanonicalPath(metadata.alternates?.canonical);
      expect(canonical, `Missing canonical for ${node.path}`).toBe(node.path);

      const openGraphUrl = toAbsolute(metadata.openGraph?.url);
      expect(openGraphUrl, `Missing openGraph.url for ${node.path}`).toBe(toAbsoluteUrl(node.path));
    }
  });
});