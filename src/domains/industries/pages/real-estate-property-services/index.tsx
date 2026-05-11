import type { IndustryCategoryPageData } from '@/domains/industries/types';

export const realEstatePropertyServicesIndustryPageData: IndustryCategoryPageData = {
  seo: {
    title: 'Real Estate & Property Services — Lead, Application, and Pipeline Systems',
    description:
      'How realtors, brokers, property managers, and inspectors hold inbound leads, manage transactional pipelines, and stay top-of-mind for repeat work.',
    canonical: '/industries/real-estate-property-services',
    openGraph: {
      title: 'Real Estate & Property Services — Lead, Application, and Pipeline Systems',
      description: 'Where the property pipeline leaks and what holds it across four shapes.',
    },
  },
  slug: 'real-estate-property-services',
  type: 'category',
  category: 'real-estate-property-services',
  hero: {
    badge: 'Industries · Property Services',
    title: 'A spike on Saturday. [[muted:And a long quiet stretch until close.]]',
    description:
      'Property work runs on spikes and long timelines. Most leakage is the long quiet stretch between contact and close.',
    list: [
      'Inbound enquiries acknowledged inside two minutes',
      'Pipeline nurture runs for buyers, sellers, and applicants',
      'Past-client and past-agent cadences run automatically',
    ],
  },
  industries: ['realtor', 'mortgage-broker', 'property-management', 'home-inspection'],
  systems: ['ai-lead-handling', 'crm-automation', 'reputation-review', 'smart-website-systems'],
  topics: ['lead-management', 'follow-up', 'review-generation'],
  categoryLeaks: {
    header: {
      kicker: 'Where it leaks',
      title: 'Four places the property pipeline usually slips',
      description: 'Most operators see at least three of these.',
    },
    leaks: [
      {
        id: 'first-touch',
        leak: 'Slow first reply costs the lead',
        state: 'silent',
        observed: 'A buyer enquires across three agents. The first calm reply wins.',
      },
      {
        id: 'long-nurture',
        leak: 'Long-timeline contacts fall out',
        state: 'lost',
        observed: 'A six-month buyer goes quiet. No nurture keeps the relationship warm.',
      },
      {
        id: 'docs',
        leak: 'Documents and approvals stall',
        state: 'risk',
        observed: 'A document request waits a week.',
      },
      {
        id: 'past-clients',
        leak: 'Past clients aren’t a referral source',
        state: 'attention',
        observed: 'A close happens. Nothing keeps you top-of-mind.',
      },
    ],
  },
  sharedPattern: {
    header: {
      kicker: 'How the pipeline usually moves',
      title: 'Lead → transaction → past-client',
      description: 'The shape every property business works around.',
    },
    timeline: [
      {
        id: 'lead',
        time: 'Lead',
        event: 'Enquiry, registration, or referral',
        leakRisk: 'high',
        detail: 'First-touch speed matters.',
      },
      {
        id: 'transaction',
        time: 'Transaction',
        event: 'Pipeline + paperwork',
        leakRisk: 'medium',
        detail: 'Document and status leaks live here.',
      },
      {
        id: 'past',
        time: 'Past-client',
        event: 'Nurture + recall',
        leakRisk: 'medium',
        detail: 'Most repeat business lives here. Most leakage too.',
      },
    ],
  },
  breakpoints: {
    header: {
      kicker: 'Moments that need an owner',
      title: 'Where the property week actually breaks',
      description: 'These are the points the system has to hold automatically.',
    },
    items: [
      'Inbound enquiry while in a showing or inspection',
      'Open-house registration over the weekend',
      'Document request that needs follow-through',
      'Status change in a transaction or application',
      'Closing or completion → review prompt',
      'Past-client cadence to keep relationship warm',
    ],
  },
  operatingModels: {
    header: {
      kicker: 'How operators differ',
      title: 'Two operating shapes inside the same category',
      description: 'Most operators tilt toward one of these two.',
    },
    models: [
      {
        id: 'transaction-led',
        label: 'Transaction-led',
        traits: [
          'Discrete deals with clear close points',
          'Pipeline visibility matters',
          'Past-client nurture is the long game',
          'Examples: realtors, mortgage brokers, inspectors',
        ],
        differentiator: 'Lead systems are AI Lead Handling and CRM with pipeline boards.',
      },
      {
        id: 'service-led',
        label: 'Service-led',
        traits: [
          'Continuous service across portfolio',
          'Tenant + owner audiences',
          'Maintenance dispatch is operational core',
          'Example: property managers',
        ],
        differentiator: 'Lead system is CRM with tenant + owner workflows.',
      },
    ],
  },
  pathwayMap: {
    header: {
      kicker: 'Choose the closest shape',
      title: 'Four recognition routes',
      description: 'Each route opens a detail page tuned to that operating reality.',
    },
    branches: [
      {
        id: 'realtors',
        segment: 'Realtor',
        recognition: 'Open houses, long buyer timelines.',
        leadingSystem: 'CRM & Automation',
        detailHref: '/industries/real-estate-property-services/realtors',
        detailLabel: 'Realtors detail',
      },
      {
        id: 'brokers',
        segment: 'Mortgage broker',
        recognition: 'Applications, document chasing.',
        leadingSystem: 'CRM & Automation',
        detailHref: '/industries/real-estate-property-services/mortgage-brokers',
        detailLabel: 'Mortgage Brokers detail',
      },
      {
        id: 'pms',
        segment: 'Property manager',
        recognition: 'Tenants, owners, trades.',
        leadingSystem: 'CRM & Automation',
        detailHref: '/industries/real-estate-property-services/property-managers',
        detailLabel: 'Property Managers detail',
      },
      {
        id: 'inspectors',
        segment: 'Home inspector',
        recognition: 'Bookings on the move, reports promised.',
        leadingSystem: 'AI Lead Handling',
        detailHref: '/industries/real-estate-property-services/home-inspectors',
        detailLabel: 'Home Inspectors detail',
      },
    ],
  },
  startingSystems: {
    header: {
      kicker: 'Which systems start where',
      title: 'How the six systems show up across property',
      description: 'Lead first. Support next. Later as the operation steadies.',
    },
    systems: ['ai-lead-handling', 'crm-automation', 'reputation-review', 'smart-website-systems'],
    matrix: [
      {
        systemId: 'aih',
        systemName: 'AI Lead Handling',
        status: 'lead',
        whyNow: 'Catches enquiries on showings, sites, and weekends.',
      },
      {
        systemId: 'crm',
        systemName: 'CRM & Automation',
        status: 'lead',
        whyNow: 'Holds pipelines, documents, and nurture.',
      },
      {
        systemId: 'rep',
        systemName: 'Reputation & Reviews',
        status: 'support',
        whyNow: 'Reviews trigger after close or report delivery.',
      },
      {
        systemId: 'sws',
        systemName: 'Smart Website Systems',
        status: 'support',
        whyNow: 'Listing / booking pages feed the same operating board.',
      },
      {
        systemId: 'lsa',
        systemName: 'Local SEO Authority',
        status: 'later',
        whyNow: 'Useful for area-specific authority.',
      },
      {
        systemId: 'rg',
        systemName: 'Revenue Growth',
        status: 'later',
        whyNow: 'Repeat work and referral economics, once steady.',
      },
    ],
  },
  detailRoutes: {
    header: {
      kicker: 'Detail pages',
      title: 'Choose the closest business type',
      description: 'Each route opens a page tuned to the way that work moves.',
    },
    routeEntries: [
      {
        detailHref: '/industries/real-estate-property-services/realtors',
        label: 'Realtors',
        oneLine: 'Open houses, buyer/seller nurture, listings.',
        leadingSystem: 'CRM & Automation',
        state: 'lost',
      },
      {
        detailHref: '/industries/real-estate-property-services/mortgage-brokers',
        label: 'Mortgage Brokers',
        oneLine: 'Applications, documents, settlement.',
        leadingSystem: 'CRM & Automation',
        state: 'risk',
      },
      {
        detailHref: '/industries/real-estate-property-services/property-managers',
        label: 'Property Managers',
        oneLine: 'Tenants, owners, maintenance.',
        leadingSystem: 'CRM & Automation',
        state: 'attention',
      },
      {
        detailHref: '/industries/real-estate-property-services/home-inspectors',
        label: 'Home Inspectors',
        oneLine: 'Bookings, reports, agent referral.',
        leadingSystem: 'AI Lead Handling',
        state: 'silent',
      },
    ],
  },
  handledState: {
    header: {
      kicker: 'When the layer holds',
      title: 'What the week looks like once the gaps are owned',
      description: 'Same pipeline. Same hours. Less manual chasing.',
    },
    handled: [
      {
        id: 'first',
        label: 'First reply',
        state: 'after',
        note: 'Enquiries acknowledged in minutes.',
      },
      {
        id: 'pipeline',
        label: 'Pipeline',
        state: 'after',
        note: 'Status visible without manual updates.',
      },
      {
        id: 'docs',
        label: 'Documents',
        state: 'after',
        note: 'Request + reminder runs to completion.',
      },
      {
        id: 'reviews',
        label: 'Reviews',
        state: 'after',
        note: 'Reviews trigger at the right moment.',
      },
    ],
  },
  scenarioStrip: {
    header: {
      kicker: 'A category scenario',
      title: 'How a busy week changes',
      description: 'Illustrative. No fabricated client. No promised result.',
    },
    scenario: {
      kind: 'scenario',
      label: 'Illustrative scenario',
      body: 'A small property firm runs a normal week. Enquiries from listings get acknowledged in minutes. Pipeline status updates fire on lender or stage changes. Past-client cadence runs alongside.',
      observedChange:
        'Before, the same week would have had three slow first-replies and a quiet review queue. With the layer in place, the pipeline holds and the team spends less time chasing.',
    },
  },
  faq: {
    header: {
      kicker: 'Honest questions',
      title: 'What property operators usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'fit',
        question: 'Is this the same build for every property business?',
        answer:
          'No. The shape is similar. The lead system differs by transaction or service shape.',
      },
      {
        id: 'starting',
        question: 'Where do most operators actually start?',
        answer: 'Where the leak hurts most. For most, that is first-touch and nurture.',
      },
      {
        id: 'tools',
        question: 'We already use a property CRM. Do we drop it?',
        answer: 'Usually no. The operating layer sits beside it.',
      },
      {
        id: 'price',
        question: 'How is this priced?',
        answer: 'Per build. We tell you when a build is not the right move yet.',
      },
    ],
  },
  cta: {
    heading: {
      kicker: 'Next step',
      title: 'Show us where the pipeline actually leaks',
      description:
        'Tell us about a typical week. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where leads, pipeline, and past-clients sit today' },
      { num: '2', text: 'The system most likely to hold the worst gap first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a working property operator.',
    },
  },
};
