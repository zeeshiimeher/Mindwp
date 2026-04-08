import {
  Calendar,
  Car,
  Clock3,
  MapPinned,
  MessageSquare,
  Search,
  ShieldCheck,
  Star,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';
import { buildContactHref } from '@/lib/contact/contactHref';

function buildBodyShopsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'Coverage Lane',
    title: 'Smart Website Systems for Body Shops',
    description:
      'A body shop website should support damage-assessment enquiries, estimate flow, booking coordination, and follow-up — without forcing the team to patch every gap manually.',
    list: [
      'Clearer damage enquiries',
      'Better estimate coordination',
      'Stronger booking flow',
      'More reliable local trust',
    ],
    cssPrefix: 'body-shops-hero',
  };

  const imageStripData = {
    badge: 'Service Environment',
    title:
      'Body shop demand depends on damage clarity, estimate confidence, and trust before booking',
    description:
      'Accident repairs, cosmetic work, inspection needs, estimate decisions, booking timing, and review follow-up all shape the buying process. When those steps feel disconnected, the team absorbs more uncertainty than it should.',
    items: [
      {
        title: 'Damage and repair enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing body shop damage enquiries',
      },
      {
        title: 'Assessment and estimate steps',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing body shop estimate flow',
      },
      {
        title: 'Booking and repair coordination',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing body shop booking coordination',
      },
      {
        title: 'Reviews and handoff follow-up',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing body shop reviews and handoff follow-up',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'body-shops-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Operating Patterns',
    title: 'Where body shops lose time, clarity, or momentum',
    description:
      'The gap is rarely visibility alone — it sits between damage understanding, estimate confidence, booking coordination, and the proof someone needs before they commit.',
    benefits: [
      {
        icon: Car,
        title: 'Damage enquiries are not always qualified clearly enough at first contact',
        description:
          'Accident repairs, cosmetic work, and panel issues arrive through one loose path — first-response quality drops when everything routes the same way.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Assessment and booking coordination create friction',
        description:
          'Estimate timing, workshop capacity, vehicle context, and next steps sit in different places — the booking flow slows before it should.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Estimates and pending decisions go quiet',
        description:
          'Once the repair has been assessed, the follow-up path can become inconsistent when the team is already under workshop pressure.',
        iconType: 'accent' as const,
      },
      {
        icon: MapPinned,
        title: 'Trust signals stay fragmented across the local decision path',
        description:
          'Reviews, proof of work, repair pages, and local visibility exist in different places — they rarely work together to support confident booking decisions.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'System Layers',
    title: 'The working layers behind a steadier body shop pipeline',
    description:
      'A body shop workflow needs structure before the vehicle arrives, during assessment and estimate handling, and after the repair is complete.',
    featureCategories: [
      {
        title: 'Lead capture and qualification layer',
        description:
          'Routes damage assessments, accident repairs, and cosmetic repair enquiries through a clearer first-contact path so the right issue reaches the right next step.',
        icon: MessageSquare,
        features: [
          'Damage and repair qualification',
          'Vehicle context capture',
          'Cleaner first response',
        ],
      },
      {
        title: 'Assessment and booking layer',
        description:
          'Moves estimate requests, booking windows, and next-step guidance into a booked path without unnecessary delay.',
        icon: Calendar,
        features: ['Assessment scheduling', 'Reminder touchpoints', 'Clear next-step guidance'],
      },
      {
        title: 'Estimate follow-up layer',
        description:
          'Keeps pending decisions on a calmer, more consistent follow-up path so repair work does not disappear into silence.',
        icon: Workflow,
        features: ['Estimate follow-up', 'Decision reminders', 'Pipeline visibility'],
      },
      {
        title: 'Trust and proof layer',
        description:
          'Connects reviews, repair proof, and credibility signals so they support local buying decisions before the booking happens.',
        icon: ShieldCheck,
        features: ['Review requests', 'Proof-of-work support', 'Trust-led page structure'],
      },
      {
        title: 'Local visibility layer',
        description:
          'Reinforces the local work you want through repair pages, maps visibility, and service-area coverage.',
        icon: Search,
        features: [
          'Local area targeting',
          'Repair service-page clarity',
          'Google Business Profile support',
        ],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'Operational Shift',
    title: 'From reactive body shop enquiries to a more reliable estimate and booking flow',
    description:
      'The repair quality stays. The repeatable friction around enquiry routing, estimate coordination, and follow-up gets reduced.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'Before the workflow is structured',
        items: [
          'Repair leads arrive without enough detail to route them quickly',
          'Assessments and booking steps depend on manual back-and-forth',
          'Pending estimates are hard to follow consistently',
          'Trust depends too heavily on one-off reassurance during the booking process',
        ],
      },
      {
        type: 'after' as const,
        title: 'After the workflow is aligned',
        items: [
          'New repair leads move into the right assessment path faster',
          'Booking and reminder flow protect the next step more consistently',
          'Estimate follow-up happens with less manual chasing',
          'Reviews, repair proof, and page structure support better decision confidence',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Lead To Booking Flow',
    title: 'How the body shop workflow moves from first enquiry to booked assessment and follow-up',
    description:
      'How the system moves body shop demand from first contact into the right assessment or booking path — then into consistent estimate follow-up.',
    packages: [
      {
        name: 'Lead capture and qualification',
        description:
          'Routes damage assessments and repair enquiries into a clearer first step — so the right details reach the right person faster.',
        price: 'Flow stage 1',
        priceDetail: 'Best when lead quality and first-contact clarity are the main issue',
        features: [
          'Repair-specific service pages',
          'Better enquiry capture',
          'Vehicle and damage context',
        ],
        buttonText: 'Talk Through Scope',
        buttonHref: buildContactHref({
          system: 'smart-website-systems',
          sourceType: 'industry',
          slug: 'body-shops',
        }),
      },
      {
        name: 'Assessment booking and estimate flow',
        description:
          'Adds steadier scheduling, clearer reminders, and better control over the next step after assessment.',
        price: 'Flow stage 2',
        priceDetail: 'Best when booking and estimate handling create friction',
        features: [
          'Assessment scheduling support',
          'Reminder and callback structure',
          'Estimate path clarity',
        ],
        popular: true,
        buttonText: 'See the Setup',
        buttonHref: buildContactHref({
          system: 'smart-website-systems',
          sourceType: 'industry',
          slug: 'body-shops',
        }),
      },
      {
        name: 'Follow-up and trust reinforcement',
        description:
          'Keeps pending estimates, reviews, and completed-repair proof moving in a more reliable way.',
        price: 'Flow stage 3',
        priceDetail: 'Best when follow-up consistency and trust-building are the pressure points',
        features: [
          'Estimate follow-up workflows',
          'Review request support',
          'Repair proof reinforcement',
        ],
        buttonText: 'Request Details',
        buttonHref: buildContactHref({
          system: 'smart-website-systems',
          sourceType: 'industry',
          slug: 'body-shops',
        }),
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Follow-Up Examples',
    title: 'What the body shop lead, booking, and follow-up flow looks like in practice',
    description:
      'Repeatable situations where a structured body shop setup reduces friction — without making the business feel scripted.',
    workflows: [
      {
        trigger:
          'A driver needs repair help and wants to know whether the next step is assessment, estimate, or booking.',
        actions: [
          'Capture the right damage context early',
          'Route the enquiry into the right assessment or booking path',
          'Reduce wasted time on unclear first contact',
        ],
      },
      {
        trigger:
          'An assessment is requested and the business needs to confirm timing, vehicle details, and the next step clearly.',
        actions: [
          'Move the lead into a booked assessment window',
          'Send reminders and next-step guidance',
          'Keep internal handoff cleaner between front desk and workshop',
        ],
      },
      {
        trigger:
          'The estimate has been delivered and the business wants to keep the repair warm without manual chasing every time.',
        actions: [
          'Send measured follow-up at the right times',
          'Keep the estimate stage visible internally',
          'Support the decision with reviews and repair proof if needed',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'body-shops-workflow-examples',
  };

  const caseStudiesData = {
    category: 'automotive-services' as const,
    title: 'Related Case Studies',
    description:
      'Examples of how the system supports automotive service businesses in this category.',
    limit: 2,
  };

  const exploreData = {
    badge: 'Explore',
    description:
      'Relevant service layers for body shops that want cleaner assessments, estimate follow-up, and stronger local trust support.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description:
          'See the core system layer that holds repair enquiry, assessment, and follow-up together.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'Booking & Scheduling System',
        description: 'Support assessments, reminders, and clearer next-step handling.',
        href: '/services/booking-scheduling-system',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen repair visibility, maps trust, and local service discovery.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description: 'Turn completed repair work into stronger proof and review flow.',
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
    title: 'Common questions about body shop systems',
    description: 'Common questions about MindWP for body shops',
    faqs: [
      {
        question: 'How can a body shop get more qualified repair bookings from its website?',
        answer:
          'Clearer repair pages, better forms, and guided next-step paths help drivers understand what to do next — which directly improves booking quality.',
      },
      {
        question: 'Should body shops offer online assessment or estimate requests?',
        answer:
          'Yes — a clean request path reduces back-and-forth and moves drivers into the right next step faster. The key is capturing context early: damage type, urgency, vehicle details, and whether the next step is assessment or direct booking.',
      },
      {
        question: 'How do body shops reduce missed calls and slow callbacks?',
        answer:
          'Missed calls become expensive when the workshop is already under pressure. A better enquiry system can capture requests through multiple paths, support missed-enquiry recovery, and make the first reply clearer even when nobody can answer immediately.',
      },
      {
        question: 'Do body shops need separate pages for different repair services?',
        answer:
          'Often, yes, as long as the pages reflect real service coverage and useful information rather than thin copy. Good service-page structure helps local visibility and also helps prospects feel confident that the shop can handle their problem.',
      },
      {
        question: 'How should body shops handle estimate follow-up without sounding pushy?',
        answer:
          'Calm, well-timed follow-up that confirms the next step, keeps the estimate visible, and makes it easy to re-engage. The aim is clarity and consistency — not pressure.',
      },
      {
        question: 'What kind of reviews matter most for body shops?',
        answer:
          'The most useful reviews help future customers trust the repair quality, communication, and overall experience. A structured review request process after completed jobs can help build that proof more consistently over time.',
      },
    ],
  };

  return {
    slug: 'body-shops',
    industries: ['body-shop'],
    systems: [
      'smart-website-systems',
      'ai-lead-handling',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['lead-response-time', 'follow-up', 'review-generation'],
    type: 'detail',
    parentSlug: 'automotive-services',
    seo: {
      title: 'Body Shops — Smart Website Systems | MindWP',
      description:
        'Smart Website systems for body shops that need clearer assessment flow, estimate follow-up, and stronger local trust.',
      keywords: [
        'body shop website design',
        'body shop booking system',
        'body shop marketing system',
        'body shop seo services',
        'body shop reputation management system',
      ],
      canonical: '/industries/automotive-services/body-shops',
    },
    hero: {
      ...heroData,
      primaryAction: {
        label: 'Capture More Repair Leads',
        href: buildContactHref({
          system: 'smart-website-systems',
          sourceType: 'industry',
          slug: 'body-shops',
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
      title: 'Build a steadier body shop assessment and estimate system',
      description:
        'If your repair business is dealing with missed enquiries, loose booking, or inconsistent estimate follow-up — we can map a practical system around how the workshop actually runs.',
      primaryAction: {
        variant: 'white',
        label: 'Capture More Repair Leads',
        href: buildContactHref({
          system: 'smart-website-systems',
          sourceType: 'industry',
          slug: 'body-shops',
        }),
      },
      secondaryAction: {
        label: 'See Automotive Services',
        href: '/industries/automotive-services',
      },
    },
  };
}

export const bodyShopsIndustryPageData: IndustryPageData = buildBodyShopsIndustryPageData();
