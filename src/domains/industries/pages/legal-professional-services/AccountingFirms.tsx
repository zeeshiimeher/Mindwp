import {
  Calculator,
  Calendar,
  Clock3,
  FileText,
  MessageSquare,
  Search,
  ShieldCheck,
  Star,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildAccountingFirmsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'Coverage Lane',
    title: 'Smart Website Systems for Accounting Firms',
    description:
      'An accounting firm website should support service-fit qualification, consultation booking, information readiness, and follow-up — without making every new client conversation depend on manual chasing.',
    list: [
      'Clearer service-fit routing',
      'Better consultation flow',
      'Stronger trust signals',
      'More reliable follow-up',
    ],
    cssPrefix: 'accounting-firms-hero',
  };

  const imageStripData = {
    badge: 'Service Environment',
    title:
      'Accounting demand depends on clarity, readiness, and trust before the advisory relationship starts',
    description:
      'Bookkeeping enquiries, tax questions, advisory requests, consultation timing, information readiness, and follow-up all shape whether a prospect progresses. When those steps feel disconnected, the intake process becomes harder to manage and harder to trust.',
    items: [
      {
        title: 'Service-fit enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing accounting firm service-fit enquiries',
      },
      {
        title: 'Consultation booking and timing',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing accounting consultation booking',
      },
      {
        title: 'Information readiness and next steps',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing accounting information readiness',
      },
      {
        title: 'Reviews and credibility proof',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing accounting trust and reviews',
      },
    ],
    backgroundColor: 'bg-white',
    cssPrefix: 'accounting-firms-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Operating Patterns',
    title: 'Where accounting firms lose clarity, time, or client momentum',
    description:
      'The gap is rarely visibility alone — it sits between first enquiry, service-fit qualification, consultation timing, readiness for the next step, and the trust proof someone needs before they commit.',
    benefits: [
      {
        icon: Calculator,
        title: 'Prospects arrive without enough information to identify the right service path',
        description:
          'Bookkeeping, tax, advisory, and compliance needs arrive through one loose path — first-response quality drops when everything routes the same way.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Consultation booking creates friction when readiness is unclear',
        description:
          'Availability, business stage, existing records, and next steps sit in different places — the intake process slows before it should.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Nurture and pending-decision follow-up depend too much on manual effort',
        description:
          'Some enquiries are not ready immediately, but follow-up often becomes inconsistent when advisors are already handling active client work.',
        iconType: 'accent' as const,
      },
      {
        icon: FileText,
        title: 'Trust signals stay fragmented across the decision path',
        description:
          'Reviews, case-style proof, advisor credibility, and service clarity exist in different places — they rarely work together to support a confident first consultation.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'System Layers',
    title: 'The working layers behind a steadier accounting intake pipeline',
    description:
      'An accounting workflow needs structure before consultations, during service-fit qualification, and after first contact — especially when the client decision takes time.',
    featureCategories: [
      {
        title: 'Service-fit qualification layer',
        description:
          'Routes new enquiries through a clearer first-contact path so the right service type reaches the right next step.',
        icon: MessageSquare,
        features: ['Intent capture', 'Service-fit qualification', 'Cleaner first response'],
      },
      {
        title: 'Consultation booking layer',
        description:
          'Moves discovery calls and consultations into a booked next step without unnecessary delay.',
        icon: Calendar,
        features: ['Consultation scheduling', 'Reminder touchpoints', 'Next-step guidance'],
      },
      {
        title: 'Information-readiness layer',
        description:
          'Gives prospects a clearer view of what records or context to prepare before the first conversation.',
        icon: FileText,
        features: ['Readiness guidance', 'Information prompts', 'Expectation setting'],
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
          'Connects reviews, clarity, and advisor proof so they support the consultation decision before the appointment.',
        icon: ShieldCheck,
        features: ['Review requests', 'Proof-of-service support', 'Trust-led page structure'],
      },
      {
        title: 'Local visibility layer',
        description:
          'Reinforces the businesses and locations the firm wants through area pages and search visibility.',
        icon: Search,
        features: ['Area-page targeting', 'Local search clarity', 'Authority-page support'],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'Operational Shift',
    title: 'From reactive accounting enquiries to a steadier consultation and follow-up flow',
    description:
      'The advisory relationship stays personal. The repeatable friction around qualification, consultation coordination, and follow-up gets reduced.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'Before the workflow is structured',
        items: [
          'Enquiries arrive without enough detail to route them quickly',
          'Consultation booking depends on manual back-and-forth',
          'Pending opportunities are hard to follow consistently',
          'Trust depends too heavily on one-off reassurance during early conversations',
        ],
      },
      {
        type: 'after' as const,
        title: 'After the workflow is aligned',
        items: [
          'New enquiries move into the right consultation or nurture path faster',
          'Booking and reminder flow protect the next step more consistently',
          'Follow-up happens with less manual chasing',
          'Reviews, authority signals, and page structure support better decision confidence',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Lead To Consultation Flow',
    title: 'How the accounting workflow moves from first enquiry to consultation and follow-up',
    description:
      'How the system moves accounting enquiries from first contact into the right consultation path — then into consistent follow-up when the decision takes time.',
    packages: [
      {
        name: 'Qualification and service-path capture',
        description:
          'Routes bookkeeping, tax, and advisory enquiries into a clearer first step — so the right details reach the right advisor faster.',
        price: 'Flow stage 1',
        priceDetail: 'Best when lead quality and first-contact clarity are the main issue',
        features: [
          'Intent-specific service pages',
          'Better enquiry capture',
          'Business and timing context',
        ],
        buttonText: 'Talk Through Scope',
        buttonHref: '/contact',
      },
      {
        name: 'Consultation and readiness flow',
        description:
          'Adds steadier scheduling, clearer reminders, and better control over the next step after first contact.',
        price: 'Flow stage 2',
        priceDetail: 'Best when booking and information-readiness handling create friction',
        features: ['Consultation scheduling support', 'Reminder structure', 'Readiness guidance'],
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
    title: 'What the accounting lead, consultation, and follow-up flow looks like in practice',
    description:
      'Repeatable situations where a structured accounting setup reduces friction — without making the firm feel scripted.',
    workflows: [
      {
        trigger:
          'A new enquiry arrives and the firm needs to determine whether the prospect needs bookkeeping, tax support, advisory help, or a broader consultation before booking the next step.',
        actions: [
          'Capture the right intent and timing early',
          'Route the enquiry into the right consultation or nurture path',
          'Reduce wasted time on unclear first contact',
        ],
      },
      {
        trigger:
          'A consultation is requested and the business needs to confirm timing, readiness, and information expectations clearly.',
        actions: [
          'Move the lead into a booked consultation window',
          'Send reminders and preparation guidance',
          'Keep internal handoff cleaner between enquiry and consultation handling',
        ],
      },
      {
        trigger:
          'The consultation is complete and the firm wants to keep the opportunity moving without manual chasing every time.',
        actions: [
          'Send measured follow-up at the right times',
          'Keep the lead stage visible internally',
          'Support the decision with reviews and authority proof if needed',
        ],
      },
    ],
    backgroundColor: 'bg-white',
    cssPrefix: 'accounting-firms-workflow-examples',
  };

  const caseStudiesData = {
    category: 'legal-professional-services' as const,
    title: 'Related Case Studies',
    description:
      'Examples of how the system supports professional service businesses in this category.',
    limit: 2,
  };

  const exploreData = {
    badge: 'Explore',
    description:
      'Relevant service layers for accounting firms that want cleaner consultations, steadier follow-up, and stronger local trust support.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description:
          'See the core system layer that holds accounting enquiry, consultation flow, and follow-up together.',
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
        description: 'Strengthen area visibility, local credibility, and authority-led discovery.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description: 'Turn completed advisory work into stronger proof and review flow.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-muted/30',
    ctaLabel: 'View Service',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Common questions about accounting firm systems',
    description: 'Common questions about MindWP for accounting firms',
    faqs: [
      {
        question: 'How can an accounting firm get more qualified enquiries from a website?',
        answer:
          'Clearer bookkeeping, tax, and advisory paths — combined with better qualification prompts and guided next steps — reduce uncertainty early and directly improve enquiry quality.',
      },
      {
        question: 'Should accounting firms offer online consultation requests?',
        answer:
          'Yes — a clean request path reduces back-and-forth and moves people into the right next step faster. The key is capturing context early: business stage, service need, and readiness.',
      },
      {
        question: 'How do accounting firms reduce slow follow-up on colder opportunities?',
        answer:
          'A better enquiry system separates ready-now prospects from nurture-stage opportunities, then supports measured follow-up over time — less manual chasing, more consistency.',
      },
      {
        question: 'Do accounting firms need separate pages for different service lines?',
        answer:
          'Often, yes, as long as the pages reflect real service paths and useful information rather than thin copy. Good service-page structure helps local visibility and also helps prospects feel confident that the firm handles their situation.',
      },
      {
        question: 'What kind of reviews matter most for accounting firms?',
        answer:
          'The most useful reviews reinforce trust, clarity, and the feeling that the firm made financial complexity easier to understand. A structured review request process after completed work can help build that proof more consistently over time.',
      },
      {
        question:
          'Can a Smart Website system help an accounting firm without replacing its practice software?',
        answer:
          'Yes. The system improves the public-facing side of the workflow by making enquiries, consultation booking, readiness guidance, and follow-up more consistent. It does not require replacing the internal tools you already use.',
      },
    ],
  };

  return {
    slug: 'accounting-firms',
    industries: ['accounting'],
    systems: [
      'smart-website-systems',
      'crm-automation',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['lead-qualification', 'crm-integration', 'reputation-monitoring'],
    type: 'detail',
    parentSlug: 'legal-professional-services',
    seo: {
      title: 'Accounting Firms — Smart Website Systems | MindWP',
      description:
        'Smart Website systems for accounting firms that need clearer qualification, consultation flow, and stronger trust support.',
      keywords: [
        'accounting firm website design',
        'accounting lead handling system',
        'accounting consultation booking workflow',
        'accounting firm seo services',
        'accounting review system',
      ],
      canonical: '/industries/legal-professional-services/accounting-firms',
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
      title: 'Build a steadier accounting intake and follow-up system',
      description:
        'If your firm is dealing with unclear enquiry quality, loose consultation flow, or inconsistent follow-up — we can map a practical system around how the pipeline actually runs.',
      primaryAction: { variant: 'white', label: 'Start a Conversation', href: '/contact' },
      secondaryAction: {
        label: 'See Legal & Professional Services',
        href: '/industries/legal-professional-services',
      },
    },
  };
}

export const accountingFirmsIndustryPageData: IndustryPageData =
  buildAccountingFirmsIndustryPageData();
