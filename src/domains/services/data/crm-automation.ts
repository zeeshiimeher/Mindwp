import {
  Archive,
  BarChart3,
  Bell,
  Brain,
  Calendar,
  Chrome,
  ClipboardList,
  Clock,
  Code,
  Copy,
  CreditCard,
  Database,
  DollarSign,
  Eye,
  Facebook,
  FileText,
  Filter,
  FolderKanban,
  GitBranch,
  Globe,
  Headphones,
  Image,
  Inbox,
  Instagram,
  Layers,
  Layout,
  Link2,
  ListChecks,
  Mail,
  MessageCircle,
  MessageSquare,
  MousePointerClick,
  Percent,
  Phone,
  Repeat,
  Search,
  Send,
  Shield,
  ShoppingCart,
  Star,
  Tag,
  ThumbsUp,
  UserCheck,
  UserPlus,
  Users,
  Webhook,
  Workflow,
  Zap,
} from 'lucide-react';

import type { ServicePageData } from '../types';

export const crmAutomationPage = {
  slug: 'crm-infrastructure-implementation',
  systems: ['crm-automation', 'revenue-growth'],
  topics: ['crm-pipeline', 'crm-integration'],
  keywords: [
    'crm infrastructure implementation',
    'crm setup for service business',
    'lead routing crm system',
    'service business crm workflow',
    'enquiry handling in crm',
  ],
  badge: 'CRM Infrastructure Implementation',
  category: 'Implementation Services',
  seo: {
    title: 'CRM Infrastructure Implementation | Structured CRM Setup for Service Businesses',
    description:
      'Structured CRM implementation for service businesses that need better lead routing, clearer ownership, cleaner pipeline stages, and more reliable follow-up.',
    canonical: '/services/crm-infrastructure-implementation',
    schema: {
      service: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'CRM Infrastructure Implementation for Service Businesses',
        description:
          'Structured CRM implementation for service businesses that need better lead routing, clearer ownership, cleaner pipeline stages, and more reliable follow-up.',
        provider: {
          '@type': 'Organization',
          name: 'MindWP',
        },
        areaServed: 'UK',
        url: '/services/crm-infrastructure-implementation',
      },
    },
  },
  hero: {
    badge: 'Enquiry & Follow-Up Infrastructure',
    title: 'A CRM works when routing, ownership, and follow-up are defined — not assumed',
    description:
      'This is the implementation layer for making sure enquiries reach the right person, follow-up happens on time, booking flow is clear, and team ownership is defined. When it sits on top of a clear website foundation, the whole path from first enquiry to outcome becomes visible and repeatable — instead of depending on memory.',
    list: [
      'Clear routing and ownership from the first enquiry',
      'Follow-up timing that does not rely on spare time',
      'Pipeline visibility across the whole team',
      'Booking and reminders handled properly',
    ],
    cssPrefix: 'crm-automation-hero',
  },
  sections: {
    positioning: {
      badge: 'What the CRM layer changes',
      title: 'Most businesses handle the first enquiry well enough. The problem starts after that.',
      description:
        'Messages scatter across inboxes. Follow-ups depend on who has time. Nobody owns the next step. A CRM layer fixes this by giving enquiry handling a proper operating model — routing, ownership, stages, and follow-up timing that the whole team can work from.',
      currentStateLabel: 'Without CRM structure',
      structuredStateLabel: 'With CRM structure',
      painPoints: [
        {
          before: 'Messages sit across inboxes and channels with no clear ownership.',
          after: 'Every enquiry is routed to a named owner with clear responsibility.',
        },
        {
          before: 'Follow-up depends on memory, availability, and ad-hoc reminders.',
          after: 'Follow-up runs on defined timing rules and stage-based triggers.',
        },
        {
          before: 'Pipeline stages are unclear, so teams guess what happens next.',
          after: 'Stage tracking creates visibility so next actions are explicit and consistent.',
        },
      ],
      cssPrefix: 'crm-automation-positioning-header',
      marginBottom: false,
    },
    useCasesSection: {
      badge: 'Operational Scenarios',
      title: 'Where CRM implementation changes day-to-day enquiry handling',
      description:
        'These are the everyday scenarios where proper routing, follow-up timing, and visibility make the biggest difference.',
      cssPrefix: 'crm-automation-use-cases-header',
      items: [
        {
          icon: Phone,
          title: 'Call Handling & Routing',
          description:
            'Calls come in. Details get captured, routed, and logged — so follow-up happens even when the team is flat out.',
          iconType: 'primary' as const,
        },
        {
          icon: Brain,
          title: 'Messaging Support',
          description:
            'Chat, SMS, and email all funnel somewhere. The CRM keeps replies consistent and makes sure handover actually happens.',
          iconType: 'secondary' as const,
        },
        {
          icon: UserPlus,
          title: 'Enquiry Capture & Follow-Up',
          description:
            'Enquiries arrive from the website and other channels. The CRM captures them and starts a defined follow-up process.',
          iconType: 'accent' as const,
        },
        {
          icon: Calendar,
          title: 'Appointment Booking',
          description:
            'Booking links, confirmations, and reminders — handled automatically so nobody chases appointments manually.',
          iconType: 'purple' as const,
        },
        {
          icon: Repeat,
          title: 'Customer Follow-Ups',
          description:
            'Check-ins, feedback requests, and re-engagement messages go out on a defined schedule — not when someone remembers.',
          iconType: 'teal' as const,
        },
        {
          icon: Star,
          title: 'Reviews & Feedback',
          description:
            'Review requests go out at the right time. Feedback is tracked. Responses carry the full conversation context.',
          iconType: 'amber' as const,
        },
        {
          icon: FolderKanban,
          title: 'Pipeline Visibility',
          description:
            'Every enquiry is tracked from first contact to outcome. The team always knows what stage things are at and what comes next.',
          iconType: 'primary' as const,
        },
        {
          icon: Mail,
          title: 'Updates & Communication',
          description:
            'Send updates to the right people at the right time. See what gets attention and adjust.',
          iconType: 'secondary' as const,
        },
        {
          icon: CreditCard,
          title: 'Payments & Invoices',
          description:
            'Payments and invoices stay connected to the contact record and workflow stage — no separate tracking spreadsheet.',
          iconType: 'accent' as const,
        },
      ],
    },
    featuresSection: {
      badge: 'Operational Capabilities',
      title: 'Capabilities implemented within your workflow',
      description:
        'These are configured around how your team actually handles enquiries, bookings, and follow-ups. We implement what the operating model needs — not a feature bundle for the sake of it.',
      cssPrefix: 'crm-automation-features-header',
      categories: [
        {
          title: 'Call Handling & Routing',
          icon: Phone,
          color: 'violet',
          features: [
            {
              icon: Phone,
              name: 'Call Answering',
              detail:
                'Capture calls, gather details, and route follow-ups when you are unavailable',
            },
            {
              icon: Calendar,
              name: 'Appointment Scheduling',
              detail: 'Offer booking options and schedule calls where appropriate',
            },
            {
              icon: MessageSquare,
              name: 'Common Questions',
              detail: 'Share standard answers and clear next steps',
            },
            {
              icon: UserCheck,
              name: 'Call Routing',
              detail: 'Route calls to the right person or queue',
            },
            {
              icon: Headphones,
              name: 'Structured Call Prompts',
              detail: 'Guide callers through a simple set of questions',
            },
            {
              icon: Database,
              name: 'Call Logging',
              detail: 'Log call outcomes and update records for consistent follow-up',
            },
            {
              icon: Bell,
              name: 'Call Alerts',
              detail: 'Notify your team when follow-up is needed',
            },
            {
              icon: MessageSquare,
              name: 'Voicemail Notes',
              detail: 'Capture voicemail details for quick follow-up',
            },
          ],
        },
        {
          title: 'Messaging Support',
          icon: Brain,
          color: 'purple',
          features: [
            {
              icon: MessageCircle,
              name: 'Website Chat Support',
              detail: 'Handle initial questions and capture enquiry details',
            },
            {
              icon: MessageSquare,
              name: 'SMS Reply Support',
              detail: 'Send helpful replies and route conversations to your team',
            },
            {
              icon: Mail,
              name: 'Email Reply Support',
              detail: 'Keep replies consistent and follow-ups clear',
            },
            {
              icon: Layers,
              name: 'Enquiry Qualification',
              detail: 'Collect the right details before handover',
            },
            {
              icon: UserCheck,
              name: 'Handover Rules',
              detail: 'Escalate to your team when needed',
            },
            {
              icon: Brain,
              name: 'Shared Knowledge',
              detail: 'Keep responses consistent across channels',
            },
            {
              icon: Globe,
              name: 'Multi-Language Support',
              detail: 'Communicate in multiple languages where needed',
            },
            {
              icon: Calendar,
              name: 'Booking Integration',
              detail: 'Share booking options during a conversation',
            },
          ],
        },
        {
          title: 'Contact & Enquiry Management',
          icon: Database,
          color: 'blue',
          features: [
            {
              icon: Users,
              name: 'Contact Records',
              detail: 'Store contacts with a structured history of interactions',
            },
            {
              icon: Tag,
              name: 'Fields & Tags',
              detail: 'Segment by service, stage, and context',
            },
            {
              icon: Star,
              name: 'Priority Indicators',
              detail: 'Flag follow-ups based on activity and timing',
            },
            { icon: Tag, name: 'Source Notes', detail: 'Track where each enquiry came from' },
            {
              icon: Eye,
              name: 'Interaction Timeline',
              detail: 'See a clear history of key touchpoints',
            },
            {
              icon: Filter,
              name: 'Advanced Filtering',
              detail: 'Filter by fields, tags, and activity',
            },
            { icon: Search, name: 'Search', detail: 'Find contacts and conversations quickly' },
            {
              icon: UserPlus,
              name: 'Import/Export',
              detail: 'Bulk import and export contacts anytime',
            },
          ],
        },
        {
          title: 'Inbox & Communications',
          icon: Inbox,
          color: 'green',
          features: [
            {
              icon: Mail,
              name: 'Email Integration',
              detail: 'Gmail, Outlook, custom domains—all in one inbox',
            },
            {
              icon: MessageSquare,
              name: '2-Way SMS',
              detail: 'Send and receive text messages with customers',
            },
            {
              icon: Facebook,
              name: 'Facebook Messenger',
              detail: 'Manage Facebook messages and comments',
            },
            { icon: Instagram, name: 'Instagram DMs', detail: 'Handle Instagram direct messages' },
            {
              icon: Chrome,
              name: 'Google Business Messages',
              detail: 'Messages from your Google Business Profile',
            },
            { icon: MessageCircle, name: 'Live Chat', detail: 'Website chat in the same inbox' },
            {
              icon: Phone,
              name: 'Call Tracking',
              detail: 'Call logs, recordings, voicemail transcription',
            },
            {
              icon: Archive,
              name: 'Conversation Threading',
              detail: 'All communications with a contact in one thread',
            },
          ],
        },
        {
          title: 'Email Follow-Ups',
          icon: Mail,
          color: 'purple',
          features: [
            {
              icon: Layout,
              name: 'Email Builder',
              detail: 'Build emails using a simple editor',
            },
            { icon: Send, name: 'Bulk Sends', detail: 'Send updates to a list when appropriate' },
            {
              icon: Workflow,
              name: 'Follow-Up Sequences',
              detail: 'Schedule follow-ups and handovers across stages',
            },
            { icon: Eye, name: 'Open Tracking', detail: 'See who opens emails and when' },
            {
              icon: MousePointerClick,
              name: 'Click Tracking',
              detail: 'Track which links contacts click',
            },
            {
              icon: UserCheck,
              name: 'Personalization',
              detail: 'Personalize with contact data (name, company, etc.)',
            },
            {
              icon: ListChecks,
              name: 'Content Testing',
              detail: 'Test subject lines and content variations',
            },
            {
              icon: BarChart3,
              name: 'Email Analytics',
              detail: 'Open rates, clicks, bounces, unsubscribes',
            },
          ],
        },
        {
          title: 'SMS Follow-Ups',
          icon: MessageSquare,
          color: 'orange',
          features: [
            {
              icon: Send,
              name: 'Bulk SMS Sends',
              detail: 'Send messages to segments or a list',
            },
            {
              icon: Workflow,
              name: 'SMS Sequences',
              detail: 'Schedule follow-ups and reminders by stage',
            },
            {
              icon: MessageSquare,
              name: '2-Way Texting',
              detail: 'Receive and respond to customer replies',
            },
            {
              icon: Calendar,
              name: 'SMS Reminders',
              detail: 'Automated appointment reminders via text',
            },
            {
              icon: Link2,
              name: 'Link Tracking',
              detail: 'Track clicks on links in text messages',
            },
            { icon: Image, name: 'MMS Support', detail: 'Send images and media via text' },
            {
              icon: Globe,
              name: 'International SMS',
              detail: 'Send messages internationally where supported',
            },
            { icon: BarChart3, name: 'Delivery Tracking', detail: 'Track delivery and replies' },
          ],
        },
        {
          title: 'Automation & Workflows',
          icon: Zap,
          color: 'yellow',
          features: [
            {
              icon: Workflow,
              name: 'Workflow Builder',
              detail: 'Build workflows with a visual editor',
            },
            {
              icon: GitBranch,
              name: 'If/Then Logic',
              detail: 'Conditional branching based on actions',
            },
            { icon: Clock, name: 'Wait Steps', detail: 'Add timed delays between steps' },
            {
              icon: Tag,
              name: 'Auto-Tagging',
              detail: 'Tag contacts and update scores automatically',
            },
            {
              icon: Send,
              name: 'Multi-Channel Actions',
              detail: 'Send messages, create tasks, and update stages',
            },
            { icon: Bell, name: 'Team Notifications', detail: 'Alert team members on triggers' },
            { icon: Webhook, name: 'Webhooks', detail: 'Trigger workflows from external apps' },
            { icon: Copy, name: 'Templates', detail: 'Starting templates for common workflows' },
          ],
        },
        {
          title: 'Pipeline & Stage Tracking',
          icon: FolderKanban,
          color: 'red',
          features: [
            {
              icon: Layers,
              name: 'Multiple Pipelines',
              detail: 'Separate pipelines for different services or enquiry types',
            },
            {
              icon: FolderKanban,
              name: 'Kanban View',
              detail: 'Visual pipeline for moving items between stages',
            },
            {
              icon: DollarSign,
              name: 'Value Tracking',
              detail: 'Track expected value where relevant',
            },
            {
              icon: Percent,
              name: 'Stage Confidence',
              detail: 'Keep stage definitions consistent and clear',
            },
            {
              icon: UserCheck,
              name: 'Assignment',
              detail: 'Assign enquiries and tasks to team members',
            },
            {
              icon: Calendar,
              name: 'Target Dates',
              detail: 'Track target dates for follow-ups and next steps',
            },
            {
              icon: ListChecks,
              name: 'Stage Actions',
              detail: 'Trigger actions when items move stages',
            },
            {
              icon: BarChart3,
              name: 'Pipeline Visibility',
              detail: 'Understand stage movement and time-in-stage',
            },
          ],
        },
        {
          title: 'Appointment Booking',
          icon: Calendar,
          color: 'indigo',
          features: [
            {
              icon: Calendar,
              name: 'Online Booking',
              detail: 'Offer online booking for appointments when it suits your workflow',
            },
            {
              icon: Users,
              name: 'Team Calendars',
              detail: 'Manage multiple team member calendars',
            },
            {
              icon: Clock,
              name: 'Availability Rules',
              detail: 'Set working hours and buffer times',
            },
            {
              icon: Repeat,
              name: 'Recurring Bookings',
              detail: 'Weekly, monthly, custom recurring appointments',
            },
            {
              icon: Send,
              name: 'Auto Confirmations',
              detail: 'Instant email and SMS confirmations',
            },
            { icon: Bell, name: 'Reminders', detail: 'Automated reminders at set times' },
            { icon: Link2, name: 'Calendar Sync', detail: '2-way sync with Google & Outlook' },
            {
              icon: CreditCard,
              name: 'Payment Collection',
              detail: 'Collect deposits or full payment on booking',
            },
          ],
        },
        {
          title: 'Forms & Intake',
          icon: ClipboardList,
          color: 'pink',
          features: [
            {
              icon: Layout,
              name: 'Form Builder',
              detail: 'Drag-and-drop form builder with custom fields',
            },
            {
              icon: Globe,
              name: 'Embeddable Forms',
              detail: 'Embed on website or share as standalone',
            },
            {
              icon: Workflow,
              name: 'Form Triggers',
              detail: 'Trigger workflows when forms submitted',
            },
            { icon: FileText, name: 'Multi-Step Forms', detail: 'Create multi-page forms' },
            { icon: CreditCard, name: 'Payment Forms', detail: 'Collect payments through forms' },
            {
              icon: Shield,
              name: 'Conditional Fields',
              detail: 'Show/hide fields based on answers',
            },
            {
              icon: Send,
              name: 'Auto-Responses',
              detail: 'Send confirmation emails after submission',
            },
            {
              icon: BarChart3,
              name: 'Form Analytics',
              detail: 'Track views and submissions',
            },
          ],
        },
        {
          title: 'Reviews & Feedback',
          icon: Star,
          color: 'amber',
          features: [
            {
              icon: Send,
              name: 'Review Requests',
              detail: 'Send review requests after a completed service',
            },
            { icon: Star, name: 'Multi-Platform', detail: 'Google, Facebook, Yelp, and more' },
            {
              icon: Filter,
              name: 'Feedback Routing',
              detail: 'Route feedback to the right place and track outcomes',
            },
            {
              icon: MessageSquare,
              name: 'Review Monitoring',
              detail: 'Get notified of new reviews',
            },
            { icon: ThumbsUp, name: 'Review Response', detail: 'Respond from one dashboard' },
            {
              icon: BarChart3,
              name: 'Reputation Tracking',
              detail: 'Track rating and feedback trends over time',
            },
            { icon: MessageSquare, name: 'SMS Requests', detail: 'Send review links via text' },
            { icon: Copy, name: 'Review Widgets', detail: 'Display reviews on your website' },
          ],
        },
        {
          title: 'Reporting & Visibility',
          icon: BarChart3,
          color: 'teal',
          features: [
            {
              icon: BarChart3,
              name: 'Custom Dashboards',
              detail: 'Build dashboards with your key metrics',
            },
            {
              icon: BarChart3,
              name: 'Contact Changes',
              detail: 'Track changes to your contact list over time',
            },
            { icon: Mail, name: 'Email Performance', detail: 'Open rates, clicks, bounces' },
            {
              icon: MessageSquare,
              name: 'SMS Performance',
              detail: 'Delivery rates, response rates',
            },
            {
              icon: Workflow,
              name: 'Automation Analytics',
              detail: 'See how contacts flow through workflows',
            },
            {
              icon: FolderKanban,
              name: 'Pipeline Reports',
              detail: 'Deal velocity, conversion rates, forecasts',
            },
            { icon: Calendar, name: 'Booking Reports', detail: 'Bookings and attendance' },
            {
              icon: MousePointerClick,
              name: 'Attribution',
              detail: 'See which campaigns drive conversions',
            },
          ],
        },
        {
          title: 'Integrations & API',
          icon: Link2,
          color: 'gray',
          features: [
            { icon: Zap, name: 'Zapier', detail: 'Connect to other apps via Zapier' },
            { icon: Link2, name: 'Make/Integromat', detail: 'Advanced automation platform' },
            { icon: Webhook, name: 'Webhooks', detail: 'Send data to external systems' },
            { icon: Code, name: 'REST API', detail: 'Full API access for custom integrations' },
            { icon: Globe, name: 'WordPress', detail: 'Native WordPress plugin' },
            { icon: ShoppingCart, name: 'E-commerce', detail: 'Stripe, PayPal, WooCommerce' },
            { icon: Mail, name: 'Email Platforms', detail: 'Gmail, Outlook, Office 365' },
            { icon: Facebook, name: 'Social Media', detail: 'Facebook, Instagram, LinkedIn' },
          ],
        },
        {
          title: 'Team Collaboration',
          icon: Users,
          color: 'cyan',
          features: [
            {
              icon: Users,
              name: 'Team Members',
              detail: 'Add team members with appropriate access',
            },
            {
              icon: Shield,
              name: 'Role Permissions',
              detail: 'Admin, user, custom permission levels',
            },
            { icon: UserCheck, name: 'Assignment', detail: 'Assign contacts and deals to team' },
            {
              icon: MessageCircle,
              name: 'Internal Notes',
              detail: 'Private notes visible to team only',
            },
            {
              icon: Bell,
              name: 'Team Notifications',
              detail: 'Notify team of assignments and updates',
            },
            { icon: Eye, name: 'Activity Logging', detail: 'See what each team member does' },
            {
              icon: Filter,
              name: 'Per-User Views',
              detail: 'Filter to see only your assigned items',
            },
            {
              icon: BarChart3,
              name: 'Workload Visibility',
              detail: 'See activity and ownership across the team',
            },
          ],
        },
      ],
    },
    workflowsSection: {
      badge: 'Workflow Examples',
      title: 'Defined handovers mean less internal chasing',
      description:
        'After a form submission, booking, or signal of interest, something should happen next. Workflows make sure it does — consistently, without anyone needing to remember.',
      cssPrefix: 'crm-automation-workflows-header',
      items: [
        {
          trigger: 'New enquiry submits a form',
          actions: [
            'Add to CRM with source tag',
            'Send an acknowledgement email',
            'Notify the team',
            'Add to a follow-up sequence',
            'Create a task for the next step',
          ],
        },
        {
          trigger: 'Customer books appointment',
          actions: [
            'Send confirmation email',
            'Add to calendar',
            'Send SMS reminder at set times',
            'Send a final reminder if needed',
            'Follow up after appointment',
          ],
        },
        {
          trigger: 'Contact engages with email',
          actions: [
            "Tag as 'engaged'",
            'Set follow-up priority',
            'Notify the owner',
            'Send booking options if relevant',
            "Move to an 'Active follow-up' stage",
          ],
        },
        {
          trigger: 'Appointment completed',
          actions: [
            'Send thank you email',
            'Request feedback or review',
            'Add to customer list',
            'Schedule a check-in',
            'Update contact status',
          ],
        },
      ],
    },
    governance: {
      badge: 'Governance',
      title: 'Automation without rules just creates noise faster',
      description:
        'Before workflows get layered in, we make sure the basics are clear: who owns each stage, how enquiries are routed, and what happens next at each point. That way automation supports the team instead of adding confusion.',
      cssPrefix: 'crm-automation-governance-header',
    },
    qualification: {
      title: 'Who this is for — and who it is not for',
      description:
        'CRM implementation works best for businesses that want their enquiry handling to be visible, consistent, and properly owned.',
      cssPrefix: 'crm-automation-qualification-header',
      strongFitTitle: 'Strong fit',
      strongFitItems: [
        'You receive regular enquiries and nobody is sure they are all being handled.',
        'Follow-ups happen across email, SMS, and calls — and some slip through.',
        'You want to see where every enquiry is and who owns the next step.',
        'You would rather have a defined process than rely on people remembering.',
      ],
      notDesignedTitle: 'Not designed for',
      notDesignedItems: [
        'Very low enquiry volume where tracking adds no real value.',
        'Teams that genuinely prefer fully manual handling.',
        'Short-term campaign tools with no long-term need.',
        'Automation layered on without anyone agreeing how things should work.',
      ],
    },
    connection: {
      badge: 'Works With Smart Website Infrastructure',
      title: 'CRM works best when the website already makes sense',
      description:
        'When the website has clear services, clear pages, and clear enquiry paths, the CRM becomes a proper operating layer on top of it. If the website foundations are weak, we sort those out first — before adding automation.',
      cssPrefix: 'crm-automation-connection-header',
    },
  },
  cta: {
    title: 'Make your enquiry handling visible and repeatable',
    description:
      'We map how enquiries are currently routed, who owns each stage, how follow-up works, and where things break down. Then we outline how a CRM layer would bring that under control.',
    buttonText: 'Start a Conversation',
    buttonHref: '/contact',
  },
} satisfies ServicePageData;
