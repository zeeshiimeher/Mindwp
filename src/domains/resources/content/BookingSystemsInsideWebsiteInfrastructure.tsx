import { Calendar, Clock, Settings } from 'lucide-react';

import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'booking-systems-inside-website-infrastructure';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'Booking systems inside website infrastructure means your calendar, availability, confirmations, and reminders are part of your website architecture — not a separate platform. When a visitor books, the data flows into CRM, triggers confirmations, and creates pipeline entries without leaving your system.',
  problem:
    'Your booking system lives on a separate platform from your website and CRM, creating data silos, manual transfer, and disconnected customer experiences',
  promise:
    'You will understand how to integrate booking infrastructure into your website so appointments flow directly into your CRM pipeline with automated confirmations and reminders',
};

const takeaways = [
  'Booking should be embedded in website pages, not linked to external platforms',
  'Every booking must create a CRM record with service type and source tracking',
  'Automated confirmations and reminders should trigger from the booking event',
  'Booking data must flow into pipeline tracking for revenue visibility',
];

const problem = {
  description: [
    'Most service businesses use standalone booking tools — Calendly, Acuity, or similar platforms — that live outside the website. Visitors click a link that takes them to a different domain to book. The booking data stays in the scheduling platform. Someone manually checks the calendar and enters information into the CRM.',
    'This separation creates friction at every step. The visitor leaves your website to book, reducing completion rates. The booking data does not carry website context (source page, UTM parameters). CRM records must be created manually. Follow-up automation cannot trigger because the booking system and CRM are disconnected.',
  ],
  causes: [
    'Booking platform selected for standalone features instead of integration capability',
    'Calendar widget links to external domain instead of embedding on service pages',
    'Booking data stays in scheduling platform, not synced to CRM',
    'No source tracking passed from website page to booking record',
    'Confirmations and reminders managed separately from CRM communication',
    'No pipeline stage update triggered by booking event',
  ],
};

const comparison = {
  before: {
    title: 'Standalone Booking Platform',
    items: [
      'Booking link redirects to external scheduling site',
      'Booking data lives in separate platform database',
      'CRM record created manually after booking',
      'No source tracking from website to booking',
      'Confirmations sent from booking platform only',
      'Pipeline stage updated manually',
    ],
  },
  after: {
    title: 'Integrated Booking Infrastructure',
    items: [
      'Booking calendar embedded directly on service pages',
      'Booking creates CRM record with full context automatically',
      'Source page, service type, and UTM data attached to booking',
      'CRM automation triggers on booking event',
      'Unified confirmations and reminders from single system',
      'Pipeline stage updates automatically on booking',
    ],
  },
};

const solutions = [
  {
    title: 'Page-Embedded Booking Calendars',
    description:
      'Booking calendars appear directly on service pages without redirecting visitors to external platforms. The calendar inherits page context — service type, source tracking — and passes it to CRM when the appointment is confirmed.',
    icon: Calendar,
  },
  {
    title: 'CRM-Connected Appointment Flow',
    description:
      'Every booking creates a CRM contact record (or updates an existing one) with: service type, appointment date, source page, and marketing channel. The CRM pipeline stage moves to "Booked" automatically. Follow-up sequences adjust based on the booking status.',
    icon: Settings,
  },
  {
    title: 'Automated Confirmation and Reminders',
    description:
      'Booking confirmation, 24-hour reminders, and day-of reminders send automatically from the same system that manages your CRM communication. No separate reminder tool needed. If a customer reschedules, the CRM record and pipeline stage update accordingly.',
    icon: Clock,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Embed Your Booking Calendar on Service Pages',
      action:
        'Instead of linking to an external booking page, embed the calendar widget directly on your highest-traffic service page. If your booking platform supports embed codes, place the calendar after the service description and social proof sections.',
      expectedResult:
        'Visitors book without leaving your website, reducing drop-off and maintaining the page context for tracking purposes.',
    },
    {
      step: 2,
      title: 'Connect Bookings to CRM Records',
      action:
        'Set up a webhook or integration between your booking platform and CRM. When someone books, the integration should create or update a CRM contact with: name, email, phone, service type, appointment date, and source page. Test by making a booking and verifying the CRM record.',
      expectedResult:
        'Booked appointments appear in your CRM with full context, enabling pipeline tracking from booking through job completion.',
    },
    {
      step: 3,
      title: 'Set Up Automated Booking Confirmations',
      action:
        'Configure automated SMS and email confirmations that trigger immediately on booking. Add a 24-hour reminder and a 1-hour reminder. If your booking platform handles reminders, ensure they include your branding and any preparation instructions for the customer.',
      expectedResult:
        'Every booked customer receives consistent confirmations and reminders, reducing no-shows and improving customer experience.',
    },
  ],
};

