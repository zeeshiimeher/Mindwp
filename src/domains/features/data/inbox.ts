import {
  Calendar,
  CheckCircle2,
  Inbox as InboxIcon,
  Mail,
  MessageSquare,
  Phone,
  Tag,
  Users,
  Zap,
} from 'lucide-react';

import { buildContactHref } from '@/lib/contact/contactHref';

import type { FeaturePageData } from '../types';

const inboxFaqItems = [
  {
    question: 'Which communication channels are supported?',
    answer:
      'We support email, SMS, phone calls, Facebook Messenger, Instagram DMs, and more. All messages appear in one unified inbox.',
  },
  {
    question: 'Can multiple team members use the inbox?',
    answer:
      'Yes, the inbox supports team collaboration with conversation assignments, internal notes, and real-time updates.',
  },
  {
    question: 'How does the inbox help with organization?',
    answer:
      'Messages are automatically organized by contact, with tags, filters, and search functionality to find conversations quickly.',
  },
  {
    question: 'What if I miss a message?',
    answer:
      'Unread badges and notifications ensure you never miss a customer message. Everything is centralized.',
  },
  {
    question: 'Can I respond from any channel?',
    answer:
      'Yes, you can respond to any message from the inbox interface, and it will be sent through the appropriate channel.',
  },
  {
    question: 'Is the inbox mobile-friendly?',
    answer:
      'Absolutely, the inbox works perfectly on mobile devices so you can stay connected anywhere.',
  },
  {
    question: 'How secure is customer data?',
    answer:
      'All communications are encrypted and stored securely. We comply with data protection regulations.',
  },
  {
    question: 'Can I integrate with my existing tools?',
    answer:
      'Yes, the inbox integrates with CRM systems, calendars, and other business tools for seamless workflow.',
  },
  {
    question: 'What about conversation history?',
    answer:
      'Full conversation history is maintained across all channels, so you can see the complete customer journey.',
  },
  {
    question: 'How does this improve customer service?',
    answer:
      'Faster response times, consistent communication, and better organization lead to happier customers and more efficient service.',
  },
];

