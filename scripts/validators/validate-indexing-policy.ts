#!/usr/bin/env node

import { buildRouteInventory, buildSitemapRoutePaths } from '../../src/lib/content-quality/inventory';

import { resolveIndexingPolicy } from '../../config/indexingPolicy';

type ValidationFailure = {
  code: string;
  message: string;
};

async function main() {
  const failures: ValidationFailure[] = [];
  const inventory = await buildRouteInventory();
  const sitemapPaths = new Set(await buildSitemapRoutePaths());

  for (const entry of inventory) {
    if (entry.policySource === 'fallback') {
      failures.push({
        code: 'missing-classification',
        message: `${entry.path} resolves through indexing fallback instead of an explicit classification.`,
      });
    }

    if (entry.indexable && !sitemapPaths.has(entry.path)) {
      failures.push({
        code: 'missing-from-sitemap',
        message: `${entry.path} is indexable but missing from sitemap output.`,
      });
    }

    if (!entry.indexable && sitemapPaths.has(entry.path)) {
      failures.push({
        code: 'noindex-in-sitemap',
        message: `${entry.path} is noindex but present in sitemap output.`,
      });
    }
  }

  const simulatedNewRoute = resolveIndexingPolicy('static', '/tools/test-page');
  if (simulatedNewRoute.index) {
    failures.push({
      code: 'fallback-default-index',
      message:
        'Simulated new route /tools/test-page is indexable. Fallback must default to noindex.',
    });
  }

  const simulatedNewTopicRoute = resolveIndexingPolicy('topic-hub', '/topics/test-page');
  if (simulatedNewTopicRoute.index) {
    failures.push({
      code: 'topic-default-index',
      message:
        'Simulated new topic route /topics/test-page is indexable. Topic fallback must default to noindex.',
    });
  }

  if (failures.length > 0) {
    process.stderr.write(
      `${failures.map(failure => `- [${failure.code}] ${failure.message}`).join('\n')}\n`
    );
    process.exit(1);
  }

  process.stdout.write('Indexing policy validation passed.\n');
}

await main();
