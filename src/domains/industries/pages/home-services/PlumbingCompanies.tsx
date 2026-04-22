import {
  Calendar,
  Clock3,
  Droplets,
  MapPinned,
  MessageSquare,
  Search,
  ShieldCheck,
  Star,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildPlumbingCompaniesIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Plumbing Businesses',
    title: 'Their Kitchen’s Flooding. They’ve Already Called Two Other Plumbers.',
    description:
      'When water’s on the floor, people don’t leave voicemails — they ring the next number. Same with a quoted boiler swap that goes quiet for a week. We put the system in place that catches the urgent calls, follows up the quotes, and asks for the review without anyone in the office remembering.',
    list: [
      'Emergency calls that go to whoever picked up first',
      'Boiler quotes nobody chased',
      'Review requests nobody sent',
      'Postcodes you never wanted to drive to',
    ],
    cssPrefix: 'plumbing-companies-hero',
  };

  const imageStripData = {
    badge: 'How Plumbing Calls Actually Land',
    title: 'A leak at 7pm doesn’t wait for you to ring back tomorrow',
    description:
      'Burst pipe, blocked toilet, no hot water on a Sunday. People panic and dial. Whoever answers first usually wins the job — and often the next three for that household.',
    items: [
      {
        title: 'Emergency plumbing enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing emergency plumbing enquiries',
      },
      {
        title: 'Booked repairs and visits',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing booked plumbing visits',
      },
      {
        title: 'Quotes and installation decisions',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing plumbing quotes and installation decisions',
      },
      {
        title: 'Reviews and local proof',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing plumbing reviews and local proof',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'plumbing-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where The Work Slips',
    title: 'You’re under a sink. The phone rings. They call the next plumber.',
    description: 'Same handful of leaks in nearly every plumbing business. None of them are about the work itself.',
    benefits: [
      {
        icon: Droplets,
        title: '“Water’s coming through the ceiling” went to voicemail',
        description:
          'You were already on a job. They didn’t leave a message — they rang the next plumber on Google.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'A quoted boiler swap went quiet for two weeks',
        description:
          "£4,800 of work. One follow-up text would have closed it. Nobody had time to send it.",
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Reviews don’t reflect the actual workload',
        description:
          'Hundreds of jobs done well. 19 reviews online. Nobody was asked at the right moment.',
        iconType: 'accent' as const,
      },
      {
        icon: MapPinned,
        title: 'Half your callouts are 40 minutes away',
        description:
          'Not the postcodes you actually want. The site brings in whoever finds you, not the right area.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to catch the urgent calls and follow up the bigger jobs',
    description:
      'Each piece does one job. Together they keep the work moving while you’re in somebody’s loft.',
    featureCategories: [
      {
        title: 'Catch every call, even when you’re under a sink',
        description:
          'Missed call gets an instant text — “on a job, what’s happening, can call back in 20.” Most stop dialling the next plumber.',
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
          'For non-urgent work, they pick a slot themselves. The office stops being a calendar.',
        icon: Calendar,
        features: [
          'Online booking for non-urgent visits',
          'Reminders the day before',
          'Reschedule link instead of a no-show',
        ],
      },
      {
        title: 'Follow up the quotes nobody has time to chase',
        description:
          'Boiler swap quote sent Monday, automatic check-in Friday, another the week after. Quietly closes more.',
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
          'A polite review request goes out the day after the job, when the kitchen’s working again.',
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
          'Three urgent calls missed during a single boiler service',
          'A £4,800 quote went quiet for two weeks. No follow-up sent.',
          '“Meant to ask for a review” — said about 200 jobs.',
          'Half the new enquiries are from postcodes 40 minutes away.',
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
    badge: 'Where Most Plumbers Start',
    title: 'Three stages — most businesses feel one of them more than the others',
    description: 'Pick whichever costs you the most jobs right now.',
    packages: [
      {
        name: 'Stop missing the urgent calls',
        description: 'For when emergency calls hit while you’re on a job and go to the next plumber.',
        price: 'Stage 1',
        priceDetail: 'Start here if missed calls during work hours is the biggest leak',
        features: [
          'Missed-call text-back the moment you can’t answer',
          'Urgent vs non-urgent triaged automatically',
          'Most callers wait instead of dialling the next plumber',
        ],
      },
      {
        name: 'Close the quotes that go quiet',
        description: 'For when bigger jobs get quoted and you never hear back.',
        price: 'Stage 2',
        priceDetail: 'Start here if quote-to-booking conversion is the leak',
        features: [
          'Quote follow-ups at the right intervals',
          'Pending jobs visible in one place',
          'No more “what happened to that boiler quote?”',
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
        trigger: 'A burst pipe call comes in while you’re on a boiler service.',
        actions: [
          'Missed call gets an instant text within seconds',
          'They get told you’re on a job and when you’ll be free',
          'Most wait. The ones who can’t are flagged as truly urgent.',
        ],
      },
      {
        trigger: 'A boiler installation quote was sent Monday and went quiet.',
        actions: [
          'A friendly check-in goes out Friday',
          'Another a week later if no reply',
          'Quote-to-booking quietly improves',
        ],
      },
      {
        trigger: 'A job is finished and the kitchen sink is working again.',
        actions: [
          'A polite review request goes out the next day',
          'Asked when the customer is happiest',
          'Local reviews catch up to the workload',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'plumbing-workflow-examples',
  };

  const exploreData = {
    badge: 'Related',
    description:
      'The other parts of the system that come up most often for plumbers trying to stop missing work.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description:
          'See the core system layer that holds plumbing demand, booking, and follow-up together.',
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
        description: 'Strengthen local plumbing visibility and service-area trust.',
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
    title: 'Things plumbers usually ask',
    description: 'Straight answers about how this fits a plumbing business.',
    faqs: [
      {
        question: 'I’m on the tools all day. Will this need me sat at a screen?',
        answer:
          'No. The whole point is that it runs while you’re on a job. You’ll see what came in on your phone between calls, but nothing waits on you to operate it.',
      },
      {
        question: 'How does the missed-call text-back actually work?',
        answer:
          'A call comes in while you’re under a sink. It rings out. Within seconds the caller gets a text — “on a job, can call back in 20, what’s happening?” Most stop dialling the next plumber.',
      },
      {
        question: 'Can it handle quote follow-ups for boiler swaps and bigger jobs?',
        answer:
          'Yes — friendly check-in messages go out at the right intervals after a quote is sent. Quote-to-booking conversion changes noticeably without anybody chasing.',
      },
      {
        question: 'How do I get more reviews without nagging?',
        answer:
          'A polite request goes out the day after the job, when the kitchen’s working again. People who would have meant to leave one actually do.',
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
    slug: 'plumbing-companies',
    industries: ['plumbing'],
    systems: [
      'smart-website-systems',
      'ai-lead-handling',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['emergency-handling', 'service-reminders', 'feedback-loops'],
    type: 'detail',
    parentSlug: 'home-services',
    seo: {
      title: 'Plumbing Companies — Stop Losing Calls, Quotes & Reviews | MindWP',
      description:
        'For plumbers where urgent calls go to whoever picked up first, quoted boiler swaps go quiet for weeks, and reviews don’t reflect the workload. We put the system in place that catches every job.',
      keywords: [
        'plumbing website design',
        'plumbing lead generation website',
        'plumbing marketing system',
        'plumbing lead automation system',
        'plumbing reputation management system',
      ],
      canonical: '/industries/home-services/plumbing-companies',
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

export const plumbingCompaniesIndustryPageData: IndustryPageData =
  buildPlumbingCompaniesIndustryPageData();
