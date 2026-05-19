import { createIndustryDetailData } from '@/domains/industries/dataFactory';

export const DermatologyClinicsIndustryPageData = createIndustryDetailData({
  slug: 'dermatology-clinics',
  parentSlug: 'healthcare-practices',
  label: 'Dermatology Clinics',
  title: 'Dermatology Clinics Website Systems',
  description: 'Dermatology clinic website systems reset base.',
  industries: ['dermatology'],
  topics: ['lead-management', 'follow-up', 'review-generation', 'local-visibility'],
});
