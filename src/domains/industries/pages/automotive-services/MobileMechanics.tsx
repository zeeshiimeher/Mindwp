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
      'A mobile mechanic\u2019s front desk is a phone in the seat well while you are on a driveway, in a workplace car park, or at the roadside with a car that will not move. Calls come in while your hands are dirty, and bad postcodes or weak first replies can waste the next hour before you even pull away.',
    list: ['Glovebox calls', 'Wrong postcodes', 'Cold quotes'],
    cssPrefix: 'mobile-mechanics-hero',
  };

  const workflowExamplesData = {
    badge: 'A Day From The Van',
    title: 'Three moments most mobile mechanics know by heart',
    description:
      'These are the moments that waste the most time, trust, and diesel in a one-van day. Each one has a fix that works while you are still trying to get the current car moving again.',
    workflows: [
      {
        trigger: 'You are mid-job on a driveway. The phone rings in the glovebox.',
        actions: [
          'A short, real-sounding text fires back inside a minute capturing the car and the issue',
          'The driver knows you will ring back instead of assuming you vanished on them',
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
      'A mobile mechanic\u2019s leak is rarely the workmanship itself. It is the stretch between the current driveway, the next postcode, and the calls you cannot answer while someone is waiting for the car to move again.',
    benefits: [
      {
        icon: PhoneOff,
        title: 'Calls land while your hands are dirty',
        description:
          'You hear the buzz while you are halfway through a battery change on a driveway or tracing a fault at the roadside. By the time you listen back, the message is old and the stranded driver has already tried two other vans.',
        iconType: 'primary' as const,
      },
      {
        icon: Navigation,
        title: 'Half a day driving to a wrong postcode',
        description:
          'A call comes in, the slot gets agreed, and only when you arrive do you realise the job needs a workshop or the address is well outside your patch. The diesel is gone either way.',
        iconType: 'secondary' as const,
      },
      {
        icon: Route,
        title: 'Quotes sent by text at 9pm, gone by morning',
        description:
          'You did the right thing and sent the price late from the van. By the next morning, the driver either has another mechanic lined up or has stopped trusting that you will turn up when you said.',
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
      'No bloated dashboard to babysit from the van. Each piece handles one job in the exact place a mobile mechanic is most likely to lose the lead, the route, or the follow-up.',
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
          'The first reply checks the area and the job before you turn the key. Out-of-patch enquiries get a polite handoff, and in-patch ones get a slot you can trust is worth the drive.',
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
          'Every late-night quote gets a polite morning chase while the issue is still fresh. Open quotes live somewhere you can scan between jobs instead of disappearing into old text threads.',
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
      'Most one-van businesses can name the pain straight away: missed calls on live jobs, wasted drives, or quotes that cool off overnight. Start with the one that steals the most time from the week.',
    packages: [
      {
        name: 'Catch the calls you cannot take',
        description:
          'For days where the phone keeps ringing while your hands are in an engine bay, under a bonnet, or on the floor beside a wheel that has to come off.',
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
          'For when too many jobs only become a no-go once the van is parked outside and you realise the address, access, or repair was wrong from the start.',
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
          'For when work comes in fine but late-night quotes cool off by morning and the Google profile still looks too thin for how many jobs you finish each week.',
        price: 'Stage 3',
        priceDetail: 'Start here if follow-up and reputation are the gap',
        features: [
          'Morning chase on every open quote',
          'Past drivers nudged on the right interval',
          'Review ask the evening you finish the job',
        ],
      },
    ],
  };

  const exploreData = {
    badge: 'Related',
    description:
      'These are the supporting pieces one-van mechanics usually lean on once missed calls, service area issues, and trust gaps are obvious. Each one helps the van feel easier to book and easier to trust before you arrive.',
    cards: [
      {
        icon: Wrench,
        title: 'Smart Website Systems',
        description:
          'Holds enquiry, slot, and quote flow together for a business with no shopfront, so the next job does not depend on whoever catches a text first.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Inbox,
        title: 'AI Lead Handling',
        description:
          'Catches missed calls and out-of-hours enquiries while the van is on a job, so roadside urgency does not die just because you could not answer cleanly.',
        href: '/services/ai-lead-handling',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Compass,
        title: 'Local Authority & SEO',
        description:
          'Visibility for "mobile mechanic near me" and similar searches, right at the moment a car will not start and somebody needs a fast answer nearby.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Reviews',
        description:
          'Turns finished driveway and roadside jobs into proof on the Google profile, so the trust picture matches the reliability people get once you arrive.',
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
    description:
      'These are the practical questions that usually come up once a one-van business sees how much of the week is being lost between the call and the driveway. Straight answers only.',
    faqs: [
      {
        question: 'I cannot stop a job to type. Will this just be more notifications?',
        answer:
          'It is the opposite. The text-back, the chase, the reminder all fire on their own. Less time on the phone between jobs, not more.',
      },
      {
        question: 'Drivers want to talk to a person. Won\u2019t this feel automated?',
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
    seo: {
      title: 'Mobile Mechanics \u2014 Stop Losing Calls From The Glovebox | MindWP',
      description:
        'For one-van mechanics whose front desk is a phone in the seat well. Catch missed calls, stop driving to wrong postcodes, and warm up the late-night quotes that went cold.',
      canonical: '/industries/automotive-services/mobile-mechanics',
    },
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
    hero: { ...heroData },
    workflowExamples: workflowExamplesData,
    operatingPatterns: operatingPatternsData,
    systemLayers: systemLayersData,
    pathways: pathwaysData,
    explore: exploreData,
    faq: faqData,
    cta: {
      heading: {
        title: 'Tell us about today\u2019s missed calls',
        description:
          'Walk us through the calls that hit voicemail and the postcodes that wasted the day. We will tell you what to plug first.',
      },
      actions: [{ label: 'Get Started', href: '/contact', primary: true }],
    },
  };
}

export const mobileMechanicsIndustryPageData: IndustryPageData =
  buildMobileMechanicsIndustryPageData();
