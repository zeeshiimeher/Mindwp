import { createIndustryDetailData } from '@/domains/industries/dataFactory';

export const OrthodonticClinicsIndustryPageData = createIndustryDetailData({
  slug: 'orthodontic-clinics',
  parentSlug: 'healthcare-practices',
  label: 'Orthodontic Clinics',
  title: 'Orthodontic Clinics Website Systems',
  description: 'Orthodontic clinic website systems reset base.',
  industries: ['orthodontics'],
  topics: ['lead-management', 'follow-up', 'review-generation', 'local-visibility'],
});
