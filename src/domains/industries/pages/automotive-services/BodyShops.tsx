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
    title: 'They Send Photos. You Send a Quote. Then Nothing.',
    description:
      'Someone’s had a knock. They want to know what it’ll cost and how soon you can take the car. The first hour matters — by the next day they’re ringing the next shop. Most body shops don’t lose work on price. They lose it because nobody chased the estimate or replied fast enough.',
    list: [
      'Photos sent, no reply for hours',
      'Estimates that go cold',
      'Insurance jobs that stall',
      'Reviews that never get asked for',
    ],
    cssPrefix: 'body-shops-hero',
  };

  const imageStripData = {
    badge: 'How Body Work Comes In',
    title:
      'Most body shop enquiries arrive with a few phone photos and one big question — can you sort it, and how much?',
    description:
      'Insurance claims, kerbed alloys, supermarket dings, full panel work. People are usually frustrated, sometimes shaken, and almost always shopping at two or three other shops at the same time. Speed and clarity decide who they bring the car to.',
    items: [
      {
        title: 'Damage and repair enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing body shop damage enquiries',
      },
      {
        title: 'Assessment and estimate steps',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing body shop estimate flow',
      },
      {
        title: 'Booking and repair coordination',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing body shop booking coordination',
      },
      {
        title: 'Reviews and handoff follow-up',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing body shop reviews and handoff follow-up',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'body-shops-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where The Work Slips',
    title: 'Good repairs going out. Decent leads going cold.',
    description:
      'It’s not the workshop. It’s the bit before and after — photos sat in an inbox, quotes nobody chased, insurance jobs that hit a wall halfway through.',
    benefits: [
      {
        icon: Car,
        title: 'Damage photos land in an inbox nobody opens until tonight',
        description:
          'They sent the pictures at lunch. By the time someone replies, they’ve already had two other quotes back.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Trying to book an assessment turns into seven texts',
        description:
          'They want to drop the car. Your team is busy. The slot doesn’t get confirmed for two days.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'The estimate goes out. The job sits at “thinking about it”.',
        description:
          'No follow-up. No nudge. The customer either rings back themselves or quietly goes elsewhere.',
        iconType: 'accent' as const,
      },
      {
        icon: MapPinned,
        title: 'Five years of great paintwork. Eleven Google reviews.',
        description:
          'You know the work is good. Online, the next shop along looks busier just because they ask people for reviews.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to handle every photo, quote, and follow-up',
    description:
      'Each piece does one job. Together they make sure repair work doesn’t quietly slip to the shop down the road while your team is in the booth.',
    featureCategories: [
      {
        title: 'Catch every enquiry, even when the team is spraying',
        description:
          'Photos, calls, web forms — all land in one place with the damage and the customer’s details already attached.',
        icon: MessageSquare,
        features: [
          'Missed calls texted back inside a minute',
          'Photos saved against the right enquiry',
          'Insurance vs. private clearly tagged',
        ],
      },
      {
        title: 'Get the assessment booked the same day',
        description:
          'A clear way to offer a drop-off slot, confirm it, and remind them the day before so cars actually turn up.',
        icon: Calendar,
        features: [
          'Drop-off slots customers can pick',
          'Reminders the day before',
          'Front desk knows what’s booked in',
        ],
      },
      {
        title: 'Stop quotes from going cold',
        description:
          'Every estimate gets a polite chase on a schedule. Insurance jobs get nudged through their stages.',
        icon: Workflow,
        features: [
          'Quotes followed up automatically',
          'A live list of jobs sitting on a yes/no',
          'Old quotes warmed up instead of forgotten',
        ],
      },
      {
        title: 'Turn finished cars into proof you can show',
        description:
          'After a job goes out, a review request fires at the right moment. Your reputation catches up to the work.',
        icon: ShieldCheck,
        features: [
          'Review requests after each handover',
          'Before/after shots filed in one place',
          'More five-stars where local people search',
        ],
      },
      {
        title: 'Show up when local drivers search for the work you do',
        description:
          'Service pages, the Google profile, and local listings lined up so you appear for “bumper repair near me” — not buried on page two.',
        icon: Search,
        features: [
          'Found on Maps for real local searches',
          'Pages for the specific work you do',
          'Service-area coverage that’s visible',
        ],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'What Actually Changes',
    title: 'Same workshop. Different week.',
    description:
      'The repair quality stays. What changes is the part that depended on someone seeing a message at the right time.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How it runs now',
        items: [
          'Photos arrive at lunchtime, sit in the inbox until 6pm.',
          'A drop-off slot takes three days of texts to confirm.',
          'Quote sent Monday. Friday rolls round and nobody’s chased it.',
          'Customer collects the keys, drives off, never gets asked for a review.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it runs after',
        items: [
          'Photos hit one inbox, the customer gets a holding reply within minutes.',
          'Drop-off slot picked from a link, confirmed automatically, reminder fires the day before.',
          'The estimate gets a polite nudge the next morning. You can see who’s waiting on a yes.',
          'A review request goes out the day they collect. Reviews start stacking quietly.',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Where Most Shops Start',
    title: 'Three stages — most shops feel one of them more than the others',
    description:
      'Pick whichever is leaking the most work right now. The rest can follow.',
    packages: [
      {
        name: 'Stop enquiries from going missing',
        description:
          'For shops where photos sit unread for hours and missed calls don’t get a reply until evening.',
        price: 'Stage 1',
        priceDetail: 'Start here if first replies are slow',
        features: [
          'Missed-call text-back',
          'One inbox for photos, calls, and forms',
          'Damage and customer details captured up front',
        ],
      },
      {
        name: 'Get the assessment in the diary same day',
        description:
          'For shops where the back-and-forth around drop-off slots is killing momentum.',
        price: 'Stage 2',
        priceDetail: 'Start here if booking is the bottleneck',
        features: [
          'Drop-off slots customers pick themselves',
          'Reminders the day before',
          'Clear front-desk to workshop handover',
        ],
        popular: true,
      },
      {
        name: 'Keep estimates moving and turn jobs into reviews',
        description:
          'For shops where quotes go quiet and reputation online doesn’t match the actual work.',
        price: 'Stage 3',
        priceDetail: 'Start here if follow-up and reviews are the weak spots',
        features: [
          'Quotes chased automatically',
          'Insurance jobs nudged through the stages',
          'Review requests after every handover',
        ],
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Real Situations',
    title: 'A few moments where the difference shows up',
    description: 'Small handoffs that used to depend on someone seeing a message in time.',
    workflows: [
      {
        trigger:
          'A driver sends three photos of a kerbed alloy and a scuffed bumper at 1pm.',
        actions: [
          'They get a holding reply within minutes confirming you’ve received the photos',
          'The enquiry gets logged with the photos and customer attached',
          'A team member is told someone is waiting for an estimate',
        ],
      },
      {
        trigger:
          'They’re ready to bring the car in and want to know when they can drop it.',
        actions: [
          'They pick a slot from a link, no more text tag',
          'A reminder fires the day before',
          'Workshop sees the booking with the photos already attached',
        ],
      },
      {
        trigger:
          'You sent a quote on Monday and haven’t heard back by Wednesday.',
        actions: [
          'A polite chase goes out the next morning',
          'The estimate stays visible on a list of open jobs',
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
    description:
      'Examples of how the system supports automotive service businesses in this category.',
    limit: 2,
  };

  const exploreData = {
    badge: 'Related',
    description:
      'The other parts of the system that come up most often for body shops trying to stop work slipping to the next garage.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description:
          'See the core system layer that holds repair enquiry, assessment, and follow-up together.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'Booking & Scheduling System',
        description: 'Support assessments, reminders, and clearer next-step handling.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen repair visibility, maps trust, and local service discovery.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description: 'Turn completed repair work into stronger proof and review flow.',
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
    description: 'Straight answers about how this fits a workshop that’s already busy.',
    faqs: [
      {
        question: 'Most of our enquiries come with photos. Can it handle that?',
        answer:
          'Yes — photos land in the same place as the rest of the enquiry, attached to that customer. No more digging through three different inboxes to find the right ones.',
      },
      {
        question: 'Will customers feel they’re getting an automated response?',
        answer:
          'No. The first reply is short, sounds like a person, and just buys you the time you need to come back with a proper answer. The actual quote still comes from you.',
      },
      {
        question: 'A lot of our work is insurance jobs. Does this still help?',
        answer:
          'Yes. Insurance jobs have stages — photos, assessment, parts, repair, handover. Each one is a moment where things stall. The system nudges them through so jobs don’t live in limbo.',
      },
      {
        question: 'We’re bad at asking for reviews. Can it do that for us?',
        answer:
          'That’s exactly what it’s for. The request goes out at handover when people are happiest. You’ll see Google reviews appear without anyone chasing.',
      },
      {
        question: 'What about quotes from a few weeks ago that went quiet?',
        answer:
          'They get warmed up too. A lot of body shops find that re-engaging old estimates pulls in real money before any new marketing kicks in.',
      },
      {
        question: 'Do we need a brand new website for this?',
        answer:
          'Usually not. We look at what you have first. Often the site is fine — the gap is everything that happens after the form is sent.',
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
      title: 'Body Shops — Stop Losing Quotes to the Garage Down the Road | MindWP',
      description:
        'For body shops where damage photos sit unread, quotes go quiet, and reviews never get asked for. We put the routing, follow-up, and local visibility in place so the work already coming in actually books.',
      keywords: [
        'body shop website design',
        'body shop booking system',
        'body shop marketing system',
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
        'If photos sit unread, quotes go quiet, or reviews never get asked for — walk us through how the shop runs and we’ll show you the first thing worth fixing.',
    },
  };
}

export const bodyShopsIndustryPageData: IndustryPageData = buildBodyShopsIndustryPageData();
