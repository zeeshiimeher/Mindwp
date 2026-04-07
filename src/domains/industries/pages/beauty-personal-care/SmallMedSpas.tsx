import {
  Bell,
  Calendar,
  Clock3,
  MapPinned,
  MessageSquare,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildSmallMedSpasIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'Expansion Lane',
    title: 'Smart Website Systems for Small Med Spas',
    description:
      'A med spa website should support treatment trust, consultation flow, and booking coordination — without making the client experience feel clinical or over-automated.',
    list: [
      'Treatment trust from the first visit',
      'Coordinated consultation and booking',
      'Preparation and aftercare guidance',
      'Steady reputation growth',
    ],
    cssPrefix: 'small-med-spas-hero',
  };

  const imageStripData = {
    badge: 'Service Environment',
    title: 'Med spa demand depends on trust, treatment clarity, and steady follow-up',
    description:
      'Consultation requests, treatment questions, preparation details, appointment timing, aftercare, and review follow-up all shape whether someone chooses the business and comes back again.',
    items: [
      {
        title: 'Consultation and suitability',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing med spa consultation flow',
      },
      {
        title: 'Treatment booking and reminders',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing med spa booking reminders',
      },
      {
        title: 'Pre-care and aftercare guidance',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing med spa pre-care and aftercare guidance',
      },
      {
        title: 'Reviews and local trust',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing med spa reviews and trust signals',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'small-med-spas-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Operating Patterns',
    title: 'Where small med spas lose trust and booking momentum',
    description:
      'The gap is between consultation intent, treatment understanding, booking coordination, and the trust clients need before they feel comfortable.',
    benefits: [
      {
        icon: Sparkles,
        title: 'Mixed treatment intent at first contact',
        description:
          'Treatment interests, price sensitivity, and readiness levels enter through the same path — making it harder to guide each enquiry appropriately.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Friction between consultation and treatment booking',
        description:
          'Consultations, treatments, timing, and preparation details compete for attention instead of flowing through one coordinated booking path.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Inconsistent aftercare and follow-up',
        description:
          'Consultation reminders, pre-care, post-treatment guidance, and review requests depend on whoever has a moment between clients.',
        iconType: 'accent' as const,
      },
      {
        icon: MapPinned,
        title: 'Trust signals that work separately',
        description:
          'Treatment pages, reviews, local visibility, and brand credibility all exist — but they do not reinforce one another as a decision-support layer.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'System Layers',
    title: 'The working layers behind a steadier med spa workflow',
    description:
      'The system supports consultation demand, treatment booking, client communication, and trust-building follow-up without creating admin drag.',
    featureCategories: [
      {
        title: 'Consultation and qualification layer',
        description:
          'Routes different treatment enquiries into appropriate paths so the right clients reach the right consultation.',
        icon: MessageSquare,
        features: ['Treatment-intent capture', 'Consultation routing', 'Cleaner first response'],
      },
      {
        title: 'Booking and reminder layer',
        description:
          'Structures consultations and treatments around timing, reminders, and confirmed next steps.',
        icon: Calendar,
        features: ['Consultation booking', 'Reminder timing', 'Treatment-path clarity'],
      },
      {
        title: 'Preparation and aftercare layer',
        description:
          'Delivers pre-care and post-treatment guidance consistently so clients know what to expect.',
        icon: Bell,
        features: ['Pre-care guidance', 'Aftercare follow-up', 'Better client communication'],
      },
      {
        title: 'Trust and proof layer',
        description:
          'Connects reviews, credibility signals, and treatment-page structure to support confident decisions before consultation.',
        icon: ShieldCheck,
        features: [
          'Review request workflows',
          'Proof and credibility support',
          'Trust-led treatment pages',
        ],
      },
      {
        title: 'Local visibility layer',
        description:
          'Ties treatment pages, maps visibility, and local search together so discovery supports the right services.',
        icon: Search,
        features: [
          'Treatment-page alignment',
          'Google Business Profile support',
          'Local search reinforcement',
        ],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'Operational Shift',
    title: 'From reactive treatment coordination to a calmer consultation and follow-up flow',
    description:
      'The care and personal attention stay. The repeatable friction around enquiry handling, booking, and follow-up gets reduced.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'Before the workflow is structured',
        items: [
          'Treatment enquiries arrive without enough context to route confidently',
          'Preparation details are repeated manually for each consultation',
          'Follow-up depends on who has time to send it',
          'Trust relies on manual reassurance at each step',
        ],
      },
      {
        type: 'after' as const,
        title: 'After the workflow is aligned',
        items: [
          'New enquiries move into the right consultation path faster',
          'Booking and reminder flow protect the next step more consistently',
          'Preparation and aftercare guidance happen more calmly',
          'Reviews and local proof reinforce stronger treatment confidence',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Lead To Booking Flow',
    title: 'From first enquiry to treatment and ongoing care',
    description:
      'Each stage moves demand through a specific part of the journey — from consultation intent to treatment booking to aftercare.',
    packages: [
      {
        name: 'Consultation intent and routing',
        description:
          'Routes different treatment enquiries into qualified consultation paths with enough context to guide the next step.',
        price: 'Flow stage 1',
        priceDetail: 'Best when first-contact clarity and consultation routing are the main issue',
        features: [
          'Treatment-specific enquiry paths',
          'Consultation qualification',
          'Better first-response clarity',
        ],
        buttonText: 'Talk Through Scope',
        buttonHref: '/contact',
      },
      {
        name: 'Booking and treatment preparation',
        description:
          'Adds structured reminders and preparation guidance so consultations and treatments run predictably.',
        price: 'Flow stage 2',
        priceDetail: 'Best when booking friction and preparation gaps are the main pressure points',
        features: ['Consultation scheduling support', 'Reminder structure', 'Preparation guidance'],
        popular: true,
        buttonText: 'See the Setup',
        buttonHref: '/contact',
      },
      {
        name: 'Aftercare and trust reinforcement',
        description:
          'Introduces aftercare messaging, review prompts, and trust-building so the client relationship continues beyond treatment.',
        price: 'Flow stage 3',
        priceDetail: 'Best when follow-up consistency and proof-building need improvement',
        features: ['Aftercare follow-up', 'Review request support', 'Trust reinforcement'],
        buttonText: 'Request Details',
        buttonHref: '/contact',
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Follow-Up Examples',
    title: 'What the med spa lead, booking, and follow-up flow looks like in practice',
    description:
      'Repeatable situations where the system reduces friction while keeping the client experience warm.',
    workflows: [
      {
        trigger:
          'A new enquiry arrives and the team needs to qualify treatment interest before consultation.',
        actions: [
          'Capture treatment interest and early suitability context',
          'Route the enquiry into the right consultation path',
          'Reduce wasted time on unclear first contact',
        ],
      },
      {
        trigger:
          'A consultation or treatment is booked and the client needs preparation and timing details.',
        actions: [
          'Send reminders and preparation guidance at the right times',
          'Confirm expectations and next steps clearly',
          'Reduce avoidable confusion before the appointment',
        ],
      },
      {
        trigger:
          'The treatment is complete and the business needs a review and aftercare follow-up.',
        actions: [
          'Send a well-timed review request',
          'Share aftercare or next-step guidance',
          'Keep longer-term trust-building moving more reliably',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'small-med-spas-workflow-examples',
  };

  const caseStudiesData = {
    category: 'beauty-personal-care' as const,
    title: 'Related Case Studies',
    description:
      'Examples of how the system supports clinics and beauty-led businesses in this category.',
    limit: 2,
  };

  const exploreData = {
    badge: 'Explore',
    description:
      'Relevant service layers for med spas that want stronger consultation flow, calmer booking, and better proof support.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description:
          'See the core system layer that holds consultation, booking, and follow-up together.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'Booking & Scheduling System',
        description: 'Support consultation booking, reminder flow, and clearer next steps.',
        href: '/services/booking-scheduling-system',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen treatment visibility, local trust, and med spa discovery.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description: 'Turn good treatment experiences into stronger trust and review flow.',
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
    title: 'Common questions about med spa systems',
    description: 'Common questions about MindWP for small med spas',
    faqs: [
      {
        question: 'How can a small med spa improve consultation bookings from its website?',
        answer:
          'Make treatment pages specific enough that clients can tell which consultation to request. When the site explains treatments clearly and reduces uncertainty, enquiries convert more easily.',
      },
      {
        question: 'Should a med spa show pricing online?',
        answer:
          'Yes — or at least clear price guidance where appropriate. Pricing clarity reduces repeated back-and-forth and filters the wrong enquiries earlier.',
      },
      {
        question: 'How can a med spa reduce no-shows or late cancellations?',
        answer:
          'Well-timed reminders and clear booking expectations help the most. The system protects the diary without turning the experience into pressure.',
      },
      {
        question: 'Do small med spas need separate pages for different treatments?',
        answer:
          'Yes. Separate pages help clients and search engines understand your treatments. They also route people into the right consultation instead of funnelling everything through one generic page.',
      },
      {
        question: 'What kind of reviews matter most for a med spa?',
        answer:
          'Reviews that mention care, communication, and professionalism carry the most weight. A steady post-treatment review process builds that proof over time.',
      },
      {
        question: 'How should a med spa handle aftercare communication?',
        answer:
          'Clear, timely follow-up that reinforces the right next step without overwhelming the client. The aim is reassurance and clarity, not over-automation.',
      },
    ],
  };

  return {
    slug: 'small-med-spas',
    industries: ['med-spa'],
    systems: [
      'smart-website-systems',
      'crm-automation',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['booking-systems', 'client-reactivation', 'review-generation'],
    type: 'detail',
    parentSlug: 'beauty-personal-care',
    seo: {
      title: 'Small Med Spas — Smart Website Systems | MindWP',
      description:
        'Smart Website systems for small med spas that need clearer consultation flow, booking support, and stronger trust-building follow-up.',
      keywords: [
        'med spa website design',
        'med spa consultation booking system',
        'small med spa marketing system',
        'med spa seo services',
        'med spa reputation management system',
      ],
      canonical: '/industries/beauty-personal-care/small-med-spas',
    },
    hero: {
      ...heroData,
      primaryAction: { label: 'Book More Med Spa Visits', href: '/contact' },
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
      title: 'Build a steadier med spa system',
      description:
        'If unclear consultation routing, booking friction, inconsistent aftercare, or weak trust signals are slowing things down, we can map a practical system around the real client journey.',
      primaryAction: { variant: 'white', label: 'Book More Med Spa Visits', href: '/contact' },
      secondaryAction: {
        label: 'See the Category Approach',
        href: '/industries/beauty-personal-care',
      },
    },
  };
}

export const smallMedSpasIndustryPageData: IndustryPageData = buildSmallMedSpasIndustryPageData();
