import {
  Calendar,
  Clock3,
  CloudRain,
  Home,
  MessageSquare,
  Search,
  ShieldCheck,
  Star,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildRoofingCompaniesIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Roofing Companies',
    title: 'Storm Hits. Phones Light Up. By Tomorrow Most of Those Calls Are Booked Elsewhere.',
    description:
      'Roofing demand comes in waves. When the weather turns, every nearby homeowner is calling around. The roofers who answer first, get on the roof first, and follow up first — those are the ones who get the work.',
    list: ['Storm-day calls', 'Slow callbacks', 'Quotes that stall', 'Few reviews'],
    cssPrefix: 'roofing-companies-hero',
  };

  const imageStripData = {
    badge: 'How Roofing Work Comes In',
    title: 'A homeowner has a leak and is ringing around',
    description:
      'A storm, a missing tile, a damp patch on a ceiling. They want someone to come and look, give them a price, and turn up when they said they would.',
    items: [
      {
        title: 'Storm-day call surges',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing roofing storm call surges',
      },
      {
        title: 'Site visits and inspections',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing roofing site visits',
      },
      {
        title: 'Quotes and approvals',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing roofing quotes',
      },
      {
        title: 'Reviews and referrals',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing roofing reviews',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'roofing-companies-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where The Work Slips',
    title: 'The work is there. The way it gets handled is what loses it.',
    description: 'A handful of patterns show up in nearly every roofing company.',
    benefits: [
      {
        icon: CloudRain,
        title: 'After a storm, the phones go off all at once',
        description: 'Most calls go to voicemail. By the next morning the homeowners have already booked someone else.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Inspections turn into a back and forth',
        description: 'Booking a visit takes days of texts and missed calls instead of a clear time on the calendar.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Quotes go out and never get chased',
        description: 'A price gets sent, the homeowner thinks about it, and nobody ever follows up.',
        iconType: 'accent' as const,
      },
      {
        icon: Home,
        title: 'Online you look smaller than the work you do',
        description: 'You finish good roofs every week. Online there are barely any reviews to show for it.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to handle every call, visit, quote, and finished job',
    description: 'Each piece does one job. Together they keep work from falling on the floor when the phones go off.',
    featureCategories: [
      {
        title: 'Catch every call and form',
        description: 'Calls, missed calls, web forms — all in one place with the address and the issue captured.',
        icon: MessageSquare,
        features: [
          'Missed calls texted back instantly',
          'Web enquiries sent to the office and the crew lead',
          'Address and issue noted up front',
        ],
      },
      {
        title: 'Get the inspection booked without the back-and-forth',
        description: 'A clear way to offer a visit time, confirm it, and remind the homeowner the day before.',
        icon: Calendar,
        features: [
          'Visit slots people can pick themselves',
          'Confirmations and reminders sent automatically',
          'Crew sees the address and the issue before they arrive',
        ],
      },
      {
        title: 'Stop quotes going quiet',
        description: 'Every estimate gets a follow-up on a schedule, even when the team is back up on a roof.',
        icon: Workflow,
        features: [
          'Quotes chased automatically',
          'Open quotes in one place',
          'Old quotes warmed up instead of forgotten',
        ],
      },
      {
        title: 'Turn finished roofs into proof',
        description: 'A review request goes out at the right moment so the work you do shows up online.',
        icon: ShieldCheck,
        features: [
          'Review requests after every completed job',
          'Asked when the homeowner is happiest',
          'More reviews where local people search',
        ],
      },
      {
        title: 'Show up when local homeowners search',
        description: 'Service pages and Google profile lined up so you appear when someone nearby needs a roofer.',
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
          'Storm hits. Phones ring all morning. Most go to voicemail. Lost.',
          'Homeowner wants a visit. Three texts later, you are still trying to confirm.',
          'Quote sent on Monday. By Friday nobody has chased it.',
          'You finished a great roof last week. They never got asked for a review.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it runs after',
        items: [
          'Missed call gets a text back inside a minute. They know you will ring back.',
          'They pick a visit slot from a link. Confirmed. Reminder fires the day before.',
          'The quote gets a polite chase the next morning. You can see who is waiting.',
          'A review request goes out the day you finish. Reviews start stacking quietly.',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Where Most Roofers Start',
    title: 'Three stages, most roofers feel one more than the others',
    description: 'You do not have to fix everything at once. Start with whatever is leaking the most work.',
    packages: [
      {
        name: 'Stop calls and enquiries going missing',
        description: 'For when the phones go off after a storm and most never get answered.',
        price: 'Stage 1',
        priceDetail: 'Start here if missed calls are the leak',
        features: [
          'Missed-call text-back so they know you will ring',
          'One inbox for calls, forms, and web enquiries',
          'Address and issue noted before the conversation',
        ],
      },
      {
        name: 'Get the inspection booked the same week',
        description: 'Once enquiries are caught, this stage takes the friction out of confirming a site visit.',
        price: 'Stage 2',
        priceDetail: 'Start here if booking is where it slows down',
        features: [
          'Visit slots homeowners can pick themselves',
          'Reminders the day before so visits actually happen',
          'Crew sees the job before they arrive',
        ],
        popular: true,
      },
      {
        name: 'Keep quotes moving and turn jobs into reviews',
        description: 'For when work comes in fine but quotes stall and reviews never get asked for.',
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
        trigger: 'A storm has just gone through and the phones are going off.',
        actions: [
          'Every missed call gets a text inside a minute',
          'Each enquiry is logged with the address and the issue',
          'The crew lead sees a clear list of who needs a visit first',
        ],
      },
      {
        trigger: 'A homeowner needs an inspection this week.',
        actions: [
          'They pick a visit slot from a link, no more text tag',
          'A reminder goes out the day before',
          'You arrive with the address and the issue already noted',
        ],
      },
      {
        trigger: 'You sent a quote a few days ago and have not heard back.',
        actions: [
          'A polite chase goes out automatically',
          'You can see all the open quotes in one place',
          'If they say yes, the booking happens without another five messages',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'roofing-companies-workflow-examples',
  };

  const caseStudiesData = {
    category: 'home-services' as const,
    title: 'Related Case Studies',
    description: 'Examples of how the system supports home service businesses in this category.',
    limit: 2,
  };

  const exploreData = {
    badge: 'Related',
    description: 'The other parts of the system that come up most often for roofing companies.',
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
        description: 'Strengthen roofing visibility and local trust.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description: 'Turn finished roofs into reviews and proof.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Things roofers usually ask',
    description: 'Straight answers about how this fits into a roofing business.',
    faqs: [
      {
        question: 'After a storm the phones never stop. Will this actually keep up?',
        answer:
          'That is the part it handles best. Every missed call gets a text back instantly, and every enquiry lands in one place so nothing gets lost in the surge.',
      },
      {
        question: 'Will homeowners feel like they are getting an automated response?',
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
          'No. The request goes out on its own after the job is done, when the homeowner is happiest.',
      },
      {
        question: 'What about old quotes sitting in email threads?',
        answer:
          'Those get worked in too. Many roofers find that warming up old quotes brings in real money before any new marketing kicks in.',
      },
      {
        question: 'Do I need a brand new website?',
        answer:
          'Usually not. We look at what you have first. Often the gap is everything that happens after the form is sent.',
      },
    ],
  };

  return {
    slug: 'roofing-companies',
    industries: ['roofing'],
    systems: ['smart-website-systems', 'ai-lead-handling', 'local-seo-authority', 'reputation-review'],
    topics: ['lead-management', 'missed-calls', 'review-generation'],
    type: 'detail',
    parentSlug: 'home-services',
    seo: {
      title: 'Roofing Companies — Stop Losing Storm-Day Calls and Stalled Quotes | MindWP',
      description:
        'For roofing companies where storm-day calls go to voicemail, quotes stall, and reviews never get asked for. We put the routing, follow-up, and local visibility in place.',
      keywords: [
        'roofing company website design',
        'roofing booking system',
        'roofing lead handling system',
        'roofing seo services',
        'roofing reputation management system',
      ],
      canonical: '/industries/home-services/roofing-companies',
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
        'If storm-day calls go to voicemail, quotes stall, or reviews never get asked for, walk us through how the week runs and we will show you the first thing worth fixing.',
    },
  };
}

export const roofingCompaniesIndustryPageData: IndustryPageData = buildRoofingCompaniesIndustryPageData();
