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

function buildNailSalonsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'Expansion Lane',
    title: 'Smart Website Systems for Nail Salons',
    description:
      'A nail salon website should make service options obvious, booking fast, and reminders automatic — so the team stops patching gaps between clients.',
    list: [
      'Specific service paths',
      'Automated reminder flow',
      'Consistent rebooking rhythm',
      'Local trust that compounds',
    ],
    cssPrefix: 'nail-salons-hero',
  };

  const imageStripData = {
    badge: 'Service Environment',
    title:
      'Nail salon demand depends on service clarity, booking timing, and repeat client retention',
    description:
      'New clients need to understand service options, timing, and what to expect. Existing clients need reminders and a smooth path back into the diary.',
    items: [
      {
        title: 'Service choice and enquiries',
        image: '/images/placeholders/service-card-1.svg',
        alt: 'Abstract placeholder image representing nail salon enquiries',
      },
      {
        title: 'Booking and time-slot selection',
        image: '/images/placeholders/service-card-2.svg',
        alt: 'Abstract placeholder image representing nail salon booking flow',
      },
      {
        title: 'Reminders and visit preparation',
        image: '/images/placeholders/service-card-3.svg',
        alt: 'Abstract placeholder image representing nail salon reminder flow',
      },
      {
        title: 'Reviews and repeat visits',
        image: '/images/placeholders/service-card-4.svg',
        alt: 'Abstract placeholder image representing nail salon repeat visits',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'nail-salons-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Operating Patterns',
    title: 'Where nail salons lose momentum',
    description:
      'The pressure comes from unclear service selection, appointment timing, reminder gaps, and weak repeat-visit follow-up — not from a lack of demand.',
    benefits: [
      {
        icon: Sparkles,
        title: 'Vague service selection before booking',
        description:
          'Gel, acrylic, fill, removal, and add-on options run through one generic path instead of guiding the client toward the right appointment.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Booking paths that miss real-world timing',
        description:
          'Appointment duration, technician availability, and service specifics create friction when the booking flow treats every service the same.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Inconsistent reminders and repeat handling',
        description:
          'Review requests, return-visit prompts, and appointment reminders depend on whoever remembers — which means they happen unevenly.',
        iconType: 'accent' as const,
      },
      {
        icon: MapPinned,
        title: 'Trust signals that sit disconnected',
        description:
          'Reviews, service pages, photos, and local search all exist but work independently instead of reinforcing the booking decision together.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'System Layers',
    title: 'The working layers behind a steadier nail salon workflow',
    description:
      'The system covers service discovery, appointment selection, reminders, technician coordination, and repeat booking without piling more work onto the front desk.',
    featureCategories: [
      {
        title: 'Service and enquiry layer',
        description:
          'Routes different services into distinct paths so clients choose the right appointment without extra messages.',
        icon: MessageSquare,
        features: [
          'Service-specific enquiry paths',
          'Clearer booking guidance',
          'Cleaner first response',
        ],
      },
      {
        title: 'Booking and diary layer',
        description:
          'Structures appointments around timing, technician availability, and the practical differences between services.',
        icon: Calendar,
        features: ['Appointment scheduling support', 'Diary protection', 'Availability clarity'],
      },
      {
        title: 'Reminder and arrival layer',
        description:
          'Delivers reminders and visit guidance consistently so the day runs with fewer avoidable interruptions.',
        icon: Bell,
        features: ['Reminder timing', 'Arrival guidance', 'Cleaner client communication'],
      },
      {
        title: 'Retention and review layer',
        description:
          'Handles repeat-visit prompts and review requests so retention compounds rather than fading after each visit.',
        icon: ShieldCheck,
        features: ['Rebooking prompts', 'Review request workflows', 'Repeat-visit reinforcement'],
      },
      {
        title: 'Local visibility layer',
        description:
          'Ties service pages, review proof, and local search together to build trust before the client books.',
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
    title: 'From reactive appointment handling to a calmer repeat-booking system',
    description:
      'The personal touch stays. The repeatable friction around booking and follow-up gets reduced so the salon operates more steadily.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'Before the workflow is structured',
        items: [
          'Clients cannot tell which service or time slot fits before booking',
          'Reminder details are repeated manually throughout the week',
          'Review and repeat prompts happen when someone has time',
          'First-contact trust depends entirely on manual reassurance',
        ],
      },
      {
        type: 'after' as const,
        title: 'After the workflow is aligned',
        items: [
          'Clients move into the right booking path faster',
          'Appointment timing and reminders protect the diary more consistently',
          'Review and rebooking prompts happen with less manual chasing',
          'Service clarity and local proof support stronger booking confidence',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Lead To Booking Flow',
    title: 'From first enquiry to repeat visit',
    description:
      'Each stage moves demand through a different part of the journey — from first contact to appointment to steady repeat booking.',
    packages: [
      {
        name: 'Service clarity and booking setup',
        description:
          'Separates service options into distinct paths so clients reach the right appointment without back-and-forth.',
        price: 'Flow stage 1',
        priceDetail: 'Best when service choice and booking clarity are the main issue',
        features: [
          'Service-specific booking paths',
          'Cleaner first-response guidance',
          'Better appointment clarity',
        ],
      },
      {
        name: 'Diary protection and reminders',
        description:
          'Adds structured reminders and preparation detail so appointments are protected and the day runs predictably.',
        price: 'Flow stage 2',
        priceDetail: 'Best when timing gaps and reminder inconsistency create pressure',
        features: [
          'Appointment scheduling support',
          'Reminder structure',
          'Cleaner arrival guidance',
        ],
        popular: true,
      },
      {
        name: 'Repeat visits and review reinforcement',
        description:
          'Introduces review prompts and rebooking follow-up so repeat demand builds without chasing.',
        price: 'Flow stage 3',
        priceDetail: 'Best when repeat demand and follow-up consistency need improvement',
        features: ['Review request support', 'Rebooking prompts', 'Retention reinforcement'],
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Follow-Up Examples',
    title: 'What the nail salon lead, booking, and repeat-visit flow looks like in practice',
    description:
      'Repeatable situations where the system removes friction while keeping the experience natural.',
    workflows: [
      {
        trigger: 'A new client is browsing services but unsure which one to book.',
        actions: [
          'Guide the client into the correct service path',
          'Clarify timing or add-on expectations early',
          'Reduce wasted time on unclear first contact',
        ],
      },
      {
        trigger:
          'An appointment is confirmed and the client needs reminders and preparation details.',
        actions: [
          'Send reminders at the right times',
          'Confirm visit details or preparation clearly',
          'Reduce avoidable no-shows and day-of confusion',
        ],
      },
      {
        trigger: 'The appointment is complete and the salon needs a review and a rebooking prompt.',
        actions: [
          'Send a well-timed review request',
          'Prompt the next visit clearly and calmly',
          'Keep repeat demand moving more reliably',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'nail-salons-workflow-examples',
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
      'Relevant service layers for nail salons that want stronger booking flow, steadier reminders, and better repeat demand.',
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
        description: 'Support nail salon booking, reminders, and cleaner diary handling.',
        href: '/services/booking-scheduling-system',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen local service visibility and booking trust signals.',
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
    columns: 2 as const,
  };

  const faqData = {
    title: 'Common questions about nail salon systems',
    description: 'Common questions about MindWP for nail salons',
    faqs: [
      {
        question: 'How can a nail salon improve appointment bookings from its website?',
        answer:
          'Make service options specific enough that clients can tell which appointment to book. When the service path is clear and the booking path is obvious, more enquiries convert without extra effort.',
      },
      {
        question: 'Should nail salons separate different services into dedicated pages?',
        answer:
          'Yes. Separate pages help visitors understand the difference between gel, acrylic, fill, and removal options. They also help search engines index each service and route clients into the right booking path.',
      },
      {
        question: 'How can nail salons reduce no-shows and missed appointments?',
        answer:
          'Well-timed reminders and clear booking expectations help the most. The system protects the diary without turning confirmation messages into pressure.',
      },
      {
        question: 'What role do reviews play for nail salons?',
        answer:
          'Reviews that mention quality, consistency, and the appointment experience carry the most weight. A steady post-appointment review process builds that proof over time.',
      },
      {
        question: 'How should nail salons handle repeat-booking follow-up?',
        answer:
          'Calm, consistent prompts that make the next appointment easy to understand and easy to book. The point is steady repeat demand, not pressure.',
      },
      {
        question: 'Do nail salons need local SEO support as well as booking tools?',
        answer:
          'Yes. Booking tools convert intent, but local SEO and location trust signals help the salon get discovered and chosen in the first place.',
      },
    ],
  };

  return {
    slug: 'nail-salons',
    industries: ['nail-salon'],
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
      title: 'Nail Salons — Smart Website Systems | MindWP',
      description:
        'Smart Website systems for nail salons that need clearer booking flow, reminder support, and stronger repeat-visit follow-up.',
      keywords: [
        'nail salon website design',
        'nail salon booking website system',
        'nail salon marketing system',
        'nail salon seo services',
        'nail salon reputation management system',
      ],
      canonical: '/industries/beauty-personal-care/nail-salons',
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
    caseStudies: caseStudiesData,
    explore: exploreData,
    faq: faqData,
    cta: {
      title: 'Build a steadier nail salon system',
      description:
        'If unclear service selection, reminder gaps, inconsistent reviews, or weak repeat follow-up are slowing things down, we can map a practical system around the real appointment journey.',
      secondaryAction: {
        label: 'See the Category Approach',
        href: '/industries/beauty-personal-care',
      },
    },
  };
}

export const nailSalonsIndustryPageData: IndustryPageData = buildNailSalonsIndustryPageData();
