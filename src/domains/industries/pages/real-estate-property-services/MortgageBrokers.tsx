import {
  Banknote,
  Calendar,
  Clock3,
  FileSignature,
  MessageSquare,
  Search,
  ShieldCheck,
  Star,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildMortgageBrokersIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Mortgage Brokers',
    title: 'A Buyer Wants Advice This Week. They Picked Whoever Replied First.',
    description:
      'Mortgage enquiries are time-sensitive. The buyer is comparing a few brokers. Whoever replies first usually gets the conversation.',
    list: ['Slow replies', 'Lost enquiries', 'Quiet pipelines', 'Few reviews'],
    cssPrefix: 'mortgage-brokers-hero',
  };

  const imageStripData = {
    badge: 'How Enquiries Come In',
    title: 'A buyer wants to know if you can help',
    description:
      'A first-time purchase, a remortgage, a buy-to-let. They want to know what you offer, how it works, and that you will reply.',
    items: [
      {
        title: 'New buyer enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing mortgage broker enquiries',
      },
      {
        title: 'Discovery calls and fact-finds',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing mortgage broker discovery calls',
      },
      {
        title: 'Applications and follow-up',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing mortgage broker applications',
      },
      {
        title: 'Reviews and referrals',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing mortgage broker reviews',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'mortgage-brokers-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where Enquiries Slip',
    title: 'The pipeline is steady. The bit between enquiry and signed application is where it leaks.',
    benefits: [
      {
        icon: Banknote,
        title: 'Calls miss while you are with a client',
        description: 'You are on a fact-find. The phone rings out. The buyer picks the next broker.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Discovery calls take days to arrange',
        description: 'A simple call takes too many emails before anything is on the diary.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Applications stall mid-pipeline',
        description: 'Documents are outstanding. The buyer goes quiet. Nobody chases.',
        iconType: 'accent' as const,
      },
      {
        icon: FileSignature,
        title: 'Online you look smaller than the work you do',
        description: 'Plenty of completed cases. Almost no reviews to show for them.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to handle every enquiry, call, and application',
    description: 'Each piece does one job. Together they keep buyers from slipping out of the pipeline.',
    featureCategories: [
      {
        title: 'Catch every call and form',
        description: 'Calls, missed calls, web forms — all in one place with the buyer and the request noted.',
        icon: MessageSquare,
        features: [
          'Missed calls texted back instantly',
          'Web enquiries sent to your inbox',
          'Buyer and request captured up front',
        ],
      },
      {
        title: 'Get the discovery call booked without email tag',
        description: 'A clear way to offer a slot, confirm it, and remind both sides the day before.',
        icon: Calendar,
        features: [
          'Discovery slots buyers can pick themselves',
          'Confirmations and reminders sent automatically',
          'You see the request before the call',
        ],
      },
      {
        title: 'Stop applications stalling',
        description: 'Every open application gets a follow-up on a schedule, even when you are deep in cases.',
        icon: Workflow,
        features: [
          'Outstanding documents chased automatically',
          'Open cases visible in one place',
          'Old enquiries warmed up instead of forgotten',
        ],
      },
      {
        title: 'Turn completed cases into proof',
        description: 'A review request goes out at the right moment so the work shows up online.',
        icon: ShieldCheck,
        features: [
          'Review requests after completion',
          'Asked when the buyer is happiest',
          'More reviews where buyers look',
        ],
      },
      {
        title: 'Show up when buyers search',
        description: 'Service pages and Google profile lined up so you appear when someone looks for a broker.',
        icon: Search,
        features: [
          'Found for the products you handle',
          'Service pages that match real searches',
          'Local and niche coverage that is visible',
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
          'Phone rings while you are on a fact-find. Goes to voicemail. Lost.',
          'A buyer wants a call. Three emails later, still no time set.',
          'An application has been waiting on documents for days. Nobody chased.',
          'You completed a great case last month. They never got asked for a review.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it runs after',
        items: [
          'Missed call gets a text back inside a minute. They know you will reply.',
          'They pick a slot from a link. Confirmed. Reminder fires the day before.',
          'Outstanding documents get a polite chase. You can see who is waiting.',
          'A review request goes out at completion. Reviews start stacking quietly.',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Where Most Brokers Start',
    title: 'Three stages, most brokers feel one more than the others',
    description: 'You do not have to fix everything at once. Start with whatever is leaking the most enquiries.',
    packages: [
      {
        name: 'Stop calls and enquiries going missing',
        description: 'For when you are with a client and quick enquiries sit unread.',
        price: 'Stage 1',
        priceDetail: 'Start here if missed calls are the leak',
        features: [
          'Missed-call text-back so they know you will reply',
          'One inbox for calls, forms, and web enquiries',
          'Buyer and request noted before the conversation',
        ],
      },
      {
        name: 'Get the discovery call booked the same week',
        description: 'Once enquiries are caught, this stage takes the friction out of confirming a call.',
        price: 'Stage 2',
        priceDetail: 'Start here if booking is where it slows down',
        features: [
          'Discovery slots buyers can pick themselves',
          'Reminders the day before so calls actually happen',
          'You see the request before the call',
        ],
        popular: true,
      },
      {
        name: 'Keep applications moving and turn completions into reviews',
        description: 'For when enquiries come in fine but applications stall and reviews never get asked for.',
        price: 'Stage 3',
        priceDetail: 'Start here if follow-up and reputation are the weak spots',
        features: [
          'Outstanding documents chased automatically',
          'Past enquiries nudged at the right moment',
          'Review requests at completion',
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
        trigger: 'You are on a fact-find and a new enquiry call rings out.',
        actions: [
          'They get a text inside a minute saying you will reply',
          'The text captures the buyer and the request',
          'The lead is held instead of going to the next broker',
        ],
      },
      {
        trigger: 'A buyer wants a discovery call this week.',
        actions: [
          'They pick a slot from a link, no more email tag',
          'A reminder goes out the day before',
          'You walk into the call with the request already noted',
        ],
      },
      {
        trigger: 'An application has been waiting on documents for days.',
        actions: [
          'A polite chase goes out automatically',
          'Open cases are visible in one place',
          'When the documents arrive, the case moves without another five emails',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'mortgage-brokers-workflow-examples',
  };

  const caseStudiesData = {
    category: 'real-estate-property-services' as const,
    title: 'Related Case Studies',
    description: 'Examples of how the system supports real estate and property businesses in this category.',
    limit: 2,
  };

  const exploreData = {
    badge: 'Related',
    description: 'The other parts of the system that come up most often for mortgage brokers.',
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
        description: 'Support discovery booking, reminders, and clearer next steps.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen broker visibility and trust.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description: 'Turn completed cases into reviews and proof.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Things mortgage brokers usually ask',
    description: 'Straight answers about how this fits into a busy broker pipeline.',
    faqs: [
      {
        question: 'I am on calls and fact-finds most of the day. How much extra work is this?',
        answer:
          'Almost none after setup. Missed calls get answered by text on their own. Document chasing goes out on a schedule. Reminders fire by themselves.',
      },
      {
        question: 'Will buyers feel like they are getting an automated response?',
        answer:
          'No. The messages are short and written like you would actually reply. The aim is to hold the lead until you can speak to them.',
      },
      {
        question: 'Can it handle buyers who need a discovery call before any application?',
        answer:
          'Yes. The first reply confirms a discovery call and the application starts after the call.',
      },
      {
        question: 'Do I have to chase reviews myself?',
        answer:
          'No. The request goes out on its own at completion, when the buyer is happiest.',
      },
      {
        question: 'What about enquiries sitting in old emails?',
        answer:
          'Those get worked in too. Many brokers find that warming up old enquiries brings in real cases before any new marketing kicks in.',
      },
      {
        question: 'Do I need a brand new website?',
        answer:
          'Usually not. We look at what you have first. Often the gap is everything that happens after the form is sent.',
      },
    ],
  };

  return {
    slug: 'mortgage-brokers',
    industries: ['mortgage-broker'],
    systems: [
      'smart-website-systems',
      'crm-automation',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['lead-qualification', 'crm-pipeline', 'pipeline-visibility'],
    type: 'detail',
    parentSlug: 'real-estate-property-services',
    seo: {
      title: 'Mortgage Brokers — Stop Losing Enquiries and Stalled Applications | MindWP',
      description:
        'For mortgage brokers where calls go to voicemail, applications stall, and reviews never get asked for. We put the routing, follow-up, and visibility in place.',
      keywords: [
        'mortgage broker website design',
        'mortgage broker booking system',
        'mortgage broker lead handling system',
        'mortgage broker seo services',
        'mortgage broker reputation management system',
      ],
      canonical: '/industries/real-estate-property-services/mortgage-brokers',
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
      title: 'Tell us where enquiries are slipping',
      description:
        'If calls go to voicemail in fact-finds, applications stall, or reviews never get asked for, walk us through how the week runs and we will show you the first thing worth fixing.',
    },
  };
}

export const mortgageBrokersIndustryPageData: IndustryPageData = buildMortgageBrokersIndustryPageData();