const caseExample = {
  businessType: 'Hair Salon (Edinburgh)',
  problem:
    'A hair salon used a standalone booking platform that required customers to leave the website. 30% of visitors who clicked the booking link did not complete the booking. CRM records were created manually by reception staff. No source tracking existed — the salon could not tell which website pages or marketing campaigns produced bookings.',
  solution:
    'We integrated the booking system directly into the website: calendar embedded on each service page, booking data flowing to CRM with service type and source tracking, automated confirmations and reminders via SMS, and pipeline stage updates triggered by booking events.',
  result:
    'Booking completion rate increased from 70% to 89%. No-show rate dropped from 15% to 6% with automated reminders. The salon discovered that their colour service page produced 3x more revenue per booking than their general appointment page.',
  stat: '27% increase in booking completion with embedded calendar infrastructure',
};

const faqs = [
  {
    question: 'Should I replace my current booking platform?',
    answer:
      'Not necessarily. If your current platform supports webhooks and embed widgets, you can integrate it. The key requirement is that booking data can flow to your CRM automatically. If your platform cannot support this, a replacement that offers native CRM integration will save time long term.',
  },
  {
    question: 'How do I handle different appointment types on one page?',
    answer:
      'Your embedded calendar should allow service type selection. The visitor picks their service, sees available times for that service, and books. The service type passes to CRM for pipeline routing. Most booking platforms support multiple appointment types within a single widget.',
  },
  {
    question: 'What about group bookings or multi-staff scheduling?',
    answer:
      'Integrated booking systems can handle staff-specific calendars and multi-staff availability. The architecture is the same — booking data flows to CRM with staff assignment included. Complex scheduling needs require a booking platform with advanced calendar management.',
  },
  {
    question: 'Should confirmations and reminders come from the booking tool or the CRM?',
    answer:
      'Use whichever system is the source of truth for the appointment, but keep the CRM updated in real time. In many setups, the booking platform sends operational confirmations while the CRM handles broader follow-up and pipeline automation. The important thing is that customers do not receive duplicate or conflicting messages from two systems at once.',
  },
  {
    question: 'What if I do not want to show live availability on every page?',
    answer:
      'You can still use booking infrastructure without exposing the full calendar everywhere. Some businesses use a "request a slot" flow on high-consideration pages and reserve live booking for routine services or returning clients. The system architecture is the same as long as the chosen path still feeds structured booking intent into the CRM.',
  },
];

const finalCta = {
  title: 'Integrate Booking Into Your Website Infrastructure',
  description:
    'Our Smart Website Systems include embedded booking calendars connected to CRM, automated confirmations, and pipeline tracking. Every appointment flows into your business system automatically.',
};

export const bookingSystemsInsideWebsiteInfrastructure: ResourceData = {
  slug,
  title: 'Booking Systems Inside Website Infrastructure',
  description:
    'Learn how to integrate booking systems into your website architecture so appointments flow directly into CRM with automated confirmations, reminders, and pipeline tracking.',
  category: 'smart-website-systems',
  publishedAt: '2025-11-17',
  systems: ['smart-website-systems'],
  industries: [],
  topics: ['booking-systems', 'booking-automation'],
  primaryService: 'smart-website-systems',
  seo: {
    title: 'Booking Systems Inside Website Infrastructure',
    description:
      'Learn how to integrate booking systems into your website architecture so appointments flow directly into CRM with automated confirmations, reminders, and pipeline tracking.',
    canonical,
  },
  sections: [
    {
      type: 'hero',
      heading: 'Booking Systems Inside Website Infrastructure',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'problem',
      heading: 'The Problem With Standalone Booking Platforms',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Common Booking Infrastructure Problems:',
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Core principles of integrated booking infrastructure:'],
      items: takeaways,
    },
    {
      type: 'case',
      heading: 'Real-World Example',
      content: ['How integrated booking transformed a hair salon operation:'],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The System',
      resultHeading: 'The Outcome',
    },
    {
      type: 'comparison',
      heading: 'Standalone vs Integrated Booking Systems',
      content: ['The operational difference between disconnected and integrated booking:'],
      before: comparison.before,
      after: comparison.after,
    },
    {
      type: 'solution-cards',
      heading: 'Integrated Booking Architecture',
      content: [
        'Booking as Infrastructure',
        'When booking is part of your website system, every appointment connects to your business pipeline:',
      ],
      benefit:
        'Integrated booking eliminates manual data entry, reduces no-shows with automated reminders, and gives you revenue visibility from website visit through completed job.',
      solutions,
    },
    {
      type: 'diy',
      heading: 'Start Integrating Your Booking System',
      content: ['These steps connect your booking system to your website and CRM:'],
      steps: diy.steps,
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      content: ['Common questions about integrated booking systems:'],
      items: faqs,
    },
    {
      type: 'cta',
      heading: finalCta.title,
      content: [finalCta.description],
    },
    {
      type: 'related-resources',
      heading: getRelatedResourcesHeading('smart-website-systems'),
      content: getRelatedResourcesContent('smart-website-systems'),
      resources: getRelatedResources('smart-website-systems', canonical),
    },
  ],
};
