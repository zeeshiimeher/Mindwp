import { Calendar, Clock, Globe, Inbox, MessageSquare, Settings, Users } from 'lucide-react';

import type { FeaturePageData } from '../types';

const aiChatFaqItems = [
  {
    question: 'How does the chat feature work?',
    answer:
      'The chat feature allows visitors to send messages, receive reply suggestions, and interact with your team. All conversations are stored for review.',
  },
  {
    question: 'Can appointments be booked through chat?',
    answer:
      'Yes, visitors can request and book appointments directly in the chat window. The system syncs with your calendar.',
  },
  {
    question: 'What happens if a question needs human support?',
    answer:
      'The chat feature can route or escalate conversations to a team member for follow-up. Human oversight is always available.',
  },
  {
    question: 'How does chat connect with other features?',
    answer:
      'Chat integrates with CRM, calendar, and notifications, helping keep all information organized and accessible.',
  },
  {
    question: 'Is the chat available 24/7?',
    answer:
      'Yes, the AI chat is available around the clock to answer visitor questions and capture leads even when your team is offline.',
  },
  {
    question: 'Can I customize the chat appearance?',
    answer:
      'Absolutely! You can customize colors, branding, welcome messages, and chat behavior to match your website.',
  },
  {
    question: 'How does it handle multiple languages?',
    answer:
      'The AI can respond in multiple languages and detect visitor language preferences automatically.',
  },
  {
    question: 'What analytics are available?',
    answer:
      'View detailed analytics on chat conversations, conversion rates, popular questions, and team performance.',
  },
  {
    question: 'Is it mobile-friendly?',
    answer:
      'Yes, the chat widget is fully responsive and works perfectly on all devices including mobile phones and tablets.',
  },
  {
    question: 'How secure is the chat data?',
    answer:
      'All chat data is encrypted and stored securely. We comply with data protection regulations and never share personal information.',
  },
];

