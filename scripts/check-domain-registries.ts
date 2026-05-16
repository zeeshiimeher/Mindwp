#!/usr/bin/env tsx
/* eslint-disable no-console */

import { FEATURE_DOMAIN_REGISTRY } from '../src/domains/features/pageData';
import { SERVICE_DOMAIN_REGISTRY } from '../src/domains/services/pageData';

type RegistryEntry = {
  slug?: unknown;
  data?: unknown;
  renderer?: unknown;
};

type PageData = {
  slug?: unknown;
  seo?: {
    title?: unknown;
    description?: unknown;
    canonical?: unknown;
  };
  systems?: unknown;
  topics?: unknown;
  hero?: {
    title?: unknown;
    description?: unknown;
  };
};

type Failure = {
  registry: string;
  key: string;
  message: string;
};

const failures: Failure[] = [];

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

function addFailure(registry: string, key: string, message: string) {
  failures.push({ registry, key, message });
}

function checkRegistry(registryName: string, registry: Record<string, RegistryEntry>) {
  for (const [key, entry] of Object.entries(registry)) {
    if (!isNonEmptyString(key)) {
      addFailure(registryName, key || '<empty>', 'registry key must be a non-empty string');
    }

    if (!isNonEmptyString(entry.slug)) {
      addFailure(registryName, key, 'entry.slug must be a non-empty string');
    }

    if (!entry.data || typeof entry.data !== 'object') {
      addFailure(registryName, key, 'entry.data must exist');
      continue;
    }

    if (typeof entry.renderer !== 'function') {
      addFailure(registryName, key, 'entry.renderer must be a function');
    }

    const data = entry.data as PageData;

    if (data.slug !== entry.slug) {
      addFailure(registryName, key, `entry.data.slug must equal entry.slug (${String(entry.slug)})`);
    }

    if (key !== entry.slug) {
      addFailure(registryName, key, `registry key must equal entry.slug (${String(entry.slug)})`);
    }

    if (!isNonEmptyString(data.seo?.title)) {
      addFailure(registryName, key, 'data.seo.title must be a non-empty string');
    }

    if (!isNonEmptyString(data.seo?.description)) {
      addFailure(registryName, key, 'data.seo.description must be a non-empty string');
    }

    if (!isNonEmptyString(data.seo?.canonical)) {
      addFailure(registryName, key, 'data.seo.canonical must be a non-empty string');
    }

    if (!Array.isArray(data.systems) || data.systems.length === 0) {
      addFailure(registryName, key, 'data.systems must be a non-empty array');
    }

    if (!Array.isArray(data.topics)) {
      addFailure(registryName, key, 'data.topics must be an array');
    }

    if (!isNonEmptyString(data.hero?.title)) {
      addFailure(registryName, key, 'data.hero.title must be a non-empty string');
    }

    if (!isNonEmptyString(data.hero?.description)) {
      addFailure(registryName, key, 'data.hero.description must be a non-empty string');
    }
  }
}

checkRegistry('services', SERVICE_DOMAIN_REGISTRY);
checkRegistry('features', FEATURE_DOMAIN_REGISTRY);

if (failures.length === 0) {
  console.log('check:domain-registries passed.');
  console.log(`- services: ${Object.keys(SERVICE_DOMAIN_REGISTRY).length} entries`);
  console.log(`- features: ${Object.keys(FEATURE_DOMAIN_REGISTRY).length} entries`);
  process.exit(0);
}

console.error(`check:domain-registries failed (${failures.length} failure(s)):\n`);
for (const failure of failures) {
  console.error(`${failure.registry}:${failure.key} ${failure.message}`);
}

process.exit(1);
