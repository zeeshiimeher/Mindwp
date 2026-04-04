import {
  Bell,
  Calendar,
  Clock3,
  MapPinned,
  MessageSquare,
  Search,
  ShieldCheck,
  Star,
  Trees,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildLandscapingCompaniesIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'Primary Lane',
    title: 'Smart Website Systems for Landscaping',
    description:
      'A landscaping website should separate maintenance from project work, support estimate booking, keep seasonal demand moving, and turn completed jobs into stronger local trust — without constant manual follow-up.',
    list: [
      'Clearer service routing',
      'Better estimate booking',
      'Consistent seasonal follow-up',
      'Reliable local proof',
    ],
    cssPrefix: 'landscaping-companies-hero',
  };

  const imageStripData = {
    badge: 'Service Environment',
    title: 'Landscaping demand often mixes recurring work, project enquiries, and seasonal timing',
    description:
      'Maintenance, garden projects, hardscaping, cleanups, and seasonal demand all need a clear first-contact path. When those paths blur together, response quality and job-fit clarity both suffer.',
    items: [
      {
        title: 'Recurring maintenance enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing landscaping maintenance enquiries',
      },
      {
        title: 'Project and estimate requests',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing landscaping project estimates',
      },
      {
        title: 'Seasonal booking demand',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing seasonal landscaping demand',
      },
      {
        title: 'Reviews and visual proof',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing landscaping reviews and proof of work',
      },
    ],
    backgroundColor: 'bg-section-surface',
    cssPrefix: 'landscaping-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Operating Patterns',
    title: 'Where landscaping businesses lose time, job-fit clarity, or trust momentum',
    description:
      'The gap is between service routing, estimate handling, seasonal timing, and the visible proof people need before they enquire.',
    benefits: [
      {
        icon: Trees,
        title: 'Maintenance and project demand blur together',
        description:
          'Recurring maintenance, one-off projects, and higher-value landscape work do not move through clearly separated paths.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Estimate booking creates friction',
        description:
          'Site visits, quote requests, and seasonal schedule pressure create delay when the booking path is still loose.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Seasonal follow-up becomes inconsistent',
        description:
          'Quotes, maintenance reminders, and returning customer follow-up depend on memory when the workflow is not structured.',
        iconType: 'accent' as const,
      },
      {
        icon: MapPinned,
        title: 'Proof of work does not support local demand well',
        description:
          'Photos, reviews, service pages, and location coverage all exist but do not reinforce the landscaping work you most want.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'System Layers',
    title: 'The working layers behind a steadier landscaping pipeline',
    description:
      'The system supports maintenance demand, estimate booking, seasonal follow-up, and visual trust-building without turning the business into admin overhead.',
    featureCategories: [
      {
        title: 'Service routing layer',
        description:
          'Routes maintenance, design, cleanup, and project requests into the right workflow so the right jobs reach the right next step.',
        icon: MessageSquare,
        features: ['Service-type routing', 'Cleaner enquiry capture', 'Job-fit clarity'],
      },
      {
        title: 'Estimate and visit layer',
        description:
          'Structures site visits, quote requests, and next-step booking between first contact and the appointment.',
        icon: Calendar,
        features: ['Estimate scheduling', 'Reminder timing', 'Visit-path clarity'],
      },
      {
        title: 'Seasonal follow-up layer',
        description:
          'Delivers calmer reminders and clearer re-engagement paths for seasonal demand and recurring maintenance.',
        icon: Bell,
        features: ['Seasonal reminders', 'Maintenance follow-up', 'Repeat-demand support'],
      },
      {
        title: 'Trust and proof layer',
        description:
          'Connects reviews, before-and-after proof, and service credibility to local buying decisions before the call happens.',
        icon: ShieldCheck,
        features: ['Review request workflows', 'Project-proof support', 'Trust-building structure'],
      },
      {
        title: 'Local visibility layer',
        description:
          'Aligns service pages, area coverage, and search visibility to reinforce the landscaping services and locations you want.',
        icon: Search,
        features: ['Local service-page alignment', 'Area targeting', 'Search reinforcement'],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'Operational Shift',
    title: 'From reactive landscaping lead handling to a clearer estimate and follow-up flow',
    description:
      'The craft and practical knowledge stay. The repeatable friction around service routing, estimates, and seasonal follow-up gets reduced.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'Before the workflow is structured',
        items: [
          'Different landscaping services arrive through one unclear enquiry path',
          'Estimate visits and project quotes depend on manual back-and-forth',
          'Seasonal and repeat follow-up happens inconsistently',
          'Trust depends too much on one-off reassurance during the buying process',
        ],
      },
      {
        type: 'after' as const,
        title: 'After the workflow is aligned',
        items: [
          'New leads move into the right service path faster',
          'Estimate and reminder flow protect the next step more consistently',
          'Seasonal and repeat follow-up happen with less manual chasing',
          'Reviews and visual proof reinforce stronger decision confidence',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Lead To Booking Flow',
    title: 'From first contact to estimate, booking, and follow-up',
    description:
      'Each stage moves landscaping demand through a specific part of the journey — from first enquiry into the right job path, then into clearer follow-up.',
    packages: [
      {
        name: 'Service routing and qualification',
        description:
          'Routes maintenance, projects, and seasonal service requests into the right path with enough context for a clear first step.',
        price: 'Flow stage 1',
        priceDetail: 'Best when first-contact clarity and service routing are the main issue',
        features: [
          'Service-specific request paths',
          'Cleaner lead qualification',
          'Better job-fit clarity',
        ],
        buttonText: 'Talk Through Scope',
        buttonHref: '/contact',
      },
      {
        name: 'Estimate and visit protection',
        description:
          'Adds steadier estimate booking, reminder support, and clearer handoffs so visits move forward without friction.',
        price: 'Flow stage 2',
        priceDetail: 'Best when estimate friction and loose handoffs are the pressure points',
        features: ['Estimate scheduling support', 'Reminder structure', 'Visit-path clarity'],
        popular: true,
        buttonText: 'See the Setup',
        buttonHref: '/contact',
      },
      {
        name: 'Seasonal and repeat follow-up',
        description:
          'Keeps quotes, completed projects, and repeat service demand moving through a reliable follow-up path.',
        price: 'Flow stage 3',
        priceDetail: 'Best when repeat-demand and follow-up consistency need improvement',
        features: [
          'Quote follow-up workflows',
          'Seasonal reminder support',
          'Review and referral reinforcement',
        ],
        buttonText: 'Request Details',
        buttonHref: '/contact',
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Follow-Up Examples',
    title: 'What the landscaping lead, booking, and follow-up flow looks like in practice',
    description:
      'Repeatable situations where the system reduces friction without making the business feel scripted.',
    workflows: [
      {
        trigger:
          'A property owner wants to know whether the business handles maintenance, a one-off cleanup, or a larger project.',
        actions: [
          'Capture service type early',
          'Route the lead into the right job path',
          'Reduce wasted time on unclear first contact',
        ],
      },
      {
        trigger:
          'A site visit or estimate is being booked and timing and next steps need confirming.',
        actions: [
          'Move the request into a booked visit',
          'Send reminders and clear next-step guidance',
          'Support cleaner internal handoff',
        ],
      },
      {
        trigger:
          'A project quote or seasonal service opportunity is still pending and the business wants to follow up without chasing manually.',
        actions: [
          'Send measured follow-up at the right times',
          'Keep the opportunity visible internally',
          'Support the decision with reviews and visual proof if needed',
        ],
      },
    ],
    backgroundColor: 'bg-section-surface',
    cssPrefix: 'landscaping-workflow-examples',
  };

  const exploreData = {
    badge: 'Explore',
    description:
      'Relevant service layers for landscaping companies that want cleaner estimates, better seasonal follow-up, and stronger local trust.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description:
          'See the core system layer that holds landscaping demand, estimates, and follow-up together.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'Booking & Scheduling System',
        description: 'Support estimate visits, reminders, and clearer next-step handling.',
        href: '/services/booking-scheduling-system',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen local landscaping visibility and service-area trust.',
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
    backgroundColor: 'bg-section-muted',
    ctaLabel: 'View Service',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Common questions about landscaping systems',
    description: 'Common questions about MindWP for landscaping companies',
    faqs: [
      {
        question: 'How can a landscaping company get better local enquiries from its website?',
        answer:
          'Make service pages specific around maintenance, cleanups, hardscaping, garden projects, and the areas you serve. Then simplify the first contact path so people can describe the right kind of work and see a clear next step.',
      },
      {
        question: 'Should landscaping businesses offer online estimate requests?',
        answer:
          'Yes. A clear estimate-request path reduces back-and-forth and moves the right kinds of jobs into the next step faster. The key is capturing enough detail early so the team knows what kind of visit or quote is needed.',
      },
      {
        question: 'How can landscaping companies manage seasonal demand better?',
        answer:
          'Seasonal demand is easier to handle when service requests are routed clearly, estimate booking is simple, and reminders do not rely entirely on manual effort. The aim is to stop avoidable confusion from making busy periods harder than they need to be.',
      },
      {
        question: 'Do landscaping companies need separate pages for different services?',
        answer:
          'Yes. Separate pages help visitors and search engines understand the work you do. They also route people into the right estimate or booking path instead of forcing everything through one generic page.',
      },
      {
        question: 'How should landscaping businesses follow up on quotes?',
        answer:
          'Calm, well-timed follow-up that confirms the next step, keeps the opportunity visible, and makes it easy for the prospect to reply. The aim is clarity and consistency, especially when project decisions take time.',
      },
      {
        question: 'What kind of reviews matter most for landscapers?',
        answer:
          'Reviews that mention reliability, communication, and quality of work carry the most weight. Project photos and visible proof of work also matter, especially when they support the kind of landscaping jobs you most want to win.',
      },
    ],
  };

  return {
    slug: 'landscaping-companies',
    industries: ['landscaping'],
    systems: [
      'smart-website-systems',
      'ai-lead-handling',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['local-service-pages', 'follow-up', 'review-generation'],
    type: 'detail',
    parentSlug: 'home-services',
    seo: {
      title: 'Landscaping — Smart Website Systems | MindWP',
      description:
        'Smart Website systems for landscaping companies that need clearer service routing, estimate booking, and stronger seasonal follow-up.',
      keywords: [
        'landscaping website design',
        'landscaping lead generation website',
        'landscaping marketing system',
        'landscaping lead automation system',
        'landscaping reputation management system',
      ],
      canonical: '/industries/home-services/landscaping-companies',
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
      title: 'Build a steadier landscaping system',
      description:
        'If loose service routing, estimate friction, inconsistent seasonal follow-up, or weak local proof are slowing things down, we can map a practical system around how the work actually runs.',
      primaryAction: { variant: 'white', label: 'Start a Conversation', href: '/contact' },
      secondaryAction: {
        label: 'See Home Services',
        href: '/industries/home-services',
      },
    },
  };
}

export const landscapingCompaniesIndustryPageData: IndustryPageData =
  buildLandscapingCompaniesIndustryPageData();
