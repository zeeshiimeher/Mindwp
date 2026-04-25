import { Calendar, Clock, Inbox, MessageSquare, Settings, Users } from 'lucide-react';

import { buildFeatureSeo } from '../seo';
import type { FeaturePageData } from '../types';

const calendarsFaqItems = [
  {
    question: 'Does Calendars sync with Google and Outlook?',
    answer: 'Yes. Calendars integrates with Google and Outlook for consistent scheduling.',
  },
  {
    question: 'Can I manage multiple staff calendars?',
    answer:
      'Each team member has their own calendar. You control hours, services, and availability.',
  },
  {
    question: 'How do reminders work?',
    answer: 'Clients receive automatic confirmations and reminders for their appointments.',
  },
  {
    question: 'Is Calendars mobile-friendly?',
    answer: 'Yes. Clients can book and manage appointments from any device.',
  },
  {
    question: 'Can clients reschedule appointments?',
    answer: 'Yes, clients can easily reschedule or cancel appointments through the booking system.',
  },
  {
    question: 'How do I set up different service types?',
    answer:
      'You can create different services with custom durations, prices, and staff assignments.',
  },
  {
    question: 'What about time zone handling?',
    answer: 'The system automatically handles time zones for accurate scheduling across locations.',
  },
  {
    question: 'Can I block out time for meetings?',
    answer:
      'Yes, you can block time slots for internal meetings, breaks, or other non-booking activities.',
  },
  {
    question: 'How do I handle recurring appointments?',
    answer:
      'The system supports recurring appointments and automated scheduling for regular clients.',
  },
  {
    question: 'What reporting is available?',
    answer: 'Detailed reports on bookings, revenue, staff utilization, and client patterns.',
  },
];

const slug = 'calendars';

