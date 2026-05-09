import { buildServiceSeo } from '@/domains/services/seo';
import type { ServicePageData } from '@/domains/services/types';
import { buildServiceContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

// =============================================================================
// Revenue Growth — Tier-1 service flagship page
// Sections: revenueLeakMap · recoveryPath · systemBridges · fitBoundaries · faq
// =============================================================================

type SectionHeader = { kicker: string; title: string; description?: string };

type LeakRow = {
  id: string;
  origin: string;
  signal: string;
  exposure: string;
  state: 'workable' | 'caution' | 'leave';
};

type SequenceStep = {
  id: string;
  num: string;
  timing: string;
  title: string;
  detail: string;
};

type BridgeRow = {
  id: string;
  belongsTo: 'revenue-growth' | 'other-systems';
  point: string;
};

type FitColumn = {
  id: string;
  variant: 'fit' | 'not-fit';
  label: string;
  title: string;
  signals: string[];
};

type RevenueGrowthSections = {
  revenueLeakMap: {
    header: SectionHeader;
    label: string;
    rows: LeakRow[];
    closing: string;
  };
  recoveryPath: { header: SectionHeader; steps: SequenceStep[]; closing: string };
  systemBridges: { header: SectionHeader; rows: BridgeRow[]; rule: string };
  fitBoundaries: { header: SectionHeader; columns: FitColumn[]; closing: string };
  faq: { header: SectionHeader; items: Array<{ id: string; question: string; answer: string }> };
};

const slug = 'revenue-growth';
const system = 'revenue-growth';
const contactHref = buildServiceContactHref({ system, slug });

export const revenueGrowthPage: ServicePageData<RevenueGrowthSections> = {
  seo: buildServiceSeo({
    slug,
    title: 'Revenue Growth Systems for Service Businesses',
    description:
      'Where revenue actually leaks, what is recoverable, and the connected steps that bring it back without bolting on more tools.',
  }),
  slug,
  badge: 'Revenue Growth',
  category: 'Revenue Recovery',
  systems: [system],
  topics: [
    'revenue-tracking',
    'revenue-visibility',
    'conversion-tracking',
    'customer-lifetime-value',
    'client-reactivation',
  ],
  hero: {
    badge: 'Revenue Growth',
    title: 'Revenue Leaks Are Quiet. Until They Add Up.',
    description:
      'Quotes that stalled. Customers who drifted. Conversations that paused mid-step. Revenue Growth looks at where the value is already sitting and works out what is honestly recoverable.',
    list: ['Quiet leaks', 'Recoverable value', 'Connected recovery'],
  },
  sections: {
    revenueLeakMap: {
      header: {
        kicker: 'Leak Map',
        title: 'Most revenue does not vanish all at once.',
        description:
          'It slips between steps that nobody owns. Naming where it leaks is the first honest move.',
      },
      label: 'Where revenue tends to leak',
      rows: [
        {
          id: 'rl-01',
          origin: 'Quotes sent and never followed up',
          signal: 'Real intent. The decision stalled with no nudge from this side.',
          exposure: 'Often the largest single source of recoverable value.',
          state: 'workable',
        },
        {
          id: 'rl-02',
          origin: 'Past customers with no contact since the last job',
          signal: 'A relationship exists. Nobody is keeping it warm.',
          exposure: 'Repeat work and referrals quietly drift to whoever stays in touch.',
          state: 'workable',
        },
        {
          id: 'rl-03',
          origin: 'Enquiries answered slowly',
          signal: 'The first response landed after the caller had already chosen someone else.',
          exposure: 'Speed of reply usually decides who gets the work.',
          state: 'workable',
        },
        {
          id: 'rl-04',
          origin: 'Bookings that quietly slipped',
          signal: 'No reminder, no confirmation, no clear ownership of the calendar.',
          exposure: 'No-shows and cancellations cost more than missed enquiries.',
          state: 'caution',
        },
        {
          id: 'rl-05',
          origin: 'Bought lists or scraped contacts',
          signal: 'No consent record. Wrong starting point entirely.',
          exposure: 'Acquisition belongs in Local SEO Authority, not here.',
          state: 'leave',
        },
      ],
      closing:
        'Workable leaks are rarely glamorous. They are usually the ones the business already knows about and never quite gets to.',
    },
    recoveryPath: {
      header: {
        kicker: 'Recovery Rhythm',
        title: 'Recovery is a short, honest sequence — not a campaign.',
        description:
          'Each step has a job. The order matters. Skipping the audit is what makes most recovery work feel pushy.',
      },
      steps: [
        {
          id: 'rp-01',
          num: '01',
          timing: 'Audit',
          title: 'Look at what is actually sitting there.',
          detail:
            'Quotes, dormant customers, paused conversations and stalled bookings. No assumptions about volume.',
        },
        {
          id: 'rp-02',
          num: '02',
          timing: 'Instrument',
          title: 'Make the leaks visible inside the CRM.',
          detail:
            'States, owners and timings — so the same gaps are not invisible the next quarter.',
        },
        {
          id: 'rp-03',
          num: '03',
          timing: 'Recover',
          title: 'Open the right doors at the right time.',
          detail:
            'Short, specific outreach to the workable list. Real handoff to a real person on reply.',
        },
        {
          id: 'rp-04',
          num: '04',
          timing: 'Review',
          title: 'Keep what worked. Quietly retire what did not.',
          detail: 'A small, repeatable rhythm beats a large, irregular push every time.',
        },
      ],
      closing:
        'The point is durable recovery, not a one-off lift. The system has to keep working when nobody is watching it.',
    },
    systemBridges: {
      header: {
        kicker: 'System Bridges',
        title: 'Revenue Growth coordinates. It does not replace the other systems.',
        description:
          'Each connected system owns its part. Revenue Growth makes sure the value sitting between them is not lost.',
      },
      rows: [
        {
          id: 'sb-01',
          belongsTo: 'revenue-growth',
          point: 'Mapping where revenue is actually leaking across the business.',
        },
        {
          id: 'sb-02',
          belongsTo: 'revenue-growth',
          point: 'Sequencing the recovery work so it stays honest and durable.',
        },
        {
          id: 'sb-03',
          belongsTo: 'revenue-growth',
          point: 'Making the leaks visible enough to manage quarter on quarter.',
        },
        {
          id: 'sb-04',
          belongsTo: 'other-systems',
          point: 'Lead Reactivation reopens the dormant enquiry list.',
        },
        {
          id: 'sb-05',
          belongsTo: 'other-systems',
          point: 'AI Lead Handling shortens the response time on new enquiries.',
        },
        {
          id: 'sb-06',
          belongsTo: 'other-systems',
          point: 'CRM & Automation owns ownership and follow-up after a reply.',
        },
        {
          id: 'sb-07',
          belongsTo: 'other-systems',
          point: 'Reputation & Reviews keeps the trust signal warm in the background.',
        },
      ],
      rule: 'Revenue Growth names the leak. The connected system fixes it.',
    },
    fitBoundaries: {
      header: {
        kicker: 'Fit Filter',
        title: 'Useful when real value already exists and nobody is chasing it.',
        description:
          'The work is about handling what is already there properly, not promising recovered revenue.',
      },
      columns: [
        {
          id: 'fit',
          variant: 'fit',
          label: 'Strong fit',
          title: 'Established business with quiet leaks the team already knows about.',
          signals: [
            'Years of quotes, customers and conversations sitting in inboxes.',
            'A CRM that is connected enough to instrument honestly.',
            'An owner ready to commit to a short, durable rhythm.',
            'Comfortable with directional results, not guaranteed numbers.',
          ],
        },
        {
          id: 'not-fit',
          variant: 'not-fit',
          label: 'Not a fit',
          title: 'Brand-new business or no usable history yet.',
          signals: [
            'No prior list of quotes, customers or enquiries.',
            'No record of how contacts were collected.',
            'Looking primarily for new acquisition.',
            'Expecting a guaranteed percentage uplift.',
          ],
        },
      ],
      closing:
        'For some businesses the honest answer is: not yet. Acquisition belongs in Local SEO Authority first.',
    },
    faq: {
      header: {
        kicker: 'Questions',
        title: 'Common questions about Revenue Growth.',
        description: 'Short answers about scope, proof and how the connected systems fit together.',
      },
      items: [
        {
          id: 'rev-faq-scope',
          question: 'Is Revenue Growth a marketing or sales service?',
          answer:
            'Neither in the usual sense. It coordinates the connected systems already in place so revenue that is technically already there does not keep slipping out the side.',
        },
        {
          id: 'rev-faq-results',
          question: 'Can you guarantee a percentage uplift?',
          answer:
            'No. Recovery depends on the size and quality of the existing list, the strength of past relationships and the time available to follow up replies properly.',
        },
        {
          id: 'rev-faq-systems',
          question: 'Do we need every other system in place first?',
          answer:
            'A working CRM and a way to respond to replies quickly are the realistic minimum. The rest is layered in only when it earns its place.',
        },
        {
          id: 'rev-faq-cadence',
          question: 'Is this a one-off project or ongoing?',
          answer:
            'The audit and instrumenting is a focused engagement. The recovery rhythm afterwards is intentionally light and repeatable.',
        },
      ],
    },
  },
  cta: {
    heading: {
      kicker: 'Next Step',
      title: 'See where the revenue is actually leaking.',
      description:
        'Tell us what is sitting in quote folders, dormant customer lists or paused conversations. We will look at what is honestly workable.',
    },
    actions: [{ label: PRIMARY_CTA_LABEL, href: contactHref, primary: true }],
    expectations: [
      { num: '01', text: 'We map where the leaks are right now.' },
      { num: '02', text: 'We name what is workable and what is not.' },
      { num: '03', text: 'We outline a short, durable recovery rhythm.' },
    ],
  },
};
