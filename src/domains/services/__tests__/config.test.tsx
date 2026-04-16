import { describe, expect, it, vi } from 'vitest';

vi.mock('@/domains/services/renderers/ConversionLayerRenderer', () => ({
  ConversionLayerRenderer: () => null,
}));

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
  getServiceDataBySlug,
  getServiceRendererBySlug,
  isServiceSlug,
} from '@/domains/services/config';

describe('services config slugs', () => {
  it('treats canonical slugs as valid service slugs', () => {
    expect(isServiceSlug('conversion-layer')).toBe(true);
    expect(isServiceSlug('system-migration-platform-consolidation')).toBe(true);
    expect(isServiceSlug('website-redesign-system-rebuild')).toBe(true);
    expect(isServiceSlug('lead-reactivation-system')).toBe(true);
    expect(isServiceSlug('missed-call-recovery-system')).toBe(true);
    expect(isServiceSlug('unified-communication-system')).toBe(true);
    expect(isServiceSlug('reputation-review-systems')).toBe(true);
    expect(isServiceSlug('crm-infrastructure-implementation')).toBe(true);
    expect(isServiceSlug('crm-automation')).toBe(false);
    expect(isServiceSlug('lead-generation-conversion')).toBe(false);
    expect(isServiceSlug('ecommerce')).toBe(true);
    expect(isServiceSlug('woocommerce')).toBe(false);
    expect(isServiceSlug('wordpress-development')).toBe(true);
    expect(isServiceSlug('not-a-service')).toBe(false);
  });

  it('returns the expected canonical service data', () => {
    const conversionLayerData = getServiceDataBySlug('conversion-layer');
    expect(conversionLayerData.seo.canonical).toBe('/services/conversion-layer');

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

    const ecommerceData = getServiceDataBySlug('ecommerce');
    const wpData = getServiceDataBySlug('wordpress-development');

    expect(wpData).not.toBe(ecommerceData);
    expect(ecommerceData.seo.canonical).toBe('/services/ecommerce');
    expect(wpData.seo.canonical).toBe('/services/wordpress-development');
  });

  it('returns distinct canonical renderers where expected', () => {
    const conversionLayerRenderer = getServiceRendererBySlug('conversion-layer');
    expect(conversionLayerRenderer).toBeDefined();

    const migrationRenderer = getServiceRendererBySlug('system-migration-platform-consolidation');
    expect(migrationRenderer).toBeDefined();

    const redesignRenderer = getServiceRendererBySlug('website-redesign-system-rebuild');
    expect(redesignRenderer).toBeDefined();

    const leadReactivationRenderer = getServiceRendererBySlug('lead-reactivation-system');
    expect(leadReactivationRenderer).toBeDefined();

    const missedCallRenderer = getServiceRendererBySlug('missed-call-recovery-system');
    expect(missedCallRenderer).toBeDefined();

    const unifiedCommunicationRenderer = getServiceRendererBySlug('unified-communication-system');
    expect(unifiedCommunicationRenderer).toBeDefined();

    const reputationRenderer = getServiceRendererBySlug('reputation-review-systems');
    expect(reputationRenderer).toBeDefined();

    const crmRenderer = getServiceRendererBySlug('crm-infrastructure-implementation');
    expect(crmRenderer).toBeDefined();

    const wooRenderer = getServiceRendererBySlug('ecommerce');
    const wpRenderer = getServiceRendererBySlug('wordpress-development');
    expect(wpRenderer).not.toBe(wooRenderer);
  });
});
