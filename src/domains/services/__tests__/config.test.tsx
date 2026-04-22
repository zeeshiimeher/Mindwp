// @vitest-environment jsdom

import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

vi.mock('@/components/system/SmartRelatedSection', () => ({
  SmartRelatedSection: ({ slug }: { slug?: string }) => (
    <div data-testid='related-section'>{slug}</div>
  ),
}));

vi.mock('@/domains/services/renderers/ConversionLayerRenderer', async () => {
  const { usePageIdentity } = await import('@/components/system/PageEnforcement');

  return {
    ConversionLayerRenderer: ({ data, slug }: { data: { slug: string }; slug: string }) => {
      const pageIdentity = usePageIdentity();

      return (
        <div data-testid='service-renderer'>
          {`${data.slug}:${slug}:${pageIdentity?.pageId}:${pageIdentity?.pageType}`}
        </div>
      );
    },
  };
});

vi.mock('@/domains/services/renderers/SystemMigrationPlatformConsolidationRenderer', () => ({
  SystemMigrationPlatformConsolidationRenderer: () => null,
}));

vi.mock('@/domains/services/renderers/WebsiteRedesignSystemRebuildRenderer', () => ({
  WebsiteRedesignSystemRebuildRenderer: () => null,
}));

vi.mock('@/domains/services/renderers/LeadReactivationSystemRenderer', () => ({
  LeadReactivationSystemRenderer: () => null,
}));

vi.mock('@/domains/services/renderers/MissedCallRecoverySystemRenderer', () => ({
  MissedCallRecoverySystemRenderer: () => null,
}));

vi.mock('@/domains/services/renderers/UnifiedCommunicationSystemRenderer', () => ({
  UnifiedCommunicationSystemRenderer: () => null,
}));

vi.mock('@/domains/services/renderers/SmartWebsiteSystemsRenderer', () => ({
  default: () => null,
}));

vi.mock('@/domains/services/renderers/LocalSeoAuthorityRenderer', () => ({
  LocalSeoAuthorityRenderer: () => null,
}));

vi.mock('@/domains/services/renderers/ReputationReviewSystemsRenderer', () => ({
  ReputationReviewSystemsRenderer: () => null,
}));

vi.mock('@/domains/services/renderers/CRMAutomationRenderer', () => ({
  CRMAutomationRenderer: () => null,
}));

vi.mock('@/domains/services/renderers/AiLeadHandlingRenderer', () => ({
  AiLeadHandlingRenderer: () => null,
}));

vi.mock('@/domains/services/renderers/WooCommerceRenderer', () => ({
  WooCommerceRenderer: () => null,
}));

vi.mock('@/domains/services/renderers/WordPressDevelopmentRenderer', () => ({
  WordPressDevelopmentRenderer: () => null,
}));

vi.mock('@/domains/services/renderers/Divi5Renderer', () => ({
  Divi5Renderer: () => null,
}));

vi.mock('@/domains/services/renderers/BricksBuilderRenderer', () => ({
  BricksBuilderRenderer: () => null,
}));

vi.mock('@/domains/services/renderers/ElementorRenderer', () => ({
  ElementorRenderer: () => null,
}));

import {
  getPageEnforcementSnapshots,
  resetPageEnforcementSnapshots,
} from '@/components/system/PageEnforcement';
import {
  getServiceDataBySlug,
  isServiceSlug,
  renderServicePageBySlug,
} from '@/domains/services/config';
import { getServicePageDataBySlug } from '@/domains/services/pageData';

afterEach(() => {
  cleanup();
  resetPageEnforcementSnapshots();
});

