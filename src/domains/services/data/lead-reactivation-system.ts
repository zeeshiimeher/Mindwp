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
    title: 'Lead Reactivation System for Service Businesses | MindWP',
    description:
      'Stop letting old enquiries, stalled quotes, and past customers sit unused. Structured reactivation that turns dormant pipeline into recovered revenue.',
    schemaName: 'Lead reactivation system for service businesses',
    schemaDescription:
      'Structured lead reactivation covering dormant lead segmentation, follow-up timing, re-engagement messaging, and ownership for recovering stalled opportunities.',
  }),
  hero: {
    badge: 'Lead Reactivation System',
      title: 'Bring Old Leads Back Into Active Pipeline',
    description:
      'Old enquiries, stalled quotes, and past customers do not come back because someone remembers to chase them at the right time. A structured reactivation system brings the right ones back with the right message at the right moment.',
    list: [
        'Dormant Leads',
        'Timed Follow-up',
        'Pipeline Recovery',
    ],
    cssPrefix: 'lead-reactivation-hero',
    backgroundColor: 'bg-gradient-surface-muted',
  },
  sections: {
    foundation: {
      badge: 'Where old opportunities get wasted',
      title:
        'You do not have a lead shortage. You have a follow-up shortage.',
      description:
        'Good opportunities are sitting in old enquiries, stalled quotes, and past-customer records. Nobody is working them because there is no system to bring them back.',
      painPoints: [
        {
          before:
            'Old enquiries sit in the CRM with no reason or prompt to contact them again.',
          after:
            'Reactivation rules create a practical reason, message, and timing for following up.',
        },
        {
          before:
            'Teams remember some old opportunities but ignore most of them when work gets busy.',
          after:
            'A defined workflow turns reactivation into a repeatable process instead of a memory task.',
        },
        {
          before:
            'Past customers, stalled quotes, and cold prospects are all mixed together with no segmentation.',
          after:
            'Different groups get handled with different triggers, messages, and next-step logic.',
        },
      ],
    },
    reactivationScenarios: {
      badge: 'Common recovery scenarios',
      title:
        'Different dormant leads need different follow-up logic',
      description:
        'Stalled quotes, cold enquiries, and past customers are not the same. The system works when each group gets the right message at the right time.',
      scenarioLabel: 'Dormant opportunity',
      solutionLabel: 'Reactivation approach',
      items: [
        {
          icon: FileSearch,
          title: 'Old quotes that never closed',
          scenario:
            'A quote was sent, the prospect went quiet, and nobody followed up properly.',
          solution:
            'Segment stalled quotes, set a timed follow-up path, and give the team a clear prompt to restart the conversation.',
          result:
            'Stalled quote value gets revisited instead of sitting invisible in the pipeline.',
        },
        {
          icon: MessageSquare,
          title: 'Enquiries that lost momentum',
          scenario:
            'A lead showed interest, but the conversation drifted because follow-up was weak or nobody owned it.',
          solution:
            'Re-engagement workflow with clearer triggers, messaging, and handoff so warm leads get picked up again.',
          result: 'Warm conversations restart before they go fully cold.',
        },
        {
          icon: Users,
          title: 'Past customers ready for repeat work',
          scenario:
            'Past customers could buy again or refer, but there is no structured way to reach them at the right time.',
          solution:
            'Lifecycle-based follow-up around repeat-service windows and relevant return reminders.',
          result:
            'Existing customer relationships become a revenue source, not just a contact list.',
        },
      ],
      alternatingItems: [
        {
          title: 'Stalled quote follow-up',
          description:
            'A quote was sent, the prospect went quiet, and nobody followed up properly.',
          points: [
            'Segment stalled quotes',
            'Restart follow-up with timed prompts',
            'Revisit stalled quote value',
          ],
        },
        {
          title: 'Enquiries losing momentum',
          description:
            'A lead showed interest, but the conversation drifted because follow-up was weak or nobody owned it.',
          points: [
            'Trigger re-engagement follow-up',
            'Clarify messaging and handoff',
            'Restart warm conversations',
          ],
        },
        {
          title: 'Past customer reactivation',
          description:
            'Past customers could buy again or refer, but there is no structured way to reach them at the right time.',
          points: [
            'Trigger lifecycle follow-up',
            'Send relevant return reminders',
            'Recover repeat-work opportunities',
          ],
        },
      ],
    },
    auditAreas: {
      badge: 'What the system needs',
      title: 'Three layers that make reactivation work',
      description:
        'Without segmentation, message logic, and ownership, re-engagement just becomes noise.',
      items: [
        {
          icon: Database,
          title: 'Segment dormant opportunities',
          description:
            'Separate old opportunities so reactivation feels relevant, not random.',
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
            'Define the message path, timing, and next step so follow-up actually happens.',
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
            'Make sure replies move into a visible workflow instead of creating more mess.',
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
      title: 'How the system works',
      description:
        'The details change by business, but the logic follows a clean sequence so follow-up stays controlled.',
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
      title: 'Reactivation touches sales follow-up, CRM hygiene, and lifecycle timing',
      description:
        'This is not a generic email campaign. It sits across several parts of the business at once.',
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
      title: 'Is this the right fit for your business?',
      description:
        'This works best where good opportunities already exist inside old enquiries, stalled quotes, or past-customer records but nobody is working them.',
      strongFitTitle: 'Strong fit if',
      notDesignedTitle: 'Not the right fit if',
      strongFitItems: [
        {
          title: 'You have dormant leads sitting unused in your CRM',
          description:
            'There is visible pipeline value in old enquiries, quotes, or CRM stages that nobody is touching.',
        },
        {
          title: 'Your follow-up discipline is inconsistent',
          description:
            'Re-engagement depends on memory, mood, or spare time rather than a structured workflow.',
        },
        {
          title: 'You have repeat-service potential with past customers',
          description:
            'Existing customers could come back if the lifecycle follow-up were clearer and better timed.',
        },
      ],
      notDesignedItems: [
        {
          title: 'Your real problem is lead quality, not follow-up',
          description:
            'If the issue is weak traffic, poor-fit enquiries, or low trust, reactivation alone is not the right fix.',
        },
        {
          title: 'You want a single campaign, not a system',
          description:
            'This works best as repeatable reactivation, not a one-time blast with no follow-up behind it.',
        },
        {
          title: 'Response speed or booking flow is the bigger leak',
          description:
            'If the main issue is missed calls, slow first response, or appointment friction, those may need fixing first.',
        },
      ],
    },
    comparison: {
      header: {
        title: 'Random re-engagement vs structured reactivation',
        description:
          'Most businesses treat dormant leads as a forgotten backlog. Here is what that costs compared to structured reactivation.',
      },
      items: [
        {
          type: 'before' as const,
          title: 'Random re-engagement',
          items: [
            'Old leads sit in the CRM with no prompt to follow up',
            'Someone sends a batch email when business is slow \u2014 then nothing',
            'Past customers, stalled quotes, and cold leads all get the same message',
            'No ownership over who follows up on responses',
            'Pipeline value sits dormant with no visibility into what could come back',
          ],
        },
        {
          type: 'after' as const,
          title: 'Structured reactivation system',
          items: [
            'Dormant groups segmented by type, age, and likely intent',
            'Follow-up timing and messaging tailored to each segment',
            'Past customers get lifecycle-based outreach, cold leads get different treatment',
            'Responses routed to a named owner with clear next steps',
            'Reactivation becomes a measurable source of recovered pipeline value',
          ],
        },
      ],
    },
    proof: {
      header: {
        title: 'What this looks like when it is running',
        description:
          'A service business had hundreds of old enquiries and stalled quotes in their CRM. Nobody was working them because there was no structured way to follow up.',
      },
      cards: [
        {
          title: 'Before: dormant pipeline with no follow-up',
          description: 'The business had over 300 old leads in their CRM from the past two years. Stalled quotes, past customers, and cold enquiries were all mixed together. Re-engagement happened only when someone remembered.',
          points: [
            'Hundreds of dormant contacts with no follow-up plan',
            'Stalled quotes mixed in with cold leads and past customers',
            'Re-engagement happened sporadically, if at all',
          ],
        },
        {
          title: 'What we built: segmented reactivation with timed follow-up',
          description: 'We segmented dormant leads into three groups \u2014 stalled quotes, cold enquiries, and past customers \u2014 then built tailored follow-up sequences with different timing, messaging, and next-step logic for each.',
          points: [
            'Three reactivation segments with tailored messaging',
            'Timed follow-up sequences for each group',
            'Responses routed to named team members with context',
          ],
          featured: true,
        },
        {
          title: 'After: recovered revenue from leads that were already there',
          description: 'Within the first two months, the business re-engaged multiple stalled quotes and booked repeat work from past customers. Pipeline value that had been sitting unused became a measurable revenue source.',
          points: [
            'Multiple stalled quotes re-engaged and moved forward',
            'Past customers booked repeat work through lifecycle messaging',
            'Recovered pipeline value visible in monthly reporting',
          ],
        },
      ],
    },
    faqSection: {
      badge: 'FAQ',
      title: 'Common questions about lead reactivation',
      description:
        'Practical questions from businesses that realise there is pipeline value sitting dormant in old contacts.',
      faqs: [
        {
          question: 'Can this work without a sophisticated CRM?',
          answer:
            'Yes. A stronger CRM helps, but even a simpler business can benefit from clearer segmentation, re-engagement timing, and ownership. The workflow can start at the right level and become more structured over time.',
        },
        {
          question: 'Is this the same as email marketing?',
          answer:
            'No. Email marketing is broader communication. Lead reactivation is focused on stalled opportunities, old enquiries, or past customers where the business wants a targeted commercial follow-up path.',
        },
        {
          question: 'How does this relate to the Revenue Growth review?',
          answer:
            'Revenue Growth looks at the broader commercial system. Lead Reactivation is a narrower workflow specifically for recovering value from opportunities the business has already touched but failed to move forward.',
        },
        {
          question: 'How soon can we expect results?',
          answer:
            'Most businesses see re-engaged conversations within weeks of the first reactivation sequences going out \u2014 especially from stalled quotes and past customers.',
        },
      ],
      cssPrefix: 'lead-reactivation-faq',
    },
  },
  inlineCta: {
    title: 'How much dormant pipeline value are you sitting on?',
    description:
      'Tell us about your old leads, stalled quotes, and past customers. We will show you what is worth reactivating and how to structure the follow-up.',
  },
  cta: {
    title: 'Bring dormant opportunities back to life',
    description:
      'Tell us about your old enquiries, stalled quotes, and past customers. We will show you what is worth pursuing and set up a system to recover it.',
  },
} satisfies ServicePageData;
