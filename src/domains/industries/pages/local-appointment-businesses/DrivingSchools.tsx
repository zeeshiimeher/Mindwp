import type { IndustryDetailPageData } from '@/domains/industries/types';

export const drivingSchoolsIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Driving Schools — Booking, Test-Prep, and Lesson-Block Systems',
    description:
      'How driving schools hold inbound bookings across multiple instructors, manage lesson blocks, and follow up around the test.',
    canonical: '/industries/local-appointment-businesses/driving-schools',
    openGraph: {
      title: 'Driving Schools — Booking, Test-Prep, and Lesson-Block Systems',
      description: 'Bookings, blocks, and test-prep prompts on one operating layer.',
    },
  },
  slug: 'driving-schools',
  type: 'detail',
  parentSlug: 'local-appointment-businesses',
  hero: {
    badge: 'Appointments · Driving Schools',
    title: 'A new learner. [[muted:And no one to answer the phone mid-lesson.]]',
    description:
      'The instructors are out on the road. The phone goes to voicemail. Most enquiries don’t leave one — they call the next school.',
    list: [
      'Calls during lessons get an instant text-back',
      'Lesson blocks are reminded and rebooked',
      'Test-prep follow-ups go out at the right point',
    ],
  },
  industries: ['driving-school'],
  systems: ['ai-lead-handling', 'crm-automation', 'reputation-review', 'smart-website-systems'],
  topics: ['lead-management', 'follow-up', 'missed-calls'],
  faq: {
    header: {
      eyebrow: 'Honest questions',
      title: 'What school owners usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'tools',
        question: 'We use a booking app. Do we drop it?',
        answer: 'Usually no. The operating layer sits beside it and covers the gaps it does not.',
      },
      {
        id: 'instructors',
        question: 'Does each instructor see only their own learners?',
        answer: 'Yes — the board respects ownership. Owner sees everything.',
      },
      {
        id: 'sms',
        question: 'Will learners feel spammed?',
        answer: 'Not at the cadence we set. We tune the rhythm to your block length.',
      },
      {
        id: 'price',
        question: 'How is this priced?',
        answer:
          'Per build, not per feature. We tell you when a smaller build (or none yet) is the right move.',
      },
    ],
  },
  cta: {
    heading: {
      eyebrow: 'Next step',
      title: 'Show us where the diary actually leaks',
      description:
        'Tell us about a typical week. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where calls, blocks, and test follow-ups sit today' },
      { num: '2', text: 'The system most likely to hold the worst gap first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a school with instructors out on the road.',
    },
  },
};
