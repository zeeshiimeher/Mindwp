import type { IndustryDetailPageData } from '@/domains/industries/types';

export const dentalClinicsIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Dental Clinics — Booking, Recall, and No-Show Systems',
    description:
      'How dental clinics hold inbound bookings, manage hygiene recalls, and reduce no-show drift across the chair.',
    canonical: '/industries/local-appointment-businesses/dental-clinics',
    openGraph: {
      title: 'Dental Clinics — Booking, Recall, and No-Show Systems',
      description: 'Bookings, recalls, and reminders on one operating layer.',
    },
  },
  slug: 'dental-clinics',
  type: 'detail',
  parentSlug: 'local-appointment-businesses',
  hero: {
    badge: 'Appointments · Dental',
    title: 'A six-month recall. [[muted:And nothing reminding the patient until next year.]]',
    description:
      'Dental work runs on recall. The chair stays full when the recall rhythm runs cleanly — and goes quiet when it doesn’t.',
    list: [
      'Bookings confirmed reliably day or night',
      'Hygiene recalls run at the right interval',
      'Two-step reminders reduce no-show drift',
    ],
  },
  industries: ['dental-clinic'],
  systems: ['crm-automation', 'ai-lead-handling', 'reputation-review', 'smart-website-systems'],
  topics: ['lead-management', 'follow-up', 'review-generation'],
  industryPattern: {
    header: {
      kicker: 'Where it leaks',
      title: 'Three places dental enquiries usually slip',
      description: 'Most clinics will see at least two of these.',
    },
    leaks: [
      {
        id: 'recall-drift',
        leak: 'Recalls drift past the right interval',
        state: 'lost',
        observed:
          'A patient’s six-month is due. Nothing reminds them. Eighteen months pass before they book again.',
      },
      {
        id: 'no-show',
        leak: 'No-shows leave the chair empty',
        state: 'risk',
        observed:
          'A booked patient doesn’t arrive. The reminder went out three days ago. The chair sits idle.',
      },
      {
        id: 'after-hours',
        leak: 'After-hours enquiries sit until morning',
        state: 'silent',
        observed:
          'A new patient enquires at 8pm. Reception sees it the next morning. The slot has already gone elsewhere.',
      },
    ],
  },
  leakTimeline: {
    header: {
      kicker: 'A typical day',
      title: 'How a dental day moves',
      description: 'Considered enquiries. Quiet rooms. Long recall cycles.',
    },
    timeline: [
      {
        id: 'open',
        time: '8:00',
        event: 'Doors open — first appointments',
        leakRisk: 'low',
        owner: 'Reception',
      },
      {
        id: 'morning',
        time: '9:00 — 12:00',
        event: 'Appointments stack up — phone covers itself when it can',
        leakRisk: 'medium',
        owner: 'Reception',
      },
      {
        id: 'lunch',
        time: '13:00',
        event: 'Catch-up: callbacks and admin',
        leakRisk: 'high',
        owner: 'Reception',
      },
      {
        id: 'afternoon',
        time: '14:00 — 17:00',
        event: 'Appointments and aftercare',
        leakRisk: 'medium',
        owner: 'Practitioner',
      },
      {
        id: 'close',
        time: '17:30',
        event: 'Close out — recalls not always scheduled',
        leakRisk: 'high',
        owner: 'Reception',
      },
    ],
  },
  beforeAfter: {
    header: {
      kicker: 'What changes',
      title: 'The clinic, before and after',
      description: 'Same practitioners. A different layer behind reception.',
    },
    before: {
      label: 'Before',
      items: [
        'After-hours enquiries sit until morning',
        'No-shows take chair time without warning',
        'Recalls depend on reception remembering',
        'Reviews depend on the patient remembering',
        'Treatment plans drift between visits',
      ],
    },
    after: {
      label: 'After',
      items: [
        'Enquiries acknowledged within minutes with a clear next step',
        'Two-step reminders reduce no-show drift',
        'Recalls go out automatically at the right interval',
        'Review prompt goes out at the appropriate moment',
        'Treatment-plan reminders run alongside the recall rhythm',
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
      },
      {
        id: 'reminders',
        piece: 'Two-step reminders',
        state: 'in-place',
        owner: 'CRM & Automation',
      },
      {
        id: 'recall',
        piece: 'Hygiene recall rhythm',
        state: 'in-place',
        owner: 'CRM & Automation',
      },
      {
        id: 'reviews',
        piece: 'Post-visit review prompt',
        state: 'in-place',
        owner: 'Reputation & Reviews',
      },
      {
        id: 'plan-reminders',
        piece: 'Treatment-plan reminders',
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
        id: 'recall',
        fix: 'Run hygiene recalls at the right interval',
        signalIfYou: 'see patients drift past their six-month',
        leadingSystem: 'CRM & Automation',
      },
      {
        id: 'noshow',
        fix: 'Reduce no-show drift with two-step reminders',
        signalIfYou: 'lose chair time most weeks to no-shows',
        leadingSystem: 'CRM & Automation',
      },
      {
        id: 'after-hours',
        fix: 'Acknowledge after-hours enquiries instantly',
        signalIfYou: 'see new patients enquire overnight and go cold',
        leadingSystem: 'AI Lead Handling',
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
        action: 'Acknowledge within 60s with booking link',
        owner: 'AI Lead Handling',
        channel: 'SMS / email',
      },
      {
        id: 'reminder',
        trigger: '48h and 24h before appointment',
        action: 'Confirmation reminders with reschedule option',
        owner: 'CRM & Automation',
        channel: 'SMS',
      },
      {
        id: 'review',
        trigger: 'Visit marked complete',
        action: 'Review request at the appropriate interval',
        owner: 'Reputation & Reviews',
        channel: 'SMS',
      },
      {
        id: 'recall',
        trigger: '5 months since last hygiene visit',
        action: 'Recall reminder with rebook link',
        owner: 'CRM & Automation',
        channel: 'SMS / email',
      },
      {
        id: 'plan',
        trigger: 'Open treatment plan unscheduled',
        action: 'Plan reminder with booking link',
        owner: 'CRM & Automation',
        channel: 'SMS',
      },
    ],
  },
  relevantSystems: {
    header: {
      kicker: 'How the systems sit',
      title: 'Lead, support, optional',
      description: 'Most dental clinics start with recall and reminders.',
    },
    systems: ['crm-automation', 'ai-lead-handling', 'reputation-review', 'smart-website-systems'],
    relevantSystems: [
      {
        id: 'crm',
        name: 'CRM & Automation',
        role: 'lead',
        why: 'Holds reminders and the recall rhythm on one board.',
      },
      {
        id: 'aih',
        name: 'AI Lead Handling',
        role: 'lead',
        why: 'Catches after-hours enquiries.',
      },
      {
        id: 'rep',
        name: 'Reputation & Reviews',
        role: 'support',
        why: 'Reviews prompt at the right interval.',
      },
      {
        id: 'sws',
        name: 'Smart Website Systems',
        role: 'support',
        why: 'Booking pages feed the same operating board.',
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
      body: 'A two-chair clinic runs a normal week. Recalls go out at the right interval. Two-step reminders the day before reduce no-show drift. After-hours enquiries are acknowledged on landing. Reviews prompt after each visit.',
      observedChange:
        'Before, the same week would have had two voicemails to chase, one no-show, and three patients past recall. With the layer in place, the chair stays busier and the desk has fewer threads to follow.',
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
        id: 'tools',
        question: 'We use a clinic-management platform. Do we drop it?',
        answer: 'Usually no. The operating layer sits beside it and covers the gaps it does not.',
      },
      {
        id: 'compliance',
        question: 'How does this work with our compliance and consent processes?',
        answer:
          'It does not replace your compliance tools. It links to your existing record system so the operating board can see status without duplicating data.',
      },
      {
        id: 'reminders',
        question: 'Will reminders feel pushy to patients?',
        answer: 'Set at the right cadence, no. We tune the rhythm to your service mix.',
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
      title: 'Show us where the chair actually leaks',
      description:
        'Tell us about a typical week. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where bookings, recalls, and no-shows sit today' },
      { num: '2', text: 'The system most likely to hold the worst gap first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a working clinic with a real recall rhythm.',
    },
  },
};
