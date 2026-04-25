import type { CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildLawFirmClientIntakeAutomation(): CaseStudyData {
  const heroIntroHtml = (
    <>
      Halewood &amp; Partners is a small high-street firm in Liverpool handling family, employment,
      and conveyancing matters. New enquiries came in steadily through the website and the phone.
      The difficulty lay in the gap between someone reaching out and that enquiry actually becoming
      a file on a fee earner\u2019s desk.
    </>
  );

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'Potential clients were reaching out. Most never became cases',
    problemDescription: [
      'A reception form would arrive. A short call would follow. The client was told someone would be in touch about next steps. The email about ID, the form to fill in, the conflict check, the engagement letter \u2014 each of those sat in a different place, waiting for somebody to pick them up.',
      'By the time the firm got back in touch properly, days had passed. Some clients had already instructed another solicitor. The ones who stayed often felt nothing had happened since the first conversation.',
    ],
    painPoints: [
      'The first enquiry felt promising, then went quiet for days',
      'ID, conflict checks, and engagement paperwork were scattered',
      'Nobody had a single view of where each new matter was sitting',
      'Reception was chasing clients for documents from a sticky note',
      'Clients heard nothing concrete between the first call and the first appointment',
    ],
  };

  const solutionSection: CaseStudyTemplateSection = {
    type: 'solution',
    solutionHeading: 'They tightened the days between enquiry and instruction',
    solutionDescription:
      'Rather than rely on a fee earner remembering to push each new enquiry forward, the firm gave intake its own clear sequence so nothing sat in nobody\u2019s inbox.',
    whatWeDid: [
      {
        title: 'A clear next-step message after the first call',
        description:
          'New clients received a short, plain English message the same day setting out what was needed and what would happen next.',
        icon: 'MessageSquare',
      },
      {
        title: 'One place to track every new matter',
        description:
          'Each enquiry sat on a single intake list with its stage, the person responsible, and what was waiting on the client.',
        icon: 'ClipboardList',
      },
      {
        title: 'Document requests that did not get forgotten',
        description:
          'ID, proof of address, and any matter-specific documents were requested through one tidy link instead of three separate emails.',
        icon: 'FileText',
      },
      {
        title: 'A measured nudge for missing pieces',
        description:
          'If a client had not sent something back after a few days, a short reminder went out before the matter went cold.',
        icon: 'Bell',
      },
    ],
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        title: 'New enquiries stopped going quiet',
        improvement:
          'A meaningful share of first-call clients ended up actually instructing the firm',
        description:
          'The first 48 hours stopped feeling like a gap. Clients knew what was happening, what was needed from them, and roughly when they would next hear back.',
      },
      {
        title: 'Reception got their day back',
        improvement: 'Less manual chasing of documents and signatures',
        description:
          'The intake list told them what was outstanding instead of them digging through inboxes. The chasing that did need a human voice was much shorter and more focused.',
      },
      {
        title: 'Fee earners started with a tidier file',
        improvement: 'First appointments began with the basics already in place',
        description:
          'When a matter reached a solicitor, the ID was checked, the conflict search was done, and the file note had a clear summary of what the client wanted. The first meeting was about the legal work, not the admin.',
      },
    ],
  };

  const faqSection: CaseStudyTemplateSection = {
    type: 'faq',
    title: 'Questions the partners asked us before we started',
    items: [
      {
        question: 'Will any of this affect how solicitors actually run a matter?',
        answer:
          'No. The change sits before a matter reaches a fee earner. Once a file is opened, the way the solicitor handles it is unchanged. The intake layer just makes sure the file arrives ready, with ID checked and conflict cleared.',
      },
      {
        question: 'How is client confidentiality protected when documents come in this way?',
        answer:
          'Document uploads sit behind a secure link tied to the matter, not over plain email. Only the people assigned to that file can see what has been sent. The firm kept full control of where data lives and how long it stays.',
      },
      {
        question: 'What about clients who prefer to hand things in at the office?',
        answer:
          'They still can. The intake list simply records that the documents arrived another way and marks them complete. Nothing forces a client down a single route. The aim is fewer dropped pieces, not fewer choices.',
      },
      {
        question: 'Did this require any change to the practice management software?',
        answer:
          'No core changes. The new intake step lives alongside the existing case management setup and feeds the matter through once it is ready. The firm did not have to migrate anything to make it work.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'New enquiries stalling between the first call and the first meeting?',
    body: 'Book a free 20-minute call. We can look at where your intake is leaking and how to turn more first calls into instructed matters.',
  };

  const sections: CaseStudyTemplateSection[] = [
    { type: 'hero', introHtml: heroIntroHtml },
    problemSection,
    solutionSection,
    resultsSection,
    faqSection,
    { type: 'more' },
    ctaSection,
  ];

  return {
    seo: {
      title: 'Law firm intake case study: more enquiries becoming clients',
      description:
        'How a Liverpool law firm tightened the days between an enquiry and an instructed matter, and stopped losing clients in the gap.',
      canonical: '/case-studies/law-firm-intake-stalled-after-first-enquiry',
      openGraph: {
        title: 'Law firm intake case study: more enquiries becoming clients',
        description:
          'How a Liverpool law firm tightened the days between an enquiry and an instructed matter.',
      },
    },
    slug: 'law-firm-intake-stalled-after-first-enquiry',
    title: 'Potential clients were reaching out. Most never became cases',
    industryCategory: 'professional-services',
    industryLabel: 'Professional Services',
    industries: ['law-firm'],
    systems: ['revenue-growth'],
    topics: ['lead-qualification', 'follow-up', 'lead-management'],
    publishDate: '2026-03-01',
    client: 'Halewood & Partners',
    location: 'Liverpool, UK',
    business: 'Halewood & Partners',
    duration: '11 weeks',
    completedDate: 'March 2026',
    heroHeadline: 'Potential clients were reaching out. Most never became cases',
    keyMetrics: [],
    tags: ['Law Firm', 'Client Intake', 'Professional Services'],
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'Client Intake' },
      problem: { challengeBadgeLabel: 'What was happening' },
      solution: { solutionBadgeLabel: 'What changed' },
      results: {
        detailedResultsBadgeLabel: 'What improved',
        detailedResultsSectionTitle: 'What changed once intake was tightened up',
      },
      cta: {
        metaItems: [
          { text: 'Free 20-minute call' },
          { text: 'No pressure' },
          { text: 'Useful for small law firms' },
        ],
      },
    },
  };
}

export const lawFirmClientIntakeAutomation: CaseStudyData = buildLawFirmClientIntakeAutomation();
