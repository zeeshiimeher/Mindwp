// @vitest-environment node

import { describe, expect, test } from 'vitest';

import { buildRouteInventory, buildSitemapRoutePaths } from '@/lib/content-quality/inventory';
import { STATIC_PAGES, STATIC_ROUTE_DEFINITIONS } from '@/lib/site/staticPages';

describe('system invariant: static route parity', () => {
  test('canonical static route definitions drive human sitemap pages, inventory, and sitemap output', async () => {
    const inventory = await buildRouteInventory();
    const sitemapPaths = await buildSitemapRoutePaths();

    const staticInventoryPaths = inventory
      .filter(entry => entry.kind === 'static')
      .map(entry => entry.path)
      .sort((left, right) => left.localeCompare(right));

    const definitionPaths = STATIC_ROUTE_DEFINITIONS.map(route => route.path).sort((left, right) =>
      left.localeCompare(right)
    );
    const inventoryDefinitionPaths = STATIC_ROUTE_DEFINITIONS.filter(
      route => route.includeInRouteInventory !== false
    )
      .map(route => route.path)
      .sort((left, right) => left.localeCompare(right));
    const indexableDefinitionPaths = STATIC_ROUTE_DEFINITIONS.filter(
      route => route.includeInRouteInventory !== false && route.indexable !== false
    )
      .map(route => route.path)
      .sort((left, right) => left.localeCompare(right));
    const humanSitemapPaths = STATIC_ROUTE_DEFINITIONS.filter(
      route => route.showOnHumanSitemap !== false
    )
      .map(route => route.path)
      .sort((left, right) => left.localeCompare(right));
    const staticPagePaths = STATIC_PAGES.map(page => page.url).sort((left, right) => left.localeCompare(right));
    const humanStaticPagePaths = STATIC_PAGES.filter(page => page.showOnHumanSitemap !== false)
      .map(page => page.url)
      .sort((left, right) => left.localeCompare(right));
    const staticSitemapPaths = sitemapPaths
      .filter(path => definitionPaths.includes(path))
      .sort((left, right) => left.localeCompare(right));

    expect(staticInventoryPaths).toEqual(inventoryDefinitionPaths);
    expect(staticPagePaths).toEqual(definitionPaths);
    expect(humanStaticPagePaths).toEqual(humanSitemapPaths);
    expect(staticSitemapPaths).toEqual(indexableDefinitionPaths);
  });
});