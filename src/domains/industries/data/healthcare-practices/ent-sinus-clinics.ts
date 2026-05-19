import { createIndustryDetailData } from '@/domains/industries/dataFactory';

export const EntSinusClinicsIndustryPageData = createIndustryDetailData({
  slug: 'ent-sinus-clinics',
  parentSlug: 'healthcare-practices',
  label: 'ENT / Sinus Clinics',
  title: 'ENT / Sinus Clinics Website Systems',
  description: 'ENT and sinus clinic website systems reset base.',
  industries: ['ent-sinus'],
  topics: ['lead-management', 'follow-up', 'review-generation', 'local-visibility'],
});
