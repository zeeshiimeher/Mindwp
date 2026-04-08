// @vitest-environment node

import { beforeAll, describe, expect, test } from 'vitest';

import * as blogCategoryRoute from '@/app/blog/category/[categorySlug]/page';
import * as blogTopicRoute from '@/app/blog/topic/[topic]/page';
import * as resourceCategoryRoute from '@/app/resources/category/[categorySlug]/page';
import { getAllCategorySlugs, getallTopicSlugs } from '@/domains/blog/api';
import { BLOG_POSTS } from '@/domains/blog/registry';
import { categories as resourceCategories } from '@/domains/resources/api';
import { RESOURCE_REGISTRY } from '@/domains/resources/generatedRegistry';

import { initRuntime, unique } from './runtime';

function sort(values: Iterable<string>) {
  return [...values].sort((left, right) => left.localeCompare(right));
}

describe('system invariant: taxonomy and category routes stay aligned', () => {
  beforeAll(async () => {
    await initRuntime();
  });

  test('every blog post category and topic is backed by generated taxonomy routes', async () => {
    const expectedCategorySlugs = sort(unique(Object.values(BLOG_POSTS).map(post => post.category)));
    const configuredCategorySlugs = sort(getAllCategorySlugs());
    const generatedCategorySlugs = sort(
      (await blogCategoryRoute.generateStaticParams()).map(param => param.categorySlug)
    );

    expect(configuredCategorySlugs).toEqual(expectedCategorySlugs);
    expect(generatedCategorySlugs).toEqual(configuredCategorySlugs);

    const usedTopicSlugs = sort(
      unique(Object.values(BLOG_POSTS).flatMap(post => post.topics ?? []))
    );
    const configuredTopicSlugs = sort(getallTopicSlugs());
    const generatedTopicSlugs = sort((await blogTopicRoute.generateStaticParams()).map(param => param.topic));

    expect(generatedTopicSlugs).toEqual(configuredTopicSlugs);

    for (const topicSlug of usedTopicSlugs) {
      expect(
        configuredTopicSlugs.includes(topicSlug),
        `Missing configured topic slug for blog topic "${topicSlug}"`
      ).toBe(true);
    }
  });

  test('every resource category is backed by generated category routes and used resources stay in-range', async () => {
    const categorySlugs = sort(resourceCategories.map(category => category.slug));
    const categoryIds = new Set(resourceCategories.map(category => category.id));
    const generatedCategorySlugs = sort(
      (await resourceCategoryRoute.generateStaticParams()).map(param => param.categorySlug)
    );

    expect(generatedCategorySlugs).toEqual(categorySlugs);

    for (const resource of Object.values(RESOURCE_REGISTRY)) {
      expect(categoryIds.has(resource.category), `Unknown resource category "${resource.category}" on ${resource.slug}`).toBe(true);
    }
  });
});