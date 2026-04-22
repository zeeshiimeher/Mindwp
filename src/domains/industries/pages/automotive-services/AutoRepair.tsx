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

function buildAutoRepairIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Auto Repair Shops',
    title: 'Calls Come In Mid-Job. Quotes Get Sent. Then Silence.',
    description:
      'A driver rings while the bay is full. The call goes to voicemail. A quote goes out and never gets chased. Most repair shops do not lose work because of skill — they lose it in the gaps between enquiry, booking, and follow-up.',
    list: ['Missed calls', 'Quiet quotes', 'Slow callbacks', 'Few reviews'],
    cssPrefix: 'auto-repair-hero',
  };

  const imageStripData = {
    badge: 'How Repair Work Comes In',
    title: 'A driver wants to know if you can fit them in today',
    description:
      'A warning light, a noise, an MOT issue. They want to know if you can help, what it might cost, and whether they can trust the shop.',
    items: [
      {
        title: 'Fault and repair enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing auto repair fault enquiries',
      },
      {
        title: 'Booking and drop-off',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing auto repair booking',
      },
      {
        title: 'Quotes and approvals',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing auto repair quotes',
      },
      {
        title: 'Reviews and return visits',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing auto repair reviews',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'auto-repair-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where The Work Slips',
    title: 'The shop is busy. The shop is also leaking.',
    benefits: [
      {
        icon: Car,
        title: 'The phone rings while everyone is on a job',
        description: 'By the time someone checks voicemail, the driver has already booked the next garage.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Booking turns into a back and forth',
        description: 'A simple drop-off slot takes half a day of texts before anything is on the diary.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Quotes go out and never get chased',
        description: 'A price gets sent. The driver thinks about it. Nobody follows up.',
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
    title: 'A steadier way to handle every enquiry, from first ring to final review',
    description: 'Each piece does one job. Together they keep work from falling on the floor while the team is mid-job.',
    featureCategories: [
      {
        title: 'Catch every call and form',
        description: 'Calls, missed calls, web forms — all in one place with the car and the issue noted.',
        icon: MessageSquare,
        features: [
          'Missed calls texted back instantly',
          'Web enquiries sent to the right person',
          'Vehicle and fault captured up front',
        ],
      },
      {
        title: 'Get the booking confirmed without phone tag',
        description: 'A clear way to offer a slot, confirm it, and remind them the day before.',
        icon: Calendar,
        features: [
          'Drop-off slots customers can pick',
          'Confirmations and reminders sent automatically',
          'Front desk sees what is coming in',
        ],
      },
      {
        title: 'Stop quotes going quiet',
        description: 'Every quote gets a follow-up on a schedule, even when the team is flat out.',
        icon: Workflow,
        features: [
          'Quotes chased automatically',
          'Open quotes in one place',
          'Old quotes warmed up instead of forgotten',
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
    title: 'A normal day at the shop, before and after',
    description: 'The workshop still runs the workshop. What changes is the part that used to depend on someone remembering.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How it runs now',
        items: [
          'Phone rings during a job. Goes to voicemail. Nobody hears it until later.',
          'A driver wants a slot. Three texts later, still no time set.',
          'Quote sent on Monday. By Friday nobody has chased it.',
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
          'A review request goes out the day they pick the car up. Reviews start stacking quietly.',
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
        description: 'For when the phone rings out and quick enquiries sit unread.',
        price: 'Stage 1',
        priceDetail: 'Start here if missed calls are the leak',
        features: [
          'Missed-call text-back so they know you will ring',
          'One inbox for calls, forms, and web enquiries',
          'Vehicle and fault noted before the conversation',
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
          'Clear handover between front desk and workshop',
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
    description: 'Small handoffs that used to depend on someone remembering.',
    workflows: [
      {
        trigger: 'The bay is full and a driver rings about a fault.',
        actions: [
          'They get a text inside a minute saying you will ring back',
          'The text captures the car and the issue',
          'The lead is held instead of going to the next garage',
        ],
      },
      {
        trigger: 'A driver wants to drop the car off this week.',
        actions: [
          'They pick a slot from a link, no more text tag',
          'A reminder goes out the day before',
          'Front desk sees the booking with the car and the fault attached',
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
    cssPrefix: 'auto-repair-workflow-examples',
  };

  const caseStudiesData = {
    category: 'automotive-services' as const,
    title: 'Related Case Studies',
    description: 'Examples of how the system supports automotive service businesses in this category.',
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
        description: 'Support booking, reminders, and clearer next steps.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen repair shop visibility and local trust.',
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
    title: 'Things repair shops usually ask',
    description: 'Straight answers about how this fits into a workshop that is already busy.',
    faqs: [
      {
        question: 'We are already flat out. How much extra work is this for the team?',
        answer:
          'Almost none after setup. Missed calls get answered by text on their own. Quote chasing goes out on a schedule. Reminders fire by themselves.',
      },
      {
        question: 'Will customers feel like they are getting an automated response?',
        answer:
          'No. The messages are short and written like you would actually text someone. The aim is to hold the lead until you can ring back.',
      },
      {
        question: 'We tried online booking before and it was more hassle than help. Why now?',
        answer:
          'Usually the booking tool was not connected to anything else. Here the slot, the vehicle, and the issue all land in one place the front desk already uses.',
      },
      {
        question: 'Do we have to chase reviews ourselves?',
        answer:
          'No. The request goes out on its own after the job is done, when the customer is happiest.',
      },
      {
        question: 'What about old quotes sitting in the inbox?',
        answer:
          'Those get worked in too. Many shops find that warming up old quotes brings in real money before any new marketing kicks in.',
      },
      {
        question: 'Do we need a brand new website?',
        answer:
          'Usually not. We look at what you have first. Often the gap is everything that happens after the form is sent.',
      },
    ],
  };

  return {
    slug: 'auto-repair',
    industries: ['auto-repair'],
    systems: [
      'smart-website-systems',
      'ai-lead-handling',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['lead-management', 'missed-calls', 'review-generation'],
    type: 'detail',
    parentSlug: 'automotive-services',
    seo: {
      title: 'Auto Repair Shops — Stop Losing Calls, Quotes, and Repeat Work | MindWP',
      description:
        'For auto repair shops where calls get missed during jobs, quotes go quiet, and reviews never get asked for. We put the routing, follow-up, and local visibility in place.',
      keywords: [
        'auto repair website design',
        'auto repair booking system',
        'mechanic lead handling system',
        'auto repair seo services',
        'auto repair reputation management system',
      ],
      canonical: '/industries/automotive-services/auto-repair',
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
        'If calls go to voicemail mid-job, quotes go quiet, or reviews never get asked for, walk us through how the shop runs and we will show you the first thing worth fixing.',
    },
  };
}

export const autoRepairIndustryPageData: IndustryPageData = buildAutoRepairIndustryPageData();
