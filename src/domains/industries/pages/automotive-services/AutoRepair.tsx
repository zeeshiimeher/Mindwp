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

function buildAutoRepairIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'Coverage Lane',
    title: 'Smart Website Systems for Auto Repair Shops',
    description:
      'An auto repair website should support problem qualification, diagnostic booking, estimate follow-up, and local trust — without forcing the team to manage every step manually.',
    list: [
      'Clearer repair enquiries',
      'Better diagnostic booking',
      'Stronger estimate follow-up',
      'More reliable local trust',
    ],
    cssPrefix: 'auto-repair-hero',
  };

  const imageStripData = {
    badge: 'Service Environment',
    title:
      'Auto repair demand often arrives with urgency, uncertainty, and a need for trust before booking',
    description:
      'Warning lights, breakdown concerns, diagnostics, inspection needs, estimates, and review follow-up all shape the decision. When those steps feel disconnected, the front desk and workshop absorb too much uncertainty.',
    items: [
      {
        title: 'Fault and repair enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing auto repair fault enquiries',
      },
      {
        title: 'Diagnostics and booking',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing auto repair booking and diagnostics',
      },
      {
        title: 'Estimates and approvals',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing auto repair estimates and approvals',
      },
      {
        title: 'Reviews and return visits',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing auto repair reviews and return visits',
      },
    ],
    backgroundColor: 'bg-white',
    cssPrefix: 'auto-repair-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Operating Patterns',
    title: 'Where auto repair shops lose time, clarity, or momentum',
    description:
      'The gap is rarely visibility alone — it sits between vehicle problems, diagnostic booking, quote approval, and the trust proof someone needs before they commit.',
    benefits: [
      {
        icon: Car,
        title: 'Vehicle problems are not always qualified clearly enough at first contact',
        description:
          'Faults, symptoms, and urgency arrive through one loose path — first-response quality drops when everything routes the same way.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Inspection and diagnostic booking creates friction',
        description:
          'Availability, workshop timing, vehicle context, and next steps sit in different places — the booking flow slows before it should.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Estimates and pending decisions go quiet',
        description:
          'Once the vehicle has been checked, the follow-up process can become inconsistent when the team is already back under workshop pressure.',
        iconType: 'accent' as const,
      },
      {
        icon: MapPinned,
        title: 'Trust signals stay fragmented across the local decision path',
        description:
          'Reviews, service pages, workshop credibility, and local visibility exist in different places — they rarely work together to support confident booking decisions.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'System Layers',
    title: 'The working layers behind a steadier auto repair pipeline',
    description:
      'An auto repair workflow needs structure before the vehicle arrives, during diagnosis and estimate handling, and after the job is complete.',
    featureCategories: [
      {
        title: 'Lead capture and qualification layer',
        description:
          'Routes diagnostics, repairs, inspections, and warning-light enquiries through a clearer first-contact path so the right issue reaches the right next step.',
        icon: MessageSquare,
        features: [
          'Vehicle issue qualification',
          'Symptom and urgency capture',
          'Cleaner first response',
        ],
      },
      {
        title: 'Diagnostic booking layer',
        description:
          'Moves workshop requests, callback timing, and appointment windows into a booked next step without unnecessary delay.',
        icon: Calendar,
        features: ['Diagnostic scheduling', 'Reminder touchpoints', 'Clear next-step guidance'],
      },
      {
        title: 'Estimate follow-up layer',
        description:
          'Keeps pending approvals on a calmer, more consistent follow-up path so work does not disappear into silence.',
        icon: Workflow,
        features: ['Estimate follow-up', 'Decision reminders', 'Pipeline visibility'],
      },
      {
        title: 'Trust and proof layer',
        description:
          'Connects reviews, workshop credibility, and proof of work so they support local buying decisions before the booking happens.',
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
    title: 'From reactive auto repair enquiries to a more reliable booking and follow-up flow',
    description:
      'The workshop stays hands-on. The repeatable friction around enquiry routing, estimate coordination, and follow-up gets reduced.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'Before the workflow is structured',
        items: [
          'Repair leads arrive without enough detail to route them quickly',
          'Diagnostics and callbacks depend on manual back-and-forth',
          'Pending estimates are hard to follow consistently',
          'Trust depends too heavily on one-off reassurance during the booking process',
        ],
      },
      {
        type: 'after' as const,
        title: 'After the workflow is aligned',
        items: [
          'New repair leads move into the right diagnostic path faster',
          'Booking and reminder flow protect the next step more consistently',
          'Estimate follow-up happens with less manual chasing',
          'Reviews, local proof, and page structure support better decision confidence',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Lead To Booking Flow',
    title:
      'How the auto repair workflow moves from first enquiry to booked diagnosis and follow-up',
    description:
      'How the system moves repair leads from first contact into the right diagnostic or booking path — then into consistent estimate follow-up.',
    packages: [
      {
        name: 'Lead capture and qualification',
        description:
          'Routes diagnostics, faults, and inspection enquiries into a clearer first step — so the right details reach the right person faster.',
        price: 'Flow stage 1',
        priceDetail: 'Best when lead quality and first-contact clarity are the main issue',
        features: [
          'Repair-specific service pages',
          'Better enquiry capture',
          'Vehicle and symptom context',
        ],
        buttonText: 'Talk Through Scope',
        buttonHref: '/contact',
      },
      {
        name: 'Diagnostic booking and estimate flow',
        description:
          'Adds steadier scheduling, clearer reminders, and better control over the next step after diagnosis.',
        price: 'Flow stage 2',
        priceDetail: 'Best when booking and estimate handling create friction',
        features: [
          'Diagnostic scheduling support',
          'Callback and reminder structure',
          'Estimate path clarity',
        ],
        popular: true,
        buttonText: 'See the Setup',
        buttonHref: '/contact',
      },
      {
        name: 'Follow-up and trust reinforcement',
        description:
          'Keeps pending estimates, reviews, and completed-job proof moving in a more reliable way.',
        price: 'Flow stage 3',
        priceDetail: 'Best when follow-up consistency and trust-building are the pressure points',
        features: [
          'Estimate follow-up workflows',
          'Review request support',
          'Local proof reinforcement',
        ],
        buttonText: 'Request Details',
        buttonHref: '/contact',
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Follow-Up Examples',
    title: 'What the auto repair lead, booking, and follow-up flow looks like in practice',
    description:
      'Repeatable situations where a structured repair setup reduces friction — without making the business feel scripted.',
    workflows: [
      {
        trigger:
          'A driver notices a fault and wants to know whether the next step is diagnosis, inspection, or repair booking.',
        actions: [
          'Capture the right issue and urgency early',
          'Route the enquiry into the right diagnostic or booking path',
          'Reduce wasted time on unclear first contact',
        ],
      },
      {
        trigger:
          'A diagnostic is requested and the business needs to confirm timing, vehicle details, and the next step clearly.',
        actions: [
          'Move the lead into a booked workshop slot',
          'Send reminders and next-step guidance',
          'Keep internal handoff cleaner between front desk and workshop',
        ],
      },
      {
        trigger:
          'The estimate has been delivered and the business wants to keep the job warm without manual chasing every time.',
        actions: [
          'Send measured follow-up at the right times',
          'Keep the estimate stage visible internally',
          'Support the decision with reviews and trust proof if needed',
        ],
      },
    ],
    backgroundColor: 'bg-white',
    cssPrefix: 'auto-repair-workflow-examples',
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
      'Relevant service layers for auto repair shops that want cleaner diagnostics, estimate follow-up, and stronger local trust support.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description:
          'See the core system layer that holds repair enquiry, diagnosis, and follow-up together.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'Booking & Scheduling System',
        description: 'Support diagnostics, reminders, and clearer next-step handling.',
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
        description: 'Turn completed work into stronger proof and review flow.',
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
    title: 'Common questions about auto repair systems',
    description: 'Common questions about MindWP for auto repair shops',
    faqs: [
      {
        question: 'How can an auto repair shop get more qualified bookings from its website?',
        answer:
          'Clearer repair and diagnostic pages, better forms, and guided next-step paths help drivers understand what to do next — which directly improves booking quality.',
      },
      {
        question: 'Should auto repair shops offer online booking or diagnostic requests?',
        answer:
          'Yes — a clean request path reduces back-and-forth and moves drivers into the right next step faster. The key is capturing context early: symptoms, urgency, vehicle details, and whether the next step is diagnosis or direct booking.',
      },
      {
        question: 'How do repair shops reduce missed calls and slow callbacks?',
        answer:
          'Missed calls become expensive when the workshop is already under pressure. A better enquiry system can capture requests through multiple paths, support missed-enquiry recovery, and make the first reply clearer even when nobody can answer immediately.',
      },
      {
        question: 'Do repair shops need separate pages for different services?',
        answer:
          'Often, yes, as long as the pages reflect real service coverage and useful information rather than thin copy. Good service-page structure helps local visibility and also helps prospects feel confident that the shop can handle their problem.',
      },
      {
        question:
          'How should auto repair businesses handle estimate follow-up without sounding pushy?',
        answer:
          'Calm, well-timed follow-up that confirms the next step, keeps the estimate visible, and makes it easy to re-engage. The aim is clarity and consistency — not pressure.',
      },
      {
        question: 'What kind of reviews matter most for auto repair shops?',
        answer:
          'The most useful reviews help future customers trust the work, the communication, and the overall experience. A structured review request process after completed jobs can help build that proof more consistently over time.',
      },
    ],
  };

  return {
    slug: 'auto-repair',
    industries: ['auto-repair'],
    systems: [
      'smart-website-systems',
      'ai-lead-handling',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['lead-management', 'missed-calls', 'review-generation'],
    type: 'detail',
    parentSlug: 'automotive-services',
    seo: {
      title: 'Auto Repair — Smart Website Systems | MindWP',
      description:
        'Smart Website systems for auto repair shops that need clearer diagnostics, estimate follow-up, and stronger local trust.',
      keywords: [
        'auto repair website design',
        'auto repair booking system',
        'mechanic lead handling system',
        'auto repair seo services',
        'auto repair reputation management system',
      ],
      canonical: '/industries/automotive-services/auto-repair',
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
      title: 'Build a steadier auto repair diagnostic and estimate system',
      description:
        'If your repair business is dealing with missed enquiries, loose booking, or inconsistent estimate follow-up — we can map a practical system around how the workshop actually runs.',
      primaryAction: { variant: 'white', label: 'Start a Conversation', href: '/contact' },
      secondaryAction: {
        label: 'See Automotive Services',
        href: '/industries/automotive-services',
      },
    },
  };
}

export const autoRepairIndustryPageData: IndustryPageData = buildAutoRepairIndustryPageData();
