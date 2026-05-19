import { createScenarioStudy } from '@/domains/case-studies/createScenarioStudy';

export const OrthodonticTreatmentEnquiryPathCaseStudy = createScenarioStudy({
  slug: 'orthodontic-treatment-enquiry-path',
  title: 'Orthodontic Treatment Enquiry Path',
  industryCategory: 'healthcare-practices',
  industryLabel: 'Orthodontic Clinics',
  industries: ['orthodontics'],
  primarySystem: 'smart-website-systems',
  supportingSystems: ['follow-up-crm'],
  topics: ['lead-management', 'follow-up', 'review-generation'],
  summary: 'An orthodontic clinic scenario around treatment enquiry clarity and next steps.',
  problem:
    'Parents and patients needed clear treatment information and a confident consultation path.',
  change:
    'The enquiry path was framed around treatment clarity, booking confidence, and visible next steps.',
  nextStep: 'Request a system review if treatment enquiries need clearer ownership.',
});
