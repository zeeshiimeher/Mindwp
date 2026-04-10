import { LayoutTemplate, Puzzle, ShieldCheck, Wrench } from 'lucide-react';

import { CTA_LABELS } from '@/config/ctaLabels';
import { buildServiceContactHref } from '@/lib/contact/contactHref';

import { buildServiceSeo } from '../seo';
import type { ServicePageData } from '../types';

const slug = 'system-migration-platform-consolidation';

export const systemMigrationPlatformConsolidationPage = {
  slug,
  systems: ['smart-website-systems'],
  topics: ['website-infrastructure'],
  keywords: [
    'website migration and platform consolidation',
    'system migration service',
    'platform rebuild for service business',
    'website platform consolidation',
    'migrate website to wordpress',
  ],
  badge: 'System Migration & Platform Consolidation',
  category: 'Migration Pathway Services',
  seo: buildServiceSeo({
    slug,
    title:
      'System Migration | Platform Consolidation for Businesses',
    description:
      'System migration and platform consolidation for service businesses moving away from fragmented tools, outdated platforms, or disconnected website systems.',
    schemaName: 'System migration and platform consolidation for service businesses',
    schemaDescription:
      'A migration pathway for service businesses that need cleaner platform structure, reduced tool sprawl, better maintainability, and a more stable operating foundation.',
  }),
  hero: {
    badge: 'Migration & Consolidation Pathway',
    title:
      'When the business is held together by too many disconnected tools, migration is really about simplification',
    description:
      'This service is for businesses moving away from fragmented tools, outdated platforms, or disconnected systems. The goal is a cleaner platform structure, less tool sprawl, and a more stable operating foundation that is easier to maintain and extend.',
    primaryAction: {
      label: CTA_LABELS.SMART_WEBSITE_CONVERSION,
      href: buildServiceContactHref({
        system: 'smart-website-systems',
        slug: 'system-migration-platform-consolidation',
      }),
    },
    list: [
      'Cleaner platform structure and fewer disconnected tools',
      'Less maintenance friction and technical sprawl',
      'A more stable foundation for future website and workflow work',
    ],
    cssPrefix: 'system-migration-hero',
    backgroundColor: 'bg-gradient-surface-muted',
  },
  sections: {
    foundation: {
      badge: 'Why migration work appears',
      title:
        'Migration work appears when the current platform or tool stack is creating drag on the business',
      description:
        'Migration becomes relevant when the current setup is still technically usable but is now making change, ownership, or integration harder than it should be.',
      painPoints: [
        {
          before:
            'The website and connected tools grew in fragments, so updates and integrations now feel harder than they should.',
          after:
            'The migration can consolidate the structure so the business works from a cleaner and more predictable foundation.',
        },
        {
          before:
            'Important functions live across too many tools, each with its own limits, costs, or workarounds.',
          after:
            'The consolidation can reduce tool sprawl and make ownership, maintenance, and change easier to manage.',
        },
        {
          before:
            'The current platform no longer supports the business model, but the team keeps patching around the limitations.',
          after:
            'The migration can move the business onto a platform and system model that fits the current operational reality more cleanly.',
        },
      ],
    },
    migrationSignals: {
      badge: 'Typical migration triggers',
      title: 'A migration pathway becomes relevant when one of these patterns is visible',
      description:
        'The issue is often larger than one website bug. It is usually a repeated sign that the current platform or tool mix is no longer a good fit.',
      items: [
        {
          icon: LayoutTemplate,
          title: 'Platform limitation is shaping the business too much',
          description:
            'Useful when Wix, Squarespace, or another limited setup is now constraining structure, integrations, or future expansion.',
          iconType: 'primary' as const,
        },
        {
          icon: Puzzle,
          title: 'Too many disconnected tools are doing pieces of the same job',
          description:
            'Useful when forms, booking, messaging, tracking, and follow-up live in disconnected systems with weak continuity.',
          iconType: 'secondary' as const,
        },
        {
          icon: Wrench,
          title: 'Maintenance keeps depending on workarounds',
          description:
            'Useful when the current setup keeps needing patches, manual fixes, or fragile integrations to stay usable.',
          iconType: 'accent' as const,
        },
        {
          icon: ShieldCheck,
          title: 'The operating foundation no longer feels stable enough',
          description:
            'Useful when the team has lost confidence in how reliable, maintainable, or scalable the current structure really is.',
          iconType: 'primary' as const,
        },
      ],
    },
    riskAreas: {
      badge: 'What weak migration planning causes',
      title:
        'Migration work causes problems when the old fragmentation is copied into the new setup',
      description:
        'The aim is not only to move systems. It is to simplify them enough that the new foundation is easier to manage than the old one.',
      lists: [
        {
          title: 'Migration risks',
          issues: [
            {
              title: 'The business carries too much of the old structure forward',
              description:
                'Unhelpful page models, tool logic, or platform habits get rebuilt instead of corrected.',
            },
            {
              title: 'The move focuses on software, not workflow',
              description:
                'The platform changes, but the underlying routing, ownership, or maintenance problems stay untouched.',
            },
            {
              title: 'Nobody defines what should be consolidated',
              description:
                'The new setup ends up with fewer logos but not much less actual complexity.',
            },
          ],
        },
        {
          title: 'Consolidation risks',
          issues: [
            {
              title: 'The team loses visibility during the move',
              description:
                'Content, forms, or operational logic become harder to track because the migration path was not planned clearly.',
            },
            {
              title: 'The new system is still too tool-dependent',
              description:
                'The project swaps one set of constraints for another without improving maintainability meaningfully.',
            },
            {
              title: 'Stability is assumed instead of designed',
              description:
                'The new foundation launches, but update paths, governance, and ongoing management remain weak.',
            },
          ],
        },
      ],
    },
    consolidationTargets: {
      badge: 'What the migration often consolidates',
      title: 'The work usually focuses on a few practical consolidation targets',
      description:
        'This page is implementation-led, so the emphasis stays on what is being simplified or brought together more cleanly.',
      items: [
        {
          title: 'Platform move and website structure',
          desc: 'Move the website onto a more suitable foundation while improving architecture, maintainability, and future flexibility.',
        },
        {
          title: 'Form, booking, and enquiry pathways',
          desc: 'Reduce fragmentation where conversion paths currently jump between disconnected tools or duplicated workflows.',
        },
        {
          title: 'Connected tool stack and integrations',
          desc: 'Simplify how key tools work together so updates, ownership, and reporting become easier to manage.',
        },
        {
          title: 'Operational continuity after the move',
          desc: 'Make sure the new setup is easier to support, maintain, and extend after launch rather than only during the migration itself.',
        },
      ],
    },
    processSection: {
      badge: 'Migration sequence',
      title: 'How migration and consolidation is approached',
      description:
        'The useful path is to decide what should be preserved, rebuilt, or removed before the move is executed.',
      steps: [
        {
          number: '1',
          title: 'Assess the current platform and tool stack',
          description:
            'Identify where the present setup is creating structural drag, duplication, or maintenance problems.',
        },
        {
          number: '2',
          title: 'Choose the consolidation logic',
          description:
            'Decide what should move, what should be rebuilt, and what should be simplified rather than carried forward.',
        },
        {
          number: '3',
          title: 'Execute the migration around the cleaner model',
          description:
            'Move content, workflows, and platform responsibilities into a more stable structure that matches the business better.',
        },
        {
          number: '4',
          title: 'Stabilise the new foundation',
          description:
            'Make sure the post-migration system is maintainable, governable, and easier to build on after launch.',
        },
      ],
    },
    qualification: {
      title: 'Who this is designed for',
      description:
        'This works best where the business is carrying too much platform or tool fragmentation and the next step needs to simplify the foundation, not just patch it again.',
      strongFitTitle: 'Strong fit',
      notDesignedTitle: 'Not designed for',
      strongFitItems: [
        {
          title: 'Businesses moving away from limited platforms',
          description:
            'A strong fit when the current platform is now limiting structure, integrations, or long-term maintainability.',
        },
        {
          title: 'Teams with too many disconnected tools',
          description:
            'Useful when the website, forms, booking, messaging, and follow-up logic are spread across too many fragmented systems.',
        },
        {
          title: 'Businesses that need a cleaner operating foundation first',
          description:
            'Especially useful when future website, CRM, SEO, or automation work will stay weaker until the platform layer is simplified properly.',
        },
      ],
      notDesignedItems: [
        {
          title: 'Businesses needing only one focused page or campaign asset',
          description:
            'If the current platform is broadly fine and the need is narrower, a landing page or funnel implementation page may be a better fit.',
        },
        {
          title: 'Cases where only cosmetic redesign is being considered',
          description:
            'If the core problem is surface presentation rather than platform or tool fragmentation, this page may be broader than needed.',
        },
        {
          title: 'Teams unwilling to simplify the old setup',
          description:
            'Migration works best when the move is used to reduce complexity, not preserve every historical workaround unchanged.',
        },
      ],
    },
    faqSection: {
      badge: 'FAQ',
      title: 'Common questions about migration and consolidation',
      description:
        'Questions that come up when the business knows the current platform or tool stack has become part of the problem.',
      faqs: [
        {
          question: 'Can this include moving from Wix or Squarespace to WordPress?',
          answer:
            'Yes. That is one common migration path. The useful part is not only moving the content, but rebuilding the structure and connected workflows in a more flexible foundation.',
        },
        {
          question: 'How is this different from Website Redesign & System Rebuild?',
          answer:
            'Website Redesign & System Rebuild focuses more on structural correction inside the website itself. System Migration & Platform Consolidation focuses more on moving away from fragmented platforms or tool stacks and simplifying the operating foundation around that move.',
        },
        {
          question: 'Will the new setup automatically be simpler?',
          answer:
            'Only if consolidation is designed intentionally. A migration can reduce complexity, but only when the project chooses what to simplify instead of carrying every old workaround forward.',
        },
      ],
      cssPrefix: 'system-migration-faq',
    },
  },
  cta: {
    title: 'Simplify the platform foundation',
    description:
      'If the business is being slowed by fragmented tools or an outdated platform, we can help define a cleaner migration and consolidation path.',
    buttonText: CTA_LABELS.SMART_WEBSITE_CONVERSION,
    buttonHref: buildServiceContactHref({
      system: 'smart-website-systems',
      slug: 'system-migration-platform-consolidation',
    }),
  },
} satisfies ServicePageData;
