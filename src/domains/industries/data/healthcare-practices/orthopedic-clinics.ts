import { createIndustryDetailData } from '@/domains/industries/dataFactory';

export const OrthopedicClinicsIndustryPageData = createIndustryDetailData({
  slug: 'orthopedic-clinics',
  parentSlug: 'healthcare-practices',
  label: 'Orthopedic Clinics',
  title: 'Orthopedic Clinics Website Systems',
  description: 'Orthopedic clinic website systems reset base.',
  industries: ['orthopedics'],
  topics: ['lead-management', 'follow-up', 'review-generation', 'local-visibility'],
});
