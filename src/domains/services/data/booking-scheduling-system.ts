import { Bell, Calendar, Clock, MessageSquare, MousePointerClick, Workflow } from 'lucide-react';

import type { ServicePageData } from '../types';

export const bookingSchedulingSystemPage = {
  slug: 'booking-scheduling-system',
  systems: ['smart-website-systems', 'ai-lead-handling'],
  topics: ['booking-automation', 'no-show-reduction'],
  keywords: [
    'booking automation system for service business',
    'appointment scheduling system',
    'website booking workflow',
    'booking confirmation automation',
    'appointment reminder automation',
  ],
  badge: 'Booking & Scheduling System',
  category: 'Operational Systems',
  seo: {
    title: 'Booking & Scheduling System | Clearer appointment flow for service businesses',
    description:
      'Booking and scheduling systems for service businesses that need cleaner appointment flow, better confirmations and reminders, and fewer missed or delayed bookings.',
    canonical: '/services/booking-scheduling-system',
    schema: {
      service: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Booking and scheduling system for service businesses',
        description:
          'A structured booking and scheduling system for service businesses, covering appointment flow, confirmations, reminders, admin handoff, and reduced scheduling friction.',
        provider: {
          '@type': 'Organization',
          name: 'MindWP',
        },
        areaServed: 'UK',
        url: '/services/booking-scheduling-system',
      },
    },
  },
  hero: {
    badge: 'Appointment Flow Infrastructure',
    title: 'A booking system should make the next step easier, not add more admin around it',
    description:
      'This service fixes the path from enquiry to confirmed appointment. Consultation requests, confirmations, reminders, and staff handoff all work together so more interest turns into booked appointments.',
    primaryAction: {
      label: 'Automate Your Booking System',
      href: '/contact?system=smart-website-systems&source=service/booking-scheduling-system',
    },
    list: [
      'Cleaner flow from website to confirmed appointment',
      'Structured reminder and follow-up logic',
      'Less scheduling friction for staff and customers',
    ],
    cssPrefix: 'booking-scheduling-hero',
    backgroundColor: 'bg-gradient-surface-muted',
  },
  sections: {
    foundation: {
      badge: 'Why booking flow breaks down',
      title: 'Most appointment friction happens after interest is already there',
      description:
        'The enquiry may already be warm. The problem is that the booking path, confirmation process, or internal handoff still feels loose.',
      currentStateLabel: 'Without a clear booking path',
      structuredStateLabel: 'With a structured booking flow',
      painPoints: [
        {
          before: 'People want to book, but the process is unclear or inconsistent.',
          after:
            'The next step is clearer, so more enquiries turn into real appointments without unnecessary back-and-forth.',
        },
        {
          before: 'Staff confirm bookings manually with no structured reminder or handoff process.',
          after:
            'Confirmations, reminders, and internal ownership are structured so appointments are less likely to drift or get missed.',
        },
        {
          before:
            'The website collects interest, but the scheduling process still feels disconnected.',
          after:
            'The booking path is tied more closely to the website, the team workflow, and the appointment outcome.',
        },
      ],
    },
    bookingLayer: {
      badge: 'Core system layers',
      title: 'What a booking and scheduling system usually needs',
      description:
        'The exact setup varies by business, but the system usually needs clearer handling across three practical areas: booking flow, confirmation logic, and internal handoff.',
      cards: [
        {
          title: 'Booking path and slot request flow',
          description:
            'Help the right person request or choose the right appointment type without confusion or unnecessary friction.',
          points: [
            'Clear appointment pathways',
            'Relevant booking options',
            'Cleaner website-to-scheduling flow',
          ],
          featured: true,
        },
        {
          title: 'Confirmation and reminder logic',
          description:
            'Reduce forgotten bookings and admin chasing by structuring confirmations, reminders, and next-step messaging properly.',
          points: ['Confirmation messages', 'Reminder timing', 'Pre-appointment expectations'],
        },
        {
          title: 'Internal admin and handoff flow',
          description:
            'Make sure the booking is visible to the right person, with enough context to avoid delays, mistakes, or double-handling.',
          points: [
            'Appointment ownership',
            'Calendar or admin visibility',
            'Context for follow-up and fulfilment',
          ],
        },
      ],
    },
    positioning: {
      badge: 'Positioning',
      title: 'Appointment friction often sits close to revenue',
      description:
        'This is not just a calendar feature. It is a system for moving people from interest to confirmed appointment more cleanly, with less admin mess and fewer avoidable drop-offs.',
      tagline: 'Make the booking step easier to complete and easier to manage.',
      narrativeTitle:
        'A cleaner appointment flow can improve conversion without changing the business model',
      narrativeParagraphs: [
        'For many local and consultation-led businesses, the booking stage is where momentum is either protected or lost. If people cannot book clearly, confirm quickly, or feel confident about what happens next, warm leads often go cold.',
        'That is why a booking system can be valuable on its own. It also connects naturally into Smart Website, AI Lead Handling, and Revenue Growth work when the business needs a broader system later.',
      ],
      features: [
        {
          title: 'Cleaner appointment conversion',
          description:
            'More people complete the next step because the booking process makes sense and removes unnecessary friction.',
          icon: MousePointerClick,
        },
        {
          title: 'Fewer missed or delayed appointments',
          description:
            'Reminders and clearer ownership help reduce avoidable booking errors, delays, and no-shows.',
          icon: Clock,
        },
        {
          title: 'Better operational continuity',
          description:
            'The booking outcome is easier for the team to see, manage, and carry forward into the actual service delivery.',
          icon: Workflow,
        },
      ],
    },
    processSection: {
      badge: 'How it works',
      title: 'How the booking system is usually structured',
      description:
        'The exact setup depends on the business model, but a useful booking system follows a simple sequence from intent to confirmed appointment.',
      steps: [
        {
          number: '1',
          title: 'Define the booking paths',
          description:
            'Clarify what kinds of appointments exist, how they should be requested, and what details are needed.',
        },
        {
          number: '2',
          title: 'Set confirmation and reminder rules',
          description:
            'Create the right confirmation, reminder, and follow-up messages for each appointment flow.',
        },
        {
          number: '3',
          title: 'Connect handoff and visibility',
          description:
            'Make sure the booking reaches the right person or system with enough context for action.',
        },
        {
          number: '4',
          title: 'Refine around drop-off and no-show points',
          description:
            'Watch where friction happens and improve the process over time instead of treating it as fixed.',
        },
      ],
    },
    capabilitySection: {
      badge: 'Common components',
      title: 'What can sit inside a booking and scheduling setup',
      description:
        'Not every business needs every layer, but these are the typical components that improve appointment flow and reduce scheduling friction.',
      services: [
        {
          title: 'Booking flow and appointment options',
          icon: Calendar,
          items: [
            'Consultation or service booking pathways',
            'Appointment-type logic',
            'Website booking forms or flows',
            'Clearer slot request handling',
          ],
        },
        {
          title: 'Confirmation and reminder workflows',
          icon: Bell,
          items: [
            'Confirmation messages',
            'Appointment reminder timing',
            'Pre-appointment instructions',
            'Follow-up when bookings are incomplete',
          ],
        },
        {
          title: 'Operational handoff and support',
          icon: MessageSquare,
          items: [
            'Admin visibility on bookings',
            'Internal notifications',
            'Scheduling context for the team',
            'Search-friendly flow for local service users',
          ],
        },
      ],
    },
    qualification: {
      title: 'Who this is designed for',
      description:
        'This works best for businesses where appointment flow directly affects whether leads convert and whether delivery stays organised.',
      strongFitTitle: 'Strong fit',
      notDesignedTitle: 'Not designed for',
      strongFitItems: [
        {
          title: 'Consultation-led and appointment-led businesses',
          description:
            'A strong fit where people need to request, confirm, or manage appointments before revenue is secured.',
        },
        {
          title: 'Businesses with no-show or admin-friction issues',
          description:
            'Useful when bookings exist already but confirmations, reminders, or handoff are creating avoidable loss.',
        },
        {
          title: 'Teams that want a focused operational fix first',
          description:
            'A valid entry point when appointment flow is the immediate bottleneck, even before wider CRM or AI work.',
        },
      ],
      notDesignedItems: [
        {
          title: 'Businesses where bookings are not central to conversion',
          description:
            'If the business model does not depend on appointments, another operational page may be a stronger fit.',
        },
        {
          title: 'Teams expecting a calendar widget alone to solve conversion problems',
          description:
            'The page is about the wider appointment workflow, not just embedding a tool.',
        },
        {
          title: 'Businesses with bigger trust or visibility problems first',
          description:
            'If discovery or credibility is the larger issue, Local SEO, reputation, or website clarity may need to lead.',
        },
      ],
    },
    faqSection: {
      badge: 'FAQ',
      title: 'Common questions about booking systems',
      description:
        'Questions that come up when businesses want a cleaner appointment flow without adding more admin confusion.',
      faqs: [
        {
          question: 'Can this work if we do not want full self-serve booking?',
          answer:
            'Yes. Some businesses want full online booking, while others want consultation requests, slot enquiries, or assisted scheduling. The system can support either approach.',
        },
        {
          question: 'Is this mainly about reducing no-shows?',
          answer:
            'That is often one benefit, but the wider goal is cleaner appointment conversion, clearer confirmation logic, and better internal handling around the booking itself.',
        },
        {
          question: 'How is this different from AI Lead Handling?',
          answer:
            'AI Lead Handling focuses on first response and routing. Booking & Scheduling focuses more specifically on the appointment workflow after someone is ready to move toward a slot, consultation, or scheduled next step.',
        },
      ],
      cssPrefix: 'booking-scheduling-faq',
    },
  },
  related: {
    variant: 'domain-only',
    title: 'Related booking, response, and growth pages',
    description:
      'Booking flow often connects closely with lead handling, website structure, and later-stage revenue systems.',
  },
  cta: {
    title: 'Make the booking step work properly',
    description:
      'Tell us how appointments are booked now. We will show you where friction, reminder gaps, and admin confusion are slowing conversion.',
    buttonText: 'Automate Your Booking System',
    buttonHref: '/contact?system=smart-website-systems&source=service/booking-scheduling-system',
  },
} satisfies ServicePageData;
