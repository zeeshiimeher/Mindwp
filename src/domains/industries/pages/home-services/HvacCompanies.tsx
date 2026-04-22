import {
  AlarmClock,
  CalendarCheck,
  Compass,
  Inbox,
  Map,
  PhoneOff,
  Route,
  Snowflake,
  Star,
  Thermometer,
  Wrench,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildHvacCompaniesIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For HVAC Firms',
    title: 'Minus Four Overnight. The Phones Lit Up At Six. Half Rang Out By Nine.',
    description:
      'HVAC has two days a year that pay for the rest. The first deep cold morning. The first proper heatwave. On those days every borderline boiler tips over the same hour, and the office line gets calls faster than anyone can answer them. The week is not won by the engineer on the van. It is won by who could be reached, and how quickly the next van could be sent.',
    list: ['Surge mornings', 'Backed-up dispatch', 'Cold install quotes'],
    cssPrefix: 'hvac-companies-hero',
  };

  const operatingPatternsData = {
    badge: 'Where The Surge Bleeds',
    title: 'A cold-snap morning, hour by hour',
    description:
      'These are the moments that decide whether a sub-zero week pays out or just sounds busy.',
    benefits: [
      {
        icon: Snowflake,
        title: '6:14am \u2014 calls coming in faster than anyone can pick up',
        description:
          'Twenty no-heat calls in the first hour. The office line cannot keep pace. Half of them never leave a voicemail because they are already on to the next number.',
        iconType: 'primary' as const,
      },
      {
        icon: Route,
        title: 'The dispatcher is sending the wrong engineer to the wrong end of the patch',
        description:
          'No view of who is closest. The senior engineer is across town for a service while a no-heat sits ten minutes from another van. Half a day disappears in the routing.',
        iconType: 'primary' as const,
      },
      {
        icon: AlarmClock,
        title: 'Routine bookings get triaged in the middle of the panic',
        description:
          'A May service enquiry is sitting under a no-hot-water at six in the morning. Nobody can tell which is which without reading every voicemail.',
        iconType: 'secondary' as const,
      },
      {
        icon: Thermometer,
        title: 'A boiler swap quote went out before the surge and never got chased',
        description:
          'Four grand sitting in someone\u2019s inbox. The cold week made everyone too busy to notice. By the time it calms down, a different firm has already fitted one.',
        iconType: 'accent' as const,
      },
    ],
    columns: 4 as const,
  };

  const comparisonData = {
    badge: 'A Cold Tuesday Morning',
    title: 'A surge morning, before and after',
    description:
      'Same engineers. Same vans. What changes is the layer between the phone and the diary.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How the surge runs now',
        items: [
          'Phones ring out from six. Voicemails stack faster than anyone can listen.',
          'The dispatcher reads messages in the order they arrived, not in order of who is freezing.',
          'The wrong van gets sent to the wrong end of the patch.',
          'A boiler-swap quote from last week sits open. Nobody has time to chase it.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How the surge runs after',
        items: [
          'Every missed call gets a real reply inside a minute capturing the boiler and the symptom.',
          'No-heat surfaces above routine. The dispatcher works from a triaged list, not a voicemail pile.',
          'Each enquiry has the postcode tagged, so the closest van goes first.',
          'Open install quotes get a friendly nudge automatically. The four-grand jobs do not slip through the cold week.',
        ],
      },
    ],
  };

  const systemLayersData = {
    badge: 'What Goes In',
    title: 'Five pieces sized for a business that lives or dies in two weeks of weather',
    description:
      'Each piece does one job in the surge week. None of them depend on the office having a free hand.',
    featureCategories: [
      {
        title: 'Hold the panic call before it hits the next number',
        description:
          'A short, real-sounding text fires inside a minute on every missed call, capturing the boiler and the symptom. The customer stops dialling.',
        icon: PhoneOff,
        features: [
          'Text-back inside 60 seconds',
          'Boiler make and symptom captured up front',
          'Customer knows you have seen it',
        ],
      },
      {
        title: 'Triage the surge inbox by urgency, not by arrival time',
        description:
          'No-heat surfaces above a service booking. The dispatcher reads a clean list, not a voicemail pile.',
        icon: Inbox,
        features: [
          'Urgency tag the moment it lands',
          'No-heat and no-hot-water read first',
          'Routine bookings still flow through',
        ],
      },
      {
        title: 'Send the closest van first',
        description:
          'Each enquiry lands with the postcode and the symptom tagged. The dispatcher can see who is nearest and route around the patch instead of by guesswork.',
        icon: Map,
        features: [
          'Postcode and severity tagged on intake',
          'Dispatcher sees nearest available van',
          'Half a day of routing waste recovered',
        ],
      },
      {
        title: 'Stop install quotes dying during the cold week',
        description:
          'Boiler swap quotes get a friendly check-in a few days later. Open quotes sit on a board the office can scan in ten seconds.',
        icon: CalendarCheck,
        features: [
          'Auto chase a few days after the quote',
          'Open quote board the office can scan',
          'Big-ticket installs survive the surge',
        ],
      },
      {
        title: 'Refill the diary before next year\u2019s cold morning',
        description:
          'Twelve months after every install, a quiet annual service nudge fires. The contract diary fills itself instead of going cold in May.',
        icon: Compass,
        features: [
          'Annual service reminders on schedule',
          'Past installs nudged without anyone remembering',
          'Quiet months stop being quiet',
        ],
      },
    ],
    columns: 3 as const,
  };

  const workflowExamplesData = {
    badge: 'Surge Moments',
    title: 'Three moments from a cold-snap morning, and what changes',
    description:
      'These are the moments at the top of the page. This is what happens to them after.',
    workflows: [
      {
        trigger: '5:48am \u2014 boiler down, customer dialling round',
        actions: [
          'A short text fires inside a minute capturing the boiler and the symptom',
          'The enquiry sits at the top of the queue tagged "no heat"',
          'By 7am the dispatcher has the closest van assigned, not the senior engineer twenty miles away',
        ],
      },
      {
        trigger: 'Boiler swap quote sent the Monday before the cold snap',
        actions: [
          'A friendly check-in fires automatically a few days after the quote',
          'It sits on the same open-quote board everything else lives on',
          'The four-grand job survives the week the office had no spare hands',
        ],
      },
      {
        trigger: 'A boiler installed twelve months ago hits its anniversary',
        actions: [
          'A quiet annual service nudge fires on the right interval',
          'The customer books for the quiet weeks before the next cold snap',
          'May and June stop being empty in the diary',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'hvac-companies-workflow-examples',
  };

  const pathwaysData = {
    badge: 'Where Most HVAC Firms Start',
    title: 'You do not have to fix the whole season at once',
    description:
      'Most HVAC firms feel one of these louder than the others. Pick the loudest leak.',
    packages: [
      {
        name: 'Survive the surge week',
        description:
          'For when the first sub-zero morning buries the office line and half the calls never leave a voicemail.',
        price: 'Stage 1',
        priceDetail: 'Start here if surge mornings are the loudest leak',
        features: [
          'Text-back inside a minute on every missed call',
          'Urgency tag so no-heat sits at the top',
          'Boiler and symptom captured before the callback',
        ],
        popular: true,
      },
      {
        name: 'Tighten the dispatch picture',
        description:
          'For when the calls get answered but the wrong van keeps being sent to the wrong end of the patch.',
        price: 'Stage 2',
        priceDetail: 'Start here if routing is the gap',
        features: [
          'Postcode and severity tagged on intake',
          'Dispatcher view sorted by urgency and distance',
          'Less waste between jobs',
        ],
      },
      {
        name: 'Refill the diary between surges',
        description:
          'For when installs go fine and the service diary is bare from May to September.',
        price: 'Stage 3',
        priceDetail: 'Start here if recurring service work is the gap',
        features: [
          'Annual service reminders on schedule',
          'Auto chase on every open install quote',
          'Quiet months stop being quiet',
        ],
      },
    ],
  };

  const exploreData = {
    badge: 'Related',
    description: 'The other parts HVAC firms tend to lean on most.',
    cards: [
      {
        icon: Wrench,
        title: 'Smart Website Systems',
        description: 'Holds enquiry, survey and quote flow together through a cold snap.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: PhoneOff,
        title: 'AI Lead Handling',
        description: 'Catches no-heat calls before they hit the next firm in the list.',
        href: '/services/ai-lead-handling',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Compass,
        title: 'Local Authority & SEO',
        description: 'Visibility for "boiler engineer near me" the morning the heating dies.',
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
    title: 'What HVAC firms ask first',
    description: 'Direct, no hedging.',
    faqs: [
      {
        question: 'A cold-snap morning is chaos. Will this actually keep up with twenty calls in an hour?',
        answer:
          'That is the moment it is built for. Every missed call gets a text inside a minute, and no-heat enquiries surface above the routine ones automatically. The dispatcher stops triaging by panic.',
      },
      {
        question: 'Can it really help the dispatcher route the closest van?',
        answer:
          'Yes. Each enquiry lands with the postcode and the symptom tagged, so the dispatcher can see who is nearest instead of guessing. It will not replace a dispatcher \u2014 it gives them a clean picture.',
      },
      {
        question: 'We send a lot of install quotes after a survey. Can it chase those without sounding pushy?',
        answer:
          'Yes. A short, friendly check-in fires a few days after the quote, and again a week or so later. Most customers appreciate the nudge.',
      },
      {
        question: 'Will customers feel the response is automated during a panic?',
        answer:
          'No. The first reply reads like the office wrote it. Short, useful, tells them when you will ring back.',
      },
      {
        question: 'Can it handle annual service nudges without becoming spam?',
        answer:
          'Yes. A short message goes out around twelve months after the install. It reads like a person, opt-out is one click, and most customers book.',
      },
      {
        question: 'Do we need a brand new website?',
        answer:
          'Usually not. The bottleneck is what happens after the form is sent. The site only changes if it is in the way.',
      },
    ],
  };

  return {
    slug: 'hvac-companies',
    industries: ['hvac'],
    systems: [
      'smart-website-systems',
      'ai-lead-handling',
      'crm-automation',
      'local-seo-authority',
    ],
    topics: ['missed-calls', 'lead-management', 'client-reactivation'],
    type: 'detail',
    parentSlug: 'home-services',
    seo: {
      title: 'HVAC Firms \u2014 Survive The Surge Week, Refill The Service Diary | MindWP',
      description:
        'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
      keywords: [
        'hvac cold snap call handling',
        'hvac dispatch routing',
        'boiler install quote follow up',
        'hvac annual service reminder',
        'hvac local SEO',
      ],
      canonical: '/industries/home-services/hvac-companies',
    },
    hero: { ...heroData },
    operatingPatterns: operatingPatternsData,
    comparison: comparisonData,
    systemLayers: systemLayersData,
    workflowExamples: workflowExamplesData,
    pathways: pathwaysData,
    explore: exploreData,
    faq: faqData,
    cta: {
      title: 'Tell us about the last cold morning',
      description:
        'Walk us through the last surge \u2014 how many calls rang out, how many vans went the wrong way. We will tell you what to plug first.',
    },
  };
}


export const hvacCompaniesIndustryPageData: IndustryPageData =
  buildHvacCompaniesIndustryPageData();
