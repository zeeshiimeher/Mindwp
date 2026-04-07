import {
  Calendar,
  Clock3,
  HeartPulse,
  MessageSquare,
  Search,
  ShieldCheck,
  Star,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildSmallPrivateClinicsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'Coverage Lane',
    title: 'Smart Website Systems for Small Private Clinics',
    description:
      'A private clinic website should support appointment qualification, booking flow, preparation guidance, and follow-up — without making every patient enquiry depend on manual back-and-forth.',
    list: [
      'Clearer appointment qualification',
      'Better booking flow',
      'Stronger trust signals',
      'More reliable follow-up',
    ],
    cssPrefix: 'small-private-clinics-hero',
  };

  const imageStripData = {
    badge: 'Service Environment',
    title:
      'Trust, timing, and preparation clarity shape the booking path before the appointment happens',
    description:
      'Patient enquiries, treatment-fit questions, timing details, preparation steps, and follow-up all shape whether the next step happens smoothly. When those steps feel disconnected, the booking path loses trust.',
    items: [
      {
        title: 'Appointment and treatment-fit enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing private clinic enquiries',
      },
      {
        title: 'Booking and timing coordination',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing clinic appointment booking',
      },
      {
        title: 'Preparation and next-step guidance',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing clinic preparation guidance',
      },
      {
        title: 'Reviews and trust proof',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing private clinic reviews and trust proof',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'small-private-clinics-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Operating Patterns',
    title: 'Where private clinics lose clarity, time, or momentum',
    description:
      'The gap is rarely visibility alone — it sits between first enquiry, appointment qualification, booking timing, and the trust someone needs before sharing sensitive information or committing to a visit.',
    benefits: [
      {
        icon: HeartPulse,
        title: 'Appointment requests arrive without enough context to route them well',
        description:
          'Different treatment needs, timing questions, and practitioner-fit concerns arrive through one loose path — first-response quality drops when everything routes the same way.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Booking creates friction when readiness is unclear',
        description:
          'Availability, preparation steps, and next-step expectations sit in different places — the booking flow slows before it should.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Pending enquiries depend too much on manual follow-up',
        description:
          'Some prospects need time, but follow-up becomes inconsistent when practitioners and staff are already managing live appointments.',
        iconType: 'accent' as const,
      },
      {
        icon: Star,
        title: 'Trust signals stay fragmented across the booking decision path',
        description:
          'Reviews, practitioner credibility, and clinic clarity exist in different places — they rarely work together to support a confident first appointment.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'System Layers',
    title: 'The working layers behind a steadier clinic booking pipeline',
    description:
      'A private clinic workflow needs structure before bookings, during appointment qualification, and after first contact — especially when the decision takes time.',
    featureCategories: [
      {
        title: 'Appointment qualification layer',
        description:
          'Routes new enquiries through a clearer first-contact path so the right treatment and fit details reach the right next step.',
        icon: MessageSquare,
        features: ['Intent capture', 'Appointment qualification', 'Cleaner first response'],
      },
      {
        title: 'Booking layer',
        description:
          'Moves consultations and appointments into a booked next step without unnecessary delay.',
        icon: Calendar,
        features: ['Appointment scheduling', 'Reminder touchpoints', 'Next-step guidance'],
      },
      {
        title: 'Preparation layer',
        description:
          'Gives patients a clearer view of what to prepare or expect before the appointment.',
        icon: Workflow,
        features: ['Preparation guidance', 'Expectation setting', 'Booking visibility'],
      },
      {
        title: 'Trust and proof layer',
        description:
          'Connects reviews, practitioner proof, and clinic clarity so they support the booking decision before the appointment.',
        icon: ShieldCheck,
        features: ['Review requests', 'Proof-of-service support', 'Trust-led page structure'],
      },
      {
        title: 'Local visibility layer',
        description:
          'Reinforces the locations and appointment types the clinic wants through area pages and search visibility.',
        icon: Search,
        features: ['Area-page targeting', 'Local search clarity', 'Local authority support'],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'Operational Shift',
    title: 'From reactive clinic enquiries to a steadier booking and follow-up flow',
    description:
      'The care stays personal. The repeatable friction around enquiry routing, booking coordination, and follow-up gets reduced.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'Before the workflow is structured',
        items: [
          'Enquiries arrive without enough detail to route them quickly',
          'Booking depends on manual back-and-forth',
          'Pending opportunities are hard to follow consistently',
          'Trust depends too heavily on one-off reassurance during early contact',
        ],
      },
      {
        type: 'after' as const,
        title: 'After the workflow is aligned',
        items: [
          'New enquiries move into the right booking or nurture path faster',
          'Scheduling and reminder flow protect the next step more consistently',
          'Follow-up happens with less manual chasing',
          'Reviews, practitioner proof, and page structure support better booking confidence',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Lead To Booking Flow',
    title: 'How the clinic workflow moves from first enquiry to booking and follow-up',
    description:
      'How the system moves clinic enquiries from first contact into the right appointment path — then into consistent follow-up when the decision takes time.',
    packages: [
      {
        name: 'Qualification and fit capture',
        description:
          'Routes appointment and treatment-fit enquiries into a clearer first step — so the right details reach the right practitioner faster.',
        price: 'Flow stage 1',
        priceDetail: 'Best when lead quality and first-contact clarity are the main issue',
        features: [
          'Intent-specific service pages',
          'Better enquiry capture',
          'Treatment and timing context',
        ],
        buttonText: 'Talk Through Scope',
        buttonHref: '/contact',
      },
      {
        name: 'Booking and readiness flow',
        description:
          'Adds steadier scheduling, clearer reminders, and better control over the next step after first contact.',
        price: 'Flow stage 2',
        priceDetail: 'Best when booking and preparation handling create friction',
        features: ['Appointment scheduling support', 'Reminder structure', 'Preparation guidance'],
        popular: true,
        buttonText: 'See the Setup',
        buttonHref: '/contact',
      },
      {
        name: 'Follow-up and trust reinforcement',
        description:
          'Keeps pending opportunities, reviews, and credibility proof moving in a more reliable way.',
        price: 'Flow stage 3',
        priceDetail: 'Best when follow-up consistency and trust-building are the pressure points',
        features: ['Nurture workflows', 'Review request support', 'Trust reinforcement'],
        buttonText: 'Request Details',
        buttonHref: '/contact',
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Follow-Up Examples',
    title: 'What the clinic enquiry, booking, and follow-up flow looks like in practice',
    description:
      'Repeatable situations where a structured clinic setup reduces friction — without making the practice feel scripted.',
    workflows: [
      {
        trigger:
          'A new enquiry arrives and the clinic needs to determine appointment fit, timing, and practitioner alignment before confirming anything.',
        actions: [
          'Capture the right intent and timing early',
          'Route the enquiry into the right booking or nurture path',
          'Reduce wasted time on unclear first contact',
        ],
      },
      {
        trigger:
          'An appointment is requested and the clinic needs to confirm timing, preparation, and next-step readiness.',
        actions: [
          'Move the lead into a booked appointment window',
          'Send reminders and preparation guidance',
          'Keep internal handoff cleaner between enquiry and booking handling',
        ],
      },
      {
        trigger:
          'The first interaction is complete and the clinic wants to keep the opportunity moving without manual chasing every time.',
        actions: [
          'Send measured follow-up at the right times',
          'Keep the lead stage visible internally',
          'Support the decision with reviews and practitioner proof if needed',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'small-private-clinics-workflow-examples',
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
      'Relevant service layers for small private clinics that want cleaner bookings, steadier follow-up, and stronger local trust support.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description:
          'See the core system layer that holds clinic enquiry, booking flow, and follow-up together.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'Booking & Scheduling System',
        description: 'Support appointments, reminders, and clearer next-step handling.',
        href: '/services/booking-scheduling-system',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description:
          'Strengthen area visibility, local credibility, and appointment-led discovery.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description: 'Turn completed visits into stronger proof and review flow.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    ctaLabel: 'View Service',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Common questions about private clinic systems',
    description: 'Common questions about MindWP for small private clinics',
    faqs: [
      {
        question: 'How can a small private clinic get more qualified enquiries from a website?',
        answer:
          'Clearer appointment types, better qualification prompts, and guided next-step paths reduce uncertainty early — which directly improves enquiry quality.',
      },
      {
        question: 'Should small private clinics offer online appointment requests?',
        answer:
          'Yes — a clean request path reduces back-and-forth and moves people into the right next step faster. The key is capturing context early: appointment need, timing, and readiness.',
      },
      {
        question: 'How do small private clinics reduce slow follow-up on undecided enquiries?',
        answer:
          'A better enquiry system separates ready-now prospects from nurture-stage opportunities, then supports measured follow-up over time — less manual chasing, more consistency.',
      },
      {
        question: 'Do small private clinics need separate pages for different appointment types?',
        answer:
          'Often, yes, as long as the pages reflect real service paths and useful information rather than thin copy. Good service-page structure helps local visibility and also helps prospects feel confident that the clinic handles their situation.',
      },
      {
        question: 'What kind of reviews matter most for small private clinics?',
        answer:
          'The most useful reviews reinforce trust, clarity, and the feeling that the clinic handled the process professionally and sensitively. A structured review request process after completed visits can help build that proof more consistently over time.',
      },
      {
        question: 'Can a Smart Website system help a clinic without replacing practice software?',
        answer:
          'Yes. The system improves the public-facing side of the workflow by making enquiries, booking, readiness guidance, and follow-up more consistent. It does not require replacing the tools you already use.',
      },
    ],
  };

  return {
    slug: 'small-private-clinics',
    industries: ['private-clinic'],
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
      title: 'Small Private Clinics — Smart Website Systems | MindWP',
      description:
        'Smart Website systems for small private clinics that need clearer booking flow, appointment qualification, and stronger trust support.',
      keywords: [
        'private clinic website design',
        'clinic booking workflow',
        'private clinic lead handling system',
        'private clinic seo services',
        'clinic review system',
      ],
      canonical: '/industries/local-appointment-businesses/small-private-clinics',
    },
    hero: {
      ...heroData,
      primaryAction: { label: 'Book More Patient Visits', href: '/contact' },
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
      title: 'Build a steadier clinic booking and follow-up system',
      description:
        'If your clinic is dealing with unclear enquiry quality, loose booking flow, or inconsistent follow-up — we can map a practical system around how the pipeline actually runs.',
      primaryAction: { variant: 'white', label: 'Book More Patient Visits', href: '/contact' },
      secondaryAction: {
        label: 'See Local Appointment Businesses',
        href: '/industries/local-appointment-businesses',
      },
    },
  };
}

export const smallPrivateClinicsIndustryPageData: IndustryPageData =
  buildSmallPrivateClinicsIndustryPageData();
