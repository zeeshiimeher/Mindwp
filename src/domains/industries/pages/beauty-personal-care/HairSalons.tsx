import {
  Calendar,
  CalendarX,
  Compass,
  Moon,
  Repeat,
  Star,
  Wrench,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildHairSalonsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Hair Salons',
    title: 'Six Weeks Became Eight. Eight Became Three Months. Then She Booked Down The Road.',
    description:
      'Hair salons rarely lose a regular in one go. They lose them in slow drift. The cut that should have been six weeks turns into eight. Eight turns into three months. Nobody nudged. By the time anyone notices, she has already tried the salon two streets over. The Tuesdays sit empty for the same reason: nobody offered the gap to anyone.',
    list: ['Drifting regulars', 'Quiet Tuesdays', 'Late-night DMs'],
    cssPrefix: 'hair-salons-hero',
  };

  const operatingPatternsData = {
    badge: 'Where Salons Bleed',
    title: 'Four moments most salon owners know by heart',
    description:
      'A handful of patterns show up in nearly every salon.',
    benefits: [
      {
        icon: Repeat,
        title: 'A regular cut that should have been six weeks ago',
        description:
          'She used to come in every six weeks. It is now eleven and the diary forgot. Nobody nudged. She is testing the salon down the road.',
        iconType: 'primary' as const,
      },
      {
        icon: CalendarX,
        title: 'A peak Saturday slot that nobody re-offered',
        description:
          'A late cancellation on a Friday night. Nobody texted the waitlist. The chair sat empty all afternoon.',
        iconType: 'secondary' as const,
      },
      {
        icon: Moon,
        title: 'A DM at 10:42pm asking about colour for Saturday',
        description:
          'Seen at 9 the next morning. By then she had asked two more salons and someone else had already locked Saturday.',
        iconType: 'accent' as const,
      },
      {
        icon: Star,
        title: 'A wall of beautiful colour, almost no proof on Maps',
        description:
          'The work on Instagram is gorgeous. The Maps page looks like a quiet salon nobody recommends.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const spectrumData = {
    badge: 'Different Salons, Same Drift',
    title: 'Solo stylist, two-chair team and a six-chair floor break in different places',
    description:
      'The leak is not the same in every salon. Once you place yours, the right next step gets obvious.',
    cards: [
      {
        title: 'Solo stylist or single chair',
        description:
          'One pair of hands. The phone goes mid-cut, the DMs back up, and there is no front desk to catch any of it.',
        points: [
          'DMs missed mid-appointment',
          'No re-offer when someone cancels',
          'No nudge when a regular drifts',
        ],
      },
      {
        title: 'Small team, two to four chairs',
        description:
          'More chairs, more handoffs. Things slip in the gap between booker, stylist and client.',
        points: [
          'Bookings nobody confirmed',
          'Tuesday afternoons sit empty',
          'Regulars drift quietly',
        ],
        featured: true,
      },
      {
        title: 'Six-chair floor and up',
        description:
          'Front desk runs the salon. The cost of one missed regular per week, multiplied across the team, is the salary of another stylist.',
        points: [
          'Drift across dozens of regulars',
          'Empty midweek across the floor',
          'Reviews that never match the work',
        ],
      },
    ],
    backgroundColor: 'bg-alt',
    cssPrefix: 'hair-salons-spectrum',
  };

  const workflowExamplesData = {
    badge: 'Real Salon Moments',
    title: 'Three moments where the diary either fills or stays empty',
    description:
      'These are the moments at the top of the page. This is what happens to them after.',
    workflows: [
      {
        trigger: 'A regular has not booked in eleven weeks',
        actions: [
          'A short, warm nudge fires from the front-desk identity',
          'She rebooks in two messages without a phone call',
          'The drift stops at one missed cycle instead of three',
        ],
      },
      {
        trigger: 'A late cancellation on Friday for a Saturday colour',
        actions: [
          'The slot opens to a tagged waitlist within minutes',
          'A regular waiting for Saturday gets first refusal',
          'The chair fills before the salon even opens',
        ],
      },
      {
        trigger: 'A 10:42pm DM about a colour for Saturday',
        actions: [
          'A warm reply from the salon goes out within a minute with availability and a deposit link',
          'She locks the slot before bed instead of asking two more salons',
          'Saturday fills with the right client at the right price',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'hair-salons-workflow-examples',
  };

  const pathwaysData = {
    badge: 'Where Most Salons Start',
    title: 'You do not have to fix everything at once',
    description:
      'Most salons feel one of these three louder than the others. Pick the loudest leak.',
    packages: [
      {
        name: 'Catch the late-night DMs and missed calls',
        description:
          'For when bookings are decided after 9pm and the salon does not see the message until morning.',
        price: 'Stage 1',
        priceDetail: 'Start here if late-night DMs are the loudest leak',
        features: [
          'Warm reply from the salon within a minute',
          'Availability and deposit link in the same message',
          'Late-night enquiries lock instead of drifting',
        ],
      },
      {
        name: 'Fill the empty midweek and the cancelled chair',
        description:
          'For when Tuesdays sit empty and a Friday cancellation costs a full Saturday.',
        price: 'Stage 2',
        priceDetail: 'Start here if midweek and cancellations are the gap',
        features: [
          'Waitlist on a tap',
          'Cancellations re-offered automatically',
          'Quiet midweek slots filled from regulars',
        ],
        popular: true,
      },
      {
        name: 'Stop regulars drifting',
        description:
          'For when nobody nudges the regulars and they slowly stop coming in.',
        price: 'Stage 3',
        priceDetail: 'Start here if rebook retention is the gap',
        features: [
          'Rebook nudges at the right interval per service',
          'Lapsed regulars warmed up before they go cold',
          'Review ask the day after a finished colour',
        ],
      },
    ],
  };

  const exploreData = {
    badge: 'Related',
    description: 'The other parts of the system salons tend to lean on most.',
    cards: [
      {
        icon: Wrench,
        title: 'Smart Website Systems',
        description: 'Holds enquiry, booking and rebook flow together.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'Booking & Rebooking',
        description: 'Deposits, reminders and the waitlist on a tap.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Compass,
        title: 'Local Authority & SEO',
        description: 'Visibility for "hair salon near me" the moment somebody searches.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Reviews',
        description: 'Turns finished colour into proof on Maps and search.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'What salon owners tend to ask first',
    description: 'Direct, no hedging.',
    faqs: [
      {
        question: 'Will the rebook nudge feel pushy to a long-term regular?',
        answer:
          'No. The message is short, warm and reads like the front desk noticed. Most regulars appreciate it because they had also forgotten to rebook.',
      },
      {
        question: 'How does the waitlist actually work on a Friday cancellation?',
        answer:
          'The slot fires to a tagged group of regulars who said they wanted Saturdays. First reply gets it. The chair fills before anyone in the salon has to think.',
      },
      {
        question: 'Can it actually reply at 11pm without sounding like a bot?',
        answer:
          'Yes. The reply reads like the salon, gives availability, and offers a deposit link. The client books before bed instead of asking two more salons.',
      },
      {
        question: 'Will it interrupt the team mid-cut?',
        answer:
          'No. It runs in the background. The team only sees the booking once it is locked.',
      },
      {
        question: 'When does the review request go out?',
        answer:
          'The day after a finished colour, while she is still pleased. That is the moment with the highest yield.',
      },
      {
        question: 'Do we need a brand new website?',
        answer:
          'Usually not. The bottleneck is what happens after the form is sent.',
      },
    ],
  };

  return {
    slug: 'hair-salons',
    industries: ['hair-salon'],
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
      title: 'Hair Salons \u2014 Stop Regulars Drifting, Fill The Empty Midweek | MindWP',
      description:
        'For hair salons whose six-week regulars quietly become eleven-week regulars and whose Tuesdays sit empty. Rebook nudges, waitlist on a tap, late-night DM capture.',
      keywords: [
        'hair salon rebooking automation',
        'hair salon waitlist system',
        'hair salon late night DM reply',
        'salon client retention',
        'hair salon review automation',
      ],
      canonical: '/industries/beauty-personal-care/hair-salons',
    },
    hero: { ...heroData },
    operatingPatterns: operatingPatternsData,
    spectrum: spectrumData,
    workflowExamples: workflowExamplesData,
    pathways: pathwaysData,
    explore: exploreData,
    faq: faqData,
    cta: {
      title: 'Tell us about the regulars who quietly drifted',
      description:
        'Walk us through the last regular who stopped coming and the last Tuesday that sat empty. We will tell you what to plug first.',
    },
  };
}


export const hairSalonsIndustryPageData: IndustryPageData =
  buildHairSalonsIndustryPageData();
