import {
  Bell,
  Calendar,
  Clock4,
  RotateCcw,
  Scissors,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildHairSalonsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Hair Salons',
    title:
      'She Wanted A Cut This Saturday. You Were Mid-Colour. Another Salon Replied In Two Minutes.',
    description:
      'Hair clients often want a chair this Saturday, after work, before a trip, or because they suddenly have a free hour. When the phone rings or the DM lands while someone is sitting in the chair mid-colour, the salon that shows a real slot first usually gets the booking.',
    list: ['Busy chair', 'Slow slots', 'Missed rebooks'],
    cssPrefix: 'hair-salons-hero',
  };

  const operatingPatternsData = {
    badge: 'Where Chairs Stay Empty',
    title: 'You are not losing clients to a better salon. You are losing them to a faster one.',
    description:
      'Most of the loss happens in small chair-side moments that feel harmless while the day is busy. An unanswered call, a late Saturday reply, or a missed rebook can quietly thin out next month before you notice it.',
    benefits: [
      {
        icon: Scissors,
        title: 'The DM landed mid-foil',
        description:
          'You were halfway through a colour with a client in the chair and gloves on. By the time you put the bowl down and checked the phone, that Saturday cut had already gone to a salon that answered while you were still working.',
        iconType: 'primary' as const,
      },
      {
        icon: Clock4,
        title: '"What slots do you have Saturday?" took an hour to answer',
        description:
          'An hour is long enough for someone checking availability on a lunch break to move on. She scrolled, saw another salon had a real time ready, and stopped waiting for you to come back with options.',
        iconType: 'secondary' as const,
      },
      {
        icon: RotateCcw,
        title: 'A regular has not been in for four months',
        description:
          'She used to come every six or eight weeks, then one missed visit turned into three or four months. Nobody nudged her when the gap first opened, so now the habit is broken and the return gets harder.',
        iconType: 'accent' as const,
      },
    ],
    columns: 3 as const,
  };

  const workflowExamplesData = {
    badge: 'Real Moments',
    title: 'The minutes that decide which chair gets filled',
    description:
      'These are the small chair-side handoffs that usually decide who books and who drifts. None of them feel dramatic in the moment, but they change how full the diary looks a few weeks later.',
    workflows: [
      {
        trigger: 'A new DM lands while you are mid-colour.',
        actions: [
          'A short, friendly auto-reply goes out — "in a colour, will send slots in 20"',
          'It links to live availability so she stops scrolling',
          'You confirm the slot when you wash off',
        ],
      },
      {
        trigger: 'A regular has not booked her usual six-week trim.',
        actions: [
          'A warm, named nudge goes out at week seven',
          'It offers her usual stylist and her usual time band',
          'She rebooks in a tap, not a phone call',
        ],
      },
      {
        trigger: 'A new client just left after a first visit.',
        actions: [
          'A thank-you lands the same evening',
          'A rebook prompt fires at the right interval for the service',
          'A review request goes out when she is happiest with the look',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'hair-salons-workflow-examples',
  };

  const systemLayersData = {
    badge: 'What We Put In Place',
    title: 'Faster replies, easier rebooks, regulars who stop forgetting',
    description:
      'You stay behind the chair and keep the salon moving. The part that decides who fills it next stops depending on you finding five spare minutes between colour, rinse, and checkout.',
    featureCategories: [
      {
        title: 'Reply with availability, not "let me check"',
        description:
          'New enquiries see real slots within minutes instead of waiting on a manual reply. That matters most on busy days when every chair is already full and the phone will not stop going.',
        icon: Calendar,
        features: [
          'Live availability shared in the first reply',
          'Self-serve booking link by stylist',
          'Holds the client until you can confirm',
        ],
      },
      {
        title: 'Bring back the regulars who drifted',
        description:
          'Six-week, eight-week, twelve-week — each service gets nudged at the point the client would normally be thinking about coming back. That catches the gap before a few missed weeks turn into months.',
        icon: Bell,
        features: [
          'Rebook nudges by service interval',
          'Personal tone, named stylist',
          'Stops the moment she rebooks',
        ],
      },
      {
        title: 'Cut the no-shows without nagging',
        description:
          'Reminders go out the day before, then a simple confirm tap lands on the morning of the appointment. Empty chairs stop arriving as a surprise halfway through the day.',
        icon: Sparkles,
        features: [
          'Day-before reminder',
          'Morning-of confirm tap',
          'Easy reschedule beats a no-show',
        ],
      },
      {
        title: 'Turn happy looks into proof',
        description:
          'A review request goes out the same evening, while the cut, colour, or blow-dry still feels fresh. That is when clients are most likely to leave something that matches the experience they just had.',
        icon: ShieldCheck,
        features: [
          'Review request triggered by checkout',
          'Asked once, never twice',
          'Reviews stack where local clients search',
        ],
      },
      {
        title: 'Be findable when she searches "salon near me"',
        description:
          'Your pages and Google profile line up around area, service, and stylist instead of generic salon language. That helps the right local searches land on something that feels specific enough to book from.',
        icon: Search,
        features: [
          'Found on Maps for service + area',
          'Stylist-led pages, not generic',
          'More right-fit clients, fewer tyre-kickers',
        ],
      },
    ],
    columns: 3 as const,
  };

  const exploreData = {
    badge: 'Related',
    description:
      'These are the supporting services that come up most often once the salon sees where bookings and rebooks are thinning out. They all reinforce the same chair-side weak spots from a different direction.',
    cards: [
      {
        icon: Calendar,
        title: 'Smart Website Systems',
        description:
          'Shows real slots in the first reply, even while somebody is still in the chair and you cannot stop to type a full answer.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Bell,
        title: 'CRM & Rebook Automation',
        description:
          'Brings regulars back before the gap stretches too far and the old six-week pattern turns into a four-month silence.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description:
          'Gets reviews out often enough that the online proof starts to reflect how full the salon actually feels in a real week.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description:
          'Helps the salon show up for the actual service and area search, not just as one more generic listing in the same part of town.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Things hair salons usually ask',
    description:
      'These are the practical questions that usually come up when the salon is busy, the phone keeps going, and the rebook gap is already starting to show. Straight answers, written for a chair-led day.',
    faqs: [
      {
        question: 'Will clients feel they are getting an automated DM?',
        answer:
          'No. The first message is short, friendly, and signed by the salon. The point is to hold her attention until you can answer properly.',
      },
      {
        question: 'I am the stylist and the receptionist. Who runs this?',
        answer:
          'It runs itself between services. You see new bookings on your phone, regulars rebook in a tap, and the rebook nudges go out without you remembering.',
      },
      {
        question: 'Can it route by stylist?',
        answer:
          'Yes. Every stylist has their own availability and rebook tone, so regulars stay loyal to the person, not just the salon.',
      },
      {
        question: 'What about clients we have not seen in months?',
        answer:
          'They get a single warm nudge with their usual service and time band. Most salons find a real chunk of their week refills from this alone.',
      },
      {
        question: 'Do we need a new website?',
        answer:
          'Usually not. The leak is in the first DM and the missing rebook prompt, not in the homepage.',
      },
    ],
  };

  return {
    seo: {
      title: 'Hair Salons — Win The Saturday DM, Bring Back The Regulars',
      description:
        'For hair salons where DMs go to the salon that replied first and regulars quietly forget to rebook. We put first-reply availability, rebook nudges, and review prompts in place so the chair stays full.',
      canonical: '/industries/beauty-personal-care/hair-salons',
    },
    slug: 'hair-salons',
    industries: ['hair-salon'],
    systems: [
      'smart-website-systems',
      'crm-automation',
      'reputation-review',
      'local-seo-authority',
    ],
    topics: ['lead-response-time', 'follow-up', 'review-generation'],
    type: 'detail',
    parentSlug: 'beauty-personal-care',
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
        title: 'Tell us where the chair sits empty',
        description:
          'If Saturday DMs keep going cold or your old regulars are now missing for months at a time, walk us through a normal week and we will show you where the chair is actually losing bookings.',
      },
      actions: [{ label: 'Get Started', href: '/contact', primary: true }],
    },
  };
}

export const hairSalonsIndustryPageData: IndustryPageData = buildHairSalonsIndustryPageData();
