import {
  Calendar,
  Clock3,
  MapPinned,
  MessageSquare,
  Search,
  ShieldCheck,
  Star,
  Workflow,
  Zap,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildElectricalCompaniesIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Electrical Companies',
    title: 'Half The Power’s Out. They’ve Already Phoned Two Other Sparkies.',
    description:
      'When the lights go off, people don’t leave a voicemail — they ring the next number. Same with a quoted EV charger or rewire that goes quiet. We put the system in place that catches the urgent calls, follows up the quotes, and asks for the review without anyone in the office remembering.',
    list: [
      'Fault calls that go to whoever picked up first',
      'EV charger and rewire quotes nobody chased',
      'Review requests nobody sent',
      'Areas you never wanted to drive to',
    ],
    cssPrefix: 'electrical-companies-hero',
  };

  const imageStripData = {
    badge: 'How Electrical Calls Actually Land',
    title: 'Tripped board on a Sunday doesn’t wait for Monday',
    description:
      'Burning smell, dead sockets, no power upstairs. People worry and dial. Whoever answers first usually wins the job — and often the EV charger six months later.',
    items: [
      {
        title: 'Urgent faults and outages',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing urgent electrical faults',
      },
      {
        title: 'Booked visits and inspections',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing electrical inspections and visits',
      },
      {
        title: 'Quotes and upgrades',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing electrical quotes and upgrades',
      },
      {
        title: 'Reviews and trust signals',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing electrical reviews and trust signals',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'electrical-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where The Work Slips',
    title: 'You’re up a ladder. The phone rings. They call the next sparkie.',
    description: 'Same handful of leaks in nearly every electrical business. None of them are about the work itself.',
    benefits: [
      {
        icon: Zap,
        title: '“No power in half the house” went to voicemail',
        description:
          'You were in a loft. They didn’t leave a message — they rang the next electrician on Google.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'A quoted EV charger went quiet for two weeks',
        description:
          '£1,400 of work. One follow-up text would have closed it. Nobody had time to send it.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Reviews don’t reflect the actual workload',
        description:
          'Hundreds of jobs done well. 22 reviews online. Nobody was asked at the right moment.',
        iconType: 'accent' as const,
      },
      {
        icon: MapPinned,
        title: 'Half your callouts are 45 minutes away',
        description:
          'Not the postcodes you actually want. The site brings in whoever finds you, not the right area.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to catch the urgent calls and follow up the bigger installs',
    description:
      'Each piece does one job. Together they keep the work moving while you’re up a ladder.',
    featureCategories: [
      {
        title: 'Catch every call, even when you’re mid-rewire',
        description:
          'Missed call gets an instant text — “on a job, what’s the issue, can call back in 20.” Most stop dialling the next sparkie.',
        icon: MessageSquare,
        features: [
          'Missed-call text-back automatically',
          'Urgency captured up front',
          'Holds the lead until you’re free',
        ],
      },
      {
        title: 'Take the booking without the back-and-forth',
        description:
          'For inspections and non-urgent work, they pick a slot themselves. The office stops being a calendar.',
        icon: Calendar,
        features: [
          'Online booking for inspections and routine work',
          'Reminders the day before',
          'Reschedule link instead of a no-show',
        ],
      },
      {
        title: 'Follow up the bigger jobs nobody has time to chase',
        description:
          'EV charger or rewire quote sent Monday, automatic check-in Friday, another the week after. Quietly closes more.',
        icon: Workflow,
        features: [
          'Quote follow-up at the right intervals',
          'Pending jobs visible in one place',
          'Closing rate goes up without nagging',
        ],
      },
      {
        title: 'Turn finished jobs into reviews you can show',
        description:
          'A polite review request goes out the day after, when the lights are back on.',
        icon: ShieldCheck,
        features: [
          'Review requests after every job',
          'Asked when customers are happiest',
          'Reviews catch up to the workload',
        ],
      },
      {
        title: 'Show up for the postcodes you actually want',
        description:
          'Service pages, Google profile, and local search lined up so the right area finds you first.',
        icon: Search,
        features: [
          'Pages for the services and areas you want',
          'Found on Maps for local searches',
          'Less time driving to the wrong postcodes',
        ],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'What Actually Changes',
    title: 'A normal week on the tools, before and after',
    description: 'The work stays. The chasing and the missed calls stop.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How it runs now',
        items: [
          'Three urgent calls missed during a single fuse-board upgrade',
          'A £1,400 EV charger quote went quiet for two weeks. No follow-up sent.',
          '“Meant to ask for a review” — said about 200 jobs.',
          'Half the new enquiries are from postcodes 45 minutes away.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it runs after',
        items: [
          'Missed calls get an instant text. Most wait the 20 minutes.',
          'Quotes get followed up automatically. More close, none feel pestered.',
          'Every customer gets asked the day after. Reviews catch up to the work.',
          'The right postcodes find you first. Less driving for less money.',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Where Most Sparkies Start',
    title: 'Three stages — most businesses feel one of them more than the others',
    description: 'Pick whichever costs you the most jobs right now.',
    packages: [
      {
        name: 'Stop missing the urgent calls',
        description: 'For when fault calls hit while you’re on a job and go to the next sparkie.',
        price: 'Stage 1',
        priceDetail: 'Start here if missed calls during work hours is the biggest leak',
        features: [
          'Missed-call text-back the moment you can’t answer',
          'Urgent vs non-urgent triaged automatically',
          'Most callers wait instead of dialling the next electrician',
        ],
      },
      {
        name: 'Close the bigger quotes that go quiet',
        description: 'For when EV chargers, rewires, and upgrades get quoted and you never hear back.',
        price: 'Stage 2',
        priceDetail: 'Start here if quote-to-booking conversion is the leak',
        features: [
          'Quote follow-ups at the right intervals',
          'Pending jobs visible in one place',
          'No more “what happened to that EV charger quote?”',
        ],
        popular: true,
      },
      {
        name: 'Build the local proof that fills the diary on its own',
        description: 'For when work is great but reviews and the right postcodes don’t reflect it.',
        price: 'Stage 3',
        priceDetail: 'Start here if reviews and area targeting are the weak spot',
        features: [
          'Review requests after every job',
          'Service pages for the work and postcodes you want',
          'Less time driving to jobs you don’t want',
        ],
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Real Situations',
    title: 'A few moments where the difference shows up',
    description: 'Small moments on the tools and after, where things used to slip through.',
    workflows: [
      {
        trigger: 'A “no power upstairs” call comes in while you’re mid-rewire.',
        actions: [
          'Missed call gets an instant text within seconds',
          'They get told you’re on a job and when you’ll be free',
          'Most wait. The ones who can’t are flagged as truly urgent.',
        ],
      },
      {
        trigger: 'An EV charger quote was sent Monday and went quiet.',
        actions: [
          'A friendly check-in goes out Friday',
          'Another a week later if no reply',
          'Quote-to-booking quietly improves',
        ],
      },
      {
        trigger: 'A job is finished and the lights are back on.',
        actions: [
          'A polite review request goes out the next day',
          'Asked when the customer is happiest',
          'Local reviews catch up to the workload',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'electrical-workflow-examples',
  };

  const exploreData = {
    badge: 'Related',
    description:
      'The other parts of the system that come up most often for electricians trying to stop missing work.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description:
          'See the core system layer that holds electrical demand, booking, and follow-up together.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'Booking & Scheduling System',
        description: 'Support visits, reminders, and clearer next-step handling.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen local electrical visibility and trust.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description: 'Turn completed jobs into stronger local proof and review flow.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Things electricians usually ask',
    description: 'Straight answers about how this fits an electrical business.',
    faqs: [
      {
        question: 'I’m up a ladder all day. Will this need me sat at a screen?',
        answer:
          'No. The whole point is that it runs while you’re on a job. You’ll see what came in on your phone between calls, but nothing waits on you to operate it.',
      },
      {
        question: 'How does the missed-call text-back actually work?',
        answer:
          'A call comes in while you’re in a loft. It rings out. Within seconds the caller gets a text — “on a job, can call back in 20, what’s the issue?” Most stop dialling the next electrician.',
      },
      {
        question: 'Can it handle quote follow-ups for EV chargers and rewires?',
        answer:
          'Yes — friendly check-in messages go out at the right intervals after a quote is sent. Quote-to-booking conversion changes noticeably without anybody chasing.',
      },
      {
        question: 'How do I get more reviews without nagging?',
        answer:
          'A polite request goes out the day after the job, when the lights are back on. People who would have meant to leave one actually do.',
      },
      {
        question: 'Can I stop being shown for postcodes I don’t want to drive to?',
        answer:
          'Yes — service pages and local search get tightened around the areas you actually want. Less time driving for less money.',
      },
      {
        question: 'Do I need to scrap my current website?',
        answer:
          'Usually not. We look at what you have first. The leak is normally the bit between the call coming in and the review going up — not the site itself.',
      },
    ],
  };

  return {
    slug: 'electrical-companies',
    industries: ['electrical'],
    systems: [
      'smart-website-systems',
      'ai-lead-handling',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['lead-management', 'follow-up', 'review-generation'],
    type: 'detail',
    parentSlug: 'home-services',
    seo: {
      title: 'Electrical Companies — Stop Losing Calls, Quotes & Reviews | MindWP',
      description:
        'For electricians where fault calls go to whoever picked up first, EV charger and rewire quotes go quiet for weeks, and reviews don’t reflect the workload. We put the system in place that catches every job.',
      keywords: [
        'electrician website design',
        'electrical contractor marketing system',
        'electrical company website system',
        'electrician lead automation system',
        'electrician reputation management system',
      ],
      canonical: '/industries/home-services/electrical-companies',
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
    explore: exploreData,
    faq: faqData,
    cta: {
      title: 'Tell us where the work is leaking',
      description:
        'If urgent calls go to voicemail, if quoted jobs go quiet, or if reviews never get asked for — walk us through how the business runs and we’ll show you the first thing worth fixing.',
    },
  };
}

export const electricalCompaniesIndustryPageData: IndustryPageData =
  buildElectricalCompaniesIndustryPageData();
