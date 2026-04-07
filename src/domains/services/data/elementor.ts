import {
  Code,
  Eye,
  Layers,
  Layout,
  Search,
  Settings,
  Smartphone,
  Sparkles,
  Zap,
} from 'lucide-react';

import type { ServicePageData } from '../types';

export const elementorPage = {
  slug: 'elementor',
  systems: ['smart-website-systems'],
  topics: ['website-infrastructure'],
  keywords: [
    'elementor pro',
    'elementor implementation',
    'wordpress page builder',
    'theme builder',
    'popup builder',
    'design system',
  ],
  badge: 'Elementor Implementation',
  category: 'Implementation Services',
  seo: {
    title: 'Elementor Implementation | Structured WordPress Delivery with Elementor',
    description:
      'Structured WordPress implementation with Elementor for teams that need maintainable delivery, clean editing paths, and approved designs translated into a governed website build.',
    canonical: '/services/elementor',
    schema: {
      service: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Structured WordPress Implementation with Elementor',
        description:
          'Structured WordPress implementation with Elementor for teams that need maintainable delivery, clean editing paths, and approved designs translated into a governed website build.',
        provider: {
          '@type': 'Organization',
          name: 'MindWP',
        },
        areaServed: 'UK',
        url: '/services/elementor',
      },
    },
  },
  hero: {
    badge: 'Elementor Implementation',
    title:
      'WordPress implementation with Elementor — built for editing flexibility and long-term clarity',
    description:
      'We build WordPress websites using Elementor where the visual output stays faithful to the approved design and the editing experience stays manageable over time. This is disciplined implementation, not a quick drag-and-drop assembly.',
    primaryAction: {
      label: 'Start a Conversation',
      href: '/contact?system=smart-website-systems&source=service/elementor',
    },
    cssPrefix: 'elementor-hero',
    backgroundColor: 'bg-gradient-surface-muted relative overflow-hidden',
  },
  sections: {
    conversionSection: {
      title: 'From Figma, PSD, or XD to a production-ready Elementor build',
      description1:
        'We convert approved design files into precise Elementor implementations. Layout systems, typography, spacing, and responsive behaviour are implemented accurately — without compromising clarity or long-term maintainability.',
      description2:
        'This is a production-focused implementation service. For full business planning and system design, explore Smart Websites.',
    },
    benefitsSection: {
      badge: 'Implementation Principles',
      title: 'What disciplined Elementor implementation protects',
      benefits: [
        {
          icon: Layout,
          title: 'Design Fidelity',
          description:
            'The approved design is implemented precisely. Visual intent is preserved without compromising maintainability.',
          iconType: 'primary' as const,
        },
        {
          icon: Smartphone,
          title: 'Responsive by Design',
          description:
            'Layouts are built intentionally across breakpoints so the site works consistently across devices.',
          iconType: 'accent' as const,
        },
        {
          icon: Code,
          title: 'Clean Build',
          description:
            'Organised templates, minimal plugin reliance, and clean components make refinement easier over time.',
          iconType: 'secondary' as const,
        },
        {
          icon: Zap,
          title: 'Predictable Delivery',
          description:
            'Clear scope and a disciplined process mean fewer surprises during the build.',
          iconType: 'primary' as const,
        },
        {
          icon: Search,
          title: 'Search-Ready Foundations',
          description:
            'Semantic markup and performance hygiene give search engines a clean starting point.',
          iconType: 'accent' as const,
        },
        {
          icon: Settings,
          title: 'Editor-Friendly and Governed',
          description:
            "Elementor's editing flexibility is kept within clear guardrails so changes do not break the design over time.",
          iconType: 'secondary' as const,
        },
      ],
      cssPrefix: 'elementor-benefits',
      backgroundColor: 'bg-base' as const,
    },
    whySection: {
      badge: 'Why this approach works',
      title: 'Elementor works well when the implementation is disciplined',
      description:
        'Elementor gives strong visual control and flexible editing. When the build is governed properly, the site can evolve without losing coherence.',
      items: [
        {
          title: 'Design intent preserved',
          description: 'What was approved is what gets built — no drift, no guesswork.',
        },
        {
          title: 'Technical clarity',
          description:
            'Clean configuration avoids the bloat and fragmentation common in builder projects.',
        },
        {
          title: 'Faster launch',
          description:
            'A disciplined process reduces trial-and-error and keeps timelines predictable.',
        },
        {
          title: 'Built to last',
          description: 'Organised templates and systems allow controlled growth over time.',
        },
      ],
      columns: 4 as const,
      cssPrefix: 'elementor-why',
      backgroundColor: '',
      iconType: 'checkmark' as const,
    },
    processSection: {
      badge: 'Our Process',
      title: 'How we move from design file to production site',
      description:
        'A clear process that keeps the build on track from design review through to handover.',
      steps: [
        {
          number: '1',
          title: 'Design Review',
          description:
            'We review the design system, content needs, and editorial requirements before building anything.',
          icon: Eye,
        },
        {
          number: '2',
          title: 'Build Planning',
          description: 'Template logic, global styles, and content governance are defined upfront.',
          icon: Layers,
        },
        {
          number: '3',
          title: 'Precise Build',
          description: 'Implementation begins with clean layouts and reusable component systems.',
          icon: Layout,
        },
        {
          number: '4',
          title: 'Responsive Refinement',
          description: 'Responsive behaviour is refined across breakpoints with consistent logic.',
          icon: Smartphone,
        },
        {
          number: '5',
          title: 'Performance Pass',
          description: 'Code hygiene and load-time optimisation are applied before handover.',
          icon: Code,
        },
        {
          number: '6',
          title: 'Testing and Handover',
          description:
            'Final testing, governance review, and delivery documentation are completed.',
          icon: Settings,
        },
      ],
      columns: 3 as const,
      cssPrefix: 'elementor-process',
      backgroundColor: 'bg-alt' as const,
    },
    featureSection: {
      badge: 'Implementation Capabilities',
      title: 'Elementor Implementation Capabilities',
      categories: [
        {
          title: 'Visual Accuracy',
          description: 'Implementation of structured design systems with editing flexibility.',
          icon: Layout,
          features: [
            'Pixel-perfect conversion',
            'Precise spacing & positioning',
            'Typography matching',
            'Color accuracy',
            'Grid system implementation',
            'Design system recreation',
          ],
        },
        {
          title: 'Code Quality',
          description: 'Organized templates and performance-conscious structure.',
          icon: Code,
          features: [
            'Semantic HTML markup',
            'Minimal CSS output',
            'No unnecessary plugins',
            'Performance-optimized code',
            'Clean file structure',
            'Maintainable codebase',
          ],
        },
        {
          title: 'Responsive Design',
          description: 'Consistent responsive behavior across device classes.',
          icon: Smartphone,
          features: [
            'Mobile-first approach',
            'Tablet optimization',
            'Desktop perfection',
            'Custom breakpoints',
            'Touch-friendly interfaces',
            'Cross-device testing',
          ],
        },
        {
          title: 'Interactive Elements',
          description: 'Interactive elements implemented within maintainable structural systems.',
          icon: Sparkles,
          features: [
            'Hover effects & animations',
            'Interactive forms',
            'Popup styling',
            'Scroll animations',
            'Micro-interactions',
            'Dynamic content areas',
          ],
        },
      ],
      cssPrefix: 'elementor-features',
    },
  },
  cta: {
    title: 'Discuss your Elementor implementation',
    description:
      'If your team needs a clean Elementor build with editing flexibility and long-term clarity, we can review scope and outline the right approach.',
    buttonText: 'Start a Conversation',
    buttonHref: '/contact?system=smart-website-systems&source=service/elementor',
  },
} satisfies ServicePageData;
