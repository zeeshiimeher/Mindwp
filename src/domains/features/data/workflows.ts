import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Layers,
  Mail,
  MessageSquare,
  Repeat,
  Settings,
  Target,
  Workflow,
  Zap,
} from 'lucide-react';

import { buildFeatureSeo } from '../seo';
import type { FeaturePageData } from '../types';

const workflowsFaqItems = [
  {
    question: 'Do I need technical skills to create workflows?',
    answer:
      'No technical skills are required. The workflow builder uses a visual interface to connect triggers and actions. Templates are available for common processes.',
  },
  {
    question: "What's an example of a useful workflow?",
    answer:
      'For example, when an appointment is booked, a confirmation message is sent, reminders are scheduled, and a follow-up is delivered. Each step is managed by the workflow and can be reviewed by your team.',
  },
  {
    question: 'Can workflows integrate with my existing tools?',
    answer:
      'Workflows can connect with calendars, email platforms, and other tools through integrations. Data stays organized and up to date.',
  },
  {
    question: 'How do I know if workflows are working?',
    answer:
      'Activity logs and dashboards show which workflows are running and what actions have been completed. Human oversight is always possible.',
  },
  {
    question: 'Can I create conditional workflows?',
    answer:
      'Yes, workflows support conditional logic. For example, send different messages based on appointment type or customer preferences.',
  },
  {
    question: 'What triggers can start a workflow?',
    answer:
      'Triggers include form submissions, appointment bookings, time-based events, status changes, and custom conditions.',
  },
  {
    question: 'How many workflows can I create?',
    answer:
      'You can create unlimited workflows. Start with templates and customize as needed for your business processes.',
  },
  {
    question: 'Can workflows run automatically?',
    answer:
      'Yes, workflows run automatically once set up. You can also manually trigger them or pause/resume as needed.',
  },
  {
    question: 'What actions can workflows perform?',
    answer:
      'Actions include sending emails/SMS, updating records, creating tasks, scheduling events, and triggering other workflows.',
  },
  {
    question: 'Is there workflow analytics?',
    answer:
      'Yes, detailed analytics show workflow performance, completion rates, and help you optimize your automated processes.',
  },
];

const slug = 'workflows';

