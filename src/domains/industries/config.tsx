import type { ComponentType, ReactElement } from 'react';

import { RelatedSection } from '@/components/navigation/RelatedSection';
import { CTARegistryProvider } from '@/components/system/PageEnforcement';
import { INDUSTRY_REGISTRY } from '@/domains/industries/registry';
import { DentalImplantClinicsIndustryRenderer } from '@/domains/industries/renderers/healthcare-practices/DentalImplantClinicsIndustryRenderer';
import { DermatologyClinicsIndustryRenderer } from '@/domains/industries/renderers/healthcare-practices/DermatologyClinicsIndustryRenderer';
import { EntSinusClinicsIndustryRenderer } from '@/domains/industries/renderers/healthcare-practices/EntSinusClinicsIndustryRenderer';
import { HealthcarePracticesIndustryRenderer } from '@/domains/industries/renderers/healthcare-practices/HealthcarePracticesIndustryRenderer';
import { HearingAidClinicsIndustryRenderer } from '@/domains/industries/renderers/healthcare-practices/HearingAidClinicsIndustryRenderer';
import { OptometryClinicsIndustryRenderer } from '@/domains/industries/renderers/healthcare-practices/OptometryClinicsIndustryRenderer';
import { OralSurgeryClinicsIndustryRenderer } from '@/domains/industries/renderers/healthcare-practices/OralSurgeryClinicsIndustryRenderer';
import { OrthodonticClinicsIndustryRenderer } from '@/domains/industries/renderers/healthcare-practices/OrthodonticClinicsIndustryRenderer';
import { OrthopedicClinicsIndustryRenderer } from '@/domains/industries/renderers/healthcare-practices/OrthopedicClinicsIndustryRenderer';
import { PhysiotherapyClinicsIndustryRenderer } from '@/domains/industries/renderers/healthcare-practices/PhysiotherapyClinicsIndustryRenderer';
import { PodiatryClinicsIndustryRenderer } from '@/domains/industries/renderers/healthcare-practices/PodiatryClinicsIndustryRenderer';
import { FoundationRepairCompaniesIndustryRenderer } from '@/domains/industries/renderers/home-services/FoundationRepairCompaniesIndustryRenderer';
import { HomeServicesIndustryRenderer } from '@/domains/industries/renderers/home-services/HomeServicesIndustryRenderer';
import { HvacCompaniesIndustryRenderer } from '@/domains/industries/renderers/home-services/HvacCompaniesIndustryRenderer';
import { PlumbingCompaniesIndustryRenderer } from '@/domains/industries/renderers/home-services/PlumbingCompaniesIndustryRenderer';
import { RoofingCompaniesIndustryRenderer } from '@/domains/industries/renderers/home-services/RoofingCompaniesIndustryRenderer';
import { SepticServicesCompaniesIndustryRenderer } from '@/domains/industries/renderers/home-services/SepticServicesCompaniesIndustryRenderer';
import { TreeServiceCompaniesIndustryRenderer } from '@/domains/industries/renderers/home-services/TreeServiceCompaniesIndustryRenderer';
import type {
  IndustryCategoryPageData,
  IndustryCategoryRendererProps,
  IndustryDetailPageData,
  IndustryDetailRendererProps,
  IndustryPageData,
} from '@/domains/industries/types';

export type CategoryRenderer = (data: IndustryCategoryPageData) => ReactElement;
export type DetailRenderer = (data: IndustryDetailPageData) => ReactElement;

type CategoryRendererComponent = ComponentType<IndustryCategoryRendererProps>;
type DetailRendererComponent = ComponentType<IndustryDetailRendererProps>;

type IndustryEntryBase = {
  path: string;
  data: IndustryPageData;
  render: () => ReactElement;
};

type IndustryCategoryEntry = IndustryEntryBase & {
  type: 'category';
  data: IndustryCategoryPageData;
};

type IndustryDetailEntry = IndustryEntryBase & {
  type: 'detail';
  data: IndustryDetailPageData;
};

export type IndustryEntry = IndustryCategoryEntry | IndustryDetailEntry;

const CATEGORY_RENDERER_OVERRIDES_BY_SLUG = new Map<string, CategoryRenderer>();
const DETAIL_RENDERER_OVERRIDES_BY_PATH = new Map<string, DetailRenderer>();

const CATEGORY_RENDERERS_BY_SLUG: Record<string, CategoryRendererComponent> = {
  'home-services': HomeServicesIndustryRenderer,
  'healthcare-practices': HealthcarePracticesIndustryRenderer,
};

const DETAIL_RENDERERS_BY_PATH: Record<string, DetailRendererComponent> = {
  '/industries/home-services/hvac-companies': HvacCompaniesIndustryRenderer,
  '/industries/home-services/plumbing-companies': PlumbingCompaniesIndustryRenderer,
  '/industries/home-services/roofing-companies': RoofingCompaniesIndustryRenderer,
  '/industries/home-services/foundation-repair-companies':
    FoundationRepairCompaniesIndustryRenderer,
  '/industries/home-services/septic-services-companies': SepticServicesCompaniesIndustryRenderer,
  '/industries/home-services/tree-service-companies': TreeServiceCompaniesIndustryRenderer,
  '/industries/healthcare-practices/dental-implant-clinics': DentalImplantClinicsIndustryRenderer,
  '/industries/healthcare-practices/orthodontic-clinics': OrthodonticClinicsIndustryRenderer,
  '/industries/healthcare-practices/oral-surgery-clinics': OralSurgeryClinicsIndustryRenderer,
  '/industries/healthcare-practices/dermatology-clinics': DermatologyClinicsIndustryRenderer,
  '/industries/healthcare-practices/ent-sinus-clinics': EntSinusClinicsIndustryRenderer,
  '/industries/healthcare-practices/podiatry-clinics': PodiatryClinicsIndustryRenderer,
  '/industries/healthcare-practices/hearing-aid-clinics': HearingAidClinicsIndustryRenderer,
  '/industries/healthcare-practices/physiotherapy-clinics': PhysiotherapyClinicsIndustryRenderer,
  '/industries/healthcare-practices/optometry-clinics': OptometryClinicsIndustryRenderer,
  '/industries/healthcare-practices/orthopedic-clinics': OrthopedicClinicsIndustryRenderer,
};

