import {
  Calendar,
  Clock3,
  MessageSquare,
  Plug,
  Search,
  ShieldCheck,
  Star,
  Wrench,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildElectricalCompaniesIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Electrical Companies',
    title: 'The Phone Rings While You Are on a Job. They Call the Next Electrician.',
    description:
      'Electrical enquiries arrive while the team is on site. Calls go to voicemail. Quotes get sent and forgotten. The customer books whoever rang back first.',
    list: ['Missed calls', 'Quiet quotes', 'Slow callbacks', 'Few reviews'],
    cssPrefix: 'electrical-companies-hero',
  };

  const imageStripData = {
    badge: 'How Electrical Work Comes In',
    title: 'A homeowner wants someone to come and look',
    description:
      'A fault, a small upgrade, a job they have been putting off. They want to know if you can fit them in, what it might cost, and that you will turn up.',
    items: [
      {
        title: 'Fault and job enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing electrical enquiries',
      },
      {
        title: 'Site visits and inspections',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing electrical site visits',
      },
      {
        title: 'Quotes and approvals',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing electrical quotes',
      },
      {
        title: 'Reviews and repeat customers',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing electrical reviews',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'electrical-companies-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where The Work Slips',
    title: 'The work is steady. The bit between calls is where it leaks.',
    benefits: [
      {
        icon: Plug,
        title: 'The phone rings while the team is on site',
        description: 'By the time someone rings back, the homeowner has already booked the next electrician.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Booking turns into a back and forth',
        description: 'A simple visit takes too many texts before anything is on the diary.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Quotes go out and never get chased',
        description: 'A price gets sent. The homeowner thinks about it. Nobody follows up.',
        iconType: 'accent' as const,
      },
      {
        icon: Wrench,
        title: 'Online you look smaller than the work you do',
        description: 'Plenty of finished jobs. Almost no reviews to show for them.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to handle every call, visit, and quote',
    description: 'Each piece does one job. Together they keep work from falling on the floor while the team is on site.',
    featureCategories: [
      {
        title: 'Catch every call and form',
        description: 'Calls, missed calls, web forms — all in one place with the address and the issue noted.',
        icon: MessageSquare,
        features: [
          'Missed calls texted back instantly',
          'Web enquiries sent to the office and the team lead',
          'Address and issue captured up front',
        ],
      },
      {
        title: 'Get the visit booked without phone tag',
        description: 'A clear way to offer a slot, confirm it, and remind the homeowner the day before.',
        icon: Calendar,
        features: [
          'Visit slots people can pick themselves',
          'Confirmations and reminders sent automatically',
          'Team sees the address and the issue before they arrive',
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
        title: 'Show up when local homeowners search',
        description: 'Service pages and Google profile lined up so you appear when someone nearby needs an electrician.',
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
          'Phone rings while the team is on site. Goes to voicemail. Lost.',
          'A homeowner wants a visit. Three texts later, still no time set.',
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
          'A review request goes out the day you finish. Reviews start stacking quietly.',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Where Most Electricians Start',
    title: 'Three stages, most electricians feel one more than the others',
    description: 'You do not have to fix everything at once. Start with whatever is leaking the most work.',
    packages: [
      {
        name: 'Stop calls and enquiries going missing',
        description: 'For when the team is on site and quick enquiries sit unread.',
        price: 'Stage 1',
        priceDetail: 'Start here if missed calls are the leak',
        features: [
          'Missed-call text-back so they know you will ring',
          'One inbox for calls, forms, and web enquiries',
          'Address and issue noted before the conversation',
        ],
      },
      {
        name: 'Get the visit booked the same day',
        description: 'Once enquiries are caught, this stage takes the friction out of confirming a site visit.',
        price: 'Stage 2',
        priceDetail: 'Start here if booking is where it slows down',
        features: [
          'Visit slots customers can pick themselves',
          'Reminders the day before so visits actually happen',
          'Team sees the job before they arrive',
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
          'The text captures the address and the issue',
          'The lead is held instead of going to the next electrician',
        ],
      },
      {
        trigger: 'A homeowner needs a visit this week.',
        actions: [
          'They pick a slot from a link, no more text tag',
          'A reminder goes out the day before',
          'You arrive with the address and the issue already noted',
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
    cssPrefix: 'electrical-companies-workflow-examples',
  };

  const caseStudiesData = {
    category: 'home-services' as const,
    title: 'Related Case Studies',
    description: 'Examples of how the system supports home service businesses in this category.',
    limit: 2,
  };

  const exploreData = {
    badge: 'Related',
    description: 'The other parts of the system that come up most often for electrical companies.',
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
        description: 'Strengthen electrical visibility and local trust.',
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
    title: 'Things electricians usually ask',
    description: 'Straight answers about how this fits into a small electrical business.',
    faqs: [
      {
        question: 'I am on site all day. How much extra work is this?',
        answer:
          'Almost none after setup. Missed calls get answered by text on their own. Quote chasing goes out on a schedule. Reminders fire by themselves.',
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
          'No. The request goes out on its own after the job is done, when the customer is happiest.',
      },
      {
        question: 'What about old quotes sitting in the inbox?',
        answer:
          'Those get worked in too. Many electricians find that warming up old quotes brings in real money before any new marketing kicks in.',
      },
      {
        question: 'Do I need a brand new website?',
        answer:
          'Usually not. We look at what you have first. Often the gap is everything that happens after the form is sent.',
      },
    ],
  };

  return {
    slug: 'electrical-companies',
    industries: ['electrical'],
    systems: [
      'smart-website-systems',
      'ai-lead-handling',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['lead-management', 'follow-up', 'review-generation'],
    type: 'detail',
    parentSlug: 'home-services',
    seo: {
      title: 'Electrical Companies — Stop Losing Calls, Quotes, and Repeat Work | MindWP',
      description:
        'For electrical companies where calls go to voicemail on site, quotes go quiet, and reviews never get asked for. We put the routing, follow-up, and local visibility in place.',
      keywords: [
        'electrical company website design',
        'electrical booking system',
        'electrical lead handling system',
        'electrical seo services',
        'electrical reputation management system',
      ],
      canonical: '/industries/home-services/electrical-companies',
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
        'If calls go to voicemail on site, quotes go quiet, or reviews never get asked for, walk us through how the week runs and we will show you the first thing worth fixing.',
    },
  };
}

export const electricalCompaniesIndustryPageData: IndustryPageData = buildElectricalCompaniesIndustryPageData();
