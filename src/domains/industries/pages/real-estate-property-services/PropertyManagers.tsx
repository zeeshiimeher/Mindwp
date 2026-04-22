import {
  Building2,
  Calendar,
  Clock3,
  KeyRound,
  MessageSquare,
  Search,
  ShieldCheck,
  Star,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildPropertyManagersIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Property Managers',
    title: 'A Landlord Wants to Switch Agents. They Picked Whoever Replied First.',
    description:
      'Property management enquiries arrive between viewings and maintenance calls. The phone rings out. The landlord signs with whoever followed up first.',
    list: ['Slow replies', 'Lost landlords', 'Tenant chasing', 'Few reviews'],
    cssPrefix: 'property-managers-hero',
  };

  const imageStripData = {
    badge: 'How New Doors Come In',
    title: 'A landlord wants to know if you can take it on',
    description:
      'A new property, a switch from another agent, a portfolio. They want to know what you do, how you handle tenants, and that you will reply.',
    items: [
      {
        title: 'New landlord enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing property management enquiries',
      },
      {
        title: 'Valuations and onboarding',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing property management onboarding',
      },
      {
        title: 'Tenant communication',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing tenant communication',
      },
      {
        title: 'Reviews and referrals',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing property management reviews',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'property-managers-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where Doors Slip',
    title: 'The portfolio is busy. The bit between enquiry and signed agreement is where it leaks.',
    benefits: [
      {
        icon: Building2,
        title: 'Calls miss while you are at a viewing',
        description: 'The team is on the road. The phone rings out. The landlord picks the next agent.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Valuations take days to arrange',
        description: 'A simple visit takes too many emails before anything is on the diary.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Onboarding stalls',
        description: 'Documents are outstanding. The landlord goes quiet. Nobody chases.',
        iconType: 'accent' as const,
      },
      {
        icon: KeyRound,
        title: 'Online you look smaller than the portfolio you run',
        description: 'Plenty of happy landlords and tenants. Almost no reviews to show for them.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to handle every enquiry, valuation, and onboarding',
    description: 'Each piece does one job. Together they keep landlords from slipping between viewings.',
    featureCategories: [
      {
        title: 'Catch every call and form',
        description: 'Calls, missed calls, web forms — all in one place with the landlord and the property noted.',
        icon: MessageSquare,
        features: [
          'Missed calls texted back instantly',
          'Web enquiries sent to the office',
          'Landlord and property captured up front',
        ],
      },
      {
        title: 'Get the valuation booked without email tag',
        description: 'A clear way to offer a slot, confirm it, and remind both sides the day before.',
        icon: Calendar,
        features: [
          'Valuation slots landlords can pick themselves',
          'Confirmations and reminders sent automatically',
          'Team sees the property before they arrive',
        ],
      },
      {
        title: 'Stop onboarding stalling',
        description: 'Every new instruction gets a follow-up on a schedule, even when the office is busy.',
        icon: Workflow,
        features: [
          'Outstanding documents chased automatically',
          'Open instructions visible in one place',
          'Old enquiries warmed up instead of forgotten',
        ],
      },
      {
        title: 'Turn happy landlords into proof',
        description: 'A review request goes out at the right moment so the agency shows up online.',
        icon: ShieldCheck,
        features: [
          'Review requests after onboarding',
          'Asked when the landlord is most positive',
          'More reviews where landlords look',
        ],
      },
      {
        title: 'Show up when landlords search',
        description: 'Service pages and Google profile lined up so you appear when someone looks for an agent.',
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
          'Phone rings while the team is at a viewing. Goes to voicemail. Lost.',
          'A landlord wants a valuation. Three emails later, still no time set.',
          'New instruction has been waiting on documents for days. Nobody chased.',
          'You took on three new doors last month. They never got asked for a review.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it runs after',
        items: [
          'Missed call gets a text back inside a minute. They know the office will reply.',
          'They pick a slot from a link. Confirmed. Reminder fires the day before.',
          'Outstanding documents get a polite chase. You can see who is waiting.',
          'A review request goes out after onboarding. Reviews start stacking quietly.',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Where Most Agents Start',
    title: 'Three stages, most agents feel one more than the others',
    description: 'You do not have to fix everything at once. Start with whatever is leaking the most landlords.',
    packages: [
      {
        name: 'Stop calls and enquiries going missing',
        description: 'For when the team is on the road and quick enquiries sit unread.',
        price: 'Stage 1',
        priceDetail: 'Start here if missed calls are the leak',
        features: [
          'Missed-call text-back so they know you will reply',
          'One inbox for calls, forms, and web enquiries',
          'Landlord and property noted before the conversation',
        ],
      },
      {
        name: 'Get the valuation booked the same week',
        description: 'Once enquiries are caught, this stage takes the friction out of confirming a valuation.',
        price: 'Stage 2',
        priceDetail: 'Start here if booking is where it slows down',
        features: [
          'Valuation slots landlords can pick themselves',
          'Reminders the day before so visits actually happen',
          'Team sees the property before they arrive',
        ],
        popular: true,
      },
      {
        name: 'Keep onboarding moving and turn doors into reviews',
        description: 'For when enquiries come in fine but onboarding stalls and reviews never get asked for.',
        price: 'Stage 3',
        priceDetail: 'Start here if follow-up and reputation are the weak spots',
        features: [
          'Outstanding documents chased automatically',
          'Past enquiries nudged at the right moment',
          'Review requests after onboarding',
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
        trigger: 'The team is at a viewing and a landlord rings the office.',
        actions: [
          'They get a text inside a minute saying the office will reply',
          'The text captures the landlord and the property',
          'The lead is held instead of going to the next agent',
        ],
      },
      {
        trigger: 'A landlord wants a valuation this week.',
        actions: [
          'They pick a slot from a link, no more email tag',
          'A reminder goes out the day before',
          'The team arrives with the property already noted',
        ],
      },
      {
        trigger: 'New instruction has been waiting on documents for days.',
        actions: [
          'A polite chase goes out automatically',
          'Open instructions are visible in one place',
          'When the documents arrive, onboarding moves without another five emails',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'property-managers-workflow-examples',
  };

  const caseStudiesData = {
    category: 'real-estate-property-services' as const,
    title: 'Related Case Studies',
    description: 'Examples of how the system supports real estate and property businesses in this category.',
    limit: 2,
  };

  const exploreData = {
    badge: 'Related',
    description: 'The other parts of the system that come up most often for property managers.',
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
        description: 'Support valuation booking, reminders, and clearer next steps.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen agency visibility and local trust.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description: 'Turn happy landlords into reviews and proof.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Things property managers usually ask',
    description: 'Straight answers about how this fits into a busy agency.',
    faqs: [
      {
        question: 'The team is on the road most of the day. How much extra work is this?',
        answer:
          'Almost none after setup. Missed calls get answered by text on their own. Document chasing goes out on a schedule. Reminders fire by themselves.',
      },
      {
        question: 'Will landlords feel like they are getting an automated response?',
        answer:
          'No. The messages are short and written like the office would actually reply. The aim is to hold the lead until you can speak to them.',
      },
      {
        question: 'Can it handle landlords who need a valuation before any agreement?',
        answer:
          'Yes. The first reply confirms a valuation and the agreement follows after the visit.',
      },
      {
        question: 'Do we have to chase reviews ourselves?',
        answer:
          'No. The request goes out on its own after onboarding, when the landlord is most positive.',
      },
      {
        question: 'What about enquiries sitting in old emails?',
        answer:
          'Those get worked in too. Many agencies find that warming up old enquiries brings in real doors before any new marketing kicks in.',
      },
      {
        question: 'Do we need a brand new website?',
        answer:
          'Usually not. We look at what you have first. Often the gap is everything that happens after the form is sent.',
      },
    ],
  };

  return {
    slug: 'property-managers',
    industries: ['property-management'],
    systems: [
      'smart-website-systems',
      'crm-automation',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['lead-routing', 'crm-pipeline', 'pipeline-visibility'],
    type: 'detail',
    parentSlug: 'real-estate-property-services',
    seo: {
      title: 'Property Managers — Stop Losing Landlords and Stalled Onboarding | MindWP',
      description:
        'For property managers where calls go to voicemail, onboarding stalls, and reviews never get asked for. We put the routing, follow-up, and local visibility in place.',
      keywords: [
        'property management website design',
        'property management booking system',
        'property management lead handling system',
        'property management seo services',
        'property management reputation management system',
      ],
      canonical: '/industries/real-estate-property-services/property-managers',
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
      title: 'Tell us where landlords are slipping',
      description:
        'If calls go to voicemail at viewings, onboarding stalls, or reviews never get asked for, walk us through how the week runs and we will show you the first thing worth fixing.',
    },
  };
}

export const propertyManagersIndustryPageData: IndustryPageData = buildPropertyManagersIndustryPageData();
