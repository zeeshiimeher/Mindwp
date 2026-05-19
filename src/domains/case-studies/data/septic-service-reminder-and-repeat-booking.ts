import { createScenarioStudy } from '@/domains/case-studies/createScenarioStudy';

export const SepticServiceReminderAndRepeatBookingCaseStudy = createScenarioStudy({
  slug: 'septic-service-reminder-and-repeat-booking',
  title: 'Septic Service Reminder and Repeat Booking',
  industryCategory: 'home-services',
  industryLabel: 'Septic Services',
  industries: ['septic-services'],
  primarySystem: 'follow-up-crm',
  supportingSystems: ['reputation-review-systems'],
  topics: ['lead-management', 'follow-up', 'review-generation'],
  summary: 'A septic services scenario where reminder timing and repeat booking needed ownership.',
  problem: 'Maintenance reminders and repeat bookings depended on scattered notes and memory.',
  change: 'The repeat-service path was framed around reminders, status, and booking ownership.',
  nextStep: 'Request a system review if repeat service depends on manual checking.',
});
