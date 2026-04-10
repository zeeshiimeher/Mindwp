import {
  Calendar,
  ClipboardCheck,
  Clock3,
  Home,
  MessageSquare,
  Search,
  ShieldCheck,
  Star,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildHomeInspectorsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'Coverage Lane',
    title: 'Smart Website Systems for Home Inspectors',
    description:
      'A home inspection website should support inspection enquiries, scheduling, preparation steps, report follow-through, and trust-building — without turning every booking into manual coordination.',
    list: [
      'Clearer inspection enquiry routing',
      'Better scheduling and prep flow',
      'Stronger local trust signals',
      'More reliable report follow-up',
    ],
    cssPrefix: 'home-inspectors-hero',
  };

  const imageStripData = {
    badge: 'Service Environment',
    title:
      'Inspection demand depends on timing, preparation clarity, and trust before anyone books the visit',
    description:
      'Pre-purchase inspections, specialty requests, scheduling windows, preparation questions, report expectations, and follow-up all affect whether the next step happens smoothly. When those steps feel disconnected, the workflow becomes harder to manage and harder to trust.',
    items: [
      {
        title: 'Inspection and availability enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing home inspection enquiries',
      },
      {
        title: 'Scheduling and preparation steps',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing home inspection scheduling and preparation',
      },
      {
        title: 'Reports and follow-through',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing home inspection reports and follow-up',
      },
      {
        title: 'Reviews and local proof',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing home inspection reviews and trust signals',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'home-inspectors-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Operating Patterns',
    title: 'Where home inspectors lose time, clarity, or booking confidence',
    description:
      'The gap is rarely just generating leads — it sits between first enquiry, the booking window, preparation expectations, and the trust people need before they commit to the inspection.',
    benefits: [
      {
        icon: ClipboardCheck,
        title: 'Inspection enquiries often arrive without enough context to route quickly',
        description:
          'Property type, timing, service type, and access details are not always clear at first contact — the next step slows and back-and-forth increases.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Scheduling and preparation steps create friction when expectations are unclear',
        description:
          'Availability, occupancy status, agent coordination, and pre-visit instructions all need cleaner handling if the booking path is going to feel reliable.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Report follow-up can become inconsistent during busy weeks',
        description:
          'Clients, agents, and referral partners all need clarity after the inspection, but follow-up often depends on memory once the day fills up.',
        iconType: 'accent' as const,
      },
      {
        icon: Home,
        title:
          'Trust is decided before the inspection starts, not just after the report is delivered',
        description:
          'People want confidence in the process, the communication, and the professionalism before they hand over the booking.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'System Layers',
    title: 'The working layers behind a steadier inspection pipeline',
    description:
      'A home inspection workflow needs structure before the appointment is booked, while the visit is being coordinated, and after the report has to move into the next step.',
    featureCategories: [
      {
        title: 'Enquiry and qualification layer',
        description:
          'Routes inspection requests through a clearer first-contact path so the right property and timing details are captured early.',
        icon: MessageSquare,
        features: ['Intent capture', 'Property context', 'Cleaner first response'],
      },
      {
        title: 'Booking and preparation layer',
        description:
          'Moves scheduling, access details, and pre-visit instructions through a cleaner next-step path.',
        icon: Calendar,
        features: ['Inspection scheduling', 'Preparation guidance', 'Reminder support'],
      },
      {
        title: 'Report and follow-up layer',
        description:
          'Gives the business a calmer, more consistent way to guide the next conversation after the inspection.',
        icon: Workflow,
        features: ['Follow-up flow', 'Next-step clarity', 'Pipeline visibility'],
      },
      {
        title: 'Trust and proof layer',
        description:
          'Reinforces trust through reviews, process clarity, and service proof — reducing hesitation before someone books an inspection.',
        icon: ShieldCheck,
        features: ['Review requests', 'Trust-led service pages', 'Expectation setting'],
      },
      {
        title: 'Local visibility layer',
        description:
          'Supports the locations and inspection types you actually provide through local search clarity and area pages.',
        icon: Search,
        features: ['Area-page targeting', 'Local search clarity', 'Service-area support'],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'Operational Shift',
    title: 'From reactive inspection booking to a steadier scheduling and follow-up flow',
    description:
      'The inspection quality stays. The repeatable friction around enquiries, scheduling, and follow-up gets reduced.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'Before the workflow is structured',
        items: [
          'New inspection leads arrive without enough information to book confidently',
          'Scheduling and preparation depend on repeated manual clarification',
          'Report follow-up is hard to keep consistent during busy inspection periods',
          'Trust depends too heavily on one-off reassurance in early conversations',
        ],
      },
      {
        type: 'after' as const,
        title: 'After the workflow is aligned',
        items: [
          'Leads move into the right appointment path with clearer property context',
          'Preparation steps and reminders protect the booking more consistently',
          'Follow-up after the inspection happens with less manual chasing',
          'Reviews, local proof, and process clarity support better booking confidence',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Lead To Inspection Flow',
    title:
      'How the home inspection workflow moves from first enquiry to scheduling and report follow-up',
    description:
      'How a structured inspection setup moves leads from first contact into the right appointment path — then into preparation and follow-up without loose handoffs.',
    packages: [
      {
        name: 'Lead capture and qualification',
        description:
          'Routes inspection enquiries into a clearer first step — so the right property and timing details reach the right next action faster.',
        price: 'Flow stage 1',
        priceDetail: 'Best when lead quality and booking clarity are the main issue',
        features: [
          'Intent-specific service pages',
          'Better enquiry capture',
          'Property and timing context',
        ],
      },
      {
        name: 'Scheduling and preparation flow',
        description:
          'Adds steadier booking, clearer reminders, and better control over the visit setup.',
        price: 'Flow stage 2',
        priceDetail: 'Best when appointment handling and prep communication create friction',
        features: ['Inspection scheduling support', 'Reminder structure', 'Preparation guidance'],
        popular: true,
      },
      {
        name: 'Report and trust reinforcement',
        description:
          'Keeps the post-inspection conversation, review flow, and local proof moving in a more reliable way.',
        price: 'Flow stage 3',
        priceDetail: 'Best when follow-up consistency and trust-building are the pressure points',
        features: ['Follow-up workflows', 'Review request support', 'Local proof reinforcement'],
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Follow-Up Examples',
    title: 'What the inspection lead, booking, and follow-up flow looks like in practice',
    description:
      'Repeatable situations where a structured home inspection setup reduces friction — without making the business feel scripted.',
    workflows: [
      {
        trigger:
          'A new enquiry arrives and the inspector needs to determine inspection type, timing, property details, and the right next step before booking.',
        actions: [
          'Capture the right context early',
          'Route the lead into the right appointment path',
          'Reduce wasted time on unclear first contact',
        ],
      },
      {
        trigger:
          'An inspection is requested and the business needs to confirm scheduling, access, and preparation steps clearly.',
        actions: [
          'Move the lead into a booked inspection window',
          'Send reminders and pre-visit guidance',
          'Keep internal handoff cleaner between enquiry and appointment handling',
        ],
      },
      {
        trigger:
          'The inspection is complete and the business wants to keep the next step moving without manual chasing every time.',
        actions: [
          'Send measured follow-up at the right time',
          'Keep the lead stage visible internally',
          'Support the decision with reviews and local proof when appropriate',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'home-inspectors-workflow-examples',
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
      'Relevant service layers for home inspectors that want cleaner booking, steadier follow-up, and stronger local trust support.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description:
          'See the core system layer that holds inspection enquiries, appointment flow, and follow-up together.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'Booking & Scheduling System',
        description: 'Support inspection scheduling, reminders, and clearer next-step handling.',
        href: '/services/booking-scheduling-system',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description:
          'Strengthen area visibility, local credibility, and discovery for inspection services.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description: 'Turn completed inspections into stronger proof and review flow.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Common questions about home inspection systems',
    description: 'Common questions about MindWP for home inspectors',
    faqs: [
      {
        question:
          'How can a home inspector get more qualified inspection enquiries from a website?',
        answer:
          'Clearer inspection types, service areas, and a better first booking step reduce uncertainty early — which directly improves enquiry quality.',
      },
      {
        question: 'Should home inspectors offer online scheduling requests?',
        answer:
          'Yes — a clean scheduling request path reduces back-and-forth and moves people into the right next step faster. The key is capturing context early: property type, timing, and access details.',
      },
      {
        question: 'How do home inspectors reduce missed calls and slow follow-up?',
        answer:
          'Missed calls become expensive when inspections depend on timing. A better enquiry system can capture requests through multiple paths, support missed-enquiry recovery, and make the first reply clearer even when nobody can answer immediately.',
      },
      {
        question: 'Do home inspectors need separate pages for different inspection types?',
        answer:
          'Often, yes, as long as the pages reflect real service paths and useful information rather than thin copy. Good service-page structure helps local visibility and also helps prospects feel confident that the inspector handles their situation.',
      },
      {
        question: 'What kind of reviews matter most for home inspectors?',
        answer:
          'The most useful reviews reinforce professionalism, communication clarity, and the feeling that the inspection process was organised and helpful. A structured review request process after completed work can help build that proof more consistently over time.',
      },
      {
        question:
          'Can a Smart Website system help home inspectors without changing how reports are delivered?',
        answer:
          'Yes. The system helps on the public-facing side of the workflow by improving enquiry handling, scheduling, preparation, and follow-up. It does not require replacing the internal reporting tools you already use.',
      },
    ],
  };

  return {
    slug: 'home-inspectors',
    industries: ['home-inspection'],
    systems: [
      'smart-website-systems',
      'crm-automation',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['lead-qualification', 'follow-up', 'review-generation'],
    type: 'detail',
    parentSlug: 'real-estate-property-services',
    seo: {
      title: 'Home Inspectors — Smart Website Systems | MindWP',
      description:
        'Smart Website systems for home inspectors that need clearer inspection booking, preparation flow, and stronger local trust.',
      keywords: [
        'home inspector website design',
        'home inspection booking workflow',
        'home inspector lead handling system',
        'home inspector seo services',
        'home inspection review system',
      ],
      canonical: '/industries/real-estate-property-services/home-inspectors',
    },
    hero: {
      ...heroData,
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
      title: 'Build a steadier home inspection booking and follow-up system',
      description:
        'If your inspection business is dealing with unclear booking requests, preparation friction, or inconsistent follow-up — we can map a practical system around how the workflow actually runs.',
      secondaryAction: {
        label: 'See Real Estate & Property Services',
        href: '/industries/real-estate-property-services',
      },
    },
  };
}

export const homeInspectorsIndustryPageData: IndustryPageData =
  buildHomeInspectorsIndustryPageData();
