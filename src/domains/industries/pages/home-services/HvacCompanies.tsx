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
      'HVAC has a few days each year when everything breaks at once and the line fills faster than anyone can answer it. The cold snap or heatwave does not beat you because the work is hard. It beats you because too many calls land in the same hour and another firm gets back first.',
    list: ['Call overload', 'Surge mornings', 'Late dispatch'],
    cssPrefix: 'hvac-companies-hero',
  };

  const operatingPatternsData = {
    badge: 'Where The Surge Bleeds',
    title: 'A cold-snap morning, hour by hour',
    description:
      'These are the moments that decide whether a weather spike turns into good work or just noise. The issue is rarely a lack of demand. It is what happens when too much of it lands at once.',
    benefits: [
      {
        icon: Snowflake,
        title: '6:14am \u2014 calls coming in faster than anyone can pick up',
        description:
          'Twenty no-heat calls land in the first hour and the office line cannot keep pace with any of them properly. Half never leave a voicemail because they are already ringing the next firm before the first person can call back.',
        iconType: 'primary' as const,
      },
      {
        icon: Route,
        title: 'The dispatcher is sending the wrong engineer to the wrong end of the patch',
        description:
          'There is no clean view of who is closest once the board fills up and the phones keep going. The senior engineer is across town on a service while a no-heat sits ten minutes from another van, and half a day disappears in the routing.',
        iconType: 'primary' as const,
      },
      {
        icon: AlarmClock,
        title: 'Routine bookings get triaged in the middle of the panic',
        description:
          'A routine spring service is sitting underneath a no-hot-water call from six in the morning, because everything landed in the same pile. Nobody can tell which is which without listening through every message one by one.',
        iconType: 'secondary' as const,
      },
      {
        icon: Thermometer,
        title: 'A boiler swap quote went out before the surge and never got chased',
        description:
          "Four grand is sitting in a homeowner's inbox while the cold week eats the whole office alive. By the time things calm down enough to remember it, another firm has already kept the conversation moving and booked the install.",
        iconType: 'accent' as const,
      },
    ],
    columns: 4 as const,
  };

  const comparisonData = {
    badge: 'A Cold Tuesday Morning',
    title: 'A surge morning, before and after',
    description:
      'Same engineers and same vans, but a very different morning once the calls stop piling up in the wrong order. What changes is the handling between the phone, the dispatcher, and the diary.',
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
      'Each piece handles one pressure point in the surge week, when no one in the office has spare time and the phones still will not stop. They help the business absorb volume instead of losing work inside it.',
    featureCategories: [
      {
        title: 'Hold the panic call before it hits the next number',
        description:
          'A short, real-sounding text fires inside a minute on every missed call and captures the boiler and the symptom straight away. That often stops the homeowner dialling the next firm while the office is still trying to catch up.',
        icon: PhoneOff,
        features: [
          'Text-back inside 60 seconds',
          'Boiler make and symptom captured up front',
          'Caller knows you have seen it',
        ],
      },
      {
        title: 'Triage the surge inbox by urgency, not by arrival time',
        description:
          'No-heat and no-hot-water rise above routine service bookings the moment they land. The dispatcher works from a clean list instead of a voicemail pile built by whichever calls came in first.',
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
          'Each enquiry lands with the postcode and the symptom already tagged, so the dispatcher can see who is nearest without guessing under pressure. That matters most when several calls are waiting and the whole patch is moving at once.',
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
          'Boiler swap quotes get a friendly check-in a few days later instead of disappearing behind the weather spike. Open quotes stay on one board the office can scan in ten seconds before the line starts going again.',
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
          'Twelve months after every install, a quiet annual service nudge goes out before the next weather swing hits. That helps the service diary fill itself instead of going flat once the emergency season passes.',
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
      'These are the kinds of moments that usually make a surge day feel out of control. This is what changes once the volume can be held and sorted properly instead of just shouted through.',
    workflows: [
      {
        trigger: '5:48am \u2014 boiler down, caller working through the list',
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
          'The homeowner books for the quiet weeks before the next cold snap',
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
      'Most HVAC firms can point to one of these problems straight away once they stop calling it "just a busy week". Start with the one that makes the biggest dent when weather-driven volume hits.',
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
    description:
      'These are the supporting services HVAC firms tend to lean on most once they can see where the weather spikes are breaking the handling. Each one supports response, routing, visibility, or proof from a different angle.',
    cards: [
      {
        icon: Wrench,
        title: 'Smart Website Systems',
        description:
          'Helps enquiry, survey, and quote handling stay connected through a cold snap or heatwave instead of splitting apart under the volume.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: PhoneOff,
        title: 'AI Lead Handling',
        description:
          'Catches no-heat calls before they hit the next firm in the list, especially on the mornings when too many of them land at once.',
        href: '/services/ai-lead-handling',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Compass,
        title: 'Local Authority & SEO',
        description:
          'Helps you stay visible for "boiler engineer near me" or cooling breakdown searches the morning the heating or AC gives out.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Reviews',
        description:
          'Turns commissioned installs and relief-call fixes into proof on Maps and search, so the next homeowner sees recent work they can trust.',
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
    description:
      'Straight answers about cold-snap overload, dispatch pressure, and how to hold more of the surge without adding chaos.',
    faqs: [
      {
        question:
          'A cold-snap morning is chaos. Will this actually keep up with twenty calls in an hour?',
        answer:
          'That is the moment it is built for. Every missed call gets a text inside a minute, and no-heat enquiries surface above the routine ones automatically. The dispatcher stops triaging by panic.',
      },
      {
        question: 'Can it really help the dispatcher route the closest van?',
        answer:
          'Yes. Each enquiry lands with the postcode and the symptom tagged, so the dispatcher can see who is nearest instead of guessing. It will not replace a dispatcher \u2014 it gives them a clean picture.',
      },
      {
        question:
          'We send a lot of install quotes after a survey. Can it chase those without sounding pushy?',
        answer:
          'Yes. A short, friendly check-in fires a few days after the quote, and again a week or so later. Most homeowners appreciate the nudge because the weather spike usually pushed the decision down their list too.',
      },
      {
        question: 'Will callers feel the response is automated during a panic?',
        answer:
          'No. The first reply reads like the office wrote it. Short, useful, tells them when you will ring back.',
      },
      {
        question: 'Can it handle annual service nudges without becoming spam?',
        answer:
          'Yes. A short message goes out around twelve months after the install. It reads like a person, opt-out is one click, and most homeowners book.',
      },
      {
        question: 'Do we need a brand new website?',
        answer:
          'Usually not. The bigger bottleneck is what happens after the call or form lands during a surge. The site only changes if it is in the way of that.',
      },
    ],
  };

  return {
    seo: {
      title: 'HVAC Firms \u2014 Survive The Surge Week, Refill The Service Diary',
      description:
        'For HVAC firms whose first cold morning buries the line and whose installs never come back for a service. Surge handling, dispatch routing, and install quote chase.',
      canonical: '/industries/home-services/hvac-companies',
    },
    slug: 'hvac-companies',
    industries: ['hvac'],
    systems: ['smart-website-systems', 'ai-lead-handling', 'crm-automation', 'local-seo-authority'],
    topics: ['missed-calls', 'lead-management', 'client-reactivation'],
    type: 'detail',
    parentSlug: 'home-services',
    hero: { ...heroData },
    operatingPatterns: operatingPatternsData,
    comparison: comparisonData,
    systemLayers: systemLayersData,
    workflowExamples: workflowExamplesData,
    pathways: pathwaysData,
    explore: exploreData,
    faq: faqData,
    cta: {
      heading: {
        title: 'Tell us about the last cold morning',
        description:
          'Walk us through the last weather spike, how many calls came in at once, and where the callbacks or vans fell behind. We will tell you what to sort first.',
      },
      actions: [{ label: 'Get Started', href: '/contact', primary: true }],
    },
  };
}

export const hvacCompaniesIndustryPageData: IndustryPageData = buildHvacCompaniesIndustryPageData();
