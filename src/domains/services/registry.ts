import { aiLeadHandlingPage } from '@/domains/services/data/ai-lead-handling';
import { bricksBuilderPage } from '@/domains/services/data/bricks-builder';
import { conversionLayerPage } from '@/domains/services/data/conversion-layer';
import { crmAutomationPage } from '@/domains/services/data/crm-automation';
import { divi5Page } from '@/domains/services/data/divi5';
import { elementorPage } from '@/domains/services/data/elementor';
import { leadReactivationSystemPage } from '@/domains/services/data/lead-reactivation-system';
import { localSeoAuthorityPage } from '@/domains/services/data/local-seo-authority';
import { marketingAutomationSetupPage } from '@/domains/services/data/marketing-automation-setup';
import { missedCallRecoverySystemPage } from '@/domains/services/data/missed-call-recovery-system';
import { reputationReviewSystemsPage } from '@/domains/services/data/reputation-review-systems';
import { smartWebsiteSystemsPage } from '@/domains/services/data/smart-website-systems';
import { systemMigrationPlatformConsolidationPage } from '@/domains/services/data/system-migration-platform-consolidation';
import { unifiedCommunicationSystemPage } from '@/domains/services/data/unified-communication-system';
import { websiteRedesignSystemRebuildPage } from '@/domains/services/data/website-redesign-system-rebuild';
import { woocommercePage } from '@/domains/services/data/woocommerce';
import { wordpressDevelopmentPage } from '@/domains/services/data/wordpress-development';

export interface ServiceMetadata {
  slug: string;
  path: string;
  title: string;
  description: string;
  keywords: string[];
  badge: string;
  category: string;
  systems: string[];
  topics: string[];
}

