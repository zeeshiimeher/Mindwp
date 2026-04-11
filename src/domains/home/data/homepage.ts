import type { LucideIcon } from 'lucide-react';
import {
  Calendar,
  Check,
  Database,
  Globe,
  Layers,
  Scissors,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Users,
  Workflow,
  Wrench,
} from 'lucide-react';

import { SITE_NAME, SITE_ORIGIN, toAbsoluteUrl } from '@/lib/seo/config';

type IconTone = 'primary' | 'secondary' | 'accent';

type JourneyStep = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  iconType: IconTone;
};

type TitleDescriptionItem = {
  title: string;
  description: string;
};

type SectionCta = {
  title: string;
  description: string;
};

type VisualStat = {
  label: string;
  value: string;
};

type CapabilityVisual = {
  stats: VisualStat[];
  gradientFrom: string;
  gradientTo: string;
};

type InfrastructureProblem = {
  icon: LucideIcon;
  title: string;
  description: string;
  solution: string;
  impact: string;
};

type SystemCapabilityComponent = {
  id: string;
  icon: LucideIcon;
  title: string;
  subline?: string;
  description: string;
  outcome?: string;
  benefits: string[];
  visual: CapabilityVisual;
};

export type HomepageData = {
  seo: {
    title: string;
    description: string;
    keywords: string[];
    canonical: string;
    openGraph?: {
      title?: string;
      description?: string;
      url?: string;
    };
    schema: {
      organization: Record<string, unknown>;
      website?: Record<string, unknown>;
    };
  };

  hero: {
    badge: string;
    title: string;
    description: string;
    valueProps: [string, string, string];
    primaryAction: {
      label: string;
      href: string;
    };
  };

  infrastructureGaps: {
    badge: string;
    title: string;
    description: string;
    problems: InfrastructureProblem[];
  };

  smartWebsiteFramework: {
    badge: string;
    title: string;
    description: string;
    journeyTitle: string;
    principles: Array<{ icon: LucideIcon; title: string; description: string }>;
    journeySteps: JourneyStep[];
    journeyNote: string;
    cta: SectionCta;
  };

  implementationSection: {
    title: string;
    description: string;
    steps: Array<{ number: string; title: string; description: string }>;
  };

  clientJourney: {
    badge: string;
    title: string;
    description: string;
    steps: Array<{
      number: string;
      icon: LucideIcon;
      title: string;
      subtitle: string;
      description: string;
      highlights: string[];
      iconType: IconTone;
    }>;
    cta: SectionCta;
  };

  systemCapabilities: {
    title: string;
    description: string;
    visualMetaLabel: string;
    tabsAriaLabel: string;
    defaultComponentId: string;
    components: SystemCapabilityComponent[];
  };

  infrastructureLayers: {
    title: string;
    description: string;
    trustFoundations: {
      title: string;
      description: string;
      strongFitBadge: string;
      strongFitTitle: string;
      strongFitItems: TitleDescriptionItem[];
      notDesignedBadge: string;
      notDesignedTitle: string;
      notDesignedItems: TitleDescriptionItem[];
    };
    foundation: {
      badge: string;
      title: string;
      description: string;
      checklist: string[];
    };
    layers: Array<{ title: string; description: string }>;
  };

  industries: {
    title: string;
    description: string;
    items: Array<{ icon: LucideIcon; title: string; description: string }>;
  };

  visibilityTimeline: {
    badge: string;
    title: string;
    description: string;
    items: Array<{
      phase: string;
      title: string;
      icon: LucideIcon;
      items: string[];
    }>;
    note: string;
  };

  caseStudies: {
    title: string;
    description: string;
    quote: string;
    quoteAuthor: string;
  };

  faq: {
    title: string;
    items: Array<{ question: string; answer: string }>;
  };

  cta: {
    footer: {
      title: string;
      description: string;
      metaItems: Array<{ text: string }>;
    };
  };
};

