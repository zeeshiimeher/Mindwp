// @vitest-environment node

import { beforeAll, describe, expect, test } from 'vitest';

import * as blogRoute from '@/app/blog/[slug]/page';
import * as caseStudyRoute from '@/app/case-study/[slug]/page';
import * as featureRoute from '@/app/features/[...slug]/page';
import * as industryRoute from '@/app/industries/[...slug]/page';
import * as resourceRoute from '@/app/resources/[slug]/page';
import * as serviceRoute from '@/app/services/[...slug]/page';

import { getGraphNodes, initRuntime, toCatchAllParam } from './runtime';

function toSorted(values: Iterable<string>) {
  return [...values].sort((left, right) => left.localeCompare(right));
}

describe('system invariant: all publishable content has a generated route', () => {
  beforeAll(async () => {
    await initRuntime();
  });

  test('service static params cover every service node', async () => {
    const expected = toSorted(getGraphNodes('service').map(node => node.path));
    const actual = toSorted(
      (await serviceRoute.generateStaticParams()).map(param => `/services/${param.slug.join('/')}`)
    );

    expect(actual).toEqual(expected);
  });

  test('feature static params cover every feature node', async () => {
    const expected = toSorted(getGraphNodes('feature').map(node => node.path));
    const actual = toSorted(
      (await featureRoute.generateStaticParams()).map(param => `/features/${param.slug.join('/')}`)
    );

    expect(actual).toEqual(expected);
  });

  test('blog, resource, and case study static params cover every corresponding node', async () => {
    const expectedBlog = toSorted(getGraphNodes('blog').map(node => node.path));
    const expectedResources = toSorted(getGraphNodes('resource').map(node => node.path));
    const expectedCaseStudies = toSorted(getGraphNodes('case-study').map(node => node.path));

    const actualBlog = toSorted(
      (await blogRoute.generateStaticParams()).map(param => `/blog/${param.slug}`)
    );
    const actualResources = toSorted(
      (await resourceRoute.generateStaticParams()).map(param => `/resources/${param.slug}`)
    );
    const actualCaseStudies = toSorted(
      (await caseStudyRoute.generateStaticParams()).map(param => `/case-study/${param.slug}`)
    );

    expect(actualBlog).toEqual(expectedBlog);
    expect(actualResources).toEqual(expectedResources);
    expect(actualCaseStudies).toEqual(expectedCaseStudies);
  });

  test('industry static params cover every industry category and detail node', async () => {
    const expected = toSorted(
      [...getGraphNodes('industry-category'), ...getGraphNodes('industry-detail')].map(
        node => node.path
      )
    );
    const actual = toSorted(
      (await industryRoute.generateStaticParams()).map(param => `/industries/${param.slug.join('/')}`)
    );

    expect(actual).toEqual(expected);
  });

  test('every generated route param reconstructs the exact graph path', async () => {
    const servicePaths = await serviceRoute.generateStaticParams();
    const featurePaths = await featureRoute.generateStaticParams();
    const industryPaths = await industryRoute.generateStaticParams();

    for (const node of getGraphNodes('service')) {
      expect(servicePaths).toContainEqual({ slug: toCatchAllParam(node.path, '/services/') });
    }

    for (const node of getGraphNodes('feature')) {
      expect(featurePaths).toContainEqual({ slug: toCatchAllParam(node.path, '/features/') });
    }

    for (const node of [...getGraphNodes('industry-category'), ...getGraphNodes('industry-detail')]) {
      expect(industryPaths).toContainEqual({ slug: toCatchAllParam(node.path, '/industries/') });
    }
  });
});