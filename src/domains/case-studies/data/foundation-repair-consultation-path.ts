import { createScenarioStudy } from '@/domains/case-studies/createScenarioStudy';

export const FoundationRepairConsultationPathCaseStudy = createScenarioStudy({
  slug: 'foundation-repair-consultation-path',
  title: 'Foundation Repair Consultation Path',
  industryCategory: 'home-services',
  industryLabel: 'Foundation Repair',
  industries: ['foundation-repair'],
  primarySystem: 'smart-website-systems',
  supportingSystems: ['follow-up-crm'],
  topics: ['lead-management', 'follow-up', 'review-generation'],
  summary: 'A foundation repair scenario around high-trust consultation requests and follow-up.',
  problem:
    'High-value enquiries needed clarity before contact and careful follow-up after the first conversation.',
  change: 'The consultation path was framed around trust, service clarity, and owned next steps.',
  nextStep: 'Request a system review if consultation enquiries need a clearer path.',
});
