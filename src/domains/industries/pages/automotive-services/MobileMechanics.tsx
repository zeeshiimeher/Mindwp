import type { IndustryDetailPageData } from '@/domains/industries/types';

export const mobileMechanicsIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Mobile Mechanics — Dispatch, Routing, and Roadside Systems',
    description:
      'How mobile mechanics hold inbound calls, route to the right job, and keep follow-up moving without an office team.',
    canonical: '/industries/automotive-services/mobile-mechanics',
    openGraph: {
      title: 'Mobile Mechanics — Dispatch, Routing, and Roadside Systems',
      description: 'A one-or-two person operation with no front desk needs the layer most.',
    },
  },
  slug: 'mobile-mechanics',
  type: 'detail',
  parentSlug: 'automotive-services',
  hero: {
    badge: 'Automotive · Mobile Mechanics',
    title: 'You’re under a bonnet on a verge. [[muted:The phone is in the van.]]',
    description:
      'There is no front desk. There is no office team. The customer expects an answer; the next job depends on the current one staying on track. The leaks are obvious — and so is the fix.',
    list: [
      'Calls answered while you are hands-on',
      'New jobs slotted by location, not memory',
      'Follow-up that does not depend on remembering',
    ],
  },
  industries: ['mobile-mechanic'],
  systems: [
    'ai-lead-handling',
    'crm-automation',
    'smart-website-systems',
    'reputation-review',
    'local-seo-authority',
  ],
  topics: ['lead-management', 'follow-up', 'review-generation'],
  industryPattern: {
    header: {
      kicker: 'Where it leaks',
      title: 'Three places mobile-mechanic enquiries usually slip',
      description: 'When you are the office and the technician, every gap is the same gap.',
    },
    leaks: [
      {
        id: 'mid-job',
        leak: 'Calls hit voicemail while you are mid-job',
        state: 'silent',
        observed:
          'You are under the bonnet. Three rings, voicemail. The next caller is already booked with someone else.',
      },
      {
        id: 'routing',
        leak: 'New jobs accepted without checking the route',
        state: 'risk',
        observed:
          'A booking gets taken at the end of the day. Then you realise it’s 40km the wrong way for tomorrow’s schedule.',
      },
      {
        id: 'no-followup',
        leak: 'Follow-up depends on remembering',
        state: 'lost',
        observed:
          'A repeat customer’s service interval comes up. Nothing reminds them. Nothing reminds you. The job goes elsewhere.',
      },
    ],
  },
  leakTimeline: {
    header: {
      kicker: 'A typical day on the road',
      title: 'How a mobile-mechanic day moves',
      description: 'No front desk. Every gap is one you’d normally cover yourself.',
    },
    timeline: [
      {
        id: 'morning',
        time: '7:30',
        event: 'First job — driveway in the suburbs',
        leakRisk: 'medium',
        owner: 'You',
      },
      {
        id: 'midday',
        time: '11:00',
        event: 'Calls land while you’re hands-on',
        leakRisk: 'high',
        owner: 'You',
        detail: 'Voicemail catches them. You return them at lunch — sometimes.',
      },
      {
        id: 'lunch',
        time: '13:00',
        event: 'Lunch — return the morning’s missed calls',
        leakRisk: 'medium',
        owner: 'You',
      },
      {
        id: 'afternoon',
        time: '14:00 — 17:00',
        event: 'Two more jobs across town',
        leakRisk: 'medium',
        owner: 'You',
      },
      {
        id: 'evening',
        time: '18:00',
        event: 'Quotes, invoicing, tomorrow’s schedule',
        leakRisk: 'high',
        owner: 'You',
        detail: 'Done after dinner — or not done at all.',
      },
    ],
  },
  beforeAfter: {
    header: {
      kicker: 'What changes',
      title: 'The day, before and after',
      description: 'Same van. Same skills. A layer between you and the phone.',
    },
    before: {
      label: 'Before',
      items: [
        'Calls hit voicemail while you’re hands-on',
        'New bookings accepted without route check',
        'Quotes sent in the evening — or skipped',
        'Reviews left only by the most enthusiastic customers',
        'Service-due customers fade out quietly',
      ],
    },
    after: {
      label: 'After',
      items: [
        'Missed calls get an instant text-back with a callback slot',
        'New bookings checked against the route before they’re confirmed',
        'Quotes go out from a template inside two minutes',
        'Review request triggered automatically on sign-off',
        'Service-due reminders go out at the right interval',
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
        id: 'callback',
        piece: 'Missed-call text-back',
        state: 'in-place',
        owner: 'AI Lead Handling',
        note: 'You can stay under the bonnet. The caller is acknowledged.',
      },
      {
        id: 'route-check',
        piece: 'Route-aware booking confirmation',
        state: 'planned',
        owner: 'CRM & Automation',
      },
      {
        id: 'quote-template',
        piece: 'Quick-quote template flow',
        state: 'in-place',
        owner: 'CRM & Automation',
      },
      {
        id: 'review-trigger',
        piece: 'Sign-off review trigger',
        state: 'in-place',
        owner: 'Reputation & Reviews',
      },
      {
        id: 'service-recall',
        piece: 'Service-interval reminders',
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
        id: 'voicemail',
        fix: 'Catch every call you can’t physically answer',
        signalIfYou: 'know you’re losing jobs to voicemail every week',
        leadingSystem: 'AI Lead Handling',
      },
      {
        id: 'evening-admin',
        fix: 'Get quotes and invoices out from templates',
        signalIfYou: 'do most of your admin after dinner — or skip it',
        leadingSystem: 'CRM & Automation',
      },
      {
        id: 'recall',
        fix: 'Run service-interval reminders automatically',
        signalIfYou: 'have repeat customers who drift between visits',
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
        id: 'missed-call',
        trigger: 'Inbound call missed',
        action: 'Text within 60s with callback window',
        owner: 'AI Lead Handling',
        channel: 'SMS',
      },
      {
        id: 'booking-confirm',
        trigger: 'Booking request received',
        action: 'Confirm slot and send pre-job checklist',
        owner: 'CRM & Automation',
        channel: 'SMS / email',
      },
      {
        id: 'quote-send',
        trigger: 'Job complete with extra work needed',
        action: 'Quote template sent from job',
        owner: 'CRM & Automation',
        channel: 'SMS / email',
      },
      {
        id: 'review',
        trigger: 'Invoice paid',
        action: 'Review request within 30 minutes',
        owner: 'Reputation & Reviews',
        channel: 'SMS',
      },
      {
        id: 'recall',
        trigger: '11 months since last service',
        action: 'Service-due reminder with booking link',
        owner: 'CRM & Automation',
        channel: 'SMS / email',
      },
    ],
  },
  relevantSystems: {
    header: {
      kicker: 'How the systems sit',
      title: 'Lead, support, optional',
      description: 'A solo operator usually starts with capture; CRM follows once that’s steady.',
    },
    systems: [
      'ai-lead-handling',
      'crm-automation',
      'smart-website-systems',
      'reputation-review',
      'local-seo-authority',
    ],
    relevantSystems: [
      {
        id: 'aih',
        name: 'AI Lead Handling',
        role: 'lead',
        why: 'Catches the call when you are physically under a vehicle.',
      },
      {
        id: 'crm',
        name: 'CRM & Automation',
        role: 'lead',
        why: 'Holds quotes, invoices, and service recalls so admin doesn’t live in the evenings.',
      },
      {
        id: 'rep',
        name: 'Reputation & Reviews',
        role: 'support',
        why: 'Sign-off triggers a review request without you remembering.',
      },
      {
        id: 'sws',
        name: 'Smart Website Systems',
        role: 'support',
        why: 'A booking page that feeds straight into the operating board.',
      },
      {
        id: 'lsa',
        name: 'Local SEO Authority',
        role: 'optional',
        why: 'Useful when service-area discovery is the real bottleneck.',
      },
    ],
  },
  scenario: {
    header: {
      kicker: 'A realistic scenario',
      title: 'A solo day with the layer in place',
      description: 'Illustrative. No fabricated client. No promised result.',
    },
    scenario: {
      kind: 'scenario',
      label: 'Illustrative scenario',
      body: 'A solo mobile mechanic runs four jobs across a day. Calls during work get text-backs offering a callback window. Quotes go out from templates between jobs. The day’s last sign-off triggers a review request. Two service reminders go out the next morning.',
      observedChange:
        'Before, the same day would end with three voicemails to return after dinner and admin still on the to-do list. With the layer in place, the evenings are shorter and the queue is current.',
    },
  },
  faq: {
    header: {
      kicker: 'Honest questions',
      title: 'What mobile mechanics usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'solo',
        question: 'I’m a one-person operation. Will this make sense?',
        answer:
          'Often a smaller build is exactly right. The leakiest gap when you’re solo is usually the call you can’t physically take. We start there.',
      },
      {
        id: 'spam',
        question: 'Will the text-back feel automated to the customer?',
        answer:
          'It’s short and direct. It says you’re under a bonnet and offers a real callback window. Most callers prefer that to voicemail silence.',
      },
      {
        id: 'tools',
        question: 'I already use a job-management app. Do I drop it?',
        answer:
          'Usually not. The operating layer sits beside it and covers the call, follow-up, and reminder gaps it doesn’t.',
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
      title: 'Show us where the day actually leaks',
      description:
        'Tell us about a typical day on the road. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where calls and admin sit today' },
      { num: '2', text: 'The system most likely to hold the worst gap first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a solo operator with a real day on the road.',
    },
  },
};
