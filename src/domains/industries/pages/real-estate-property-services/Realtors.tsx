import type { IndustryDetailPageData } from '@/domains/industries/types';

export const realtorsIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Realtors — Lead, Nurture, and Listing Systems',
    description:
      'How realtors hold inbound enquiries, nurture buyers and sellers between transactions, and keep listing momentum.',
    canonical: '/industries/real-estate-property-services/realtors',
    openGraph: {
      title: 'Realtors — Lead, Nurture, and Listing Systems',
      description: 'Inbound enquiries, nurture, and listings on one operating layer.',
    },
  },
  slug: 'realtors',
  type: 'detail',
  parentSlug: 'real-estate-property-services',
  hero: {
    badge: 'Real Estate · Realtors',
    title: 'A Saturday open house. [[muted:And a Tuesday lead that already went cold.]]',
    description:
      'Buyers and sellers move on impulse and on long timelines at the same time. Most leakage lives between the spike and the long nurture.',
    list: [
      'Inbound enquiries acknowledged inside two minutes',
      'Nurture sequences run for buyers and sellers separately',
      'Listing-feedback and post-close prompts run automatically',
    ],
  },
  industries: ['realtor'],
  systems: ['ai-lead-handling', 'crm-automation', 'reputation-review', 'smart-website-systems'],
  topics: ['lead-management', 'follow-up', 'review-generation'],
  industryPattern: {
    header: {
      kicker: 'Where it leaks',
      title: 'Three places realtor enquiries usually slip',
      description: 'Most realtors see at least two of these.',
    },
    leaks: [
      {
        id: 'open-house',
        leak: 'Open-house attendees never get a follow-up',
        state: 'lost',
        observed: 'A registered attendee leaves. No follow-up runs. They go to another agent.',
      },
      {
        id: 'long-nurture',
        leak: 'Long-timeline buyers fall out of contact',
        state: 'silent',
        observed: 'A buyer six months out goes quiet. No nurture keeps the relationship warm.',
      },
      {
        id: 'post-close',
        leak: 'Past clients aren’t a referral source',
        state: 'attention',
        observed: 'A close happens. Nothing keeps the agent top-of-mind for the next referral.',
      },
    ],
  },
  leakTimeline: {
    header: {
      kicker: 'A typical week',
      title: 'How a realtor week moves',
      description: 'Showings, calls, paperwork, and long nurture all at once.',
    },
    timeline: [
      {
        id: 'mon',
        time: 'Mon',
        event: 'Listing appointments and prep',
        leakRisk: 'medium',
        owner: 'Agent',
      },
      {
        id: 'tue',
        time: 'Tue — Thu',
        event: 'Showings and contracts',
        leakRisk: 'high',
        owner: 'Agent',
      },
      {
        id: 'fri',
        time: 'Fri',
        event: 'Open-house prep, marketing',
        leakRisk: 'medium',
        owner: 'Agent',
      },
      {
        id: 'sat',
        time: 'Sat',
        event: 'Open houses — registrations come in',
        leakRisk: 'high',
        owner: 'Agent',
      },
      {
        id: 'sun',
        time: 'Sun',
        event: 'Catch-up — most follow-ups don’t happen',
        leakRisk: 'high',
        owner: 'Agent',
      },
    ],
  },
  beforeAfter: {
    header: {
      kicker: 'What changes',
      title: 'The book of business, before and after',
      description: 'Same agent. A different layer behind the lead list.',
    },
    before: {
      label: 'Before',
      items: [
        'Open-house attendees never hear back',
        'Long-timeline buyers fall out of touch',
        'Listing feedback isn’t shared on rhythm',
        'Past clients drift',
        'Reviews depend on the client remembering',
      ],
    },
    after: {
      label: 'After',
      items: [
        'Open-house attendees get a same-day follow-up',
        'Long-timeline buyers stay nurtured automatically',
        'Listing feedback prompts run after each showing',
        'Past-client touchpoints run on cadence',
        'Review prompt at the right moment',
      ],
    },
  },
  workbench: {
    header: {
      kicker: 'What sits on the workbench',
      title: 'The pieces that hold a realtor business together',
      description: 'In place, planned, optional.',
    },
    workbench: [
      {
        id: 'first-touch',
        piece: 'Inbound enquiry acknowledgment',
        state: 'in-place',
        owner: 'AI Lead Handling',
      },
      { id: 'open', piece: 'Open-house follow-up', state: 'in-place', owner: 'CRM & Automation' },
      {
        id: 'nurture-buyer',
        piece: 'Buyer nurture sequence',
        state: 'in-place',
        owner: 'CRM & Automation',
      },
      {
        id: 'nurture-seller',
        piece: 'Seller nurture sequence',
        state: 'in-place',
        owner: 'CRM & Automation',
      },
      {
        id: 'review',
        piece: 'Post-close review prompt',
        state: 'planned',
        owner: 'Reputation & Reviews',
      },
      {
        id: 'past-client',
        piece: 'Past-client touchpoints',
        state: 'optional',
        owner: 'CRM & Automation',
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
        id: 'open',
        fix: 'Follow up on open-house attendees same day',
        signalIfYou: 'see weekend leads go cold by Monday',
        leadingSystem: 'CRM & Automation',
      },
      {
        id: 'nurture',
        fix: 'Run buyer / seller nurture automatically',
        signalIfYou: 'have long-timeline contacts you can’t keep warm',
        leadingSystem: 'CRM & Automation',
      },
      {
        id: 'first-touch',
        fix: 'Acknowledge inbound enquiries instantly',
        signalIfYou: 'see slow first-reply costing listings',
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
        id: 'inquiry',
        trigger: 'New buyer / seller enquiry',
        action: 'Reply within minutes with a calendar link',
        owner: 'AI Lead Handling',
        channel: 'SMS / email',
      },
      {
        id: 'open',
        trigger: 'Open-house registration',
        action: 'Same-day thank-you with property summary and follow-up offer',
        owner: 'CRM & Automation',
        channel: 'SMS / email',
      },
      {
        id: 'nurture-b',
        trigger: 'Buyer in pipeline > 30 days',
        action: 'Curated listing email twice a month',
        owner: 'CRM & Automation',
        channel: 'Email',
      },
      {
        id: 'feedback',
        trigger: 'Showing complete',
        action: 'Feedback request and listing summary',
        owner: 'CRM & Automation',
        channel: 'SMS / email',
      },
      {
        id: 'review',
        trigger: 'Closing complete',
        action: 'Review prompt + past-client cadence start',
        owner: 'Reputation & Reviews',
        channel: 'SMS / email',
      },
    ],
  },
  relevantSystems: {
    header: {
      kicker: 'How the systems sit',
      title: 'Lead, support, optional',
      description: 'Most realtors start with first-touch and open-house follow-up.',
    },
    systems: ['ai-lead-handling', 'crm-automation', 'reputation-review', 'smart-website-systems'],
    relevantSystems: [
      {
        id: 'aih',
        name: 'AI Lead Handling',
        role: 'lead',
        why: 'Catches enquiries when the agent is in a showing.',
      },
      {
        id: 'crm',
        name: 'CRM & Automation',
        role: 'lead',
        why: 'Holds buyer / seller pipelines and nurture.',
      },
      {
        id: 'rep',
        name: 'Reputation & Reviews',
        role: 'support',
        why: 'Reviews trigger after close.',
      },
      {
        id: 'sws',
        name: 'Smart Website Systems',
        role: 'support',
        why: 'Listing pages feed the same operating board.',
      },
      {
        id: 'lsa',
        name: 'Local SEO Authority',
        role: 'optional',
        why: 'Useful for area-specific authority.',
      },
    ],
  },
  scenario: {
    header: {
      kicker: 'A realistic scenario',
      title: 'A weekend with the layer in place',
      description: 'Illustrative. No fabricated client. No promised result.',
    },
    scenario: {
      kind: 'scenario',
      label: 'Illustrative scenario',
      body: 'A solo realtor runs a Saturday open house. Registrations land. Same-day thank-you and follow-up run automatically. Buyer nurture continues for the long-timeline contacts already in the pipeline. Reviews trigger after each close.',
      observedChange:
        'Before, the same weekend would have produced six attendees who never heard back. With the layer in place, the agent has live conversations with the most engaged ones on Sunday morning.',
    },
  },
  faq: {
    header: {
      kicker: 'Honest questions',
      title: 'What realtors usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'tools',
        question: 'We use a real-estate CRM. Do we drop it?',
        answer: 'Usually no. The operating layer sits beside it and covers the gaps it does not.',
      },
      {
        id: 'voice',
        question: 'Will replies sound like the agent?',
        answer: 'Yes — written in the agent’s voice and reviewed before launch.',
      },
      {
        id: 'mls',
        question: 'Can it work with our MLS feed?',
        answer: 'Yes — listing data feeds nurture and follow-up.',
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
      kicker: 'Next step',
      title: 'Show us where the lead list actually leaks',
      description:
        'Tell us about a typical month. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where leads, nurture, and listings sit today' },
      { num: '2', text: 'The system most likely to hold the worst gap first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a working realtor.',
    },
  },
};
