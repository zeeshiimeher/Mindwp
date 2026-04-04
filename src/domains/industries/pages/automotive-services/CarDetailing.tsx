import {
  Bell,
  Calendar,
  Clock3,
  MapPinned,
  MessageSquare,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildCarDetailingIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'Coverage Lane',
    title: 'Smart Website Systems for Car Detailing Businesses',
    description:
      'A car detailing website should support package clarity, appointment booking, preparation guidance, and repeat-visit follow-up — without making the team chase every step manually.',
    list: [
      'Clearer package selection',
      'Better booking flow',
      'Stronger preparation guidance',
      'More reliable repeat demand',
    ],
    cssPrefix: 'car-detailing-hero',
  };

  const imageStripData = {
    badge: 'Service Environment',
    title: 'Detailing demand depends on package clarity, timing, and visible proof before booking',
    description:
      'Interior packages, correction work, coatings, maintenance plans, appointment timing, and before-and-after proof all shape the decision. When those steps feel disconnected, the business absorbs more confusion than it should.',
    items: [
      {
        title: 'Package and service enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing car detailing package enquiries',
      },
      {
        title: 'Booking and slot planning',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing car detailing booking flow',
      },
      {
        title: 'Preparation and handoff details',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing car detailing preparation guidance',
      },
      {
        title: 'Reviews and repeat visits',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing car detailing reviews and repeat visits',
      },
    ],
    backgroundColor: 'bg-section-surface',
    cssPrefix: 'car-detailing-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Operating Patterns',
    title: 'Where detailing businesses lose clarity, time, or repeat momentum',
    description:
      'The gap is rarely visibility alone — it sits between package understanding, appointment planning, preparation guidance, and the proof someone needs before they commit.',
    benefits: [
      {
        icon: Sparkles,
        title: 'Package selection is not always clear enough before booking',
        description:
          'Exterior, interior, correction, coating, and maintenance options sit on one undifferentiated path — booking confusion starts before the customer reaches the calendar.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Appointment timing and job scope create friction',
        description:
          'Vehicle condition, package length, handoff timing, and prep details sit in different places — the booking flow slows before it should.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Review requests and return visits depend too much on memory',
        description:
          'Maintenance reminders, review requests, and next-visit prompts often happen inconsistently when the day gets busy.',
        iconType: 'accent' as const,
      },
      {
        icon: MapPinned,
        title: 'Trust signals are present but not reinforcing each other',
        description:
          'Photo proof, reviews, service pages, and local visibility exist in different places — they rarely work together to support booking confidence.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'System Layers',
    title: 'The working layers behind a steadier detailing workflow',
    description:
      'A stronger detailing setup supports service discovery, package selection, appointment planning, prep guidance, and repeat-visit follow-up without adding more operational noise.',
    featureCategories: [
      {
        title: 'Service and enquiry layer',
        description:
          'Routes different detailing packages through a clearer first-contact path so drivers reach the right next step faster.',
        icon: MessageSquare,
        features: [
          'Package-specific enquiry paths',
          'Cleaner first response',
          'Better booking guidance',
        ],
      },
      {
        title: 'Booking and planning layer',
        description:
          'Structures appointments around package timing, vehicle condition, and next-step clarity.',
        icon: Calendar,
        features: ['Appointment booking', 'Scope and timing clarity', 'Cleaner workshop planning'],
      },
      {
        title: 'Preparation and handoff layer',
        description:
          'Delivers prep details, drop-off timing, and handoff expectations consistently so the day runs more calmly.',
        icon: Bell,
        features: [
          'Preparation guidance',
          'Drop-off instructions',
          'Cleaner appointment communication',
        ],
      },
      {
        title: 'Rebooking and review layer',
        description:
          'Keeps return-visit prompts and review requests moving more reliably so repeat demand compounds.',
        icon: ShieldCheck,
        features: ['Maintenance prompts', 'Review request workflows', 'Repeat-visit support'],
      },
      {
        title: 'Local visibility layer',
        description:
          'Reinforces the detailing experience before booking through service pages, photo proof, and local search.',
        icon: Search,
        features: [
          'Service-page alignment',
          'Google Business Profile support',
          'Local trust reinforcement',
        ],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'Operational Shift',
    title: 'From reactive detailing enquiries to a calmer booking and repeat-visit flow',
    description:
      'The premium experience stays. The repeatable friction around package selection, booking, and follow-up gets reduced so the business can work more calmly.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'Before the workflow is structured',
        items: [
          'Drivers are not always sure which package fits before booking',
          'Preparation and handoff details are explained repeatedly',
          'Review requests and maintenance prompts happen inconsistently',
          'Trust depends too heavily on manual reassurance during the booking process',
        ],
      },
      {
        type: 'after' as const,
        title: 'After the workflow is aligned',
        items: [
          'Drivers move into the right booking path faster',
          'Booking and preparation flow protect the schedule more consistently',
          'Review and repeat-visit prompts happen with less manual chasing',
          'Service clarity and visual proof reinforce stronger booking confidence',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Lead To Booking Flow',
    title:
      'How the detailing workflow moves from first enquiry to appointment and repeat follow-up',
    description:
      'How the system moves detailing demand from first contact into the right package path — then into steadier preparation, review, and repeat-visit handling.',
    packages: [
      {
        name: 'Package clarity and booking setup',
        description:
          'Routes different packages into a clearer first step — so drivers reach the right appointment path faster.',
        price: 'Flow stage 1',
        priceDetail: 'Best when package selection and booking clarity are the main issue',
        features: [
          'Package-specific booking paths',
          'Better first-response clarity',
          'Cleaner service guidance',
        ],
        buttonText: 'Talk Through Scope',
        buttonHref: '/contact',
      },
      {
        name: 'Appointment planning and preparation',
        description:
          'Adds steadier booking, clearer prep guidance, and cleaner handoff before the visit.',
        price: 'Flow stage 2',
        priceDetail: 'Best when schedule friction and preparation gaps are the pressure points',
        features: [
          'Appointment scheduling support',
          'Preparation structure',
          'Better handoff guidance',
        ],
        popular: true,
        buttonText: 'See the Setup',
        buttonHref: '/contact',
      },
      {
        name: 'Review and repeat-visit reinforcement',
        description:
          'Keeps repeat-visit prompts, review flow, and longer-term retention moving more consistently.',
        price: 'Flow stage 3',
        priceDetail: 'Best when follow-up consistency and repeat demand need improvement',
        features: ['Maintenance prompts', 'Review request support', 'Retention reinforcement'],
        buttonText: 'Request Details',
        buttonHref: '/contact',
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Follow-Up Examples',
    title: 'What the detailing lead, booking, and follow-up flow looks like in practice',
    description:
      'Repeatable situations where a structured detailing setup removes friction — without making the client experience feel robotic.',
    workflows: [
      {
        trigger:
          'A driver wants to know which package to choose and whether the business is the right fit before booking.',
        actions: [
          'Guide the driver into the right service path',
          'Collect early vehicle or package context if needed',
          'Reduce wasted time on unclear first contact',
        ],
      },
      {
        trigger:
          'An appointment is booked, but timing, prep details, and handoff instructions need to be delivered clearly.',
        actions: [
          'Send preparation guidance at the right times',
          'Confirm drop-off or handoff details clearly',
          'Reduce avoidable no-shows and schedule confusion',
        ],
      },
      {
        trigger:
          'The visit is complete and the business wants to support reviews and repeat detailing more consistently.',
        actions: [
          'Send a well-timed review request',
          'Prompt the right next maintenance or repeat visit',
          'Keep repeat demand moving more reliably',
        ],
      },
    ],
    backgroundColor: 'bg-section-surface',
    cssPrefix: 'car-detailing-workflow-examples',
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
      'Relevant service layers for detailing businesses that want clearer booking flow, steadier preparation, and better repeat demand.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description:
          'See the core system layer that holds package clarity, booking, and follow-up together.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'Booking & Scheduling System',
        description: 'Support detailing bookings, reminders, and clearer appointment handling.',
        href: '/services/booking-scheduling-system',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen local service visibility and detailing trust signals.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description: 'Turn good appointments into stronger reviews and repeat trust.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-section-muted',
    ctaLabel: 'View Service',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Common questions about car detailing systems',
    description: 'Common questions about MindWP for car detailing businesses',
    faqs: [
      {
        question: 'How can a detailing business improve online bookings from its website?',
        answer:
          'Clearer packages, an easier booking path, and obvious next steps reduce confusion before the visit — which directly improves booking quality.',
      },
      {
        question: 'Should detailing businesses show pricing online?',
        answer:
          'Yes — or at least clearer pricing guidance where vehicle condition or package variation makes exact pricing harder. Price clarity reduces unnecessary back-and-forth and helps drivers choose the right next step sooner.',
      },
      {
        question: 'How can detailers reduce no-shows and late changes?',
        answer:
          'Clear booking expectations, well-timed reminders, and cleaner preparation guidance protect the schedule — without turning the customer experience into pressure-heavy messaging.',
      },
      {
        question: 'Do detailers need separate pages for different packages?',
        answer:
          'Yes. Separate pages help both visitors and search engines understand what the business offers — and make it easier to move someone into the right booking path instead of forcing every enquiry through one generic page.',
      },
      {
        question: 'What kind of reviews matter most for detailing businesses?',
        answer:
          'The most useful reviews help future customers trust the finish, communication, and consistency of the detailing experience. A simple and steady review request process after appointments can help build that proof more reliably over time.',
      },
      {
        question: 'How should detailers handle repeat-booking follow-up?',
        answer:
          'Well-timed follow-up that makes the next appointment easy to understand and easy to take. The aim is to keep repeat demand moving in a calm, consistent way — not pressure.',
      },
    ],
  };

  return {
    slug: 'car-detailing',
    industries: ['car-detailing'],
    systems: [
      'smart-website-systems',
      'crm-automation',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['booking-systems', 'client-reactivation', 'review-generation'],
    type: 'detail',
    parentSlug: 'automotive-services',
    seo: {
      title: 'Car Detailing — Smart Website Systems | MindWP',
      description:
        'Smart Website systems for car detailing businesses that need clearer booking flow, preparation support, and stronger repeat-visit follow-up.',
      keywords: [
        'car detailing website design',
        'car detailing booking system',
        'car detailing marketing system',
        'car detailing seo services',
        'car detailing reputation management system',
      ],
      canonical: '/industries/automotive-services/car-detailing',
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
      title: 'Build a steadier detailing booking and repeat-visit system',
      description:
        'If your detailing business is dealing with package confusion, reminder gaps, or inconsistent review flow — we can map a practical system around how the appointment journey actually runs.',
      primaryAction: { variant: 'white', label: 'Start a Conversation', href: '/contact' },
      secondaryAction: {
        label: 'See Automotive Services',
        href: '/industries/automotive-services',
      },
    },
  };
}

export const carDetailingIndustryPageData: IndustryPageData = buildCarDetailingIndustryPageData();
