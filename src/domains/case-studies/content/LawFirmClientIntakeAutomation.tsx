import type { CaseStudyContent, CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildLawFirmClientIntakeAutomation(): CaseStudyData {
  const heroIntroHtml = (
    <>
      The enquiry came in. Then the paperwork slowed everything down. Whitfield Legal in Plymouth
      was hearing from the right people, but too many of those early enquiries got stuck in the
      same place: forms to send, documents to chase, and long silences while the client wondered
      whether another firm might move faster.
    </>
  );

  const keyMetrics: CaseStudyContent['keyMetrics'] = [
    {
      label: 'Intake time',
      value: 'Much shorter',
      icon: 'Clock',
      color: 'case-study-accent--success',
    },
    {
      label: 'Completed intakes',
      value: 'A lot more of them',
      icon: 'CheckCircle2',
      color: 'case-study-accent--primary',
    },
    {
      label: 'Admin drag',
      value: 'Far less',
      icon: 'Timer',
      color: 'case-study-accent--amber',
    },
    {
      label: 'Enquiries reaching consultation',
      value: 'Noticeably more',
      icon: 'TrendingUp',
      color: 'case-study-accent--purple',
    },
  ];

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'The first delay was happening before the legal work had even begun',
    problemDescription: [
      'Every new enquiry kicked off the same pattern: a call, a follow-up email, missing paperwork, another chase, then more waiting. None of it was dramatic on its own. Together, it slowed the whole front end of the firm down.',
      'That mattered because prospective clients were often speaking to more than one firm. If one practice made the early steps feel easier and faster, it usually stayed ahead. Whitfield also had the human issue that never fully goes away: some clients still uploaded documents late even after the process improved.',
    ],
    painPoints: [
      'Early intake steps stretched over several days instead of staying close to the first enquiry',
      'Clients were left waiting while the firm chased missing details and documents',
      'Too much repetitive admin was pulling legal staff into non-billable work',
      'Prospective clients were comparing response speed across multiple firms',
      'Late document uploads still created occasional drag even after the process tightened',
    ],
  };

  const processSection: CaseStudyTemplateSection = {
    type: 'process',
    howWeDidIt: [
      {
        phase: 'Step 1',
        title: 'The first response carried the next step with it',
        description:
          'New enquiries were given a clearer route straight away instead of waiting for a series of manual back-and-forth messages.',
        duration: 'Early stage',
      },
      {
        phase: 'Step 2',
        title: 'Document collection stopped depending on somebody remembering to chase',
        description:
          'Clients were nudged toward the missing pieces with clearer prompts so the intake did not stall the moment one item failed to arrive.',
        duration: 'Middle stage',
      },
      {
        phase: 'Step 3',
        title: 'Solicitors received a tidier handoff once the essentials were there',
        description:
          'That meant legal review started from a better-prepared file instead of another round of admin cleanup.',
        duration: 'Review stage',
      },
    ],
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        title: 'Intake moved closer to the first enquiry instead of drifting across the week',
        improvement: 'Clients reached a consultation-ready stage much sooner',
        description:
          'The early steps no longer relied so heavily on repeated manual chasing, which cut down the lag between first contact and a usable file.',
      },
      {
        title: 'More clients stayed with the process long enough to finish it',
        improvement: 'Fewer promising enquiries fell away halfway through',
        description:
          'Clearer updates and less silence helped. Some clients still moved slowly with documents, but far fewer simply disappeared because the intake felt stalled or uncertain.',
      },
      {
        title: 'Legal staff spent less time pushing paperwork uphill',
        improvement: 'More time returned to actual case work',
        description:
          'That changed the feel of the week inside the firm. The front end was still not friction-free, but it was no longer swallowing so much valuable time before a matter had even properly started.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Do enquiries slow down before the matter even starts?',
    body: 'Book a free 20-minute call and we can look at where your intake drags, where clients go quiet, and what would make the first steps easier to complete.',
  };

  const sections: CaseStudyTemplateSection[] = [
    { type: 'hero', introHtml: heroIntroHtml },
    problemSection,
    processSection,
    resultsSection,
    { type: 'more' },
    ctaSection,
  ];

  return {
    slug: 'law-firm-intake-stalled-after-first-enquiry',
    title: 'The enquiry came in. Then the paperwork slowed everything down.',
    metaTitle: 'Law firm intake case study: faster enquiry-to-intake handling',
    metaDescription:
      'How a Plymouth law firm shortened the drag between first enquiry and a consultation-ready file while reducing the admin load on the team.',
    industryCategory: 'professional-services',
    industryLabel: 'Professional Services',
    industries: ['law-firm'],
    systems: ['revenue-growth'],
    topics: ['lead-management', 'crm-pipeline', 'follow-up'],
    publishDate: '2026-04-15',
    client: 'Whitfield Legal',
    location: 'Plymouth, UK',
    business: 'Whitfield Legal',
    duration: '12 weeks',
    completedDate: 'April 2026',
    heroHeadline: 'The enquiry came in. Then the paperwork slowed everything down.',
    keyMetrics: keyMetrics.map(metric => ({
      value: metric.value,
      label: metric.label,
      ...(metric.color ? { color: metric.color } : {}),
    })),
    tags: ['Client Intake', 'Law Firm', 'Document Collection', 'Follow-Up', 'Professional Services'],
    seo: {
      canonical: '/case-studies/law-firm-intake-stalled-after-first-enquiry',
      openGraph: {
        title: 'Law firm intake case study: faster enquiry-to-intake handling',
        description:
          'How a Plymouth law firm shortened the drag between first enquiry and a consultation-ready file while reducing the admin load on the team.',
      },
    },
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'First Enquiry' },
      problem: { challengeBadgeLabel: 'What Was Happening' },
      process: {
        implementationBadgeLabel: 'How It Started Working Differently',
        implementationSectionTitle: 'How It Started Working Differently',
        implementationSectionSubtitle: 'A tighter front end without the same manual drag',
      },
      results: {
        detailedResultsBadgeLabel: 'What Changed',
        detailedResultsSectionTitle: 'What Changed Once Intake Stopped Dragging So Long',
      },
      cta: {
        metaItems: [
          { text: 'Free 20-minute call' },
          { text: 'No pressure' },
          { text: 'Useful for law firms' },
        ],
      },
    },
  };
}

export const lawFirmClientIntakeAutomation: CaseStudyData = buildLawFirmClientIntakeAutomation();
