import {
  Calculator,
  Calendar,
  Clock3,
  FileText,
  MessageSquare,
  Search,
  ShieldCheck,
  Star,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildAccountingFirmsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Accounting Firms',
    title: 'A Business Owner Wants to Switch Accountants. They Picked Whoever Replied First.',
    description:
      'Accounting enquiries arrive in client meetings or at month end. The phone goes to voicemail. The proposal sits in the inbox. The prospect signs up with the firm that answered first.',
    list: ['Slow replies', 'Quiet proposals', 'Lost prospects', 'Few reviews'],
    cssPrefix: 'accounting-firms-hero',
  };

  const imageStripData = {
    badge: 'How New Clients Come In',
    title: 'A business owner wants to know if you can help',
    description:
      'A switch from another firm, a new business, a tax problem they want sorted. They want to know what you do, what it costs, and that you will reply.',
    items: [
      {
        title: 'New client enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing accounting enquiries',
      },
      {
        title: 'Discovery calls and meetings',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing accounting discovery calls',
      },
      {
        title: 'Proposals and onboarding',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing accounting proposals',
      },
      {
        title: 'Reviews and referrals',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing accounting reviews',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'accounting-firms-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where Prospects Slip',
    title: 'The work is steady. The bit between enquiry and signed engagement is where it leaks.',
    benefits: [
      {
        icon: Calculator,
        title: 'Calls miss the office',
        description: 'Partners are in client meetings. The phone rings out. The prospect picks the next firm.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Discovery calls take days to arrange',
        description: 'A simple thirty-minute call takes too many emails before anything is on the diary.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Proposals go quiet',
        description: 'A proposal gets sent. The prospect thinks about it. Nobody follows up.',
        iconType: 'accent' as const,
      },
      {
        icon: FileText,
        title: 'Online you look smaller than the firm you run',
        description: 'Plenty of long-standing clients. Almost no reviews to show for them.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to handle every enquiry, call, and proposal',
    description: 'Each piece does one job. Together they keep prospects from slipping between meetings.',
    featureCategories: [
      {
        title: 'Catch every call and form',
        description: 'Calls, missed calls, web forms — all in one place with the prospect and the request noted.',
        icon: MessageSquare,
        features: [
          'Missed calls texted back instantly',
          'Web enquiries land with the right partner',
          'Prospect and request captured up front',
        ],
      },
      {
        title: 'Get the discovery call booked without email tag',
        description: 'A clear way to offer a slot, confirm it, and remind both sides the day before.',
        icon: Calendar,
        features: [
          'Discovery call slots prospects can pick themselves',
          'Confirmations and reminders sent automatically',
          'Partner sees the request before the call',
        ],
      },
      {
        title: 'Stop proposals going quiet',
        description: 'Every proposal gets a follow-up on a schedule, even when the team is busy.',
        icon: Workflow,
        features: [
          'Proposals chased automatically',
          'Open proposals in one place',
          'Old proposals warmed up instead of forgotten',
        ],
      },
      {
        title: 'Turn long-standing clients into proof',
        description: 'A review request goes out at the right moment so the firm shows up online.',
        icon: ShieldCheck,
        features: [
          'Review requests at the right moment',
          'Asked when the client is most positive',
          'More reviews where local businesses search',
        ],
      },
      {
        title: 'Show up when local businesses search',
        description: 'Service pages and Google profile lined up so you appear when someone nearby looks for an accountant.',
        icon: Search,
        features: [
          'Found on Maps for the work you do',
          'Service pages that match real searches',
          'Local area coverage that is visible',
        ],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'What Actually Changes',
    title: 'A normal week, before and after',
    description: 'You still do the work. What changes is the part that used to depend on someone remembering.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How it runs now',
        items: [
          'Phone rings while a partner is in a meeting. Goes to voicemail. Lost.',
          'A prospect wants a call. Three emails later, still no time set.',
          'Proposal sent on Monday. By Friday nobody has chased it.',
          'You did great work for a client last quarter. They never got asked for a review.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it runs after',
        items: [
          'Missed call gets a text back inside a minute. They know the firm will reply.',
          'They pick a slot from a link. Confirmed. Reminder fires the day before.',
          'The proposal gets a polite chase the next morning. You can see who is waiting.',
          'A review request goes out at the right moment. Reviews start stacking quietly.',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Where Most Firms Start',
    title: 'Three stages, most firms feel one more than the others',
    description: 'You do not have to fix everything at once. Start with whatever is leaking the most prospects.',
    packages: [
      {
        name: 'Stop calls and enquiries going missing',
        description: 'For when partners are in meetings and quick enquiries sit unread.',
        price: 'Stage 1',
        priceDetail: 'Start here if missed calls are the leak',
        features: [
          'Missed-call text-back so they know you will reply',
          'One inbox for calls, forms, and web enquiries',
          'Prospect and request noted before the conversation',
        ],
      },
      {
        name: 'Get the discovery call booked the same week',
        description: 'Once enquiries are caught, this stage takes the friction out of confirming a call.',
        price: 'Stage 2',
        priceDetail: 'Start here if booking is where it slows down',
        features: [
          'Discovery slots prospects can pick themselves',
          'Reminders the day before so calls actually happen',
          'Partner sees the request before they pick up',
        ],
        popular: true,
      },
      {
        name: 'Keep proposals moving and turn clients into reviews',
        description: 'For when prospects come in fine but proposals go quiet and reviews never get asked for.',
        price: 'Stage 3',
        priceDetail: 'Start here if follow-up and reputation are the weak spots',
        features: [
          'Proposals chased automatically',
          'Past prospects nudged at the right time of year',
          'Review requests at the right moment',
        ],
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Real Situations',
    title: 'A few moments where the difference shows up',
    description: 'Small handoffs that used to depend on someone remembering.',
    workflows: [
      {
        trigger: 'A partner is in a meeting and a prospect rings the office.',
        actions: [
          'They get a text inside a minute saying you will reply',
          'The text captures the prospect and the request',
          'The lead is held instead of going to the next firm',
        ],
      },
      {
        trigger: 'A prospect wants a discovery call this week.',
        actions: [
          'They pick a slot from a link, no more email tag',
          'A reminder goes out the day before',
          'The partner sees the request before the call',
        ],
      },
      {
        trigger: 'You sent a proposal a few days ago and have not heard back.',
        actions: [
          'A polite chase goes out automatically',
          'Open proposals are visible in one place',
          'If they say yes, onboarding starts without another five emails',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'accounting-firms-workflow-examples',
  };

  const caseStudiesData = {
    category: 'legal-professional-services' as const,
    title: 'Related Case Studies',
    description: 'Examples of how the system supports legal and professional services in this category.',
    limit: 2,
  };

  const exploreData = {
    badge: 'Related',
    description: 'The other parts of the system that come up most often for accounting firms.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description: 'The core layer that holds enquiry, booking, and follow-up together.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'Booking & Scheduling System',
        description: 'Support discovery booking, reminders, and clearer next steps.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen firm visibility and local trust.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description: 'Turn long-standing clients into reviews and proof.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Things accounting firms usually ask',
    description: 'Straight answers about how this fits into a partner-led firm.',
    faqs: [
      {
        question: 'Partners are in meetings most of the day. Will this make more work for them?',
        answer:
          'It does the opposite. Missed calls get answered by text on their own. Proposal chasing goes out on a schedule. Reminders fire by themselves.',
      },
      {
        question: 'Will prospects feel like they are getting an automated response?',
        answer:
          'No. The messages are short and written like the firm would actually reply. The aim is to hold the lead until a partner can speak to them.',
      },
      {
        question: 'Can it handle prospects who need a discovery call before any proposal?',
        answer:
          'Yes. The first reply confirms a discovery call and the proposal follows after the call.',
      },
      {
        question: 'Do we have to chase reviews ourselves?',
        answer:
          'No. The request goes out on its own at the right moment, after a piece of work the client is most positive about.',
      },
      {
        question: 'What about proposals sitting in old emails?',
        answer:
          'Those get worked in too. Many firms find that warming up old proposals brings in real fees before any new marketing kicks in.',
      },
      {
        question: 'Do we need a brand new website?',
        answer:
          'Usually not. We look at what you have first. Often the gap is everything that happens after the form is sent.',
      },
    ],
  };

  return {
    slug: 'accounting-firms',
    industries: ['accounting'],
    systems: [
      'smart-website-systems',
      'crm-automation',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['lead-qualification', 'crm-integration', 'reputation-monitoring'],
    type: 'detail',
    parentSlug: 'legal-professional-services',
    seo: {
      title: 'Accounting Firms — Stop Losing Prospects to Missed Calls and Quiet Proposals | MindWP',
      description:
        'For accounting firms where calls go to voicemail in meetings, proposals go quiet, and reviews never get asked for. We put the routing, follow-up, and local visibility in place.',
      keywords: [
        'accounting firm website design',
        'accounting firm booking system',
        'accounting firm lead handling system',
        'accounting firm seo services',
        'accounting firm reputation management system',
      ],
      canonical: '/industries/legal-professional-services/accounting-firms',
    },
    hero: {
      ...heroData,
    },
    imageStrip: imageStripData,
    operatingPatterns: operatingPatternsData,
    systemLayers: systemLayersData,
    comparison: comparisonData,
    pathways: pathwaysData,
    workflowExamples: workflowExamplesData,
    caseStudies: caseStudiesData,
    explore: exploreData,
    faq: faqData,
    cta: {
      title: 'Tell us where prospects are slipping',
      description:
        'If calls go to voicemail in meetings, proposals go quiet, or reviews never get asked for, walk us through how the week runs and we will show you the first thing worth fixing.',
    },
  };
}

export const accountingFirmsIndustryPageData: IndustryPageData = buildAccountingFirmsIndustryPageData();
