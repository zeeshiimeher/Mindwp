import {
  Calendar,
  Clock3,
  Gavel,
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
    title: 'A Caller Has a Problem Today. They Picked Whoever Replied First.',
    description:
      'Legal enquiries are urgent and personal. The caller is comparing a few firms. Whichever firm answers first usually gets the consultation.',
    list: ['Slow replies', 'Lost consultations', 'Quiet proposals', 'Few reviews'],
    cssPrefix: 'small-law-firms-hero',
  };

  const imageStripData = {
    badge: 'How New Clients Come In',
    title: 'Someone has a legal problem they want sorted',
    description:
      'A family matter, a property issue, a dispute. They want to know if you can help, what it costs, and that the firm will reply.',
    items: [
      {
        title: 'New client enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing law firm enquiries',
      },
      {
        title: 'Initial consultations',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing law firm consultations',
      },
      {
        title: 'Engagement letters',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing law firm engagement letters',
      },
      {
        title: 'Reviews and referrals',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing law firm reviews',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'small-law-firms-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where Clients Slip',
    title: 'The matters are there. The bit between enquiry and signed engagement is where it leaks.',
    benefits: [
      {
        icon: Scale,
        title: 'Calls miss reception',
        description: 'Solicitors are with clients. The phone rings out. The caller picks the next firm.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Initial consultations take days to arrange',
        description: 'A simple consultation takes too many emails before anything is on the diary.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Engagement letters go quiet',
        description: 'A letter gets sent. The client thinks about it. Nobody follows up.',
        iconType: 'accent' as const,
      },
      {
        icon: Gavel,
        title: 'Online you look smaller than the firm you run',
        description: 'Plenty of resolved matters. Almost no reviews to show for them.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to handle every enquiry, consultation, and engagement letter',
    description: 'Each piece does one job. Together they keep clients from slipping between matters.',
    featureCategories: [
      {
        title: 'Catch every call and form',
        description: 'Calls, missed calls, web forms — all in one place with the caller and the matter noted.',
        icon: MessageSquare,
        features: [
          'Missed calls texted back instantly',
          'Web enquiries land with the right solicitor',
          'Caller and matter captured up front',
        ],
      },
      {
        title: 'Get the consultation booked without email tag',
        description: 'A clear way to offer a slot, confirm it, and remind both sides the day before.',
        icon: Calendar,
        features: [
          'Consultation slots clients can pick themselves',
          'Confirmations and reminders sent automatically',
          'Solicitor sees the matter before the call',
        ],
      },
      {
        title: 'Stop engagement letters going quiet',
        description: 'Every letter gets a follow-up on a schedule, even when the team is in court.',
        icon: Workflow,
        features: [
          'Letters chased automatically',
          'Open engagements in one place',
          'Old enquiries warmed up instead of forgotten',
        ],
      },
      {
        title: 'Turn resolved matters into proof',
        description: 'A review request goes out at the right moment so the firm shows up online.',
        icon: ShieldCheck,
        features: [
          'Review requests at the right moment',
          'Asked when the client is most positive',
          'More reviews where local people search',
        ],
      },
      {
        title: 'Show up when local people search',
        description: 'Service pages and Google profile lined up so you appear when someone nearby looks for legal help.',
        icon: Search,
        features: [
          'Found on Maps for the matters you handle',
          'Service pages that match real searches',
          'Local area coverage that is visible',
        ],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'What Actually Changes',
    title: 'A normal week, before and after',
    description: 'You still do the work. What changes is the part that used to depend on someone remembering.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How it runs now',
        items: [
          'Phone rings while a solicitor is with a client. Goes to voicemail. Lost.',
          'A caller wants a consultation. Three emails later, still no time set.',
          'Engagement letter sent on Monday. By Friday nobody has chased it.',
          'You resolved a difficult matter last month. They never got asked for a review.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it runs after',
        items: [
          'Missed call gets a text back inside a minute. They know the firm will reply.',
          'They pick a slot from a link. Confirmed. Reminder fires the day before.',
          'The letter gets a polite chase the next morning. You can see who is waiting.',
          'A review request goes out at the right moment. Reviews start stacking quietly.',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Where Most Firms Start',
    title: 'Three stages, most firms feel one more than the others',
    description: 'You do not have to fix everything at once. Start with whatever is leaking the most clients.',
    packages: [
      {
        name: 'Stop calls and enquiries going missing',
        description: 'For when solicitors are with clients and quick enquiries sit unread.',
        price: 'Stage 1',
        priceDetail: 'Start here if missed calls are the leak',
        features: [
          'Missed-call text-back so they know the firm will reply',
          'One inbox for calls, forms, and web enquiries',
          'Caller and matter noted before the conversation',
        ],
      },
      {
        name: 'Get the consultation booked the same week',
        description: 'Once enquiries are caught, this stage takes the friction out of confirming a consultation.',
        price: 'Stage 2',
        priceDetail: 'Start here if booking is where it slows down',
        features: [
          'Consultation slots clients can pick themselves',
          'Reminders the day before so consultations actually happen',
          'Solicitor sees the matter before they pick up',
        ],
        popular: true,
      },
      {
        name: 'Keep engagement letters moving and turn matters into reviews',
        description: 'For when enquiries come in fine but letters go quiet and reviews never get asked for.',
        price: 'Stage 3',
        priceDetail: 'Start here if follow-up and reputation are the weak spots',
        features: [
          'Letters chased automatically',
          'Past enquiries nudged at the right moment',
          'Review requests at the right moment',
        ],
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Real Situations',
    title: 'A few moments where the difference shows up',
    description: 'Small handoffs that used to depend on someone remembering.',
    workflows: [
      {
        trigger: 'A solicitor is with a client and a new enquiry call rings out.',
        actions: [
          'They get a text inside a minute saying the firm will reply',
          'The text captures the caller and the matter',
          'The lead is held instead of going to the next firm',
        ],
      },
      {
        trigger: 'A caller wants a consultation this week.',
        actions: [
          'They pick a slot from a link, no more email tag',
          'A reminder goes out the day before',
          'The solicitor sees the matter before the call',
        ],
      },
      {
        trigger: 'You sent an engagement letter a few days ago and have not heard back.',
        actions: [
          'A polite chase goes out automatically',
          'Open engagements are visible in one place',
          'If they sign, the matter opens without another five emails',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'small-law-firms-workflow-examples',
  };

  const caseStudiesData = {
    category: 'legal-professional-services' as const,
    title: 'Related Case Studies',
    description: 'Examples of how the system supports legal and professional services in this category.',
    limit: 2,
  };

  const exploreData = {
    badge: 'Related',
    description: 'The other parts of the system that come up most often for small law firms.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description: 'The core layer that holds enquiry, booking, and follow-up together.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'Booking & Scheduling System',
        description: 'Support consultation booking, reminders, and clearer next steps.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen firm visibility and local trust.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description: 'Turn resolved matters into reviews and proof.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Things small law firms usually ask',
    description: 'Straight answers about how this fits into a solicitor-led firm.',
    faqs: [
      {
        question: 'Solicitors are with clients most of the day. Will this make more work for them?',
        answer:
          'It does the opposite. Missed calls get answered by text on their own. Letter chasing goes out on a schedule. Reminders fire by themselves.',
      },
      {
        question: 'Will callers feel like they are getting an automated response?',
        answer:
          'No. The messages are short and written like the firm would actually reply. The aim is to hold the lead until a solicitor can speak to them.',
      },
      {
        question: 'Can it handle clients who need an initial consultation before any letter?',
        answer:
          'Yes. The first reply confirms a consultation and the engagement letter follows after the call.',
      },
      {
        question: 'Do we have to chase reviews ourselves?',
        answer:
          'No. The request goes out on its own at the right moment, after a matter the client is most positive about.',
      },
      {
        question: 'What about enquiries sitting in old emails?',
        answer:
          'Those get worked in too. Many firms find that warming up old enquiries brings in real fees before any new marketing kicks in.',
      },
      {
        question: 'Do we need a brand new website?',
        answer:
          'Usually not. We look at what you have first. Often the gap is everything that happens after the form is sent.',
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
      title: 'Small Law Firms — Stop Losing Consultations and Quiet Engagements | MindWP',
      description:
        'For small law firms where calls go to voicemail, engagement letters go quiet, and reviews never get asked for. We put the routing, follow-up, and local visibility in place.',
      keywords: [
        'law firm website design',
        'law firm booking system',
        'law firm lead handling system',
        'law firm seo services',
        'law firm reputation management system',
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
      title: 'Tell us where clients are slipping',
      description:
        'If calls go to voicemail with clients, engagement letters go quiet, or reviews never get asked for, walk us through how the week runs and we will show you the first thing worth fixing.',
    },
  };
}

export const smallLawFirmsIndustryPageData: IndustryPageData = buildSmallLawFirmsIndustryPageData();
