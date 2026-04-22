import {
  Calendar,
  Clock3,
  Landmark,
  MapPinned,
  MessageSquare,
  Search,
  ShieldCheck,
  Star,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildRealtorsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Estate Agents',
    title: 'A Couple Saw The Listing On Rightmove At 9pm. They Enquired With Three Agents. Whoever Booked The Saturday Viewing First Got Them.',
    description:
      'Portal enquiries land at all hours. Vendors pick the agent who answered the phone, not the cheapest fee. We put the system in place that catches Rightmove enquiries while you’re on a viewing, books the valuation without phone tag, and stops vendor leads from going quiet for six months until the For Sale sign goes up next door.',
    list: [
      'Portal enquiries that came in while you were on a viewing',
      'Valuations that took five emails to confirm a slot',
      'Vendor leads that went quiet until they instructed elsewhere',
      'Reviews from happy buyers and sellers you never asked for',
    ],
    cssPrefix: 'realtors-hero',
  };

  const imageStripData = {
    badge: 'How Property Enquiries Actually Land',
    title: 'They saw the listing at 9pm. Enquired with three agents. Whoever booked the viewing first wins.',
    description:
      'It’s portal enquiries at midnight, vendor valuations on Saturday morning, viewing requests from out-of-towners. The decision happens within hours.',
    items: [
      {
        title: 'Buyer and seller enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing realtor buyer and seller enquiries',
      },
      {
        title: 'Valuation and viewing booking',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing realtor booking and viewings',
      },
      {
        title: 'Nurture and decision follow-up',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing realtor nurture and decision follow-up',
      },
      {
        title: 'Reviews and local proof',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing realtor reviews and local proof',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'realtors-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where Deals Get Lost',
    title: 'You’re showing a flat in zone 3. The portal enquiry is going elsewhere.',
    description: 'Same handful of leaks across nearly every estate agency. None of them are about how well you actually negotiate.',
    benefits: [
      {
        icon: Landmark,
        title: 'A portal enquiry came in at 9pm Friday. You replied Monday morning.',
        description:
          'They’d already booked Saturday viewings with two other agents. You were chasing.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'A valuation took five emails to confirm a slot',
        description:
          '“What times work?” “What’s the postcode?” “Who’ll be home?” Each reply waited a few hours.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'A vendor enquired in March, sold in October. With somebody else.',
        description:
          'Six months of silence between the valuation and the For Sale sign. No nurture, no check-in.',
        iconType: 'accent' as const,
      },
      {
        icon: MapPinned,
        title: 'You’ve sold 800 properties locally. You have 38 reviews.',
        description:
          'Your patch knowledge is unbeatable. Online you look like a new branch because nobody asked for the review at the right moment.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to catch portal enquiries and stop vendor leads from going cold',
    description:
      'Each piece does one job. Together they keep viewings booked while you’re on the road.',
    featureCategories: [
      {
        title: 'Reply to Rightmove enquiries while you’re on a viewing',
        description:
          'Enquiry lands at 9pm Friday. Instant reply with a calendar link to book a Saturday viewing. Most stop enquiring with the next two agents.',
        icon: MessageSquare,
        features: [
          'Instant reply on every portal enquiry',
          'Calendar link for self-serve viewing booking',
          'Holds the buyer until you’re free',
        ],
      },
      {
        title: 'Take valuation bookings without phone tag',
        description:
          'Vendor picks a slot online. Property type, postcode, who’ll be home — captured in one step. The five-email thread stops.',
        icon: Calendar,
        features: [
          'Self-serve valuation booking',
          'Property details captured up front',
          'Reminders the day before',
        ],
      },
      {
        title: 'Nurture vendors who aren’t selling yet',
        description:
          'Vendor enquired in March. They get a useful sequence — market updates, recent local sales, fee reminders. When they’re ready in October, you’re the agent they call.',
        icon: Workflow,
        features: [
          'Nurture sequences for not-yet-selling vendors',
          'Local market updates land monthly',
          'Pipeline visible by stage',
        ],
      },
      {
        title: 'Stay top of mind with the past-client sphere',
        description:
          'A polite check-in goes out to past vendors and buyers at sensible intervals. Past clients become repeat clients and referral sources.',
        icon: ShieldCheck,
        features: [
          'Past-client check-ins automated',
          'Sphere-of-influence stays warm',
          'Referrals stop relying on memory',
        ],
      },
      {
        title: 'Turn completed sales into reviews',
        description:
          'A polite review request goes out the week after completion, when the relief is freshest.',
        icon: Star,
        features: [
          'Review requests after every completion',
          'Asked when buyers and sellers are happiest',
          'Reviews catch up to the years on your patch',
        ],
      },
      {
        title: 'Show up first when local people search',
        description:
          'Pages and Google profile lined up so people in the right area find you first — not the online-only agent.',
        icon: Search,
        features: [
          'Pages for the streets and postcodes you actually sell in',
          'Found on Maps for local agent searches',
          'Less time on enquiries from miles away',
        ],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'What Actually Changes',
    title: 'A normal week, before and after',
    description: 'The negotiating stays personal. The chasing stops.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How it runs now',
        items: [
          'Friday-night portal enquiries got Monday-morning replies. Saturday viewings booked elsewhere.',
          'Valuations took five emails to confirm a slot.',
          'Vendor enquired in March, instructed somebody else in October.',
          '“Meant to ask for a Google review” — said about every completion.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it runs after',
        items: [
          'Every portal enquiry gets an instant reply with a viewing calendar link.',
          'Valuations booked online with property details captured up front.',
          'Not-yet-selling vendors nurtured automatically until they are.',
          'Reviews get asked for the week after every completion.',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Where Most Agents Start',
    title: 'Three stages — most agencies feel one of them more than the others',
    description: 'Pick whichever costs you the most listings right now.',
    packages: [
      {
        name: 'Stop losing the portal enquiries',
        description: 'For when Rightmove and Zoopla enquiries hit the inbox while you’re on a viewing.',
        price: 'Stage 1',
        priceDetail: 'Start here if first-reply speed is the biggest leak',
        features: [
          'Instant reply on every portal enquiry',
          'Calendar link for self-serve viewing booking',
          'Most stop enquiring with the next agent',
        ],
      },
      {
        name: 'Take valuations and viewings without phone tag',
        description: 'For when bookings take a week of email tennis.',
        price: 'Stage 2',
        priceDetail: 'Start here if booking coordination is the leak',
        features: [
          'Self-serve valuation and viewing booking',
          'Property details captured up front',
          'Reminders the day before',
        ],
        popular: true,
      },
      {
        name: 'Nurture vendors and capture local proof',
        description: 'For when vendor leads go quiet for six months and reviews don’t reflect your years on the patch.',
        price: 'Stage 3',
        priceDetail: 'Start here if vendor nurture and reviews are the weak spot',
        features: [
          'Nurture sequences for not-yet-selling vendors',
          'Past-client check-ins automated',
          'Pages for the streets and postcodes you actually sell in',
        ],
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Real Situations',
    title: 'A few moments where the difference shows up',
    description: 'Small moments in the week of an estate agent where deals used to slip through.',
    workflows: [
      {
        trigger: 'A Rightmove enquiry comes in at 9pm Friday for a Saturday viewing.',
        actions: [
          'Instant reply goes out with a viewing calendar link',
          'They book the 11am Saturday slot before bed',
          'They stop enquiring with the next two agents',
        ],
      },
      {
        trigger: 'A vendor requests a valuation but isn’t selling for six months.',
        actions: [
          'They’re placed on a useful nurture sequence',
          'Local market updates and recent sales land monthly',
          'When they’re ready, they instruct you',
        ],
      },
      {
        trigger: 'A completion happens on Friday.',
        actions: [
          'A polite review request goes out the following Tuesday',
          'Past-client follow-up sequence kicks in for referrals',
          'Reviews and the sphere stay warm without manual chasing',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'realtors-workflow-examples',
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
      'The other parts of the system that come up most often for estate agents.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description:
          'See the core system layer that holds property enquiry, appointment flow, and follow-up together.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'Booking & Scheduling System',
        description: 'Support viewings, valuations, reminders, and clearer next-step handling.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen area visibility, local credibility, and property discovery.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description:
          'Turn completed service and successful relationships into stronger proof and review flow.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Things estate agents usually ask',
    description: 'Straight answers about how this fits an agency.',
    faqs: [
      {
        question: 'My team is on viewings all day. Will this need someone in the office?',
        answer:
          'No. The whole point is it runs while the team is on the road. Portal enquiry replies, viewing bookings, valuation confirmations, vendor nurture — all automatic. The team handles the actual viewings and negotiations.',
      },
      {
        question: 'Will it work alongside my CRM (Reapit, Alto, Jupix, etc)?',
        answer:
          'Yes. Whatever you use stays. The system improves the bit between the portal enquiry and the lead sitting in your CRM ready to be worked on.',
      },
      {
        question: 'How does the after-hours portal enquiry handling work?',
        answer:
          'A buyer enquires on Rightmove at 9pm Friday. Within seconds they get a reply with a calendar link to book the Saturday viewing. Most book before bed and stop enquiring with the next two agents.',
      },
      {
        question: 'Can it really nurture vendors who aren’t ready to sell?',
        answer:
          'Yes. Vendor enquired in March, not selling for six months? They get a useful monthly sequence — market updates, recent local sales, fee reminders. When they’re ready in October, you’re the agent they call.',
      },
      {
        question: 'How do I get more reviews without nagging?',
        answer:
          'A polite request goes out the week after completion, when the relief is freshest. People who would have meant to leave one actually do.',
      },
      {
        question: 'Do I need to scrap my current website?',
        answer:
          'Usually not. We look at what you have first. The leak is normally the bit between the portal enquiry and the viewing landing in the diary — not the site itself.',
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
      title: 'Estate Agents — Stop Losing Portal Enquiries, Valuations & Vendor Nurture | MindWP',
      description:
        'For estate agents where Friday-night Rightmove enquiries get Monday-morning replies, where valuations take five emails to book, and where vendor leads go quiet for six months before instructing elsewhere. We put the system in place that catches them.',
      keywords: [
        'realtor website design',
        'real estate lead handling system',
        'real estate booking system',
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
      title: 'Tell us where the listings are leaking',
      description:
        'If portal enquiries get Monday-morning replies, if valuations take five emails to confirm, or if vendor leads go quiet for six months — walk us through how the agency runs and we’ll show you the first thing worth fixing.',
    },
  };
}

export const realtorsIndustryPageData: IndustryPageData = buildRealtorsIndustryPageData();
