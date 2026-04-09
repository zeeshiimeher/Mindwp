import { Code, Eye, Layers, Search, Settings, Smartphone, Sparkles, Zap } from 'lucide-react';

import { buildContactHref } from '@/lib/contact/contactHref';

import type { ServicePageData } from '../types';

export const divi5Page = {
  slug: 'divi5',
  systems: ['smart-website-systems'],
  topics: ['website-infrastructure'],
  keywords: [
    'divi 5',
    'divi implementation',
    'visual page builder',
    'wordpress themes',
    'drag and drop',
    'website builder',
  ],
  badge: 'Divi Implementation',
  category: 'Implementation Services',
  seo: {
    title: 'Divi Implementation | Structured WordPress Delivery with Divi',
    description:
      'Structured WordPress implementation with Divi for teams that need flexible editing, disciplined build standards, and approved designs translated into a maintainable website.',
    canonical: '/services/divi5',
    schema: {
      service: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Structured WordPress Implementation with Divi Builder',
        description:
          'Structured WordPress implementation with Divi for teams that need flexible editing, disciplined build standards, and approved designs translated into a maintainable website.',
        provider: {
          '@type': 'Organization',
          name: 'MindWP',
        },
        areaServed: 'UK',
        url: '/services/divi5',
      },
    },
  },
  hero: {
    badge: 'Divi Builder Implementation',
    title: 'WordPress implementation with Divi — built for flexible editing and long-term clarity',
    description:
      'We build WordPress websites using Divi where the team needs a flexible editing experience without losing visual or technical control. Approved designs are converted precisely, with a build that stays maintainable over time.',
    primaryAction: {
      label: 'Start a Conversation',
      href: buildContactHref({
        system: 'smart-website-systems',
        sourceType: 'service',
        slug: 'divi5',
      }),
    },
    cssPrefix: 'divi5-hero',
    backgroundColor: 'bg-gradient-surface-muted relative overflow-hidden',
  },
  sections: {
    conversionSection: {
      title: 'From Figma, PSD, or XD to a production-ready Divi build',
      description1:
        'We convert approved design files into precise Divi implementations. Spacing, typography, layout logic, and responsive behaviour are built accurately — without compromising clarity or long-term maintainability.',
      description2:
        'This is a production-focused implementation service. For full business planning and system design, explore Smart Websites.',
    },
    benefitsSection: {
      badge: 'Implementation Principles',
      title: 'What disciplined Divi implementation protects',
      cssPrefix: 'divi5-benefits',
      backgroundColor: 'bg-base' as const,
      items: [
        {
          icon: Zap,
          title: 'Design Fidelity',
          description:
            'The approved design is implemented precisely. Visual intent stays intact without sacrificing maintainability.',
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
            'Organised templates, minimal plugin reliance, and clean components make long-term refinement manageable.',
          iconType: 'secondary' as const,
        },
        {
          icon: Layers,
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
            "Divi's editing flexibility is kept within clear guardrails so changes do not break the design over time.",
          iconType: 'secondary' as const,
        },
      ],
    },
    featureSection: {
      badge: 'Implementation Capabilities',
      title: 'Divi Builder Implementation Capabilities',
      cssPrefix: 'divi5-features',
      columns: 3 as const,
      categories: [
        {
          title: 'Design Fidelity',
          description: 'Implementation of structured design systems with editing flexibility.',
          icon: Eye,
          features: [
            'Exact pixel matching',
            'Precise spacing & positioning',
            'Typography reproduction',
            'Color accuracy',
            'Design system implementation',
            'Responsive breakpoints',
          ],
        },
        {
          title: 'Clean Architecture',
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
          title: 'Responsive Excellence',
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
          title: 'Advanced Interactions',
          description: 'Interactive elements implemented within maintainable structural systems.',
          icon: Sparkles,
          features: [
            'Hover effects & animations',
            'Interactive buttons',
            'Form styling',
            'Modal windows',
            'Scroll animations',
            'Micro-interactions',
          ],
        },
        {
          title: 'Content Management',
          description:
            'Structured template systems that empower internal teams without compromising governance.',
          icon: Layers,
          features: [
            'Dynamic content areas',
            'Reusable templates',
            'Global styling system',
            'Easy content updates',
            'Template library',
            'Version control friendly',
          ],
        },
        {
          title: 'Performance Optimization',
          description: 'Performance-conscious configuration within Divi’s architecture.',
          icon: Zap,
          features: [
            'Optimized images',
            'Lazy loading',
            'Minified code',
            'Fast page speeds',
            'SEO-friendly structure',
            'Core Web Vitals optimized',
          ],
        },
      ],
    },
    whySection: {
      badge: 'Why this approach works',
      title: 'Divi works well when the implementation is disciplined',
      description:
        'Divi gives strong visual control and a flexible editing experience. When the build is governed properly, the site can evolve without losing coherence.',
      columns: 3 as const,
      cssPrefix: 'divi5-why',
      backgroundColor: 'bg-base' as const,
      variant: 'bordered' as const,
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
        {
          title: 'Consistent across devices',
          description:
            'Intentional breakpoint work ensures a consistent experience on every screen size.',
        },
        {
          title: 'Search-ready markup',
          description: 'Clean output gives search engines a solid starting point.',
        },
      ],
    },
    processSection: {
      badge: 'Our Process',
      title: 'How we move from design file to production site',
      description:
        'A clear process that keeps the build on track from design review through to handover.',
      columns: 3 as const,
      cssPrefix: 'divi5-process',
      backgroundColor: 'bg-alt' as const,
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
          icon: Zap,
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
    },
  },
  cta: {
    title: 'Discuss your Divi implementation',
    description:
      'If your team needs a clean Divi build with flexible editing and long-term clarity, we can review scope and outline the right approach.',
  },
} satisfies ServicePageData;
