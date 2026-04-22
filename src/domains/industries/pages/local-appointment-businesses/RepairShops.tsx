import {
  Calendar,
  Clock3,
  MessageSquare,
  Search,
  ShieldCheck,
  Star,
  Workflow,
  Wrench,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildRepairShopsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Repair Shops',
    title: 'A Cracked iPhone At Lunchtime. Three Shops On Google Maps. Whoever Replied With A Price Got The Walk-In.',
    description:
      'People with a broken phone, laptop, or watch don’t shop carefully. They tap the first shop on Maps, want a price and a wait time, and walk in within the hour. We put the system in place that catches the enquiries while you’re mid-repair, quotes the easy ones automatically, and stops “is it worth fixing?” going unanswered.',
    list: [
      'Walk-in enquiries you couldn’t answer mid-repair',
      'Quote requests that took half a day to reply to',
      'Devices people promised to drop in but never did',
      'Reviews from happy fixes you never asked for',
    ],
    cssPrefix: 'repair-shops-hero',
  };

  const imageStripData = {
    badge: 'How Repair Enquiries Actually Land',
    title: 'Cracked screen at lunch. They want a price and a wait time. They’re walking in within the hour.',
    description:
      'Phones, laptops, watches, consoles. The decision happens in twenty minutes. Whoever replied with a number first gets the device on the bench.',
    items: [
      {
        title: 'Service and fault enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing repair shop service enquiries',
      },
      {
        title: 'Booking and visit timing',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing repair visit booking',
      },
      {
        title: 'Expectation setting and next steps',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing repair expectation setting',
      },
      {
        title: 'Reviews and local proof',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing repair shop reviews and local proof',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'repair-shops-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where The Bench Goes Quiet',
    title: 'You’re mid-screen replacement. The phone rings. They walked into the shop two doors down.',
    description: 'Same handful of leaks across nearly every repair shop. None of them are about the soldering.',
    benefits: [
      {
        icon: Wrench,
        title: 'Three “how much for a screen?” calls came in while you were soldering',
        description:
          'You couldn’t pick up. Two walked into the shop two doors down with a faster reply.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'A laptop quote sat in the inbox for half a day',
        description:
          'By the time you replied, they’d already taken it to the chain in the shopping centre.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Five “I’ll drop it in tomorrow” devices never showed up',
        description:
          'No reminder. No follow-up. Five jobs vanished without a trace.',
        iconType: 'accent' as const,
      },
      {
        icon: Star,
        title: 'You fix more devices than the chain. They have 800 reviews. You have 47.',
        description:
          'Your repairs come back working. Online you look smaller because nobody asked at the right moment.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to catch quote requests and stop devices from vanishing',
    description:
      'Each piece does one job. Together they keep the bench full while you’re heads-down in a repair.',
    featureCategories: [
      {
        title: 'Quote the easy ones automatically',
        description:
          '“iPhone 13 screen — £X, takes 45 minutes.” Standard repairs get a price and a slot back instantly. You only quote manually for the tricky ones.',
        icon: MessageSquare,
        features: [
          'Instant quote on standard repairs',
          'Wait time included up front',
          'They start walking in instead of shopping around',
        ],
      },
      {
        title: 'Take the booking without a phone call',
        description:
          'They pick a drop-off slot online. Optional deposit to hold it. Less DM tennis, fewer no-shows.',
        icon: Calendar,
        features: [
          'Self-serve drop-off booking',
          'Optional deposit-to-hold',
          'Day-before reminder',
        ],
      },
      {
        title: 'Stop “I’ll drop it in tomorrow” disappearing',
        description:
          'Promised drop-off didn’t happen? A polite nudge goes out the next day. A second one in three. Most show up.',
        icon: Workflow,
        features: [
          'Drop-off reminder if they didn’t show',
          'Quote follow-up at sensible intervals',
          'Pipeline of pending jobs visible',
        ],
      },
      {
        title: 'Tell people the device is ready without phoning',
        description:
          '“Your laptop’s ready. £120 to collect.” Auto text the moment you mark it done. Devices get picked up faster.',
        icon: ShieldCheck,
        features: [
          'Ready-to-collect notifications',
          'Devices stop sitting on the shelf',
          'Less time on the phone chasing collections',
        ],
      },
      {
        title: 'Turn finished repairs into reviews',
        description:
          'A polite review request goes out the day after collection. People who would have meant to leave one actually do.',
        icon: Star,
        features: [
          'Review requests after every collection',
          'Asked when the relief is freshest',
          'Reviews catch up to the quality of work',
        ],
      },
      {
        title: 'Show up first when local people search',
        description:
          'Service pages and Google profile lined up so people in the right area find you first — not the chain in the shopping centre.',
        icon: Search,
        features: [
          'Pages for the devices and brands you actually fix',
          'Found on Maps for local searches',
          'Less time on out-of-area enquiries',
        ],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'What Actually Changes',
    title: 'A normal week, before and after',
    description: 'The repairs stay. The chasing stops.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How it runs now',
        items: [
          '“How much for a screen?” calls go unanswered. They walked into the shop two doors down.',
          'Laptop quotes sit in the inbox for half a day.',
          '“I’ll drop it in tomorrow” devices never show up.',
          '“Meant to ask for a Google review” — said about every collection.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it runs after',
        items: [
          'Standard quotes go out instantly with a wait time.',
          'Drop-offs booked online without phoning.',
          'Promised drop-offs get a polite nudge — most show up.',
          'Reviews get asked for the day after every collection.',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Where Most Shops Start',
    title: 'Three stages — most shops feel one of them more than the others',
    description: 'Pick whichever costs you the most jobs right now.',
    packages: [
      {
        name: 'Stop losing the lunchtime walk-ins',
        description: 'For when “how much for a screen?” calls go unanswered while you’re mid-repair.',
        price: 'Stage 1',
        priceDetail: 'Start here if quote-speed is the biggest leak',
        features: [
          'Instant quote on standard repairs',
          'Wait time included up front',
          'Most start walking in instead of shopping around',
        ],
      },
      {
        name: 'Refill the bench without phoning round',
        description: 'For when drop-offs ghost and the bench has gaps in the afternoon.',
        price: 'Stage 2',
        priceDetail: 'Start here if drop-offs and pending quotes are the leak',
        features: [
          'Self-serve drop-off booking with optional deposit',
          'Drop-off reminder if they didn’t show',
          'Ready-to-collect notifications',
        ],
        popular: true,
      },
      {
        name: 'Build the local proof that beats the chain',
        description: 'For when your work is better than the chain but the chain has more reviews.',
        price: 'Stage 3',
        priceDetail: 'Start here if reviews and area visibility are the weak spot',
        features: [
          'Review requests after every collection',
          'Pages for the devices and brands you actually fix',
          'Less time on out-of-area enquiries',
        ],
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Real Situations',
    title: 'A few moments where the difference shows up',
    description: 'Small moments at the bench where things used to slip through.',
    workflows: [
      {
        trigger: '“How much for an iPhone 13 screen?” comes in while you’re soldering.',
        actions: [
          'Instant quote goes back with the wait time',
          'They start walking in instead of shopping around',
          'You finish the repair without losing the next job',
        ],
      },
      {
        trigger: 'Someone said “I’ll drop it in tomorrow” but never did.',
        actions: [
          'A polite reminder goes out the next day',
          'A second nudge three days later',
          'Most actually show up with the device',
        ],
      },
      {
        trigger: 'A laptop repair is finished on the bench.',
        actions: [
          'Mark it done — collection text goes out automatically',
          'They collect within a day instead of three',
          'Review request goes out the day after collection',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'repair-shops-workflow-examples',
  };

  const caseStudiesData = {
    category: 'local-appointment-businesses' as const,
    title: 'Related Case Studies',
    description:
      'Examples of how the system supports local appointment businesses in this category.',
    limit: 2,
  };

  const exploreData = {
    badge: 'Related',
    description:
      'The other parts of the system that come up most often for repair shops.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description:
          'See the core system layer that holds repair enquiry, booking flow, and follow-up together.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'Booking & Scheduling System',
        description: 'Support visits, reminders, and clearer next-step handling.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen area visibility, local credibility, and service discovery.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description: 'Turn completed jobs into stronger proof and review flow.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Things shop owners usually ask',
    description: 'Straight answers about how this fits a repair shop.',
    faqs: [
      {
        question: 'I’m at the bench all day. Will this need someone on the front desk?',
        answer:
          'No. The whole point is it runs while you’re heads-down. Standard quotes, drop-off bookings, ready-to-collect texts — all automatic. You handle the tricky quotes and the actual repairs.',
      },
      {
        question: 'How does the instant quote work for repairs?',
        answer:
          'For standard jobs — iPhone screens, common laptop screens, battery swaps — we set up a price and wait time that goes back automatically. For unusual repairs it routes to you for a manual quote. You stay in control.',
      },
      {
        question: 'Will it work alongside my repair tracking software?',
        answer:
          'Yes. It sits in front of whatever you use. The system improves the bit between the customer messaging and the device landing on the bench — the tracking stays where it is.',
      },
      {
        question: 'Can it really stop “I’ll drop it in tomorrow” devices vanishing?',
        answer:
          'Yes — a polite reminder goes out the next day, another a few days later. Most show up. The ones that don’t, you stop wasting headspace on.',
      },
      {
        question: 'How do I get more reviews without nagging?',
        answer:
          'A polite request goes out the day after collection, when the relief is freshest. People who would have meant to leave one actually do.',
      },
      {
        question: 'Do I need to scrap my current website?',
        answer:
          'Usually not. We look at what you have first. The leak is normally the bit between the enquiry and the device landing on the bench — not the site itself.',
      },
    ],
  };

  return {
    slug: 'repair-shops',
    industries: ['repair-shop'],
    systems: [
      'smart-website-systems',
      'crm-automation',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['lead-response-time', 'follow-up', 'review-generation'],
    type: 'detail',
    parentSlug: 'local-appointment-businesses',
    seo: {
      title: 'Repair Shops — Stop Losing Walk-Ins, Quote Requests & Drop-Off Bookings | MindWP',
      description:
        'For repair shops where “how much for a screen?” goes unanswered, where quotes sit in the inbox for half a day, and where promised drop-offs never show up. We put the system in place that catches the work between repairs.',
      keywords: [
        'repair shop website design',
        'repair booking workflow',
        'repair shop lead handling system',
        'repair shop seo services',
        'repair shop review system',
      ],
      canonical: '/industries/local-appointment-businesses/repair-shops',
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
      title: 'Tell us where the bench is going quiet',
      description:
        'If quote requests sit in the inbox, if drop-offs never show up, or if devices sit on the shelf waiting to be collected — walk us through how the shop runs and we’ll show you the first thing worth fixing.',
    },
  };
}

export const repairShopsIndustryPageData: IndustryPageData = buildRepairShopsIndustryPageData();
