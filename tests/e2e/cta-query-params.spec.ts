import { expect, test } from '@playwright/test';

async function getRepresentativeRoutes() {
  const reactModule = await import('react');
  globalThis.React ??= reactModule.default;

  const { ensureGraphInitialized } = await import('../../src/domains/init/ensureGraphInitialized');
  const { getContentGraph } = await import('../../src/lib/content-graph/registry');
  const { CANONICAL_SYSTEMS } = await import('../../src/lib/content-graph/canonical');

  await ensureGraphInitialized();

  const nodes = Object.values(getContentGraph());

  return {
    canonicalSystems: new Set<string>(CANONICAL_SYSTEMS),
    pages: [
      { path: '/', expectedSource: 'page/home' },
      {
        path: nodes.filter(node => node.type === 'service').sort((a, b) => a.path.localeCompare(b.path))[0].path,
        expectedSource: `service/${nodes.filter(node => node.type === 'service').sort((a, b) => a.path.localeCompare(b.path))[0].slug}`,
      },
      {
        path: nodes.filter(node => node.type === 'feature').sort((a, b) => a.path.localeCompare(b.path))[0].path,
        expectedSource: `feature/${nodes.filter(node => node.type === 'feature').sort((a, b) => a.path.localeCompare(b.path))[0].slug}`,
      },
      {
        path: nodes.filter(node => node.type === 'blog').sort((a, b) => a.path.localeCompare(b.path))[0].path,
        expectedSource: `blog/${nodes.filter(node => node.type === 'blog').sort((a, b) => a.path.localeCompare(b.path))[0].slug}`,
      },
      {
        path: nodes.filter(node => node.type === 'resource').sort((a, b) => a.path.localeCompare(b.path))[0].path,
        expectedSource: `resource/${nodes.filter(node => node.type === 'resource').sort((a, b) => a.path.localeCompare(b.path))[0].slug}`,
      },
      {
        path: nodes.filter(node => node.type === 'case-study').sort((a, b) => a.path.localeCompare(b.path))[0].path,
        expectedSource: `case-study/${nodes.filter(node => node.type === 'case-study').sort((a, b) => a.path.localeCompare(b.path))[0].slug}`,
      },
      {
        path: nodes.filter(node => node.type === 'industry-detail').sort((a, b) => a.path.localeCompare(b.path))[0].path,
        expectedSource: `industry/${nodes.filter(node => node.type === 'industry-detail').sort((a, b) => a.path.localeCompare(b.path))[0].slug}`,
      },
    ],
  };
}

test('all major page-family CTAs include valid canonical query params', async ({ page }) => {
  const { canonicalSystems, pages } = await getRepresentativeRoutes();

  for (const entry of pages) {
    await page.goto(entry.path);

    const hrefs = await page.locator('main a[href^="/contact?"]').evaluateAll(links =>
      links
        .map(link => (link as HTMLAnchorElement).getAttribute('href'))
        .filter((href): href is string => Boolean(href))
    );

    expect(hrefs.length, `No in-page contact CTAs found on ${entry.path}`).toBeGreaterThan(0);

    const sources = new Set<string>();

    for (const href of hrefs) {
      const url = new URL(href, 'https://mindwp.local');
      const system = url.searchParams.get('system') ?? '';
      const source = url.searchParams.get('source') ?? '';

      expect(url.pathname).toBe('/contact');
      expect(canonicalSystems.has(system), `Non-canonical CTA system on ${entry.path}: ${system}`).toBe(
        true
      );
      expect(/^[a-z-]+\/[a-z0-9-]+$/.test(source), `Invalid CTA source on ${entry.path}: ${source}`).toBe(
        true
      );

      sources.add(source);
    }

    expect(sources.has(entry.expectedSource), `Missing page-specific CTA source on ${entry.path}`).toBe(true);
  }
});