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

function buildAestheticCosmeticClinicsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'Expansion Lane',
    title: 'Smart Website Systems for Aesthetic & Cosmetic Clinics',
    description:
      'The website should support consultation qualification, treatment trust, booking coordination, and measured follow-up — without making the patient journey feel mechanical.',
    list: [
      'Qualified consultation paths',
      'Treatment trust built in',
      'Structured booking and reminders',
      'Consistent aftercare follow-up',
    ],
    cssPrefix: 'aesthetic-clinics-hero',
  };

  const imageStripData = {
    badge: 'Service Environment',
    title: 'Aesthetic demand depends on trust, suitability, and clear next steps before booking',
    description:
      'Consultation requests, treatment questions, timing, pre-care, aftercare, and review follow-up all shape the decision. When those steps stay loose, the clinic absorbs more uncertainty than it should.',
    items: [
      {
        title: 'Consultation and suitability',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing aesthetic clinic consultation flow',
      },
      {
        title: 'Treatment booking and reminders',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing aesthetic clinic booking reminders',
      },
      {
        title: 'Pre-care and aftercare guidance',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing aesthetic clinic pre-care and aftercare guidance',
      },
      {
        title: 'Reviews and local trust',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing aesthetic clinic reviews and trust signals',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'aesthetic-clinics-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Operating Patterns',
    title: 'Where clinics lose clarity and booking momentum',
    description:
      'The gap is between consultation intent, treatment understanding, booking coordination, and the proof patients need before they move forward.',
    benefits: [
      {
        icon: Sparkles,
        title: 'Unqualified consultation enquiries',
        description:
          'Enquiries arrive with different treatment goals, price sensitivity, and readiness — but the first step does not sort those paths well.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Friction in the booking path',
        description:
          'Consultations, treatments, timing, and preparation details compete for attention instead of flowing through one coordinated path.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Follow-up that runs on memory',
        description:
          'Consultation reminders, pre-care, post-treatment guidance, and review follow-up happen only when someone remembers.',
        iconType: 'accent' as const,
      },
      {
        icon: MapPinned,
        title: 'Trust signals that sit apart',
        description:
          'Reviews, treatment pages, location visibility, and clinic credibility all exist — but they do not reinforce one another.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'System Layers',
    title: 'The working layers behind a steadier clinic workflow',
    description:
      'The clinic system supports consultation demand, treatment booking, patient communication, and trust-building follow-up without turning the process into admin drag.',
    featureCategories: [
      {
        title: 'Consultation and qualification layer',
        description:
          'Routes different treatment enquiries into qualified paths so the right patients reach the right consultation.',
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
          'Delivers pre-care and post-treatment guidance consistently so the patient journey stays calm.',
        icon: Bell,
        features: ['Pre-care guidance', 'Aftercare follow-up', 'Better patient communication'],
      },
      {
        title: 'Trust and proof layer',
        description:
          'Connects reviews, credibility signals, and treatment-page structure to support confident decisions.',
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
          'Ties treatment pages, maps visibility, and local search together to reinforce discovery.',
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
    title: 'From reactive consultation handling to a calmer clinic flow',
    description:
      'The experience retains its care and clinical judgement. The repeatable friction around enquiry handling, booking, and follow-up gets removed.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'Before the workflow is structured',
        items: [
          'Treatment enquiries arrive without enough context to route confidently',
          'Consultation timing and preparation details are repeated manually',
          'Follow-up depends on who remembers to send it',
          'Trust relies on manual reassurance at every touchpoint',
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
    title: 'From first enquiry to treatment follow-up',
    description:
      'Each stage moves clinic demand through a specific part of the journey — from consultation intent to treatment to aftercare.',
    packages: [
      {
        name: 'Consultation intent and routing',
        description:
          'Routes different treatment enquiries into qualified consultation paths with clearer first-response context.',
        price: 'Flow stage 1',
        priceDetail: 'Best when first-contact clarity and consultation routing are the main issue',
        features: [
          'Treatment-specific enquiry paths',
          'Consultation qualification',
          'Better first-response clarity',
        ],
      },
      {
        name: 'Booking and patient preparation',
        description:
          'Adds structured reminders and preparation guidance so consultations and treatments run with fewer surprises.',
        price: 'Flow stage 2',
        priceDetail: 'Best when booking friction and preparation gaps are the pressure points',
        features: ['Consultation scheduling support', 'Reminder structure', 'Preparation guidance'],
        popular: true,
      },
      {
        name: 'Aftercare and trust reinforcement',
        description:
          'Introduces aftercare messaging, review prompts, and longer-term trust-building so follow-up stays consistent.',
        price: 'Flow stage 3',
        priceDetail: 'Best when follow-up consistency and proof-building need improvement',
        features: ['Aftercare follow-up', 'Review request support', 'Trust reinforcement'],
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Follow-Up Examples',
    title: 'What the clinic lead, booking, and follow-up flow looks like in practice',
    description:
      'Repeatable situations where the system reduces friction while keeping the patient experience considered.',
    workflows: [
      {
        trigger:
          'A new enquiry arrives and the clinic needs to qualify treatment interest before consultation.',
        actions: [
          'Capture treatment interest and early suitability context',
          'Route the enquiry into the right consultation path',
          'Reduce wasted time on unclear first contact',
        ],
      },
      {
        trigger:
          'A consultation or treatment is booked and the patient needs preparation and timing details.',
        actions: [
          'Send reminders and preparation guidance automatically',
          'Confirm expectations and next steps clearly',
          'Reduce avoidable confusion before the appointment',
        ],
      },
      {
        trigger: 'The treatment is complete and the clinic needs a review and aftercare follow-up.',
        actions: [
          'Send a well-timed review request',
          'Share aftercare or next-step guidance',
          'Keep longer-term trust-building moving more reliably',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'aesthetic-clinics-workflow-examples',
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
      'Relevant service layers for clinics that want stronger consultation flow, calmer booking, and better proof support.',
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
        description: 'Strengthen treatment visibility, local trust, and clinic discovery.',
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
    columns: 2 as const,
  };

  const faqData = {
    title: 'Common questions about clinic systems',
    description: 'Common questions about MindWP for aesthetic and cosmetic clinics',
    faqs: [
      {
        question: 'How can an aesthetic clinic improve consultation bookings from its website?',
        answer:
          'Make treatment pages specific enough that patients can tell which consultation to request. When the site explains treatments clearly and reduces uncertainty, more enquiries convert.',
      },
      {
        question: 'Should clinics show treatment pricing online?',
        answer:
          'Yes — or at least clear price guidance where appropriate. Pricing clarity filters the wrong enquiries and reduces repeated back-and-forth.',
      },
      {
        question: 'How can clinics reduce no-shows or late cancellations?',
        answer:
          'Well-timed reminders and clear booking expectations help the most. The system protects the diary without turning the experience into pressure.',
      },
      {
        question: 'Do aesthetic clinics need separate pages for different treatments?',
        answer:
          'Yes. Separate pages help patients and search engines understand your treatments. They also route people into the right consultation path instead of funnelling everything through one generic page.',
      },
      {
        question: 'What kind of reviews matter most for clinics?',
        answer:
          'Reviews that mention care, communication, and professionalism carry the most weight. A steady post-treatment review process builds that proof over time.',
      },
      {
        question: 'How should clinics handle aftercare communication?',
        answer:
          'Clear, timely follow-up that reinforces the right next step without overwhelming the patient. The aim is reassurance, not over-automation.',
      },
    ],
  };

  return {
    slug: 'aesthetic-cosmetic-clinics',
    industries: ['aesthetic-clinic'],
    systems: [
      'smart-website-systems',
      'crm-automation',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['booking-systems', 'lead-qualification', 'review-generation'],
    type: 'detail',
    parentSlug: 'beauty-personal-care',
    seo: {
      title: 'Aesthetic & Cosmetic Clinics — Smart Website Systems | MindWP',
      description:
        'Smart Website systems for aesthetic and cosmetic clinics that need clearer consultation flow, booking support, and stronger trust-building follow-up.',
      keywords: [
        'aesthetic clinic website design',
        'cosmetic clinic lead generation website',
        'aesthetic clinic marketing system',
        'cosmetic clinic booking automation system',
        'aesthetic clinic reputation management system',
      ],
      canonical: '/industries/beauty-personal-care/aesthetic-cosmetic-clinics',
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
      title: 'Build a steadier clinic system',
      description:
        'If unclear consultation routing, booking friction, inconsistent aftercare, or weak trust signals are slowing things down, we can map a practical system around the real patient journey.',
    },
  };
}

export const aestheticCosmeticClinicsIndustryPageData: IndustryPageData =
  buildAestheticCosmeticClinicsIndustryPageData();
