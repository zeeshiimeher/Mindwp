import {
  Calendar,
  Clock3,
  Landmark,
  MessageSquare,
  Search,
  ShieldCheck,
  Star,
  Wallet,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildMortgageBrokersIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Mortgage Brokers',
    title: 'Rates Dropped At 10am. By Lunchtime, Three Brokers Had Replied To His Remortgage Enquiry. The Slowest One Lost The Case.',
    description:
      'Mortgage decisions happen on rate windows and offer deadlines. Borrowers enquire with three brokers and instruct whoever replied first with a clear next step. We put the system in place that catches the enquiry while you’re packaging a case, books the discovery call, and stops cold-pipeline borrowers from drifting to a comparison site.',
    list: [
      'Enquiries that came in while you were on a lender call',
      'Discovery calls that took six emails to confirm',
      'Pipeline borrowers who went quiet for six weeks',
      'Reviews from completed cases you never asked for',
    ],
    cssPrefix: 'mortgage-brokers-hero',
  };

  const imageStripData = {
    badge: 'How Mortgage Enquiries Actually Land',
    title: 'Rate change at 10am. They enquired with three brokers. Whoever replied first wins.',
    description:
      'It’s rate windows, AIP deadlines, panicked first-time buyers Sunday night. The decision happens within hours of the first email.',
    items: [
      {
        title: 'Purchase and refinance enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing mortgage broker enquiries',
      },
      {
        title: 'Consultation booking and qualification',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing mortgage consultation booking',
      },
      {
        title: 'Document readiness and follow-up',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing mortgage document readiness and follow-up',
      },
      {
        title: 'Reviews and local proof',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing mortgage broker reviews and trust signals',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'mortgage-brokers-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where Cases Get Lost',
    title: 'You’re packaging a complex BTL. The new enquiries hit a comparison site instead.',
    description: 'Same handful of leaks across nearly every brokerage. None of them are about the advice quality.',
    benefits: [
      {
        icon: Wallet,
        title: 'Three Sunday-night enquiries went unanswered until Monday afternoon',
        description:
          'Two had already booked discovery calls with online brokers by the time you replied.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'A discovery call took six emails to confirm',
        description:
          '“What times work?” “Zoom or in-person?” “What documents?” Each reply waited a few hours.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Six pipeline borrowers went silent for a month',
        description:
          'Searching, not buying yet. No nurture in place. By the time they bought, they’d used somebody else.',
        iconType: 'accent' as const,
      },
      {
        icon: Landmark,
        title: 'You’ve completed 400 cases. The online broker has 1,200 reviews.',
        description:
          'Your advice is sharper. Online you look smaller because nobody asked for the review at the right moment.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to catch enquiries on rate windows and stop cold pipeline drifting',
    description:
      'Each piece does one job. Together they keep cases coming in while you stay focused on packaging.',
    featureCategories: [
      {
        title: 'Reply to enquiries while you’re on a lender call',
        description:
          'Enquiry lands at 10pm Sunday. Instant reply with a calendar link, document checklist, and a quick reassurance. Most stop enquiring with the next broker.',
        icon: MessageSquare,
        features: [
          'Instant acknowledgement on every enquiry',
          'Document checklist and calendar link up front',
          'Holds the borrower until you’re free',
        ],
      },
      {
        title: 'Take the discovery call booking online',
        description:
          'Borrower picks a slot themselves. Documents requested in the same step. The six-email confirmation thread stops.',
        icon: Calendar,
        features: [
          'Self-serve discovery call booking',
          'Document checklist sent automatically',
          'Reminders the day before',
        ],
      },
      {
        title: 'Nurture the pipeline that’s six months away',
        description:
          'First-time buyer searching but not ready. They get a useful sequence — deposit tips, AIP timing, rate updates. When they’re ready, you’re top of mind.',
        icon: Workflow,
        features: [
          'Nurture sequences for not-yet-ready borrowers',
          'Pipeline visible by stage',
          'Borrowers come back to you, not a comparison site',
        ],
      },
      {
        title: 'Stay top of mind for product-end remortgages',
        description:
          'Six months before the fix ends, a polite check-in goes out. “Your deal ends in six months — want to lock in early?”',
        icon: ShieldCheck,
        features: [
          'Product-end reminders timed automatically',
          'Existing clients re-engaged proactively',
          'Remortgage book stops drifting away',
        ],
      },
      {
        title: 'Turn completed cases into reviews and referrals',
        description:
          'A polite review request goes out the week after completion, when the relief is freshest.',
        icon: Star,
        features: [
          'Review requests after every completion',
          'Asked when clients are most grateful',
          'Reviews catch up to the cases you’ve closed',
        ],
      },
      {
        title: 'Show up first when local people search for a broker',
        description:
          'Service pages and Google profile lined up so people in the right area find you first — not the online broker.',
        icon: Search,
        features: [
          'Pages for the case types you actually do',
          'Found on Maps for local mortgage searches',
          'Less time on enquiries that aren’t a fit',
        ],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'What Actually Changes',
    title: 'A normal week, before and after',
    description: 'The advice stays personal. The pipeline stops leaking.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How it runs now',
        items: [
          'Sunday-night enquiries went unanswered until Monday afternoon. Two booked elsewhere.',
          'Discovery calls took six emails to confirm.',
          'Six pipeline borrowers went silent for a month and bought through somebody else.',
          '“Meant to ask for a Google review” — said about every completion.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it runs after',
        items: [
          'Every enquiry gets an instant reply with a calendar link.',
          'Discovery calls booked online with documents requested up front.',
          'Not-yet-ready borrowers nurtured automatically until they are.',
          'Reviews get asked for the week after every completion.',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Where Most Brokers Start',
    title: 'Three stages — most brokerages feel one of them more than the others',
    description: 'Pick whichever costs you the most cases right now.',
    packages: [
      {
        name: 'Stop losing the rate-window enquiries',
        description: 'For when borrowers enquire on rate changes and book whoever replied first.',
        price: 'Stage 1',
        priceDetail: 'Start here if first-reply speed is the biggest leak',
        features: [
          'Instant reply with calendar link and document checklist',
          'Holds the borrower until you’re free',
          'Most stop enquiring with the next broker',
        ],
      },
      {
        name: 'Take the discovery call without six emails',
        description: 'For when discovery calls take half a week of email tennis.',
        price: 'Stage 2',
        priceDetail: 'Start here if booking and document-readiness are the leak',
        features: [
          'Self-serve discovery call booking',
          'Document checklist sent automatically',
          'Reminders the day before',
        ],
        popular: true,
      },
      {
        name: 'Nurture the pipeline and capture remortgages',
        description: 'For when first-time buyers and product-end clients drift to comparison sites.',
        price: 'Stage 3',
        priceDetail: 'Start here if pipeline drift and remortgages are the weak spot',
        features: [
          'Nurture sequences for not-yet-ready borrowers',
          'Product-end reminders timed automatically',
          'Review requests after every completion',
        ],
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Real Situations',
    title: 'A few moments where the difference shows up',
    description: 'Small moments in the week of a brokerage where cases used to slip through.',
    workflows: [
      {
        trigger: 'A remortgage enquiry comes in at 10pm after a rate change.',
        actions: [
          'Instant reply goes out with a calendar link and reassurance',
          'They book a discovery call before going to bed',
          'They stop enquiring with the next two brokers',
        ],
      },
      {
        trigger: 'A first-time buyer enquires but is six months away from being ready.',
        actions: [
          'They’re placed on a useful nurture sequence',
          'Deposit tips, AIP timing, rate updates land monthly',
          'When they’re ready, they come back to you',
        ],
      },
      {
        trigger: 'A client’s fixed deal ends in six months.',
        actions: [
          'A polite check-in goes out automatically',
          '“Your deal ends in six months — want to lock in early?”',
          'Remortgage book stops drifting away',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'mortgage-brokers-workflow-examples',
  };

  const caseStudiesData = {
    category: 'real-estate-property-services' as const,
    title: 'Related Case Studies',
    description: 'Examples of how the system supports property businesses in this category.',
    limit: 2,
  };

  const exploreData = {
    badge: 'Related',
    description:
      'The other parts of the system that come up most often for mortgage brokers.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description:
          'See the core system layer that holds mortgage enquiries, consultation flow, and follow-up together.',
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
        description: 'Strengthen area visibility, local credibility, and borrower discovery.',
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
    title: 'Things brokers usually ask',
    description: 'Straight answers about how this fits a mortgage brokerage.',
    faqs: [
      {
        question: 'I’m on lender calls all day. Will this need someone in the office?',
        answer:
          'No. The whole point is it runs while you’re packaging cases. Instant enquiry replies, discovery call bookings, document requests, nurture sequences — all automatic. You handle the actual advice.',
      },
      {
        question: 'Will it work alongside my CRM (Iress, Smartr, 360 Lifecycle, etc)?',
        answer:
          'Yes. Whatever you use stays. The system improves the bit between the borrower enquiry and the case sitting in your CRM ready to package.',
      },
      {
        question: 'How does the after-hours enquiry handling work?',
        answer:
          'A borrower enquires Sunday night after a rate change. Within seconds they get a reply with reassurance, a calendar link, and a document checklist. Most book a discovery call before going to bed.',
      },
      {
        question: 'Can it really capture more remortgages from existing clients?',
        answer:
          'Yes — a polite check-in goes out six months before the fix ends. “Your deal ends in six months — want to lock in early?” The remortgage book stops drifting to comparison sites.',
      },
      {
        question: 'How do I get more reviews without nagging?',
        answer:
          'A polite request goes out the week after completion, when the relief is freshest. People who would have meant to leave one actually do.',
      },
      {
        question: 'Do I need to scrap my current website?',
        answer:
          'Usually not. We look at what you have first. The leak is normally the bit between the enquiry and the discovery call landing in the diary — not the site itself.',
      },
    ],
  };

  return {
    slug: 'mortgage-brokers',
    industries: ['mortgage-broker'],
    systems: [
      'smart-website-systems',
      'crm-automation',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['lead-qualification', 'crm-pipeline', 'pipeline-visibility'],
    type: 'detail',
    parentSlug: 'real-estate-property-services',
    seo: {
      title: 'Mortgage Brokers — Stop Losing Rate-Window Enquiries, Discovery Calls & Remortgages | MindWP',
      description:
        'For mortgage brokers where rate-change enquiries go to whoever replied first, where discovery calls take six emails to confirm, and where pipeline borrowers drift to comparison sites. We put the system in place that catches them.',
      keywords: [
        'mortgage broker website design',
        'mortgage broker lead handling system',
        'mortgage consultation booking workflow',
        'mortgage broker seo services',
        'mortgage broker review system',
      ],
      canonical: '/industries/real-estate-property-services/mortgage-brokers',
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
      title: 'Tell us where the pipeline is leaking',
      description:
        'If rate-window enquiries go to whoever replied first, if discovery calls take six emails to confirm, or if remortgage clients drift to comparison sites — walk us through how the brokerage runs and we’ll show you the first thing worth fixing.',
    },
  };
}

export const mortgageBrokersIndustryPageData: IndustryPageData =
  buildMortgageBrokersIndustryPageData();
