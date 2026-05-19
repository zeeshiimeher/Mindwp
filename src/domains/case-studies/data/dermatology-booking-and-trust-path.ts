import { createScenarioStudy } from '@/domains/case-studies/createScenarioStudy';

export const DermatologyBookingAndTrustPathCaseStudy = createScenarioStudy({
  slug: 'dermatology-booking-and-trust-path',
  title: 'Dermatology Booking and Trust Path',
  industryCategory: 'healthcare-practices',
  industryLabel: 'Dermatology Clinics',
  industries: ['dermatology'],
  primarySystem: 'smart-website-systems',
  supportingSystems: ['reputation-review-systems'],
  topics: ['lead-management', 'follow-up', 'review-generation'],
  summary: 'A dermatology clinic scenario around trust, service clarity, and booking requests.',
  problem:
    'Patients needed to understand the service and provider before requesting an appointment.',
  change:
    'The booking path was framed around trust signals, service clarity, reviews, and response ownership.',
  nextStep:
    'Request a system review if booking requests need stronger trust and follow-up context.',
});
