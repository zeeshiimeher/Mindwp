import type { CaseStudyContent, CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildAppointmentReminderNoShowReduction(): CaseStudyData {
  const heroIntroHtml = (
    <>
      Elm Street Dental is an NHS dental practice in Northampton with two dentists and one
      hygienist. The practice had a persistent no-show rate of 16% — roughly 26 missed appointments
      per week out of 160 scheduled. No-shows left chairs empty, wasted allocated treatment time,
      and cost the practice an estimated £1,950 per week in lost appointment revenue. The practice
      sent no reminders — patients received a booking confirmation at the time of scheduling and
      nothing further until they were expected to arrive. There was no cancellation mechanism that
      allowed patients to free up their slot in advance.
    </>
  );

  const keyMetrics: CaseStudyContent['keyMetrics'] = [
    {
      label: 'No-Show Rate',
      value: '16% → 5%',
      icon: 'UserCheck',
      color: 'case-study-accent--success',
    },
    {
      label: 'Revenue Recovered',
      value: '£1.4k/wk',
      icon: 'PoundSterling',
      color: 'case-study-accent--amber',
    },
    {
      label: 'Cancellation Recovery',
      value: '72%',
      icon: 'CalendarCheck',
      color: 'case-study-accent--primary',
    },
    {
      label: 'Confirmation Rate',
      value: '91%',
      icon: 'CheckCircle2',
      color: 'case-study-accent--purple',
    },
  ];

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'The Problem: Patients Forgetting Appointments With No System to Prevent It',
    problemDescription: [
      'Elm Street Dental\u2019s appointment schedule ran at capacity most days. With two dentists and one hygienist, the practice had minimal buffer for no-shows. When patients didn\u2019t arrive, the chair sat empty for the allocated treatment time — typically 20\u201340 minutes depending on the procedure. There was no waitlist system to fill those gaps.',
      'Most no-shows followed a predictable pattern: appointments booked 3\u20136 weeks in advance (particularly NHS check-ups and hygienist visits) had the highest dropout rate. Patients simply forgot. Some booked follow-up appointments at the reception desk while paying but had no subsequent reminder. The practice estimated that 26 weekly no-shows at an average of £75 per appointment cost £1,950 per week in lost revenue. Staff frustration was also significant — dentists and hygienists sat idle during gaps they couldn\u2019t fill.',
    ],
    painPoints: [
      '16% no-show rate — 26 missed appointments per week',
      'No reminders after initial booking confirmation',
      'Appointments booked 3\u20136 weeks ahead had the highest dropout',
      'Empty chairs during allocated treatment time cost £1,950/week',
      'No cancellation mechanism to free up slots in advance',
      'No waitlist system to fill cancelled or no-show slots',
      'Dentists and hygienists idle during unfillable gaps',
    ],
  };

  const solutionSection: CaseStudyTemplateSection = {
    type: 'solution',
    solutionHeading:
      'The System: Multi-Touch Reminders With Cancellation Recovery and Waitlist Fill',
    solutionDescription:
      'The implementation built a 3-step reminder pipeline with embedded cancellation links and a waitlist notification system that automatically offered cancelled slots to waiting patients — converting no-shows into advance cancellations and advance cancellations into filled appointments.',
    whatWeDid: [
      {
        title: '1-Week Advance Reminder',
        description:
          'Sent an SMS reminder 7 days before the appointment with date, time, and practitioner details, plus a one-tap confirmation or cancellation link.',
        icon: 'Calendar',
      },
      {
        title: '48-Hour Reminder',
        description:
          'Followed up 48 hours before with a second reminder and a direct cancellation option that immediately freed the slot.',
        icon: 'Bell',
      },
      {
        title: 'Same-Day Morning Reminder',
        description:
          'Sent a final reminder at 7:30 AM on the day of the appointment for morning slots, and at 11:30 AM for afternoon slots.',
        icon: 'Clock',
      },
      {
        title: 'Cancellation-Triggered Waitlist',
        description:
          'When a patient cancelled via the reminder link, the slot was instantly released and waitlisted patients received an automated SMS offering the available time.',
        icon: 'RefreshCw',
      },
    ],
  };

  const workflowsSection: CaseStudyTemplateSection = {
    type: 'workflows',
    badge: 'Reminder & Recovery',
    title: 'Appointment Reminder Pipeline',
    description: 'The 3-step reminder sequence with cancellation recovery.',
    workflows: [
      {
        trigger: 'Appointment booked (online or reception)',
        actions: [
          'Booking confirmation sent immediately (SMS + email)',
          '7-day reminder scheduled',
          '48-hour reminder scheduled',
          'Same-day reminder scheduled',
        ],
      },
      {
        trigger: 'Patient cancels via reminder link',
        actions: [
          'Slot released immediately',
          'Waitlisted patients receive SMS with available slot',
          'First responder booked automatically',
          'Original patient offered rebooking link',
        ],
      },
    ],
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        metric: 'No-Show Rate',
        before: '16% — 26 no-shows per week out of 160 appointments',
        after: '5% — 8 no-shows per week out of 168 appointments',
        improvement: '69% reduction',
        description:
          'The 3-step reminder sequence caught the majority of patients who would have simply forgotten, while the cancellation link converted many potential no-shows into advance cancellations.',
      },
      {
        metric: 'Weekly Revenue Recovered',
        before: '£1,950/week lost to no-show gaps',
        after: '£550/week lost (8 remaining no-shows)',
        improvement: '£1,400/week recovered',
        description:
          'Reducing no-shows from 26 to 8 per week, combined with waitlist fills for cancellations, recovered an estimated £1,400 per week in otherwise-lost appointment revenue.',
      },
      {
        metric: 'Cancellation Slot Recovery',
        before: 'No cancellation mechanism — patients simply didn\u2019t show up',
        after: '72% of cancelled slots filled via waitlist within 4 hours',
        improvement: '72% fill rate on cancellations',
        description:
          'Patients who could no longer attend were encouraged to cancel via the link rather than simply not appearing. The waitlist system then filled most of those freed slots.',
      },
      {
        metric: 'Reminder Confirmation Rate',
        before: 'No reminders sent — 0% active confirmation',
        after: '91% of patients confirmed via the 48-hour reminder',
        improvement: '91% active confirmation',
        description:
          'The confirmation response gave the practice advance knowledge of which patients were coming and which weren\u2019t — allowing proactive gap management rather than reactive surprises.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Losing Appointments to No-Shows?',
    body: 'Book a free 20-minute call and we\u2019ll show you how an automated reminder and waitlist system could reduce no-shows and fill cancelled slots for your practice.',
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
    slug: 'appointment-reminder-no-show-reduction',
    title: 'Dental Appointment Reminder & No-Show Reduction',
    metaTitle: 'Dental No-Show Reduction | 16% to 5% With Reminders',
    metaDescription:
      'How a Northampton dental practice cut no-shows from 16% to 5% and recovered £1,400 per week using automated reminders and waitlist recovery.',
    industryCategory: 'healthcare',
    industryLabel: 'Healthcare',
    industries: ['dental-clinic'],
    systems: ['revenue-growth'],
    topics: ['no-show-reduction', 'booking-automation'],
    publishDate: '2026-05-15',
    client: 'Elm Street Dental',
    location: 'Northampton, UK',
    business: 'Elm Street Dental',
    duration: '12 weeks',
    completedDate: 'May 2026',
    heroHeadline: 'How a Dental Practice Cut No-Shows From 16% to 5% and Recovered £1,400 Per Week',
    keyMetrics: keyMetrics.map(metric => ({
      value: metric.value,
      label: metric.label,
      ...(metric.color ? { color: metric.color } : {}),
    })),
    tags: [
      'No-Show Reduction',
      'Appointment Reminders',
      'Dental Practice',
      'Waitlist Recovery',
      'Healthcare',
    ],
    seo: {
      canonical: '/case-studies/appointment-reminder-no-show-reduction',
      openGraph: {
        title: 'Why Dental Practices Lose Revenue to No-Shows | MindWP Case Study',
        description:
          'How a Northampton dental practice cut no-shows from 16% to 5% with automated reminders and waitlist recovery.',
      },
    },
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'Operational Problem' },
      problem: { challengeBadgeLabel: 'The No-Show Problem' },
      workflows: { workflowsBadgeLabel: 'Reminder Pipeline' },
      solution: { solutionBadgeLabel: 'System Implementation' },
      results: {
        detailedResultsBadgeLabel: 'Measured Results',
        detailedResultsSectionTitle: 'Before & After: No-Show Performance',
      },
      cta: {
        metaItems: [
          { text: 'Free 20-minute call' },
          { text: 'No contracts' },
          { text: 'Built for dental practices' },
        ],
      },
    },
  };
}

export const appointmentReminderNoShowReduction: CaseStudyData =
  buildAppointmentReminderNoShowReduction();
