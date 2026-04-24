import {
  BrainCircuit,
  Calendar,
  Clock,
  Globe,
  Headphones,
  MessageSquare,
  Phone,
  PhoneForwarded,
  TrendingUp,
  Users,
} from 'lucide-react';

import { buildFeatureSeo } from '../seo';
import type { FeaturePageData } from '../types';

const voicecallsFaqItems = [
  {
    question: 'How natural does the AI voice sound?',
    answer:
      "Our AI uses advanced voice synthesis that sounds remarkably human. Most callers don't realize they're speaking with AI. You can customize the voice, accent, and speaking style to match your brand.",
  },
  {
    question: 'Can it handle complex questions?',
    answer:
      "Yes! The AI is trained on your business info and can handle FAQs, pricing, services, and more. For complex inquiries it can't resolve, it smoothly transfers to your team or takes a detailed message.",
  },
  {
    question: "What if the AI doesn't know the answer?",
    answer:
      "The AI will politely acknowledge when it needs human help, take a detailed message with the caller's question, and either transfer immediately or schedule a callback.",
  },
  {
    question: 'How quickly can I set it up?',
    answer:
      'Most businesses are live within 48 hours. We configure the AI with your business info, FAQs, and calendar, then you test it before going live.',
  },
  {
    question: 'What languages does the AI support?',
    answer:
      'The AI supports multiple languages including English, Spanish, French, German, and more. You can configure it for your target audience.',
  },
  {
    question: 'Can it book appointments automatically?',
    answer:
      'Yes, the AI can check your calendar availability and book appointments directly during the call, sending confirmations to both you and the customer.',
  },
  {
    question: 'Is the AI HIPAA compliant?',
    answer:
      'For healthcare businesses, we offer HIPAA-compliant configurations. The AI can handle sensitive information appropriately and route calls securely.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'Pricing starts at $99/month for basic plans, with enterprise options available. Contact us for a custom quote based on your call volume and features needed.',
  },
  {
    question: 'Can it integrate with my existing phone system?',
    answer:
      'Yes, it integrates with most business phone systems including VoIP providers, traditional landlines, and cloud-based solutions.',
  },
  {
    question: 'What happens during off-hours?',
    answer:
      'The AI receptionist is available 24/7. During off-hours, it can take messages, schedule callbacks, or provide basic information based on your settings.',
  },
];

const slug = 'voicecalls';