export const aiChatData: FeaturePageData = {
  slug: 'aichat',
  systems: ['ai-lead-handling'],
  topics: ['lead-response-time'],
  keywords: [
    'ai chat',
    'website chat integration',
    'crm chat system',
    'structured website conversation',
  ],
  category: 'Communication',
  seo: {
    title: 'AI Chat | Structured Website Conversation Layer',
    description:
      'Structured AI chat integrated into your website system for visitor support, routing, and appointment booking with human oversight.',
    canonical: 'https://mindwp.com/features/aichat',
    schema: {
      primary: {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'AI Chat',
        description:
          'Structured AI chat integrated into your website system for visitor support, routing, and appointment booking with human oversight.',
        url: 'https://mindwp.com/features/aichat',
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
    badge: 'Conversation Layer',
    title: 'Structured Website Chat Integrated into Your System',
    description:
      'This conversation layer helps visitors ask questions, request services, and book appointments through a clear flow. AI supports routing and first response while your team stays in control of the important conversations.',
    primaryAction: {
      label: 'Capture Leads with AI Chat',
      href: '/contact?system=ai-lead-handling&source=feature/aichat',
    },
    stats: [
      { value: '24/7', label: 'Available' },
      { value: 'Instant', label: 'Responses' },
      { value: 'Human', label: 'Oversight' },
      { value: 'Smart', label: 'Automation' },
    ],
  },
  sections: {
    process: {
      fallbackTitle: 'How Website Chat Works',
      fallbackDescription: 'Simple 4-step process for website chat',
      badge: 'How It Works',
      title: 'How Structured Chat Operates',
      description:
        'A clear communication flow that connects visitor messages to routing, booking, and follow-up inside your wider system.',
      steps: [
        {
          number: '01',
          title: 'Visitor Arrives',
          description: 'A visitor opens your website and can interact with chat.',
        },
        {
          number: '02',
          title: 'Chat Started',
          description: 'The chat window opens and the visitor can type questions or requests.',
        },
        {
          number: '03',
          title: 'Team or AI Reply',
          description: 'Reply suggestions are provided and messages can be routed to your team.',
        },
        {
          number: '04',
          title: 'Appointment Booking',
          description:
            'Conversations can be used to book appointments or hand off to a team member.',
        },
      ],
    },
    benefits: {
      fallbackTitle: 'Chat Feature Benefits',
      fallbackDescription: 'Consistent communication and organization',
      badge: 'Key Advantages',
      title: 'What Structured Chat Improves',
      description:
        'Structured chat improves communication clarity, captures enquiries consistently, and connects conversations directly to your CRM and booking layers.',
      items: [
        {
          icon: MessageSquare,
          title: 'Consistent Communication',
          description:
            'Chat provides a reliable way for visitors to ask questions and receive responses.',
          iconType: 'primary' as const,
        },
        {
          icon: Inbox,
          title: 'Organized Conversations',
          description: 'All chat messages are stored and can be reviewed by your team.',
          iconType: 'secondary' as const,
        },
        {
          icon: Users,
          title: 'Team Collaboration',
          description: 'Chats can be routed to the right team member for follow-up.',
          iconType: 'primary' as const,
        },
        {
          icon: Calendar,
          title: 'Appointment Booking',
          description: 'Visitors can book appointments directly through chat.',
          iconType: 'secondary' as const,
        },
        {
          icon: Settings,
          title: 'Feature Integration',
          description: 'Chat connects with CRM, calendar, and other features.',
          iconType: 'primary' as const,
        },
        {
          icon: Clock,
          title: '24/7 Availability',
          description: 'AI chat is available anytime to capture leads and answer questions.',
          iconType: 'accent' as const,
        },
      ],
    },
    useCases: {
      fallbackTitle: 'Chat in Everyday Use',
      fallbackDescription: 'Examples of how chat supports daily operations',
      badge: 'Feature in Practice',
      title: 'Structured Chat Within Daily Operations',
      description:
        'Examples of how this conversation layer supports daily operations while remaining connected to your Smart Website infrastructure.',
      scenarioLabel: 'Scenario',
      solutionLabel: 'AI Solution',
      items: [
        {
          icon: MessageSquare,
          title: 'Visitor Question',
          scenario: 'A visitor asks a question about your services.',
          solution: 'Chat provides a suggested reply and can route the message to your team.',
          result: 'Visitor receives a timely response.',
        },
        {
          icon: Calendar,
          title: 'Appointment Request',
          scenario: 'A visitor wants to book a meeting or call.',
          solution: 'Chat allows booking directly and syncs with your calendar.',
          result: 'Appointment is scheduled and confirmed.',
        },
        {
          icon: Users,
          title: 'Team Handoff',
          scenario: 'A complex question requires human support.',
          solution: 'Chat escalates the conversation to a team member for follow-up.',
          result: 'Team member continues the conversation as needed.',
        },
      ],
    },
    capabilities: {
      fallbackTitle: 'Chat Feature Overview',
      fallbackDescription: 'Complete chat functionality breakdown',
      badge: "What's Included",
      title: 'Conversation Layer Overview',
      description: 'Breakdown of how chat functions within your structured website system.',
      featureCategories: [
        {
          icon: MessageSquare,
          title: 'Chat Functions',
          description: 'Interactive chat interface with smart reply suggestions and routing',
          features: [
            'Text-based chat interface',
            'Reply suggestions',
            'Conversation routing',
            'Message history',
          ],
          iconType: 'accent' as const,
        },
        {
          icon: Globe,
          title: 'Integration Features',
          description: 'Seamlessly integrate with your CRM, calendar, and team workflows',
          features: ['CRM sync', 'Calendar booking', 'Team notifications', 'Contact info capture'],
          iconType: 'secondary' as const,
        },
        {
          icon: Users,
          title: 'User Controls',
          description: 'Full control over conversations with human oversight and management',
          features: [
            'Human handoff',
            'Conversation review',
            'Visibility and organization',
            'Settings management',
          ],
          iconType: 'primary' as const,
        },
      ],
    },
    faq: {
      fallbackTitle: 'Chat Feature FAQ',
      fallbackDescription: 'Common questions about chat functionality',
      badge: 'Common Questions',
      title: 'Structured Chat FAQ',
      description:
        'Answers to common questions about how this conversation layer operates within your system.',
      items: aiChatFaqItems,
    },
    explore: {
      badge: 'Explore Related Features',
      title: 'Complete Your Customer Experience',
      description: 'Pair chat with these features for the best results',
      cards: [
        {
          icon: Calendar,
          title: 'Calendars',
          description: 'Book appointments directly through chat conversations',
          href: '/features/calendars',
        },
        {
          icon: Inbox,
          title: 'Unified Inbox',
          description: 'Manage all customer communications in one place',
          href: '/features/inbox',
        },
        {
          icon: Users,
          title: 'CRM',
          description: 'Track customer interactions and manage relationships',
          href: '/features/crm',
        },
      ],
    },
  },
  cta: {
    title: 'Review Your Communication Structure',
    description:
      'Tell us how website conversations are handled now. We will show you where chat can remove delays and stop leads from stalling.',
    primaryAction: {
      label: 'Capture Leads with AI Chat',
      href: '/contact?system=ai-lead-handling&source=feature/aichat',
    },
  },
};
