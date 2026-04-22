import {
  Calendar,
  Clock3,
  Home,
  MapPin,
  MessageSquare,
  Search,
  ShieldCheck,
  Star,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildRealtorsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Realtors',
    title: 'A Buyer Wants a Viewing This Weekend. They Picked Whoever Replied First.',
    description:
      'Realtor enquiries arrive while you are at a viewing or in the car. The phone rings out. The buyer books with the next agent.',
    list: ['Slow replies', 'Lost viewings', 'Quiet pipelines', 'Few reviews'],
    cssPrefix: 'realtors-hero',
  };

  const imageStripData = {
    badge: 'How Buyers and Sellers Come In',
    title: 'Someone wants to know if you can help',
    description:
      'A buyer wants a viewing. A seller wants a valuation. They want to know what you do, how it works, and that you will reply.',
    items: [
      {
        title: 'New buyer and seller enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing realtor enquiries',
      },
      {
        title: 'Viewings and valuations',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing realtor viewings',
      },
      {
        title: 'Pipeline and follow-up',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing realtor pipeline',
      },
      {
        title: 'Reviews and referrals',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing realtor reviews',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'realtors-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where Buyers Slip',
    title: 'The pipeline is steady. The bit between enquiry and signed agreement is where it leaks.',
    benefits: [
      {
        icon: Home,
        title: 'Calls miss while you are at a viewing',
        description: 'You are showing a property. The phone rings out. The buyer books with the next agent.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Viewings and valuations take too long to confirm',
        description: 'A simple slot takes too many texts before anything is on the diary.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Past enquiries go cold',
        description: 'A buyer was interested a few weeks ago. Nobody nudged them. They drifted.',
        iconType: 'accent' as const,
      },
      {
        icon: MapPin,
        title: 'Online you look smaller than the work you do',
        description: 'Plenty of completions. Almost no reviews to show for them.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to handle every enquiry, viewing, and follow-up',
    description: 'Each piece does one job. Together they keep buyers and sellers from slipping between viewings.',
    featureCategories: [
      {
        title: 'Catch every call and form',
        description: 'Calls, missed calls, web forms — all in one place with the buyer and the property noted.',
        icon: MessageSquare,
        features: [
          'Missed calls texted back instantly',
          'Web enquiries sent to your phone',
          'Buyer and property captured up front',
        ],
      },
      {
        title: 'Get the viewing booked without phone tag',
        description: 'A clear way to offer a slot, confirm it, and remind both sides the day before.',
        icon: Calendar,
        features: [
          'Slots buyers can pick themselves',
          'Confirmations and reminders sent automatically',
          'You arrive with the buyer and property already noted',
        ],
      },
      {
        title: 'Bring past enquiries back into play',
        description: 'Old enquiries get gentle nudges so the pipeline stays alive.',
        icon: Workflow,
        features: [
          'Past enquiries nudged automatically',
          'Open opportunities visible in one place',
          'Old leads warmed up instead of forgotten',
        ],
      },
      {
        title: 'Turn completions into proof',
        description: 'A review request goes out at the right moment so the agency shows up online.',
        icon: ShieldCheck,
        features: [
          'Review requests after completion',
          'Asked when the buyer or seller is happiest',
          'More reviews where local people look',
        ],
      },
      {
        title: 'Show up when local people search',
        description: 'Service pages and Google profile lined up so you appear when someone nearby looks for an agent.',
        icon: Search,
        features: [
          'Found on Maps for the areas you cover',
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
          'Phone rings while you are at a viewing. Goes to voicemail. Lost.',
          'A buyer wants a viewing. Three texts later, still no time set.',
          'A buyer was interested a few weeks ago. Nobody nudged them.',
          'You completed a great sale last month. They never got asked for a review.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it runs after',
        items: [
          'Missed call gets a text back inside a minute. They know you will reply.',
          'They pick a slot from a link. Confirmed. Reminder fires the day before.',
          'A gentle nudge goes out and the conversation comes back to life.',
          'A review request goes out at completion. Reviews start stacking quietly.',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Where Most Realtors Start',
    title: 'Three stages, most realtors feel one more than the others',
    description: 'You do not have to fix everything at once. Start with whatever is leaking the most opportunities.',
    packages: [
      {
        name: 'Stop calls and enquiries going missing',
        description: 'For when you are at a viewing and quick enquiries sit unread.',
        price: 'Stage 1',
        priceDetail: 'Start here if missed calls are the leak',
        features: [
          'Missed-call text-back so they know you will reply',
          'One inbox for calls, forms, and web enquiries',
          'Buyer and property noted before the conversation',
        ],
      },
      {
        name: 'Get the viewing booked the same day',
        description: 'Once enquiries are caught, this stage takes the friction out of confirming a viewing.',
        price: 'Stage 2',
        priceDetail: 'Start here if booking is where it slows down',
        features: [
          'Slots buyers can pick themselves',
          'Reminders the day before so viewings actually happen',
          'You arrive with the buyer and property already noted',
        ],
        popular: true,
      },
      {
        name: 'Keep the pipeline alive and turn completions into reviews',
        description: 'For when enquiries come in fine but past leads go cold and reviews never get asked for.',
        price: 'Stage 3',
        priceDetail: 'Start here if follow-up and reputation are the weak spots',
        features: [
          'Past enquiries nudged automatically',
          'Old leads warmed up at the right moment',
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
        trigger: 'You are at a viewing and a new enquiry call rings out.',
        actions: [
          'They get a text inside a minute saying you will reply',
          'The text captures the buyer and the property',
          'The lead is held instead of going to the next agent',
        ],
      },
      {
        trigger: 'A buyer wants a viewing this weekend.',
        actions: [
          'They pick a slot from a link, no more text tag',
          'A reminder goes out the day before',
          'You arrive with the buyer and the property already noted',
        ],
      },
      {
        trigger: 'A buyer went quiet a few weeks ago.',
        actions: [
          'A gentle nudge goes out automatically',
          'Old leads are visible in one place',
          'When they reply, the conversation picks up where it left off',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'realtors-workflow-examples',
  };

  const caseStudiesData = {
    category: 'real-estate-property-services' as const,
    title: 'Related Case Studies',
    description: 'Examples of how the system supports real estate and property businesses in this category.',
    limit: 2,
  };

  const exploreData = {
    badge: 'Related',
    description: 'The other parts of the system that come up most often for realtors.',
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
        description: 'Support viewing booking, reminders, and clearer next steps.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen agent visibility and local trust.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description: 'Turn completions into reviews and proof.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Things realtors usually ask',
    description: 'Straight answers about how this fits into a busy agent week.',
    faqs: [
      {
        question: 'I am at viewings most of the day. How much extra work is this?',
        answer:
          'Almost none after setup. Missed calls get answered by text on their own. Past enquiries get nudged on a schedule. Reminders fire by themselves.',
      },
      {
        question: 'Will buyers feel like they are getting an automated response?',
        answer:
          'No. The messages are short and written like you would actually text someone. The aim is to hold the lead until you can speak to them.',
      },
      {
        question: 'Can it handle buyers who need a viewing before anything else?',
        answer:
          'Yes. The first reply confirms a viewing and the rest follows after the visit.',
      },
      {
        question: 'Do I have to chase reviews myself?',
        answer:
          'No. The request goes out on its own at completion, when the buyer or seller is happiest.',
      },
      {
        question: 'What about old enquiries sitting in the inbox?',
        answer:
          'Those get worked in too. Many agents find that warming up old enquiries brings in real opportunities before any new marketing kicks in.',
      },
      {
        question: 'Do I need a brand new website?',
        answer:
          'Usually not. We look at what you have first. Often the gap is everything that happens after the form is sent.',
      },
    ],
  };

  return {
    slug: 'realtors',
    industries: ['realtor'],
    systems: [
      'smart-website-systems',
      'crm-automation',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['lead-management', 'crm-pipeline', 'local-visibility'],
    type: 'detail',
    parentSlug: 'real-estate-property-services',
    seo: {
      title: 'Realtors — Stop Losing Viewings and Cold Pipelines | MindWP',
      description:
        'For realtors where calls go to voicemail at viewings, past enquiries go cold, and reviews never get asked for. We put the routing, follow-up, and local visibility in place.',
      keywords: [
        'realtor website design',
        'realtor booking system',
        'realtor lead handling system',
        'realtor seo services',
        'realtor reputation management system',
      ],
      canonical: '/industries/real-estate-property-services/realtors',
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
      title: 'Tell us where opportunities are slipping',
      description:
        'If calls go to voicemail at viewings, past enquiries go cold, or reviews never get asked for, walk us through how the week runs and we will show you the first thing worth fixing.',
    },
  };
}

export const realtorsIndustryPageData: IndustryPageData = buildRealtorsIndustryPageData();
