import {
  Calendar,
  Clock3,
  MessageSquare,
  Search,
  ShieldCheck,
  Star,
  Workflow,
  Wrench,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';
import { buildContactHref } from '@/lib/contact/contactHref';

function buildRepairShopsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'Coverage Lane',
    title: 'Smart Website Systems for Repair Shops',
    description:
      'A repair shop website should support service qualification, booking flow, expectation setting, and follow-up — without making every new job depend on manual back-and-forth.',
    list: [
      'Clearer service qualification',
      'Better booking flow',
      'Stronger local trust signals',
      'More reliable follow-up',
    ],
    cssPrefix: 'repair-shops-hero',
  };

  const imageStripData = {
    badge: 'Service Environment',
    title: 'Service clarity, timing, and trust shape the booking path before anyone visits',
    description:
      'Repair enquiries, fault descriptions, timing details, expectation setting, and follow-up all shape whether someone books. When those steps feel loose, the path from interest to visit breaks down.',
    items: [
      {
        title: 'Service and fault enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing repair shop service enquiries',
      },
      {
        title: 'Booking and visit timing',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing repair visit booking',
      },
      {
        title: 'Expectation setting and next steps',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing repair expectation setting',
      },
      {
        title: 'Reviews and local proof',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing repair shop reviews and local proof',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'repair-shops-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Operating Patterns',
    title: 'Where repair shops lose clarity, time, or momentum',
    description:
      'The gap is rarely visibility alone — it sits between first enquiry, service qualification, booking timing, and the trust someone needs before committing to a visit.',
    benefits: [
      {
        icon: Wrench,
        title: 'Repair requests arrive without enough context to route them well',
        description:
          'Different service types, urgency levels, and fault descriptions arrive through one loose path — first-response quality drops when everything routes the same way.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Booking and visit coordination create friction when readiness is unclear',
        description:
          'Availability, job context, expectation setting, and next steps sit in different places — the booking flow slows before it should.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Pending enquiries depend too much on manual follow-up',
        description:
          'Some prospects need time, but follow-up becomes inconsistent when the team is already managing active jobs.',
        iconType: 'accent' as const,
      },
      {
        icon: Star,
        title: 'Trust signals stay fragmented across the decision path',
        description:
          'Reviews, service clarity, and local proof exist in different places — they rarely work together to support a confident first booking.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'System Layers',
    title: 'The working layers behind a steadier repair booking pipeline',
    description:
      'A repair workflow needs structure before bookings, during service qualification, and after first contact — especially when the decision takes time.',
    featureCategories: [
      {
        title: 'Service qualification layer',
        description:
          'Routes new enquiries through a clearer first-contact path so the right service details reach the right next step.',
        icon: MessageSquare,
        features: ['Intent capture', 'Service qualification', 'Cleaner first response'],
      },
      {
        title: 'Booking layer',
        description:
          'Moves visits and assessments into a booked next step without unnecessary delay.',
        icon: Calendar,
        features: ['Visit scheduling', 'Reminder touchpoints', 'Next-step guidance'],
      },
      {
        title: 'Expectation layer',
        description:
          'Gives prospects a clearer view of how the job, assessment, or next-step handling works after contact.',
        icon: Workflow,
        features: ['Expectation setting', 'Preparation guidance', 'Booking visibility'],
      },
      {
        title: 'Trust and proof layer',
        description:
          'Connects reviews, service proof, and clarity so they support the booking decision before the appointment.',
        icon: ShieldCheck,
        features: ['Review requests', 'Proof-of-service support', 'Trust-led page structure'],
      },
      {
        title: 'Local visibility layer',
        description:
          'Reinforces the locations and service types the shop wants through area pages and search visibility.',
        icon: Search,
        features: ['Area-page targeting', 'Local search clarity', 'Local authority support'],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'Operational Shift',
    title: 'From reactive repair enquiries to a steadier booking and follow-up flow',
    description:
      'The craft stays. The repeatable friction around enquiry routing, booking coordination, and follow-up gets reduced.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'Before the workflow is structured',
        items: [
          'Enquiries arrive without enough detail to route them quickly',
          'Booking depends on manual back-and-forth',
          'Pending opportunities are hard to follow consistently',
          'Trust depends too heavily on one-off reassurance during early contact',
        ],
      },
      {
        type: 'after' as const,
        title: 'After the workflow is aligned',
        items: [
          'New enquiries move into the right booking or nurture path faster',
          'Scheduling and reminder flow protect the next step more consistently',
          'Follow-up happens with less manual chasing',
          'Reviews, local proof, and page structure support better booking confidence',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Lead To Booking Flow',
    title: 'How the repair workflow moves from first enquiry to booking and follow-up',
    description:
      'How the system moves repair enquiries from first contact into the right booking path — then into consistent follow-up when the decision takes time.',
    packages: [
      {
        name: 'Service-fit capture',
        description:
          'Routes service, fault, and timing enquiries into a clearer first step — so the right details reach the right person faster.',
        price: 'Flow stage 1',
        priceDetail: 'Best when lead quality and first-contact clarity are the main issue',
        features: [
          'Intent-specific service pages',
          'Better enquiry capture',
          'Service and timing context',
        ],
        buttonText: 'Talk Through Scope',
        buttonHref: buildContactHref({
          system: 'smart-website-systems',
          sourceType: 'industry',
          slug: 'repair-shops',
        }),
      },
      {
        name: 'Booking and expectation flow',
        description:
          'Adds steadier scheduling, clearer reminders, and better control over the next step after first contact.',
        price: 'Flow stage 2',
        priceDetail: 'Best when booking and expectation handling create friction',
        features: ['Visit scheduling support', 'Reminder structure', 'Expectation guidance'],
        popular: true,
        buttonText: 'See the Setup',
        buttonHref: buildContactHref({
          system: 'smart-website-systems',
          sourceType: 'industry',
          slug: 'repair-shops',
        }),
      },
      {
        name: 'Follow-up and trust reinforcement',
        description:
          'Keeps pending opportunities, reviews, and credibility proof moving in a more reliable way.',
        price: 'Flow stage 3',
        priceDetail: 'Best when follow-up consistency and trust-building are the pressure points',
        features: ['Nurture workflows', 'Review request support', 'Trust reinforcement'],
        buttonText: 'Request Details',
        buttonHref: buildContactHref({
          system: 'smart-website-systems',
          sourceType: 'industry',
          slug: 'repair-shops',
        }),
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Follow-Up Examples',
    title: 'What the repair enquiry, booking, and follow-up flow looks like in practice',
    description:
      'Repeatable situations where a structured repair setup reduces friction — without making the business feel scripted.',
    workflows: [
      {
        trigger:
          'A new enquiry arrives and the shop needs to determine service type, urgency, and fit before confirming anything.',
        actions: [
          'Capture the right intent and timing early',
          'Route the enquiry into the right booking or nurture path',
          'Reduce wasted time on unclear first contact',
        ],
      },
      {
        trigger:
          'A visit is requested and the shop needs to confirm timing, expectations, and next-step readiness.',
        actions: [
          'Move the lead into a booked appointment window',
          'Send reminders and preparation guidance',
          'Keep internal handoff cleaner between enquiry and booking handling',
        ],
      },
      {
        trigger:
          'The first interaction is complete and the shop wants to keep the opportunity moving without manual chasing every time.',
        actions: [
          'Send measured follow-up at the right times',
          'Keep the lead stage visible internally',
          'Support the decision with reviews and local proof if needed',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'repair-shops-workflow-examples',
  };

  const caseStudiesData = {
    category: 'local-appointment-businesses' as const,
    title: 'Related Case Studies',
    description:
      'Examples of how the system supports local appointment businesses in this category.',
    limit: 2,
  };

  const exploreData = {
    badge: 'Explore',
    description:
      'Relevant service layers for repair shops that want cleaner bookings, steadier follow-up, and stronger local trust support.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description:
          'See the core system layer that holds repair enquiry, booking flow, and follow-up together.',
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
        description: 'Strengthen area visibility, local credibility, and service discovery.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description: 'Turn completed jobs into stronger proof and review flow.',
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
    title: 'Common questions about repair shop systems',
    description: 'Common questions about MindWP for repair shops',
    faqs: [
      {
        question: 'How can a repair shop get more qualified enquiries from a website?',
        answer:
          'Clearer service types, better qualification prompts, and guided next-step paths reduce uncertainty early — which directly improves enquiry quality.',
      },
      {
        question: 'Should repair shops offer online booking requests?',
        answer:
          'Yes — a clean request path reduces back-and-forth and moves people into the right next step faster. The key is capturing context early: service need, urgency, and timing.',
      },
      {
        question: 'How do repair shops reduce slow follow-up on colder enquiries?',
        answer:
          'A better enquiry system separates ready-now prospects from nurture-stage opportunities, then supports measured follow-up over time — less manual chasing, more consistency.',
      },
      {
        question: 'Do repair shops need separate pages for different service types?',
        answer:
          'Often, yes, as long as the pages reflect real service paths and useful information rather than thin copy. Good service-page structure helps local visibility and also helps prospects feel confident that the shop handles their situation.',
      },
      {
        question: 'What kind of reviews matter most for repair shops?',
        answer:
          'The most useful reviews reinforce trust, communication, and the feeling that the shop handled the problem clearly and professionally. A structured review request process after completed work can help build that proof more consistently over time.',
      },
      {
        question:
          'Can a Smart Website system help a repair shop without replacing its scheduling tools?',
        answer:
          'Yes. The system improves the public-facing side of the workflow by making enquiries, booking, expectation guidance, and follow-up more consistent. It does not require replacing the tools you already use.',
      },
    ],
  };

  return {
    slug: 'repair-shops',
    industries: ['repair-shop'],
    systems: [
      'smart-website-systems',
      'crm-automation',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['lead-response-time', 'follow-up', 'review-generation'],
    type: 'detail',
    parentSlug: 'local-appointment-businesses',
    seo: {
      title: 'Repair Shops — Smart Website Systems | MindWP',
      description:
        'Smart Website systems for repair shops that need clearer booking flow, service qualification, and stronger local trust support.',
      keywords: [
        'repair shop website design',
        'repair booking workflow',
        'repair shop lead handling system',
        'repair shop seo services',
        'repair shop review system',
      ],
      canonical: '/industries/local-appointment-businesses/repair-shops',
    },
    hero: {
      ...heroData,
      primaryAction: {
        label: 'Capture More Repair Jobs',
        href: buildContactHref({
          system: 'smart-website-systems',
          sourceType: 'industry',
          slug: 'repair-shops',
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
      title: 'Build a steadier repair booking and follow-up system',
      description:
        'If your shop is dealing with unclear enquiry quality, loose booking flow, or inconsistent follow-up — we can map a practical system around how the pipeline actually runs.',
      primaryAction: {
        variant: 'white',
        label: 'Capture More Repair Jobs',
        href: buildContactHref({
          system: 'smart-website-systems',
          sourceType: 'industry',
          slug: 'repair-shops',
        }),
      },
      secondaryAction: {
        label: 'See Local Appointment Businesses',
        href: '/industries/local-appointment-businesses',
      },
    },
  };
}

export const repairShopsIndustryPageData: IndustryPageData = buildRepairShopsIndustryPageData();
