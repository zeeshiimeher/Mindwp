import { expect, test } from '@playwright/test';

const baseUrl = (process.env.NEXT_BASE_URL || 'http://localhost:3001').replace(/\/$/, '');

async function getRoutesToCrawl() {
  const reactModule = await import('react');
  globalThis.React ??= reactModule.default;

  const { ensureGraphInitialized } = await import('../../src/domains/init/ensureGraphInitialized');
  const { getContentGraph } = await import('../../src/lib/content-graph/registry');
  const { getAllCategorySlugs, getallTopicSlugs } = await import('../../src/domains/blog/api');
  const { categories } = await import('../../src/domains/resources/api');

  await ensureGraphInitialized();

  const routes = new Set<string>([
    '/',
    '/about',
    '/blog',
    '/case-studies',
    '/contact',
    '/cookies',
    '/faq',
    '/features',
    '/industries',
    '/privacy',
    '/resources',
    '/services',
    '/terms',
  ]);

  for (const node of Object.values(getContentGraph())) {
    routes.add(node.path);
  }

  for (const categorySlug of getAllCategorySlugs()) {
    routes.add(`/blog/category/${categorySlug}`);
  }

  for (const topicSlug of getallTopicSlugs()) {
    routes.add(`/blog/topic/${topicSlug}`);
  }

  for (const category of categories) {
    routes.add(`/resources/category/${category.slug}`);
  }

  return [...routes].sort((left, right) => left.localeCompare(right));
}

test.describe('major route crawl', () => {
  test.setTimeout(300_000);

  test('all major published routes return 200', async ({ request }) => {
    const routes = await getRoutesToCrawl();

    for (const route of routes) {
      const response = await request.get(`${baseUrl}${route}`);
      expect(response.status(), `${route} should return 200`).toBe(200);
    }
  });
});
