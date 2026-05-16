import type { CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildCrmPipelineVisibilityTransformation(): CaseStudyData {
  const heroIntroHtml = (
    <>
      Carter Roofing &amp; Cladding is a small commercial trade business in Birmingham. Enquiries
      came in from the website, the phone, the foreman\u2019s mobile, three different email
      addresses, and the occasional WhatsApp. Plenty of leads. The trouble was working out where any
      one of them actually was on a given day.
    </>
  );

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'They had leads everywhere. No one knew what was happening',
    problemDescription: [
      'A property manager would ring asking what had happened to a quote from three weeks ago. Nobody could find the email easily. The lad who did the survey was on a roof. The owner had a vague memory of the job but not the number. Half the time the answer was, leave it with us, we\u2019ll find out.',
      'When the office sat down to look at it properly, the picture was worse than expected. Big quotes had been sent and never followed up. Smaller jobs had been promised on the phone and forgotten. Nobody was sure what the real value of live work was at any moment.',
    ],
    painPoints: [
      'Enquiries lived in inboxes, mobiles, WhatsApp, and the back of someone\u2019s head',
      'Nobody had one view of every live opportunity',
      'Big quotes were going cold without anyone realising',
      'Property managers chasing updates got vague answers',
      'It was impossible to tell which months were really strong and which only looked it',
    ],
  };

  const solutionSection: CaseStudyTemplateSection = {
    type: 'solution',
    solutionHeading: 'They put every lead in one place and gave each one a clear stage',
    solutionDescription:
      'Rather than trying to remember everything, the team gave each enquiry a single home with a single status, so the picture of live work was never further than a glance away.',
    whatWeDid: [
      {
        title: 'One inbox for new enquiries',
        description:
          'Whether the lead came from the website, the phone, or a forwarded email, it landed in the same place with the same first response.',
        icon: 'Inbox',
      },
      {
        title: 'A clear stage for every job',
        description:
          'Each opportunity moved through a small set of stages: new, surveyed, quoted, chasing, won, lost. Nothing was allowed to live in the gaps.',
        icon: 'Layers',
      },
      {
        title: 'A short morning view for the owner',
        description:
          'A simple list each morning showed what was new, what had gone quiet, and what needed a chase, without scrolling through six months of email.',
        icon: 'Eye',
      },
    ],
  };

  const businessImpactSection: CaseStudyTemplateSection = {
    type: 'business-impact',
    title: 'What this changed for how the business actually ran',
    description:
      'The technical change was small. The change in how the office and the directors lived with the business was bigger than anyone expected.',
    impacts: [
      'Property managers got real answers on the first call instead of a promised callback',
      'Quotes that would have gone cold quietly came back into the conversation',
      'A meaningful chunk of monthly revenue got recovered from work that was already half-priced',
      'The owner could look at one screen and roughly know what was on the table this month',
      'Decisions about hiring, ordering, and chasing stopped being made on gut feel',
      'The reputation of being slow to respond started to ease without the team trying to fix it',
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Leads scattered across inboxes, mobiles, and notepads?',
    body: 'Book a free 20-minute call. We can look at what your live work actually looks like and where you are losing visibility on it.',
  };

  const sections: CaseStudyTemplateSection[] = [
    { type: 'hero', introHtml: heroIntroHtml },
    problemSection,
    solutionSection,
    businessImpactSection,
    ctaSection,
  ];

  return {
    seo: {
      title: 'Trade business case study: one view of every live job',
      description:
        'How a Birmingham roofing and cladding business stopped losing track of leads, quotes, and chases scattered across inboxes, phones and memory.',
      canonical: '/case-studies/leads-everywhere-no-one-knew-what-was-happening',
      openGraph: {
        title: 'Trade business case study: one view of every live job',
        description:
          'How a Birmingham roofing and cladding business stopped losing track of leads.',
      },
    },
    slug: 'leads-everywhere-no-one-knew-what-was-happening',
    title: 'They had leads everywhere. No one knew what was happening',
    industryCategory: 'home-services',
    industryLabel: 'Home Services',
    industries: ['roofing'],
    primarySystem: 'follow-up-crm',
    topics: ['crm-visibility', 'pipeline-visibility', 'crm-pipeline'],
    publishDate: '2026-02-12',
    client: 'Carter Roofing & Cladding',
    location: 'Birmingham, UK',
    business: 'Carter Roofing & Cladding',
    duration: '9 weeks',
    completedDate: 'February 2026',
    heroHeadline: 'They had leads everywhere. No one knew what was happening',
    keyMetrics: [],
    tags: ['Lead Tracking', 'Trade Business', 'Visibility', 'Quote Follow-Up'],
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'Lead Visibility' },
      problem: { challengeBadgeLabel: 'What was happening' },
      solution: { solutionBadgeLabel: 'What changed' },
      cta: {
        metaItems: [
          { text: 'Free 20-minute call' },
          { text: 'No pressure' },
          { text: 'Useful for trade businesses' },
        ],
      },
    },
  };
}

export const crmPipelineVisibilityTransformation: CaseStudyData =
  buildCrmPipelineVisibilityTransformation();
