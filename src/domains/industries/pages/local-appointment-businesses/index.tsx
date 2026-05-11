import type { IndustryCategoryPageData } from '@/domains/industries/types';

export const localAppointmentBusinessesIndustryPageData: IndustryCategoryPageData = {
  seo: {
    title: 'Local Appointment Businesses — Booking, Reminder, and Recall Systems',
    description:
      'How appointment-based local businesses — clinics, schools, repair shops, studios — hold bookings, reduce no-shows, and bring customers back at the right interval.',
    canonical: '/industries/local-appointment-businesses',
    openGraph: {
      title: 'Local Appointment Businesses — Booking, Reminder, and Recall Systems',
      description:
        'Where the appointment day leaks and what holds it across five operating shapes.',
    },
  },
  slug: 'local-appointment-businesses',
  type: 'category',
  category: 'local-appointment-businesses',
  hero: {
    badge: 'Industries · Appointment Businesses',
    title: 'A diary that fills itself. [[muted:And a phone that doesn’t answer itself.]]',
    description:
      'Appointment-based businesses share one shape: the diary fills, runs, and turns over. The leaks live around the diary — calls, reminders, recalls, reviews.',
    list: [
      'Inbound enquiries acknowledged inside two minutes',
      'Two-step reminders reduce no-show drift',
      'Recall and review rhythms run on cadence',
    ],
  },
  industries: ['dental-clinic', 'driving-school', 'repair-shop', 'private-clinic', 'tattoo-studio'],
  systems: ['crm-automation', 'ai-lead-handling', 'reputation-review', 'smart-website-systems'],
  topics: ['lead-management', 'follow-up', 'review-generation', 'missed-calls'],
  faq: {
    header: {
      kicker: 'Honest questions',
      title: 'What appointment operators usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'fit',
        question: 'Is this the same build for every appointment business?',
        answer:
          'No. The shape is similar — booking, service, recall. The lead system differs by operating shape.',
      },
      {
        id: 'starting',
        question: 'Where do most operators actually start?',
        answer:
          'Where the leak hurts most. For most, that is busy-desk call coverage plus reminders.',
      },
      {
        id: 'tools',
        question: 'We already use a booking tool. Do we drop it?',
        answer: 'Usually no. The operating layer sits beside it.',
      },
      {
        id: 'price',
        question: 'How is this priced?',
        answer: 'Per build. We tell you when a build is not the right move yet.',
      },
    ],
  },
  cta: {
    heading: {
      kicker: 'Next step',
      title: 'Show us where the diary actually leaks',
      description:
        'Tell us about a typical week. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where bookings, recalls, and reviews sit today' },
      { num: '2', text: 'The system most likely to hold the worst gap first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to an appointment-based operator with a real working week.',
    },
  },
};
