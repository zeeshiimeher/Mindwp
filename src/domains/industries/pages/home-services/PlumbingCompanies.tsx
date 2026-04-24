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
      'A leak starts spreading at twenty past seven and the homeowner is not browsing options calmly. They are ringing plumbers one after another until somebody answers, and by the time you see the missed call after dinner another van is already on the way and the later refit conversation has gone with it.',
    list: ['Water leaks', 'Missed evenings', 'Next number'],
    cssPrefix: 'plumbing-companies-hero',
  };

  const operatingPatternsData = {
    badge: 'Where The Evening Bleeds',
    title: 'Where plumbing firms quietly lose the next homeowner',
    description:
      'Plumbing emergencies follow the same pattern again and again. Water is spreading, the caller is ringing three numbers in a row, and the first person to answer often keeps the homeowner for far more than just that one evening.',
    benefits: [
      {
        icon: Droplets,
        title: 'A burst at 7:14pm and you are eating dinner',
        description:
          'The phone rings out while you are eating dinner and they are already pressing call on the next saved number. By 7:18 they have a plumber on the way, and you do not even know the call mattered yet.',
        iconType: 'primary' as const,
      },
      {
        icon: Moon,
        title: 'Late-evening enquiries pile up untriaged until morning',
        description:
          'Forms, texts, and missed calls stack up between six and midnight while nobody has a clean way to sort them. The morning starts with reading them in date order, not in order of who is still standing in water or has a ceiling staining through.',
        iconType: 'secondary' as const,
      },
      {
        icon: ShowerHead,
        title: 'A bathroom rebuild quote sits open for a fortnight',
        description:
          'Three grand, quote sent Monday, then no follow-up while emergency work keeps interrupting the week. By the next Tuesday the homeowner has two more prices on the table and yours is the one nobody bothered to chase.',
        iconType: 'accent' as const,
      },
      {
        icon: FileText,
        title: 'Insurance leak job stalls in paperwork limbo',
        description:
          'Photos are on a personal phone, the address is in another thread, and the insurer wants details nobody can find quickly. The claim drifts and the homeowner starts wondering if anyone is properly on it at all.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const workflowExamplesData = {
    badge: 'Three Evening Moments',
    title: 'Three evenings, and what changes',
    description:
      'These are the kinds of after-hours moments that decide the week without much warning. This is what changes once the reply and follow-up stop depending on who happened to notice first.',
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
      'Each piece handles one of the pressure points above while you are still on the tools or on the road. None of them depend on you stopping the job in front of you just to hold the next one together.',
    featureCategories: [
      {
        title: 'Catch the call before they reach the next number on the list',
        description:
          'Every missed call fires a short text in under a minute and asks what is leaking and where. That is often enough to stop the homeowner dialling the next number while water is still spreading and the floor is getting worse.',
        icon: PhoneOff,
        features: [
          'Text-back inside 60 seconds',
          'Address and emergency captured up front',
          'Caller knows you have seen it',
        ],
      },
      {
        title: 'Pull every channel into one queue overnight',
        description:
          'Calls, forms, texts, and WhatsApps from the evening all land in one place and get tagged by urgency instead of by channel. That makes the first hour of the morning less like a search mission through yesterday\'s messages.',
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
          '"Burst", "no water", and "flooding" rise above a tap drip or slower repair request the moment they land. The dispatcher does not have to guess which call belongs at the top while somebody is still trying to contain the leak.',
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
          'Bathroom and kitchen refit quotes get a polite check-in a few days later instead of being buried by emergency work and forgotten. Open quotes live on a board the office can scan quickly before another busy day starts pulling attention away again.',
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
          'The day after the fix, while the kitchen is dry and the relief still feels fresh, a friendly review request lands. That is when people are most likely to leave one instead of meaning to and forgetting once normal life starts again.',
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
      'Most plumbing firms can hear one of these problems louder than the rest as soon as they look properly. Start with the leak that is costing the most work right now, not the one that sounds best on paper.',
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
    description: 'These are the supporting services plumbing firms tend to lean on most once they can see where evening calls, leak jobs, and refit quotes are slipping. Each one helps hold response, follow-up, proof, or visibility together a bit better.',
    cards: [
      {
        icon: Wrench,
        title: 'Smart Website Systems',
        description: 'Helps enquiry, dispatch, and quote handling stay connected through a busy week instead of splitting between calls, texts, and office memory.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: PhoneOff,
        title: 'AI Lead Handling',
        description: 'Catches after-hours bursts and leak calls before the next number is dialled while the homeowner is still standing in the problem.',
        href: '/services/ai-lead-handling',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Compass,
        title: 'Local Authority & SEO',
        description: 'Helps you stay visible for "emergency plumber near me" the moment the stopcock comes out and someone realises this is not waiting until tomorrow.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Reviews',
        description: 'Turns finished fixes into proof on Maps and search, so the next homeowner sees recent jobs that feel close to their own situation.',
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
    description:
      'Straight answers about after-hours leaks, the calls that come in while you are still on another job, and what actually helps before the next number gets the work.',
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
          'No. It reads like a person, fires a few days after the quote, and most homeowners are glad someone checked back in before the whole thing got lost behind other jobs and other prices.',
      },
      {
        question: 'When does the review request go out without being awkward?',
        answer:
          'The day after the fix, while the kitchen is dry and the relief is fresh.',
      },
    ],
  };

  return {
      seo: {
        title: 'Plumbing Firms \u2014 Catch The 7pm Burst, Close The Bathroom Quote | MindWP',
        description:
          'For plumbers whose burst-pipe calls reach the next saved number before they reach you, and whose bathroom refit quotes go silent for a fortnight. After-hours triage, big-ticket chase, reviews on Maps.',
        canonical: '/industries/home-services/plumbing-companies',
      },
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
          'Walk us through the last after-hours leak or burst call that hit voicemail and we will tell you what to sort first.',
      }
  };
}

export const plumbingCompaniesIndustryPageData: IndustryPageData =
  buildPlumbingCompaniesIndustryPageData();
