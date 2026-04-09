import {
  Bell,
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

function buildMobileMechanicsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'Coverage Lane',
    title: 'Smart Website Systems for Mobile Mechanics',
    description:
      'A mobile mechanic website should support vehicle problem qualification, service-area routing, on-site booking, and follow-up — without making the whole day depend on call interruptions.',
    list: [
      'Clearer service-area routing',
      'Better on-site booking flow',
      'Stronger local trust signals',
      'More reliable follow-up',
    ],
    cssPrefix: 'mobile-mechanics-hero',
  };

  const imageStripData = {
    badge: 'Service Environment',
    title:
      'Mobile mechanic demand depends on service-area clarity, response timing, and trust before arrival',
    description:
      'Breakdowns, fault checks, callouts, service-area coverage, appointment timing, and review follow-up all shape whether someone books. When those steps feel disconnected, the operator absorbs more coordination than necessary.',
    items: [
      {
        title: 'Callouts and urgent enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing mobile mechanic callouts',
      },
      {
        title: 'Area qualification and booking',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing mobile mechanic booking flow',
      },
      {
        title: 'Arrival and service timing',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing mobile mechanic arrival timing',
      },
      {
        title: 'Reviews and repeat visits',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing mobile mechanic reviews and repeat visits',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'mobile-mechanics-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Operating Patterns',
    title: 'Where mobile mechanics lose time, clarity, or momentum',
    description:
      'The gap is rarely lead volume alone — it sits between vehicle problems, service-area qualification, appointment timing, and the trust someone needs before booking a visit to their location.',
    benefits: [
      {
        icon: Car,
        title: 'Vehicle issues are not always qualified clearly enough at first contact',
        description:
          'Faults, symptoms, urgency, and whether the work is suitable for mobile service often arrive through one loose path.',
        iconType: 'primary' as const,
      },
      {
        icon: MapPinned,
        title: 'Service-area and location fit create friction',
        description:
          'Travel range, postcode fit, parking context, and visit practicality sit in different places — the booking flow slows before it should.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Arrival timing and follow-up depend too much on manual coordination',
        description:
          'Arrival updates, next-step messaging, and review requests often depend on memory when the operator is already in the field.',
        iconType: 'accent' as const,
      },
      {
        icon: Search,
        title: 'Trust signals need to work harder without a fixed workshop presence',
        description:
          'Reviews, service pages, mobile coverage details, and local visibility exist in different places — they rarely reinforce one another strongly enough.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'System Layers',
    title: 'The working layers behind a steadier mobile mechanic workflow',
    description:
      'A stronger mobile mechanic setup supports service qualification, area routing, on-site booking, arrival communication, and review follow-up without adding more operational noise.',
    featureCategories: [
      {
        title: 'Lead capture and qualification layer',
        description:
          'Routes callouts, diagnostics, and routine servicing through a clearer first-contact path so the right jobs reach the right next step.',
        icon: MessageSquare,
        features: [
          'Vehicle issue qualification',
          'Mobile-service fit capture',
          'Cleaner first response',
        ],
      },
      {
        title: 'Area and booking layer',
        description:
          'Moves service-area fit, timing, and callout booking into a booked next step without unnecessary back-and-forth.',
        icon: Calendar,
        features: ['Area qualification', 'Callout scheduling', 'Clear next-step guidance'],
      },
      {
        title: 'Arrival and visit layer',
        description:
          'Delivers arrival updates, visit preparation, and handoff details consistently so the day runs more calmly.',
        icon: Bell,
        features: ['Arrival communication', 'Visit guidance', 'Cleaner appointment communication'],
      },
      {
        title: 'Trust and proof layer',
        description:
          'Connects reviews, mobile-service credibility, and proof of work so they support local booking decisions before the visit.',
        icon: ShieldCheck,
        features: ['Review requests', 'Proof-of-work support', 'Trust-led page structure'],
      },
      {
        title: 'Local visibility layer',
        description:
          'Reinforces the mobile work you want through coverage pages, maps visibility, and service-area clarity.',
        icon: Search,
        features: [
          'Local area targeting',
          'Coverage-page clarity',
          'Google Business Profile support',
        ],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'Operational Shift',
    title: 'From reactive mobile callouts to a steadier booking and follow-up flow',
    description:
      'The hands-on work stays mobile. The repeatable friction around enquiry routing, area qualification, and follow-up gets reduced.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'Before the workflow is structured',
        items: [
          'Callout leads arrive without enough detail to route them quickly',
          'Area fit and visit timing depend on manual back-and-forth',
          'Arrival updates and follow-up happen inconsistently',
          'Trust depends too heavily on one-off reassurance during the booking process',
        ],
      },
      {
        type: 'after' as const,
        title: 'After the workflow is aligned',
        items: [
          'New leads move into the right callout or service path faster',
          'Booking and arrival flow protect the next step more consistently',
          'Review follow-up happens with less manual chasing',
          'Coverage clarity, local proof, and page structure support better decision confidence',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Lead To Booking Flow',
    title:
      'How the mobile mechanic workflow moves from first enquiry to booked visit and follow-up',
    description:
      'How the system moves mobile service demand from first contact into the right callout or booking path — then into consistent arrival communication and follow-up.',
    packages: [
      {
        name: 'Lead capture and routing',
        description:
          'Routes diagnostics, callouts, and routine enquiries into a clearer first step — so the right details reach the operator faster.',
        price: 'Flow stage 1',
        priceDetail: 'Best when lead quality and first-contact clarity are the main issue',
        features: ['Mobile-service pages', 'Better enquiry capture', 'Area and vehicle context'],
      },
      {
        name: 'Area qualification and booking flow',
        description:
          'Adds steadier scheduling, clearer arrival messaging, and better control over the next step.',
        price: 'Flow stage 2',
        priceDetail: 'Best when service-area fit and booking create friction',
        features: [
          'Callout scheduling support',
          'Arrival and reminder structure',
          'Visit path clarity',
        ],
        popular: true,
      },
      {
        name: 'Follow-up and trust reinforcement',
        description:
          'Keeps reviews, repeat-service prompts, and completed-job proof moving more reliably.',
        price: 'Flow stage 3',
        priceDetail: 'Best when follow-up consistency and trust-building are the pressure points',
        features: [
          'Review request workflows',
          'Repeat-service prompts',
          'Local proof reinforcement',
        ],
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Follow-Up Examples',
    title: 'What the mobile mechanic lead, booking, and follow-up flow looks like in practice',
    description:
      'Repeatable situations where a structured mobile setup reduces friction — without making the business feel scripted.',
    workflows: [
      {
        trigger:
          'A driver needs help and wants to know whether the issue and location are suitable for a mobile visit.',
        actions: [
          'Capture the right issue, urgency, and area context early',
          'Route the enquiry into the right callout or booking path',
          'Reduce wasted time on unclear first contact',
        ],
      },
      {
        trigger:
          'A visit is booked and the business needs to confirm timing, arrival expectations, and the next step clearly.',
        actions: [
          'Move the lead into a booked visit slot',
          'Send reminders and arrival guidance',
          'Keep internal handoff cleaner between schedule and field work',
        ],
      },
      {
        trigger:
          'The job is complete and the business wants to support reviews and repeat service more consistently.',
        actions: [
          'Send a well-timed review request',
          'Prompt the right next service path',
          'Keep repeat demand moving more reliably',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'mobile-mechanics-workflow-examples',
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
      'Relevant service layers for mobile mechanics that want cleaner callout flow, steadier arrival communication, and stronger local trust support.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description:
          'See the core system layer that holds mobile enquiry, booking, and follow-up together.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'Booking & Scheduling System',
        description: 'Support callouts, reminders, and clearer next-step handling.',
        href: '/services/booking-scheduling-system',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen service-area visibility, maps trust, and local discovery.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description: 'Turn completed work into stronger proof and review flow.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Common questions about mobile mechanic systems',
    description: 'Common questions about MindWP for mobile mechanics',
    faqs: [
      {
        question: 'How can a mobile mechanic get more qualified bookings from a website?',
        answer:
          'Clearer mobile services, easier coverage-area guidance, and obvious next steps reduce confusion before the visit — which directly improves booking quality.',
      },
      {
        question: 'Should mobile mechanics show service areas clearly online?',
        answer:
          'Yes. Clear service-area guidance reduces wasted enquiries and helps customers understand whether the business is the right fit before they call or book.',
      },
      {
        question: 'How can mobile mechanics reduce missed calls and slow callbacks?',
        answer:
          'Missed calls become expensive when the operator is already on the road or with another vehicle. A better enquiry system can capture requests through multiple paths, support missed-enquiry recovery, and make the first reply clearer even when nobody can answer immediately.',
      },
      {
        question: 'Do mobile mechanics need separate pages for different services?',
        answer:
          'Often, yes, as long as the pages reflect real service coverage and useful information. Good service-page structure helps local visibility and also helps prospects feel confident that the operator can handle their problem.',
      },
      {
        question: 'How should mobile mechanics handle review follow-up?',
        answer:
          'Calm, well-timed follow-up that makes leaving a review simple and natural after the work is complete. The aim is clarity and consistency — not pressure.',
      },
      {
        question: 'What kind of trust signals matter most for mobile mechanics?',
        answer:
          'The most useful trust signals help future customers feel confident about reliability, communication, and the quality of the work. A structured review request process and clear service-area pages help build that proof more consistently.',
      },
    ],
  };

  return {
    slug: 'mobile-mechanics',
    industries: ['mobile-mechanic'],
    systems: [
      'smart-website-systems',
      'ai-lead-handling',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['lead-routing', 'lead-response-time', 'local-visibility'],
    type: 'detail',
    parentSlug: 'automotive-services',
    seo: {
      title: 'Mobile Mechanics — Smart Website Systems | MindWP',
      description:
        'Smart Website systems for mobile mechanics that need clearer callout routing, booking support, and stronger local trust.',
      keywords: [
        'mobile mechanic website design',
        'mobile mechanic booking system',
        'mobile mechanic marketing system',
        'mobile mechanic seo services',
        'mobile mechanic reputation management system',
      ],
      canonical: '/industries/automotive-services/mobile-mechanics',
    },
    hero: {
      ...heroData,
      primaryAction: {
        label: 'Capture More Service Calls',
        href: buildContactHref({
          system: 'smart-website-systems',
          sourceType: 'industry',
          slug: 'mobile-mechanics',
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
      title: 'Build a steadier mobile mechanic callout and follow-up system',
      description:
        'If your mobile service business is dealing with unclear area fit, loose booking, or inconsistent arrival communication — we can map a practical system around how the work actually runs.',
      primaryAction: {
        variant: 'white',
        label: 'Capture More Service Calls',
        href: buildContactHref({
          system: 'smart-website-systems',
          sourceType: 'industry',
          slug: 'mobile-mechanics',
        }),
      },
      secondaryAction: {
        label: 'See Automotive Services',
        href: '/industries/automotive-services',
      },
    },
  };
}

export const mobileMechanicsIndustryPageData: IndustryPageData =
  buildMobileMechanicsIndustryPageData();
