import type { ReactElement } from 'react';

import { aiLeadHandlingPage } from '@/domains/services/data/ai-lead-handling';
import { bricksBuilderPage } from '@/domains/services/data/bricks-builder';
import { conversionLayerPage } from '@/domains/services/data/conversion-layer';
import { crmAutomationPage } from '@/domains/services/data/crm-automation';
import { divi5Page } from '@/domains/services/data/divi5';
import { elementorPage } from '@/domains/services/data/elementor';
import { leadReactivationSystemPage } from '@/domains/services/data/lead-reactivation-system';
import { localSeoAuthorityPage } from '@/domains/services/data/local-seo-authority';
import { missedCallRecoverySystemPage } from '@/domains/services/data/missed-call-recovery-system';
import { reputationReviewSystemsPage } from '@/domains/services/data/reputation-review-systems';
import { smartWebsiteSystemsPage } from '@/domains/services/data/smart-website-systems';
import { systemMigrationPlatformConsolidationPage } from '@/domains/services/data/system-migration-platform-consolidation';
import { unifiedCommunicationSystemPage } from '@/domains/services/data/unified-communication-system';
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

type ServiceEntry<TData> = {
  data: TData;
  render: (data: TData, slug: string) => ReactElement;
};

const createServiceEntry = <TData,>(
  data: TData,
  render: (data: TData, slug: string) => ReactElement
): ServiceEntry<TData> => ({ data, render });

export const SERVICE_ENTRY_BY_SLUG = {
  'smart-website-systems': createServiceEntry(smartWebsiteSystemsPage, (data, slug) => (
    <SmartWebsiteSystemsRenderer data={data} slug={slug} />
  )),
  'conversion-layer': createServiceEntry(conversionLayerPage, (data, slug) => (
    <ConversionLayerRenderer data={data} slug={slug} />
  )),
  'system-migration-platform-consolidation': createServiceEntry(
    systemMigrationPlatformConsolidationPage,
    (data, slug) => <SystemMigrationPlatformConsolidationRenderer data={data} slug={slug} />
  ),
  'website-redesign-system-rebuild': createServiceEntry(
    websiteRedesignSystemRebuildPage,
    (data, slug) => <WebsiteRedesignSystemRebuildRenderer data={data} slug={slug} />
  ),
  'lead-reactivation-system': createServiceEntry(leadReactivationSystemPage, (data, slug) => (
    <LeadReactivationSystemRenderer data={data} slug={slug} />
  )),
  'missed-call-recovery-system': createServiceEntry(missedCallRecoverySystemPage, (data, slug) => (
    <MissedCallRecoverySystemRenderer data={data} slug={slug} />
  )),
  'unified-communication-system': createServiceEntry(
    unifiedCommunicationSystemPage,
    (data, slug) => <UnifiedCommunicationSystemRenderer data={data} slug={slug} />
  ),
  'local-seo-authority': createServiceEntry(localSeoAuthorityPage, (data, slug) => (
    <LocalSeoAuthorityRenderer data={data} slug={slug} />
  )),
  'reputation-review-systems': createServiceEntry(reputationReviewSystemsPage, (data, slug) => (
    <ReputationReviewSystemsRenderer data={data} slug={slug} />
  )),
  'crm-infrastructure-implementation': createServiceEntry(crmAutomationPage, (data, slug) => (
    <CRMAutomationRenderer data={data} slug={slug} />
  )),
  'ai-lead-handling': createServiceEntry(aiLeadHandlingPage, (data, slug) => (
    <AiLeadHandlingRenderer data={data} slug={slug} />
  )),
  'wordpress-development': createServiceEntry(wordpressDevelopmentPage, (data, slug) => (
    <WordPressDevelopmentRenderer data={data} slug={slug} />
  )),
  ecommerce: createServiceEntry(woocommercePage, (data, slug) => (
    <WooCommerceRenderer data={data} slug={slug} />
  )),
  divi5: createServiceEntry(divi5Page, (data, slug) => <Divi5Renderer data={data} slug={slug} />),
  'bricks-builder': createServiceEntry(bricksBuilderPage, (data, slug) => (
    <BricksBuilderRenderer data={data} slug={slug} />
  )),
  elementor: createServiceEntry(elementorPage, (data, slug) => (
    <ElementorRenderer data={data} slug={slug} />
  )),
} as const;

