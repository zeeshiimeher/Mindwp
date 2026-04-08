import type { CaseStudyContent, CaseStudyTemplateSection } from '@/domains/case-studies/templates';
import { buildContactHref } from '@/lib/contact/contactHref';

import type { CaseStudyData } from '../types';

function buildHvacEmergencyLeadRouting(): CaseStudyData {
  const heroIntroHtml = (
    <>
      Thermal Comfort Services is a residential HVAC company based in Manchester, handling
      installations, maintenance contracts, and emergency call-outs across Greater Manchester. The
      business receives between 40 and 70 calls per week, with emergency requests accounting for
      roughly 35% of inbound volume. During summer heat waves and winter cold snaps, emergency calls
      concentrated heavily between 4 PM and 7 PM — precisely when the office had already closed for
      the day. Calls went to a generic voicemail message. Most callers never left a message and
      called a competitor instead.
    </>
  );

  const keyMetrics: CaseStudyContent['keyMetrics'] = [
    {
      label: 'Emergency Capture',
      value: '91%',
      icon: 'ShieldCheck',
      color: 'case-study-accent--success',
    },
    {
      label: 'After-Hours Response',
      value: '< 2 min',
      icon: 'Clock',
      color: 'case-study-accent--primary',
    },
    {
      label: 'Voicemail Drop-Off',
      value: 'Eliminated',
      icon: 'PhoneOff',
      color: 'case-study-accent--purple',
    },
    {
      label: 'Emergency Revenue',
      value: '+£6.4k/mo',
      icon: 'TrendingUp',
      color: 'case-study-accent--amber',
    },
  ];

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'The Problem: Emergency Calls Arriving After the Office Closed',
    problemDescription: [
      'Thermal Comfort\u2019s office closed at 5 PM. Emergency calls — boiler failures, no heating in winter, air conditioning breakdowns in summer — peaked between 4 PM and 7 PM. Roughly 40% of emergency calls arrived after staff had left for the day.',
      'Most emergency calls during summer heat waves arrived between 4 and 7 PM, when homeowners returned from work to find their cooling had failed. The voicemail system captured fewer than 15% of after-hours callers. The rest hung up and called another HVAC provider. The business had no visibility into how many emergency leads were lost because the phone system did not log abandoned calls.',
    ],
    painPoints: [
      '40% of emergency calls arrived after office hours (5 PM–7 PM peak)',
      'Voicemail captured fewer than 15% of after-hours callers',
      'No abandoned call logging — total lead loss was invisible',
      'Emergency call-outs worth £150–£400 each were going to competitors',
      'On-call technicians had availability but no system to route calls to them',
      'Existing phone system could not distinguish emergency from routine calls',
      'No triage mechanism to prioritise urgent situations',
    ],
  };

  const solutionSection: CaseStudyTemplateSection = {
    type: 'solution',
    solutionHeading: 'The System: After-Hours Call Detection With Emergency Lead Routing',
    solutionDescription:
      'The implementation built an automated layer between the phone system and the on-call team. After-hours calls were detected, triaged, and routed to the right technician without requiring office staff to be present.',
    whatWeDid: [
      {
        title: 'After-Hours Call Detection',
        description:
          'Configured the phone system to identify calls arriving outside office hours and route them into a separate automated flow rather than voicemail.',
        icon: 'Phone',
      },
      {
        title: 'Emergency Triage SMS',
        description:
          'Sent an instant SMS to after-hours callers asking them to confirm the nature of the issue (no heating, no cooling, water leak, other). Responses determined routing priority.',
        icon: 'MessageSquare',
      },
      {
        title: 'On-Call Technician Routing',
        description:
          'Emergency-confirmed leads were routed directly to the on-call technician\u2019s mobile with caller details, issue type, and location.',
        icon: 'MapPin',
      },
      {
        title: 'CRM Lead Logging',
        description:
          'Every after-hours call — answered or not — was logged in the CRM with timestamp, caller details, issue type, and resolution status.',
        icon: 'Database',
      },
      {
        title: 'Next-Day Follow-Up Queue',
        description:
          'Non-emergency after-hours calls were queued for next-morning follow-up with a priority flag, ensuring no lead was forgotten.',
        icon: 'ListTodo',
      },
    ],
  };

  const workflowsSection: CaseStudyTemplateSection = {
    type: 'workflows',
    badge: 'Routing Workflow',
    title: 'Emergency Call Routing Flow',
    description: 'The automated triage and routing sequence for after-hours emergency calls.',
    workflows: [
      {
        trigger: 'Call arrives after 5 PM or on weekends/bank holidays',
        actions: [
          'Caller receives automated greeting with triage options',
          'SMS sent with issue-type selection (no heating / no cooling / leak / other)',
          'Emergency responses routed to on-call technician with full caller details',
          'CRM lead created with after-hours tag and issue classification',
        ],
      },
      {
        trigger: 'Caller selects non-emergency or does not respond to SMS',
        actions: [
          'Lead queued for next-morning follow-up',
          'Confirmation SMS sent: "We\u2019ve logged your request and will call you by 9 AM"',
          'CRM lead created with non-emergency flag and follow-up task',
        ],
      },
    ],
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        metric: 'Emergency Lead Capture Rate',
        before: '15% of after-hours callers left voicemail',
        after: '91% of after-hours callers engaged via SMS triage',
        improvement: '+76 percentage points',
        description:
          'The SMS triage replaced voicemail entirely. Callers who would have hung up instead responded to a simple text-based triage within seconds.',
      },
      {
        metric: 'After-Hours Response Time',
        before: 'Next business day (12\u201318 hours)',
        after: 'Under 2 minutes for emergency-classified calls',
        improvement: 'Same-evening response',
        description:
          'Emergency calls reached the on-call technician within minutes rather than waiting until the next morning.',
      },
      {
        metric: 'Monthly Emergency Revenue',
        before: 'Estimated £6,400/month lost from after-hours call abandonment',
        after: 'Revenue captured through same-evening emergency dispatch',
        improvement: '+£6,400/month recovered',
        description:
          'Routing emergency calls to available technicians converted after-hours leads that previously went to competitors.',
      },
      {
        metric: 'Technician Utilisation',
        before: 'On-call technicians available but receiving no calls after 5 PM',
        after: 'On-call team handling 8\u201312 emergency dispatch calls per week',
        improvement: 'Idle on-call capacity activated',
        description:
          'The routing system connected caller demand to technician availability that already existed but was not being used.',
      },
      {
        metric: 'Call Visibility',
        before: 'No data on after-hours call volume or abandonment',
        after: 'Complete logging of every after-hours call with type, outcome, and revenue',
        improvement: 'Full operational visibility',
        description:
          'For the first time, the business could see exactly how many after-hours calls arrived, what type they were, and whether they converted.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Losing Emergency Calls After Hours?',
    body: 'Book a free 20-minute call and we\u2019ll show you how an after-hours routing system could capture the emergency leads your HVAC business is currently missing.',
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
    slug: 'hvac-emergency-lead-routing',
    title: 'HVAC Emergency Lead Routing',
    metaTitle: 'Why HVAC Emergency Calls Get Missed (And the Routing System That Solved It)',
    metaDescription:
      'How a Manchester HVAC company captured 91% of after-hours emergency calls using automated SMS triage and on-call technician routing.',
    industryCategory: 'home-services',
    industryLabel: 'Home Services',
    industries: ['hvac'],
    systems: ['ai-lead-handling'],
    topics: ['missed-calls', 'emergency-handling', 'lead-routing'],
    publishDate: '2025-11-01',
    client: 'Thermal Comfort Services',
    location: 'Manchester, UK',
    business: 'Thermal Comfort Services',
    duration: '6 weeks',
    completedDate: 'November 2025',
    heroHeadline:
      'How an HVAC Company Captured 91% of After-Hours Emergency Calls With Automated Routing',
    keyMetrics: keyMetrics.map(metric => ({
      value: metric.value,
      label: metric.label,
      ...(metric.color ? { color: metric.color } : {}),
    })),
    tags: ['Emergency Routing', 'After-Hours Leads', 'HVAC', 'Call Triage', 'Lead Recovery'],
    seo: {
      canonical: '/case-study/hvac-emergency-lead-routing',
      openGraph: {
        title: 'Why HVAC Emergency Calls Get Missed | MindWP Case Study',
        description:
          'How a Manchester HVAC company captured 91% of after-hours emergency calls using automated SMS triage and on-call technician routing.',
      },
    },
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'Operational Problem' },
      problem: { challengeBadgeLabel: 'The Emergency Gap' },
      workflows: { workflowsBadgeLabel: 'Routing Workflow' },
      solution: { solutionBadgeLabel: 'System Implementation' },
      results: {
        detailedResultsBadgeLabel: 'Measured Results',
        detailedResultsSectionTitle: 'Before & After: After-Hours Emergency Performance',
      },
      cta: {
        primaryButtonLabel: 'Route Emergency Leads Faster',
        primaryButtonHref: buildContactHref({
          system: 'ai-lead-handling',
          sourceType: 'case-study',
          slug: 'hvac-emergency-lead-routing',
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

export const hvacEmergencyLeadRouting: CaseStudyData = buildHvacEmergencyLeadRouting();
