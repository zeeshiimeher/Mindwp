import type { IndustryDetailPageData } from '@/domains/industries/types';

export const landscapingCompaniesIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Landscaping Companies — Enquiry & Follow-up Systems',
    description:
      'How landscaping companies hold quote enquiries, site-visit bookings, and seasonal follow-up without losing them between calls and crews.',
    canonical: '/industries/home-services/landscaping-companies',
    openGraph: {
      title: 'Landscaping Companies — Enquiry & Follow-up Systems',
      description:
        'Where quote requests slip, why callbacks miss, and what changes when the working day has clear ownership.',
    },
  },
  slug: 'landscaping-companies',
  type: 'detail',
  parentSlug: 'home-services',
  hero: {
    badge: 'Home Services · Landscaping',
    title: 'The phone rings between hedge cuts. [[muted:Most callbacks never go out.]]',
    description:
      'A quote request lands while the crew is at a job. By the time the truck is back on the road, the enquiry is two missed calls and a website form nobody opened.',
    list: [
      'Quote requests held the moment they land',
      'Site-visit bookings written into the day',
      'Seasonal follow-up that does not depend on memory',
    ],
  },
  industries: ['landscaping'],
  systems: [
    'smart-website-systems',
    'ai-lead-handling',
    'crm-automation',
    'reputation-review',
    'local-seo-authority',
  ],
  topics: ['lead-management', 'client-reactivation', 'review-generation'],
  faq: {
    header: {
      kicker: 'Honest questions',
      title: 'What landscaping operators usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'where-to-start',
        question: 'We are busy in season. Can this even start in spring?',
        answer:
          'Yes. The first phase is the missed-call recovery and acknowledgement layer. It needs almost nothing from the crew and runs in the background while you keep working.',
      },
      {
        id: 'crm',
        question: 'We already use a CRM that we half-fill in. Does this replace it?',
        answer:
          'Often it replaces it. Sometimes the existing tool stays and the work is rebuilt around it. The decision happens after we look at what the crew actually does.',
      },
      {
        id: 'reviews',
        question: 'We don’t want to spam clients with review requests.',
        answer:
          'Neither do we. The request triggers once, after sign-off, in a quiet form. If they don’t respond, no chase.',
      },
      {
        id: 'seasonal',
        question: 'Will old clients feel marketed at?',
        answer:
          'Only if the message is wrong. The seasonal re-contact is a single, plainly written message — no offers, no buttons, no countdowns. It either lands or it doesn’t.',
      },
    ],
  },
  cta: {
    heading: {
      kicker: 'Next step',
      title: 'Show us where landscaping enquiries actually slip',
      description:
        'Tell us what happens between the call coming in and the quote going out. We will read it back to you and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where calls and forms land today' },
      { num: '2', text: 'The single system most likely to fix the first leak' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Quiet, direct, specific to how the season runs for your crew.',
    },
  },
};