export const SERVICE_ENTRY_ALIASES_BY_SLUG = {} as const;

export const SERVICE_ENTRY_BY_SLUG_WITH_ALIASES = {
  ...SERVICE_ENTRY_BY_SLUG,
  ...SERVICE_ENTRY_ALIASES_BY_SLUG,
} as const;

export type ServiceSlug = keyof typeof SERVICE_ENTRY_BY_SLUG_WITH_ALIASES;

export const isServiceSlug = (slug: string): slug is ServiceSlug => {
  return slug in SERVICE_ENTRY_BY_SLUG_WITH_ALIASES;
};

export const getServiceDataBySlug = (slug: ServiceSlug) => {
  return SERVICE_ENTRY_BY_SLUG_WITH_ALIASES[slug].data;
};

export const getServiceRendererBySlug = (slug: ServiceSlug) => {
  return SERVICE_ENTRY_BY_SLUG_WITH_ALIASES[slug].render;
};

export const renderServicePageBySlug = (slug: ServiceSlug): ReactElement => {
  switch (slug) {
    case 'smart-website-systems': {
      const entry = SERVICE_ENTRY_BY_SLUG_WITH_ALIASES['smart-website-systems'];
      return entry.render(entry.data, slug);
    }
    case 'conversion-layer': {
      const entry = SERVICE_ENTRY_BY_SLUG_WITH_ALIASES['conversion-layer'];
      return entry.render(entry.data, slug);
    }
    case 'system-migration-platform-consolidation': {
      const entry = SERVICE_ENTRY_BY_SLUG_WITH_ALIASES['system-migration-platform-consolidation'];
      return entry.render(entry.data, slug);
    }
    case 'website-redesign-system-rebuild': {
      const entry = SERVICE_ENTRY_BY_SLUG_WITH_ALIASES['website-redesign-system-rebuild'];
      return entry.render(entry.data, slug);
    }
    case 'lead-reactivation-system': {
      const entry = SERVICE_ENTRY_BY_SLUG_WITH_ALIASES['lead-reactivation-system'];
      return entry.render(entry.data, slug);
    }
    case 'missed-call-recovery-system': {
      const entry = SERVICE_ENTRY_BY_SLUG_WITH_ALIASES['missed-call-recovery-system'];
      return entry.render(entry.data, slug);
    }
    case 'unified-communication-system': {
      const entry = SERVICE_ENTRY_BY_SLUG_WITH_ALIASES['unified-communication-system'];
      return entry.render(entry.data, slug);
    }
    case 'local-seo-authority': {
      const entry = SERVICE_ENTRY_BY_SLUG_WITH_ALIASES['local-seo-authority'];
      return entry.render(entry.data, slug);
    }
    case 'reputation-review-systems': {
      const entry = SERVICE_ENTRY_BY_SLUG_WITH_ALIASES['reputation-review-systems'];
      return entry.render(entry.data, slug);
    }
    case 'crm-infrastructure-implementation': {
      const entry = SERVICE_ENTRY_BY_SLUG_WITH_ALIASES['crm-infrastructure-implementation'];
      return entry.render(entry.data, slug);
    }
    case 'ai-lead-handling': {
      const entry = SERVICE_ENTRY_BY_SLUG_WITH_ALIASES['ai-lead-handling'];
      return entry.render(entry.data, slug);
    }
    case 'wordpress-development': {
      const entry = SERVICE_ENTRY_BY_SLUG_WITH_ALIASES['wordpress-development'];
      return entry.render(entry.data, slug);
    }
    case 'ecommerce': {
      const entry = SERVICE_ENTRY_BY_SLUG_WITH_ALIASES.ecommerce;
      return entry.render(entry.data, slug);
    }
    case 'divi5': {
      const entry = SERVICE_ENTRY_BY_SLUG_WITH_ALIASES.divi5;
      return entry.render(entry.data, slug);
    }
    case 'bricks-builder': {
      const entry = SERVICE_ENTRY_BY_SLUG_WITH_ALIASES['bricks-builder'];
      return entry.render(entry.data, slug);
    }
    case 'elementor': {
      const entry = SERVICE_ENTRY_BY_SLUG_WITH_ALIASES.elementor;
      return entry.render(entry.data, slug);
    }
  }
};

export const getSlugFromCanonical = (canonical: string) => {
  const segments = canonical.split('/').filter(Boolean);
  return segments[segments.length - 1] ?? '';
};
