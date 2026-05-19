import { createIndustryDetailData } from '@/domains/industries/dataFactory';

export const PlumbingCompaniesIndustryPageData = createIndustryDetailData({
  slug: 'plumbing-companies',
  parentSlug: 'home-services',
  label: 'Plumbing Companies',
  title: 'Plumbing Companies Website Systems',
  description: 'Plumbing company website systems reset base.',
  industries: ['plumbing'],
  topics: ['lead-management', 'follow-up', 'review-generation', 'local-visibility'],
});