export const voicecallsData: FeaturePageData = {
  slug,
  seo: buildFeatureSeo({
    slug,
    title: 'Voice Calls | AI-Powered Call Handling Layer',
    description:
      'AI-powered voice call handling for booking, message capture, and call routing with consistent 24/7 support.',
  }),
  systems: ['ai-lead-handling'],
  topics: ['missed-calls', 'lead-response-time'],
  hero: {
    badge: 'AI-Powered Phone Assistant',
    title: 'AI phone assistant for consistent call handling',
    description:
      'An AI phone assistant that answers calls, books appointments, takes messages, and routes enquiries clearly during business hours or after hours.',
    stats: [
      { value: '100%', label: 'Call Answer Rate' },
      { value: '24/7', label: 'Availability' },
      { value: '0 sec', label: 'Wait Time' },
      { value: '95%+', label: 'Customer Satisfaction' },
    ],
  },
  sections: {
    process: {
      badge: 'Simple Process',
      title: 'How AI call handling works',
      description: 'From incoming call to booking or message capture in a clear, repeatable flow.',
      steps: [
        {
          number: '01',
          title: 'Call Received',
          description: 'Customer calls your business number any time.',
          iconType: 'primary' as const,
        },
        {
          number: '02',
          title: 'Call Answered',
          description: 'Call is answered and common questions are handled automatically.',
          iconType: 'secondary' as const,
        },
        {
          number: '03',
          title: 'Takes Action',
          description: 'Book appointments, take messages, or route to your team.',
          iconType: 'primary' as const,
        },
        {
          number: '04',
          title: 'Call Logged',
          description: 'All call data and notes are saved to your dashboard.',
          iconType: 'secondary' as const,
        },
      ],
    },
    benefits: {
      badge: 'Key Advantages',
      title: 'What AI call handling supports',
      description:
        'Reduce missed calls, improve booking consistency, and support your team without adding extra admin.',
      items: [
        {
          icon: Clock,
          title: 'Never Miss a Call',
          description: 'Answer every call, even after hours.',
          iconType: 'primary' as const,
        },
        {
          icon: Calendar,
          title: 'Book Appointments',
          description: 'Book appointments directly during the call.',
          iconType: 'secondary' as const,
        },
        {
          icon: MessageSquare,
          title: 'Message Taking',
          description: 'Take messages and gather information before routing.',
          iconType: 'accent' as const,
        },
        {
          icon: Users,
          title: 'Call Routing',
          description: 'Route calls to the right team member.',
          iconType: 'secondary' as const,
        },
        {
          icon: TrendingUp,
          title: 'Save Time',
          description: 'Reduce repetitive calls for your team.',
          iconType: 'primary' as const,
        },
        {
          icon: Phone,
          title: '24/7 Availability',
          description: 'AI receptionist available anytime, anywhere.',
          iconType: 'accent' as const,
        },
      ],
    },
    useCases: {
      badge: 'Real-World Examples',
      title: 'Where AI call handling helps',
      description: 'Practical examples of how AI voice support fits into daily operations.',
      items: [
        {
          icon: Headphones,
          title: 'After-Hours Support',
          scenario: 'A customer calls after business hours.',
          solution: 'Call is answered, details are taken, and a callback is scheduled.',
          result: 'Customer receives support, no missed opportunity.',
        },
        {
          icon: Calendar,
          title: 'Appointment Booking',
          scenario: 'A customer wants to book an appointment by phone.',
          solution: 'Book the appointment directly during the call.',
          result: 'More bookings, fewer interruptions.',
        },
        {
          icon: PhoneForwarded,
          title: 'Call Routing',
          scenario: 'A call needs to reach the right team member.',
          solution: 'Route the call to the appropriate person or take a message.',
          result: 'Efficient call handling.',
        },
      ],
    },
    capabilities: {
      badge: "What's Included",
      title: 'What is included',
      featureCategories: [
        {
          icon: BrainCircuit,
          title: 'Smart Conversations',
          description:
            'Advanced AI conversations with natural language processing and multi-language support',
          features: [
            'Natural language understanding',
            'Multi-language support',
            'Custom voice & personality',
            'Context-aware responses',
          ],
          iconType: 'accent' as const,
        },
        {
          icon: Calendar,
          title: 'Business Actions',
          description:
            'Automate key business tasks like appointment scheduling and message routing',
          features: [
            'Appointment scheduling',
            'Message taking & routing',
            'FAQ answering',
            'Lead qualification',
          ],
          iconType: 'secondary' as const,
        },
        {
          icon: Globe,
          title: 'Integrations',
          description:
            'Seamlessly connect with your existing CRM, calendar, and communication tools',
          features: [
            'CRM auto-sync',
            'Calendar integration',
            'SMS notifications',
            'Email summaries',
          ],
          iconType: 'primary' as const,
        },
      ],
      columns: 3 as const,
      variant: 'stacked' as const,
    },
    faq: {
      badge: 'Common Questions',
      title: 'Frequently Asked Questions',
      description: 'Clear answers about how AI voice call handling works.',
      items: voicecallsFaqItems,
    },
    explore: {
      badge: 'Complete Your Setup',
      title: 'Connect voice AI to the wider system',
      description: 'Voice AI works best when connected to CRM, website chat, and booking systems.',
      cards: [
        {
          icon: MessageSquare,
          title: 'AI Website Chatbot',
          description: 'Capture leads from website visitors 24/7 with intelligent chat',
          href: '/features/aichat',
          iconType: 'accent' as const,
        },
        {
          icon: Users,
          title: 'CRM & Automation',
          description: 'Auto-follow up with every lead captured by phone or web',
          href: '/features/crm',
          iconType: 'secondary' as const,
        },
        {
          icon: Globe,
          title: 'Smart Websites',
          description: 'Modern website with built-in AI, booking, and automation',
          href: '/services/smart-website-systems',
          iconType: 'primary' as const,
        },
      ],
    },
    testimonial: {
      title: 'What teams notice when calls stop slipping',
      quote:
        'We reduced missed calls and improved booking consistency. The AI handles routine enquiries while our team focuses on service delivery.',
      author: 'Dr. Sarah Mitchell',
      business: 'BrightSmile Dental',
      rating: 5,
    },
  },
  cta: {
    title: 'Discuss AI voice call handling',
    description:
      'Tell us how calls are handled now. We will show you where voice AI can stop missed enquiries and tighten call routing.',
  }
};
