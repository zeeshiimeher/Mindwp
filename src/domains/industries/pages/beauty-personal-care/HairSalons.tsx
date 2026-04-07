import {
  Bell,
  Calendar,
  Clock3,
  MapPinned,
  MessageSquare,
  Scissors,
  Search,
  ShieldCheck,
  Star,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildHairSalonsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'Expansion Lane',
    title: 'Smart Website Systems for Hair Salons',
    description:
      'A salon website should support service clarity, appointment booking, reminders, and repeat-visit follow-up — without the front desk absorbing every gap.',
    list: [
      'Defined booking paths',
      'Protected diary structure',
      'Steady repeat-visit rhythm',
      'Visible local trust',
    ],
    cssPrefix: 'hair-salons-hero',
  };

  const imageStripData = {
    badge: 'Service Environment',
    title: 'Salon demand depends on booking clarity, timing, and repeat client trust',
    description:
      'Service selection, stylist availability, appointment timing, reminders, and rebooking all shape the client experience. When those steps are loose, the team repeats the same coordination work all day.',
    items: [
      {
        title: 'New client enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing hair salon new client enquiries',
      },
      {
        title: 'Service selection and booking',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing hair salon service booking',
      },
      {
        title: 'Reminder and arrival flow',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing hair salon reminder flow',
      },
      {
        title: 'Reviews and rebooking',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing hair salon reviews and rebooking',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'hair-salons-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Operating Patterns',
    title: 'Where salons lose time and repeat momentum',
    description:
      'The issue is not getting booked — it is the gap between service selection, calendar coordination, reminders, and the trust signals that help clients choose and return.',
    benefits: [
      {
        icon: Scissors,
        title: 'Unclear service paths before booking',
        description:
          'Cut, colour, treatment, and styling services share one generic booking path, which creates confusion before the appointment is even selected.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Diary friction from booking complexity',
        description:
          'Stylist availability, service duration, and reminder timing compete for attention instead of flowing through one coordinated path.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Follow-up that depends on memory',
        description:
          'Review requests, return-visit prompts, and post-appointment follow-up happen only when someone remembers.',
        iconType: 'accent' as const,
      },
      {
        icon: MapPinned,
        title: 'Disconnected trust signals',
        description:
          'Reviews, stylist profiles, service pages, and local search all exist — but they do not reinforce each other.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'System Layers',
    title: 'The working layers behind a steadier salon workflow',
    description:
      'The salon system supports service discovery, booking, front-desk coordination, reminders, and repeat-visit follow-up without adding noise.',
    featureCategories: [
      {
        title: 'Service and enquiry layer',
        description:
          'Guides different services into separate first-contact paths so the right next step is obvious.',
        icon: MessageSquare,
        features: [
          'Service-specific enquiry paths',
          'Cleaner first response',
          'Better booking guidance',
        ],
      },
      {
        title: 'Booking and diary layer',
        description:
          'Structures appointments around service timing, stylist allocation, and confirmed next steps.',
        icon: Calendar,
        features: ['Appointment booking', 'Diary protection', 'Stylist and timing clarity'],
      },
      {
        title: 'Reminder and arrival layer',
        description:
          'Delivers reminders and preparation details consistently so the appointment day runs smoothly.',
        icon: Bell,
        features: ['Reminder timing', 'Arrival guidance', 'Cleaner appointment communication'],
      },
      {
        title: 'Rebooking and review layer',
        description:
          'Handles return-visit prompts and review requests so repeat demand compounds over time.',
        icon: ShieldCheck,
        features: ['Rebooking prompts', 'Review request workflows', 'Better repeat-visit support'],
      },
      {
        title: 'Local visibility layer',
        description:
          'Ties service pages, stylist credibility, and local search together to reinforce trust before booking.',
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
    title: 'From reactive salon coordination to a calmer booking and rebooking flow',
    description:
      'The personal feel of a salon stays intact. The friction around booking, reminders, and follow-up gets reduced so the team can work more calmly.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'Before the workflow is structured',
        items: [
          'Clients are unsure which service or time slot fits before booking',
          'Arrival details and reminders are repeated manually each day',
          'Review and rebooking prompts happen when someone remembers',
          'Trust relies on manual reassurance during every first contact',
        ],
      },
      {
        type: 'after' as const,
        title: 'After the workflow is aligned',
        items: [
          'New clients move into the right booking path faster',
          'Booking and reminder flow protect the diary more consistently',
          'Rebooking and review prompts happen with less manual chasing',
          'Service clarity and local proof reinforce stronger booking confidence',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Lead To Booking Flow',
    title: 'From first enquiry to repeat follow-up',
    description:
      'Each stage moves salon demand through a specific part of the journey — from first contact to appointment to repeat booking.',
    packages: [
      {
        name: 'Service clarity and booking setup',
        description:
          'Separates services into distinct booking paths so clients land on the right appointment without extra back-and-forth.',
        price: 'Flow stage 1',
        priceDetail: 'Best when service selection and booking clarity are the main issue',
        features: [
          'Service-specific booking paths',
          'Better first-response clarity',
          'Cleaner service guidance',
        ],
        buttonText: 'Talk Through Scope',
        buttonHref: '/contact',
      },
      {
        name: 'Diary protection and reminders',
        description:
          'Adds reminder structure and preparation guidance so appointments are protected and the day runs with fewer surprises.',
        price: 'Flow stage 2',
        priceDetail: 'Best when calendar friction and reminder gaps are the pressure points',
        features: [
          'Appointment scheduling support',
          'Reminder structure',
          'Better arrival guidance',
        ],
        popular: true,
        buttonText: 'See the Setup',
        buttonHref: '/contact',
      },
      {
        name: 'Rebooking and review reinforcement',
        description:
          'Introduces review prompts and rebooking follow-up so repeat demand builds without manual chasing.',
        price: 'Flow stage 3',
        priceDetail: 'Best when follow-up consistency and repeat demand need improvement',
        features: ['Rebooking prompts', 'Review request support', 'Retention reinforcement'],
        buttonText: 'Request Details',
        buttonHref: '/contact',
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Follow-Up Examples',
    title: 'What the salon lead, booking, and follow-up flow looks like in practice',
    description:
      'Repeatable situations where the system removes friction while keeping the experience personal.',
    workflows: [
      {
        trigger: 'A new client reaches out but is unsure which service or time slot fits.',
        actions: [
          'Guide the client into the right service path',
          'Collect any early consultation context if needed',
          'Reduce wasted time on unclear first contact',
        ],
      },
      {
        trigger:
          'An appointment is confirmed and the client needs reminders and preparation details.',
        actions: [
          'Send reminders at the right times',
          'Confirm any key preparation or arrival details',
          'Reduce avoidable no-shows and late confusion',
        ],
      },
      {
        trigger: 'The visit is complete and the salon needs a review and a rebooking prompt.',
        actions: [
          'Send a well-timed review request',
          'Prompt the right next visit or rebooking path',
          'Keep repeat demand moving more reliably',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'hair-salons-workflow-examples',
  };

  const caseStudiesData = {
    category: 'beauty-personal-care' as const,
    title: 'Related Case Studies',
    description:
      'Examples of how the system supports salons and beauty-led businesses in this category.',
    limit: 2,
  };

  const exploreData = {
    badge: 'Explore',
    description:
      'Relevant service layers for salons that want stronger booking flow, steadier reminders, and better repeat demand.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description:
          'See the core system layer that holds service clarity, booking, and follow-up together.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'Booking & Scheduling System',
        description: 'Support salon booking, reminders, and clearer diary handling.',
        href: '/services/booking-scheduling-system',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen local service visibility and salon trust signals.',
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
    backgroundColor: 'bg-alt',
    ctaLabel: 'View Service',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Common questions about salon systems',
    description: 'Common questions about MindWP for hair salons',
    faqs: [
      {
        question: 'How can a hair salon improve online bookings from its website?',
        answer:
          'Make service pages specific enough that clients can tell which appointment to book. When the service path and the booking path are clear, conversion improves without any extra marketing.',
      },
      {
        question: 'Should salons show pricing online?',
        answer:
          'Yes — or at least clear pricing guidance where service variation makes exact numbers harder. Price clarity reduces back-and-forth and helps clients decide sooner.',
      },
      {
        question: 'How can salons reduce no-shows and late cancellations?',
        answer:
          'Well-timed reminders and clear booking expectations help the most. The system protects the diary without turning the client experience into pressure-heavy messaging.',
      },
      {
        question: 'Do hair salons need separate pages for different services?',
        answer:
          'Yes. Separate pages help visitors and search engines understand each service. They also make it easier to route clients into the correct booking path instead of funnelling everything through one generic page.',
      },
      {
        question: 'What kind of reviews matter most for salons?',
        answer:
          'Reviews that mention quality, communication, and consistency carry the most weight. A steady review request process after each appointment builds that proof over time.',
      },
      {
        question: 'How should salons handle rebooking follow-up?',
        answer:
          'Well-timed follow-up that makes the next appointment easy to understand and easy to book. The point is steady repeat demand, not pressure.',
      },
    ],
  };

  return {
    slug: 'hair-salons',
    industries: ['hair-salon'],
    systems: [
      'smart-website-systems',
      'crm-automation',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['booking-automation', 'no-show-reduction', 'review-generation'],
    type: 'detail',
    parentSlug: 'beauty-personal-care',
    seo: {
      title: 'Hair Salons — Smart Website Systems | MindWP',
      description:
        'Smart Website systems for hair salons that need clearer booking flow, reminder support, and stronger repeat-visit follow-up.',
      keywords: [
        'hair salon website design',
        'salon booking website system',
        'hair salon marketing system',
        'salon seo services',
        'salon reputation management system',
      ],
      canonical: '/industries/beauty-personal-care/hair-salons',
    },
    hero: {
      ...heroData,
      primaryAction: { label: 'Book More Hair Appointments', href: '/contact' },
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
      title: 'Build a steadier salon workflow',
      description:
        'If booking confusion, reminder gaps, inconsistent reviews, or weak repeat-visit follow-up are slowing things down, we can map a practical system around the real client journey.',
      primaryAction: { variant: 'white', label: 'Book More Hair Appointments', href: '/contact' },
      secondaryAction: {
        label: 'See the Category Approach',
        href: '/industries/beauty-personal-care',
      },
    },
  };
}

export const hairSalonsIndustryPageData: IndustryPageData = buildHairSalonsIndustryPageData();
