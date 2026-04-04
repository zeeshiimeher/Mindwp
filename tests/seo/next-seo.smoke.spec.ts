import { expect, test } from '@playwright/test';

import { FEATURE_REGISTRY } from '../../src/domains/features/registry';
import { SERVICE_REGISTRY } from '../../src/domains/services/registry';

const baseUrl = (process.env.NEXT_BASE_URL || 'http://localhost:3001').replace(/\/$/, '');
const CANONICAL_ORIGIN = 'https://mindwp.com';

function toAbsoluteCanonical(path: string): string {
  return new URL(path, CANONICAL_ORIGIN).toString();
}

function extractCanonicalHref(html: string): string | null {
  const linkWithRelThenHref =
    /<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i.exec(html)?.[1];
  if (linkWithRelThenHref) return linkWithRelThenHref;

  const linkWithHrefThenRel =
    /<link[^>]*href=["']([^"']+)["'][^>]*rel=["']canonical["'][^>]*>/i.exec(html)?.[1];
  return linkWithHrefThenRel ?? null;
}

function extractJsonLdScripts(html: string): unknown[] {
  const scriptMatches = html.matchAll(
    /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi
  );

  const jsonLdBlocks: unknown[] = [];
  for (const match of scriptMatches) {
    const raw = match[1]?.trim();
    if (!raw) continue;

    try {
      jsonLdBlocks.push(JSON.parse(raw));
    } catch {
      continue;
    }
  }

  return jsonLdBlocks;
}

function hasContextAndType(value: unknown): boolean {
  if (!value || typeof value !== 'object') return false;
  if (Array.isArray(value)) return value.some(item => hasContextAndType(item));

  const record = value as Record<string, unknown>;
  return typeof record['@context'] === 'string' && typeof record['@type'] === 'string';
}

test.describe('SEO smoke', () => {
  test('valid routes return canonical and JSON-LD', async ({ request }) => {
    const firstServiceSlug = Object.keys(SERVICE_REGISTRY)[0];
    const firstFeature = FEATURE_REGISTRY[0];

    if (!firstServiceSlug || !firstFeature) {
      throw new Error('Could not resolve service/feature registry entries for SEO smoke test.');
    }

    const servicePath = SERVICE_REGISTRY[firstServiceSlug]?.path;
    const featurePath = firstFeature.path;

    if (!servicePath || !featurePath) {
      throw new Error('Resolved registry routes are missing path values.');
    }

    const checks = [
      { path: servicePath, expectedCanonical: toAbsoluteCanonical(servicePath) },
      { path: featurePath, expectedCanonical: toAbsoluteCanonical(featurePath) },
    ] as const;

    for (const item of checks) {
      const response = await request.get(`${baseUrl}${item.path}`);
      const body = await response.text();

      expect(response.status(), `${item.path} should return 200`).toBe(200);

      const canonical = extractCanonicalHref(body);
      expect(canonical, `${item.path} should include a canonical link tag`).not.toBeNull();
      expect(canonical, `${item.path} canonical should match expected URL`).toBe(
        item.expectedCanonical
      );

      const jsonLdBlocks = extractJsonLdScripts(body);
      expect(jsonLdBlocks.length, `${item.path} should include at least one JSON-LD block`).toBeGreaterThan(
        0
      );

      expect(
        jsonLdBlocks.some(block => hasContextAndType(block)),
        `${item.path} should include JSON-LD containing @context and @type`
      ).toBe(true);
    }
  });

  test('invalid routes return 404', async ({ request }) => {
    const invalidChecks = ['/services/not-real', '/features/not-real'] as const;

    for (const path of invalidChecks) {
      const response = await request.get(`${baseUrl}${path}`);
      expect(response.status(), `${path} should return 404`).toBe(404);
    }
  });
});
