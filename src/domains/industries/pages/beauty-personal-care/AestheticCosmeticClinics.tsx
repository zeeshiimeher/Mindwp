import type { IndustryDetailPageData } from '@/domains/industries/types';

export const aestheticCosmeticClinicsIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Aesthetic & Cosmetic Clinics — Enquiry, Consultation, and Recall Systems',
    description:
      'How established aesthetic and cosmetic clinics handle enquiries, qualify consultations, and run treatment recall reliably.',
    canonical: '/industries/beauty-personal-care/aesthetic-cosmetic-clinics',
    openGraph: {
      title: 'Aesthetic & Cosmetic Clinics — Enquiry, Consultation, and Recall Systems',
      description: 'A considered enquiry layer for clinics that take their reputation seriously.',
    },
  },
  slug: 'aesthetic-cosmetic-clinics',
  type: 'detail',
  parentSlug: 'beauty-personal-care',
  hero: {
    badge: 'Beauty · Aesthetic Clinic',
    title: 'A long-form enquiry. [[muted:Then nothing for two days.]]',
    description:
      'Aesthetic enquiries are considered. The reader is comparing clinics, reading reviews, and looking for a clear, qualified next step. Slow first-touch quietly hands the consultation to a competitor.',
    list: [
      'Enquiries acknowledged within minutes with a clear next step',
      'Consultations held on a single calendar with reminders',
      'Treatment recalls run at the right interval per service',
    ],
  },
  industries: ['aesthetic-clinic'],
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
      title: 'Three places aesthetic-clinic enquiries usually slip',
      description: 'Considered work. Slow leaks. Higher cost per miss.',
    },
    leaks: [
      {
        id: 'first-touch',
        leak: 'First-touch reply takes a day',
        state: 'slow',
        observed:
          'A long-form enquiry lands. It sits in the desk’s inbox. By morning the reader has booked another consultation.',
      },
      {
        id: 'qualification',
        leak: 'Qualification questions go round in circles',
        state: 'risk',
        observed:
          'Three back-and-forth messages later, the consultation still isn’t booked. The thread cools.',
      },
      {
        id: 'recall',
        leak: 'Treatment recalls drift past the right interval',
        state: 'lost',
        observed:
          'A client’s last treatment was six months ago. Nothing reminds them. They book elsewhere.',
      },
    ],
  },
  leakTimeline: {
    header: {
      kicker: 'A typical day',
      title: 'How a clinic day moves',
      description: 'Considered enquiries. Quiet treatment rooms. Long admin tail.',
    },
    timeline: [
      {
        id: 'open',
        time: '9:00',
        event: 'Desk opens — overnight enquiries reviewed',
        leakRisk: 'medium',
        owner: 'Desk',
      },
      {
        id: 'morning',
        time: '10:00 — 12:30',
        event: 'Consultations and treatments',
        leakRisk: 'low',
        owner: 'Practitioner',
      },
      {
        id: 'midday',
        time: '13:00',
        event: 'Catch-up: enquiries, callbacks, paperwork',
        leakRisk: 'high',
        owner: 'Desk',
      },
      {
        id: 'afternoon',
        time: '14:00 — 17:30',
        event: 'Treatments and aftercare follow-up',
        leakRisk: 'medium',
        owner: 'Practitioner',
      },
      {
        id: 'close',
        time: '18:00',
        event: 'Close out — recalls not always scheduled',
        leakRisk: 'high',
        owner: 'Desk',
      },
    ],
  },
  beforeAfter: {
    header: {
      kicker: 'What changes',
      title: 'The clinic, before and after',
      description:
        'Same practitioners. Same standards. A different operating layer behind reception.',
    },
    before: {
      label: 'Before',
      items: [
        'Enquiries wait hours for a first reply',
        'Qualification questions sprawl across multiple messages',
        'No-shows take consultation slots without warning',
        'Recalls depend on the desk remembering',
        'Reviews trickle in only from the most enthusiastic clients',
      ],
    },
    after: {
      label: 'After',
      items: [
        'Enquiries acknowledged within minutes with a clear next step',
        'Qualification handled in a single structured exchange',
        'Two-step reminders reduce consultation no-shows',
        'Treatment recalls go out at the right interval per service',
        'Review prompts go out at the appropriate moment',
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
        piece: 'Enquiry acknowledgment with next step',
        state: 'in-place',
        owner: 'AI Lead Handling',
      },
      {
        id: 'qualification',
        piece: 'Structured qualification flow',
        state: 'planned',
        owner: 'AI Lead Handling',
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
        signalIfYou: 'see considered enquiries land overnight and go cold',
        leadingSystem: 'AI Lead Handling',
      },
      {
        id: 'qualification',
        fix: 'Run a structured qualification exchange',
        signalIfYou: 'spend three messages on every enquiry before booking',
        leadingSystem: 'AI Lead Handling',
      },
      {
        id: 'recall',
        fix: 'Run treatment recalls per service',
        signalIfYou: 'see clients drift past their normal interval',
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
        action: 'Acknowledge within 60s with consultation next step',
        owner: 'AI Lead Handling',
        channel: 'SMS / email',
      },
      {
        id: 'qualify',
        trigger: 'Qualification fields incomplete',
        action: 'Single structured follow-up to complete',
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
        action: 'Review request at the right interval',
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
    ],
  },
  relevantSystems: {
    header: {
      kicker: 'How the systems sit',
      title: 'Lead, support, optional',
      description: 'Aesthetic clinics typically lean on CRM for cycle and AI for first-touch.',
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
        why: 'Holds reminders, recalls, and link to clinic record systems.',
      },
      {
        id: 'aih',
        name: 'AI Lead Handling',
        role: 'lead',
        why: 'First-touch acknowledgment and structured qualification.',
      },
      {
        id: 'rep',
        name: 'Reputation & Reviews',
        role: 'support',
        why: 'Reviews prompt at the appropriate interval per treatment.',
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
      body: 'An aesthetic clinic with one practitioner runs five consultations and ten treatments through a week. Enquiries are acknowledged on landing. Qualification finishes inside a single exchange. Reminders reduce no-shows. Recalls go out at the right interval.',
      observedChange:
        'Before, the same week would have produced two enquiries that went cold and one no-show consultation. With the layer in place, the calendar holds itself and the desk has fewer threads to chase.',
    },
  },
  faq: {
    header: {
      kicker: 'Honest questions',
      title: 'What clinic owners usually ask first',
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
      tone: 'Direct, specific to an aesthetic clinic with considered enquiries.',
    },
  },
};
