import {
  Calendar,
  Clock3,
  HeartPulse,
  MessageSquare,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildSmallMedSpasIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Med Spas',
    title: 'A Client Wants a Consultation This Week. They Picked Whoever Replied First.',
    description:
      'Med spa enquiries are time-sensitive. The client is comparing a few clinics. The clinic that answers first usually gets the consultation.',
    list: ['Slow replies', 'Lost consultations', 'No follow-up', 'Few reviews'],
    cssPrefix: 'small-med-spas-hero',
  };

  const imageStripData = {
    badge: 'How Clients Come In',
    title: 'A client wants to know if you can help',
    description:
      'A treatment, a course, a follow-up. They want to know what you offer, what it costs, and that the clinic feels in control.',
    items: [
      {
        title: 'New client enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing med spa enquiries',
      },
      {
        title: 'Consultations and bookings',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing med spa consultations',
      },
      {
        title: 'Treatment plans and follow-up',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing med spa treatment plans',
      },
      {
        title: 'Reviews and referrals',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing med spa reviews',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'small-med-spas-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where Clients Slip',
    title: 'The clinic is full but the new clients are not all landing',
    benefits: [
      {
        icon: HeartPulse,
        title: 'Calls miss reception',
        description: 'Reception is with a client. The phone rings out. The new enquiry books the next clinic.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Booking turns into a back and forth',
        description: 'A simple consultation takes too many messages before anything is on the diary.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Treatment plans go quiet',
        description: 'A plan was discussed. It went home with the client. Nobody followed up.',
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
    title: 'A steadier way to handle every enquiry, consultation, and treatment plan',
    description: 'Each piece does one job. Together they keep new clients from slipping through the gaps.',
    featureCategories: [
      {
        title: 'Catch every call and form',
        description: 'Calls, missed calls, web forms — all in one place with the client and the request noted.',
        icon: MessageSquare,
        features: [
          'Missed calls texted back instantly',
          'Web enquiries land with reception',
          'Client and request captured up front',
        ],
      },
      {
        title: 'Get the consultation booked without phone tag',
        description: 'A clear way to offer a slot, confirm it, and remind them the day before.',
        icon: Calendar,
        features: [
          'Slots clients can pick themselves',
          'Confirmations and reminders sent automatically',
          'Reception sees the day at a glance',
        ],
      },
      {
        title: 'Stop treatment plans going quiet',
        description: 'Every plan gets a follow-up on a schedule, even when the chair is full.',
        icon: Workflow,
        features: [
          'Plans followed up automatically',
          'Open plans in one place',
          'Past clients gently nudged back in',
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
        description: 'Service pages and Google profile lined up so you appear when someone nearby looks for a clinic.',
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
          'Reception is busy. The phone rings out. The new enquiry is lost.',
          'A client wants a consultation. Three messages later, still no time set.',
          'A treatment plan went home with the client last week. Nobody followed up.',
          'You did beautiful work last month. They never got asked for a review.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it runs after',
        items: [
          'Missed call gets a text back inside a minute. They know reception will reply.',
          'They pick a slot from a link. Confirmed. Reminder fires the day before.',
          'The plan gets a polite follow-up. You can see who is still deciding.',
          'A review request goes out after the visit. Reviews start stacking quietly.',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Where Most Clinics Start',
    title: 'Three stages, most clinics feel one more than the others',
    description: 'You do not have to fix everything at once. Start with whatever is leaking the most clients.',
    packages: [
      {
        name: 'Stop calls and enquiries going missing',
        description: 'For when reception is busy and new client calls do not get answered.',
        price: 'Stage 1',
        priceDetail: 'Start here if missed calls are the leak',
        features: [
          'Missed-call text-back so they know you will reply',
          'One inbox for calls, forms, and web enquiries',
          'Client and request captured before the conversation',
        ],
      },
      {
        name: 'Get the consultation booked the same day',
        description: 'Once enquiries are caught, this stage takes the friction out of confirming a consultation.',
        price: 'Stage 2',
        priceDetail: 'Start here if booking is where it slows down',
        features: [
          'Slots clients can pick themselves',
          'Reminders the day before so chairs stay full',
          'Reception sees the day at a glance',
        ],
        popular: true,
      },
      {
        name: 'Keep treatment plans moving and turn visits into reviews',
        description: 'For when the diary is fine but plans go quiet and reviews never get asked for.',
        price: 'Stage 3',
        priceDetail: 'Start here if follow-up and reputation are the weak spots',
        features: [
          'Treatment plans followed up automatically',
          'Past clients nudged back in',
          'Review requests at the right moment',
        ],
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Real Situations',
    title: 'A few moments where the difference shows up',
    description: 'Small handoffs that used to depend on reception remembering.',
    workflows: [
      {
        trigger: 'Reception is busy and a new client call rings out.',
        actions: [
          'They get a text inside a minute saying reception will reply',
          'The text captures the client and the request',
          'The lead is held instead of going to the next clinic',
        ],
      },
      {
        trigger: 'A client wants a consultation this week.',
        actions: [
          'They pick a slot from a link, no more text tag',
          'A reminder goes out the day before',
          'Reception sees who is coming in and why',
        ],
      },
      {
        trigger: 'A treatment plan was discussed last week and has not been booked.',
        actions: [
          'A polite follow-up goes out automatically',
          'You can see all the open plans in one place',
          'If they say yes, the booking happens without another five messages',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'small-med-spas-workflow-examples',
  };

  const caseStudiesData = {
    category: 'beauty-personal-care' as const,
    title: 'Related Case Studies',
    description: 'Examples of how the system supports beauty and personal care businesses in this category.',
    limit: 2,
  };

  const exploreData = {
    badge: 'Related',
    description: 'The other parts of the system that come up most often for med spas.',
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
        description: 'Strengthen clinic visibility and local trust.',
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
    title: 'Things med spas usually ask',
    description: 'Straight answers about how this fits into a busy clinic.',
    faqs: [
      {
        question: 'Reception is already stretched. Will this make more work for them?',
        answer:
          'It does the opposite. Missed calls get answered by text on their own. Reminders fire by themselves. Reception sees a clearer day at a glance.',
      },
      {
        question: 'Will clients feel like they are getting an automated response?',
        answer:
          'No. The messages are short and written like reception would actually text someone. The aim is to hold the lead until you can reply.',
      },
      {
        question: 'Can it handle plans that need to be discussed in the chair?',
        answer:
          'Yes. The first reply confirms a consultation and the plan follows after the appointment.',
      },
      {
        question: 'Do we have to chase reviews ourselves?',
        answer:
          'No. The request goes out on its own after the visit, when the client is happiest.',
      },
      {
        question: 'What about plans sitting in old emails?',
        answer:
          'Those get worked in too. Many clinics find that reactivating older plans brings in real treatment value before any new marketing kicks in.',
      },
      {
        question: 'Do we need a brand new website?',
        answer:
          'Usually not. We look at what you have first. Often the gap is everything that happens after the form is sent.',
      },
    ],
  };

  return {
    slug: 'small-med-spas',
    industries: ['med-spa'],
    systems: [
      'smart-website-systems',
      'crm-automation',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['booking-systems', 'client-reactivation', 'review-generation'],
    type: 'detail',
    parentSlug: 'beauty-personal-care',
    seo: {
      title: 'Med Spas — Stop Losing Consultations and Treatment Plans | MindWP',
      description:
        'For med spas where new client calls miss reception, treatment plans go quiet, and reviews never get asked for. We put the routing, follow-up, and local visibility in place.',
      keywords: [
        'med spa website design',
        'med spa booking system',
        'med spa lead handling system',
        'med spa seo services',
        'med spa reputation management system',
      ],
      canonical: '/industries/beauty-personal-care/small-med-spas',
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
      title: 'Tell us where clients are slipping',
      description:
        'If new client calls miss reception, treatment plans go quiet, or reviews never get asked for, walk us through how the week runs and we will show you the first thing worth fixing.',
    },
  };
}

export const smallMedSpasIndustryPageData: IndustryPageData = buildSmallMedSpasIndustryPageData();
