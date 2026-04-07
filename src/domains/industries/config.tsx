import type { ReactElement } from 'react';

import { INDUSTRY_REGISTRY } from '@/domains/industries/registry';
import { IndustryCategoryPageTemplate } from '@/domains/industries/templates/IndustryCategoryPageTemplate';
import { IndustryDetailPageTemplate } from '@/domains/industries/templates/IndustryDetailPageTemplate';
import type {
  IndustryCategoryPageData,
  IndustryDetailPageData,
  IndustryPageData,
} from '@/domains/industries/types';

export type CategoryRenderer = (data: IndustryCategoryPageData) => ReactElement;
export type DetailRenderer = (data: IndustryDetailPageData) => ReactElement;

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

const renderCategoryWithDefaultTemplate = (data: IndustryCategoryPageData) => (
  <IndustryCategoryPageTemplate
    slug={data.slug}
    system={data.systems?.[0] ?? 'smart-website-systems'}
    category={data.category}
    hero={data.hero}
    challenges={data.challenges}
    operatingPatterns={data.operatingPatterns}
    imageStrip={data.imageStrip}
    spectrum={data.spectrum}
    decisionChecklist={data.decisionChecklist}
    serviceEnvironments={data.serviceEnvironments}
    solutions={data.solutions}
    systemLayers={data.systemLayers}
    process={data.process}
    comparison={data.comparison}
    packages={data.packages}
    pathways={data.pathways}
    explore={data.explore}
    detailRoutes={data.detailRoutes}
    sectionControls={data.sectionControls}
    cta={data.cta}
  />
);

const renderDetailWithDefaultTemplate = (data: IndustryDetailPageData) => (
  <IndustryDetailPageTemplate
    slug={data.slug}
    system={data.systems?.[0] ?? 'smart-website-systems'}
    hero={data.hero}
    challenges={data.challenges}
    operatingPatterns={data.operatingPatterns}
    imageStrip={data.imageStrip}
    solutions={data.solutions}
    systemLayers={data.systemLayers}
    comparison={data.comparison}
    packages={data.packages}
    pathways={data.pathways}
    workflowExamples={data.workflowExamples}
    caseStudies={data.caseStudies}
    explore={data.explore}
    faq={data.faq}
    cta={data.cta}
  />
);

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

const createIndustryEntry = (data: IndustryPageData): IndustryEntry => {
  const path = data.seo.canonical;

  if (data.type === 'category') {
    return {
      type: 'category',
      path,
      data,
      render: () => {
        const renderCategory =
          CATEGORY_RENDERER_OVERRIDES_BY_SLUG.get(data.slug) ?? renderCategoryWithDefaultTemplate;
        return renderCategory(data);
      },
    };
  }

  return {
    type: 'detail',
    path,
    data,
    render: () => {
      const renderDetail =
        DETAIL_RENDERER_OVERRIDES_BY_PATH.get(path) ?? renderDetailWithDefaultTemplate;
      return renderDetail(data);
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
  return entry ? entry.render() : null;
};

export const getIndustryEntryPaths = () => Object.keys(INDUSTRY_ENTRY_BY_PATH);
