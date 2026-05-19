import { createIndustryDetailData } from '@/domains/industries/dataFactory';

export const TreeServiceCompaniesIndustryPageData = createIndustryDetailData({
  slug: 'tree-service-companies',
  parentSlug: 'home-services',
  label: 'Tree Service Companies',
  title: 'Tree Service Companies Website Systems',
  description: 'Tree service company website systems reset base.',
  industries: ['tree-service'],
  topics: ['lead-management', 'follow-up', 'review-generation', 'local-visibility'],
});
