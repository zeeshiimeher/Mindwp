import {
  Bell,
  Calendar,
  Clock3,
  MapPinned,
  MessageSquare,
  Search,
  Star,
  Thermometer,
  Workflow,
  Wrench,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildHvacCompaniesIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For HVAC Companies',
    title: 'It’s 32 Degrees. Their Aircon’s Dead. They’ve Already Phoned Two Other Companies.',
    description:
      'Heatwave hits, boiler dies in January, the calls don’t stop. Whoever picks up first wins the job. Same with a quoted boiler swap or new install that goes quiet for a week. We put the system in place that catches the urgent calls, follows up the quotes, and brings customers back for service every year.',
    list: [
      'Heatwave and cold-snap calls that overflow',
      'Install quotes nobody chased',
      'Annual services nobody reminded about',
      'Reviews that don’t match the workload',
    ],
    cssPrefix: 'hvac-companies-hero',
  };

  const imageStripData = {
    badge: 'How HVAC Demand Actually Lands',
    title: 'A heatwave hits and the phone doesn’t stop for three days',
    description:
      'No heat in January, no cool air in July, a boiler banging at 9pm. People panic and dial. Whoever answers first usually gets the job — and the annual service for the next ten years.',
    items: [
      {
        title: 'Emergency heating and cooling calls',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing urgent HVAC calls',
      },
      {
        title: 'Service and tune-up scheduling',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing HVAC scheduling',
      },
      {
        title: 'Install and estimate decisions',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing HVAC estimate decisions',
      },
      {
        title: 'Maintenance follow-up',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing HVAC maintenance follow-up',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'hvac-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where The Work Slips',
    title: 'You’re on the roof. The phone’s ringing. They call the next company.',
    description: 'Same handful of leaks in nearly every HVAC business. None of them are about the work itself.',
    benefits: [
      {
        icon: Thermometer,
        title: 'Three days of heatwave, twenty missed calls',
        description:
          'Half rang somebody else. The other half left it. The team works flat out and still loses jobs.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'A quoted boiler swap went quiet for two weeks',
        description:
          '£5,200 of work. One follow-up text would have closed it. Nobody had time to send it.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Annual services nobody reminded customers about',
        description:
          'Hundreds of installs done. The reminder emails were always going to start “next month.”',
        iconType: 'accent' as const,
      },
      {
        icon: MapPinned,
        title: 'The company up the road has 600 reviews. You have 41.',
        description:
          'Your work is better. Locally you look smaller because nobody was ever asked.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to catch the calls, close the installs, and bring customers back yearly',
    description:
      'Each piece does one job. Together they keep the work moving while the team is on the roof.',
    featureCategories: [
      {
        title: 'Catch every call during a heatwave or cold snap',
        description:
          'Missed call gets an instant text — “on a job, what’s happening, can call back in 30.” Most stop dialling the next company.',
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
          'For services and tune-ups, customers pick a slot themselves. The office stops being a calendar.',
        icon: Calendar,
        features: [
          'Online booking for services and tune-ups',
          'Reminders the day before',
          'Reschedule link instead of a no-show',
        ],
      },
      {
        title: 'Bring last year’s installs back for service',
        description:
          '12-month nudge goes out automatically. Annual services stop falling off the radar.',
        icon: Bell,
        features: [
          'Annual service reminders sent automatically',
          'Repeat demand without anyone remembering',
          'Customers feel looked after, not chased',
        ],
      },
      {
        title: 'Close the install quotes that go quiet',
        description:
          'Boiler swap quote sent Monday, automatic check-in Friday, another the week after. Quietly closes more.',
        icon: Wrench,
        features: [
          'Quote follow-up at the right intervals',
          'Pending installs visible in one place',
          'Closing rate goes up without nagging',
        ],
      },
      {
        title: 'Show up first when local people search',
        description:
          'Service pages, Google profile, and reviews lined up so the right area finds you first.',
        icon: Search,
        features: [
          'Service pages for the work and areas you want',
          'Found on Maps for local searches',
          'Reviews that catch up to the workload',
        ],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'What Actually Changes',
    title: 'A heatwave week, before and after',
    description: 'The work stays. The chasing and the missed calls stop.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How it runs now',
        items: [
          'Twenty missed calls in a heatwave week. Half went elsewhere.',
          'A £5,200 boiler quote went quiet for two weeks. No follow-up sent.',
          'Last year’s installs never got their annual service nudge.',
          '“Meant to ask for a review” — said about hundreds of jobs.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it runs after',
        items: [
          'Missed calls get an instant text. Most wait the 30 minutes.',
          'Quotes get followed up automatically. More close, none feel pestered.',
          'Annual service reminders go out at 12 months. Repeat demand smooths out.',
          'Every customer gets asked the day after. Reviews catch up to the work.',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Where Most HVAC Companies Start',
    title: 'Three stages — most businesses feel one of them more than the others',
    description: 'Pick whichever costs you the most jobs right now.',
    packages: [
      {
        name: 'Stop missing the heatwave and cold-snap calls',
        description: 'For when seasonal call spikes go past the office and the team can’t answer fast enough.',
        price: 'Stage 1',
        priceDetail: 'Start here if missed calls during peak weeks is the biggest leak',
        features: [
          'Missed-call text-back the moment you can’t answer',
          'Urgent vs scheduled triaged automatically',
          'Most callers wait instead of dialling the next company',
        ],
      },
      {
        name: 'Close the install quotes that go quiet',
        description: 'For when boiler swaps and new installs get quoted and you never hear back.',
        price: 'Stage 2',
        priceDetail: 'Start here if quote-to-install conversion is the leak',
        features: [
          'Quote follow-ups at the right intervals',
          'Pending installs visible in one place',
          'No more “what happened to that boiler quote?”',
        ],
        popular: true,
      },
      {
        name: 'Bring every install back for annual service',
        description: 'For when last year’s installs never got their service reminder.',
        price: 'Stage 3',
        priceDetail: 'Start here if repeat-service demand is the weak spot',
        features: [
          'Annual service reminders sent automatically',
          'Review requests after every job',
          'Repeat demand smooths out the seasonal peaks',
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
        trigger: 'A “no cool air, baby in the house” call comes in during a heatwave.',
        actions: [
          'Missed call gets an instant text within seconds',
          'They get told you’re on a job and when you’ll be free',
          'Most wait. The truly urgent ones get flagged.',
        ],
      },
      {
        trigger: 'A boiler install quote was sent Monday and went quiet.',
        actions: [
          'A friendly check-in goes out Friday',
          'Another a week later if no reply',
          'Quote-to-install quietly improves',
        ],
      },
      {
        trigger: 'It’s 12 months since a system was installed.',
        actions: [
          'A polite annual service reminder goes out',
          'Booking link in the same message',
          'Repeat demand stops depending on memory',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'hvac-workflow-examples',
  };

  const exploreData = {
    badge: 'Related',
    description:
      'The other parts of the system that come up most often for HVAC companies trying to stop missing work.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description:
          'See the core system layer that holds HVAC service demand, booking, and follow-up together.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'Booking & Scheduling System',
        description: 'Support service booking, reminders, and clearer appointment handling.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen emergency and maintenance visibility in local search.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description: 'Turn completed service into reviews and stronger local trust.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Things HVAC owners usually ask',
    description: 'Straight answers about how this fits an HVAC business.',
    faqs: [
      {
        question: 'The team is on the roof all day. Will this need someone in the office?',
        answer:
          'No. The whole point is that it runs while the team is working. You’ll see what came in on your phone between calls, but nothing waits on you to operate it.',
      },
      {
        question: 'How does the missed-call text-back actually work?',
        answer:
          'A call comes in during a heatwave week. It rings out. Within seconds the caller gets a text — “on a job, can call back in 30, what’s the issue?” Most stop dialling the next company.',
      },
      {
        question: 'Can it bring last year’s installs back for annual service?',
        answer:
          'Yes — a polite reminder goes out at 12 months with a booking link. Annual service stops depending on someone in the office remembering.',
      },
      {
        question: 'Can it handle quote follow-ups for boiler swaps and new installs?',
        answer:
          'Yes — friendly check-in messages go out at the right intervals after a quote is sent. Quote-to-install conversion changes noticeably without anybody chasing.',
      },
      {
        question: 'How do I get more reviews without nagging?',
        answer:
          'A polite request goes out the day after the job, when the heating or cooling is back on. People who would have meant to leave one actually do.',
      },
      {
        question: 'Do I need to scrap my current website?',
        answer:
          'Usually not. We look at what you have first. The leak is normally the bit between the call coming in and the review going up — not the site itself.',
      },
    ],
  };

  return {
    slug: 'hvac-companies',
    industries: ['hvac'],
    systems: [
      'smart-website-systems',
      'ai-lead-handling',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['emergency-handling', 'missed-calls', 'review-generation'],
    type: 'detail',
    parentSlug: 'home-services',
    seo: {
      title: 'HVAC Companies — Stop Losing Heatwave Calls, Install Quotes & Annual Services | MindWP',
      description:
        'For HVAC where heatwave calls overflow, boiler quotes go quiet, and last year’s installs never get their annual service reminder. We put the system in place that catches the calls, closes the installs, and brings customers back yearly.',
      keywords: [
        'hvac website design',
        'hvac lead generation website',
        'hvac marketing system',
        'hvac contractor website system',
        'hvac reputation management system',
      ],
      canonical: '/industries/home-services/hvac-companies',
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
        'If heatwave calls go to voicemail, if install quotes go quiet, or if annual services never get reminded — walk us through how the business runs and we’ll show you the first thing worth fixing.',
    },
  };
}

export const hvacCompaniesIndustryPageData: IndustryPageData = buildHvacCompaniesIndustryPageData();
