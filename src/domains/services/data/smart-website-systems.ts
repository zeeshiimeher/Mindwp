import {
  Briefcase,
  Building2,
  Calendar,
  Globe,
  MessageSquare,
  Search,
  Shield,
  Smartphone,
  Store,
  Zap,
} from 'lucide-react';

import type { ServicePageData } from '../types';

const smartWebsitesFaqItems = [
  {
    question: 'What exactly is a Smart Website?',
    answer:
      'A Smart Website is built as business infrastructure rather than a visual deliverable. Services are structured clearly, enquiry paths are defined, and requests move into the right workflow instead of being lost across pages, forms, and inboxes.',
  },
  {
    question: 'How is this different from a normal website project?',
    answer:
      'Most websites are designed around layout. A Smart Website is designed around how the business actually operates — how services are presented, how enquiries arrive, and how requests are handled after they come in.',
  },
  {
    question: 'Is SEO included in the implementation?',
    answer:
      'Every Smart Website includes the basics that help search engines understand your services. This includes clear service pages, clean metadata, and internal linking between related pages. Ongoing SEO work can then be added once these foundations are in place.',
  },
  {
    question: 'Can you work only on SEO if we already have a website?',
    answer:
      'Yes, although SEO tends to perform better when the underlying structure is clear. If the current website does not show how your services are organised or how visitors should get in touch, we may recommend strengthening the foundation first.',
  },
  {
    question: 'Do I need to understand WordPress or technical tools?',
    answer:
      'No technical knowledge is required. We handle the implementation and provide a clean handover so routine updates remain simple for your team.',
  },
  {
    question: 'Can my current website be improved instead of rebuilt?',
    answer:
      'Sometimes. If the structure is salvageable we refactor it. If the foundation creates ongoing confusion, rebuilding often leads to a clearer and more maintainable system.',
  },
  {
    question: 'What happens after the website launches?',
    answer:
      'After launch you receive documentation and handover. Some businesses manage updates internally, while others retain ongoing governance so the system continues evolving in a structured way.',
  },
  {
    question: 'How long does implementation take?',
    answer:
      'Smaller implementations typically take around four to six weeks. More complex structures with integrations or automation layers may take eight to twelve weeks.',
  },
  {
    question: 'How is pricing determined?',
    answer:
      'Smart Websites are scoped based on structural complexity, integrations, and the operating model of the business. Instead of fixed packages, we define the implementation scope clearly before starting.',
  },
];

