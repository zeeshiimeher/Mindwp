import { automotiveServicesIndustryPageData } from '@/domains/industries/pages/automotive-services';
import { autoRepairIndustryPageData } from '@/domains/industries/pages/automotive-services/AutoRepair';
import { beautyPersonalCareIndustryPageData } from '@/domains/industries/pages/beauty-personal-care';
import { hairSalonsIndustryPageData } from '@/domains/industries/pages/beauty-personal-care/HairSalons';
import { smallMedSpasIndustryPageData } from '@/domains/industries/pages/beauty-personal-care/SmallMedSpas';
import { homeServicesIndustryPageData } from '@/domains/industries/pages/home-services';
import { hvacCompaniesIndustryPageData } from '@/domains/industries/pages/home-services/HvacCompanies';
import { plumbingCompaniesIndustryPageData } from '@/domains/industries/pages/home-services/PlumbingCompanies';
import { roofingCompaniesIndustryPageData } from '@/domains/industries/pages/home-services/RoofingCompanies';
import type { IndustryPageData } from '@/domains/industries/types';

export const INDUSTRY_REGISTRY: Record<string, IndustryPageData> = {
  'automotive-services': automotiveServicesIndustryPageData,
  'automotive-services/auto-repair': autoRepairIndustryPageData,
  'home-services': homeServicesIndustryPageData,
  'home-services/roofing-companies': roofingCompaniesIndustryPageData,
  'home-services/hvac-companies': hvacCompaniesIndustryPageData,
  'home-services/plumbing-companies': plumbingCompaniesIndustryPageData,
  'beauty-personal-care': beautyPersonalCareIndustryPageData,
  'beauty-personal-care/hair-salons': hairSalonsIndustryPageData,
  'beauty-personal-care/small-med-spas': smallMedSpasIndustryPageData,
};

export function getIndustryBySlug(slug: string): IndustryPageData | undefined {
  return INDUSTRY_REGISTRY[slug];
}

export function getIndustrySlugs(): string[] {
  return Object.keys(INDUSTRY_REGISTRY);
}

export function getIndustryDetailSlugs(): string[] {
  return Object.entries(INDUSTRY_REGISTRY)
    .filter(([, industry]) => industry.type === 'detail')
    .map(([slug]) => slug);
}
