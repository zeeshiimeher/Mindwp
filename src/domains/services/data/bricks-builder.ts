import {
  Code,
  Database,
  Eye,
  Layers,
  Palette,
  Search,
  Shield,
  Smartphone,
  Zap,
} from 'lucide-react';


import { buildServiceSeo } from '../seo';
import type { ServicePageData } from '../types';

const slug = 'bricks-builder';

export const bricksBuilderPage = {
  slug,
  systems: ['smart-website-systems'],
  topics: ['website-infrastructure'],
  keywords: [
    'bricks builder',
    'bricks builder implementation',
    'wordpress page builder',
    'visual builder',
    'custom breakpoints',
    'performance',
  ],
  badge: 'Bricks Implementation',
  category: 'Implementation Services',
  seo: buildServiceSeo({
    slug,
    title: 'Bricks Builder | Structured WordPress Implementation',
    description:
      'Structured WordPress implementation with Bricks Builder for teams that need performance-conscious delivery, clean architecture, and disciplined conversion of approved designs.',
    schemaName: 'Structured WordPress Implementation with Bricks Builder',
    schemaDescription:
      'WordPress development using Bricks Builder with performance-first architecture, clean markup output, and structured build standards.',
  }),
  hero: {
    badge: 'Bricks Builder Implementation',
    title:
      'WordPress implementation with Bricks — built for performance, precision, and long-term clarity',
    description:
      'We build WordPress websites using Bricks Builder where performance and clean output matter. Approved designs are converted precisely, with a build that stays fast, maintainable, and easy to extend.',
    cssPrefix: 'bricks-hero',
    backgroundColor: 'bg-gradient-surface-muted relative overflow-hidden',
  },
  sections: {
    conversionSection: {
      title: 'From Figma, PSD, or XD to a production-ready Bricks build',
      description1:
        'We convert approved design files into precise Bricks implementations. Typography, spacing, layout logic, and responsive behaviour are built accurately — without compromising performance or long-term clarity.',
      description2:
        'This is a production-focused implementation service. For full business planning and system design, explore Smart Websites.',
    },
    benefitsSection: {
      badge: 'Implementation Principles',
      title: 'What disciplined Bricks implementation protects',
      cssPrefix: 'bricks-benefits',
      backgroundColor: 'bg-base' as const,
      items: [
        {
          icon: Zap,
          title: 'Design Fidelity',
          description:
            'The approved design is implemented precisely. Visual intent stays intact without sacrificing performance.',
          iconType: 'primary' as const,
        },
        {
          icon: Smartphone,
          title: 'Responsive by Design',
          description:
            'Layouts are built with intentional breakpoints and clean responsive logic — not patched overrides.',
          iconType: 'accent' as const,
        },
        {
          icon: Code,
          title: 'Clean Build',
          description:
            'Minimal plugin reliance, semantic markup, and organised components for long-term maintainability.',
          iconType: 'secondary' as const,
        },
        {
          icon: Database,
          title: 'Predictable Delivery',
          description:
            'Clear scope and a disciplined process mean the build stays on track from start to handover.',
          iconType: 'primary' as const,
        },
        {
          icon: Search,
          title: 'Search-Ready Foundations',
          description:
            'Clean HTML, schema compatibility, and performance hygiene are built in from the start.',
          iconType: 'accent' as const,
        },
        {
          icon: Shield,
          title: 'Maintainable and Extensible',
          description:
            'The build is organised so that future refinement, scaling, and integration stay straightforward.',
          iconType: 'secondary' as const,
        },
      ],
    },
    whySection: {
      badge: 'Why this approach works',
      title: 'Bricks works well when the implementation is disciplined',
      description:
        'Bricks Builder produces clean output with deep control and genuine performance advantages. When the build is governed properly, the result is a fast, maintainable site that stays coherent over time.',
      items: [
        {
          title: 'Design intent preserved',
          description:
            'What was approved is what gets built — every element, spacing, and detail stays intact.',
        },
        {
          title: 'Technical clarity',
          description:
            'Professional code output and clean configuration avoid the bloat that builder projects often create.',
        },
        {
          title: 'Faster launch',
          description: 'A disciplined process replaces trial-and-error with predictable delivery.',
        },
        {
          title: 'Built to last',
          description:
            'Clean, maintainable code that is easy to update, extend, and scale as needs change.',
        },
      ],
      columns: 4 as const,
      cssPrefix: 'bricks-why',
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
            'We review the design system, component needs, and operational requirements before building anything.',
          icon: Eye,
        },
        {
          number: '2',
          title: 'Build Planning',
          description:
            'Template logic, responsive approach, and component hierarchy are defined upfront.',
          icon: Layers,
        },
        {
          number: '3',
          title: 'Precise Build',
          description:
            'Implementation begins with clean components, global styles, and organised layout systems.',
          icon: Zap,
        },
        {
          number: '4',
          title: 'Responsive Refinement',
          description: 'Responsive behaviour and performance are refined across device sizes.',
          icon: Smartphone,
        },
        {
          number: '5',
          title: 'Performance Pass',
          description:
            'Code hygiene, optimisation, and cleanup ensure the site stays fast and maintainable.',
          icon: Code,
        },
        {
          number: '6',
          title: 'Testing and Handover',
          description:
            'Cross-browser checks, performance validation, and final review before delivery.',
          icon: Shield,
        },
      ],
      columns: 3 as const,
      cssPrefix: 'bricks-process',
      backgroundColor: 'bg-alt' as const,
    },
    featureSection: {
      badge: 'Implementation Capabilities',
      title: 'Bricks Builder Implementation Capabilities',
      cssPrefix: 'bricks-features',
      categories: [
        {
          title: 'Precision Conversion',
          description: 'Pixel-perfect layouts from your designs',
          icon: Zap,
          features: [
            'Exact pixel matching',
            'Precise spacing & positioning',
            'Typography reproduction',
            'Color accuracy',
            'Custom breakpoints',
            'Design system implementation',
          ],
        },
        {
          title: 'Performance-First Code',
          description: 'Optimized code with minimal overhead',
          icon: Code,
          features: [
            'Clean HTML output',
            'Minimal CSS generation',
            'No unnecessary plugins',
            'Fast loading times',
            'SEO-friendly structure',
            'Version control friendly',
          ],
        },
        {
          title: 'Developer Tools',
          description: 'Professional development features',
          icon: Database,
          features: [
            'Custom CSS/JS per element',
            'PHP execution capabilities',
            'Template conditions',
            'Global classes & elements',
            'Advanced query loops',
            'Dynamic data integration',
          ],
        },
        {
          title: 'Design Freedom',
          description: 'Complete creative control',
          icon: Palette,
          features: [
            '100+ elements available',
            'Complete style control',
            'Flexbox & Grid layouts',
            'Advanced animations',
            'Shape dividers & effects',
            'Custom interaction states',
          ],
        },
      ],
    },
  },
  cta: {
    title: 'Want cleaner code without losing flexibility?',
    description:
      'Tell us what your current site struggles with. We\'ll review whether a Bricks build solves it and what the project would look like.',
  },
} satisfies ServicePageData;
