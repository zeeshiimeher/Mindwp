import { createIndustryDetailData } from '@/domains/industries/dataFactory';

export const PodiatryClinicsIndustryPageData = createIndustryDetailData({
  slug: 'podiatry-clinics',
  parentSlug: 'healthcare-practices',
  label: 'Podiatry Clinics',
  title: 'Podiatry Clinics Website Systems',
  description: 'Podiatry clinic website systems reset base.',
  industries: ['podiatry'],
  topics: ['lead-management', 'follow-up', 'review-generation', 'local-visibility'],
});