export const homepageData: HomepageData = {
  seo: {
    title: 'MindWP — Smart Websites That Work for Service Businesses',
    description:
      'MindWP builds Smart Websites for established service businesses — designed to support search visibility, reliable enquiry handling, and long-term business growth.',
    keywords: [
      'Smart Website Systems',
      'website consultancy for service businesses',
      'enquiry handling website architecture',
      'systems-first website strategy',
      'mindwp',
    ],
    canonical: '/',
    schema: {
      organization: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_ORIGIN,
        logo: toAbsoluteUrl('/images/logo.png'),
      },
    },
  },
  hero: {
    badge: 'Smart Websites for Service Businesses',
    title: 'A website that helps your service business bring in and handle enquiries properly',
    description:
      'We build Smart Websites that connect how people find you, how they get in touch, and how enquiries are handled — so your website works as part of the business, not just a page people land on.',
    valueProps: ['Right Enquiries', 'Search Ready', 'Built to Grow'],
    primaryAction: {
      label: 'See how Smart Websites work',
      href: '/services/smart-website-systems',
    },
  },
  infrastructureGaps: {
    badge: 'Where Websites Fall Short',
    title: 'Traffic that doesn’t turn into enquiries',
    description:
      'Most service businesses have a website that looks fine but does not do enough. It does not help people find you, does not make it easy to get in touch, and does not support follow-up — leading to missed opportunities and unnecessary manual work.',
    problems: [
      {
        icon: Search,
        title: 'Hard to be found when people are searching',
        description:
          'When potential clients can’t find you online or in local results, your website isn’t supporting discovery.',
        solution:
          'We implement a visibility-ready structure—pages, technical foundations, and local signals—so discovery is built in from the start.',
        impact: 'Low discovery in search',
      },
      {
        icon: Workflow,
        title: 'Unclear enquiry handling',
        description:
          'When enquiries come in without clear handling, responses become inconsistent and time gets lost.',
        solution:
          'We set up clear steps — forms, notifications, and team assignments — so every enquiry gets a proper response.',
        impact: 'Inconsistent follow-up',
      },
      {
        icon: SlidersHorizontal,
        title: 'Traffic without a clear next step',
        description:
          'Website visits don’t become enquiries when the journey and decision path aren’t clear or easy to follow.',
        solution:
          'We implement clear page structure and calls-to-action that guide visitors to the right next step—without pressure.',
        impact: 'Unclear on-site journey',
      },
    ],
  },
  smartWebsiteFramework: {
    badge: 'The Smart Website Difference',
    title: 'How a Smart Website actually works',
    description:
      'A Smart Website connects how people find you, how they get in touch, and how you or your team handles enquiries — so nothing is missed and every enquiry is handled properly.',
    journeyTitle: 'How it works: from search to follow-up',
    principles: [
      {
        icon: Check,
        title: 'Everything Works Together',
        description:
          'Search, enquiries, and follow-up are connected from the start — not bolted on separately.',
      },
      {
        icon: Search,
        title: 'Built to Be Found in Search',
        description:
          'Search and local discovery are part of the build from day one — not something you have to add later.',
      },
      {
        icon: Database,
        title: 'Enquiries Go to the Right Place',
        description:
          'Every enquiry is captured and sent to the right person, so your team can respond quickly and consistently.',
      },
      {
        icon: SlidersHorizontal,
        title: 'Automation Where It Actually Helps',
        description:
          'Automation is added only where it genuinely helps — saving time and improving response speed while keeping the personal touch.',
      },
      {
        icon: Wrench,
        title: 'Built to Grow With You',
        description:
          'Your website can grow as your services change — without needing a full redesign every time.',
      },
    ],
    journeySteps: [
      { icon: Search, title: 'They Search', subtitle: 'Google / Maps', iconType: 'primary' },
      { icon: Globe, title: 'They Land', subtitle: 'Your Website', iconType: 'accent' },
      { icon: Workflow, title: 'They Engage', subtitle: 'Chat or Call', iconType: 'secondary' },
      { icon: Database, title: 'System Captures', subtitle: 'Enquiry Saved', iconType: 'primary' },
      { icon: Calendar, title: 'They Book', subtitle: 'Next Step', iconType: 'secondary' },
      { icon: ShieldCheck, title: 'They Review', subtitle: 'Ongoing Trust', iconType: 'accent' },
    ],
    journeyNote: 'Each step connects to the next',
    cta: {
      title: 'See how this could work for your business',
      description:
        'We can walk through how your website currently handles enquiries and where a more structured setup could make things easier.',
    },
  },
  implementationSection: {
    title: 'Built to match how your business actually runs',
    description:
      'We build Smart Websites as a working part of your business — connecting your services, enquiry handling, and follow-up so your team can handle work consistently.',
    steps: [
      {
        number: '01',
        title: 'Clear Structure',
        description:
          'Your services, pages, and contact options are organised so visitors find what they need — and your team knows what to do next.',
      },
      {
        number: '02',
        title: 'Fits Your Process',
        description:
          'Set up to match how your team already handles enquiries — who responds, what happens next, and how follow-up works.',
      },
      {
        number: '03',
        title: 'Easy to Improve Over Time',
        description:
          'Designed so you can make changes and improvements without starting from scratch.',
      },
      {
        number: '04',
        title: 'Calm, Careful Delivery',
        description:
          'Delivered through a steady process focused on getting things right — not rushing to launch.',
      },
    ],
  },
  clientJourney: {
    badge: 'How Enquiries Flow',
    title: 'From first enquiry to reliable follow-up',
    description:
      'Every enquiry is captured, sent to the right person, and recorded properly. Follow-up happens consistently — so enquiries are handled properly and nothing slips through the cracks.',
    steps: [
      {
        number: '01',
        icon: Layers,
        title: 'Clear Ways to Get in Touch',
        subtitle: 'Forms, calls, and bookings',
        description:
          'Whether someone fills in a form, calls, or books online — the enquiry reaches your team in an organised way that matches your services.',
        highlights: [
          'Contact options matched to your services',
          'Clear paths for calls, forms, and bookings',
          'Every enquiry starts in the right place',
        ],
        iconType: 'primary',
      },
      {
        number: '02',
        icon: Database,
        title: 'Sent to the Right Person',
        subtitle: 'Nothing gets lost',
        description:
          'Each enquiry goes to the right team member, gets recorded, and stays visible — so there is no confusion about who is handling what.',
        highlights: [
          'Enquiries assigned to the right person',
          'Everything recorded in one place',
          'Clear responsibility for every lead',
        ],
        iconType: 'secondary',
      },
      {
        number: '03',
        icon: Workflow,
        title: 'Consistent Follow-Up',
        subtitle: 'Nothing falls through the cracks',
        description:
          'Follow-up happens on time, your team can see where things stand, and you can spot what needs improving.',
        highlights: [
          'Follow-up that runs on schedule',
          'Your team can see every lead status',
          'Easy to spot what needs improving',
        ],
        iconType: 'accent',
      },
    ],
    cta: {
      title: 'Let’s review how your enquiries and follow-up are currently handled',
      description:
        'We will look at how enquiries come in, how your team handles them, and where things could be made more consistent and easier to manage.',
    },
  },
  systemCapabilities: {
    title: 'What’s inside your Smart Website',
    description:
      'These are the main parts that work together inside your Smart Website — handling enquiries, bookings, follow-up, and search visibility as one connected system.',
    visualMetaLabel: 'Component overview',
    tabsAriaLabel: 'System components',
    defaultComponentId: 'enquiry',
    components: [
      {
        id: 'enquiry',
        icon: Layers,
        title: 'Enquiry Capture',
        subline: 'How people get in touch with you.',
        description:
          'Sets up clear ways for people to contact you — through forms, calls, or booking pages that match your actual services. The goal is to make sure every enquiry arrives in a way your team can act on.',
        outcome: 'Every enquiry arrives in a way your team can act on.',
        benefits: [
          'Contact options that match your services',
          'The right information captured upfront',
          'Clear first step for every enquiry',
          'Consistent intake across all channels',
        ],
        visual: {
          stats: [
            { label: 'Entry Paths', value: 'Intentional' },
            { label: 'Information', value: 'Complete' },
            { label: 'Intake', value: 'Consistent' },
            { label: 'Alignment', value: 'Service-Based' },
          ],
          gradientFrom: 'var(--gradient-accent-from)',
          gradientTo: 'var(--gradient-accent-to)',
        },
      },
      {
        id: 'routing',
        icon: Database,
        title: 'Lead Management',
        subline: 'How enquiries reach the right person and stay on record.',
        description:
          'Makes sure each enquiry goes to the right team member and gets properly recorded — so there is no confusion about ownership and nothing gets lost.',
        outcome: 'No more lost enquiries or confusion about who handles what.',
        benefits: [
          'Enquiries assigned to the right person',
          'Clear ownership for every lead',
          'All records kept in one place',
          'Smooth handover between team members',
        ],
        visual: {
          stats: [
            { label: 'Routing', value: 'Assigned' },
            { label: 'Records', value: 'Centralised' },
            { label: 'Ownership', value: 'Explicit' },
            { label: 'Visibility', value: 'Internal' },
          ],
          gradientFrom: 'var(--gradient-secondary-from)',
          gradientTo: 'var(--gradient-secondary-to)',
        },
      },
      {
        id: 'followup',
        icon: Workflow,
        title: 'Follow-Up',
        subline: 'How you stay on top of every lead.',
        description:
          'Sets up follow-up timing and reminders so leads do not go cold. Your team knows when to follow up and nothing gets forgotten.',
        outcome: 'Fewer dropped conversations and faster responses.',
        benefits: [
          'Follow-up reminders that run on time',
          'Clear ownership of every task',
          'Consistent responses across the team',
          'Easy to see where each lead stands',
        ],
        visual: {
          stats: [
            { label: 'Follow-Up', value: 'Timed' },
            { label: 'Workflow', value: 'Structured' },
            { label: 'Tracking', value: 'Active' },
            { label: 'Consistency', value: 'Maintained' },
          ],
          gradientFrom: 'var(--gradient-accent-from)',
          gradientTo: 'var(--gradient-accent-to)',
        },
      },
      {
        id: 'booking',
        icon: Calendar,
        title: 'Booking & Scheduling',
        subline: 'How bookings match your real availability.',
        description:
          'Connects your booking page to your real availability and service types — so people can book the right thing at the right time, with automatic confirmations.',
        outcome: 'Less back-and-forth to get appointments booked.',
        benefits: [
          'Booking pages matched to your services',
          'Real availability shown to customers',
          'Automatic confirmations and reminders',
          'Fewer scheduling mix-ups',
        ],
        visual: {
          stats: [
            { label: 'Scheduling', value: 'Aligned' },
            { label: 'Confirmations', value: 'Automated' },
            { label: 'Availability', value: 'Real-Time' },
            { label: 'Friction', value: 'Reduced' },
          ],
          gradientFrom: 'var(--color-accent-warning)',
          gradientTo: 'var(--color-accent-warning-90)',
        },
      },
      {
        id: 'visibility',
        icon: ShieldCheck,
        title: 'Search & Discovery',
        subline: 'How people find you online.',
        description:
          'Makes sure your website is set up so the right people can find you — through Google, local results, and maps. Your services and locations are clearly presented so search engines match you with the right searches.',
        outcome: 'The right people find you when they search for what you offer.',
        benefits: [
          'Services clearly organised for search',
          'Local search and maps set up properly',
          'Search presence matched to real services',
          'Easy to track how people find you',
        ],
        visual: {
          stats: [
            { label: 'Structure', value: 'Aligned' },
            { label: 'Signals', value: 'Consistent' },
            { label: 'Starting Points', value: 'Defined' },
            { label: 'Measurement', value: 'Connected' },
          ],
          gradientFrom: 'var(--gradient-secondary-from)',
          gradientTo: 'var(--gradient-secondary-to)',
        },
      },
    ],
  },
  infrastructureLayers: {
    title: 'What your Smart Website is built on',
    description:
      'A Smart Website is the foundation. Everything else — enquiry handling, bookings, records, and follow-up — works on top of it as one connected system.',
    foundation: {
      badge: 'Foundation',
      title: 'Smart Website',
      description:
        'Clear page structure, easy-to-follow journeys, and reliable enquiry handling — forming the foundation of a website that supports how your business runs reliably day to day.',
      checklist: [
        'Services clearly organised and easy to navigate',
        'Clear contact options with obvious next steps',
        'Easy to update and improve without rebuilding',
        'Set up to match how your team actually works',
        'Fewer missed enquiries and manual mistakes',
      ],
    },
    layers: [
      {
        title: 'Search & Local Discovery',
        description:
          'Makes sure the right people can find you when they search — and that your services and locations are clearly presented in search results and maps.',
      },
      {
        title: 'Enquiry & Booking Systems',
        description:
          'Handles how enquiries come in, what information is collected, and how people book — so every request moves to the right next step.',
      },
      {
        title: 'Lead Records & Follow-Up',
        description:
          'Records every enquiry, assigns it to the right person, and keeps follow-up on track — so nothing falls through the cracks.',
      },
      {
        title: 'Automation & Tracking',
        description:
          'Adds helpful automation and tracking where it makes a real difference — without unnecessary complexity.',
      },
    ],
    trustFoundations: {
      title: 'Built for established service businesses.',
      description:
        'Smart Websites are built for established service businesses that need reliable enquiry handling, consistent follow-up, and more control over how things run day to day.',
      strongFitBadge: 'Strong Fit',
      strongFitTitle: 'This is a strong fit when:',
      strongFitItems: [
        {
          title: 'Established service business with meaningful job value',
          description: 'Typically $300+ per job, with repeat work or clear long-term value.',
        },
        {
          title: 'Enquiries need consistent handling',
          description: 'You want every enquiry to reach the right person with clear follow-up.',
        },
        {
          title: 'Your business has moving parts',
          description: 'Multiple services, team members, locations, or stages of qualification.',
        },
        {
          title: 'You’re already investing in visibility',
          description: 'And want your website to support that investment properly.',
        },
        {
          title: 'You value long-term stability',
          description: 'A measured implementation that evolves as operations grow.',
        },
      ],
      notDesignedBadge: 'Not Designed For',
      notDesignedTitle: 'This is not the right fit if:',
      notDesignedItems: [
        {
          title: 'Brochure-style redesign projects',
          description: 'Where the goal is mainly visual refresh without operational improvement.',
        },
        {
          title: 'Primarily price-driven comparisons',
          description: 'Where the lowest upfront cost matters more than long-term reliability.',
        },
        {
          title: 'Feature-driven builds',
          description: 'Prioritising a checklist of tools over a connected system.',
        },
        {
          title: 'Short-term marketing experiments',
          description: 'When short-term testing takes priority over disciplined systems.',
        },
        {
          title: 'Rebuilds focused on looks, not function',
          description:
            'Where the goal is a visual refresh without improving how the site actually works.',
        },
      ],
    },
  },
  industries: {
    title: 'Who we work best with',
    description:
      'We work with service businesses where missed enquiries, slow follow-up, or poor search visibility create daily friction — and where a better website setup makes a real difference.',
    items: [
      {
        icon: Scissors,
        title: 'Beauty & Personal Care',
        description:
          'Beauty and personal care businesses that value clear discovery and dependable booking workflows.',
      },
      {
        icon: Wrench,
        title: 'Home Services',
        description:
          'Trades and home service businesses that need enquiry handoff and organised follow-up.',
      },
      {
        icon: Users,
        title: 'Legal & Professional Services',
        description:
          'Law firms, accountants, and consultants that need organised enquiry handling and a credible online presence.',
      },
      {
        icon: Calendar,
        title: 'Automotive & Local Services',
        description:
          'Auto repair shops, dental clinics, and other local businesses that depend on steady bookings and strong local search presence.',
      },
    ],
  },
  visibilityTimeline: {
    badge: 'Search Visibility Over Time',
    title: 'How your search visibility grows over time',
    description:
      'SEO results do not happen overnight, and they do not grow in a straight line. Here is how progress typically develops when the work is done properly.',
    items: [
      {
        phase: 'Stage 1',
        title: 'Getting the Basics Right',
        icon: Layers,
        items: [
          'Technical setup checked and made solid',
          'Pages organised with clear connections between them',
          'Page titles, descriptions, and business details set up properly',
          'Google Business Profile and key details consistent',
        ],
      },
      {
        phase: 'Stage 2',
        title: 'Matching Services & Locations',
        icon: Search,
        items: [
          'Service pages and location coverage clearly defined',
          'Contact options linked to the services you actually offer',
          'Consistent setup across Google, maps, and your website',
          'Where your enquiries come from is tracked clearly',
        ],
      },
      {
        phase: 'Stage 3',
        title: 'Regular Improvements',
        icon: Workflow,
        items: [
          'Priority pages reviewed on a regular schedule',
          'Content, structure, and links improved step by step',
          'Key pages kept fresh and relevant',
          'Local presence updated as your services change',
        ],
      },
      {
        phase: 'Stage 4',
        title: 'Steady Monitoring',
        icon: ShieldCheck,
        items: [
          'Regular check-ins instead of reacting to problems',
          'Updates made as your services and priorities shift',
          'Important pages kept to a clear standard',
          'Changes and decisions documented so nothing is forgotten',
        ],
      },
    ],
    note: 'Timelines vary based on industry, competition, and starting point. SEO works best as a long-term, continuously optimised process.',
  },
  caseStudies: {
    title: 'How this works in real businesses',
    description:
      'Examples of Smart Websites improving enquiry handling and making day-to-day operations more reliable.',
    quote:
      'We moved from a basic website to a connected system. Enquiries now land in the right place, follow-up is clearer, and the business feels easier and more organised day to day.',
    quoteAuthor: '— Lisa Chen, Pawfect Mobile Grooming, Birmingham',
  },
  faq: {
    title: 'Common Questions',
    items: [
      {
        question: 'What does MindWP actually do?',
        answer:
          'We build Smart Websites for established service businesses. Every project starts with how the business actually works — your services, how enquiries come in, and how your team handles follow-up. Search visibility, lead management, and automation are added where they genuinely help.',
      },
      {
        question: 'What makes a Smart Website different from a regular website?',
        answer:
          'A Smart Website is built as a working part of your business — not a one-off design project. It is designed around your services, enquiry handling, and long-term growth.',
      },
      {
        question: 'Do you work with businesses that already have a website?',
        answer:
          'Yes. We assess what is in place and determine whether refinement or a rebuild is structurally appropriate based on complexity and integration needs.',
      },
      {
        question: 'Is SEO included?',
        answer:
          'Smart Websites include the technical setup that supports search visibility. Ongoing SEO work is available when it aligns with your business priorities.',
      },
      {
        question: 'Can the system support booking, enquiries, and CRM handling?',
        answer:
          'Yes. Enquiry forms, booking pages, lead records, and follow-up tools are set up where they improve how your team handles incoming work.',
      },
      {
        question: 'How does follow-up work after someone contacts us?',
        answer:
          'Follow-up is set up around how your team works — confirmations, team assignments, reminders, and clear status — so handling stays consistent.',
      },
      {
        question: 'What types of businesses do you work with?',
        answer:
          'Primarily established service businesses that value well-organised systems and long-term reliability over short-term tactics.',
      },
      {
        question: 'Do you provide ongoing refinement?',
        answer:
          'Yes. We offer ongoing review and practical updates as your services, priorities, and search visibility develop.',
      },
      {
        question: 'How do we get started?',
        answer:
          'We start with a conversation to understand how your business works today — your services, how enquiries come in, and what you want to improve — then outline a sensible next step.',
      },
    ],
  },
  cta: {
    footer: {
      title: 'If your website is not supporting enquiries properly, it is worth fixing',
      description:
        'We can look at how your website is currently set up, how enquiries are handled, and what could be improved to make enquiry handling more reliable.',
      metaItems: [
        { text: 'Calm, consultative approach' },
        { text: 'Clarity before complexity' },
        { text: 'No pressure, no upsells' },
      ],
    },
  },
};
