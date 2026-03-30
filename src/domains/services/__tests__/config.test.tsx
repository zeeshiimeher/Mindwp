import { describe, expect, it, vi } from 'vitest';

vi.mock('@/domains/services/renderers/ReviewAutomationSystemRenderer', () => ({
  ReviewAutomationSystemRenderer: () => null,
}));

vi.mock('@/domains/services/renderers/BookingSchedulingSystemRenderer', () => ({
  BookingSchedulingSystemRenderer: () => null,
}));

vi.mock('@/domains/services/renderers/ConversionFunnelSystemRenderer', () => ({
  ConversionFunnelSystemRenderer: () => null,
}));

vi.mock('@/domains/services/renderers/FunnelLandingPageDevelopmentRenderer', () => ({
  FunnelLandingPageDevelopmentRenderer: () => null,
}));

vi.mock('@/domains/services/renderers/SystemMigrationPlatformConsolidationRenderer', () => ({
  SystemMigrationPlatformConsolidationRenderer: () => null,
}));

vi.mock('@/domains/services/renderers/MarketingAutomationSetupRenderer', () => ({
  MarketingAutomationSetupRenderer: () => null,
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

vi.mock('@/domains/services/renderers/GrowthRevenueSystemsRenderer', () => ({
  GrowthRevenueSystemsRenderer: () => null,
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
    expect(isServiceSlug('booking-scheduling-system')).toBe(true);
    expect(isServiceSlug('conversion-funnel-system')).toBe(true);
    expect(isServiceSlug('funnel-landing-page-development')).toBe(true);
    expect(isServiceSlug('marketing-automation-setup')).toBe(true);
    expect(isServiceSlug('system-migration-platform-consolidation')).toBe(true);
    expect(isServiceSlug('website-redesign-system-rebuild')).toBe(true);
    expect(isServiceSlug('lead-reactivation-system')).toBe(true);
    expect(isServiceSlug('missed-call-recovery-system')).toBe(true);
    expect(isServiceSlug('unified-communication-system')).toBe(true);
    expect(isServiceSlug('reputation-review-systems')).toBe(true);
    expect(isServiceSlug('review-automation-system')).toBe(true);
    expect(isServiceSlug('crm-infrastructure-implementation')).toBe(true);
    expect(isServiceSlug('crm-automation')).toBe(false);
    expect(isServiceSlug('lead-generation-conversion')).toBe(false);
    expect(isServiceSlug('ecommerce')).toBe(true);
    expect(isServiceSlug('woocommerce')).toBe(false);
    expect(isServiceSlug('wordpress-development')).toBe(true);
    expect(isServiceSlug('not-a-service')).toBe(false);
  });

  it('returns the expected canonical service data', () => {
    const bookingData = getServiceDataBySlug('booking-scheduling-system');
    expect(bookingData.seo.canonical).toBe('/services/booking-scheduling-system');

    const conversionFunnelData = getServiceDataBySlug('conversion-funnel-system');
    expect(conversionFunnelData.seo.canonical).toBe('/services/conversion-funnel-system');

    const funnelLandingData = getServiceDataBySlug('funnel-landing-page-development');
    expect(funnelLandingData.seo.canonical).toBe('/services/funnel-landing-page-development');

    const automationData = getServiceDataBySlug('marketing-automation-setup');
    expect(automationData.seo.canonical).toBe('/services/marketing-automation-setup');

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

    const crmData = getServiceDataBySlug('crm-infrastructure-implementation');
    expect(crmData.seo.canonical).toBe('/services/crm-infrastructure-implementation');

    const reviewAutomationData = getServiceDataBySlug('review-automation-system');
    expect(reviewAutomationData.seo.canonical).toBe('/services/review-automation-system');

    const ecommerceData = getServiceDataBySlug('ecommerce');
    const wpData = getServiceDataBySlug('wordpress-development');

    expect(wpData).not.toBe(ecommerceData);
    expect(ecommerceData.seo.canonical).toBe('/services/ecommerce');
    expect(wpData.seo.canonical).toBe('/services/wordpress-development');
  });

  it('returns distinct canonical renderers where expected', () => {
    const bookingRenderer = getServiceRendererBySlug('booking-scheduling-system');
    expect(bookingRenderer).toBeDefined();

    const conversionFunnelRenderer = getServiceRendererBySlug('conversion-funnel-system');
    expect(conversionFunnelRenderer).toBeDefined();

    const funnelLandingRenderer = getServiceRendererBySlug('funnel-landing-page-development');
    expect(funnelLandingRenderer).toBeDefined();

    const automationRenderer = getServiceRendererBySlug('marketing-automation-setup');
    expect(automationRenderer).toBeDefined();

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

    const crmRenderer = getServiceRendererBySlug('crm-infrastructure-implementation');
    expect(crmRenderer).toBeDefined();

    const reviewAutomationRenderer = getServiceRendererBySlug('review-automation-system');
    expect(reviewAutomationRenderer).toBeDefined();

    const wooRenderer = getServiceRendererBySlug('ecommerce');
    const wpRenderer = getServiceRendererBySlug('wordpress-development');
    expect(wpRenderer).not.toBe(wooRenderer);
  });
});
