import {
  Bell,
  Calendar,
  Clock3,
  MapPinned,
  MessageSquare,
  Scissors,
  Search,
  ShieldCheck,
  Star,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildHairSalonsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Hair Salons',
    title: 'She Messaged About a Balayage at 9pm. By Morning She’s Booked Somewhere Else.',
    description:
      'Salons don’t lose clients on the chair — they lose them in the inbox. Late-night DMs that nobody saw. “Which service is right for me?” that nobody answered. Empty Tuesdays nobody filled. We put the system in place that catches every booking before it walks past you.',
    list: [
      'DMs that go unanswered overnight',
      'No-shows nobody reminded',
      'Empty slots nobody offered out',
      'Regulars who quietly stopped rebooking',
    ],
    cssPrefix: 'hair-salons-hero',
  };

  const imageStripData = {
    badge: 'How Bookings Actually Happen',
    title: 'Most enquiries arrive after the salon has shut for the day',
    description:
      'Instagram DMs at 10pm. Calls during a colour. Texts asking “how much for highlights?” People decide quickly. The salons that reply first usually win the booking, and the ones that wait until tomorrow usually don’t.',
    items: [
      {
        title: 'New client enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing hair salon new client enquiries',
      },
      {
        title: 'Service selection and booking',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing hair salon service booking',
      },
      {
        title: 'Reminder and arrival flow',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing hair salon reminder flow',
      },
      {
        title: 'Reviews and rebooking',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing hair salon reviews and rebooking',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'hair-salons-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where The Bookings Slip',
    title: 'The chair work is fine. The bit between the DM and the diary is where it goes wrong.',
    description:
      'Same handful of gaps in nearly every salon. Once you see them, you can’t unsee them.',
    benefits: [
      {
        icon: Scissors,
        title: '“How much for a balayage on hair like mine?” sat unanswered overnight',
        description:
          'By the time someone opens Instagram in the morning, she’s already booked the salon that replied at 9.30pm.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Tuesday afternoon is empty. Nobody told the regulars.',
        description:
          'Three stylists, two clients, a quiet panic. The slots could’ve been filled with a single message.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'No-shows on a Saturday morning, with a deposit nobody took',
        description:
          'A reminder the night before would have caught it. Nobody had time to send one.',
        iconType: 'accent' as const,
      },
      {
        icon: MapPinned,
        title: 'The salon two streets over has 400 reviews. You have 38.',
        description:
          'Hundreds of brilliant cuts. Almost no one was ever asked. Locally you look quieter than you actually are.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to catch enquiries, fill the diary, and keep clients coming back',
    description:
      'Each piece does one job. Together they stop bookings from slipping while the team is on the floor.',
    featureCategories: [
      {
        title: 'Reply to every DM and missed call inside a minute',
        description:
          'Late-night messages get an answer with prices, options, and a link to book — even at 11pm.',
        icon: MessageSquare,
        features: [
          'Instant replies on Instagram, Facebook, web, missed calls',
          'Service info and pricing answered up front',
          'Booking link in the same message',
        ],
      },
      {
        title: 'Let clients book themselves without phone tag',
        description:
          'They pick a stylist, a service, and a slot that fits. Confirmations and deposits go out automatically.',
        icon: Calendar,
        features: [
          'Online booking by stylist and service',
          'Deposits taken at the point of booking',
          'Diary stays full, front desk stays free',
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
          'A “time for your next colour?” nudge at the right interval. A review request after every visit.',
        icon: ShieldCheck,
        features: [
          'Rebooking nudges at the right interval',
          'Review requests after every appointment',
          'Quiet days filled by past clients',
        ],
      },
      {
        title: 'Show up when local people search for a stylist',
        description:
          'Service pages, stylist profiles, and Google profile lined up so you appear before the salon two streets over.',
        icon: Search,
        features: [
          'Pages for the services you actually do',
          'Stylist profiles that build trust',
          'Found on Maps for local searches',
        ],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'What Actually Changes',
    title: 'A normal week in the salon, before and after',
    description:
      'The personal feel stays. The bits that drain the team and lose bookings get fixed.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How it runs now',
        items: [
          'A balayage DM at 9pm sat until morning. She booked someone else.',
          'Tuesday is half-empty and nobody told the regulars.',
          'A Saturday no-show. No deposit. No reminder.',
          '“Amazing cut” — said by 200 people, written by 38.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it runs after',
        items: [
          'The 9pm DM gets a friendly reply with prices and a booking link inside a minute.',
          'Quiet days get offered out to past clients automatically. The diary fills itself.',
          'A reminder fires the day before and morning of. No-shows drop.',
          'Every happy client gets asked. The reviews catch up to the work.',
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
          'For when DMs and missed calls keep going to whoever replies first — and that’s rarely you.',
        price: 'Stage 1',
        priceDetail: 'Start here if enquiries are leaking overnight',
        features: [
          'Instant replies on DMs, calls, and forms',
          'Pricing and options answered up front',
          'Booking link in the same message',
        ],
      },
      {
        name: 'Fill the diary and stop the no-shows',
        description:
          'For when Tuesdays sit empty and Saturdays sit half-cancelled.',
        price: 'Stage 2',
        priceDetail: 'Start here if the diary is the biggest leak',
        features: [
          'Self-serve booking by stylist and service',
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
          'Review requests after every visit',
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
        trigger: 'A new client DMs at 9pm asking about a balayage on dark hair.',
        actions: [
          'She gets a friendly reply inside a minute with rough pricing and a booking link',
          'A consultation slot is offered if needed',
          'By morning she’s in the diary, not the competitor’s',
        ],
      },
      {
        trigger:
          'A Saturday client cancels last minute.',
        actions: [
          'The slot is offered to the waitlist automatically',
          'A regular grabs it within the hour',
          'The chair stays full, nobody had to make ten calls',
        ],
      },
      {
        trigger:
          'A colour client leaves happy after her appointment.',
        actions: [
          'A review request goes out a few hours later',
          'Six weeks on, a “time for your next colour?” nudge appears',
          'She rebooks without anyone at the salon having to remember',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'hair-salons-workflow-examples',
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
      'The other parts of the system that come up most often for salons trying to keep the diary full and the chairs busy.',
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
        description: 'Support salon booking, reminders, and clearer diary handling.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen local service visibility and salon trust signals.',
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
    title: 'Things salons usually ask',
    description: 'Straight answers about how this fits a busy salon floor.',
    faqs: [
      {
        question: 'My DMs are out of control. Will this actually help?',
        answer:
          'Yes — every DM, missed call, and form gets an instant reply with prices, options, and a booking link. You stop losing bookings to whoever replied at 9pm.',
      },
      {
        question: 'Will clients really book themselves online?',
        answer:
          'Most do, given the option. They can pick the stylist, the service, and the slot — and pay a deposit at the same time. The front desk gets quieter, not busier.',
      },
      {
        question: 'How do reminders cut no-shows?',
        answer:
          'A friendly reminder the day before and the morning of catches almost all of them. Anyone who can’t make it gets a reschedule link instead of just not turning up.',
      },
      {
        question: 'Can I take deposits without scaring clients off?',
        answer:
          'Yes — a small deposit at booking is normal now and almost nobody complains. It pays for itself in one prevented no-show.',
      },
      {
        question: 'How do I get more reviews without nagging?',
        answer:
          'A review request goes out a few hours after the appointment, when she’s still loving her hair. That’s the moment people actually leave one.',
      },
      {
        question: 'Do I need a brand new website?',
        answer:
          'Usually not. We look at what you have first. Often the gap is everything that happens after someone tries to book — not the site itself.',
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
    topics: ['booking-automation', 'no-show-reduction', 'review-generation'],
    type: 'detail',
    parentSlug: 'beauty-personal-care',
    seo: {
      title: 'Hair Salons — Stop Losing DMs, No-Shows, and Quiet Tuesdays | MindWP',
      description:
        'For salons whose late-night DMs sit until morning, whose Tuesdays sit empty, and whose reviews don’t reflect the work. We put the system in place to catch every booking, fill the diary, and bring clients back.',
      keywords: [
        'hair salon website design',
        'salon booking website system',
        'hair salon marketing system',
        'salon seo services',
        'salon reputation management system',
      ],
      canonical: '/industries/beauty-personal-care/hair-salons',
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
        'If DMs go quiet overnight, if Tuesdays sit empty, or if reviews never get asked for — walk us through how the salon runs and we’ll show you the first thing worth fixing.',
    },
  };
}

export const hairSalonsIndustryPageData: IndustryPageData = buildHairSalonsIndustryPageData();
