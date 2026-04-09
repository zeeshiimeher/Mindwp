import {
  Clock,
  Database,
  FileSearch,
  Mail,
  MessageSquare,
  RefreshCcw,
  Search,
  Users,
  Workflow,
} from 'lucide-react';

import { CTA_LABELS } from '@/config/ctaLabels';
import { buildServiceContactHref } from '@/lib/contact/contactHref';

import { buildServiceSeo } from '../seo';
import type { ServicePageData } from '../types';

const slug = 'lead-reactivation-system';

export const leadReactivationSystemPage = {
  slug,
  systems: ['revenue-growth'],
  topics: ['client-reactivation', 'follow-up'],
  keywords: [
    'lead reactivation system',
    'old lead follow-up automation',
    'cold lead recovery system',
    'customer reactivation workflow',
    'dormant lead re-engagement system',
  ],
  badge: 'Lead Reactivation System',
  category: 'Lifecycle Recovery Systems',
  seo: buildServiceSeo({
    slug,
    title: 'Lead Reactivation System | Recover value from old enquiries and dormant pipeline',
    description:
      'Lead reactivation systems for service businesses that need a cleaner way to re-engage old enquiries, dormant quotes, and cold opportunities without random follow-up.',
    schemaName: 'Lead reactivation system for service businesses',
    schemaDescription:
      'A structured lead reactivation system covering old enquiry segmentation, follow-up timing, re-engagement messaging, and clearer ownership for dormant opportunities.',
  }),
  hero: {
    badge: 'Recovery & Follow-Up Layer',
    title: 'Old leads rarely come back because someone remembers to chase them at the right time',
    description:
      'This service helps service businesses re-engage old enquiries, stalled quotes, and dormant pipeline value through structured follow-up. The goal is a clearer system so good opportunities are not left sitting unused.',
    primaryAction: {
      label: CTA_LABELS.PRIMARY,
      href: buildServiceContactHref({
        system: 'revenue-growth',
        slug: 'lead-reactivation-system',
      }),
    },
    list: [
      'Recover value from old enquiries and dormant opportunities',
      'Clearer follow-up timing and ownership',
      'Less pipeline waste from inconsistent re-engagement',
    ],
    cssPrefix: 'lead-reactivation-hero',
    backgroundColor: 'bg-gradient-surface-muted',
  },
  sections: {
    foundation: {
      badge: 'Where old opportunities get wasted',
      title:
        'Most businesses do not have a lead shortage in every period. They have a follow-up shortage.',
      description:
        'Reactivation works best when the business treats dormant leads, quotes, and past customers as structured follow-up groups — not one forgotten backlog.',
      painPoints: [
        {
          before:
            'Old enquiries sit in the CRM or inbox with no clear reason to contact them again.',
          after:
            'Reactivation rules create a practical reason, message, and timing for following up again.',
        },
        {
          before:
            'Teams remember some old opportunities but ignore most of them when work gets busy.',
          after:
            'A defined workflow turns reactivation into a repeatable process instead of a memory task.',
        },
        {
          before:
            'Past customers and stalled quotes are mixed together with no clear segmentation.',
          after:
            'Different groups can be handled with cleaner triggers, messages, and next-step logic.',
        },
      ],
    },
    reactivationScenarios: {
      badge: 'Common recovery scenarios',
      title:
        'Reactivation works best when the business knows which dormant value it is trying to recover',
      description:
        'Different dormant opportunities need different follow-up logic. The system becomes more useful when reactivation is tied to a clear scenario rather than one generic message.',
      scenarioLabel: 'Dormant opportunity',
      solutionLabel: 'Reactivation approach',
      items: [
        {
          icon: FileSearch,
          title: 'Old quotes that never closed',
          scenario:
            'A quote was sent, the prospect went quiet, and nobody followed up in a consistent way after that point.',
          solution:
            'Segment those quotes, set a timed follow-up path, and give the team a clearer prompt for restarting the conversation.',
          result:
            'More stalled quote value gets revisited instead of remaining invisible inside the pipeline.',
        },
        {
          icon: MessageSquare,
          title: 'Enquiries that lost momentum',
          scenario:
            'A lead asked questions or showed interest, but the conversation drifted because timing, ownership, or follow-up was weak.',
          solution:
            'Use a re-engagement workflow with clearer triggers, messaging, and handoff so warm opportunities can be picked up again.',
          result: 'Conversations are easier to restart before they become fully cold.',
        },
        {
          icon: Users,
          title: 'Past customers ready for repeat work',
          scenario:
            'Previous customers could buy again, refer again, or book again, but there is no structured way to reach them at the right time.',
          solution:
            'Create lifecycle-based follow-up around likely repeat-service windows and relevant return offers or reminders.',
          result:
            'The business gets better use of existing customer relationships, not only new enquiries.',
        },
      ],
    },
    auditAreas: {
      badge: 'What the system needs',
      title: 'A useful reactivation setup depends on three practical layers',
      description:
        'In practice, the system needs segmentation, message logic, and operational ownership to work reliably.',
      items: [
        {
          icon: Database,
          title: 'Segment dormant opportunities',
          description:
            'Separate different kinds of old opportunities so reactivation feels relevant instead of random.',
          checks: [
            'Old enquiries versus old quotes',
            'Past customers versus cold prospects',
            'Lead age and lifecycle grouping',
            'Priority opportunities worth pursuing first',
          ],
          iconType: 'primary' as const,
        },
        {
          icon: Mail,
          title: 'Build the re-engagement logic',
          description:
            'Define the message path, timing, and next-step prompt so follow-up has a reason to happen.',
          checks: [
            'Channel choice by contact type',
            'Timing rules and follow-up spacing',
            'Message angles for each segment',
            'Clear next actions when someone responds',
          ],
          iconType: 'accent' as const,
        },
        {
          icon: Workflow,
          title: 'Track ownership and outcomes',
          description:
            'Make sure replies and opportunities move back into a visible workflow instead of creating a second layer of mess.',
          checks: [
            'Assigned owner for reactivated leads',
            'Pipeline or CRM visibility',
            'Task creation or callback handoff',
            'Simple reporting on what came back to life',
          ],
          iconType: 'secondary' as const,
        },
      ],
    },
    processSection: {
      badge: 'Reactivation flow',
      title: 'How the reactivation system is structured',
      description:
        'The details change by business, but the logic follows a clean sequence so follow-up does not become random or over-aggressive.',
      steps: [
        {
          number: '1',
          title: 'Identify the dormant groups',
          description:
            'Start by separating old enquiries, quotes, past customers, and stalled opportunities into useful segments.',
        },
        {
          number: '2',
          title: 'Set the message and timing rules',
          description:
            'Define how and when each group should be contacted so the re-engagement feels relevant and controlled.',
        },
        {
          number: '3',
          title: 'Route responses into action',
          description:
            'Make sure replies create a visible next step for the team instead of landing back in another unmanaged inbox.',
        },
        {
          number: '4',
          title: 'Refine around response quality',
          description:
            'Watch what actually reopens conversations and adjust the workflow over time rather than treating it as fixed.',
        },
      ],
    },
    entryPoints: {
      badge: 'Where reactivation can start',
      title: 'The reactivation layer can sit across several parts of the business',
      description:
        'This is one reason the page should not feel like a generic email campaign service. It often touches sales follow-up, CRM hygiene, and lifecycle timing together.',
      columns: [
        {
          title: 'Old enquiries and quotes',
          icon: Search,
          features: [
            {
              icon: Clock,
              name: 'Timed follow-up windows',
              detail: 'Revisit opportunities based on how long they have been sitting inactive.',
            },
            {
              icon: MessageSquare,
              name: 'Context-aware prompts',
              detail: 'Use messages that reflect what the person asked about originally.',
            },
            {
              icon: Workflow,
              name: 'Clear response routing',
              detail: 'Move revived leads back into the right owner or stage quickly.',
            },
          ],
        },
        {
          title: 'Dormant pipeline and CRM stages',
          icon: RefreshCcw,
          features: [
            {
              icon: Database,
              name: 'Segment cleanup',
              detail: 'Separate true dead leads from leads that still justify a second attempt.',
            },
            {
              icon: FileSearch,
              name: 'Opportunity review',
              detail: 'Spot which quotes, proposals, or stalled deals are worth re-opening first.',
            },
            {
              icon: Mail,
              name: 'Follow-up sequence logic',
              detail:
                'Use structured re-engagement instead of one-off messages sent under pressure.',
            },
          ],
        },
        {
          title: 'Past customers and repeat service',
          icon: Users,
          features: [
            {
              icon: Clock,
              name: 'Lifecycle timing',
              detail: 'Reconnect when repeat demand is realistically likely, not at random.',
            },
            {
              icon: MessageSquare,
              name: 'Relevant return offers',
              detail: 'Frame the contact around maintenance, repeat work, or the next likely need.',
            },
            {
              icon: Search,
              name: 'Commercial visibility',
              detail:
                'See whether repeat-customer reactivation is becoming a meaningful revenue source.',
            },
          ],
        },
      ],
    },
    qualification: {
      title: 'Who this is designed for',
      description:
        'This works best where good opportunities already exist inside old enquiries, stalled quotes, or past-customer history, but the business lacks a reliable way to bring them back.',
      strongFitTitle: 'Strong fit',
      notDesignedTitle: 'Not designed for',
      strongFitItems: [
        {
          title: 'Businesses with dormant leads sitting unused',
          description:
            'A strong fit when there is visible pipeline value in old enquiries, quotes, or CRM stages that nobody is working properly.',
        },
        {
          title: 'Teams with inconsistent follow-up discipline',
          description:
            'Useful when re-engagement depends too heavily on memory, mood, or spare time rather than a proper workflow.',
        },
        {
          title: 'Businesses with repeat-service potential',
          description:
            'Especially useful where existing customers could come back again if the lifecycle follow-up were clearer and more timely.',
        },
      ],
      notDesignedItems: [
        {
          title: 'Businesses with poor initial lead quality',
          description:
            'If the real problem is weak traffic, poor-fit enquiries, or low trust, reactivation alone is not the right first fix.',
        },
        {
          title: 'Teams expecting one campaign to solve pipeline issues',
          description:
            'This works best as a system, not a single burst of messages with no follow-up structure behind it.',
        },
        {
          title: 'Cases where booking or response speed is the main leak',
          description:
            'If the bigger issue is missed calls, first response, or appointment friction, another Tier 2 page may be a better lead entry point.',
        },
      ],
    },
    faqSection: {
      badge: 'FAQ',
      title: 'Common questions about lead reactivation',
      description:
        'Questions that come up when a business realises there is pipeline value sitting dormant in old contacts.',
      faqs: [
        {
          question: 'Can this be useful without a sophisticated CRM already in place?',
          answer:
            'Yes. A stronger CRM helps, but even a simpler business can benefit from clearer segmentation, re-engagement timing, and ownership. The workflow can start at the right level and become more structured over time.',
        },
        {
          question: 'Is this the same as a newsletter or email marketing setup?',
          answer:
            'No. A newsletter is broader communication. Lead reactivation is more focused on stalled opportunities, old enquiries, or past customers where the business wants a clearer commercial follow-up path.',
        },
        {
          question: 'Does this overlap with Revenue Growth Systems?',
          answer:
            'Yes, but in a deliberate way. Revenue Growth looks at the broader commercial system. Lead Reactivation is a narrower workflow for recovering value from opportunities the business has already touched but failed to move forward properly.',
        },
      ],
      cssPrefix: 'lead-reactivation-faq',
    },
  },
  cta: {
    title: 'Bring dormant opportunities back to life',
    description:
      'If old enquiries, stalled quotes, or past customers are sitting untouched, we can help structure a clearer reactivation workflow.',
    buttonText: CTA_LABELS.PRIMARY,
    buttonHref: buildServiceContactHref({
      system: 'revenue-growth',
      slug: 'lead-reactivation-system',
    }),
  },
} satisfies ServicePageData;
