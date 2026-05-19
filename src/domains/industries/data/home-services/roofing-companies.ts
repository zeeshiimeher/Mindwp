import { createIndustryDetailData } from '@/domains/industries/dataFactory';

export const RoofingCompaniesIndustryPageData = createIndustryDetailData({
  slug: 'roofing-companies',
  parentSlug: 'home-services',
  label: 'Roofing Companies',
  title: 'Roofing Companies Website Systems',
  description: 'Roofing company website systems reset base.',
  industries: ['roofing'],
  topics: ['lead-management', 'follow-up', 'review-generation', 'local-visibility'],
});
