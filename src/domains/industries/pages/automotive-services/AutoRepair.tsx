import {
  AlertOctagon,
  CalendarClock,
  CarFront,
  ClipboardList,
  Compass,
  GanttChartSquare,
  Inbox,
  PhoneOff,
  Receipt,
  Star,
  Wrench,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildAutoRepairIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: "Auto Repair",
    title: 'The Brake Job Rang at 9:42. The Bay Was Full. The Driver Booked Down the Road.',
    description:
      'Most repair shops are not losing work because the wrench work is wrong. They lose it in the half hour after a missed call, in the estimate that still has not been chased by the next morning, and in the MOT reminder nobody sent when the bay got busy again.',
    list: ['Missed calls', 'Old quotes', 'Lapsed MOTs'],
    cssPrefix: 'auto-repair-hero',
  };

  const operatingPatternsData = {
    badge: 'Where The Day Leaks',
    title: 'A normal week in a busy shop, and the four moments that quietly cost the most',
    description:
      'The workshop usually keeps moving. The leak is the office half of the job: the ring you miss at 9:42, the quote that sits overnight, and the return work nobody had time to nudge.',
    benefits: [
      {
        icon: PhoneOff,
        title: '9:42am, three rings, voicemail',
        description:
          'Brake pads, grinding on the ring road, wants the car back tonight. By 10:20 they are already booked into the garage that answered first. You hear the message when the lunch rush starts.',
        iconType: 'primary' as const,
      },
      {
        icon: Receipt,
        title: 'The estimate that went out Tuesday',
        description:
          'You wrote it between two services and sent it at 4:47. Wednesday passes. Thursday passes. By Friday morning nobody knows whether it was chased, and the job has cooled right off.',
        iconType: 'secondary' as const,
      },
      {
        icon: AlertOctagon,
        title: 'The MOT driver who never came back',
        description:
          'Six months ago you saved them a fail and they left happy. Their next MOT came round last week, but the reminder never went out and their car is now somewhere else getting tested.',
        iconType: 'accent' as const,
      },
      {
        icon: ClipboardList,
        title: '"Did anyone ring them back?"',
        description:
          'A question you hear more than you would like. Usually nobody is sure. Usually the answer is no.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const comparisonData = {
    badge: 'A Tuesday In The Shop',
    title: 'Same Tuesday, before and after the gaps get plugged',
    description:
      'The spanners still turn, the jobs still move. What changes is the half hour around each enquiry that used to get lost between the bay, the desk, and the end of the day.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How Tuesday looks now',
        items: [
          '9:42 \u2014 brake job rings, voicemail, lost by 11am',
          '11:30 \u2014 estimate written, sent, never chased',
          '2:15 \u2014 walk-in asks for an MOT slot, nobody adds it to the diary',
          '5:30 \u2014 car finished, driver leaves, no review request',
        ],
      },
      {
        type: 'after' as const,
        title: 'How Tuesday looks once the gaps close',
        items: [
          '9:42 \u2014 missed call, text back inside a minute, vehicle and fault captured',
          '11:30 \u2014 estimate goes out, polite chase queued for the next morning',
          '2:15 \u2014 walk-in picks an MOT slot from a link, lands in the diary the front desk already uses',
          '5:30 \u2014 car collected, review request fires that evening when they are happiest',
        ],
      },
    ],
  };

  const systemLayersData = {
    badge: 'What Goes In',
    title: 'Five small pieces, each one closing a specific gap in the day',
    description:
      'Nothing bloated and nothing cosmetic. Each piece handles one specific moment where work currently leaks out of a busy repair day.',
    featureCategories: [
      {
        title: 'Hold the call you could not answer',
        description:
          'Inside a minute the missed call gets a short text back \u2014 not a recording, a real-sounding line that captures the car and the issue and tells them when you will ring.',
        icon: PhoneOff,
        features: [
          'Text back inside 60 seconds',
          'Vehicle and fault noted up front',
          'Driver knows you are coming back to them',
        ],
      },
      {
        title: 'Take the friction out of booking the slot',
        description:
          'Stop running diaries by text and memory. A drop-off slot the driver picks themselves lands in the front desk view and sends a reminder before the car is due in.',
        icon: CalendarClock,
        features: [
          'Self-serve drop-off slots',
          'Day-before reminder so cars actually turn up',
          'Front desk sees the booking with the fault attached',
        ],
      },
      {
        title: 'Stop estimates dying in the inbox',
        description:
          'Every estimate gets a polite, written-by-a-human nudge on a schedule. Open quotes are visible in one place so nothing sits a week unread.',
        icon: Receipt,
        features: [
          'Quotes nudged automatically the next morning',
          'Open quote board the team can scan',
          'Old quotes warmed up before they go cold',
        ],
      },
      {
        title: 'Bring back the MOTs and services that are due',
        description:
          'Twelve months after a job, a short reminder lands at the point they are due again. The driver remembers who sorted it cleanly last time and books before they shop around.',
        icon: GanttChartSquare,
        features: [
          'MOT and service reminders on the right interval',
          'Past drivers nudged without anyone remembering',
          'Repeat work that does not depend on luck',
        ],
      },
      {
        title: 'Get the proof on the page that matters',
        description:
          'When the car gets picked up, a review request fires that evening. Local search starts catching up to the actual work.',
        icon: Star,
        features: [
          'Review ask the day they collect',
          'Reviews land where local drivers search',
          'Reputation that finally matches the workshop',
        ],
      },
    ],
    columns: 3 as const,
  };

  const workflowExamplesData = {
    badge: 'Real Moments',
    title: 'Three moments that used to be a leak, written out properly',
    description:
      'Same sort of missed call, stale estimate, and collection handoff that quietly drains a week. This is what those moments look like once they stop depending on memory.',
    workflows: [
      {
        trigger: '9:42am \u2014 brake job rings, the bay is full, the call hits voicemail',
        actions: [
          'Inside 60 seconds, a short text goes back: "Sorry we missed you, what\u2019s the car and the issue?"',
          'They reply with the make and the noise. It lands in one inbox the front desk actually checks',
          'When the bay clears, the callback already has the context \u2014 and the driver has not had time to ring the next garage',
        ],
      },
      {
        trigger: '11:30am \u2014 estimate written between two services, sent off',
        actions: [
          'The next morning a polite nudge fires automatically asking if they want to book it in',
          'The open estimate sits on a board everyone can scan in ten seconds',
          'If they say yes, the slot gets booked from the same thread \u2014 no second round of phone tag',
        ],
      },
      {
        trigger: '5:30pm \u2014 car collected, driver thanks the team, walks out',
        actions: [
          'That evening a short review request lands on their phone',
          'They are still pleased, so they actually leave one',
          'Reputation gets a top-up without anyone at the desk having to remember',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'auto-repair-workflow-examples',
  };

  const pathwaysData = {
    badge: 'Where Most Shops Start',
    title: 'You do not have to do all of this. Pick the leak that is bleeding the most.',
    description:
      'Most shops already know which part of the day is hurting most. Start with that pressure point, steady it, then decide whether the next leak is worth touching.',
    packages: [
      {
        name: 'Catch the calls you are missing',
        description:
          'For shops where the phone drops to voicemail before lunch most days, and the callback only happens once the job in front of you is finally finished.',
        price: 'Stage 1',
        priceDetail: 'Start here if missed calls are the loudest pain',
        features: [
          'Missed-call text-back inside a minute',
          'One inbox for calls, forms and walk-in enquiries',
          'Vehicle and fault captured before the callback',
        ],
      },
      {
        name: 'Stop estimates dying in the inbox',
        description:
          'For shops where Tuesday and Wednesday estimates are still sitting there on Friday, and nobody can say for certain who was meant to follow them up.',
        price: 'Stage 2',
        priceDetail: 'Start here if estimates are where it slows down',
        features: [
          'Automatic next-morning chase on every quote',
          'Open quote board the team can scan',
          'Old quotes warmed up before they die',
        ],
        popular: true,
      },
      {
        name: 'Win back returns and reviews',
        description:
          'For shops doing solid work every week, but not seeing enough old drivers come back or enough fresh proof show up where locals actually check.',
        price: 'Stage 3',
        priceDetail: 'Start here if repeat work and reputation are the gap',
        features: [
          'MOT and service reminders on the right interval',
          'Review ask the evening they collect',
          'Local search that finally matches the work',
        ],
      },
    ],
  };

  const exploreData = {
    badge: 'Related',
    description:
      'These are the adjacent pieces repair shops usually lean on once missed calls and quote follow-up are under control. Each one supports the same front-desk weak spots from a different angle.',
    cards: [
      {
        icon: Wrench,
        title: 'Smart Website Systems',
        description:
          'The frame that keeps enquiry, booking, and estimate follow-up connected, so the front desk stops stitching everything together by hand.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Inbox,
        title: 'AI Lead Handling',
        description:
          'Catches missed calls and out-of-hours enquiries while the bay is busy, so the next good job does not vanish before anyone is free.',
        href: '/services/ai-lead-handling',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Compass,
        title: 'Local Authority & SEO',
        description:
          'Gets the shop visible when local drivers search for the exact repair they need, not just a vague garage listing with everyone else.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Reviews',
        description:
          'Turns finished jobs into visible proof on Maps and search, so the review picture finally looks like the standard of work in the workshop.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'What repair shops actually want to know first',
    description:
      'These are usually the first questions once a shop realises the leak is in handling, not in the mechanical work. Direct answers only.',
    faqs: [
      {
        question: 'The shop is already busy. How much extra does the team have to do?',
        answer:
          'Almost nothing day to day. The text-back fires on its own. The quote chase fires on its own. The reminder fires on its own. The team carries on running the workshop.',
      },
      {
        question: 'Do drivers feel like they are getting an automated response?',
        answer:
          'No. The lines are short and read like something a person at the desk would actually send. The point is to hold the lead until you can ring back, not to fake a conversation.',
      },
      {
        question: 'We tried online booking once and it was more hassle than it was worth.',
        answer:
          'Usually because the booking tool was not connected to the diary the desk already used. Here the slot, the car, and the fault all land in the one place the team checks anyway.',
      },
      {
        question: 'What happens to the pile of old quotes sitting in the inbox?',
        answer:
          'They get warmed up. A lot of shops find more money in revived quotes in the first month than in any new marketing.',
      },
      {
        question: 'How does the MOT and service reminder work?',
        answer:
          'When a job goes through, a quiet reminder gets queued for roughly twelve months later. Nobody has to remember to send it.',
      },
      {
        question: 'Do we need a brand new website?',
        answer:
          'Usually not. Most of the gap lives after the form is sent, not before it.',
      },
    ],
  };

  return {
      seo: {
        title: 'Auto Repair Shops \u2014 Stop Losing Brake Jobs To Voicemail | MindWP',
        description:
          'For repair shops where the phone hits voicemail mid-job, estimates die in the inbox, and MOT drivers never come back. Plug the gaps in the day without changing how the workshop runs.',
        canonical: '/industries/automotive-services/auto-repair',
      },
      slug: 'auto-repair',
      industries: ['auto-repair'],
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
      operatingPatterns: operatingPatternsData,
      comparison: comparisonData,
      systemLayers: systemLayersData,
      workflowExamples: workflowExamplesData,
      pathways: pathwaysData,
      explore: exploreData,
      faq: faqData,
      cta: {
        title: 'Tell us where the brake job got lost',
        description:
          'Walk us through last Tuesday \u2014 the missed call, the dead estimate, the regular who never came back. We will tell you which gap to close first.',
      }
  };
}

export const autoRepairIndustryPageData: IndustryPageData = buildAutoRepairIndustryPageData();
