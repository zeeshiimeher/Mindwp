import { aiLeadHandlingPage } from '@/domains/services/data/ai-lead-handling';
import { bricksBuilderPage } from '@/domains/services/data/bricks-builder';
import { conversionFunnelSystemVsLandingPageDevelopmentPage } from '@/domains/services/data/conversion-funnel-system-vs-landing-page-development';
import { conversionLayerPage } from '@/domains/services/data/conversion-layer';
import { crmAutomationPage } from '@/domains/services/data/crm-automation';
import { divi5Page } from '@/domains/services/data/divi5';
import { elementorPage } from '@/domains/services/data/elementor';
import { leadReactivationSystemPage } from '@/domains/services/data/lead-reactivation-system';
import { localSeoAuthorityPage } from '@/domains/services/data/local-seo-authority';
import { missedCallRecoverySystemPage } from '@/domains/services/data/missed-call-recovery-system';
import { reputationReviewSystemsPage } from '@/domains/services/data/reputation-review-systems';
import { servicePagesVsOneGenericServicesPage } from '@/domains/services/data/service-pages-vs-one-generic-services-page';
import { smartWebsiteSystemsPage } from '@/domains/services/data/smart-website-systems';
import { systemMigrationPlatformConsolidationPage } from '@/domains/services/data/system-migration-platform-consolidation';
import { unifiedCommunicationSystemPage } from '@/domains/services/data/unified-communication-system';
import { websiteCrmIntegrationVsManualLeadHandlingPage } from '@/domains/services/data/website-crm-integration-vs-manual-lead-handling';
import { websiteRedesignSystemRebuildPage } from '@/domains/services/data/website-redesign-system-rebuild';
import { woocommercePage } from '@/domains/services/data/woocommerce';
import { wordpressDevelopmentPage } from '@/domains/services/data/wordpress-development';
import type { ServicePageData } from '@/domains/services/types';

export const SERVICE_PAGE_DATA_BY_SLUG = {
  'smart-website-systems': smartWebsiteSystemsPage,
  'conversion-layer': conversionLayerPage,
  'conversion-funnel-system-vs-landing-page-development':
    conversionFunnelSystemVsLandingPageDevelopmentPage,
  'system-migration-platform-consolidation': systemMigrationPlatformConsolidationPage,
  'website-redesign-system-rebuild': websiteRedesignSystemRebuildPage,
  'lead-reactivation-system': leadReactivationSystemPage,
  'missed-call-recovery-system': missedCallRecoverySystemPage,
  'unified-communication-system': unifiedCommunicationSystemPage,
  'local-seo-authority': localSeoAuthorityPage,
  'reputation-review-systems': reputationReviewSystemsPage,
  'crm-infrastructure-implementation': crmAutomationPage,
  'website-crm-integration-vs-manual-lead-handling': websiteCrmIntegrationVsManualLeadHandlingPage,
  'ai-lead-handling': aiLeadHandlingPage,
  'service-pages-vs-one-generic-services-page': servicePagesVsOneGenericServicesPage,
  'wordpress-development': wordpressDevelopmentPage,
  ecommerce: woocommercePage,
  divi5: divi5Page,
  'bricks-builder': bricksBuilderPage,
  elementor: elementorPage,
} as const satisfies Record<string, ServicePageData>;

export type ServicePageDataBySlug = typeof SERVICE_PAGE_DATA_BY_SLUG;

export const getServicePageDataBySlug = (slug: string): ServicePageData | undefined => {
  return SERVICE_PAGE_DATA_BY_SLUG[slug as keyof ServicePageDataBySlug];
};