export const calendarsData: FeaturePageData = {
  slug,
  seo: buildFeatureSeo({
    slug,
    title: 'Calendars | Structured Online Booking Layer',
    description:
      'Structured online booking integrated into your website system with confirmations, reminders, staff scheduling, and calendar management.',
  }),
  systems: ['smart-website-systems', 'revenue-growth'],
  topics: ['booking-automation'],
  hero: {
    badge: 'Booking Layer',
    title: 'Structured Online Booking Integrated into Your System',
    description:
      'This booking layer lets clients schedule appointments through a clear flow. Booking, confirmations, and calendar management connect directly to your enquiry handling and internal operations.',
    stats: [
      { value: 'Online', label: 'Booking' },
      { value: 'Automated', label: 'Reminders' },
      { value: 'Team', label: 'Calendars' },
      { value: 'Integrated', label: 'Features' },
    ],
  },
  sections: {
    process: {
      badge: 'Simple Process',
      title: 'How Structured Booking Operates',
      description: 'A clear, predictable flow from appointment selection to confirmed booking.',
      steps: [
        {
          number: '01',
          title: 'Online Booking',
          description: 'Clients book appointments online from your website or landing page.',
          iconType: 'primary' as const,
        },
        {
          number: '02',
          title: 'Staff & Service Selection',
          description: 'Clients select a team member and service from available options.',
          iconType: 'secondary' as const,
        },
        {
          number: '03',
          title: 'Automated Reminders',
          description: 'Automatic confirmations and reminders are sent to clients.',
          iconType: 'primary' as const,
        },
        {
          number: '04',
          title: 'Calendar Management',
          description: 'Manage appointments, rescheduling, and cancellations from your dashboard.',
          iconType: 'secondary' as const,
        },
      ],
    },
    benefits: {
      badge: 'Feature Highlights',
      title: 'What Structured Booking Improves',
      description:
        'Structured booking reduces manual coordination, improves scheduling clarity, and connects appointments directly to your wider enquiry and follow-up system.',
      items: [
        {
          icon: Calendar,
          title: 'Book Anytime',
          description: 'Clients can book appointments online at their convenience.',
          iconType: 'primary' as const,
        },
        {
          icon: MessageSquare,
          title: 'Automated Reminders',
          description: 'Automatic confirmations and reminders for every booking.',
          iconType: 'secondary' as const,
        },
        {
          icon: Users,
          title: 'Staff Scheduling',
          description: 'Each team member manages their own calendar.',
          iconType: 'primary' as const,
        },
        {
          icon: Settings,
          title: 'Calendar Sync',
          description: 'Sync with Google and Outlook for consistent scheduling.',
          iconType: 'secondary' as const,
        },
        {
          icon: Inbox,
          title: 'Centralized Management',
          description: 'Manage all bookings from one dashboard.',
          iconType: 'primary' as const,
        },
        {
          icon: Clock,
          title: 'Buffer Time',
          description: 'Add buffer time between appointments for preparation and travel.',
          iconType: 'accent' as const,
        },
      ],
    },
    useCases: {
      badge: 'How Calendars Fits',
      title: 'Structured Booking Within Daily Operations',
      description:
        'See how this booking layer supports daily scheduling while remaining connected to your Smart Website infrastructure.',
      items: [
        {
          icon: Calendar,
          title: 'Daily Scheduling',
          scenario: 'Clients book appointments online and select available times.',
          solution: 'Bookings appear instantly in your calendar and dashboard.',
          result: 'Stay organized and keep track of appointments.',
        },
        {
          icon: Users,
          title: 'Staff Coordination',
          scenario: 'Assign appointments to the right team member based on availability.',
          solution: 'Staff schedules stay synchronized in one shared structure.',
          result: 'Fewer conflicts and smoother daily operations.',
        },
        {
          icon: Inbox,
          title: 'Centralized Management',
          scenario: 'View all bookings in one dashboard.',
          solution: 'Access appointment details and manage follow-up.',
          result: 'Consistent organization.',
        },
      ],
    },
    capabilities: {
      badge: "What's Included",
      title: 'Calendars Features',
      featureCategories: [
        {
          icon: Calendar,
          title: 'Scheduling',
          description: 'Streamlined appointment booking with calendar integration',
          features: [
            'Online appointment booking',
            'Calendar sync with Google/Outlook',
            'Staff and service selection',
            'Automated reminders',
          ],
          iconType: 'accent' as const,
        },
        {
          icon: Settings,
          title: 'Management',
          description: 'Comprehensive calendar management and team coordination',
          features: [
            'Centralized dashboard',
            'Rescheduling and cancellations',
            'Team calendar management',
            'Integration with CRM and messaging',
          ],
          iconType: 'secondary' as const,
        },
        {
          icon: Users,
          title: 'Client Experience',
          description: 'Seamless booking experience for your clients',
          features: [
            'Mobile-friendly booking',
            'Instant confirmations',
            'Easy access to appointment details',
            'Consistent communication',
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
      description: 'Common questions about Calendars',
      items: calendarsFaqItems,
    },
    explore: {
      title: 'Explore Related Features',
      description:
        'Discover how our other features work seamlessly with Calendars to create a complete business solution.',
      cards: [
        {
          icon: MessageSquare,
          title: 'AI Chat',
          description: 'Intelligent conversational AI for instant customer engagement',
          href: '/features/aichat',
        },
        {
          icon: Inbox,
          title: 'CRM',
          description: 'Centralized contact and communication management',
          href: '/features/crm',
        },
        {
          icon: Users,
          title: 'Inbox',
          description: 'Unified communication hub for all your messages',
          href: '/features/inbox',
        },
      ],
    },
  },
  cta: {
    title: 'Review Your Booking Structure',
    description:
      'Tell us how booking is handled now. We will show you where scheduling friction and manual handoffs are slowing appointments down.',
    metaItems: [
      { text: 'Automated booking system' },
      { text: 'Customer notifications' },
      { text: 'Calendar integration' },
    ],
  },
};
