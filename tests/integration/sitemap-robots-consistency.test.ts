// @vitest-environment node

import { beforeAll, describe, expect, test } from 'vitest';

import robots from '@/app/robots';
import sitemap from '@/app/sitemap';
import { toAbsoluteUrl } from '@/lib/seo/config';

import { initRuntime } from '../system/runtime';

describe('integration: sitemap and robots consistency', () => {
  beforeAll(async () => {
    await initRuntime();
  });

  test('sitemap URLs are unique absolute URLs on the canonical origin', async () => {
    const entries = await sitemap();
    const urls = entries.map(entry => entry.url.toString());

    expect(new Set(urls).size).toBe(urls.length);
    expect(urls.every(url => url.startsWith(toAbsoluteUrl('/').replace(/\/$/, '')))).toBe(true);
  });

  test('robots points at the canonical sitemap and sitemap excludes disallowed prefixes', async () => {
    const robotsConfig = robots();
    const entries = await sitemap();
    const urls = entries.map(entry => entry.url.toString());
    const rules = Array.isArray(robotsConfig.rules) ? robotsConfig.rules : [robotsConfig.rules];
    const disallowedPrefixes = rules.flatMap(rule => {
      const disallow = rule.disallow ?? [];
      return Array.isArray(disallow) ? disallow : [disallow];
    });

    expect(robotsConfig.sitemap).toBe(toAbsoluteUrl('/sitemap.xml'));

    for (const prefix of disallowedPrefixes) {
      for (const url of urls) {
        expect(url.includes(prefix), `Sitemap should not contain disallowed prefix ${prefix}`).toBe(false);
      }
    }
  });
});