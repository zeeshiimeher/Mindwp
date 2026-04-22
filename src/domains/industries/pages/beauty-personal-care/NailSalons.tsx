import {
  Calendar,
  Clock3,
  MessageSquare,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildNailSalonsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Nail Salons',
    title: 'A Client Wants a Slot This Weekend. They Picked Whoever Replied First.',
    description:
      'Nail salon enquiries arrive between clients. The chair is busy. The phone rings out. The next salon picks up.',
    list: ['Missed calls', 'Lost bookings', 'No infills', 'Few reviews'],
    cssPrefix: 'nail-salons-hero',
  };

  const imageStripData = {
    badge: 'How Bookings Come In',
    title: 'A client wants a slot soon',
    description:
      'A set, an infill, a special occasion. They want to know if you can fit them in, when, and that the work will look right.',
    items: [
      {
        title: 'New client enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing nail salon enquiries',
      },
      {
        title: 'Booking and reminders',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing nail salon booking',
      },
      {
        title: 'Infills and repeat visits',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing nail salon repeat visits',
      },
      {
        title: 'Reviews and referrals',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing nail salon reviews',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'nail-salons-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where Bookings Slip',
    title: 'The chair is full but new clients and infills slip through',
    benefits: [
      {
        icon: Sparkles,
        title: 'Calls miss the front desk',
        description: 'The team is with a client. The phone rings out. The new client books the next salon.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Booking turns into a back and forth',
        description: 'A simple slot takes too many messages before anything is on the diary.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Past clients drift away',
        description: 'A great set a few weeks ago. Nobody nudged them for the next infill.',
        iconType: 'accent' as const,
      },
      {
        icon: Sparkles,
        title: 'Online you look smaller than the work you do',
        description: 'Plenty of happy clients. Almost none ever wrote anything online.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to handle every enquiry, booking, and repeat visit',
    description: 'Each piece does one job. Together they keep the chair full without the front desk chasing.',
    featureCategories: [
      {
        title: 'Catch every call and form',
        description: 'Calls, missed calls, web forms — all in one place with the client and the service noted.',
        icon: MessageSquare,
        features: [
          'Missed calls texted back instantly',
          'Web enquiries land with the front desk',
          'Client and service captured up front',
        ],
      },
      {
        title: 'Get the booking confirmed without phone tag',
        description: 'A clear way to offer a slot, confirm it, and remind them the day before.',
        icon: Calendar,
        features: [
          'Slots clients can pick themselves',
          'Confirmations and reminders sent automatically',
          'Front desk sees the day at a glance',
        ],
      },
      {
        title: 'Bring past clients back on time',
        description: 'Gentle nudges before the next infill so the diary fills itself.',
        icon: Workflow,
        features: [
          'Infill reminders sent automatically',
          'Past clients nudged at the right moment',
          'Repeat visits without front-desk chasing',
        ],
      },
      {
        title: 'Turn happy clients into reviews',
        description: 'A review request goes out at the right moment so the work shows up online.',
        icon: ShieldCheck,
        features: [
          'Review requests after appointments',
          'Asked when the client is happiest',
          'More reviews where local people search',
        ],
      },
      {
        title: 'Show up when local people search',
        description: 'Service pages and Google profile lined up so you appear when someone nearby looks for a salon.',
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
    description: 'You still do the work. What changes is the part that used to depend on the front desk remembering.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How it runs now',
        items: [
          'Phone rings while the team is with a client. Goes to voicemail. Lost.',
          'A new client wants a slot. Three messages later, still no time set.',
          'A great set a few weeks ago. Nobody nudged them for the next infill.',
          'You finished a great set last week. They never got asked for a review.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it runs after',
        items: [
          'Missed call gets a text back inside a minute. They know the salon will reply.',
          'They pick a slot from a link. Confirmed. Reminder fires the day before.',
          'A gentle nudge goes out and the next booking lands without effort.',
          'A review request goes out after the visit. Reviews start stacking quietly.',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Where Most Salons Start',
    title: 'Three stages, most salons feel one more than the others',
    description: 'You do not have to fix everything at once. Start with whatever is leaking the most clients.',
    packages: [
      {
        name: 'Stop calls and enquiries going missing',
        description: 'For when the team is busy and new client calls do not get answered.',
        price: 'Stage 1',
        priceDetail: 'Start here if missed calls are the leak',
        features: [
          'Missed-call text-back so they know you will reply',
          'One inbox for calls, forms, and web enquiries',
          'Client and service captured before the conversation',
        ],
      },
      {
        name: 'Get the booking confirmed the same day',
        description: 'Once enquiries are caught, this stage takes the friction out of confirming a slot.',
        price: 'Stage 2',
        priceDetail: 'Start here if booking is where it slows down',
        features: [
          'Slots clients can pick themselves',
          'Reminders the day before so chairs stay full',
          'Front desk sees the day at a glance',
        ],
        popular: true,
      },
      {
        name: 'Bring past clients back and turn visits into reviews',
        description: 'For when the diary is fine but past clients drift away and reviews never get asked for.',
        price: 'Stage 3',
        priceDetail: 'Start here if repeat visits and reputation are the weak spots',
        features: [
          'Infill reminders sent automatically',
          'Past clients nudged at the right moment',
          'Review requests at the right moment',
        ],
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Real Situations',
    title: 'A few moments where the difference shows up',
    description: 'Small handoffs that used to depend on the front desk remembering.',
    workflows: [
      {
        trigger: 'The team is with a client and a new enquiry call rings out.',
        actions: [
          'They get a text inside a minute saying the salon will reply',
          'The text captures the client and the service',
          'The lead is held instead of going to the next salon',
        ],
      },
      {
        trigger: 'A client wants a slot this weekend.',
        actions: [
          'They pick a slot from a link, no more text tag',
          'A reminder goes out the day before',
          'The front desk sees who is coming in and why',
        ],
      },
      {
        trigger: 'A past client is due for an infill.',
        actions: [
          'A gentle nudge goes out automatically at the right moment',
          'They book again without the front desk chasing',
          'The diary keeps filling without extra marketing',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'nail-salons-workflow-examples',
  };

  const caseStudiesData = {
    category: 'beauty-personal-care' as const,
    title: 'Related Case Studies',
    description: 'Examples of how the system supports beauty and personal care businesses in this category.',
    limit: 2,
  };

  const exploreData = {
    badge: 'Related',
    description: 'The other parts of the system that come up most often for nail salons.',
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
        description: 'Support booking, reminders, and clearer next steps.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen salon visibility and local trust.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description: 'Turn appointments into reviews and proof.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Things nail salons usually ask',
    description: 'Straight answers about how this fits into a busy salon.',
    faqs: [
      {
        question: 'The front desk is already stretched. Will this make more work?',
        answer:
          'It does the opposite. Missed calls get answered by text on their own. Reminders fire by themselves. The front desk sees a clearer day at a glance.',
      },
      {
        question: 'Will clients feel like they are getting an automated response?',
        answer:
          'No. The messages are short and written like the front desk would actually text someone. The aim is to hold the lead until you can reply.',
      },
      {
        question: 'Can it handle bookings that need a consultation first?',
        answer:
          'Yes. The first reply confirms a slot or sets up the consultation, depending on how you usually work.',
      },
      {
        question: 'Do we have to chase reviews ourselves?',
        answer:
          'No. The request goes out on its own after the visit, when the client is happiest.',
      },
      {
        question: 'What about clients we have not seen in a while?',
        answer:
          'They get gentle nudges so the next booking happens without effort.',
      },
      {
        question: 'Do we need a brand new website?',
        answer:
          'Usually not. We look at what you have first. Often the gap is everything that happens after the form is sent.',
      },
    ],
  };

  return {
    slug: 'nail-salons',
    industries: ['nail-salon'],
    systems: [
      'smart-website-systems',
      'crm-automation',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['booking-automation', 'no-show-reduction', 'review-generation'],
    type: 'detail',
    parentSlug: 'beauty-personal-care',
    seo: {
      title: 'Nail Salons — Stop Losing Bookings to Missed Calls | MindWP',
      description:
        'For nail salons where calls miss the front desk, past clients drift away, and reviews never get asked for. We put the routing, follow-up, and local visibility in place.',
      keywords: [
        'nail salon website design',
        'nail salon booking system',
        'nail salon lead handling system',
        'nail salon seo services',
        'nail salon reputation management system',
      ],
      canonical: '/industries/beauty-personal-care/nail-salons',
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
      title: 'Tell us where bookings are slipping',
      description:
        'If calls miss the front desk, past clients drift away, or reviews never get asked for, walk us through how the week runs and we will show you the first thing worth fixing.',
    },
  };
}

export const nailSalonsIndustryPageData: IndustryPageData = buildNailSalonsIndustryPageData();
