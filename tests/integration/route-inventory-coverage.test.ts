// @vitest-environment node

import fs from 'node:fs';
import path from 'node:path';

import { describe, expect, test } from 'vitest';

import { buildRouteInventory } from '@/lib/content-quality/inventory';
import { buildRoutePathFromSegments } from '@/lib/seo/config';

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
		const staticAppRoutes = collectStaticAppRoutes(path.join(process.cwd(), 'src', 'app'));

		expect(staticAppRoutes.every(routePath => inventoryPaths.has(routePath))).toBe(true);
	});

	test('inventory uses canonical case-study assets for case-study open graph images', async () => {
		const inventory = await buildRouteInventory();
		const entry = inventory.find(item => item.path === '/case-studies/hvac-emergency-lead-routing');

		expect(entry?.openGraph.images).toEqual([
			'/images/case-studies/hvac-emergency-lead-routing.webp',
		]);
	});
});