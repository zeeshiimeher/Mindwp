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

type RelatedContentMode = 'page-owned' | 'global-injected' | 'none';

type ServiceDomainEntry<TData extends ServicePageData = ServicePageData> = {
  id: string;
  slug: string;
  data: TData;
  renderer: ServiceRenderer<TData>;
  options?: {
    relatedSection?: { enabled?: boolean };
  };
};

export type { RelatedContentMode };

type ServiceDomainRegistry = {
  'smart-website-systems': ServiceDomainEntry<typeof smartWebsiteSystemsPage>;
  'conversion-layer': ServiceDomainEntry<typeof conversionLayerPage>;
  'conversion-funnel-system-vs-landing-page-development': ServiceDomainEntry<
    typeof conversionFunnelSystemVsLandingPageDevelopmentPage
  >;
  'system-migration-platform-consolidation': ServiceDomainEntry<
    typeof systemMigrationPlatformConsolidationPage
  >;
  'website-redesign-system-rebuild': ServiceDomainEntry<typeof websiteRedesignSystemRebuildPage>;
  'lead-reactivation-system': ServiceDomainEntry<typeof leadReactivationSystemPage>;
  'missed-call-recovery-system': ServiceDomainEntry<typeof missedCallRecoverySystemPage>;
  'unified-communication-system': ServiceDomainEntry<typeof unifiedCommunicationSystemPage>;
  'local-seo-authority': ServiceDomainEntry<typeof localSeoAuthorityPage>;
  'reputation-review-systems': ServiceDomainEntry<typeof reputationReviewSystemsPage>;
  'crm-infrastructure-implementation': ServiceDomainEntry<typeof crmAutomationPage>;
  'website-crm-integration-vs-manual-lead-handling': ServiceDomainEntry<
    typeof websiteCrmIntegrationVsManualLeadHandlingPage
  >;
  'ai-lead-handling': ServiceDomainEntry<typeof aiLeadHandlingPage>;
  'service-pages-vs-one-generic-services-page': ServiceDomainEntry<
    typeof servicePagesVsOneGenericServicesPage
  >;
  'wordpress-development': ServiceDomainEntry<typeof wordpressDevelopmentPage>;
  ecommerce: ServiceDomainEntry<typeof woocommercePage>;
  divi5: ServiceDomainEntry<typeof divi5Page>;
  'bricks-builder': ServiceDomainEntry<typeof bricksBuilderPage>;
  elementor: ServiceDomainEntry<typeof elementorPage>;
};

const createServiceEntry = <TData extends ServicePageData>(
  data: TData,
  renderer: ServiceRenderer<TData>,
  options?: ServiceDomainEntry['options']
): ServiceDomainEntry<TData> => ({
  id: `service:${data.slug}`,
  slug: data.slug,
  data,
  renderer,
  options,
});

export const SERVICE_DOMAIN_REGISTRY: ServiceDomainRegistry = {
  'smart-website-systems': createServiceEntry(smartWebsiteSystemsPage, SmartWebsiteSystemsRenderer),
  'conversion-layer': createServiceEntry(conversionLayerPage, ConversionLayerRenderer),
  'conversion-funnel-system-vs-landing-page-development': createServiceEntry(
    conversionFunnelSystemVsLandingPageDevelopmentPage,
    ConversionLayerRenderer
  ),
  'system-migration-platform-consolidation': createServiceEntry(
    systemMigrationPlatformConsolidationPage,
    SystemMigrationPlatformConsolidationRenderer
  ),
  'website-redesign-system-rebuild': createServiceEntry(
    websiteRedesignSystemRebuildPage,
    WebsiteRedesignSystemRebuildRenderer
  ),
  'lead-reactivation-system': createServiceEntry(
    leadReactivationSystemPage,
    LeadReactivationSystemRenderer
  ),
  'missed-call-recovery-system': createServiceEntry(
    missedCallRecoverySystemPage,
    MissedCallRecoverySystemRenderer
  ),
  'unified-communication-system': createServiceEntry(
    unifiedCommunicationSystemPage,
    UnifiedCommunicationSystemRenderer
  ),
  'local-seo-authority': createServiceEntry(localSeoAuthorityPage, LocalSeoAuthorityRenderer, {
    relatedSection: { enabled: false },
  }),
  'reputation-review-systems': createServiceEntry(
    reputationReviewSystemsPage,
    ReputationReviewSystemsRenderer
  ),
  'crm-infrastructure-implementation': createServiceEntry(crmAutomationPage, CRMAutomationRenderer),
  'website-crm-integration-vs-manual-lead-handling': createServiceEntry(
    websiteCrmIntegrationVsManualLeadHandlingPage,
    CRMAutomationRenderer
  ),
  'ai-lead-handling': createServiceEntry(aiLeadHandlingPage, AiLeadHandlingRenderer),
  'service-pages-vs-one-generic-services-page': createServiceEntry(
    servicePagesVsOneGenericServicesPage,
    SmartWebsiteSystemsRenderer
  ),
  'wordpress-development': createServiceEntry(
    wordpressDevelopmentPage,
    WordPressDevelopmentRenderer
  ),
  ecommerce: createServiceEntry(woocommercePage, WooCommerceRenderer),
  divi5: createServiceEntry(divi5Page, Divi5Renderer),
  'bricks-builder': createServiceEntry(bricksBuilderPage, BricksBuilderRenderer),
  elementor: createServiceEntry(elementorPage, ElementorRenderer),
} as const;

export type ServicePageDataBySlug = {
  [K in keyof ServiceDomainRegistry]: ServiceDomainRegistry[K]['data'];
};

export const SERVICE_PAGE_DATA_BY_SLUG = Object.fromEntries(
  Object.entries(SERVICE_DOMAIN_REGISTRY).map(([slug, entry]) => [slug, entry.data])
) as ServicePageDataBySlug;

export const getServicePageDataBySlug = (slug: string): ServicePageData | undefined => {
  return SERVICE_PAGE_DATA_BY_SLUG[slug as keyof ServicePageDataBySlug];
};
