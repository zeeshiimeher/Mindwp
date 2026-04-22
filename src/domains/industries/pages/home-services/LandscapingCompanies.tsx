import {
  Calendar,
  Clock,
  Compass,
  Eye,
  Flower2,
  Hourglass,
  Repeat,
  Sprout,
  Star,
  Wrench,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildLandscapingCompaniesIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Landscapers',
    title: 'Patio Quote Sent In April. Decision In June. Six Other Landscapers Got A Look In Between.',
    description:
      'Landscaping decisions are not made over the phone. They are made over six weeks of mulling, comparing, and asking the neighbour. The first warm weekend of spring fills the inbox in days. By midsummer, half of those quotes are still open and nobody at the firm can tell which are warm, which are cold, and which lapsed maintenance regular has just hired someone else for the season.',
    list: ['Slow decisions', 'Drifting quotes', 'Lost regulars'],
    cssPrefix: 'landscaping-companies-hero',
  };

  const operatingPatternsData = {
    badge: 'Where The Season Slips',
    title: 'Where landscapers actually lose the season',
    description:
      'It is rarely a single bad day. It is the slow erosion of an inbox that fills in March and goes unread by June.',
    benefits: [
      {
        icon: Sprout,
        title: 'First warm weekend, twenty quote requests, five replied to by Friday',
        description:
          'You are on a job. The inbox triples. By the time the rain comes back, fifteen homeowners have asked someone else and you do not even know which fifteen.',
        iconType: 'primary' as const,
      },
      {
        icon: Hourglass,
        title: 'A patio quote sat open for six weeks while the homeowner thought about it',
        description:
          'Eight grand. Quote sent in April. Nobody nudged in May. By June the homeowner has had two more quotes, picked one, and you never knew the conversation was still alive.',
        iconType: 'primary' as const,
      },
      {
        icon: Repeat,
        title: 'Last year\u2019s monthly maintenance regular never re-engaged',
        description:
          'They had you in every month until October. Spring came round again, nobody nudged, and a different firm started cutting in March.',
        iconType: 'secondary' as const,
      },
      {
        icon: Eye,
        title: 'Open quotes living across email, paper notes and a phone',
        description:
          'Nobody can scan the open list in ten seconds. The garden refit that needed one polite check-in in May is now three months stale.',
        iconType: 'accent' as const,
      },
    ],
    columns: 4 as const,
  };

  const comparisonData = {
    badge: 'A Six-Week Decision',
    title: 'A spring quote, before and after',
    description:
      'Same gardens. Same crew. What changes is whether you stay in the homeowner\u2019s head while they take their time.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How spring runs now',
        items: [
          'Inbox triples in a week. Five quotes go out, the rest stay on a list nobody reads.',
          'Quote sent in April. No nudge in May. By June you have no idea if you are still in the running.',
          'Open quotes scattered across email, paper and a phone. Nobody can read the list at a glance.',
          'Last year\u2019s monthly regulars come back to a quiet inbox. They book elsewhere.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How spring runs after',
        items: [
          'Every enquiry gets a short reply inside a minute, even from the top of a ladder.',
          'Each quote gets a friendly check-in a few days later, and another a week or two on.',
          'Open quotes sit on a single board. You can see who is warm, who is cold, who needs a tweak.',
          'Lapsed regulars get a quiet nudge before the season starts. Most of them re-book without thinking.',
        ],
      },
    ],
  };

  const systemLayersData = {
    badge: 'What Goes In',
    title: 'Five pieces sized for one big season and three quiet ones',
    description:
      'Each piece does one job in the slow middle of a homeowner\u2019s decision. None of them ask you to come off a job to type.',
    featureCategories: [
      {
        title: 'Catch the spring-surge enquiry inside a minute',
        description:
          'Calls and forms fire a real-sounding text-back capturing the property and the job. The homeowner stops shopping around for a day or two.',
        icon: Sprout,
        features: [
          'Text-back inside 60 seconds',
          'Property and job type captured up front',
          'Customer knows you have seen it',
        ],
      },
      {
        title: 'Make every open quote visible in one place',
        description:
          'Refit, patio, lawn and maintenance quotes sit on a single board sorted by how warm and how old. The office can scan it in ten seconds.',
        icon: Eye,
        features: [
          'One board for every open quote',
          'Status visible at a glance',
          'No more "did anyone get back to her?"',
        ],
      },
      {
        title: 'Stay in the conversation through the slow middle',
        description:
          'A friendly check-in fires a few days after the quote, and again a week or two on. It reads like a person at the office, not a sequence.',
        icon: Clock,
        features: [
          'Auto chase at the right intervals',
          'Reads like a person, not a robot',
          'Quotes warmed up before the season closes',
        ],
      },
      {
        title: 'Bring last year\u2019s regulars back before the first cut',
        description:
          'A quiet nudge fires to lapsed maintenance customers a few weeks before spring. Most of them re-book without thinking.',
        icon: Repeat,
        features: [
          'Lapsed-customer nudges before the season starts',
          'Maintenance diary fills before the surge',
          'Less surge dependency every spring',
        ],
      },
      {
        title: 'A short ask after a finished garden',
        description:
          'The day after a refit lands, while the homeowner is still wandering out with a cup of tea looking at it, a friendly review request goes out.',
        icon: Star,
        features: [
          'Review ask the day after',
          'Reviews on the page that gets the next click',
          'Reputation that finally matches the gardens',
        ],
      },
    ],
    columns: 3 as const,
  };

  const pathwaysData = {
    badge: 'Where Most Landscapers Start',
    title: 'You do not have to fix the whole season at once',
    description:
      'Most landscaping firms feel one of these louder than the others. Pick the loudest leak.',
    packages: [
      {
        name: 'Stop refit quotes drifting',
        description:
          'For when the spring inbox triples and most of the quotes go quiet for weeks while the homeowner mulls.',
        price: 'Stage 1',
        priceDetail: 'Start here if quote follow-up is the loudest leak',
        features: [
          'One board for every open quote',
          'Friendly check-in a few days after the quote, and again a week or two on',
          'Old quotes warmed up before the season closes',
        ],
        popular: true,
      },
      {
        name: 'Bring lapsed regulars back before the first cut',
        description:
          'For when last year\u2019s monthly customers stopped in October and nobody nudged them in March.',
        price: 'Stage 2',
        priceDetail: 'Start here if maintenance retention is the gap',
        features: [
          'Lapsed-customer nudge before the season starts',
          'Maintenance diary fills before the surge',
          'Less reliance on the spring rush',
        ],
      },
      {
        name: 'Catch the spring-surge enquiry properly',
        description:
          'For when the first warm weekend buries the inbox and only the loudest enquiries get a reply.',
        price: 'Stage 3',
        priceDetail: 'Start here if early-spring intake is the gap',
        features: [
          'Text-back inside a minute on every missed call',
          'One queue across calls, forms and DMs',
          'Job-type tag so refits surface above routine cuts',
        ],
      },
    ],
  };

  const exploreData = {
    badge: 'Related',
    description: 'The other parts landscapers tend to lean on most.',
    cards: [
      {
        icon: Wrench,
        title: 'Smart Website Systems',
        description: 'Holds enquiry, survey and quote flow together through spring surge.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'CRM Automation',
        description: 'Holds the open quote board, the friendly check-ins and the lapsed-regular nudges.',
        href: '/services/crm-automation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Compass,
        title: 'Local Authority & SEO',
        description: 'Visibility for "landscaper near me" the moment the sun comes out.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Reviews',
        description: 'Turns finished patios and refits into proof on Maps and search.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'What landscapers ask first',
    description: 'Direct, no hedging.',
    faqs: [
      {
        question: 'Most of our patio quotes go quiet for a month. Will a chase actually help?',
        answer:
          'Yes \u2014 that is the moment most of them get lost. A friendly check-in a few days after the quote, and another a week or two on, keeps you in the homeowner\u2019s head while they make up their mind.',
      },
      {
        question: 'Will the chase make us look pushy?',
        answer:
          'No. It reads like a person at the office, fires at sensible intervals, and most homeowners thank you for the nudge.',
      },
      {
        question: 'How does the open quote board help us through spring?',
        answer:
          'You can see, in ten seconds, who is warm, who has gone cold and who has not been touched. The big jobs stop slipping under the routine maintenance enquiries.',
      },
      {
        question: 'How does the lapsed-regular nudge work?',
        answer:
          'A short, low-pressure message goes out a few weeks before the season starts to anyone who has not booked since the previous autumn. Most of them re-book without thinking.',
      },
      {
        question: 'Will customers feel they got an automated reply on the first contact?',
        answer:
          'No. The first message reads like the office wrote it. Short, useful, and tells them when you will be in touch.',
      },
      {
        question: 'When does the review request go out?',
        answer:
          'The day after a finished garden, while the homeowner is still wandering out with a cup of tea looking at it.',
      },
    ],
  };

  return {
    slug: 'landscaping-companies',
    industries: ['landscaping'],
    systems: [
      'smart-website-systems',
      'crm-automation',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['lead-management', 'client-reactivation', 'review-generation'],
    type: 'detail',
    parentSlug: 'home-services',
    seo: {
      title: 'Landscapers \u2014 Stop Patio Quotes Drifting, Bring Regulars Back | MindWP',
      description:
        'For landscapers whose patio quotes drift for six weeks while the homeowner mulls, and whose lapsed regulars never re-engage in spring. Open quote board, friendly check-ins, lapsed-regular nudges.',
      keywords: [
        'landscaper patio quote follow up',
        'landscaper open quote board',
        'landscaping customer retention',
        'landscaping review automation',
        'landscaper local SEO',
      ],
      canonical: '/industries/home-services/landscaping-companies',
    },
    hero: { ...heroData },
    operatingPatterns: operatingPatternsData,
    comparison: comparisonData,
    systemLayers: systemLayersData,
    pathways: pathwaysData,
    explore: exploreData,
    faq: faqData,
    cta: {
      title: 'Tell us about the patio quote that went quiet',
      description:
        'Walk us through a recent refit quote that drifted \u2014 when it went out, when you last heard back, who eventually did the job. We will tell you what to plug first.',
    },
  };
}


export const landscapingCompaniesIndustryPageData: IndustryPageData =
  buildLandscapingCompaniesIndustryPageData();
