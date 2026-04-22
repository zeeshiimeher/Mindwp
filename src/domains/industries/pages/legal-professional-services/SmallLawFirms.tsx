import {
  Calendar,
  Clock3,
  FileText,
  MessageSquare,
  Scale,
  Search,
  ShieldCheck,
  Star,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildSmallLawFirmsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Small Law Firms',
    title: 'A Family Solicitor Enquiry Came In Friday At 5. By Monday Morning, They’d Instructed Somebody Else.',
    description:
      'Family, conveyancing, employment, probate — people don’t shop solicitors slowly when something is going wrong. They ring three firms and instruct whoever answered first with a clear next step. We put the system in place that catches the enquiries, books the initial consultation, and stops easy matters from drifting.',
    list: [
      'Friday-evening enquiries that went cold by Monday',
      'Consultations that took five emails to book',
      'Quoted matters nobody followed up on',
      'Reviews from happy clients you never asked',
    ],
    cssPrefix: 'small-law-firms-hero',
  };

  const imageStripData = {
    badge: 'How Legal Enquiries Actually Land',
    title: 'It’s rarely “who’s the best lawyer” — it’s “who replied first and sounded calm”',
    description:
      'Somebody’s marriage is ending, or a sale is falling through, or a probate is overwhelming. They ring three firms in a row. Whoever picks up first usually gets the matter.',
    items: [
      {
        title: 'New matter enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing small law firm enquiries',
      },
      {
        title: 'Consultation booking and readiness',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing legal consultation booking',
      },
      {
        title: 'Documents and next steps',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing legal document readiness and next steps',
      },
      {
        title: 'Reviews and credibility proof',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing legal trust and credibility',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'small-law-firms-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where The Work Slips',
    title: 'You’re in court Tuesday afternoon. The phone rings. They book a consultation with the next firm.',
    description: 'Same handful of leaks in nearly every small high-street practice. None of them are about the legal work itself.',
    benefits: [
      {
        icon: Scale,
        title: 'A divorce enquiry came in Friday at 5pm and went unread until Monday',
        description:
          'The fee earner was already gone for the weekend. By Monday morning, they’d instructed the firm down the road.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Five emails to land one initial consultation',
        description:
          '“Tuesday at 10?” “Can’t do Tuesday.” “Wednesday afternoon?” The good ones don’t stick around for that.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'A conveyancing quote went out and you never heard back',
        description:
          'One follow-up message a week later would have closed half of these. Nobody had time to send it.',
        iconType: 'accent' as const,
      },
      {
        icon: FileText,
        title: 'The firm down the high street has 300 reviews. You have 14.',
        description:
          'Your clients are happier. Online you look smaller because nobody was ever asked at the right moment.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to handle enquiries, book consultations, and turn matters into reviews',
    description:
      'Each piece does one job. Together they keep the intake moving while the fee earners get on with the law.',
    featureCategories: [
      {
        title: 'Reply to enquiries the same hour, even on a Friday at 5',
        description:
          'Form lands, an instant acknowledgement goes out with what to expect next. Most enquirers stop ringing other firms.',
        icon: MessageSquare,
        features: [
          'Same-hour acknowledgement on every enquiry',
          'Matter type and urgency captured up front',
          'Holds the lead until somebody can call back',
        ],
      },
      {
        title: 'Book the initial consultation without the email tennis',
        description:
          'Clients pick a slot themselves. “When are you free?” gets replaced with a calendar link.',
        icon: Calendar,
        features: [
          'Self-serve consultation booking',
          'Reminders the day before',
          'Reschedule link instead of a no-show',
        ],
      },
      {
        title: 'Tell them what to bring before they arrive',
        description:
          'ID, marriage certificate, mortgage offer, will — sent automatically before the meeting so it actually goes somewhere.',
        icon: FileText,
        features: [
          'Pre-meeting document request automatically',
          'Sets the right expectations',
          'Consultations actually progress to instruction',
        ],
      },
      {
        title: 'Follow up the quotes and consultations that go quiet',
        description:
          'Quote sent Monday, polite check-in a week later, another the week after. Quietly closes more.',
        icon: Workflow,
        features: [
          'Follow-up at the right intervals',
          'Pending matters visible in one place',
          'Closing rate goes up without nagging',
        ],
      },
      {
        title: 'Turn finished matters into reviews',
        description:
          'A polite review request goes out the week after completion, when the relief is freshest.',
        icon: ShieldCheck,
        features: [
          'Review requests at the right moment',
          'Asked once, never again',
          'Reviews catch up to the workload',
        ],
      },
      {
        title: 'Show up first when local people search for a solicitor',
        description:
          'Service pages and Google profile lined up so people in the right town and matter type find you first.',
        icon: Search,
        features: [
          'Pages for the matters and towns you want',
          'Found on Maps for local searches',
          'Less time on enquiries that aren’t a fit',
        ],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'What Actually Changes',
    title: 'A normal week, before and after',
    description: 'The advisory work stays personal. The intake stops bleeding instructions.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How it runs now',
        items: [
          'A divorce enquiry came in Friday at 5pm. They instructed somebody else by Monday.',
          'Five emails to pin down one initial consultation.',
          'A conveyancing quote went out and never got followed up.',
          '“We meant to ask for a review” — said about every completed matter.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it runs after',
        items: [
          'Every enquiry gets an instant acknowledgement, even out of hours.',
          'Consultations booked through one link, no email tennis.',
          'Quotes get followed up automatically. More close.',
          'Reviews get asked for at the right moment, every time.',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Where Most Firms Start',
    title: 'Three stages — most firms feel one of them more than the others',
    description: 'Pick whichever costs you the most matters right now.',
    packages: [
      {
        name: 'Stop losing the after-hours enquiries',
        description: 'For when Friday-evening and weekend enquiries go cold by the time anybody replies.',
        price: 'Stage 1',
        priceDetail: 'Start here if first-reply speed is the biggest leak',
        features: [
          'Instant acknowledgement on every enquiry',
          'Matter type and urgency captured up front',
          'Most enquirers stop ringing the next firm',
        ],
      },
      {
        name: 'Close the consultations and quotes that drift',
        description: 'For when initial consultations take five emails and quoted matters go quiet.',
        price: 'Stage 2',
        priceDetail: 'Start here if booking and follow-up is the leak',
        features: [
          'Self-serve consultation booking',
          'Pre-meeting document request automatically',
          'Quote follow-up at the right intervals',
        ],
        popular: true,
      },
      {
        name: 'Build the local proof that fills the diary on its own',
        description: 'For when client outcomes are great but the firm looks small online.',
        price: 'Stage 3',
        priceDetail: 'Start here if reviews and local visibility are the weak spot',
        features: [
          'Review requests after every completed matter',
          'Service pages for the matters and towns you want',
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
        trigger: 'A divorce enquiry comes in Friday at 5pm.',
        actions: [
          'Instant acknowledgement goes out within minutes',
          'Matter type and urgency captured before Monday',
          'They wait for your call instead of ringing the next firm',
        ],
      },
      {
        trigger: 'An initial consultation is booked for next Wednesday.',
        actions: [
          'Pre-meeting document request goes out automatically',
          'Reminder lands the morning of the meeting',
          'The meeting actually progresses to instruction',
        ],
      },
      {
        trigger: 'A conveyancing quote was sent Monday and went quiet.',
        actions: [
          'A polite check-in goes out a week later',
          'Another a fortnight after that if no reply',
          'Quote-to-instruction quietly improves',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'small-law-firms-workflow-examples',
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
      'The other parts of the system that come up most often for small high-street practices.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description:
          'See the core system layer that holds legal enquiry, consultation flow, and follow-up together.',
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
    title: 'Things solicitors usually ask',
    description: 'Straight answers about how this fits a small legal practice.',
    faqs: [
      {
        question: 'I’m in court or with clients all day. Will this need a receptionist?',
        answer:
          'No. The whole point is it runs while the fee earners are on matters. You’ll see what came in on your phone between meetings, but nothing waits on you to operate it.',
      },
      {
        question: 'Will it be SRA-compliant and respect confidentiality?',
        answer:
          'Yes — the acknowledgement is generic and procedural. No matter detail goes out automatically. It captures contact info and routes the enquiry; the legal advice always comes from the fee earner.',
      },
      {
        question: 'Can it really reply to enquiries faster than I can?',
        answer:
          'Yes — with a calm, professional acknowledgement that captures what they need and tells them when somebody will be in touch. Most enquirers stop ringing other firms once they get that.',
      },
      {
        question: 'Will it work alongside our case management system?',
        answer:
          'It sits in front of your case management. Whatever you already use — LEAP, Clio, Actionstep — stays. The system improves the bit between enquiry and instruction.',
      },
      {
        question: 'How do I get more reviews without being pushy?',
        answer:
          'A polite request goes out the week after completion, when the relief is freshest. People who would have meant to leave one actually do.',
      },
      {
        question: 'Do I need to scrap my current website?',
        answer:
          'Usually not. We look at what you have first. The leak is normally the bit between enquiry and instruction — not the site itself.',
      },
    ],
  };

  return {
    slug: 'small-law-firms',
    industries: ['law-firm'],
    systems: [
      'smart-website-systems',
      'crm-automation',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['lead-qualification', 'lead-response-time', 'reputation-monitoring'],
    type: 'detail',
    parentSlug: 'legal-professional-services',
    seo: {
      title: 'Small Law Firms — Stop Losing After-Hours Enquiries, Consultations & Quotes | MindWP',
      description:
        'For small high-street firms where Friday-evening enquiries get instructed elsewhere by Monday, consultations take five emails to book, and conveyancing quotes go quiet. We put the system in place that catches the matters.',
      keywords: [
        'small law firm website design',
        'law firm lead handling system',
        'law consultation booking workflow',
        'law firm seo services',
        'law firm review system',
      ],
      canonical: '/industries/legal-professional-services/small-law-firms',
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
      title: 'Tell us where the matters are leaking',
      description:
        'If after-hours enquiries go cold, if consultations take a week of emails, or if quoted matters go quiet — walk us through how the firm runs and we’ll show you the first thing worth fixing.',
    },
  };
}

export const smallLawFirmsIndustryPageData: IndustryPageData = buildSmallLawFirmsIndustryPageData();
