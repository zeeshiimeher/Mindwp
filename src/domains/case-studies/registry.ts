import type { CaseStudyData } from '@/domains/case-studies/types';

function scenarioStudy(input: {
  slug: string;
  title: string;
  industryCategory: string;
  industryLabel: string;
  industries: string[];
  primarySystem: CaseStudyData['primarySystem'];
  supportingSystems?: CaseStudyData['supportingSystems'];
  topics: string[];
  summary: string;
  problem: string;
  change: string;
  nextStep: string;
}): CaseStudyData {
  return {
    slug: input.slug,
    title: input.title,
    industryCategory: input.industryCategory,
    industryLabel: input.industryLabel,
    industries: input.industries,
    primarySystem: input.primarySystem,
    supportingSystems: input.supportingSystems,
    topics: input.topics,
    publishDate: '2026-01-20',
    client: 'Scenario study',
    location: '',
    business: 'Scenario study',
    duration: '',
    completedDate: '',
    heroHeadline: input.title,
    keyMetrics: [],
    tags: ['Scenario Study', input.industryLabel],
    seo: {
      title: `${input.title} | Scenario Study`,
      description: input.summary,
      canonical: `/case-studies/${input.slug}`,
    },
    sections: [
      { type: 'hero', introHtml: input.summary },
      {
        type: 'problem',
        problemHeading: 'What was breaking',
        problemDescription: [input.problem],
        painPoints: ['The weak point was visible in the working day.'],
      },
      {
        type: 'results',
        results: [
          {
            title: 'What changed',
            description: input.change,
          },
        ],
      },
      {
        type: 'cta',
        heading: 'Review a similar weak point',
        body: input.nextStep,
      },
    ],
  };
}

export const CASE_STUDY_REGISTRY: Record<string, CaseStudyData> = {
  'auto-repair-missed-call-scenario': scenarioStudy({
    slug: 'auto-repair-missed-call-scenario',
    title: 'The phone rang while the bay was full',
    industryCategory: 'automotive-services',
    industryLabel: 'Auto Repair',
    industries: ['auto-repair'],
    primarySystem: 'lead-response-handling',
    supportingSystems: ['follow-up-crm'],
    topics: ['missed-calls', 'lead-response-time'],
    summary:
      'A realistic auto repair scenario where calls arrived during the busiest counter hours and nobody had a clean callback path.',
    problem:
      'Missed calls sat in the phone log until someone had time to check. Urgent repair work and routine bookings were mixed together.',
    change:
      'Missed calls moved into a visible response list with context, owner, and next step.',
    nextStep:
      'Request a system review if missed calls are still handled from memory or a phone log.',
  }),
  'hvac-after-hours-response-scenario': scenarioStudy({
    slug: 'hvac-after-hours-response-scenario',
    title: 'After-hours HVAC calls went cold',
    industryCategory: 'home-services',
    industryLabel: 'HVAC',
    industries: ['hvac'],
    primarySystem: 'lead-response-handling',
    supportingSystems: ['follow-up-crm'],
    topics: ['emergency-handling', 'lead-routing'],
    summary:
      'A realistic HVAC scenario where emergency calls arrived after the office closed and voicemail did not hold the enquiry.',
    problem:
      'The on-call path was unclear. Some urgent callers left messages, but many moved on before morning.',
    change:
      'After-hours enquiries were sorted by urgency and sent into a response path instead of waiting in voicemail.',
    nextStep:
      'Request a system review if evening or weekend calls still disappear before anyone can respond.',
  }),
  'roofing-quote-follow-up-scenario': scenarioStudy({
    slug: 'roofing-quote-follow-up-scenario',
    title: 'Roofing quotes were sent, then forgotten',
    industryCategory: 'home-services',
    industryLabel: 'Roofing',
    industries: ['roofing'],
    primarySystem: 'follow-up-crm',
    supportingSystems: ['lead-response-handling'],
    topics: ['follow-up', 'crm-visibility'],
    summary:
      'A realistic roofing scenario where estimates went out but follow-up depended on the owner remembering later.',
    problem:
      'Quotes had no visible status, owner, or next step after they were sent.',
    change:
      'Each quote had a follow-up date and status so the next conversation was not left to memory.',
    nextStep:
      'Request a system review if quotes are going quiet after the site visit.',
  }),
  'salon-booking-follow-up-scenario': scenarioStudy({
    slug: 'salon-booking-follow-up-scenario',
    title: 'The salon diary looked full, then chairs opened up',
    industryCategory: 'beauty-personal-care',
    industryLabel: 'Hair Salons',
    industries: ['hair-salon'],
    primarySystem: 'follow-up-crm',
    supportingSystems: ['reputation-review-systems'],
    topics: ['service-reminders', 'booking-systems'],
    summary:
      'A realistic salon scenario where reminders, cancellations, and rebooking lived in too many places.',
    problem:
      'The team could not easily see who needed a reminder, who had cancelled, and who should be offered the next opening.',
    change:
      'Bookings, reminders, and next-step notes became visible enough for the team to act before the chair sat empty.',
    nextStep:
      'Request a system review if salon bookings still depend on manual checking and memory.',
  }),
  'contractor-review-proof-scenario': scenarioStudy({
    slug: 'contractor-review-proof-scenario',
    title: 'Good contractor work was not becoming proof',
    industryCategory: 'home-services',
    industryLabel: 'Contractors',
    industries: ['roofing'],
    primarySystem: 'reputation-review-systems',
    supportingSystems: ['local-seo-authority', 'follow-up-crm'],
    topics: ['review-generation', 'feedback-loops'],
    summary:
      'A realistic contractor scenario where happy customers existed, but the review request rarely happened at the right time.',
    problem:
      'Jobs finished well, invoices went out, and the review ask was left until too late or forgotten entirely.',
    change:
      'The review request became part of the completed-work path, with feedback routed before public proof was requested.',
    nextStep:
      'Request a system review if good work is not showing up in reviews and proof.',
  }),
};

export const caseStudies = Object.values(CASE_STUDY_REGISTRY);
