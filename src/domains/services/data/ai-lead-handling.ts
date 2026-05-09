import { buildServiceSeo } from '@/domains/services/seo';
import type { ServicePageData } from '@/domains/services/types';
import { buildServiceContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

type SectionHeader = {
  kicker: string;
  title: string;
  description?: string;
};

type ContactRow = {
  id: string;
  channel: string;
  arrived: string;
  preview: string;
  state: 'new' | 'replied' | 'routed' | 'voicemail';
  ageMinutes: number;
  ownerNote?: string;
};

type DecaySegment = {
  id: string;
  range: string;
  label: string;
  outcome: string;
  intensity: 'low' | 'mid' | 'high' | 'lost';
};

type ChannelRow = {
  id: string;
  channel: string;
  origin: string;
  signal: 'new' | 'pending' | 'covered' | 'silent';
  detail: string;
  routedTo?: string;
};

type HandledStep = {
  id: string;
  index: string;
  title: string;
  detail: string;
  signal: string;
};

type BoundaryColumn = {
  id: string;
  scope: 'ai' | 'team';
  label: string;
  title: string;
  items: string[];
  guard: string;
};

type ScenarioPanel = {
  id: string;
  context: string;
  before: string[];
  after: string[];
  constraint: string;
  note: string;
};

type FitColumn = {
  id: string;
  variant: 'fit' | 'not-fit';
  label: string;
  title: string;
  signals: string[];
};

type AiLeadHandlingSections = {
  responseGap: {
    header: SectionHeader;
    queue: ContactRow[];
    queueLabel: string;
    queueNote: string;
    decay: DecaySegment[];
    decayCaption: string;
  };
  channelSurface: {
    header: SectionHeader;
    rows: ChannelRow[];
    summary: { label: string; value: string; tone: 'covered' | 'mixed' | 'silent' }[];
  };
  handledPath: {
    header: SectionHeader;
    steps: HandledStep[];
    boundaryNote: string;
  };
  aiBoundary: {
    header: SectionHeader;
    columns: BoundaryColumn[];
    rule: string;
  };
  scenarioReadiness: {
    header: SectionHeader;
    panel: ScenarioPanel;
  };
  fitFilter: {
    header: SectionHeader;
    columns: FitColumn[];
    closing: string;
  };
  faq: {
    header: SectionHeader;
    items: Array<{ id: string; question: string; answer: string }>;
  };
};

const slug = 'ai-lead-handling';
const system = 'ai-lead-handling';
const contactHref = buildServiceContactHref({ system, slug });

export const aiLeadHandlingPage: ServicePageData<AiLeadHandlingSections> = {
  seo: buildServiceSeo({
    slug,
    title: 'AI Lead Handling for Service Businesses',
    description:
      'Fast first response for calls, forms, DMs and missed enquiries. AI handles the gap before quotes go cold.',
  }),
  slug,
  badge: 'AI Lead Handling',
  category: 'Lead Handling',
  systems: [system],
  topics: ['lead-response-time', 'missed-calls', 'lead-capture', 'lead-routing'],
  hero: {
    badge: 'AI Lead Handling',
    title: 'Calls Come In. [[muted:Replies Lag Behind.]]',
    description:
      'Someone calls, fills in a form, or sends a message while the team is on a job. AI Lead Handling gives that first contact a fast response and a clear handoff instead of leaving it to memory.',
    list: ['Missed calls', 'Form replies', 'Booking handoff'],
  },
  sections: {
    responseGap: {
      header: {
        kicker: 'Response Gap',
        title: 'The first reply is where good enquiries quietly go cold.',
        description:
          'The business is busy. The customer only sees silence. The gap is the time between contact arriving and someone taking ownership.',
      },
      queueLabel: 'Live first-contact queue',
      queueNote: 'Sample of how a normal Tuesday looks before any handling is in place.',
      queue: [
        {
          id: 'q-01',
          channel: 'Missed call',
          arrived: '08:14',
          preview: 'Caller hung up after four rings. No voicemail.',
          state: 'voicemail',
          ageMinutes: 47,
          ownerNote: 'No callback yet',
        },
        {
          id: 'q-02',
          channel: 'Web form',
          arrived: '08:32',
          preview: '"Need a quote for next week if possible."',
          state: 'new',
          ageMinutes: 29,
          ownerNote: 'Sitting in shared inbox',
        },
        {
          id: 'q-03',
          channel: 'Instagram DM',
          arrived: '08:41',
          preview: '"Do you cover the south side?"',
          state: 'new',
          ageMinutes: 20,
        },
        {
          id: 'q-04',
          channel: 'Phone',
          arrived: '08:53',
          preview: 'Quote enquiry, voicemail left.',
          state: 'voicemail',
          ageMinutes: 8,
        },
        {
          id: 'q-05',
          channel: 'Web form',
          arrived: '08:58',
          preview: 'Recurring service request.',
          state: 'new',
          ageMinutes: 3,
          ownerNote: 'No reply sent',
        },
      ],
      decayCaption:
        'Industry observation across service categories: response speed correlates strongly with whether the enquiry stays warm.',
      decay: [
        {
          id: 'd-01',
          range: '0–5 min',
          label: 'Warm',
          outcome: 'Most replies still feel timely.',
          intensity: 'low',
        },
        {
          id: 'd-02',
          range: '5–30 min',
          label: 'Cooling',
          outcome: 'Buyer starts checking the next option.',
          intensity: 'mid',
        },
        {
          id: 'd-03',
          range: '30 min – 2 hr',
          label: 'Cold',
          outcome: 'Reply lands after the buyer has moved on.',
          intensity: 'high',
        },
        {
          id: 'd-04',
          range: '2 hr+',
          label: 'Lost',
          outcome: 'Often ignored or replied to with "already booked".',
          intensity: 'lost',
        },
      ],
    },
    channelSurface: {
      header: {
        kicker: 'Channel Surface',
        title: 'Calls, forms and messages all need one handling view.',
        description:
          'Scattered contact routes need one visible surface, so the business can see what is unhandled and what gets covered.',
      },
      rows: [
        {
          id: 'c-call',
          channel: 'Inbound call',
          origin: 'Mobile + landline',
          signal: 'pending',
          detail: 'Auto-text fires on missed call within 30 seconds.',
          routedTo: 'Owner SMS',
        },
        {
          id: 'c-form',
          channel: 'Web form',
          origin: 'Service pages',
          signal: 'covered',
          detail: 'Acknowledged immediately, qualifying questions returned.',
          routedTo: 'CRM ownership',
        },
        {
          id: 'c-dm',
          channel: 'Social DM',
          origin: 'Instagram + Facebook',
          signal: 'pending',
          detail: 'First reply within minutes, manual handover above threshold.',
          routedTo: 'Team inbox',
        },
        {
          id: 'c-missed',
          channel: 'Missed call recovery',
          origin: 'Voicemail + dropped',
          signal: 'covered',
          detail: 'SMS sent automatically with reason and next step.',
          routedTo: 'Callback queue',
        },
        {
          id: 'c-quote',
          channel: 'Quote follow-up',
          origin: 'Stalled CRM cards',
          signal: 'pending',
          detail: 'Polite nudge after defined silence window.',
          routedTo: 'Owner review',
        },
        {
          id: 'c-after',
          channel: 'After hours',
          origin: 'Evenings + weekends',
          signal: 'silent',
          detail: 'Handled with a clear acknowledgement and morning callback slot.',
          routedTo: 'Next-day list',
        },
      ],
      summary: [
        { label: 'Channels covered', value: 'Six common entry points', tone: 'covered' },
        { label: 'First reply target', value: 'Under three minutes', tone: 'mixed' },
        { label: 'Out-of-hours rule', value: 'Acknowledged, not pretended', tone: 'silent' },
      ],
    },
    handledPath: {
      header: {
        kicker: 'Handled Path',
        title: 'A first response should move the enquiry somewhere useful.',
        description:
          'A useful first reply moves the enquiry toward qualification, routing, booking context, or a clear human handoff.',
      },
      steps: [
        {
          id: 'h-01',
          index: '01',
          title: 'Received',
          detail: 'Contact lands on a single visible surface, regardless of channel.',
          signal: 'Logged the moment it arrives.',
        },
        {
          id: 'h-02',
          index: '02',
          title: 'First response',
          detail: 'A short, on-brand reply goes out before the buyer cools off.',
          signal: 'Acknowledges what was asked.',
        },
        {
          id: 'h-03',
          index: '03',
          title: 'Context captured',
          detail: 'Lightweight questions: location, urgency, type of work.',
          signal: 'Saved against the lead, not lost in chat.',
        },
        {
          id: 'h-04',
          index: '04',
          title: 'Routed',
          detail: 'Handed to the right human with everything they need to take over.',
          signal: 'Owner sees the lead, not just a notification.',
        },
      ],
      boundaryNote:
        'No upsell. No fake personality. The job is buying time and clarity for the team.',
    },
    aiBoundary: {
      header: {
        kicker: 'AI Boundary',
        title: 'AI covers the first gap. It does not replace the business.',
        description:
          'Response and routing belong to the system. Judgement, pricing, scope and service delivery still belong to the team.',
      },
      columns: [
        {
          id: 'ai-scope',
          scope: 'ai',
          label: 'AI handles',
          title: 'First reply, light qualification and routing.',
          items: [
            'Acknowledge the enquiry within seconds.',
            'Confirm channel, name and rough requirement.',
            'Send missed-call recovery messages automatically.',
            'Route to the right person with context attached.',
            'Hold the conversation politely until a human takes over.',
          ],
          guard: 'Stops at anything that needs real judgement.',
        },
        {
          id: 'team-scope',
          scope: 'team',
          label: 'The team still owns',
          title: 'Quoting, scope, schedule and service delivery.',
          items: [
            'Confirming what the job actually involves.',
            'Quoting price, timing and conditions.',
            'Approving anything outside standard scope.',
            'Closing the lead through to booking or won.',
            'Service delivery, in person, by the team.',
          ],
          guard: 'No machine pretends to be a tradesperson or owner.',
        },
      ],
      rule: 'If the buyer needs a real answer, the system hands off. It does not improvise.',
    },
    scenarioReadiness: {
      header: {
        kicker: 'Readiness',
        title: 'A scenario from a busy week.',
        description:
          'Illustrative scenario built from common service-business patterns, not a specific client result.',
      },
      panel: {
        id: 'scenario-tuesday',
        context:
          'Six-person plumbing team. Quote enquiries arrive across calls, web forms and Instagram DMs while jobs are running.',
        before: [
          'Voicemail goes unchecked until lunch.',
          'Form enquiries land in a shared inbox without an owner.',
          'DMs answered when someone notices, often the next day.',
          'Two of every five quote requests had already booked someone else by the time the team replied.',
        ],
        after: [
          'Missed call triggers an SMS within thirty seconds.',
          'Form replies acknowledge the enquiry and return three short questions.',
          'DMs are answered politely until the office can take over.',
          'Owner sees a single feed of unhandled work first thing in the morning.',
        ],
        constraint:
          'AI does not give prices, promise timing, or commit the team. Anything outside standard scope is held for a human.',
        note: 'Scenario is illustrative. Real outcomes depend on call volume, team size and service category.',
      },
    },
    fitFilter: {
      header: {
        kicker: 'Fit Filter',
        title: 'Useful when demand exists and response is the weak point.',
        description:
          'Best fit starts with real enquiries already arriving and a first-response gap that needs clearer handling.',
      },
      columns: [
        {
          id: 'fit',
          variant: 'fit',
          label: 'Strong fit',
          title: 'Established service business with steady enquiry flow.',
          signals: [
            'Several enquiries arrive each day across more than one channel.',
            'Missed calls or unanswered messages have already cost a job.',
            'The team wants faster reply without becoming admin-heavy.',
            'A real CRM or ownership view is in place or is being built.',
          ],
        },
        {
          id: 'not-fit',
          variant: 'not-fit',
          label: 'Not a fit yet',
          title: 'Early stage or no enquiry flow to handle.',
          signals: [
            'Almost no inbound enquiries arrive in a normal month.',
            'There is no clear service offer to qualify against.',
            'The business wants AI to make sales decisions for them.',
            'The goal is generic chatbot personality rather than handling.',
          ],
        },
      ],
      closing:
        'When enquiries are real and response is slow, this works. When demand has not been built yet, it will not fix that.',
    },
    faq: {
      header: {
        kicker: 'Questions',
        title: 'Common questions about AI lead handling.',
        description:
          'Short answers about response boundaries, human handoff, channel cover and fit.',
      },
      items: [
        {
          id: 'ai-faq-replace-team',
          question: 'Does AI replace our team?',
          answer:
            'No. It handles the first response and routing gap. The team still owns judgement, quoting, service delivery and final decisions.',
        },
        {
          id: 'ai-faq-channels',
          question: 'Can it cover more than missed calls?',
          answer:
            'Yes. Calls, web forms, social DMs and stalled quote follow-ups can all be covered when those routes are part of the approved setup.',
        },
        {
          id: 'ai-faq-personality',
          question: 'Will it sound like a robot pretending to be a person?',
          answer:
            'No. The reply is short, honest about being a fast acknowledgement, and hands off cleanly. No fake persona.',
        },
        {
          id: 'ai-faq-after-hours',
          question: 'What happens after hours?',
          answer:
            'Out-of-hours enquiries get a clear acknowledgement and an honest next-step time. The system does not pretend the office is open.',
        },
        {
          id: 'ai-faq-fit',
          question: 'When is this worth setting up?',
          answer:
            'It is most useful when real enquiries already arrive but first response is slow, inconsistent or dependent on one person noticing.',
        },
      ],
    },
  },
  cta: {
    heading: {
      kicker: 'Next Step',
      title: 'Find the first-contact gap.',
      description:
        'Tell us where enquiries arrive and what usually happens next. We will look for the part that needs a faster response or clearer handoff.',
    },
    actions: [{ label: PRIMARY_CTA_LABEL, href: contactHref, primary: true }],
    expectations: [
      { num: '01', text: 'We trace the contact routes that matter.' },
      { num: '02', text: 'We identify where response currently breaks.' },
      { num: '03', text: 'We explain what should be handled first.' },
    ],
  },
};
