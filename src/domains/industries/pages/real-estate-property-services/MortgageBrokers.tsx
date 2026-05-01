import {
  AlarmClock,
  Banknote,
  CalendarCheck,
  FileSignature,
  Handshake,
  MessageSquare,
  PhoneCall,
  Search,
  ShieldCheck,
  Star,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildMortgageBrokersIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Mortgage Brokers',
    title:
      'They Found A House On Saturday. They Needed A Decision In Principle By Monday. You Saw The Email Tuesday.',
    description:
      'Mortgage enquiries usually appear when the buyer has just viewed, just had an offer accepted, or just been told they need an answer fast. In that moment they are comparing brokers in real time, and the one who replies first often wins the case before rates or fees are even properly discussed.',
    list: ['Weekend gaps', 'Late answers', 'Stalled DIPs'],
    cssPrefix: 'mortgage-brokers-hero',
  };

  const operatingPatternsData = {
    badge: 'Where Cases Decide Themselves',
    title: 'Buyers do not shop around for weeks. They pick whoever picked up.',
    description:
      'Most broker enquiries feel urgent because they usually are. Buyers are often trying to move an offer forward that day, secure a decision in principle quickly, or confirm somebody can actually guide the case before they lose momentum.',
    benefits: [
      {
        icon: AlarmClock,
        title: 'The enquiry came in on a weekend',
        description:
          'They had spent the weekend viewing and needed an answer before the next conversation with the agent or seller. By Monday morning, another broker had already moved them toward a decision in principle while your email was still waiting.',
        iconType: 'primary' as const,
      },
      {
        icon: PhoneCall,
        title: 'They were ringing three brokers in the same hour',
        description:
          'They were calling three brokers in the same hour because they needed clarity the same day. Whoever called back first got the real conversation, and the others usually never learned the buyer had already decided who felt most on it.',
        iconType: 'secondary' as const,
      },
      {
        icon: FileSignature,
        title: 'A pre-approved buyer never came back to complete',
        description:
          'A DIP went out, then the buyer went quiet while the property search carried on. Without the right follow-up at the right stage, the case drifted until another broker or portal became the easier option when they were ready again.',
        iconType: 'accent' as const,
      },
    ],
    columns: 3 as const,
  };

  const workflowExamplesData = {
    badge: 'Real Moments',
    title: 'The hours that decide whose name goes on the application',
    description:
      'These are the small handoffs that decide whether a buyer becomes a placed case or a cold lead. They usually look minor in the moment, but they are exactly where urgency turns into comparison and comparison turns into a decision.',
    workflows: [
      {
        trigger: 'A new enquiry lands at 9pm on a Sunday.',
        actions: [
          'They get a personal-feeling reply within minutes',
          'It confirms a callback first thing Monday',
          'They stop ringing other brokers in the meantime',
        ],
      },
      {
        trigger: 'A DIP went out two weeks ago and the buyer has gone quiet.',
        actions: [
          'A short, written-like-you check-in goes out',
          'It references where they were in the buying cycle',
          'A second nudge fires only if needed',
        ],
      },
      {
        trigger: 'A completion just landed.',
        actions: [
          'A review request goes out the day after',
          'A note is parked for the remortgage window',
          "They stay your client, not the next broker's",
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'mortgage-brokers-workflow-examples',
  };

  const systemLayersData = {
    badge: 'What We Put In Place',
    title: 'Be the broker who replied first, and the broker who is still there at remortgage',
    description:
      'You keep doing the advice and case work. The urgent first hours after an enquiry, plus the long stretch before a remortgage window opens, stop relying on memory, luck, or whoever happens to be checking messages first.',
    featureCategories: [
      {
        title: 'Reply in the first hour, even on a weekend',
        description:
          'Web forms, missed calls, and out-of-hours enquiries all get a reply that feels personal within minutes. That matters most when the buyer needs an answer the same day and is actively comparing who feels available.',
        icon: MessageSquare,
        features: [
          'Out-of-hours acknowledgement that holds the lead',
          'Buyer status captured (looking, offer, exchanged)',
          'Routed to the right broker',
        ],
      },
      {
        title: 'Hold cases through the buying cycle',
        description:
          'DIPs, full applications, valuations, and exchanges all get a follow-up cadence tied to the stage the buyer is actually in. That stops cases from going cold just because nobody checked back in when the next decision point arrived.',
        icon: CalendarCheck,
        features: [
          'Stage-aware nudges for stalled cases',
          'Visibility on every open case',
          'Stops the moment they move forward',
        ],
      },
      {
        title: 'Keep clients warm to remortgage',
        description:
          'Two and five-year fixes are flagged in advance, with a structured re-engagement before the client starts Googling other brokers or clicking back into a comparison site. Repeat business stops being left to chance.',
        icon: Banknote,
        features: [
          'Remortgage windows surfaced early',
          'Personalised re-engagement at the right point',
          'Repeat business stops being lost to a portal',
        ],
      },
      {
        title: 'Turn completed cases into proof',
        description:
          'A review request goes out the day after completion while the relief is still fresh and the buyer can still describe the experience clearly. That keeps your visible proof closer to the amount of work you are actually completing.',
        icon: ShieldCheck,
        features: [
          'Review request triggered by completion',
          'Asked once, never twice',
          'Reviews catch up to the case load',
        ],
      },
      {
        title: 'Be findable when the offer is being drafted',
        description:
          'Your pages and Google profile line up around the buyer type, location, and urgency you actually want to serve. That helps you appear when the offer is being drafted and the buyer is deciding who to trust quickly.',
        icon: Search,
        features: [
          'Found for area + buyer type',
          'Broker profile that builds trust',
          'Less time on enquiries that are not a fit',
        ],
      },
    ],
    columns: 3 as const,
  };

  const exploreData = {
    badge: 'Related',
    description:
      'These are the supporting services that come up most often once a broker sees how much business depends on speed, stage-aware follow-up, and staying remembered. Each one reinforces a different part of that system.',
    cards: [
      {
        icon: Handshake,
        title: 'Smart Website Systems',
        description:
          'Helps you be the first reply, even at 9pm on a Sunday, when the buyer is still comparing who can move quickly.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: CalendarCheck,
        title: 'CRM & Case Follow-up',
        description:
          'Keeps every open DIP and live case moving through the buying cycle so same-day urgency does not turn into silent drift later on.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description:
          'Gets reviews from completed cases in the places the next buyer is already reading while deciding which broker feels safest to contact.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description:
          'Helps you become the broker name buyers find when an offer is being drafted and they need a trustworthy answer quickly.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Things mortgage brokers usually ask',
    description:
      'These are the practical questions that usually come up in a deadline-driven, regulated practice where urgency matters but the process still needs to stay careful. Straight answers, built around that balance.',
    faqs: [
      {
        question: 'Will buyers feel they are getting an automated response?',
        answer:
          'No. The first message is short, named, and signed by you. The point is to hold the lead until you can ring personally — usually first thing the next morning.',
      },
      {
        question: 'Is automated follow-up appropriate in a regulated context?',
        answer:
          'Used sparingly, yes. Nudges are factual, not advisory. Anything that touches advice is held for the broker.',
      },
      {
        question: 'How does this work with our case management or sourcing tool?',
        answer: 'It sits alongside. Case stages can feed in so nudges fire at the right moment.',
      },
      {
        question: 'What about clients we placed two years ago?',
        answer:
          'Their fix end date is flagged in advance and a structured re-engagement runs before they search elsewhere. Most brokers find a real lift in remortgage retention from this alone.',
      },
      {
        question: 'Do we need a new website?',
        answer:
          'Usually not. The biggest lift is in the first hour after enquiry and the months before remortgage, not in the homepage.',
      },
    ],
  };

  return {
    seo: {
      title: 'Mortgage Brokers — Win The First Hour, Then The Remortgage | MindWP',
      description:
        'For mortgage brokers where weekend enquiries go to whoever replied first and remortgages are quietly lost to a portal. We put first-hour response, stage-aware case follow-up, and remortgage retention in place.',
      canonical: '/industries/real-estate-property-services/mortgage-brokers',
    },
    slug: 'mortgage-brokers',
    industries: ['mortgage-broker'],
    systems: [
      'smart-website-systems',
      'crm-automation',
      'reputation-review',
      'local-seo-authority',
    ],
    topics: ['lead-response-time', 'follow-up', 'review-generation'],
    type: 'detail',
    parentSlug: 'real-estate-property-services',
    hero: {
      ...heroData,
    },
    operatingPatterns: operatingPatternsData,
    workflowExamples: workflowExamplesData,
    systemLayers: systemLayersData,
    explore: exploreData,
    faq: faqData,
    cta: {
      heading: {
        title: 'Tell us where the cases are going elsewhere',
        description:
          'If buyers needing same-day answers are ending up with another broker, or remortgages are quietly going to a portal later on, walk us through the last few cases and we will show you the first thing worth fixing.',
      },
      actions: [{ label: 'Get Started', href: '/contact', primary: true }],
    },
  };
}

export const mortgageBrokersIndustryPageData: IndustryPageData =
  buildMortgageBrokersIndustryPageData();
