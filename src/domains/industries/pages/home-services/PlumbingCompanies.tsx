import {
  AlarmClock,
  Compass,
  DropletIcon,
  Droplets,
  FileText,
  Inbox,
  Moon,
  PhoneOff,
  ShowerHead,
  Star,
  Wrench,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildPlumbingCompaniesIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Plumbing Firms',
    title: 'Stopcock In One Hand. Phone In The Other. They Were Already Calling Number Three.',
    description:
      'A pipe gives way at twenty past seven on a Tuesday. The homeowner is not browsing. They are scrolling their saved list of plumbers and dialling, one after the other, until somebody answers. By the time you see the missed call from dinner, another van is already driving over and the bathroom rebuild quote you might have been asked for next month belongs to someone else.',
    list: ['7pm bursts', 'Dial-down lists', 'Quiet refits'],
    cssPrefix: 'plumbing-companies-hero',
  };

  const operatingPatternsData = {
    badge: 'Where The Evening Bleeds',
    title: 'Where plumbing firms quietly lose the next homeowner',
    description:
      'Plumbing emergencies follow a pattern. Three phones in a row. The first to answer keeps the customer for the next ten years.',
    benefits: [
      {
        icon: Droplets,
        title: 'A burst at 7:14pm and you are eating dinner',
        description:
          'The phone rings out. They are already pressing call on the next saved number. By 7:18 they have a plumber. It is not you.',
        iconType: 'primary' as const,
      },
      {
        icon: Moon,
        title: 'Late-evening enquiries pile up untriaged until morning',
        description:
          'Forms, texts, missed calls between six and midnight. The morning starts with reading them in date order, not in order of who is still standing in water.',
        iconType: 'secondary' as const,
      },
      {
        icon: ShowerHead,
        title: 'A bathroom rebuild quote sits open for a fortnight',
        description:
          'Three grand. Quote sent Monday. By the next Tuesday the homeowner has two more on the table and yours is the one nobody chased.',
        iconType: 'accent' as const,
      },
      {
        icon: FileText,
        title: 'Insurance leak job stalls in paperwork limbo',
        description:
          'Photos on a personal phone. Address in a different thread. The claim drifts and the homeowner starts wondering if anyone is on it.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const workflowExamplesData = {
    badge: 'Three Evening Moments',
    title: 'Three evenings, and what changes',
    description:
      'These are the moments at the top of the page. This is what happens to them after.',
    workflows: [
      {
        trigger: '7:14pm Tuesday \u2014 burst pipe, missed call to the office',
        actions: [
          'A short text fires inside a minute capturing the address and what is leaking',
          'The homeowner stops scrolling and waits for the callback',
          'The enquiry sits at the top of the queue tagged "burst" by the time you finish dinner',
        ],
      },
      {
        trigger: 'A WhatsApp at 11pm with a photo of a wet ceiling',
        actions: [
          'The image lands in one inbox attached to the address, not on a personal phone',
          'It is tagged "leak" and waiting first thing in the morning',
          'The morning starts with a triaged list, not three threads to piece together',
        ],
      },
      {
        trigger: 'A bathroom refit quote sent Monday, no reply by Friday',
        actions: [
          'A friendly check-in fires Friday morning',
          'The quote sits on a board with everything else still open',
          'The three-grand jobs stop dying in silence',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'plumbing-companies-workflow-examples',
  };

  const systemLayersData = {
    badge: 'What Goes In',
    title: 'Five pieces sized for a business where the next homeowner is on the phone right now',
    description:
      'Each piece does one job in one of the moments above. None of them ask you to come off a job.',
    featureCategories: [
      {
        title: 'Catch the call before they reach the next number on the list',
        description:
          'Every missed call fires a short text in under a minute. It captures the address and what is leaking. The homeowner stops dialling.',
        icon: PhoneOff,
        features: [
          'Text-back inside 60 seconds',
          'Address and emergency captured up front',
          'Customer knows you have seen it',
        ],
      },
      {
        title: 'Pull every channel into one queue overnight',
        description:
          'Calls, forms, texts and WhatsApps from the evening land in one place tagged by urgency \u2014 not by which channel they came in on.',
        icon: Inbox,
        features: [
          'One queue across calls, forms, texts and WhatsApp',
          'Tagged by urgency overnight',
          'Morning starts clean, not as a triage exercise',
        ],
      },
      {
        title: 'Lift bursts and leaks above the routine',
        description:
          '"Burst", "no water", "flooding" surface above a tap drip. The dispatcher does not have to guess which is which.',
        icon: AlarmClock,
        features: [
          'Urgency tag the moment it lands',
          'Bursts and leaks read first',
          'Routine bookings still flow through',
        ],
      },
      {
        title: 'Stop refit quotes drifting after the survey',
        description:
          'Bathroom and kitchen refit quotes get a polite check-in a few days later. Open quotes live on a board the office can scan.',
        icon: DropletIcon,
        features: [
          'Auto chase on every refit quote',
          'Open quote board the office can see',
          'Big-ticket jobs stop dying in silence',
        ],
      },
      {
        title: 'A short ask after the leak is fixed and the kitchen is dry',
        description:
          'The day after the fix, while the homeowner is still relieved, a friendly review request lands. They actually leave one because they were just asked at the right moment.',
        icon: Star,
        features: [
          'Review ask the day after the fix',
          'Reviews on the page that gets the next click',
          'Reputation that finally matches the work',
        ],
      },
    ],
    columns: 3 as const,
  };

  const pathwaysData = {
    badge: 'Where Most Plumbers Start',
    title: 'You do not have to fix the whole evening at once',
    description:
      'Most plumbing firms feel one of these louder than the others. Pick the loudest leak.',
    packages: [
      {
        name: 'Catch the after-hours call',
        description:
          'For when burst-pipe calls between six and midnight reach a saved number lower down their list before they reach you.',
        price: 'Stage 1',
        priceDetail: 'Start here if missed evening calls are the loudest leak',
        features: [
          'Text-back inside a minute on every missed call',
          'One queue across calls, forms and texts',
          'Urgency tag so bursts sit at the top',
        ],
        popular: true,
      },
      {
        name: 'Stop refit quotes drifting',
        description:
          'For when emergency work flows fine but the bigger bathroom and kitchen quotes go quiet for a fortnight.',
        price: 'Stage 2',
        priceDetail: 'Start here if big-ticket follow-up is the gap',
        features: [
          'Auto chase on every refit quote',
          'Open quote board for the office',
          'Old quotes warmed up before they go cold',
        ],
      },
      {
        name: 'Get the reputation onto the map',
        description:
          'For when the work is good and the Google profile does not show it.',
        price: 'Stage 3',
        priceDetail: 'Start here if the review count is the embarrassment',
        features: [
          'Review ask the day after the fix',
          'Reviews on the page next homeowners actually look at',
          'Local visibility for the postcodes that pay',
        ],
      },
    ],
  };

  const exploreData = {
    badge: 'Related',
    description: 'The other parts plumbing firms tend to lean on most.',
    cards: [
      {
        icon: Wrench,
        title: 'Smart Website Systems',
        description: 'Holds enquiry, dispatch and quote flow together through a busy week.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: PhoneOff,
        title: 'AI Lead Handling',
        description: 'Catches after-hours bursts before the next number is dialled.',
        href: '/services/ai-lead-handling',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Compass,
        title: 'Local Authority & SEO',
        description: 'Visibility for "emergency plumber near me" the moment a stopcock turns.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Reviews',
        description: 'Turns finished fixes into proof on Maps and search.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'What plumbing firms ask first',
    description: 'Direct, no hedging.',
    faqs: [
      {
        question: 'Most calls come after six. Will the text-back actually help then?',
        answer:
          'That is the moment it earns its keep. The homeowner gets a short, real-sounding text in under a minute and stops calling the next saved number.',
      },
      {
        question: 'How does the urgency tag work without us setting it manually?',
        answer:
          'It reads keywords like "burst", "no water", "flooding" and tags accordingly. The dispatcher overrides it whenever they want.',
      },
      {
        question: 'Can it pull WhatsApp photos of leaks into the same queue?',
        answer:
          'Yes. Photos and threads land in one inbox attached to the address, not on a personal phone. The morning starts with one place to read.',
      },
      {
        question: 'Will the homeowner feel they got a robot reply during a panic?',
        answer:
          'No. The first message reads like the office wrote it. Short, useful, and tells them when you will ring back.',
      },
      {
        question: 'Will the chase on bathroom refit quotes sound pushy?',
        answer:
          'No. It reads like a person, fires a few days after the quote, and most homeowners thank you for the nudge.',
      },
      {
        question: 'When does the review request go out without being awkward?',
        answer:
          'The day after the fix, while the kitchen is dry and the relief is fresh.',
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
    topics: ['missed-calls', 'lead-management', 'review-generation'],
    type: 'detail',
    parentSlug: 'home-services',
    seo: {
      title: 'Plumbing Firms \u2014 Catch The 7pm Burst, Close The Bathroom Quote | MindWP',
      description:
        'For plumbers whose burst-pipe calls reach the next saved number before they reach you, and whose bathroom refit quotes go silent for a fortnight. After-hours triage, big-ticket chase, reviews on Maps.',
      keywords: [
        'emergency plumber missed call',
        'plumbing after hours call handling',
        'bathroom refit quote follow up',
        'plumbing review automation',
        'plumber local SEO',
      ],
      canonical: '/industries/home-services/plumbing-companies',
    },
    hero: { ...heroData },
    operatingPatterns: operatingPatternsData,
    workflowExamples: workflowExamplesData,
    systemLayers: systemLayersData,
    pathways: pathwaysData,
    explore: exploreData,
    faq: faqData,
    cta: {
      title: 'Tell us about last Tuesday\u2019s 7pm call',
      description:
        'Walk us through the last after-hours emergency that hit voicemail. We will tell you what to plug first.',
    },
  };
}

export const plumbingCompaniesIndustryPageData: IndustryPageData =
  buildPlumbingCompaniesIndustryPageData();