describe('services config slugs', () => {
  it('treats canonical slugs as valid service slugs', () => {
    expect(isServiceSlug('conversion-layer')).toBe(true);
    expect(isServiceSlug('conversion-funnel-system-vs-landing-page-development')).toBe(true);
    expect(isServiceSlug('system-migration-platform-consolidation')).toBe(true);
    expect(isServiceSlug('website-redesign-system-rebuild')).toBe(true);
    expect(isServiceSlug('lead-reactivation-system')).toBe(true);
    expect(isServiceSlug('missed-call-recovery-system')).toBe(true);
    expect(isServiceSlug('unified-communication-system')).toBe(true);
    expect(isServiceSlug('reputation-review-systems')).toBe(true);
    expect(isServiceSlug('crm-infrastructure-implementation')).toBe(true);
    expect(isServiceSlug('website-crm-integration-vs-manual-lead-handling')).toBe(true);
    expect(isServiceSlug('service-pages-vs-one-generic-services-page')).toBe(true);
    expect(isServiceSlug('crm-automation')).toBe(false);
    expect(isServiceSlug('lead-generation-conversion')).toBe(false);
    expect(isServiceSlug('ecommerce')).toBe(true);
    expect(isServiceSlug('woocommerce')).toBe(false);
    expect(isServiceSlug('wordpress-development')).toBe(true);
    expect(isServiceSlug('not-a-service')).toBe(false);
  });

  it('returns the expected canonical service data from the registry-owned lookup', () => {
    const conversionLayerData = getServiceDataBySlug('conversion-layer');
    expect(conversionLayerData.seo.canonical).toBe('/services/conversion-layer');
    expect(conversionLayerData).toBe(getServicePageDataBySlug('conversion-layer'));

    const conversionDecisionData = getServiceDataBySlug(
      'conversion-funnel-system-vs-landing-page-development'
    );
    expect(conversionDecisionData.seo.canonical).toBe(
      '/services/conversion-funnel-system-vs-landing-page-development'
    );

    const migrationData = getServiceDataBySlug('system-migration-platform-consolidation');
    expect(migrationData.seo.canonical).toBe('/services/system-migration-platform-consolidation');

    const redesignData = getServiceDataBySlug('website-redesign-system-rebuild');
    expect(redesignData.seo.canonical).toBe('/services/website-redesign-system-rebuild');

    const leadReactivationData = getServiceDataBySlug('lead-reactivation-system');
    expect(leadReactivationData.seo.canonical).toBe('/services/lead-reactivation-system');

    const missedCallData = getServiceDataBySlug('missed-call-recovery-system');
    expect(missedCallData.seo.canonical).toBe('/services/missed-call-recovery-system');

    const unifiedCommunicationData = getServiceDataBySlug('unified-communication-system');
    expect(unifiedCommunicationData.seo.canonical).toBe('/services/unified-communication-system');

    const reputationData = getServiceDataBySlug('reputation-review-systems');
    expect(reputationData.seo.canonical).toBe('/services/reputation-review-systems');

    const crmData = getServiceDataBySlug('crm-infrastructure-implementation');
    expect(crmData.seo.canonical).toBe('/services/crm-infrastructure-implementation');

    const crmDecisionData = getServiceDataBySlug('website-crm-integration-vs-manual-lead-handling');
    expect(crmDecisionData.seo.canonical).toBe(
      '/services/website-crm-integration-vs-manual-lead-handling'
    );

    const servicePagesDecisionData = getServiceDataBySlug(
      'service-pages-vs-one-generic-services-page'
    );
    expect(servicePagesDecisionData.seo.canonical).toBe(
      '/services/service-pages-vs-one-generic-services-page'
    );

    const ecommerceData = getServiceDataBySlug('ecommerce');
    const wpData = getServiceDataBySlug('wordpress-development');

    expect(wpData).not.toBe(ecommerceData);
    expect(ecommerceData.seo.canonical).toBe('/services/ecommerce');
    expect(wpData.seo.canonical).toBe('/services/wordpress-development');
  });

  it('renders service pages through the config-owned render path with page enforcement context', () => {
    render(renderServicePageBySlug('conversion-layer'));

    expect(screen.getByTestId('service-renderer').textContent).toBe(
      'conversion-layer:conversion-layer:service:conversion-layer:service'
    );
    expect(screen.getByTestId('related-section').textContent).toBe('conversion-layer');

    expect(getPageEnforcementSnapshots()).toContainEqual(
      expect.objectContaining({
        pageIdentity: {
          pageId: 'service:conversion-layer',
          pageType: 'service',
        },
      })
    );
  });
});
