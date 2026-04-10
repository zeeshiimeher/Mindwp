import {
  Calendar,
  Car,
  Clock3,
  MessageSquare,
  Search,
  ShieldCheck,
  Star,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildDrivingSchoolsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'Coverage Lane',
    title: 'Smart Website Systems for Driving Schools',
    description:
      'A driving school website should support lesson-fit enquiries, package clarity, scheduling cadence, trust-building, and follow-up — without making every learner journey depend on manual back-and-forth.',
    list: [
      'Clearer learner qualification',
      'Better lesson booking flow',
      'Stronger local trust signals',
      'Consistent follow-up',
    ],
    cssPrefix: 'driving-schools-hero',
  };

  const imageStripData = {
    badge: 'Service Environment',
    title:
      'Driving school demand depends on fit, scheduling clarity, and confidence before lessons start',
    description:
      'Lesson enquiries, instructor-fit questions, package decisions, scheduling cadence, test preparation, and follow-up all affect whether a learner progresses. When those steps stay loose, the booking path becomes harder to manage and harder to trust.',
    items: [
      {
        title: 'Lesson and package enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing driving school enquiries',
      },
      {
        title: 'Scheduling and lesson cadence',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing driving lesson scheduling',
      },
      {
        title: 'Preparation and next-step guidance',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing driving lesson preparation guidance',
      },
      {
        title: 'Reviews and local proof',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing driving school reviews and local proof',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'driving-schools-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Operating Patterns',
    title: 'Where driving schools lose clarity, time, or booking momentum',
    description:
      'The gap is between first enquiry, lesson-fit qualification, scheduling cadence, and the trust people need before committing to a lesson package.',
    benefits: [
      {
        icon: Car,
        title: 'Learner enquiries land without enough routing context',
        description:
          'Experience level, timing, instructor preference, and package needs arrive through one loose path — first-response quality suffers.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Booking and lesson cadence friction when readiness is unclear',
        description:
          'Availability, package fit, recurring sessions, and next steps do not move through one clean path — the booking flow slows down early.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Pending enquiries depend on manual follow-up',
        description:
          'Some learners are not ready immediately, but follow-up becomes inconsistent when instructors and admin are handling live bookings.',
        iconType: 'accent' as const,
      },
      {
        icon: Star,
        title: 'Trust signals stay fragmented across the decision path',
        description:
          'Reviews, pass-rate style proof, and instructor credibility all exist but do not work together to support a confident first booking.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'System Layers',
    title: 'The working layers behind a steadier driving school booking pipeline',
    description:
      'The system supports demand before lesson bookings, during scheduling, and after first contact when the learner decision takes time.',
    featureCategories: [
      {
        title: 'Lesson qualification layer',
        description:
          'Routes new enquiries through a clearer first-contact path so the right learner and package details reach the right next step.',
        icon: MessageSquare,
        features: ['Intent capture', 'Learner-fit qualification', 'Cleaner first response'],
      },
      {
        title: 'Booking layer',
        description:
          'Moves lessons and consultations into a booked next step without unnecessary delay.',
        icon: Calendar,
        features: ['Lesson scheduling', 'Reminder touchpoints', 'Next-step guidance'],
      },
      {
        title: 'Cadence layer',
        description:
          'Gives learners a clearer path around how lesson frequency and preparation should work after the first booking.',
        icon: Workflow,
        features: ['Lesson cadence support', 'Preparation guidance', 'Booking visibility'],
      },
      {
        title: 'Trust and proof layer',
        description:
          'Connects reviews, clarity, and instructor proof to the booking decision before lessons begin.',
        icon: ShieldCheck,
        features: ['Review requests', 'Proof-of-service support', 'Trust-led page structure'],
      },
      {
        title: 'Local visibility layer',
        description:
          'Aligns area pages and search visibility to reinforce the locations and lesson types the school wants.',
        icon: Search,
        features: ['Area-page targeting', 'Local search clarity', 'Local authority support'],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'Operational Shift',
    title: 'From reactive lesson enquiries to a steadier booking and follow-up flow',
    description:
      'The teaching and personal guidance stay. The repeatable friction around qualification, booking, and follow-up gets reduced.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'Before the workflow is structured',
        items: [
          'Enquiries arrive without enough detail to route them quickly',
          'Lesson and package booking depend on manual back-and-forth',
          'Pending opportunities are hard to follow consistently',
          'Trust depends too heavily on one-off reassurance during early messages',
        ],
      },
      {
        type: 'after' as const,
        title: 'After the workflow is aligned',
        items: [
          'New enquiries move into the right booking or nurture path faster',
          'Scheduling and reminder flow protect the next step more consistently',
          'Follow-up happens with less manual chasing',
          'Reviews, instructor proof, and page structure support better booking confidence',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Lead To Booking Flow',
    title: 'From first enquiry to lesson booking and follow-up',
    description:
      'Each stage moves driving school enquiries through a specific part of the journey — from first contact into the right lesson or package path, then into consistent follow-up.',
    packages: [
      {
        name: 'Lesson-fit capture',
        description:
          'Routes learner, package, and schedule enquiries into the right path with enough context for a clear first step.',
        price: 'Flow stage 1',
        priceDetail: 'Best when lead quality and first-contact clarity are the main issue',
        features: [
          'Intent-specific service pages',
          'Better enquiry capture',
          'Learner and timing context',
        ],
      },
      {
        name: 'Booking and cadence flow',
        description:
          'Adds steadier scheduling, clearer reminders, and cadence guidance so lessons move forward without friction.',
        price: 'Flow stage 2',
        priceDetail: 'Best when booking and lesson cadence handling create friction',
        features: ['Lesson scheduling support', 'Reminder structure', 'Cadence guidance'],
        popular: true,
      },
      {
        name: 'Follow-up and trust reinforcement',
        description:
          'Keeps pending opportunities, reviews, and credibility proof moving through a reliable follow-up path.',
        price: 'Flow stage 3',
        priceDetail: 'Best when follow-up consistency and trust-building are the pressure points',
        features: ['Nurture workflows', 'Review request support', 'Trust reinforcement'],
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Follow-Up Examples',
    title: 'What the driving school enquiry, booking, and follow-up flow looks like in practice',
    description:
      'Repeatable situations where the system reduces friction without making the school feel scripted.',
    workflows: [
      {
        trigger:
          'A new enquiry arrives and the school needs to determine learner stage, timing, package fit, and instructor availability.',
        actions: [
          'Capture the right intent and timing early',
          'Route the enquiry into the right booking or nurture path',
          'Reduce wasted time on unclear first contact',
        ],
      },
      {
        trigger:
          'A lesson or package is requested and timing, readiness, and scheduling cadence need confirming.',
        actions: [
          'Move the lead into a booked lesson window',
          'Send reminders and preparation guidance',
          'Keep internal handoff cleaner between enquiry and booking handling',
        ],
      },
      {
        trigger:
          'The initial booking is complete and the school wants to keep the learner moving without chasing manually.',
        actions: [
          'Send measured follow-up at the right times',
          'Keep the lead stage visible internally',
          'Support the decision with reviews and instructor proof if needed',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'driving-schools-workflow-examples',
  };

  const caseStudiesData = {
    category: 'local-appointment-businesses' as const,
    title: 'Related Case Studies',
    description:
      'Examples of how the system supports local appointment businesses in this category.',
    limit: 2,
  };

  const exploreData = {
    badge: 'Explore',
    description:
      'Relevant service layers for driving schools that want cleaner bookings, steadier follow-up, and stronger local trust support.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description:
          'See the core system layer that holds learner enquiry, booking flow, and follow-up together.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'Booking & Scheduling System',
        description: 'Support lessons, reminders, and clearer next-step handling.',
        href: '/services/booking-scheduling-system',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen area visibility, local credibility, and learner discovery.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description: 'Turn completed learner journeys into stronger proof and review flow.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Common questions about driving school systems',
    description: 'Common questions about MindWP for driving schools',
    faqs: [
      {
        question: 'How can a driving school get more qualified enquiries from a website?',
        answer:
          'Make lesson types, package options, and learner-fit paths clearer, then simplify the first contact step with better qualification prompts and next-step guidance. Qualified enquiries improve when the site reduces uncertainty early.',
      },
      {
        question: 'Should driving schools offer online lesson requests?',
        answer:
          'Yes. A clean request path reduces back-and-forth and moves people into the right next step faster. The key is capturing learner stage, timing, and readiness early.',
      },
      {
        question: 'How do driving schools reduce slow follow-up on colder enquiries?',
        answer:
          'A better enquiry system separates ready-now learners from nurture-stage opportunities, then supports measured follow-up over time. The aim is clarity, consistency, and less manual chasing.',
      },
      {
        question: 'Do driving schools need separate pages for different lesson types or packages?',
        answer:
          'Yes, as long as the pages reflect real service paths and useful information rather than thin copy. Good service-page structure helps local visibility and reassures prospects that the school handles their situation.',
      },
      {
        question: 'What kind of reviews matter most for driving schools?',
        answer:
          'Reviews that reinforce trust, communication, patience, and the feeling that the school made the learning process clearer and more manageable. A consistent review-request process after completed work builds that proof over time.',
      },
      {
        question:
          'Can a Smart Website system help a driving school without replacing lesson scheduling software?',
        answer:
          'Yes. The system improves the public-facing side of the workflow by making enquiries, booking, readiness guidance, and follow-up more consistent. It does not require replacing the scheduling tools you already use.',
      },
    ],
  };

  return {
    slug: 'driving-schools',
    industries: ['driving-school'],
    systems: [
      'smart-website-systems',
      'crm-automation',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['booking-systems', 'follow-up', 'review-generation'],
    type: 'detail',
    parentSlug: 'local-appointment-businesses',
    seo: {
      title: 'Driving Schools — Smart Website Systems | MindWP',
      description:
        'Smart Website systems for driving schools that need clearer booking flow, lesson cadence support, and stronger trust signals.',
      keywords: [
        'driving school website design',
        'driving lesson booking workflow',
        'driving school lead handling system',
        'driving school seo services',
        'driving school review system',
      ],
      canonical: '/industries/local-appointment-businesses/driving-schools',
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
      title: 'Build a steadier driving school booking system',
      description:
        'If unclear enquiry quality, loose booking flow, inconsistent follow-up, or weak trust proof are slowing things down, we can map a practical system around how the pipeline actually runs.',
    },
  };
}

export const drivingSchoolsIndustryPageData: IndustryPageData =
  buildDrivingSchoolsIndustryPageData();
