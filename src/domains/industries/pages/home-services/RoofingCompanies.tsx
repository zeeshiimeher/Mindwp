import {
  Calendar,
  Clock3,
  Home,
  MapPinned,
  MessageSquare,
  Search,
  ShieldCheck,
  Star,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';
import { buildContactHref } from '@/lib/contact/contactHref';

function buildRoofingCompaniesIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'Primary Lane',
    title: 'Smart Website Systems for Roofing',
    description:
      'A roofing website should capture urgency clearly, support inspection booking, keep quote follow-up moving, and turn completed work into stronger local trust — without the team needing to chase every step manually.',
    list: [
      'Faster lead qualification',
      'Clearer inspection booking',
      'Consistent quote follow-up',
      'Stronger local proof signals',
    ],
    cssPrefix: 'roofing-companies-hero',
  };

  const imageStripData = {
    badge: 'Service Environment',
    title: 'Roofing demand often arrives with urgency, uncertainty, and strong local intent',
    description:
      'Storm damage, leak enquiries, insurance questions, inspections, quotes, and photo proof all shape the buying process. When those steps are loose, the pipeline becomes harder to trust.',
    items: [
      {
        title: 'Storm and leak enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing roofing storm or leak enquiries',
      },
      {
        title: 'Inspection and estimate booking',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing roofing inspection scheduling',
      },
      {
        title: 'Quote and decision follow-up',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing roofing quote follow-up',
      },
      {
        title: 'Review and proof collection',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing roofing reviews and proof collection',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'roofing-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Operating Patterns',
    title: 'Where roofing businesses lose time, trust, or lead quality',
    description:
      'The gap is between urgency, inspection booking, estimate follow-up, and local proof — not rankings alone.',
    benefits: [
      {
        icon: Home,
        title: 'Urgent enquiries land without enough detail',
        description:
          'Storm, leak, repair, and replacement requests arrive fast, but the first contact may not capture the right service need or urgency level.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Inspection booking creates friction',
        description:
          'Back-and-forth around availability, property details, and next steps slows the move from lead to booked inspection.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Quotes and pending decisions go quiet',
        description:
          'After the inspection, follow-up becomes inconsistent — especially when crews and owners are already on the next job.',
        iconType: 'accent' as const,
      },
      {
        icon: MapPinned,
        title: 'Service-area trust signals stay fragmented',
        description:
          'Reviews, location coverage, job photos, and roofing pages all exist but do not work together to support confident local decisions.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'System Layers',
    title: 'The working layers behind a steadier roofing pipeline',
    description:
      'The system supports demand before inspection, during estimate handling, and after the job is complete.',
    featureCategories: [
      {
        title: 'Lead capture and qualification layer',
        description:
          'Routes emergency repairs, storm response, inspections, and replacements into the right next step based on job type and urgency.',
        icon: MessageSquare,
        features: [
          'Service-type qualification',
          'Property and urgency capture',
          'Cleaner first response',
        ],
      },
      {
        title: 'Inspection booking layer',
        description:
          'Moves inspection requests, callback timing, and appointment windows into a booked next step without unnecessary delay.',
        icon: Calendar,
        features: ['Inspection scheduling', 'Reminder touchpoints', 'Clear next-step guidance'],
      },
      {
        title: 'Quote follow-up layer',
        description:
          'Keeps pending decisions visible with calmer, more consistent follow-up so estimates do not disappear into silence.',
        icon: Workflow,
        features: ['Estimate follow-up', 'Decision reminders', 'Pipeline visibility'],
      },
      {
        title: 'Trust and proof layer',
        description:
          'Connects reviews, project proof, and reputation signals to local buying decisions before the call happens.',
        icon: ShieldCheck,
        features: ['Review requests', 'Proof-of-work support', 'Trust-led page structure'],
      },
      {
        title: 'Local visibility layer',
        description:
          'Aligns roofing pages, maps visibility, and service-area coverage to reinforce the places and job types you want.',
        icon: Search,
        features: [
          'Local area targeting',
          'Roofing service-page clarity',
          'Google Business Profile support',
        ],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'Operational Shift',
    title: 'From reactive roofing lead handling to a more reliable inspection and follow-up flow',
    description:
      'The expertise and judgement stay. The repeatable friction around lead handling, booking, and follow-up gets reduced.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'Before the workflow is structured',
        items: [
          'Urgent leads arrive without enough detail to route them quickly',
          'Inspection and callback booking depends on manual back-and-forth',
          'Pending quotes are hard to follow consistently',
          'Trust depends too heavily on one-off reassurance during the sales process',
        ],
      },
      {
        type: 'after' as const,
        title: 'After the workflow is aligned',
        items: [
          'New leads move into the right inspection or service path faster',
          'Booking and reminder flow protect the next step more consistently',
          'Quote follow-up happens with less manual chasing',
          'Reviews, local proof, and page structure support better decision confidence',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Lead To Booking Flow',
    title: 'From first enquiry to booked inspection and follow-up',
    description:
      'Each stage moves roofing leads through a specific part of the journey — from first contact into the right inspection or estimate path, then into consistent follow-up.',
    packages: [
      {
        name: 'Lead capture and qualification',
        description:
          'Routes repairs, storms, and replacement enquiries into the right service path with enough context for a clear next step.',
        price: 'Flow stage 1',
        priceDetail: 'Best when lead quality and first-contact clarity are the main issue',
        features: [
          'Trade-specific service pages',
          'Better enquiry capture',
          'Urgency and property context',
        ],
      },
      {
        name: 'Inspection and estimate booking',
        description:
          'Adds structured scheduling, reminders, and estimate-path clarity so inspections move forward without unnecessary delay.',
        price: 'Flow stage 2',
        priceDetail: 'Best when inspection booking and estimate handling create friction',
        features: [
          'Inspection scheduling support',
          'Callback and reminder structure',
          'Estimate path clarity',
        ],
        popular: true,
      },
      {
        name: 'Follow-up and trust reinforcement',
        description:
          'Keeps pending quotes, reviews, and completed-job proof moving through a reliable follow-up path.',
        price: 'Flow stage 3',
        priceDetail: 'Best when follow-up consistency and trust-building are the pressure points',
        features: [
          'Quote follow-up workflows',
          'Review request support',
          'Local proof reinforcement',
        ],
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Follow-Up Examples',
    title: 'What the roofing lead, booking, and follow-up flow looks like in practice',
    description:
      'Repeatable situations where the system reduces friction without making the business feel scripted.',
    workflows: [
      {
        trigger:
          'A property owner needs urgent help after a storm and wants to know whether inspection or repair is the right step.',
        actions: [
          'Capture the right job type and urgency early',
          'Route the lead into the right callback or inspection path',
          'Reduce wasted time on unclear first contact',
        ],
      },
      {
        trigger:
          'An inspection is requested and timing, property details, and next steps need confirming.',
        actions: [
          'Move the lead into a booked inspection window',
          'Send reminders and next-step guidance',
          'Keep internal handoff cleaner between office and field work',
        ],
      },
      {
        trigger:
          'The quote has been delivered and the business wants to keep the lead warm without chasing manually.',
        actions: [
          'Send measured follow-up at the right times',
          'Keep the quote stage visible internally',
          'Support the decision with reviews and proof if needed',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'roofing-workflow-examples',
  };

  const exploreData = {
    badge: 'Explore',
    description:
      'Relevant service layers for roofing companies that want cleaner inspections, follow-up, and local trust support.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description:
          'See the core system layer that holds roofing enquiry, inspection, and follow-up together.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'Booking & Scheduling System',
        description: 'Support inspections, reminders, and clearer next-step handling.',
        href: '/services/booking-scheduling-system',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen roofing service-area visibility and local trust.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description: 'Turn completed jobs into stronger local proof and review flow.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Common questions about roofing systems',
    description: 'Common questions about MindWP for roofing companies',
    faqs: [
      {
        question: 'How can a roofing company get more qualified leads from its website?',
        answer:
          'Make service pages specific around repairs, replacements, storm work, inspections, and the areas you serve. Then simplify the first contact path — clear forms, stronger calls to action, and obvious next-step guidance. Leads improve when the site reduces uncertainty.',
      },
      {
        question: 'Should roofing companies offer online inspection requests?',
        answer:
          'Yes. A clean inspection-request path reduces back-and-forth and moves leads into the right next step faster. The key is capturing job type, urgency, property context, and service area early so the booking path stays practical.',
      },
      {
        question: 'How do roofing companies reduce missed calls and slow callbacks?',
        answer:
          'Missed calls become expensive when the business is already on site. A better enquiry system captures requests through multiple paths, supports missed-call follow-up, and makes the first reply clearer even when nobody can pick up immediately.',
      },
      {
        question: 'Do roofing companies need separate service-area pages?',
        answer:
          'Yes, as long as those pages reflect real service coverage and useful information rather than thin location copy. Good service-area structure helps search visibility and reassures prospects that you work where they are.',
      },
      {
        question: 'How should roofing businesses handle quote follow-up without sounding pushy?',
        answer:
          'Calm, well-timed follow-up that confirms the next step, keeps the quote visible, and makes it easy for the prospect to re-engage. The aim is clarity and consistency, not pressure.',
      },
      {
        question: 'What kind of reviews matter most for roofing companies?',
        answer:
          'Reviews that mention work quality, communication, and overall experience carry the most weight. A consistent review-request process after completed jobs builds that proof over time.',
      },
    ],
  };

  return {
    slug: 'roofing-companies',
    industries: ['roofing'],
    systems: [
      'smart-website-systems',
      'ai-lead-handling',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['lead-management', 'follow-up', 'review-generation'],
    type: 'detail',
    parentSlug: 'home-services',
    seo: {
      title: 'Roofing — Smart Website Systems | MindWP',
      description:
        'Smart Website systems for roofing companies that need clearer inspections, quote follow-up, and stronger local trust.',
      keywords: [
        'roofing website design',
        'roofing contractor website system',
        'roofing lead automation system',
        'roofing seo services',
        'roofing reputation management system',
      ],
      canonical: '/industries/home-services/roofing-companies',
    },
    hero: {
      ...heroData,
      primaryAction: {
        label: 'Book More Roofing Estimates',
        href: buildContactHref({
          system: 'smart-website-systems',
          sourceType: 'industry',
          slug: 'roofing-companies',
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
    explore: exploreData,
    faq: faqData,
    cta: {
      title: 'Build a steadier roofing system',
      description:
        'If missed calls, loose inspection booking, inconsistent quote follow-up, or weak local proof are slowing things down, we can map a practical system around how the work actually runs.',
      primaryAction: {
        variant: 'white',
        label: 'Book More Roofing Estimates',
        href: buildContactHref({
          system: 'smart-website-systems',
          sourceType: 'industry',
          slug: 'roofing-companies',
        }),
      },
      secondaryAction: {
        label: 'See Home Services',
        href: '/industries/home-services',
      },
    },
  };
}

export const roofingCompaniesIndustryPageData: IndustryPageData =
  buildRoofingCompaniesIndustryPageData();
