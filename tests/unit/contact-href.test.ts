// @vitest-environment node

import { describe, expect, test } from 'vitest';

import {
  buildContactHref,
  buildGlobalContactHref,
  CONTACT_PATH,
  isCanonicalContactSystem,
  isGlobalNavigationContactContext,
  isValidContactContext,
  isValidContactSource,
  normalizeContactContext,
} from '@/lib/contact/contactHref';

describe('unit: contact href helpers', () => {
  test('builds canonical contact hrefs with system and source query params', () => {
    const href = buildContactHref({
      system: 'smart-website-systems',
      sourceType: 'service',
      slug: 'smart-website-systems',
    });

    expect(href).toBe(
      '/contact?system=smart-website-systems&source=service%2Fsmart-website-systems'
    );
  });

  test('returns non-contact base hrefs unchanged', () => {
    const href = buildContactHref('/services', {
      system: 'smart-website-systems',
      sourceType: 'page',
      slug: 'home',
    });

    expect(href).toBe('/services');
  });

  test('rejects malformed contact sources', () => {
    expect(() =>
      buildContactHref({
        system: 'smart-website-systems',
        sourceType: 'service',
        slug: 'bad slug',
      })
    ).toThrow(/Invalid contact context/);
  });

  test('validates canonical systems and source patterns', () => {
    expect(isCanonicalContactSystem('smart-website-systems')).toBe(true);
    expect(isCanonicalContactSystem('unknown-system')).toBe(false);

    expect(isValidContactSource('page/home')).toBe(true);
    expect(isValidContactSource('bad source')).toBe(false);
    expect(isValidContactSource('direct-visit')).toBe(true);

    expect(isValidContactContext('smart-website-systems', 'page/home')).toBe(true);
    expect(isValidContactContext('unknown-system', 'page/BadSource')).toBe(true);
    expect(isValidContactContext('', 'page/home')).toBe(false);
  });

  test('requires explicit contact context values', () => {
    expect(() => normalizeContactContext('', '')).toThrow(
      /normalizeContactContext requires explicit system and source values/
    );
  });

  test('builds and recognizes the global navigation contact context', () => {
    const href = buildGlobalContactHref(CONTACT_PATH);
    const url = new URL(href, 'https://mindwp.local');

    expect(url.pathname).toBe(CONTACT_PATH);
    expect(url.searchParams.get('system')).toBe('smart-website-systems');
    expect(url.searchParams.get('source')).toBe('global/navigation');
    expect(isGlobalNavigationContactContext('smart-website-systems', 'global/navigation')).toBe(
      true
    );
  });
});
