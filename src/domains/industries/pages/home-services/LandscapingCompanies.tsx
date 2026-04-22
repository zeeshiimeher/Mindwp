import {
  Calendar,
  Clock3,
  Leaf,
  MessageSquare,
  Search,
  Shovel,
  ShieldCheck,
  Star,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildLandscapingCompaniesIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Landscaping Companies',
    title: 'Spring Hits. Quotes Pile Up. Most Of Them Go Quiet.',
    description:
      'Landscaping enquiries arrive in seasonal waves. The team is on site. Quotes get sent and forgotten. The homeowner books whoever followed up first.',
    list: ['Slow replies', 'Quiet quotes', 'Lost bookings', 'Few reviews'],
    cssPrefix: 'landscaping-companies-hero',
  };

  const imageStripData = {
    badge: 'How Landscaping Work Comes In',
    title: 'A homeowner wants someone to come and look',
    description:
      'A garden refresh, a tidy-up, a bigger project. They want to know if you can fit them in, what it might cost, and that you will turn up.',
    items: [
      {
        title: 'Project enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing landscaping enquiries',
      },
      {
        title: 'Site visits and quotes',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing landscaping site visits',
      },
      {
        title: 'Bookings and reminders',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing landscaping bookings',
      },
      {
        title: 'Reviews and repeat customers',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing landscaping reviews',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'landscaping-companies-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where The Work Slips',
    title: 'The work is there. The way it gets handled is what loses it.',
    benefits: [
      {
        icon: Leaf,
        title: 'In season, the phones go off all at once',
        description: 'Most calls go to voicemail. By the next morning the homeowner has already booked someone else.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Site visits take days to arrange',
        description: 'A simple time slot takes too many messages before anything is on the diary.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Quotes go out and never get chased',
        description: 'A price gets sent. The homeowner thinks about it. Nobody follows up.',
        iconType: 'accent' as const,
      },
      {
        icon: Shovel,
        title: 'Online you look smaller than the work you do',
        description: 'Plenty of finished projects. Almost no reviews to show for them.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to handle every call, visit, and quote',
    description: 'Each piece does one job. Together they keep work from falling on the floor in the busy season.',
    featureCategories: [
      {
        title: 'Catch every call and form',
        description: 'Calls, missed calls, web forms — all in one place with the address and the project noted.',
        icon: MessageSquare,
        features: [
          'Missed calls texted back instantly',
          'Web enquiries sent to the office and the team lead',
          'Address and project captured up front',
        ],
      },
      {
        title: 'Get the site visit booked without phone tag',
        description: 'A clear way to offer a slot, confirm it, and remind the homeowner the day before.',
        icon: Calendar,
        features: [
          'Visit slots people can pick themselves',
          'Confirmations and reminders sent automatically',
          'Team sees the project before they arrive',
        ],
      },
      {
        title: 'Stop quotes going quiet',
        description: 'Every quote gets a follow-up on a schedule, even when the team is on site.',
        icon: Workflow,
        features: [
          'Quotes chased automatically',
          'Open quotes in one place',
          'Old quotes warmed up instead of forgotten',
        ],
      },
      {
        title: 'Turn finished projects into proof',
        description: 'A review request goes out at the right moment so the work shows up online.',
        icon: ShieldCheck,
        features: [
          'Review requests after every project',
          'Asked when the customer is happiest',
          'More reviews where local people search',
        ],
      },
      {
        title: 'Show up when local homeowners search',
        description: 'Service pages and Google profile lined up so you appear when someone nearby needs landscaping.',
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
          'Phones ring all morning. Most go to voicemail. Lost.',
          'A homeowner wants a visit. Three texts later, still no time set.',
          'Quote sent on Monday. By Friday nobody has chased it.',
          'You finished a great project last month. They never got asked for a review.',
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
    badge: 'Where Most Companies Start',
    title: 'Three stages, most landscapers feel one more than the others',
    description: 'You do not have to fix everything at once. Start with whatever is leaking the most work.',
    packages: [
      {
        name: 'Stop calls and enquiries going missing',
        description: 'For when the phones go off in season and most never get answered.',
        price: 'Stage 1',
        priceDetail: 'Start here if missed calls are the leak',
        features: [
          'Missed-call text-back so they know you will ring',
          'One inbox for calls, forms, and web enquiries',
          'Address and project noted before the conversation',
        ],
      },
      {
        name: 'Get the site visit booked the same week',
        description: 'Once enquiries are caught, this stage takes the friction out of confirming a site visit.',
        price: 'Stage 2',
        priceDetail: 'Start here if booking is where it slows down',
        features: [
          'Visit slots customers can pick themselves',
          'Reminders the day before so visits actually happen',
          'Team sees the project before they arrive',
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
        trigger: 'The team is on site and a homeowner rings the office.',
        actions: [
          'They get a text inside a minute saying you will ring back',
          'The text captures the address and the project',
          'The lead is held instead of going to the next landscaper',
        ],
      },
      {
        trigger: 'A homeowner needs a site visit this week.',
        actions: [
          'They pick a slot from a link, no more text tag',
          'A reminder goes out the day before',
          'You arrive with the address and the project already noted',
        ],
      },
      {
        trigger: 'You sent a quote a few days ago and have not heard back.',
        actions: [
          'A polite chase goes out automatically',
          'Open quotes are visible in one place',
          'If they say yes, the booking happens without another five messages',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'landscaping-companies-workflow-examples',
  };

  const caseStudiesData = {
    category: 'home-services' as const,
    title: 'Related Case Studies',
    description: 'Examples of how the system supports home service businesses in this category.',
    limit: 2,
  };

  const exploreData = {
    badge: 'Related',
    description: 'The other parts of the system that come up most often for landscaping companies.',
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
        description: 'Strengthen landscaping visibility and local trust.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description: 'Turn finished projects into reviews and proof.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Things landscapers usually ask',
    description: 'Straight answers about how this fits into a seasonal business.',
    faqs: [
      {
        question: 'In peak season the phones never stop. Will this actually keep up?',
        answer:
          'That is the part it handles best. Every missed call gets a text back instantly, and every enquiry lands in one place so nothing gets lost in the surge.',
      },
      {
        question: 'Will customers feel like they are getting an automated response?',
        answer:
          'No. The messages are short and written like you would actually text someone. The aim is to hold the lead until you can ring back.',
      },
      {
        question: 'Can it handle quotes for jobs that need a site visit first?',
        answer:
          'Yes. The first reply confirms a visit and the quote follows after the inspection.',
      },
      {
        question: 'Do I have to chase reviews myself?',
        answer:
          'No. The request goes out on its own after the project is done, when the customer is happiest.',
      },
      {
        question: 'What about old quotes sitting in the inbox?',
        answer:
          'Those get worked in too. Many landscapers find that warming up old quotes brings in real money before any new marketing kicks in.',
      },
      {
        question: 'Do I need a brand new website?',
        answer:
          'Usually not. We look at what you have first. Often the gap is everything that happens after the form is sent.',
      },
    ],
  };

  return {
    slug: 'landscaping-companies',
    industries: ['landscaping'],
    systems: [
      'smart-website-systems',
      'ai-lead-handling',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['local-service-pages', 'follow-up', 'review-generation'],
    type: 'detail',
    parentSlug: 'home-services',
    seo: {
      title: 'Landscaping Companies — Stop Losing Seasonal Quotes and Bookings | MindWP',
      description:
        'For landscaping companies where peak-season calls go to voicemail, quotes stall, and reviews never get asked for. We put the routing, follow-up, and local visibility in place.',
      keywords: [
        'landscaping website design',
        'landscaping booking system',
        'landscaping lead handling system',
        'landscaping seo services',
        'landscaping reputation management system',
      ],
      canonical: '/industries/home-services/landscaping-companies',
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
        'If peak-season calls go to voicemail, quotes stall, or reviews never get asked for, walk us through how the week runs and we will show you the first thing worth fixing.',
    },
  };
}

export const landscapingCompaniesIndustryPageData: IndustryPageData = buildLandscapingCompaniesIndustryPageData();
