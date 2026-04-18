import React from 'react';
import { ShieldCheck, Workflow, Zap } from 'lucide-react';

import * as SectionsBlog from '@/components/reusable/sections/blog';
import * as SectionsCaseStudies from '@/components/reusable/sections/case-studies';
import * as SectionsCore from '@/components/reusable/sections/core';
import * as SectionsFeatures from '@/components/reusable/sections/features';
import * as SectionsIndustries from '@/components/reusable/sections/industries';
import * as SectionsResources from '@/components/reusable/sections/resources';
import * as SectionsService from '@/components/reusable/sections/service';
import * as ComponentsSingle from '@/components/reusable/single';
import { componentDocs } from '@/utils/componentDocs.generated';

export interface ComponentInfo {
  name: string;
  category: string;
  importPath: string;
  filePath: string;
}

type ComponentPropDoc = {
  name: string;
  type: string;
  optional: boolean;
};

type ComponentDoc = {
  filePath?: string;
  props?: ComponentPropDoc[];
  usageCount?: number;
};

const MOCK_ICONS: Array<React.ComponentType<{ className?: string }>> = [ShieldCheck, Workflow, Zap];

const getMockIcon = (seed = 0) => {
  const safeIndex = Math.abs(seed) % MOCK_ICONS.length;
  return MOCK_ICONS[safeIndex] ?? ShieldCheck;
};

const hashSeed = (value: string) => {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(index);
    hash |= 0;
  }
  return Math.abs(hash);
};

const PREVIEW_VARIATION_EXCLUDED_PROPS = new Set([
  'as',
  'headingLevel',
  'headingTag',
  'alignment',
  'align',
  'wrapper',
  'includeContainer',
]);

const MOCK_ACTION = {
  label: 'Book strategy call',
  href: '/contact',
  icon: getMockIcon(0),
};

const makeGenericCardItem = (index: number) => ({
  title: `Example item ${index + 1}`,
  subtitle: 'Optional subtitle',
  description: 'Example description to show full layout and spacing.',
  label: `Label ${index + 1}`,
  text: 'Example supporting text',
  value: `${(index + 1) * 10}%`,
  icon: getMockIcon(index),
  iconType: index % 2 === 0 ? 'primary' : 'secondary',
  href: '/contact',
  buttonText: 'Learn more',
  buttonVariant: 'primary',
});

const inferArrayValue = (propName: string, typeText: string, seed = 0): unknown[] => {
  const lowerName = propName.toLowerCase();
  const normalized = typeText.replace(/\s+/g, ' ').trim();

  if (lowerName.includes('comparison')) {
    return [
      {
        type: 'before',
        title: 'Before systemization',
        items: ['Manual routing', 'Slow first response', 'No ownership clarity'],
      },
      {
        type: 'after',
        title: 'After systemization',
        items: ['Automated assignment', 'Instant acknowledgment', 'Clear lifecycle stages'],
      },
    ];
  }

  if (lowerName.includes('painpoint') || lowerName.includes('pain_points')) {
    return [
      {
        before: 'Leads wait hours before first response.',
        after: 'Every lead gets immediate acknowledgment and owner assignment.',
      },
      {
        before: 'No shared view of pipeline status across the team.',
        after: 'Stages and handoffs are visible in one operational dashboard.',
      },
    ];
  }

  if (lowerName === 'features' && /\bFeatureItem\[\]/.test(normalized)) {
    return [
      {
        icon: getMockIcon(seed),
        name: 'Lead capture automation',
        detail: 'Convert inbound forms and chats into qualified pipeline entries.',
      },
      {
        icon: getMockIcon(seed + 1),
        name: 'Lifecycle follow-up',
        detail: 'Trigger timely reminders and context-aware next-step nudges.',
      },
      {
        icon: getMockIcon(seed + 2),
        name: 'Pipeline visibility',
        detail: 'Track each stage from first touch to close in one workflow view.',
      },
    ];
  }

  if (/\bstring\[\]|Array<string>/.test(normalized)) {
    if (lowerName.includes('action')) return ['Capture lead', 'Assign owner', 'Send follow-up'];
    if (lowerName.includes('highlight')) return ['Faster response times', 'Cleaner pipeline'];
    if (lowerName.includes('list')) return ['Visibility', 'Attribution', 'Conversion'];
    return ['Example item one', 'Example item two', 'Example item three'];
  }

  if (/\bnumber\[\]|Array<number>/.test(normalized)) return [1, 2, 3];
  if (/\bboolean\[\]|Array<boolean>/.test(normalized)) return [true, false];

  if (lowerName.includes('faq')) {
    return [
      {
        question: 'How quickly can this be implemented?',
        answer: 'Most teams can launch the first workflow in 1-2 weeks.',
      },
      {
        question: 'Will this work with my current stack?',
        answer: 'Yes, the system is designed to integrate incrementally.',
      },
    ];
  }

  if (lowerName.includes('step')) {
    return [
      {
        number: '01',
        step: 1,
        title: 'Map touchpoints',
        subtitle: 'Identify where leads are dropping',
        description: 'Audit all inbound channels and handoff moments.',
        action: 'List every lead entry point and who receives each lead today.',
        expectedResult: 'You can identify delayed handoffs and missing ownership.',
        icon: getMockIcon(seed),
        iconType: 'primary',
        highlights: ['Track source quality', 'Define handoff SLA'],
      },
      {
        number: '02',
        step: 2,
        title: 'Automate follow-up',
        subtitle: 'Route and respond instantly',
        description: 'Deploy CRM rules and message flows to reduce lag.',
        action: 'Set up instant acknowledgment and routing rules by service intent.',
        expectedResult: 'Leads get immediate confirmation and cleaner assignment.',
        icon: getMockIcon(seed + 1),
        iconType: 'secondary',
        highlights: ['Instant acknowledgment', 'Rep assignment logic'],
      },
    ];
  }

  if (lowerName.includes('feature')) {
    return [
      {
        title: 'Pipeline visibility',
        description: 'Track lead state from first contact to close.',
        icon: getMockIcon(seed),
        iconType: 'primary',
      },
      {
        title: 'Follow-up automation',
        description: 'Reduce response delay with predefined workflows.',
        icon: getMockIcon(seed + 1),
        iconType: 'accent',
      },
    ];
  }

  if (lowerName.includes('pain')) {
    return [
      {
        title: 'Leads stall after first touch',
        description: 'Manual handoffs delay response and reduce conversion.',
        impact: 'Revenue leak',
        solution: 'Automated assignment and sequence kickoff',
        icon: getMockIcon(seed),
      },
      {
        title: 'No lifecycle visibility',
        description: 'Teams cannot see where opportunities get stuck.',
        impact: 'Missed opportunities',
        solution: 'Unified stage tracking with alerts',
        icon: getMockIcon(seed + 1),
      },
    ];
  }

  if (
    lowerName.includes('benefit') ||
    lowerName.includes('item') ||
    lowerName.includes('card') ||
    lowerName.includes('case') ||
    lowerName.includes('usecase') ||
    lowerName.includes('workflow') ||
    lowerName.includes('technology')
  ) {
    return [makeGenericCardItem(0), makeGenericCardItem(1), makeGenericCardItem(2)];
  }

  return [makeGenericCardItem(0), makeGenericCardItem(1)];
};

