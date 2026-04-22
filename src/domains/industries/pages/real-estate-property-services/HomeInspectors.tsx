import {
  Calendar,
  ClipboardList,
  Clock3,
  Home,
  MessageSquare,
  Search,
  ShieldCheck,
  Star,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildHomeInspectorsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Home Inspectors',
    title: 'A Buyer Needs an Inspection This Week. Whoever Confirms First Usually Gets It.',
    description:
      'Home inspection enquiries are time-sensitive. The buyer is in the middle of an offer. Calls that miss the office and emails that wait until tomorrow lose the booking to whoever replied first.',
    list: ['Slow replies', 'Lost bookings', 'Missed reports', 'Few reviews'],
    cssPrefix: 'home-inspectors-hero',
  };

  const imageStripData = {
    badge: 'How Inspections Come In',
    title: 'A buyer needs an inspection before the deadline',
    description:
      'A pending sale, a tight closing window, an agent waiting on a report. They want to know if you can do it this week, what it costs, and that the report will be there in time.',
    items: [
      {
        title: 'Buyer and agent enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing home inspection enquiries',
      },
      {
        title: 'Booking and arrival times',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing inspection booking',
      },
      {
        title: 'Reports and follow-up',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing inspection reports',
      },
      {
        title: 'Reviews and agent referrals',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing inspection reviews',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'home-inspectors-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where Bookings Slip',
    title: 'The work is there. The way enquiries get handled is what loses it.',
    description: 'Same handful of gaps for nearly every home inspector.',
    benefits: [
      {
        icon: Home,
        title: 'Calls and emails miss the window',
        description: 'A buyer rings during an inspection. By the time you reply, they have already booked someone else.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Booking turns into a back and forth',
        description: 'A simple time slot takes too many emails before anything is on the calendar.',
        iconType: 'secondary' as const,
      },
      {
        icon: ClipboardList,
        title: 'Reports go out without a proper handover',
        description: 'The report lands in an inbox with no follow-up. Questions sit unanswered.',
        iconType: 'accent' as const,
      },
      {
        icon: Clock3,
        title: 'Agents send work to whoever replied last',
        description: 'You did good work for them. Without a way to stay top of mind, the next referral goes elsewhere.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to handle every enquiry, booking, and report',
    description: 'Each piece does one job. Together they keep bookings from slipping away in the gap between offer and closing.',
    featureCategories: [
      {
        title: 'Catch every call and form',
        description: 'Calls, missed calls, web forms — all in one place with the property and the deadline noted.',
        icon: MessageSquare,
        features: [
          'Missed calls texted back instantly',
          'Web enquiries sent to your phone',
          'Property and deadline captured up front',
        ],
      },
      {
        title: 'Get the inspection booked without the back-and-forth',
        description: 'A clear way to offer a slot, confirm it, and remind everyone the day before.',
        icon: Calendar,
        features: [
          'Slots buyers and agents can pick themselves',
          'Confirmations and reminders sent automatically',
          'Arrival window in the same message',
        ],
      },
      {
        title: 'Send the report with a proper handover',
        description: 'Reports go out with a follow-up so questions get answered and nothing sits in an inbox.',
        icon: Workflow,
        features: [
          'Reports delivered with a clear next step',
          'Follow-up scheduled automatically',
          'Open reports in one place',
        ],
      },
      {
        title: 'Turn finished inspections into proof',
        description: 'A review request goes out at the right moment so the work you do shows up online.',
        icon: ShieldCheck,
        features: [
          'Review requests after every report',
          'Asked when the buyer is happiest',
          'More reviews where local agents look',
        ],
      },
      {
        title: 'Stay top of mind with referring agents',
        description: 'Service pages and Google profile lined up so agents and buyers find you when it matters.',
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
    description: 'You still do the inspections. What changes is the part that used to depend on you remembering.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How it runs now',
        items: [
          'A buyer rings during an inspection. Goes to voicemail. Lost.',
          'They want a slot this week. Three emails later, still no time set.',
          'Report goes out. Sits in their inbox. No follow-up.',
          'You finished a great report last month. They never got asked for a review.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it runs after',
        items: [
          'Missed call gets a text back inside a minute. They know you will reply.',
          'They pick a slot from a link. Confirmed. Reminder fires the day before.',
          'Report goes out with a polite follow-up so questions get answered.',
          'A review request goes out after the report. Reviews start stacking quietly.',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Where Most Inspectors Start',
    title: 'Three stages, most inspectors feel one more than the others',
    description: 'You do not have to fix everything at once. Start with whatever is leaking the most bookings.',
    packages: [
      {
        name: 'Stop calls and enquiries going missing',
        description: 'For when calls miss the office and quick enquiries sit unread.',
        price: 'Stage 1',
        priceDetail: 'Start here if missed calls are the leak',
        features: [
          'Missed-call text-back so they know you will reply',
          'One inbox for calls, forms, and web enquiries',
          'Property and deadline noted before the conversation',
        ],
      },
      {
        name: 'Get the inspection booked the same day',
        description: 'Once enquiries are caught, this stage takes the friction out of confirming a slot.',
        price: 'Stage 2',
        priceDetail: 'Start here if booking is where it slows down',
        features: [
          'Slots buyers and agents can pick themselves',
          'Reminders the day before so nothing slips',
          'Arrival window sent automatically',
        ],
        popular: true,
      },
      {
        name: 'Send reports with proper follow-up and turn jobs into reviews',
        description: 'For when bookings are fine but reports go out without follow-up and reviews never get asked for.',
        price: 'Stage 3',
        priceDetail: 'Start here if follow-up and reputation are the weak spots',
        features: [
          'Reports delivered with a clear next step',
          'Past clients and agents nudged for return work',
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
        trigger: 'You are mid-inspection and a buyer rings the office.',
        actions: [
          'They get a text inside a minute saying you will reply',
          'The text captures the property and the deadline',
          'The lead is held instead of going to the next inspector',
        ],
      },
      {
        trigger: 'A buyer needs an inspection before the weekend.',
        actions: [
          'They pick a slot from a link, no more email back and forth',
          'A reminder goes out the day before',
          'You arrive with the property and deadline already noted',
        ],
      },
      {
        trigger: 'You sent a report a few days ago and have not heard back.',
        actions: [
          'A polite follow-up goes out automatically',
          'Open reports are visible in one place',
          'Questions get answered and the agent is kept in the loop',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'home-inspectors-workflow-examples',
  };

  const caseStudiesData = {
    category: 'real-estate-property-services' as const,
    title: 'Related Case Studies',
    description: 'Examples of how the system supports real estate and property service businesses in this category.',
    limit: 2,
  };

  const exploreData = {
    badge: 'Related',
    description: 'The other parts of the system that come up most often for home inspectors.',
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
        description: 'Support inspection booking, reminders, and clearer next steps.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen inspector visibility and local trust.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description: 'Turn finished reports into reviews and proof.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Things home inspectors usually ask',
    description: 'Straight answers about how this fits into a small inspection business.',
    faqs: [
      {
        question: 'I am out doing inspections all day. How much extra work is this?',
        answer:
          'Almost none after setup. Missed calls get answered by text on their own. Report follow-ups go out on a schedule. Reminders fire by themselves.',
      },
      {
        question: 'Will buyers and agents feel like they are getting an automated response?',
        answer:
          'No. The messages are short and written like you would actually text someone. The aim is to hold the lead until you can reply.',
      },
      {
        question: 'Can it handle inspections that need to be quoted first?',
        answer:
          'Yes. The first reply confirms a slot or sends a price, depending on how you usually work.',
      },
      {
        question: 'Do I have to chase reviews myself?',
        answer:
          'No. The request goes out on its own after the report is delivered, when the buyer is happiest.',
      },
      {
        question: 'What about referring agents we have worked with before?',
        answer:
          'Past agents get gentle nudges so you stay top of mind when the next inspection comes up.',
      },
      {
        question: 'Do I need a brand new website?',
        answer:
          'Usually not. We look at what you have first. Often the gap is everything that happens after the form is sent.',
      },
    ],
  };

  return {
    slug: 'home-inspectors',
    industries: ['home-inspection'],
    systems: ['smart-website-systems', 'ai-lead-handling', 'local-seo-authority', 'reputation-review'],
    topics: ['lead-management', 'missed-calls', 'review-generation'],
    type: 'detail',
    parentSlug: 'real-estate-property-services',
    seo: {
      title: 'Home Inspectors — Stop Losing Bookings to Slow Replies | MindWP',
      description:
        'For home inspectors where calls miss the office, reports go out without follow-up, and reviews never get asked for. We put the routing, follow-up, and local visibility in place.',
      keywords: [
        'home inspector website design',
        'home inspection booking system',
        'home inspector lead handling system',
        'home inspector seo services',
        'home inspector reputation management system',
      ],
      canonical: '/industries/real-estate-property-services/home-inspectors',
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
      title: 'Tell us where bookings are slipping',
      description:
        'If calls miss the office, reports go out without follow-up, or reviews never get asked for, walk us through how the week runs and we will show you the first thing worth fixing.',
    },
  };
}

export const homeInspectorsIndustryPageData: IndustryPageData = buildHomeInspectorsIndustryPageData();
