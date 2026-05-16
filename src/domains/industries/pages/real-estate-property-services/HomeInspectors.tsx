import type { IndustryDetailPageData } from '@/domains/industries/types';

export const homeInspectorsIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Home Inspectors — Booking, Report, and Referral Systems',
    description:
      'How home inspectors hold inbound bookings from agents and buyers, deliver reports promptly, and stay top-of-mind for referral.',
    canonical: '/industries/real-estate-property-services/home-inspectors',
    openGraph: {
      title: 'Home Inspectors — Booking, Report, and Referral Systems',
      description: 'Bookings, reports, and referrals on one operating layer.',
    },
  },
  slug: 'home-inspectors',
  type: 'detail',
  parentSlug: 'real-estate-property-services',
  hero: {
    badge: 'Property · Home Inspectors',
    title: 'A Tuesday inspection. [[muted:And a phone in the field all morning.]]',
    description:
      'Inspectors are out on site. Bookings come in from agents and buyers, often urgent. The leak is between request and confirmation.',
    list: [
      'Bookings confirmed without phone tag',
      'Reports delivered with a clear next step',
      'Agent and buyer follow-ups run automatically',
    ],
  },
  industries: ['home-inspection'],
  primarySystem: 'lead-response-handling',
  supportingSystems: ['follow-up-crm', 'reputation-review-systems', 'smart-website-systems'],
  topics: ['lead-management', 'follow-up', 'review-generation', 'missed-calls'],
  faq: {
    header: {
      eyebrow: 'Honest questions',
      title: 'What inspectors usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'tools',
        question: 'We use inspection software. Do we drop it?',
        answer: 'No. The operating layer sits beside it.',
      },
      {
        id: 'agent',
        question: 'Can agents see report progress directly?',
        answer: 'Yes — they get status updates as the report moves through stages.',
      },
      {
        id: 'voice',
        question: 'Will replies sound like the inspector?',
        answer: 'Yes — written in the inspector’s voice and reviewed before launch.',
      },
      {
        id: 'price',
        question: 'How is this priced?',
        answer: 'Per build. We tell you when a smaller build (or none yet) is the right move.',
      },
    ],
  },
  cta: {
    heading: {
      eyebrow: 'Next step',
      title: 'Show us where the schedule actually leaks',
      description:
        'Tell us about a typical week. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where bookings, reports, and referrals sit today' },
      { num: '2', text: 'The system most likely to hold the worst gap first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a working inspector.',
    },
  },
};
