import {
  Calendar,
  Car,
  Clock3,
  MapPinned,
  MessageSquare,
  Search,
  ShieldCheck,
  Star,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildCarDetailingIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Car Detailing',
    title: 'A Driver Wants Their Car Booked In This Weekend. They Picked Whoever Replied First.',
    description:
      'Detailing enquiries are time-sensitive. People want to know what you offer, what it costs, and when you can fit them in. The detailer who answers first usually gets the job.',
    list: ['Slow replies', 'Lost bookings', 'No follow-up', 'Few reviews'],
    cssPrefix: 'car-detailing-hero',
  };

  const imageStripData = {
    badge: 'How Detailing Work Comes In',
    title: 'A driver wants their car booked in soon',
    description:
      'A weekend slot, a one-off treatment, a regular clean. They want to know what you offer, when you can do it, and that the car will come back looking right.',
    items: [
      {
        title: 'Booking enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing detailing enquiries',
      },
      {
        title: 'Slots and reminders',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing detailing booking',
      },
      {
        title: 'Repeat customers',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing detailing repeat customers',
      },
      {
        title: 'Reviews and referrals',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing detailing reviews',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'car-detailing-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where Bookings Slip',
    title: 'The work is there. The way enquiries get handled is what loses it.',
    benefits: [
      {
        icon: Car,
        title: 'Enquiries arrive while you are mid-job',
        description: 'You are working on a car. The phone rings. By the time you reply, they have booked the next detailer.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Booking turns into a back and forth',
        description: 'A simple weekend slot takes too many texts before anything is on the diary.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Past customers never come back',
        description: 'A great clean six months ago. Nobody nudged them for the next one.',
        iconType: 'accent' as const,
      },
      {
        icon: MapPinned,
        title: 'Online you look smaller than the work you do',
        description: 'Plenty of happy customers. Almost none ever wrote anything online.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to handle every enquiry, booking, and repeat visit',
    description: 'Each piece does one job. Together they keep work from slipping while you are in the bay.',
    featureCategories: [
      {
        title: 'Catch every call and form',
        description: 'Calls, missed calls, web forms — all in one place with the car and the request noted.',
        icon: MessageSquare,
        features: [
          'Missed calls texted back instantly',
          'Web enquiries sent to your phone',
          'Vehicle and request captured up front',
        ],
      },
      {
        title: 'Get the booking confirmed without phone tag',
        description: 'A clear way to offer a slot, confirm it, and remind them the day before.',
        icon: Calendar,
        features: [
          'Slots customers can pick themselves',
          'Confirmations and reminders sent automatically',
          'Arrival window in the same message',
        ],
      },
      {
        title: 'Bring past customers back',
        description: 'Gentle nudges for the next clean so the diary fills itself.',
        icon: Workflow,
        features: [
          'Past customers nudged automatically',
          'Open quotes warmed up',
          'Repeat work that does not depend on you remembering',
        ],
      },
      {
        title: 'Turn finished jobs into proof',
        description: 'A review request goes out at the right moment so the work shows up online.',
        icon: ShieldCheck,
        features: [
          'Review requests after every job',
          'Asked when the customer is happiest',
          'More reviews where local people search',
        ],
      },
      {
        title: 'Show up when local drivers search',
        description: 'Service pages and Google profile lined up so you appear when someone nearby needs help.',
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
          'Phone rings while you are mid-job. Goes to voicemail. Lost.',
          'A driver wants a slot. Three texts later, still no time set.',
          'A great customer last month. Nobody nudged them for the next clean.',
          'You finished a great job last week. They never got asked for a review.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it runs after',
        items: [
          'Missed call gets a text back inside a minute. They know you will reply.',
          'They pick a slot from a link. Confirmed. Reminder fires the day before.',
          'A gentle nudge goes out and the next booking lands without effort.',
          'A review request goes out the day they pick the car up. Reviews start stacking quietly.',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Where Most Detailers Start',
    title: 'Three stages, most detailers feel one more than the others',
    description: 'You do not have to fix everything at once. Start with whatever is leaking the most work.',
    packages: [
      {
        name: 'Stop calls and enquiries going missing',
        description: 'For when the phone rings out and quick enquiries sit unread.',
        price: 'Stage 1',
        priceDetail: 'Start here if missed calls are the leak',
        features: [
          'Missed-call text-back so they know you will reply',
          'One inbox for calls, forms, and web enquiries',
          'Vehicle and request noted before the conversation',
        ],
      },
      {
        name: 'Get the booking confirmed the same day',
        description: 'Once enquiries are caught, this stage takes the friction out of confirming a slot.',
        price: 'Stage 2',
        priceDetail: 'Start here if booking is where it slows down',
        features: [
          'Slots customers can pick themselves',
          'Reminders the day before so cars actually turn up',
          'Arrival window sent automatically',
        ],
        popular: true,
      },
      {
        name: 'Bring past customers back and turn jobs into reviews',
        description: 'For when work comes in fine but past customers never come back and reviews never get asked for.',
        price: 'Stage 3',
        priceDetail: 'Start here if repeat work and reputation are the weak spots',
        features: [
          'Past customers nudged automatically',
          'Open quotes warmed up',
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
        trigger: 'A driver rings while you are mid-job.',
        actions: [
          'They get a text inside a minute saying you will reply',
          'The text captures the car and the request',
          'The lead is held instead of going to the next detailer',
        ],
      },
      {
        trigger: 'A driver wants a weekend slot.',
        actions: [
          'They pick a slot from a link, no more text tag',
          'A reminder goes out the day before',
          'You see the booking with the car and the request attached',
        ],
      },
      {
        trigger: 'A past customer is due for their next clean.',
        actions: [
          'A gentle nudge goes out automatically',
          'They book again without you having to chase',
          'The diary keeps filling without extra marketing',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'car-detailing-workflow-examples',
  };

  const caseStudiesData = {
    category: 'automotive-services' as const,
    title: 'Related Case Studies',
    description: 'Examples of how the system supports automotive service businesses in this category.',
    limit: 2,
  };

  const exploreData = {
    badge: 'Related',
    description: 'The other parts of the system that come up most often for car detailers.',
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
        description: 'Strengthen detailer visibility and local trust.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description: 'Turn finished jobs into reviews and proof.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Things detailers usually ask',
    description: 'Straight answers about how this fits into a small detailing business.',
    faqs: [
      {
        question: 'I am in the bay all day. How much extra work is this?',
        answer:
          'Almost none after setup. Missed calls get answered by text on their own. Reminders fire by themselves. Past customers get nudged without you doing it.',
      },
      {
        question: 'Will customers feel like they are getting an automated response?',
        answer:
          'No. The messages are short and written like you would actually text someone. The aim is to hold the lead until you can reply.',
      },
      {
        question: 'Can it handle bookings that need a price first?',
        answer:
          'Yes. The first reply confirms a slot or sends a price, depending on how you usually work.',
      },
      {
        question: 'Do I have to chase reviews myself?',
        answer:
          'No. The request goes out on its own after the job is done, when the customer is happiest.',
      },
      {
        question: 'What about past customers we have not heard from in a while?',
        answer:
          'They get gentle nudges so the next booking happens without effort.',
      },
      {
        question: 'Do I need a brand new website?',
        answer:
          'Usually not. We look at what you have first. Often the gap is everything that happens after the form is sent.',
      },
    ],
  };

  return {
    slug: 'car-detailing',
    industries: ['car-detailing'],
    systems: [
      'smart-website-systems',
      'crm-automation',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['booking-systems', 'client-reactivation', 'review-generation'],
    type: 'detail',
    parentSlug: 'automotive-services',
    seo: {
      title: 'Car Detailing — Stop Losing Bookings to Slow Replies | MindWP',
      description:
        'For car detailers where calls go unanswered, past customers never come back, and reviews never get asked for. We put the routing, follow-up, and local visibility in place.',
      keywords: [
        'car detailing website design',
        'car detailing booking system',
        'car detailing lead handling system',
        'car detailing seo services',
        'car detailing reputation management system',
      ],
      canonical: '/industries/automotive-services/car-detailing',
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
      title: 'Tell us where the work is slipping',
      description:
        'If calls go to voicemail mid-job, past customers never come back, or reviews never get asked for, walk us through how the week runs and we will show you the first thing worth fixing.',
    },
  };
}

export const carDetailingIndustryPageData: IndustryPageData = buildCarDetailingIndustryPageData();
