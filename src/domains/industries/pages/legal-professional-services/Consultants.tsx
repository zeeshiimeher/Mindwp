import {
  BriefcaseBusiness,
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

function buildConsultantsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'Coverage Lane',
    title: 'Smart Website Systems for Consultants',
    description:
      'A consulting website should support qualification, discovery-call booking, scope clarity, and follow-up — without making every opportunity depend on manual chasing.',
    list: [
      'Clearer qualification routing',
      'Better discovery-call flow',
      'Stronger trust signals',
      'More reliable follow-up',
    ],
    cssPrefix: 'consultants-hero',
  };

  const imageStripData = {
    badge: 'Service Environment',
    title:
      'Consulting demand depends on trust, fit, and scope clarity before the advisory relationship starts',
    description:
      'Discovery enquiries, service-fit questions, call timing, scope expectations, credibility signals, and follow-up all shape whether a prospect progresses. When those steps feel disconnected, the pipeline becomes harder to trust and harder to manage.',
    items: [
      {
        title: 'Qualification and fit enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing consulting qualification enquiries',
      },
      {
        title: 'Discovery-call booking',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing consultant discovery call booking',
      },
      {
        title: 'Scope clarity and next steps',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing consulting scope clarity and next steps',
      },
      {
        title: 'Proof and follow-up trust',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing consulting trust and follow-up',
      },
    ],
    backgroundColor: 'bg-white',
    cssPrefix: 'consultants-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Operating Patterns',
    title: 'Where consultants lose clarity, time, or deal momentum',
    description:
      'The gap is rarely visibility alone — it sits between first enquiry, qualification, discovery timing, scope clarity, and the trust proof someone needs before they buy advisory work.',
    benefits: [
      {
        icon: BriefcaseBusiness,
        title: 'Prospects enquire before the consultant knows whether the fit is right',
        description:
          'Different project types, budgets, urgency levels, and decision stages arrive through one loose path — first-response quality drops when everything routes the same way.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Discovery-call booking creates friction when readiness is unclear',
        description:
          'Availability, scope expectations, and next steps sit in different places — the pipeline slows before it should.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Pending opportunities depend too much on manual follow-up',
        description:
          'Many prospects are not ready immediately, but the nurture path often becomes inconsistent when delivery work is already filling the week.',
        iconType: 'accent' as const,
      },
      {
        icon: FileText,
        title: 'Trust signals stay fragmented across the decision path',
        description:
          'Proof, case-style authority, service clarity, and advisor credibility exist in different places — they rarely work together to support a confident first call.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'System Layers',
    title: 'The working layers behind a steadier consulting pipeline',
    description:
      'A consulting workflow needs structure before discovery calls, during qualification, and after first contact — especially when the decision takes time.',
    featureCategories: [
      {
        title: 'Qualification layer',
        description:
          'Routes new enquiries through a clearer first-contact path so the right project type reaches the right next step.',
        icon: MessageSquare,
        features: ['Intent capture', 'Fit qualification', 'Cleaner first response'],
      },
      {
        title: 'Discovery-call booking layer',
        description:
          'Moves initial calls and advisory sessions into a booked next step without unnecessary delay.',
        icon: Calendar,
        features: ['Discovery scheduling', 'Reminder touchpoints', 'Next-step guidance'],
      },
      {
        title: 'Scope-clarity layer',
        description:
          'Gives prospects a clearer view of what the engagement covers before the first conversation.',
        icon: FileText,
        features: ['Scope guidance', 'Engagement prompts', 'Expectation setting'],
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
          'Connects reviews, clarity, and advisor proof so they support the discovery-call decision before the appointment.',
        icon: ShieldCheck,
        features: ['Review requests', 'Proof-of-service support', 'Trust-led page structure'],
      },
      {
        title: 'Local visibility layer',
        description:
          'Reinforces the locations and project types the consultant wants through search visibility and authority pages.',
        icon: Search,
        features: ['Area-page targeting', 'Local search clarity', 'Authority-page support'],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'Operational Shift',
    title: 'From reactive consulting enquiries to a steadier discovery and follow-up flow',
    description:
      'The advisory depth stays. The repeatable friction around qualification, discovery coordination, and follow-up gets reduced.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'Before the workflow is structured',
        items: [
          'Enquiries arrive without enough detail to qualify them quickly',
          'Discovery-call booking depends on manual back-and-forth',
          'Pending opportunities are hard to follow consistently',
          'Trust depends too heavily on one-off reassurance during early conversations',
        ],
      },
      {
        type: 'after' as const,
        title: 'After the workflow is aligned',
        items: [
          'New enquiries move into the right discovery or nurture path faster',
          'Booking and reminder flow protect the next step more consistently',
          'Follow-up happens with less manual chasing',
          'Reviews, authority signals, and page structure support better decision confidence',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Lead To Discovery Flow',
    title: 'How the consulting workflow moves from first enquiry to discovery and follow-up',
    description:
      'How the system moves consulting enquiries from first contact into the right discovery path — then into consistent follow-up when the decision takes time.',
    packages: [
      {
        name: 'Qualification and enquiry capture',
        description:
          'Routes advisory enquiries into a clearer first step — so the right details reach the right person faster.',
        price: 'Flow stage 1',
        priceDetail: 'Best when lead quality and first-contact clarity are the main issue',
        features: [
          'Intent-specific service pages',
          'Better enquiry capture',
          'Scope and timing context',
        ],
        buttonText: 'Talk Through Scope',
        buttonHref: '/contact',
      },
      {
        name: 'Discovery and readiness flow',
        description:
          'Adds steadier scheduling, clearer reminders, and better control over the next step after first contact.',
        price: 'Flow stage 2',
        priceDetail: 'Best when booking and scope-readiness handling create friction',
        features: ['Discovery scheduling support', 'Reminder structure', 'Readiness guidance'],
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
    title: 'What the consulting lead, discovery, and follow-up flow looks like in practice',
    description:
      'Repeatable situations where a structured consulting setup reduces friction — without making the business feel scripted.',
    workflows: [
      {
        trigger:
          'A new enquiry arrives and the consultant needs to determine project type, fit, budget range, and decision stage before booking the next step.',
        actions: [
          'Capture the right intent and timing early',
          'Route the enquiry into the right discovery or nurture path',
          'Reduce wasted time on unclear first contact',
        ],
      },
      {
        trigger:
          'A discovery call is requested and the business needs to confirm timing, scope expectations, and next-step readiness clearly.',
        actions: [
          'Move the lead into a booked discovery window',
          'Send reminders and preparation guidance',
          'Keep internal handoff cleaner between enquiry and discovery handling',
        ],
      },
      {
        trigger:
          'The discovery call is complete and the consultant wants to keep the opportunity moving without manual chasing every time.',
        actions: [
          'Send measured follow-up at the right times',
          'Keep the lead stage visible internally',
          'Support the decision with reviews and authority proof if needed',
        ],
      },
    ],
    backgroundColor: 'bg-white',
    cssPrefix: 'consultants-workflow-examples',
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
      'Relevant service layers for consultants that want cleaner discovery calls, steadier follow-up, and stronger trust support.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description:
          'See the core system layer that holds consulting enquiry, discovery flow, and follow-up together.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'Booking & Scheduling System',
        description: 'Support discovery calls, reminders, and clearer next-step handling.',
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
    title: 'Common questions about consulting systems',
    description: 'Common questions about MindWP for consultants',
    faqs: [
      {
        question: 'How can a consultant get more qualified enquiries from a website?',
        answer:
          'Clearer service paths, better qualification prompts, and guided next steps reduce uncertainty early — which directly improves enquiry quality.',
      },
      {
        question: 'Should consultants offer online discovery-call requests?',
        answer:
          'Yes — a clean request path reduces back-and-forth and moves people into the right next step faster. The key is capturing context early: project type, timing, and readiness.',
      },
      {
        question: 'How do consultants reduce slow follow-up on longer sales cycles?',
        answer:
          'A better enquiry system separates ready-now prospects from nurture-stage opportunities, then supports measured follow-up over time — less manual chasing, more consistency.',
      },
      {
        question: 'Do consultants need separate pages for different offer types?',
        answer:
          'Often, yes, as long as the pages reflect real service paths and useful information rather than thin copy. Good service-page structure helps visibility and also helps prospects feel confident that the consultant handles their situation.',
      },
      {
        question: 'What kind of reviews matter most for consultants?',
        answer:
          'The most useful reviews reinforce trust, clarity, and the feeling that the consultant made a complex problem easier to understand or solve. A structured review request process after completed work can help build that proof more consistently over time.',
      },
      {
        question:
          'Can a Smart Website system help a consultant without replacing CRM or delivery tools?',
        answer:
          'Yes. The system improves the public-facing side of the workflow by making enquiries, discovery booking, readiness guidance, and follow-up more consistent. It does not require replacing the internal tools you already use.',
      },
    ],
  };

  return {
    slug: 'consultants',
    industries: ['consulting'],
    systems: [
      'smart-website-systems',
      'crm-automation',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['lead-qualification', 'crm-integration', 'pipeline-visibility'],
    type: 'detail',
    parentSlug: 'legal-professional-services',
    seo: {
      title: 'Consultants — Smart Website Systems | MindWP',
      description:
        'Smart Website systems for consultants that need clearer qualification, discovery flow, and stronger trust support.',
      keywords: [
        'consultant website design',
        'consulting lead handling system',
        'discovery call booking workflow',
        'consulting seo services',
        'consulting review system',
      ],
      canonical: '/industries/legal-professional-services/consultants',
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
      title: 'Build a steadier consulting discovery and follow-up system',
      description:
        'If your consulting business is dealing with unclear enquiry quality, loose discovery flow, or inconsistent follow-up — we can map a practical system around how the pipeline actually runs.',
      primaryAction: { variant: 'white', label: 'Start a Conversation', href: '/contact' },
      secondaryAction: {
        label: 'See Legal & Professional Services',
        href: '/industries/legal-professional-services',
      },
    },
  };
}

export const consultantsIndustryPageData: IndustryPageData = buildConsultantsIndustryPageData();
