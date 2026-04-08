import {
  Calendar,
  Database,
  Globe,
  Inbox,
  Layers,
  Mail,
  MessageSquare,
  Settings,
  Tag,
  TrendingUp,
  UserCheck,
  Users,
  Workflow,
} from 'lucide-react';

import { buildContactHref } from '@/lib/contact/contactHref';

import type { FeaturePageData } from '../types';

const crmFaqItems = [
  {
    question: 'What does the CRM track?',
    answer: 'The CRM tracks contacts, leads, messages, calls, and emails in one dashboard.',
  },
  {
    question: 'Is the CRM easy to use?',
    answer: 'Yes. The dashboard is designed for clear navigation and daily use.',
  },
  {
    question: 'How does the CRM connect with other features?',
    answer:
      'The CRM integrates with calendars, inbox, and automation tools for a complete overview.',
  },
  {
    question: 'Can I customize my dashboard?',
    answer: 'You can filter, organize, and adjust views to fit your workflow.',
  },
  {
    question: 'How do I import existing contacts?',
    answer: 'You can import contacts from CSV files, Google Contacts, or other CRM systems.',
  },
  {
    question: 'Can I set up automated follow-ups?',
    answer:
      'Yes, the CRM integrates with automation tools to send follow-up messages based on triggers.',
  },
  {
    question: 'What about data security?',
    answer: 'All customer data is encrypted and stored securely with regular backups.',
  },
  {
    question: 'Can multiple team members access the CRM?',
    answer:
      'Yes, with role-based permissions to control who can view or edit different information.',
  },
  {
    question: 'How does the CRM help with sales?',
    answer: 'Track leads, set reminders for follow-ups, and monitor conversion rates.',
  },
  {
    question: 'Is there mobile access?',
    answer: 'Yes, the CRM is fully mobile-responsive for access anywhere.',
  },
];

