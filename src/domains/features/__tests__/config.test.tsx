// @vitest-environment jsdom

import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

vi.mock('@/components/system/SmartRelatedSection', () => ({
  SmartRelatedSection: ({ slug }: { slug?: string }) => (
    <div data-testid='related-section'>{slug}</div>
  ),
}));

vi.mock('@/domains/features/pages/voicecalls', () => ({ default: () => null }));
vi.mock('@/domains/features/pages/aichat', () => ({ default: () => null }));
vi.mock('@/domains/features/pages/reputation', () => ({ default: () => null }));
vi.mock('@/domains/features/pages/inbox', () => ({ default: () => null }));
vi.mock('@/domains/features/pages/workflows', () => ({ default: () => null }));
vi.mock('@/domains/features/pages/calendars', () => ({ default: () => null }));
vi.mock('@/domains/features/pages/crm', async () => {
  const { usePageIdentity } = await import('@/components/system/PageEnforcement');

  function MockFeatureCrmPage({ data }: { data: { slug: string } }) {
    const pageIdentity = usePageIdentity();

    return (
      <div data-testid='feature-page'>
        {`${data.slug}:${pageIdentity?.pageId}:${pageIdentity?.pageType}`}
      </div>
    );
  }

  return {
    default: MockFeatureCrmPage,
  };
});

import {
  getPageEnforcementSnapshots,
  resetPageEnforcementSnapshots,
} from '@/components/system/PageEnforcement';
import {
  FEATURE_ENTRY_BY_SLUG,
  getFeatureDataBySlug,
  isFeatureSlug,
  renderFeaturePageBySlug,
} from '@/domains/features/config';
import { FEATURE_REGISTRY, getFeaturePageDataBySlug } from '@/domains/features/registry';

afterEach(() => {
  cleanup();
  resetPageEnforcementSnapshots();
});

describe('features config and registry', () => {
  it('accepts only known feature slugs', () => {
    expect(isFeatureSlug('crm')).toBe(true);
    expect(isFeatureSlug('inbox')).toBe(true);
    expect(isFeatureSlug('unknown-feature')).toBe(false);
  });

  it('returns configured feature data by slug from the registry-owned lookup', () => {
    const crmData = getFeatureDataBySlug('crm');
    expect(crmData.slug).toBe('crm');
    expect(crmData).toBe(getFeaturePageDataBySlug('crm'));
  });

  it('builds registry entries from config with canonical feature paths', () => {
    expect(FEATURE_REGISTRY.length).toBe(Object.keys(FEATURE_ENTRY_BY_SLUG).length);

    for (const item of FEATURE_REGISTRY) {
      expect(item.path.startsWith('/features/')).toBe(true);
      expect(item.title.length).toBeGreaterThan(0);
      expect(item.description.length).toBeGreaterThan(0);
    }
  });

  it('renders feature pages through the config-owned render path with page enforcement context', () => {
    render(renderFeaturePageBySlug('crm'));

    expect(screen.getByTestId('feature-page').textContent).toBe('crm:feature:crm:feature');
    expect(screen.getByTestId('related-section').textContent).toBe('crm');

    expect(getPageEnforcementSnapshots()).toContainEqual(
      expect.objectContaining({
        pageIdentity: expect.objectContaining({
          pageId: 'feature:crm',
          pageType: 'feature',
          primarySystem: 'crm-automation',
        }),
      })
    );
  });
});
