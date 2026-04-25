import type { CaseStudyContent, CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildAppointmentBusinessBookingAutomation(): CaseStudyData {
  const heroIntroHtml = (
    <>
      Parkside Dental Practice is an NHS and private dental surgery in Swindon with three dentists
      and two hygienists. The practice employed two receptionists who managed all patient check-ins,
      insurance queries, treatment scheduling, and phone bookings from a single front desk. There
      was no online booking capability. Patients who needed to schedule a check-up, hygienist
      appointment, or emergency slot had to call during surgery hours. The phone lines were
      frequently engaged during the morning rush between 8:30 and 10:00 AM when patients called to
      book while also arriving for existing appointments. The scheduling system was a desktop
      application accessible only from the reception workstations, with no integration to the phone
      system or patient communications.
    </>
  );

  const keyMetrics: CaseStudyContent['keyMetrics'] = [
    {
      label: 'Online Bookings',
      value: '52%',
      icon: 'Calendar',
      color: 'case-study-accent--success',
    },
    {
      label: 'Phone Time Saved',
      value: '14hr/wk',
      icon: 'PhoneOff',
      color: 'case-study-accent--primary',
    },
    {
      label: 'Appointments',
      value: '+28%',
      icon: 'TrendingUp',
      color: 'case-study-accent--amber',
    },
    {
      label: 'After-Hours',
      value: '34%',
      icon: 'Moon',
      color: 'case-study-accent--purple',
    },
  ];

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'The Problem: Phone-Only Booking That Could Not Handle Patient Volume',
    problemDescription: [
      'Parkside Dental averaged 160 appointments per week across three dentists and two hygienists. Every appointment was booked by phone. Two receptionists fielded booking calls alongside walk-in check-ins, insurance processing, and treatment plan queries. During the 8:30\u201310:00 AM morning window, both phone lines were consistently engaged.',
      'Call logs showed 15 to 20 missed calls per day, concentrated in the morning. Patients who could not get through often did not try again \u2014 they either delayed their appointment indefinitely or searched online for a practice that offered immediate booking. NHS check-up patients, who book only every 6 to 12 months, were particularly likely to lose momentum and not rebook. There was no evening or weekend booking option, despite many patients wanting to arrange appointments outside working hours.',
    ],
    painPoints: [
      '15\u201320 missed calls per day \u2014 concentrated in the morning rush',
      'No online booking \u2014 100% phone-dependent for all appointment types',
      'Two receptionists split between phone, walk-ins, and admin simultaneously',
      'NHS check-up patients delayed re-booking due to phone friction',
      'No evening or weekend booking option',
      'Desktop scheduler accessible only at reception \u2014 no remote access',
      'No automated confirmation or reminder for booked appointments',
    ],
  };

  const solutionSection: CaseStudyTemplateSection = {
    type: 'solution',
    solutionHeading: 'The System: Treatment-Specific Online Booking With CRM Patient Records',
    solutionDescription:
      'An online booking system was added to the practice\u2019s WordPress website, allowing patients to select their treatment type, choose a practitioner, and book directly. Every booking created or updated a patient record in the CRM and triggered automated confirmation and 24-hour pre-appointment reminders via SMS.',
    whatWeDid: [
      {
        title: 'Treatment-Specific Booking Paths',
        description:
          'Built booking flows for check-ups, hygienist appointments, emergency slots, and private treatments \u2014 each with appropriate durations and practitioner availability rules.',
        icon: 'Calendar',
      },
      {
        title: 'Practitioner Availability Sync',
        description:
          'Connected each dentist and hygienist\u2019s schedule to the booking system so online slots reflected real-time availability and prevented double-booking.',
        icon: 'RefreshCw',
      },
      {
        title: 'CRM Patient Records',
        description:
          'Every booking created or updated a patient record in GoHighLevel CRM with appointment history, treatment type, and contact preferences \u2014 accessible to both reception and clinical staff.',
        icon: 'Database',
      },
      {
        title: 'Automated Confirmations and Reminders',
        description:
          'Configured instant booking confirmation and 24-hour pre-appointment reminders via SMS, reducing no-shows and eliminating manual confirmation calls.',
        icon: 'Bell',
      },
    ],
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        metric: 'Online Booking Adoption',
        before: '0% \u2014 all appointments booked by phone',
        after: '52% of appointments booked online within 8 weeks',
        improvement: 'Dominant channel shift',
        description:
          'Patients adopted online booking rapidly, particularly for routine check-ups and hygienist appointments that did not require a conversation with reception.',
      },
      {
        metric: 'Receptionist Phone Time',
        before: '~20 hours/week spent on booking calls across both receptionists',
        after: '~6 hours/week \u2014 complex queries and phone-preference patients only',
        improvement: '14 hours/week saved',
        description:
          'Receptionists reclaimed half their phone time for patient check-ins, insurance processing, and treatment plan coordination.',
      },
      {
        metric: 'Weekly Appointment Volume',
        before: 'Average 160 appointments per week',
        after: 'Average 205 appointments per week',
        improvement: '+28% increase',
        description:
          'Lower booking friction and after-hours access brought in patients who had previously delayed appointments or gone to other practices due to engaged phone lines.',
      },
      {
        metric: 'After-Hours Bookings',
        before: '0% \u2014 no booking available outside surgery hours',
        after: '34% of online bookings placed between 6 PM and 8 AM',
        improvement: 'New booking window unlocked',
        description:
          'Over a third of patients chose to book outside surgery hours \u2014 a demand window that had been entirely unserved before the system was implemented.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Phone Lines Constantly Engaged?',
    body: 'Book a free 20-minute call to discuss how an online booking system could reduce phone pressure and capture appointments you\u2019re currently missing.',
  };

  const sections: CaseStudyTemplateSection[] = [
    { type: 'hero', introHtml: heroIntroHtml },
    problemSection,
    solutionSection,
    resultsSection,
    { type: 'more' },
    ctaSection,
  ];

  return {
    seo: {
      title: 'Dental Booking Automation | 52% Online Booking Adoption',
      description:
        'How a Swindon dental practice moved to 52% online booking, increased appointments by 28%, and freed 14 receptionist hours per week with automated scheduling.',
      canonical: '/case-studies/appointment-business-booking-automation',
      openGraph: {
        title: 'Why Dental Practices Lose Patients | MindWP Case Study',
        description:
          'How a Swindon dental practice moved to 52% online booking and increased appointments by 28%.',
      },
    },
    slug: 'appointment-business-booking-automation',
    title: 'Dental Practice Booking Automation',
    industryCategory: 'healthcare',
    industryLabel: 'Healthcare',
    industries: ['dental-clinic'],
    systems: ['smart-website-systems'],
    topics: ['booking-automation', 'website-infrastructure'],
    publishDate: '2026-05-01',
    client: 'Parkside Dental Practice',
    location: 'Swindon, UK',
    business: 'Parkside Dental Practice',
    duration: '12 weeks',
    completedDate: 'May 2026',
    heroHeadline:
      'How a Dental Practice Achieved 52% Online Booking and Increased Appointments by 28%',
    keyMetrics: keyMetrics.map(metric => ({
      value: metric.value,
      label: metric.label,
      ...(metric.color ? { color: metric.color } : {}),
    })),
    tags: [
      'Booking Automation',
      'Dental Practice',
      'Online Scheduling',
      'CRM Integration',
      'Healthcare',
    ],
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'System Implementation' },
      problem: { challengeBadgeLabel: 'The Booking Problem' },
      solution: { solutionBadgeLabel: 'System Architecture' },
      results: {
        detailedResultsBadgeLabel: 'Measured Results',
        detailedResultsSectionTitle: 'Before & After: Booking Performance',
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

export const appointmentBusinessBookingAutomation: CaseStudyData =
  buildAppointmentBusinessBookingAutomation();
