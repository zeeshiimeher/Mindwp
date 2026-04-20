import type { ReactElement } from 'react';

import { CTARegistryProvider } from '@/components/system/PageEnforcement';
import { SmartRelatedSection } from '@/components/system/SmartRelatedSection';
import { getServicePageDataBySlug, type ServicePageDataBySlug } from '@/domains/services/pageData';
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

function renderServiceEntry(slug: ServiceSlug): ReactElement {
  const entry = SERVICE_ENTRY_BY_SLUG_WITH_ALIASES[slug];
  const render = entry.render as (data: typeof entry.data, slug: string) => ReactElement;

  return (
    <CTARegistryProvider pageId={`service:${slug}`} pageType='service'>
      {render(entry.data, slug)}
      <SmartRelatedSection slug={slug} />
    </CTARegistryProvider>
  );
}

function getServiceDataOrThrow<TSlug extends keyof ServicePageDataBySlug>(
  slug: TSlug
): ServicePageDataBySlug[TSlug] {
  const data = getServicePageDataBySlug(slug);

  if (!data) {
    throw new Error(`Missing service page data for slug "${slug}".`);
  }

  return data as ServicePageDataBySlug[TSlug];
}

export const SERVICE_ENTRY_BY_SLUG = {
  'smart-website-systems': createServiceEntry(
    getServiceDataOrThrow('smart-website-systems'),
    (data, slug) => <SmartWebsiteSystemsRenderer data={data} slug={slug} />
  ),
  'conversion-layer': createServiceEntry(
    getServiceDataOrThrow('conversion-layer'),
    (data, slug) => <ConversionLayerRenderer data={data} slug={slug} />
  ),
  'conversion-funnel-system-vs-landing-page-development': createServiceEntry(
    getServiceDataOrThrow('conversion-funnel-system-vs-landing-page-development'),
    (data, slug) => <ConversionLayerRenderer data={data} slug={slug} />
  ),
  'system-migration-platform-consolidation': createServiceEntry(
    getServiceDataOrThrow('system-migration-platform-consolidation'),
    (data, slug) => <SystemMigrationPlatformConsolidationRenderer data={data} slug={slug} />
  ),
  'website-redesign-system-rebuild': createServiceEntry(
    getServiceDataOrThrow('website-redesign-system-rebuild'),
    (data, slug) => <WebsiteRedesignSystemRebuildRenderer data={data} slug={slug} />
  ),
  'lead-reactivation-system': createServiceEntry(
    getServiceDataOrThrow('lead-reactivation-system'),
    (data, slug) => <LeadReactivationSystemRenderer data={data} slug={slug} />
  ),
  'missed-call-recovery-system': createServiceEntry(
    getServiceDataOrThrow('missed-call-recovery-system'),
    (data, slug) => <MissedCallRecoverySystemRenderer data={data} slug={slug} />
  ),
  'unified-communication-system': createServiceEntry(
    getServiceDataOrThrow('unified-communication-system'),
    (data, slug) => <UnifiedCommunicationSystemRenderer data={data} slug={slug} />
  ),
  'local-seo-authority': createServiceEntry(
    getServiceDataOrThrow('local-seo-authority'),
    (data, slug) => <LocalSeoAuthorityRenderer data={data} slug={slug} />
  ),
  'reputation-review-systems': createServiceEntry(
    getServiceDataOrThrow('reputation-review-systems'),
    (data, slug) => <ReputationReviewSystemsRenderer data={data} slug={slug} />
  ),
  'crm-infrastructure-implementation': createServiceEntry(
    getServiceDataOrThrow('crm-infrastructure-implementation'),
    (data, slug) => <CRMAutomationRenderer data={data} slug={slug} />
  ),
  'website-crm-integration-vs-manual-lead-handling': createServiceEntry(
    getServiceDataOrThrow('website-crm-integration-vs-manual-lead-handling'),
    (data, slug) => <CRMAutomationRenderer data={data} slug={slug} />
  ),
  'ai-lead-handling': createServiceEntry(
    getServiceDataOrThrow('ai-lead-handling'),
    (data, slug) => <AiLeadHandlingRenderer data={data} slug={slug} />
  ),
  'service-pages-vs-one-generic-services-page': createServiceEntry(
    getServiceDataOrThrow('service-pages-vs-one-generic-services-page'),
    (data, slug) => <SmartWebsiteSystemsRenderer data={data} slug={slug} />
  ),
  'wordpress-development': createServiceEntry(
    getServiceDataOrThrow('wordpress-development'),
    (data, slug) => <WordPressDevelopmentRenderer data={data} slug={slug} />
  ),
  ecommerce: createServiceEntry(getServiceDataOrThrow('ecommerce'), (data, slug) => (
    <WooCommerceRenderer data={data} slug={slug} />
  )),
  divi5: createServiceEntry(getServiceDataOrThrow('divi5'), (data, slug) => (
    <Divi5Renderer data={data} slug={slug} />
  )),
  'bricks-builder': createServiceEntry(getServiceDataOrThrow('bricks-builder'), (data, slug) => (
    <BricksBuilderRenderer data={data} slug={slug} />
  )),
  elementor: createServiceEntry(getServiceDataOrThrow('elementor'), (data, slug) => (
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

export const renderServicePageBySlug = (slug: ServiceSlug): ReactElement => {
  return renderServiceEntry(slug);
};

export const getSlugFromCanonical = (canonical: string) => {
  const segments = canonical.split('/').filter(Boolean);
  return segments[segments.length - 1] ?? '';
};
