import {
  Calendar,
  Clock3,
  Droplets,
  MapPinned,
  MessageSquare,
  Search,
  ShieldCheck,
  Star,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildPlumbingCompaniesIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'Primary Lane',
    title: 'Smart Website Systems for Plumbing',
    description:
      'A plumbing website should handle urgent calls, route the right service requests, support estimate or booking next steps, and keep follow-up moving — without relying on constant manual chasing.',
    list: [
      'Clearer emergency routing',
      'Better booking and dispatch support',
      'Consistent quote follow-up',
      'Reliable local trust signals',
    ],
    cssPrefix: 'plumbing-companies-hero',
  };

  const imageStripData = {
    badge: 'Service Environment',
    title: 'Plumbing demand often combines urgency, disruption, and trust pressure',
    description:
      'Leaks, blocked drains, boiler issues, installations, and emergency callouts all need a clear first-contact path. When those steps stay loose, the office and field team absorb the confusion instead.',
    items: [
      {
        title: 'Emergency plumbing enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing emergency plumbing enquiries',
      },
      {
        title: 'Booked repairs and visits',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing booked plumbing visits',
      },
      {
        title: 'Quotes and installation decisions',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing plumbing quotes and installation decisions',
      },
      {
        title: 'Reviews and local proof',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing plumbing reviews and local proof',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'plumbing-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Operating Patterns',
    title: 'Where plumbing businesses lose time, clarity, or lead quality',
    description:
      'The gap is between urgent demand, service routing, appointment handling, and the trust signals people need before they call.',
    benefits: [
      {
        icon: Droplets,
        title: 'Urgent calls land without enough detail',
        description:
          'Leaks, blockages, and breakdowns arrive with pressure, but the first contact may not capture enough detail to route the job well.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Booking and dispatch handoffs create friction',
        description:
          'Repair visits, scheduled jobs, and installation quotes do not move through one clear path from request to booked next step.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Quotes and pending jobs are hard to follow',
        description:
          'After the visit, follow-up becomes uneven when crews move on and the next step depends on manual reminders.',
        iconType: 'accent' as const,
      },
      {
        icon: MapPinned,
        title: 'Local trust signals miss the right jobs',
        description:
          'Reviews, service pages, emergency messaging, and local coverage all exist but do not reinforce the plumbing work you most want.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'System Layers',
    title: 'The working layers behind a steadier plumbing pipeline',
    description:
      'The system supports urgent enquiries, booked repairs, quote follow-up, and review collection without making the business feel over-automated.',
    featureCategories: [
      {
        title: 'Urgent request layer',
        description:
          'Routes emergency jobs and fast-response requests into a cleaner first-contact path so the business can respond properly.',
        icon: MessageSquare,
        features: ['Urgency capture', 'Service-type routing', 'Cleaner first response'],
      },
      {
        title: 'Booking and visit layer',
        description:
          'Structures scheduled jobs, repair visits, and callback timing between first contact and the appointment itself.',
        icon: Calendar,
        features: ['Visit scheduling', 'Reminder timing', 'Clear next-step guidance'],
      },
      {
        title: 'Quote and install layer',
        description:
          'Keeps larger plumbing jobs and installs visible with calmer follow-up after the first visit so opportunities do not go quiet.',
        icon: Workflow,
        features: ['Quote follow-up', 'Decision support', 'Pipeline visibility'],
      },
      {
        title: 'Trust and proof layer',
        description:
          'Connects reviews and proof of reliable service to the local buying decision before and after the call.',
        icon: ShieldCheck,
        features: [
          'Review request workflows',
          'Trust-building proof',
          'Service credibility support',
        ],
      },
      {
        title: 'Local visibility layer',
        description:
          'Aligns service pages, emergency intent, and area coverage to reinforce the kinds of plumbing work you want.',
        icon: Search,
        features: [
          'Local service-page alignment',
          'Area targeting',
          'Maps and search reinforcement',
        ],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'Operational Shift',
    title: 'From reactive plumbing lead handling to a clearer booking and follow-up flow',
    description:
      'The practical knowledge stays. The repeatable friction around urgent routing, booking, and follow-up gets reduced.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'Before the workflow is structured',
        items: [
          'Urgent enquiries arrive without enough detail to route them confidently',
          'Repair visits and quotes depend on manual back-and-forth',
          'Pending jobs are harder to follow consistently',
          'Trust depends too much on one-off reassurance during the sales process',
        ],
      },
      {
        type: 'after' as const,
        title: 'After the workflow is aligned',
        items: [
          'New leads move into the right service path faster',
          'Booking and reminder flow protect the next step more consistently',
          'Quotes and pending jobs stay visible with less manual chasing',
          'Reviews and local proof reinforce stronger decision confidence',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Lead To Booking Flow',
    title: 'From first contact to booked work and follow-up',
    description:
      'Each stage moves plumbing demand through a specific part of the journey — from first enquiry into the right job path, then into clearer next-step handling.',
    packages: [
      {
        name: 'Urgent lead capture and routing',
        description:
          'Routes emergency, repair, and routine service requests into the right path with enough context for a clear first step.',
        price: 'Flow stage 1',
        priceDetail: 'Best when first-contact clarity and service routing are the main issue',
        features: [
          'Service-specific request paths',
          'Urgency capture',
          'Cleaner lead qualification',
        ],
      },
      {
        name: 'Booking and visit protection',
        description:
          'Adds steadier appointment booking, reminder support, and clearer handoffs so visits move forward without friction.',
        price: 'Flow stage 2',
        priceDetail: 'Best when booking friction and loose handoffs are the pressure points',
        features: ['Visit scheduling support', 'Reminder structure', 'Appointment-path clarity'],
        popular: true,
      },
      {
        name: 'Quote and review follow-up',
        description:
          'Keeps pending jobs, quotes, and completed work moving through a reliable follow-up and review path.',
        price: 'Flow stage 3',
        priceDetail: 'Best when follow-up consistency and trust-building need improvement',
        features: [
          'Quote follow-up workflows',
          'Review request support',
          'Post-job trust reinforcement',
        ],
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Follow-Up Examples',
    title: 'What the plumbing lead, booking, and follow-up flow looks like in practice',
    description:
      'Repeatable situations where the system reduces friction without making the business feel scripted.',
    workflows: [
      {
        trigger:
          'A homeowner needs urgent help with a leak or blockage and wants to know if the business can respond quickly.',
        actions: [
          'Capture urgency and job type early',
          'Route the lead into the right service path',
          'Reduce wasted time on unclear first contact',
        ],
      },
      {
        trigger:
          'A repair or visit is being booked and timing, expectations, and next steps need confirming.',
        actions: [
          'Move the request into a booked visit',
          'Send reminders and next-step guidance',
          'Support cleaner internal handoff',
        ],
      },
      {
        trigger:
          'A quote or larger plumbing job is still pending and the business wants to follow up without chasing manually.',
        actions: [
          'Send measured follow-up at the right times',
          'Keep the opportunity visible internally',
          'Support the decision with reviews and trust signals if needed',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'plumbing-workflow-examples',
  };

  const exploreData = {
    badge: 'Explore',
    description:
      'Relevant service layers for plumbing companies that want cleaner booking, better response handling, and stronger local trust.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description:
          'See the core system layer that holds plumbing demand, booking, and follow-up together.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'Booking & Scheduling System',
        description: 'Support visits, reminders, and clearer next-step handling.',
        href: '/services/booking-scheduling-system',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen local plumbing visibility and service-area trust.',
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
    title: 'Common questions about plumbing systems',
    description: 'Common questions about MindWP for plumbing companies',
    faqs: [
      {
        question: 'How can a plumbing company get better local enquiries from its website?',
        answer:
          'Make service pages specific around emergency plumbing, repairs, drains, boilers, installs, and the areas you serve. Then simplify the first contact path so people can describe the issue quickly and see a clear next step.',
      },
      {
        question: 'Should plumbing businesses offer online booking?',
        answer:
          'Yes, especially for routine visits or clearer service types. The important part is making sure the request path captures enough detail to route the job properly and avoid unnecessary back-and-forth.',
      },
      {
        question: 'How can plumbers reduce missed emergency opportunities?',
        answer:
          'Missed opportunities happen when urgent calls come in while the team is busy and there is no backup path. Better enquiry capture, clearer service routing, and stronger missed-call handling protect those leads.',
      },
      {
        question: 'Do plumbing companies need separate pages for different plumbing jobs?',
        answer:
          'Yes. Separate pages for different service types help visitors and search engines understand the work you do. They also route people into the right booking or quote path instead of forcing everything through one generic page.',
      },
      {
        question: 'How should plumbing businesses follow up on quotes?',
        answer:
          'Calm, well-timed follow-up that confirms the next step, keeps the opportunity visible, and makes it easy for the prospect to reply. The aim is consistency, not pressure.',
      },
      {
        question: 'What kind of reviews matter most for plumbers?',
        answer:
          'Reviews that mention reliability, communication, and quality of work carry the most weight. A consistent review-request process after completed jobs builds that proof over time.',
      },
    ],
  };

  return {
    slug: 'plumbing-companies',
    industries: ['plumbing'],
    systems: [
      'smart-website-systems',
      'ai-lead-handling',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['emergency-handling', 'service-reminders', 'feedback-loops'],
    type: 'detail',
    parentSlug: 'home-services',
    seo: {
      title: 'Plumbing — Smart Website Systems | MindWP',
      description:
        'Smart Website systems for plumbing companies that need clearer emergency routing, booking support, and stronger follow-up.',
      keywords: [
        'plumbing website design',
        'plumbing lead generation website',
        'plumbing marketing system',
        'plumbing lead automation system',
        'plumbing reputation management system',
      ],
      canonical: '/industries/home-services/plumbing-companies',
    },
    hero: {
      ...heroData,
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
      title: 'Build a steadier plumbing system',
      description:
        'If loose emergency routing, booking friction, inconsistent quote follow-up, or weak local proof are slowing things down, we can map a practical system around how the work actually runs.',
      secondaryAction: {
        label: 'See Home Services',
        href: '/industries/home-services',
      },
    },
  };
}

export const plumbingCompaniesIndustryPageData: IndustryPageData =
  buildPlumbingCompaniesIndustryPageData();
