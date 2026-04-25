import type { CaseStudyContent, CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildStormSeasonLeadHandlingSystem(): CaseStudyData {
  const heroIntroHtml = (
    <>
      The storm had passed by Sunday night. Monday still started with a wall of voicemails. Apex
      Roofing in Birmingham would walk in to a full call log, blurred damage photos, and homeowners
      already ringing the next number because they wanted somebody out before the leak spread any
      further.
    </>
  );

  const keyMetrics: CaseStudyContent['keyMetrics'] = [
    {
      label: 'Missed callers kept in play',
      value: 'Most of them',
      icon: 'PhoneIncoming',
      color: 'case-study-accent--success',
    },
    {
      label: 'First reply speed',
      value: 'Within minutes',
      icon: 'Clock',
      color: 'case-study-accent--primary',
    },
    {
      label: 'Monday backlog',
      value: 'Much lighter',
      icon: 'PhoneMissed',
      color: 'case-study-accent--purple',
    },
    {
      label: 'Extra booked inspections',
      value: 'Noticeably more',
      icon: 'TrendingUp',
      color: 'case-study-accent--amber',
    },
  ];

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'By Monday morning, half the best calls had already cooled off',
    problemDescription: [
      'During a normal week, one office line and one administrator were just about enough. After heavy weather, they were not. Calls stacked up before the team had even finished the first coffee.',
      'Some homeowners would leave a message. Plenty would not. If water was still getting in, they were not waiting around for a callback that might happen later in the day.',
    ],
    painPoints: [
      'Storm weeks pushed call volume far past what one person could answer',
      'The best inspection enquiries often landed when the line was already backed up',
      'Voicemails gave the team a delay, not much control',
      'Urgent roof damage and routine calls arrived mixed together',
      'Crews still could not answer every live call during peak weather windows',
    ],
  };

  const workflowsSection: CaseStudyTemplateSection = {
    type: 'workflows',
    badge: 'What Happened Next',
    title: 'A missed call stopped being the end of the conversation',
    description:
      'The change was simple on paper. The important part was that it happened fast enough to matter when the weather had everyone calling at once.',
    workflows: [
      {
        trigger: 'A storm-week call rang out or hit voicemail',
        actions: [
          'A short text went back quickly so the caller knew they had not vanished into a queue',
          'The enquiry landed in one place with the number, timing, and enough context to call back properly',
          'Jobs that looked urgent were easier to spot before the team started working through routine noise',
        ],
      },
      {
        trigger: 'Monday morning opened with a full backlog',
        actions: [
          'The office was working from a live list instead of a pile of voicemails and scraps of paper',
          'Inspectors could pick up the hotter enquiries first',
          'Some callers still needed a second try because storm weeks never tidy up perfectly',
        ],
      },
    ],
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        title: 'Far fewer storm callers disappeared in the first hour',
        improvement: 'More of the urgent ones were still reachable when the team called back',
        description:
          'The main win was not perfection. It was that a missed call no longer meant silence. More homeowners stayed in contact long enough to get an inspection booked instead of moving on immediately.',
      },
      {
        title: 'Monday mornings felt less like damage control',
        improvement: 'The backlog was still real, just no longer blind',
        description:
          'Instead of burning half the day listening through voicemails and trying to work out what mattered first, the team could start with the clearest and hottest enquiries.',
      },
      {
        title: 'The recovered work showed up across storm weeks',
        improvement: 'More inspections and repair jobs stayed in reach',
        description:
          'Not every caller replied. Not every week looked the same. But enough of those missed calls turned back into booked work that the difference was obvious once the next bad-weather spell hit.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Do storm weeks bury the phone before the day starts?',
    body: 'Book a free 20-minute call and we can look at where your missed calls are slipping away when the weather turns and the whole backlog lands at once.',
  };

  const sections: CaseStudyTemplateSection[] = [
    { type: 'hero', introHtml: heroIntroHtml },
    problemSection,
    workflowsSection,
    resultsSection,
    { type: 'more' },
    ctaSection,
  ];

  return {
    seo: {
      title: 'Roofing storm call case study: more missed calls recovered',
      description:
        'How a Birmingham roofing contractor held onto more storm-week enquiries when Monday mornings started with a wall of missed calls.',
      canonical: '/case-studies/roofing-storm-calls-overwhelmed-the-team',
      openGraph: {
        title: 'Roofing storm call case study: more missed calls recovered',
        description:
          'How a Birmingham roofing contractor held onto more storm-week enquiries when Monday mornings started with a wall of missed calls.',
      },
    },
    slug: 'roofing-storm-calls-overwhelmed-the-team',
    title: 'The storm had passed by Sunday night. Monday still started with a wall of voicemails.',
    industryCategory: 'home-services',
    industryLabel: 'Home Services',
    industries: ['roofing'],
    systems: ['ai-lead-handling'],
    topics: ['missed-calls', 'lead-response-time', 'lead-capture'],
    publishDate: '2025-09-15',
    client: 'Apex Roofing',
    location: 'Birmingham, UK',
    business: 'Apex Roofing',
    duration: '5 weeks',
    completedDate: 'September 2025',
    heroHeadline:
      'The storm had passed by Sunday night. Monday still started with a wall of voicemails.',
    keyMetrics: keyMetrics.map(metric => ({
      value: metric.value,
      label: metric.label,
      ...(metric.color ? { color: metric.color } : {}),
    })),
    tags: ['Missed Call Recovery', 'Roofing', 'Storm Damage', 'Lead Handling', 'Home Services'],
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'Storm Week' },
      problem: { challengeBadgeLabel: 'What Was Happening' },
      workflows: { workflowsBadgeLabel: 'What Happened Next' },
      results: {
        detailedResultsBadgeLabel: 'What Changed',
        detailedResultsSectionTitle: 'What Changed Once Storm Calls Were Caught Earlier',
      },
      cta: {
        metaItems: [
          { text: 'Free 20-minute call' },
          { text: 'No pressure' },
          { text: 'Useful for storm-heavy trades' },
        ],
      },
    },
  };
}

export const stormSeasonLeadHandlingSystem: CaseStudyData = buildStormSeasonLeadHandlingSystem();