const getCategoryDataBySlug = (slug: string) => {
  return Object.values(INDUSTRY_REGISTRY).find(
    (entry): entry is IndustryCategoryPageData => entry.type === 'category' && entry.slug === slug
  );
};

const getDetailDataByPath = (industryPath: string) => {
  return Object.values(INDUSTRY_REGISTRY).find(
    (entry): entry is IndustryDetailPageData =>
      entry.type === 'detail' && entry.seo.canonical === industryPath
  );
};

export const registerIndustryCategoryRendererOverride = (
  slug: string,
  renderer: CategoryRenderer
) => {
  const categoryData = getCategoryDataBySlug(slug);
  if (!categoryData) {
    throw new Error(
      `Cannot register category renderer override. Unknown category slug: "${slug}".`
    );
  }

  CATEGORY_RENDERER_OVERRIDES_BY_SLUG.set(slug, renderer);
};

export const clearIndustryCategoryRendererOverride = (slug: string) => {
  CATEGORY_RENDERER_OVERRIDES_BY_SLUG.delete(slug);
};

export const registerIndustryDetailRendererOverride = (
  industryPath: string,
  renderer: DetailRenderer
) => {
  const detailData = getDetailDataByPath(industryPath);
  if (!detailData) {
    throw new Error(
      `Cannot register detail renderer override. Unknown detail path: "${industryPath}".`
    );
  }

  DETAIL_RENDERER_OVERRIDES_BY_PATH.set(industryPath, renderer);
};

export const clearIndustryDetailRendererOverride = (industryPath: string) => {
  DETAIL_RENDERER_OVERRIDES_BY_PATH.delete(industryPath);
};

export const clearIndustryRendererOverrides = () => {
  CATEGORY_RENDERER_OVERRIDES_BY_SLUG.clear();
  DETAIL_RENDERER_OVERRIDES_BY_PATH.clear();
};

function renderCategoryWithDirectRenderer(data: IndustryCategoryPageData) {
  const Renderer = CATEGORY_RENDERERS_BY_SLUG[data.slug];

  if (!Renderer) {
    throw new Error(`Missing industry category renderer for "${data.slug}".`);
  }

  return <Renderer data={data} slug={data.slug} />;
}

function renderDetailWithDirectRenderer(data: IndustryDetailPageData, path: string) {
  const Renderer = DETAIL_RENDERERS_BY_PATH[path];

  if (!Renderer) {
    throw new Error(`Missing industry detail renderer for "${path}".`);
  }

  return <Renderer data={data} slug={data.slug} />;
}

const createIndustryEntry = (data: IndustryPageData): IndustryEntry => {
  const path = data.seo.canonical;

  if (data.type === 'category') {
    return {
      type: 'category',
      path,
      data,
      render: () => {
        const override = CATEGORY_RENDERER_OVERRIDES_BY_SLUG.get(data.slug);
        const renderedPage = override ? override(data) : renderCategoryWithDirectRenderer(data);
        const primarySystem = data.primarySystem;

        if (!primarySystem) {
          throw new Error(`Industry config requires primarySystem for ${data.slug}.`);
        }

        return (
          <CTARegistryProvider
            pageId={`industry-category:${data.slug}`}
            pageType='industry-category'
            primarySystem={primarySystem}
          >
            {renderedPage}
            <RelatedSection
              pageId={`industry-category:${data.slug}`}
              pageType='industry-category'
              slug={data.slug}
            />
          </CTARegistryProvider>
        );
      },
    };
  }

  return {
    type: 'detail',
    path,
    data,
    render: () => {
      const override = DETAIL_RENDERER_OVERRIDES_BY_PATH.get(path);
      const renderedPage = override ? override(data) : renderDetailWithDirectRenderer(data, path);
      const primarySystem = data.primarySystem;

      if (!primarySystem) {
        throw new Error(`Industry config requires primarySystem for ${data.slug}.`);
      }

      return (
        <CTARegistryProvider
          pageId={`industry-detail:${data.slug}`}
          pageType='industry-detail'
          primarySystem={primarySystem}
        >
          {renderedPage}
          <RelatedSection
            pageId={`industry-detail:${data.slug}`}
            pageType='industry-detail'
            slug={data.slug}
          />
        </CTARegistryProvider>
      );
    },
  };
};

const INDUSTRY_ENTRIES = Object.values(INDUSTRY_REGISTRY).map(createIndustryEntry);

export const INDUSTRY_ENTRY_BY_PATH = INDUSTRY_ENTRIES.reduce<Record<string, IndustryEntry>>(
  (acc, entry) => {
    acc[entry.path] = entry;
    return acc;
  },
  {}
);

export const getIndustryEntryByPath = (path: string) => INDUSTRY_ENTRY_BY_PATH[path];

export const getIndustryDataByPath = (path: string) => getIndustryEntryByPath(path)?.data;

export const renderIndustryPageByPath = (path: string) => {
  const entry = getIndustryEntryByPath(path);
  if (!entry) {
    throw new Error(`Missing industry entry for path "${path}".`);
  }

  return entry.render();
};

export const getIndustryEntryPaths = () => Object.keys(INDUSTRY_ENTRY_BY_PATH);
