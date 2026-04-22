import {
  Compass,
  Inbox,
  MapPin,
  Navigation,
  PhoneOff,
  Route,
  Star,
  Truck,
  Wrench,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildMobileMechanicsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Mobile Mechanics',
    title: 'You Were Under The Bonnet On A Driveway. The Phone Was In The Glovebox.',
    description:
      'A mobile mechanic\u2019s front desk is a phone in the seat well. The day runs from one driveway to the next. Half the calls land while there is no clean hand to answer them, and half of every wasted hour gets eaten by a job in the wrong postcode that nobody priced before the drive.',
    list: ['Glovebox calls', 'Wrong postcodes', 'Cold quotes'],
    cssPrefix: 'mobile-mechanics-hero',
  };

  const workflowExamplesData = {
    badge: 'A Day From The Van',
    title: 'Three moments most mobile mechanics know by heart',
    description:
      'These are the moments that lose the most jobs and the most diesel. Each one has a small fix that does not need you to stop work.',
    workflows: [
      {
        trigger: 'You are mid-job on a driveway. The phone rings in the glovebox.',
        actions: [
          'A short, real-sounding text fires back inside a minute capturing the car and the issue',
          'The driver knows you will ring back instead of assuming you ghosted',
          'When the bonnet is back down, the callback already has context',
        ],
      },
      {
        trigger: 'A driver fifty miles away wants someone out today',
        actions: [
          'The first reply checks the postcode and the job before you load the van',
          'Out-of-area enquiries get a polite, useful response without you driving for nothing',
          'In-area enquiries get a slot in the same message',
        ],
      },
      {
        trigger: 'You sent a price by text three nights ago and never heard back',
        actions: [
          'A polite morning chase fires automatically asking if they want to book it',
          'Open quotes sit somewhere you can scan in ten seconds',
          'Old quotes start turning back into work without you having to remember',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'mobile-mechanics-workflow-examples',
  };

  const operatingPatternsData = {
    badge: 'Where The Day Bleeds',
    title: 'Four moments where a one-van business quietly loses its margin',
    description:
      'A mobile mechanic\u2019s leak is rarely the workmanship. It is the bit between the seat and the next driveway.',
    benefits: [
      {
        icon: PhoneOff,
        title: 'Calls land while your hands are dirty',
        description:
          'You hear the buzz. You cannot pick up. By the time the job is done the message is two hours old and the driver has rung two other vans.',
        iconType: 'primary' as const,
      },
      {
        icon: Navigation,
        title: 'Half a day driving to a wrong postcode',
        description:
          'A call comes in, the slot gets agreed, and only on arrival does it become obvious the job needed a workshop or the area was an hour out of patch.',
        iconType: 'secondary' as const,
      },
      {
        icon: Route,
        title: 'Quotes sent by text at 9pm, gone by morning',
        description:
          'You did the right thing and replied late. By the time anyone follows up, the driver has either booked elsewhere or assumed it never happened.',
        iconType: 'accent' as const,
      },
      {
        icon: Star,
        title: 'Good work, almost no proof of it on a map',
        description:
          'No shopfront sign means the Google profile is the shopfront. Five reviews against the garage on the high street with eighty.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Goes In',
    title: 'Five small pieces designed for a business run from the seat',
    description:
      'No CRM dashboards to live inside. Each piece does one job in the place a mobile mechanic is most likely to drop a lead.',
    featureCategories: [
      {
        title: 'Hold the call you could not take',
        description:
          'A short text fires back automatically when you cannot answer. Captures the car, the issue, and tells them when you will ring \u2014 reads like you wrote it from the driver\u2019s seat.',
        icon: PhoneOff,
        features: [
          'Text-back inside a minute on missed calls',
          'Vehicle, fault and postcode captured up front',
          'Driver knows you are coming back to them',
        ],
      },
      {
        title: 'Filter out the postcode-waste jobs before you drive',
        description:
          'First reply checks the area and the job. Out-of-patch enquiries get a polite handoff. In-patch enquiries get a slot.',
        icon: MapPin,
        features: [
          'Service-area check on first reply',
          'Polite redirect on out-of-area enquiries',
          'Less diesel spent on jobs that should not have been booked',
        ],
      },
      {
        title: 'Let drivers book a slot without ten texts',
        description:
          'A link they can use to pick a slot. Lands in your day with the car and the fault attached. Reminder fires the day before so they actually open the gate.',
        icon: Truck,
        features: [
          'Self-serve slots with arrival window',
          'Day-before reminder so jobs do not no-show',
          'Slot, vehicle and fault all in one view',
        ],
      },
      {
        title: 'Stop quotes dying in old text threads',
        description:
          'Every late-night quote gets a polite morning chase. Open quotes live somewhere you can scan between jobs.',
        icon: Inbox,
        features: [
          'Morning chase on every open quote',
          'Open quotes you can read at a red light',
          'Old quotes warmed up into real bookings',
        ],
      },
      {
        title: 'Get the proof onto the map',
        description:
          'A short review request fires the evening of the job, when the driver is still pleased the car is back on the road.',
        icon: Star,
        features: [
          'Review ask the evening you finish',
          'Reviews land on the Google profile drivers actually look at',
          'Reputation that catches up to a business with no shop sign',
        ],
      },
    ],
    columns: 3 as const,
  };

  const pathwaysData = {
    badge: 'Where Most Mobile Mechanics Start',
    title: 'You do not have to fix everything at once',
    description:
      'Most one-van businesses feel one of these louder than the others. Pick the one that is bleeding the most and start there.',
    packages: [
      {
        name: 'Catch the calls you cannot take',
        description:
          'For days where the phone keeps ringing while your hands are in an engine bay.',
        price: 'Stage 1',
        priceDetail: 'Start here if missed calls are the loudest leak',
        features: [
          'Text-back inside a minute',
          'Vehicle and fault captured up front',
          'One inbox for calls, forms and texts',
        ],
      },
      {
        name: 'Stop driving to the wrong postcode',
        description:
          'For when too many jobs only become "no-go" once the van is parked outside.',
        price: 'Stage 2',
        priceDetail: 'Start here if wasted journeys are the pain',
        features: [
          'Service-area check on the first reply',
          'Self-serve slot with arrival window',
          'Day-before reminder so the gate is open',
        ],
        popular: true,
      },
      {
        name: 'Warm up old quotes and stack reviews',
        description:
          'For when work comes in fine but late-night quotes go cold and the Google profile is bare.',
        price: 'Stage 3',
        priceDetail: 'Start here if follow-up and reputation are the gap',
        features: [
          'Morning chase on every open quote',
          'Past customer nudges on the right interval',
          'Review ask the evening you finish the job',
        ],
      },
    ],
  };

  const exploreData = {
    badge: 'Related',
    description: 'The other parts of the system one-van mechanics tend to lean on.',
    cards: [
      {
        icon: Wrench,
        title: 'Smart Website Systems',
        description: 'Holds enquiry, slot and quote flow together for a business with no shopfront.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Inbox,
        title: 'AI Lead Handling',
        description: 'Catches missed calls and out-of-hours enquiries when the van is on a job.',
        href: '/services/ai-lead-handling',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Compass,
        title: 'Local Authority & SEO',
        description: 'Visibility for "mobile mechanic near me" the moment a car will not start.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Reviews',
        description: 'Turns finished driveway jobs into proof on the Google profile.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'What mobile mechanics tend to ask first',
    description: 'Direct, no hedging.',
    faqs: [
      {
        question: 'I cannot stop a job to type. Will this just be more notifications?',
        answer:
          'It is the opposite. The text-back, the chase, the reminder all fire on their own. Less time on the phone between jobs, not more.',
      },
      {
        question: 'My customers want to talk to a person. Won\u2019t this feel automated?',
        answer:
          'No. The first reply reads like something you would actually send between jobs. The point is to hold the lead until you can ring back, not to fake a conversation.',
      },
      {
        question: 'How does the postcode filter work without me checking it?',
        answer:
          'You set the patch once. Anything outside it gets a polite handoff message instead of going on the diary. You stop the wrong-postcode drive without thinking about it.',
      },
      {
        question: 'Can it handle quotes that need a look before a price?',
        answer:
          'Yes. The first reply confirms the visit. The proper quote follows once you have looked under the bonnet.',
      },
      {
        question: 'I send half my quotes by text from the van. Does it pick those up?',
        answer:
          'Yes. Texts you send get tracked too, and a polite morning chase fires if there is no reply. Old text threads stop being where quotes go to die.',
      },
      {
        question: 'Do I need a website at all?',
        answer:
          'A small one helps because the Google profile and search results need somewhere to point. It does not need to be big.',
      },
    ],
  };

  return {
    slug: 'mobile-mechanics',
    industries: ['mobile-mechanic'],
    systems: [
      'smart-website-systems',
      'ai-lead-handling',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['missed-calls', 'lead-management', 'review-generation'],
    type: 'detail',
    parentSlug: 'automotive-services',
    seo: {
      title: 'Mobile Mechanics \u2014 Stop Losing Calls From The Glovebox | MindWP',
      description:
        'For one-van mechanics whose front desk is a phone in the seat well. Catch missed calls, stop driving to wrong postcodes, and warm up the late-night quotes that went cold.',
      keywords: [
        'mobile mechanic missed call recovery',
        'mobile mechanic booking system',
        'mobile mechanic service area',
        'mobile mechanic quote follow up',
        'mobile mechanic local SEO',
      ],
      canonical: '/industries/automotive-services/mobile-mechanics',
    },
    hero: { ...heroData },
    workflowExamples: workflowExamplesData,
    operatingPatterns: operatingPatternsData,
    systemLayers: systemLayersData,
    pathways: pathwaysData,
    explore: exploreData,
    faq: faqData,
    cta: {
      title: 'Tell us about today\u2019s missed calls',
      description:
        'Walk us through the calls that hit voicemail and the postcodes that wasted the day. We will tell you what to plug first.',
    },
  };
}

export const mobileMechanicsIndustryPageData: IndustryPageData =
  buildMobileMechanicsIndustryPageData();
