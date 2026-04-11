import { Bell, CheckCircle2, Mail, RefreshCcw, Settings, Workflow } from 'lucide-react';


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
    title: 'Marketing Automation Setup for Service Businesses | MindWP',
    description:
      'Stop relying on memory for follow-up. Structured marketing automation setup covering follow-up logic, reminders, reactivation, and lifecycle messaging.',
    schemaName: 'Marketing automation setup for service businesses',
    schemaDescription:
      'A structured marketing automation setup covering follow-up logic, reminders, reactivation flows, lifecycle messaging, and cleaner workflow handoff for service businesses.',
  }),
  hero: {
    badge: 'Marketing Automation Setup',
      title: 'Marketing Automation That Keeps Follow Up Moving',
    description:
      'This service implements structured automation around follow-up, reminders, reactivation, and lifecycle messaging. Less manual chasing, clearer handoff, more reliable commercial communication.',
    list: [
        'Auto Follow-up',
        'Lifecycle Messaging',
        'Team Handoff',
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
        'Automation is most useful when the business already knows which follow-up moments matter but needs a more reliable way to make them happen.',
      painPoints: [
        {
          before:
            'Follow-up, reminders, and reactivation happen inconsistently because people are busy.',
          after:
            'Routine timing runs consistently so good opportunities are less likely to be missed.',
        },
        {
          before: 'Messages are sent ad hoc with no clear rules for when, why, or to whom.',
          after:
            'Automation runs on clear triggers, segmentation, and workflow logic.',
        },
        {
          before: 'Even when automations exist, the handoff into the team is weak.',
          after:
            'Cleaner ownership and next actions when someone replies or reaches the next stage.',
        },
      ],
    },
    automationExamples: {
      badge: 'Common automation pathways',
      title: 'Automation works best when tied to real business moments',
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
      alternatingItems: [
        {
          title: 'Leads not ready to book',
          description: 'A new lead enquires but is not ready to book immediately.',
          points: [
            'Send a relevant first follow-up',
            'Space the next messages properly',
            'Route engaged replies into the next sales step',
            'Stop the sequence when the person becomes active',
          ],
        },
        {
          title: 'Appointment reminder timing',
          description:
            'An appointment or service milestone is coming up and reminders matter.',
          points: [
            'Trigger confirmation and reminder messages',
            'Set timing based on the service model',
            'Reduce admin chasing and forgotten next steps',
            'Keep the team aware when action is needed',
          ],
        },
        {
          title: 'Dormant lead reactivation',
          description: 'Past customers or dormant leads need structured reactivation.',
          points: [
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
        'These are the layers that decide whether automation improves the business or just adds noise.',
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
      title: 'Automation improves several connected workflow layers together',
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
      title: 'How the automation setup works',
      description:
        'The useful part is designing the logic first, then implementing automation the business can actually manage.',
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
      title: 'Is this the right fit for your business?',
      description:
        'This works best where the business already knows what follow-up should happen but execution still depends on memory or inconsistent habits.',
      strongFitTitle: 'Strong fit if',
      notDesignedTitle: 'Not the right fit if',
      strongFitItems: [
        {
          title: 'You have repeatable follow-up that keeps happening manually',
          description:
            'The same reminders, nurture messages, or reactivation steps keep being done by hand.',
        },
        {
          title: 'Leads or customers move through recognisable stages',
          description:
            'There are clear lifecycle points but the communication between them is inconsistent.',
        },
        {
          title: 'You want structure and reliability, not hype',
          description:
            'The team wants controlled automation, not "set and forget" sequences with no governance.',
        },
      ],
      notDesignedItems: [
        {
          title: 'You do not have a clear workflow to automate',
          description:
            'If the underlying follow-up process is still undefined, automation should not be the first layer added.',
        },
        {
          title: 'You expect automation to fix weak messaging',
          description:
            'Automation makes clear communication more consistent. It does not make unclear messaging effective.',
        },
        {
          title: 'Traffic or site structure is the bigger issue',
          description:
            'If not enough good enquiries are arriving or the website is weak, those may need fixing first.',
        },
      ],
    },
    faqSection: {
      badge: 'FAQ',
      title: 'Common questions about automation setup',
      description:
        'Practical questions from businesses that want more automation without creating a messy system.',
      faqs: [
        {
          question: 'Can this include both email and SMS?',
          answer:
            'Yes, where that makes sense. Channel choice should follow the business model and customer context rather than using every channel by default.',
        },
        {
          question: 'How does this relate to Lead Reactivation or Review Automation?',
          answer:
            'Those pages focus on narrower workflow problems. Marketing Automation Setup is the broader implementation pathway for structured automation across follow-up and lifecycle messaging.',
        },
        {
          question: 'Can the business keep control after setup?',
          answer:
            'Yes. The goal is automation the business can understand, manage, and refine over time — not opaque logic nobody wants to touch later.',
        },
        {
          question: 'Do we need a CRM first?',
          answer:
            'Not always. Automation can start at a simpler level. But as workflows become more structured, CRM visibility usually becomes more valuable.',
        },
      ],
      cssPrefix: 'marketing-automation-faq',
    },
    comparison: {
      header: {
        title: 'Manual follow-up vs structured automation',
        description:
          'Most businesses know what follow-up should happen. The difference is whether it actually happens consistently or depends on whoever has time.',
      },
      items: [
        {
          type: 'before' as const,
          title: 'Manual follow-up',
          items: [
            'Follow-up depends on memory, spare time, or someone remembering to check',
            'Messages sent ad hoc with no rules for timing, audience, or next step',
            'Past customers and dormant leads sit in the CRM untouched',
            'No visibility into what follow-up happened or what got missed',
            'Reminders and confirmations handled by hand or forgotten entirely',
          ],
        },
        {
          type: 'after' as const,
          title: 'Structured automation',
          items: [
            'Follow-up triggers automatically based on lifecycle stage and timing rules',
            'Messages segmented by audience, stage, and commercial purpose',
            'Dormant leads and past customers get structured reactivation',
            'Workflow visibility shows what ran, what got engagement, and what needs attention',
            'Reminders and confirmations happen reliably without manual chasing',
          ],
        },
      ],
    },
    proof: {
      header: {
        title: 'What this looks like when automation is running properly',
        description:
          'A service business had good enquiry volume but poor follow-up. Leads went cold because nobody had time to chase them.',
      },
      cards: [
        {
          title: 'Before: follow-up depended on spare time',
          description: 'The business received a steady flow of enquiries, but follow-up was manual and inconsistent. Leads went cold, reminders were forgotten, and past customers were never contacted again.',
          points: [
            'Follow-up happened when someone remembered',
            'Reminders were manual and often missed',
            'Past customers sat dormant with no outreach',
          ],
        },
        {
          title: 'What we built: lifecycle automation with clear handoff',
          description: 'We implemented structured follow-up sequences for new leads, reminder automations for appointments, and reactivation flows for past customers — all with clear handoff rules back to the team.',
          points: [
            'New-lead nurture with timed follow-up and next-step routing',
            'Appointment reminders reducing no-shows and admin chasing',
            'Past-customer reactivation with segmented messaging',
          ],
          featured: true,
        },
        {
          title: 'After: consistent follow-up without more staff',
          description: 'Follow-up became reliable without adding headcount. New leads got timely nurture, reminders ran automatically, and past customers started coming back through structured reactivation.',
          points: [
            'Lead nurture ran consistently without manual effort',
            'Appointment no-shows reduced through automated reminders',
            'Past customers re-engaged through lifecycle messaging',
          ],
        },
      ],
    },
  },
  inlineCta: {
    title: 'What follow-up is falling through the cracks in your business?',
    description:
      'Tell us about your follow-up, reminders, and lifecycle communication. We will show you what should be automated and how to set it up properly.',
  },
  cta: {
    title: 'Set up automation that actually supports the business',
    description:
      'Tell us what follow-up still depends on memory. We will build a structured automation layer that runs reliably and stays manageable.',
  },
} satisfies ServicePageData;
