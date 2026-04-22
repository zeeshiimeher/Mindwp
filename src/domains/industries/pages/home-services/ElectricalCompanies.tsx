import {
  Calendar,
  Clock3,
  MapPinned,
  MessageSquare,
  Search,
  ShieldCheck,
  Star,
  Workflow,
  Zap,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildElectricalCompaniesIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'Primary Lane',
    title: 'Smart Website Systems for Electrical',
    description:
      'An electrical business website should handle urgent faults, booked jobs, estimate requests, and review follow-up — without making every new enquiry depend on whoever happens to answer first.',
    list: [
      'Clearer service routing',
      'Better booking and estimate handling',
      'Stronger trust before the call',
      'Consistent follow-up',
    ],
    cssPrefix: 'electrical-companies-hero',
  };

  const imageStripData = {
    badge: 'Service Environment',
    title: 'Electrical demand often mixes urgency, safety concerns, and higher trust requirements',
    description:
      'Faults, installations, inspections, upgrades, and commercial or domestic jobs all need a clearer first-contact path. When the workflow is loose, confidence drops on both sides of the enquiry.',
    items: [
      {
        title: 'Urgent faults and outages',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing urgent electrical faults',
      },
      {
        title: 'Booked visits and inspections',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing electrical inspections and visits',
      },
      {
        title: 'Quotes and upgrades',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing electrical quotes and upgrades',
      },
      {
        title: 'Reviews and trust signals',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing electrical reviews and trust signals',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'electrical-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Operating Patterns',
    title: 'Where electrical businesses lose time, trust, or enquiry clarity',
    description:
      'The gap is between safety-sensitive demand, service routing, job booking, and the visible trust people need before they choose who to contact.',
    benefits: [
      {
        icon: Zap,
        title: 'Urgent electrical issues arrive with higher pressure',
        description:
          'Faults and outages need fast response, but the first contact does not always capture enough detail to route the request confidently.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Booked work and estimates lack one clear path',
        description:
          'Inspections, upgrades, installs, and repair work create booking friction when the business handles each service path differently.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Follow-up around pending jobs becomes inconsistent',
        description:
          'Quotes and next-step decisions are harder to manage when the workday is full and the follow-up process is still manual.',
        iconType: 'accent' as const,
      },
      {
        icon: MapPinned,
        title: 'Trust signals miss the right services',
        description:
          'Reviews, safety credibility, service pages, and local coverage all exist but do not strengthen the electrical jobs you most want.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'System Layers',
    title: 'The working layers behind a steadier electrical workflow',
    description:
      'The system supports urgent faults, booked visits, quote decisions, and trust-building follow-up without turning the workflow into overhead.',
    featureCategories: [
      {
        title: 'Urgent request layer',
        description:
          'Routes faults, outages, and safety-related enquiries into a cleaner first-contact path so the business can respond properly.',
        icon: MessageSquare,
        features: ['Urgency capture', 'Job-type routing', 'Clearer first response'],
      },
      {
        title: 'Booking and visit layer',
        description:
          'Structures inspections, repairs, and scheduled work between first contact and the appointment itself.',
        icon: Calendar,
        features: ['Visit scheduling', 'Reminder timing', 'Clear next-step guidance'],
      },
      {
        title: 'Estimate and upgrade layer',
        description:
          'Keeps bigger electrical jobs and upgrades visible with calmer follow-up after the first visit so opportunities do not stall.',
        icon: Workflow,
        features: ['Estimate follow-up', 'Upgrade decision support', 'Pipeline visibility'],
      },
      {
        title: 'Trust and proof layer',
        description:
          'Connects reviews, proof of reliable work, and safety credibility to the local buying decision before the call happens.',
        icon: ShieldCheck,
        features: ['Review request workflows', 'Trust-building proof', 'Credibility support'],
      },
      {
        title: 'Local visibility layer',
        description:
          'Aligns service pages, emergency intent, and area coverage to reinforce the electrical work you want.',
        icon: Search,
        features: ['Local service-page alignment', 'Area targeting', 'Search reinforcement'],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'Operational Shift',
    title: 'From reactive electrical lead handling to a clearer booking and follow-up flow',
    description:
      'The expertise and safety judgement stay. The repeatable friction around lead handling, booking, and follow-up gets reduced.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'Before the workflow is structured',
        items: [
          'Urgent requests arrive without enough detail to route them confidently',
          'Booked jobs and quote paths vary too much between services',
          'Pending work is harder to follow consistently',
          'Trust depends too much on manual reassurance during the buying process',
        ],
      },
      {
        type: 'after' as const,
        title: 'After the workflow is aligned',
        items: [
          'New leads move into the right service path faster',
          'Booking and reminder flow protect the next step more consistently',
          'Quotes and pending jobs stay visible with less chasing',
          'Reviews and local proof support stronger decision confidence',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Lead To Booking Flow',
    title: 'From first contact to booked work and follow-up',
    description:
      'Each stage moves electrical demand through a specific part of the journey — from first enquiry into the right job path, then into clearer follow-up.',
    packages: [
      {
        name: 'Urgent lead capture and routing',
        description:
          'Routes faults, repairs, inspections, and routine service requests into the right path with enough context for a clear first step.',
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
          'Keeps pending jobs, upgrades, and completed work moving through a reliable follow-up and trust path.',
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
    title: 'What the electrical lead, booking, and follow-up flow looks like in practice',
    description:
      'Repeatable situations where the system reduces friction without making the business feel scripted.',
    workflows: [
      {
        trigger:
          'A property owner has an urgent electrical issue and wants to know whether the business can respond quickly and safely.',
        actions: [
          'Capture urgency and job type early',
          'Route the lead into the right service path',
          'Reduce wasted time on unclear first contact',
        ],
      },
      {
        trigger:
          'An inspection, repair, or upgrade is being booked and timing and next steps need confirming.',
        actions: [
          'Move the request into a booked visit',
          'Send reminders and clear next-step guidance',
          'Support cleaner internal handoff',
        ],
      },
      {
        trigger:
          'A quote or larger electrical job is still pending and the business wants to follow up without chasing manually.',
        actions: [
          'Send measured follow-up at the right times',
          'Keep the opportunity visible internally',
          'Support the decision with reviews and trust signals if needed',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'electrical-workflow-examples',
  };

  const exploreData = {
    badge: 'Explore',
    description:
      'Relevant service layers for electrical companies that want cleaner booking, better response handling, and stronger local trust.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description:
          'See the core system layer that holds electrical demand, booking, and follow-up together.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'Booking & Scheduling System',
        description: 'Support visits, reminders, and clearer next-step handling.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen local electrical visibility and trust.',
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
    title: 'Common questions about electrical systems',
    description: 'Common questions about MindWP for electrical companies',
    faqs: [
      {
        question: 'How can an electrical company get better local enquiries from its website?',
        answer:
          'Make service pages specific around faults, inspections, upgrades, installs, and the areas you serve. Then simplify the first contact path so people can describe the issue quickly and see a clear next step.',
      },
      {
        question: 'Should electrical businesses offer online booking?',
        answer:
          'Yes, especially for clearer service types or inspections. The important part is making sure the request captures enough detail to route the work properly and avoid wasted time later.',
      },
      {
        question: 'How can electricians reduce missed urgent opportunities?',
        answer:
          'Missed opportunities happen when urgent calls come in while the team is busy and there is no backup path. Better enquiry capture, clearer service routing, and stronger follow-up paths protect those leads.',
      },
      {
        question: 'Do electrical companies need separate pages for different services?',
        answer:
          'Yes. Separate pages help visitors and search engines understand the work you do. They also route people into the right booking or quote path instead of forcing everything through one generic page.',
      },
      {
        question: 'How should electrical businesses follow up on quotes?',
        answer:
          'Calm, well-timed follow-up that confirms the next step, keeps the opportunity visible, and makes it easy for the prospect to reply. The aim is clarity and consistency.',
      },
      {
        question: 'What kind of reviews matter most for electricians?',
        answer:
          'Reviews that mention reliability, communication, and quality of work carry the most weight. A consistent review-request process after completed jobs builds that proof over time.',
      },
    ],
  };

  return {
    slug: 'electrical-companies',
    industries: ['electrical'],
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
      title: 'Electrical — Smart Website Systems | MindWP',
      description:
        'Smart Website systems for electrical companies that need clearer service routing, booking support, and stronger follow-up.',
      keywords: [
        'electrician website design',
        'electrical contractor marketing system',
        'electrical company website system',
        'electrician lead automation system',
        'electrician reputation management system',
      ],
      canonical: '/industries/home-services/electrical-companies',
    },
    hero: {
      ...heroData,
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
      title: 'Build a steadier electrical system',
      description:
        'If loose service routing, booking friction, inconsistent quote follow-up, or weak local proof are slowing things down, we can map a practical system around how the work actually runs.',
    },
  };
}

export const electricalCompaniesIndustryPageData: IndustryPageData =
  buildElectricalCompaniesIndustryPageData();
