import {
  Calendar,
  Compass,
  DoorOpen,
  Footprints,
  Smartphone,
  Star,
  Wrench,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildNailSalonsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Nail Salons',
    title: 'Saturday Lunchtime. Three Walk-Ins At The Door And Two Phones Going.',
    description:
      'Nail salons live in a constant tension between the walk-in at the door and the appointment in the chair. Saturday lunchtime, the front desk has three walk-ins, two phones going, and a regular due in seven minutes. Whoever the front desk had to put on hold or turn away came back to find someone else replied first.',
    list: ['Walk-in chaos', 'Held-on calls', 'Lost regulars'],
    cssPrefix: 'nail-salons-hero',
  };

  const comparisonData = {
    badge: 'What Actually Changes',
    title: 'A normal Saturday, before and after',
    description:
      'The chair work stays the same. The front desk stops being the bottleneck.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How Saturday runs now',
        items: [
          'Three walk-ins at the door, two phones going, regulars due any minute',
          'Calls go on hold and customers hang up',
          'A late-night DM from Friday is still unread',
          'A regular who used to come every two weeks has not booked in six',
        ],
      },
      {
        type: 'after' as const,
        title: 'How Saturday runs after',
        items: [
          'Walk-ins get attention because the phone is no longer hijacking the front desk',
          'Missed calls get a warm text-back within a minute and lock a slot',
          'Friday\u2019s late DM was answered by 9pm with a deposit link',
          'A nudge fires when a regular drifts past her usual cycle',
        ],
      },
    ],
  };

  const operatingPatternsData = {
    badge: 'Where The Saturday Bleeds',
    title: 'Four moments most nail salons know by heart',
    description:
      'A handful of patterns show up in nearly every nail bar.',
    benefits: [
      {
        icon: Footprints,
        title: 'Three walk-ins at the door, two phones going',
        description:
          'The front desk has to triage in the gap between the door and the diary. The walk-ins win, the phones lose.',
        iconType: 'primary' as const,
      },
      {
        icon: DoorOpen,
        title: 'A walk-in turned away because nothing was free',
        description:
          'No waitlist, no follow-up. She walked next door instead and never came back.',
        iconType: 'secondary' as const,
      },
      {
        icon: Smartphone,
        title: 'A late-night DM about Saturday',
        description:
          'Decided after 10pm, seen at 9 the next morning. By then she had asked two more salons.',
        iconType: 'accent' as const,
      },
      {
        icon: Star,
        title: 'A wall of beautiful nails, almost no proof on Maps',
        description:
          'The Instagram is gorgeous. The Maps page looks like nobody recommends you.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const pathwaysData = {
    badge: 'Where Most Nail Salons Start',
    title: 'You do not have to fix everything at once',
    description:
      'Most nail salons feel one of these three louder than the others. Pick the loudest leak.',
    packages: [
      {
        name: 'Stop the front desk being the bottleneck',
        description:
          'For when Saturday lunchtime is three walk-ins and two phones at once.',
        price: 'Stage 1',
        priceDetail: 'Start here if Saturday chaos is the loudest leak',
        features: [
          'Warm text-back within a minute on every missed call',
          'DMs answered with availability and a deposit link',
          'Front desk free to look after the door',
        ],
      },
      {
        name: 'Catch the walk-in you had to turn away',
        description:
          'For when somebody walked in, nothing was free, and she walked next door instead.',
        price: 'Stage 2',
        priceDetail: 'Start here if turned-away walk-ins are the gap',
        features: [
          'Waitlist on a tap',
          'Cancellations re-offered automatically',
          'Walk-ins booked in for later in the day instead of lost',
        ],
        popular: true,
      },
      {
        name: 'Stop regulars drifting and get the proof on Maps',
        description:
          'For when regulars quietly stop coming and reviews never reflect the work.',
        price: 'Stage 3',
        priceDetail: 'Start here if retention and proof are the gap',
        features: [
          'Rebook nudges at the right interval per service',
          'Review ask the day after a finished set',
          'Local visibility that finally matches the work',
        ],
      },
    ],
  };

  const exploreData = {
    badge: 'Related',
    description: 'The other parts of the system nail salons tend to lean on most.',
    cards: [
      {
        icon: Wrench,
        title: 'Smart Website Systems',
        description: 'Holds enquiry, deposit and waitlist flow together through Saturday.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'Booking & Waitlist',
        description: 'Deposits, reminders and the waitlist on a tap.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Compass,
        title: 'Local Authority & SEO',
        description: 'Visibility for "nails near me" the moment somebody searches.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Reviews',
        description: 'Turns finished sets into proof on Maps and search.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'What nail salon owners tend to ask first',
    description: 'Direct, no hedging.',
    faqs: [
      {
        question: 'Will the auto text-back annoy a walk-in customer ringing for an appointment?',
        answer:
          'No. The text reads like the front desk and gives availability up front. Most customers prefer it to being on hold.',
      },
      {
        question: 'How does the waitlist work for a turned-away walk-in?',
        answer:
          'She gets a quick offer for later in the day or tomorrow with a deposit link. A lot of turned-away walk-ins come back the same week instead of going next door.',
      },
      {
        question: 'Will it interrupt the techs at the chair?',
        answer:
          'No. It runs in the background. The team only sees the booking once it is locked.',
      },
      {
        question: 'Can it actually reply at 11pm without sounding off?',
        answer:
          'Yes. The reply reads like the salon, gives availability, and offers a deposit link.',
      },
      {
        question: 'When does the review request go out?',
        answer:
          'The day after a finished set, while she is still pleased. That is the moment with the highest yield.',
      },
      {
        question: 'Do we need a brand new website?',
        answer:
          'Usually not. The bottleneck is what happens after the form is sent.',
      },
    ],
  };

  return {
    slug: 'nail-salons',
    industries: ['nail-salon'],
    systems: [
      'smart-website-systems',
      'crm-automation',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['booking-systems', 'client-reactivation', 'review-generation'],
    type: 'detail',
    parentSlug: 'beauty-personal-care',
    seo: {
      title: 'Nail Salons \u2014 Stop The Saturday Front-Desk Bottleneck | MindWP',
      description:
        'For nail salons whose Saturday lunchtime has three walk-ins and two phones at once. Text-back capture, walk-in waitlist, rebook nudges, reviews on Maps.',
      keywords: [
        'nail salon booking automation',
        'nail salon walk-in waitlist',
        'nail salon front desk system',
        'nail salon client retention',
        'nail salon review automation',
      ],
      canonical: '/industries/beauty-personal-care/nail-salons',
    },
    hero: { ...heroData },
    comparison: comparisonData,
    operatingPatterns: operatingPatternsData,
    pathways: pathwaysData,
    explore: exploreData,
    faq: faqData,
    cta: {
      title: 'Tell us about last Saturday lunchtime',
      description:
        'Walk us through last Saturday \u2014 how many walk-ins were turned away, how many calls went to hold. We will tell you what to plug first.',
    },
  };
}


export const nailSalonsIndustryPageData: IndustryPageData =
  buildNailSalonsIndustryPageData();
