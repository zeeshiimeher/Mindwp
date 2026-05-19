import { createIndustryDetailData } from '@/domains/industries/dataFactory';

export const PhysiotherapyClinicsIndustryPageData = createIndustryDetailData({
  slug: 'physiotherapy-clinics',
  parentSlug: 'healthcare-practices',
  label: 'Physiotherapy Clinics',
  title: 'Physiotherapy Clinics Website Systems',
  description: 'Physiotherapy clinic website systems reset base.',
  industries: ['physiotherapy'],
  topics: ['lead-management', 'follow-up', 'review-generation', 'local-visibility'],
});
