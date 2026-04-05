import {
  Bell,
  Calendar,
  Clock3,
  MapPinned,
  MessageSquare,
  Search,
  Star,
  Thermometer,
  Workflow,
  Wrench,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildHvacCompaniesIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'Primary Lane',
    title: 'Smart Website Systems for HVAC',
    description:
      'An HVAC website should support urgent calls, service booking, seasonal demand swings, and ongoing maintenance follow-up — without turning the office into a constant interruption loop.',
    list: [
      'Clearer service booking',
      'Better seasonal lead handling',
      'Consistent maintenance follow-up',
      'Reliable local trust signals',
    ],
    cssPrefix: 'hvac-companies-hero',
  };

  const imageStripData = {
    badge: 'Service Environment',
    title: 'HVAC demand can swing between emergency urgency and longer-term service planning',
    description:
      'Breakdowns, tune-ups, installs, seasonal surges, and maintenance reminders all shape the workflow. When those paths stay manual, response quality starts depending too much on who is available.',
    items: [
      {
        title: 'Emergency heating and cooling calls',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing urgent HVAC calls',
      },
      {
        title: 'Service and tune-up scheduling',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing HVAC scheduling',
      },
      {
        title: 'Install and estimate decisions',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing HVAC estimate decisions',
      },
      {
        title: 'Maintenance follow-up',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing HVAC maintenance follow-up',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'hvac-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Operating Patterns',
    title: 'Where HVAC businesses lose time, capacity, or repeat demand',
    description:
      'The strain comes from seasonality, urgency, and the need to support both first-time service calls and longer-term maintenance relationships.',
    benefits: [
      {
        icon: Thermometer,
        title: 'Seasonal urgency overloads the response path',
        description:
          'Peak heat or cold periods create call spikes that are hard to answer and route consistently when the team is already stretched.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Service and tune-up booking becomes fragmented',
        description:
          'Repairs, installations, tune-ups, and maintenance visits do not move through one clear scheduling path.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Maintenance follow-up depends on memory',
        description:
          'Recurring service reminders and post-job follow-up happen inconsistently when they are not supported by a working system.',
        iconType: 'accent' as const,
      },
      {
        icon: MapPinned,
        title: 'Local visibility and trust miss the right service intent',
        description:
          'Emergency service pages, install pages, reviews, and maps visibility all exist but do not reinforce the right demand.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'System Layers',
    title: 'The working layers behind a steadier HVAC workflow',
    description:
      'The system supports urgent calls, scheduled service, estimates, and recurring maintenance without making everything depend on manual coordination.',
    featureCategories: [
      {
        title: 'Emergency and service request layer',
        description:
          'Routes heating and cooling issues into a cleaner first-contact path so the business can respond faster and direct calls appropriately.',
        icon: MessageSquare,
        features: ['Service-type capture', 'Urgency routing', 'Cleaner first response'],
      },
      {
        title: 'Scheduling and reminder layer',
        description:
          'Structures repairs, tune-ups, estimates, and installs around clearer booking and reminder steps.',
        icon: Calendar,
        features: ['Service scheduling', 'Reminder timing', 'Appointment clarity'],
      },
      {
        title: 'Maintenance follow-up layer',
        description:
          'Delivers recurring service reminders and post-visit communication to keep demand steadier over time.',
        icon: Bell,
        features: ['Maintenance reminders', 'Post-service follow-up', 'Repeat-demand support'],
      },
      {
        title: 'Estimate and install layer',
        description:
          'Guides install enquiries and replacement decisions through a calmer path from initial interest into estimate and follow-up.',
        icon: Wrench,
        features: ['Install enquiry routing', 'Estimate support', 'Decision follow-up'],
      },
      {
        title: 'Trust and visibility layer',
        description:
          'Aligns reviews, emergency service pages, and local search visibility to reinforce the services and areas you want.',
        icon: Search,
        features: [
          'Local service-page alignment',
          'Review support',
          'Google Business Profile reinforcement',
        ],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'Operational Shift',
    title: 'From reactive HVAC scheduling to a calmer service and maintenance flow',
    description:
      'The human side of service stays. The repeatable friction around scheduling, seasonal response, and follow-up gets reduced.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'Before the workflow is structured',
        items: [
          'Peak-season demand overwhelms calls and messages',
          'Repairs, tune-ups, and install enquiries arrive without clean routing',
          'Maintenance follow-up happens inconsistently',
          'Local trust depends too much on manual reassurance and fragmented proof',
        ],
      },
      {
        type: 'after' as const,
        title: 'After the workflow is aligned',
        items: [
          'New enquiries move into the right service path faster',
          'Booking and reminder flow protect appointments more consistently',
          'Maintenance follow-up helps create steadier repeat demand',
          'Reviews and service-page structure support better local trust',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Lead To Booking Flow',
    title: 'From first contact to service, estimate, and follow-up',
    description:
      'Each stage moves HVAC demand through a specific part of the journey — from the first request into the right service path, then into better maintenance follow-up.',
    packages: [
      {
        name: 'Service request and routing',
        description:
          'Routes repairs, tune-ups, emergencies, and install enquiries into the right booking path with enough context to respond well.',
        price: 'Flow stage 1',
        priceDetail: 'Best when the first-contact path is unclear or overloaded',
        features: [
          'Service-specific pages',
          'Request qualification',
          'Better first-response clarity',
        ],
        buttonText: 'Talk Through Scope',
        buttonHref: '/contact',
      },
      {
        name: 'Scheduling and appointment protection',
        description:
          'Adds steadier booking, reminders, and clearer next-step handling so busy periods do not create avoidable friction.',
        price: 'Flow stage 2',
        priceDetail: 'Best when scheduling friction and missed handoffs are the pressure points',
        features: ['Service scheduling support', 'Reminder structure', 'Cleaner appointment flow'],
        popular: true,
        buttonText: 'See the Setup',
        buttonHref: '/contact',
      },
      {
        name: 'Maintenance and follow-up support',
        description:
          'Keeps repeat-service demand, review flow, and install follow-up moving with less manual effort.',
        price: 'Flow stage 3',
        priceDetail: 'Best when recurring demand and post-service follow-up need more consistency',
        features: [
          'Maintenance reminders',
          'Review request support',
          'Install and service follow-up',
        ],
        buttonText: 'Request Details',
        buttonHref: '/contact',
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Follow-Up Examples',
    title: 'What the HVAC lead, booking, and follow-up flow looks like in practice',
    description:
      'Repeatable situations where the system reduces interruption and supports steadier service demand.',
    workflows: [
      {
        trigger:
          'A homeowner needs urgent heating or cooling help and wants to know how fast the business can respond.',
        actions: [
          'Capture urgency and service type',
          'Route the request into the right service path',
          'Reduce confusion around the next step',
        ],
      },
      {
        trigger:
          'A tune-up or repair is being booked and timing and appointment details need confirming.',
        actions: [
          'Move the enquiry into a booked appointment',
          'Send reminders at the right times',
          'Support cleaner internal scheduling',
        ],
      },
      {
        trigger:
          'A job is complete and the company wants to support reviews and recurring maintenance without chasing manually.',
        actions: [
          'Send a well-timed review request',
          'Prompt the right maintenance follow-up',
          'Keep repeat-service demand moving more reliably',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'hvac-workflow-examples',
  };

  const exploreData = {
    badge: 'Explore',
    description:
      'Relevant service layers for HVAC companies that want cleaner booking, better seasonal response, and stronger follow-up.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description:
          'See the core system layer that holds HVAC service demand, booking, and follow-up together.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'Booking & Scheduling System',
        description: 'Support service booking, reminders, and clearer appointment handling.',
        href: '/services/booking-scheduling-system',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen emergency and maintenance visibility in local search.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description: 'Turn completed service into reviews and stronger local trust.',
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
    title: 'Common questions about HVAC systems',
    description: 'Common questions about MindWP for HVAC companies',
    faqs: [
      {
        question: 'How can an HVAC company get more qualified website enquiries?',
        answer:
          'Make service pages specific around repairs, tune-ups, installs, maintenance, and service areas. Then simplify the request path so people can submit the right request and see a clear next step. Better-qualified demand follows clearer routing.',
      },
      {
        question: 'Should HVAC companies allow online service booking?',
        answer:
          'Yes. A cleaner booking path reduces office interruptions and moves straightforward jobs into the right next step faster. The important part is capturing the right service type, urgency, and appointment context.',
      },
      {
        question: 'How can HVAC businesses manage seasonal spikes better?',
        answer:
          'Seasonal spikes are easier to handle when service requests are routed clearly, appointment steps are simple, and reminders do not rely entirely on manual effort. The aim is to stop avoidable confusion from making that pressure worse.',
      },
      {
        question: 'What is the best way for HVAC companies to build repeat maintenance demand?',
        answer:
          'Recurring maintenance improves when follow-up is timed properly and the next step is easy to understand. Reminder workflows, clearer scheduling paths, and better post-service communication all help.',
      },
      {
        question: 'Do HVAC companies need separate pages for repair, install, and maintenance?',
        answer:
          'Yes. Separate pages help visitors and search engines understand the different services you offer. They also route people into the right booking or estimate path instead of forcing every enquiry through one generic page.',
      },
      {
        question: 'How should HVAC companies handle reviews?',
        answer:
          'A consistent review-request process after completed jobs turns good service into visible trust over time. Reviews help future customers feel more confident, especially when they align with clear service pages and a strong local presence.',
      },
    ],
  };

  return {
    slug: 'hvac-companies',
    industries: ['hvac'],
    systems: [
      'smart-website-systems',
      'ai-lead-handling',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['emergency-handling', 'missed-calls', 'review-generation'],
    type: 'detail',
    parentSlug: 'home-services',
    seo: {
      title: 'HVAC — Smart Website Systems | MindWP',
      description:
        'Smart Website systems for HVAC companies that need clearer service booking, seasonal lead handling, and stronger maintenance follow-up.',
      keywords: [
        'hvac website design',
        'hvac lead generation website',
        'hvac marketing system',
        'hvac contractor website system',
        'hvac reputation management system',
      ],
      canonical: '/industries/home-services/hvac-companies',
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
    explore: exploreData,
    faq: faqData,
    cta: {
      title: 'Build a steadier HVAC system',
      description:
        'If seasonal response pressure, scheduling friction, weak maintenance follow-up, or scattered local trust signals are slowing things down, we can map a practical system around how the work actually runs.',
      primaryAction: { variant: 'white', label: 'Start a Conversation', href: '/contact' },
      secondaryAction: {
        label: 'See Home Services',
        href: '/industries/home-services',
      },
    },
  };
}

export const hvacCompaniesIndustryPageData: IndustryPageData = buildHvacCompaniesIndustryPageData();