export const workflowsData: FeaturePageData = {
  slug,
  seo: buildFeatureSeo({
    slug,
    title: 'Workflows | Structured Automation Layer',
    description:
      'Structured workflow automation for follow-ups, reminders, and task routing with clear rules and full team visibility.',
  }),
  systems: ['crm-automation'],
  topics: ['lead-management'],
  hero: {
    badge: 'Part of CRM Automation',
    title: 'Workflow layer that keeps follow-up from slipping',
    description:
      'Manual follow-up depends on the team remembering. Workflows are part of the CRM Automation service — they turn confirmations, reminders, and task handoffs into rules that run on every enquiry, every booking, every quote, without anyone having to chase.',
    stats: [
      { value: 'Auto', label: 'Follow-Ups' },
      { value: 'Clear', label: 'Rules' },
      { value: 'Less', label: 'Manual Work' },
      { value: 'More', label: 'Consistency' },
    ],
  },
  sections: {
    visualFlow: {
      title: 'Lead Nurture Workflow',
      triggerTitle: 'Trigger: Form Submitted',
      triggerSubtitle: 'New lead captured',
      actions: [
        {
          icon: Mail,
          title: 'Send welcome email',
          subtitle: 'Immediately',
        },
        {
          icon: MessageSquare,
          title: 'Send SMS reminder',
          subtitle: 'After 2 days',
        },
        {
          icon: CheckCircle2,
          title: 'Final offer email',
          subtitle: 'After 7 days',
        },
      ],
      triggerIcon: Target,
      connectorIcon: ArrowRight,
    },
    process: {
      badge: 'How It Works',
      title: 'How Workflow Automation Works',
      description:
        'Clear triggers, defined rules, and automatic actions keep your operations consistent.',
      steps: [
        {
          number: '01',
          title: 'Action Happens',
          description: 'A form is submitted, an appointment is booked, or a status changes.',
          icon: Workflow,
          iconType: 'primary' as const,
        },
        {
          number: '02',
          title: 'System Checks Rules',
          description:
            'The workflow checks conditions you have defined to decide what should happen next.',
          icon: Settings,
          iconType: 'secondary' as const,
        },
        {
          number: '03',
          title: 'Automatic Actions Run',
          description: 'Emails, SMS, task creation, or updates are triggered automatically.',
          icon: Repeat,
          iconType: 'primary' as const,
        },
        {
          number: '04',
          title: 'Team Stays Informed',
          description: 'Your team is notified where needed, with full visibility and control.',
          icon: Layers,
          iconType: 'secondary' as const,
        },
      ],
    },
    benefits: {
      badge: 'Key Advantages',
      title: 'Why Use Workflows?',
      description:
        'Simple automation that improves reliability, reduces manual work, and keeps your team aligned.',
      items: [
        {
          icon: Workflow,
          title: 'No Missed Follow-Ups',
          description:
            'Every lead, booking, or enquiry triggers the right next step automatically.',
          iconType: 'primary' as const,
        },
        {
          icon: Layers,
          title: 'Clear Process Flow',
          description: 'Define simple, step-by-step processes so nothing depends on memory.',
          iconType: 'secondary' as const,
        },
        {
          icon: Settings,
          title: 'Full Control',
          description: 'You decide the rules, timing, and conditions behind each automation.',
          iconType: 'primary' as const,
        },
        {
          icon: Repeat,
          title: 'Consistent Experience',
          description: 'Customers receive confirmations, reminders, and follow-ups every time.',
          iconType: 'secondary' as const,
        },
        {
          icon: Layers,
          title: 'Better Team Alignment',
          description: 'Tasks and notifications keep everyone clear on what needs to happen next.',
          iconType: 'primary' as const,
        },
        {
          icon: Zap,
          title: 'Save Time Daily',
          description: 'Reduce repetitive admin work so your team can focus on higher-value tasks.',
          iconType: 'accent' as const,
        },
      ],
    },
    useCases: {
      badge: 'Feature in Practice',
      title: 'Automation in Everyday Use',
      description: 'Examples of how automation fits into daily business operations.',
      items: [
        {
          icon: Workflow,
          title: 'New Lead Follow-Up',
          scenario: 'A visitor submits a contact form.',
          solution: 'The system sends a confirmation, assigns a task, and schedules reminders.',
          result: 'No lead is forgotten and response time improves.',
        },
        {
          icon: Repeat,
          title: 'Appointment Reminders',
          scenario: 'A customer books an appointment.',
          solution: 'Automated reminders are sent before the scheduled time.',
          result: 'Fewer no-shows and better preparation.',
        },
        {
          icon: Layers,
          title: 'Internal Task Routing',
          scenario: 'A deal changes stage or a form is submitted.',
          solution: 'The right team member is notified and tasks are created automatically.',
          result: 'Clear ownership and faster execution.',
        },
      ],
    },
    capabilities: {
      badge: "What's Included",
      title: 'Automation Feature Overview',
      featureCategories: [
        {
          icon: Workflow,
          title: 'Flexible Triggers',
          description: 'Start workflows based on real business events.',
          features: [
            'Form submissions',
            'Appointments booked or completed',
            'Pipeline stage changes',
            'Time-based triggers',
          ],
          iconType: 'accent' as const,
        },
        {
          icon: Settings,
          title: 'Automated Actions',
          description: 'Run multiple actions automatically once triggered.',
          features: [
            'Send email or SMS',
            'Update contact records',
            'Create and assign tasks',
            'Schedule follow-ups',
          ],
          iconType: 'secondary' as const,
        },
        {
          icon: Layers,
          title: 'Logic & Conditions',
          description: 'Build simple or advanced logic based on your needs.',
          features: [
            'If/else conditions',
            'Multi-step sequences',
            'Branching workflows',
            'Activity tracking',
          ],
          iconType: 'primary' as const,
        },
      ],
      columns: 3 as const,
      variant: 'stacked' as const,
    },
    faq: {
      badge: 'Common Questions',
      title: 'Automation Feature FAQ',
      items: workflowsFaqItems,
    },
    explore: {
      badge: 'Explore Related Features',
      title: 'Enhance Your Automation',
      description:
        'Discover features that work seamlessly with Workflows to create powerful business solutions.',
      cards: [
        {
          icon: Calendar,
          title: 'Calendars',
          description: 'Automate appointment booking and scheduling workflows',
          href: '/features/calendars',
        },
        {
          icon: MessageSquare,
          title: 'CRM & Follow-Up',
          description: 'Connect workflows with customer relationship management',
          href: '/features/crm',
        },
        {
          icon: Zap,
          title: 'AI Chat',
          description: 'Automate customer conversations with intelligent chatbots',
          href: '/features/aichat',
        },
      ],
    },
  },
  cta: {
    heading: {
      title: 'Ready to Automate Your Follow-Ups?',
      description:
        'We will map the triggers, rules, and follow-up steps that fit your real operation so leads, bookings, and internal tasks keep moving without manual chasing.',
    },
    actions: [{ label: 'Get Started', href: '/contact', primary: true }],
  },
};
