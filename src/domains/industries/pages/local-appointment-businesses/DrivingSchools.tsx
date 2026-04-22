import {
  Calendar,
  Car,
  Clock3,
  MessageSquare,
  Search,
  ShieldCheck,
  Star,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildDrivingSchoolsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Driving Schools',
    title: 'A 17-Year-Old Texted Three Driving Schools On TikTok. Whoever Replied With A Slot Got The Block Booking.',
    description:
      'Learners don’t ring round anymore. They DM three schools at 9pm and book whoever sent a calendar link first. We put the system in place that catches the enquiries while you’re teaching, books the first lesson, and stops cancellations from costing you a tank of fuel.',
    list: [
      'Enquiries that came in while you were in a lesson',
      'First lessons that took ten messages to book',
      'Last-minute cancellations nobody could refill',
      'Reviews from passes you never asked for',
    ],
    cssPrefix: 'driving-schools-hero',
  };

  const imageStripData = {
    badge: 'How Learner Enquiries Actually Land',
    title: 'You’re mid-roundabout when the phone buzzes. They booked someone else by the next lesson.',
    description:
      'Enquiries hit at evenings, weekends, school holidays. You’re in the car teaching. Whoever replies first with a price and a slot wins the block booking.',
    items: [
      {
        title: 'Lesson and package enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing driving school enquiries',
      },
      {
        title: 'Scheduling and lesson cadence',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing driving lesson scheduling',
      },
      {
        title: 'Preparation and next-step guidance',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing driving lesson preparation guidance',
      },
      {
        title: 'Reviews and local proof',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing driving school reviews and local proof',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'driving-schools-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where The Diary Slips',
    title: 'You’re mid-lesson. The phone buzzes. By the time you reply, they’re booked with someone else.',
    description: 'Same handful of leaks across nearly every driving school. None of them are about the teaching.',
    benefits: [
      {
        icon: Car,
        title: 'Three new enquiries came in during a Saturday lesson',
        description:
          'You couldn’t check your phone with a learner doing roundabouts. By 5pm, two had booked elsewhere.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Ten DMs to book one first lesson',
        description:
          '“What days?” “Where from?” “How much?” The Gen Z learners ghost after three.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'A 4pm cancellation cost you the rest of the day',
        description:
          'Two-hour gap, half a tank of diesel, no way to fill it. Nobody had time to text the waitlist.',
        iconType: 'accent' as const,
      },
      {
        icon: Star,
        title: 'You pass learners every week. Online you have 18 reviews.',
        description:
          'Pass rates speak for themselves — but only if anyone’s asked at the right moment.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to catch enquiries while you’re teaching and refill the cancellations',
    description:
      'Each piece does one job. Together they keep the diary full while you’re in the passenger seat.',
    featureCategories: [
      {
        title: 'Reply to enquiries while you’re in a lesson',
        description:
          'DM, form, or missed call lands. An instant reply goes out with price, area covered, and a calendar link. Most stop messaging the next school.',
        icon: MessageSquare,
        features: [
          'Instant acknowledgement on every enquiry',
          'Price and area covered up front',
          'Holds the learner until you can reply properly',
        ],
      },
      {
        title: 'Book the first lesson without ten messages',
        description:
          'Learners pick a slot themselves. Block bookings paid for online. The DM tennis stops.',
        icon: Calendar,
        features: [
          'Self-serve first lesson booking',
          'Block bookings paid online',
          'Reminders the day before',
        ],
      },
      {
        title: 'Refill the cancellations before they cost you fuel',
        description:
          '4pm learner cancels at 3.30. A waitlist text goes out automatically. Most slots get refilled.',
        icon: Workflow,
        features: [
          'Cancellation waitlist text-back',
          'Reschedule link instead of a no-show',
          'Diary stays earning while you teach',
        ],
      },
      {
        title: 'Turn passes into reviews and referrals',
        description:
          'A polite review request goes out the day after the test pass, when they’re still buzzing.',
        icon: ShieldCheck,
        features: [
          'Review requests after every pass',
          'Asked at the right moment',
          'Reviews catch up to your pass rate',
        ],
      },
      {
        title: 'Show up first when local learners search',
        description:
          'Service pages and Google profile lined up so learners in the right area find you first.',
        icon: Search,
        features: [
          'Pages for the postcodes you actually want',
          'Found on Maps for local searches',
          'Less time on enquiries miles away',
        ],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'What Actually Changes',
    title: 'A normal week, before and after',
    description: 'The teaching stays. The diary stops haemorrhaging.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How it runs now',
        items: [
          'Three Saturday enquiries went unanswered until evening. Two booked elsewhere.',
          'Ten DMs to lock down one first lesson.',
          'A 4pm cancellation killed half the afternoon’s earnings.',
          '“Meant to ask for a Google review” — said about every test pass.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it runs after',
        items: [
          'Every enquiry gets an instant reply with a calendar link.',
          'First lessons booked online without DM tennis.',
          'Cancellations get refilled from a waitlist automatically.',
          'Reviews get asked for the day after every pass.',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Where Most Schools Start',
    title: 'Three stages — most schools feel one of them more than the others',
    description: 'Pick whichever costs you the most lessons right now.',
    packages: [
      {
        name: 'Stop losing the evening enquiries',
        description: 'For when learners DM at 9pm and book whoever replied first.',
        price: 'Stage 1',
        priceDetail: 'Start here if first-reply speed is the biggest leak',
        features: [
          'Instant reply with price and area covered',
          'Calendar link straight away',
          'Most learners stop messaging the next school',
        ],
      },
      {
        name: 'Refill the diary without driving for free',
        description: 'For when first lessons take ten DMs and last-minute cancellations cost you fuel.',
        price: 'Stage 2',
        priceDetail: 'Start here if booking and cancellations are the leak',
        features: [
          'Self-serve first lesson booking',
          'Block bookings paid online',
          'Cancellation waitlist text-back',
        ],
        popular: true,
      },
      {
        name: 'Build the local proof that fills the diary on its own',
        description: 'For when pass rate is great but the school looks small online.',
        price: 'Stage 3',
        priceDetail: 'Start here if reviews and area visibility are the weak spot',
        features: [
          'Review requests after every pass',
          'Pages for the postcodes you want',
          'Less time on enquiries miles away',
        ],
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Real Situations',
    title: 'A few moments where the difference shows up',
    description: 'Small moments in the week of an instructor where the diary used to leak.',
    workflows: [
      {
        trigger: 'A learner DMs on Instagram at 9pm.',
        actions: [
          'Instant reply goes out with price, area, and calendar link',
          'They book a first lesson without messaging again',
          'They stop DMing the other two schools',
        ],
      },
      {
        trigger: 'A 4pm learner cancels at 3.30.',
        actions: [
          'A waitlist text goes out automatically',
          'Someone snaps the slot up',
          'Half-day of earnings saved',
        ],
      },
      {
        trigger: 'A learner passed the test on Wednesday morning.',
        actions: [
          'A polite review request goes out Thursday',
          'They’re still buzzing — they leave a 5-star',
          'Review count quietly catches up to the pass rate',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'driving-schools-workflow-examples',
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
      'The other parts of the system that come up most often for driving schools.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description:
          'See the core system layer that holds learner enquiry, booking flow, and follow-up together.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'Booking & Scheduling System',
        description: 'Support lessons, reminders, and clearer next-step handling.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen area visibility, local credibility, and learner discovery.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description: 'Turn completed learner journeys into stronger proof and review flow.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Things instructors usually ask',
    description: 'Straight answers about how this fits a driving school.',
    faqs: [
      {
        question: 'I’m in the car teaching all day. Will this need someone in the office?',
        answer:
          'No. The whole point is it runs while you’re in lessons. You’ll see what came in on your phone between sessions, but nothing waits on you to operate it.',
      },
      {
        question: 'How does the missed-call/DM text-back work?',
        answer:
          'A learner messages while you’re mid-lesson. Within seconds they get an instant reply with price, area covered, and a calendar link. Most stop messaging the next school.',
      },
      {
        question: 'Will it work for a single instructor or only larger schools?',
        answer:
          'Both. For a single instructor it’s about catching evening enquiries and refilling cancellations. For a larger school it’s about routing enquiries to the right instructor and area.',
      },
      {
        question: 'Can it really refill last-minute cancellations?',
        answer:
          'Yes — a waitlist text goes out automatically when a slot opens. Most refill before the end of the day. Saves the fuel and the dead time.',
      },
      {
        question: 'How do I get more reviews without nagging?',
        answer:
          'A polite request goes out the day after the test pass, when learners are still buzzing. People who would have meant to leave one actually do.',
      },
      {
        question: 'Do I need to scrap my current website?',
        answer:
          'Usually not. We look at what you have first. The leak is normally the bit between the enquiry coming in and the lesson booked — not the site itself.',
      },
    ],
  };

  return {
    slug: 'driving-schools',
    industries: ['driving-school'],
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
      title: 'Driving Schools — Stop Losing Evening Enquiries, First Lessons & Last-Minute Cancellations | MindWP',
      description:
        'For driving instructors and schools where learners DM three schools and book whoever replied first, where ten DMs barely get one lesson booked, and where last-minute cancellations cost a tank of fuel. We put the system in place that keeps the diary full.',
      keywords: [
        'driving school website design',
        'driving lesson booking workflow',
        'driving school lead handling system',
        'driving school seo services',
        'driving school review system',
      ],
      canonical: '/industries/local-appointment-businesses/driving-schools',
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
      title: 'Tell us where the diary is leaking',
      description:
        'If evening enquiries go unanswered, if first lessons take ten DMs, or if cancellations cost you fuel — walk us through how the school runs and we’ll show you the first thing worth fixing.',
    },
  };
}

export const drivingSchoolsIndustryPageData: IndustryPageData =
  buildDrivingSchoolsIndustryPageData();
