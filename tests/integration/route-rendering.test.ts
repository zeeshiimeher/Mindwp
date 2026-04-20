// @vitest-environment node

import { beforeAll, describe, expect, test } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';

import blogPage from '@/app/blog/[slug]/page';
import caseStudyPage from '@/app/case-studies/[slug]/page';
import featurePage from '@/app/features/[...slug]/page';
import industryPage from '@/app/industries/[...slug]/page';
import resourcePage from '@/app/resources/[slug]/page';
import servicePage from '@/app/services/[...slug]/page';

import { getGraphNodes, initRuntime, toCatchAllParam } from '../system/runtime';

async function render(element: Promise<React.ReactElement> | React.ReactElement) {
  return renderToStaticMarkup(await element);
}

describe('integration: route module rendering', () => {
  beforeAll(async () => {
    await initRuntime();
  });

  test('renders representative publishable routes without throwing', async () => {
    const serviceNode = getGraphNodes('service')[0];
    const featureNode = getGraphNodes('feature')[0];
    const blogNode = getGraphNodes('blog')[0];
    const resourceNode = getGraphNodes('resource')[0];
    const caseStudyNode = getGraphNodes('case-study')[0];
    const industryNode = getGraphNodes('industry-detail')[0] ?? getGraphNodes('industry-category')[0];

    await expect(
      render(servicePage({ params: Promise.resolve({ slug: toCatchAllParam(serviceNode.path, '/services/') }) }))
    ).resolves.toContain(serviceNode.slug);

    await expect(
      render(featurePage({ params: Promise.resolve({ slug: toCatchAllParam(featureNode.path, '/features/') }) }))
    ).resolves.toContain('application/ld+json');

    await expect(render(blogPage({ params: Promise.resolve({ slug: blogNode.slug }) }))).resolves.toContain(
      'article-jsonld'
    );

    await expect(
      render(resourcePage({ params: Promise.resolve({ slug: resourceNode.slug }) }))
    ).resolves.toContain('resource-jsonld');

    await expect(
      render(caseStudyPage({ params: Promise.resolve({ slug: caseStudyNode.slug }) }))
    ).resolves.toContain('case-study-article-jsonld');

    await expect(
      render(industryPage({ params: Promise.resolve({ slug: toCatchAllParam(industryNode.path, '/industries/') }) }))
    ).resolves.toContain('industries-breadcrumb-jsonld');
  });

  test('rejects invalid dynamic route params instead of silently rendering bad content', async () => {
    await expect(servicePage({ params: Promise.resolve({ slug: ['not-a-service'] }) })).rejects.toThrow();
    await expect(featurePage({ params: Promise.resolve({ slug: ['not-a-feature'] }) })).rejects.toThrow();
    await expect(blogPage({ params: Promise.resolve({ slug: 'not-a-blog-post' }) })).rejects.toThrow();
    await expect(resourcePage({ params: Promise.resolve({ slug: 'not-a-resource' }) })).rejects.toThrow();
    await expect(caseStudyPage({ params: Promise.resolve({ slug: 'not-a-case-study' }) })).rejects.toThrow();
    await expect(industryPage({ params: Promise.resolve({ slug: ['not-a-category'] }) })).rejects.toThrow();
  });
});