export const inboxData: FeaturePageData = {
  slug: 'inbox',
  systems: ['ai-lead-handling'],
  topics: ['lead-response-time'],
  seo: {
    title: 'Inbox | Unified Customer Communication Layer',
    description:
      'Unified inbox layer for email, SMS, social messages, and calls in one organized system for faster response and better team coordination.',
    canonical: '/features/inbox',
    schema: {
      primary: {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Inbox',
        description:
          'Unified inbox layer for email, SMS, social messages, and calls in one organized system for faster response and better team coordination.',
        url: '/features/inbox',
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
    badge: 'Feature Spotlight',
    title: 'One Inbox for Every Customer Conversation',
    description:
      'Email, SMS, Facebook, Instagram, and chat — all in one place. Respond faster, stay organized, and never miss a customer message again.',
    primaryAction: {
      label: 'See the Unified Inbox in Action',
      href: '#how-it-works',
    },
    stats: [
      { value: 'All', label: 'Channels' },
      { value: 'One', label: 'Inbox' },
      { value: 'Team', label: 'Ownership' },
      { value: 'Fast', label: 'Replies' },
    ],
  },
  sections: {
    process: {
      badge: 'Simple Setup',
      title: 'How the Unified Inbox Works',
      description:
        'Connect your communication channels once, and every message flows into one organized inbox',
      steps: [
        {
          number: '01',
          title: 'Connect Channels',
          description: 'Link your email, SMS, and phone to the unified inbox.',
          iconType: 'primary' as const,
        },
        {
          number: '02',
          title: 'Messages Arrive',
          description: 'All communications appear in one organized inbox.',
          iconType: 'secondary' as const,
        },
        {
          number: '03',
          title: 'Organize & Filter',
          description: 'Group and filter conversations by contact or channel.',
          iconType: 'primary' as const,
        },
        {
          number: '04',
          title: 'Reply & Collaborate',
          description: 'Respond and coordinate with your team from one place.',
          iconType: 'secondary' as const,
        },
      ],
    },
    benefits: {
      badge: 'Why It Matters',
      title: 'Respond Faster. Stay Organized.',
      description:
        'Switching between apps slows your team down. A unified inbox keeps every conversation in one clear, organized view.',
      items: [
        {
          icon: InboxIcon,
          title: 'All Channels in One View',
          description: 'Email, SMS, social messages, and calls appear in a single inbox.',
          iconType: 'primary' as const,
        },
        {
          icon: Users,
          title: 'Clear Team Ownership',
          description: 'Assign conversations so everyone knows who is responsible.',
          iconType: 'secondary' as const,
        },
        {
          icon: MessageSquare,
          title: 'Full Conversation History',
          description: 'See every past interaction with a contact across all channels.',
          iconType: 'primary' as const,
        },
        {
          icon: Tag,
          title: 'Simple Tagging & Filters',
          description: 'Quickly organize and find important conversations.',
          iconType: 'secondary' as const,
        },
        {
          icon: CheckCircle2,
          title: 'Custom Views',
          description: 'Adjust the inbox layout to match your workflow.',
          iconType: 'primary' as const,
        },
        {
          icon: Zap,
          title: 'Quick Replies & Automation',
          description: 'Use saved replies and simple rules to respond faster.',
          iconType: 'accent' as const,
        },
      ],
    },
    useCases: {
      badge: 'Real Scenarios',
      title: 'How Businesses Use the Unified Inbox',
      items: [
        {
          icon: InboxIcon,
          title: 'Unified Communication',
          scenario: 'All customer messages arrive in one inbox.',
          solution: 'View and reply to every message from a single dashboard.',
          result: 'Never miss a customer message again.',
        },
        {
          icon: Users,
          title: 'Team Collaboration',
          scenario: 'Multiple team members manage conversations together.',
          solution: 'Assign, comment, and coordinate on messages.',
          result: 'Efficient team communication and support.',
        },
        {
          icon: Tag,
          title: 'Organized Follow-Up',
          scenario: 'Tag and filter conversations for easy tracking.',
          solution: 'Find and manage important messages quickly.',
          result: 'Stay organized and follow up effectively.',
        },
      ],
    },
    faq: {
      badge: 'Common Questions',
      title: 'Frequently Asked Questions',
      description: 'Common questions about Unified Inbox',
      items: inboxFaqItems,
    },
    explore: {
      title: 'Explore Related Features',
      description:
        'Discover how our other features work seamlessly with Inbox to create a complete business solution.',
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
          icon: Users,
          title: 'CRM',
          description: 'Track customer interactions and manage relationships',
          href: '/features/crm',
        },
      ],
    },
    channels: {
      badge: '8 Communication Channels',
      title: 'Every Way Customers Contact You, Unified',
      description:
        "Your customers don't all use the same channel. Some email, some text, some message on Facebook or Instagram. The unified inbox brings them all together so you never miss a conversation.",
      items: [
        {
          icon: Mail,
          title: 'Email',
          description: 'Connect your email accounts to receive and reply from one inbox.',
        },
        {
          icon: MessageSquare,
          title: 'SMS & Text',
          description: 'Send and receive text messages directly in the inbox.',
        },
        {
          icon: Phone,
          title: 'Phone Calls',
          description: 'View call logs and manage call history.',
        },
        {
          icon: Users,
          title: 'Team Notes',
          description: 'Collaborate with team members using internal notes.',
        },
      ],
    },
    painPoints: {
      badge: 'The Difference',
      title: 'Before vs. After Unified Inbox',
      items: [
        {
          before: 'Checking Gmail, Facebook, Instagram, texts separately throughout the day',
          after: 'One inbox. Check once. See everything.',
        },
        {
          before: "Missing customer messages because they're buried in different apps",
          after: 'All messages in one feed with unread badges—impossible to miss',
        },
        {
          before: 'Forgetting which channel a customer prefers to use',
          after: "Full conversation history shows all channels they've used",
        },
        {
          before: "Team members don't know who's handling which conversation",
          after: 'Conversation assignments and internal notes prevent confusion',
        },
        {
          before:
            'Switching apps to respond (open Facebook, now check Instagram, back to Gmail...)',
          after: 'Respond to everything from one interface. Customer gets reply on their channel.',
        },
        {
          before: 'Searching through multiple apps to find a past conversation',
          after: 'Search once. Find conversations across all channels instantly.',
        },
      ],
    },
    capabilities: {
      badge: "What's Included",
      title: 'Inbox Layer Overview',
      description: 'Core inbox capabilities for multi-channel communication workflows.',
      featureCategories: [
        {
          icon: InboxIcon,
          title: 'Unified Channels',
          description: 'Bring all customer communication channels into one structured view.',
          features: [
            'Email, SMS, and call visibility',
            'Channel-aware response handling',
            'Single conversation timeline',
            'Centralized message history',
          ],
          iconType: 'accent' as const,
        },
        {
          icon: Users,
          title: 'Team Collaboration',
          description: 'Coordinate ownership and follow-up within one inbox workflow.',
          features: [
            'Conversation assignment',
            'Internal notes for handoffs',
            'Shared visibility across team',
            'Consistent response ownership',
          ],
          iconType: 'secondary' as const,
        },
        {
          icon: Tag,
          title: 'Organization Tools',
          description: 'Keep communication organized with tagging, filtering, and search.',
          features: [
            'Tagging and segmentation',
            'Filterable conversation views',
            'Search across all channels',
            'Structured follow-up tracking',
          ],
          iconType: 'primary' as const,
        },
      ],
      columns: 3 as const,
      variant: 'stacked' as const,
    },
  },
  cta: {
    title: 'Ready to Bring All Conversations into One Inbox?',
    description:
      'Connect your email, SMS, and social channels into one response system so your team can reply faster and stop losing conversations across channels.',
    primaryAction: {
      label: 'Unify Your Inbox System',
      href: buildContactHref({ system: 'ai-lead-handling', sourceType: 'feature', slug: 'inbox' }),
    },
  },
};
