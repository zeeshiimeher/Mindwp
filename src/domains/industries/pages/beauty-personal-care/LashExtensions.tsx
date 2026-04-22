import {
  Calendar,
  Clock3,
  Eye,
  MessageSquare,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildLashExtensionsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Lash Studios',
    title: 'A Client Wants a Set Before the Weekend. They Picked Whoever Replied First.',
    description:
      'Lash enquiries are time-sensitive. The client wants a set before an event or a refill before their last set drops out. The studio that answers first usually gets the booking.',
    list: ['Slow replies', 'Lost bookings', 'No infills', 'Few reviews'],
    cssPrefix: 'lash-extensions-hero',
  };

  const imageStripData = {
    badge: 'How Bookings Come In',
    title: 'A client wants a set or a refill soon',
    description:
      'A new set, a refill, an event coming up. They want to know if you can fit them in, when, and that the work will look right.',
    items: [
      {
        title: 'New client enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing lash studio enquiries',
      },
      {
        title: 'Booking and reminders',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing lash studio booking',
      },
      {
        title: 'Refills and repeat visits',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing lash refills',
      },
      {
        title: 'Reviews and referrals',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing lash studio reviews',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'lash-extensions-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where Bookings Slip',
    title: 'The chair is full but new clients and refills slip through',
    benefits: [
      {
        icon: Eye,
        title: 'Enquiries arrive while you are mid-set',
        description: 'You are working on a client. The phone goes. By the time you reply, they have booked the next studio.',
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
        title: 'Refill clients drift away',
        description: 'A new set six weeks ago. Nobody nudged them for the refill. They went elsewhere.',
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
    title: 'A steadier way to handle every enquiry, booking, and refill',
    description: 'Each piece does one job. Together they keep the chair full without you chasing.',
    featureCategories: [
      {
        title: 'Catch every call and form',
        description: 'Calls, missed calls, web forms — all in one place with the client and the service noted.',
        icon: MessageSquare,
        features: [
          'Missed calls texted back instantly',
          'Web enquiries sent to your phone',
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
        title: 'Bring refill clients back on time',
        description: 'Gentle nudges before the next refill so the diary fills itself.',
        icon: Workflow,
        features: [
          'Refill reminders sent automatically',
          'Past clients nudged at the right moment',
          'Repeat visits without you chasing',
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
        description: 'Service pages and Google profile lined up so you appear when someone nearby looks for a lash studio.',
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
    description: 'You still do the work. What changes is the part that used to depend on you remembering.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How it runs now',
        items: [
          'Phone rings while you are mid-set. Goes to voicemail. Lost.',
          'A new client wants a slot. Three messages later, still no time set.',
          'A new set six weeks ago. Nobody nudged them for the refill.',
          'You finished a great set last week. They never got asked for a review.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it runs after',
        items: [
          'Missed call gets a text back inside a minute. They know you will reply.',
          'They pick a slot from a link. Confirmed. Reminder fires the day before.',
          'A gentle nudge goes out and the refill lands without effort.',
          'A review request goes out after the visit. Reviews start stacking quietly.',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Where Most Studios Start',
    title: 'Three stages, most studios feel one more than the others',
    description: 'You do not have to fix everything at once. Start with whatever is leaking the most work.',
    packages: [
      {
        name: 'Stop calls and enquiries going missing',
        description: 'For when you are mid-set and new client enquiries do not get answered.',
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
        name: 'Bring refill clients back and turn visits into reviews',
        description: 'For when the diary is fine but refill clients drift away and reviews never get asked for.',
        price: 'Stage 3',
        priceDetail: 'Start here if repeat visits and reputation are the weak spots',
        features: [
          'Refill reminders sent automatically',
          'Past clients nudged at the right moment',
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
        trigger: 'You are mid-set and a new enquiry call rings out.',
        actions: [
          'They get a text inside a minute saying you will reply',
          'The text captures the client and the service',
          'The lead is held instead of going to the next studio',
        ],
      },
      {
        trigger: 'A client wants a slot before an event.',
        actions: [
          'They pick a slot from a link, no more text tag',
          'A reminder goes out the day before',
          'You see who is coming in and what they want',
        ],
      },
      {
        trigger: 'A past client is due for a refill.',
        actions: [
          'A gentle nudge goes out automatically at the right moment',
          'They book again without you having to chase',
          'The diary keeps filling without extra marketing',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'lash-extensions-workflow-examples',
  };

  const caseStudiesData = {
    category: 'beauty-personal-care' as const,
    title: 'Related Case Studies',
    description: 'Examples of how the system supports beauty and personal care businesses in this category.',
    limit: 2,
  };

  const exploreData = {
    badge: 'Related',
    description: 'The other parts of the system that come up most often for lash studios.',
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
        description: 'Strengthen lash studio visibility and local trust.',
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
    title: 'Things lash studios usually ask',
    description: 'Straight answers about how this fits into a busy studio.',
    faqs: [
      {
        question: 'I am mid-set most of the day. How much extra work is this?',
        answer:
          'Almost none after setup. Missed calls get answered by text on their own. Refill nudges go out by themselves. Reminders fire automatically.',
      },
      {
        question: 'Will clients feel like they are getting an automated response?',
        answer:
          'No. The messages are short and written like you would actually text someone. The aim is to hold the lead until you can reply.',
      },
      {
        question: 'Can it handle bookings that need a consultation first?',
        answer:
          'Yes. The first reply confirms a slot or sets up the consultation, depending on how you usually work.',
      },
      {
        question: 'Do I have to chase reviews myself?',
        answer:
          'No. The request goes out on its own after the visit, when the client is happiest.',
      },
      {
        question: 'What about clients we have not seen in a while?',
        answer:
          'They get gentle refill nudges so the next booking happens without effort.',
      },
      {
        question: 'Do I need a brand new website?',
        answer:
          'Usually not. We look at what you have first. Often the gap is everything that happens after the form is sent.',
      },
    ],
  };

  return {
    slug: 'lash-lift-and-extensions',
    industries: ['lash-extensions'],
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
      title: 'Lash Studios — Stop Losing Bookings and Refills | MindWP',
      description:
        'For lash studios where calls go to voicemail, refill clients drift away, and reviews never get asked for. We put the routing, follow-up, and local visibility in place.',
      keywords: [
        'lash studio website design',
        'lash booking system',
        'lash studio lead handling system',
        'lash studio seo services',
        'lash studio reputation management system',
      ],
      canonical: '/industries/beauty-personal-care/lash-lift-and-extensions',
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
        'If calls go to voicemail mid-set, refill clients drift away, or reviews never get asked for, walk us through how the week runs and we will show you the first thing worth fixing.',
    },
  };
}

export const lashExtensionsIndustryPageData: IndustryPageData = buildLashExtensionsIndustryPageData();
