import { expect, test } from '@playwright/test';
import { getAllCategorySlugs } from '../../src/domains/blog/data/blog';

async function getGraphSampleRoutes() {
  const reactModule = await import('react');
  globalThis.React ??= reactModule.default;

  const { ensureGraphInitialized } = await import('../../src/domains/init/ensureGraphInitialized');
  const { getContentGraph } = await import('../../src/lib/content-graph/registry');

  await ensureGraphInitialized();

  const contentGraph = getContentGraph();

  const blogSlug = Object.values(contentGraph)
    .filter(node => node.type === 'blog')
    .map(node => node.slug)
    .sort((a, b) => a.localeCompare(b))[0];

  const industryPath = Object.values(contentGraph)
    .filter(node => node.type === 'industry-category' || node.type === 'industry-detail')
    .map(node => node.path)
    .sort((a, b) => a.localeCompare(b))[0];

  const resourcePath = Object.values(contentGraph)
    .filter(node => node.type === 'resource')
    .map(node => node.path)
    .sort((a, b) => a.localeCompare(b))[0];

  const caseStudySlug = Object.values(contentGraph)
    .filter(node => node.type === 'case-study')
    .map(node => node.slug)
    .sort((a, b) => a.localeCompare(b))[0];

  if (!blogSlug || !industryPath || !resourcePath || !caseStudySlug) {
    throw new Error('Unable to derive sample routes from contentGraph.');
  }

  const blogCategorySlug = [...getAllCategorySlugs()].sort((a, b) => a.localeCompare(b))[0];
  if (!blogCategorySlug) {
    throw new Error('Unable to derive blog category slug.');
  }

  return {
    blogSlug,
    blogCategorySlug,
    industryPath,
    resourcePath,
    caseStudySlug,
  };
}

async function assertNotFoundIsAbsent(page: import('@playwright/test').Page) {
  await expect(page.locator('text=Page not found.')).toHaveCount(0);
  await expect(page.locator('h1:has-text("404")')).toHaveCount(0);
}

test('critical routes load and are not 404', async ({ page }) => {
  const pageErrors: string[] = [];

  page.on('pageerror', err => {
    pageErrors.push(String(err));
  });

  const { blogSlug, blogCategorySlug, industryPath, resourcePath, caseStudySlug } =
    await getGraphSampleRoutes();

  const routes = [
    '/',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
    '/cookies',
    '/blog',
    `/blog/${blogSlug}`,
    `/blog/category/${blogCategorySlug}`,
    '/services',
    '/features',
    '/resources',
    resourcePath,
    '/industries',
    industryPath,
    '/case-studies',
    `/case-studies/${caseStudySlug}`,
  ];

  for (const route of routes) {
    await test.step(route, async () => {
      pageErrors.length = 0;

      await page.goto(route, { waitUntil: 'domcontentloaded' });
      await assertNotFoundIsAbsent(page);

      expect(pageErrors, `JS runtime errors on ${route}`).toEqual([]);
    });
  }
});
