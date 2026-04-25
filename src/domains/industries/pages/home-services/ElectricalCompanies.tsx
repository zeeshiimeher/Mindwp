import {
  AlarmClock,
  BatteryCharging,
  Bell,
  CircuitBoard,
  Compass,
  Flame,
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
      'Half the house was dark, the board kept tripping, and nobody in that house was waiting until morning to see what happened next. The caller had Google open, rang three sparkies in a row, and stuck with the one who answered before the fault turned into a longer night.',
    list: ['Power out', 'Board tripping', 'Night faults'],
    cssPrefix: 'electrical-companies-hero',
  };

  const operatingPatternsData = {
    badge: 'Where The Work Walks Out',
    title: 'Where electrical firms quietly lose the next job',
    description:
      'Two things happen in electrical work every week. Fault calls come in when the power is wrong and nobody will wait, and bigger quotes go quiet because the follow-up never gets sent once the urgent jobs take over again.',
    benefits: [
      {
        icon: ZapOff,
        title: 'A board trips on a Sunday and the call rings out',
        description:
          'You are at dinner and the voicemail says half the house has gone off again. By the time you pick it up on Monday, the emergency call-out has already happened and the homeowner only remembers the name that answered on Sunday night.',
        iconType: 'primary' as const,
      },
      {
        icon: Flame,
        title: 'A burning smell at midnight goes to nobody',
        description:
          'They tried the office line, then two others, because something smelled wrong and they wanted an answer fast. One picked up, handled the fault, and stayed in the frame for the rewire conversation that came up while they were there.',
        iconType: 'primary' as const,
      },
      {
        icon: BatteryCharging,
        title: 'EV charger quote sits in someone\u2019s inbox for a fortnight',
        description:
          'Survey done, quote sent, then nothing for two weeks because everyone got dragged back into fault work and smaller jobs. The homeowner is not annoyed. They just assume you are too busy and reply to the firm that checked back in.',
        iconType: 'secondary' as const,
      },
      {
        icon: CircuitBoard,
        title: 'A consumer unit job goes cold without anyone noticing',
        description:
          'No board, no reminder, no second look after the quote goes out. It disappears into the same drawer as last month\u2019s open jobs, and nobody notices until the homeowner has stopped replying and the week has moved on.',
        iconType: 'accent' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Goes In',
    title: 'Five pieces sized for fault calls and big-ticket quotes',
    description:
      'There are really two pressures here: fault calls that need holding immediately and install quotes that need following up later. These pieces keep both sides moving without asking someone in the office to remember everything by hand.',
    featureCategories: [
      {
        title: 'Hold the fault call before the next number gets dialled',
        description:
          'Every missed call fires a short text in under a minute and asks what is happening at the board or in the house. That is often enough to stop the caller scrolling to the next sparkie while you are still finishing the job in front of you.',
        icon: PhoneOff,
        features: [
          'Text-back inside 60 seconds',
          'Address and symptom captured up front',
          'Caller knows you have seen it',
        ],
      },
      {
        title: 'Faults sit at the top of the queue, not in date order',
        description:
          '"Burning smell", "power out", and "board tripping" surface above routine fitting jobs the moment they land. Nobody has to sit there listening through three voicemails before working out what needs calling back first.',
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
          'EV chargers, consumer units, and rewires get a polite check-in a few days later instead of dropping into silence. Open quotes stay in one place the office can scan in ten seconds before another busy day takes over.',
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
          'Instead of "can someone ring me back about a charger?" the enquiry already includes the car, the parking setup, and the age of the fuse board. The first reply can move things forward instead of turning into a slow back-and-forth.',
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
          'The day after the new board is in and the lights are back on, a friendly request goes out while the relief still feels fresh. That is when people are most likely to leave the review instead of meaning to and forgetting.',
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
      'These are the kinds of calls and quotes that decide the month without looking dramatic in the diary. This is what changes once the reply and follow-up stop relying on memory.',
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
          'The homeowner leaves a review because they were asked at the right moment',
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
      'Most electrical firms can hear one of these problems louder than the rest as soon as they look properly. Start with the one that is costing the most work right now.',
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
    description:
      'These are the supporting services electrical firms tend to lean on most once they can see where calls and quotes are slipping. Each one helps hold response, visibility, or proof together a bit better.',
    cards: [
      {
        icon: Wrench,
        title: 'Smart Website Systems',
        description:
          'Helps enquiry, survey, and quote handling stay connected so fault calls and bigger installs do not drift apart.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: PhoneOff,
        title: 'AI Lead Handling',
        description:
          'Catches fault calls before the next number is dialled, especially when the board is tripping and nobody wants to wait around.',
        href: '/services/ai-lead-handling',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Compass,
        title: 'Local Authority & SEO',
        description:
          'Helps you stay visible for "electrician near me" at the exact moment a board trips or the power goes out in the evening.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Reviews',
        description:
          'Turns commissioned installs and fault fixes into proof on Maps and search, so the next caller sees work that feels current and real.',
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
    description:
      'Straight answers about fault calls, bigger installs, and what actually helps when the phone goes after hours.',
    faqs: [
      {
        question: 'Most fault calls come after six. Will this actually help then?',
        answer:
          'That is the moment it earns its keep. The text-back fires whether anyone at the office is awake or not, and the caller stops dialling the next number.',
      },
      {
        question: 'How does it tell a fault from a routine job?',
        answer:
          'It reads keywords like "tripping", "no power", "burning smell" and tags accordingly. The dispatcher overrides it whenever they want.',
      },
      {
        question: 'Will the chase on EV and CU quotes sound like a robot?',
        answer:
          'No. It reads like the office wrote it. Short, friendly, and most homeowners are glad someone checked back in before the quote dropped off their radar.',
      },
      {
        question: 'Can EV and rewire intake actually be useful before we ring back?',
        answer:
          'Yes. The form asks the few things that decide the quote \u2014 car, parking, board age, supply \u2014 so the first reply already moves things forward.',
      },
      {
        question: 'When does the review request go out without being awkward?',
        answer: 'The day after commissioning, while the lights still feel new.',
      },
      {
        question: 'Do we need a brand new website?',
        answer:
          'Usually not. The bigger leak is normally what happens after the call or form lands, not the website itself.',
      },
    ],
  };

  return {
    seo: {
      title: 'Electrical Firms \u2014 Catch The Fault Call, Close The EV Quote | MindWP',
      description:
        'For electricians whose Sunday-night fault calls go to voicemail and whose EV charger quotes drift over a long weekend. Fault triage, big-ticket chase, reviews on Maps.',
      canonical: '/industries/home-services/electrical-companies',
    },
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
        'Walk us through the last night-time fault call that hit voicemail and the EV or consumer-unit quote that then went quiet. We will tell you what to sort first.',
    },
  };
}

export const electricalCompaniesIndustryPageData: IndustryPageData =
  buildElectricalCompaniesIndustryPageData();
