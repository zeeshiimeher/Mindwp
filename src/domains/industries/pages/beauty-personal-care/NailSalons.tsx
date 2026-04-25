import {
  CheckCircle2,
  Clock,
  Hand,
  MessageCircle,
  MousePointerClick,
  Search,
  Sparkles,
  Star,
  Zap,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildNailSalonsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Nail Salons',
    title: 'She Tapped "Book Now" At 11:43. By 11:46 She Had Booked Somewhere Else.',
    description:
      'Nail clients usually want to book fast, not start a conversation. If booking takes more than a few taps, asks for a phone call, or makes a walk-in wait with no clear next step, they keep moving until somewhere easier lets them claim a slot.',
    list: ['Slow taps', 'Phone-only', 'Walk-in loss'],
    cssPrefix: 'nail-salons-hero',
  };

  const comparisonData = {
    badge: 'Three Taps Vs Three Days',
    title: 'Same client. Two salons. The one that booked her in 30 seconds gets the loyalty.',
    description:
      'At the first booking, she is not choosing based on deep loyalty. She is choosing based on speed, convenience, and whether the appointment felt easy to claim before the next thing in her day started.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How most salons take a booking',
        items: [
          'Instagram says "DM to book". She DMs. Nobody replies until evening.',
          'The website says "call us". She does not want to call.',
          'A walk-in turns up. The chair is full. Nobody offers to text her when one frees up.',
          'After the service, no rebook. No reminder. Hopes she remembers.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it goes when booking is three taps',
        items: [
          '"Book now" leads to a slot list, not a form. She picks one. Done.',
          'A reminder fires the morning of, with a tap-to-reschedule.',
          'A walk-in who could not be seated gets a text the moment a slot opens.',
          'A rebook nudge goes out at week three with her usual service.',
        ],
      },
    ],
  };

  const operatingPatternsData = {
    badge: 'Where Bookings Slip In Seconds',
    title: 'The friction is not in the nails. It is in the booking.',
    description:
      'Nail bookings are often quick decisions made between errands, on a break, or while someone is already walking past the salon. A little friction is enough to lose the slot before anyone notices it was ever there.',
    benefits: [
      {
        icon: MousePointerClick,
        title: '"DM to book" cost a same-day booking',
        description:
          'She was not looking to message back and forth about times. She wanted to tap, see a slot, and get on with her day before lunch finished or the idea wore off.',
        iconType: 'primary' as const,
      },
      {
        icon: Hand,
        title: 'Walk-ins came in, walked out',
        description:
          'There was no space right then and no easy way to hold her for the next opening. She stepped back onto the street, checked two more salons nearby, and the chair stayed empty later anyway.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock,
        title: 'A repeat client never came back at three weeks',
        description:
          'No nudge went out at the usual point and no reminder caught her when she started thinking about a fresh set. By week four she had already squeezed in somewhere else that made booking easier.',
        iconType: 'accent' as const,
      },
    ],
    columns: 3 as const,
  };

  const systemLayersData = {
    badge: 'What We Put In Place',
    title: 'Make booking a tap, make rebook a habit, fill the chair the moment it frees up',
    description:
      'You stay focused on the set in front of you. The friction that costs same-day bookings, missed walk-ins, and weak rebook timing stops sitting in the middle of an already busy day.',
    featureCategories: [
      {
        title: 'Three taps, not three messages',
        description:
          'Live availability shows up on Instagram, on the site, and inside the first reply instead of hiding behind another message. She can pick a slot without typing out her whole life story first.',
        icon: Zap,
        features: [
          'Live slot list in the first reply',
          'Bookable from Instagram and Google',
          'No phone call required',
        ],
      },
      {
        title: 'Fill cancellations the same hour',
        description:
          'When a slot opens, the right waiting client gets a quick claim-it text while the time is still useful. That keeps a cancellation from turning into a dead patch in the middle of the day.',
        icon: Sparkles,
        features: [
          'Cancellation auto-fill list',
          'First-to-claim text-back',
          'Walk-ins logged for next-slot alerts',
        ],
      },
      {
        title: 'Rebook on a tap, not a memory',
        description:
          'A rebook nudge goes out at the right interval for gel, BIAB, acrylic, or pedicure, with the kind of time she normally takes. That catches the habit before it slips past the usual return window.',
        icon: CheckCircle2,
        features: [
          'Service-specific rebook timing',
          'One-tap rebook with her usual tech',
          'Stops the moment she books',
        ],
      },
      {
        title: 'Cut no-shows without sounding stern',
        description:
          'A morning-of confirm tap and an easy reschedule link do more than a stern warning ever will. It keeps the tone light while still giving the salon a better chance of protecting the slot.',
        icon: MessageCircle,
        features: [
          'Day-before reminder',
          'Morning-of confirm tap',
          'Reschedule link beats a no-show',
        ],
      },
      {
        title: 'Be findable when she searches "nails near me"',
        description:
          'Pages and the Google profile line up around service, vibe, and area instead of sounding generic. That helps the salon show up for the specific local search someone makes when they want to book quickly.',
        icon: Search,
        features: [
          'Found for service + area',
          'Profile that matches the actual work',
          'More right-fit walk-ins',
        ],
      },
    ],
    columns: 3 as const,
  };

  const exploreData = {
    badge: 'Related',
    description:
      'These are the supporting services that come up most often once the salon sees how much demand is being lost to booking drag. They reinforce speed, rebook timing, and visible proof from different directions.',
    cards: [
      {
        icon: Zap,
        title: 'Smart Website Systems',
        description:
          'Puts live slots into the first reply and keeps booking down to a few taps instead of another round of messages.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: CheckCircle2,
        title: 'CRM & Rebook Automation',
        description:
          'Sends service-specific rebook nudges before the usual return point slips by and the client starts checking who else has space.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description:
          'Turns happy sets into reviews in the places the next client is already checking while deciding where to book.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description:
          'Helps the salon show up for the actual local search, not just as another generic option buried in the same area results.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Things nail salons usually ask',
    description:
      'These are the practical questions that usually come up in a fast, walk-in-led salon where people book quickly and lose patience even quicker. Straight answers that match that pace.',
    faqs: [
      {
        question: 'I run a small team. Is this overkill?',
        answer:
          'No. The point is to remove the typing — for clients and for you. Most owners save more time on DMs than the system takes to set up.',
      },
      {
        question: 'Will clients still be able to DM us?',
        answer:
          'Yes. The first DM reply offers slots. They tap, pick, and are booked. You only step in when you want to.',
      },
      {
        question: 'How does this handle different services and durations?',
        answer:
          'Slot length flexes by service. Gel, acrylic, BIAB, pedicure all get the right window automatically.',
      },
      {
        question: 'What about no-shows?',
        answer:
          'A morning-of confirm tap and an easy reschedule cut the bulk of them, without you having to police a deposit policy.',
      },
      {
        question: 'Do we need a new website?',
        answer:
          'Usually not. The biggest lift is in making booking three taps from Instagram and Google.',
      },
    ],
  };

  return {
    seo: {
      title: 'Nail Salons — Three-Tap Booking, Same-Hour Cancellation Fills | MindWP',
      description:
        'For nail salons where booking friction loses same-day clients. We make booking three taps, fill cancellations the same hour, and bring repeat clients back at the right interval.',
      canonical: '/industries/beauty-personal-care/nail-salons',
    },
    slug: 'nail-salons',
    industries: ['nail-salon'],
    systems: [
      'smart-website-systems',
      'crm-automation',
      'reputation-review',
      'local-seo-authority',
    ],
    topics: ['booking-systems', 'lead-response-time', 'review-generation'],
    type: 'detail',
    parentSlug: 'beauty-personal-care',
    hero: {
      ...heroData,
    },
    operatingPatterns: operatingPatternsData,
    comparison: comparisonData,
    systemLayers: systemLayersData,
    explore: exploreData,
    faq: faqData,
    cta: {
      title: 'Tell us where booking is leaking',
      description:
        'If "DM to book" keeps costing same-day chairs or walk-ins drift off before the next opening, walk us through a typical Saturday and we will show you where easier booking would catch the most.',
    },
  };
}

export const nailSalonsIndustryPageData: IndustryPageData = buildNailSalonsIndustryPageData();
