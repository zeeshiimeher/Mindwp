import {
  Calendar,
  Clock,
  Compass,
  Eye,
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
    title:
      'Patio Quote Sent In April. Decision In June. Six Other Landscapers Got A Look In Between.',
    description:
      'Landscaping decisions usually take weeks, not one phone call. The first warm weekend fills the inbox fast, then the homeowner slows down, compares ideas, waits for the weather to settle, and the quote often goes to whoever stayed in touch while everyone else let it drift into summer.',
    list: ['Slow decisions', 'Spring backlogs', 'Drifting quotes'],
    cssPrefix: 'landscaping-companies-hero',
  };

  const operatingPatternsData = {
    badge: 'Where The Season Slips',
    title: 'Where landscapers actually lose the season',
    description:
      'It is rarely one dramatic day that causes the loss. More often it is the slow erosion of an inbox that fills in March, gets replied to unevenly in April, and still has open quotes nobody fully understands by June.',
    benefits: [
      {
        icon: Sprout,
        title: 'First warm weekend, twenty quote requests, five replied to by Friday',
        description:
          'You are on a job and the inbox triples before anyone really has a chance to catch up. By the time the rain comes back, fifteen homeowners have already spoken to other landscapers and you do not even know which fifteen are still worth calling back.',
        iconType: 'primary' as const,
      },
      {
        icon: Hourglass,
        title: 'A patio quote sat open for six weeks while the homeowner thought about it',
        description:
          'Eight grand, quote sent in April, then no nudge in May while everybody assumed the homeowner would come back when ready. By June they have seen two more quotes, talked it through at home, and chosen someone while you still thought it was only waiting.',
        iconType: 'primary' as const,
      },
      {
        icon: Repeat,
        title: 'Last year\u2019s monthly maintenance regular never re-engaged',
        description:
          'They had you in every month until October, then winter happened and nobody spoke again. Spring came round, nobody nudged them early, and a different firm started cutting in March before you even realised they had drifted.',
        iconType: 'secondary' as const,
      },
      {
        icon: Eye,
        title: 'Open quotes living across email, paper notes and a phone',
        description:
          'Nobody can scan the open list in ten seconds because half of it lives in email and the rest lives in notes and phones. The garden refit that needed one polite check-in in May is now stale by July.',
        iconType: 'accent' as const,
      },
    ],
    columns: 4 as const,
  };

  const comparisonData = {
    badge: 'A Six-Week Decision',
    title: 'A spring quote, before and after',
    description:
      "Same gardens and same crew, but a very different outcome once somebody actually holds the quote through the slow middle. What changes is whether you stay in the homeowner's head while they take their time deciding.",
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
      'Each piece handles one part of the slow middle of a landscaping decision, when the homeowner is still comparing ideas, timing, and price. None of them ask you to come off a job just to keep the quote alive.',
    featureCategories: [
      {
        title: 'Catch the spring-surge enquiry inside a minute',
        description:
          'Calls and forms fire a real-sounding text-back that captures the property and the job before the enquiry disappears into the spring backlog. That buys you time while the homeowner is still figuring out who to get out for a proper look.',
        icon: Sprout,
        features: [
          'Text-back inside 60 seconds',
          'Property and job type captured up front',
          'Homeowner knows you have seen it',
        ],
      },
      {
        title: 'Make every open quote visible in one place',
        description:
          'Refit, patio, lawn, and maintenance quotes sit on a single board sorted by how warm they still are and how old they have become. The office can scan it in ten seconds instead of guessing which spring jobs are still live.',
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
          'A friendly check-in goes out a few days after the quote, and again a week or two later while the homeowner is still thinking it over. It reads like a real person in the office, not something automated and overly smooth.',
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
          'A quiet nudge goes to lapsed maintenance regulars a few weeks before spring really starts moving. Most of them re-book without much thought because you reached out before somebody else filled the slot in their head.',
        icon: Repeat,
        features: [
          'Lapsed regular nudges before the season starts',
          'Maintenance diary fills before the surge',
          'Less surge dependency every spring',
        ],
      },
      {
        title: 'A short ask after a finished garden',
        description:
          'The day after a refit lands, while the homeowner is still wandering out with a cup of tea and looking at it again, a friendly review request goes out. That is when the work still feels vivid enough to talk about properly.',
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
      'Most landscaping firms can hear one of these problems louder than the others as soon as spring starts stacking work up. Start with the leak that is costing the most jobs across the whole season, not just this week.',
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
          'For when last year\u2019s monthly regulars stopped in October and nobody nudged them in March.',
        price: 'Stage 2',
        priceDetail: 'Start here if maintenance retention is the gap',
        features: [
          'Lapsed regular nudge before the season starts',
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
    description:
      'These are the supporting services landscapers tend to lean on most once they can see where spring demand, slow decisions, and lapsed regulars are slipping. Each one helps hold follow-up, visibility, proof, or reactivation together a bit better.',
    cards: [
      {
        icon: Wrench,
        title: 'Smart Website Systems',
        description:
          'Helps enquiry, survey, and quote handling stay connected through the spring surge instead of fading apart once the inbox starts filling.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'CRM Automation',
        description:
          'Keeps the open quote board, the friendly check-ins, and the lapsed-regular nudges moving without somebody having to remember every one by hand.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Compass,
        title: 'Local Authority & SEO',
        description:
          'Helps you stay visible when the first warm weekend hits and homeowners start searching for patios, gardens, and regular maintenance again.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Reviews',
        description:
          'Turns finished patios and refits into proof on Maps and search, so the next homeowner comparing ideas sees real work that still feels fresh.',
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
    description:
      'Straight answers about slower patio decisions, spring demand, and how to stop good quotes drifting across the season.',
    faqs: [
      {
        question: 'Most of our patio quotes go quiet for a month. Will a chase actually help?',
        answer:
          'Yes \u2014 that is the moment most of them get lost. A friendly check-in a few days after the quote, and another a week or two on, keeps you in the homeowner\u2019s head while they make up their mind.',
      },
      {
        question: 'Will the chase make us look pushy?',
        answer:
          'No. It reads like a person at the office, fires at sensible intervals, and most homeowners are glad someone checked back in while they were still comparing ideas and prices.',
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
        question: 'Will homeowners feel they got an automated reply on the first contact?',
        answer:
          'No. The first message reads like the office wrote it. Short, useful, and clear about when you will be in touch next.',
      },
      {
        question: 'When does the review request go out?',
        answer:
          'The day after a finished garden, while the homeowner is still wandering out with a cup of tea looking at it.',
      },
    ],
  };

  return {
    seo: {
      title: 'Landscapers \u2014 Stop Patio Quotes Drifting, Bring Regulars Back | MindWP',
      description:
        'For landscapers whose patio quotes drift for six weeks while the homeowner mulls, and whose lapsed regulars never re-engage in spring. Open quote board, friendly check-ins, lapsed-regular nudges.',
      canonical: '/industries/home-services/landscaping-companies',
    },
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
        'Walk us through a recent refit or patio quote that drifted, when it went out, and when anyone last followed it up. We will tell you what to sort first.',
    },
  };
}

export const landscapingCompaniesIndustryPageData: IndustryPageData =
  buildLandscapingCompaniesIndustryPageData();
