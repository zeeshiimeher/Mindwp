import { createIndustryDetailData } from '@/domains/industries/dataFactory';

export const OralSurgeryClinicsIndustryPageData = createIndustryDetailData({
  slug: 'oral-surgery-clinics',
  parentSlug: 'healthcare-practices',
  label: 'Oral Surgery Clinics',
  title: 'Oral Surgery Clinics Website Systems',
  description: 'Oral surgery clinic website systems reset base.',
  industries: ['oral-surgery'],
  topics: ['lead-management', 'follow-up', 'review-generation', 'local-visibility'],
});