const inferObjectValue = (
  propName: string,
  typeText: string,
  seed = 0
): Record<string, unknown> => {
  const lowerName = propName.toLowerCase();
  const normalized = typeText.replace(/\s+/g, ' ').trim();

  if (normalized.includes('ButtonProps') || lowerName.includes('action')) {
    return { ...MOCK_ACTION };
  }

  if (lowerName.includes('badge')) {
    return {
      text: 'Systems-first approach',
      icon: React.createElement(getMockIcon(seed), {}),
      className: 'badge badge-outline-white cta__badge',
    };
  }

  return {
    title: 'Example object title',
    description: 'Example object description',
    icon: getMockIcon(seed),
    href: '/contact',
  };
};

const USAGE_SEEDED_PRESETS: Record<string, Record<string, unknown>> = {
  Button: {
    label: 'Start conversation',
    icon: getMockIcon(0),
    href: '/contact',
    variant: 'primary',
  },
  WorkflowStepCard: {
    trigger: 'A new lead form is submitted',
    actions: ['Create contact record', 'Assign owner', 'Send confirmation message'],
    triggerLabel: 'When...',
    actionsLabel: 'Then automatically:',
  },
  CaseStudyCardsSection: {
    title: 'Related case studies',
    description: 'Concrete implementation snapshots with clear outcomes.',
    studies: [
      {
        slug: 'auto-repair-missed-call-recovery',
        industry: 'Auto Repair',
        client: 'Northside Auto Care',
        location: 'Manchester',
        metaDescription: 'Missed-call recovery and callback automation for a busy repair shop.',
        publishDate: 'April 2026',
      },
      {
        slug: 'hvac-emergency-lead-routing',
        industry: 'HVAC',
        client: 'Summit Heating & Air',
        location: 'Leeds',
        metaDescription: 'Emergency lead routing with clearer ownership and faster response.',
        publishDate: 'March 2026',
      },
      {
        slug: 'crm-pipeline-visibility-transformation',
        industry: 'Home Services',
        client: 'ClearFlow Services',
        location: 'Birmingham',
        metaDescription: 'Pipeline visibility rebuild with routing, follow-up, and reporting.',
        publishDate: 'February 2026',
      },
    ],
  },
  AutoRelatedContentCardsSection: {
    title: 'Related next steps',
    description: 'Preview of related pages with a valid section header action set.',
    items: [
      {
        title: 'CRM Infrastructure Implementation',
        desc: 'Connect routing, handoff, and follow-up into one system.',
        href: '/services/crm-infrastructure-implementation',
      },
      {
        title: 'Auto-reply Funnel',
        desc: 'See how first-response automation is structured.',
        href: '/resources/auto-reply-funnel',
      },
      {
        title: 'Lead Response Framework',
        desc: 'Operational checklist for reducing response delays.',
        href: '/resources/lead-response-time-framework',
      },
    ],
    primaryAction: { label: 'See all resources', href: '/resources' },
    secondaryAction: { label: 'View services', href: '/services' },
    sessionVariantKey: 'component-library-related-cards-style',
  },
  ServiceCTASection: {
    badge: {
      text: 'Implementation-ready',
      icon: React.createElement(getMockIcon(1), {}),
      className: 'badge badge-outline-white cta__badge',
    },
    title: 'Ready to streamline lead-to-close operations?',
    description: 'Book a practical review focused on bottlenecks and quick wins.',
    primaryAction: { ...MOCK_ACTION },
    secondaryAction: { label: 'View services', href: '/services', icon: getMockIcon(2) },
    metaItems: [{ text: 'No-pressure consultative session' }],
  },
  SplitHeroSection: {
    badge: 'Feature spotlight',
    badgeIcon: getMockIcon(2),
    title: 'Automation feature stack in context',
    description: 'A richer preview aligned with feature-page usage.',
    visualContent: React.createElement('div', { className: 'rounded-lg border p-4' }, 'Preview'),
    primaryAction: { ...MOCK_ACTION },
    stats: [
      { value: '24/7', label: 'Coverage' },
      { value: '3x', label: 'Faster follow-up' },
    ],
  },
  DualFeatureCardsSection: {
    badge: 'Feature area',
    title: 'Long headline to turn your visitors into customers',
    description: 'Two concise feature blocks with primary actions.',
    cards: [
      {
        eyebrow: 'Feature one',
        title: 'Medium title placeholder text',
        description:
          'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
        primaryAction: { label: 'Call to action', href: '/contact' },
      },
      {
        eyebrow: 'Feature two',
        title: 'Medium title placeholder text',
        description:
          'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
        primaryAction: { label: 'Call to action', href: '/contact' },
      },
    ],
  },
  StackedFeatureListSection: {
    badge: 'Tagline',
    title: 'Long headline to turn your visitors into customers',
    description: 'Left stacked features paired with right narrative content.',
    features: [
      {
        title: 'Feature One',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        icon: getMockIcon(0),
      },
      {
        title: 'Feature Two',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        icon: getMockIcon(1),
      },
      {
        title: 'Feature Three',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        icon: getMockIcon(2),
      },
    ],
    variant: 'icon',
    tagline: 'Tagline',
    narrativeTitle: 'Long headline to turn your visitors into customers',
    narrativeParagraphs: [
      'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.',
    ],
    layout: 'split-features',
    stats: [
      { value: '24/7', label: 'Coverage' },
      { value: '3x', label: 'Faster follow-up' },
    ],
    primaryAction: { label: 'Call to action', href: '/contact' },
    secondaryAction: { label: 'Secondary action', href: '/services' },
  },
  BlogImageSection: {
    heading: 'System screenshot in context',
    src: '/images/og-default.jpg',
    alt: 'MindWP interface preview used inside a blog section example',
    caption: 'Example implementation visual used to support the article narrative.',
  },
  BlogQuoteSection: {
    heading: 'Key idea worth isolating',
    quote:
      'If the process only works when one person remembers every next step, the system is still fragile.',
    attribution: 'MindWP operations review note',
  },
  TransformationProofSection: {
    badge: 'Proof',
    title: 'What changed after the system was implemented',
    description: 'A deterministic three-stage proof pattern with emphasis on the build phase.',
    before: {
      title: 'Before: slow response and weak visibility',
      points: [
        'Leads waited hours before anyone replied',
        'No clear ownership after first contact',
        'The team could not see where opportunities stalled',
      ],
    },
    build: {
      title: 'What we built: one structured response layer',
      description:
        'We connected capture, routing, and follow-up into one operating flow so the team could respond with clear ownership.',
      highlights: [
        'Unified lead capture across channels',
        'Automated routing and acknowledgment',
        'Tracked follow-up with visible ownership',
      ],
    },
    after: {
      title: 'After: faster response and cleaner handoff',
      results: [
        'Every lead entered one visible workflow',
        'Response times dropped from hours to minutes',
        'The team could see the next action at every stage',
      ],
    },
  },
  DarkSplitShowcaseSection: {
    badge: 'Accent heading',
    title: 'Long headline to turn your visitors into customers',
    description: 'Dark showcase with intro copy, CTAs, and split feature panels.',
    headerPrimaryAction: { label: 'Header action', href: '/contact' },
    headerSecondaryAction: { label: 'Header secondary', href: '/services' },
    introHeading: 'Long headline to turn your visitors into customers',
    introDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    primaryAction: { label: 'Call to action', href: '/contact' },
    secondaryAction: { label: 'Secondary action', href: '/services' },
    panels: [
      {
        eyebrow: 'Accent heading',
        title: 'Long headline to turn your visitors into customers',
        description: 'Short supporting explanation for panel content.',
        checklist: ['Fast lorem ipsum text', 'Fast lorem ipsum text', 'Fast lorem ipsum text'],
        primaryAction: { label: 'Call to action', href: '/contact' },
        secondaryAction: { label: 'Secondary action', href: '/resources' },
      },
      {
        eyebrow: 'Accent heading',
        title: 'Long headline to turn your visitors into customers',
        description: 'Short supporting explanation for panel content.',
        checklist: ['Fast lorem ipsum text', 'Fast lorem ipsum text', 'Fast lorem ipsum text'],
        primaryAction: { label: 'Call to action', href: '/contact' },
        secondaryAction: { label: 'Secondary action', href: '/resources' },
      },
    ],
  },
  NarrativeStatsSection: {
    badge: 'Tagline',
    title: 'Long headline to turn your visitors into customers',
    description: 'Narrative copy paired with stat highlights.',
    tagline: 'Tagline',
    narrativeHeading: 'Long headline to turn your visitors into customers',
    narrativeParagraphs: [
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text.',
      'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    ],
    primaryAction: { label: 'Call to action', href: '/contact' },
    secondaryAction: { label: 'Secondary action', href: '/services' },
    stats: [
      { value: '+60', label: 'Custom-made templates to suit all your design needs' },
      { value: '85%', label: 'Users report increased client satisfaction after using our product' },
    ],
  },
  ImageStatsServicesSection: {
    title: 'Experience innovation like never before ever after',
    description: 'Top split with image, stats narrative, and supporting service rows.',
    image: {
      src: '/images/placeholders/service-card-1.svg',
      alt: 'Team reviewing website strategy together',
    },
    narrativeTitle: 'Experience innovation like never before ever after',
    narrativeParagraphs: [
      'Together, we can make a real impact in communities around the world and bring hope and support.',
      'Our team combines design, systems, and execution to produce measurable outcomes.',
    ],
    stats: [
      {
        value: '35+',
        label: 'Projects done',
        description: 'Home value is determined by factors like location, property condition.',
      },
      {
        value: '17K',
        label: 'Projects done',
        description: 'Home value is determined by factors like location, property condition.',
      },
      {
        value: '17K',
        label: 'Projects done',
        description: 'Home value is determined by factors like location, property condition.',
      },
      {
        value: '74+',
        label: 'Projects done',
        description: 'Home value is determined by factors like location, property condition.',
      },
    ],
    services: [
      {
        title: 'Custom Website Design',
        description:
          'We are a passionate team of designer, developers, and strategists who come together to craft website that not only reflect brand but also drive results.',
      },
      {
        title: 'Custom Website Design',
        description:
          'We are a passionate team of designer, developers, and strategists who come together to craft website that not only reflect brand but also drive results.',
      },
      {
        title: 'Custom Website Design',
        description:
          'We are a passionate team of designer, developers, and strategists who come together to craft website that not only reflect brand but also drive results.',
      },
      {
        title: 'Responsive Design',
        description:
          'We are a passionate team of designer, developers, and strategists who come together to craft website that not only reflect brand but also drive results.',
      },
      {
        title: 'Responsive Design',
        description:
          'We are a passionate team of designer, developers, and strategists who come together to craft website that not only reflect brand but also drive results.',
      },
      {
        title: 'Responsive Design',
        description:
          'We are a passionate team of designer, developers, and strategists who come together to craft website that not only reflect brand but also drive results.',
      },
    ],
  },
  TestimonialSpotlightSplitSection: {
    badge: 'Join over 13,000 users using Layers',
    title: 'Build websites faster and better than your competitors.',
    description:
      'Working with this plugin has completely transformed the way our team approaches web design projects.',
    narrativeTitle: 'Build websites faster and better than your competitors.',
    narrativeParagraphs: [
      'Working with this plugin has completely transformed the way our team approaches web design projects.',
      "As someone who's led multiple cross-functional design teams, this improved collaboration across the board.",
    ],
    primaryAction: { label: 'Send a Message', href: '/contact' },
    testimonial: {
      quote:
        'This has been a game-changer for our agency. The ability to quickly prototype, iterate, and deploy designs has drastically reduced project turnaround time.',
      name: 'Wade Warren',
      role: 'Head of Content Operations',
      rating: 5,
      avatars: [
        { src: '/images/placeholders/service-card-1.svg', alt: 'Client avatar one' },
        { src: '/images/placeholders/service-card-2.svg', alt: 'Client avatar two' },
        { src: '/images/placeholders/service-card-3.svg', alt: 'Client avatar three' },
        { src: '/images/placeholders/service-card-4.svg', alt: 'Client avatar four' },
      ],
    },
  },
  TabbedFeatureCardsSection: {
    badge: 'Features',
    title: 'Experience innovation like never before ever after',
    description: 'Pick the perfect plan and scale with ease. Flexible pricing and no hidden fees.',
    tabs: ['Website Design', 'Developer', 'Analyst', 'Marketing'],
    activeTab: 'Website Design',
    showImageGrid: false,
    imageGrid: [
      { src: '/images/placeholders/service-card-1.svg', alt: 'Sample feature visual one' },
      { src: '/images/placeholders/service-card-2.svg', alt: 'Sample feature visual two' },
      { src: '/images/placeholders/service-card-3.svg', alt: 'Sample feature visual three' },
      { src: '/images/placeholders/service-card-4.svg', alt: 'Sample feature visual four' },
    ],
    cards: [
      {
        title: 'Introduction to Backend Development',
        description:
          'Website design is the process of creating and web arranging the visual look, and user in out of a website. It combines creativity with technology.',
        icon: getMockIcon(0),
      },
      {
        title: 'Frontend vs Backend - Key Differences',
        description:
          'Website design is the process of creating and web arranging the visual look, and user in out of a website. It combines creativity with technology.',
        icon: getMockIcon(1),
      },
      {
        title: 'Popular Backend Programming Languages',
        description:
          'Website design is the process of creating and web arranging the visual look, and user in out of a website. It combines creativity with technology.',
        icon: getMockIcon(2),
      },
      {
        title: 'Scalability and Performance Optimization',
        description:
          'Website design is the process of creating and web arranging the visual look, and user in out of a website. It combines creativity with technology.',
        icon: getMockIcon(0),
      },
      {
        title: 'Authentication and User Management',
        description:
          'Website design is the process of creating and web arranging the visual look, and user in out of a website. It combines creativity with technology.',
        icon: getMockIcon(1),
      },
      {
        title: 'Introduction to Backend Development',
        description:
          'Website design is the process of creating and web arranging the visual look, and user in out of a website. It combines creativity with technology.',
        icon: getMockIcon(2),
      },
    ],
  },
  FeatureStatsMockupSection: {
    badge: 'Short word',
    title: 'Experience innovation like never before ever after',
    description: 'Pick the perfect plan and scale with ease. Flexible pricing with no hidden fees.',
    narrativeTitle: 'Experience the best with our powerful features',
    narrativeParagraph:
      'Our platform offers smart, intuitive tools to boost efficiency, accuracy, and user experience for beginners and pros alike.',
    checklist: [
      'AI-powered insights',
      'Seamless user experience',
      'Scalable solutions',
      'Hassle-free support call scheduling',
      'Reliable automation setup',
    ],
    panelTitle: 'Sales Performance',
    panelPrimaryMetric: { label: 'Online store', value: '85.5%', tone: 'primary' },
    panelSecondaryMetric: { label: 'Offline store', value: '64.8%', tone: 'accent' },
    panelNoteTitle: 'Recommendation:',
    panelNoteDescription:
      'Savings exceed goals and spending is intentional. Budgets are automated.',
  },
  StepCardsSplitSection: {
    badge: 'Short word',
    title: 'Everything you need to know - your questions, answered!',
    description:
      'From pricing to features and security, we covered common questions to support informed decisions.',
    primaryAction: { label: 'Talk to us', href: '/contact' },
    steps: [
      {
        number: '01',
        title: 'Choose a template',
        description:
          'Browse our collection of professional designed website templates and pick the right foundation.',
      },
      {
        number: '02',
        title: 'Add media',
        description:
          'Upload your images, videos, and graphics to personalize your template and showcase your brand.',
      },
      {
        number: '03',
        title: 'Modify content',
        description:
          'Customize text, colors, and layout to reflect your message, sections, and business priorities.',
      },
      {
        number: '04',
        title: 'Publish & launch',
        description:
          'When ready, launch with one click and make your site accessible to the world.',
      },
    ],
  },
  DualToneChecklistComparisonSection: {
    badge: 'Why me?',
    title: 'Why choose us over other web design agencies?',
    description: 'Direct comparison with clear operational differences.',
    leftColumn: {
      title: 'Our firm',
      items: [
        {
          title: 'Custom-built websites, not templates',
          description:
            'Every site is designed from scratch to match your brand, goals, and journey.',
        },
        {
          title: 'Fast-loading, SEO-optimized, conversion-focused',
          description:
            'Built for speed, mobile responsiveness, and rankings that drive qualified leads.',
        },
        {
          title: 'Full access: domain, code, CMS',
          description: 'You maintain complete ownership and flexibility after launch.',
        },
        {
          title: 'Post-launch support and training',
          description: 'We stay available after delivery with fixes, guidance, and accountability.',
        },
      ],
    },
    rightColumn: {
      title: 'Other firms',
      items: [
        {
          title: 'Generic templates with minor tweaks',
          description: 'Pre-made themes often create similar outcomes across competitors.',
        },
        {
          title: 'Focus on looks, not speed or ROI',
          description: 'Beautiful pages can still underperform without technical structure.',
        },
        {
          title: 'Restricted access and lock-in',
          description: 'Small edits still depend on vendor access and hidden constraints.',
        },
        {
          title: 'Limited post-launch support',
          description: 'Follow-up help is often inconsistent once the project is delivered.',
        },
      ],
    },
  },
  ImageAccordionStripSection: {
    title: 'What we can do for you, simple, smart & seamless experience',
    description:
      'From pricing to features and security, we covered common questions to help you make informed decisions.',
    items: [
      {
        title: 'Engine Bay Cleaning',
        image: '/images/placeholders/service-card-1.svg',
        alt: 'Engine bay cleaning service',
      },
      {
        title: 'Interior Detailing',
        image: '/images/placeholders/service-card-2.svg',
        alt: 'Interior detailing service',
      },
      {
        title: 'Exterior Hand Wash',
        image: '/images/placeholders/service-card-3.svg',
        alt: 'Exterior hand wash service',
      },
      {
        title: 'Tire & Wheel Cleaning',
        image: '/images/placeholders/service-card-4.svg',
        alt: 'Tire and wheel cleaning service',
      },
      {
        title: 'Wax & Polish',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Wax and polish service',
      },
    ],
  },
  ServiceSpectrumCardsSection: {
    title: 'Spectrum of website design & development',
    description:
      'Explore our core service areas and discover how we can elevate your digital presence.',
    primaryAction: { label: 'Get in touch', href: '/contact' },
    cards: [
      {
        title: 'Custom Website Design',
        description: 'Crafting visually stunning, user-friendly websites that set you apart.',
        points: [
          'Custom Website Design',
          'Responsive Design',
          'Landing Page Design',
          'Wireframing & Prototyping',
          'Conversion UX Review',
        ],
      },
      {
        title: 'SEO & Digital Marketing',
        description: 'Crafting visually stunning, user-friendly websites that set you apart.',
        points: [
          'Technical SEO Setup',
          'Responsive Design',
          'Landing Page Design',
          'Wireframing & Prototyping',
          'Funnel Tracking',
        ],
        featured: true,
      },
      {
        title: 'E-Commerce Solutions',
        description: 'Crafting visually stunning, user-friendly websites that set you apart.',
        points: [
          'Custom Website Design',
          'Responsive Design',
          'Landing Page Design',
          'Wireframing & Prototyping',
          'Checkout Optimization',
        ],
      },
      {
        title: 'UI/UX Consulting',
        description: 'Crafting visually stunning, user-friendly websites that set you apart.',
        points: [
          'Custom Website Design',
          'Responsive Design',
          'Landing Page Design',
          'Wireframing & Prototyping',
          'Usability Testing',
        ],
      },
    ],
  },
  IconListCard: {
    title: 'Automation capabilities',
    icon: getMockIcon(0),
    features: [
      {
        icon: getMockIcon(0),
        name: 'Lead capture automation',
        detail: 'Form and chat leads enter the pipeline automatically.',
      },
      {
        icon: getMockIcon(1),
        name: 'Routing logic',
        detail: 'Auto-assign leads by service, location, or intent.',
      },
    ],
  },
  TechnologyCardsSection: {
    badge: 'Technology stack',
    title: 'Production-ready components',
    description: 'Cards include explicit titles, descriptions, and a visible footer.',
    technologies: [
      {
        name: 'Next.js',
        description: 'App Router foundation with static-first content delivery.',
        icon: getMockIcon(0),
      },
      {
        name: 'React',
        description: 'Composable UI primitives and reusable section architecture.',
        icon: getMockIcon(1),
      },
      {
        name: 'Playwright',
        description: 'Smoke coverage for route and SEO validation.',
        icon: getMockIcon(2),
      },
    ],
    footer: React.createElement(
      'div',
      { className: 'text-sm text-muted-foreground' },
      'Footer preview: this text should be visible.'
    ),
  },
  ScenarioCardsSection: {
    badge: 'Use cases',
    title: 'Scenarios and outcomes',
    description: 'Each card should show scenario, solution, and result text.',
    scenarioLabel: 'Scenario',
    solutionLabel: 'Solution',
    useCases: [
      {
        icon: getMockIcon(0),
        title: 'Missed follow-ups',
        scenario: 'Leads contact you after hours and wait until next business day.',
        solution: 'Trigger instant acknowledgment and assign owner automatically.',
        result: 'Higher response rates and fewer dropped opportunities.',
      },
      {
        icon: getMockIcon(1),
        title: 'Pipeline blind spots',
        scenario: 'No clear view of stalled opportunities in your CRM.',
        solution: 'Add stage-based alerts and SLA checkpoints.',
        result: 'Faster progression from inquiry to booked consultation.',
      },
    ],
  },
  ResourceChecklistSection: {
    heading: 'Execution checklist',
    content: ['Follow these steps to launch safely.'],
    items: ['Audit route coverage', 'Validate metadata', 'Confirm conversion paths'],
    columns: 1,
  },
  ResourceComparisonSection: {
    heading: 'Before vs after implementation',
    content: [
      'Compare current manual workflows with a structured automated system.',
      'A simple before-and-after view helps the workflow shift read immediately.',
    ],
    before: {
      title: 'Before',
      items: [
        'Leads sit in inboxes for hours',
        'No consistent assignment process',
        'Follow-up quality varies by team member',
      ],
    },
    after: {
      title: 'After',
      items: [
        'Instant acknowledgment and owner assignment',
        'Clear routing rules by service and location',
        'Standardized follow-up workflows and reporting',
      ],
    },
  },
  ResourceCaseSection: {
    heading: 'Real implementation outcome',
    subheading: 'A practical snapshot from a service business rollout.',
    caseExample: {
      businessType: 'Home services company',
      problem: 'Leads were captured but often left without same-day follow-up.',
      solution: 'We introduced automated routing, acknowledgment messaging, and SLA alerts.',
      result: 'Response times dropped and booked consultations increased in the first month.',
      stat: '+38% increase in booked calls',
    },
    challengeHeading: 'The Challenge',
    solutionHeading: 'The Solution',
    resultHeading: 'The Result',
  },
  ResourceDIYSection: {
    heading: 'DIY workflow starter',
    subheading: 'Run these steps to improve lead handling this week.',
    steps: [
      {
        step: 1,
        title: 'Map incoming channels',
        action: 'Document every form, call source, and chat entry point in one sheet.',
        expectedResult: 'You can see where routing or ownership currently breaks down.',
      },
      {
        step: 2,
        title: 'Define routing rules',
        action: 'Set assignment logic by location, service type, and urgency.',
        expectedResult: 'Each new lead gets a clear owner automatically.',
      },
      {
        step: 3,
        title: 'Automate first response',
        action: 'Send immediate confirmation with expected response window.',
        expectedResult: 'Prospects receive instant feedback and trust improves.',
      },
    ],
    proTip: 'Start with one high-volume service line before expanding automation globally.',
  },
  ResourceTemplatesSection: {
    heading: 'Copy-and-use templates',
    content: [
      'Practical templates your team can use immediately.',
      'Each card shows code-style content so the preview is never blank.',
    ],
    items: [
      {
        title: 'Lead acknowledgment email',
        description: 'First response sent within 1 minute of submission.',
        template:
          'Subject: Thanks for reaching out\n\nHi {{first_name}},\n\nWe received your request and assigned it to {{owner_name}}.\nYou can expect a response within {{sla_window}}.\n\n— {{company_name}} Team',
      },
      {
        title: 'Pipeline handoff note',
        description: 'Internal note format for consistent qualification context.',
        template:
          'Lead Source: {{source}}\nService Intent: {{service}}\nUrgency: {{urgency}}\nNext Action: {{next_action}}\nOwner: {{owner_name}}',
      },
    ],
  },
  FeatureChecklistCardsSection: {
    badge: 'Capability Layers',
    title: 'Grouped capabilities with concrete outcomes',
    description: 'Seeded from homepage/service section usage patterns.',
    featureCategories: [
      {
        title: 'Acquisition',
        features: ['Landing page intent match', 'Local visibility pages', 'Fast lead forms'],
        icon: getMockIcon(0),
        iconType: 'primary',
      },
      {
        title: 'Conversion',
        features: ['Routing rules', 'Message sequencing', 'Pipeline stages'],
        icon: getMockIcon(1),
        iconType: 'secondary',
      },
    ],
    variant: 'default',
    layout: 'split',
  },
  SignalResponseSection: {
    badge: 'Workflow logic',
    title: 'Signals turn into controlled responses',
    description: 'Seeded preview for structured operational workflows.',
    items: [
      {
        title: 'New lead received',
        signal: 'A prospect submits the primary form.',
        response: 'The lead is acknowledged and routed automatically.',
        points: ['Assign owner', 'Start follow-up', 'Log source'],
      },
      {
        title: 'Missed call detected',
        signal: 'The call ends without an answer.',
        response: 'A recovery sequence starts immediately.',
        points: ['Send SMS', 'Create callback task', 'Notify owner'],
      },
    ],
  },
  OutcomeTimelineSection: {
    badge: 'Implementation flow',
    title: 'Each stage resolves to a clear outcome',
    description: 'Seeded preview for implementation walkthroughs.',
    stages: [
      {
        step: '01',
        title: 'Audit the current workflow',
        description: 'Document the real handoff path before system changes begin.',
        outcomes: ['Visible bottlenecks', 'Clear ownership map'],
      },
      {
        step: '02',
        title: 'Launch the first automation layer',
        description: 'Move the most time-sensitive routing logic into the system.',
        outcomes: ['Faster first response', 'Cleaner assignment flow'],
      },
    ],
  },
  DecisionFitSection: {
    badge: 'Qualification',
    title: 'Know whether the system is the right fit',
    description: 'Seeded preview for qualification-only service sections.',
    strongFitTitle: 'Strong fit',
    strongFitItems: ['Clear service offer', 'Active lead flow', 'Team ownership'],
    notFitTitle: 'Not a fit',
    notFitItems: ['No sales process', 'No response capacity', 'No implementation owner'],
  },
  AlternatingDetailRowsSection: {
    badge: 'Operational details',
    title: 'Explain each layer without another flat grid',
    description: 'Seeded preview for alternating narrative and detail rows.',
    items: [
      {
        title: 'Lead routing rules',
        description: 'Each route reflects service intent and response priority.',
        points: ['Intent-based routing', 'Channel-aware assignment', 'Fallback ownership'],
      },
      {
        title: 'Visibility checkpoints',
        description: 'Teams can see where leads stall and what happens next.',
        points: ['Stage progression', 'Missed touchpoints', 'Escalation triggers'],
      },
    ],
  },
  ComparisonEvidenceBand: {
    badge: 'Decision support',
    title: 'Compare the old workflow to the system-backed approach',
    description: 'Seeded preview for comparison plus proof in one band.',
    beforeTitle: 'Before systemization',
    beforeItems: ['Manual handoffs', 'Delayed follow-up', 'No tracking clarity'],
    afterTitle: 'After systemization',
    afterItems: ['Automated routing', 'Immediate response', 'Shared lifecycle visibility'],
    evidenceItems: [
      {
        title: 'Operational proof',
        description: 'The handoff path is visible from first contact to booked action.',
      },
      {
        title: 'Decision proof',
        description: 'Teams can see which workflows improve speed and ownership first.',
      },
    ],
  },
  ComparisonSection: {
    badge: 'Comparison',
    title: 'Before vs after operations',
    description: 'A side-by-side summary of execution quality after implementation.',
    comparisons: [
      {
        type: 'before',
        title: 'Before implementation',
        items: ['Manual qualification', 'Delayed callbacks', 'Scattered notes'],
      },
      {
        type: 'after',
        title: 'After implementation',
        items: ['Automated qualification', 'Fast first response', 'Unified pipeline history'],
      },
    ],
  },
  ProblemCardsSection: {
    badge: 'Operational gaps',
    title: 'Common pre-automation bottlenecks',
    painPoints: [
      {
        before: 'Leads are manually forwarded and often delayed.',
        after: 'Routing and ownership assignment happen instantly.',
      },
      {
        before: 'No consistency in follow-up timing and quality.',
        after: 'Follow-up logic is standardized by workflow stage.',
      },
    ],
  },
  ProcessStepsSection: {
    badge: 'Implementation process',
    title: 'How rollout works',
    description: 'Clear sequence from audit to ongoing optimization.',
    steps: [
      {
        number: '01',
        title: 'Audit touchpoints',
        description: 'Map incoming channels, handoffs and current response times.',
        icon: getMockIcon(0),
        iconType: 'primary',
      },
      {
        number: '02',
        title: 'Build workflows',
        description: 'Configure automation rules for routing and follow-up.',
        icon: getMockIcon(1),
        iconType: 'secondary',
      },
      {
        number: '03',
        title: 'Launch and monitor',
        description: 'Deploy with metrics tracking and iterative tuning.',
        icon: getMockIcon(2),
        iconType: 'accent',
      },
    ],
    layout: 'timeline',
  },
  LinkedIconCardsSection: {
    title: 'Recommended next reads',
    description: 'Choose where to continue based on your current priority.',
    items: [
      {
        title: 'CRM automation blueprint',
        description: 'Set routing, ownership and response standards.',
        href: '/resources',
        icon: getMockIcon(0),
      },
      {
        title: 'Lead response playbook',
        description: 'Message and timing sequences for higher conversion quality.',
        href: '/resources',
        icon: getMockIcon(1),
      },
    ],
  },
  TierCardsSection: {
    badge: 'Packaging',
    title: 'Choose implementation depth',
    description: 'Clear scope and outcomes for each package level.',
    packages: [
      {
        name: 'Core',
        description: 'Baseline system setup for immediate reliability gains.',
        price: '£1,200',
        priceDetail: 'one-time setup',
        features: ['Core workflows', 'Dashboard setup', 'Team handoff'],
        buttonText: 'Request details',
        buttonHref: '/contact',
      },
      {
        name: 'Growth',
        description: 'Expanded automation and conversion optimization.',
        price: '£2,400',
        priceDetail: 'one-time setup',
        features: ['Lead qualification', 'Follow-up journeys', 'Attribution reporting'],
        popular: true,
        buttonText: 'Start conversation',
        buttonHref: '/contact',
      },
    ],
  },
  OptionComparisonSection: {
    title: 'Platform fit comparison',
    platforms: [
      {
        title: 'Current setup',
        description: 'Fragmented tools and manual handoffs.',
        features: ['Slow response times', 'Low visibility', 'Inconsistent follow-up'],
      },
      {
        title: 'MindWP system',
        description: 'Connected website, CRM and automation stack.',
        features: ['Automated routing', 'Shared lifecycle view', 'Conversion-focused workflows'],
      },
    ],
  },
  CaseStudyFeaturesSection: {
    techStackBadgeLabel: 'Tech stack used',
    techStackSectionTitle: 'What we implemented',
    techStackSectionSubtitle: 'Feature groups mapped to measurable outcomes.',
    featuresUsed: [
      { category: 'Acquisition', features: ['Landing funnels', 'SEO structure'] },
      { category: 'Operations', features: ['CRM automation', 'Pipeline alerts'] },
      { category: 'Retention', features: ['Reactivation flows', 'Review requests'] },
    ],
  },
  CaseStudyWorkflowsSection: {
    badge: 'Workflow examples',
    title: 'How leads move through the system',
    description: 'Step-by-step automation once a lead enters the pipeline.',
    workflows: [
      {
        trigger: 'New form submission',
        actions: ['Create contact', 'Assign owner', 'Send instant acknowledgement'],
      },
      {
        trigger: 'No reply in 24 hours',
        actions: ['Send reminder', 'Escalate priority', 'Notify assigned team member'],
      },
    ],
  },
  CaseStudyResultsSection: {
    detailedResultsBadgeLabel: 'Detailed results',
    detailedResultsSectionTitle: 'Measured impact after rollout',
    results: [
      {
        metric: 'Lead response time',
        before: '7h 40m',
        after: '18m',
        improvement: '-96%',
        description: 'Automated routing and first-response messaging removed manual delays.',
      },
      {
        metric: 'Booked consultation rate',
        before: '14%',
        after: '29%',
        improvement: '+107%',
        description: 'Faster follow-up and clearer next steps improved conversion quality.',
      },
    ],
  },
  SectionIntro: {
    badge: 'Systems-First',
    title: 'Section heading from real usage pattern',
    description: 'Preview uses complete heading content with optional actions.',
    primaryAction: { ...MOCK_ACTION },
    secondaryAction: { label: 'See case studies', href: '/case-studies' },
  },
  ServiceHeroSection: {
    badge: 'CRM Automation',
    title: 'Capture, route, and follow-up without manual bottlenecks',
    description: 'Usage-seeded preview from service renderer patterns.',
    list: ['Lead routing', 'Automated follow-up', 'Lifecycle visibility'],
    primaryAction: { ...MOCK_ACTION },
    secondaryAction: { label: 'View services', href: '/services' },
  },
  RelatedCardsSection: {
    title: 'Related insights',
    description: 'Cross-linked pages based on domain context.',
    items: [
      {
        title: 'CRM Infrastructure Implementation',
        desc: 'Service overview',
        href: '/services/crm-infrastructure-implementation',
      },
      { title: 'Auto-reply Funnel', desc: 'Resource guide', href: '/resources' },
    ],
    primaryAction: { ...MOCK_ACTION },
    secondaryAction: { text: 'Browse all resources', href: '/resources' },
  },
};

const MANUAL_COMPONENT_VARIATIONS: Record<
  string,
  Array<{
    variationLabel: string;
    overrides: Record<string, unknown>;
  }>
> = {
  ProcessStepsSection: [
    {
      variationLabel: 'layout = timeline',
      overrides: {
        layout: 'timeline',
      },
    },
  ],
  FeatureChecklistCardsSection: [
    {
      variationLabel: 'layout = split',
      overrides: {
        layout: 'split',
      },
    },
    {
      variationLabel: 'variant = stacked',
      overrides: {
        variant: 'stacked',
      },
    },
  ],
  StackedFeatureListSection: [
    {
      variationLabel: 'layout = narrative-stats',
      overrides: {
        layout: 'narrative-stats',
      },
    },
    {
      variationLabel: 'variant = media',
      overrides: {
        variant: 'media',
      },
    },
  ],
  SignalResponseSection: [
    {
      variationLabel: 'without points',
      overrides: {
        items: [
          {
            title: 'New lead received',
            signal: 'A prospect submits the primary form.',
            response: 'The lead is acknowledged and routed automatically.',
          },
          {
            title: 'Missed call detected',
            signal: 'The call ends without an answer.',
            response: 'A recovery sequence starts immediately.',
          },
        ],
      },
    },
  ],
  OutcomeTimelineSection: [
    {
      variationLabel: 'named phases',
      overrides: {
        stages: [
          {
            step: 'Phase 1',
            title: 'Audit the current workflow',
            description: 'Document the real handoff path before system changes begin.',
            outcomes: ['Visible bottlenecks', 'Clear ownership map'],
          },
          {
            step: 'Phase 2',
            title: 'Launch the first automation layer',
            description: 'Move the most time-sensitive routing logic into the system.',
            outcomes: ['Faster first response', 'Cleaner assignment flow'],
          },
        ],
      },
    },
  ],
  DecisionFitSection: [
    {
      variationLabel: 'no badge',
      overrides: {
        badge: undefined,
      },
    },
  ],
  AlternatingDetailRowsSection: [
    {
      variationLabel: '3 detail rows',
      overrides: {
        items: [
          {
            title: 'Lead routing rules',
            description: 'Each route reflects service intent and response priority.',
            points: ['Intent-based routing', 'Channel-aware assignment', 'Fallback ownership'],
          },
          {
            title: 'Visibility checkpoints',
            description: 'Teams can see where leads stall and what happens next.',
            points: ['Stage progression', 'Missed touchpoints', 'Escalation triggers'],
          },
          {
            title: 'Follow-up governance',
            description: 'The system defines when reminders and escalations occur.',
            points: ['Reminder timing', 'Escalation rules', 'Ownership review'],
          },
        ],
      },
    },
  ],
  ComparisonEvidenceBand: [
    {
      variationLabel: '2 evidence cards',
      overrides: {
        evidenceItems: [
          {
            title: 'Operational proof',
            description: 'The handoff path is visible from first contact to booked action.',
          },
          {
            title: 'Decision proof',
            description: 'Teams can see which workflows improve speed and ownership first.',
          },
        ],
      },
    },
  ],
};

const getStringLiteralUnion = (typeText: string): string[] => {
  const matches = typeText.match(/'([^']+)'|"([^"]+)"/g) ?? [];
  const values = matches.map(v => v.replace(/^['"]|['"]$/g, '').trim()).filter(Boolean);
  return Array.from(new Set(values));
};

const inferMockValue = (propName: string, typeText: string, seed = 0): unknown => {
  const normalized = typeText.replace(/\s+/g, ' ').trim();
  const lowerName = propName.toLowerCase();

  const isSimpleLiteralUnion = /^['"][^'"]+['"](\s*\|\s*['"][^'"]+['"])+(\s*\|\s*undefined)?$/.test(
    normalized
  );
  if (isSimpleLiteralUnion) {
    const literalUnion = getStringLiteralUnion(normalized);
    if (literalUnion.length > 0) return literalUnion[0];
  }

  if (/\[\]|Array<.+>/.test(normalized)) return inferArrayValue(propName, normalized, seed);

  if (/\bIconType\b/.test(normalized)) return 'primary';

  if (/React\.ComponentType|ComponentType/.test(normalized) || lowerName.includes('icon')) {
    return getMockIcon(seed);
  }

  if (/ReactNode|ReactElement|JSX\.Element/.test(normalized)) return 'Example content';

  if (/(^|\W)boolean(\W|$)/.test(normalized)) return false;

  if (lowerName === 'step') return 1;

  if (/(^|\W)number(\W|$)/.test(normalized)) return 0;

  if (/(^|\W)string(\W|$)/.test(normalized)) {
    if (lowerName === 'number') return '01';
    if (lowerName.includes('badge')) return 'Operational snapshot';
    if (lowerName.includes('eyebrow')) return 'Implementation detail';
    if (lowerName.includes('heroheadline')) return 'What changed after the workflow was rebuilt';
    if (lowerName.includes('headline')) return 'Operational clarity without extra manual handoffs';
    if (lowerName.includes('title')) return 'Example Title';
    if (lowerName.includes('description')) return 'Example description';
    if (lowerName.includes('content'))
      return 'Example supporting narrative for the section preview.';
    if (lowerName.includes('heading')) return 'Example Heading';
    if (lowerName.includes('label')) return 'View implementation summary';
    if (lowerName.includes('industry')) return 'Automotive Services';
    if (lowerName.includes('business')) return 'Northside Auto Care';
    if (lowerName.includes('location')) return 'Manchester';
    if (lowerName.includes('duration')) return '6 weeks';
    if (lowerName.includes('completeddate')) return 'April 2026';
    if (lowerName.includes('scenario')) return 'Missed-call recovery';
    if (lowerName.includes('alt')) return 'Example image alt text';
    if (lowerName === 'src' || lowerName.endsWith('src')) return '/images/og-default.jpg';
    return `${propName}-value`;
  }

  if (/Record<|\{.*\}|ButtonProps/.test(normalized) || /^[A-Z][A-Za-z0-9_]*$/.test(normalized)) {
    return inferObjectValue(propName, normalized, seed);
  }

  return undefined;
};

const canUseAsVariantOverride = (value: unknown) => {
  if (value === undefined || value === null) return false;
  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
    return true;
  }
  return false;
};

const getComponentDoc = (name: string): ComponentDoc | undefined => {
  return (componentDocs as Record<string, ComponentDoc | undefined>)[name];
};

export const generateMockData = (componentName: string) => {
  const doc = getComponentDoc(componentName);
  const props = Array.isArray(doc?.props) ? doc.props : [];

  const base: Record<string, unknown> = {};

  for (const [propIndex, prop] of props.entries()) {
    if (!prop?.name || prop.name === 'variationLabel') continue;

    const seed = hashSeed(`${componentName}:${prop.name}:${String(propIndex)}`);
    const inferred = inferMockValue(prop.name, prop.type ?? '', seed);
    if (inferred === undefined) {
      if (prop.optional) continue;
      return null;
    }

    base[prop.name] = inferred;
  }

  const preset = USAGE_SEEDED_PRESETS[componentName];
  if (preset) {
    Object.assign(base, preset);
  }

  if (componentName === 'Button') {
    delete base.as;
    delete base.children;
    delete base.text;
  }

  return base;
};

export const generateComponentVariations = (componentName: string) => {
  const doc = getComponentDoc(componentName);
  const props = Array.isArray(doc?.props) ? doc.props : [];
  const base = generateMockData(componentName);
  if (base === null) return [];

  const variations: Array<Record<string, unknown>> = [
    {
      variationLabel: 'Default',
      ...base,
    },
  ];

  for (const prop of props) {
    if (!prop?.name || prop.name === 'variationLabel') continue;
    if (PREVIEW_VARIATION_EXCLUDED_PROPS.has(prop.name)) continue;

    const normalized = (prop.type ?? '').replace(/\s+/g, ' ').trim();
    const current = base[prop.name];

    const literals = getStringLiteralUnion(normalized);
    if (literals.length > 1 && canUseAsVariantOverride(current)) {
      const alt = literals.find(v => v !== current);
      if (alt !== undefined) {
        variations.push({
          ...base,
          [prop.name]: alt,
          variationLabel: `${prop.name} = ${alt}`,
        });
        continue;
      }
    }

    if (/(^|\W)boolean(\W|$)/.test(normalized) && typeof current === 'boolean') {
      variations.push({
        ...base,
        [prop.name]: !current,
        variationLabel: `${prop.name} = ${String(!current)}`,
      });
      continue;
    }
  }

  const manualVariations = MANUAL_COMPONENT_VARIATIONS[componentName] ?? [];
  for (const variation of manualVariations) {
    variations.push({
      ...base,
      ...variation.overrides,
      variationLabel: variation.variationLabel,
    });
  }

  const unique = new Map<string, Record<string, unknown>>();
  for (const variation of variations) {
    const key = JSON.stringify(variation, (_k, v) => (typeof v === 'function' ? '<fn>' : v));
    if (!unique.has(key)) unique.set(key, variation);
  }

  return Array.from(unique.values());
};

const NAMESPACE_CATALOG: Array<{
  category: string;
  importPath: string;
  namespace: Record<string, unknown>;
}> = [
  {
    category: 'components',
    importPath: '@/components/reusable/single',
    namespace: ComponentsSingle,
  },
  {
    category: 'core-sections',
    importPath: '@/components/reusable/sections/core',
    namespace: SectionsCore,
  },
  {
    category: 'feature-sections',
    importPath: '@/components/reusable/sections/features',
    namespace: SectionsFeatures,
  },
  {
    category: 'resource-sections',
    importPath: '@/components/reusable/sections/resources',
    namespace: SectionsResources,
  },
  {
    category: 'blog-sections',
    importPath: '@/components/reusable/sections/blog',
    namespace: SectionsBlog,
  },
  {
    category: 'case-study-sections',
    importPath: '@/components/reusable/sections/case-studies',
    namespace: SectionsCaseStudies,
  },
  {
    category: 'service-sections',
    importPath: '@/components/reusable/sections/service',
    namespace: SectionsService,
  },
  {
    category: 'industry-sections',
    importPath: '@/components/reusable/sections/industries',
    namespace: SectionsIndustries,
  },
];

const isComponentName = (name: string) => /^[A-Z]/.test(name);

type AnyPropsComponent = React.ComponentType<Record<string, unknown>>;

const isReactComponent = (value: unknown): value is AnyPropsComponent => {
  if (typeof value === 'function') return true;
  if (!value || typeof value !== 'object') return false;
  return '$$typeof' in (value as Record<string, unknown>);
};

const getDocFilePath = (name: string) => {
  const doc = getComponentDoc(name);
  return doc?.filePath ?? 'unknown';
};

type RegistryBuildResult = {
  registry: Record<string, AnyPropsComponent>;
  components: ComponentInfo[];
};

let cache: RegistryBuildResult | null = null;

const buildRegistry = (): RegistryBuildResult => {
  if (cache) return cache;

  const registry: Record<string, AnyPropsComponent> = {};
  const components: ComponentInfo[] = [];

  const seenByName = new Set<string>();

  for (const source of NAMESPACE_CATALOG) {
    for (const [name, value] of Object.entries(source.namespace)) {
      if (!isComponentName(name)) continue;
      if (!isReactComponent(value)) continue;
      if (seenByName.has(name)) continue;

      seenByName.add(name);
      registry[name] = value;
      components.push({
        name,
        category: source.category,
        importPath: source.importPath,
        filePath: getDocFilePath(name),
      });
    }
  }

  components.sort((a, b) => {
    if (a.category !== b.category) return a.category.localeCompare(b.category);
    return a.name.localeCompare(b.name);
  });

  cache = { registry, components };
  return cache;
};

export const getComponentRegistry = (): Record<string, AnyPropsComponent> => {
  return buildRegistry().registry;
};

export const getAllComponents = (): ComponentInfo[] => {
  return buildRegistry().components;
};

export const groupComponentsByCategory = (components: ComponentInfo[]) => {
  return components.reduce<Record<string, ComponentInfo[]>>((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});
};
