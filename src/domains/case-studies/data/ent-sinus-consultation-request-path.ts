import { createScenarioStudy } from '@/domains/case-studies/createScenarioStudy';

export const EntSinusConsultationRequestPathCaseStudy = createScenarioStudy({
  slug: 'ent-sinus-consultation-request-path',
  title: 'ENT Sinus Consultation Request Path',
  industryCategory: 'healthcare-practices',
  industryLabel: 'ENT / Sinus Clinics',
  industries: ['ent-sinus'],
  primarySystem: 'lead-response-handling',
  supportingSystems: ['smart-website-systems'],
  topics: ['lead-management', 'follow-up', 'review-generation'],
  summary: 'An ENT and sinus clinic scenario around consultation requests and response paths.',
  problem:
    'Patients with symptoms needed a clear route from service information to consultation request.',
  change:
    'The consultation request path was framed around service clarity, response, and visible next step ownership.',
  nextStep: 'Request a system review if consultation requests are scattered or slow to handle.',
});
