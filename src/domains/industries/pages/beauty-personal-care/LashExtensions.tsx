import {
  Calendar,
  CalendarClock,
  Compass,
  Eye,
  Moon,
  Star,
  Wrench,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildLashExtensionsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Lash Artists',
    title: 'Hands Were Glued To A Set For Two Hours. The Phone Lit Up Eleven Times. Three Were Bookings.',
    description:
      'Lash work is the most hands-busy job in beauty. A full set is two hours of complete focus. The phone goes, the DMs back up, and there is no front desk to catch any of it. Most lash artists lose more bookings to the inbox sitting overnight than to anything that happens at the chair.',
    list: ['Hands-busy DMs', 'Late infills', 'Lapsed regulars'],
    cssPrefix: 'lash-extensions-hero',
  };

  const workflowExamplesData = {
    badge: 'Real Lash Moments',
    title: 'Three moments that decide the week',
    description:
      'These are the moments at the top of the page. This is what happens to them after.',
    workflows: [
      {
        trigger: 'Mid-set, hands glued, three DMs land in twenty minutes',
        actions: [
          'Each DM gets a warm reply within a minute with availability and a deposit link',
          'The replies land in one queue the artist can scan between sets',
          'Two of the three lock a slot before lunch',
        ],
      },
      {
        trigger: 'A regular\u2019s last infill was three weeks ago and she has not rebooked',
        actions: [
          'A short, friendly nudge fires at the right interval for her cycle',
          'She rebooks an infill before the gaps grow out and a full set is needed',
          'The diary stays full of infills instead of last-minute panics',
        ],
      },
      {
        trigger: 'A 9pm DM asking for a set on Saturday',
        actions: [
          'A warm reply goes out within a minute with the next two Saturday slots and a deposit link',
          'She locks one before bed instead of asking two more lash artists',
          'Saturday fills with the right client at the right price',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'lash-extensions-workflow-examples',
  };

  const operatingPatternsData = {
    badge: 'Where Lash Artists Bleed',
    title: 'Four moments most solo lash artists know by heart',
    description:
      'A handful of patterns show up in nearly every lash business.',
    benefits: [
      {
        icon: Eye,
        title: 'Hands glued mid-set, eleven phone events nobody could catch',
        description:
          'Two hours of focus on a client. The inbox piles up. By the time the set is done, the easy bookings have asked someone else.',
        iconType: 'primary' as const,
      },
      {
        icon: CalendarClock,
        title: 'A regular missed the infill window',
        description:
          'Three weeks turned into five. The retention dropped past the point where infill is enough. She booked a full set with someone else.',
        iconType: 'secondary' as const,
      },
      {
        icon: Moon,
        title: 'Late-night DMs about Saturday sets',
        description:
          'Decided after 9pm. Seen at 8 the next morning. By then she had already asked two more lash artists.',
        iconType: 'accent' as const,
      },
      {
        icon: Star,
        title: 'A wall of beautiful sets, almost no proof on Maps',
        description:
          'The Instagram is full of finished work. The Maps page looks like nobody recommends you.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const pathwaysData = {
    badge: 'Where Most Lash Artists Start',
    title: 'You do not have to fix everything at once',
    description:
      'Most lash artists feel one of these three louder than the others. Pick the loudest leak.',
    packages: [
      {
        name: 'Catch DMs while your hands are full',
        description:
          'For when most bookings come through DMs and the inbox sits while you are mid-set.',
        price: 'Stage 1',
        priceDetail: 'Start here if hands-busy DMs are the loudest leak',
        features: [
          'Warm reply within a minute on every DM and missed call',
          'Availability and deposit link in the same message',
          'One queue you can scan between sets',
        ],
      },
      {
        name: 'Stop infills slipping into full sets',
        description:
          'For when regulars miss the infill window and end up needing a full set somewhere else.',
        price: 'Stage 2',
        priceDetail: 'Start here if infill retention is the gap',
        features: [
          'Infill nudges at the right interval per client',
          'Lapsed regulars warmed up before they go cold',
          'A diary that stays full of infills',
        ],
        popular: true,
      },
      {
        name: 'Get the proof on Maps',
        description:
          'For when the work is gorgeous but the Maps page does not show it.',
        price: 'Stage 3',
        priceDetail: 'Start here if local proof is the gap',
        features: [
          'Review ask the day after a finished set',
          'Reviews that land on Maps and search',
          'Local visibility that finally matches the work',
        ],
      },
    ],
  };

  const exploreData = {
    badge: 'Related',
    description: 'The other parts of the system lash artists tend to lean on most.',
    cards: [
      {
        icon: Wrench,
        title: 'Smart Website Systems',
        description: 'Holds DM, deposit and infill flow together while your hands are full.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'Booking & Infill Reminders',
        description: 'Deposits, reminders and infill nudges at the right interval.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Compass,
        title: 'Local Authority & SEO',
        description: 'Visibility for "lash extensions near me" the moment somebody searches.',
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
    title: 'What lash artists tend to ask first',
    description: 'Direct, no hedging.',
    faqs: [
      {
        question: 'Will the auto-reply sound like a bot?',
        answer:
          'No. The reply reads like the artist, gives availability, and offers a deposit link. The client locks the slot before asking somebody else.',
      },
      {
        question: 'How do the infill nudges know the right interval per client?',
        answer:
          'They follow the cycle she actually books. Every client has a slightly different infill window and the nudge fires accordingly.',
      },
      {
        question: 'Will it interrupt me mid-set?',
        answer:
          'No. It runs in the background. You only see the booking once it is locked.',
      },
      {
        question: 'Can it actually reply at 10pm without sounding off?',
        answer:
          'Yes. The reply reads like the artist, gives the next two Saturday slots, and offers a deposit link. The client books before bed instead of asking two more lash artists.',
      },
      {
        question: 'When does the review request go out?',
        answer:
          'The day after a finished set, while she is still pleased. That is the moment with the highest yield.',
      },
      {
        question: 'Do I need a brand new website?',
        answer:
          'Usually not. The bottleneck is what happens after the form is sent.',
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
    topics: ['booking-systems', 'client-reactivation', 'review-generation'],
    type: 'detail',
    parentSlug: 'beauty-personal-care',
    seo: {
      title: 'Lash Artists \u2014 Catch The DM While Your Hands Are Full | MindWP',
      description:
        'For solo lash artists whose phone lights up mid-set and whose infill regulars slip into needing a full set somewhere else. DM capture, infill nudges, reviews on Maps.',
      keywords: [
        'lash extension booking automation',
        'lash artist DM reply',
        'lash infill reminder',
        'lash artist client retention',
        'lash review automation',
      ],
      canonical: '/industries/beauty-personal-care/lash-lift-and-extensions',
    },
    hero: { ...heroData },
    workflowExamples: workflowExamplesData,
    operatingPatterns: operatingPatternsData,
    pathways: pathwaysData,
    explore: exploreData,
    faq: faqData,
    cta: {
      title: 'Tell us about the DMs you missed mid-set',
      description:
        'Walk us through the last set where the phone went mad and the last regular who slipped past her infill window. We will tell you what to plug first.',
    },
  };
}


export const lashExtensionsIndustryPageData: IndustryPageData =
  buildLashExtensionsIndustryPageData();
