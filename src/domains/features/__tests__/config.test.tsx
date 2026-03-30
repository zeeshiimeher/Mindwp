import { describe, expect, it, vi } from 'vitest';

vi.mock('@/domains/features/pages/voicecalls', () => ({ default: () => null }));
vi.mock('@/domains/features/pages/aichat', () => ({ default: () => null }));
vi.mock('@/domains/features/pages/reputation', () => ({ default: () => null }));
vi.mock('@/domains/features/pages/inbox', () => ({ default: () => null }));
vi.mock('@/domains/features/pages/workflows', () => ({ default: () => null }));
vi.mock('@/domains/features/pages/calendars', () => ({ default: () => null }));
vi.mock('@/domains/features/pages/crm', () => ({ default: () => null }));

import {
  FEATURE_ENTRY_BY_SLUG,
  getFeatureDataBySlug,
  getFeaturePageBySlug,
  isFeatureSlug,
} from '@/domains/features/config';
import { FEATURE_REGISTRY } from '@/domains/features/registry';

describe('features config and registry', () => {
  it('accepts only known feature slugs', () => {
    expect(isFeatureSlug('crm')).toBe(true);
    expect(isFeatureSlug('inbox')).toBe(true);
    expect(isFeatureSlug('unknown-feature')).toBe(false);
  });

  it('returns configured data and pages by slug', () => {
    const crmData = getFeatureDataBySlug('crm');
    expect(crmData.slug).toBe('crm');

    const inboxPage = getFeaturePageBySlug('inbox');
    expect(typeof inboxPage).toBe('function');
  });

  it('builds registry entries from config with canonical feature paths', () => {
    expect(FEATURE_REGISTRY.length).toBe(Object.keys(FEATURE_ENTRY_BY_SLUG).length);

    for (const item of FEATURE_REGISTRY) {
      expect(item.path.startsWith('/features/')).toBe(true);
      expect(item.title.length).toBeGreaterThan(0);
      expect(item.description.length).toBeGreaterThan(0);
    }
  });
});
