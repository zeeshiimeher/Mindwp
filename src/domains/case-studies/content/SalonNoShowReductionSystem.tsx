import type { CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildSalonNoShowReductionSystem(): CaseStudyData {
  const heroIntroHtml = (
    <>
      Lumina Hair Studio is a busy independent salon in Brighton with five stylists and a small
      colour bar. From the outside the diary looked the way every salon owner wants. Most days
      stacked from late morning into the evening. The numbers told a quieter story \u2014 plenty of
      those booked slots ended up sitting empty.
    </>
  );

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'Bookings were full. Chairs were still empty',
    problemDescription: [
      'A no-show on a Tuesday afternoon was annoying. A no-show on a Saturday cost real money. The colour appointments were the worst, because they took the longest slot and were almost impossible to refill at short notice.',
      'The team was sending the same generic reminder the day before, and most no-shows were people who had simply forgotten or fallen out of the routine. By the time anyone realised they were not coming, the chair had already been empty for half an hour.',
    ],
    painPoints: [
      'No-shows clustered on the busiest days and the longest appointments',
      'A single reminder the day before was not enough for clients with full lives',
      'Late cancellations gave reception no time to refill the slot',
      'The waiting list lived on a clipboard nobody had time to phone through',
      'Stylists were being paid for time they were not actually cutting hair',
    ],
  };

  const processSection: CaseStudyTemplateSection = {
    type: 'process',
    howWeDidIt: [
      {
        phase: 'Week 1',
        title: 'Spent a morning on the front desk',
        description:
          'Watched what actually happened around no-shows. Where the gaps formed. What the team tried to do when a chair went empty. Most of the lost time happened in the same two-hour window most weeks.',
        duration: '3 days',
      },
      {
        phase: 'Week 2',
        title: 'Wrote the reminders in the receptionist\u2019s voice',
        description:
          'Drafted a softer reminder a few days out and a confirmation the night before. Read them out loud with the team to make sure nothing sounded like a chain salon\u2019s text blast.',
        duration: '4 days',
      },
      {
        phase: 'Week 3',
        title: 'Turned the clipboard into a real waiting list',
        description:
          'Pulled the regulars who often asked about Saturdays into one short list. Set it up so that when a slot opened, the right small group of people heard about it within a few minutes, not a few hours.',
        duration: '1 week',
      },
      {
        phase: 'Weeks 4\u20136',
        title: 'Watched it run on real bookings and tweaked the timing',
        description:
          'A few of the long-standing regulars found the early reminder a bit much, so we softened the wording for repeat clients. The colour appointments needed an extra confirmation step on top of everything else.',
        duration: '3 weeks',
      },
    ],
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        title: 'Empty chairs stopped being a quiet weekly story',
        improvement: 'Noticeably fewer no-shows on the longer, higher-value appointments',
        description:
          'The reminders did most of the work. People who would have forgotten the appointment now confirmed earlier, and the ones who needed to move it did so before the day instead of on the day.',
      },
      {
        title: 'Cancelled slots actually got filled',
        improvement: 'Same-day refills started becoming normal',
        description:
          'The waiting list went from a clipboard nobody used to a small group of clients who often replied within minutes when something came free.',
      },
      {
        title: 'The week\u2019s takings stopped fluctuating so wildly',
        improvement: 'Less of a gap between what the diary promised and what the till saw',
        description:
          'The colour bar in particular calmed down. Saturdays still got some last-minute changes, but the lost slots stopped being treated as inevitable.',
      },
    ],
  };

  const testimonialSection: CaseStudyTemplateSection = {
    type: 'testimonial',
    testimonial: {
      quote:
        'Honestly, the change was just having someone else feeling responsible for the empty chair. The reminders did half of it, the waiting list did the rest, and the team stopped dreading Saturdays.',
      author: 'Aisha Patel',
      role: 'Owner, Lumina Hair Studio',
    },
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Diary looks full but the chair keeps emptying?',
    body: 'Book a free 20-minute call. We can look at where your no-shows are clustering and how to keep more of those slots actually paid for.',
  };

  const sections: CaseStudyTemplateSection[] = [
    { type: 'hero', introHtml: heroIntroHtml },
    problemSection,
    processSection,
    resultsSection,
    testimonialSection,
    ctaSection,
  ];

  return {
    seo: {
      title: 'Salon no-show case study: fewer empty chairs, calmer weeks',
      description:
        'How a Brighton hair salon stopped losing so many slots to no-shows and started actually filling the cancellations that did happen.',
      canonical: '/case-studies/salon-bookings-full-chairs-empty',
      openGraph: {
        title: 'Salon no-show case study: fewer empty chairs, calmer weeks',
        description: 'How a Brighton hair salon stopped losing so many slots to no-shows.',
      },
    },
    slug: 'salon-bookings-full-chairs-empty',
    title: 'Bookings were full. Chairs were still empty',
    industryCategory: 'beauty-personal-care',
    industryLabel: 'Beauty & Personal Care',
    industries: ['hair-salon'],
    systems: ['revenue-growth'],
    topics: ['no-show-reduction', 'service-reminders', 'booking-systems'],
    publishDate: '2026-01-25',
    client: 'Lumina Hair Studio',
    location: 'Brighton, UK',
    business: 'Lumina Hair Studio',
    duration: '6 weeks',
    completedDate: 'January 2026',
    heroHeadline: 'Bookings were full. Chairs were still empty',
    keyMetrics: [],
    tags: ['Salon', 'No-Shows', 'Reminders', 'Hair Salon'],
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'No-Shows' },
      problem: { challengeBadgeLabel: 'What was happening' },
      process: {
        implementationBadgeLabel: 'How it actually went',
        implementationSectionTitle: 'How the no-show fix came together',
      },
      results: {
        detailedResultsBadgeLabel: 'What improved',
        detailedResultsSectionTitle: 'What changed once empty chairs stopped being normal',
      },
      cta: {
        metaItems: [
          { text: 'Free 20-minute call' },
          { text: 'No pressure' },
          { text: 'Useful for busy salons' },
        ],
      },
    },
  };
}

export const salonNoShowReductionSystem: CaseStudyData = buildSalonNoShowReductionSystem();
