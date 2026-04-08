import type { CaseStudyContent, CaseStudyTemplateSection } from '@/domains/case-studies/templates';
import { buildContactHref } from '@/lib/contact/contactHref';

import type { CaseStudyData } from '../types';

function buildLawFirmClientIntakeAutomation(): CaseStudyData {
  const heroIntroHtml = (
    <>
      Whitfield Legal is a three-solicitor firm in Plymouth specialising in personal injury,
      employment law, and housing disputes. The firm received 30\u201335 new enquiries per week —
      mostly via the website contact form and phone calls. Each enquiry required an intake process
      to determine the matter type, assess eligibility, and gather initial documents before the
      first consultation. This was handled manually by the receptionist and junior solicitor over
      multiple phone calls and emails. The process took 3\u20135 working days per client and created
      a bottleneck that delayed consultations and frustrated prospective clients who expected faster
      responses.
    </>
  );

  const keyMetrics: CaseStudyContent['keyMetrics'] = [
    {
      label: 'Intake Time',
      value: '4 days → 6hr',
      icon: 'Clock',
      color: 'case-study-accent--success',
    },
    {
      label: 'Completion Rate',
      value: '58% → 87%',
      icon: 'CheckCircle2',
      color: 'case-study-accent--primary',
    },
    {
      label: 'Admin Hours Saved',
      value: '18hr/wk',
      icon: 'Timer',
      color: 'case-study-accent--amber',
    },
    {
      label: 'Enquiry-to-Consult',
      value: '+41%',
      icon: 'TrendingUp',
      color: 'case-study-accent--purple',
    },
  ];

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'The Problem: Manual Client Intake That Took Days and Lost Prospects',
    problemDescription: [
      'Every new enquiry at Whitfield Legal triggered the same manual process: the receptionist called the enquirer, asked preliminary questions, sent an email requesting documents, waited for the response, chased missing items, and then passed the file to a solicitor for review. This multi-step process averaged 3\u20135 working days per client.',
      'During this period, clients were left waiting with minimal communication. Many had already contacted 2\u20133 firms, and the firm that completed intake fastest typically won the instruction. Whitfield\u2019s manual process meant 42% of new enquiries abandoned the intake process before completion \u2014 either going to a faster competitor or simply giving up. The junior solicitor spent approximately 18 hours per week on repetitive intake administration rather than billable legal work.',
    ],
    painPoints: [
      'Average intake time of 3\u20135 working days per new client',
      '42% of enquiries abandoned intake before completion',
      'Junior solicitor spent 18+ hours/week on intake administration',
      'Missing documents required multiple chase emails and calls',
      'No automated communication during the waiting period',
      'Competitors completing intake in hours, not days',
      'Enquirers contacted 2\u20133 firms simultaneously — fastest intake won',
    ],
  };

  const solutionSection: CaseStudyTemplateSection = {
    type: 'solution',
    solutionHeading:
      'The System: Automated Intake Pipeline With Document Collection and Status Updates',
    solutionDescription:
      'The solution replaced the manual phone-and-email intake with a structured digital pipeline that guided new clients through intake steps automatically — collecting information, requesting documents, and keeping clients informed at every stage.',
    whatWeDid: [
      {
        title: 'Digital Intake Form',
        description:
          'Replaced the initial phone screening with a structured online intake form that captured matter type, key details, and eligibility information in one step.',
        icon: 'FileText',
      },
      {
        title: 'Document Upload Portal',
        description:
          'Built a secure document upload step where clients could submit required items (contracts, correspondence, photos) directly from their phone or computer.',
        icon: 'Upload',
      },
      {
        title: 'Automated Status Updates',
        description:
          'Configured SMS and email updates at each pipeline stage so clients knew exactly where their enquiry stood — eliminating the silence that caused dropouts.',
        icon: 'Bell',
      },
      {
        title: 'Missing Document Chaser',
        description:
          'Built automated reminders for incomplete document submissions, sent at 24 hours and 48 hours, with a link back to the upload portal.',
        icon: 'RefreshCw',
      },
      {
        title: 'Solicitor Review Queue',
        description:
          'Completed intakes were pushed to a review queue with all information and documents attached, ready for solicitor assessment without additional admin work.',
        icon: 'ClipboardList',
      },
    ],
  };

  const workflowsSection: CaseStudyTemplateSection = {
    type: 'workflows',
    badge: 'Intake Workflow',
    title: 'Enquiry → Intake → Consultation-Ready',
    description: 'The automated pipeline from first contact to solicitor review.',
    workflows: [
      {
        trigger: 'New enquiry submitted (website form or phone)',
        actions: [
          'CRM record created with enquiry details',
          'Automated intake form link sent via SMS + email',
          'Client receives confirmation with timeline expectation',
        ],
      },
      {
        trigger: 'Client completes intake form',
        actions: [
          'Document upload link sent automatically',
          'Status update: "Documents required"',
          'If documents not uploaded in 24 hours: automated reminder',
          'If documents not uploaded in 48 hours: second reminder with phone option',
        ],
      },
      {
        trigger: 'All documents received',
        actions: [
          'Status update: "Under review"',
          'Complete file pushed to solicitor review queue',
          'Solicitor receives notification with full intake summary',
        ],
      },
    ],
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        metric: 'Average Intake Time',
        before: '3\u20135 working days of manual back-and-forth',
        after: '6 hours average from enquiry to consultation-ready file',
        improvement: '93% faster',
        description:
          'The automated pipeline eliminated the multi-day email chains and phone tags that had slowed intake. Most clients completed the full process within hours of their initial enquiry.',
      },
      {
        metric: 'Intake Completion Rate',
        before: '58% — 42% of enquiries abandoned during the manual process',
        after: '87% — structured steps and automated reminders kept clients engaged',
        improvement: '+29 percentage points',
        description:
          'Continuous status updates and automated document chasers addressed the two main causes of dropout: uncertainty about progress and forgetting to send documents.',
      },
      {
        metric: 'Admin Hours Saved',
        before: 'Junior solicitor spent 18+ hours/week on intake administration',
        after: 'Under 2 hours/week — reviewing completed files only',
        improvement: '18 hours/week recovered for billable work',
        description:
          'The automated system handled form delivery, document collection, reminders, and status updates — leaving only the solicitor review step as manual work.',
      },
      {
        metric: 'Enquiry-to-Consultation Conversion',
        before: '34% — many enquiries never reached consultation due to slow intake',
        after: '48% — faster intake meant more clients progressed to the first meeting',
        improvement: '+41% relative increase',
        description:
          'Speed-to-consultation gave Whitfield Legal a competitive advantage over firms still relying on manual intake processes.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Losing Clients During the Intake Process?',
    body: 'Book a free 20-minute call and we\u2019ll show you how an automated intake system could reduce intake time and convert more enquiries into consultations.',
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
    slug: 'law-firm-client-intake-automation',
    title: 'Law Firm Client Intake Automation',
    metaTitle:
      'Why Law Firms Lose Enquiries During Intake (And the Automation That Cuts It to Hours)',
    metaDescription:
      'How a Plymouth law firm reduced client intake time from 4 days to 6 hours, improved completion from 58% to 87%, and freed 18 admin hours per week.',
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
    heroHeadline:
      'How a Law Firm Cut Intake Time From 4 Days to 6 Hours and Recovered 18 Admin Hours Per Week',
    keyMetrics: keyMetrics.map(metric => ({
      value: metric.value,
      label: metric.label,
      ...(metric.color ? { color: metric.color } : {}),
    })),
    tags: ['Client Intake', 'Law Firm', 'Automation', 'CRM Pipeline', 'Professional Services'],
    seo: {
      canonical: '/case-study/law-firm-client-intake-automation',
      openGraph: {
        title: 'Why Law Firms Lose Enquiries During Intake | MindWP Case Study',
        description:
          'How a Plymouth law firm cut intake time from 4 days to 6 hours using automated pipeline and document collection.',
      },
    },
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'System Implementation' },
      problem: { challengeBadgeLabel: 'The Intake Bottleneck' },
      workflows: { workflowsBadgeLabel: 'Intake Workflow' },
      solution: { solutionBadgeLabel: 'System Architecture' },
      results: {
        detailedResultsBadgeLabel: 'Measured Results',
        detailedResultsSectionTitle: 'Before & After: Intake Performance',
      },
      cta: {
        primaryButtonLabel: 'Book More Client Consultations',
        primaryButtonHref: buildContactHref({
          system: 'revenue-growth',
          sourceType: 'case-study',
          slug: 'law-firm-client-intake-automation',
        }),
        metaItems: [
          { text: 'Free 20-minute call' },
          { text: 'No contracts' },
          { text: 'Built for law firms' },
        ],
      },
    },
  };
}

export const lawFirmClientIntakeAutomation: CaseStudyData = buildLawFirmClientIntakeAutomation();
