import {
  Calendar,
  Car,
  Clock3,
  MapPinned,
  MessageSquare,
  Search,
  ShieldCheck,
  Star,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildBodyShopsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Body Shops',
    title: 'They Sent a Photo of the Damage. Two Days Later They Booked Elsewhere.',
    description:
      'Body shop enquiries arrive after an accident. The driver wants to know if you can take a look, what it might cost, and how soon. The shop that replies first usually wins the job.',
    list: ['Slow replies', 'Quiet quotes', 'Lost bookings', 'Few reviews'],
    cssPrefix: 'body-shops-hero',
  };

  const imageStripData = {
    badge: 'How Repair Work Comes In',
    title: 'A driver wants someone to look at the damage',
    description:
      'A bumper, a panel, a scrape from the car park. They want to know if you can help, what it might cost, and that the car will look right again.',
    items: [
      {
        title: 'Damage photos and enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing body shop enquiries',
      },
      {
        title: 'Estimates and approvals',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing body shop estimates',
      },
      {
        title: 'Booking and drop-off',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing body shop booking',
      },
      {
        title: 'Reviews and return visits',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing body shop reviews',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'body-shops-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where The Work Slips',
    title: 'The work is there. The way enquiries get handled is what loses it.',
    benefits: [
      {
        icon: Car,
        title: 'A photo comes in and sits unread',
        description: 'The driver sent a picture of the damage. By the time you see it, they have already messaged another shop.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Estimates take days to send',
        description: 'A simple ballpark price takes too long because the estimator is in the workshop.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Quotes go out and never get chased',
        description: 'A price gets sent. The driver thinks about it. Nobody follows up.',
        iconType: 'accent' as const,
      },
      {
        icon: MapPinned,
        title: 'Online you look smaller than the work you do',
        description: 'You finish good repairs every week. Online there are barely any reviews to show for it.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to handle every enquiry, estimate, and finished repair',
    description: 'Each piece does one job. Together they keep work from slipping while the team is in the workshop.',
    featureCategories: [
      {
        title: 'Catch every call, photo, and form',
        description: 'Calls, missed calls, web forms, photos — all in one place with the car and the damage noted.',
        icon: MessageSquare,
        features: [
          'Missed calls texted back instantly',
          'Photos and forms land in one inbox',
          'Vehicle and damage noted up front',
        ],
      },
      {
        title: 'Get the estimate out the same day',
        description: 'A clear way to send a ballpark, confirm a visit, and keep the conversation moving.',
        icon: Calendar,
        features: [
          'First reply goes out fast',
          'Visit slots customers can pick themselves',
          'Reminders sent automatically',
        ],
      },
      {
        title: 'Stop quotes going quiet',
        description: 'Every quote gets a follow-up on a schedule, even when the team is flat out.',
        icon: Workflow,
        features: [
          'Quotes chased automatically',
          'Open quotes in one place',
          'Old quotes warmed up instead of forgotten',
        ],
      },
      {
        title: 'Turn finished repairs into proof',
        description: 'A review request goes out at the right moment so the work shows up online.',
        icon: ShieldCheck,
        features: [
          'Review requests after every job',
          'Asked when the customer is happiest',
          'More reviews where local people search',
        ],
      },
      {
        title: 'Show up when local drivers search',
        description: 'Service pages and Google profile lined up so you appear when someone nearby needs help.',
        icon: Search,
        features: [
          'Found on Maps for the work you do',
          'Service pages that match real searches',
          'Local area coverage that is visible',
        ],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'What Actually Changes',
    title: 'A normal week at the shop, before and after',
    description: 'The workshop still runs the workshop. What changes is the part that used to depend on someone remembering.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How it runs now',
        items: [
          'Photo of damage sent in. Sits unread for days. Lost.',
          'A driver wants an estimate. Three messages later, still no price.',
          'Quote sent on Monday. By Friday nobody has chased it.',
          'You finished a great repair last week. They never got asked for a review.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it runs after',
        items: [
          'Photo lands in one inbox. First reply goes out the same day.',
          'They pick a slot from a link. Confirmed. Reminder fires the day before.',
          'The quote gets a polite chase the next morning. You can see who is waiting.',
          'A review request goes out the day they pick the car up. Reviews start stacking quietly.',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Where Most Shops Start',
    title: 'Three stages, most shops feel one more than the others',
    description: 'You do not have to fix everything at once. Start with whatever is leaking the most work.',
    packages: [
      {
        name: 'Stop enquiries going missing',
        description: 'For when calls and photos sit unread and quick enquiries get lost.',
        price: 'Stage 1',
        priceDetail: 'Start here if first replies are the leak',
        features: [
          'Missed-call text-back so they know you will reply',
          'One inbox for calls, forms, photos, and web enquiries',
          'Vehicle and damage noted before the conversation',
        ],
      },
      {
        name: 'Get the estimate out the same day',
        description: 'Once enquiries are caught, this stage takes the friction out of sending an estimate.',
        price: 'Stage 2',
        priceDetail: 'Start here if estimates are where it slows down',
        features: [
          'Faster first reply',
          'Slots customers can pick themselves',
          'Reminders the day before so visits actually happen',
        ],
        popular: true,
      },
      {
        name: 'Keep quotes moving and turn jobs into reviews',
        description: 'For when work comes in fine but quotes go quiet and reviews never get asked for.',
        price: 'Stage 3',
        priceDetail: 'Start here if follow-up and reputation are the weak spots',
        features: [
          'Quotes chased automatically',
          'Past customers nudged for return work',
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
        trigger: 'A driver sends a photo of the damage.',
        actions: [
          'It lands in one inbox with the car noted',
          'A first reply goes out the same day',
          'A visit slot can be confirmed without phone tag',
        ],
      },
      {
        trigger: 'A driver wants an estimate before the weekend.',
        actions: [
          'They pick a slot from a link, no more text tag',
          'A reminder goes out the day before',
          'Front desk sees the booking with the car and the damage attached',
        ],
      },
      {
        trigger: 'You sent a quote a few days ago and have not heard back.',
        actions: [
          'A polite chase goes out automatically the next morning',
          'Open quotes are visible in one place',
          'If they say yes, the booking happens without another five messages',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'body-shops-workflow-examples',
  };

  const caseStudiesData = {
    category: 'automotive-services' as const,
    title: 'Related Case Studies',
    description: 'Examples of how the system supports automotive service businesses in this category.',
    limit: 2,
  };

  const exploreData = {
    badge: 'Related',
    description: 'The other parts of the system that come up most often for body shops.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description: 'The core layer that holds enquiry, estimate, and follow-up together.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'Booking & Scheduling System',
        description: 'Support visit booking, reminders, and clearer next steps.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen body shop visibility and local trust.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description: 'Turn finished repairs into reviews and proof.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Things body shops usually ask',
    description: 'Straight answers about how this fits into a busy workshop.',
    faqs: [
      {
        question: 'We are flat out. How much extra work is this for the team?',
        answer:
          'Almost none after setup. Missed calls get answered by text on their own. Quote chasing goes out on a schedule. Reminders fire by themselves.',
      },
      {
        question: 'Will customers feel like they are getting an automated response?',
        answer:
          'No. The messages are short and written like you would actually text someone. The aim is to hold the lead until you can reply.',
      },
      {
        question: 'Can it handle estimates that need photos to price?',
        answer:
          'Yes. Photos land in one inbox with the car noted, and the first reply can confirm a visit before the full estimate.',
      },
      {
        question: 'Do we have to chase reviews ourselves?',
        answer:
          'No. The request goes out on its own after the job is done, when the customer is happiest.',
      },
      {
        question: 'What about old quotes sitting in the inbox?',
        answer:
          'Those get worked in too. Many shops find that warming up old quotes brings in real money before any new marketing kicks in.',
      },
      {
        question: 'Do we need a brand new website?',
        answer:
          'Usually not. We look at what you have first. Often the gap is everything that happens after the form is sent.',
      },
    ],
  };

  return {
    slug: 'body-shops',
    industries: ['body-shop'],
    systems: [
      'smart-website-systems',
      'ai-lead-handling',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['lead-response-time', 'follow-up', 'review-generation'],
    type: 'detail',
    parentSlug: 'automotive-services',
    seo: {
      title: 'Body Shops — Stop Losing Estimates and Repairs to Slow Replies | MindWP',
      description:
        'For body shops where photos sit unread, quotes go quiet, and reviews never get asked for. We put the routing, follow-up, and local visibility in place.',
      keywords: [
        'body shop website design',
        'body shop booking system',
        'body shop lead handling system',
        'body shop seo services',
        'body shop reputation management system',
      ],
      canonical: '/industries/automotive-services/body-shops',
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
      title: 'Tell us where the work is slipping',
      description:
        'If photos sit unread, quotes go quiet, or reviews never get asked for, walk us through how the week runs and we will show you the first thing worth fixing.',
    },
  };
}

export const bodyShopsIndustryPageData: IndustryPageData = buildBodyShopsIndustryPageData();
