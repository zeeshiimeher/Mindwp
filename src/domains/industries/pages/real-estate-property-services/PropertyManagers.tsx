import {
  Bell,
  Calendar,
  Home,
  MessageSquare,
  Search,
  ShieldCheck,
  Star,
  Users,
  Workflow,
  Wrench,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildPropertyManagersIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'Coverage Lane',
    title: 'Smart Website Systems for Property Managers',
    description:
      'A property management website should support owner enquiries, tenant communication, maintenance request handling, leasing flow, and follow-up — without forcing the team to manage every touchpoint manually.',
    list: [
      'Clearer owner and tenant routing',
      'Better maintenance request flow',
      'Stronger communication visibility',
      'More reliable follow-up and trust support',
    ],
    cssPrefix: 'property-managers-hero',
  };

  const imageStripData = {
    badge: 'Service Environment',
    title:
      'Property management demand depends on organised communication, service coordination, and next-step clarity across multiple stakeholders',
    description:
      'Owner enquiries, tenant requests, maintenance coordination, leasing questions, inspection timing, and review follow-up all compete for attention. When those paths feel disconnected, the business absorbs avoidable friction every day.',
    items: [
      {
        title: 'Owner and management enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing property management owner enquiries',
      },
      {
        title: 'Tenant requests and communication',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing tenant communication and requests',
      },
      {
        title: 'Maintenance and scheduling flow',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing property maintenance coordination',
      },
      {
        title: 'Trust, reviews, and follow-up',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing property management follow-up and trust signals',
      },
    ],
    backgroundColor: 'bg-white',
    cssPrefix: 'property-managers-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Operating Patterns',
    title: 'Where property managers lose clarity, time, or service confidence first',
    description:
      'The pressure comes from overlap between owner expectations, tenant needs, maintenance coordination, and communication follow-through. When the workflow is unclear, the team ends up chasing status instead of managing the process.',
    benefits: [
      {
        icon: Users,
        title: 'Owner and tenant requests often arrive through the same loose entry path',
        description:
          'Different priorities, urgency levels, and next steps land in one general inbox — routing and response quality drop when everything arrives through the same path.',
        iconType: 'primary' as const,
      },
      {
        icon: Wrench,
        title:
          'Maintenance requests create friction when scope, urgency, and status are not clear early',
        description:
          'Small issues, urgent repairs, contractor coordination, and inspection timing all become harder to manage when the first request lacks structure.',
        iconType: 'secondary' as const,
      },
      {
        icon: Bell,
        title: 'Communication follow-up depends too much on manual reminders',
        description:
          'Updates to owners, tenants, and internal staff often become inconsistent when the workflow depends on memory rather than visible next steps.',
        iconType: 'accent' as const,
      },
      {
        icon: Home,
        title: 'Trust is shaped by how organised the process feels, not just the final outcome',
        description:
          'People judge the service by response speed, communication clarity, and whether they understand what is happening next.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'System Layers',
    title: 'The working layers behind a steadier property management operation',
    description:
      'A property management workflow needs structure before a request is submitted, while service coordination is active, and after a job or enquiry needs follow-up — the website should make that operating path easier to manage.',
    featureCategories: [
      {
        title: 'Enquiry and routing layer',
        description:
          'Routes owner, tenant, leasing, and service requests through clearer first-contact paths so the right issue reaches the right next step faster.',
        icon: MessageSquare,
        features: [
          'Intent-specific routing',
          'Cleaner first response',
          'Request capture with context',
        ],
      },
      {
        title: 'Scheduling and coordination layer',
        description:
          'Moves maintenance visits, inspections, and follow-up timing through a clearer booking and update structure.',
        icon: Calendar,
        features: ['Visit coordination', 'Status updates', 'Reminder support'],
      },
      {
        title: 'Communication visibility layer',
        description:
          'Gives owners and tenants visibility into what is happening without the team rewriting the same updates manually every time.',
        icon: Workflow,
        features: ['Communication flow', 'Internal visibility', 'Next-step guidance'],
      },
      {
        title: 'Trust and proof layer',
        description:
          'Reinforces trust through reviews, process clarity, and service proof — reducing hesitation before an owner enquires or a resident escalates.',
        icon: ShieldCheck,
        features: ['Review requests', 'Trust-led service pages', 'Clear expectation setting'],
      },
      {
        title: 'Local visibility layer',
        description:
          'Supports the areas and property types you actually manage through search visibility and location clarity.',
        icon: Search,
        features: ['Area-page targeting', 'Local search support', 'Service-area clarity'],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'Operational Shift',
    title: 'From reactive communication to a more structured property service flow',
    description:
      'The service relationships stay personal. The repeatable friction around requests, coordination, updates, and trust gets reduced.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'Before the workflow is structured',
        items: [
          'Owner and tenant requests arrive without enough context to route them quickly',
          'Maintenance coordination depends on manual clarification and repeated status checking',
          'Follow-up and updates become inconsistent during busy periods',
          'Trust depends too heavily on one-off reassurance instead of a visible process',
        ],
      },
      {
        type: 'after' as const,
        title: 'After the workflow is aligned',
        items: [
          'Requests move into the right path with clearer intent and urgency',
          'Visits, repairs, and inspections are easier to coordinate and follow through',
          'Communication and reminder flow protect service confidence more consistently',
          'Reviews, service clarity, and local proof support stronger trust before and after contact',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Lead To Service Flow',
    title:
      'How the property management workflow moves from first contact to coordination and follow-up',
    description:
      'How a structured setup moves owner enquiries, tenant requests, and service coordination into the right next step — without making the team improvise every handoff.',
    packages: [
      {
        name: 'Request capture and routing',
        description:
          'Routes owner, tenant, leasing, and maintenance intake into clearer paths before the team acts.',
        price: 'Flow stage 1',
        priceDetail: 'Best when first-contact clarity and request quality are the main problem',
        features: [
          'Intent-specific service pages',
          'Better request capture',
          'Urgency and context signals',
        ],
        buttonText: 'Talk Through Scope',
        buttonHref: '/contact',
      },
      {
        name: 'Coordination and update flow',
        description:
          'Adds steadier scheduling, clearer updates, and better control over the service path after the first request.',
        price: 'Flow stage 2',
        priceDetail:
          'Best when maintenance, inspection, or communication handling creates friction',
        features: ['Scheduling support', 'Reminder structure', 'Status visibility'],
        popular: true,
        buttonText: 'See the Setup',
        buttonHref: '/contact',
      },
      {
        name: 'Follow-up and trust reinforcement',
        description:
          'Keeps owner confidence, resident communication, and review support moving in a more reliable way.',
        price: 'Flow stage 3',
        priceDetail: 'Best when service confidence and long-tail follow-up are the pressure points',
        features: ['Communication workflows', 'Review request support', 'Trust reinforcement'],
        buttonText: 'Request Details',
        buttonHref: '/contact',
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Follow-Up Examples',
    title: 'What the property management lead, service, and follow-up flow looks like in practice',
    description:
      'Repeatable situations where a structured property management setup reduces friction — without making the business feel rigid.',
    workflows: [
      {
        trigger:
          'A new owner enquiry arrives and the business needs to identify whether the conversation is about management, leasing support, or a specific operational issue before booking the next step.',
        actions: [
          'Capture the right intent and property context early',
          'Route the enquiry into the right consultation or service path',
          'Reduce wasted time on unclear first contact',
        ],
      },
      {
        trigger:
          'A tenant or maintenance request comes in and the team needs to confirm urgency, responsibility, and the next step clearly.',
        actions: [
          'Move the request into the right coordination path',
          'Send clearer updates and reminder touchpoints',
          'Keep internal handoff cleaner between request intake and service follow-through',
        ],
      },
      {
        trigger:
          'The issue is resolved and the business wants to maintain confidence without relying on ad hoc follow-up each time.',
        actions: [
          'Send measured follow-up at the right time',
          'Keep service status and next-step visibility clearer',
          'Support trust with reviews and process clarity when appropriate',
        ],
      },
    ],
    backgroundColor: 'bg-white',
    cssPrefix: 'property-managers-workflow-examples',
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
      'Relevant service layers for property managers that need clearer communication, steadier coordination, and stronger trust support.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description:
          'See the core system layer that holds property enquiries, coordination flow, and follow-up together.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'Booking & Scheduling System',
        description: 'Support inspections, visits, reminders, and clearer next-step handling.',
        href: '/services/booking-scheduling-system',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description:
          'Strengthen service-area visibility, location credibility, and property discovery support.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description:
          'Turn completed service coordination into stronger trust proof and review flow.',
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
    title: 'Common questions about property management systems',
    description: 'Common questions about MindWP for property managers',
    faqs: [
      {
        question:
          'How can a property management company get better-quality enquiries from a website?',
        answer:
          'Separating owner enquiries, tenant requests, leasing questions, and maintenance issues more clearly is the first step. Better routing improves when the website helps people choose the right path instead of sending every request through one generic form.',
      },
      {
        question: 'Should property managers let tenants submit maintenance requests online?',
        answer:
          'Yes — if the request path captures the right context early. Good request structure helps the team understand urgency, property details, and responsibility before the issue turns into repeated back-and-forth.',
      },
      {
        question: 'How do property managers reduce communication delays and missed follow-up?',
        answer:
          'The main improvement comes from making request status, reminders, and next steps more visible. When follow-up depends only on memory, delays become normal during busy periods.',
      },
      {
        question: 'Do property managers need separate pages for owners, tenants, and leasing?',
        answer:
          'Often, yes, when those are genuinely different service paths. Clearer page structure helps local visibility and also helps visitors understand that the business can handle their specific situation.',
      },
      {
        question: 'What kind of reviews matter most for property managers?',
        answer:
          'The most useful reviews reinforce communication quality, organisation, response speed, and the feeling that issues were handled properly. A structured review request process can help that proof build more consistently over time.',
      },
      {
        question:
          'Can a Smart Website system help property managers without replacing their management software?',
        answer:
          'Yes. The system improves how enquiries, requests, appointments, and follow-up move through the public-facing side of the business — so the operational flow starts in a better place without replacing internal software.',
      },
    ],
  };

  return {
    slug: 'property-managers',
    industries: ['property-management'],
    systems: [
      'smart-website-systems',
      'crm-automation',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['lead-routing', 'crm-pipeline', 'pipeline-visibility'],
    type: 'detail',
    parentSlug: 'real-estate-property-services',
    seo: {
      title: 'Property Managers — Smart Website Systems | MindWP',
      description:
        'Smart Website systems for property managers that need clearer owner and tenant routing, service coordination, and stronger trust flow.',
      keywords: [
        'property management website design',
        'property management lead handling system',
        'tenant maintenance request workflow',
        'property management seo services',
        'property management review system',
      ],
      canonical: '/industries/real-estate-property-services/property-managers',
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
      title: 'Build a steadier property management request and follow-up system',
      description:
        'If your property management business is dealing with unclear request routing, maintenance coordination friction, or inconsistent communication updates — we can map a practical system around how the operation actually runs.',
      primaryAction: { variant: 'white', label: 'Start a Conversation', href: '/contact' },
      secondaryAction: {
        label: 'See Real Estate & Property Services',
        href: '/industries/real-estate-property-services',
      },
    },
  };
}

export const propertyManagersIndustryPageData: IndustryPageData =
  buildPropertyManagersIndustryPageData();
