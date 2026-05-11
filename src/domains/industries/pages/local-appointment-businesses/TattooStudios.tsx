import type { IndustryDetailPageData } from '@/domains/industries/types';

export const tattooStudiosIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Tattoo Studios — Enquiry, Deposit, and Session Systems',
    description:
      'How tattoo studios hold artist enquiries, manage deposits, and run multi-session bookings without the front desk drowning in DMs.',
    canonical: '/industries/local-appointment-businesses/tattoo-studios',
    openGraph: {
      title: 'Tattoo Studios — Enquiry, Deposit, and Session Systems',
      description: 'Enquiries, deposits, and sessions on one operating layer.',
    },
  },
  slug: 'tattoo-studios',
  type: 'detail',
  parentSlug: 'local-appointment-businesses',
  hero: {
    badge: 'Appointments · Tattoo Studios',
    title: 'A queue of DMs. [[muted:And the artist is mid-line.]]',
    description:
      'The studio runs on artist enquiries, deposits, and multi-session bookings. The desk drowns in DMs. The artist works.',
    list: [
      'Enquiries acknowledged with the artist’s next opening',
      'Deposit and session reminders run automatically',
      'Reviews and rebook prompts run after the heal-check',
    ],
  },
  industries: ['tattoo-studio'],
  systems: ['ai-lead-handling', 'crm-automation', 'reputation-review', 'smart-website-systems'],
  topics: ['lead-management', 'follow-up', 'review-generation'],
  industryPattern: {
    header: {
      kicker: 'Where it leaks',
      title: 'Three places tattoo enquiries usually slip',
      description: 'Most studios see at least two of these.',
    },
    leaks: [
      {
        id: 'dm-pile',
        leak: 'DM and form enquiries pile up',
        state: 'silent',
        observed: 'A new client messages on a Tuesday. The artist sees it the following Sunday.',
      },
      {
        id: 'no-deposit',
        leak: 'Deposit not taken, no booking confirmed',
        state: 'risk',
        observed: 'A consult happens. Nothing prompts the deposit. The slot doesn’t lock.',
      },
      {
        id: 'no-rebook',
        leak: 'Multi-session work drifts without the next booking',
        state: 'lost',
        observed: 'A long piece spans four sessions. Session three doesn’t prompt session four.',
      },
    ],
  },
  leakTimeline: {
    header: {
      kicker: 'A typical day',
      title: 'How a tattoo-studio day moves',
      description: 'Long sessions. Quiet front desk. Big DM volume.',
    },
    timeline: [
      {
        id: 'open',
        time: '11:00',
        event: 'Doors open — first session set up',
        leakRisk: 'low',
        owner: 'Artist',
      },
      {
        id: 'morning',
        time: '12:00 — 16:00',
        event: 'Long session in progress',
        leakRisk: 'high',
        owner: 'Artist',
      },
      {
        id: 'midday',
        time: '16:00',
        event: 'Break — DMs glanced at',
        leakRisk: 'medium',
        owner: 'Artist',
      },
      {
        id: 'evening',
        time: '17:00 — 21:00',
        event: 'Second session',
        leakRisk: 'high',
        owner: 'Artist',
      },
      {
        id: 'close',
        time: '21:30',
        event: 'Close out — DMs piled up',
        leakRisk: 'high',
        owner: 'Artist',
      },
    ],
  },
  beforeAfter: {
    header: {
      kicker: 'What changes',
      title: 'The studio, before and after',
      description: 'Same artists. A different layer behind the DMs.',
    },
    before: {
      label: 'Before',
      items: [
        'DMs go unread for days',
        'Deposits not taken on time',
        'Multi-session bookings drift',
        'Reviews depend on the client remembering',
        'Heal-checks slip',
      ],
    },
    after: {
      label: 'After',
      items: [
        'Enquiries acknowledged with the artist’s next opening',
        'Deposit prompt with one tap to pay',
        'Session-end rebook prompts run',
        'Review prompt after heal-check',
        'Heal-check reminder runs automatically',
      ],
    },
  },
  workbench: {
    header: {
      kicker: 'What sits on the workbench',
      title: 'The pieces that hold a studio together',
      description: 'In place, planned, optional.',
    },
    workbench: [
      {
        id: 'first-touch',
        piece: 'DM / form acknowledgment',
        state: 'in-place',
        owner: 'AI Lead Handling',
      },
      { id: 'deposit', piece: 'Deposit prompt', state: 'in-place', owner: 'CRM & Automation' },
      { id: 'reminders', piece: 'Session reminders', state: 'in-place', owner: 'CRM & Automation' },
      {
        id: 'rebook',
        piece: 'Session-end rebook prompts',
        state: 'in-place',
        owner: 'CRM & Automation',
      },
      { id: 'heal', piece: 'Heal-check reminder', state: 'planned', owner: 'CRM & Automation' },
      {
        id: 'review',
        piece: 'Post-heal review prompt',
        state: 'planned',
        owner: 'Reputation & Reviews',
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
        id: 'dm',
        fix: 'Acknowledge enquiries instantly',
        signalIfYou: 'feel the DM pile growing past control',
        leadingSystem: 'AI Lead Handling',
      },
      {
        id: 'deposit',
        fix: 'Take deposits without manual chasing',
        signalIfYou: 'see consults that don’t become bookings',
        leadingSystem: 'CRM & Automation',
      },
      {
        id: 'rebook',
        fix: 'Run session-end rebook prompts',
        signalIfYou: 'have multi-session work that drifts',
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
        id: 'dm',
        trigger: 'Enquiry submitted',
        action: 'Reply with artist availability and intake link',
        owner: 'AI Lead Handling',
        channel: 'SMS / DM',
      },
      {
        id: 'deposit',
        trigger: 'Consult completed',
        action: 'Deposit prompt with one-tap pay',
        owner: 'CRM & Automation',
        channel: 'SMS',
      },
      {
        id: 'reminder',
        trigger: '48h and 24h before session',
        action: 'Two-step reminder',
        owner: 'CRM & Automation',
        channel: 'SMS',
      },
      {
        id: 'rebook',
        trigger: 'Session marked complete',
        action: 'Next-session rebook prompt',
        owner: 'CRM & Automation',
        channel: 'SMS',
      },
      {
        id: 'heal',
        trigger: '14 days after session',
        action: 'Heal-check reminder + review prompt',
        owner: 'Reputation & Reviews',
        channel: 'SMS',
      },
    ],
  },
  relevantSystems: {
    header: {
      kicker: 'How the systems sit',
      title: 'Lead, support, optional',
      description: 'Most studios start with first-touch and deposit.',
    },
    systems: ['ai-lead-handling', 'crm-automation', 'reputation-review', 'smart-website-systems'],
    relevantSystems: [
      { id: 'aih', name: 'AI Lead Handling', role: 'lead', why: 'Catches DM and form pile-up.' },
      {
        id: 'crm',
        name: 'CRM & Automation',
        role: 'lead',
        why: 'Holds deposits, reminders, and session rhythm.',
      },
      {
        id: 'rep',
        name: 'Reputation & Reviews',
        role: 'support',
        why: 'Reviews trigger after heal-check.',
      },
      {
        id: 'sws',
        name: 'Smart Website Systems',
        role: 'support',
        why: 'Artist pages feed the same operating board.',
      },
      {
        id: 'lsa',
        name: 'Local SEO Authority',
        role: 'optional',
        why: 'Useful for local discovery when needed.',
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
      body: 'A studio with three resident artists runs a normal week. DM enquiries get acknowledged with availability. Deposits prompt after consult. Session reminders go out. Heal-check and review prompts run after each session.',
      observedChange:
        'Before, the same week would have produced a backed-up DM pile, two consults that didn’t book, and a quiet review queue. With the layer in place, the calendar holds and the artists keep working.',
    },
  },
  faq: {
    header: {
      kicker: 'Honest questions',
      title: 'What studio owners usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'artist-control',
        question: 'Does each artist keep control of their bookings?',
        answer: 'Yes. The board respects per-artist ownership.',
      },
      {
        id: 'tools',
        question: 'We use a booking tool. Do we drop it?',
        answer: 'Usually no. The operating layer sits beside it.',
      },
      {
        id: 'voice',
        question: 'Will replies sound like the studio?',
        answer: 'Yes — replies are written in the studio’s voice and reviewed before launch.',
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
      title: 'Show us where the calendar actually leaks',
      description:
        'Tell us about a typical week. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where DMs, deposits, and sessions sit today' },
      { num: '2', text: 'The system most likely to hold the worst gap first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a working tattoo studio.',
    },
  },
};
