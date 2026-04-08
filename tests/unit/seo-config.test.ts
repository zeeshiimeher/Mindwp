// @vitest-environment node

import { describe, expect, test } from 'vitest';

import { getMetadataBase, normalizePath, SITE_ORIGIN, toAbsoluteUrl } from '@/lib/seo/config';

describe('unit: seo config helpers', () => {
  test('normalizes relative and absolute paths to a canonical pathname', () => {
    expect(normalizePath('/blog/post/')).toBe('/blog/post');
    expect(normalizePath('blog/post')).toBe('/blog/post');
    expect(normalizePath('https://mindwp.com/blog/post/')).toBe('/blog/post');
    expect(normalizePath('/')).toBe('/');
  });

  test('builds absolute URLs from canonical paths', () => {
    expect(toAbsoluteUrl('/blog/post')).toBe(`${SITE_ORIGIN}/blog/post`);
    expect(getMetadataBase().toString().replace(/\/$/, '')).toBe(SITE_ORIGIN);
  });
});