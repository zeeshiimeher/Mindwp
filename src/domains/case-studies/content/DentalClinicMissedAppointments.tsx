import type { CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildDentalClinicMissedAppointments(): CaseStudyData {
  const heroIntroHtml = (
    <>
      Marston Dental Care is a small private and NHS-mixed practice in Oxford. The diary was
      consistently full a few weeks ahead. The chairs were not. A meaningful proportion of booked
      appointments simply did not turn into a person sitting down at the agreed time, and the
      practice had been quietly absorbing that loss for years.
    </>
  );

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'Appointments were booked. People just didn\u2019t show up',
    problemDescription: [
      'A patient would book six weeks ahead and then life would happen. Some forgot. Some had a clash. A small number assumed someone would call them. The reception team would phone the day before when they could, but with a busy front desk that did not always happen.',
      'Each missed slot was a clinician sitting idle for half an hour. Across a month it was a number nobody at the practice wanted to look at honestly.',
    ],
    painPoints: [
      'Patients booked weeks ahead and then forgot the appointment',
      'Reception did not always have time to phone every patient the day before',
      'No-shows landed during clinical hours that could not easily be filled',
      'Cancellations were not getting offered to anyone on a waiting list',
      'The practice had no real number to put on what no-shows were costing',
    ],
  };

  const processSection: CaseStudyTemplateSection = {
    type: 'process',

    howWeDidIt: [
      {
        phase: 'Week 1',
        title: 'A proper look at six months of bookings',
        description:
          'The practice manager and our team sat together and went through every missed appointment in the previous six months. The patterns were clearer than expected: certain days, certain treatment types, and certain booking gaps were responsible for most of the loss.',
        duration: 'Two afternoons on site',
      },
      {
        phase: 'Weeks 2-3',
        title: 'A measured reminder schedule',
        description:
          'Patients began receiving a calm confirmation a week before the appointment, and a respectful reminder the day before, with a clear way to confirm or move the slot.',
        duration: 'Two weeks to settle in',
      },
      {
        phase: 'Weeks 4-5',
        title: 'A short-notice list',
        description:
          'When a slot did open up at short notice, a small group of patients who had asked to be seen sooner were offered the slot first. Slots that used to vanish started getting filled the same day.',
        duration: 'A fortnight',
      },
      {
        phase: 'Week 6',
        title: 'A monthly view for the practice manager',
        description:
          'A short monthly summary showed the no-show rate, the recovered slots, and how each clinician\u2019s diary was performing. The conversation about utilisation moved from gut feel to a real number.',
        duration: 'Half a day to set up',
      },
    ],
  };

  const testimonialSection: CaseStudyTemplateSection = {
    type: 'testimonial',
    testimonial: {
      quote:
        'We had assumed no-shows were just part of running a practice. They are not. The reminders did most of the work, and the short-notice list made the difference on the days when we did still lose a slot. The chairs are full in a way they simply were not before.',
      author: 'Dr Helena Marston',
      role: 'Principal Dentist, Marston Dental Care',
    },
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        title: 'No-shows dropped to a level the practice could finally live with',
        improvement: 'A meaningful reduction in missed appointments month after month',
        description:
          'The reminders carried most of the load. Patients confirmed or moved the slot ahead of time, which gave reception a real chance to fill the gap rather than absorb it.',
      },
      {
        title: 'Short-notice cancellations stopped being dead time',
        improvement: 'A real share of last-minute openings got filled the same day',
        description:
          'When a patient did cancel late, the slot had a second life. People who had asked to be seen sooner stepped in, and the clinician\u2019s afternoon stayed productive instead of half-empty.',
      },
      {
        title: 'The practice manager finally had the real number',
        improvement: 'No-show cost was no longer a vague feeling',
        description:
          'Once the figure was on a single screen each month, decisions about how the practice ran became calmer and easier to justify. The conversation moved from defending the diary to improving it.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Diary full but chairs half-empty?',
    body: 'Book a free 20-minute call. We can look at where your appointments are quietly slipping and what is most worth fixing first.',
  };

  const sections: CaseStudyTemplateSection[] = [
    { type: 'hero', introHtml: heroIntroHtml },
    problemSection,
    processSection,
    testimonialSection,
    resultsSection,
    ctaSection,
  ];

  return {
    seo: {
      title: 'Dental practice case study: bringing the no-show rate under control',
      description:
        'How an Oxford dental practice stopped quietly absorbing missed appointments and made the diary actually mean something for clinician utilisation.',
      canonical: '/case-studies/dental-bookings-people-not-showing-up',
      openGraph: {
        title: 'Dental practice case study: bringing the no-show rate under control',
        description: 'How an Oxford dental practice stopped quietly absorbing missed appointments.',
      },
    },
    slug: 'dental-bookings-people-not-showing-up',
    title: 'Appointments were booked. People just didn\u2019t show up',
    industryCategory: 'healthcare',
    industryLabel: 'Healthcare',
    industries: ['dental-clinic'],
    systems: ['revenue-growth'],
    topics: ['no-show-reduction', 'booking-systems', 'service-reminders'],
    publishDate: '2026-02-15',
    client: 'Marston Dental Care',
    location: 'Oxford, UK',
    business: 'Marston Dental Care',
    duration: '6 weeks',
    completedDate: 'February 2026',
    heroHeadline: 'Appointments were booked. People just didn\u2019t show up',
    keyMetrics: [],
    tags: ['Dental', 'No-Shows', 'Reminders', 'Practice'],
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'No-Shows' },
      problem: { challengeBadgeLabel: 'What was happening' },
      results: {
        detailedResultsBadgeLabel: 'What improved',
        detailedResultsSectionTitle: 'What changed once the diary started meaning something',
      },
      cta: {
        metaItems: [
          { text: 'Free 20-minute call' },
          { text: 'No pressure' },
          { text: 'Useful for dental practices' },
        ],
      },
    },
  };
}

export const dentalClinicMissedAppointments: CaseStudyData = buildDentalClinicMissedAppointments();
