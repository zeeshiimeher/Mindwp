import {
  Briefcase,
  Calendar,
  Clock3,
  LineChart,
  MessageSquare,
  Search,
  ShieldCheck,
  Star,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildConsultantsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Consultants',
    title: 'A Lead Wants to Talk This Week. They Picked Whoever Replied First.',
    description:
      'Consulting enquiries arrive between client work. The phone goes to voicemail. The proposal sits unread. The prospect signs with whoever followed up first.',
    list: ['Slow replies', 'Quiet proposals', 'Lost prospects', 'Few reviews'],
    cssPrefix: 'consultants-hero',
  };

  const imageStripData = {
    badge: 'How New Clients Come In',
    title: 'A business wants to know if you can help',
    description:
      'A new project, a problem they want sorted, a referral. They want to know what you do, what it costs, and that you will reply.',
    items: [
      {
        title: 'New enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing consulting enquiries',
      },
      {
        title: 'Discovery calls',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing consulting discovery calls',
      },
      {
        title: 'Proposals and engagements',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing consulting proposals',
      },
      {
        title: 'Reviews and referrals',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing consulting reviews',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'consultants-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where Prospects Slip',
    title: 'The work is steady. The bit between enquiry and signed engagement is where it leaks.',
    benefits: [
      {
        icon: Briefcase,
        title: 'Calls miss while you are with clients',
        description: 'You are in a session. The phone rings out. The prospect picks the next consultant.',
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
        icon: LineChart,
        title: 'Online you look smaller than the work you do',
        description: 'Plenty of strong outcomes. Almost no reviews to show for them.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to handle every enquiry, call, and proposal',
    description: 'Each piece does one job. Together they keep prospects from slipping between client work.',
    featureCategories: [
      {
        title: 'Catch every call and form',
        description: 'Calls, missed calls, web forms — all in one place with the prospect and the request noted.',
        icon: MessageSquare,
        features: [
          'Missed calls texted back instantly',
          'Web enquiries sent to your inbox',
          'Prospect and request captured up front',
        ],
      },
      {
        title: 'Get the discovery call booked without email tag',
        description: 'A clear way to offer a slot, confirm it, and remind both sides the day before.',
        icon: Calendar,
        features: [
          'Discovery slots prospects can pick themselves',
          'Confirmations and reminders sent automatically',
          'You see the request before the call',
        ],
      },
      {
        title: 'Stop proposals going quiet',
        description: 'Every proposal gets a follow-up on a schedule, even when you are deep in client work.',
        icon: Workflow,
        features: [
          'Proposals chased automatically',
          'Open proposals in one place',
          'Old proposals warmed up instead of forgotten',
        ],
      },
      {
        title: 'Turn finished engagements into proof',
        description: 'A review request goes out at the right moment so the work shows up online.',
        icon: ShieldCheck,
        features: [
          'Review requests after engagements',
          'Asked when the client is most positive',
          'More reviews where prospects look',
        ],
      },
      {
        title: 'Show up when prospects search',
        description: 'Service pages and Google profile lined up so you appear when someone looks for what you do.',
        icon: Search,
        features: [
          'Found for the problems you solve',
          'Service pages that match real searches',
          'Local and niche coverage that is visible',
        ],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'What Actually Changes',
    title: 'A normal week, before and after',
    description: 'You still do the work. What changes is the part that used to depend on you remembering.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How it runs now',
        items: [
          'Phone rings while you are with a client. Goes to voicemail. Lost.',
          'A prospect wants a call. Three emails later, still no time set.',
          'Proposal sent on Monday. By Friday nobody has chased it.',
          'You finished a great engagement last month. They never got asked for a review.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it runs after',
        items: [
          'Missed call gets a text back inside a minute. They know you will reply.',
          'They pick a slot from a link. Confirmed. Reminder fires the day before.',
          'The proposal gets a polite chase the next morning. You can see who is waiting.',
          'A review request goes out at the right moment. Reviews start stacking quietly.',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Where Most Consultants Start',
    title: 'Three stages, most consultants feel one more than the others',
    description: 'You do not have to fix everything at once. Start with whatever is leaking the most prospects.',
    packages: [
      {
        name: 'Stop calls and enquiries going missing',
        description: 'For when you are in client work and quick enquiries sit unread.',
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
          'You see the request before the call',
        ],
        popular: true,
      },
      {
        name: 'Keep proposals moving and turn engagements into reviews',
        description: 'For when prospects come in fine but proposals go quiet and reviews never get asked for.',
        price: 'Stage 3',
        priceDetail: 'Start here if follow-up and reputation are the weak spots',
        features: [
          'Proposals chased automatically',
          'Past prospects nudged at the right moment',
          'Review requests at the right moment',
        ],
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Real Situations',
    title: 'A few moments where the difference shows up',
    description: 'Small handoffs that used to depend on you remembering.',
    workflows: [
      {
        trigger: 'You are with a client and a new enquiry call rings out.',
        actions: [
          'They get a text inside a minute saying you will reply',
          'The text captures the prospect and the request',
          'The lead is held instead of going to the next consultant',
        ],
      },
      {
        trigger: 'A prospect wants a discovery call this week.',
        actions: [
          'They pick a slot from a link, no more email tag',
          'A reminder goes out the day before',
          'You walk into the call with the request already noted',
        ],
      },
      {
        trigger: 'You sent a proposal a few days ago and have not heard back.',
        actions: [
          'A polite chase goes out automatically',
          'Open proposals are visible in one place',
          'If they say yes, the engagement starts without another five emails',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'consultants-workflow-examples',
  };

  const caseStudiesData = {
    category: 'legal-professional-services' as const,
    title: 'Related Case Studies',
    description: 'Examples of how the system supports legal and professional services in this category.',
    limit: 2,
  };

  const exploreData = {
    badge: 'Related',
    description: 'The other parts of the system that come up most often for consultants.',
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
        description: 'Strengthen consultant visibility and trust.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description: 'Turn finished engagements into reviews and proof.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Things consultants usually ask',
    description: 'Straight answers about how this fits into solo or small consulting practices.',
    faqs: [
      {
        question: 'I am in client work most of the day. How much extra work is this?',
        answer:
          'Almost none after setup. Missed calls get answered by text on their own. Proposal chasing goes out on a schedule. Reminders fire by themselves.',
      },
      {
        question: 'Will prospects feel like they are getting an automated response?',
        answer:
          'No. The messages are short and written like you would actually reply. The aim is to hold the lead until you can speak to them.',
      },
      {
        question: 'Can it handle prospects who need a discovery call before any proposal?',
        answer:
          'Yes. The first reply confirms a discovery call and the proposal follows after the call.',
      },
      {
        question: 'Do I have to chase reviews myself?',
        answer:
          'No. The request goes out on its own at the right moment.',
      },
      {
        question: 'What about proposals sitting in old emails?',
        answer:
          'Those get worked in too. Many consultants find that warming up old proposals brings in real fees before any new marketing kicks in.',
      },
      {
        question: 'Do I need a brand new website?',
        answer:
          'Usually not. We look at what you have first. Often the gap is everything that happens after the form is sent.',
      },
    ],
  };

  return {
    slug: 'consultants',
    industries: ['consulting'],
    systems: [
      'smart-website-systems',
      'crm-automation',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['lead-qualification', 'crm-integration', 'pipeline-visibility'],
    type: 'detail',
    parentSlug: 'legal-professional-services',
    seo: {
      title: 'Consultants — Stop Losing Prospects to Missed Calls and Quiet Proposals | MindWP',
      description:
        'For consultants where calls go to voicemail in client work, proposals go quiet, and reviews never get asked for. We put the routing, follow-up, and visibility in place.',
      keywords: [
        'consulting website design',
        'consulting booking system',
        'consulting lead handling system',
        'consulting seo services',
        'consulting reputation management system',
      ],
      canonical: '/industries/legal-professional-services/consultants',
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
        'If calls go to voicemail in client work, proposals go quiet, or reviews never get asked for, walk us through how the week runs and we will show you the first thing worth fixing.',
    },
  };
}

export const consultantsIndustryPageData: IndustryPageData = buildConsultantsIndustryPageData();
