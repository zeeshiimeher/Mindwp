import { createIndustryCategoryData } from '@/domains/industries/dataFactory';

export const HomeServicesIndustryPageData = createIndustryCategoryData({
  slug: 'home-services',
  label: 'Home Services',
  title: 'Home Services Website Systems',
  description:
    'Approved home services industry lane for website clarity, local trust, enquiry handling, follow-up, reviews, and proof.',
  industries: [
    'hvac',
    'plumbing',
    'roofing',
    'foundation-repair',
    'septic-services',
    'tree-service',
  ],
  topics: ['lead-management', 'follow-up', 'review-generation', 'local-visibility'],
});
