import { createIndustryDetailData } from '@/domains/industries/dataFactory';

export const DentalImplantClinicsIndustryPageData = createIndustryDetailData({
  slug: 'dental-implant-clinics',
  parentSlug: 'healthcare-practices',
  label: 'Dental Implant Clinics',
  title: 'Dental Implant Clinics Website Systems',
  description: 'Dental implant clinic website systems reset base.',
  industries: ['dental-implants'],
  topics: ['lead-management', 'follow-up', 'review-generation', 'local-visibility'],
});
