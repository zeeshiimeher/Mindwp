import {
  AlarmClock,
  BatteryCharging,
  Bell,
  CircuitBoard,
  Compass,
  Flame,
  Inbox,
  ListChecks,
  PhoneOff,
  Star,
  Wrench,
  ZapOff,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildElectricalCompaniesIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Electrical Firms',
    title: 'Sunday 9pm. The Board Kept Tripping. Three Sparkies Got The Call.',
    description:
      'The baby was asleep upstairs. Half the house was dark. The homeowner was not waiting around — they had Google open and were dialling down a list. Whoever answered got the fault, then the consumer unit upgrade two weeks later, then the EV charger after that. The other two never knew the call happened.',
    list: ['Tripping boards', 'Burning smells', 'Quiet EV quotes'],
    cssPrefix: 'electrical-companies-hero',
  };

  const operatingPatternsData = {
    badge: 'Where The Work Walks Out',
    title: 'Where electrical firms quietly lose the next job',
    description:
      'Two truths about electrical work. People do not wait when the power is wrong. And the bigger the quote, the longer the silence before someone else gets it.',
    benefits: [
      {
        icon: ZapOff,
        title: 'A board trips on a Sunday and the call rings out',
        description:
          'You are at dinner. The voicemail says "half the house has gone". By the time you see it Monday, an emergency call-out has already happened and the customer remembers a different name.',
        iconType: 'primary' as const,
      },
      {
        icon: Flame,
        title: 'A burning smell at midnight goes to nobody',
        description:
          'They tried the office line. Then they tried two others. One picked up. That one is now also booked for the rewire conversation that came up on the visit.',
        iconType: 'primary' as const,
      },
      {
        icon: BatteryCharging,
        title: 'EV charger quote sits in someone\u2019s inbox for a fortnight',
        description:
          'Survey done. Quote sent. Nobody nudged. The customer is not annoyed — they just assumed you were full and went with the firm that emailed twice.',
        iconType: 'secondary' as const,
      },
      {
        icon: CircuitBoard,
        title: 'A consumer unit job goes cold without anyone noticing',
        description:
          'No board. No reminder. No second look. The quote disappears into the same drawer as last month\u2019s open ones, and nobody finds out until a customer says "we got someone else".',
        iconType: 'accent' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Goes In',
    title: 'Five pieces sized for fault calls and big-ticket quotes',
    description:
      'Two halves of the same business. Catch the fault before the next number is dialled. Stop the quote disappearing before someone remembers it.',
    featureCategories: [
      {
        title: 'Hold the fault call before the next number gets dialled',
        description:
          'Every missed call fires a short text in under a minute. It captures the address and what is happening at the board. The customer stops scrolling.',
        icon: PhoneOff,
        features: [
          'Text-back inside 60 seconds',
          'Address and symptom captured up front',
          'Customer knows you have seen it',
        ],
      },
      {
        title: 'Faults sit at the top of the queue, not in date order',
        description:
          '"Burning smell" and "no power" surface above a routine fitting job. Nobody has to read three voicemails to triage.',
        icon: AlarmClock,
        features: [
          'Urgency tag the moment it lands',
          'Faults read first, calmly',
          'Routine bookings still flow through',
        ],
      },
      {
        title: 'Big-ticket quotes get a real follow-up, not silence',
        description:
          'EV chargers, consumer units and rewires get a polite check-in a few days later. Open quotes sit on a board the office can scan in ten seconds.',
        icon: ListChecks,
        features: [
          'Auto chase that reads like a person',
          'Open quote board the office can see',
          'Quotes warmed up before they go cold',
        ],
      },
      {
        title: 'EV and rewire enquiries arrive with the right details',
        description:
          'Instead of "can someone ring me back about a charger?" the enquiry already has the car, the parking, the fuse board age. The first reply is useful, not a back-and-forth.',
        icon: Bell,
        features: [
          'Tailored intake for EV, CU and rewires',
          'No three-message warm-up before a survey',
          'A quote out the same day, not next week',
        ],
      },
      {
        title: 'A short ask after commissioning so reviews actually land',
        description:
          'Day after the new board is in and the lights are on, a friendly request goes out. They actually leave one because they were just asked at the right moment.',
        icon: Star,
        features: [
          'Review ask the day after commissioning',
          'Reviews on the page that gets the next click',
          'Reputation that finally matches the workload',
        ],
      },
    ],
    columns: 3 as const,
  };

  const workflowExamplesData = {
    badge: 'Three Real Moments',
    title: 'Three moments that decided last month, and what changes',
    description:
      'These are the moments at the top of the page. This is what happens to them after.',
    workflows: [
      {
        trigger: 'Sunday 9pm \u2014 board keeps tripping, missed call to the office',
        actions: [
          'A short text fires inside a minute capturing the address and the symptom',
          'The enquiry sits at the top of the queue tagged "fault"',
          'By Monday morning the dispatcher already has it slotted in',
        ],
      },
      {
        trigger: 'EV charger quote sent Friday, no reply by Tuesday',
        actions: [
          'A friendly check-in fires Tuesday morning',
          'The quote sits on a board with everything else still open',
          'Big-ticket installs stop dying over weekends',
        ],
      },
      {
        trigger: 'A consumer unit upgrade is signed off and commissioned',
        actions: [
          'A short ask lands the next day while the lights still feel new',
          'The customer leaves a review because they were asked at the right moment',
          'The Maps profile starts to look like the actual workload',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'electrical-companies-workflow-examples',
  };

  const pathwaysData = {
    badge: 'Where Most Sparkies Start',
    title: 'You do not have to fix everything at once',
    description:
      'Most electrical firms feel one of these louder than the others. Pick the loudest leak.',
    packages: [
      {
        name: 'Catch the fault calls',
        description:
          'For when Sunday-night and after-six calls go to voicemail and a different sparkie picks up.',
        price: 'Stage 1',
        priceDetail: 'Start here if missed fault calls are the loudest leak',
        features: [
          'Text-back inside a minute on every missed call',
          'One queue across calls, forms and texts',
          'Urgency tag so faults sit at the top',
        ],
      },
      {
        name: 'Stop big-ticket quotes drifting',
        description:
          'For when small jobs land fine but EV, CU and rewire quotes fall silent for a fortnight.',
        price: 'Stage 2',
        priceDetail: 'Start here if big-ticket follow-up is the gap',
        features: [
          'Auto chase on every install quote',
          'Open quote board for the office',
          'Old quotes warmed up before they go cold',
        ],
        popular: true,
      },
      {
        name: 'Tighten intake and reputation',
        description:
          'For when rewire enquiries arrive half-formed and the review count does not match the work.',
        price: 'Stage 3',
        priceDetail: 'Start here if intake and reviews are the gap',
        features: [
          'Tailored intake for big-ticket enquiries',
          'Review ask the day after commissioning',
          'Local visibility that catches up to the workload',
        ],
      },
    ],
  };

  const exploreData = {
    badge: 'Related',
    description: 'The other parts electrical firms tend to lean on most.',
    cards: [
      {
        icon: Wrench,
        title: 'Smart Website Systems',
        description: 'Holds enquiry, survey and quote flow together.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: PhoneOff,
        title: 'AI Lead Handling',
        description: 'Catches fault calls before the next number is dialled.',
        href: '/services/ai-lead-handling',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Compass,
        title: 'Local Authority & SEO',
        description: 'Visibility for "electrician near me" the moment a board trips.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Reviews',
        description: 'Turns commissioned installs into proof on Maps and search.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'What sparkies ask first',
    description: 'Direct, no hedging.',
    faqs: [
      {
        question: 'Most fault calls come after six. Will this actually help then?',
        answer:
          'That is the moment it earns its keep. The text-back fires whether anyone at the office is awake or not, and the customer stops dialling the next number.',
      },
      {
        question: 'How does it tell a fault from a routine job?',
        answer:
          'It reads keywords like "tripping", "no power", "burning smell" and tags accordingly. The dispatcher overrides it whenever they want.',
      },
      {
        question: 'Will the chase on EV and CU quotes sound like a robot?',
        answer:
          'No. It reads like the office wrote it. Short, friendly, and most customers thank you for the nudge.',
      },
      {
        question: 'Can EV and rewire intake actually be useful before we ring back?',
        answer:
          'Yes. The form asks the few things that decide the quote \u2014 car, parking, board age, supply \u2014 so the first reply already moves things forward.',
      },
      {
        question: 'When does the review request go out without being awkward?',
        answer:
          'The day after commissioning, while the lights still feel new.',
      },
      {
        question: 'Do we need a brand new website?',
        answer:
          'Usually not. The bottleneck is what happens after the form is sent.',
      },
    ],
  };

  return {
    slug: 'electrical-companies',
    industries: ['electrical'],
    systems: [
      'smart-website-systems',
      'ai-lead-handling',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['missed-calls', 'lead-management', 'review-generation'],
    type: 'detail',
    parentSlug: 'home-services',
    seo: {
      title: 'Electrical Firms \u2014 Catch The Fault Call, Close The EV Quote | MindWP',
      description:
        'For electricians whose Sunday-night fault calls go to voicemail and whose EV charger quotes drift over a long weekend. Fault triage, big-ticket chase, reviews on Maps.',
      keywords: [
        'electrician fault call recovery',
        'EV charger quote follow up',
        'consumer unit upgrade quote',
        'electrician review automation',
        'electrician local SEO',
      ],
      canonical: '/industries/home-services/electrical-companies',
    },
    hero: { ...heroData },
    operatingPatterns: operatingPatternsData,
    systemLayers: systemLayersData,
    workflowExamples: workflowExamplesData,
    pathways: pathwaysData,
    explore: exploreData,
    faq: faqData,
    cta: {
      title: 'Tell us about last Sunday\u2019s fault call',
      description:
        'Walk us through the last fault call that hit voicemail and the EV quote that went silent. We will tell you what to plug first.',
    },
  };
}


export const electricalCompaniesIndustryPageData: IndustryPageData =
  buildElectricalCompaniesIndustryPageData();
