import type { IndustryDetailPageData } from '@/domains/industries/types';

export const smallPrivateClinicsIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Small Private Clinics — Enquiry, Consult, and Recall Systems',
    description:
      'How small private clinics — physio, allied health, podiatry, chiro — hold considered enquiries, manage consults, and run treatment recall.',
    canonical: '/industries/local-appointment-businesses/small-private-clinics',
    openGraph: {
      title: 'Small Private Clinics — Enquiry, Consult, and Recall Systems',
      description: 'Considered enquiries, consults, and recalls on one operating layer.',
    },
  },
  slug: 'small-private-clinics',
  type: 'detail',
  parentSlug: 'local-appointment-businesses',
  hero: {
    badge: 'Appointments · Private Clinics',
    title: 'A long enquiry. [[muted:And a slow reply that decides the booking.]]',
    description:
      'Patients compare clinics quietly. The first clear, calm reply usually wins the consult.',
    list: [
      'Considered enquiries acknowledged with a clear next step',
      'Consult and recall reminders run automatically',
      'Reviews prompt at the right interval for trust-led work',
    ],
  },
  industries: ['private-clinic'],
  systems: ['ai-lead-handling', 'crm-automation', 'reputation-review', 'smart-website-systems'],
  topics: ['lead-management', 'follow-up'],
  industryPattern: {
    header: {
      kicker: 'Where it leaks',
      title: 'Three places small-clinic enquiries usually slip',
      description: 'Most clinics see at least two of these.',
    },
    leaks: [
      {
        id: 'slow-reply',
        leak: 'Considered enquiries get slow replies',
        state: 'silent',
        observed: 'A patient enquires across three clinics. The first calm reply wins.',
      },
      {
        id: 'consult-noshow',
        leak: 'Consults skipped without a reminder',
        state: 'risk',
        observed: 'A booked consult doesn’t arrive. The reminder went out three days ago.',
      },
      {
        id: 'recall-drift',
        leak: 'Treatment plans drift between visits',
        state: 'lost',
        observed: 'A patient finishes session four. There’s no prompt for session five.',
      },
    ],
  },
  leakTimeline: {
    header: {
      kicker: 'A typical day',
      title: 'How a small-clinic day moves',
      description: 'Considered enquiries. Quiet rooms. Treatment-plan rhythms.',
    },
    timeline: [
      {
        id: 'open',
        time: '8:00',
        event: 'First sessions start',
        leakRisk: 'low',
        owner: 'Practitioner',
      },
      {
        id: 'morning',
        time: '9:00 — 12:00',
        event: 'Sessions back-to-back — phone goes to voicemail',
        leakRisk: 'high',
        owner: 'Practitioner',
      },
      {
        id: 'lunch',
        time: '13:00',
        event: 'Catch-up — replies sent in batch',
        leakRisk: 'medium',
        owner: 'Practitioner',
      },
      {
        id: 'afternoon',
        time: '14:00 — 17:00',
        event: 'Sessions and follow-ups',
        leakRisk: 'medium',
        owner: 'Practitioner',
      },
      {
        id: 'close',
        time: '17:30',
        event: 'Notes and admin',
        leakRisk: 'high',
        owner: 'Practitioner',
      },
    ],
  },
  beforeAfter: {
    header: {
      kicker: 'What changes',
      title: 'The clinic, before and after',
      description: 'Same practitioner. A different layer behind reception.',
    },
    before: {
      label: 'Before',
      items: [
        'Considered enquiries get slow replies',
        'Consults skipped without warning',
        'Treatment plans drift',
        'Reviews depend on the patient remembering',
        'Recall is opportunistic',
      ],
    },
    after: {
      label: 'After',
      items: [
        'Enquiries acknowledged with a clear next step within minutes',
        'Two-step reminders for each consult',
        'Treatment-plan reminders run on cadence',
        'Review prompt at the right interval',
        'Recall reminders run automatically',
      ],
    },
  },
  workbench: {
    header: {
      kicker: 'What sits on the workbench',
      title: 'The pieces that hold a clinic together',
      description: 'In place, planned, optional.',
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
        piece: 'Two-step consult reminders',
        state: 'in-place',
        owner: 'CRM & Automation',
      },
      {
        id: 'plan',
        piece: 'Treatment-plan reminders',
        state: 'in-place',
        owner: 'CRM & Automation',
      },
      { id: 'recall', piece: 'Recall rhythm', state: 'in-place', owner: 'CRM & Automation' },
      {
        id: 'review',
        piece: 'Post-visit review prompt',
        state: 'planned',
        owner: 'Reputation & Reviews',
      },
      {
        id: 'sws',
        piece: 'Booking page integration',
        state: 'optional',
        owner: 'Smart Website Systems',
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
        id: 'reply',
        fix: 'Reply faster to considered enquiries',
        signalIfYou: 'feel patients comparing clinics before booking',
        leadingSystem: 'AI Lead Handling',
      },
      {
        id: 'noshow',
        fix: 'Reduce no-shows with two-step reminders',
        signalIfYou: 'see consult cancellations late in the day',
        leadingSystem: 'CRM & Automation',
      },
      {
        id: 'plan',
        fix: 'Hold the treatment-plan rhythm',
        signalIfYou: 'see patients drop after session four',
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
        trigger: 'Enquiry submitted',
        action: 'Reply within minutes with a tailored next step',
        owner: 'AI Lead Handling',
        channel: 'SMS / email',
      },
      {
        id: 'reminder',
        trigger: '48h and 24h before consult',
        action: 'Two-step reminder with reschedule link',
        owner: 'CRM & Automation',
        channel: 'SMS',
      },
      {
        id: 'plan',
        trigger: 'Treatment plan open',
        action: 'Plan reminder at the right cadence',
        owner: 'CRM & Automation',
        channel: 'SMS',
      },
      {
        id: 'review',
        trigger: 'Plan complete',
        action: 'Review prompt at appropriate interval',
        owner: 'Reputation & Reviews',
        channel: 'SMS',
      },
      {
        id: 'recall',
        trigger: '6 months since last visit',
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
      description: 'Most clinics start with first-touch and consult reminders.',
    },
    systems: ['ai-lead-handling', 'crm-automation', 'reputation-review', 'smart-website-systems'],
    relevantSystems: [
      {
        id: 'aih',
        name: 'AI Lead Handling',
        role: 'lead',
        why: 'Considered enquiries need a calm, clear first reply.',
      },
      {
        id: 'crm',
        name: 'CRM & Automation',
        role: 'lead',
        why: 'Holds reminders and the treatment-plan rhythm.',
      },
      {
        id: 'rep',
        name: 'Reputation & Reviews',
        role: 'support',
        why: 'Reviews trigger at the right interval.',
      },
      {
        id: 'sws',
        name: 'Smart Website Systems',
        role: 'support',
        why: 'Service pages feed the same operating board.',
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
      body: 'A two-room physio clinic runs a normal week. Considered enquiries get a calm reply within minutes. Two-step reminders run before every consult. Treatment-plan reminders go out at the right cadence. Reviews trigger after plan completion.',
      observedChange:
        'Before, the same week would have had three slow enquiry replies, two no-shows, and a couple of plan drop-offs. With the layer in place, the diary holds together and the practitioner spends less time chasing.',
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
        question: 'We use a clinic-management tool. Do we drop it?',
        answer: 'Usually no. The operating layer sits beside it and covers the gaps it does not.',
      },
      {
        id: 'compliance',
        question: 'How does this work with our consent and record-keeping?',
        answer:
          'It does not replace clinical record systems. It links so the operating board sees status without duplicating data.',
      },
      {
        id: 'reminders',
        question: 'Will reminders feel pushy to patients?',
        answer: 'Set at the right cadence, no. We tune to your treatment mix.',
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
      title: 'Show us where the diary actually leaks',
      description:
        'Tell us about a typical week. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where enquiries, consults, and plans sit today' },
      { num: '2', text: 'The system most likely to hold the worst gap first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a working private clinic.',
    },
  },
};
