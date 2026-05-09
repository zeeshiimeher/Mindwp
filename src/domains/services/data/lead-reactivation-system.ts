import { buildServiceSeo } from '@/domains/services/seo';
import type { ServicePageData } from '@/domains/services/types';
import { buildServiceContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

type SectionHeader = { kicker: string; title: string; description?: string };

type DormantSource = {
  id: string;
  origin: string;
  ageBand: string;
  signal: string;
  state: 'workable' | 'caution' | 'leave';
};

type SequenceStep = {
  id: string;
  num: string;
  timing: string;
  title: string;
  detail: string;
};

type ReadinessRow = {
  id: string;
  criterion: string;
  good: string;
  bad: string;
};

type BridgeRow = { id: string; belongsTo: 'reactivation' | 'crm'; point: string };
type FitColumn = {
  id: string;
  variant: 'fit' | 'not-fit';
  label: string;
  title: string;
  signals: string[];
};

type LeadReactivationSections = {
  dormantLeadMap: {
    header: SectionHeader;
    label: string;
    sources: DormantSource[];
    closing: string;
  };
  reactivationPath: { header: SectionHeader; steps: SequenceStep[]; closing: string };
  dataReadiness: { header: SectionHeader; rows: ReadinessRow[]; closing: string };
  handoffBack: { header: SectionHeader; rows: BridgeRow[]; rule: string };
  fitBoundaries: { header: SectionHeader; columns: FitColumn[]; closing: string };
  faq: { header: SectionHeader; items: Array<{ id: string; question: string; answer: string }> };
};

const slug = 'lead-reactivation-system';
const system = 'revenue-growth';
const contactHref = buildServiceContactHref({ system, slug });

export const leadReactivationSystemPage: ServicePageData<LeadReactivationSections> = {
  seo: buildServiceSeo({
    slug,
    title: 'Lead Reactivation System for Service Businesses',
    description:
      'A focused route for old enquiries, dormant leads and quotes that never had a proper follow-up path.',
  }),
  slug,
  badge: 'Lead Reactivation',
  category: 'Revenue Recovery',
  systems: [system],
  topics: ['client-reactivation', 'follow-up'],
  hero: {
    badge: 'Lead Reactivation',
    title: 'Old Enquiries Still Have Signals.',
    description:
      'Quotes went quiet. People asked and never booked. A lead reactivation system looks at what is already sitting there and opens a clean route back into conversation.',
    list: ['Old quotes', 'Dormant leads', 'Honest follow-up'],
  },
  sections: {
    dormantLeadMap: {
      header: {
        kicker: 'Dormant Inventory',
        title: 'Some work was not lost. It was never followed up properly.',
        description:
          'Old enquiries collect in places nobody checks. Knowing where they are is the first step.',
      },
      label: 'Where dormant interest tends to sit',
      sources: [
        {
          id: 'd-01',
          origin: 'Old website enquiry forms',
          ageBand: '6\u201318 months',
          signal: 'People who asked, got a reply, and went quiet.',
          state: 'workable',
        },
        {
          id: 'd-02',
          origin: 'Quotes sent without follow-up',
          ageBand: '3\u201312 months',
          signal: 'Decisions stalled. Often a polite nudge is enough.',
          state: 'workable',
        },
        {
          id: 'd-03',
          origin: 'Past job customers — no recent contact',
          ageBand: '12\u201336 months',
          signal: 'Real history exists. The relationship still has weight.',
          state: 'workable',
        },
        {
          id: 'd-04',
          origin: 'Cold list signups with no consent record',
          ageBand: 'Unknown',
          signal: 'No proof of permission. Treat as off-limits.',
          state: 'leave',
        },
        {
          id: 'd-05',
          origin: 'Bought lists or scraped contacts',
          ageBand: 'Any',
          signal: 'Wrong route entirely. Acquisition belongs elsewhere.',
          state: 'leave',
        },
      ],
      closing:
        'Workable inventory is usually smaller than it looks. That is fine. A short, honest list outperforms a big, indiscriminate one.',
    },
    reactivationPath: {
      header: {
        kicker: 'Reactivation Sequence',
        title: 'The route back needs timing, context and restraint.',
        description:
          'A short sequence with real reasons works better than a long one designed to wear people down.',
      },
      steps: [
        {
          id: 'r-01',
          num: '01',
          timing: 'Day 0',
          title: 'A short, human re-introduction.',
          detail:
            'Reference the original conversation. Acknowledge time has passed. No script energy.',
        },
        {
          id: 'r-02',
          num: '02',
          timing: 'Day 5',
          title: 'A specific, useful prompt.',
          detail: 'Mention something current and relevant. Keep it short. Make replying easy.',
        },
        {
          id: 'r-03',
          num: '03',
          timing: 'Day 14',
          title: 'A clean exit message if no reply.',
          detail:
            'Polite acknowledgement that the time may not be right. Door left open without pressure.',
        },
        {
          id: 'r-04',
          num: '04',
          timing: 'On reply',
          title: 'Direct human handoff.',
          detail:
            'A real reply from a real owner within hours, not days. The list disappears at this point.',
        },
      ],
      closing:
        'Three messages. Zero gimmicks. The point is to reopen a door for the people who actually want it open.',
    },
    dataReadiness: {
      header: {
        kicker: 'Readiness Check',
        title: 'The quality of the old list decides what is possible.',
        description:
          'Consent, data condition and available context decide what can be followed up and what should be left alone.',
      },
      rows: [
        {
          id: 'rd-01',
          criterion: 'Consent record',
          good: 'Clear opt-in or prior business relationship.',
          bad: 'No record of how the contact was collected.',
        },
        {
          id: 'rd-02',
          criterion: 'Data freshness',
          good: 'Email and phone match the original enquiry.',
          bad: 'Bounces likely. Numbers reassigned.',
        },
        {
          id: 'rd-03',
          criterion: 'Conversation context',
          good: 'Notes or thread show what was discussed.',
          bad: 'No context. A reactivation message would feel cold.',
        },
        {
          id: 'rd-04',
          criterion: 'Owner availability',
          good: 'A real person ready to reply quickly to any response.',
          bad: 'Nobody able to follow up the day a reply lands.',
        },
      ],
      closing:
        'Readiness in green for at least three rows is the realistic threshold. Otherwise, fix the data first.',
    },
    handoffBack: {
      header: {
        kicker: 'System Bridge',
        title: 'Warm replies belong back in CRM, not in the reactivation list.',
        description:
          'Reactivation produces conversations. CRM & Automation owns ownership and follow-up after that.',
      },
      rows: [
        {
          id: 'b-01',
          belongsTo: 'reactivation',
          point: 'Cleaning and assessing the dormant inventory.',
        },
        {
          id: 'b-02',
          belongsTo: 'reactivation',
          point: 'Designing the short reactivation sequence.',
        },
        {
          id: 'b-03',
          belongsTo: 'reactivation',
          point: 'Sending the messages with consent and timing in mind.',
        },
        {
          id: 'b-04',
          belongsTo: 'crm',
          point: 'Assigning a clear owner once a reply arrives.',
        },
        {
          id: 'b-05',
          belongsTo: 'crm',
          point: 'Tracking the conversation through to a decision.',
        },
        {
          id: 'b-06',
          belongsTo: 'crm',
          point: 'Holding the relationship long after this work is finished.',
        },
      ],
      rule: 'Reactivation reopens the door. CRM owns what walks through it.',
    },
    fitBoundaries: {
      header: {
        kicker: 'Fit Filter',
        title: 'Useful when old interest exists and follow-up was weak.',
        description:
          'The work is about handling existing opportunities properly, not promising recovered revenue.',
      },
      columns: [
        {
          id: 'fit',
          variant: 'fit',
          label: 'Strong fit',
          title: 'Real history of enquiries and customers, weak follow-up.',
          signals: [
            'Years of enquiries sitting in inboxes and forms.',
            'Quotes sent and never chased.',
            'Past customers with no contact since the last job.',
            'Owner ready to reply to anyone who responds.',
          ],
        },
        {
          id: 'not-fit',
          variant: 'not-fit',
          label: 'Not a fit',
          title: 'No usable history or no consent.',
          signals: [
            'New business with no prior list to reactivate.',
            'No record of how contacts were collected.',
            'Bought, scraped or rented lists.',
            'Nobody available to follow up replies.',
          ],
        },
      ],
      closing:
        'The honest answer for some businesses is: not yet. That is fine. Acquisition belongs in Local SEO Authority instead.',
    },
    faq: {
      header: {
        kicker: 'Questions',
        title: 'Common questions about lead reactivation.',
        description: 'Short answers about lists, consent and what happens when people reply.',
      },
      items: [
        {
          id: 'reactivation-faq-list',
          question: 'Do we need a clean list before starting?',
          answer:
            'Cleaner is better. The work begins with a short readiness check. If the list is unworkable, fixing the data is the first step.',
        },
        {
          id: 'reactivation-faq-consent',
          question: 'What about consent and unsubscribes?',
          answer:
            'Only contacts with a clear opt-in or a prior business relationship are reactivated. Unsubscribes and bounces are honoured.',
        },
        {
          id: 'reactivation-faq-volume',
          question: 'Will this guarantee a percentage of replies?',
          answer:
            'No. Response rates depend on list quality, time elapsed and the strength of the original conversation.',
        },
        {
          id: 'reactivation-faq-crm',
          question: 'How does this fit with CRM & Automation?',
          answer:
            'Reactivation produces warm replies. From the moment someone responds, the conversation belongs back in the CRM with a clear owner.',
        },
      ],
    },
  },
  cta: {
    heading: {
      kicker: 'Next Step',
      title: 'See whether reactivation is the right route.',
      description:
        'Tell us what is already sitting in inboxes, quote folders or past-customer lists. We will check what is workable.',
    },
    actions: [{ label: PRIMARY_CTA_LABEL, href: contactHref, primary: true }],
    expectations: [
      { num: '01', text: 'We look at what dormant inventory exists.' },
      { num: '02', text: 'We check consent, data and context.' },
      { num: '03', text: 'We outline the short, honest sequence.' },
    ],
  },
};
