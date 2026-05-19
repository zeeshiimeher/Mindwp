import { createScenarioStudy } from '@/domains/case-studies/createScenarioStudy';

export const DentalImplantConsultationFollowUpCaseStudy = createScenarioStudy({
  slug: 'dental-implant-consultation-follow-up',
  title: 'Dental Implant Consultation Follow-Up',
  industryCategory: 'healthcare-practices',
  industryLabel: 'Dental Implant Clinics',
  industries: ['dental-implants'],
  primarySystem: 'follow-up-crm',
  supportingSystems: ['smart-website-systems'],
  topics: ['lead-management', 'follow-up', 'review-generation'],
  summary: 'A dental implant clinic scenario around consultation requests and careful follow-up.',
  problem:
    'Patients needed trust and treatment-path clarity before booking, then visible follow-up after enquiry.',
  change:
    'The consultation path was framed around clarity, trust, booking request handling, and owned follow-up.',
  nextStep: 'Request a system review if consultation requests are hard to track after contact.',
});
