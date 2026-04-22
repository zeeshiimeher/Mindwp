import {
  Brush,
  Calendar,
  Clock3,
  MessageSquare,
  Palette,
  Search,
  ShieldCheck,
  Star,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildTattooStudiosIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Tattoo Studios',
    title: 'A Client Wants a Consultation Soon. They Picked Whoever Replied First.',
    description:
      'Tattoo enquiries arrive while you are tattooing. The phone rings out. The client books the next studio.',
    list: ['Slow replies', 'Lost consultations', 'No deposit', 'Few reviews'],
    cssPrefix: 'tattoo-studios-hero',
  };

  const imageStripData = {
    badge: 'How Clients Come In',
    title: 'A client wants a consultation about a piece',
    description:
      'A new piece, a cover-up, a touch-up. They want to know if you can do it, what it might cost, and that the studio will reply.',
    items: [
      {
        title: 'New client enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing tattoo studio enquiries',
      },
      {
        title: 'Consultations and deposits',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing tattoo studio consultations',
      },
      {
        title: 'Bookings and reminders',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing tattoo studio bookings',
      },
      {
        title: 'Reviews and referrals',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing tattoo studio reviews',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'tattoo-studios-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where Bookings Slip',
    title: 'The chair is full but new clients and consultations slip through',
    benefits: [
      {
        icon: Brush,
        title: 'Enquiries arrive while you are tattooing',
        description: 'You are mid-piece. The phone rings out. The client books the next studio.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Consultations take days to arrange',
        description: 'A simple consultation takes too many messages before anything is on the diary.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Deposits go quiet',
        description: 'A consultation went well. The deposit never came. Nobody followed up.',
        iconType: 'accent' as const,
      },
      {
        icon: Palette,
        title: 'Online you look smaller than the work you do',
        description: 'Plenty of finished pieces. Almost no reviews to show for them.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to handle every enquiry, consultation, and booking',
    description: 'Each piece does one job. Together they keep the chair full without you chasing.',
    featureCategories: [
      {
        title: 'Catch every call and form',
        description: 'Calls, missed calls, web forms — all in one place with the client and the piece noted.',
        icon: MessageSquare,
        features: [
          'Missed calls texted back instantly',
          'Web enquiries sent to the studio',
          'Client and piece captured up front',
        ],
      },
      {
        title: 'Get the consultation booked without phone tag',
        description: 'A clear way to offer a slot, confirm it, and remind them the day before.',
        icon: Calendar,
        features: [
          'Consultation slots clients can pick themselves',
          'Confirmations and reminders sent automatically',
          'Studio sees the day at a glance',
        ],
      },
      {
        title: 'Stop deposits going quiet',
        description: 'Every consultation gets a follow-up on a schedule, even when the chair is busy.',
        icon: Workflow,
        features: [
          'Deposit reminders sent automatically',
          'Open consultations in one place',
          'Old enquiries warmed up instead of forgotten',
        ],
      },
      {
        title: 'Turn finished pieces into proof',
        description: 'A review request goes out at the right moment so the work shows up online.',
        icon: ShieldCheck,
        features: [
          'Review requests after a piece',
          'Asked when the client is happiest',
          'More reviews where local people search',
        ],
      },
      {
        title: 'Show up when local people search',
        description: 'Service pages and Google profile lined up so you appear when someone nearby looks for a studio.',
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
          'Phone rings while you are tattooing. Goes to voicemail. Lost.',
          'A client wants a consultation. Three messages later, still no time set.',
          'A consultation went well last week. The deposit never came.',
          'You finished a great piece last week. They never got asked for a review.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it runs after',
        items: [
          'Missed call gets a text back inside a minute. They know the studio will reply.',
          'They pick a slot from a link. Confirmed. Reminder fires the day before.',
          'A polite reminder goes out about the deposit. You can see who is still deciding.',
          'A review request goes out after the piece. Reviews start stacking quietly.',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Where Most Studios Start',
    title: 'Three stages, most studios feel one more than the others',
    description: 'You do not have to fix everything at once. Start with whatever is leaking the most clients.',
    packages: [
      {
        name: 'Stop calls and enquiries going missing',
        description: 'For when you are tattooing and quick enquiries sit unread.',
        price: 'Stage 1',
        priceDetail: 'Start here if missed calls are the leak',
        features: [
          'Missed-call text-back so they know you will reply',
          'One inbox for calls, forms, and web enquiries',
          'Client and piece captured before the conversation',
        ],
      },
      {
        name: 'Get the consultation booked the same week',
        description: 'Once enquiries are caught, this stage takes the friction out of confirming a consultation.',
        price: 'Stage 2',
        priceDetail: 'Start here if booking is where it slows down',
        features: [
          'Consultation slots clients can pick themselves',
          'Reminders the day before so consultations actually happen',
          'Studio sees the day at a glance',
        ],
        popular: true,
      },
      {
        name: 'Keep deposits moving and turn pieces into reviews',
        description: 'For when consultations come in fine but deposits go quiet and reviews never get asked for.',
        price: 'Stage 3',
        priceDetail: 'Start here if follow-up and reputation are the weak spots',
        features: [
          'Deposit reminders sent automatically',
          'Past clients nudged back in',
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
        trigger: 'You are tattooing and a new enquiry call rings out.',
        actions: [
          'They get a text inside a minute saying the studio will reply',
          'The text captures the client and the piece',
          'The lead is held instead of going to the next studio',
        ],
      },
      {
        trigger: 'A client wants a consultation this week.',
        actions: [
          'They pick a slot from a link, no more text tag',
          'A reminder goes out the day before',
          'You see the day at a glance',
        ],
      },
      {
        trigger: 'A consultation went well and the deposit has not come in.',
        actions: [
          'A polite reminder goes out automatically',
          'Open consultations are visible in one place',
          'If they pay, the booking is locked in without another five messages',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'tattoo-studios-workflow-examples',
  };

  const caseStudiesData = {
    category: 'local-appointment-businesses' as const,
    title: 'Related Case Studies',
    description: 'Examples of how the system supports local appointment businesses in this category.',
    limit: 2,
  };

  const exploreData = {
    badge: 'Related',
    description: 'The other parts of the system that come up most often for tattoo studios.',
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
        description: 'Support consultation booking, reminders, and clearer next steps.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen studio visibility and local trust.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description: 'Turn finished pieces into reviews and proof.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Things tattoo studios usually ask',
    description: 'Straight answers about how this fits into a busy studio.',
    faqs: [
      {
        question: 'I am tattooing most of the day. How much extra work is this?',
        answer:
          'Almost none after setup. Missed calls get answered by text on their own. Deposit reminders go out on a schedule. Booking reminders fire by themselves.',
      },
      {
        question: 'Will clients feel like they are getting an automated response?',
        answer:
          'No. The messages are short and written like the studio would actually text someone. The aim is to hold the lead until you can reply.',
      },
      {
        question: 'Can it handle pieces that need a consultation first?',
        answer:
          'Yes. The first reply confirms a consultation and the booking follows after the deposit.',
      },
      {
        question: 'Do we have to chase reviews ourselves?',
        answer:
          'No. The request goes out on its own after the piece, when the client is happiest.',
      },
      {
        question: 'What about consultations sitting without deposits?',
        answer:
          'Those get worked in too. Many studios find that warming up old consultations brings in real bookings before any new marketing kicks in.',
      },
      {
        question: 'Do we need a brand new website?',
        answer:
          'Usually not. We look at what you have first. Often the gap is everything that happens after the form is sent.',
      },
    ],
  };

  return {
    slug: 'tattoo-studios',
    industries: ['tattoo-studio'],
    systems: [
      'smart-website-systems',
      'crm-automation',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['booking-systems', 'follow-up', 'review-generation'],
    type: 'detail',
    parentSlug: 'local-appointment-businesses',
    seo: {
      title: 'Tattoo Studios — Stop Losing Consultations and Deposits | MindWP',
      description:
        'For tattoo studios where calls go to voicemail mid-piece, deposits go quiet, and reviews never get asked for. We put the routing, follow-up, and local visibility in place.',
      keywords: [
        'tattoo studio website design',
        'tattoo studio booking system',
        'tattoo studio lead handling system',
        'tattoo studio seo services',
        'tattoo studio reputation management system',
      ],
      canonical: '/industries/local-appointment-businesses/tattoo-studios',
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
        'If calls go to voicemail mid-piece, deposits go quiet, or reviews never get asked for, walk us through how the week runs and we will show you the first thing worth fixing.',
    },
  };
}

export const tattooStudiosIndustryPageData: IndustryPageData = buildTattooStudiosIndustryPageData();
