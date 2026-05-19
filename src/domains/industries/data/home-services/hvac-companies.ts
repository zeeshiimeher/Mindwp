import { createIndustryDetailData } from '@/domains/industries/dataFactory';

export const HvacCompaniesIndustryPageData = createIndustryDetailData({
  slug: 'hvac-companies',
  parentSlug: 'home-services',
  label: 'HVAC Companies',
  title: 'HVAC Companies Website Systems',
  description: 'HVAC company website systems reset base.',
  industries: ['hvac'],
  topics: ['lead-management', 'follow-up', 'review-generation', 'local-visibility'],
});
