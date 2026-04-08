import type { CaseStudyContent, CaseStudyTemplateSection } from '@/domains/case-studies/templates';
import { buildContactHref } from '@/lib/contact/contactHref';

import type { CaseStudyData } from '../types';

function buildHvacSeasonalLeadSurgeHandling(): CaseStudyData {
  const heroIntroHtml = (
    <>
      AirFlow Mechanical is a residential HVAC contractor based in Nottingham, providing
      installation, servicing, and repair across the East Midlands. The business handles
      approximately 50 calls per week during non-peak periods. During seasonal transitions —
      particularly the first sustained cold snap in October and the first heat wave in June — call
      volume doubles or triples within days. The office team of two could not scale to handle surge
      periods, and there was no system to manage overflow. Leads stacked up, response times
      stretched, and the business lost ground to competitors who responded faster.
    </>
  );

  const keyMetrics: CaseStudyContent['keyMetrics'] = [
    {
      label: 'Surge Capacity',
      value: '3\u00d7 handled',
      icon: 'Activity',
      color: 'case-study-accent--success',
    },
    {
      label: 'Lead Queue Time',
      value: '< 8 min',
      icon: 'Timer',
      color: 'case-study-accent--primary',
    },
    {
      label: 'Overflow Leakage',
      value: '4%',
      icon: 'ShieldCheck',
      color: 'case-study-accent--purple',
    },
    {
      label: 'Seasonal Close Rate',
      value: '29%',
      icon: 'TrendingUp',
      color: 'case-study-accent--amber',
    },
  ];

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'The Problem: Seasonal Demand Spikes That Overwhelmed the Team',
    problemDescription: [
      'AirFlow Mechanical\u2019s call volume was manageable for 10 months of the year. But during the first cold snap of autumn and the first heat wave of summer, inbound calls surged from 50 per week to 120\u2013150. The two-person office team could answer roughly 60 calls per week at full capacity.',
      'During the October 2024 cold snap, the office logged 142 inbound calls in a single week. 53 went to voicemail, and of those, only 14 left a message. The rest were lost entirely. Lead response time during the surge stretched to over 4 hours on average, compared to under 20 minutes during normal weeks. The business estimated it lost 30\u201340 potential jobs in that single week.',
    ],
    painPoints: [
      'Normal capacity: 60 calls/week — seasonal surges: 120\u2013150 calls/week',
      '53 calls went to voicemail in one surge week; only 14 left messages',
      'Average response time stretched from 18 minutes to over 4 hours during peaks',
      'No overflow system to handle calls beyond office capacity',
      'Team morale suffered during surge weeks due to relentless call pressure',
      'No way to predict surge timing or pre-activate additional capacity',
      'Competitors with faster response captured homeowners during critical first contact',
    ],
  };

  const deliverablesSection: CaseStudyTemplateSection = {
    type: 'deliverables',
    badge: 'Deliverables',
    title: 'What Was Built',
    description:
      'An automated overflow management system that detected call surges, acknowledged callers instantly, and prioritised callbacks by urgency.',
    items: [
      'Surge detection rules (queue depth + hold time triggers)',
      'Automated overflow SMS with estimated callback time',
      'Issue-type classification via SMS response',
      'Priority ranking engine for emergency situations',
      'Callback queue with time-in-queue tracking',
      'Live callback queue dashboard',
      'Surge-vs-normal performance comparison reports',
      'Seasonal capacity planning data and forecasting',
    ],
    columns: 2,
  };

  const processSection: CaseStudyTemplateSection = {
    type: 'process',
    howWeDidIt: [
      {
        phase: 'Phase 1',
        title: 'Surge Pattern Analysis',
        description:
          'Analysed 12 months of call data to identify surge triggers, duration patterns, and capacity gaps. Mapped the October cold snap and June heat wave as the two primary surge events.',
        duration: '1 week',
      },
      {
        phase: 'Phase 2',
        title: 'Overflow System Configuration',
        description:
          'Built the surge detection rules, automated SMS responses, and queue prioritisation engine with GoHighLevel CRM as the backbone.',
        duration: '2 weeks',
      },
      {
        phase: 'Phase 3',
        title: 'Dashboard & Reporting Setup',
        description:
          'Created the live callback queue dashboard and automated surge-vs-normal performance reports.',
        duration: '1 week',
      },
      {
        phase: 'Phase 4',
        title: 'Simulated Surge Testing',
        description:
          'Ran simulated call surges during a quiet period to test overflow triggers, SMS delivery speed, queue ranking accuracy, and dashboard refresh rates. Adjusted thresholds based on results.',
        duration: '1 week',
      },
    ],
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        metric: 'Surge Handling Capacity',
        before: '60 calls/week maximum before overflow leakage',
        after: '150+ calls/week handled through combined live + automated overflow',
        improvement: '3\u00d7 effective capacity',
        description:
          'The overflow system extended the team\u2019s capacity to handle triple their normal volume without hiring additional staff.',
      },
      {
        metric: 'Lead Queue Time',
        before: '4+ hours average response during surge weeks',
        after: '8 minutes average from overflow SMS to callback confirmation',
        improvement: '97% faster acknowledgement',
        description:
          'Automated SMS responses gave callers instant acknowledgement, and the prioritised queue ensured callbacks happened within minutes rather than hours.',
      },
      {
        metric: 'Overflow Leakage Rate',
        before: '37% of surge calls lost entirely (no voicemail left)',
        after: '4% of surge calls unrecovered',
        improvement: '33 percentage point reduction',
        description:
          'SMS-based engagement replaced voicemail dependency. Nearly all overflow callers responded to the automated text rather than hanging up.',
      },
      {
        metric: 'Seasonal Close Rate',
        before: '16% during surge weeks (down from 24% during normal weeks)',
        after: '29% during surge weeks',
        improvement: '+13 percentage points',
        description:
          'Faster response and structured follow-up during surges maintained close rates closer to normal performance levels.',
      },
      {
        metric: 'Team Operational Stress',
        before: 'Surge weeks described as chaotic and demoralising by office staff',
        after: 'Structured queue with clear priorities and manageable callback volumes',
        improvement: 'Sustainable workload during peaks',
        description:
          'The dashboard and priority queue gave the team control over surge periods rather than being overwhelmed by them.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Seasonal Surges Overwhelming Your Team?',
    body: 'Book a free 20-minute call and we\u2019ll show you how an automated overflow system could help your HVAC business capture leads during peak demand without hiring seasonal staff.',
  };

  const sections: CaseStudyTemplateSection[] = [
    { type: 'hero', introHtml: heroIntroHtml },
    problemSection,
    deliverablesSection,
    processSection,
    resultsSection,
    { type: 'more' },
    ctaSection,
  ];

  return {
    slug: 'hvac-seasonal-lead-surge-handling',
    title: 'HVAC Seasonal Lead Surge Handling',
    metaTitle:
      'Why HVAC Companies Lose Leads During Seasonal Demand (And the System That Stabilized Lead Handling)',
    metaDescription:
      'How a Nottingham HVAC contractor tripled their effective call capacity during seasonal surges using automated overflow management and queue prioritisation.',
    industryCategory: 'home-services',
    industryLabel: 'Home Services',
    industries: ['hvac'],
    systems: ['ai-lead-handling'],
    topics: ['missed-calls', 'lead-capture', 'lead-response-time'],
    publishDate: '2025-11-15',
    client: 'AirFlow Mechanical',
    location: 'Nottingham, UK',
    business: 'AirFlow Mechanical',
    duration: '5 weeks',
    completedDate: 'November 2025',
    heroHeadline:
      'How an HVAC Contractor Handled 3\u00d7 Call Volume During Seasonal Surges Without Hiring Extra Staff',
    keyMetrics: keyMetrics.map(metric => ({
      value: metric.value,
      label: metric.label,
      ...(metric.color ? { color: metric.color } : {}),
    })),
    tags: [
      'Seasonal Surges',
      'Overflow Management',
      'HVAC',
      'Lead Capture',
      'Queue Prioritisation',
    ],
    seo: {
      canonical: '/case-study/hvac-seasonal-lead-surge-handling',
      openGraph: {
        title: 'Why HVAC Companies Lose Leads During Seasonal Demand | MindWP Case Study',
        description:
          'How a Nottingham HVAC contractor tripled their effective call capacity during seasonal surges using automated overflow management and queue prioritisation.',
      },
    },
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'Operational Problem' },
      problem: { challengeBadgeLabel: 'The Capacity Problem' },
      deliverables: { deliverablesBadgeLabel: 'Deliverables' },
      process: {
        implementationBadgeLabel: 'Implementation',
        implementationSectionTitle: 'How the System Was Built',
        implementationSectionSubtitle:
          'A 5-week rollout covering analysis, setup, and simulated testing',
      },
      results: {
        detailedResultsBadgeLabel: 'Measured Results',
        detailedResultsSectionTitle: 'Before & After: Seasonal Surge Performance',
      },
      cta: {
        primaryButtonLabel: 'Stop Losing Surge Leads',
        primaryButtonHref: buildContactHref({
          system: 'ai-lead-handling',
          sourceType: 'case-study',
          slug: 'hvac-seasonal-lead-surge-handling',
        }),
        metaItems: [
          { text: 'Free 20-minute call' },
          { text: 'No contracts' },
          { text: 'Built for HVAC' },
        ],
      },
    },
  };
}

export const hvacSeasonalLeadSurgeHandling: CaseStudyData = buildHvacSeasonalLeadSurgeHandling();
