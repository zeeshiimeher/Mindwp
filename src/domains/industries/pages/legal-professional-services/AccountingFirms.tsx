import {
  Calculator,
  Calendar,
  Clock3,
  FileText,
  MessageSquare,
  Search,
  ShieldCheck,
  Star,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildAccountingFirmsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Accounting Firms',
    title: 'A Limited Company Founder Sent Three Firms The Same Email. The First To Reply Got The Engagement.',
    description:
      'Founders, contractors, and small businesses don’t shop accountants slowly anymore. They send three enquiries on a Tuesday and pick whoever sounds organised first. We put the system in place that catches the right enquiries, books the discovery call, and stops the easy ones from drifting.',
    list: [
      'Enquiries that needed a same-day reply',
      'Discovery calls that took six emails to book',
      'Onboarding chasers nobody had time to send',
      'Reviews from happy clients you never asked',
    ],
    cssPrefix: 'accounting-firms-hero',
  };

  const imageStripData = {
    badge: 'How Accounting Enquiries Actually Land',
    title: 'It’s rarely “who’s the best accountant” — it’s “who replied first and sounded organised”',
    description:
      'A founder sends three enquiries on a Tuesday morning. By Wednesday lunchtime they’ve picked one. The technical work is the same; the intake experience decides it.',
    items: [
      {
        title: 'Service-fit enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing accounting firm service-fit enquiries',
      },
      {
        title: 'Consultation booking and timing',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing accounting consultation booking',
      },
      {
        title: 'Information readiness and next steps',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing accounting information readiness',
      },
      {
        title: 'Reviews and credibility proof',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing accounting trust and reviews',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'accounting-firms-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where The Work Slips',
    title: 'You’re mid-VAT return. The phone rings. They book a discovery call with the next firm.',
    description: 'Same handful of leaks in nearly every small accounting practice. None of them are about the technical work.',
    benefits: [
      {
        icon: Calculator,
        title: 'A new limited company enquiry sat unread for two days',
        description:
          'You were heads-down on year-ends. By the time you replied, they’d already had a Zoom with somebody else.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Six emails to book one discovery call',
        description:
          '“Tuesday at 2?” “Can’t do Tuesday.” “Thursday morning?” The good ones don’t stick around for that.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'A proposal went out and you never heard back',
        description:
          'One follow-up email two weeks later would have closed half of these. Nobody had time to send it.',
        iconType: 'accent' as const,
      },
      {
        icon: FileText,
        title: 'The firm down the road has 200 reviews. You have 11.',
        description:
          'Your retention is better. Online you look smaller because nobody was ever asked at the right moment.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to handle enquiries, book discovery calls, and turn happy clients into reviews',
    description:
      'Each piece does one job. Together they keep the intake moving while you do the actual accounting work.',
    featureCategories: [
      {
        title: 'Reply to enquiries the same hour, even mid-deadline',
        description:
          'Form lands, an instant acknowledgement goes out with what to expect next. Most prospects stop emailing other firms.',
        icon: MessageSquare,
        features: [
          'Same-hour acknowledgement on every enquiry',
          'Service type captured up front',
          'Holds the lead until you can call back',
        ],
      },
      {
        title: 'Book the discovery call without the email tennis',
        description:
          'Prospects pick a slot themselves. “Tuesday at 2 or Thursday at 10?” gets replaced with a calendar link.',
        icon: Calendar,
        features: [
          'Self-serve discovery call booking',
          'Reminders the day before',
          'Reschedule link instead of a no-show',
        ],
      },
      {
        title: 'Tell them what to bring before you sit down',
        description:
          'Last year’s accounts, UTR, bank feed access — sent automatically before the call so the meeting is actually useful.',
        icon: FileText,
        features: [
          'Pre-call info request automatically',
          'Sets the right expectations',
          'Discovery calls actually go somewhere',
        ],
      },
      {
        title: 'Follow up the proposals that go quiet',
        description:
          'Proposal sent Monday, automatic check-in Friday, another a week later. Quietly closes more.',
        icon: Workflow,
        features: [
          'Proposal follow-up at the right intervals',
          'Pending engagements visible in one place',
          'Closing rate goes up without nagging',
        ],
      },
      {
        title: 'Turn finished onboardings into reviews',
        description:
          'A polite review request goes out the week after the first month-end is done and the client is relieved.',
        icon: ShieldCheck,
        features: [
          'Review requests at the right moment',
          'Asked once, never again',
          'Reviews catch up to your retention',
        ],
      },
      {
        title: 'Show up for the right type of client locally',
        description:
          'Service pages and Google profile lined up so contractors, limited companies, or e-commerce founders find you first.',
        icon: Search,
        features: [
          'Pages for the niches you actually want',
          'Found on local and niche searches',
          'Less time on enquiries that aren’t a fit',
        ],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'What Actually Changes',
    title: 'A normal week, before and after',
    description: 'The advisory work stays personal. The intake stops eating evenings.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How it runs now',
        items: [
          'A new limited company enquiry sat in the inbox for two days.',
          'Six emails to pin down one discovery call.',
          'A proposal went out and never got followed up.',
          '“We meant to ask for a review” — said about every onboarding.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it runs after',
        items: [
          'Every enquiry gets an instant acknowledgement and the right next step.',
          'Discovery calls booked through one link, no email tennis.',
          'Proposals get followed up automatically. More close.',
          'Reviews get asked for at the right moment, every time.',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Where Most Firms Start',
    title: 'Three stages — most firms feel one of them more than the others',
    description: 'Pick whichever costs you the most engagements right now.',
    packages: [
      {
        name: 'Stop losing the same-day enquiries',
        description: 'For when good prospects email three firms and pick whoever replied first.',
        price: 'Stage 1',
        priceDetail: 'Start here if first-reply speed is the biggest leak',
        features: [
          'Instant acknowledgement on every enquiry',
          'Service type and timing captured up front',
          'Most prospects stop emailing the next firm',
        ],
      },
      {
        name: 'Close the discovery calls and proposals that drift',
        description: 'For when discovery calls take six emails and proposals go quiet.',
        price: 'Stage 2',
        priceDetail: 'Start here if booking and proposal follow-up is the leak',
        features: [
          'Self-serve discovery call booking',
          'Pre-call info request automatically',
          'Proposal follow-up at the right intervals',
        ],
        popular: true,
      },
      {
        name: 'Build the local proof that fills the diary on its own',
        description: 'For when retention is great but the firm looks small online.',
        price: 'Stage 3',
        priceDetail: 'Start here if reviews and niche visibility are the weak spot',
        features: [
          'Review requests after every onboarding',
          'Service pages for the niches you want',
          'Less time on enquiries that aren’t a fit',
        ],
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Real Situations',
    title: 'A few moments where the difference shows up',
    description: 'Small moments in the week of a small firm where things used to drift.',
    workflows: [
      {
        trigger: 'A new limited company enquiry lands at 9am during year-end season.',
        actions: [
          'Instant acknowledgement goes out within minutes',
          'Service type and timing captured before you reply',
          'They stop emailing the other two firms',
        ],
      },
      {
        trigger: 'A discovery call is booked for next Thursday.',
        actions: [
          'Pre-call info request goes out the day before',
          'Reminder lands the morning of the call',
          'The meeting actually goes somewhere',
        ],
      },
      {
        trigger: 'A proposal was sent Monday and went quiet.',
        actions: [
          'A friendly check-in goes out Friday',
          'Another a week later if no reply',
          'Proposal-to-engagement quietly improves',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'accounting-firms-workflow-examples',
  };

  const caseStudiesData = {
    category: 'legal-professional-services' as const,
    title: 'Related Case Studies',
    description:
      'Examples of how the system supports professional service businesses in this category.',
    limit: 2,
  };

  const exploreData = {
    badge: 'Related',
    description:
      'The other parts of the system that come up most often for small accounting practices.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description:
          'See the core system layer that holds accounting enquiry, consultation flow, and follow-up together.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'Booking & Scheduling System',
        description: 'Support consultations, reminders, and clearer next-step handling.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen area visibility, local credibility, and authority-led discovery.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description: 'Turn completed advisory work into stronger proof and review flow.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Things accountants usually ask',
    description: 'Straight answers about how this fits a small accounting practice.',
    faqs: [
      {
        question: 'I’m flat out during year-end. Will this need someone in the office?',
        answer:
          'No. The whole point is it runs while the team is heads-down on client work. You’ll see what came in on your phone between calls, but nothing waits on you to operate it.',
      },
      {
        question: 'Can it really reply to enquiries faster than I can?',
        answer:
          'Yes — not with anything pretending to be you. Just an instant acknowledgement that captures what they need and tells them when you’ll be in touch. Most prospects stop emailing other firms once they get that.',
      },
      {
        question: 'Will it integrate with Xero, QuickBooks, or my practice software?',
        answer:
          'It sits in front of all that. The internal tools you already use stay where they are. The system improves the bit between the enquiry landing and onboarding starting.',
      },
      {
        question: 'Can it help with proposal follow-up specifically?',
        answer:
          'Yes — friendly check-in messages go out at the right intervals after a proposal is sent. Proposal-to-engagement conversion changes noticeably without anybody chasing.',
      },
      {
        question: 'How do I get more reviews without nagging clients?',
        answer:
          'A polite request goes out the week after the first month-end is done, when the client is most relieved. People who would have meant to leave one actually do.',
      },
      {
        question: 'Do I need to scrap my current website?',
        answer:
          'Usually not. We look at what you have first. The leak is normally the bit between the enquiry landing and the engagement starting — not the site itself.',
      },
    ],
  };

  return {
    slug: 'accounting-firms',
    industries: ['accounting'],
    systems: [
      'smart-website-systems',
      'crm-automation',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['lead-qualification', 'crm-integration', 'reputation-monitoring'],
    type: 'detail',
    parentSlug: 'legal-professional-services',
    seo: {
      title: 'Accounting Firms — Stop Losing Same-Day Enquiries, Discovery Calls & Proposals | MindWP',
      description:
        'For small accounting practices where new enquiries get picked up by whoever replied first, discovery calls take six emails to book, and proposals go quiet. We put the system in place that catches the right clients.',
      keywords: [
        'accounting firm website design',
        'accounting lead handling system',
        'accounting consultation booking workflow',
        'accounting firm seo services',
        'accounting review system',
      ],
      canonical: '/industries/legal-professional-services/accounting-firms',
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
    caseStudies: caseStudiesData,
    explore: exploreData,
    faq: faqData,
    cta: {
      title: 'Tell us where the work is leaking',
      description:
        'If new enquiries take days to acknowledge, if discovery calls take a week of emails, or if proposals go quiet — walk us through how the practice runs and we’ll show you the first thing worth fixing.',
    },
  };
}

export const accountingFirmsIndustryPageData: IndustryPageData =
  buildAccountingFirmsIndustryPageData();
