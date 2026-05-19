import { createIndustryDetailData } from '@/domains/industries/dataFactory';

export const SepticServicesCompaniesIndustryPageData = createIndustryDetailData({
  slug: 'septic-services-companies',
  parentSlug: 'home-services',
  label: 'Septic Services Companies',
  title: 'Septic Services Companies Website Systems',
  description: 'Septic services company website systems reset base.',
  industries: ['septic-services'],
  topics: ['lead-management', 'follow-up', 'review-generation', 'local-visibility'],
});
