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
      'Running your business across disconnected platforms, patching around limitations, and losing time to tool sprawl. This service consolidates everything into a cleaner foundation — easier to manage, maintain, and extend.',
    list: [
        'Reduced tool sprawl',
        'Cleaner tech stack',
        'Growth-ready foundation',
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
            'A consolidated structure — so you work from one cleaner, more predictable foundation instead of managing fragmented pieces.',
        },
        {
          before:
            'Important functions live across too many tools, each with its own limits, costs, and workarounds.',
          after:
            'Reduced tool sprawl — so ownership, maintenance, and change become easier to manage from one place.',
        },
        {
          before:
            'Your current platform no longer supports how your business actually operates, but the team keeps patching around the limitations.',
          after:
            'A platform and system model that fits how your business works today — so changes happen cleanly instead of requiring workarounds.',
        },
      ],
    },
    migrationSignals: {
      badge: 'Typical migration triggers',
      title: 'Migration becomes relevant when you recognise one of these patterns',
      description:
        'Rarely one bug. Usually a repeated pattern showing the current platform or tool mix is no longer a good fit.',
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
        'The goal is not just to move systems — it is to simplify them enough that the new foundation is genuinely easier to manage.',
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
        'What is preserved, rebuilt, or removed is decided before the move is executed.',
      steps: [
        {
          number: '1',
          title: 'Audit current platform and tool stack',
          description:
            'Identify where the present setup is creating structural drag, duplication, or maintenance problems — so the migration scope targets the real cost, not surface symptoms.',
        },
        {
          number: '2',
          title: 'Define the consolidation logic',
          description:
            'Decide what should move, what should be rebuilt, and what should be simplified — so the new foundation is genuinely cleaner, not a copy of old complexity.',
        },
        {
          number: '3',
          title: 'Execute the migration',
          description:
            'Content, workflows, and platform responsibilities move into a cleaner structure — so the business operates from a foundation that fits how it actually works.',
        },
        {
          number: '4',
          title: 'Stabilise the new foundation',
          description:
            'The post-migration system is tested, documented, and confirmed — so the team can maintain and extend it without depending on the migration team.',
        },
      ],
    },
    qualification: {
      title: 'Is this the right fit for your business?',
      description:
        'Works best when carrying too much platform or tool fragmentation and the next step needs to simplify the foundation, not patch it again.',
      strongFitTitle: 'Strong fit if',
      notDesignedTitle: 'Not the right fit if',
      strongFitItems: [
        {
          title: 'You are moving away from a limited or locked platform',
          description:
            'Your current platform constrains structure, integrations, or long-term maintainability — and the limitations are costing you more than the migration.',
        },
        {
          title: 'You have too many disconnected tools doing overlapping jobs',
          description:
            'Website, forms, booking, messaging, and follow-up are spread across fragmented systems with no shared data or workflow.',
        },
        {
          title: 'You need a stable foundation before other systems can succeed',
          description:
            'Future CRM, SEO, or automation work will underperform until the platform layer is consolidated and simplified.',
        },
      ],
      notDesignedItems: [
        {
          title: 'You only need one focused page or campaign asset',
          description:
            'If your platform is broadly fine and the need is narrow, a landing page or funnel build is faster and cheaper.',
        },
        {
          title: 'You only want a cosmetic redesign',
          description:
            'If the core problem is surface presentation rather than platform fragmentation, migration scope is broader than needed.',
        },
        {
          title: 'You are not willing to simplify the old setup',
          description:
            'Migration works when the move reduces complexity. Preserving every historical workaround unchanged defeats the purpose.',
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
            'Yes. That is one of the most common paths. The useful part is not only moving content but rebuilding the structure and connected workflows in a more flexible foundation.',
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
            'Logging into five different tools to manage one customer journey — so every process takes longer than the work itself',
            'Every update requires workarounds or depends on the one person who knows the setup — so the business stalls when that person is unavailable',
            'Adding anything new means layering another tool on top of existing fragmentation — so complexity compounds with every improvement attempt',
            'The team spends more time managing tools than serving customers — so operational overhead eats into capacity',
            'Nobody is confident the foundation can support what the business needs next — so growth decisions get delayed by infrastructure uncertainty',
          ],
        },
        {
          type: 'after' as const,
          title: 'Consolidated foundation',
          items: [
            'One platform handles the full workflow with fewer logins — so the team spends less time switching tools',
            'Changes are straightforward because the structure is documented — so updates do not depend on one person',
            'New features plug into a stable foundation — so growth adds capability instead of creating more sprawl',
            'Maintenance time drops because there are fewer disconnected systems — so the team focuses on customers, not tools',
            'The team can extend and grow on a platform they understand — so confidence in the foundation stops being a blocker',
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
          description: 'Forms, booking, messaging, tracking, CRM, and website running across disconnected platforms. Every customer touchpoint involved a manual handoff — so the team spent more time managing tools than serving customers.',
          points: [
            'Seven separate tools with no shared data or workflow — so every process required manual syncing between platforms',
            'Manual syncing wasted hours each week — so staff capacity went to tool management instead of customer-facing work',
            'No visibility into where leads were stalling — so revenue leaked at handoff points nobody could see',
          ],
        },
        {
          title: 'What we consolidated: one clear foundation',
          description: 'Website migrated to WordPress with forms, booking, and follow-up connected into a single workflow — tools reduced from seven to three with clear ownership.',
          points: [
            'Website, forms, and booking consolidated into one platform — so the team worked from a single system',
            'CRM connected with automated lead routing and follow-up — so leads moved through the pipeline without manual handoff',
            'Tool count reduced from seven to three with clear governance — so maintenance became manageable',
          ],
          featured: true,
        },
        {
          title: 'After: stable, documented, maintainable',
          description: 'The new foundation was easier to maintain, extend, and hand over. The team stopped patching and started building on stable ground — because the consolidation was designed for independence, not just migration day.',
          points: [
            'Maintenance time dropped by 60% per month — because fewer tools and clear governance meant less overhead per change',
            'The team could make changes without specialist knowledge — because the system was documented and structured for internal ownership',
            'Full documentation meant the system was transferable — because the build was designed for the business to own, not depend on the builder',
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