export const SERVICE_REGISTRY: Record<string, ServiceMetadata> = {
  'smart-website-systems': {
    slug: 'smart-website-systems',
    get path() {
      return smartWebsiteSystemsPage.seo.canonical;
    },
    get title() {
      return smartWebsiteSystemsPage.seo.title;
    },
    get description() {
      return smartWebsiteSystemsPage.seo.description;
    },
    get keywords() {
      return smartWebsiteSystemsPage.keywords;
    },
    get badge() {
      return smartWebsiteSystemsPage.badge;
    },
    get category() {
      return smartWebsiteSystemsPage.category;
    },
    get systems() {
      return smartWebsiteSystemsPage.systems;
    },
    get topics() {
      return smartWebsiteSystemsPage.topics;
    },
  },
  'conversion-layer': {
    slug: 'conversion-layer',
    get path() {
      return conversionLayerPage.seo.canonical;
    },
    get title() {
      return conversionLayerPage.seo.title;
    },
    get description() {
      return conversionLayerPage.seo.description;
    },
    get keywords() {
      return conversionLayerPage.keywords;
    },
    get badge() {
      return conversionLayerPage.badge;
    },
    get category() {
      return conversionLayerPage.category;
    },
    get systems() {
      return conversionLayerPage.systems;
    },
    get topics() {
      return conversionLayerPage.topics;
    },
  },
  'system-migration-platform-consolidation': {
    slug: 'system-migration-platform-consolidation',
    get path() {
      return systemMigrationPlatformConsolidationPage.seo.canonical;
    },
    get title() {
      return systemMigrationPlatformConsolidationPage.seo.title;
    },
    get description() {
      return systemMigrationPlatformConsolidationPage.seo.description;
    },
    get keywords() {
      return systemMigrationPlatformConsolidationPage.keywords;
    },
    get badge() {
      return systemMigrationPlatformConsolidationPage.badge;
    },
    get category() {
      return systemMigrationPlatformConsolidationPage.category;
    },
    get systems() {
      return systemMigrationPlatformConsolidationPage.systems;
    },
    get topics() {
      return systemMigrationPlatformConsolidationPage.topics;
    },
  },
  'marketing-automation-setup': {
    slug: 'marketing-automation-setup',
    get path() {
      return marketingAutomationSetupPage.seo.canonical;
    },
    get title() {
      return marketingAutomationSetupPage.seo.title;
    },
    get description() {
      return marketingAutomationSetupPage.seo.description;
    },
    get keywords() {
      return marketingAutomationSetupPage.keywords;
    },
    get badge() {
      return marketingAutomationSetupPage.badge;
    },
    get category() {
      return marketingAutomationSetupPage.category;
    },
    get systems() {
      return marketingAutomationSetupPage.systems;
    },
    get topics() {
      return marketingAutomationSetupPage.topics;
    },
  },
  'website-redesign-system-rebuild': {
    slug: 'website-redesign-system-rebuild',
    get path() {
      return websiteRedesignSystemRebuildPage.seo.canonical;
    },
    get title() {
      return websiteRedesignSystemRebuildPage.seo.title;
    },
    get description() {
      return websiteRedesignSystemRebuildPage.seo.description;
    },
    get keywords() {
      return websiteRedesignSystemRebuildPage.keywords;
    },
    get badge() {
      return websiteRedesignSystemRebuildPage.badge;
    },
    get category() {
      return websiteRedesignSystemRebuildPage.category;
    },
    get systems() {
      return websiteRedesignSystemRebuildPage.systems;
    },
    get topics() {
      return websiteRedesignSystemRebuildPage.topics;
    },
  },
  'lead-reactivation-system': {
    slug: 'lead-reactivation-system',
    get path() {
      return leadReactivationSystemPage.seo.canonical;
    },
    get title() {
      return leadReactivationSystemPage.seo.title;
    },
    get description() {
      return leadReactivationSystemPage.seo.description;
    },
    get keywords() {
      return leadReactivationSystemPage.keywords;
    },
    get badge() {
      return leadReactivationSystemPage.badge;
    },
    get category() {
      return leadReactivationSystemPage.category;
    },
    get systems() {
      return leadReactivationSystemPage.systems;
    },
    get topics() {
      return leadReactivationSystemPage.topics;
    },
  },
  'missed-call-recovery-system': {
    slug: 'missed-call-recovery-system',
    get path() {
      return missedCallRecoverySystemPage.seo.canonical;
    },
    get title() {
      return missedCallRecoverySystemPage.seo.title;
    },
    get description() {
      return missedCallRecoverySystemPage.seo.description;
    },
    get keywords() {
      return missedCallRecoverySystemPage.keywords;
    },
    get badge() {
      return missedCallRecoverySystemPage.badge;
    },
    get category() {
      return missedCallRecoverySystemPage.category;
    },
    get systems() {
      return missedCallRecoverySystemPage.systems;
    },
    get topics() {
      return missedCallRecoverySystemPage.topics;
    },
  },
  'unified-communication-system': {
    slug: 'unified-communication-system',
    get path() {
      return unifiedCommunicationSystemPage.seo.canonical;
    },
    get title() {
      return unifiedCommunicationSystemPage.seo.title;
    },
    get description() {
      return unifiedCommunicationSystemPage.seo.description;
    },
    get keywords() {
      return unifiedCommunicationSystemPage.keywords;
    },
    get badge() {
      return unifiedCommunicationSystemPage.badge;
    },
    get category() {
      return unifiedCommunicationSystemPage.category;
    },
    get systems() {
      return unifiedCommunicationSystemPage.systems;
    },
    get topics() {
      return unifiedCommunicationSystemPage.topics;
    },
  },
  'local-seo-authority': {
    slug: 'local-seo-authority',
    get path() {
      return localSeoAuthorityPage.seo.canonical;
    },
    get title() {
      return localSeoAuthorityPage.seo.title;
    },
    get description() {
      return localSeoAuthorityPage.seo.description;
    },
    get keywords() {
      return localSeoAuthorityPage.keywords;
    },
    get badge() {
      return localSeoAuthorityPage.badge;
    },
    get category() {
      return localSeoAuthorityPage.category;
    },
    get systems() {
      return localSeoAuthorityPage.systems;
    },
    get topics() {
      return localSeoAuthorityPage.topics;
    },
  },
  'reputation-review-systems': {
    slug: 'reputation-review-systems',
    get path() {
      return reputationReviewSystemsPage.seo.canonical;
    },
    get title() {
      return reputationReviewSystemsPage.seo.title;
    },
    get description() {
      return reputationReviewSystemsPage.seo.description;
    },
    get keywords() {
      return reputationReviewSystemsPage.keywords;
    },
    get badge() {
      return reputationReviewSystemsPage.badge;
    },
    get category() {
      return reputationReviewSystemsPage.category;
    },
    get systems() {
      return reputationReviewSystemsPage.systems;
    },
    get topics() {
      return reputationReviewSystemsPage.topics;
    },
  },
  'crm-infrastructure-implementation': {
    slug: 'crm-infrastructure-implementation',
    get path() {
      return crmAutomationPage.seo.canonical;
    },
    get title() {
      return crmAutomationPage.seo.title;
    },
    get description() {
      return crmAutomationPage.seo.description;
    },
    get keywords() {
      return crmAutomationPage.keywords;
    },
    get badge() {
      return crmAutomationPage.badge;
    },
    get category() {
      return crmAutomationPage.category;
    },
    get systems() {
      return crmAutomationPage.systems;
    },
    get topics() {
      return crmAutomationPage.topics;
    },
  },
  'ai-lead-handling': {
    slug: 'ai-lead-handling',
    get path() {
      return aiLeadHandlingPage.seo.canonical;
    },
    get title() {
      return aiLeadHandlingPage.seo.title;
    },
    get description() {
      return aiLeadHandlingPage.seo.description;
    },
    get keywords() {
      return aiLeadHandlingPage.keywords;
    },
    get badge() {
      return aiLeadHandlingPage.badge;
    },
    get category() {
      return aiLeadHandlingPage.category;
    },
    get systems() {
      return aiLeadHandlingPage.systems;
    },
    get topics() {
      return aiLeadHandlingPage.topics;
    },
  },
  'wordpress-development': {
    slug: 'wordpress-development',
    get path() {
      return wordpressDevelopmentPage.seo.canonical;
    },
    get title() {
      return wordpressDevelopmentPage.seo.title;
    },
    get description() {
      return wordpressDevelopmentPage.seo.description;
    },
    get keywords() {
      return wordpressDevelopmentPage.keywords;
    },
    get badge() {
      return wordpressDevelopmentPage.badge;
    },
    get category() {
      return wordpressDevelopmentPage.category;
    },
    get systems() {
      return wordpressDevelopmentPage.systems;
    },
    get topics() {
      return wordpressDevelopmentPage.topics;
    },
  },
  ecommerce: {
    slug: 'ecommerce',
    get path() {
      return woocommercePage.seo.canonical;
    },
    get title() {
      return woocommercePage.seo.title;
    },
    get description() {
      return woocommercePage.seo.description;
    },
    get keywords() {
      return woocommercePage.keywords;
    },
    get badge() {
      return woocommercePage.badge;
    },
    get category() {
      return woocommercePage.category;
    },
    get systems() {
      return woocommercePage.systems;
    },
    get topics() {
      return woocommercePage.topics;
    },
  },
  divi5: {
    slug: 'divi5',
    get path() {
      return divi5Page.seo.canonical;
    },
    get title() {
      return divi5Page.seo.title;
    },
    get description() {
      return divi5Page.seo.description;
    },
    get keywords() {
      return divi5Page.keywords;
    },
    get badge() {
      return divi5Page.badge;
    },
    get category() {
      return divi5Page.category;
    },
    get systems() {
      return divi5Page.systems;
    },
    get topics() {
      return divi5Page.topics;
    },
  },
  'bricks-builder': {
    slug: 'bricks-builder',
    get path() {
      return bricksBuilderPage.seo.canonical;
    },
    get title() {
      return bricksBuilderPage.seo.title;
    },
    get description() {
      return bricksBuilderPage.seo.description;
    },
    get keywords() {
      return bricksBuilderPage.keywords;
    },
    get badge() {
      return bricksBuilderPage.badge;
    },
    get category() {
      return bricksBuilderPage.category;
    },
    get systems() {
      return bricksBuilderPage.systems;
    },
    get topics() {
      return bricksBuilderPage.topics;
    },
  },
  elementor: {
    slug: 'elementor',
    get path() {
      return elementorPage.seo.canonical;
    },
    get title() {
      return elementorPage.seo.title;
    },
    get description() {
      return elementorPage.seo.description;
    },
    get keywords() {
      return elementorPage.keywords;
    },
    get badge() {
      return elementorPage.badge;
    },
    get category() {
      return elementorPage.category;
    },
    get systems() {
      return elementorPage.systems;
    },
    get topics() {
      return elementorPage.topics;
    },
  },
};

export const getServiceBySlug = (slug: string): ServiceMetadata | undefined => {
  return SERVICE_REGISTRY[slug];
};

export const getServiceSlugs = (): string[] => {
  return Object.keys(SERVICE_REGISTRY);
};
