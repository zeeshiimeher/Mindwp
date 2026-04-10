import type { CaseStudyContent, CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildAutomotiveServiceReminderAutomation(): CaseStudyData {
  const heroIntroHtml = (
    <>
      Midlands Motor Works is a family-run garage in Coventry with four technicians. The garage had
      a loyal base of regular customers for MOTs, annual services, and seasonal checks. However,
      most clients only returned when their MOT reminder letter arrived from the DVLA — often
      booking elsewhere because Midlands had no system for reaching clients before the official
      reminder. The garage relied entirely on customers remembering to rebook. There were no service
      reminders, no follow-up messages, and no visibility into which clients were due for their next
      visit.
    </>
  );

  const keyMetrics: CaseStudyContent['keyMetrics'] = [
    {
      label: 'Retention Rate',
      value: '48% → 72%',
      icon: 'UserCheck',
      color: 'case-study-accent--success',
    },
    {
      label: 'Revenue Recovered',
      value: '£5.1k/mo',
      icon: 'PoundSterling',
      color: 'case-study-accent--amber',
    },
    {
      label: 'Pre-DVLA Bookings',
      value: '64%',
      icon: 'Calendar',
      color: 'case-study-accent--primary',
    },
    {
      label: 'Lapsed Reactivations',
      value: '31/month',
      icon: 'RefreshCw',
      color: 'case-study-accent--purple',
    },
  ];

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'The Problem: Clients Drifting Away Because Nobody Reminded Them',
    problemDescription: [
      'Midlands Motor Works had served thousands of clients over the years, but only 48% of customers who had a service or MOT returned the following year. The garage had no CRM, no service history tracking beyond paper invoices filed by date, and no way to identify which clients were approaching their next MOT or annual service.',
      'Clients who did return often mentioned they\u2019d almost gone elsewhere because they forgot. Clients who didn\u2019t return had typically received their DVLA reminder and booked with whichever garage was top of mind at that moment — often a competitor running Google Ads. The garage was losing an estimated £5,800 per month in service and MOT revenue from lapsed clients who simply needed a timely nudge.',
    ],
    painPoints: [
      'Only 48% of clients returned for their next annual service or MOT',
      'No service reminders sent — relied on client memory',
      'Paper invoices made it impossible to identify upcoming MOTs',
      'Clients drifted to competitors who reached them first',
      'DVLA reminder was the only prompt — and it didn\u2019t direct back to Midlands',
      'Estimated £5,800/month lost from lapsed client revenue',
      'No client database or service history tracking beyond paper records',
    ],
  };

  const solutionSection: CaseStudyTemplateSection = {
    type: 'solution',
    solutionHeading: 'The System: CRM-Based Service Reminders With Pre-MOT Outreach',
    solutionDescription:
      'The solution digitised the garage\u2019s client records, built a service lifecycle timeline for every customer, and configured automated reminders timed to reach clients before their DVLA letter arrived — recapturing bookings that were previously lost to competitors.',
    whatWeDid: [
      {
        title: 'Client Record Import',
        description:
          'Digitised 3 years of paper invoices into GoHighLevel CRM, creating client records with vehicle details, service history, and next-due dates for MOTs and annual services.',
        icon: 'Database',
      },
      {
        title: 'Service Lifecycle Tracking',
        description:
          'Built automated date calculations for each client\u2019s next MOT, annual service, and seasonal check — creating a forward-looking schedule the garage had never had.',
        icon: 'Calendar',
      },
      {
        title: 'Pre-MOT Reminder Sequence',
        description:
          'Configured SMS reminders sent 6 weeks, 3 weeks, and 1 week before each client\u2019s MOT due date — reaching them before the DVLA letter.',
        icon: 'Bell',
      },
      {
        title: 'Lapsed Client Reactivation',
        description:
          'Built a reactivation campaign for clients who hadn\u2019t returned in over 12 months, offering a service health check to re-establish the relationship.',
        icon: 'RefreshCw',
      },
    ],
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        metric: 'Client Retention Rate',
        before: '48% — fewer than half of clients returned year-over-year',
        after: '72% — nearly three-quarters of clients rebooked proactively',
        improvement: '+24 percentage points',
        description:
          'The reminder sequences reached clients at the right moment, converting passive customers into proactive rebookers who didn\u2019t need to remember on their own.',
      },
      {
        metric: 'Pre-DVLA Booking Rate',
        before: '0% — no outreach before the DVLA reminder',
        after: '64% of MOT clients booked before their DVLA letter arrived',
        improvement: 'New pre-emptive channel',
        description:
          'By reaching clients 6 weeks before their MOT due date, the garage became the first reminder they received — before the DVLA letter triggered competitor searches.',
      },
      {
        metric: 'Monthly Revenue Recovered',
        before: 'Estimated £5,800/month lost from lapsed clients',
        after: '£5,100/month recovered through reminders and reactivation',
        improvement: '88% of lost revenue recovered',
        description:
          'The combination of pre-MOT reminders and lapsed client reactivation brought back revenue that had been silently leaking for years.',
      },
      {
        metric: 'Lapsed Client Reactivations',
        before: 'No outreach to inactive clients',
        after: '31 lapsed clients reactivated per month in the first quarter',
        improvement: '31 clients/month returned',
        description:
          'The reactivation campaign reached clients who hadn\u2019t visited in over a year, offering a low-friction reason to return and re-establishing the relationship.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Losing Clients Who Forget to Rebook?',
    body: 'Book a free 20-minute call and we\u2019ll show you how a service reminder system could retain more customers and recover lapsed client revenue.',
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
    slug: 'automotive-service-reminder-automation',
    title: 'Automotive Service Reminder Automation',
    metaTitle: 'Garage Retention System | 48% to 72% With Reminders',
    metaDescription:
      'How a Coventry garage increased client retention from 48% to 72% and recovered £5,100 per month using automated service reminders and lapsed client reactivation.',
    industryCategory: 'automotive',
    industryLabel: 'Automotive',
    industries: ['auto-repair'],
    systems: ['revenue-growth'],
    topics: [
      'client-reactivation',
      'follow-up',
      'service-reminders',
      'customer-lifetime-value',
      'lifetime-value',
      'revenue-tracking',
    ],
    publishDate: '2026-02-15',
    client: 'Midlands Motor Works',
    location: 'Coventry, UK',
    business: 'Midlands Motor Works',
    duration: '14 weeks',
    completedDate: 'February 2026',
    heroHeadline:
      'How a Garage Increased Client Retention From 48% to 72% With Automated Service Reminders',
    keyMetrics: keyMetrics.map(metric => ({
      value: metric.value,
      label: metric.label,
      ...(metric.color ? { color: metric.color } : {}),
    })),
    tags: [
      'Service Reminders',
      'Client Retention',
      'Auto Repair',
      'Revenue Recovery',
      'CRM Automation',
    ],
    seo: {
      canonical: '/case-study/automotive-service-reminder-automation',
      openGraph: {
        title: 'Why Garages Lose Repeat Customers | MindWP Case Study',
        description:
          'How a Coventry garage increased client retention from 48% to 72% with automated service reminders.',
      },
    },
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'Revenue Recovery' },
      metrics: { resultsSectionTitle: 'Key Outcomes' },
      problem: { challengeBadgeLabel: 'The Retention Problem' },
      solution: { solutionBadgeLabel: 'System Architecture' },
      results: {
        detailedResultsBadgeLabel: 'Measured Results',
        detailedResultsSectionTitle: 'Before & After: Client Retention',
      },
      cta: {
        metaItems: [
          { text: 'Free 20-minute call' },
          { text: 'No contracts' },
          { text: 'Built for garages' },
        ],
      },
    },
  };
}

export const automotiveServiceReminderAutomation: CaseStudyData =
  buildAutomotiveServiceReminderAutomation();
