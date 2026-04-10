import { Bell, CheckCircle2, Mail, RefreshCcw, Settings, Workflow } from 'lucide-react';

import { CTA_LABELS } from '@/config/ctaLabels';
import { buildServiceContactHref } from '@/lib/contact/contactHref';

import { buildServiceSeo } from '../seo';
import type { ServicePageData } from '../types';

const slug = 'marketing-automation-setup';

export const marketingAutomationSetupPage = {
  slug,
  systems: ['revenue-growth'],
  topics: ['follow-up', 'client-reactivation'],
  keywords: [
    'marketing automation setup',
    'follow-up automation implementation',
    'lifecycle automation system',
    'service business automation setup',
    'automation setup for lead nurturing',
  ],
  badge: 'Marketing Automation Setup',
  category: 'Automation Implementation Services',
  seo: buildServiceSeo({
    slug,
    title:
      'Marketing Automation Setup | Structured Follow-Up Systems',
    description:
      'Marketing automation setup for service businesses that need structured follow-up, reminders, reactivation, and lifecycle messaging without relying on manual chasing.',
    schemaName: 'Marketing automation setup for service businesses',
    schemaDescription:
      'A structured marketing automation setup covering follow-up logic, reminders, reactivation flows, lifecycle messaging, and cleaner workflow handoff for service businesses.',
  }),
  hero: {
    badge: 'Lifecycle Messaging Pathway',
    title:
      'Automation helps when the business knows what should happen next but still relies on memory to make it happen',
    description:
      'This service implements structured automation around follow-up, reminders, reactivation, and lifecycle messaging. The goal is to reduce manual chasing while keeping the workflow clear, controlled, and commercially useful.',
    primaryAction: {
      label: CTA_LABELS.REVENUE_AUDIT,
      href: buildServiceContactHref({
        system: 'revenue-growth',
        slug: 'marketing-automation-setup',
      }),
    },
    list: [
      'Less manual follow-up and reminder work',
      'More reliable lifecycle messaging',
      'Cleaner handoff between automation and team action',
    ],
    cssPrefix: 'marketing-automation-hero',
    backgroundColor: 'bg-gradient-surface-muted',
  },
  sections: {
    foundation: {
      badge: 'Why automation setup matters',
      title:
        'Manual follow-up breaks down when timing matters but the process depends on spare time',
      description:
        'Automation setup is most useful when the business already knows which follow-up moments matter but needs a more reliable way to trigger and carry them forward.',
      painPoints: [
        {
          before:
            'Follow-up, reminders, and reactivation happen inconsistently because people are busy.',
          after:
            'The system handles routine timing more consistently so good opportunities are less likely to be missed.',
        },
        {
          before: 'Messages are sent ad hoc with no clear rules for when, why, or to whom.',
          after:
            'Automation runs on clearer triggers, segmentation, and workflow logic instead of random sending.',
        },
        {
          before: 'Even when automations exist, the handoff into the team or next stage is weak.',
          after:
            'The setup defines cleaner ownership and next actions when someone replies or reaches the next stage.',
        },
      ],
    },
    automationExamples: {
      badge: 'Common automation pathways',
      title: 'Automation works best when it is tied to real business moments',
      description:
        'The aim is not to build a pile of sequences. It is to make the right follow-up happen at the right point in the customer journey.',
      items: [
        {
          trigger: 'A new lead enquires but is not ready to book immediately.',
          actions: [
            'Send a relevant first follow-up',
            'Space the next messages properly',
            'Route engaged replies into the next sales step',
            'Stop the sequence when the person becomes active',
          ],
        },
        {
          trigger: 'An appointment or service milestone is coming up and reminders matter.',
          actions: [
            'Trigger confirmation and reminder messages',
            'Set timing based on the service model',
            'Reduce admin chasing and forgotten next steps',
            'Keep the team aware when action is needed',
          ],
        },
        {
          trigger: 'Past customers or dormant leads need structured reactivation.',
          actions: [
            'Segment the right audience first',
            'Send relevant reactivation messaging',
            'Track responses and hand off the warm contacts',
            'Avoid treating old contacts like one generic list',
          ],
        },
      ],
    },
    governanceAreas: {
      badge: 'What good setup depends on',
      title: 'Useful automation depends on governance, not just triggers',
      description:
        'These are the practical layers that usually decide whether automation improves the business or just adds more noise.',
      items: [
        {
          icon: Settings,
          title: 'Trigger and rule design',
          description:
            'Define what starts the automation, what conditions matter, and when the workflow should stop or hand over.',
          checks: [
            'Clear trigger events',
            'Timing logic by stage',
            'Stop and exit rules',
            'Human handoff conditions',
          ],
          iconType: 'primary' as const,
        },
        {
          icon: Mail,
          title: 'Message relevance and sequencing',
          description:
            'Make the messages fit the stage, context, and commercial purpose instead of sending one generic sequence to everyone.',
          checks: [
            'Stage-based messaging',
            'Channel-aware sequences',
            'Reasonable message spacing',
            'Clear next-step prompts',
          ],
          iconType: 'secondary' as const,
        },
        {
          icon: Workflow,
          title: 'Workflow continuity and visibility',
          description:
            'Make sure replies, clicks, and stage changes feed back into the right workflow instead of creating another disconnected layer.',
          checks: [
            'Owner visibility on responses',
            'Pipeline or CRM handoff',
            'Task or alert creation',
            'Basic workflow reporting',
          ],
          iconType: 'accent' as const,
        },
      ],
    },
    automationLayers: {
      badge: 'Where automation usually helps',
      title: 'Automation setup often improves a few connected workflow layers together',
      description:
        'These are the most common areas where structured automation reduces manual workload and creates better continuity.',
      items: [
        {
          icon: Mail,
          title: 'Lead nurture and follow-up',
          description:
            'Support new enquiries with clearer follow-up timing and relevant next-step messaging.',
        },
        {
          icon: Bell,
          title: 'Reminders and confirmations',
          description:
            'Reduce forgotten actions, no-shows, and admin chasing around appointments or service steps.',
        },
        {
          icon: RefreshCcw,
          title: 'Reactivation and win-back',
          description:
            'Reconnect with dormant leads or past customers through more deliberate timing and segmentation.',
        },
        {
          icon: CheckCircle2,
          title: 'Onboarding and post-service continuity',
          description:
            'Keep the customer journey clearer after first conversion or after delivery begins.',
        },
      ],
    },
    processSection: {
      badge: 'Setup sequence',
      title: 'How the automation setup is usually approached',
      description:
        'The useful part is designing the logic first, then implementing automation in a way the business can actually manage.',
      steps: [
        {
          number: '1',
          title: 'Choose the key lifecycle moments',
          description:
            'Identify where follow-up, reminders, or reactivation should happen and what each sequence is meant to achieve.',
        },
        {
          number: '2',
          title: 'Define rules and message paths',
          description:
            'Set the trigger logic, timing, segmentation, and messaging structure before the automation is built.',
        },
        {
          number: '3',
          title: 'Connect the handoff points',
          description:
            'Make sure responses, stage changes, and team actions feed into the right workflow instead of floating separately.',
        },
        {
          number: '4',
          title: 'Refine around real behaviour',
          description:
            'Watch what gets ignored, what gets engagement, and where the automation should be adjusted over time.',
        },
      ],
    },
    qualification: {
      title: 'Who this is designed for',
      description:
        'This works best where the business already knows the kinds of follow-up or lifecycle communication it needs, but execution still depends too much on memory or inconsistent habits.',
      strongFitTitle: 'Strong fit',
      notDesignedTitle: 'Not designed for',
      strongFitItems: [
        {
          title: 'Businesses with repeatable follow-up needs',
          description:
            'A strong fit when the same kinds of reminders, nurture messages, or reactivation steps keep happening manually.',
        },
        {
          title: 'Teams needing cleaner lifecycle continuity',
          description:
            'Useful when leads or customers move through recognisable stages but the communication between those stages is inconsistent.',
        },
        {
          title: 'Businesses that want more automation without losing control',
          description:
            'Especially useful when the team wants structure and reliability, not hype-led “set and forget” automation.',
        },
      ],
      notDesignedItems: [
        {
          title: 'Businesses without a clear workflow to automate',
          description:
            'If the underlying follow-up process is still undefined, automation should not be the first layer added.',
        },
        {
          title: 'Teams expecting automation to fix weak messaging by itself',
          description:
            'Automation makes clear communication more consistent. It does not make unclear messaging effective on its own.',
        },
        {
          title: 'Cases where traffic or site structure is still the bigger issue',
          description:
            'If not enough good enquiries are arriving or the website path is weak, another system may need to lead before automation setup matters most.',
        },
      ],
    },
    faqSection: {
      badge: 'FAQ',
      title: 'Common questions about automation setup',
      description:
        'Questions that usually come up when a business wants more automation but does not want a messy system.',
      faqs: [
        {
          question: 'Can this include both email and SMS?',
          answer:
            'Yes, where that makes sense for the workflow. The channel choice should follow the business model and customer context rather than using every channel by default.',
        },
        {
          question: 'Does this overlap with Lead Reactivation or Review Automation?',
          answer:
            'Sometimes, but in a deliberate way. Those pages focus on narrower workflow problems. Marketing Automation Setup is the broader implementation pathway for building structured automation across follow-up and lifecycle messaging.',
        },
        {
          question: 'Can the business keep control after setup?',
          answer:
            'Yes. The goal is to create automation the business can understand, manage, and refine over time rather than relying on opaque logic nobody wants to touch later.',
        },
      ],
      cssPrefix: 'marketing-automation-faq',
    },
  },
  cta: {
    title: 'Set up automation that actually supports the business',
    description:
      'If follow-up, reminders, or lifecycle messaging still depend on manual effort, we can help build a cleaner automation setup.',
  },
} satisfies ServicePageData;
