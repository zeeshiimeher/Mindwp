import type { ResourceData } from '@/domains/resources/types';

export const patientTrustAndBookingPathMap: ResourceData = {
  slug: 'patient-trust-and-booking-path-map',
  title: 'Patient Trust and Booking Path Map',
  description:
    'A framework for mapping how patient trust, booking requests, response, follow-up, and reviews connect around the website.',
  category: 'frameworks',
  publishedAt: '2026-01-24',
  primarySystem: 'smart-website-systems',
  supportingSystems: ['lead-response-handling', 'follow-up-crm', 'reputation-review-systems'],
  topics: ['booking-systems', 'review-generation', 'crm-visibility'],
  primaryService: 'smart-website-systems',
  seo: {
    title: 'Patient Trust and Booking Path Map',
    description:
      'Map the website, patient trust, booking request, response, follow-up, and reviews around a specialist clinic path.',
    canonical: '/resources/patient-trust-and-booking-path-map',
  },
  sections: [
    {
      type: 'framework',
      heading: 'Map trust before booking',
      content: [
        'Start with the page the patient sees, the proof they can verify, and the service or treatment explanation they need before asking for help.',
        'Then map the booking or consultation request, the first response, the follow-up owner, and the review or proof moment after the experience.',
      ],
    },
    {
      type: 'steps',
      heading: 'Simple map',
      steps: [
        {
          label: 'Understand',
          description: 'The patient understands the service and next step.',
        },
        {
          label: 'Trust',
          description: 'Proof and reviews support the decision to enquire.',
        },
        {
          label: 'Request',
          description: 'The booking or consultation request lands clearly.',
        },
        {
          label: 'Handle',
          description: 'Response and follow-up have an owner.',
        },
      ],
    },
  ],
};
