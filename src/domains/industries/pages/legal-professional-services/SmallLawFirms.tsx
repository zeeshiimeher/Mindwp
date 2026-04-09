import {
  Calendar,
  Clock3,
  FileText,
  MessageSquare,
  Scale,
  Search,
  ShieldCheck,
  Star,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';
import { buildContactHref } from '@/lib/contact/contactHref';

function buildSmallLawFirmsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'Coverage Lane',
    title: 'Smart Website Systems for Small Law Firms',
    description:
      'A small law firm website should support matter qualification, consultation booking, document-readiness, and follow-up — without making every new matter depend on manual chasing.',
    list: [
      'Clearer matter qualification',
      'Better consultation flow',
      'Stronger trust signals',
      'More reliable follow-up',
    ],
    cssPrefix: 'small-law-firms-hero',
  };

  const imageStripData = {
    badge: 'Service Environment',
    title:
      'Legal demand depends on trust, fit, and next-step clarity before the consultation happens',
    description:
      'New matter enquiries, conflict-fit questions, consultation timing, document preparation, authority signals, and follow-up all affect whether someone progresses. When those steps feel disconnected, the intake process becomes harder to trust internally and externally.',
    items: [
      {
        title: 'New matter enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing small law firm enquiries',
      },
      {
        title: 'Consultation booking and readiness',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing legal consultation booking',
      },
      {
        title: 'Documents and next steps',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing legal document readiness and next steps',
      },
      {
        title: 'Reviews and credibility proof',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing legal trust and credibility',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'small-law-firms-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Operating Patterns',
    title: 'Where small law firms lose clarity, time, or consultation momentum',
    description:
      'The gap is rarely lead volume alone — it sits between first enquiry, fit qualification, consultation timing, and the trust proof someone needs before sharing sensitive details.',
    benefits: [
      {
        icon: Scale,
        title: 'New matters arrive before the firm knows whether the fit is right',
        description:
          'Different matter types, urgency levels, and service needs arrive through one loose path — first-response quality drops when everything routes the same way.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Consultation booking creates friction when readiness is unclear',
        description:
          'Availability, required documents, and next steps sit in different places — the intake process slows before it should.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Pending matters depend too much on manual follow-up',
        description:
          'Enquiries that are not ready immediately often become inconsistent to track when the team is already handling active work.',
        iconType: 'accent' as const,
      },
      {
        icon: FileText,
        title: 'Trust signals stay fragmented across the decision path',
        description:
          'Reviews, authority pages, and advisor credibility exist in different places — they rarely work together to support a confident first consultation.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'System Layers',
    title: 'The working layers behind a steadier legal intake pipeline',
    description:
      'A small law firm workflow needs structure before consultations, during qualification, and after first contact — especially when the decision takes time.',
    featureCategories: [
      {
        title: 'Matter qualification layer',
        description:
          'Routes service enquiries through a clearer first-contact path so the right matter type reaches the right next step.',
        icon: MessageSquare,
        features: ['Intent capture', 'Fit qualification', 'Cleaner first response'],
      },
      {
        title: 'Consultation booking layer',
        description:
          'Moves initial calls and consultations into a booked next step without unnecessary delay.',
        icon: Calendar,
        features: ['Consultation scheduling', 'Reminder touchpoints', 'Next-step guidance'],
      },
      {
        title: 'Document-readiness layer',
        description:
          'Gives prospects a clearer view of what information or documents to bring before the first conversation.',
        icon: FileText,
        features: ['Readiness guidance', 'Document prompts', 'Expectation setting'],
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
          'Reinforces the locations and matter types the firm wants through area pages and search visibility.',
        icon: Search,
        features: ['Area-page targeting', 'Local search clarity', 'Authority-page support'],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'Operational Shift',
    title: 'From reactive legal enquiries to a steadier consultation and follow-up flow',
    description:
      'The advisory relationship stays personal. The repeatable friction around qualification, consultation coordination, and follow-up gets reduced.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'Before the workflow is structured',
        items: [
          'Enquiries arrive without enough detail to qualify them quickly',
          'Consultation booking depends on manual back-and-forth',
          'Pending matters are hard to follow consistently',
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
    title: 'How the legal intake workflow moves from first enquiry to consultation and follow-up',
    description:
      'How the system moves legal enquiries from first contact into the right consultation path — then into consistent follow-up when the decision takes time.',
    packages: [
      {
        name: 'Qualification and intake',
        description:
          'Routes new matter enquiries into a clearer first step — so the right details reach the right advisor faster.',
        price: 'Flow stage 1',
        priceDetail: 'Best when lead quality and first-contact clarity are the main issue',
        features: [
          'Intent-specific service pages',
          'Better enquiry capture',
          'Matter and timing context',
        ],
      },
      {
        name: 'Consultation and readiness flow',
        description:
          'Adds steadier scheduling, clearer reminders, and better control over the next step after first contact.',
        price: 'Flow stage 2',
        priceDetail: 'Best when booking and document-readiness handling create friction',
        features: ['Consultation scheduling support', 'Reminder structure', 'Readiness guidance'],
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
    title: 'What the legal intake, consultation, and follow-up flow looks like in practice',
    description:
      'Repeatable situations where a structured legal setup reduces friction — without making the firm feel scripted.',
    workflows: [
      {
        trigger:
          'A new enquiry arrives and the firm needs to determine matter type, urgency, and fit before booking the next step.',
        actions: [
          'Capture the right intent and timing early',
          'Route the enquiry into the right consultation or nurture path',
          'Reduce wasted time on unclear first contact',
        ],
      },
      {
        trigger:
          'A consultation is requested and the business needs to confirm timing, readiness, and document expectations clearly.',
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
    backgroundColor: 'bg-base',
    cssPrefix: 'small-law-firms-workflow-examples',
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
      'Relevant service layers for small law firms that want cleaner consultations, steadier follow-up, and stronger local trust support.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description:
          'See the core system layer that holds legal enquiry, consultation flow, and follow-up together.',
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
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Common questions about small law firm systems',
    description: 'Common questions about MindWP for small law firms',
    faqs: [
      {
        question: 'How can a small law firm get more qualified enquiries from a website?',
        answer:
          'Clearer service paths, better qualification prompts, and guided next steps reduce uncertainty early — which directly improves enquiry quality.',
      },
      {
        question: 'Should a small law firm offer online consultation requests?',
        answer:
          'Yes — a clean request path reduces back-and-forth and moves people into the right next step faster. The key is capturing context early: matter type, urgency, and readiness.',
      },
      {
        question: 'How do small law firms reduce slow follow-up on new matters?',
        answer:
          'A better enquiry system separates ready-now matters from nurture-stage opportunities, then supports measured follow-up over time — less manual chasing, more consistency.',
      },
      {
        question: 'Do small law firms need separate pages for different matter types?',
        answer:
          'Often, yes, as long as the pages reflect real service paths and useful information rather than thin copy. Good service-page structure helps local visibility and also helps prospects feel confident that the firm handles their situation.',
      },
      {
        question: 'What kind of reviews matter most for small law firms?',
        answer:
          'The most useful reviews reinforce trust, communication quality, and the feeling that the firm handled a complex situation with clarity. A structured review request process after completed work can help build that proof more consistently over time.',
      },
      {
        question:
          'Can a Smart Website system help a small law firm without replacing its case management software?',
        answer:
          'Yes. The system improves the public-facing side of the workflow by making enquiries, consultation booking, readiness guidance, and follow-up more consistent. It does not require replacing the internal tools you already use.',
      },
    ],
  };

  return {
    slug: 'small-law-firms',
    industries: ['law-firm'],
    systems: [
      'smart-website-systems',
      'crm-automation',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['lead-qualification', 'lead-response-time', 'reputation-monitoring'],
    type: 'detail',
    parentSlug: 'legal-professional-services',
    seo: {
      title: 'Small Law Firms — Smart Website Systems | MindWP',
      description:
        'Smart Website systems for small law firms that need clearer qualification, consultation flow, and stronger trust support.',
      keywords: [
        'small law firm website design',
        'law firm lead handling system',
        'law consultation booking workflow',
        'law firm seo services',
        'law firm review system',
      ],
      canonical: '/industries/legal-professional-services/small-law-firms',
    },
    hero: {
      ...heroData,
      primaryAction: {
        label: 'Book More Consultations',
        href: buildContactHref({
          system: 'smart-website-systems',
          sourceType: 'industry',
          slug: 'small-law-firms',
        }),
      },
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
      title: 'Build a steadier legal intake and follow-up system',
      description:
        'If your firm is dealing with unclear enquiry quality, loose consultation flow, or inconsistent follow-up — we can map a practical system around how the pipeline actually runs.',
      primaryAction: {
        variant: 'white',
        label: 'Book More Consultations',
        href: buildContactHref({
          system: 'smart-website-systems',
          sourceType: 'industry',
          slug: 'small-law-firms',
        }),
      },
      secondaryAction: {
        label: 'See Legal & Professional Services',
        href: '/industries/legal-professional-services',
      },
    },
  };
}

export const smallLawFirmsIndustryPageData: IndustryPageData = buildSmallLawFirmsIndustryPageData();
