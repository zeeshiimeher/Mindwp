import type { ResourceData } from '@/domains/resources/types';

export const specialistClinicWebsiteFrontDoorChecklist: ResourceData = {
  slug: 'specialist-clinic-website-front-door-checklist',
  title: 'Specialist Clinic Website Front Door Checklist',
  description:
    'A checklist for reviewing whether a clinic website helps patients understand the service, trust the provider, and move into a booking or consultation path.',
  category: 'healthcare-practice-examples',
  publishedAt: '2026-01-22',
  primarySystem: 'smart-website-systems',
  supportingSystems: ['lead-response-handling', 'reputation-review-systems'],
  topics: ['service-page-architecture', 'booking-systems', 'authority-signals'],
  primaryService: 'smart-website-systems',
  seo: {
    title: 'Specialist Clinic Website Front Door Checklist',
    description:
      'Review whether a specialist clinic website creates patient trust, service clarity, and a clear booking or consultation path.',
    canonical: '/resources/specialist-clinic-website-front-door-checklist',
  },
  sections: [
    {
      type: 'checklist',
      heading: 'Front-door clarity checks',
      items: [
        'The service, treatment, or procedure is explained in plain language without making outcome claims.',
        'The provider, process, reviews, and proof are easy for a patient to verify.',
        'The booking or consultation request path is visible before the patient leaves the page.',
      ],
    },
    {
      type: 'framework',
      heading: 'What this checklist is for',
      content:
        'Use this as a reset-safe review of the clinic website path. It is not a clinical, compliance, or treatment-outcome checklist.',
    },
  ],
};
