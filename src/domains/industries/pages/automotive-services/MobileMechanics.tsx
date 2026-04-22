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

function buildMobileMechanicsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Mobile Mechanics',
    title: 'You Are Under a Bonnet on the Driveway. The Phone Keeps Ringing.',
    description:
      'Mobile mechanics lose work in the gaps between jobs. Calls go to voicemail while a job is in progress. Quotes get sent and forgotten. The drivers who needed help today book whoever rang back first.',
    list: ['Missed calls', 'Cold quotes', 'Slow callbacks', 'Few reviews'],
    cssPrefix: 'mobile-mechanics-hero',
  };

  const imageStripData = {
    badge: 'How Mobile Work Comes In',
    title: 'A driver wants to know if you can come out today',
    description:
      'A breakdown, a no-start, a quick service at the office car park. They want to know if you can fit them in, what it might cost, and that you will turn up.',
    items: [
      {
        title: 'Roadside and on-site enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing mobile mechanic enquiries',
      },
      {
        title: 'Booking and arrival window',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing mobile mechanic booking',
      },
      {
        title: 'Estimates and approvals',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing mobile mechanic estimates',
      },
      {
        title: 'Reviews and repeat customers',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing mobile mechanic reviews',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'mobile-mechanics-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where The Work Slips',
    title: 'The work is steady. The bit between calls is where it leaks.',
    description: 'Same handful of gaps for nearly every mobile mechanic.',
    benefits: [
      {
        icon: Car,
        title: 'The phone rings while you are mid-job',
        description: 'By the time you wipe your hands and ring back, they have already booked someone else.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Booking turns into texts back and forth',
        description: 'A simple slot agreement takes half a day of messages while you are on the road.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Quotes go out and never get chased',
        description: 'You sent a price the night before. By the next morning it is forgotten.',
        iconType: 'accent' as const,
      },
      {
        icon: MapPinned,
        title: 'The garage down the road has a wall of reviews. You do not.',
        description: 'You do good work. Online you look smaller because nobody was ever asked.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to handle every enquiry from the side of the road',
    description: 'Each piece does one job. Together they make sure work does not fall on the floor while you are mid-job.',
    featureCategories: [
      {
        title: 'Catch every call and form',
        description: 'Calls, forms, missed calls, web chat — they all land in one place with the car and the issue noted.',
        icon: MessageSquare,
        features: [
          'Missed calls texted back instantly',
          'Web enquiries sent to your phone',
          'Vehicle and fault captured up front',
        ],
      },
      {
        title: 'Get the visit booked without ten texts',
        description: 'A clear way to offer a slot, confirm it, and remind them the day before.',
        icon: Calendar,
        features: [
          'Slots people can pick themselves',
          'Confirmations and reminders sent automatically',
          'Arrival window in the same message',
        ],
      },
      {
        title: 'Stop quotes going quiet',
        description: 'Every estimate gets a follow-up on a schedule, even when you are flat out on the road.',
        icon: Workflow,
        features: [
          'Quotes chased automatically',
          'Open jobs in one place',
          'Old quotes warmed up instead of forgotten',
        ],
      },
      {
        title: 'Turn finished jobs into proof',
        description: 'A review request goes out at the right moment. Reputation catches up to the work.',
        icon: ShieldCheck,
        features: [
          'Review requests after every job',
          'Asked when the customer is happiest',
          'More five-stars where local people search',
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
    title: 'A normal day on the road, before and after',
    description: 'You still do the work. What changes is the part that used to depend on you remembering.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How it runs now',
        items: [
          'Phone rings while you are under a bonnet. Goes to voicemail. Lost.',
          'A driver wants a slot. Three texts later, you are still trying to confirm.',
          'Quote sent last night. No reply. Nobody chased it.',
          'You finished a great job last week. They never got asked for a review.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it runs after',
        items: [
          'Missed call gets a text back inside a minute. They know you will ring back.',
          'They pick a slot from a link. Confirmed. Reminder fires the day before.',
          'The quote gets a polite chase the next morning. You can see who is waiting.',
          'A review request goes out the day you finish. Reviews start stacking quietly.',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Where Most Mobile Mechanics Start',
    title: 'Three stages, most mechanics feel one more than the others',
    description: 'You do not have to fix everything at once. Start with whatever is leaking the most work.',
    packages: [
      {
        name: 'Stop calls and enquiries going missing',
        description: 'For when the phone rings out and quick enquiries sit unread.',
        price: 'Stage 1',
        priceDetail: 'Start here if missed calls are the leak',
        features: [
          'Missed-call text-back so they know you will ring',
          'One inbox for calls, forms, and web chat',
          'Vehicle and fault noted before the conversation',
        ],
      },
      {
        name: 'Get the visit booked the same day',
        description: 'Once enquiries are caught, this stage takes the friction out of confirming a slot.',
        price: 'Stage 2',
        priceDetail: 'Start here if booking is where it slows down',
        features: [
          'Slots customers can pick themselves',
          'Reminders the day before so jobs actually happen',
          'Arrival window sent automatically',
        ],
        popular: true,
      },
      {
        name: 'Keep quotes moving and turn jobs into reviews',
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
        trigger: 'You are mid-job on a driveway and the phone rings.',
        actions: [
          'They get a text inside a minute saying you will ring back',
          'The text captures the car and the issue',
          'The voicemail is not the only thing keeping the lead alive',
        ],
      },
      {
        trigger: 'A driver wants help before the weekend.',
        actions: [
          'They pick a slot from a link, no more text tag',
          'A reminder goes out the day before',
          'You get the booking with the car and the issue attached',
        ],
      },
      {
        trigger: 'You sent a quote a few days ago and have not heard back.',
        actions: [
          'A polite chase goes out automatically the next morning',
          'You can see all the open quotes in one place',
          'If they say yes, the booking happens without another five messages',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'mobile-mechanics-workflow-examples',
  };

  const caseStudiesData = {
    category: 'automotive-services' as const,
    title: 'Related Case Studies',
    description: 'Examples of how the system supports automotive service businesses in this category.',
    limit: 2,
  };

  const exploreData = {
    badge: 'Related',
    description: 'The other parts of the system that come up most often for mobile mechanics.',
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
        description: 'Support visit booking, reminders, and clearer next steps.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen mobile mechanic visibility and local trust.',
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
    title: 'Things mobile mechanics usually ask',
    description: 'Straight answers about how this fits into a one-van business.',
    faqs: [
      {
        question: 'I am on the road all day. How much extra work is this?',
        answer:
          'Almost none after setup. Missed calls get answered by text on their own. Quote chasing goes out on a schedule. Reminders fire by themselves.',
      },
      {
        question: 'Will customers feel like they are getting an automated response?',
        answer:
          'No. The messages are short and written like you would actually text someone. The aim is to hold the lead until you can ring back.',
      },
      {
        question: 'Can it handle quotes for jobs that need to be seen first?',
        answer:
          'Yes. The first reply confirms a visit and the quote follows after you have looked at the car.',
      },
      {
        question: 'Do I have to chase reviews myself?',
        answer:
          'No. The request goes out on its own after the job is done, when the customer is happiest.',
      },
      {
        question: 'What about quotes sitting in old text threads?',
        answer:
          'Those get worked in too. A lot of mobile mechanics find that warming up old quotes brings in real money before any new marketing kicks in.',
      },
      {
        question: 'Do I need a brand new website?',
        answer:
          'Usually not. We look at what you have first. Often the gap is everything that happens after the form is sent.',
      },
    ],
  };

  return {
    slug: 'mobile-mechanics',
    industries: ['mobile-mechanic'],
    systems: ['smart-website-systems', 'ai-lead-handling', 'local-seo-authority', 'reputation-review'],
    topics: ['lead-management', 'missed-calls', 'review-generation'],
    type: 'detail',
    parentSlug: 'automotive-services',
    seo: {
      title: 'Mobile Mechanics — Stop Losing Calls, Quotes, and Repeat Work | MindWP',
      description:
        'For mobile mechanics where calls go to voicemail mid-job, quotes go quiet, and reviews never get asked for. We put the routing, follow-up, and local visibility in place.',
      keywords: [
        'mobile mechanic website design',
        'mobile mechanic booking system',
        'mobile mechanic lead handling system',
        'mobile mechanic seo services',
        'mobile mechanic reputation management system',
      ],
      canonical: '/industries/automotive-services/mobile-mechanics',
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
        'If calls go to voicemail mid-job, quotes go quiet, or reviews never get asked for, walk us through how the day runs and we will show you the first thing worth fixing.',
    },
  };
}

export const mobileMechanicsIndustryPageData: IndustryPageData = buildMobileMechanicsIndustryPageData();
