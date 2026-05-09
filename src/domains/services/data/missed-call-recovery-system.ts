import { buildServiceSeo } from '@/domains/services/seo';
import type { ServicePageData } from '@/domains/services/types';
import { buildServiceContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

type SectionHeader = { kicker: string; title: string; description?: string };

type MissedCallRow = {
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

type RoutingRow = { id: string; criterion: string; good: string; bad: string };

type BridgeRow = { id: string; belongsTo: 'recovery' | 'parent'; point: string };

type FitColumn = {
  id: string;
  variant: 'fit' | 'not-fit';
  label: string;
  title: string;
  signals: string[];
};

type MissedCallSections = {
  missedCallBoard: {
    header: SectionHeader;
    label: string;
    sources: MissedCallRow[];
    closing: string;
  };
  recoveryPath: { header: SectionHeader; steps: SequenceStep[]; closing: string };
  routingMatrix: { header: SectionHeader; rows: RoutingRow[]; closing: string };
  parentHandoff: { header: SectionHeader; rows: BridgeRow[]; rule: string };
  fitBoundaries: { header: SectionHeader; columns: FitColumn[]; closing: string };
  faq: { header: SectionHeader; items: Array<{ id: string; question: string; answer: string }> };
};

const slug = 'missed-call-recovery-system';
const system = 'ai-lead-handling';
const contactHref = buildServiceContactHref({ system, slug });

export const missedCallRecoverySystemPage: ServicePageData<MissedCallSections> = {
  seo: buildServiceSeo({
    slug,
    title: 'Missed Call Recovery System',
    description:
      'A focused route for unanswered calls — fast reply, useful next step and a clean handoff back to the team.',
  }),
  slug,
  badge: 'Missed Call Recovery',
  category: 'Lead Response',
  systems: [system],
  topics: ['missed-calls', 'lead-response-time'],
  hero: {
    badge: 'Missed Call Recovery',
    title: 'The Phone Rings. [[muted:Work Moves On.]]',
    description:
      'A missed call is often a real job. Missed Call Recovery gives unanswered numbers a fast, honest reply and a route back to the team.',
    list: ['Unanswered calls', 'Fast reply', 'Clean handoff'],
  },
  sections: {
    missedCallBoard: {
      header: {
        kicker: 'Missed Moments',
        title: 'A missed call is rarely just a missed call.',
        description:
          'Most unanswered numbers fall into a small set of recognisable situations. Recovery starts by sorting them.',
      },
      label: 'Where unanswered calls usually come from',
      sources: [
        {
          id: 'm-01',
          origin: 'On-site work — phone in another room',
          ageBand: 'Same day',
          signal: 'Real callers, real intent. Worth a fast reply.',
          state: 'workable',
        },
        {
          id: 'm-02',
          origin: 'Out-of-hours calls',
          ageBand: 'Evening / weekend',
          signal: 'Genuine enquiries that arrive when nobody is at the desk.',
          state: 'workable',
        },
        {
          id: 'm-03',
          origin: 'Caller already on the phone',
          ageBand: 'Live overlap',
          signal: 'Quick acknowledgement keeps the conversation alive.',
          state: 'workable',
        },
        {
          id: 'm-04',
          origin: 'Repeat suppliers and known contacts',
          ageBand: 'Any',
          signal: 'A short text is usually enough. No automation needed.',
          state: 'caution',
        },
        {
          id: 'm-05',
          origin: 'Spam and silent calls',
          ageBand: 'Any',
          signal: 'No useful intent. Filter out, do not auto-reply.',
          state: 'leave',
        },
      ],
      closing:
        'The aim is not to reply to every missed number. It is to reply to the ones that matter, fast.',
    },
    recoveryPath: {
      header: {
        kicker: 'Recovery Sequence',
        title: 'The reply needs to feel human and arrive fast.',
        description:
          'A short, accurate sequence beats a long, automated one. The caller needs to know they were seen.',
      },
      steps: [
        {
          id: 'rp-01',
          num: '01',
          timing: 'Within 60 seconds',
          title: 'A short text from the business number.',
          detail:
            'Acknowledge the missed call. Use the business name. No corporate template energy.',
        },
        {
          id: 'rp-02',
          num: '02',
          timing: 'Same reply',
          title: 'A useful next step.',
          detail: 'Booking link, quote form or a clear time the caller can expect a return call.',
        },
        {
          id: 'rp-03',
          num: '03',
          timing: 'On reply',
          title: 'A real owner takes over the conversation.',
          detail:
            'Live replies route to a person, not back into automation. The text path ends there.',
        },
        {
          id: 'rp-04',
          num: '04',
          timing: 'Next available slot',
          title: 'Return call if no text reply.',
          detail:
            'The team calls back as soon as work allows. Nothing is left as just a missed dial.',
        },
      ],
      closing:
        'Three messages, maximum. The point is to convert recognition into a real conversation, fast.',
    },
    routingMatrix: {
      header: {
        kicker: 'Routing Check',
        title: 'Some calls should never get an automated reply.',
        description:
          'Routing rules decide what is recovered automatically and what is held for a human callback.',
      },
      rows: [
        {
          id: 'rt-01',
          criterion: 'Inside business hours',
          good: 'Auto-reply only after a short delay — give a person time to answer.',
          bad: 'Reply triggers instantly while the team could have picked up.',
        },
        {
          id: 'rt-02',
          criterion: 'Repeat caller in the same hour',
          good: 'Hold further auto-replies — escalate to a human callback.',
          bad: 'Same caller receives two or three identical texts.',
        },
        {
          id: 'rt-03',
          criterion: 'Known supplier or staff number',
          good: 'Skip auto-reply entirely. They will call back.',
          bad: 'Suppliers receive booking links meant for new enquiries.',
        },
        {
          id: 'rt-04',
          criterion: 'Spam pattern detected',
          good: 'Suppress reply. Flag for review.',
          bad: 'Spam numbers receive useful business links.',
        },
      ],
      closing: 'The goal is calm coverage. Not noise.',
    },
    parentHandoff: {
      header: {
        kicker: 'System Bridge',
        title: 'Recovery owns the unanswered call. AI Lead Handling owns everything after.',
        description:
          'This work covers the missed-call moment specifically. Wider channels, qualification and routing belong in the parent system.',
      },
      rows: [
        {
          id: 'mb-01',
          belongsTo: 'recovery',
          point: 'Detecting the missed call within seconds.',
        },
        {
          id: 'mb-02',
          belongsTo: 'recovery',
          point: 'Sending a short, business-named reply.',
        },
        {
          id: 'mb-03',
          belongsTo: 'recovery',
          point: 'Filtering spam and repeat patterns.',
        },
        {
          id: 'mb-04',
          belongsTo: 'parent',
          point: 'Handling chat, web forms and other channels.',
        },
        {
          id: 'mb-05',
          belongsTo: 'parent',
          point: 'Qualifying enquiries before they reach the team.',
        },
        {
          id: 'mb-06',
          belongsTo: 'parent',
          point: 'Routing conversations into bookings or CRM ownership.',
        },
      ],
      rule: 'Recovery is one focused part of AI Lead Handling. Wider routing belongs in the parent system.',
    },
    fitBoundaries: {
      header: {
        kicker: 'Fit Filter',
        title: 'Useful when phone enquiries matter and answer rates are inconsistent.',
        description:
          'The work pays off when calls are real, valuable and easy to miss during the working day.',
      },
      columns: [
        {
          id: 'fit',
          variant: 'fit',
          label: 'Strong fit',
          title: 'Phone-led businesses with on-site or field work.',
          signals: [
            'Steady call volume during work hours.',
            'Out-of-hours enquiries that go to voicemail.',
            'A team that wants to call back, not chat-bot.',
            'Real revenue tied to fast response.',
          ],
        },
        {
          id: 'not-fit',
          variant: 'not-fit',
          label: 'Not a fit',
          title: 'Few calls, or calls already handled well.',
          signals: [
            'Reception desk that answers reliably.',
            'Almost no calls outside business hours.',
            'Existing call-answering service already in place.',
            'Volume too low to justify a structured route.',
          ],
        },
      ],
      closing:
        'For very low call volume, a manual habit can be enough. The structure should match the load.',
    },
    faq: {
      header: {
        kicker: 'Questions',
        title: 'Common questions about missed call recovery.',
        description: 'Short answers about timing, routing and team handoff.',
      },
      items: [
        {
          id: 'missed-call-faq-speed',
          question: 'How fast should a missed call be followed up?',
          answer:
            'Fast enough that the caller knows the business has seen them — usually within a minute. Exact timing depends on call type and team availability.',
        },
        {
          id: 'missed-call-faq-ai',
          question: 'Is this the same as AI Lead Handling?',
          answer:
            'It is one focused part of AI Lead Handling. This page covers unanswered calls. The wider system covers chat, forms and qualification.',
        },
        {
          id: 'missed-call-faq-spam',
          question: 'Will it auto-reply to spam?',
          answer:
            'Routing rules suppress replies to known spam patterns and silent calls. The aim is to reply to real callers only.',
        },
        {
          id: 'missed-call-faq-handoff',
          question: 'What happens after the reply?',
          answer:
            'Live replies route to a real person. The auto-text path ends as soon as a conversation begins.',
        },
      ],
    },
  },
  cta: {
    heading: {
      kicker: 'Next Step',
      title: 'See what missed calls are costing.',
      description:
        'Tell us when calls are missed and what usually happens after. We will look at whether recovery is the right scope, or whether wider lead handling fits better.',
    },
    actions: [{ label: PRIMARY_CTA_LABEL, href: contactHref, primary: true }],
    expectations: [
      { num: '01', text: 'We look at when calls are missed and why.' },
      { num: '02', text: 'We check what kind of reply fits the team.' },
      { num: '03', text: 'We outline the recovery route and handoff.' },
    ],
  },
};
