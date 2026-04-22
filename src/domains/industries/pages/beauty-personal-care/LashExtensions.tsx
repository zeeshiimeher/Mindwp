import { Bell, Calendar, Clock3, MapPinned, Search, Sparkles, Star, Workflow } from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildLashExtensionsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Lash Artists',
    title: 'You’re Mid-Set. The Phone Pings. Two More Enquiries Sat Until You’re Done.',
    description:
      'Lash artists work one client at a time, eyes shut, three hours per set. Most enquiries arrive while you literally cannot reply. The ones who don’t hear back inside an hour book somebody else. We put the system in place that catches every booking even while your hands are full.',
    list: [
      'Enquiries that arrive mid-set',
      'No-shows with no deposit',
      'Patch tests explained ten times a week',
      'Infills that quietly stopped getting rebooked',
    ],
    cssPrefix: 'lash-extensions-hero',
  };

  const imageStripData = {
    badge: 'How Bookings Actually Happen',
    title: 'Most enquiries arrive when you literally cannot answer them',
    description:
      'Mid-set, eyes shut, tweezers in hand. Or it’s 10pm and you’re finally done for the day. Either way, the woman asking about classics-vs-hybrids isn’t going to wait until tomorrow morning to find out.',
    items: [
      {
        title: 'Consultation and eligibility',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing lash consultation and eligibility checks',
      },
      {
        title: 'Appointment preparation',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing appointment preparation guidance',
      },
      {
        title: 'Treatment-day timing',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing treatment-day timing and scheduling',
      },
      {
        title: 'Aftercare and rebooking',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing aftercare and rebooking for lash services',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'lash-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where The Bookings Slip',
    title: 'Working solo on someone’s eyes for three hours — the leaks are obvious once you list them',
    description:
      'It’s the bit you can’t do with tweezers in your hand. Replies. Reminders. Patch tests. Reviews.',
    benefits: [
      {
        icon: Sparkles,
        title: 'A “how much for a full set?” at 9.30pm sat unread until morning',
        description:
          'You see it after breakfast. She’s already booked the artist who replied while you were eating dinner.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'A no-show on a three-hour slot with nothing on deposit',
        description:
          'Three hours of the day, gone. A reminder the night before would have caught it.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'You’ve typed the same patch test message ten times this week',
        description:
          'Prep, aftercare, infill timing — the same explanations on repeat between sets.',
        iconType: 'accent' as const,
      },
      {
        icon: MapPinned,
        title: 'The lash bar in town has 800 reviews. You have 32.',
        description:
          'You do better work. Locally you look smaller because nobody was ever asked.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to catch enquiries, fill the diary, and stop typing the same thing twice',
    description:
      'Each piece does one job. Together they keep the day running while your hands are on someone’s eyes.',
    featureCategories: [
      {
        title: 'Reply to every DM and missed call inside a minute',
        description:
          'Late-night messages get an instant answer with prices, options, and a booking link — even when you’re mid-set.',
        icon: Sparkles,
        features: [
          'Instant replies on Instagram, Facebook, web, missed calls',
          'Pricing, classics vs hybrids vs volume answered up front',
          'Booking link in the same message',
        ],
      },
      {
        title: 'Let clients book themselves, deposit and all',
        description:
          'They pick the service, the slot, and pay a deposit at the same time. The diary stays full, no-shows drop.',
        icon: Calendar,
        features: [
          'Online booking by service',
          'Deposits taken at booking',
          'Reminders the day before',
        ],
      },
      {
        title: 'Stop typing the same prep and aftercare ten times a week',
        description:
          'Patch test info, prep instructions, aftercare — sent automatically when they need them.',
        icon: Bell,
        features: [
          'Patch test confirmation handled for you',
          'Prep guidance the day before',
          'Aftercare sent right after the appointment',
        ],
      },
      {
        title: 'Show up when local women search for lashes',
        description:
          'Service pages, photos, and Google profile lined up so you appear before the lash bar in town.',
        icon: Search,
        features: [
          'Pages for classics, hybrids, volume, lifts, infills',
          'Photos that do the selling for you',
          'Found on Maps for local searches',
        ],
      },
      {
        title: 'Turn finished sets into reviews and rebookings',
        description:
          'A review request after every set. An infill nudge at the right interval. Repeat work fills itself.',
        icon: Star,
        features: [
          'Review requests after every appointment',
          'Infill nudges at 2–3 weeks',
          'Quiet days offered out to past clients',
        ],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'What Actually Changes',
    title: 'A normal week working solo, before and after',
    description: 'The personal service stays. The bits that drain you and lose bookings get fixed.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How it runs now',
        items: [
          'A 9pm DM about classics sat unread until morning. She booked someone else.',
          'A three-hour Saturday no-show with nothing on deposit.',
          'You typed the same patch test info ten times this week.',
          '“Amazing lashes” — said by hundreds, written by 32.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it runs after',
        items: [
          'The 9pm DM gets a friendly reply with prices and a booking link inside a minute.',
          'A reminder the day before plus a deposit at booking. No-shows drop.',
          'Prep, patch test, aftercare — sent automatically. You stop typing the same thing.',
          'Every happy client gets asked. Reviews catch up to the work.',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Where Most Lash Artists Start',
    title: 'Three stages — most artists feel one of them more than the others',
    description: 'Pick whichever costs you the most bookings right now.',
    packages: [
      {
        name: 'Catch every enquiry, even mid-set',
        description:
          'For when DMs sit until evening and the booking goes to whoever replied first.',
        price: 'Stage 1',
        priceDetail: 'Start here if enquiries are leaking while you’re working',
        features: [
          'Instant replies on DMs, calls, forms',
          'Pricing, set type, slot all answered up front',
          'Booking link in the same message',
        ],
      },
      {
        name: 'Protect the diary and stop the no-shows',
        description: 'For when three-hour slots disappear with no warning.',
        price: 'Stage 2',
        priceDetail: 'Start here if no-shows are the biggest leak',
        features: [
          'Self-serve booking by service and slot',
          'Deposits taken at booking',
          'Patch test, prep, and aftercare sent automatically',
        ],
        popular: true,
      },
      {
        name: 'Bring infill clients back and turn them into proof',
        description:
          'For when the work is great but reviews and infill rebookings happen by accident.',
        price: 'Stage 3',
        priceDetail: 'Start here if reviews and retention are the weak spot',
        features: [
          'Review requests after every set',
          'Infill nudges at the right interval',
          'Quiet days offered out automatically',
        ],
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Real Situations',
    title: 'A few moments where the difference shows up',
    description: 'Small moments mid-set that used to need you to stop, wash up, and type.',
    workflows: [
      {
        trigger: 'A new client DMs at 10pm asking if classic or hybrid suits her better.',
        actions: [
          'She gets a friendly reply inside a minute with the difference and a booking link',
          'She picks a slot, deposit included',
          'By morning she’s in your diary, not someone else’s',
        ],
      },
      {
        trigger: 'A new client books a full set for next Tuesday.',
        actions: [
          'Patch test info goes out automatically with timing instructions',
          'A reminder fires the day before',
          'Aftercare lands in her inbox a couple of hours after the set',
        ],
      },
      {
        trigger: 'An infill client leaves looking incredible.',
        actions: [
          'A review request goes out a few hours later',
          'At two weeks, an infill nudge appears',
          'She rebooks without you remembering to chase',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'lash-workflow-examples',
  };

  const caseStudiesData = {
    category: 'beauty-personal-care' as const,
    title: 'Related Case Studies',
    description: 'Examples of how the system supports businesses in this category.',
    limit: 2,
  };

  const exploreData = {
    badge: 'Related',
    description:
      'The other parts of the system that come up most often for lash artists trying to keep the diary full while working solo.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description: 'See the core system layer that holds booking, trust, and follow-up together.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'Booking & Scheduling System',
        description: 'Support online booking, reminders, and clearer appointment handling.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen local visibility and treatment-page trust.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description: 'Turn client follow-up into stronger proof and review flow.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Things lash artists usually ask',
    description: 'Straight answers about how this fits a solo lash business.',
    faqs: [
      {
        question: 'I work alone with my eyes on someone’s lashes. Will this actually help?',
        answer:
          'Yes — that’s exactly the point. Every DM, missed call, and form gets an instant reply with prices, options, and a booking link, even while you’re mid-set. You stop losing work to whoever replied first.',
      },
      {
        question: 'Should I be taking deposits?',
        answer:
          'For three-hour sets, almost always yes. A small deposit at booking pays for itself in one prevented no-show. The system collects it without you doing anything.',
      },
      {
        question: 'Can it stop me typing patch test info ten times a week?',
        answer:
          'Yes. Patch test confirmation, prep instructions, and aftercare get sent automatically at the right moment. You stop being a copy-paste machine.',
      },
      {
        question: 'How do reminders cut no-shows on three-hour slots?',
        answer:
          'A friendly reminder the day before catches almost all of them. Anyone who can’t make it gets a reschedule link instead of just disappearing.',
      },
      {
        question: 'I’m mobile / I work from home. Can I still rank locally?',
        answer:
          'Yes — your Google profile gets set up as a service-area business with the areas you actually cover, and your service pages do the rest of the trust work.',
      },
      {
        question: 'Do I need a brand new website?',
        answer:
          'Usually not. We look at what you have first. The leak is normally everything that happens after someone tries to book — not the site itself.',
      },
    ],
  };

  return {
    slug: 'lash-lift-and-extensions',
    industries: ['lash-extensions'],
    systems: [
      'smart-website-systems',
      'crm-automation',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['booking-automation', 'no-show-reduction', 'review-generation'],
    type: 'detail',
    parentSlug: 'beauty-personal-care',
    relatedContent: {
      enabled: false,
    },
    seo: {
      title: 'Lash Lift & Extensions — Stop Losing Mid-Set DMs and No-Shows | MindWP',
      description:
        'For lash artists working solo, whose DMs sit until evening, whose three-hour slots get no-showed, and who type the same patch test message ten times a week. We put the system in place so the business runs while your hands are full.',
      keywords: [
        'lash extension booking system',
        'lash salon crm automation',
        'lash no show reduction',
        'lash studio review automation',
        'lash business local seo',
      ],
      canonical: '/industries/beauty-personal-care/lash-lift-and-extensions',
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
      title: 'Tell us where the day is leaking',
      description:
        'If DMs sit until evening, if no-shows are eating three-hour slots, or if reviews never get asked for — walk us through how the day actually runs and we’ll show you the first thing worth fixing.',
    },
  };
}

export const lashExtensionsIndustryPageData: IndustryPageData =
  buildLashExtensionsIndustryPageData();
