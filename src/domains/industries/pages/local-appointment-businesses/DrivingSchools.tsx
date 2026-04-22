import {
  Calendar,
  Car,
  Clock3,
  MessageSquare,
  Search,
  ShieldCheck,
  Star,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildDrivingSchoolsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Driving Schools',
    title: 'A Learner Wants to Start This Month. They Picked Whoever Replied First.',
    description:
      'Driving school enquiries arrive while you are mid-lesson. Calls go to voicemail. By the next day the learner has booked another instructor.',
    list: ['Missed calls', 'Slow replies', 'Lost bookings', 'Few reviews'],
    cssPrefix: 'driving-schools-hero',
  };

  const imageStripData = {
    badge: 'How Learners Come In',
    title: 'A learner wants to get started or book more lessons',
    description:
      'A first lesson, a block of lessons, a test ahead. They want to know if you have space, what it costs, and that you will reply.',
    items: [
      {
        title: 'New learner enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing driving school enquiries',
      },
      {
        title: 'Lesson bookings and reminders',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing driving school bookings',
      },
      {
        title: 'Test prep and intensive courses',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing driving school test prep',
      },
      {
        title: 'Reviews and referrals',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing driving school reviews',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'driving-schools-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where Learners Slip',
    title: 'The diary is full but new learners and rebookings slip through',
    benefits: [
      {
        icon: Car,
        title: 'Calls miss while you are mid-lesson',
        description: 'You are in the car. The phone rings out. The learner books the next instructor.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Booking turns into a back and forth',
        description: 'A simple slot takes too many texts before anything is on the diary.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Past learners drift away',
        description: 'A learner did a few lessons. Nobody nudged them for the next block.',
        iconType: 'accent' as const,
      },
      {
        icon: ShieldCheck,
        title: 'Online you look smaller than the work you do',
        description: 'Plenty of passes. Almost no reviews to show for them.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to handle every enquiry, booking, and rebooking',
    description: 'Each piece does one job. Together they keep the diary full without you chasing.',
    featureCategories: [
      {
        title: 'Catch every call and form',
        description: 'Calls, missed calls, web forms — all in one place with the learner and the request noted.',
        icon: MessageSquare,
        features: [
          'Missed calls texted back instantly',
          'Web enquiries sent to your phone',
          'Learner and request captured up front',
        ],
      },
      {
        title: 'Get the lesson booked without phone tag',
        description: 'A clear way to offer a slot, confirm it, and remind them the day before.',
        icon: Calendar,
        features: [
          'Slots learners can pick themselves',
          'Confirmations and reminders sent automatically',
          'You see the day at a glance',
        ],
      },
      {
        title: 'Bring past learners back',
        description: 'Gentle nudges for the next block of lessons so the diary fills itself.',
        icon: Workflow,
        features: [
          'Past learners nudged automatically',
          'Rebookings without you chasing',
          'Test prep prompts at the right moment',
        ],
      },
      {
        title: 'Turn passes into proof',
        description: 'A review request goes out at the right moment so the work shows up online.',
        icon: ShieldCheck,
        features: [
          'Review requests after a pass',
          'Asked when the learner is happiest',
          'More reviews where local learners search',
        ],
      },
      {
        title: 'Show up when local learners search',
        description: 'Service pages and Google profile lined up so you appear when someone nearby looks for an instructor.',
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
          'Phone rings while you are mid-lesson. Goes to voicemail. Lost.',
          'A learner wants a slot. Three texts later, still no time set.',
          'A learner did a few lessons. Nobody nudged them for the next block.',
          'A learner just passed. They never got asked for a review.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it runs after',
        items: [
          'Missed call gets a text back inside a minute. They know you will reply.',
          'They pick a slot from a link. Confirmed. Reminder fires the day before.',
          'A gentle nudge goes out and the next block lands without effort.',
          'A review request goes out after the pass. Reviews start stacking quietly.',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Where Most Schools Start',
    title: 'Three stages, most schools feel one more than the others',
    description: 'You do not have to fix everything at once. Start with whatever is leaking the most learners.',
    packages: [
      {
        name: 'Stop calls and enquiries going missing',
        description: 'For when you are mid-lesson and new learner calls do not get answered.',
        price: 'Stage 1',
        priceDetail: 'Start here if missed calls are the leak',
        features: [
          'Missed-call text-back so they know you will reply',
          'One inbox for calls, forms, and web enquiries',
          'Learner and request captured before the conversation',
        ],
      },
      {
        name: 'Get the lesson booked the same day',
        description: 'Once enquiries are caught, this stage takes the friction out of confirming a slot.',
        price: 'Stage 2',
        priceDetail: 'Start here if booking is where it slows down',
        features: [
          'Slots learners can pick themselves',
          'Reminders the day before so lessons actually happen',
          'You see the day at a glance',
        ],
        popular: true,
      },
      {
        name: 'Bring past learners back and turn passes into reviews',
        description: 'For when the diary is fine but past learners drift away and reviews never get asked for.',
        price: 'Stage 3',
        priceDetail: 'Start here if rebookings and reputation are the weak spots',
        features: [
          'Past learners nudged automatically',
          'Test prep prompts at the right moment',
          'Review requests after a pass',
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
        trigger: 'You are mid-lesson and a new enquiry call rings out.',
        actions: [
          'They get a text inside a minute saying you will reply',
          'The text captures the learner and the request',
          'The lead is held instead of going to the next instructor',
        ],
      },
      {
        trigger: 'A learner wants their next lesson booked.',
        actions: [
          'They pick a slot from a link, no more text tag',
          'A reminder goes out the day before',
          'You see the day at a glance',
        ],
      },
      {
        trigger: 'A past learner is overdue for the next block.',
        actions: [
          'A gentle nudge goes out automatically',
          'They book again without you chasing',
          'The diary keeps filling without extra marketing',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'driving-schools-workflow-examples',
  };

  const caseStudiesData = {
    category: 'local-appointment-businesses' as const,
    title: 'Related Case Studies',
    description: 'Examples of how the system supports local appointment businesses in this category.',
    limit: 2,
  };

  const exploreData = {
    badge: 'Related',
    description: 'The other parts of the system that come up most often for driving schools.',
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
        description: 'Support lesson booking, reminders, and clearer next steps.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen instructor visibility and local trust.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description: 'Turn passes into reviews and proof.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Things driving schools usually ask',
    description: 'Straight answers about how this fits into a busy instructor diary.',
    faqs: [
      {
        question: 'I am in the car most of the day. How much extra work is this?',
        answer:
          'Almost none after setup. Missed calls get answered by text on their own. Reminders fire by themselves. Rebooking nudges go out automatically.',
      },
      {
        question: 'Will learners feel like they are getting an automated response?',
        answer:
          'No. The messages are short and written like you would actually text someone. The aim is to hold the lead until you can reply.',
      },
      {
        question: 'Can it handle blocks of lessons and intensive courses?',
        answer:
          'Yes. The first reply confirms a first lesson or sets up the block, depending on how you usually work.',
      },
      {
        question: 'Do I have to chase reviews myself?',
        answer:
          'No. The request goes out on its own after a pass, when the learner is happiest.',
      },
      {
        question: 'What about learners we have not seen in a while?',
        answer:
          'They get gentle nudges so the next block happens without effort.',
      },
      {
        question: 'Do I need a brand new website?',
        answer:
          'Usually not. We look at what you have first. Often the gap is everything that happens after the form is sent.',
      },
    ],
  };

  return {
    slug: 'driving-schools',
    industries: ['driving-school'],
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
      title: 'Driving Schools — Stop Losing Bookings to Missed Calls and Slow Replies | MindWP',
      description:
        'For driving schools where calls go to voicemail mid-lesson, learners drift away, and reviews never get asked for. We put the routing, follow-up, and local visibility in place.',
      keywords: [
        'driving school website design',
        'driving school booking system',
        'driving school lead handling system',
        'driving school seo services',
        'driving school reputation management system',
      ],
      canonical: '/industries/local-appointment-businesses/driving-schools',
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
        'If calls go to voicemail mid-lesson, learners drift away, or reviews never get asked for, walk us through how the week runs and we will show you the first thing worth fixing.',
    },
  };
}

export const drivingSchoolsIndustryPageData: IndustryPageData = buildDrivingSchoolsIndustryPageData();
