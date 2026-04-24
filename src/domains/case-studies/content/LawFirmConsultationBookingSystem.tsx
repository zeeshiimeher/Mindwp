import type { CaseStudyContent, CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildLawFirmConsultationBookingSystem(): CaseStudyData {
  const heroIntroHtml = (
    <>
      Carter & Marsh Solicitors is a four-solicitor high-street law firm in Norwich covering family
      law, conveyancing, and wills and probate. The firm operated with a single receptionist who
      managed incoming calls, client check-ins, file administration, and diary scheduling using a
      paper appointment book. The website listed practice areas and contact details but had no
      booking capability. Every consultation required a phone call during office hours. Monday
      mornings and the days following bank holidays produced the heaviest call volumes. During those
      periods, the phone lines were consistently engaged, and prospective clients who could not get
      through {'\u2014'} often dealing with urgent family or property matters {'\u2014'} moved on to
      other firms without leaving a voicemail.
    </>
  );

  const keyMetrics: CaseStudyContent['keyMetrics'] = [
    {
      label: 'Online Bookings',
      value: '58%',
      icon: 'Calendar',
      color: 'case-study-accent--success',
    },
    {
      label: 'Phone Time Saved',
      value: '12hr/wk',
      icon: 'PhoneOff',
      color: 'case-study-accent--primary',
    },
    {
      label: 'Consultations',
      value: '+34%',
      icon: 'TrendingUp',
      color: 'case-study-accent--amber',
    },
    {
      label: 'After-Hours Bookings',
      value: '27%',
      icon: 'Moon',
      color: 'case-study-accent--purple',
    },
  ];

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'The Problem: Phone-Only Consultation Booking With No Online Alternative',
    problemDescription: [
      'Carter & Marsh received an average of 28 consultation enquiries per week across family law, conveyancing, and probate. Every enquiry required a phone call to the office during business hours. The receptionist managed these calls alongside client check-ins, file handling, and diary updates. There was no backup during her absences, and the paper diary could only be accessed at the front desk.',
      'Call logs showed 6 to 8 calls per day going to voicemail during peak periods \u2014 Monday mornings and days following bank holidays. Prospective clients seeking legal advice, often in time-sensitive or stressful situations, rarely left voicemails and did not call back. Even when calls were answered, each booking required 5 to 7 minutes as the receptionist manually cross-referenced solicitor availability in the paper diary. The website offered no alternative booking path.',
    ],
    painPoints: [
      '6\u20138 calls per day went to voicemail during peak periods',
      'No online booking \u2014 100% phone-dependent for consultations',
      'Paper diary accessible only by the receptionist at the front desk',
      'Booking each consultation took 5\u20137 minutes of phone time',
      'Prospective clients in distress unlikely to leave voicemails or call back',
      'Monday mornings and post-holiday periods created severe backlogs',
      'Website listed services but provided no scheduling capability',
    ],
  };

  const solutionSection: CaseStudyTemplateSection = {
    type: 'solution',
    solutionHeading:
      'The System: Practice-Area Booking With Solicitor Availability and CRM Records',
    solutionDescription:
      'An online booking system was added to the firm\u2019s WordPress website, allowing prospective clients to select a practice area, view available consultation slots, and book directly. Each booking created a client record in the CRM with the matter type, contact details, and a pre-consultation summary.',
    whatWeDid: [
      {
        title: 'Practice-Area Booking Paths',
        description:
          'Built separate booking flows for family law, conveyancing, and wills & probate. Each path displayed the relevant solicitor\u2019s available consultation slots with appropriate durations.',
        icon: 'Calendar',
      },
      {
        title: 'Solicitor Calendar Sync',
        description:
          'Connected each solicitor\u2019s calendar to the booking system so availability updated in real time, preventing conflicts with existing client meetings and court commitments.',
        icon: 'RefreshCw',
      },
      {
        title: 'Pre-Consultation Intake Form',
        description:
          'Added a brief intake form to the booking flow capturing the client\u2019s name, matter type, and short description \u2014 giving the solicitor context before the meeting without requiring a phone call.',
        icon: 'FileText',
      },
      {
        title: 'CRM Record and Automated Confirmation',
        description:
          'Every booking created a client record in GoHighLevel CRM and triggered automatic email and SMS confirmation with consultation time, office location, and what to bring.',
        icon: 'CheckCircle',
      },
    ],
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        metric: 'Online Booking Adoption',
        before: '0% \u2014 all consultations arranged by phone',
        after: '58% of consultations booked online within 8 weeks',
        improvement: 'Primary booking channel established',
        description:
          'Prospective clients \u2014 particularly those dealing with family law matters \u2014 preferred booking online at a time that suited them rather than calling during office hours.',
      },
      {
        metric: 'Receptionist Phone Time',
        before: '~16 hours/week spent on consultation booking calls',
        after: '~4 hours/week \u2014 only phone-preference clients',
        improvement: '12 hours/week saved',
        description:
          'The receptionist reclaimed 12 hours per week for client-facing duties, file administration, and supporting solicitors directly.',
      },
      {
        metric: 'Weekly Consultation Volume',
        before: 'Average 21 consultations per week',
        after: 'Average 28 consultations per week',
        improvement: '+34% increase',
        description:
          'After-hours booking access and reduced phone friction meant more prospective clients completed the booking process instead of abandoning it.',
      },
      {
        metric: 'After-Hours Bookings',
        before: '0% \u2014 no booking available outside office hours',
        after: '27% of online bookings placed outside office hours',
        improvement: 'New booking window unlocked',
        description:
          'Over a quarter of consultations were booked in the evening or early morning \u2014 times when the office was closed and these clients would previously have been lost.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Losing Consultation Enquiries to Engaged Phone Lines?',
    body: 'Book a free 20-minute call to discuss how a practice-area booking system could capture consultations you\u2019re currently missing.',
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
        title: 'Law Firm Booking System | 34% More Consultations',
        description:
        'How a Norwich law firm increased consultation bookings by 34% and freed 12 hours per week by replacing phone-only booking with CRM-integrated scheduling.',
        canonical: '/case-studies/law-firm-consultation-booking-system',
        openGraph: {
          title: 'Why Law Firms Lose Clients Before the First Meeting | MindWP Case Study',
          description:
            'How a Norwich law firm increased consultation bookings by 34% with online practice-area scheduling.',
        },
      },
      slug: 'law-firm-consultation-booking-system',
      title: 'Law Firm Consultation Booking System',
      industryCategory: 'professional-services',
      industryLabel: 'Professional Services',
      industries: ['law-firm'],
      systems: ['smart-website-systems'],
      topics: ['booking-automation', 'website-infrastructure'],
      publishDate: '2026-04-01',
      client: 'Carter & Marsh Solicitors',
      location: 'Norwich, UK',
      business: 'Carter & Marsh Solicitors',
      duration: '12 weeks',
      completedDate: 'April 2026',
      heroHeadline:
        'How a Law Firm Increased Consultation Bookings by 34% With Online Practice-Area Scheduling',
      keyMetrics: keyMetrics.map(metric => ({
        value: metric.value,
        label: metric.label,
        ...(metric.color ? { color: metric.color } : {}),
      })),
      tags: [
        'Consultation Booking',
        'Law Firm',
        'Online Scheduling',
        'CRM Integration',
        'Professional Services',
      ],
      sections,
      templateOverrides: {
        hero: { scenarioBadgeLabel: 'System Implementation' },
        problem: { challengeBadgeLabel: 'The Booking Problem' },
        solution: { solutionBadgeLabel: 'System Architecture' },
        results: {
          detailedResultsBadgeLabel: 'Measured Results',
          detailedResultsSectionTitle: 'Before & After: Consultation Booking',
        },
        cta: {
          metaItems: [
            { text: 'Free 20-minute call' },
            { text: 'No contracts' },
            { text: 'Built for law firms' },
          ],
        },
      }
  };
}

export const lawFirmConsultationBookingSystem: CaseStudyData =
  buildLawFirmConsultationBookingSystem();
