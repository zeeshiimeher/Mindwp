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
import { AiLeadHandlingRenderer } from '@/domains/services/renderers/AiLeadHandlingRenderer';
import { BricksBuilderRenderer } from '@/domains/services/renderers/BricksBuilderRenderer';
import { ConversionLayerRenderer } from '@/domains/services/renderers/ConversionLayerRenderer';
import { CRMAutomationRenderer } from '@/domains/services/renderers/CRMAutomationRenderer';
import { Divi5Renderer } from '@/domains/services/renderers/Divi5Renderer';
import { ElementorRenderer } from '@/domains/services/renderers/ElementorRenderer';
import { LeadReactivationSystemRenderer } from '@/domains/services/renderers/LeadReactivationSystemRenderer';
import { LocalSeoAuthorityRenderer } from '@/domains/services/renderers/LocalSeoAuthorityRenderer';
import { MissedCallRecoverySystemRenderer } from '@/domains/services/renderers/MissedCallRecoverySystemRenderer';
import { ReputationReviewSystemsRenderer } from '@/domains/services/renderers/ReputationReviewSystemsRenderer';
import SmartWebsiteSystemsRenderer from '@/domains/services/renderers/SmartWebsiteSystemsRenderer';
import { SystemMigrationPlatformConsolidationRenderer } from '@/domains/services/renderers/SystemMigrationPlatformConsolidationRenderer';
import { UnifiedCommunicationSystemRenderer } from '@/domains/services/renderers/UnifiedCommunicationSystemRenderer';
import { WebsiteRedesignSystemRebuildRenderer } from '@/domains/services/renderers/WebsiteRedesignSystemRebuildRenderer';
import { WooCommerceRenderer } from '@/domains/services/renderers/WooCommerceRenderer';
import { WordPressDevelopmentRenderer } from '@/domains/services/renderers/WordPressDevelopmentRenderer';
import type { ServicePageData } from '@/domains/services/types';

type ServiceRenderer<TData extends ServicePageData = ServicePageData> = (props: {
  data: TData;
  slug: string;
}) => React.JSX.Element;

type ServiceDomainEntry<TData extends ServicePageData = ServicePageData> = {
  id: string;
  slug: string;
  data: TData;
  renderer: ServiceRenderer<TData>;
};

const createServiceEntry = <TData extends ServicePageData>(
  slug: string,
  data: TData,
  renderer: ServiceRenderer<TData>
): ServiceDomainEntry<TData> => ({
  id: `service:${slug}`,
  slug,
  data,
  renderer,
});

export const SERVICE_DOMAIN_REGISTRY = {
  'smart-website-systems': createServiceEntry(
    'smart-website-systems',
    smartWebsiteSystemsPage,
    SmartWebsiteSystemsRenderer
  ),
  'conversion-layer': createServiceEntry(
    'conversion-layer',
    conversionLayerPage,
    ConversionLayerRenderer
  ),
  'conversion-funnel-system-vs-landing-page-development': createServiceEntry(
    'conversion-funnel-system-vs-landing-page-development',
    conversionFunnelSystemVsLandingPageDevelopmentPage,
    ConversionLayerRenderer
  ),
  'system-migration-platform-consolidation': createServiceEntry(
    'system-migration-platform-consolidation',
    systemMigrationPlatformConsolidationPage,
    SystemMigrationPlatformConsolidationRenderer
  ),
  'website-redesign-system-rebuild': createServiceEntry(
    'website-redesign-system-rebuild',
    websiteRedesignSystemRebuildPage,
    WebsiteRedesignSystemRebuildRenderer
  ),
  'lead-reactivation-system': createServiceEntry(
    'lead-reactivation-system',
    leadReactivationSystemPage,
    LeadReactivationSystemRenderer
  ),
  'missed-call-recovery-system': createServiceEntry(
    'missed-call-recovery-system',
    missedCallRecoverySystemPage,
    MissedCallRecoverySystemRenderer
  ),
  'unified-communication-system': createServiceEntry(
    'unified-communication-system',
    unifiedCommunicationSystemPage,
    UnifiedCommunicationSystemRenderer
  ),
  'local-seo-authority': createServiceEntry(
    'local-seo-authority',
    localSeoAuthorityPage,
    LocalSeoAuthorityRenderer
  ),
  'reputation-review-systems': createServiceEntry(
    'reputation-review-systems',
    reputationReviewSystemsPage,
    ReputationReviewSystemsRenderer
  ),
  'crm-infrastructure-implementation': createServiceEntry(
    'crm-infrastructure-implementation',
    crmAutomationPage,
    CRMAutomationRenderer
  ),
  'website-crm-integration-vs-manual-lead-handling': createServiceEntry(
    'website-crm-integration-vs-manual-lead-handling',
    websiteCrmIntegrationVsManualLeadHandlingPage,
    CRMAutomationRenderer
  ),
  'ai-lead-handling': createServiceEntry(
    'ai-lead-handling',
    aiLeadHandlingPage,
    AiLeadHandlingRenderer
  ),
  'service-pages-vs-one-generic-services-page': createServiceEntry(
    'service-pages-vs-one-generic-services-page',
    servicePagesVsOneGenericServicesPage,
    SmartWebsiteSystemsRenderer
  ),
  'wordpress-development': createServiceEntry(
    'wordpress-development',
    wordpressDevelopmentPage,
    WordPressDevelopmentRenderer
  ),
  ecommerce: createServiceEntry('ecommerce', woocommercePage, WooCommerceRenderer),
  divi5: createServiceEntry('divi5', divi5Page, Divi5Renderer),
  'bricks-builder': createServiceEntry('bricks-builder', bricksBuilderPage, BricksBuilderRenderer),
  elementor: createServiceEntry('elementor', elementorPage, ElementorRenderer),
} as const;

export const SERVICE_PAGE_DATA_BY_SLUG = {
  ...Object.fromEntries(
    Object.entries(SERVICE_DOMAIN_REGISTRY).map(([slug, entry]) => [slug, entry.data])
  ),
} as const satisfies Record<string, ServicePageData>;

export type ServicePageDataBySlug = typeof SERVICE_PAGE_DATA_BY_SLUG;

export const getServicePageDataBySlug = (slug: string): ServicePageData | undefined => {
  return SERVICE_PAGE_DATA_BY_SLUG[slug as keyof ServicePageDataBySlug];
};
