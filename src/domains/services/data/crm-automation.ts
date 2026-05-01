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

import { buildServiceSeo } from '../seo';
import type { ServicePageData } from '../types';

type CRMAutomationTransformationProof = {
  transformationProof: {
    before: {
      title: string;
      points: string[];
    };
    build: {
      title: string;
      description: string;
      highlights?: string[];
    };
    after: {
      title: string;
      results: string[];
    };
  };
};

const slug = 'crm-infrastructure-implementation';

export const crmAutomationPage = {
  slug,
  seo: buildServiceSeo({
    slug,
    title: 'CRM Setup for Service Businesses | MindWP',
    description:
      "Leads come in from your website, calls, and messages. Some get answered. Some don't. A properly set up CRM captures every one, follows up on time, and shows you where every opportunity stands.",
  }),
  systems: ['crm-automation'],
  topics: ['crm-pipeline', 'crm-integration', 'lead-qualification', 'pipeline-architecture'],
  badge: 'CRM Setup',
  category: 'Lead & Follow-Up',
  hero: {
    badge: 'CRM Setup for Service Businesses',
    title: 'Leads Come In. Then They Disappear.',
    description:
      "Your marketing works. Enquiries arrive from calls, forms, emails, and messages. But they land in different inboxes, different phones, different apps. Nobody knows which ones are waiting. Follow-up happens when someone remembers. On a busy day, it doesn't happen at all.",
    list: ['Leads scattered', 'Follow-up inconsistent', 'No visibility'],
    cssPrefix: 'crm-automation-hero',
  },
  sections: {
    positioning: {
      badge: 'The real problem',
      title: 'The first conversation usually goes well. Everything after that falls apart.',
      description:
        "A lead calls. Someone answers. Helpful conversation. Then life happens. The follow-up email doesn't go out. The quote sits in drafts. The prospect calls a competitor who replied faster. This isn't a people problem. It's a system problem.",
      currentStateLabel: 'What happens now',
      structuredStateLabel: 'What a CRM changes',
      painPoints: [
        {
          before: 'Leads sit in email inboxes, voicemails, and DMs. Some never get seen.',
          after:
            'Every lead lands in one place, assigned to someone specific. Nothing sits unseen.',
        },
        {
          before: 'Follow-up happens when someone remembers. On a busy Tuesday, nobody does.',
          after:
            'Follow-up runs automatically. Every lead gets a response on time, regardless of how busy the team is.',
        },
        {
          before: 'Nobody knows how many leads came in this week or where any of them stand.',
          after:
            'Every active lead is visible — stage, owner, next step. Stalled deals surface before they go cold.',
        },
      ],
      cssPrefix: 'crm-automation-positioning-header',
      marginBottom: false,
    },
    comparison: {
      header: {
        title: 'Scattered tools vs. one structured system',
        description:
          "Most service businesses track leads across email, texts, spreadsheets, and memory. This is what that costs — and what changes when it's handled properly.",
      },
      items: [
        {
          type: 'before' as const,
          title: 'How most businesses handle leads',
          items: [
            'Leads arrive in different inboxes and some never get seen — marketing spend generates enquiries that nobody responds to',
            'Follow-up depends on someone remembering to check — warm leads go cold on busy days',
            'Nobody knows how many leads came in or where they stand — stalled deals disappear silently',
            'Missed calls and after-hours enquiries vanish — evenings and weekends generate leads that never get recovered',
            'Review requests happen when someone remembers — reputation and repeat revenue grow only by accident',
          ],
        },
        {
          type: 'after' as const,
          title: 'How it works with a CRM',
          items: [
            'Every lead captured in one place with clear ownership — nothing sits unseen',
            'Follow-up sequences run automatically — timing is consistent even on the busiest days',
            'Pipeline shows every active lead, who owns it, and what happens next — stalled deals surface early',
            'Missed calls trigger immediate notifications and follow-up — after-hours enquiries convert instead of disappearing',
            'Review requests and re-engagement run on schedule — reputation and repeat revenue grow without manual effort',
          ],
        },
      ],
    },
    proof: {
      header: {
        badge: 'What this looks like in practice',
        title: 'One business, before and after CRM setup',
        description:
          'A service business getting 50+ enquiries per month. Good marketing. No system for what happened after the lead arrived.',
      },
      cards: [
        {
          title: 'Before: leads everywhere, follow-up nowhere',
          description:
            'Enquiries came from forms, calls, and messages. The team tracked them in email, sticky notes, and memory. On any given week, leads went cold because nobody could see which ones were waiting.',
          points: [
            'No single view of active leads — opportunities stalled without anyone noticing until the customer had already hired elsewhere',
            'Follow-up depended on who remembered — response times ranged from minutes to days depending on the day',
            'After-hours enquiries went untracked — the business had no idea how much revenue leaked outside working hours',
          ],
        },
        {
          title: 'What we built: one system for everything',
          description:
            'CRM configured to capture every enquiry source. Automated follow-up sequences. Pipeline with clear stages. Team notifications. Nothing depending on memory anymore.',
          points: [
            'Every enquiry source feeding into one inbox — the team worked from a single queue instead of scattered tools',
            'Follow-up sequences triggered automatically by lead stage — timing consistent regardless of workload',
            'Pipeline with stages and ownership — every lead had someone responsible and a visible next step',
          ],
          featured: true,
        },
        {
          title: 'After: nothing falls through',
          description:
            'Within weeks, the team could see every active lead. Follow-up happened on time because it ran automatically. Missed calls triggered immediate notifications. The business stopped losing leads to disorganisation.',
          points: [
            'Every lead tracked from first contact to outcome — nothing disappeared between stages',
            'Response times dropped from days to minutes — automated sequences contacted leads immediately',
            'Full visibility into pipeline and workload — managers spotted bottlenecks before they cost deals',
          ],
        },
      ],
    },
    useCasesSection: {
      badge: 'Day-to-day impact',
      title: 'Situations your team already deals with — handled properly',
      description:
        "These aren't hypothetical. They happen in service businesses every week. Right now they depend on someone remembering. After CRM setup, they just work.",
      cssPrefix: 'crm-automation-use-cases-header',
      items: [
        {
          icon: Phone,
          title: "A customer calls while you're busy",
          description:
            'Their details are captured and the right person gets notified. Follow-up happens even if nobody picked up.',
          iconType: 'primary' as const,
        },
        {
          icon: Brain,
          title: 'Messages come through chat, text, and email',
          description:
            "Chat messages, texts, and emails all show up in one inbox. Your team replies from one place and nobody's message gets stuck in someone's personal account.",
          iconType: 'secondary' as const,
        },
        {
          icon: UserPlus,
          title: 'A new lead fills out your website form',
          description:
            "They're added to your CRM instantly. A follow-up email goes out. Your team gets a task to take the next step.",
          iconType: 'accent' as const,
        },
        {
          icon: Calendar,
          title: 'Someone needs to book an appointment',
          description:
            'They book online. Confirmation and reminders go out automatically. No back-and-forth texts needed.',
          iconType: 'success' as const,
        },
        {
          icon: Repeat,
          title: "It's time to check in with past customers",
          description:
            "Follow-up messages go out on schedule — whether it's a satisfaction check, a reminder, or a re-engagement offer.",
          iconType: 'warning' as const,
        },
        {
          icon: Star,
          title: 'You want more reviews from happy customers',
          description:
            'Review requests are sent at the right moment. You see the feedback come in and can respond with full context.',
          iconType: 'info' as const,
        },
        {
          icon: FolderKanban,
          title: 'You want to see all active leads at a glance',
          description:
            "Every lead is visible — from first contact to outcome. You always know what stage things are at and who's handling it.",
          iconType: 'neutral' as const,
        },
        {
          icon: Mail,
          title: 'You need to send updates to customers',
          description:
            'Updates go to the right people at the right time. You can see who opened them and who needs a nudge.',
          iconType: 'primary' as const,
        },
        {
          icon: CreditCard,
          title: 'Payments and invoices need tracking',
          description:
            'Payments stay linked to the customer record. No separate spreadsheet. No guessing who paid what.',
          iconType: 'secondary' as const,
        },
      ],
    },
    featuresSection: {
      badge: 'What gets built',
      title: 'Everything configured inside your CRM',
      description:
        "We don't hand you a login and wish you luck. Every feature below is configured around your services, your team, and how your customers actually get in touch.",
      cssPrefix: 'crm-automation-features-header',
      categories: [
        {
          title: 'Phone Calls & Routing',
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
          title: 'Chat, Text & Email Replies',
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
          title: 'Your Customer Database',
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
          title: 'One Inbox for Everything',
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
          title: 'Text Message Follow-Ups',
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
          title: 'Automated Actions',
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
          title: 'See Where Every Lead Stands',
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
          title: 'Forms & Lead Capture',
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
          title: 'Reviews & Customer Feedback',
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
          title: 'Reports & Dashboards',
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
          title: 'Connect Your Other Tools',
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
      badge: 'What runs automatically',
      title: 'The CRM handles the busywork. Your team handles the conversations.',
      description:
        'When a lead comes in, books an appointment, or finishes a job — the next steps happen without anyone needing to remember. These are real workflows we build.',
      cssPrefix: 'crm-automation-workflows-header',
      items: [
        {
          trigger: 'Someone fills out your contact form',
          actions: [
            "They're added to your CRM with where they came from",
            'They get a friendly confirmation email right away',
            'Your team gets a notification',
            'A series of follow-up emails starts going out on its own',
            'A task is created so someone takes the next step',
          ],
        },
        {
          trigger: 'A customer books an appointment',
          actions: [
            'They get a confirmation email instantly',
            "It's added to your team's calendar",
            'They get a text reminder the day before',
            'A final reminder goes out the morning of',
            'After the appointment, a follow-up is sent automatically',
          ],
        },
        {
          trigger: 'A lead opens and clicks your email',
          actions: [
            "They're tagged as interested",
            'Their follow-up priority goes up',
            'The person handling them gets a heads-up',
            'If it makes sense, a booking link is sent',
            'They move to an active follow-up stage',
          ],
        },
        {
          trigger: 'A job or appointment is completed',
          actions: [
            'A thank-you message goes out',
            'A review request is sent at the right time',
            "They're added to your customer list",
            'A future check-in is scheduled',
            'Their record is updated so you have full history',
          ],
        },
      ],
    },
    governance: {
      badge: 'Process before automation',
      title: 'We define how leads should be handled before we automate anything',
      description:
        "A CRM that automates a broken process just breaks things faster. Before any automation runs, we work out who handles what, how a lead moves from first contact to outcome, and what happens at each stage. The system supports your team — it doesn't replace thinking.",
      cssPrefix: 'crm-automation-governance-header',
    },
    connection: {
      badge: 'CRM works best with a clear website',
      title: 'Your CRM captures what your website generates',
      description:
        'When the website makes service intent, contact paths, and next steps obvious, the CRM can capture those enquiries cleanly and carry them forward. We check that handoff upfront so you know whether the first priority is CRM setup, website capture clarity, or both together.',
      cssPrefix: 'crm-automation-connection-header',
    },
    qualification: {
      title: 'Is a CRM the right next step?',
      description:
        'Use this service when enquiry volume, channel sprawl, or inconsistent follow-up is already costing booked work. The goal is to leave clear on whether CRM infrastructure is the next move, or whether an earlier bottleneck should be fixed first.',
      cssPrefix: 'crm-automation-qualification-header',
      strongFitTitle: 'Good fit if',
      strongFitItems: [
        "Leads come in regularly but you're not confident every one gets handled — and you suspect revenue is leaking where you can't see it.",
        'Your team juggles follow-ups across email, text, and calls — and on busy days, some slip through with no way to recover them.',
        "You want to see every active lead, who owns it, and what's next — in one place instead of across five tools.",
        "You'd rather follow-up happen automatically than rely on someone remembering when the day gets busy.",
      ],
      notDesignedTitle: 'Probably not right if',
      notDesignedItems: [
        "You get a handful of leads per month and track them easily yourself — the system investment doesn't pay back at low volume.",
        "Your team genuinely prefers doing everything manually and won't adopt a CRM regardless of how well it's configured.",
        'You need a short-term campaign tool, not a long-term system that requires commitment to maintain.',
        "Nobody has agreed on how leads should be handled — a CRM will automate confusion if the process underneath isn't defined first.",
      ],
    },
    faqSection: {
      badge: 'FAQ',
      title: 'Questions that come up before CRM setup',
      description:
        'Practical questions from businesses working out whether this is the right move.',
      faqs: [
        {
          question: 'Do we need to switch to a new CRM?',
          answer:
            "Not necessarily. If your current platform works, we configure it properly. If it doesn't, we recommend the right one based on your team size, lead volume, and how your customers get in touch.",
        },
        {
          question: 'How long does setup take?',
          answer:
            'Most setups take a few weeks. The core system goes live quickly — pipeline, automations, integrations. Then we refine based on how the team actually uses it.',
        },
        {
          question: 'Will my team actually use it?',
          answer:
            "That depends on whether it's built around how they work. We configure the CRM to fit their routine, not the other way around. Clear ownership, simple next steps, and useful visibility make the difference.",
        },
        {
          question: 'Can this connect to our website forms and booking?',
          answer:
            "Yes. Forms, booking tools, email, SMS, and other lead sources all feed into one system. That's the whole point — everything in one place.",
        },
        {
          question: "What if we already have a CRM but it's not working?",
          answer:
            "That's the most common starting point. We audit what exists, identify what's broken or unused, and restructure it so it actually does the job.",
        },
      ],
      cssPrefix: 'crm-automation-faq',
    },
  },
  cta: {
    heading: {
      title: 'Get a clear CRM priority map before you commit to a build',
      description:
        'Tell us how enquiries arrive, who owns follow-up, and where deals stall. You will leave with the highest-risk handoff gaps, the first automation priorities, and a clear view of whether CRM infrastructure is the right next move.',
    },
    actions: [{ label: 'Get Started', href: '/contact', primary: true }],
  },
  transformationProof: {
    before: {
      title: 'Before: leads everywhere, follow-up nowhere',
      points: [
        'No single view of active leads — opportunities stalled without anyone noticing until the customer had already hired elsewhere',
        'Follow-up depended on who remembered — response times ranged from minutes to days depending on the day',
        'After-hours enquiries went untracked — the business had no idea how much revenue leaked outside working hours',
      ],
    },
    build: {
      title: 'What we built: one system for everything',
      description:
        'CRM configured to capture every enquiry source. Automated follow-up sequences. Pipeline with clear stages. Team notifications. Nothing depending on memory anymore.',
      highlights: [
        'Every enquiry source feeding into one inbox — the team worked from a single queue instead of scattered tools',
        'Follow-up sequences triggered automatically by lead stage — timing consistent regardless of workload',
        'Pipeline with stages and ownership — every lead had someone responsible and a visible next step',
      ],
    },
    after: {
      title: 'After: nothing falls through',
      results: [
        'Every lead tracked from first contact to outcome — nothing disappeared between stages',
        'Response times dropped from days to minutes — automated sequences contacted leads immediately',
        'Full visibility into pipeline and workload — managers spotted bottlenecks before they cost deals',
      ],
    },
  },
} satisfies ServicePageData & CRMAutomationTransformationProof;
