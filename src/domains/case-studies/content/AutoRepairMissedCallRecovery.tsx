import type { CaseStudyContent, CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildAutoRepairMissedCallRecovery(): CaseStudyData {
  const heroIntroHtml = (
    <>
      Premier Auto Care is an independent garage in Leicester with three mechanics and one front
      desk staff member. The garage serviced a mix of walk-in MOTs, pre-booked repairs, and
      emergency breakdowns. The front desk handled phone calls, check-ins, and payment processing.
      During peak hours — particularly between 8 AM and 10 AM when clients dropped off vehicles —
      the phone rang constantly and went unanswered. Voicemails were checked inconsistently, and
      many callers never left a message. The garage had no system for capturing or following up on
      missed calls.
    </>
  );

  const keyMetrics: CaseStudyContent['keyMetrics'] = [
    {
      label: 'Call Capture',
      value: '41% → 93%',
      icon: 'Phone',
      color: 'case-study-accent--success',
    },
    {
      label: 'Response Time',
      value: '<4 min',
      icon: 'Clock',
      color: 'case-study-accent--primary',
    },
    {
      label: 'Recovered Leads',
      value: '9/week',
      icon: 'UserPlus',
      color: 'case-study-accent--purple',
    },
    {
      label: 'Monthly Revenue',
      value: '+£3.8k',
      icon: 'TrendingUp',
      color: 'case-study-accent--amber',
    },
  ];

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'The Problem: Missed Calls During the Morning Drop-Off Rush',
    problemDescription: [
      'Premier Auto Care\u2019s busiest period was the morning drop-off window between 8 AM and 10 AM. Clients arrived to leave their vehicles for MOTs and pre-booked repairs, while new callers phoned for quotes, availability checks, and emergency breakdown enquiries. The single front desk staff member could not manage walk-in check-ins and phone calls simultaneously.',
      'Call logs showed an average of 18 missed calls per week, with 11 occurring during the 8\u201310 AM window. Most callers did not leave voicemails. Of those who did, follow-up was delayed by hours — often until the afternoon when the front desk was less busy. By that point, many customers had already called a competitor. The garage had no visibility into how many calls were missed or what they were about.',
    ],
    painPoints: [
      '18 missed calls per week on average — 11 during the morning rush',
      'Single front desk staff handling walk-ins and phone simultaneously',
      'Most missed callers did not leave a voicemail',
      'Voicemail follow-up delayed by 3\u20135 hours',
      'No tracking or visibility into missed call volume',
      'Emergency breakdown callers lost to competitors within minutes',
      'No automated response to let callers know their call was received',
    ],
  };

  const solutionSection: CaseStudyTemplateSection = {
    type: 'solution',
    solutionHeading: 'The System: Automated Missed Call Recovery With SMS and CRM Logging',
    solutionDescription:
      'The solution introduced an automated missed call detection and recovery system that sent immediate SMS responses to missed callers, logged every call in the CRM, and prioritised emergency enquiries for rapid follow-up.',
    whatWeDid: [
      {
        title: 'Missed Call Detection',
        description:
          'Connected the phone system to detect unanswered calls in real time and trigger an automated response within 60 seconds.',
        icon: 'PhoneOff',
      },
      {
        title: 'Instant SMS Response',
        description:
          'Sent an automatic text message acknowledging the missed call, confirming the garage would call back, and providing an option to describe the enquiry via text.',
        icon: 'MessageSquare',
      },
      {
        title: 'CRM Call Logging',
        description:
          'Every missed call was logged in GoHighLevel CRM with timestamp, phone number, and any SMS reply from the caller — creating a follow-up task for the front desk.',
        icon: 'Database',
      },
      {
        title: 'Emergency Prioritisation',
        description:
          'Callers who replied with keywords like "breakdown" or "urgent" were flagged as high priority and pushed to the top of the callback queue.',
        icon: 'AlertTriangle',
      },
    ],
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        metric: 'Call Capture Rate',
        before: '41% — only 18 of 31 weekly calls answered',
        after: '93% — missed calls recovered via SMS within 60 seconds',
        improvement: '+52 percentage points',
        description:
          'While the garage still missed the same number of calls during busy periods, the automated SMS recovery meant those callers were engaged immediately instead of lost.',
      },
      {
        metric: 'Average Response Time',
        before: '3\u20135 hours for voicemail follow-up',
        after: 'Under 4 minutes from missed call to SMS + callback',
        improvement: '98% faster response',
        description:
          'The combination of instant SMS and priority queuing meant most callers heard back within minutes rather than hours.',
      },
      {
        metric: 'Recovered Leads Per Week',
        before: '0 — missed calls were not tracked or followed up systematically',
        after: '9 leads per week recovered from previously-lost missed calls',
        improvement: '9 new leads/week',
        description:
          'Callers who would have gone to competitors now received an immediate response and stayed in the pipeline.',
      },
      {
        metric: 'Monthly Revenue Impact',
        before: 'Estimated £4,200/month lost to unrecovered missed calls',
        after: '£3,800/month recovered from leads that would have been lost',
        improvement: '+£3,800/month',
        description:
          'With an average job value of £420 and 9 recovered leads per week converting at a rate consistent with answered calls, the system recovered the majority of previously-lost revenue.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Missing Calls From Potential Customers?',
    body: 'Book a free 20-minute call and we\u2019ll show you how an automated missed call recovery system could capture leads you\u2019re currently losing.',
  };

  const sections: CaseStudyTemplateSection[] = [
    { type: 'hero', introHtml: heroIntroHtml },
    { type: 'metrics', keyMetrics },
    problemSection,
    solutionSection,
    resultsSection,
    { type: 'more' },
    ctaSection,
  ];

  return {
    slug: 'auto-repair-missed-call-recovery',
    title: 'Auto Repair Missed Call Recovery',
    metaTitle: 'Why Auto Repair Shops Lose Leads During Peak Hours (And How to Recover Them)',
    metaDescription:
      'How a Leicester garage recovered 9 leads per week and £3,800 monthly revenue by automating missed call detection and SMS follow-up during the morning rush.',
    industryCategory: 'automotive',
    industryLabel: 'Automotive',
    industries: ['auto-repair'],
    systems: ['ai-lead-handling'],
    topics: ['missed-calls', 'lead-response-time', 'lead-capture'],
    publishDate: '2026-02-01',
    client: 'Premier Auto Care',
    location: 'Leicester, UK',
    business: 'Premier Auto Care',
    duration: '9 weeks',
    completedDate: 'February 2026',
    heroHeadline:
      'How a Garage Recovered 9 Lost Leads Per Week With Automated Missed Call Recovery',
    keyMetrics: keyMetrics.map(metric => ({
      value: metric.value,
      label: metric.label,
      ...(metric.color ? { color: metric.color } : {}),
    })),
    tags: ['Missed Call Recovery', 'Auto Repair', 'Lead Capture', 'SMS Automation', 'Automotive'],
    seo: {
      canonical: '/case-study/auto-repair-missed-call-recovery',
      openGraph: {
        title: 'Why Auto Repair Shops Lose Leads During Peak Hours | MindWP Case Study',
        description:
          'How a Leicester garage recovered 9 leads per week using automated missed call detection and SMS recovery.',
      },
    },
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'Operational Problem' },
      metrics: { resultsSectionTitle: 'Key Outcomes' },
      problem: { challengeBadgeLabel: 'The Missed Call Problem' },
      solution: { solutionBadgeLabel: 'System Architecture' },
      results: {
        detailedResultsBadgeLabel: 'Measured Results',
        detailedResultsSectionTitle: 'Before & After: Call Recovery Performance',
      },
      cta: {
        primaryButtonLabel: 'Recover Missed Repair Calls',
        primaryButtonHref: '/contact',
        metaItems: [
          { text: 'Free 20-minute call' },
          { text: 'No contracts' },
          { text: 'Built for garages' },
        ],
      },
    },
  };
}

export const autoRepairMissedCallRecovery: CaseStudyData = buildAutoRepairMissedCallRecovery();
