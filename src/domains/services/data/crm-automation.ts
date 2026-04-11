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

const slug = 'crm-infrastructure-implementation';

export const crmAutomationPage = {
  slug,
  systems: ['crm-automation'],
  topics: ['crm-pipeline', 'crm-integration', 'lead-qualification', 'pipeline-architecture'],
  keywords: [
    'crm infrastructure implementation',
    'crm setup for service business',
    'lead routing crm system',
    'service business crm workflow',
    'enquiry handling in crm',
  ],
  badge: 'CRM Setup for Service Businesses',
  category: 'Lead & Follow-Up',
  seo: buildServiceSeo({
    slug,
    title: 'CRM Setup for Service Businesses | MindWP',
    description:
      'Stop losing leads to disorganisation. We set up your CRM so every enquiry is tracked, follow-up happens on time, and your team can see where every opportunity stands.',
    schemaName: 'CRM setup and lead tracking for service businesses',
    schemaDescription:
      'Done-for-you CRM setup that tracks every lead, sends follow-ups on time, and gives your team clear visibility into every enquiry.',
  }),
  hero: {
    badge: 'CRM Setup for Service Businesses',
      title: 'CRM Setup That Stops Leads Falling Through',
    description:
      'Your team handles enquiries across email, text, and voicemail. Some get answered. Some get forgotten. Nobody is sure who owns what. We set up your CRM so every lead is captured, the right person is notified, and follow-up happens even when the day gets busy.',
    list: [
        'Lead Tracking',
        'Auto Follow-up',
        'Pipeline Visibility',
    ],
    cssPrefix: 'crm-automation-hero',
  },
  sections: {
    positioning: {
      badge: 'The real problem',
      title: 'The first conversation usually goes fine. Everything after that falls apart.',
      description:
        'Leads arrive from calls, emails, and your website. Someone responds. But then messages pile up in different inboxes. Nobody is sure who owns what. Follow-ups get forgotten when the day gets busy. A CRM setup fixes this by putting every lead in one place, assigning it to someone specific, and making sure the next step actually happens.',
      currentStateLabel: 'What is happening now',
      structuredStateLabel: 'What changes with a CRM',
      painPoints: [
        {
          before: 'Leads sit in email inboxes, voicemails, and DMs — and some just get missed.',
          after: 'Every lead lands in one dashboard, assigned to a specific person who owns the next step.',
        },
        {
          before: 'Follow-up only happens when someone has a spare moment to remember.',
          after: 'Follow-ups are scheduled automatically so every lead gets a response on time.',
        },
        {
          before: 'Nobody knows how many leads came in this week or where they stand.',
          after: 'You can see every active lead, which stage it is at, and who is responsible — in one view.',
        },
      ],
      cssPrefix: 'crm-automation-positioning-header',
      marginBottom: false,
    },
    useCasesSection: {
      badge: 'Day-to-day impact',
      title: 'What changes when your CRM is actually set up properly',
      description:
        'These are everyday situations your team already deals with. Right now they rely on memory and scattered tools. After setup, each one just works.',
      cssPrefix: 'crm-automation-use-cases-header',
      items: [
        {
          icon: Phone,
          title: 'A customer calls while you\'re busy',
          description:
            'Their details are captured and the right person gets notified. Follow-up happens even if nobody picked up.',
          iconType: 'primary' as const,
        },
        {
          icon: Brain,
          title: 'Messages come through chat, text, and email',
          description:
            'Chat messages, texts, and emails all show up in one inbox. Your team replies from one place and nobody\'s message gets stuck in someone\'s personal account.',
          iconType: 'secondary' as const,
        },
        {
          icon: UserPlus,
          title: 'A new lead fills out your website form',
          description:
            'They\'re added to your CRM instantly. A follow-up email goes out. Your team gets a task to take the next step.',
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
          title: 'It\'s time to check in with past customers',
          description:
            'Follow-up messages go out on schedule — whether it\'s a satisfaction check, a reminder, or a re-engagement offer.',
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
            'Every lead is visible — from first contact to outcome. You always know what stage things are at and who\'s handling it.',
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
      badge: 'What you get',
      title: 'Everything we set up inside your CRM',
      description:
        'We don\'t give you a tool and walk away. We configure everything around how your team actually works — your services, your customers, your daily routine.',
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
      badge: 'What happens automatically',
      title: 'Once it\'s set up, your CRM handles the busywork for you',
      description:
        'When a lead comes in, books an appointment, or finishes a job — the next steps just happen. No one needs to remember. Here are some real examples.',
      cssPrefix: 'crm-automation-workflows-header',
      items: [
        {
          trigger: 'Someone fills out your contact form',
          actions: [
            'They\'re added to your CRM with where they came from',
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
            'It\'s added to your team\'s calendar',
            'They get a text reminder the day before',
            'A final reminder goes out the morning of',
            'After the appointment, a follow-up is sent automatically',
          ],
        },
        {
          trigger: 'A lead opens and clicks your email',
          actions: [
            'They\'re tagged as interested',
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
            'They\'re added to your customer list',
            'A future check-in is scheduled',
            'Their record is updated so you have full history',
          ],
        },
      ],
    },
    governance: {
      badge: 'Built on clear rules',
      title: 'We define ownership and process before turning anything on',
      description:
        'Before any automation runs, we define who handles what, how a lead moves from first contact to outcome, and what happens at each stage. The CRM helps your team instead of creating more confusion.',
      cssPrefix: 'crm-automation-governance-header',
    },
    comparison: {
      header: {
        title: 'Scattered tools vs a structured CRM setup',
        description:
          'Most service businesses track leads across email, texts, spreadsheets, and memory. Here is what that costs compared to a properly configured CRM.',
      },
      items: [
        {
          type: 'before' as const,
          title: 'Scattered tools and manual tracking',
          items: [
            'Leads arrive in different inboxes and some never get seen',
            'Follow-up depends on someone remembering to check',
            'Nobody knows how many leads came in or where they stand',
            'Missed calls and after-hours enquiries fall through the cracks',
            'Review requests and re-engagement happen inconsistently',
          ],
        },
        {
          type: 'after' as const,
          title: 'Structured CRM setup',
          items: [
            'Every lead captured in one place with clear ownership',
            'Follow-up sequences run automatically based on stage and timing',
            'Pipeline shows every active lead, who owns it, and what happens next',
            'Missed calls trigger notifications and follow-up immediately',
            'Review requests and re-engagement run on schedule without manual effort',
          ],
        },
      ],
    },
    proof: {
      header: {
        title: 'What this looks like when it is running',
        description:
          'A service business was getting consistent enquiries but had no way to track them. Leads sat in email, texts were scattered, and follow-up depended on who remembered.',
      },
      cards: [
        {
          title: 'Before: leads everywhere, follow-up nowhere',
          description: 'The business was generating 50+ enquiries per month across forms, calls, and messages. But there was no central system. The team used email, sticky notes, and memory to manage follow-up.',
          points: [
            'No single view of active leads or their status',
            'Follow-up happened when someone remembered, if at all',
            'Missed calls and after-hours enquiries went untracked',
          ],
        },
        {
          title: 'What we built: one system for everything',
          description: 'We configured a CRM to capture every enquiry source, set up automated follow-up sequences, built a pipeline with clear stages, and gave the team notifications and ownership rules.',
          points: [
            'All enquiry sources feeding into one unified inbox',
            'Automated follow-up sequences triggered by lead stage',
            'Pipeline with clear stages, ownership, and next-step visibility',
          ],
          featured: true,
        },
        {
          title: 'After: nothing falls through, team knows where everything stands',
          description: 'Within weeks, the team could see every active lead. Follow-up happened on time. Missed calls triggered immediate notifications. The business stopped losing leads to disorganisation.',
          points: [
            'Every lead tracked from first contact through to outcome',
            'Follow-up response times dropped from days to minutes',
            'Team gained full visibility into pipeline and workload',
          ],
        },
      ],
    },
    qualification: {
      title: 'Is this the right fit for your business?',
      description:
        'This works for businesses that get regular leads and want to stop losing them to disorganisation.',
      cssPrefix: 'crm-automation-qualification-header',
      strongFitTitle: 'Strong fit if',
      strongFitItems: [
        'Leads come in regularly but you are not confident every one gets handled.',
        'Your team juggles follow-ups across email, text, and calls \u2014 and some slip through.',
        'You want to see every active lead, who owns it, and what happens next.',
        'You would rather have things happen automatically than rely on someone remembering.',
      ],
      notDesignedTitle: 'Not the right fit if',
      notDesignedItems: [
        'You only get a handful of leads per month and can easily track them yourself.',
        'Your team genuinely prefers doing everything manually and has no interest in changing.',
        'You need a short-term campaign tool, not a long-term operational setup.',
        'Nobody on the team has agreed on how leads should be handled in the first place.',
      ],
    },
    connection: {
      badge: 'Works best with a clear website',
      title: 'Your CRM does more when your website already makes sense',
      description:
        'When the website clearly explains your services and makes it easy for people to get in touch, the CRM picks it up from there \u2014 capturing the enquiry, notifying your team, and kicking off the follow-up. If your website needs work first, we can help with that too.',
      cssPrefix: 'crm-automation-connection-header',
    },
    faqSection: {
      badge: 'FAQ',
      title: 'Common questions about CRM setup',
      description:
        'Practical questions from businesses trying to decide if a CRM setup is the right move.',
      faqs: [
        {
          question: 'Do I need to switch to a new CRM?',
          answer:
            'Not necessarily. We can work with what you have or recommend the right platform based on your business size, team, and needs.',
        },
        {
          question: 'How long does the setup take?',
          answer:
            'Most setups take a few weeks depending on complexity. The goal is to get the core working quickly and refine from there.',
        },
        {
          question: 'Will my team actually use it?',
          answer:
            'We build the CRM around how your team works, not the other way around. Clear ownership, simple next steps, and useful visibility make adoption easier.',
        },
        {
          question: 'Can this connect to our website forms and booking system?',
          answer:
            'Yes. We integrate forms, booking tools, email, SMS, and other lead sources so everything feeds into one system.',
        },
        {
          question: 'What if we already have a CRM but it is not set up properly?',
          answer:
            'That is one of the most common starting points. We audit what exists, identify what is broken or unused, and restructure it so it actually works.',
        },
      ],
      cssPrefix: 'crm-automation-faq',
    },
  },
  inlineCta: {
    title: 'Not sure how many leads you are losing?',
    description:
      'Tell us how your team handles enquiries today. We will show you where leads are falling through and what a structured CRM would change.',
  },
  cta: {
    title: 'Stop losing leads to disorganisation',
    description:
      'Tell us how enquiries come in and how your team handles them. We will show you where things are falling through and set up a CRM that tracks every lead from first contact to outcome.',
  },
} satisfies ServicePageData;
