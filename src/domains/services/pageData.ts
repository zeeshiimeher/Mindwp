import { followUpCrmPage } from '@/domains/services/data/follow-up-crm';
import { leadResponseHandlingPage } from '@/domains/services/data/lead-response-handling';
import { localSeoAuthorityPage } from '@/domains/services/data/local-seo-authority';
import { reputationReviewSystemsPage } from '@/domains/services/data/reputation-review-systems';
import { smartWebsiteSystemsPage } from '@/domains/services/data/smart-website-systems';
import { bricksBuilderPage } from '@/domains/services/implementation/data/bricks-builder';
import { divi5Page } from '@/domains/services/implementation/data/divi5';
import { elementorPage } from '@/domains/services/implementation/data/elementor';
import { websiteRedesignSystemRebuildPage } from '@/domains/services/implementation/data/website-redesign-system-rebuild';
import { woocommercePage } from '@/domains/services/implementation/data/woocommerce';
import { wordpressDevelopmentPage } from '@/domains/services/implementation/data/wordpress-development';
import BricksBuilderRenderer from '@/domains/services/implementation/renderers/BricksBuilderRenderer';
import Divi5Renderer from '@/domains/services/implementation/renderers/Divi5Renderer';
import ElementorRenderer from '@/domains/services/implementation/renderers/ElementorRenderer';
import WebsiteRedesignSystemRebuildRenderer from '@/domains/services/implementation/renderers/WebsiteRedesignSystemRebuildRenderer';
import WooCommerceRenderer from '@/domains/services/implementation/renderers/WooCommerceRenderer';
import WordPressDevelopmentRenderer from '@/domains/services/implementation/renderers/WordPressDevelopmentRenderer';
import FollowUpCRMRenderer from '@/domains/services/renderers/FollowUpCRMRenderer';
import LeadResponseHandlingRenderer from '@/domains/services/renderers/LeadResponseHandlingRenderer';
import LocalSEOAuthorityRenderer from '@/domains/services/renderers/LocalSEOAuthorityRenderer';
import ReputationReviewSystemsRenderer from '@/domains/services/renderers/ReputationReviewSystemsRenderer';
import SmartWebsiteSystemsRenderer from '@/domains/services/renderers/SmartWebsiteSystemsRenderer';
import type { ServicePageData } from '@/domains/services/types';

type ServiceRenderer = (props: { data: ServicePageData; slug: string }) => React.JSX.Element;

type ServiceDomainEntry = {
  id: string;
  slug: string;
  data: ServicePageData;
  renderer: ServiceRenderer;
  routePath: string;
  kind: 'primary' | 'implementation';
  options?: {
    relatedSection?: { enabled?: boolean; variant?: 'standard' | 'rail' | 'compact' };
  };
};

const createServiceEntry = (
  data: ServicePageData,
  renderer: ServiceRenderer,
  kind: ServiceDomainEntry['kind'],
  options?: ServiceDomainEntry['options']
): ServiceDomainEntry => {
  const routePath =
    kind === 'implementation' ? `/services/implementation/${data.slug}` : data.seo.canonical;

  return {
    id: `service:${kind}:${data.slug}`,
    slug: kind === 'implementation' ? `implementation/${data.slug}` : data.slug,
    data: { ...data, routePath, seo: { ...data.seo, canonical: routePath } },
    renderer,
    routePath,
    kind,
    options,
  };
};

export const PRIMARY_SERVICE_DOMAIN_REGISTRY = {
  'smart-website-systems': createServiceEntry(
    smartWebsiteSystemsPage,
    SmartWebsiteSystemsRenderer,
    'primary'
  ),
  'local-seo-authority': createServiceEntry(
    localSeoAuthorityPage,
    LocalSEOAuthorityRenderer,
    'primary'
  ),
  'lead-response-handling': createServiceEntry(
    leadResponseHandlingPage,
    LeadResponseHandlingRenderer,
    'primary'
  ),
  'follow-up-crm': createServiceEntry(followUpCrmPage, FollowUpCRMRenderer, 'primary'),
  'reputation-review-systems': createServiceEntry(
    reputationReviewSystemsPage,
    ReputationReviewSystemsRenderer,
    'primary'
  ),
} as const satisfies Record<string, ServiceDomainEntry>;

export const IMPLEMENTATION_SERVICE_DOMAIN_REGISTRY = {
  'implementation/wordpress-development': createServiceEntry(
    wordpressDevelopmentPage,
    WordPressDevelopmentRenderer,
    'implementation'
  ),
  'implementation/elementor': createServiceEntry(
    elementorPage,
    ElementorRenderer,
    'implementation'
  ),
  'implementation/bricks-builder': createServiceEntry(
    bricksBuilderPage,
    BricksBuilderRenderer,
    'implementation'
  ),
  'implementation/divi5': createServiceEntry(divi5Page, Divi5Renderer, 'implementation'),
  'implementation/woocommerce': createServiceEntry(
    woocommercePage,
    WooCommerceRenderer,
    'implementation'
  ),
  'implementation/website-redesign-system-rebuild': createServiceEntry(
    websiteRedesignSystemRebuildPage,
    WebsiteRedesignSystemRebuildRenderer,
    'implementation'
  ),
} as const satisfies Record<string, ServiceDomainEntry>;

export const SERVICE_DOMAIN_REGISTRY = {
  ...PRIMARY_SERVICE_DOMAIN_REGISTRY,
  ...IMPLEMENTATION_SERVICE_DOMAIN_REGISTRY,
} as const satisfies Record<string, ServiceDomainEntry>;

export type ServicePageDataBySlug = {
  [K in keyof typeof SERVICE_DOMAIN_REGISTRY]: (typeof SERVICE_DOMAIN_REGISTRY)[K]['data'];
};

export const SERVICE_PAGE_DATA_BY_SLUG = Object.fromEntries(
  Object.entries(SERVICE_DOMAIN_REGISTRY).map(([slug, entry]) => [slug, entry.data])
) as ServicePageDataBySlug;

export const getServicePageDataBySlug = (slug: string): ServicePageData | undefined => {
  return SERVICE_PAGE_DATA_BY_SLUG[slug as keyof ServicePageDataBySlug];
};
