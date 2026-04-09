import { Blocks, Cog, LayoutTemplate, Link2, Search, Workflow } from 'lucide-react';

import { buildContactHref } from '@/lib/contact/contactHref';

import type { ServicePageData } from '../types';

export const wordpressDevelopmentPage = {
  slug: 'wordpress-development',
  systems: ['smart-website-systems'],
  topics: ['website-infrastructure', 'systems-first-websites'],
  keywords: [
    'wordpress website development for service business',
    'custom wordpress website implementation',
    'structured wordpress website',
    'business website development on wordpress',
    'web shop development on wordpress',
  ],
  badge: 'WordPress Website Development',
  category: 'Implementation Services',
  seo: {
    title:
      'WordPress Website Development | Structured Website Implementation for Service Businesses',
    description:
      'Structured WordPress website development for service businesses that need clear site architecture, better enquiry flow, cleaner implementation, and long-term maintainability.',
    canonical: '/services/wordpress-development',
    schema: {
      service: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'WordPress website development for service businesses',
        description:
          'Structured WordPress implementation focused on clear service architecture, enquiry handling, maintainability, and future-ready foundations.',
        provider: {
          '@type': 'Organization',
          name: 'MindWP',
        },
        areaServed: 'UK',
        url: '/services/wordpress-development',
      },
    },
  },
  hero: {
    badge: 'Implementation Pathway',
    title:
      'A WordPress website should be built around how the business works — not just how it looks',
    description:
      'This is for service businesses that need a proper WordPress foundation. Not pages thrown together quickly, but a site where services are clearly presented, enquiry paths make sense, and the whole thing stays manageable after launch.',
    primaryAction: {
      label: 'Start a Conversation',
      href: buildContactHref({
        system: 'smart-website-systems',
        sourceType: 'service',
        slug: 'wordpress-development',
      }),
    },
    list: [
      'Services and pages organised around how the business operates',
      'Enquiry pathways that guide visitors toward the right next step',
      'CRM-ready foundations for future systems',
      'A build that stays maintainable as things change',
    ],
    cssPrefix: 'wordpress-development-hero',
    backgroundColor: 'bg-gradient-surface-muted',
  },
  sections: {
    foundation: {
      badge: 'Why projects drift',
      title: 'Most WordPress projects go wrong before the first page is even built',
      description:
        "The problem is rarely WordPress itself. It is what happens when page-building starts before anyone has agreed on the site's purpose, service presentation, or enquiry flow.",
      painPoints: [
        {
          before: 'Pages are planned one by one with no overall logic holding them together.',
          after:
            'Implementation starts from service priorities, content logic, and enquiry flow — so every page has a clear job.',
        },
        {
          before:
            'Theme, builder, and plugin decisions are made too early and end up driving the project.',
          after: 'Technology choices support the business outcome instead of dictating it.',
        },
        {
          before:
            'The site launches looking fine but quickly becomes hard to update, inconsistent, or fragile.',
          after:
            'The build is organised so the site can keep improving without creating internal mess.',
        },
      ],
    },
    implementationScope: {
      badge: 'Implementation scope',
      title: 'What this pathway covers',
      description:
        'This covers the practical implementation work needed to build a clear WordPress foundation. Scope depends on the business, but it usually falls into a few groups.',
      cards: [
        {
          title: 'Service-business website implementation',
          description:
            'A WordPress build for businesses that need their services clearly presented, enquiry paths defined, and pages that work together.',
          points: [
            'Core page and navigation logic',
            'Service-page hierarchy',
            'Quote, booking, or contact pathways',
          ],
          featured: true,
        },
        {
          title: 'Brochure-style rebuilds with better logic',
          description:
            'For businesses whose current website feels dated, unclear, or disconnected from how the business actually operates now.',
          points: [
            'Content restructuring',
            'Cleaner navigation',
            'Reduced clutter and duplication',
          ],
        },
        {
          title: 'Commerce-ready WordPress implementations',
          description:
            'Where relevant, WordPress can also support e-commerce or web shop delivery using WooCommerce as a technology layer.',
          points: [
            'Catalog and product logic',
            'Checkout and fulfilment flow',
            'Commerce kept within the wider site system',
          ],
        },
      ],
    },
    principles: {
      badge: 'Implementation principles',
      title: 'What a good WordPress build should protect',
      description:
        'A strong WordPress build is not only about launch day. It should support operational clarity, future changes, and cleaner system expansion over time.',
      tagline: 'Build for the business, not just the handover.',
      narrativeTitle: 'The website should still make sense after the project ends',
      narrativeParagraphs: [
        'A WordPress website becomes more valuable when its pages, content logic, and editing paths are easy to understand. That matters more than packing in features that only make sense during launch week.',
        'Implementation decisions are made around maintainability, message clarity, and future readiness. If later work includes CRM, local SEO, reviews, or automation, the website should already be able to support it.',
      ],
      features: [
        {
          title: 'Clear page hierarchy',
          description:
            'Visitors and the internal team should both understand what each page is for and where it sits.',
          icon: LayoutTemplate,
        },
        {
          title: 'Maintainable editing model',
          description:
            'Templates, sections, and content patterns should be easy to manage without things drifting out of shape.',
          icon: Blocks,
        },
        {
          title: 'Search-ready foundations',
          description:
            'Content and page logic should support visibility work later rather than blocking it.',
          icon: Search,
        },
        {
          title: 'System-ready foundations',
          description:
            'Forms, calls to action, tracking, and routing should be ready to connect into future operational systems.',
          icon: Workflow,
        },
      ],
    },
    processSection: {
      badge: 'Implementation process',
      title: 'How WordPress projects move from brief to handover',
      description:
        'The exact path depends on the project, but the process usually follows a clear sequence so the build stays controlled and the outcome stays useful.',
      steps: [
        {
          number: '1',
          title: 'Scope and priorities review',
          description:
            'We define what the website needs to do, which pages matter most, and what the real operational priorities are.',
        },
        {
          number: '2',
          title: 'Page planning and content logic',
          description:
            'Navigation, page hierarchy, service coverage, and conversion paths are mapped before any building starts.',
        },
        {
          number: '3',
          title: 'Implementation setup',
          description:
            'Templates, build approach, integrations, and governance decisions are locked in to keep the project stable.',
        },
        {
          number: '4',
          title: 'Build, refine, and handover',
          description:
            'The site is built, checked, refined, and prepared so future updates stay manageable.',
        },
      ],
    },
    capabilitySection: {
      badge: 'What can be included',
      title: 'Common layers inside a WordPress website project',
      description:
        'Not every project needs every layer. These are the types of work often included when building a solid WordPress foundation.',
      categories: [
        {
          title: 'Structure and page system',
          description: 'Core implementation decisions that shape the site itself.',
          icon: LayoutTemplate,
          features: [
            'Page and template architecture',
            'Navigation and internal hierarchy',
            'Service page structure',
            'Content blocks and reusable sections',
            'Clear CTA pathways',
          ],
        },
        {
          title: 'Technical and operational setup',
          description: 'The implementation layer that keeps the website stable and usable.',
          icon: Cog,
          features: [
            'Form setup and routing',
            'Analytics and tracking setup',
            'Core plugin governance',
            'Performance and stability basics',
            'Security and update hygiene',
          ],
        },
        {
          title: 'Expansion-ready foundations',
          description:
            'Support for what comes after launch when the business grows into more systems.',
          icon: Link2,
          features: [
            'CRM-ready form and enquiry pathways',
            'SEO-supportive structure',
            'Review and authority support pages',
            'Commerce-ready planning where needed',
            'Content scaling and future refinement',
          ],
        },
      ],
    },
    qualification: {
      title: 'Who this pathway fits best',
      description:
        'This works well for businesses that want a proper WordPress foundation — not just a quick launch.',
      strongFitTitle: 'Strong fit',
      notDesignedTitle: 'Not designed for',
      strongFitItems: [
        {
          title: 'Service businesses that need a clearer foundation',
          description:
            'Best when the website should reflect how the business actually works today, not just look presentable.',
        },
        {
          title: 'Teams planning for future systems',
          description:
            'A good fit when CRM, SEO, reviews, automation, or commerce may follow and the site needs to be ready for them.',
        },
        {
          title: 'Owners who value maintainability',
          description: 'Useful when long-term clarity matters more than launch-day speed alone.',
        },
      ],
      notDesignedItems: [
        {
          title: 'Quick template swaps with no planning behind them',
          description:
            'If the goal is only to launch something fast with no care for what happens afterwards, this is not the right approach.',
        },
        {
          title: 'Tool-led projects that start with a plugin list',
          description: 'The project should start from business needs, not the other way around.',
        },
        {
          title: 'Large software-product builds',
          description:
            'This pathway is for service-business website implementation, not SaaS product engineering.',
        },
      ],
    },
    faqSection: {
      badge: 'FAQ',
      title: 'Common questions about WordPress development',
      description: 'Practical questions that usually come up before a WordPress project begins.',
      faqs: [
        {
          question: 'Can this include a redesign as well as a rebuild?',
          answer:
            'Yes. Some projects include a redesign or restructuring phase before implementation. The work is still framed around clarity and usefulness rather than visual change for its own sake.',
        },
        {
          question: 'Do you work with one specific builder or theme?',
          answer:
            'No. The builder or theme approach depends on what best supports the project. Those choices stay secondary to the business needs and long-term maintainability.',
        },
        {
          question: 'Can you migrate an existing website into WordPress?',
          answer:
            'Yes, when that is the right move. Migration can be part of this pathway, or it can lead into a dedicated migration and consolidation scope if the project is more involved.',
        },
        {
          question: 'Will the website support SEO and CRM later?',
          answer:
            'That is one of the main reasons to approach WordPress development this way. A well-built foundation makes later SEO, CRM, review, and automation work much easier to add.',
        },
      ],
      cssPrefix: 'wordpress-development-faq',
    },
  },
  related: {
    variant: 'domain-only',
    title: 'Related implementation and system paths',
    description:
      'If WordPress Website Development is part of a wider growth or operational project, these adjacent pages help explain what connects next.',
  },
  cta: {
    title: 'Discuss your WordPress website project',
    description:
      'If you need a clearer WordPress foundation for a service business, we can review the current situation and outline the best implementation path forward.',
  },
} satisfies ServicePageData;
