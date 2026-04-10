import {
  Calendar,
  Clock3,
  MessageSquare,
  PenTool,
  Search,
  ShieldCheck,
  Star,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildTattooStudiosIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'Coverage Lane',
    title: 'Smart Website Systems for Tattoo Studios',
    description:
      'A tattoo studio website should support consultation enquiries, artist-fit clarity, booking readiness, and follow-up — without making every new request depend on manual messaging.',
    list: [
      'Clearer consultation qualification',
      'Better booking readiness flow',
      'Stronger trust signals',
      'More reliable follow-up',
    ],
    cssPrefix: 'tattoo-studios-hero',
  };

  const imageStripData = {
    badge: 'Service Environment',
    title:
      'Trust, fit, and preparation clarity shape the booking path before the session is confirmed',
    description:
      'Style enquiries, placement questions, artist-fit concerns, consultation timing, and follow-up all affect whether someone progresses. When those steps feel disconnected, the booking path loses trust.',
    items: [
      {
        title: 'Style and fit enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing tattoo consultation enquiries',
      },
      {
        title: 'Consultation and booking timing',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing tattoo booking timing',
      },
      {
        title: 'Preparation and next-step guidance',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing tattoo preparation guidance',
      },
      {
        title: 'Reviews and credibility proof',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing tattoo reviews and credibility',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'tattoo-studios-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Operating Patterns',
    title: 'Where tattoo studios lose clarity, time, or momentum',
    description:
      'The gap is rarely visibility alone — it sits between first enquiry, consultation fit, booking timing, and the trust someone needs before committing to the appointment.',
    benefits: [
      {
        icon: PenTool,
        title: 'Different tattoo requests arrive without enough context to route well',
        description:
          'Style, size, placement, and artist-fit questions arrive through one loose path — first-response quality drops when everything routes the same way.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Consultation and session booking create friction when readiness is unclear',
        description:
          'Availability, preparation, deposits, and next steps sit in different places — the booking flow slows before it should.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Pending enquiries depend too much on manual follow-up',
        description:
          'Some prospects need time, but follow-up becomes inconsistent when artists and staff are already managing the week.',
        iconType: 'accent' as const,
      },
      {
        icon: Star,
        title: 'Trust signals stay fragmented across the booking decision path',
        description:
          'Portfolio proof, reviews, and studio credibility exist in different places — they rarely work together to support a confident first booking.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'System Layers',
    title: 'The working layers behind a steadier tattoo booking pipeline',
    description:
      'A tattoo workflow needs structure before consultations, during booking readiness, and after first contact — especially when the decision takes time.',
    featureCategories: [
      {
        title: 'Consultation qualification layer',
        description:
          'Routes new enquiries through a clearer first-contact path so the right style and fit details reach the right artist.',
        icon: MessageSquare,
        features: ['Intent capture', 'Artist-fit qualification', 'Cleaner first response'],
      },
      {
        title: 'Booking layer',
        description:
          'Moves consultations and sessions into a booked next step without unnecessary delay.',
        icon: Calendar,
        features: ['Session scheduling', 'Reminder touchpoints', 'Next-step guidance'],
      },
      {
        title: 'Preparation layer',
        description:
          'Gives clients a clearer view of what to prepare or expect before the appointment.',
        icon: Workflow,
        features: ['Preparation guidance', 'Expectation setting', 'Booking readiness'],
      },
      {
        title: 'Trust and proof layer',
        description:
          'Connects reviews, portfolio proof, and studio credibility so they support the booking decision before the appointment.',
        icon: ShieldCheck,
        features: ['Review requests', 'Proof-of-service support', 'Trust-led page structure'],
      },
      {
        title: 'Local visibility layer',
        description:
          'Reinforces the studio locations and appointment types you want through area pages and search visibility.',
        icon: Search,
        features: ['Area-page targeting', 'Local search clarity', 'Local authority support'],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'Operational Shift',
    title: 'From reactive tattoo enquiries to a steadier consultation and booking flow',
    description:
      'The artistry stays. The repeatable friction around enquiry routing, consultation coordination, and follow-up gets reduced.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'Before the workflow is structured',
        items: [
          'Enquiries arrive without enough detail to route them quickly',
          'Consultation and session booking depend on manual back-and-forth',
          'Pending opportunities are hard to follow consistently',
          'Trust depends too heavily on one-off reassurance during early messages',
        ],
      },
      {
        type: 'after' as const,
        title: 'After the workflow is aligned',
        items: [
          'New enquiries move into the right consultation or nurture path faster',
          'Booking and reminder flow protect the next step more consistently',
          'Follow-up happens with less manual chasing',
          'Reviews, portfolio proof, and page structure support better booking confidence',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Lead To Booking Flow',
    title: 'How the tattoo workflow moves from first enquiry to booking and follow-up',
    description:
      'How the system moves tattoo enquiries from first contact into the right consultation or session path — then into consistent follow-up when the decision takes time.',
    packages: [
      {
        name: 'Consultation and fit capture',
        description:
          'Routes style, placement, and artist-fit enquiries into a clearer first step — so the right details reach the right artist faster.',
        price: 'Flow stage 1',
        priceDetail: 'Best when lead quality and first-contact clarity are the main issue',
        features: [
          'Intent-specific service pages',
          'Better enquiry capture',
          'Style and timing context',
        ],
      },
      {
        name: 'Booking and readiness flow',
        description:
          'Adds steadier scheduling, clearer reminders, and better control over the next step after first contact.',
        price: 'Flow stage 2',
        priceDetail: 'Best when booking and preparation handling create friction',
        features: ['Session scheduling support', 'Reminder structure', 'Preparation guidance'],
        popular: true,
      },
      {
        name: 'Follow-up and trust reinforcement',
        description:
          'Keeps pending opportunities, reviews, and credibility proof moving in a more reliable way.',
        price: 'Flow stage 3',
        priceDetail: 'Best when follow-up consistency and trust-building are the pressure points',
        features: ['Nurture workflows', 'Review request support', 'Trust reinforcement'],
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Follow-Up Examples',
    title: 'What the tattoo enquiry, booking, and follow-up flow looks like in practice',
    description:
      'Repeatable situations where a structured tattoo setup reduces friction — without making the studio feel scripted.',
    workflows: [
      {
        trigger:
          'A new enquiry arrives and the studio needs to determine style, scale, placement, and artist fit before confirming anything.',
        actions: [
          'Capture the right intent and timing early',
          'Route the enquiry into the right consultation or nurture path',
          'Reduce wasted time on unclear first contact',
        ],
      },
      {
        trigger:
          'A consultation or session is requested and the studio needs to confirm timing, readiness, and preparation expectations.',
        actions: [
          'Move the lead into a booked appointment window',
          'Send reminders and preparation guidance',
          'Keep internal handoff cleaner between enquiry and booking handling',
        ],
      },
      {
        trigger:
          'The consultation is complete and the studio wants to keep the opportunity moving without manual chasing every time.',
        actions: [
          'Send measured follow-up at the right times',
          'Keep the lead stage visible internally',
          'Support the decision with reviews and studio proof if needed',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'tattoo-studios-workflow-examples',
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
      'Relevant service layers for tattoo studios that want cleaner consultations, steadier follow-up, and stronger local trust support.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description:
          'See the core system layer that holds tattoo enquiry, booking flow, and follow-up together.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'Booking & Scheduling System',
        description: 'Support consultations, reminders, and clearer next-step handling.',
        href: '/services/booking-scheduling-system',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen area visibility, local credibility, and artist-led discovery.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description: 'Turn completed sessions into stronger proof and review flow.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Common questions about tattoo studio systems',
    description: 'Common questions about MindWP for tattoo studios',
    faqs: [
      {
        question: 'How can a tattoo studio get more qualified enquiries from a website?',
        answer:
          'Clearer style, placement, and artist-fit paths — combined with better qualification prompts and guided next steps — reduce uncertainty early and directly improve enquiry quality.',
      },
      {
        question: 'Should tattoo studios offer online consultation requests?',
        answer:
          'Yes — a clean request path reduces back-and-forth and moves people into the right next step faster. The key is capturing context early: style, timing, and readiness.',
      },
      {
        question: 'How do tattoo studios reduce slow follow-up on colder leads?',
        answer:
          'A better enquiry system separates ready-now prospects from nurture-stage opportunities, then supports measured follow-up over time — less manual chasing, more consistency.',
      },
      {
        question: 'Do tattoo studios need separate pages for different styles or services?',
        answer:
          'Often, yes, as long as the pages reflect real service paths and useful information rather than thin copy. Good service-page structure helps local visibility and also helps prospects feel confident that the studio handles their request.',
      },
      {
        question: 'What kind of reviews matter most for tattoo studios?',
        answer:
          'The most useful reviews reinforce trust, cleanliness, communication, and the feeling that the studio handled the process clearly and professionally. A structured review request process after completed work can help build that proof more consistently over time.',
      },
      {
        question:
          'Can a Smart Website system help a tattoo studio without replacing booking software?',
        answer:
          'Yes. The system improves the public-facing side of the workflow by making enquiries, consultation booking, readiness guidance, and follow-up more consistent. It does not require replacing the booking tools you already use.',
      },
    ],
  };

  return {
    slug: 'tattoo-studios',
    industries: ['tattoo-studio'],
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
      title: 'Tattoo Studios — Smart Website Systems | MindWP',
      description:
        'Smart Website systems for tattoo studios that need clearer consultation flow, booking readiness, and stronger trust support.',
      keywords: [
        'tattoo studio website design',
        'tattoo consultation booking workflow',
        'tattoo lead handling system',
        'tattoo studio seo services',
        'tattoo review system',
      ],
      canonical: '/industries/local-appointment-businesses/tattoo-studios',
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
      title: 'Build a steadier tattoo consultation and booking system',
      description:
        'If your studio is dealing with unclear enquiry quality, loose booking flow, or inconsistent follow-up — we can map a practical system around how the pipeline actually runs.',
      secondaryAction: {
        label: 'See Local Appointment Businesses',
        href: '/industries/local-appointment-businesses',
      },
    },
  };
}

export const tattooStudiosIndustryPageData: IndustryPageData = buildTattooStudiosIndustryPageData();
