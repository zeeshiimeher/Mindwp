import { createIndustryDetailData } from '@/domains/industries/dataFactory';

export const HearingAidClinicsIndustryPageData = createIndustryDetailData({
  slug: 'hearing-aid-clinics',
  parentSlug: 'healthcare-practices',
  label: 'Hearing Aid Clinics',
  title: 'Hearing Aid Clinics Website Systems',
  description: 'Hearing aid clinic website systems reset base.',
  industries: ['hearing-aids'],
  topics: ['lead-management', 'follow-up', 'review-generation', 'local-visibility'],
});
