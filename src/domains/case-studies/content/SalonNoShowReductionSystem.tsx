import type { CaseStudyContent, CaseStudyTemplateSection } from '@/domains/case-studies/templates';
import { buildContactHref } from '@/lib/contact/contactHref';

import type { CaseStudyData } from '../types';

function buildSalonNoShowReductionSystem(): CaseStudyData {
  const heroIntroHtml = (
    <>
      Bloom & Co Hair is a four-chair salon in Edinburgh, running five days a week with a mix of
      regular clients and new walk-in bookings. The salon had been experiencing a persistent no-show
      rate of around 18% — roughly 14 missed appointments per week. No-shows disrupted daily
      scheduling, left chairs empty during peak hours, and cost the business an estimated £1,100 per
      week in lost revenue. There was no reminder system in place — clients booked and the salon
      hoped they showed up.
    </>
  );

  const keyMetrics: CaseStudyContent['keyMetrics'] = [
    {
      label: 'No-Show Rate',
      value: '4%',
      icon: 'UserCheck',
      color: 'case-study-accent--success',
    },
    {
      label: 'Recovered Slots',
      value: '11/week',
      icon: 'CalendarCheck',
      color: 'case-study-accent--primary',
    },
    {
      label: 'Revenue Saved',
      value: '£870/wk',
      icon: 'PoundSterling',
      color: 'case-study-accent--amber',
    },
    {
      label: 'Confirmation Rate',
      value: '89%',
      icon: 'CheckCircle2',
      color: 'case-study-accent--purple',
    },
  ];

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'The Problem: Clients Booking and Not Showing Up',
    problemDescription: [
      'Bloom & Co averaged 78 appointments per week. Of those, roughly 14 resulted in no-shows — clients who booked but didn\u2019t arrive and didn\u2019t cancel. The salon had no automated reminders, no confirmation requests, and no cancellation mechanism that triggered in advance.',
      'No-shows clustered on Saturdays and Monday mornings. Saturday no-shows were particularly costly because the salon operated at full capacity and had no time to fill empty slots. Monday morning no-shows often came from the previous week\u2019s bookings where clients had forgotten across the weekend. Empty chairs during peak hours meant stylists stood idle while the salon lost revenue it could not recover.',
    ],
    painPoints: [
      '18% no-show rate — 14 missed appointments per week',
      'No appointment reminders sent to clients after booking',
      'Saturday no-shows unfillable due to fully booked schedules',
      'Monday morning no-shows from bookings made the previous week',
      'Estimated £1,100/week in lost revenue from empty chairs',
      'Stylists frustrated by idle time during peak-hour gaps',
      'No advance cancellation process to free up slots for waitlisted clients',
    ],
  };

  const solutionSection: CaseStudyTemplateSection = {
    type: 'solution',
    solutionHeading: 'The System: Multi-Touch Reminder Sequences With Cancellation Recovery',
    solutionDescription:
      'The implementation built an automated reminder pipeline that confirmed each appointment at multiple intervals and triggered a cancellation-recovery workflow when clients cancelled in advance — turning potential no-shows into reallocated slots.',
    whatWeDid: [
      {
        title: 'Booking Confirmation Message',
        description:
          'Sent an immediate SMS and email confirmation at the moment of booking, establishing the appointment in the client\u2019s schedule.',
        icon: 'CheckCircle',
      },
      {
        title: '48-Hour Advance Reminder',
        description:
          'Triggered a reminder 48 hours before the appointment with a one-tap confirmation button and an easy cancellation link.',
        icon: 'Bell',
      },
      {
        title: 'Same-Day Morning Reminder',
        description:
          'Sent a final reminder at 8 AM on the day of the appointment with the time, stylist name, and salon address.',
        icon: 'Clock',
      },
      {
        title: 'Cancellation Recovery Workflow',
        description:
          'When clients cancelled via the reminder link, the slot was instantly released and a waitlisted client received an automated offer to fill it.',
        icon: 'RefreshCw',
      },
      {
        title: 'No-Show Tracking & Tagging',
        description:
          'Clients who no-showed were tagged in the CRM. Repeat no-shows triggered a deposit requirement for future bookings.',
        icon: 'AlertTriangle',
      },
    ],
  };

  const workflowsSection: CaseStudyTemplateSection = {
    type: 'workflows',
    badge: 'Reminder Workflow',
    title: 'Appointment Confirmation & Recovery Flow',
    description: 'The automated sequence from booking through to show-up or cancellation recovery.',
    workflows: [
      {
        trigger: 'Client books an appointment (online or phone)',
        actions: [
          'Instant SMS + email booking confirmation sent',
          'Reminder scheduled for 48 hours before appointment',
          'Same-day 8 AM reminder scheduled',
        ],
      },
      {
        trigger: 'Client taps "Cancel" on 48-hour reminder',
        actions: [
          'Appointment cancelled and slot released',
          'Waitlisted clients receive SMS with available slot offer',
          'First waitlisted client to respond gets the slot automatically',
        ],
      },
    ],
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        metric: 'No-Show Rate',
        before: '18% — 14 no-shows per week out of 78 appointments',
        after: '4% — 3 no-shows per week out of 82 appointments',
        improvement: '78% reduction',
        description:
          'The multi-touch reminder sequence dramatically reduced forgotten appointments. Most clients confirmed via the 48-hour reminder, and those who couldn\u2019t make it cancelled with enough time to fill the slot.',
      },
      {
        metric: 'Recovered Appointment Slots',
        before: 'No advance cancellation process — no-shows created unfillable gaps',
        after: '11 previously-lost slots recovered per week through cancellation waitlisting',
        improvement: '11 slots/week saved',
        description:
          'The cancellation link in reminders encouraged clients to cancel early rather than simply not showing up. Waitlisted clients filled most of those released slots.',
      },
      {
        metric: 'Weekly Revenue Saved',
        before: '£1,100/week lost to no-shows',
        after: '£230/week lost (3 remaining no-shows)',
        improvement: '£870/week recovered',
        description:
          'Reducing no-shows from 14 to 3 per week, combined with the waitlist filling cancelled slots, recovered an estimated £870 per week in otherwise-lost revenue.',
      },
      {
        metric: 'Reminder Confirmation Rate',
        before: 'No reminders sent — 0% confirmation',
        after: '89% of clients confirmed via the 48-hour reminder',
        improvement: '89% active confirmation',
        description:
          'The one-tap confirmation gave the salon confidence that booked clients were actually coming. Unconfirmed appointments were flagged for proactive follow-up.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Tired of Empty Chairs From No-Shows?',
    body: 'Book a free 20-minute call and we\u2019ll show you how an automated reminder and recovery system could reduce no-shows and recover lost revenue for your salon.',
  };

  const sections: CaseStudyTemplateSection[] = [
    { type: 'hero', introHtml: heroIntroHtml },
    problemSection,
    workflowsSection,
    solutionSection,
    resultsSection,
    { type: 'more' },
    ctaSection,
  ];

  return {
    slug: 'salon-no-show-reduction-system',
    title: 'Salon No-Show Reduction System',
    metaTitle: 'Why Salon Clients Miss Appointments (And the Automation That Reduced No-Shows)',
    metaDescription:
      'How an Edinburgh hair salon reduced no-shows from 18% to 4% and recovered £870 per week using automated reminder sequences and cancellation-triggered waitlist recovery.',
    industryCategory: 'beauty-personal-care',
    industryLabel: 'Beauty & Personal Care',
    industries: ['hair-salon'],
    systems: ['crm-automation', 'revenue-growth'],
    topics: ['no-show-reduction', 'booking-automation'],
    publishDate: '2026-01-01',
    client: 'Bloom & Co Hair',
    location: 'Edinburgh, UK',
    business: 'Bloom & Co Hair',
    duration: '7 weeks',
    completedDate: 'January 2026',
    heroHeadline: 'How a Hair Salon Reduced No-Shows From 18% to 4% and Recovered £870 Per Week',
    keyMetrics: keyMetrics.map(metric => ({
      value: metric.value,
      label: metric.label,
      ...(metric.color ? { color: metric.color } : {}),
    })),
    tags: [
      'No-Show Reduction',
      'Appointment Reminders',
      'Hair Salon',
      'CRM Automation',
      'Waitlist Recovery',
    ],
    seo: {
      canonical: '/case-study/salon-no-show-reduction-system',
      openGraph: {
        title: 'Why Salon Clients Miss Appointments | MindWP Case Study',
        description:
          'How an Edinburgh hair salon reduced no-shows from 18% to 4% and recovered £870 per week.',
      },
    },
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'Operational Problem' },
      problem: { challengeBadgeLabel: 'The No-Show Problem' },
      workflows: { workflowsBadgeLabel: 'Reminder Workflow' },
      solution: { solutionBadgeLabel: 'System Implementation' },
      results: {
        detailedResultsBadgeLabel: 'Measured Results',
        detailedResultsSectionTitle: 'Before & After: No-Show Performance',
      },
      cta: {
        metaItems: [
          { text: 'Free 20-minute call' },
          { text: 'No contracts' },
          { text: 'Built for salons' },
        ],
      },
    },
  };
}

export const salonNoShowReductionSystem: CaseStudyData = buildSalonNoShowReductionSystem();
