// @vitest-environment node

import fs from 'node:fs';
import path from 'node:path';

import { describe, expect, test } from 'vitest';

import { CASE_STUDY_REGISTRY } from '@/domains/case-studies/registry';
import { buildRouteInventory } from '@/lib/content-quality/inventory';
import { getImage } from '@/lib/image-system/resolver';
import { buildRoutePathFromSegments } from '@/lib/seo/config';
import { getIsSystemEnabled } from '@/system/isSystemEnabled';

const INTERNAL_STATIC_ROUTE_PREFIXES = ['/dev/'];
const INTERNAL_STATIC_ROUTE_PATHS = new Set([
  '/components',
  '/dashboard',
  '/image-dashboard',
  '/system-dashboard',
]);

function isProtectedStaticAppRoute(routePath: string) {
  return (
    INTERNAL_STATIC_ROUTE_PATHS.has(routePath) ||
    INTERNAL_STATIC_ROUTE_PREFIXES.some(prefix => routePath.startsWith(prefix))
  );
}

function collectStaticAppRoutes(appRoot: string) {
  const routes = new Set<string>();

  function visit(dirPath: string) {
    for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
      const fullPath = path.join(dirPath, entry.name);

      if (entry.isDirectory()) {
        if (entry.name === 'api') {
          continue;
        }

        visit(fullPath);
        continue;
      }

      if (entry.name !== 'page.tsx') {
        continue;
      }

      const relativeDir = path.relative(appRoot, path.dirname(fullPath));
      const segments = relativeDir
        .split(path.sep)
        .filter(Boolean)
        .filter(segment => !segment.startsWith('('));

      if (segments.some(segment => segment.includes('['))) {
        continue;
      }

      routes.add(buildRoutePathFromSegments(segments));
    }
  }

  visit(appRoot);
  return [...routes].sort((left, right) => left.localeCompare(right));
}

describe('integration: route inventory coverage', () => {
  test('inventory includes every static app page route', async () => {
    const inventory = await buildRouteInventory();
    const inventoryPaths = new Set(inventory.map(entry => entry.path));
    const staticAppRoutes = collectStaticAppRoutes(path.join(process.cwd(), 'src', 'app')).filter(
      routePath => getIsSystemEnabled() || !isProtectedStaticAppRoute(routePath)
    );

    expect(staticAppRoutes.every(routePath => inventoryPaths.has(routePath))).toBe(true);
  });

  test('inventory uses resolved case-study assets for case-study open graph images', async () => {
    const inventory = await buildRouteInventory();

    for (const caseStudy of Object.values(CASE_STUDY_REGISTRY)) {
      const entry = inventory.find(item => item.path === caseStudy.seo.canonical);

      expect(entry, `Missing route inventory entry for ${caseStudy.slug}`).toBeDefined();
      expect(entry?.openGraph.images).toEqual([
        getImage(caseStudy.slug, 'case-studies', 'featured-overlay'),
      ]);
    }
  });
});
