import {
  Calendar,
  ClipboardList,
  Compass,
  Eye,
  FileSearch,
  Hourglass,
  MessageSquare,
  Phone,
  Star,
  Wrench,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildRoofingCompaniesIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Roofing Companies',
    title: 'Three Quotes On The Kitchen Table. Yours Was The One Nobody Chased.',
    description:
      'A re-roof is a six-week conversation, not a phone call. The homeowner asks three roofers up the ladder, sits with three quotes for a fortnight, talks to the spouse, talks to the neighbour. The job goes to whichever firm stayed in the conversation. Most of the work that walks past a roofing firm walks past in that quiet middle, where nobody followed up because nobody knew it was still open.',
    list: ['Quote silence', 'Slow decisions', 'Lost re-roofs'],
    cssPrefix: 'roofing-companies-hero',
  };

  const operatingPatternsData = {
    badge: 'Where The Decision Slips',
    title: 'Where roofers actually lose the re-roof',
    description:
      'The roof is rarely the problem. The problem is the four weeks between the survey and the deposit, where nobody at the firm knows whose head they are still in.',
    benefits: [
      {
        icon: Hourglass,
        title: 'Quote sent Monday, no idea by Friday whether you are still in the running',
        description:
          'Twelve grand on the table. The homeowner is mulling. Nobody nudged. By the time someone wonders, another roofer has been chosen.',
        iconType: 'primary' as const,
      },
      {
        icon: ClipboardList,
        title: 'Open quotes living in three different folders',
        description:
          'One in email, one written on the back of a survey sheet, one in someone\u2019s phone. Nobody can scan the open list in ten seconds, so half of them never get touched again.',
        iconType: 'primary' as const,
      },
      {
        icon: FileSearch,
        title: 'Insurance claim job stalls and the homeowner stops trusting the timeline',
        description:
          'Photos sent to a personal phone. Adjuster paperwork in a different thread. Two weeks pass with no update and the homeowner quietly starts asking around.',
        iconType: 'secondary' as const,
      },
      {
        icon: Phone,
        title: 'Storm-morning calls overflow, but most of the lost work is in the quiet that follows',
        description:
          'A windy night sends twenty calls in. The biggest job of the year, though, is still the re-roof quote sitting from a fortnight ago that nobody warmed back up.',
        iconType: 'accent' as const,
      },
    ],
    columns: 4 as const,
  };

  const comparisonData = {
    badge: 'A Six-Week Decision',
    title: 'A re-roof conversation, before and after',
    description:
      'Same survey. Same crew. What changes is whether you stay in the conversation while the homeowner is making up their mind.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How the quote runs now',
        items: [
          'Quote goes out. Nobody at the firm knows when, or whether to chase.',
          'A week passes. The homeowner has now seen two more quotes. You have no idea.',
          'Open quotes live in three different places. Nobody can read the list in ten seconds.',
          'You find out you lost it two months later from the neighbour.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How the quote runs after',
        items: [
          'Every quote gets a friendly check-in a few days later, and again a week or so after.',
          'Open quotes sit on a single board the office can scan in ten seconds.',
          'You can see who has gone quiet, who is still warm, and who needs a price tweak.',
          'Half the quotes that used to drift get closed because someone stayed in the conversation.',
        ],
      },
    ],
  };

  const systemLayersData = {
    badge: 'What Goes In',
    title: 'Five pieces sized for a long sales cycle and a roof full of comparisons',
    description:
      'Each piece does one job in the middle weeks of a re-roof decision. None of them ask the crew to come off a roof to type.',
    featureCategories: [
      {
        title: 'Make every open quote visible in one place',
        description:
          'Re-roof, repair and insurance quotes sit on a single board, sorted by how warm and how old. The office can scan it in ten seconds.',
        icon: Eye,
        features: [
          'One board for every open quote',
          'Status visible at a glance',
          'No more "did anyone chase that?"',
        ],
      },
      {
        title: 'Stay in the conversation while the homeowner mulls',
        description:
          'A friendly check-in fires a few days after the quote, and again a week or so later. It reads like a person at the office, not a sequence.',
        icon: MessageSquare,
        features: [
          'Auto chase at the right intervals',
          'Reads like a person, not a robot',
          'Quotes warmed up before they go cold',
        ],
      },
      {
        title: 'Pull insurance jobs out of paperwork limbo',
        description:
          'Photos, adjuster paperwork and the homeowner\u2019s thread all attached to the address. Nothing lives on a personal phone.',
        icon: FileSearch,
        features: [
          'Photos and paperwork in one place per job',
          'Address, claim and timeline tied together',
          'Homeowner gets an update before they start asking around',
        ],
      },
      {
        title: 'Hold the storm-morning calls without it being chaos',
        description:
          'Missed calls fire a short, real-sounding text in under a minute capturing the address and the damage. The inbox triages by urgency, not by who shouted last.',
        icon: Phone,
        features: [
          'Text-back inside 60 seconds',
          'One queue across calls, photos and forms',
          'Crew sees who needs a tarp on first',
        ],
      },
      {
        title: 'A short ask the day the scaffold comes down',
        description:
          'While the homeowner is still admiring the new roof from the front lawn, a friendly review request lands. They actually leave one because they were just asked at the right moment.',
        icon: Star,
        features: [
          'Review ask the day the scaffold comes down',
          'Reviews on the page that gets the next click',
          'Reputation that catches up to the actual workload',
        ],
      },
    ],
    columns: 3 as const,
  };

  const pathwaysData = {
    badge: 'Where Most Roofers Start',
    title: 'You do not have to fix the whole sales cycle at once',
    description:
      'Most roofing firms feel one of these louder than the others. Pick the loudest leak.',
    packages: [
      {
        name: 'Stop re-roof quotes drifting',
        description:
          'For when small repairs flow fine but the twelve-grand quotes go quiet for a fortnight and nobody knows where you stand.',
        price: 'Stage 1',
        priceDetail: 'Start here if quote follow-up is the loudest leak',
        features: [
          'One board for every open quote',
          'Auto chase a few days after the quote, and again a week later',
          'Old quotes warmed up before they go cold',
        ],
        popular: true,
      },
      {
        name: 'Tighten insurance and storm work',
        description:
          'For when claim jobs stall in paperwork and storm-morning calls outpace the office line.',
        price: 'Stage 2',
        priceDetail: 'Start here if claims and surge handling are the gap',
        features: [
          'Photos and paperwork attached to the address',
          'Text-back inside a minute on every missed storm call',
          'One queue across calls, photos and forms',
        ],
      },
      {
        name: 'Get the reputation onto the map',
        description:
          'For when the work is good and the Google profile does not show it.',
        price: 'Stage 3',
        priceDetail: 'Start here if the review count is the embarrassment',
        features: [
          'Review ask the day the scaffold comes down',
          'Reviews on the page next homeowners actually look at',
          'Local visibility for the postcodes that pay',
        ],
      },
    ],
  };

  const exploreData = {
    badge: 'Related',
    description: 'The other parts roofing firms tend to lean on most.',
    cards: [
      {
        icon: Wrench,
        title: 'Smart Website Systems',
        description: 'Holds enquiry, survey and quote flow together through a long decision cycle.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'CRM Automation',
        description: 'Holds the open quote board and the friendly check-ins that close re-roofs.',
        href: '/services/crm-automation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Compass,
        title: 'Local Authority & SEO',
        description: 'Visibility for "roofer near me" the morning after a windy night.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Reviews',
        description: 'Turns finished re-roofs into proof on Maps and search.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'What roofing firms ask first',
    description: 'Direct, no hedging.',
    faqs: [
      {
        question: 'Most of our re-roof quotes go quiet for two weeks. Will a chase actually help?',
        answer:
          'Yes \u2014 that is the moment most of them get lost. A friendly check-in a few days after the quote, and again a week or so later, keeps you in the conversation while the homeowner is still deciding.',
      },
      {
        question: 'Will the chase make us look pushy?',
        answer:
          'No. It reads like a person at the office, fires at sensible intervals, and most homeowners thank you for the nudge.',
      },
      {
        question: 'How does the open quote board actually help us close more?',
        answer:
          'You can see who is warm, who has gone quiet, and who has not been touched in a week. The office stops guessing, the crew stops finding out from the neighbour.',
      },
      {
        question: 'Can it handle insurance work and storm-claim photos?',
        answer:
          'Yes. Photos and adjuster paperwork land in one place per job, attached to the address, instead of being scattered across personal phones.',
      },
      {
        question: 'Storm mornings can still bury the line. Does this help?',
        answer:
          'Yes. Every missed call gets a short, real text inside a minute and the inbox triages by urgency. It is not the biggest lever for a roofer \u2014 the bigger lever is the quote pipeline \u2014 but it stops the worst of the surge bleed.',
      },
      {
        question: 'When does the review request go out without being awkward?',
        answer:
          'The day the scaffold comes down, while the homeowner is still admiring the new roof.',
      },
    ],
  };

  return {
    slug: 'roofing-companies',
    industries: ['roofing'],
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
      title: 'Roofing Companies \u2014 Stop Re-Roof Quotes Drifting | MindWP',
      description:
        'For roofers who watch big re-roof quotes go quiet for a fortnight while the homeowner sits with three on the kitchen table. Open quote board, friendly check-ins, insurance work in one place.',
      keywords: [
        'roofing re-roof quote follow up',
        'roofing quote pipeline',
        'roofing insurance claim handling',
        'roofing review automation',
        'roofer local SEO',
      ],
      canonical: '/industries/home-services/roofing-companies',
    },
    hero: { ...heroData },
    operatingPatterns: operatingPatternsData,
    comparison: comparisonData,
    systemLayers: systemLayersData,
    pathways: pathwaysData,
    explore: exploreData,
    faq: faqData,
    cta: {
      title: 'Tell us about the last re-roof you lost in the silence',
      description:
        'Walk us through a recent re-roof quote that went quiet \u2014 when it went out, when you last heard back, who eventually got the job. We will tell you what to plug first.',
    },
  };
}

export const roofingCompaniesIndustryPageData: IndustryPageData =
  buildRoofingCompaniesIndustryPageData();