export const smartWebsiteSystemsPage = {
  slug: 'smart-website-systems',
  systems: ['smart-website-systems'],
  topics: ['website-infrastructure', 'lead-capture', 'conversion-optimization'],
  keywords: [
    'smart website systems',
    'wordpress business website',
    'organised business website',
    'service business website',
    'website with crm integration',
  ],
  badge: 'Smart Website Systems',
  category: 'Digital Infrastructure',
  seo: {
    title: 'Smart Website Systems for service businesses',
    description:
      'Smart Website Systems help visitors understand your services, make sure enquiries reach the right place, and provide a reliable base for CRM, automation, and SEO.',
    canonical: '/services/smart-website-systems',
    schema: {
      service: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Smart Website Systems',
        description:
          'Smart Website Systems create business websites where visitors quickly understand what you offer, enquiries reach the right place, and integrations can be added smoothly.',
        provider: {
          '@type': 'Organization',
          name: 'MindWP',
        },
        areaServed: 'UK',
        url: '/services/smart-website-systems',
      },
    },
  },
  hero: {
    badge: 'Smart Website Systems',
    title: 'A website that works as part of your business',
    description:
      'A Smart Website gives visitors a clear path from service to enquiry. Your services are easy to understand, the next step is obvious, and the site connects directly to your workflow.',
    primaryAction: {
      label: 'Understand What Makes Websites Convert',
      href: '/contact?system=smart-website-systems&source=service/smart-website-systems',
    },
    list: [
      'Services organised clearly',
      'Defined enquiry pathways',
      'Foundations ready for CRM, automation, and SEO',
    ],
  },
  sections: {
    value: {
      header: {
        title: 'What makes a Smart Website different',
        description:
          'Most websites focus on visual design. A Smart Website focuses on how the site supports the business — how services are explained, how visitors move through pages, and how enquiries are handled.',
      },
      items: [
        {
          icon: Globe,
          title: 'Stable WordPress foundation',
          description:
            'Built on WordPress with a setup designed for long-term clarity and maintainability.',
          iconType: 'primary' as const,
        },
        {
          icon: Zap,
          title: 'Integration ready',
          description:
            'CRM, booking, and automation tools connect more easily when the website already supports how the business operates.',
          iconType: 'primary' as const,
        },
        {
          icon: Smartphone,
          title: 'Accessible everywhere',
          description:
            'Responsive behaviour and accessibility are treated as baseline requirements.',
          iconType: 'primary' as const,
        },
        {
          icon: Search,
          title: 'Visibility foundations',
          description:
            'Clean page organisation and clear services support discoverability from the start.',
          iconType: 'primary' as const,
        },
        {
          icon: Shield,
          title: 'Security and reliability',
          description: 'Updates, backups, and security hygiene handled with consistent governance.',
          iconType: 'primary' as const,
        },
        {
          icon: MessageSquare,
          title: 'Enquiries sent to the right person',
          description: 'Visitors know where to go and requests reach the right person or workflow.',
          iconType: 'primary' as const,
        },
      ],
    },
    comparison: {
      header: {
        title: 'System implementation vs template website',
        description:
          'A comparison between a typical template site and a website built around how the business works.',
      },
      items: [
        {
          type: 'before' as const,
          title: 'Typical template website',
          items: [
            'Page organisation dictated by the template',
            'Enquiry handling inconsistent across pages',
            'Services not clearly organised',
            'SEO added later as an afterthought',
            'No clear governance for updates',
          ],
        },
        {
          type: 'after' as const,
          title: 'Smart Website implementation',
          items: [
            'Pages organised around the real service model',
            'Clear enquiry paths and ownership',
            'Stable foundations for SEO and automation',
            'Governed updates and structured refinement',
          ],
        },
      ],
    },
    included: {
      header: {
        title: 'Foundations included in every implementation',
        description: 'Core infrastructure delivered in every Smart Website.',
      },
      items: [
        'Custom WordPress build aligned to how the business actually operates',
        'Clear enquiry capture and routing',
        'CRM connection when required',
        'Analytics and baseline event tracking',
        'Security configuration and SSL',
        'Responsive behaviour across devices',
        'Visibility foundations such as metadata and schema',
        'Backup and recovery planning',
        'Handover documentation and training',
      ],
    },
    types: {
      header: {
        title: 'Implementations within the Smart Website framework',
        description:
          'Different business models require different emphasis — but all follow the same clear framework.',
      },
      items: [
        {
          icon: Briefcase,
          title: 'Service business websites',
          description: 'Structured websites for consultants, trades, and service providers.',
          keywords: 'Clarity • Credibility • Enquiry handling',
          iconType: 'primary' as const,
        },
        {
          icon: Store,
          title: 'eCommerce stores',
          description: 'WooCommerce implementations with catalogue and operational clarity.',
          keywords: 'Catalogue • Checkout • Fulfilment flow',
          iconType: 'primary' as const,
        },
        {
          icon: Calendar,
          title: 'Booking platforms',
          description: 'Sites where scheduling and availability are central to the service.',
          keywords: 'Scheduling • Availability • Routing',
          iconType: 'primary' as const,
        },
        {
          icon: Building2,
          title: 'Focused service pages',
          description: 'Landing environments built around a single offer or service line.',
          keywords: 'Clarity • Relevance • Conversion path',
          iconType: 'primary' as const,
        },
      ],
    },
    coreLayer: {
      header: {
        title: 'Your website as the core of your system',
        description:
          'The website is the starting point of the digital setup. SEO, CRM connections, and automation all work better when the website itself already makes sense.',
      },
      cards: [
        {
          title: 'Website foundation',
          description: 'Visitors quickly understand what the business offers and where to go next.',
          points: [
            'How your services are organised',
            'Clear ways to get in touch',
            'Navigation aligned to the operating model',
          ],
          featured: true,
        },
        {
          title: 'Visibility layer',
          description:
            'Search visibility becomes easier when services are clearly organised and stable.',
          points: [
            'Pages aligned to real services',
            'Internal linking that supports discovery',
            'Structured metadata reinforcing context',
          ],
        },
        {
          title: 'Workflow integration',
          description: 'Lead capture and communication systems connect to real business workflows.',
          points: [
            'Forms connect to the right owner',
            'CRM and scheduling integrate where required',
            'Notifications and follow‑up are structured',
          ],
        },
        {
          title: 'Automation and AI',
          description:
            'Automation becomes useful when it supports a clear workflow — not when it tries to fix confusion.',
          points: [
            'Automation supports consistent follow‑up',
            'AI tools rely on clean service signals',
            'Refinement remains manageable over time',
          ],
        },
      ],
    },
    visibilityFoundations: {
      header: {
        title: 'A foundation designed for refinement',
        description:
          'Once the base layer is clear, SEO, automation, and analytics improvements become easier to apply and easier to measure.',
      },
      tagline: 'Structure first, optimisation second',
      narrativeTitle: 'Refinement works best when the base layer is clear',
      narrativeParagraphs: [
        'Many websites try to fix visibility problems with more tools or campaigns. When the site itself is unclear, those efforts are difficult to sustain.',
        'By building the website as a stable system first, later improvements become simpler, clearer, and easier to measure.',
      ],
      items: [
        {
          icon: Briefcase,
          title: 'Clearly organised services',
          description:
            'Services presented clearly so visitors and search engines understand what you offer.',
          keywords: 'Service structure • Page organisation • Clarity',
          iconType: 'primary' as const,
        },
        {
          icon: MessageSquare,
          title: 'Defined enquiry pathways',
          description: 'Visitors always know the next step and requests reach the right workflow.',
          keywords: 'Forms • Routing • Ownership',
          iconType: 'primary' as const,
        },
        {
          icon: Search,
          title: 'Visibility structure',
          description: 'A clean architecture that allows SEO efforts to connect to real services.',
          keywords: 'Internal linking • Metadata • Schema',
          iconType: 'primary' as const,
        },
      ],
    },
    process: {
      header: {
        badge: 'Implementation',
        title: 'How Smart Websites are implemented',
        description: 'Implementation focuses on clarity and stability — not speed.',
      },
      steps: [
        {
          number: '1',
          title: 'Discovery',
          description:
            'We review the service model, enquiry flow, and how the business currently operates.',
        },
        {
          number: '2',
          title: 'Architecture',
          description:
            'Page organisation, messaging, and navigation are defined before development begins.',
        },
        {
          number: '3',
          title: 'Implementation',
          description:
            'The system is built on WordPress and integrations are added where they support the workflow.',
        },
        {
          number: '4',
          title: 'Launch and handover',
          description:
            'After testing, the website is launched and the team receives documentation for future updates.',
        },
      ],
    },
    faq: {
      header: {
        title: 'Common questions about Smart Website Systems',
        description: 'Questions that come up when exploring this service.',
      },
      items: smartWebsitesFaqItems,
    },
  },
  cta: {
    title: 'Build your smart website system',
    description:
      'Tell us how your website handles enquiries now. We will show you where visitors drop off before they contact you.',
    buttonText: 'Turn Website Traffic Into Leads',
    buttonHref: '/contact?system=smart-website-systems&source=service/smart-website-systems',
  },
  inlineCta: {
    title: 'Not sure how this would fit your business?',
    description:
      'No commitment. We will walk through your setup and show where enquiries are being lost.',
    buttonText: 'See Where Leads Drop Off',
    buttonHref: '/contact?system=smart-website-systems&source=service/smart-website-systems',
  },
} satisfies ServicePageData;
