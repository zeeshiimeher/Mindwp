import { createScenarioStudy } from '@/domains/case-studies/createScenarioStudy';

export const HearingAidClinicFollowUpAndReviewsCaseStudy = createScenarioStudy({
  slug: 'hearing-aid-clinic-follow-up-and-reviews',
  title: 'Hearing Aid Clinic Follow-Up and Reviews',
  industryCategory: 'healthcare-practices',
  industryLabel: 'Hearing Aid Clinics',
  industries: ['hearing-aids'],
  primarySystem: 'reputation-review-systems',
  supportingSystems: ['follow-up-crm'],
  topics: ['lead-management', 'follow-up', 'review-generation'],
  summary: 'A hearing aid clinic scenario around follow-up, after-care, and review proof.',
  problem:
    'Enquiries, testing appointments, after-care, and review requests needed a more visible path.',
  change:
    'The follow-up and review path was framed around reminders, patient experience, and proof without medical claims.',
  nextStep: 'Request a system review if follow-up and review requests depend on memory.',
});
