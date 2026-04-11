import { Bell, Calendar, Clock, MessageSquare, MousePointerClick, Workflow } from 'lucide-react';


import { buildServiceSeo } from '../seo';
import type { ServicePageData } from '../types';

const slug = 'booking-scheduling-system';

export const bookingSchedulingSystemPage = {
  slug,
  systems: ['smart-website-systems'],
  topics: ['booking-automation', 'no-show-reduction', 'service-reminders'],
  keywords: [
    'booking automation system for service business',
    'appointment scheduling system',
    'website booking workflow',
    'booking confirmation automation',
    'appointment reminder automation',
  ],
  badge: 'Booking & Scheduling System',
  category: 'Operational Systems',
  seo: buildServiceSeo({
    slug,
    title: 'Booking & Scheduling System for Service Businesses | MindWP',
    description:
      'Stop losing bookings to friction, forgotten confirmations, and messy handoff. A structured booking system that turns interest into confirmed appointments.',
    schemaName: 'Booking and scheduling system for service businesses',
    schemaDescription:
      'Structured booking and scheduling systems for service businesses — covering appointment flow, confirmations, reminders, admin handoff, and reduced scheduling friction.',
  }),
  hero: {
    badge: 'Booking & Scheduling System',
      title: 'Booking Systems That Turn Interest Into Confirmed Appointments',
    description:
      'The interest is there. But the booking path is unclear, confirmations are manual, reminders are inconsistent, and nobody is sure who owns what. A structured booking system fixes the path from enquiry to confirmed appointment.',
    list: [
        'Easy Booking',
        'Auto Reminders',
        'Fewer No Shows',
    ],
    cssPrefix: 'booking-scheduling-hero',
    backgroundColor: 'bg-gradient-surface-muted',
  },
  sections: {
    foundation: {
      badge: 'Why booking flow breaks down',
      title: 'The interest is already there. The booking step kills it.',
      description:
        'Most appointment friction happens after someone has already decided they want to move forward. The problem is what comes next.',
      currentStateLabel: 'Without a clear booking path',
      structuredStateLabel: 'With a structured booking flow',
      painPoints: [
        {
          before: 'People want to book but the process is unclear — they wait, chase, or give up.',
          after:
            'The next step is obvious and friction-free. More enquiries turn into real appointments without unnecessary back-and-forth.',
        },
        {
          before: 'Staff confirm bookings manually and reminders are inconsistent or nonexistent.',
          after:
            'Confirmations, reminders, and internal ownership are handled automatically so appointments are less likely to drift or get missed.',
        },
        {
          before:
            'The website collects interest but the scheduling process feels disconnected from everything else.',
          after:
            'The booking path is connected to the website, the team workflow, and the appointment outcome.',
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
      badge: 'What changes',
      title: 'What changes when the booking step actually works',
      description:
        'This is not a calendar widget. It is a system for moving people from interest to confirmed appointment with less friction, less admin, and fewer avoidable drop-offs.',
      tagline: 'Make the booking step easier to complete and easier to manage.',
      narrativeTitle:
        'A cleaner appointment flow improves conversion without changing the business model',
      narrativeParagraphs: [
        'For consultation-led and appointment-led businesses, the booking stage is where momentum is either protected or lost. If people cannot book clearly, confirm quickly, or feel confident about what happens next, warm leads go cold.',
        'That is why a booking system can be valuable on its own. It also connects naturally into Smart Website, AI Lead Handling, and CRM work when the business needs a broader system.',
      ],
      features: [
        {
          title: 'More appointments from the same interest',
          description:
            'More people complete the next step because the booking process is clear and removes unnecessary friction.',
          icon: MousePointerClick,
        },
        {
          title: 'Fewer missed or delayed appointments',
          description:
            'Reminders and clearer ownership reduce avoidable no-shows, delays, and booking errors.',
          icon: Clock,
        },
        {
          title: 'Better operational handoff',
          description:
            'The booking outcome is visible to the right person with enough context to follow through.',
          icon: Workflow,
        },
      ],
    },
    processSection: {
      badge: 'How it works',
      title: 'How a booking system gets built',
      description:
        'The setup depends on the business model, but the structure follows a clear sequence from intent to confirmed appointment.',
      steps: [
        {
          number: '1',
          title: 'Define the booking paths',
          description:
            'Clarify what kinds of appointments exist, how they should be requested, and what details are needed upfront.',
        },
        {
          number: '2',
          title: 'Set confirmation and reminder logic',
          description:
            'Build the right confirmation, reminder, and follow-up messages for each appointment type.',
        },
        {
          number: '3',
          title: 'Connect handoff and internal visibility',
          description:
            'Make sure bookings reach the right person with enough context to take action without chasing.',
        },
        {
          number: '4',
          title: 'Improve based on drop-off and no-show data',
          description:
            'Watch where friction happens and tighten the process over time instead of treating it as fixed.',
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
      title: 'Is this the right fit for your business?',
      description:
        'This works best for businesses where appointment flow directly affects whether leads convert and whether delivery stays organised.',
      strongFitTitle: 'Strong fit if',
      notDesignedTitle: 'Not the right fit if',
      strongFitItems: [
        {
          title: 'People need to book before you can deliver',
          description:
            'Consultations, appointments, or scheduled calls are a core part of how conversions happen.',
        },
        {
          title: 'You are losing bookings to no-shows or admin friction',
          description:
            'Bookings exist already but confirmations, reminders, or handoff are creating avoidable loss.',
        },
        {
          title: 'You want a focused operational fix before wider system work',
          description:
            'Appointment flow is the immediate bottleneck and you want that sorted before tackling CRM, AI, or visibility.',
        },
      ],
      notDesignedItems: [
        {
          title: 'Bookings are not central to how you convert',
          description:
            'If the business model does not depend on appointments, another operational focus may be a better starting point.',
        },
        {
          title: 'You think a calendar widget alone will solve this',
          description:
            'The problem is usually the wider workflow around the booking, not just the scheduling tool itself.',
        },
        {
          title: 'Trust or visibility is the bigger gap',
          description:
            'If people are not finding or trusting the business in the first place, Local SEO or reputation work may need to come first.',
        },
      ],
    },
    comparison: {
      header: {
        title: 'Manual scheduling vs a structured booking system',
        description:
          'Most businesses handle bookings through back-and-forth messages, memory, and manual reminders. Here is what that costs.',
      },
      items: [
        {
          type: 'before' as const,
          title: 'Manual scheduling',
          items: [
            'Booking requires back-and-forth texts or calls to agree on a time',
            'Confirmations sent manually if at all',
            'No structured reminders — no-shows happen regularly',
            'Staff do not know who booked what until someone checks',
            'Cancellations and reschedules create confusion and double-handling',
          ],
        },
        {
          type: 'after' as const,
          title: 'Structured booking system',
          items: [
            'Clear booking paths that customers can complete without chasing',
            'Automatic confirmations sent immediately after booking',
            'Structured reminders reduce no-shows and late cancellations',
            'Internal visibility so the right person sees every booking',
            'Cancellations and reschedules handled within the system with clear ownership',
          ],
        },
      ],
    },
    proof: {
      header: {
        title: 'What this looks like when it is running',
        description:
          'A consultation-led business was losing bookings to friction, forgotten confirmations, and manual scheduling that relied on back-and-forth messages.',
      },
      cards: [
        {
          title: 'Before: warm leads going cold at the booking step',
          description: 'The business was generating strong interest but losing a significant portion of leads during the appointment booking process. Scheduling was manual, confirmations were inconsistent, and no-shows were common.',
          points: [
            'Booking required multiple messages to agree on a time',
            'No structured reminders — frequent no-shows and late cancellations',
            'Staff had no central view of upcoming appointments',
          ],
        },
        {
          title: 'What we built: structured booking with reminders and handoff',
          description: 'We set up a structured booking flow connected to the website, automated confirmations and reminders, and internal notifications so the team could see every upcoming appointment.',
          points: [
            'Online booking paths connected to the website',
            'Automatic confirmations and timed reminder sequences',
            'Internal notifications with appointment context for the team',
          ],
          featured: true,
        },
        {
          title: 'After: more confirmed appointments, fewer no-shows',
          description: 'Booking completion improved because the process was easier. No-shows dropped because reminders went out consistently. The team spent less time on scheduling admin and more time on delivery.',
          points: [
            'Booking completion rate improved measurably',
            'No-show rate dropped with structured reminder sequences',
            'Team admin time on scheduling reduced significantly',
          ],
        },
      ],
    },
    faqSection: {
      badge: 'FAQ',
      title: 'Common questions about booking systems',
      description:
        'Practical questions from businesses that want a cleaner appointment flow without adding more admin complexity.',
      faqs: [
        {
          question: 'Can this work if we do not want full self-serve booking?',
          answer:
            'Yes. Some businesses want full online booking, others want consultation requests or assisted scheduling. The system supports either approach.',
        },
        {
          question: 'Is this mainly about reducing no-shows?',
          answer:
            'That is often one benefit. But the wider goal is cleaner appointment conversion, better confirmation logic, and less admin friction around the booking itself.',
        },
        {
          question: 'How is this different from AI Lead Handling?',
          answer:
            'AI Lead Handling focuses on first response and routing. Booking & Scheduling focuses specifically on the appointment workflow after someone is ready to move toward a slot, consultation, or scheduled next step.',
        },
        {
          question: 'Can this connect to our existing calendar or CRM?',
          answer:
            'Yes. We configure the booking flow to connect with your existing tools so bookings, notifications, and follow-up stay in one system.',
        },
      ],
      cssPrefix: 'booking-scheduling-faq',
    },
  },
  inlineCta: {
    title: 'Losing appointments to friction and no-shows?',
    description:
      'Tell us how bookings work now. We will show you where the process is losing people and what a structured booking system would change.',
  },
  cta: {
    title: 'Make the booking step work properly',
    description:
      'Tell us how appointments are booked today. We will show you where friction, forgotten confirmations, and admin confusion are costing you conversions.',
  },
} satisfies ServicePageData;
