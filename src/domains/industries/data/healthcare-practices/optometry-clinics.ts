import { createIndustryDetailData } from '@/domains/industries/dataFactory';

export const OptometryClinicsIndustryPageData = createIndustryDetailData({
  slug: 'optometry-clinics',
  parentSlug: 'healthcare-practices',
  label: 'Optometry Clinics',
  title: 'Optometry Clinics Website Systems',
  description: 'Optometry clinic website systems reset base.',
  industries: ['optometry'],
  topics: ['lead-management', 'follow-up', 'review-generation', 'local-visibility'],
});
