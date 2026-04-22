// @vitest-environment node

import { describe, expect, test } from 'vitest';

import {
  buildRoutePathFromSegments,
  getMetadataBase,
  normalizeInternalTarget,
  normalizePath,
  SITE_ORIGIN,
  toAbsoluteUrl,
} from '@/lib/seo/config';

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

  test('builds canonical route paths from path segments', () => {
    expect(buildRoutePathFromSegments([])).toBe('/');
    expect(buildRoutePathFromSegments(['blog', 'post'])).toBe('/blog/post');
  });

  test('normalizes internal targets with shared filtering and optional search preservation', () => {
    expect(
      normalizeInternalTarget('/blog/post/?ref=nav#section', {
        baseOrigin: 'https://mindwp.com',
        currentPath: '/resources',
        includeSearch: true,
      })
    ).toBe('/blog/post?ref=nav');
    expect(
      normalizeInternalTarget('mailto:hello@mindwp.com', {
        baseOrigin: 'https://mindwp.com',
      })
    ).toBeNull();
    expect(
      normalizeInternalTarget('https://external.example/blog/post', {
        baseOrigin: 'https://mindwp.com',
      })
    ).toBeNull();
  });
});
