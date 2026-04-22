import {
  Compass,
  Inbox,
  Instagram,
  MessageCircle,
  RefreshCcw,
  Star,
  Wrench,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildCarDetailingIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Detailers',
    title: 'Saturday Morning DM. Read at 6pm. They Booked Someone Else by Friday.',
    description:
      'Most detailing enquiries do not arrive on a phone call. They arrive on Instagram, on a contact form, on a late-night text. Whoever replies on Sunday morning gets the slot. The detailer who is heads-down in a foam bath usually does not.',
    list: ['Weekend DMs', 'Lost regulars', 'Ghost bookings'],
    cssPrefix: 'car-detailing-hero',
  };

  const comparisonData = {
    badge: 'A Normal Weekend',
    title: 'Same weekend, different inbox',
    description:
      'You still spend Saturday in the bay. What changes is what happens to the messages that landed while you were elbow-deep in a wheel arch.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How the weekend runs now',
        items: [
          'Sat 9am DM \u2014 "do you have anything next weekend?" Read at 6pm.',
          'Web form Saturday lunchtime \u2014 ghosted by the time it gets a reply.',
          'A regular from August has not booked since. Nobody nudged them.',
          'Three details done Saturday. No review asked for.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How the weekend runs after',
        items: [
          'Sat 9am DM \u2014 first reply within minutes with a slot link.',
          'Web form Saturday lunchtime \u2014 same fast reply, same booking link.',
          'August regular \u2014 a quiet nudge fires before they drift to the next detailer.',
          'Three details done Saturday. Three review asks fire that evening.',
        ],
      },
    ],
  };

  const operatingPatternsData = {
    badge: 'Where The Diary Leaks',
    title: 'A few honest moments where bookings quietly leave the building',
    description:
      'A detailer\u2019s pinch point is rarely the work. It is the half hour between an enquiry and a reply.',
    benefits: [
      {
        icon: Instagram,
        title: 'DMs arrive when you are in the bay',
        description:
          'Instagram, Facebook, the form on the site \u2014 all on phones, almost all at the weekend, almost all read too late.',
        iconType: 'primary' as const,
      },
      {
        icon: MessageCircle,
        title: 'A booking that needs eight messages',
        description:
          'They want a slot. You want to know what car. They want a price. You want a postcode. By the eighth text they go quiet.',
        iconType: 'secondary' as const,
      },
      {
        icon: RefreshCcw,
        title: 'Regulars who quietly stopped',
        description:
          'The customer who used to come every quarter has not booked since spring. They did not leave. They just got busy and nobody nudged them.',
        iconType: 'accent' as const,
      },
      {
        icon: Star,
        title: 'A wall of finished cars, almost no proof',
        description:
          'The reels look good. The reviews do not match the work. The detailer two postcodes over has triple your stars.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const pathwaysData = {
    badge: 'Where Most Detailers Start',
    title: 'You do not have to fix the whole weekend at once',
    description:
      'Most detailers feel one of these three louder than the others. Pick the one that costs you the most slots and start there.',
    packages: [
      {
        name: 'Catch the weekend DMs and forms',
        description:
          'For when most enquiries arrive on a phone while you are in the bay and most of them go cold.',
        price: 'Stage 1',
        priceDetail: 'Start here if first replies are the loudest leak',
        features: [
          'One inbox for DMs, forms, missed calls and texts',
          'Auto first-reply that reads like a real person',
          'Vehicle and request captured before the back-and-forth',
        ],
      },
      {
        name: 'Take the friction out of booking the slot',
        description:
          'For when bookings work fine until the eighth text \u2014 and then quietly stop.',
        price: 'Stage 2',
        priceDetail: 'Start here if booking is where it slows down',
        features: [
          'Self-serve weekend slots with the right packages',
          'Reminder the day before so cars actually arrive',
          'Arrival window included in the same message',
        ],
        popular: true,
      },
      {
        name: 'Bring back regulars and stack reviews',
        description:
          'For when the diary should fill itself with returning customers \u2014 but does not.',
        price: 'Stage 3',
        priceDetail: 'Start here if repeats and reputation are the gap',
        features: [
          'Quiet nudges to past customers on the right interval',
          'Review ask the evening of the detail',
          'Reviews that land where local drivers actually search',
        ],
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Real Moments',
    title: 'Three Saturday moments and what changes',
    description:
      'Same DM that opened the page. This is what happens to it after.',
    workflows: [
      {
        trigger: 'Sat 9:14am \u2014 Instagram DM: "anything for next weekend?"',
        actions: [
          'A real-sounding reply goes back inside minutes asking the car and offering a slot link',
          'They pick a slot from the link without another five messages',
          'You see it on the diary the moment you put the lance down',
        ],
      },
      {
        trigger: 'A repeat customer from May has not booked since',
        actions: [
          'A short, low-pressure nudge goes out: "your last detail was four months ago, want a slot before the salt season starts?"',
          'They book without you remembering they were due',
          'The Saturday diary fills with people who already trust the work',
        ],
      },
      {
        trigger: '5:30pm \u2014 last car of the day collected, owner walks around it grinning',
        actions: [
          'A short review request lands on their phone that evening',
          'They actually leave one, because they were just asked at the right moment',
          'The reels and the reviews finally match',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'car-detailing-workflow-examples',
  };

  const exploreData = {
    badge: 'Related',
    description: 'The other parts of the system detailers tend to lean on.',
    cards: [
      {
        icon: Wrench,
        title: 'Smart Website Systems',
        description: 'Holds enquiry, booking and follow-up together so the weekend stops leaking.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Inbox,
        title: 'AI Lead Handling',
        description: 'First-reply infrastructure for DMs, forms and weekend texts.',
        href: '/services/ai-lead-handling',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Compass,
        title: 'Local Authority & SEO',
        description: 'Visibility for "car detailing near me" before the next detailer gets the click.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Reviews',
        description: 'Turn finished details into the proof the next driver actually looks at.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'What detailers tend to ask first',
    description: 'Direct, no hedging.',
    faqs: [
      {
        question: 'I am in the bay all weekend. How much extra is this for me?',
        answer:
          'Almost none after setup. The first reply, the slot link, and the reminders fire on their own. The bit where you spend Sunday morning catching up on DMs goes away.',
      },
      {
        question: 'My customers like a personal feel. Won\u2019t this sound automated?',
        answer:
          'No. The first reply is short and reads like the kind of message you would actually send between cars. It is not a bot script.',
      },
      {
        question: 'Do I have to use someone else\u2019s booking page?',
        answer:
          'No. The slots can sit on your own site and look like the rest of your work. It is a link in a message, not a third-party tool people get bounced to.',
      },
      {
        question: 'Will it nudge regulars without being annoying?',
        answer:
          'Yes. The nudge fires on a sensible interval and reads like something a friendly detailer would actually say. It is opt-out and rarely complained about.',
      },
      {
        question: 'How do reviews get asked for without it feeling pushy?',
        answer:
          'A short, friendly message goes out the evening of the detail when the customer is happiest. No follow-up nag if they do not reply.',
      },
      {
        question: 'Do I need a brand new website?',
        answer:
          'Usually not. Most of the leak is in what happens after the form is sent, not in the homepage.',
      },
    ],
  };

  return {
    slug: 'car-detailing',
    industries: ['car-detailing'],
    systems: [
      'smart-website-systems',
      'crm-automation',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['booking-systems', 'client-reactivation', 'review-generation'],
    type: 'detail',
    parentSlug: 'automotive-services',
    seo: {
      title: 'Car Detailers \u2014 Stop Losing Saturday DMs To 6pm Reads | MindWP',
      description:
        'For detailers whose weekend DMs sit unread until evening and whose best regulars quietly stopped booking. Faster first reply, easier slots, and quiet nudges that bring repeat work back.',
      keywords: [
        'car detailing booking system',
        'detailing instagram reply automation',
        'car detailing customer retention',
        'detailing review automation',
        'car detailing local SEO',
      ],
      canonical: '/industries/automotive-services/car-detailing',
    },
    hero: { ...heroData },
    comparison: comparisonData,
    operatingPatterns: operatingPatternsData,
    pathways: pathwaysData,
    workflowExamples: workflowExamplesData,
    explore: exploreData,
    faq: faqData,
    cta: {
      title: 'Tell us about last weekend\u2019s DMs',
      description:
        'Walk us through the messages that landed Saturday and never turned into a slot. We will tell you which gap to close first.',
    },
  };
}

export const carDetailingIndustryPageData: IndustryPageData = buildCarDetailingIndustryPageData();
