import { automotiveServicesIndustryPageData } from '@/domains/industries/pages/automotive-services';
import { autoRepairIndustryPageData } from '@/domains/industries/pages/automotive-services/AutoRepair';
import { bodyShopsIndustryPageData } from '@/domains/industries/pages/automotive-services/BodyShops';
import { carDetailingIndustryPageData } from '@/domains/industries/pages/automotive-services/CarDetailing';
import { mobileMechanicsIndustryPageData } from '@/domains/industries/pages/automotive-services/MobileMechanics';
import { beautyPersonalCareIndustryPageData } from '@/domains/industries/pages/beauty-personal-care';
import { aestheticCosmeticClinicsIndustryPageData } from '@/domains/industries/pages/beauty-personal-care/AestheticCosmeticClinics';
import { hairSalonsIndustryPageData } from '@/domains/industries/pages/beauty-personal-care/HairSalons';
import { lashExtensionsIndustryPageData } from '@/domains/industries/pages/beauty-personal-care/LashExtensions';
import { nailSalonsIndustryPageData } from '@/domains/industries/pages/beauty-personal-care/NailSalons';
import { smallMedSpasIndustryPageData } from '@/domains/industries/pages/beauty-personal-care/SmallMedSpas';
import { homeServicesIndustryPageData } from '@/domains/industries/pages/home-services';
import { electricalCompaniesIndustryPageData } from '@/domains/industries/pages/home-services/ElectricalCompanies';
import { hvacCompaniesIndustryPageData } from '@/domains/industries/pages/home-services/HvacCompanies';
import { landscapingCompaniesIndustryPageData } from '@/domains/industries/pages/home-services/LandscapingCompanies';
import { plumbingCompaniesIndustryPageData } from '@/domains/industries/pages/home-services/PlumbingCompanies';
import { roofingCompaniesIndustryPageData } from '@/domains/industries/pages/home-services/RoofingCompanies';
import { legalProfessionalServicesIndustryPageData } from '@/domains/industries/pages/legal-professional-services';
import { accountingFirmsIndustryPageData } from '@/domains/industries/pages/legal-professional-services/AccountingFirms';
import { consultantsIndustryPageData } from '@/domains/industries/pages/legal-professional-services/Consultants';
import { smallLawFirmsIndustryPageData } from '@/domains/industries/pages/legal-professional-services/SmallLawFirms';
import { localAppointmentBusinessesIndustryPageData } from '@/domains/industries/pages/local-appointment-businesses';
import { dentalClinicsIndustryPageData } from '@/domains/industries/pages/local-appointment-businesses/DentalClinics';
import { drivingSchoolsIndustryPageData } from '@/domains/industries/pages/local-appointment-businesses/DrivingSchools';
import { repairShopsIndustryPageData } from '@/domains/industries/pages/local-appointment-businesses/RepairShops';
import { smallPrivateClinicsIndustryPageData } from '@/domains/industries/pages/local-appointment-businesses/SmallPrivateClinics';
import { tattooStudiosIndustryPageData } from '@/domains/industries/pages/local-appointment-businesses/TattooStudios';
import { realEstatePropertyServicesIndustryPageData } from '@/domains/industries/pages/real-estate-property-services';
import { homeInspectorsIndustryPageData } from '@/domains/industries/pages/real-estate-property-services/HomeInspectors';
import { mortgageBrokersIndustryPageData } from '@/domains/industries/pages/real-estate-property-services/MortgageBrokers';
import { propertyManagersIndustryPageData } from '@/domains/industries/pages/real-estate-property-services/PropertyManagers';
import { realtorsIndustryPageData } from '@/domains/industries/pages/real-estate-property-services/Realtors';
import type { IndustryPageData } from '@/domains/industries/types';

export const INDUSTRY_REGISTRY: Record<string, IndustryPageData> = {
  'automotive-services': automotiveServicesIndustryPageData,
  'automotive-services/auto-repair': autoRepairIndustryPageData,
  'automotive-services/body-shops': bodyShopsIndustryPageData,
  'automotive-services/car-detailing': carDetailingIndustryPageData,
  'automotive-services/mobile-mechanics': mobileMechanicsIndustryPageData,
  'home-services': homeServicesIndustryPageData,
  'home-services/roofing-companies': roofingCompaniesIndustryPageData,
  'home-services/hvac-companies': hvacCompaniesIndustryPageData,
  'home-services/plumbing-companies': plumbingCompaniesIndustryPageData,
  'home-services/electrical-companies': electricalCompaniesIndustryPageData,
  'home-services/landscaping-companies': landscapingCompaniesIndustryPageData,
  'beauty-personal-care': beautyPersonalCareIndustryPageData,
  'beauty-personal-care/aesthetic-cosmetic-clinics': aestheticCosmeticClinicsIndustryPageData,
  'beauty-personal-care/hair-salons': hairSalonsIndustryPageData,
  'beauty-personal-care/nail-salons': nailSalonsIndustryPageData,
  'beauty-personal-care/small-med-spas': smallMedSpasIndustryPageData,
  'beauty-personal-care/lash-lift-and-extensions': lashExtensionsIndustryPageData,
  'legal-professional-services': legalProfessionalServicesIndustryPageData,
  'legal-professional-services/accounting-firms': accountingFirmsIndustryPageData,
  'legal-professional-services/consultants': consultantsIndustryPageData,
  'legal-professional-services/small-law-firms': smallLawFirmsIndustryPageData,
  'local-appointment-businesses': localAppointmentBusinessesIndustryPageData,
  'local-appointment-businesses/dental-clinics': dentalClinicsIndustryPageData,
  'local-appointment-businesses/driving-schools': drivingSchoolsIndustryPageData,
  'local-appointment-businesses/repair-shops': repairShopsIndustryPageData,
  'local-appointment-businesses/small-private-clinics': smallPrivateClinicsIndustryPageData,
  'local-appointment-businesses/tattoo-studios': tattooStudiosIndustryPageData,
  'real-estate-property-services': realEstatePropertyServicesIndustryPageData,
  'real-estate-property-services/home-inspectors': homeInspectorsIndustryPageData,
  'real-estate-property-services/mortgage-brokers': mortgageBrokersIndustryPageData,
  'real-estate-property-services/property-managers': propertyManagersIndustryPageData,
  'real-estate-property-services/realtors': realtorsIndustryPageData,
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
