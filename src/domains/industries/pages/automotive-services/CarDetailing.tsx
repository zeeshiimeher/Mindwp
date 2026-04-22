import {
  Bell,
  Calendar,
  Clock3,
  MapPinned,
  MessageSquare,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildCarDetailingIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Car Detailing Businesses',
    title: 'Someone DMs You About a Wash. Three Days Later, They’ve Booked Elsewhere.',
    description:
      'Most detailing enquiries come at strange hours — Instagram DMs, late-night WhatsApps, the contact form on your phone while you’re finishing a correction. The reply takes too long, the package question never gets answered, and the slot quietly gets given to someone faster.',
    list: [
      'DMs that sit unread',
      'Quote questions never answered',
      'No-shows on busy Saturdays',
      'Repeat customers nobody chased',
    ],
    cssPrefix: 'car-detailing-hero',
  };

  const imageStripData = {
    badge: 'How Detailing Work Comes In',
    title: 'Most enquiries arrive on a phone — evenings, weekends, while you’re mid-job',
    description:
      'Interior valets, full corrections, ceramic coatings, monthly maintenance. People want to know if you can fit them in this Saturday and what the price actually is. The longer they wait for a reply, the colder the booking.',
    items: [
      {
        title: 'Package and service enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing car detailing package enquiries',
      },
      {
        title: 'Booking and slot planning',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing car detailing booking flow',
      },
      {
        title: 'Preparation and handoff details',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing car detailing preparation guidance',
      },
      {
        title: 'Reviews and repeat visits',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing car detailing reviews and repeat visits',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'car-detailing-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where The Work Slips',
    title: 'It’s not the work. It’s the bit before and after.',
    description:
      'You can’t answer Instagram with two hands deep in a polish. So the message sits. So does the booking.',
    benefits: [
      {
        icon: Sparkles,
        title: '“What’s the price for a full detail?” — nobody answers',
        description:
          'They DM. You’re mid-job. By the time you wipe your hands and reply, they’ve booked someone who answered in five minutes.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Saturday is fully booked, then two no-shows',
        description:
          'No reminder went out. They forgot. The slot sat empty while three other people would have taken it.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Regulars used to come every six weeks. Now they don’t.',
        description:
          'Nobody nudged them. Life got in the way. The repeat demand quietly dried up.',
        iconType: 'accent' as const,
      },
      {
        icon: MapPinned,
        title: 'You post incredible before-and-afters. Reviews don’t catch up.',
        description:
          'The work is amazing. Online, your Google profile looks quieter than the cheaper unit down the road.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to handle every DM, deposit, and repeat visit',
    description:
      'Each piece does one job. Together they stop bookings from quietly going to whoever answered fastest.',
    featureCategories: [
      {
        title: 'Catch every enquiry, even when your hands are full',
        description:
          'DMs, web forms, calls, missed calls — all land in one inbox with the package they asked about already noted.',
        icon: MessageSquare,
        features: [
          'Instagram and form messages in one place',
          'Missed-call text-back inside a minute',
          'Package and vehicle captured up front',
        ],
      },
      {
        title: 'Make booking feel as simple as picking a slot',
        description:
          'A clear page that shows packages, prices, and the next free Saturday. Deposits taken if you want them. Reminders that fire on their own.',
        icon: Calendar,
        features: [
          'Slots customers can pick themselves',
          'Optional deposit at booking',
          'Reminders the day before to kill no-shows',
        ],
      },
      {
        title: 'Send prep and arrival notes without typing them every time',
        description:
          'Where to bring the car, when, what to take out of it. Same message, every time, sent automatically.',
        icon: Bell,
        features: [
          'Prep instructions sent on confirmation',
          'Arrival reminder day-of',
          'Less back-and-forth on the morning',
        ],
      },
      {
        title: 'Bring regulars back without chasing them yourself',
        description:
          'Six-week nudges, ceramic top-up reminders, seasonal offers — all going out on their own. Repeat work compounds.',
        icon: ShieldCheck,
        features: [
          'Maintenance reminders timed per package',
          'Review requests after each visit',
          'Past customers nudged at the right moment',
        ],
      },
      {
        title: 'Get found when local people search for what you do',
        description:
          'Pages for “ceramic coating near me”, your Google profile sorted, before-and-after photos used as proof.',
        icon: Search,
        features: [
          'Service pages that match what people type',
          'Google Business Profile sorted properly',
          'Local reach customers can actually find',
        ],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'What Actually Changes',
    title: 'A normal weekend at the unit, before and after',
    description:
      'The work stays the same. What changes is everything around the work that used to depend on you having a free hand.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How it runs now',
        items: [
          '“How much for a full detail?” sits in your DMs for four hours.',
          'Saturday morning, two no-shows, slots empty.',
          'Same regular hasn’t booked since March. Nobody noticed.',
          'Brilliant correction job done Friday. No review request goes out.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it runs after',
        items: [
          'They get a quick reply with the price guide and a booking link inside minutes.',
          'Slot booked through the link with a deposit. Reminder fires the day before. Cars actually turn up.',
          'Six weeks after their last visit, an automatic nudge goes out. They book again.',
          'A review request goes out the day they collect. Reviews keep stacking quietly.',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Where Most Detailers Start',
    title: 'Three stages — most detailers feel one of them more than the others',
    description: 'Pick whichever is leaking the most work. The rest can follow.',
    packages: [
      {
        name: 'Stop enquiries from sitting in your DMs',
        description:
          'For when most messages come in while you’re working and the reply lands too late to win the booking.',
        price: 'Stage 1',
        priceDetail: 'Start here if speed of reply is the main issue',
        features: [
          'One inbox for DMs, forms, and calls',
          'Auto-reply with package guide',
          'Missed-call text-back',
        ],
      },
      {
        name: 'Lock down the schedule and kill no-shows',
        description:
          'For when Saturdays are losing slots to people who forget they ever booked.',
        price: 'Stage 2',
        priceDetail: 'Start here if no-shows are the bottleneck',
        features: [
          'Self-serve booking with deposits if you want them',
          'Reminders the day before',
          'Prep notes sent automatically',
        ],
        popular: true,
      },
      {
        name: 'Bring regulars back and turn jobs into reviews',
        description:
          'For when the work is great but reputation and repeat demand aren’t catching up.',
        price: 'Stage 3',
        priceDetail: 'Start here if reviews and repeat visits are the weak spot',
        features: [
          'Six-week and seasonal nudges',
          'Ceramic top-up reminders',
          'Review requests after every visit',
        ],
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Real Situations',
    title: 'A few moments where the difference shows up',
    description: 'Small handoffs that used to depend on you being free to type a reply.',
    workflows: [
      {
        trigger:
          'Someone DMs at 9pm asking the price of a full interior detail.',
        actions: [
          'They get an instant reply with the package guide and a link to book',
          'The enquiry is logged with the package they asked about',
          'You see it in the morning, not buried in 30 unread DMs',
        ],
      },
      {
        trigger:
          'A booking is made for Saturday and you don’t want another no-show.',
        actions: [
          'Confirmation goes out with prep notes',
          'A reminder fires the day before',
          'Optional deposit means the slot is held seriously',
        ],
      },
      {
        trigger:
          'A regular hasn’t booked since their last ceramic top-up.',
        actions: [
          'A friendly nudge goes out at the right interval',
          'Past customer comes back without you remembering',
          'Review request after the visit keeps reputation climbing',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'car-detailing-workflow-examples',
  };

  const caseStudiesData = {
    category: 'automotive-services' as const,
    title: 'Related Case Studies',
    description:
      'Examples of how the system supports automotive service businesses in this category.',
    limit: 2,
  };

  const exploreData = {
    badge: 'Related',
    description:
      'The other parts of the system that come up most often for detailers trying to win Saturdays back.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description:
          'See the core system layer that holds package clarity, booking, and follow-up together.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'Booking & Scheduling System',
        description: 'Support detailing bookings, reminders, and clearer appointment handling.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen local service visibility and detailing trust signals.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description: 'Turn good appointments into stronger reviews and repeat trust.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Things detailers usually ask',
    description: 'Straight answers about how this fits into a unit that’s already busy.',
    faqs: [
      {
        question: 'Most of my work comes through Instagram. Will it actually catch DMs?',
        answer:
          'Yes — DMs land in the same inbox as web forms and calls. You stop scrolling through three apps to find who asked what.',
      },
      {
        question: 'Will the auto-reply feel cold?',
        answer:
          'No. The first reply is short, written like you’d actually message a customer, and just buys the time you need to come back properly. The real conversation still happens with you.',
      },
      {
        question: 'Can I take deposits to stop no-shows?',
        answer:
          'Yes — deposits at booking, full payment if you prefer. Reminders go out the day before either way. No-shows drop quickly.',
      },
      {
        question: 'What about regulars who used to book every six weeks?',
        answer:
          'They get a friendly nudge at the right interval. A lot of detailers find this brings back more revenue than any new ad.',
      },
      {
        question: 'Do I have to ask for reviews myself?',
        answer:
          'No. The request goes out automatically after each visit. Your Google profile starts catching up to the actual standard of the work.',
      },
      {
        question: 'Do I need a brand new website?',
        answer:
          'Usually not. We look at what you’ve got first. Often the site is fine — the gap is everything that happens after the message comes in.',
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
      title: 'Car Detailing — Stop Losing Saturdays to Slow Replies and No-Shows | MindWP',
      description:
        'For detailers where DMs sit unread, no-shows kill weekends, and regulars stop coming back. We put the booking, reminder, and follow-up flow in place so the work already coming in actually books.',
      keywords: [
        'car detailing website design',
        'car detailing booking system',
        'car detailing marketing system',
        'car detailing seo services',
        'car detailing reputation management system',
      ],
      canonical: '/industries/automotive-services/car-detailing',
    },
    hero: {
      ...heroData,
    },
    imageStrip: imageStripData,
    operatingPatterns: operatingPatternsData,
    systemLayers: systemLayersData,
    comparison: comparisonData,
    pathways: pathwaysData,
    workflowExamples: workflowExamplesData,
    caseStudies: caseStudiesData,
    explore: exploreData,
    faq: faqData,
    cta: {
      title: 'Tell us where the work is slipping',
      description:
        'If DMs sit unread, no-shows hit hard, or regulars just stop coming — walk us through how the unit runs and we’ll show you the first thing worth fixing.',
    },
  };
}

export const carDetailingIndustryPageData: IndustryPageData = buildCarDetailingIndustryPageData();
