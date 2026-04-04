import {
  Calendar,
  Clock3,
  Landmark,
  MapPinned,
  MessageSquare,
  Search,
  ShieldCheck,
  Star,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildRealtorsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'Coverage Lane',
    title: 'Smart Website Systems for Realtors',
    description:
      'A realtor website should support buyer and seller qualification, valuation or viewing coordination, trust-building, and follow-up — without making the whole pipeline depend on manual chasing.',
    list: [
      'Clearer buyer and seller routing',
      'Better appointment flow',
      'Stronger local trust signals',
      'More reliable nurture follow-up',
    ],
    cssPrefix: 'realtors-hero',
  };

  const imageStripData = {
    badge: 'Service Environment',
    title:
      'Real estate demand depends on trust, timing, and next-step clarity before a decision moves',
    description:
      'Buyer enquiries, seller questions, valuation requests, viewing coordination, local credibility, and nurture follow-up all shape whether someone progresses. When those steps feel disconnected, the pipeline becomes harder to trust.',
    items: [
      {
        title: 'Buyer and seller enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing realtor buyer and seller enquiries',
      },
      {
        title: 'Valuation and viewing booking',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing realtor booking and viewings',
      },
      {
        title: 'Nurture and decision follow-up',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing realtor nurture and decision follow-up',
      },
      {
        title: 'Reviews and local proof',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing realtor reviews and local proof',
      },
    ],
    backgroundColor: 'bg-section-surface',
    cssPrefix: 'realtors-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Operating Patterns',
    title: 'Where realtors lose time, clarity, or deal momentum',
    description:
      'The gap is rarely just lead volume — it sits between first enquiry, qualification, appointment coordination, and the trust proof people need before they move forward.',
    benefits: [
      {
        icon: Landmark,
        title: 'Buyer and seller intent is not always separated clearly at first contact',
        description:
          'Different goals, timeframes, and levels of readiness arrive through one loose path — first-response quality drops when everything routes the same way.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Valuation and viewing coordination creates friction',
        description:
          'Availability, property context, next steps, and reminder timing sit in different places — the booking path slows before it should.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Nurture and pending-decision follow-up depend too much on memory',
        description:
          'Lead nurture, reminder flow, and review requests often happen inconsistently when the team is already handling active deals.',
        iconType: 'accent' as const,
      },
      {
        icon: MapPinned,
        title: 'Trust signals stay fragmented across the local decision path',
        description:
          'Reviews, area pages, listings, and advisor credibility exist in different places — they rarely work together to support confident next-step decisions.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'System Layers',
    title: 'The working layers behind a steadier real estate pipeline',
    description:
      'A realtor workflow needs structure before appointments, during valuation or viewing coordination, and after first contact — especially when the decision takes time.',
    featureCategories: [
      {
        title: 'Lead capture and qualification layer',
        description:
          'Routes buyer, seller, valuation, and viewing enquiries through a clearer first-contact path so the right intent reaches the right next step.',
        icon: MessageSquare,
        features: ['Intent capture', 'Buyer and seller qualification', 'Cleaner first response'],
      },
      {
        title: 'Appointment booking layer',
        description:
          'Moves viewings, valuations, and consultations into a booked next step without unnecessary delay.',
        icon: Calendar,
        features: ['Viewing scheduling', 'Reminder touchpoints', 'Clear next-step guidance'],
      },
      {
        title: 'Nurture and follow-up layer',
        description:
          'Keeps pending decisions on a calmer, more consistent follow-up path so opportunities do not disappear into silence.',
        icon: Workflow,
        features: ['Lead nurture', 'Decision reminders', 'Pipeline visibility'],
      },
      {
        title: 'Trust and proof layer',
        description:
          'Connects reviews, local credibility, and advisor proof so they support property decisions before the appointment happens.',
        icon: ShieldCheck,
        features: ['Review requests', 'Proof-of-service support', 'Trust-led page structure'],
      },
      {
        title: 'Local visibility layer',
        description:
          'Reinforces the locations and enquiries you want through area pages, search visibility, and local credibility.',
        icon: Search,
        features: [
          'Area-page targeting',
          'Local search clarity',
          'Google Business Profile support',
        ],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'Operational Shift',
    title: 'From reactive property enquiries to a more reliable appointment and follow-up flow',
    description:
      'The personal relationship stays. The repeatable friction around qualification, appointment coordination, and follow-up gets reduced.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'Before the workflow is structured',
        items: [
          'Leads arrive without enough detail to route them quickly',
          'Viewings and valuations depend on manual back-and-forth',
          'Pending opportunities are hard to follow consistently',
          'Trust depends too heavily on one-off reassurance during the early sales process',
        ],
      },
      {
        type: 'after' as const,
        title: 'After the workflow is aligned',
        items: [
          'New leads move into the right appointment or nurture path faster',
          'Booking and reminder flow protect the next step more consistently',
          'Follow-up happens with less manual chasing',
          'Reviews, local proof, and page structure support better decision confidence',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Lead To Booking Flow',
    title: 'How the realtor workflow moves from first enquiry to appointment and follow-up',
    description:
      'How the system moves property leads from first contact into the right valuation, viewing, or consultation path — then into consistent follow-up.',
    packages: [
      {
        name: 'Lead capture and qualification',
        description:
          'Routes buyer, seller, valuation, and viewing enquiries into a clearer first step — so the right intent reaches the right next action faster.',
        price: 'Flow stage 1',
        priceDetail: 'Best when lead quality and first-contact clarity are the main issue',
        features: [
          'Intent-specific service pages',
          'Better enquiry capture',
          'Location and property context',
        ],
        buttonText: 'Talk Through Scope',
        buttonHref: '/contact',
      },
      {
        name: 'Appointment and reminder flow',
        description:
          'Adds steadier scheduling, clearer reminders, and better control over the next step after first contact.',
        price: 'Flow stage 2',
        priceDetail: 'Best when booking and appointment handling create friction',
        features: [
          'Viewing and valuation scheduling support',
          'Reminder structure',
          'Next-step clarity',
        ],
        popular: true,
        buttonText: 'See the Setup',
        buttonHref: '/contact',
      },
      {
        name: 'Nurture and trust reinforcement',
        description:
          'Keeps pending opportunities, reviews, and local proof moving in a more reliable way.',
        price: 'Flow stage 3',
        priceDetail: 'Best when follow-up consistency and trust-building are the pressure points',
        features: ['Nurture workflows', 'Review request support', 'Local proof reinforcement'],
        buttonText: 'Request Details',
        buttonHref: '/contact',
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Follow-Up Examples',
    title: 'What the realtor lead, booking, and follow-up flow looks like in practice',
    description:
      'Repeatable situations where a structured realtor setup reduces friction — without making the business feel scripted.',
    workflows: [
      {
        trigger:
          'A new enquiry arrives and the realtor needs to determine whether the person is a buyer, seller, or valuation lead before booking the next step.',
        actions: [
          'Capture the right intent and timing early',
          'Route the enquiry into the right appointment or nurture path',
          'Reduce wasted time on unclear first contact',
        ],
      },
      {
        trigger:
          'A viewing or valuation is requested and the business needs to confirm timing, property context, and the next step clearly.',
        actions: [
          'Move the lead into a booked appointment window',
          'Send reminders and next-step guidance',
          'Keep internal handoff cleaner between enquiry and appointment handling',
        ],
      },
      {
        trigger:
          'The appointment is complete and the realtor wants to keep the opportunity moving without manual chasing every time.',
        actions: [
          'Send measured follow-up at the right times',
          'Keep the lead stage visible internally',
          'Support the decision with reviews and local proof if needed',
        ],
      },
    ],
    backgroundColor: 'bg-section-surface',
    cssPrefix: 'realtors-workflow-examples',
  };

  const caseStudiesData = {
    category: 'real-estate-property-services' as const,
    title: 'Related Case Studies',
    description: 'Examples of how the system supports property businesses in this category.',
    limit: 2,
  };

  const exploreData = {
    badge: 'Explore',
    description:
      'Relevant service layers for realtors that want cleaner appointments, steadier follow-up, and stronger local trust support.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description:
          'See the core system layer that holds property enquiry, appointment flow, and follow-up together.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'Booking & Scheduling System',
        description: 'Support viewings, valuations, reminders, and clearer next-step handling.',
        href: '/services/booking-scheduling-system',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen area visibility, local credibility, and property discovery.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description:
          'Turn completed service and successful relationships into stronger proof and review flow.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-section-muted',
    ctaLabel: 'View Service',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Common questions about realtor systems',
    description: 'Common questions about MindWP for realtors',
    faqs: [
      {
        question: 'How can a realtor get more qualified property enquiries from a website?',
        answer:
          'Clearer buyer, seller, and valuation paths plus stronger calls to action and better next-step guidance reduce uncertainty early — which directly improves enquiry quality.',
      },
      {
        question: 'Should realtors offer online valuation or viewing requests?',
        answer:
          'Yes — a clean request path reduces back-and-forth and moves people into the right next step faster. The key is capturing context early: intent, location, property type, and timing.',
      },
      {
        question: 'How do realtors reduce missed calls and slow follow-up?',
        answer:
          'Missed calls become expensive when deals rely on timing and trust. A better enquiry system can capture requests through multiple paths, support missed-enquiry recovery, and make the first reply clearer even when nobody can answer immediately.',
      },
      {
        question: 'Do realtors need separate pages for buyer and seller services?',
        answer:
          'Often, yes, as long as the pages reflect real service paths and useful information rather than thin copy. Good service-page structure helps local visibility and also helps prospects feel confident that the realtor handles their situation.',
      },
      {
        question: 'How should realtors handle nurture follow-up without sounding pushy?',
        answer:
          'Use calm, well-timed follow-up that confirms the next step, keeps the opportunity visible, and makes it easy for the prospect to re-engage — less pressure, more consistency.',
      },
      {
        question: 'What kind of reviews matter most for realtors?',
        answer:
          'The most useful reviews help future clients trust the communication, local knowledge, and overall experience. A structured review request process after completed work can help build that proof more consistently over time.',
      },
    ],
  };

  return {
    slug: 'realtors',
    industries: ['realtor'],
    systems: [
      'smart-website-systems',
      'crm-automation',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['lead-management', 'crm-pipeline', 'local-visibility'],
    type: 'detail',
    parentSlug: 'real-estate-property-services',
    seo: {
      title: 'Realtors — Smart Website Systems | MindWP',
      description:
        'Smart Website systems for realtors that need clearer enquiry handling, appointment flow, and stronger local trust.',
      keywords: [
        'realtor website design',
        'real estate lead handling system',
        'real estate booking system',
        'realtor seo services',
        'realtor reputation management system',
      ],
      canonical: '/industries/real-estate-property-services/realtors',
    },
    hero: {
      ...heroData,
      primaryAction: { label: 'Start a Conversation', href: '/contact' },
      secondaryAction: {
        label: 'See Smart Website Systems',
        href: '/services/smart-website-systems',
      },
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
      title: 'Build a steadier realtor appointment and follow-up system',
      description:
        'If your real estate business is dealing with missed enquiries, loose appointment flow, or inconsistent nurture follow-up — we can map a practical system around how the pipeline actually runs.',
      primaryAction: { variant: 'white', label: 'Start a Conversation', href: '/contact' },
      secondaryAction: {
        label: 'See Real Estate & Property Services',
        href: '/industries/real-estate-property-services',
      },
    },
  };
}

export const realtorsIndustryPageData: IndustryPageData = buildRealtorsIndustryPageData();
