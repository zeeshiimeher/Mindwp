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

function buildHomeInspectorsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Home Inspectors',
    title: 'A Buyer Needs an Inspection This Week. Whoever Confirms First Usually Gets It.',
    description:
      'Home inspections are time-sensitive. Buyers and agents want a slot fast. The inspector who replies the same hour usually wins the booking. The rest watch the work go to whoever was quicker.',
    list: ['Slow replies', 'Lost bookings', 'Missed reports', 'Few reviews'],
    cssPrefix: 'home-inspectors-hero',
  };

  const imageStripData = {
    badge: 'How Inspections Get Booked',
    title: 'A buyer or agent needs an inspection slot this week',
    description:
      'They want to know if you are available, what it costs, and whether the report will land in time for the deadline.',
    items: [
      {
        title: 'Buyer and agent enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing home inspection enquiries',
      },
      {
        title: 'Booking and confirmations',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing home inspection booking',
      },
      {
        title: 'Reports and follow-up',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing home inspection reports',
      },
      {
        title: 'Reviews and referrals',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing home inspection reviews',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'home-inspectors-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where The Work Slips',
    title: 'The inspections are thorough. The bit before and after is where it leaks.',
    description: 'Same handful of gaps in nearly every inspection business.',
    benefits: [
      {
        icon: Home,
        title: 'A buyer enquiry sat for half a day',
        description: 'You were on a job. By the time you replied, they had booked someone else.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Booking turns into back-and-forth',
        description: 'Texts go back and forth for hours just to confirm a date and a price.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Report follow-up gets sent when you remember',
        description: 'You meant to check in after the report. Sometimes it happens. Sometimes it does not.',
        iconType: 'accent' as const,
      },
      {
        icon: MapPinned,
        title: 'The inspector down the road has a wall of reviews. You do not.',
        description: 'You do better work. Online you look smaller because nobody was ever asked.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to handle every enquiry from first call to final review',
    description: 'Each piece does one job. Together they make sure work does not fall on the floor while you are on a job.',
    featureCategories: [
      {
        title: 'Catch every enquiry',
        description: 'Calls, forms, missed calls, web chat — they land in one place with the address and the deadline noted.',
        icon: MessageSquare,
        features: [
          'Missed calls texted back instantly',
          'Web enquiries sent to your phone',
          'Address and deadline captured up front',
        ],
      },
      {
        title: 'Get the booking confirmed without ten texts',
        description: 'A clear way to offer a slot, confirm it, and remind them the day before.',
        icon: Calendar,
        features: [
          'Slots customers can pick themselves',
          'Confirmations and reminders sent automatically',
          'Agent and buyer both kept in the loop',
        ],
      },
      {
        title: 'Keep report follow-up running',
        description: 'A check-in goes out after the report so questions get answered and referrals come naturally.',
        icon: Workflow,
        features: [
          'Follow-up after every report',
          'Open questions tracked in one place',
          'Past clients warmed up for referrals',
        ],
      },
      {
        title: 'Turn finished inspections into proof',
        description: 'A review request goes out at the right moment. Reputation catches up to the work.',
        icon: ShieldCheck,
        features: [
          'Review requests after every report',
          'Asked when the customer is happiest',
          'More five-stars where local people search',
        ],
      },
      {
        title: 'Show up when local buyers and agents search',
        description: 'Service pages and Google profile lined up so you appear when someone nearby needs an inspector.',
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
    title: 'A normal week for an inspector, before and after',
    description: 'You still do the inspections. What changes is the part that used to depend on you remembering.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How it runs now',
        items: [
          'A buyer enquiry sat for half a day. They booked someone else.',
          'A simple slot agreement took six texts.',
          'A report went out. No follow-up. No referral.',
          'A great job last week. Customer was thrilled. Never got asked for a review.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it runs after',
        items: [
          'Missed calls and forms get a reply inside a minute.',
          'They pick a slot from a link. Confirmed. Reminder fires the day before.',
          'A check-in goes out after the report. Questions get answered.',
          'A review request goes out the day the report lands. Reviews start stacking quietly.',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Where Most Inspectors Start',
    title: 'Three stages, most inspectors feel one more than the others',
    description: 'You do not have to fix everything at once. Start with whatever is leaking the most work.',
    packages: [
      {
        name: 'Stop calls and enquiries going missing',
        description: 'For when calls go to voicemail and quick enquiries sit unread.',
        price: 'Stage 1',
        priceDetail: 'Start here if missed calls are the leak',
        features: [
          'Missed-call text-back so they know you will reply',
          'One inbox for calls, forms, and web chat',
          'Address and deadline noted before the call back',
        ],
      },
      {
        name: 'Get the booking confirmed the same day',
        description: 'Once enquiries are caught, this stage takes the friction out of confirming a slot.',
        price: 'Stage 2',
        priceDetail: 'Start here if booking is where it slows down',
        features: [
          'Slots customers can pick themselves',
          'Reminders the day before',
          'Agent and buyer both kept in the loop',
        ],
        popular: true,
      },
      {
        name: 'Keep follow-up running and turn jobs into reviews',
        description: 'For when work comes in fine but follow-up and reviews depend on luck.',
        price: 'Stage 3',
        priceDetail: 'Start here if follow-up and reputation are the weak spots',
        features: [
          'Follow-up after every report',
          'Past clients warmed up for referrals',
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
        trigger: 'A buyer enquires about an inspection while you are on site.',
        actions: [
          'They get a text inside a minute saying you will follow up',
          'The text captures the address and the deadline',
          'A booking lands before the day is out',
        ],
      },
      {
        trigger: 'An agent wants to confirm a slot for a buyer this week.',
        actions: [
          'They pick a slot from a link, no more text tag',
          'A reminder goes out the day before',
          'Both the agent and the buyer are in the loop',
        ],
      },
      {
        trigger: 'A report has been delivered and you have not heard back.',
        actions: [
          'A polite check-in goes out a few days later',
          'Open questions get answered',
          'A review request goes out at the right moment',
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
        description: 'Strengthen inspection visibility and local trust.',
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
    description: 'Straight answers about how this fits a one-person business.',
    faqs: [
      {
        question: 'I am on inspections all day. How much extra work is this?',
        answer:
          'Almost none after setup. Missed calls get answered by text on their own. Reminders fire by themselves.',
      },
      {
        question: 'Will customers feel like they are getting an automated response?',
        answer:
          'No. The messages are short and written like you would actually text someone.',
      },
      {
        question: 'Can it handle bookings where the agent and the buyer both need to know?',
        answer:
          'Yes. The confirmation and reminders go to both, so nobody is left wondering.',
      },
      {
        question: 'Do I have to chase reviews myself?',
        answer:
          'No. The request goes out on its own after the report is delivered.',
      },
      {
        question: 'Can past clients be warmed up for referrals?',
        answer:
          'Yes. A friendly nudge at the right interval keeps you on their radar.',
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
    industries: ['home-inspector'],
    systems: ['smart-website-systems', 'ai-lead-handling', 'local-seo-authority', 'reputation-review'],
    topics: ['lead-management', 'missed-calls', 'review-generation'],
    type: 'detail',
    parentSlug: 'real-estate-property-services',
    seo: {
      title: 'Home Inspectors — Stop Losing Bookings to a Slow Reply | MindWP',
      description:
        'For home inspectors where buyer and agent enquiries sit while you are on a job, bookings drag, and reviews never get asked for. We put the routing, follow-up, and local visibility in place.',
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
      title: 'Tell us where the work is slipping',
      description:
        'If buyer and agent enquiries sit, bookings drag, or reviews never get asked for, walk us through how the week runs and we will show you the first thing worth fixing.',
    },
  };
}

export const homeInspectorsIndustryPageData: IndustryPageData = buildHomeInspectorsIndustryPageData();
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

function buildHomeInspectorsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Home Inspectors',
    title: 'A Buyer Needs an Inspection This Week. Whoever Confirms First Usually Gets It.',
    description:
      'Home inspections are time-sensitive. Buyers and agents want a slot fast. The inspector who replies the same hour usually wins the booking. The rest watch the work go to whoever was quicker.',
    list: ['Slow replies', 'Lost bookings', 'Missed reports', 'Few reviews'],
    cssPrefix: 'home-inspectors-hero',
  };

  const imageStripData = {
    badge: 'How Inspections Get Booked',
    title: 'A buyer or agent needs an inspection slot this week',
    description:
      'They want to know if you are available, what it costs, and whether the report will land in time for the deadline.',
    items: [
      {
        title: 'Buyer and agent enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing home inspection enquiries',
      },
      {
        title: 'Booking and confirmations',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing home inspection booking',
      },
      {
        title: 'Reports and follow-up',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing home inspection reports',
      },
      {
        title: 'Reviews and referrals',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing home inspection reviews',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'home-inspectors-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where The Work Slips',
    title: 'The inspections are thorough. The bit before and after is where it leaks.',
    description: 'Same handful of gaps in nearly every inspection business.',
    benefits: [
      {
        icon: Home,
        title: 'A buyer enquiry sat for half a day',
        description: 'You were on a job. By the time you replied, they had booked someone else.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Booking turns into back-and-forth',
        description: 'Texts go back and forth for hours just to confirm a date and a price.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Report follow-up gets sent when you remember',
        description: 'You meant to check in after the report. Sometimes it happens. Sometimes it does not.',
        iconType: 'accent' as const,
      },
      {
        icon: MapPinned,
        title: 'The inspector down the road has a wall of reviews. You do not.',
        description: 'You do better work. Online you look smaller because nobody was ever asked.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to handle every enquiry from first call to final review',
    description: 'Each piece does one job. Together they make sure work does not fall on the floor while you are on a job.',
    featureCategories: [
      {
        title: 'Catch every enquiry',
        description: 'Calls, forms, missed calls, web chat — they land in one place with the address and the deadline noted.',
        icon: MessageSquare,
        features: [
          'Missed calls texted back instantly',
          'Web enquiries sent to your phone',
          'Address and deadline captured up front',
        ],
      },
      {
        title: 'Get the booking confirmed without ten texts',
        description: 'A clear way to offer a slot, confirm it, and remind them the day before.',
        icon: Calendar,
        features: [
          'Slots customers can pick themselves',
          'Confirmations and reminders sent automatically',
          'Agent and buyer both kept in the loop',
        ],
      },
      {
        title: 'Keep report follow-up running',
        description: 'A check-in goes out after the report so questions get answered and referrals come naturally.',
        icon: Workflow,
        features: [
          'Follow-up after every report',
          'Open questions tracked in one place',
          'Past clients warmed up for referrals',
        ],
      },
      {
        title: 'Turn finished inspections into proof',
        description: 'A review request goes out at the right moment. Reputation catches up to the work.',
        icon: ShieldCheck,
        features: [
          'Review requests after every report',
          'Asked when the customer is happiest',
          'More five-stars where local people search',
        ],
      },
      {
        title: 'Show up when local buyers and agents search',
        description: 'Service pages and Google profile lined up so you appear when someone nearby needs an inspector.',
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
    title: 'A normal week for an inspector, before and after',
    description: 'You still do the inspections. What changes is the part that used to depend on you remembering.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How it runs now',
        items: [
          'A buyer enquiry sat for half a day. They booked someone else.',
          'A simple slot agreement took six texts.',
          'A report went out. No follow-up. No referral.',
          'A great job last week. Customer was thrilled. Never got asked for a review.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it runs after',
        items: [
          'Missed calls and forms get a reply inside a minute.',
          'They pick a slot from a link. Confirmed. Reminder fires the day before.',
          'A check-in goes out after the report. Questions get answered.',
          'A review request goes out the day the report lands. Reviews start stacking quietly.',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Where Most Inspectors Start',
    title: 'Three stages, most inspectors feel one more than the others',
    description: 'You do not have to fix everything at once. Start with whatever is leaking the most work.',
    packages: [
      {
        name: 'Stop calls and enquiries going missing',
        description: 'For when calls go to voicemail and quick enquiries sit unread.',
        price: 'Stage 1',
        priceDetail: 'Start here if missed calls are the leak',
        features: [
          'Missed-call text-back so they know you will reply',
          'One inbox for calls, forms, and web chat',
          'Address and deadline noted before the call back',
        ],
      },
      {
        name: 'Get the booking confirmed the same day',
        description: 'Once enquiries are caught, this stage takes the friction out of confirming a slot.',
        price: 'Stage 2',
        priceDetail: 'Start here if booking is where it slows down',
        features: [
          'Slots customers can pick themselves',
          'Reminders the day before',
          'Agent and buyer both kept in the loop',
        ],
        popular: true,
      },
      {
        name: 'Keep follow-up running and turn jobs into reviews',
        description: 'For when work comes in fine but follow-up and reviews depend on luck.',
        price: 'Stage 3',
        priceDetail: 'Start here if follow-up and reputation are the weak spots',
        features: [
          'Follow-up after every report',
          'Past clients warmed up for referrals',
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
        trigger: 'A buyer enquires about an inspection while you are on site.',
        actions: [
          'They get a text inside a minute saying you will follow up',
          'The text captures the address and the deadline',
          'A booking lands before the day is out',
        ],
      },
      {
        trigger: 'An agent wants to confirm a slot for a buyer this week.',
        actions: [
          'They pick a slot from a link, no more text tag',
          'A reminder goes out the day before',
          'Both the agent and the buyer are in the loop',
        ],
      },
      {
        trigger: 'A report has been delivered and you have not heard back.',
        actions: [
          'A polite check-in goes out a few days later',
          'Open questions get answered',
          'A review request goes out at the right moment',
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
        description: 'Strengthen inspection visibility and local trust.',
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
    description: 'Straight answers about how this fits a one-person business.',
    faqs: [
      {
        question: 'I am on inspections all day. How much extra work is this?',
        answer:
          'Almost none after setup. Missed calls get answered by text on their own. Reminders fire by themselves.',
      },
      {
        question: 'Will customers feel like they are getting an automated response?',
        answer:
          'No. The messages are short and written like you would actually text someone.',
      },
      {
        question: 'Can it handle bookings where the agent and the buyer both need to know?',
        answer:
          'Yes. The confirmation and reminders go to both, so nobody is left wondering.',
      },
      {
        question: 'Do I have to chase reviews myself?',
        answer:
          'No. The request goes out on its own after the report is delivered.',
      },
      {
        question: 'Can past clients be warmed up for referrals?',
        answer:
          'Yes. A friendly nudge at the right interval keeps you on their radar.',
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
    industries: ['home-inspector'],
    systems: ['smart-website-systems', 'ai-lead-handling', 'local-seo-authority', 'reputation-review'],
    topics: ['lead-management', 'missed-calls', 'review-generation'],
    type: 'detail',
    parentSlug: 'real-estate-property-services',
    seo: {
      title: 'Home Inspectors — Stop Losing Bookings to a Slow Reply | MindWP',
      description:
        'For home inspectors where buyer and agent enquiries sit while you are on a job, bookings drag, and reviews never get asked for. We put the routing, follow-up, and local visibility in place.',
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
      title: 'Tell us where the work is slipping',
      description:
        'If buyer and agent enquiries sit, bookings drag, or reviews never get asked for, walk us through how the week runs and we will show you the first thing worth fixing.',
    },
  };
}

export const homeInspectorsIndustryPageData: IndustryPageData = buildHomeInspectorsIndustryPageData();
import {
  Calendar,
  ClipboardCheck,
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
    title: 'They’re Closing In Ten Days. The Buyer’s Agent Needs An Inspector This Week. Whoever Replied First Got The Job.',
    description:
      'Pre-purchase inspections happen on tight deadlines. Buyer’s agents call three inspectors and book whoever can confirm a date today. We put the system in place that catches the call when you’re crawling through a loft, books the inspection without phone tag, and gets the report-to-quote follow-up flowing.',
    list: [
      'Agent calls that came in while you were on a roof',
      'Bookings that took five emails to confirm',
      'Reports delivered with no follow-up on remediation work',
      'Reviews from finished inspections you never asked forons you never asked for',
    ],
    cssPrefix: 'home-inspectors-hero',
  };

  const imageStripData = {
    badge: 'How Inspection Bookings Actually Land',
    title: 'Buyer’s closing in ten days. Agent rang three inspectors. Whoever confirmed first wins.',
    description:
      'It’s tight deadlines, agent calls between showings, urgent pre-completion inspections. The decision happens within hours of the first call
      {
    title: 'Inspection and availability enquiries',
      image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing home inspection enquiries',
      },
  {
    title: 'Scheduling and preparation steps',
      image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing home inspection scheduling and preparation',
      },
  {
    title: 'Reports and follow-through',
      image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing home inspection reports and follow-up',
      },
  {
    title: 'Reviews and local proof',
      image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing home inspection reviews and trust signals',
      },
    ],
  backgroundColor: 'bg-base',
    cssPrefix: 'home-inspectors-image-strip',
  };

const operatingPatternsData = {
  badge: 'Where Inspections Get Lost',
  title: 'Where Inspections Get Lost',
  title: 'You’re in a loft with a torch. The agent’s ringing somebody else.',
  description: 'Same handful of leaks across nearly every inspection business. None of them are about the inspection quality.',
  benefits: [
    {
      icon: ClipboardCheck,
      title: 'Two agent calls came in while you were under a kitchen sink',
      description:
        'Both bookings went to the inspector who could confirm a date by lunchtime.',
      iconType: 'primary' as const,
    },
    {
      icon: Calendar,
      title: 'A booking took five emails before the access details were sorted',
      description:
        '“Who has the keys?” “When are vendors out?” “Is it occupied?” Each reply waited a few hours.',
      iconType: 'secondary' as const,
    },
    {
      icon: Clock3,
      title: 'Last week’s reports went out with no follow-up',
      description:
        'Three buyers asked about remediation quotes. By the time you replied, two had instructed somebody else.',
      iconType: 'accent' as const,
    },
    {
      icon: Home,
      title: 'You’ve done 800 inspections. You have 22 reviews.',
      description:
        'Your reports are thorough. Online you look smaller than the rookie firm with 200 reviews
    columns: 4 as const,
    };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to catch agent calls and stop reports from going cold',
    description:
      'Each What Gets Put In Place',
    title: 'A steadier way to catch agent calls and stop reports from going cold',
    description:
      'Each piece does one job. Together they keep the diary booked while you’re heads-down in a property.',
    featureCategories: [
      {
        title: 'Reply to agents while you’re on a roof',
        description:
          'Missed call gets an instant text — “mid-inspection, will call back at 2, what’s the property?” Most agents wait instead of dialling the next inspector.',
        icon: MessageSquare,
        features: [
          'Missed-call text-back automatically',
          'Property and timing captured up front',
          'Holds the agent until you’re free',
        ],
      },
      {
        title: 'Take the booking without email tennis',
        description:
          'Agent picks a slot online. Access details, occupancy, who has the keys — captured in the same step. No five-email thread.',
        icon: Calendar,
        features: [
          'Self-serve inspection booking',
          'Access details captured up front',
          'Confirmation and prep sent automatically',
        ],
      },
      {
        title: 'Follow up reports for remediation work',
        description:
          'Report goes out Monday. Polite check-in goes out Friday — “any questions on remediation?” Captures the work that used to slip away.',
        icon: Workflow,
        features: [
          'Post-report follow-up at sensible intervals',
          'Pending remediation enquiries visible',
          'More post-inspection work converts',
        ],
      },
      {
        title: 'Build agent referrals into the system',
        description:
          'A polite thank-you to the referring agent after every booking. Agents who refer once tend to refer again.',
        icon: ShieldCheck,
        features: [
          'Agent referral acknowledgement',
          'Stay top-of-mind with the agent network',
          'Referrals stop relying on memory',
        ],
      },
      {
        title: 'Turn finished inspections into reviews',
        description:
          'A polite review request goes out the day after the report lands, when the relief is freshest.',
        icon: Star,
        features: [
          'Review requests after every inspection',
          'Asked when buyers are happiest',
          'Reviews catch up to your years of work',
        ],
      },
      {
        title: 'Show up first when local agents and buyers search',
        description:
          'Service pages and Google profile lined up so the right people in the right area find you first.',
        icon: Search,
        features: [
          'Pages for the inspection types you actually do',
          'Found on Maps for pre-purchase searches',
          'Less time on enquiries miles away',
          er once tend to refer again.',
        icon: ShieldCheck,
          features: [
            'Agent referral acknowledgement',
            'Stay top-of-mind with the agent network',
            'Referrals stop relying on memory',
          ],
      }, What Actually Changes',
    title: 'A normal week, before and after',
      description: 'The inspections stay thorough. The chasing stops.',
      comparisons: [
        {
          type: 'before' as const,
          title: 'How it runs now',
          items: [
            'Two agent calls went unanswered while you were under a kitchen sink. Both booked elsewhere.',
            'A booking took five emails to confirm access details.',
            'Three remediation enquiries from last week’s reports went cold.',
            '“Meant to ask for a Google review” — said about every report.',
          ],
        },
        {
          type: 'after' as const,
          title: 'How it runs after',
          items: [
            'Missed calls get an instant text. Most agents wait instead of dialling the next inspector.',
            'Bookings come with access details captured in one step.',
            'Post-report follow-up goes out automatically. More remediation work converts.',
            'Reviews get asked for the day after every report.
          ],
          columns: 3 as const,
        };

    const comparisonData = {
      badge: 'What Actually Changes',
      title: 'Where Most Inspectors Start',
      title: 'Three stages — most inspectors feel one of them more than the others',
      description: 'Pick whichever costs you the most inspections right now.',
      packages: [
        {
          name: 'Stop losing the agent calls',
          description: 'For when agent calls go to voicemail while you’re mid-inspection.',
          price: 'Stage 1',
          priceDetail: 'Start here if first-reply speed is the biggest leak',
          features: [
            'Missed-call text-back automatically',
            'Property and timing captured up front',
            'Most agents wait instead of dialling elsewhere',
          ],
        },
        {
          name: 'Take the booking and the access details in one step',
          description: 'For when bookings take five emails to sort out access and occupancy.',
          price: 'Stage 2',
          priceDetail: 'Start here if booking and access coordination are the leak',
          features: [
            'Self-serve inspection booking',
            'Access details captured up front',
            'Confirmation and prep sent automatically',
          ],
          popular: true,
        },
        {
          name: 'Build the local proof and capture remediation work',
          description: 'For when reports go out and follow-up work gets lost.',
          price: 'Stage 3',
          priceDetail: 'Start here if reviews and post-report follow-up are the weak spot',
          features: [
            'Post-report follow-up at sensible intervals',
            'Review requests after every inspection',
            'Pages for the inspection types you actually do',

            price: 'Stage 1',
            priceDetail: 'Start here if first-reply speed is the biggest leak',
            features: [
              'Missed-call text-back automatically',
              'Property and timing captured up front',
              'MReal Situations',
              title: 'A few moments where the difference shows up',
              description: 'Small moments in the week of an inspector where things used to slip through.',
              workflows: [
                {
                  trigger: 'A buyer’s agent calls while you’re on a roof.',
                  actions: [
                    'Missed call gets an instant text within seconds',
                    'They’re told you’ll call back at a specific time',
                    'Most wait instead of dialling the next inspector',
                  ],
                },
                {
                  trigger: 'An inspection is booked for a property nobody lives in yet.',
                  actions: [
                    'Booking flow captures access details and key holder',
                    'Confirmation and prep sent automatically',
                    'No five-email thread to sort the visit',
                  ],
                },
                {
                  trigger: 'A report went out Monday with major remediation findings.',
                  actions: [
                    'Polite follow-up goes out Friday',
                    '“Any questions on the remediation?” captures pending work',
                    'Post-inspection work conversion goes up
    badge: 'Real Situations',
                    title: 'A few moments where the difference shows up',
                    description: 'Small moments in the week of an inspector where things used to slip through.',
                    workflows: [
                      {
                        trigger: 'A buyer’s agent calls while you’re on a roof.',
                        actions: [
                          'Missed call gets an instant text within seconds',
                          'They’re told you’ll call back at a specific time',
                          'Most wait instead of dialling the next inspector',
                        ],
                      },
                      {
                        trigger: 'An inspection is booked for a property nobody lives in yet.',
                        actions: [
                          'BRelated',
                          description:
                          'The other parts of the system that come up most often for home inspectors
                        ],
                      },
                      {
                        trigger: 'A report went out Monday with major remediation findings.',
                        actions: [
                          'Polite follow-up goes out Friday',
                          '“Any questions on the remediation?” captures pending work',
                          'Post-inspection work conversion goes up',
                        ],
                      },
                    ],
                    backgroundColor: 'bg-base',
                    cssPrefix: 'home-inspectors-workflow-examples',
  };

          const caseStudiesData = {
            category: 'real-estate-property-services' as const,
            title: 'Related Case Studies',
            description: 'Examples of how the system supports property businesses in this category.',
            limit: 2,
          };

          const exploreData = {
            badge: 'Related',
            description:
              'The other parts of the system that come up most often for home inspectors.',
            cards: [
              {
                icon: Workflow,
                title: 'Smart Website Systems',
                description:
                  'See the core system layer that holds inspection enquiries, appointment flow, and follow-up together.',
                href: '/services/smart-website-systems',
                gradient: 'purple',
                iconBg: 'purple',
              },
              {
                icon: Calendar,
                title: 'Booking & Scheduling System',
                description: 'Support inspection scheduling, reminders, and clearer next-step handling.',
                href: '/services/crm-infrastructure-implementation',
                gradThings home inspectors usually ask',
    description: 'Straight answers about how this fits an inspection business.',
                faqs: [
                  {
                    question: 'I’m on-site all day. Will this need someone in the office?',
                    answer:
                      'No. The whole point is it runs while you’re inspecting. Missed-call text-back, online booking, post-report follow-up — all automatic. You handle the actual inspections.',
                  },
                  {
                    question: 'How does the missed-call text-back work for agents?',
                    answer:
                      'An agent calls while you’re mid-inspection. Within seconds they get a text — “mid-inspection, will call back at 2, what’s the property?” Most wait instead of dialling the next inspector.',
                  },
                  {
                    question: 'Will it work alongside my report writing software (Spectora, HomeGauge, etc)?',
                    answer:
                      'Yes. Whatever you use for reports stays. The system improves the bit between the agent enquiry and the inspection landing in the diary, and the bit after the report goes out.',
                  },
                  {
                    question: 'Can it really capture more remediation follow-up work?',
                    answer:
                      'Yes — a polite check-in goes out a few days after the report. “Any questions on the remediation?” catches pending work that used to drift to other contractors.',
                  },
                  {
                    question: 'How do I get more reviews without nagging?',
                    answer:
                      'A polite request goes out the day after the report lands, when the relief is freshest. People who would have meant to leave one actually do.',
                  },
                  {
                    question: 'Do I need to scrap my current website?',
                    answer:
                      'Usually not. We look at what you have first. The leak is normally the bit between the agent calling and the inspection landing in the diary — not the site itself
      {
                    question: 'How does the missed-call text-back work for agents?',
                    answer:
                      'An agent calls while you’re mid-inspection. Within seconds they get a text — “mid-inspection, will call back at 2, what’s the property?” Most wait instead of dialling the next inspector.',
                  },
                  {
                    question: 'Will it work alongside my report writing software (Spectora, HomeGauge, etc)?',
                    answer:
                      'Yes. Whatever you use for reports stays. The system improves the bit between the agent enquiry and the inspection landing in the diary, and the bit after the report goes out.',
                  },
                  {
                    question: 'Can it really capture more remediation follow-up work?',
                    answer:
                      'Yes — a polite check-in goes out a few days after the report. “Any questions on the remediation?” catches pending work that used to drift to other contractors.',
                  },
                  {
                    question: 'How do I get more reviews without nagging?',
                    answer: top Losing Agent Calls, Pre- Purchase Bookings & Remediation Work | MindWP',
      description:
                  'For home inspectors where agent calls go to voicemail mid-inspection, where bookings take five emails to confirm access, and where post-report remediation work goes cold. We put the system in place that catches them
      {
                    question: 'Do I need to scrap my current website?',
                    answer:
                      'Usually not. We look at what you have first. The leak is normally the bit between the agent calling and the inspection landing in the diary — not the site itself.',
                  },
                ],
              };

            return {
              slug: 'home-inspectors',
              industries: ['home-inspection'],
              systems: [
                'smart-website-systems',
                'crm-automation',
                'local-seo-authority',
                'reputation-review',
              ],
              topics: ['lead-qualification', 'follow-up', 'review-generation'],
              type: 'detail',
              parentSlug: 'real-estate-property-services',
              seo: {
                title: 'Home Inspectors — Stop Losing Agent Calls, Pre-Purchase Bookings & Remediation Work | MindWP',
                descriptTell us where the inspections are leaking',
      description:
                'If agent calls go to voicemail, if bookings take five emails to sort access, or if post-report remediation work goes cold — walk us through how the business runs and we’ll show you the first thing worth fixing
        'home inspector website design',
                'home inspection booking workflow',
                'home inspector lead handling system',
                'home inspector seo services',
                'home inspection review system',
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
      title: 'Tell us where the inspections are leaking',
      description:
        'If agent calls go to voicemail, if bookings take five emails to sort access, or if post-report remediation work goes cold — walk us through how the business runs and we’ll show you the first thing worth fixing.',
    },
  };
}

export const homeInspectorsIndustryPageData: IndustryPageData =
  buildHomeInspectorsIndustryPageData();