export const crmData: FeaturePageData = {
  slug: 'crm',
  systems: ['revenue-growth'],
  topics: ['lead-management', 'crm-visibility'],
  seo: {
    title: 'CRM | Structured Contact and Follow-Up Layer',
    description:
      'Structured CRM integrated into your website system for contact management, unified communications, and reliable follow-up workflows.',
    canonical: '/features/crm',
    schema: {
      primary: {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'CRM',
        description:
          'Structured CRM integrated into your website system for contact management, unified communications, and reliable follow-up workflows.',
        url: '/features/crm',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web Browser',
        publisher: {
          '@type': 'Organization',
          name: 'MindWP',
          url: 'https://mindwp.com',
        },
      },
    },
  },
  hero: {
    badge: 'CRM Layer',
    title: 'Structured CRM Integrated into Your System',
    description:
      'This CRM layer organizes contacts, conversations, and activity into one structured view. It connects directly to enquiry capture, booking, and follow-up so your team can work from one governed system.',
    primaryAction: {
      label: 'Review How CRM Follow-Up Works',
      href: buildContactHref({ system: 'revenue-growth', sourceType: 'feature', slug: 'crm' }),
    },
    stats: [
      { value: 'Unified', label: 'Inbox' },
      { value: 'Complete', label: 'Profiles' },
      { value: 'Automated', label: 'Follow-ups' },
      { value: 'Team', label: 'Collaboration' },
    ],
  },
  sections: {
    process: {
      badge: 'Simple Process',
      title: 'How Structured CRM Operates',
      description:
        'A clear flow from enquiry capture to organized contact records and structured follow-up.',
      steps: [
        {
          icon: UserCheck,
          number: '01',
          title: 'Lead Captured',
          description: 'Contact info from website form, chat, call, or social media auto-saved',
          iconType: 'primary' as const,
        },
        {
          icon: Database,
          number: '02',
          title: 'CRM Record Created',
          description: 'Complete profile built with all info, tags, and source tracking',
          iconType: 'secondary' as const,
        },
        {
          icon: Inbox,
          number: '03',
          title: 'Unified Communications',
          description: 'All emails, texts, calls, and chats appear in one inbox',
          iconType: 'primary' as const,
        },
        {
          icon: Workflow,
          number: '04',
          title: 'Automation Triggers',
          description: 'Follow-up sequences and workflows start automatically',
          iconType: 'secondary' as const,
        },
      ],
    },
    benefits: {
      badge: 'Key Advantages',
      title: 'What Structured CRM Improves',
      description:
        'Structured CRM keeps communication visible, organizes contacts consistently, and supports reliable follow-up across your team.',
      items: [
        {
          icon: Inbox,
          title: 'Unified Inbox',
          description: 'Access all messages, calls, and emails from one dashboard.',
          iconType: 'primary' as const,
        },
        {
          icon: Users,
          title: 'Contact Profiles',
          description: 'View and manage leads, customers, and their activity history.',
          iconType: 'secondary' as const,
        },
        {
          icon: Tag,
          title: 'Tagging & Segmentation',
          description: 'Organize contacts with tags for easy filtering.',
          iconType: 'accent' as const,
        },
        {
          icon: Settings,
          title: 'Custom Views',
          description: 'Adjust dashboard views to fit your workflow.',
          iconType: 'primary' as const,
        },
        {
          icon: Layers,
          title: 'Feature Integration',
          description: 'CRM connects with calendars, inbox, and automation tools.',
          iconType: 'secondary' as const,
        },
        {
          icon: TrendingUp,
          title: 'Lead Tracking',
          description: 'Monitor lead progress and conversion rates with detailed analytics.',
          iconType: 'accent' as const,
        },
      ],
    },
    useCases: {
      badge: 'Feature in Practice',
      title: 'Structured CRM Within Daily Operations',
      description:
        'Examples of how this CRM layer supports daily operations while remaining connected to your Smart Website infrastructure.',
      solutionLabel: 'CRM Solution',
      items: [
        {
          icon: Inbox,
          title: 'Inbox Management',
          scenario: 'Access all incoming messages and calls in one dashboard.',
          solution: 'Reply and follow up directly from the unified inbox.',
          result: 'Maintain consistent communication.',
        },
        {
          icon: Users,
          title: 'Contact Profiles',
          scenario: 'Track leads and customers with organized profiles.',
          solution: 'View contact details, notes, and history.',
          result: 'Keep information accessible.',
        },
        {
          icon: Tag,
          title: 'Segmentation',
          scenario: 'Organize contacts for targeted communication.',
          solution: 'Use tags to filter and group contacts.',
          result: 'Send relevant messages easily.',
        },
      ],
    },
    capabilities: {
      badge: "What's Included",
      title: 'CRM Layer Overview',
      featureCategories: [
        {
          icon: Users,
          title: 'Contacts & Inbox',
          description: 'Comprehensive contact management with unified communication tracking',
          features: [
            'Contact and lead tracking',
            'Unified inbox for messages, calls, and emails',
            'Contact details and notes',
            'Activity history',
          ],
          iconType: 'accent' as const,
        },
        {
          icon: Tag,
          title: 'Tagging & Segmentation',
          description: 'Organize and segment your contacts for targeted communication',
          features: [
            'Tag contacts for organization',
            'Segment lists for communication',
            'Filter contacts by tags',
            'Easy follow-up',
          ],
          iconType: 'secondary' as const,
        },
        {
          icon: Globe,
          title: 'Integration',
          description: 'Seamlessly integrate with your existing tools and workflows',
          features: [
            'Connects with calendars',
            'Works with automation tools',
            'Syncs with inbox',
            'Custom dashboard views',
          ],
          iconType: 'primary' as const,
        },
      ],
    },
    faq: {
      badge: 'Common Questions',
      title: 'Structured CRM FAQ',
      items: crmFaqItems,
    },
    explore: {
      title: 'Explore Related Features',
      description:
        'See how other layers connect with CRM to form a complete, structured operating system.',
      cards: [
        {
          icon: MessageSquare,
          title: 'AI Chat',
          description: 'Intelligent conversational AI for instant customer engagement',
          href: '/features/aichat',
        },
        {
          icon: Calendar,
          title: 'Calendars',
          description: 'Smart scheduling and appointment management system',
          href: '/features/calendars',
        },
        {
          icon: Mail,
          title: 'Inbox',
          description: 'Unified communication hub for all your messages',
          href: '/features/inbox',
        },
      ],
    },
  },
  cta: {
    title: 'Review Your Contact and Follow-Up Structure',
    description:
      'Tell us how leads and follow-up are handled now. We will show you where pipeline gaps are slowing replies and conversions.',
    primaryAction: {
      label: 'Keep Every Lead Moving',
      href: buildContactHref({ system: 'revenue-growth', sourceType: 'feature', slug: 'crm' }),
    },
  },
};
