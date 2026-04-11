import { LayoutTemplate, Puzzle, ShieldCheck, Wrench } from 'lucide-react';


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
      'System Migration & Platform Consolidation for Service Businesses | MindWP',
    description:
      'Move away from fragmented tools, outdated platforms, and disconnected systems. We consolidate your website foundation so it is easier to manage, maintain, and grow.',
    schemaName: 'System migration and platform consolidation for service businesses',
    schemaDescription:
      'A migration pathway for service businesses that need cleaner platform structure, reduced tool sprawl, better maintainability, and a more stable operating foundation.',
  }),
  hero: {
    badge: 'System Migration & Platform Consolidation',
      title: 'Consolidate Your Tools Into One Stable Operating Platform',
    description:
      'You are running your business across disconnected platforms, patching around limitations, and losing time to tool sprawl. This service consolidates everything into a cleaner foundation that is easier to manage, maintain, and extend.',
    list: [
        'Fewer Tools',
        'Cleaner Stack',
        'Easier Growth',
    ],
    cssPrefix: 'system-migration-hero',
    backgroundColor: 'bg-gradient-surface-muted',
  },
  sections: {
    foundation: {
      badge: 'Why migration work appears',
      title:
        'Your current platform is technically running, but it is dragging the business down',
      description:
        'Migration becomes relevant when the setup still works, but every change, integration, or update takes longer than it should.',
      painPoints: [
        {
          before:
            'Your website and tools grew in fragments. Updates and integrations now feel harder than they should.',
          after:
            'A consolidated structure so you work from one cleaner, more predictable foundation.',
        },
        {
          before:
            'Important functions live across too many tools, each with its own limits, costs, and workarounds.',
          after:
            'Reduced tool sprawl so ownership, maintenance, and change are easier to manage.',
        },
        {
          before:
            'Your current platform no longer supports how your business actually operates, but the team keeps patching around the limitations.',
          after:
            'A platform and system model that fits how your business works today, not three years ago.',
        },
      ],
    },
    migrationSignals: {
      badge: 'Typical migration triggers',
      title: 'Migration becomes relevant when you recognise one of these patterns',
      description:
        'The issue is rarely one bug. It is usually a repeated pattern showing the current platform or tool mix is no longer a good fit.',
      items: [
        {
          icon: LayoutTemplate,
          title: 'Your platform is limiting your business',
          description:
            'Wix, Squarespace, or another locked platform is constraining structure, integrations, and future growth.',
          iconType: 'primary' as const,
        },
        {
          icon: Puzzle,
          title: 'Too many tools doing pieces of the same job',
          description:
            'Forms, booking, messaging, tracking, and follow-up all live in disconnected systems with no continuity between them.',
          iconType: 'secondary' as const,
        },
        {
          icon: Wrench,
          title: 'Every update depends on a workaround',
          description:
            'The current setup keeps needing patches, manual fixes, or fragile integrations just to stay running.',
          iconType: 'accent' as const,
        },
        {
          icon: ShieldCheck,
          title: 'The foundation does not feel stable anymore',
          description:
            'Your team has lost confidence in how reliable, maintainable, or scalable the current structure actually is.',
          iconType: 'primary' as const,
        },
      ],
    },
    riskAreas: {
      badge: 'What weak migration planning causes',
      title:
        'Migration fails when the old fragmentation gets copied into the new setup',
      description:
        'The goal is not just to move systems. It is to simplify them enough that the new foundation is genuinely easier to manage.',
      lists: [
        {
          title: 'Migration risks',
          issues: [
            {
              title: 'Too much of the old structure carried forward',
              description:
                'Outdated page models, tool logic, and platform habits get rebuilt instead of corrected.',
            },
            {
              title: 'The move focuses on software, not workflow',
              description:
                'The platform changes, but routing, ownership, and maintenance problems stay untouched.',
            },
            {
              title: 'Nobody defines what should be consolidated',
              description:
                'The new setup ends up with fewer logos but roughly the same complexity.',
            },
          ],
        },
        {
          title: 'Consolidation risks',
          issues: [
            {
              title: 'The team loses visibility during the move',
              description:
                'Content, forms, and operational logic become harder to track because the migration path was not planned clearly.',
            },
            {
              title: 'The new system is still too tool-dependent',
              description:
                'The project swaps one set of constraints for another without improving maintainability.',
            },
            {
              title: 'Stability is assumed instead of designed',
              description:
                'The new foundation launches, but update paths, governance, and management remain weak.',
            },
          ],
        },
      ],
    },
    consolidationTargets: {
      badge: 'What the migration often consolidates',
      title: 'What the migration typically consolidates',
      description:
        'The emphasis stays on what is being simplified or brought together more cleanly.',
      items: [
        {
          title: 'Platform and website structure',
          desc: 'Move your website onto a more suitable foundation with improved architecture, maintainability, and flexibility.',
        },
        {
          title: 'Form, booking, and enquiry pathways',
          desc: 'Reduce fragmentation where conversion paths jump between disconnected tools or duplicated workflows.',
        },
        {
          title: 'Tool stack and integrations',
          desc: 'Simplify how your key tools work together so updates, ownership, and reporting are easier to manage.',
        },
        {
          title: 'Operational continuity after the move',
          desc: 'The new setup should be easier to support, maintain, and extend after launch, not just during migration.',
        },
      ],
    },
    processSection: {
      badge: 'Migration sequence',
      title: 'How we approach migration and consolidation',
      description:
        'We decide what should be preserved, rebuilt, or removed before the move is executed.',
      steps: [
        {
          number: '1',
          title: 'Audit your current platform and tool stack',
          description:
            'We identify where the present setup is creating structural drag, duplication, or maintenance problems.',
        },
        {
          number: '2',
          title: 'Define the consolidation logic',
          description:
            'We decide what should move, what should be rebuilt, and what should be simplified rather than carried forward.',
        },
        {
          number: '3',
          title: 'Execute the migration',
          description:
            'Content, workflows, and platform responsibilities move into a cleaner structure that fits how your business actually operates.',
        },
        {
          number: '4',
          title: 'Stabilise the new foundation',
          description:
            'The post-migration system is tested, documented, and confirmed easier to maintain and extend after launch.',
        },
      ],
    },
    qualification: {
      title: 'Is this the right fit for your business?',
      description:
        'This works best when you are carrying too much platform or tool fragmentation and the next step needs to simplify the foundation, not just patch it again.',
      strongFitTitle: 'Strong fit if',
      notDesignedTitle: 'Not the right fit if',
      strongFitItems: [
        {
          title: 'You are moving away from a limited platform',
          description:
            'Your current platform is constraining structure, integrations, or long-term maintainability and you need a better foundation.',
        },
        {
          title: 'You have too many disconnected tools',
          description:
            'Your website, forms, booking, messaging, and follow-up are spread across fragmented systems with no central structure.',
        },
        {
          title: 'You need a cleaner foundation before other work can succeed',
          description:
            'Future website, CRM, SEO, or automation projects will stay weaker until the platform layer is simplified properly.',
        },
      ],
      notDesignedItems: [
        {
          title: 'You only need one focused page or campaign asset',
          description:
            'If your current platform is broadly fine and the need is narrower, a landing page or funnel build may be a better fit.',
        },
        {
          title: 'You only want a cosmetic redesign',
          description:
            'If the core problem is surface presentation rather than platform or tool fragmentation, this scope may be broader than needed.',
        },
        {
          title: 'You are not willing to simplify the old setup',
          description:
            'Migration works best when the move is used to reduce complexity, not preserve every historical workaround unchanged.',
        },
      ],
    },
    faqSection: {
      badge: 'FAQ',
      title: 'Common questions about migration and consolidation',
      description:
        'Questions that come up when you know the current platform or tool stack has become part of the problem.',
      faqs: [
        {
          question: 'Can this include moving from Wix or Squarespace to WordPress?',
          answer:
            'Yes. That is one of the most common paths. The useful part is not only moving the content but rebuilding the structure and connected workflows in a more flexible foundation.',
        },
        {
          question: 'How is this different from Website Redesign & System Rebuild?',
          answer:
            'Website Redesign focuses on structural correction inside the website itself. System Migration focuses on moving away from fragmented platforms or tool stacks and simplifying the operating foundation around that move.',
        },
        {
          question: 'Will the new setup automatically be simpler?',
          answer:
            'Only if consolidation is designed intentionally. A migration can reduce complexity, but only when the project chooses what to simplify instead of carrying every old workaround forward.',
        },
        {
          question: 'How long does a typical migration take?',
          answer:
            'It depends on how many tools and platforms are being consolidated. A focused platform move can take a few weeks. A full consolidation across website, forms, CRM, and automations usually takes longer because the planning phase matters as much as the execution.',
        },
      ],
      cssPrefix: 'system-migration-faq',
    },
    comparison: {
      header: {
        title: 'What changes when migration is done properly',
        description:
          'The difference between patching around platform limitations and consolidating into a cleaner foundation.',
      },
      items: [
        {
          type: 'before' as const,
          title: 'Patching around limitations',
          items: [
            'Logging into five different tools to manage one customer journey',
            'Every update requires workarounds or depends on the one person who knows the setup',
            'Adding anything new means layering another tool on top of existing fragmentation',
            'The team spends more time managing tools than serving customers',
            'Nobody is confident the foundation can support what the business needs next',
          ],
        },
        {
          type: 'after' as const,
          title: 'Consolidated foundation',
          items: [
            'One platform handles the full workflow with fewer logins and less friction',
            'Changes are straightforward because the structure is documented and maintainable',
            'New features plug into a stable foundation instead of creating more sprawl',
            'Maintenance time drops because there are fewer disconnected systems to manage',
            'The team can extend and grow on a platform they understand and control',
          ],
        },
      ],
    },
    proof: {
      header: {
        title: 'What consolidation looked like for one business',
        description:
          'A service business migrated from a fragmented Wix and multi-tool setup to a consolidated WordPress foundation with integrated workflows.',
      },
      cards: [
        {
          title: 'Before: seven tools, no continuity',
          description: 'The business was running forms, booking, messaging, tracking, CRM, and website across disconnected platforms. Every customer touchpoint involved a manual handoff.',
          points: [
            'Seven separate tools with no shared data or workflow',
            'Manual syncing between platforms wasted hours each week',
            'No visibility into where leads were stalling or dropping off',
          ],
        },
        {
          title: 'What we consolidated: one clear foundation',
          description: 'We migrated the website to WordPress and connected forms, booking, and follow-up into a single workflow. Tools were reduced from seven to three with clear ownership of each.',
          points: [
            'Website, forms, and booking consolidated into one platform',
            'CRM connected with automated lead routing and follow-up',
            'Tool count reduced from seven to three with clear governance',
          ],
          featured: true,
        },
        {
          title: 'After: stable, documented, maintainable',
          description: 'The new foundation was easier to maintain, extend, and hand over. The team stopped patching and started building.',
          points: [
            'Maintenance time dropped by 60% per month',
            'The team could make changes without specialist knowledge',
            'Full documentation meant the system was not dependent on one person',
          ],
        },
      ],
    },
  },
  inlineCta: {
    title: 'Tired of patching around platform limitations?',
    description:
      'If your tools are creating more friction than value, a consolidation conversation is a good starting point.',
  },
  cta: {
    title: 'Ready to simplify your platform foundation?',
    description:
      'If your business is being slowed by fragmented tools or an outdated platform, we can help define a cleaner migration and consolidation path.',
  },
} satisfies ServicePageData;
