import { createScenarioStudy } from '@/domains/case-studies/createScenarioStudy';

export const PlumbingWebsiteToResponsePathCaseStudy = createScenarioStudy({
  slug: 'plumbing-website-to-response-path',
  title: 'Plumbing Website to Response Path',
  industryCategory: 'home-services',
  industryLabel: 'Plumbing',
  industries: ['plumbing'],
  primarySystem: 'lead-response-handling',
  supportingSystems: ['smart-website-systems'],
  topics: ['lead-management', 'follow-up', 'review-generation'],
  summary: 'A plumbing scenario showing how website enquiries should move into a response path.',
  problem:
    'Visitors could request help, but the page-to-response handoff was unclear and easy to miss.',
  change:
    'The website path was framed around clearer service intent and a visible response handoff.',
  nextStep: 'Request a system review if website enquiries are not landing somewhere useful.',
});
