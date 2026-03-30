import {
  Calendar,
  Clock3,
  Landmark,
  MessageSquare,
  Search,
  ShieldCheck,
  Star,
  Wallet,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildMortgageBrokersIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'Coverage Lane',
    title: 'Smart Website Systems for Mortgage Brokers',
    description:
      'A mortgage broker website should support qualification enquiries, consultation booking, document-readiness guidance, and follow-up — without making the team manually hold every conversation together.',
    list: [
      'Clearer enquiry qualification',
      'Better consultation booking flow',
      'Stronger trust and clarity signals',
      'More reliable nurture follow-up',
    ],
    cssPrefix: 'mortgage-brokers-hero',
  };

  const imageStripData = {
    badge: 'Service Environment',
    title:
      'Mortgage demand depends on trust, timing, and next-step clarity before a consultation ever happens',
    description:
      'Purchase enquiries, refinance questions, qualification uncertainty, consultation booking, document-readiness, and follow-up all shape whether someone progresses. When those steps feel disconnected, the pipeline becomes harder to move and harder to trust.',
    items: [
      {
        title: 'Purchase and refinance enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing mortgage broker enquiries',
      },
      {
        title: 'Consultation booking and qualification',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing mortgage consultation booking',
      },
      {
        title: 'Document readiness and follow-up',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing mortgage document readiness and follow-up',
      },
      {
        title: 'Reviews and local proof',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing mortgage broker reviews and trust signals',
      },
    ],
    backgroundColor: 'bg-white',
    cssPrefix: 'mortgage-brokers-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Operating Patterns',
    title: 'Where mortgage brokers lose momentum, clarity, or consultation confidence',
    description:
      'The gap is rarely just lead volume — it sits between first enquiry, qualification, consultation booking, and the trust proof people need before sharing their financial situation.',
    benefits: [
      {
        icon: Wallet,
        title: 'Borrowers often enquire before they understand their readiness or next step',
        description:
          'Purchase, refinance, and remortgage enquiries can arrive with very different levels of intent — first-response quality drops when everything routes through one loose path.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title:
          'Consultation booking creates friction when qualification and preparation are unclear',
        description:
          'Availability, document expectations, and consultation readiness sit in different places — the pipeline slows early when booking and preparation are unclear.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Nurture and pending-decision follow-up depend too much on manual chasing',
        description:
          'Many enquiries are not ready immediately, but the follow-up path often becomes inconsistent when advisors are already handling active files.',
        iconType: 'accent' as const,
      },
      {
        icon: Landmark,
        title: 'Trust signals stay fragmented across the decision path',
        description:
          'Reviews, credibility markers, educational clarity, and advisor proof exist in different places — they rarely work together to support confident consultation booking.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'System Layers',
    title: 'The working layers behind a steadier mortgage enquiry pipeline',
    description:
      'A mortgage broker workflow needs structure before consultations, while qualification is being clarified, and after first contact — especially when the decision takes time.',
    featureCategories: [
      {
        title: 'Enquiry and qualification layer',
        description:
          'Routes purchase, refinance, and readiness enquiries through a clearer first-contact path so the right intent reaches the right next step.',
        icon: MessageSquare,
        features: ['Intent capture', 'Qualification guidance', 'Cleaner first response'],
      },
      {
        title: 'Consultation booking layer',
        description:
          'Moves initial calls and consultations into a booked next step without unnecessary delay or confusion.',
        icon: Calendar,
        features: ['Consultation scheduling', 'Reminder touchpoints', 'Next-step guidance'],
      },
      {
        title: 'Nurture and follow-up layer',
        description:
          'Keeps pending borrowers on a calmer, more consistent follow-up path so opportunities do not disappear into silence.',
        icon: Workflow,
        features: ['Lead nurture', 'Decision reminders', 'Pipeline visibility'],
      },
      {
        title: 'Trust and proof layer',
        description:
          'Connects reviews, clarity, and advisor proof so they support confidence before a consultation happens.',
        icon: ShieldCheck,
        features: ['Review requests', 'Proof-of-service support', 'Trust-led page structure'],
      },
      {
        title: 'Local visibility layer',
        description:
          'Reinforces the locations and borrower profiles you want through area pages, search visibility, and local credibility.',
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
    title: 'From reactive mortgage enquiries to a steadier consultation and follow-up flow',
    description:
      'The advisory relationship stays personal. The repeatable friction around qualification, consultation coordination, and follow-up gets reduced.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'Before the workflow is structured',
        items: [
          'Leads arrive without enough detail to qualify them quickly',
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
          'Reviews, local proof, and page structure support better decision confidence',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Lead To Consultation Flow',
    title:
      'How the mortgage broker workflow moves from first enquiry to consultation and follow-up',
    description:
      'How the system moves mortgage leads from first contact into the right qualification and consultation path — then into consistent follow-up when the decision takes time.',
    packages: [
      {
        name: 'Enquiry capture and qualification',
        description:
          'Routes purchase, refinance, and readiness enquiries into a clearer first step — so the right intent reaches the right next action faster.',
        price: 'Flow stage 1',
        priceDetail: 'Best when lead quality and first-contact clarity are the main issue',
        features: [
          'Intent-specific service pages',
          'Better enquiry capture',
          'Readiness and timing context',
        ],
        buttonText: 'Talk Through Scope',
        buttonHref: '/contact',
      },
      {
        name: 'Consultation and reminder flow',
        description:
          'Adds steadier scheduling, clearer reminders, and better control over the next step after first contact.',
        price: 'Flow stage 2',
        priceDetail: 'Best when booking and appointment handling create friction',
        features: ['Consultation scheduling support', 'Reminder structure', 'Next-step clarity'],
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
    title: 'What the mortgage lead, consultation, and follow-up flow looks like in practice',
    description:
      'Repeatable situations where a structured mortgage setup reduces friction — without making the advisory process feel scripted.',
    workflows: [
      {
        trigger:
          'A new enquiry arrives and the broker needs to determine whether the person is buying, refinancing, or still clarifying readiness before booking the next step.',
        actions: [
          'Capture the right intent and timing early',
          'Route the enquiry into the right consultation or nurture path',
          'Reduce wasted time on unclear first contact',
        ],
      },
      {
        trigger:
          'A consultation is requested and the business needs to confirm timing, readiness, and next-step expectations clearly.',
        actions: [
          'Move the lead into a booked consultation window',
          'Send reminders and preparation guidance',
          'Keep internal handoff cleaner between enquiry and consultation handling',
        ],
      },
      {
        trigger:
          'The consultation is complete and the broker wants to keep the opportunity moving without manual chasing every time.',
        actions: [
          'Send measured follow-up at the right times',
          'Keep the lead stage visible internally',
          'Support the decision with reviews and local proof if needed',
        ],
      },
    ],
    backgroundColor: 'bg-white',
    cssPrefix: 'mortgage-brokers-workflow-examples',
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
      'Relevant service layers for mortgage brokers that want cleaner consultations, steadier follow-up, and stronger local trust support.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description:
          'See the core system layer that holds mortgage enquiries, consultation flow, and follow-up together.',
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
        description: 'Strengthen area visibility, local credibility, and borrower discovery.',
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
    title: 'Common questions about mortgage broker systems',
    description: 'Common questions about MindWP for mortgage brokers',
    faqs: [
      {
        question: 'How can a mortgage broker get more qualified enquiries from a website?',
        answer:
          'Clearer purchase, refinance, and readiness paths plus better next-step guidance reduce uncertainty early — which directly improves enquiry quality.',
      },
      {
        question: 'Should mortgage brokers offer online consultation requests?',
        answer:
          'Yes — a clean request path reduces back-and-forth and moves people into the right next step faster. The key is capturing context early: intent, timing, and readiness.',
      },
      {
        question: 'How do mortgage brokers reduce slow follow-up on colder leads?',
        answer:
          'A better enquiry system separates ready-now leads from nurture-stage opportunities, then supports measured follow-up over time — less manual chasing, more consistency.',
      },
      {
        question: 'Do mortgage brokers need separate pages for purchase and refinance services?',
        answer:
          'Often, yes, as long as the pages reflect real service paths and useful information rather than thin copy. Good service-page structure helps local visibility and also helps prospects feel confident that the broker handles their situation.',
      },
      {
        question: 'What kind of reviews matter most for mortgage brokers?',
        answer:
          'The most useful reviews reinforce trust, communication quality, and the feeling that the broker made a complex process easier to understand. A structured review request process after completed work can help build that proof more consistently over time.',
      },
      {
        question:
          'Can a Smart Website system help mortgage brokers without replacing their CRM or lender tools?',
        answer:
          'Yes. The system improves the public-facing side of the workflow by making enquiries, consultation booking, readiness guidance, and follow-up more consistent. It does not require replacing the internal tools you already use.',
      },
    ],
  };

  return {
    slug: 'mortgage-brokers',
    industries: ['mortgage-broker'],
    systems: [
      'smart-website-systems',
      'crm-automation',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['lead-qualification', 'crm-pipeline', 'pipeline-visibility'],
    type: 'detail',
    parentSlug: 'real-estate-property-services',
    seo: {
      title: 'Mortgage Brokers — Smart Website Systems | MindWP',
      description:
        'Smart Website systems for mortgage brokers that need clearer enquiry qualification, consultation flow, and stronger trust support.',
      keywords: [
        'mortgage broker website design',
        'mortgage broker lead handling system',
        'mortgage consultation booking workflow',
        'mortgage broker seo services',
        'mortgage broker review system',
      ],
      canonical: '/industries/real-estate-property-services/mortgage-brokers',
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
      title: 'Build a steadier mortgage consultation and follow-up system',
      description:
        'If your mortgage business is dealing with unclear enquiry quality, loose consultation flow, or inconsistent nurture follow-up — we can map a practical system around how the pipeline actually runs.',
      primaryAction: { variant: 'white', label: 'Start a Conversation', href: '/contact' },
      secondaryAction: {
        label: 'See Real Estate & Property Services',
        href: '/industries/real-estate-property-services',
      },
    },
  };
}

export const mortgageBrokersIndustryPageData: IndustryPageData =
  buildMortgageBrokersIndustryPageData();
