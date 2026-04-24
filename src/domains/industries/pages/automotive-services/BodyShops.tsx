import {
  CalendarRange,
  Camera,
  CarTaxiFront,
  ClipboardCheck,
  Compass,
  FileImage,
  Inbox,
  ShieldCheck,
  Star,
  Timer,
  Wrench,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildBodyShopsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Body Shops',
    title: 'After The Bump They Sent The Photo To Three Shops. Yours Opened It On Tuesday.',
    description:
      'Bodywork enquiries usually start with someone standing beside a damaged car in a car park, on a driveway, or outside work, sending the same photo to three shops at once. If your first useful reply lands late, trust drops before price even enters the conversation and the repair starts moving somewhere else.',
    list: ['Photo race', 'Insurance limbo', 'Cold estimates'],
    cssPrefix: 'body-shops-hero',
  };

  const imageStripData = {
    badge: 'How Bodywork Comes In',
    title: 'A driver standing next to a damaged car, taking the same photo three times',
    description:
      'It is rarely a phone call first. It is a photo from a forecourt, a supermarket car park, or outside the house, plus a quick question about price and how soon you can look at it.',
    items: [
      {
        title: 'Damage photos arriving on a phone',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing damage photos arriving from a driver',
      },
      {
        title: 'Insurance and approval back-and-forth',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing insurance approvals',
      },
      {
        title: 'Inspection and drop-off slot',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing body shop inspection slot',
      },
      {
        title: 'Repaired car handed back, paint matched',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing finished body repair handover',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'body-shops-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where Repairs Get Lost',
    title: 'Bodywork is won in the first reply, not in the workshop',
    description:
      'At the enquiry stage, nobody can see the quality of your prep or your paint match yet. They judge the shop by speed, clarity, and whether the first reply feels like somebody is actually on it.',
    benefits: [
      {
        icon: FileImage,
        title: 'A photo lands while the booth is hissing',
        description:
          'The estimator is masking up, the compressor is going, and the email lands with six photos of a cracked bumper. By the time anyone opens it, the driver already has two replies and an inspection slot from one of them.',
        iconType: 'primary' as const,
      },
      {
        icon: Timer,
        title: 'A first reply that takes a working day',
        description:
          'A polite "we will get back to you" goes out at 4:40. By then the driver has stopped trusting the pace of the whole job, not just the estimate, and has booked an inspection somewhere that felt more switched on.',
        iconType: 'secondary' as const,
      },
      {
        icon: ClipboardCheck,
        title: 'Insurance threads that swallow the week',
        description:
          'Adjusters, photos, supplements, approvals. Half of every Friday goes to threads that should have lived on a board, not in a personal inbox.',
        iconType: 'accent' as const,
      },
      {
        icon: Star,
        title: 'A spotless paint job, no proof of it online',
        description:
          'Five resprays last week, none of them asked for a review. The cosmetic shop on the next industrial estate has triple your reviews and worse work.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Goes In',
    title: 'Five small pieces, all of them aimed at the first reply',
    description:
      'In bodywork, the first reply carries more weight than most shops admit. Every layer below is there to make that first contact faster, clearer, and easier to trust.',
    featureCategories: [
      {
        title: 'Get the first reply out before the booth opens',
        description:
          'Photos and forms land in one inbox with the car and the damage already noted. A short, real-sounding first reply goes out fast \u2014 not a "we will be in touch", a useful one.',
        icon: Camera,
        features: [
          'One inbox for photos, forms and missed calls',
          'Vehicle, panel and damage captured up front',
          'First reply that holds the lead, not parks it',
        ],
      },
      {
        title: 'Offer an inspection slot in the first message',
        description:
          'A link the driver can use to pick a slot before the conversation stalls or the photos get buried. The slot lands in the same diary the workshop already works from.',
        icon: CalendarRange,
        features: [
          'Inspection slots offered with the first reply',
          'Reminder the day before so cars actually arrive',
          'Slot, car, and damage attached to the booking',
        ],
      },
      {
        title: 'Move insurance threads off your personal inbox',
        description:
          'Adjuster emails, supplement requests, approvals \u2014 grouped by job, visible to the team, no longer dependent on one person\u2019s memory.',
        icon: ShieldCheck,
        features: [
          'Per-job thread for adjuster correspondence',
          'Open approval list the front office can scan',
          'Less Friday-afternoon chasing',
        ],
      },
      {
        title: 'Stop estimates dying after they leave',
        description:
          'A polite chase fires the next morning on every estimate, while the repair is still fresh in their head. The open estimate board makes it obvious what is waiting and what is starting to drift.',
        icon: Inbox,
        features: [
          'Automatic next-morning chase',
          'Open estimate board for the team',
          'Old estimates warmed up before they go cold',
        ],
      },
      {
        title: 'Get the finished work onto the page that matters',
        description:
          'Day the car is collected, a review request lands. Finished bodywork starts showing up where the next driver is searching.',
        icon: Star,
        features: [
          'Review ask the day they collect',
          'Reviews that land on Maps and search',
          'Reputation that finally matches the booth',
        ],
      },
    ],
    columns: 3 as const,
  };

  const workflowExamplesData = {
    badge: 'Real Moments',
    title: 'Three moments where bodywork is usually lost, and what changes',
    description:
      'These are the same moments that lose trust at the top of the page. The work itself has not changed here, only how fast and clearly the next step gets handled.',
    workflows: [
      {
        trigger: 'A driver in a supermarket car park sends a photo of a creased wing',
        actions: [
          'Photo lands in one inbox with the car already noted',
          'A short first reply goes out within minutes asking for a second photo and offering an inspection slot',
          'They book the slot from the same thread \u2014 before they finish messaging the next shop',
        ],
      },
      {
        trigger: 'An insurer asks for a supplement on a job already in the booth',
        actions: [
          'The thread sits on a per-job board, not in one person\u2019s personal email',
          'The team can see who is waiting on what without asking',
          'The Friday afternoon insurer-chase shrinks',
        ],
      },
      {
        trigger: 'A finished respray gets handed back on a Friday at 4pm',
        actions: [
          'A short review request fires that evening while they are still admiring the paint',
          'They actually leave one because they were just asked at the right moment',
          'Local search starts catching up to the work the booth puts out every week',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'body-shops-workflow-examples',
  };

  const comparisonData = {
    badge: 'Same Week, Different Shop',
    title: 'A week of enquiries before and after the first-reply gap closes',
    description:
      'Same volume of photo enquiries. Same estimators, same booth, same workshop. The difference is whether people still trust you by the time your reply reaches them.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How the week runs now',
        items: [
          'Mon 10am photo arrives. Opened Tuesday afternoon. Inspection already booked with another shop.',
          'Insurer thread lives in one estimator\u2019s inbox. Half of Friday lost to chasing it.',
          'Estimate sent Wednesday. Nobody is sure who is meant to chase it.',
          'Three resprays handed back. Zero review asks went out.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How the week runs after',
        items: [
          'Mon 10am photo arrives. First reply with an inspection slot inside an hour.',
          'Insurer threads sit on a per-job board the whole front office can see.',
          'Estimate sent Wednesday. Polite chase fires Thursday morning automatically.',
          'Three resprays handed back. Three review asks fire that evening.',
        ],
      },
    ],
  };

  const exploreData = {
    badge: 'Related',
    description:
      'These are the supporting pieces body shops usually lean on once the first-reply gap is obvious. They all help the same job feel easier to start and easier to trust.',
    cards: [
      {
        icon: Wrench,
        title: 'Smart Website Systems',
        description:
          'The frame that keeps enquiry, estimate, and inspection booking connected, so the first contact does not splinter across forms, inboxes, and callbacks.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Inbox,
        title: 'AI Lead Handling',
        description:
          'First-reply handling for photo and form enquiries, built to get something useful back fast while the driver is still comparing shops.',
        href: '/services/ai-lead-handling',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Compass,
        title: 'Local Authority & SEO',
        description:
          'Visibility for "body shop near me" and similar searches, so you are in the shortlist before the damaged-car photo ever gets sent around.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: CarTaxiFront,
        title: 'Reputation & Reviews',
        description:
          'Turn finished resprays into visible proof on Maps and search, so the online picture looks as careful as the paintwork leaving the booth.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'What body shops usually want answered first',
    description:
      'These are usually the first practical questions once a shop sees how much trust is won or lost in that first reply. Straight answers, no filler.',
    faqs: [
      {
        question: 'Photos need a human eye to price properly. Won\u2019t a fast reply just guess?',
        answer:
          'The fast reply is not a price. It captures the panel, asks for a second photo if it is needed, and offers an inspection slot. The estimator still does the estimating. The point is to hold the lead until they can.',
      },
      {
        question: 'Most of our work is insurance. Does this fit?',
        answer:
          'Yes. Insurance threads move off a personal inbox onto a per-job board so the team can see what is waiting on which adjuster without anyone forwarding emails around.',
      },
      {
        question: 'Will drivers feel they got an automated reply?',
        answer:
          'No. The first messages read like something the front desk would actually send. The aim is to sound human and useful, not to fake a conversation.',
      },
      {
        question: 'We already have a website. Does this need a rebuild?',
        answer:
          'Usually not. Most of the gap is after the form is sent, not before. The website only changes if it is actively in the way.',
      },
      {
        question: 'What about the pile of unanswered photos already in the inbox?',
        answer:
          'Those get worked through too. A surprising amount turn back into bookings once a real first reply finally goes out.',
      },
      {
        question: 'How long before the first-reply gap actually closes?',
        answer:
          'Usually within the first couple of weeks. The text-back and inspection slot are the first pieces in.',
      },
    ],
  };

  return {
      seo: {
        title: 'Body Shops \u2014 Win The Photo Race After A Bump | MindWP',
        description:
          'For body shops where damage photos hit three inboxes at once and the slowest reply loses the repair. Faster first reply, cleaner insurance threads, and reviews that finally match the work.',
        canonical: '/industries/automotive-services/body-shops',
      },
      slug: 'body-shops',
      industries: ['body-shop'],
      systems: [
        'smart-website-systems',
        'ai-lead-handling',
        'local-seo-authority',
        'reputation-review',
      ],
      topics: ['lead-response-time', 'follow-up', 'review-generation'],
      type: 'detail',
      parentSlug: 'automotive-services',
      hero: { ...heroData },
      imageStrip: imageStripData,
      operatingPatterns: operatingPatternsData,
      systemLayers: systemLayersData,
      workflowExamples: workflowExamplesData,
      comparison: comparisonData,
      explore: exploreData,
      faq: faqData,
      cta: {
        title: 'Tell us about Tuesday\u2019s photo',
        description:
          'Walk us through the last enquiry that arrived as a photo and never got booked. We will tell you what went wrong and what to plug first.',
      }
  };
}

export const bodyShopsIndustryPageData: IndustryPageData = buildBodyShopsIndustryPageData();
