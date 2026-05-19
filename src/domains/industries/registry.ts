import { HealthcarePracticesIndustryPageData } from '@/domains/industries/data/healthcare-practices';
import { DentalImplantClinicsIndustryPageData } from '@/domains/industries/data/healthcare-practices/dental-implant-clinics';
import { DermatologyClinicsIndustryPageData } from '@/domains/industries/data/healthcare-practices/dermatology-clinics';
import { EntSinusClinicsIndustryPageData } from '@/domains/industries/data/healthcare-practices/ent-sinus-clinics';
import { HearingAidClinicsIndustryPageData } from '@/domains/industries/data/healthcare-practices/hearing-aid-clinics';
import { OptometryClinicsIndustryPageData } from '@/domains/industries/data/healthcare-practices/optometry-clinics';
import { OralSurgeryClinicsIndustryPageData } from '@/domains/industries/data/healthcare-practices/oral-surgery-clinics';
import { OrthodonticClinicsIndustryPageData } from '@/domains/industries/data/healthcare-practices/orthodontic-clinics';
import { OrthopedicClinicsIndustryPageData } from '@/domains/industries/data/healthcare-practices/orthopedic-clinics';
import { PhysiotherapyClinicsIndustryPageData } from '@/domains/industries/data/healthcare-practices/physiotherapy-clinics';
import { PodiatryClinicsIndustryPageData } from '@/domains/industries/data/healthcare-practices/podiatry-clinics';
import { HomeServicesIndustryPageData } from '@/domains/industries/data/home-services';
import { FoundationRepairCompaniesIndustryPageData } from '@/domains/industries/data/home-services/foundation-repair-companies';
import { HvacCompaniesIndustryPageData } from '@/domains/industries/data/home-services/hvac-companies';
import { PlumbingCompaniesIndustryPageData } from '@/domains/industries/data/home-services/plumbing-companies';
import { RoofingCompaniesIndustryPageData } from '@/domains/industries/data/home-services/roofing-companies';
import { SepticServicesCompaniesIndustryPageData } from '@/domains/industries/data/home-services/septic-services-companies';
import { TreeServiceCompaniesIndustryPageData } from '@/domains/industries/data/home-services/tree-service-companies';
import type { IndustryPageData } from '@/domains/industries/types';

export const INDUSTRY_REGISTRY: Record<string, IndustryPageData> = {
  'home-services': HomeServicesIndustryPageData,
  'healthcare-practices': HealthcarePracticesIndustryPageData,
  'home-services/hvac-companies': HvacCompaniesIndustryPageData,
  'home-services/plumbing-companies': PlumbingCompaniesIndustryPageData,
  'home-services/roofing-companies': RoofingCompaniesIndustryPageData,
  'home-services/foundation-repair-companies': FoundationRepairCompaniesIndustryPageData,
  'home-services/septic-services-companies': SepticServicesCompaniesIndustryPageData,
  'home-services/tree-service-companies': TreeServiceCompaniesIndustryPageData,
  'healthcare-practices/dental-implant-clinics': DentalImplantClinicsIndustryPageData,
  'healthcare-practices/orthodontic-clinics': OrthodonticClinicsIndustryPageData,
  'healthcare-practices/oral-surgery-clinics': OralSurgeryClinicsIndustryPageData,
  'healthcare-practices/dermatology-clinics': DermatologyClinicsIndustryPageData,
  'healthcare-practices/ent-sinus-clinics': EntSinusClinicsIndustryPageData,
  'healthcare-practices/podiatry-clinics': PodiatryClinicsIndustryPageData,
  'healthcare-practices/hearing-aid-clinics': HearingAidClinicsIndustryPageData,
  'healthcare-practices/physiotherapy-clinics': PhysiotherapyClinicsIndustryPageData,
  'healthcare-practices/optometry-clinics': OptometryClinicsIndustryPageData,
  'healthcare-practices/orthopedic-clinics': OrthopedicClinicsIndustryPageData,
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
