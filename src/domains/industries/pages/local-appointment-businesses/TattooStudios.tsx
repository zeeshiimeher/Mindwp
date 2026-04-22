import {
  Calendar,
  Clock3,
  MessageSquare,
  PenTool,
  Search,
  ShieldCheck,
  Star,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildTattooStudiosIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Tattoo Studios',
    title: 'A £400 Sleeve DM Came In At 11pm. By Morning, Three Other Studios Had Already Replied.',
    description:
      'Tattoo decisions happen on Instagram at midnight. People DM three studios with reference images and book whoever replied first with a price and a date. We put the system in place that catches the DMs while you’re tattooing, takes the deposit so the chair doesn’t sit empty, and stops Sunday no-shows from killing the day rate.',
    list: [
      'DMs that came in while you were tattooing',
      'Quote conversations that took 20 messages',
      'Deposits that never quite got paid',
      'Reviews from finished pieces you never asked for',
    ],
    cssPrefix: 'tattoo-studios-hero',
  };

  const imageStripData = {
    badge: 'How Tattoo Enquiries Actually Land',
    title: 'Reference image lands at 11pm. They DM’d three studios. Whoever replied first wins.',
    description:
      'Instagram DMs at evenings and weekends. Reference photos. “How much for this on the forearm?” The decision happens in 24 hours.',
    items: [
      {
        title: 'Style and fit enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing tattoo consultation enquiries',
      },
      {
        title: 'Consultation and booking timing',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing tattoo booking timing',
      },
      {
        title: 'Preparation and next-step guidance',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing tattoo preparation guidance',
      },
      {
        title: 'Reviews and credibility proof',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing tattoo reviews and credibility',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'tattoo-studios-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where The Chair Sits Empty',
    title: 'You’re mid-piece. The DMs pile up. By the time you reply, they’re booked elsewhere.',
    description: 'Same handful of leaks across nearly every tattoo studio. None of them are about the artwork.',
    benefits: [
      {
        icon: PenTool,
        title: 'Six DMs piled up while you tattooed a back piece',
        description:
          'You couldn’t answer mid-shading. Three booked with the studio across town by Sunday.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'A sleeve quote took 20 messages back and forth',
        description:
          '“How much?” “How many sessions?” “What date?” The client lost patience around message twelve.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'A Saturday client no-showed. £400 day gone.',
        description:
          'No deposit taken. The chair sat empty. The artist sat scrolling.',
        iconType: 'accent' as const,
      },
      {
        icon: Star,
        title: 'You do incredible work. The studio down the road has 300 reviews. You have 32.',
        description:
          'Your portfolio is better. Online you look smaller because nobody asked at the right moment.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to catch the DMs and make sure the chair doesn’t sit empty',
    description:
      'Each piece does one job. Together they keep the diary booked and the deposit in the bank.',
    featureCategories: [
      {
        title: 'Reply to DMs while you’re tattooing',
        description:
          'DM lands at 11pm. Instant reply asks for reference, size, placement — then sends a price band and a calendar link. Most stop messaging the next studio.',
        icon: MessageSquare,
        features: [
          'Instant reply on every DM and form',
          'Price band sent up front',
          'Holds the client until you can quote properly',
        ],
      },
      {
        title: 'Take the deposit when they book',
        description:
          'Calendar link goes out with a deposit-to-confirm built in. No deposit, no booking. The chair stops sitting empty.',
        icon: Calendar,
        features: [
          'Self-serve booking with deposit-to-confirm',
          'Reminders the day before',
          'No-shows drop sharply',
        ],
      },
      {
        title: 'Convert the people sitting in the maybe pile',
        description:
          'Quote went out two weeks ago, no reply? Polite check-in goes out automatically. A meaningful share book back in.',
        icon: Workflow,
        features: [
          'Follow-up at sensible intervals',
          'Pending quotes visible in one place',
          'Conversion goes up without anybody chasing',
        ],
      },
      {
        title: 'Send aftercare without typing it out',
        description:
          'Aftercare instructions go out automatically the night of the session. Less re-explaining, fewer touch-up requests.',
        icon: ShieldCheck,
        features: [
          'Aftercare sent automatically',
          'Pre-session preparation included',
          'Less time on repetitive admin',
        ],
      },
      {
        title: 'Turn finished pieces into reviews and referrals',
        description:
          'A polite review request goes out a week after healing, when the piece looks its best.',
        icon: Star,
        features: [
          'Review requests timed for healed work',
          'Asked when clients are happiest',
          'Reviews catch up to the portfolio',
        ],
      },
      {
        title: 'Show up first when local people search for an artist',
        description:
          'Service pages and Google profile lined up so people in the right area find you first.',
        icon: Search,
        features: [
          'Pages for the styles you actually do',
          'Found on Maps for local searches',
          'Less time on enquiries that aren’t a fit',
        ],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'What Actually Changes',
    title: 'A normal week, before and after',
    description: 'The artwork stays. The chair stops sitting empty.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How it runs now',
        items: [
          'Six DMs piled up while you tattooed. Three booked elsewhere.',
          'Sleeve quotes took 20 messages and the client lost patience.',
          'Saturday client no-showed. £400 day gone, no deposit taken.',
          '“Meant to ask for a Google review” — said about every back piece.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it runs after',
        items: [
          'Every DM gets an instant reply with a price band and a calendar link.',
          'Bookings come with a deposit. No-shows drop sharply.',
          'Pending quotes followed up at sensible intervals.',
          'Reviews get asked for once the piece has healed.',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Where Most Studios Start',
    title: 'Three stages — most studios feel one of them more than the others',
    description: 'Pick whichever costs you the most chair time right now.',
    packages: [
      {
        name: 'Stop losing the late-night DMs',
        description: 'For when DMs pile up while you tattoo and clients book the studio across town.',
        price: 'Stage 1',
        priceDetail: 'Start here if first-reply speed is the biggest leak',
        features: [
          'Instant reply on every DM and form',
          'Price band and calendar link up front',
          'Most stop messaging the next studio',
        ],
      },
      {
        name: 'Stop the no-shows from killing the day rate',
        description: 'For when Saturday no-shows cost £400 because no deposit was taken.',
        price: 'Stage 2',
        priceDetail: 'Start here if no-shows and deposits are the leak',
        features: [
          'Self-serve booking with deposit-to-confirm',
          'Aftercare sent automatically',
          'Reminders the day before',
        ],
        popular: true,
      },
      {
        name: 'Build the local proof and convert the maybes',
        description: 'For when your portfolio is incredible but the studio looks small online.',
        price: 'Stage 3',
        priceDetail: 'Start here if reviews and pending quotes are the weak spot',
        features: [
          'Follow-up sequences for pending quotes',
          'Review requests timed for healed work',
          'Pages for the styles you actually do',
        ],
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Real Situations',
    title: 'A few moments where the difference shows up',
    description: 'Small moments in the studio where things used to slip through.',
    workflows: [
      {
        trigger: 'A DM with a reference image lands at 11pm.',
        actions: [
          'Instant reply asks for size, placement, timing',
          'Price band and calendar link sent automatically',
          'They stop DMing the next studio',
        ],
      },
      {
        trigger: 'A client books a Saturday session.',
        actions: [
          'Deposit-to-confirm built into the booking',
          'Reminder sent the day before',
          'No-shows drop sharply',
        ],
      },
      {
        trigger: 'A back piece is finished and healing.',
        actions: [
          'Aftercare goes out the night of the session',
          'Review request goes out a week later when it looks its best',
          'Review count quietly catches up to the portfolio',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'tattoo-studios-workflow-examples',
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
      'The other parts of the system that come up most often for tattoo studios.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description:
          'See the core system layer that holds tattoo enquiry, booking flow, and follow-up together.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'Booking & Scheduling System',
        description: 'Support consultations, reminders, and clearer next-step handling.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen area visibility, local credibility, and artist-led discovery.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description: 'Turn completed sessions into stronger proof and review flow.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Things studio owners usually ask',
    description: 'Straight answers about how this fits a tattoo studio.',
    faqs: [
      {
        question: 'I’m tattooing all day. Will this need someone on the front desk?',
        answer:
          'No. The whole point is it runs while you’re tattooing. Instant DM replies, deposit-to-book, aftercare, review requests — all automatic. You handle the actual artwork.',
      },
      {
        question: 'How does the deposit-to-book actually work?',
        answer:
          'When a client books a session, the calendar link includes a deposit payment. No deposit, no confirmed slot. The chair stops sitting empty on Saturdays.',
      },
      {
        question: 'Will it work alongside my booking software (Setmore, Square, etc)?',
        answer:
          'Yes. It sits in front of whatever you use. The system improves the bit between the DM coming in and the deposit landing in the bank.',
      },
      {
        question: 'Can it really stop the late-night DMs from going to other studios?',
        answer:
          'Yes — an instant reply with a price band and a calendar link goes out the moment a DM lands. Most clients stop messaging the next studio.',
      },
      {
        question: 'How do I get more reviews without nagging?',
        answer:
          'A polite request goes out a week after the session, when the piece is healing nicely. People who would have meant to leave one actually do.',
      },
      {
        question: 'Do I need to scrap my current website?',
        answer:
          'Usually not. We look at what you have first. The leak is normally the bit between the DM and the deposit in the bank — not the site itself.',
      },
    ],
  };

  return {
    slug: 'tattoo-studios',
    industries: ['tattoo-studio'],
    systems: [
      'smart-website-systems',
      'crm-automation',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['booking-systems', 'follow-up', 'review-generation'],
    type: 'detail',
    parentSlug: 'local-appointment-businesses',
    seo: {
      title: 'Tattoo Studios — Stop Losing Late-Night DMs, Deposits & Saturday Slots | MindWP',
      description:
        'For tattoo studios where DMs pile up while you tattoo, where Saturday no-shows cost £400 because no deposit was taken, and where the studio across town has 10x the reviews. We put the system in place that catches them.',
      keywords: [
        'tattoo studio website design',
        'tattoo consultation booking workflow',
        'tattoo lead handling system',
        'tattoo studio seo services',
        'tattoo review system',
      ],
      canonical: '/industries/local-appointment-businesses/tattoo-studios',
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
      title: 'Tell us where the chair is sitting empty',
      description:
        'If late-night DMs go unanswered, if Saturday no-shows kill the day rate, or if pending quotes never close — walk us through how the studio runs and we’ll show you the first thing worth fixing.',
    },
  };
}

export const tattooStudiosIndustryPageData: IndustryPageData = buildTattooStudiosIndustryPageData();
