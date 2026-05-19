import { createScenarioStudy } from '@/domains/case-studies/createScenarioStudy';

export const RoofingQuoteFollowUpCaseStudy = createScenarioStudy({
  slug: 'roofing-quote-follow-up',
  title: 'Roofing Quote Follow-Up',
  industryCategory: 'home-services',
  industryLabel: 'Roofing',
  industries: ['roofing'],
  primarySystem: 'follow-up-crm',
  supportingSystems: ['lead-response-handling'],
  topics: ['lead-management', 'follow-up', 'review-generation'],
  summary: 'A roofing scenario where quote follow-up needed ownership after the inspection.',
  problem:
    'Quotes were sent, then follow-up depended on the owner remembering who was ready for the next conversation.',
  change: 'Each quote was framed with status, owner, and next step so follow-up could be seen.',
  nextStep: 'Request a system review if quotes go quiet after the site visit.',
});
