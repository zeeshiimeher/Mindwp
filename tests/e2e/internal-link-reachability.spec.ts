import { expect, test } from '@playwright/test';

import { normalizeInternalTarget as normalizeSharedInternalTarget } from '@/lib/seo/config';

const baseUrl = (process.env.NEXT_BASE_URL || 'http://localhost:3001').replace(/\/$/, '');
const baseOrigin = new URL(baseUrl).origin;
const canonicalOrigin = 'https://mindwp.com';

type RenderedLink = {
  href: string;
  text: string;
  inHeader: boolean;
  inFooter: boolean;
  inMain: boolean;
  className: string;
};

type RouteProbe = {
  status: number;
  canonical: string | null;
};

function canonicalForPath(pathname: string): string {
  const url = new URL(pathname, canonicalOrigin);
  return url.pathname === '/' ? url.origin : url.toString();
}

function isDocumentEndpoint(pathname: string): boolean {
  return /\.(xml|txt|json)$/i.test(pathname);
}

function extractCanonicalHref(html: string): string | null {
  const relThenHref = /<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i.exec(
    html
  )?.[1];
  if (relThenHref) {
    return relThenHref;
  }

  return /<link[^>]*href=["']([^"']+)["'][^>]*rel=["']canonical["'][^>]*>/i.exec(html)?.[1] ?? null;
}

function normalizeInternalTarget(href: string, currentPath: string): string | null {
  return normalizeSharedInternalTarget(href, {
    baseOrigin,
    currentPath,
    includeSearch: true,
  });
}

async function getPublishedRoutes() {
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

  for (const slug of getAllCategorySlugs()) {
    routes.add(`/blog/category/${slug}`);
  }

  for (const slug of getallTopicSlugs()) {
    routes.add(`/blog/topic/${slug}`);
  }

  for (const category of categories) {
    routes.add(`/resources/category/${category.slug}`);
  }

  return [...routes].sort((left, right) => left.localeCompare(right));
}

test.describe('internal link reachability', () => {
  test.setTimeout(360_000);

  test('rendered internal links resolve and canonicalize across published pages', async ({
    page,
    request,
  }) => {
    const routes = await getPublishedRoutes();
    const probes = new Map<string, RouteProbe>();

    async function probeTarget(target: string): Promise<RouteProbe> {
      const cacheKey = target;
      const cached = probes.get(cacheKey);
      if (cached) {
        return cached;
      }

      const response = await request.get(`${baseUrl}${target}`);
      const body = await response.text();
      const probe = {
        status: response.status(),
        canonical: extractCanonicalHref(body),
      };

      probes.set(cacheKey, probe);
      return probe;
    }

    for (const route of routes) {
      await page.goto(route, { waitUntil: 'domcontentloaded' });

      const currentUrl = new URL(page.url());
      const currentPath = currentUrl.pathname;
      const currentRouteKey = `${currentUrl.pathname}${currentUrl.search}`;

      const renderedLinks = await page.locator('a[href]').evaluateAll(elements =>
        elements.map(element => ({
          href: element.getAttribute('href') ?? '',
          text: element.textContent?.trim() ?? '',
          inHeader: Boolean(element.closest('header')),
          inFooter: Boolean(element.closest('footer')),
          inMain: Boolean(element.closest('main')),
          className: element.className,
        }))
      );

      for (const link of renderedLinks as RenderedLink[]) {
        const target = normalizeInternalTarget(link.href, currentRouteKey);
        if (!target) {
          continue;
        }

        const targetUrl = new URL(target, baseOrigin);
        const isSelfLink = `${targetUrl.pathname}${targetUrl.search}` === currentRouteKey;
        const isChromeLink = link.inHeader || link.inFooter || link.className.includes('logo');

        if (link.inMain && isSelfLink && !isChromeLink) {
          throw new Error(`Self link detected in main content on ${route}: ${link.href}`);
        }

        const probe = await probeTarget(target);
        expect(probe.status, `${route} links to ${target} but it does not resolve`).toBe(200);

        if (!isDocumentEndpoint(targetUrl.pathname)) {
          expect(
            probe.canonical,
            `${route} links to ${target} but target canonical is incorrect`
          ).toBe(canonicalForPath(targetUrl.pathname));
        }
      }

      const pageCanonical = await page.locator('link[rel="canonical"]').getAttribute('href');
      expect(pageCanonical, `${route} should emit a canonical URL`).toBe(
        canonicalForPath(currentPath)
      );
    }
  });

  test('header and footer navigation targets stay valid', async ({ page, request }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    const chromeLinks = await page
      .locator('header a[href], footer a[href]')
      .evaluateAll(elements =>
        elements.map(element => element.getAttribute('href') ?? '').filter(Boolean)
      );

    const uniqueTargets = [...new Set(chromeLinks)]
      .map(href => normalizeInternalTarget(href, '/'))
      .filter((href): href is string => Boolean(href));

    for (const target of uniqueTargets) {
      const response = await request.get(`${baseUrl}${target}`);
      expect(response.status(), `Navigation target ${target} should resolve`).toBe(200);
    }
  });
});
