import { createIndustryCategoryData } from '@/domains/industries/dataFactory';

export const HealthcarePracticesIndustryPageData = createIndustryCategoryData({
  slug: 'healthcare-practices',
  label: 'Healthcare Practices',
  title: 'Healthcare Practice Website Systems',
  description:
    'Approved specialist clinic and private practice lane for service, treatment, or procedure clarity, booking and consultation requests, follow-up, reviews, and proof.',
  industries: [
    'dental-implants',
    'orthodontics',
    'oral-surgery',
    'dermatology',
    'ent-sinus',
    'podiatry',
    'hearing-aids',
    'physiotherapy',
    'optometry',
    'orthopedics',
  ],
  topics: ['lead-management', 'follow-up', 'review-generation', 'local-visibility'],
});
