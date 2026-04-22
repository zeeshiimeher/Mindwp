import {
  Bell,
  Calendar,
  Clock3,
  MapPinned,
  MessageSquare,
  Search,
  ShieldCheck,
  Star,
  Trees,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildLandscapingCompaniesIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Landscaping Businesses',
    title: 'Spring Hits. Fifty Quote Requests. By July, Half Of Them Went Cold.',
    description:
      'Lawn care, garden makeovers, patios, fencing — the season comes fast and the enquiries pile up faster. Most landscapers lose half the quotes to slow follow-up and forget last year’s clients before next spring. We put the system in place that catches every estimate request, follows up the quotes, and brings every client back next year.',
    list: [
      'Quote requests nobody followed up',
      'Estimate visits nobody confirmed',
      'Last year’s clients nobody contacted',
      'Reviews nobody asked for after the build',
    ],
    cssPrefix: 'landscaping-companies-hero',
  };

  const imageStripData = {
    badge: 'How Landscaping Demand Actually Lands',
    title: 'March hits and the quote requests don’t stop for ten weeks',
    description:
      'A new patio, a tidy-up, a hedge that’s out of control. People ring three landscapers and book whichever one shows up first. Whoever follows up the quote usually gets the build.',
    items: [
      {
        title: 'Recurring maintenance enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing landscaping maintenance enquiries',
      },
      {
        title: 'Project and estimate requests',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing landscaping project estimates',
      },
      {
        title: 'Seasonal booking demand',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing seasonal landscaping demand',
      },
      {
        title: 'Reviews and visual proof',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing landscaping reviews and proof of work',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'landscaping-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where The Work Slips',
    title: 'You’re on a build. The phone rings. They book the next landscaper.',
    description: 'Same handful of leaks in nearly every landscaping business. None of them are about the craft.',
    benefits: [
      {
        icon: Trees,
        title: '“Can you quote a new patio?” sat for five days',
        description:
          'You were on a job. By the time you replied, two other landscapers had already been out.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'A £12,000 garden makeover quote went quiet',
        description:
          'One follow-up text would have closed it. Nobody had time to send it.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Last year’s clients never got contacted before spring',
        description:
          'Repeat work walked off to whoever messaged them first in February.',
        iconType: 'accent' as const,
      },
      {
        icon: MapPinned,
        title: 'The landscaper up the road has 400 reviews. You have 31.',
        description:
          'Your work looks better in person. Locally you look smaller because nobody was ever asked.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to catch quotes, close projects, and bring clients back next spring',
    description:
      'Each piece does one job. Together they keep the work moving while the team is on a build.',
    featureCategories: [
      {
        title: 'Reply to every quote request the same day',
        description:
          'New enquiry gets a warm reply within minutes with options for an estimate visit — even on a 12-hour build day.',
        icon: MessageSquare,
        features: [
          'Instant replies on web forms, calls, DMs',
          'Service-type captured up front',
          'Estimate booking link in the same reply',
        ],
      },
      {
        title: 'Take the estimate visit without phone tag',
        description:
          'Clients pick a slot themselves. The office stops being a calendar.',
        icon: Calendar,
        features: [
          'Online booking for estimate visits',
          'Reminders the day before',
          'Reschedule link instead of a no-show',
        ],
      },
      {
        title: 'Follow up the quotes nobody has time to chase',
        description:
          'Patio quote sent Monday, automatic check-in Friday, another the week after. Quietly closes more.',
        icon: Workflow,
        features: [
          'Quote follow-up at the right intervals',
          'Pending projects visible in one place',
          'Closing rate goes up without nagging',
        ],
      },
      {
        title: 'Bring last year’s clients back before spring',
        description:
          'February nudge goes out automatically. Repeat work books before the first quote request comes in.',
        icon: Bell,
        features: [
          'Pre-season reminders sent automatically',
          'Past clients booked before the rush',
          'Repeat demand smooths out the season',
        ],
      },
      {
        title: 'Turn finished builds into reviews and proof',
        description:
          'Review request goes out the week after handover. Build photos line up with service pages locally.',
        icon: ShieldCheck,
        features: [
          'Review requests after every build',
          'Project proof tied to local search',
          'Reviews that catch up to the work',
        ],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'What Actually Changes',
    title: 'A normal spring, before and after',
    description: 'The work stays. The chasing and the missed quotes stop.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How it runs now',
        items: [
          'Fifty quote requests in March. Half went cold by April.',
          'A £12,000 garden makeover quote went quiet for two weeks. No follow-up sent.',
          'Last year’s clients booked elsewhere because nobody got in touch first.',
          '“Meant to ask for a review” — said about every finished build.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it runs after',
        items: [
          'Every quote request gets a same-day reply with an estimate booking link.',
          'Quotes get followed up automatically. More close, none feel pestered.',
          'February nudge brings last year’s clients back before the rush.',
          'Every build ends with a review request. Reviews catch up to the work.',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Where Most Landscapers Start',
    title: 'Three stages — most businesses feel one of them more than the others',
    description: 'Pick whichever costs you the most builds right now.',
    packages: [
      {
        name: 'Stop losing quote requests in March',
        description: 'For when spring enquiries pile up faster than the team can reply.',
        price: 'Stage 1',
        priceDetail: 'Start here if same-day quote response is the biggest leak',
        features: [
          'Instant replies on web forms and calls',
          'Service type captured up front',
          'Estimate booking link in the same reply',
        ],
      },
      {
        name: 'Close the quotes that go quiet',
        description: 'For when patios, makeovers, and big builds get quoted and you never hear back.',
        price: 'Stage 2',
        priceDetail: 'Start here if quote-to-build conversion is the leak',
        features: [
          'Quote follow-ups at the right intervals',
          'Pending projects visible in one place',
          'No more “what happened to that patio quote?”',
        ],
        popular: true,
      },
      {
        name: 'Bring every client back next year',
        description: 'For when last year’s clients book elsewhere before you remember to call.',
        price: 'Stage 3',
        priceDetail: 'Start here if repeat work and reviews are the weak spot',
        features: [
          'Pre-season reminders sent automatically',
          'Review requests after every build',
          'Repeat demand smooths out the season',
        ],
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Real Situations',
    title: 'A few moments where the difference shows up',
    description: 'Small moments on a build and after, where things used to slip through.',
    workflows: [
      {
        trigger: 'A new patio enquiry comes in on a Tuesday during a build week.',
        actions: [
          'A warm reply goes out within minutes',
          'Service type and rough scope captured up front',
          'An estimate visit gets booked before the next two landscapers reply',
        ],
      },
      {
        trigger: 'A garden makeover quote was sent Monday and went quiet.',
        actions: [
          'A friendly check-in goes out Friday',
          'Another a week later if no reply',
          'Quote-to-build quietly improves',
        ],
      },
      {
        trigger: 'It’s February and last year’s clients haven’t booked yet.',
        actions: [
          'A polite pre-season nudge goes out',
          'Booking link in the same message',
          'Repeat work fills March before the rush',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'landscaping-workflow-examples',
  };

  const exploreData = {
    badge: 'Related',
    description:
      'The other parts of the system that come up most often for landscapers trying to stop losing builds.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description:
          'See the core system layer that holds landscaping demand, estimates, and follow-up together.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'Booking & Scheduling System',
        description: 'Support estimate visits, reminders, and clearer next-step handling.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen local landscaping visibility and service-area trust.',
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
    title: 'Things landscapers usually ask',
    description: 'Straight answers about how this fits a landscaping business.',
    faqs: [
      {
        question: 'I’m on a build all day. Will this need someone in the office?',
        answer:
          'No. The whole point is that it runs while you’re working. You’ll see what came in on your phone between tasks, but nothing waits on you to operate it.',
      },
      {
        question: 'How does same-day quote response actually work?',
        answer:
          'A quote request comes in. Within minutes the client gets a warm reply with options for an estimate visit. Most book before the next two landscapers reply.',
      },
      {
        question: 'Can it handle quote follow-ups for patios and makeovers?',
        answer:
          'Yes — friendly check-in messages go out at the right intervals after a quote is sent. Quote-to-build conversion changes noticeably without anybody chasing.',
      },
      {
        question: 'Can past clients be brought back before spring?',
        answer:
          'Yes — a February nudge goes out automatically. Repeat work books before the first new quote request comes in.',
      },
      {
        question: 'How do I get more reviews without nagging?',
        answer:
          'A polite request goes out the week after handover, when the garden’s settled in. People who would have meant to leave one actually do.',
      },
      {
        question: 'Do I need to scrap my current website?',
        answer:
          'Usually not. We look at what you have first. The leak is normally the bit between the quote request and the review going up — not the site itself.',
      },
    ],
  };

  return {
    slug: 'landscaping-companies',
    industries: ['landscaping'],
    systems: [
      'smart-website-systems',
      'ai-lead-handling',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['local-service-pages', 'follow-up', 'review-generation'],
    type: 'detail',
    parentSlug: 'home-services',
    seo: {
      title: 'Landscaping Companies — Stop Losing Quote Requests, Builds & Repeat Clients | MindWP',
      description:
        'For landscapers where spring quote requests pile up faster than you can reply, big project quotes go quiet, and last year’s clients book elsewhere. We put the system in place that catches every estimate, closes more builds, and brings clients back next spring.',
      keywords: [
        'landscaping website design',
        'landscaping lead generation website',
        'landscaping marketing system',
        'landscaping lead automation system',
        'landscaping reputation management system',
      ],
      canonical: '/industries/home-services/landscaping-companies',
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
      title: 'Tell us where the builds are leaking',
      description:
        'If quote requests sit for days, if big project quotes go quiet, or if last year’s clients walked off — walk us through how the business runs and we’ll show you the first thing worth fixing.',
    },
  };
}

export const landscapingCompaniesIndustryPageData: IndustryPageData =
  buildLandscapingCompaniesIndustryPageData();
