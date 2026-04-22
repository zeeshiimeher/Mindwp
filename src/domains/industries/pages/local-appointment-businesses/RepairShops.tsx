import {
  Calendar,
  Clock3,
  MessageSquare,
  Search,
  ShieldCheck,
  Star,
  Workflow,
  Wrench,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildRepairShopsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Repair Shops',
    title: 'A Customer Wants Their Item Looked At Today. They Picked Whoever Replied First.',
    description:
      'Repair enquiries arrive while you are at the bench. Calls go to voicemail. The customer drops it off at the next shop instead.',
    list: ['Missed calls', 'Slow replies', 'Lost bookings', 'Few reviews'],
    cssPrefix: 'repair-shops-hero',
  };

  const imageStripData = {
    badge: 'How Repairs Come In',
    title: 'A customer wants something fixed soon',
    description:
      'A device, a small appliance, anything they want sorted. They want to know if you can look at it, what it might cost, and when they can collect.',
    items: [
      {
        title: 'Repair enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing repair shop enquiries',
      },
      {
        title: 'Drop-offs and bookings',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing repair shop drop-offs',
      },
      {
        title: 'Quotes and approvals',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing repair shop quotes',
      },
      {
        title: 'Reviews and repeat customers',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing repair shop reviews',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'repair-shops-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where Repairs Slip',
    title: 'The bench is full but new customers and repeat work slip through',
    benefits: [
      {
        icon: Wrench,
        title: 'Calls miss while you are at the bench',
        description: 'Hands are busy. The phone rings out. The customer drops it at the next shop.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Booking turns into a back and forth',
        description: 'A simple drop-off takes too many messages before anything is on the diary.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Quotes go out and never get chased',
        description: 'A price gets sent. The customer thinks about it. Nobody follows up.',
        iconType: 'accent' as const,
      },
      {
        icon: ShieldCheck,
        title: 'Online you look smaller than the work you do',
        description: 'Plenty of finished repairs. Almost no reviews to show for them.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to handle every enquiry, drop-off, and quote',
    description: 'Each piece does one job. Together they keep work coming in without you chasing.',
    featureCategories: [
      {
        title: 'Catch every call and form',
        description: 'Calls, missed calls, web forms — all in one place with the customer and the item noted.',
        icon: MessageSquare,
        features: [
          'Missed calls texted back instantly',
          'Web enquiries sent to your phone',
          'Customer and item captured up front',
        ],
      },
      {
        title: 'Get the drop-off booked without phone tag',
        description: 'A clear way to offer a slot, confirm it, and remind them the day before.',
        icon: Calendar,
        features: [
          'Slots customers can pick themselves',
          'Confirmations and reminders sent automatically',
          'You see the day at a glance',
        ],
      },
      {
        title: 'Stop quotes going quiet',
        description: 'Every quote gets a follow-up on a schedule, even when the bench is full.',
        icon: Workflow,
        features: [
          'Quotes chased automatically',
          'Open quotes in one place',
          'Old quotes warmed up instead of forgotten',
        ],
      },
      {
        title: 'Turn finished repairs into proof',
        description: 'A review request goes out at the right moment so the work shows up online.',
        icon: ShieldCheck,
        features: [
          'Review requests after a repair',
          'Asked when the customer is happiest',
          'More reviews where local people search',
        ],
      },
      {
        title: 'Show up when local people search',
        description: 'Service pages and Google profile lined up so you appear when someone nearby needs a repair.',
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
          'Phone rings while you are at the bench. Goes to voicemail. Lost.',
          'A customer wants to drop something off. Three messages later, still no time set.',
          'Quote sent on Monday. By Friday nobody has chased it.',
          'You finished a repair last week. They never got asked for a review.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it runs after',
        items: [
          'Missed call gets a text back inside a minute. They know you will reply.',
          'They pick a slot from a link. Confirmed. Reminder fires the day before.',
          'The quote gets a polite chase the next morning. You can see who is waiting.',
          'A review request goes out the day they collect. Reviews start stacking quietly.',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Where Most Shops Start',
    title: 'Three stages, most shops feel one more than the others',
    description: 'You do not have to fix everything at once. Start with whatever is leaking the most work.',
    packages: [
      {
        name: 'Stop calls and enquiries going missing',
        description: 'For when you are at the bench and quick enquiries sit unread.',
        price: 'Stage 1',
        priceDetail: 'Start here if missed calls are the leak',
        features: [
          'Missed-call text-back so they know you will reply',
          'One inbox for calls, forms, and web enquiries',
          'Customer and item noted before the conversation',
        ],
      },
      {
        name: 'Get the drop-off booked the same day',
        description: 'Once enquiries are caught, this stage takes the friction out of confirming a slot.',
        price: 'Stage 2',
        priceDetail: 'Start here if booking is where it slows down',
        features: [
          'Slots customers can pick themselves',
          'Reminders the day before so drop-offs actually happen',
          'You see the day at a glance',
        ],
        popular: true,
      },
      {
        name: 'Keep quotes moving and turn repairs into reviews',
        description: 'For when work comes in fine but quotes go quiet and reviews never get asked for.',
        price: 'Stage 3',
        priceDetail: 'Start here if follow-up and reputation are the weak spots',
        features: [
          'Quotes chased automatically',
          'Past customers nudged for return work',
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
        trigger: 'You are at the bench and a new enquiry call rings out.',
        actions: [
          'They get a text inside a minute saying you will reply',
          'The text captures the customer and the item',
          'The lead is held instead of going to the next shop',
        ],
      },
      {
        trigger: 'A customer wants to drop something off this week.',
        actions: [
          'They pick a slot from a link, no more text tag',
          'A reminder goes out the day before',
          'You see the day at a glance',
        ],
      },
      {
        trigger: 'You sent a quote a few days ago and have not heard back.',
        actions: [
          'A polite chase goes out automatically',
          'Open quotes are visible in one place',
          'If they say yes, the work goes on the bench without another five messages',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'repair-shops-workflow-examples',
  };

  const caseStudiesData = {
    category: 'local-appointment-businesses' as const,
    title: 'Related Case Studies',
    description: 'Examples of how the system supports local appointment businesses in this category.',
    limit: 2,
  };

  const exploreData = {
    badge: 'Related',
    description: 'The other parts of the system that come up most often for repair shops.',
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
        description: 'Support drop-off booking, reminders, and clearer next steps.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen shop visibility and local trust.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description: 'Turn finished repairs into reviews and proof.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Things repair shops usually ask',
    description: 'Straight answers about how this fits into a busy bench.',
    faqs: [
      {
        question: 'I am at the bench most of the day. How much extra work is this?',
        answer:
          'Almost none after setup. Missed calls get answered by text on their own. Quote chasing goes out on a schedule. Reminders fire by themselves.',
      },
      {
        question: 'Will customers feel like they are getting an automated response?',
        answer:
          'No. The messages are short and written like you would actually text someone. The aim is to hold the lead until you can reply.',
      },
      {
        question: 'Can it handle quotes for repairs that need to be looked at first?',
        answer:
          'Yes. The first reply confirms a drop-off and the quote follows after the inspection.',
      },
      {
        question: 'Do I have to chase reviews myself?',
        answer:
          'No. The request goes out on its own after the customer collects, when they are happiest.',
      },
      {
        question: 'What about old quotes sitting in the inbox?',
        answer:
          'Those get worked in too. Many shops find that warming up old quotes brings in real money before any new marketing kicks in.',
      },
      {
        question: 'Do I need a brand new website?',
        answer:
          'Usually not. We look at what you have first. Often the gap is everything that happens after the form is sent.',
      },
    ],
  };

  return {
    slug: 'repair-shops',
    industries: ['repair-shop'],
    systems: [
      'smart-website-systems',
      'crm-automation',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['lead-response-time', 'follow-up', 'review-generation'],
    type: 'detail',
    parentSlug: 'local-appointment-businesses',
    seo: {
      title: 'Repair Shops — Stop Losing Bookings to Missed Calls and Quiet Quotes | MindWP',
      description:
        'For repair shops where calls go to voicemail at the bench, quotes stall, and reviews never get asked for. We put the routing, follow-up, and local visibility in place.',
      keywords: [
        'repair shop website design',
        'repair shop booking system',
        'repair shop lead handling system',
        'repair shop seo services',
        'repair shop reputation management system',
      ],
      canonical: '/industries/local-appointment-businesses/repair-shops',
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
      title: 'Tell us where work is slipping',
      description:
        'If calls go to voicemail at the bench, quotes stall, or reviews never get asked for, walk us through how the week runs and we will show you the first thing worth fixing.',
    },
  };
}

export const repairShopsIndustryPageData: IndustryPageData = buildRepairShopsIndustryPageData();
