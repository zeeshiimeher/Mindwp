import { createScenarioStudy } from '@/domains/case-studies/createScenarioStudy';

export const HvacSeasonalEnquiryFollowUpCaseStudy = createScenarioStudy({
  slug: 'hvac-seasonal-enquiry-follow-up',
  title: 'HVAC Seasonal Enquiry Follow-Up',
  industryCategory: 'home-services',
  industryLabel: 'HVAC',
  industries: ['hvac'],
  primarySystem: 'lead-response-handling',
  supportingSystems: ['follow-up-crm'],
  topics: ['lead-management', 'follow-up', 'review-generation'],
  summary: 'Seasonal HVAC enquiries need a response and follow-up path before the caller moves on.',
  problem:
    'Seasonal calls and forms arrived quickly, but follow-up depended on whoever remembered after the rush.',
  change:
    'Enquiries were framed around source, urgency, owner, and next step instead of a loose inbox or call log.',
  nextStep: 'Request a system review if seasonal enquiries still depend on memory.',
});
