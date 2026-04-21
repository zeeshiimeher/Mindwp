#!/usr/bin/env node

import { buildRouteInventory, type RouteInventoryEntry } from '@/lib/content-quality/inventory';

type ValidationFailure = {
  code: string;
  message: string;
};

type IntentDescriptor = {
  category: string;
  key: string;
  path: string;
};

function getSlugFromPath(routePath: string) {
  return routePath.split('/').filter(Boolean).at(-1) ?? 'home';
}

function getIntentDescriptors(entry: RouteInventoryEntry): IntentDescriptor[] {
  const slug = getSlugFromPath(entry.path);
  const descriptors: IntentDescriptor[] = [];

  if (entry.kind === 'topic-hub' || entry.kind === 'blog-topic') {
    descriptors.push({ category: 'topic', key: slug, path: entry.path });
  }

  if (entry.kind === 'service' || entry.kind === 'feature') {
    descriptors.push({ category: 'solution', key: slug, path: entry.path });
  }

  if (entry.kind === 'industry-category' || entry.kind === 'industry-detail' || entry.kind === 'topic-hub') {
    descriptors.push({ category: 'audience-or-topic', key: slug, path: entry.path });
  }

  return descriptors;
}

function validateIntentGroups(descriptors: IntentDescriptor[]): ValidationFailure[] {
  const failures: ValidationFailure[] = [];
  const grouped = new Map<string, string[]>();

  for (const descriptor of descriptors) {
    const groupKey = `${descriptor.category}:${descriptor.key}`;
    const paths = grouped.get(groupKey) ?? [];
    paths.push(descriptor.path);
    grouped.set(groupKey, paths);
  }

  for (const [groupKey, paths] of grouped) {
    const uniquePaths = [...new Set(paths)];
    if (uniquePaths.length < 2) {
      continue;
    }

    failures.push({
      code: 'duplicate-intent',
      message: `${groupKey} is exposed by multiple indexable routes: ${uniquePaths.join(', ')}.`,
    });
  }

  return failures;
}

async function main() {
  const failures: ValidationFailure[] = [];
  const inventory = await buildRouteInventory();
  const indexableEntries = inventory.filter(entry => entry.indexable);
  const descriptors = indexableEntries.flatMap(getIntentDescriptors);

  failures.push(...validateIntentGroups(descriptors));

  const topicDuplicationSimulation = validateIntentGroups([
    { category: 'topic', key: 'test-page', path: '/topics/test-page' },
    { category: 'topic', key: 'test-page', path: '/blog/topic/test-page' },
  ]);
  if (!topicDuplicationSimulation.some(failure => failure.code === 'duplicate-intent')) {
    failures.push({
      code: 'simulation-topic-duplication-missed',
      message: 'Topic duplication simulation did not fail as expected.',
    });
  }

  const serviceDuplicationSimulation = validateIntentGroups([
    { category: 'solution', key: 'ai-lead-handling', path: '/services/ai-lead-handling' },
    { category: 'solution', key: 'ai-lead-handling', path: '/features/ai-lead-handling' },
  ]);
  if (!serviceDuplicationSimulation.some(failure => failure.code === 'duplicate-intent')) {
    failures.push({
      code: 'simulation-service-duplication-missed',
      message: 'Service duplication simulation did not fail as expected.',
    });
  }

  if (failures.length > 0) {
    process.stderr.write(
      `${failures.map(failure => `- [${failure.code}] ${failure.message}`).join('\n')}\n`
    );
    process.exit(1);
  }

  process.stdout.write('Duplicate intent validation passed.\n');
}

await main();