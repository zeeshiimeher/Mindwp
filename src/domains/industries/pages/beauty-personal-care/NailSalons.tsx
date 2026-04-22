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

function buildNailSalonsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Nail Salons',
    title: 'She Asked About Builder Gel On a Friday Night. By Saturday She’s Booked Two Streets Over.',
    description:
      'Nail salons don’t lose clients on the manicure — they lose them in the messages. Late DMs nobody answered. Empty Wednesdays nobody filled. No-shows nobody reminded. We put the system in place that catches every booking before it walks past you.',
    list: [
      'DMs answered by whoever replies first',
      'Empty midweek slots',
      'No-shows with no deposit',
      'Regulars who quietly stopped coming',
    ],
    cssPrefix: 'nail-salons-hero',
  };

  const imageStripData = {
    badge: 'How Bookings Actually Happen',
    title: 'Most enquiries arrive on Instagram, after hours, asking about a specific set',
    description:
      'BIAB. Builder gel. Russian manicure. Soak-off and re-do. People know what they want and they want a price and a slot — fast. Whichever salon answers first usually gets the booking.',
    items: [
      {
        title: 'Service choice and enquiries',
        image: '/images/placeholders/service-card-1.svg',
        alt: 'Abstract placeholder image representing nail salon enquiries',
      },
      {
        title: 'Booking and time-slot selection',
        image: '/images/placeholders/service-card-2.svg',
        alt: 'Abstract placeholder image representing nail salon booking flow',
      },
      {
        title: 'Reminders and visit preparation',
        image: '/images/placeholders/service-card-3.svg',
        alt: 'Abstract placeholder image representing nail salon reminder flow',
      },
      {
        title: 'Reviews and repeat visits',
        image: '/images/placeholders/service-card-4.svg',
        alt: 'Abstract placeholder image representing nail salon repeat visits',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'nail-salons-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where The Bookings Slip',
    title: 'The set is fine. The bit between the DM and the diary is where it goes wrong.',
    description:
      'Same handful of leaks in nearly every nail salon. Once you see them, you can’t unsee them.',
    benefits: [
      {
        icon: Sparkles,
        title: '“How much for BIAB infill on Saturday?” sat unread until Sunday',
        description:
          'She didn’t wait. The salon that replied at 8pm got her in.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Wednesday is half-empty and nobody told the regulars',
        description:
          'Two technicians, three clients all afternoon. The slots could’ve been filled with one message.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'A Saturday no-show with nothing on deposit',
        description:
          'Two hours of the chair, gone. A reminder the night before would have caught it.',
        iconType: 'accent' as const,
      },
      {
        icon: MapPinned,
        title: 'The salon down the road has 600 reviews. You have 47.',
        description:
          'Hundreds of beautiful sets. Almost no one was ever asked to write anything.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to catch enquiries, fill the diary, and keep clients coming back',
    description:
      'Each piece does one job. Together they stop bookings from slipping while you’re mid-set.',
    featureCategories: [
      {
        title: 'Reply to every DM and missed call inside a minute',
        description:
          'Late-night messages get an instant answer with prices, options, and a booking link — even at 11pm.',
        icon: MessageSquare,
        features: [
          'Instant replies on Instagram, Facebook, web, missed calls',
          'Service info and pricing answered up front',
          'Booking link in the same message',
        ],
      },
      {
        title: 'Let clients book themselves without back-and-forth',
        description:
          'They pick the technician, the service, the slot — and pay a deposit at the same time.',
        icon: Calendar,
        features: [
          'Online booking by service and tech',
          'Deposits taken at booking',
          'No more 20-message threads to lock in a Saturday',
        ],
      },
      {
        title: 'Send the reminders nobody has time to send',
        description:
          'A reminder the day before. A “see you in an hour” on the morning. No-shows drop without nagging.',
        icon: Bell,
        features: [
          'Reminders the day before and morning of',
          'Easy reschedule link instead of a no-show',
          'Cancellations re-offered to the waitlist',
        ],
      },
      {
        title: 'Bring clients back without anyone remembering to chase',
        description:
          'A “time for your infill?” nudge at the right interval. A review request after every visit.',
        icon: ShieldCheck,
        features: [
          'Rebooking nudges at the right interval',
          'Review requests after every appointment',
          'Quiet days filled by past clients',
        ],
      },
      {
        title: 'Show up when local people search for nails',
        description:
          'Service pages, photos, and Google profile lined up so you appear before the salon up the road.',
        icon: Search,
        features: [
          'Pages for the services you actually offer',
          'Photos that do the selling for you',
          'Found on Maps for local searches',
        ],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'What Actually Changes',
    title: 'A normal week in the salon, before and after',
    description: 'The vibe stays. The bits that drain the team and lose bookings get fixed.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How it runs now',
        items: [
          'A BIAB DM at 9pm sat unread. She booked someone else.',
          'Wednesday is half-empty and nobody told the regulars.',
          'A Saturday no-show. No deposit. No reminder.',
          '“My nails are amazing” — said by 200 people, written by 47.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it runs after',
        items: [
          'The 9pm DM gets a friendly reply with prices and a booking link inside a minute.',
          'Quiet days get offered out to past clients automatically. The diary fills itself.',
          'A reminder fires the day before. A small deposit secures the slot. No-shows drop.',
          'Every happy client gets asked. Reviews catch up to the work.',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Where Most Salons Start',
    title: 'Three stages — most salons feel one of them more than the others',
    description: 'Pick whichever costs you the most bookings right now.',
    packages: [
      {
        name: 'Catch every enquiry, day or night',
        description:
          'For when DMs sit until morning and the booking goes to whoever replied first.',
        price: 'Stage 1',
        priceDetail: 'Start here if enquiries are leaking overnight',
        features: [
          'Instant replies on DMs, calls, forms',
          'Pricing and options answered up front',
          'Booking link in the same message',
        ],
      },
      {
        name: 'Fill the diary and stop the no-shows',
        description: 'For when midweek sits empty and Saturdays sit half-cancelled.',
        price: 'Stage 2',
        priceDetail: 'Start here if the diary is the biggest leak',
        features: [
          'Self-serve booking by tech and service',
          'Deposits taken at booking',
          'Reminders and easy reschedule links',
        ],
        popular: true,
      },
      {
        name: 'Bring regulars back and turn them into proof',
        description:
          'For when the work is great but reviews and rebookings happen by accident.',
        price: 'Stage 3',
        priceDetail: 'Start here if reviews and retention are the weak spot',
        features: [
          'Review requests after every appointment',
          'Rebooking nudges at the right interval',
          'Quiet slots offered out automatically',
        ],
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Real Situations',
    title: 'A few moments where the difference shows up',
    description: 'Small moments on the floor that used to need someone to remember to do them.',
    workflows: [
      {
        trigger: 'A new client DMs at 10pm asking about a full set in builder gel.',
        actions: [
          'She gets a friendly reply inside a minute with rough pricing and a booking link',
          'She picks a slot herself, deposit included',
          'By morning she’s in the diary, not the competitor’s',
        ],
      },
      {
        trigger: 'A Saturday client cancels last minute.',
        actions: [
          'The slot is offered to the waitlist automatically',
          'A regular grabs it within the hour',
          'The chair stays full, nobody made ten calls',
        ],
      },
      {
        trigger: 'A BIAB client leaves happy after her appointment.',
        actions: [
          'A review request goes out a few hours later',
          'Three weeks on, an “time for your infill?” nudge appears',
          'She rebooks without anyone at the salon having to remember',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'nail-salons-workflow-examples',
  };

  const caseStudiesData = {
    category: 'beauty-personal-care' as const,
    title: 'Related Case Studies',
    description:
      'Examples of how the system supports salons and beauty-led businesses in this category.',
    limit: 2,
  };

  const exploreData = {
    badge: 'Related',
    description:
      'The other parts of the system that come up most often for nail salons trying to keep the diary full.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description:
          'See the core system layer that holds service clarity, booking, and follow-up together.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'Booking & Scheduling System',
        description: 'Support nail salon booking, reminders, and cleaner diary handling.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen local service visibility and booking trust signals.',
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
    title: 'Things nail salons usually ask',
    description: 'Straight answers about how this fits a busy nail floor.',
    faqs: [
      {
        question: 'My DMs are out of control. Will this actually help?',
        answer:
          'Yes — every DM, missed call, and form gets an instant reply with prices, options, and a booking link. You stop losing bookings to whoever replied at 9pm.',
      },
      {
        question: 'Will clients really book themselves online?',
        answer:
          'Most do. They pick the tech, the service, and the slot — and a deposit comes off at the same time. The phone gets quieter, the diary gets fuller.',
      },
      {
        question: 'Can I take deposits without scaring clients off?',
        answer:
          'Yes — a small deposit at booking is normal in nails now and almost nobody complains. It pays for itself in one prevented no-show.',
      },
      {
        question: 'How do reminders cut no-shows?',
        answer:
          'A friendly reminder the day before and the morning of catches almost all of them. Anyone who can’t make it gets a reschedule link instead of just disappearing.',
      },
      {
        question: 'How do I get more reviews without nagging?',
        answer:
          'A review request goes out a few hours after the appointment, while she’s still posting her nails. That’s the moment people actually leave one.',
      },
      {
        question: 'Do I need a brand new website?',
        answer:
          'Usually not. We look at what you have first. The gap is usually everything that happens after someone tries to book — not the site itself.',
      },
    ],
  };

  return {
    slug: 'nail-salons',
    industries: ['nail-salon'],
    systems: [
      'smart-website-systems',
      'crm-automation',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['booking-automation', 'no-show-reduction', 'review-generation'],
    type: 'detail',
    parentSlug: 'beauty-personal-care',
    seo: {
      title: 'Nail Salons — Stop Losing DMs, No-Shows, and Quiet Midweeks | MindWP',
      description:
        'For nail salons whose DMs sit unanswered overnight, whose midweek sits empty, and whose reviews don’t reflect the work. We put the system in place to catch every booking, fill the diary, and bring clients back.',
      keywords: [
        'nail salon website design',
        'nail salon booking website system',
        'nail salon marketing system',
        'nail salon seo services',
        'nail salon reputation management system',
      ],
      canonical: '/industries/beauty-personal-care/nail-salons',
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
      title: 'Tell us where the bookings are slipping',
      description:
        'If DMs go quiet overnight, if midweek sits empty, or if reviews never get asked for — walk us through how the salon runs and we’ll show you the first thing worth fixing.',
    },
  };
}

export const nailSalonsIndustryPageData: IndustryPageData = buildNailSalonsIndustryPageData();
