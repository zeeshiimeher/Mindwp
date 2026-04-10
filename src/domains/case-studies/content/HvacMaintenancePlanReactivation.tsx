import type { CaseStudyContent, CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildHvacMaintenancePlanReactivation(): CaseStudyData {
  const heroIntroHtml = (
    <>
      ProHeat Engineering is a residential HVAC company based in Sheffield, specialising in boiler
      servicing, heating installations, and annual maintenance plans. The business had built a
      customer base of approximately 420 active maintenance plan holders over eight years. However,
      renewal rates had been declining steadily — from 78% three years ago to 54% in the most recent
      cycle. Lapsed customers were not being contacted systematically, and the team had no
      visibility into how much recurring revenue was walking out the door each quarter.
    </>
  );

  const keyMetrics: CaseStudyContent['keyMetrics'] = [
    {
      label: 'Reactivation Rate',
      value: '38%',
      icon: 'RotateCcw',
      color: 'case-study-accent--success',
    },
    {
      label: 'Renewal Rate',
      value: '71%',
      icon: 'RefreshCw',
      color: 'case-study-accent--primary',
    },
    {
      label: 'Revenue Recovered',
      value: '£4.8k/mo',
      icon: 'PoundSterling',
      color: 'case-study-accent--amber',
    },
    {
      label: 'Lapsed Contact',
      value: '100%',
      icon: 'Users',
      color: 'case-study-accent--purple',
    },
  ];

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'The Problem: Maintenance Plans Lapsing Without Anyone Noticing',
    problemDescription: [
      'ProHeat\u2019s maintenance plans ran on annual cycles. When a plan expired, renewal depended entirely on the customer calling back or the office remembering to chase. There was no automated tracking of expiry dates and no structured outreach to lapsing customers.',
      'The most common lapse pattern was customers whose boiler service was due in autumn. If they didn\u2019t book by November, they typically forgot until something broke mid-winter — by which point many had already called another provider for an emergency repair and switched their maintenance to that company. The 54% renewal rate meant the business was losing nearly half its recurring revenue base each year.',
    ],
    painPoints: [
      'Renewal rate dropped from 78% to 54% over three years',
      'No automated tracking of plan expiry dates',
      'Lapsed customers received no outreach unless they called in',
      'Autumn service bookings were the most common lapse point',
      'Lost plan holders often reappeared as one-off emergency calls for competitors',
      'No visibility into total annual revenue at risk from lapsed plans',
      'Office team manually tracked renewals in a spreadsheet — updated inconsistently',
    ],
  };

  const solutionSection: CaseStudyTemplateSection = {
    type: 'solution',
    solutionHeading: 'The System: CRM-Driven Reactivation With Automated Renewal Sequences',
    solutionDescription:
      'The implementation built a maintenance plan lifecycle inside the CRM — tracking every plan from activation through renewal window to lapse. Automated sequences engaged customers at the right time to prevent churn, and a reactivation campaign targeted the 193 customers who had already lapsed.',
    whatWeDid: [
      {
        title: 'Plan Lifecycle Pipeline',
        description:
          'Created a CRM pipeline tracking every maintenance plan with stages: Active, Renewal Window (60 days before expiry), Renewal Due, Lapsed, and Reactivated.',
        icon: 'GitBranch',
      },
      {
        title: 'Pre-Renewal Sequence',
        description:
          'Built an automated renewal reminder sequence starting 60 days before expiry: email reminder, SMS follow-up at 30 days, phone task at 14 days, and final SMS at 7 days.',
        icon: 'Timer',
      },
      {
        title: 'Lapsed Customer Reactivation',
        description:
          'Designed a 3-message reactivation campaign for the 193 already-lapsed customers, offering a service health check as the re-engagement hook rather than a discount.',
        icon: 'RotateCcw',
      },
      {
        title: 'Revenue Tracking Dashboard',
        description:
          'Built a dashboard showing active plan revenue, at-risk revenue (renewal window), lost revenue (lapsed), and recovered revenue (reactivated) — giving the business its first clear view of recurring income health.',
        icon: 'BarChart3',
      },
    ],
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        metric: 'Lapsed Customer Reactivation',
        before: '193 lapsed customers with no outreach',
        after: '73 customers reactivated (38% of lapsed base)',
        improvement: '38% reactivation rate',
        description:
          'The 3-message reactivation campaign brought back 73 customers who had lapsed. The service health check offer gave them a reason to re-engage without feeling pressured by discounting.',
      },
      {
        metric: 'Renewal Rate',
        before: '54% of plans renewed in the previous cycle',
        after: '71% renewal rate in the first automated cycle',
        improvement: '+17 percentage points',
        description:
          'The pre-renewal sequence ensured every customer received timely reminders. The 60-day advance start gave the team time to follow up personally with high-value accounts.',
      },
      {
        metric: 'Monthly Recurring Revenue Recovered',
        before: 'Estimated £4,800/month lost from plan lapsing',
        after: 'Revenue recovered through improved renewals and reactivations',
        improvement: '£4,800/month captured',
        description:
          'The combination of better renewal rates and reactivated lapsed customers recovered revenue that had been quietly leaking for years.',
      },
      {
        metric: 'Lapsed Customer Contact Rate',
        before: '0% — no systematic outreach to lapsed customers',
        after: '100% of lapsed customers received reactivation outreach',
        improvement: 'Complete coverage',
        description:
          'For the first time, every lapsed customer received structured contact. Previously, lapsing was invisible unless the customer happened to call back.',
      },
      {
        metric: 'Revenue Visibility',
        before: 'No visibility into active plan revenue or at-risk totals',
        after: 'Live dashboard showing active, at-risk, lost, and recovered revenue',
        improvement: 'Full financial clarity',
        description:
          'The business could now see exactly how much recurring revenue was healthy, how much was approaching renewal, and how much had been lost or recovered.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Losing Recurring Revenue From Lapsed Customers?',
    body: 'Book a free 20-minute call and we\u2019ll show you how a CRM-driven reactivation system could recover lost maintenance plan revenue for your HVAC business.',
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
    slug: 'hvac-maintenance-plan-reactivation',
    title: 'HVAC Maintenance Plan Reactivation',
    metaTitle: 'HVAC Maintenance Reactivation | 54% to 71% Renewals',
    metaDescription:
      'How a Sheffield HVAC company reactivated 38% of lapsed maintenance plan customers and increased renewal rates from 54% to 71% using CRM-driven automation.',
    industryCategory: 'home-services',
    industryLabel: 'Home Services',
    industries: ['hvac'],
    systems: ['revenue-growth'],
    topics: ['client-reactivation', 'crm-pipeline', 'revenue-tracking'],
    publishDate: '2025-12-01',
    client: 'ProHeat Engineering',
    location: 'Sheffield, UK',
    business: 'ProHeat Engineering',
    duration: '9 weeks',
    completedDate: 'December 2025',
    heroHeadline:
      'How an HVAC Company Reactivated 73 Lapsed Maintenance Customers and Recovered £4,800/Month',
    keyMetrics: keyMetrics.map(metric => ({
      value: metric.value,
      label: metric.label,
      ...(metric.color ? { color: metric.color } : {}),
    })),
    tags: [
      'Maintenance Plans',
      'Customer Reactivation',
      'HVAC',
      'Revenue Recovery',
      'CRM Automation',
    ],
    seo: {
      canonical: '/case-study/hvac-maintenance-plan-reactivation',
      openGraph: {
        title: 'How HVAC Companies Recover Lost Maintenance Revenue | MindWP Case Study',
        description:
          'How a Sheffield HVAC company reactivated 38% of lapsed maintenance plan customers and increased renewal rates from 54% to 71% using CRM-driven automation.',
      },
    },
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'Revenue Recovery' },
      metrics: { resultsSectionTitle: 'Key Outcomes' },
      problem: { challengeBadgeLabel: 'The Revenue Leak' },
      solution: { solutionBadgeLabel: 'System Implementation' },
      results: {
        detailedResultsBadgeLabel: 'Measured Results',
        detailedResultsSectionTitle: 'Before & After: Maintenance Revenue Performance',
      },
      cta: {
        metaItems: [
          { text: 'Free 20-minute call' },
          { text: 'No contracts' },
          { text: 'Built for HVAC' },
        ],
      },
    },
  };
}

export const hvacMaintenancePlanReactivation: CaseStudyData =
  buildHvacMaintenancePlanReactivation();
