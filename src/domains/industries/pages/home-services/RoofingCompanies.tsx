import {
  Calendar,
  CloudRain,
  Clock3,
  MapPinned,
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
      'Roofing work comes in waves. After a storm, on a busy week, when something starts leaking. The roofers who answer fast and follow up well win the work. The rest watch quotes go quiet.',
    list: ['Storm-day calls', 'Slow callbacks', 'Quotes that stall', 'Few reviews'],
    cssPrefix: 'roofing-companies-hero',
  };

  const imageStripData = {
    badge: 'How Roofing Work Comes In',
    title: 'A homeowner notices something today and wants someone on the roof tomorrow',
    description:
      'A leak, a missing tile, an insurance job. They want to know if you can come out, what it might cost, and whether they can trust the company.',
    items: [
      {
        title: 'Leak and storm enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing roofing leak enquiries',
      },
      {
        title: 'Survey and booking',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing roofing survey and booking',
      },
      {
        title: 'Estimates and approvals',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing roofing estimates',
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
    title: 'The crew is good. The bit between the call and the quote is where it leaks.',
    description: 'Same handful of gaps in nearly every roofing company.',
    benefits: [
      {
        icon: CloudRain,
        title: 'Storm calls roll to voicemail',
        description: 'Phones ring all day after bad weather. By the time anyone rings back, half the work is booked elsewhere.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Booking a survey turns into back-and-forth',
        description: 'They want someone to come look. The team is on a job. Texts go back and forth for a day.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Estimates go out and never get chased',
        description: 'Quote sent on Tuesday. By Friday nobody picked it up again.',
        iconType: 'accent' as const,
      },
      {
        icon: MapPinned,
        title: 'The roofer down the road has a wall of reviews. You do not.',
        description: 'You do better work. Online you look smaller because nobody was ever asked.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
    description:
      'It is rarely one big problem. It is a steady drip — a missed call, an unchased quote, a review never asked for.',
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to handle every enquiry from first ring to final review',
    description: 'Each piece does one job. Together they make sure work does not fall on the floor while the team is up a ladder.',
    featureCategories: [
      {
        title: 'Catch every enquiry',
        description: 'Calls, forms, missed calls, web chat — they land in one place with the address and the issue noted.',
        icon: MessageSquare,
        features: [
          'Missed calls texted back instantly',
          'Web enquiries sent to the right person',
          'Address and issue captured up front',
        ],
      },
      {
        title: 'Get the survey booked without ten texts',
        description: 'A clear way to offer a slot, confirm it, and remind them the day before.',
        icon: Calendar,
        features: [
          'Survey slots people can pick',
          'Confirmations and reminders sent automatically',
          'Front office knows what is coming in',
        ],
      },
      {
        title: 'Stop quotes going quiet',
        description: 'Every estimate gets a follow-up on a schedule, even when the team is flat out.',
        icon: Workflow,
        features: [
          'Estimates chased automatically',
          'Open quotes in one place',
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
        title: 'Show up when local homeowners search',
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
    title: 'A normal week at the company, before and after',
    description: 'The crew still does the work. What changes is the part that used to depend on someone remembering.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How it runs now',
        items: [
          'Storm hits. Phones ring all day. Half go to voicemail.',
          'Survey requested. Three texts later, you are still confirming Wednesday.',
          'Quote sent Monday. It is Friday. Nobody chased it.',
          'A great job last week. Customer was thrilled. Never got asked for a review.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it runs after',
        items: [
          'Missed call gets a text back inside a minute.',
          'They pick a survey slot from a link. Confirmed. Reminder fires the day before.',
          'The quote gets a polite chase the next morning. You can see who is waiting.',
          'A review request goes out the day the job finishes. Reviews start stacking quietly.',
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
        description: 'For when the phone rings out and storm-day enquiries sit unread.',
        price: 'Stage 1',
        priceDetail: 'Start here if missed calls are the leak',
        features: [
          'Missed-call text-back so they know you will ring',
          'One inbox for calls, forms, and web chat',
          'Address and issue noted before the call back',
        ],
      },
      {
        name: 'Get the survey booked the same day',
        description: 'Once enquiries are caught, this stage takes the friction out of confirming a slot.',
        price: 'Stage 2',
        priceDetail: 'Start here if booking is where it slows down',
        features: [
          'Slots customers can pick themselves',
          'Reminders the day before so surveys actually happen',
          'Clear handover between office and crew',
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
        trigger: 'A storm passes through and the phone rings out for two hours.',
        actions: [
          'Every missed call gets a text inside a minute',
          'The text captures the address and the issue',
          'Voicemail is not the only thing keeping the leads alive',
        ],
      },
      {
        trigger: 'A homeowner wants a survey before the weekend.',
        actions: [
          'They pick a slot from a link, no more text tag',
          'A reminder goes out the day before',
          'The crew sees the booking with the address and issue attached',
        ],
      },
      {
        trigger: 'You sent a quote a few days ago and have not heard back.',
        actions: [
          'A polite chase goes out automatically the next morning',
          'You can see all open quotes in one place',
          'If they say yes, the job goes into the schedule without more messages',
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
        description: 'Support survey booking, reminders, and clearer next steps.',
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
    title: 'Things roofing companies usually ask',
    description: 'Straight answers about how this fits a company that is already busy.',
    faqs: [
      {
        question: 'We are flat out after every storm. How much extra work is this?',
        answer:
          'Almost none after setup. Missed calls get answered by text on their own. Quote chasing goes out on a schedule. Reminders fire by themselves.',
      },
      {
        question: 'Will customers feel like they are getting an automated response?',
        answer:
          'No. The messages are short and written like you would actually text someone. The aim is to hold the lead until you can ring back.',
      },
      {
        question: 'Can it handle quotes that need a survey first?',
        answer:
          'Yes. The first reply books a survey and the quote follows after the team has been out.',
      },
      {
        question: 'Do we have to chase reviews ourselves?',
        answer:
          'No. The request goes out on its own after the job is done.',
      },
      {
        question: 'What about old quotes sitting in the inbox?',
        answer:
          'Those get worked into the follow-up too. Warming up old estimates often brings in real money before any new marketing kicks in.',
      },
      {
        question: 'Do we need a brand new website?',
        answer:
          'Usually not. We look at what you have first. Often the gap is everything that happens after the form is sent.',
      },
    ],
  };

  return {
    slug: 'roofing-companies',
    industries: ['roofing-company'],
    systems: ['smart-website-systems', 'ai-lead-handling', 'local-seo-authority', 'reputation-review'],
    topics: ['lead-management', 'missed-calls', 'review-generation'],
    type: 'detail',
    parentSlug: 'home-services',
    seo: {
      title: 'Roofing Companies — Stop Losing Storm-Day Calls and Quotes | MindWP',
      description:
        'For roofing companies where calls go to voicemail after storms, quotes go quiet, and reviews never get asked for. We put the routing, follow-up, and local visibility in place.',
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
        'If storm calls get missed, quotes go quiet, or reviews never get asked for, walk us through how the company runs and we will show you the first thing worth fixing.',
    },
  };
}

export const roofingCompaniesIndustryPageData: IndustryPageData = buildRoofingCompaniesIndustryPageData();
import {
  Calendar,
  CloudRain,
  Clock3,
  Hammer,
  HardHat,
  MapPinned,
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
      'Roofing work comes in waves. After a storm, on a busy week, when something starts leaking. The roofers who answer fast and follow up well win the work. The rest watch quotes go quiet.',
    list: ['Storm-day calls', 'Slow callbacks', 'Quotes that stall', 'Few reviews'],
    cssPrefix: 'roofing-companies-hero',
  };

  const imageStripData = {
    badge: 'How Roofing Work Comes In',
    title: 'A homeowner notices something today and wants someone on the roof tomorrow',
    description:
      'A leak, a missing tile, an insurance job. They want to know if you can come out, what it might cost, and whether they can trust the company.',
    items: [
      {
        title: 'Leak and storm enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing roofing leak enquiries',
      },
      {
        title: 'Survey and booking',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing roofing survey and booking',
      },
      {
        title: 'Estimates and approvals',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing roofing estimates',
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
    title: 'The crew is good. The bit between the call and the quote is where it leaks.',
    description: 'Same handful of gaps in nearly every roofing company.',
    benefits: [
      {
        icon: CloudRain,
        title: 'Storm calls roll to voicemail',
        description: 'Phones ring all day after bad weather. By the time anyone rings back, half the work is booked elsewhere.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Booking a survey turns into back-and-forth',
        description: 'They want someone to come look. The team is on a job. Texts go back and forth for a day.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Estimates go out and never get chased',
        description: 'Quote sent on Tuesday. By Friday nobody picked it up again.',
        iconType: 'accent' as const,
      },
      {
        icon: MapPinned,
        title: 'The roofer down the road has a wall of reviews. You do not.',
        description: 'You do better work. Online you look smaller because nobody was ever asked.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
    description:
      'It is rarely one big problem. It is a steady drip — a missed call, an unchased quote, a review never asked for.',
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to handle every enquiry from first ring to final review',
    description: 'Each piece does one job. Together they make sure work does not fall on the floor while the team is up a ladder.',
    featureCategories: [
      {
        title: 'Catch every enquiry',
        description: 'Calls, forms, missed calls, web chat — they land in one place with the address and the issue noted.',
        icon: MessageSquare,
        features: [
          'Missed calls texted back instantly',
          'Web enquiries sent to the right person',
          'Address and issue captured up front',
        ],
      },
      {
        title: 'Get the survey booked without ten texts',
        description: 'A clear way to offer a slot, confirm it, and remind them the day before.',
        icon: Calendar,
        features: [
          'Survey slots people can pick',
          'Confirmations and reminders sent automatically',
          'Front office knows what is coming in',
        ],
      },
      {
        title: 'Stop quotes going quiet',
        description: 'Every estimate gets a follow-up on a schedule, even when the team is flat out.',
        icon: Workflow,
        features: [
          'Estimates chased automatically',
          'Open quotes in one place',
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
        title: 'Show up when local homeowners search',
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
    title: 'A normal week at the company, before and after',
    description: 'The crew still does the work. What changes is the part that used to depend on someone remembering.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How it runs now',
        items: [
          'Storm hits. Phones ring all day. Half go to voicemail.',
          'Survey requested. Three texts later, you are still confirming Wednesday.',
          'Quote sent Monday. It is Friday. Nobody chased it.',
          'A great job last week. Customer was thrilled. Never got asked for a review.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it runs after',
        items: [
          'Missed call gets a text back inside a minute.',
          'They pick a survey slot from a link. Confirmed. Reminder fires the day before.',
          'The quote gets a polite chase the next morning. You can see who is waiting.',
          'A review request goes out the day the job finishes. Reviews start stacking quietly.',
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
        description: 'For when the phone rings out and storm-day enquiries sit unread.',
        price: 'Stage 1',
        priceDetail: 'Start here if missed calls are the leak',
        features: [
          'Missed-call text-back so they know you will ring',
          'One inbox for calls, forms, and web chat',
          'Address and issue noted before the call back',
        ],
      },
      {
        name: 'Get the survey booked the same day',
        description: 'Once enquiries are caught, this stage takes the friction out of confirming a slot.',
        price: 'Stage 2',
        priceDetail: 'Start here if booking is where it slows down',
        features: [
          'Slots customers can pick themselves',
          'Reminders the day before so surveys actually happen',
          'Clear handover between office and crew',
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
        trigger: 'A storm passes through and the phone rings out for two hours.',
        actions: [
          'Every missed call gets a text inside a minute',
          'The text captures the address and the issue',
          'Voicemail is not the only thing keeping the leads alive',
        ],
      },
      {
        trigger: 'A homeowner wants a survey before the weekend.',
        actions: [
          'They pick a slot from a link, no more text tag',
          'A reminder goes out the day before',
          'The crew sees the booking with the address and issue attached',
        ],
      },
      {
        trigger: 'You sent a quote a few days ago and have not heard back.',
        actions: [
          'A polite chase goes out automatically the next morning',
          'You can see all open quotes in one place',
          'If they say yes, the job goes into the schedule without more messages',
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
        description: 'Support survey booking, reminders, and clearer next steps.',
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
    title: 'Things roofing companies usually ask',
    description: 'Straight answers about how this fits a company that is already busy.',
    faqs: [
      {
        question: 'We are flat out after every storm. How much extra work is this?',
        answer:
          'Almost none after setup. Missed calls get answered by text on their own. Quote chasing goes out on a schedule. Reminders fire by themselves.',
      },
      {
        question: 'Will customers feel like they are getting an automated response?',
        answer:
          'No. The messages are short and written like you would actually text someone. The aim is to hold the lead until you can ring back.',
      },
      {
        question: 'Can it handle quotes that need a survey first?',
        answer:
          'Yes. The first reply books a survey and the quote follows after the team has been out.',
      },
      {
        question: 'Do we have to chase reviews ourselves?',
        answer:
          'No. The request goes out on its own after the job is done.',
      },
      {
        question: 'What about old quotes sitting in the inbox?',
        answer:
          'Those get worked into the follow-up too. Warming up old estimates often brings in real money before any new marketing kicks in.',
      },
      {
        question: 'Do we need a brand new website?',
        answer:
          'Usually not. We look at what you have first. Often the gap is everything that happens after the form is sent.',
      },
    ],
  };

  return {
    slug: 'roofing-companies',
    industries: ['roofing-company'],
    systems: ['smart-website-systems', 'ai-lead-handling', 'local-seo-authority', 'reputation-review'],
    topics: ['lead-management', 'missed-calls', 'review-generation'],
    type: 'detail',
    parentSlug: 'home-services',
    seo: {
      title: 'Roofing Companies — Stop Losing Storm-Day Calls and Quotes | MindWP',
      description:
        'For roofing companies where calls go to voicemail after storms, quotes go quiet, and reviews never get asked for. We put the routing, follow-up, and local visibility in place.',
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
        'If storm calls get missed, quotes go quiet, or reviews never get asked for, walk us through how the company runs and we will show you the first thing worth fixing.',
    },
  };
}

export const roofingCompaniesIndustryPageData: IndustryPageData = buildRoofingCompaniesIndustryPageData();
import {
  Calendar,
  Clock3,
  Home,
  MapPinned,
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
    title: 'A Storm Hits Friday Night. By Sunday Morning, They’ve Booked Somebody Else’s Inspection.',
    description:
      'Storm damage, ceiling stain, missing tiles — people don’t shop slowly. They want eyes on the roof now. Whoever gets there first usually gets the replacement six weeks later. We put the system in place that catches the urgent calls, follows up the quotes, and turns finished jobs into the reviews you should already have.',
    list: [
      'Storm calls that go to whoever picked up first',
      'Replacement quotes nobody chased',
      'Insurance jobs nobody followed up',
      'Reviews that don’t reflect the workloadhe workload',
    ],
    cssPrefix: 'roofing-companies-hero',
  };

  const imageStripData = {
    badge: 'How Roofing Calls Actually Land',
    title: 'A storm rolls through and the phone doesn’t stop for a week',
    description:
      'Tiles down, water coming through the loft, insurance claim panic. People ring three roofers. Whoever shows up first usually gets the inspection — and the £18,000 replacement that followslows.',
    items: [
      {
        title: 'Storm and leak enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing roofing storm or leak enquiries',
      },
      {
        title: 'Inspection and estimate booking',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing roofing inspection scheduling',
      },
      {
        title: 'Quote and decision follow-up',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing roofing quote follow-up',
      },
      {
        title: 'Review and proof collection',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing roofing reviews and proof collection',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'roofing-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where The Work Slips',
    title: 'You’re on a roof. The phone rings. They book the next roofer’s inspection.',
    description: 'Same handful of leaks in nearly every roofing business. None of them are about the work itself.',
    benefits: [
      {
        icon: Home,
        title: '“Water’s coming through the ceiling” went to voicemail',
        description:
          'You were already on a job. They didn’t leave a message — they rang the next roofer on Google.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'A £18,000 replacement quote went quiet for two weeks',
        description:
          'One follow-up text would have closed it. Nobody had time to send it.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Insurance jobs sat half-finished in someone’s inbox',
        description:
          'Adjuster paperwork, photos, scope of works — all in different threads. Some closed. Most didn’t.',
        iconType: 'accent' as const,
      },
      {
        icon: MapPinned,
        title: 'The roofer up the road has 500 reviews. You have 27.',
        description:
          'Your work lasts longer. Locally you look smaller because nobody was ever asked
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'What Gets Put In Place',
    title: 'A steadier way to catch storm calls, close replacements, and turn jobs into reviews',
    description:
      'Each piece does one job. Together they keep the work moving while the team is on a roof.',
    featureCategories: [
      {
        title: 'Catch every storm call, even when you’re mid-tile',
        description:
          'Missed call gets an instant text — “on a roof, what’s happening, can call back in 20.” Most stop dialling the next roofer.',
        icon: MessageSquare,
        features: [
          'Missed-call text-back automatically',
          'Urgency captured up front',
          'Holds the lead until you’re free',
        ],
      },
      {
        title: 'Take the inspection without phone tag',
        description:
          'Homeowners pick a slot themselves. The office stops being a calendar.',
        icon: Calendar,
        features: [
          'Online booking for inspections',
          'Reminders the day before',
          'Reschedule link instead of a no-show',
        ],
      },
      {
        title: 'Follow up the quotes nobody has time to chase',
        description:
          'Replacement quote sent Monday, automatic check-in Friday, another the week after. Quietly closes more.',
        icon: Workflow,
        features: [
          'Quote follow-up at the right intervals',
          'Pending replacements visible in one place',
          'Closing rate goes up without nagging',
        ],
      },
      {
        title: 'Turn finished roofs into reviews and proof',
        description:
          'A polite review request goes out the week after handover, when the work’s held its first storm.',
        icon: ShieldCheck,
        features: [
          'Review requests after every job',
          'Job photos tied to local search',
          'Reviews catch up to the workload',
        ],
      },
      {
        title: 'Show up first when local people search for a roofer',
        description:
          'Service pages, Google profile, and local search lined up so the right area finds you first.',
        icon: Search,
        features: [
          'Service pages for the work and areas you want',
          'Found on Maps for storm and replacement searches',
          'Less time driving to jobs you don’t wanad',
        ],
      },
      {
        title: 'Show up first when local people search for a roofer',
        description:
          'Service pages, Google profile, and local search lined up so the right area finds you first.',
        icon: Search,
        featWhat Actually Changes',
    title: 'A normal storm week, before and after',
        description: 'The work stays. The chasing and the missed calls stop.',
        comparisons: [
          {
            type: 'before' as const,
            title: 'How it runs now',
            items: [
              'Storm hits Friday night. Half the calls went elsewhere by Sunday.',
              'A £18,000 replacement quote went quiet for two weeks. No follow-up sent.',
              'Insurance jobs sat half-finished across three threads.',
              '“Meant to ask for a review” — said about every replacement.',
            ],
          },
          {
            type: 'after' as const,
            title: 'How it runs after',
            items: [
              'Missed calls get an instant text. Most wait the 20 minutes.',
              'Quotes get followed up automatically. More close, none feel pestered.',
              'Insurance work tracked through one path. Less falls through the cracks.',
              'Every customer gets asked the week after. Reviews catch up to the work.
            ],
          },
          {
            type: 'after' as const,
            title: 'How it runs after',
            items: [
              'MWhere Most Roofers Start',
              title: 'Three stages — most businesses feel one of them more than the others',
              description: 'Pick whichever costs you the most jobs right now.',
              packages: [
                {
                  name: 'Stop missing the storm calls',
                  description: 'For when storm calls hit while you’re on a roof and go to the next company.',
                  price: 'Stage 1',
                  priceDetail: 'Start here if missed calls during work hours is the biggest leak',
                  features: [
                    'Missed-call text-back the moment you can’t answer',
                    'Urgent vs scheduled triaged automatically',
                    'Most callers wait instead of dialling the next roofer',
                  ],
                },
                {
                  name: 'Close the replacement quotes that go quiet',
                  description: 'For when full replacements get quoted and you never hear back.',
                  price: 'Stage 2',
                  priceDetail: 'Start here if quote-to-booking conversion is the leak',
                  features: [
                    'Quote follow-ups at the right intervals',
                    'Pending replacements visible in one place',
                    'No more “what happened to that replacement quote?”',
                  ],
                  popular: true,
                },
                {
                  name: 'Build the local proof that fills the diary on its own',
                  description: 'For when work is great but reviews and the right postcodes don’t reflect it.',
                  price: 'Stage 3',
                  priceDetail: 'Start here if reviews and area targeting are the weak spot',
                  features: [
                    'Review requests after every job',
                    'Service pages for the work and postcodes you want',
                    'Less time driving to jobs you don’t wak is great but reviews and the right postcodes don’t reflect it.',
                    price: 'Stage 3',
                    priceDetail: 'Start here if reviews and area targeting are the weak spot',
                    features: [
                      'Review requests after every job',
                      'Service pages for the work and postcodes you want',
                      'Less time driving to jobs you don’t want',
                    ], Real Situations',
    title: 'A few moments where the difference shows up',
                    description: 'Small moments on a roof and after, where things used to slip through.',
                    workflows: [
                      {
                        trigger: 'A “water coming through the ceiling” call comes in during a tile job.',
                        actions: [
                          'Missed call gets an instant text within seconds',
                          'They get told you’re on a roof and when you’ll be free',
                          'Most wait. The truly urgent ones get flagged.',
                        ],
                      },
                      {
                        trigger: 'A full replacement quote was sent Monday and went quiet.',
                        actions: [
                          'A friendly check-in goes out Friday',
                          'Another a week later if no reply',
                          'Quote-to-booking quietly improves',
                        ],
                      },
                      {
                        trigger: 'A roof job is finished and the homeowner is happy.',
                        actions: [
                          'A polite review request goes out the week after',
                          'Job photos go into the local proof bank',
                          'Local reviews catch up to the workloa
          'Job photos go into the local proof bank',
                          'Local reviews catch up to the workload',
                        ],
                      },
                    ],
                    backgroundColor: 'bg-base',
                    cssPrefix: 'roofing-workflow-examples',
  };
            Related',
    description:
            'The other parts of the system that come up most often for roofers trying to stop missing work
    description:
            'The other parts of the system that come up most often for roofers trying to stop missing work.',
            cards: [
              {
                icon: Workflow,
                title: 'Smart Website Systems',
                description:
                  'See the core system layer that holds roofing enquiry, inspection, and follow-up together.',
                href: '/services/smart-website-systems',
                gradient: 'purple',
                iconBg: 'purple',
              },
              {
                icon: Calendar,
                title: 'Booking & Scheduling System',
                description: 'Support inspections, reminders, and clearer next-step handling.',
                href: '/services/crm-infrastructure-implementation',
                gradient: 'teal',
                iconBg: 'teal',
              },
              {
                icon: Search,
                title: 'Local Authority & SEO Systems',
                description: 'Strengthen roofing service-area visibility and local trust.',
                href: '/services/local-seo-authority',
                gradient: 'blue',
                iconBg: 'blue',
              },
              {
                icon: Star,
                title: 'Reputation & Review Systems',
                description: 'Turn completed jobs into stronger local proof and review flow.',
                href: '/services/reputation-review-systems',
                gradient: 'amber',
                iconBg: 'amber',
              },
            ],
            backgroundColor: 'bg-alt',
            columns: 2 as const,
          };
        Things roofers usually ask',
    description: 'Straight answers about how this fits a roofing business.',
        faqs: [
          {
            question: 'I’m on a roof all day. Will this need someone in the office?',
            answer:
              'No. The whole point is that it runs while the team is working. You’ll see what came in on your phone between jobs, but nothing waits on you to operate it.',
          },
          {
            question: 'How does the missed-call text-back actually work?',
            answer:
              'A call comes in while you’re tiling. It rings out. Within seconds the caller gets a text — “on a roof, can call back in 20, what’s happening?” Most stop dialling the next roofer.',
          },
          {
            question: 'Can it handle quote follow-ups for full replacements?',
            answer:
              'Yes — friendly check-in messages go out at the right intervals after a quote is sent. Quote-to-booking conversion changes noticeably without anybody chasing.',
          },
          {
            question: 'Can it help track insurance jobs that drag on?',
            answer:
              'Yes — insurance work gets tracked in one place with reminders for the next step. Less paperwork falls through the cracks.',
          },
          {
            question: 'How do I get more reviews without nagging?',
            answer:
              'A polite request goes out the week after the job, once the work has held its first wet weekend. People who would have meant to leave one actually do.',
          },
          {
            question: 'Do I need to scrap my current website?',
            answer:
              'Usually not. We look at what you have first. The leak is normally the bit between the call coming in and the review going up — not the site itself
        answer:
              'Usually not. We look at what you have first. The leak is normally the bit between the call coming in and the review going up — not the site itself.',
          },
        ],
      };

    return {
      slug: 'roofing-companies',
      industries: ['roofing'],
      systems: [
        'smart-website-systems',
        'ai-lead-handling',
        'local-seo-authority',
        'reputation-review',
      ],
      topics: ['lead-management', 'follow-up', 'review-generation'],
      type: 'detail',
      parentSlug: 'home-Companies — Stop Losing Storm Calls, Replacement Quotes & Reviews | MindWP',
      description:
        'For roofers where storm calls go to whoever picked up first, replacement quotes go quiet, and reviews don’t reflect the workload. We put the system in place that catches every job and turns finished roofs into local proof
      description:
        'For roofers where storm calls go to whoever picked up first, replacement quotes go quiet, and reviews don’t reflect the workload. We put the system in place that catches every job and turns finished roofs into local proof.',
      keywords: [
        'roofing website design',
        'roofing contractor website system',
        'roofing lead automation system',
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
    explore: exploreData,
    faq: faqDaTell us where the work is leaking',
      description:
    'If storm calls go to voicemail, if replacement quotes go quiet, or if reviews never get asked for — walk us through how the business runs and we’ll show you the first thing worth fixing
      description:
    'If storm calls go to voicemail, if replacement quotes go quiet, or if reviews never get asked for — walk us through how the business runs and we’ll show you the first thing worth fixing.',
  },
};
}

export const roofingCompaniesIndustryPageData: IndustryPageData =
  buildRoofingCompaniesIndustryPageData();
