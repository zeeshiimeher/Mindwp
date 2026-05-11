import type { IndustryDetailPageData } from '@/domains/industries/types';

export const smallMedSpasIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Small Med Spas — Consultation, Booking, and Recall Systems',
    description:
      'How small med spas hold inbound enquiries, manage consultations, and keep treatment recalls on a steady rhythm.',
    canonical: '/industries/beauty-personal-care/small-med-spas',
    openGraph: {
      title: 'Small Med Spas — Consultation, Booking, and Recall Systems',
      description: 'Enquiries, consultations, and recall rhythm on one operating layer.',
    },
  },
  slug: 'small-med-spas',
  type: 'detail',
  parentSlug: 'beauty-personal-care',
  hero: {
    badge: 'Beauty · Med Spa',
    title: 'A consultation enquiry. [[muted:And a question about whether they’re a fit.]]',
    description:
      'Med spa work is considered. Clients ask before they book. The leak is the gap between a question and a clear, qualified next step.',
    list: [
      'Enquiries acknowledged with a clear next step',
      'Consultations booked into a single calendar',
      'Recalls run at the right interval per treatment',
    ],
  },
  industries: ['med-spa'],
  systems: [
    'crm-automation',
    'ai-lead-handling',
    'reputation-review',
    'smart-website-systems',
    'local-seo-authority',
  ],
  topics: ['lead-management', 'follow-up', 'review-generation'],
  industryPattern: {
    header: {
      kicker: 'Where it leaks',
      title: 'Three places med-spa enquiries usually slip',
      description: 'Considered work means slow leaks. They cost more per miss.',
    },
    leaks: [
      {
        id: 'first-touch',
        leak: 'First-touch reply takes hours',
        state: 'slow',
        observed:
          'A consultation enquiry lands. The desk gets to it after the day’s appointments. The client has already enquired with two other clinics.',
      },
      {
        id: 'consult-noshow',
        leak: 'Consultations no-show without warning',
        state: 'risk',
        observed:
          'A booked consultation doesn’t arrive. The slot is gone. No reminder went out the day before.',
      },
      {
        id: 'recall',
        leak: 'Treatment recalls drift past the right interval',
        state: 'lost',
        observed:
          'A client’s last treatment was four months ago. Nothing reminds them. They book elsewhere.',
      },
    ],
  },
  leakTimeline: {
    header: {
      kicker: 'A typical day',
      title: 'How a small med-spa day moves',
      description: 'Considered enquiries. Quiet treatment rooms. The leaks live between the two.',
    },
    timeline: [
      {
        id: 'open',
        time: '9:30',
        event: 'Doors open — desk starts overnight enquiries',
        leakRisk: 'medium',
        owner: 'Desk',
      },
      {
        id: 'morning',
        time: '10:00 — 12:00',
        event: 'Treatments and consultations',
        leakRisk: 'low',
        owner: 'Practitioner',
      },
      {
        id: 'lunch',
        time: '13:00',
        event: 'Catch-up: enquiries, callbacks, paperwork',
        leakRisk: 'high',
        owner: 'Desk',
      },
      {
        id: 'afternoon',
        time: '14:00 — 17:00',
        event: 'Treatments and post-treatment care notes',
        leakRisk: 'medium',
        owner: 'Practitioner',
      },
      {
        id: 'close',
        time: '17:00 — 18:00',
        event: 'Close out — recalls not scheduled',
        leakRisk: 'high',
        owner: 'Desk',
      },
    ],
  },
  beforeAfter: {
    header: {
      kicker: 'What changes',
      title: 'The clinic, before and after',
      description: 'Same practitioners. Same treatments. A different layer behind reception.',
    },
    before: {
      label: 'Before',
      items: [
        'Enquiries wait hours for a first reply',
        'No-shows take consultation slots without warning',
        'Recalls depend on the desk remembering',
        'Reviews happen only when the client thinks of it',
        'Records and consents live in scattered places',
      ],
    },
    after: {
      label: 'After',
      items: [
        'Enquiries acknowledged within minutes with a clear next step',
        'Two-step reminders reduce consultation no-shows',
        'Treatment recalls go out at the right interval per service',
        'Review request triggered post-treatment when appropriate',
        'Records and consents linked to the operating board',
      ],
    },
  },
  workbench: {
    header: {
      kicker: 'What sits on the workbench',
      title: 'The pieces that hold the day together',
      description: 'What is in place, what is planned, and what is optional.',
    },
    workbench: [
      {
        id: 'first-touch',
        piece: 'Enquiry acknowledgment',
        state: 'in-place',
        owner: 'AI Lead Handling',
        note: 'Acknowledges the enquiry and sets the next-step expectation.',
      },
      {
        id: 'reminders',
        piece: 'Two-step reminders',
        state: 'in-place',
        owner: 'CRM & Automation',
      },
      {
        id: 'recall',
        piece: 'Treatment recall rhythm',
        state: 'planned',
        owner: 'CRM & Automation',
      },
      {
        id: 'reviews',
        piece: 'Post-treatment review prompt',
        state: 'in-place',
        owner: 'Reputation & Reviews',
      },
      {
        id: 'records',
        piece: 'Consent and record links',
        state: 'planned',
        owner: 'CRM & Automation',
      },
      {
        id: 'service-area',
        piece: 'Service-area visibility',
        state: 'optional',
        owner: 'Local SEO Authority',
      },
    ],
  },
  startingPoints: {
    header: {
      kicker: 'Where to start',
      title: 'Three signals, three different first systems',
      description: 'The leak you actually have decides the first move.',
    },
    startingPoints: [
      {
        id: 'first-touch',
        fix: 'Acknowledge enquiries within minutes',
        signalIfYou: 'see enquiries land overnight and go cold by morning',
        leadingSystem: 'AI Lead Handling',
      },
      {
        id: 'recall',
        fix: 'Run treatment recalls per service',
        signalIfYou: 'see clients drift past their normal interval',
        leadingSystem: 'CRM & Automation',
      },
      {
        id: 'noshow',
        fix: 'Reduce consultation no-shows with two-step reminders',
        signalIfYou: 'lose consultation slots most weeks to no-shows',
        leadingSystem: 'CRM & Automation',
      },
    ],
  },
  workflowExamples: {
    header: {
      kicker: 'How a few moments are handled',
      title: 'The work the system does without anyone watching',
      description: 'Plain triggers, plain actions, named owners.',
    },
    workflow: [
      {
        id: 'enquiry',
        trigger: 'Enquiry form submitted',
        action: 'Acknowledge within 60s with consultation booking link',
        owner: 'AI Lead Handling',
        channel: 'SMS / email',
      },
      {
        id: 'reminder',
        trigger: '48h and 24h before consultation',
        action: 'Confirmation reminders with reschedule option',
        owner: 'CRM & Automation',
        channel: 'SMS',
      },
      {
        id: 'review',
        trigger: 'Treatment marked complete (where appropriate)',
        action: 'Review request sent at the right interval',
        owner: 'Reputation & Reviews',
        channel: 'SMS',
      },
      {
        id: 'recall',
        trigger: 'Service-specific recall interval',
        action: 'Recall reminder with rebook link',
        owner: 'CRM & Automation',
        channel: 'SMS / email',
      },
      {
        id: 'lapsed',
        trigger: '6 months since last treatment',
        action: 'Soft re-engagement message',
        owner: 'CRM & Automation',
        channel: 'SMS / email',
      },
    ],
  },
  relevantSystems: {
    header: {
      kicker: 'How the systems sit',
      title: 'Lead, support, optional',
      description: 'Most med spas lean on CRM for cycle and AI for first-touch.',
    },
    systems: [
      'crm-automation',
      'ai-lead-handling',
      'reputation-review',
      'smart-website-systems',
      'local-seo-authority',
    ],
    relevantSystems: [
      {
        id: 'crm',
        name: 'CRM & Automation',
        role: 'lead',
        why: 'Holds reminders, recalls, and consent record links on one board.',
      },
      {
        id: 'aih',
        name: 'AI Lead Handling',
        role: 'lead',
        why: 'First-touch acknowledgment for considered enquiries.',
      },
      {
        id: 'rep',
        name: 'Reputation & Reviews',
        role: 'support',
        why: 'Reviews prompt at the right interval per treatment.',
      },
      {
        id: 'sws',
        name: 'Smart Website Systems',
        role: 'support',
        why: 'Consultation booking pages feed the same operating board.',
      },
      {
        id: 'lsa',
        name: 'Local SEO Authority',
        role: 'optional',
        why: 'Useful when local discovery is the bottleneck.',
      },
    ],
  },
  scenario: {
    header: {
      kicker: 'A realistic scenario',
      title: 'A week with the layer in place',
      description: 'Illustrative. No fabricated client. No promised result.',
    },
    scenario: {
      kind: 'scenario',
      label: 'Illustrative scenario',
      body: 'A small med spa with one practitioner runs four consultations and twelve treatments through a week. Enquiries are acknowledged on landing. Two-step reminders reduce no-shows. Recalls go out at the right interval per service. Reviews prompt where appropriate.',
      observedChange:
        'Before, the same week would have produced two enquiries that went cold and one no-show consultation. With the layer in place, the calendar holds itself and the desk has fewer threads to chase.',
    },
  },
  faq: {
    header: {
      kicker: 'Honest questions',
      title: 'What med-spa owners usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'compliance',
        question: 'How does this work alongside our compliance and consent processes?',
        answer:
          'It does not replace your compliance tools. It links to your existing record system so the operating board can see status without duplicating data.',
      },
      {
        id: 'tools',
        question: 'We use a clinic-management platform. Do we drop it?',
        answer: 'Usually no. The operating layer sits beside it and covers the gaps it does not.',
      },
      {
        id: 'tone',
        question: 'Will the messaging match our brand tone?',
        answer: 'Yes. Templates are written in your voice, not generic.',
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
      kicker: 'Next step',
      title: 'Show us where the clinic actually leaks',
      description:
        'Tell us about a typical week. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where enquiries and recalls sit today' },
      { num: '2', text: 'The system most likely to hold the worst gap first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a small med-spa operator with considered enquiries.',
    },
  },
};
