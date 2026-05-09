import { buildServiceSeo } from '@/domains/services/seo';
import type { ServicePageData } from '@/domains/services/types';
import { buildServiceContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

type SectionHeader = { kicker: string; title: string; description?: string };

type LeakRow = {
  id: string;
  name: string;
  arrived: string;
  channel: string;
  state: 'no-owner' | 'stuck' | 'ageing' | 'lost-to-memory';
  ownerNote: string;
  ageDays: number;
};

type BoardColumn = {
  id: string;
  status: 'new' | 'qualifying' | 'quoted' | 'waiting' | 'won' | 'lost';
  label: string;
  description: string;
  count: number;
  ownerExample: string;
};

type FollowUpStep = {
  id: string;
  index: string;
  trigger: string;
  action: string;
  ownerHint: string;
  signal: string;
};

type StatusDefinition = {
  id: string;
  status: string;
  signal: 'open' | 'awaiting' | 'won' | 'lost' | 'attention';
  meaning: string;
  triggers: string;
};

type BoundaryColumn = {
  id: string;
  scope: 'crm' | 'not-crm';
  label: string;
  title: string;
  items: string[];
  guard: string;
};

type AssumptionCard = {
  id: string;
  situation: string;
  reading: string;
  next: string;
  outcome: 'integrate' | 'replace' | 'extend';
};

type FitColumn = {
  id: string;
  variant: 'fit' | 'not-fit';
  label: string;
  title: string;
  signals: string[];
};

type CRMAutomationSections = {
  ownershipGap: {
    header: SectionHeader;
    leakLabel: string;
    leakNote: string;
    rows: LeakRow[];
  };
  leadOwnershipBoard: {
    header: SectionHeader;
    boardLabel: string;
    boardNote: string;
    columns: BoardColumn[];
    rule: string;
  };
  followUpPath: {
    header: SectionHeader;
    steps: FollowUpStep[];
    boundaryNote: string;
  };
  statusVisibility: {
    header: SectionHeader;
    definitions: StatusDefinition[];
    closing: string;
  };
  handoffBoundaries: {
    header: SectionHeader;
    columns: BoundaryColumn[];
    rule: string;
  };
  assumptionsPanel: {
    header: SectionHeader;
    cards: AssumptionCard[];
    closing: string;
  };
  readinessFilter: {
    header: SectionHeader;
    columns: FitColumn[];
    closing: string;
  };
  faq: {
    header: SectionHeader;
    items: Array<{ id: string; question: string; answer: string }>;
  };
};

const slug = 'crm-infrastructure-implementation';
const system = 'crm-automation';
const contactHref = buildServiceContactHref({ system, slug });

export const crmAutomationPage: ServicePageData<CRMAutomationSections> = {
  seo: buildServiceSeo({
    slug,
    title: 'CRM & Automation for Service Businesses',
    description:
      'CRM setup for service businesses that need every enquiry owned, followed up and visible after it arrives.',
  }),
  slug,
  badge: 'CRM & Automation',
  category: 'Lead Ownership',
  systems: [system],
  topics: ['crm-pipeline', 'crm-integration', 'lead-qualification', 'pipeline-architecture'],
  hero: {
    badge: 'CRM & Automation',
    title: 'Leads Arrive. [[muted:Ownership Gets Fuzzy.]]',
    description:
      'Someone asks for a quote, calls back, or replies to an email. The first contact happened, but the next step depends on who remembers. CRM & Automation makes ownership, follow-up, and lead status visible.',
    list: ['Lead ownership', 'Follow-up', 'Status visibility'],
  },
  sections: {
    ownershipGap: {
      header: {
        kicker: 'Ownership Gap',
        title: 'The enquiry is not lost at the form. It is lost after.',
        description:
          'A real lead can arrive without a clear owner or next step. That is where follow-up starts to depend on memory.',
      },
      leakLabel: 'Open enquiries this week',
      leakNote: 'Sample of how lead ownership looks before a CRM is in place.',
      rows: [
        {
          id: 'leak-01',
          name: 'M. Walker — kitchen reno quote',
          arrived: 'Mon 09:14',
          channel: 'Web form',
          state: 'no-owner',
          ownerNote: 'In shared inbox. Nobody picked it up.',
          ageDays: 3,
        },
        {
          id: 'leak-02',
          name: 'B. Stuart — service contract',
          arrived: 'Mon 14:02',
          channel: 'Phone',
          state: 'stuck',
          ownerNote: 'Quote sent, no follow-up booked.',
          ageDays: 3,
        },
        {
          id: 'leak-03',
          name: 'L. Patel — bathroom strip-out',
          arrived: 'Tue 11:30',
          channel: 'Referral',
          state: 'ageing',
          ownerNote: 'Owner travelling. No backup owner.',
          ageDays: 2,
        },
        {
          id: 'leak-04',
          name: 'D. Kim — small repair',
          arrived: 'Wed 08:55',
          channel: 'Web form',
          state: 'lost-to-memory',
          ownerNote: 'Mentioned in a chat thread, never logged.',
          ageDays: 1,
        },
        {
          id: 'leak-05',
          name: 'R. Harris — recurring clean',
          arrived: 'Wed 16:11',
          channel: 'Email reply',
          state: 'no-owner',
          ownerNote: 'Reply forwarded, no action taken.',
          ageDays: 1,
        },
      ],
    },
    leadOwnershipBoard: {
      header: {
        kicker: 'Ownership Board',
        title: 'Every lead has an owner and a visible next step.',
        description:
          'A working ownership board makes the team able to see where every enquiry sits without asking three people.',
      },
      boardLabel: 'Live ownership view — sample week',
      boardNote:
        'Lead status only. No counts of historical revenue. Built around what needs attention now.',
      columns: [
        {
          id: 'board-new',
          status: 'new',
          label: 'New',
          description: 'Just arrived. Needs an owner before end of day.',
          count: 4,
          ownerExample: 'Auto-assigned to duty owner.',
        },
        {
          id: 'board-qualifying',
          status: 'qualifying',
          label: 'Qualifying',
          description: 'Owner is confirming scope and fit.',
          count: 6,
          ownerExample: 'Owner: J. Reid',
        },
        {
          id: 'board-quoted',
          status: 'quoted',
          label: 'Quoted',
          description: 'Quote sent. Awaiting decision.',
          count: 5,
          ownerExample: 'Owner: M. Eze',
        },
        {
          id: 'board-waiting',
          status: 'waiting',
          label: 'Waiting on customer',
          description: 'Customer asked for time. Polite nudge scheduled.',
          count: 3,
          ownerExample: 'Owner: J. Reid',
        },
        {
          id: 'board-won',
          status: 'won',
          label: 'Won',
          description: 'Booked or signed. Ready to schedule.',
          count: 2,
          ownerExample: 'Owner: ops handover',
        },
        {
          id: 'board-lost',
          status: 'lost',
          label: 'Lost',
          description: 'Closed with reason. Stops follow-up noise.',
          count: 2,
          ownerExample: 'Owner closes with note.',
        },
      ],
      rule: 'Every card has an owner, a state, and a next step. No silent middle.',
    },
    followUpPath: {
      header: {
        kicker: 'Follow-up Path',
        title: 'Follow-up should not depend on one person remembering.',
        description:
          'The route from enquiry to reply, quote, chase, booking, or close is set up so the team can follow it without re-inventing the day.',
      },
      steps: [
        {
          id: 'fu-01',
          index: '01',
          trigger: 'New enquiry lands',
          action: 'Auto-assigned to a duty owner. Acknowledged within minutes.',
          ownerHint: 'Owner sees a new card with full context.',
          signal: 'Logged with source and channel.',
        },
        {
          id: 'fu-02',
          index: '02',
          trigger: 'Qualifying call or message',
          action: 'Short qualifying step before a quote is built. Notes saved on the card.',
          ownerHint: 'Owner moves card to qualifying.',
          signal: 'Captured against the lead, not in chat.',
        },
        {
          id: 'fu-03',
          index: '03',
          trigger: 'Quote sent',
          action: 'Card moves to quoted. Polite follow-up scheduled if silence.',
          ownerHint: 'Owner sees the next nudge date.',
          signal: 'Reminders run quietly in the background.',
        },
        {
          id: 'fu-04',
          index: '04',
          trigger: 'Decision or silence',
          action: 'Won, lost with reason, or moved to long-term reactivation.',
          ownerHint: 'Owner closes the card properly.',
          signal: 'Lost reasons are kept for review.',
        },
      ],
      boundaryNote:
        'Follow-up does not chase forever. After defined silence, the card is closed politely and moved to a separate reactivation list.',
    },
    statusVisibility: {
      header: {
        kicker: 'Status Visibility',
        title: 'Every state means the same thing to everyone in the team.',
        description:
          'Useful states make open enquiries easier to see, whether they are new, assigned, waiting, quoted, won, lost, or need attention.',
      },
      definitions: [
        {
          id: 'st-new',
          status: 'New',
          signal: 'open',
          meaning: 'Not yet picked up. Needs ownership today.',
          triggers: 'Owner assigned · Acknowledged',
        },
        {
          id: 'st-qualifying',
          status: 'Qualifying',
          signal: 'open',
          meaning: 'Owner is confirming what the customer needs.',
          triggers: 'Notes saved · Quote brief written',
        },
        {
          id: 'st-quoted',
          status: 'Quoted',
          signal: 'awaiting',
          meaning: 'Quote sent. Customer has the ball.',
          triggers: 'Polite nudge after silence window',
        },
        {
          id: 'st-waiting',
          status: 'Waiting',
          signal: 'awaiting',
          meaning: 'Customer asked for time. Owner knows when to come back.',
          triggers: 'Scheduled reminder · No silent drift',
        },
        {
          id: 'st-attention',
          status: 'Needs attention',
          signal: 'attention',
          meaning: 'Stalled past the agreed silence window.',
          triggers: 'Owner alerted · Manager visibility',
        },
        {
          id: 'st-won',
          status: 'Won',
          signal: 'won',
          meaning: 'Booked or signed. Handed over to delivery.',
          triggers: 'Ops scheduling · Confirmation sent',
        },
        {
          id: 'st-lost',
          status: 'Lost',
          signal: 'lost',
          meaning: 'Closed with a clear reason.',
          triggers: 'Reason logged · Reactivation eligible later',
        },
      ],
      closing:
        'When status means the same thing to everyone, follow-up becomes the standard, not the exception.',
    },
    handoffBoundaries: {
      header: {
        kicker: 'Boundaries',
        title: 'CRM starts after capture. It does not replace first response.',
        description:
          'This page keeps CRM in its lane: ownership, follow-up and visibility after enquiries arrive.',
      },
      columns: [
        {
          id: 'crm-scope',
          scope: 'crm',
          label: 'CRM owns',
          title: 'Lead ownership and what happens after capture.',
          items: [
            'Assigning every lead to a clear owner.',
            'Holding the agreed follow-up rhythm.',
            'Showing what is open, waiting, won or lost.',
            'Keeping notes, quotes and history against the lead.',
            'Surfacing what needs attention now.',
          ],
          guard: 'Stops at first response and quoting decisions.',
        },
        {
          id: 'not-crm-scope',
          scope: 'not-crm',
          label: 'Not CRM',
          title: 'Tasks that belong to other systems or the team.',
          items: [
            'First reply on missed calls and forms — that is AI Lead Handling.',
            'Generating new enquiries — that is Local SEO Authority and Smart Website Systems.',
            'Pricing and quoting decisions — those stay with the team.',
            'Service delivery — done in person by the team.',
          ],
          guard: 'Drawing this line keeps CRM useful instead of bloated.',
        },
      ],
      rule: 'CRM does not pretend to be the first responder. It picks up where capture leaves off.',
    },
    assumptionsPanel: {
      header: {
        kicker: 'Assumptions',
        title: '"We already have something for that."',
        description:
          'Most service businesses have a part of this in place. The first job is to read what exists, not throw it away.',
      },
      cards: [
        {
          id: 'a-spreadsheet',
          situation: 'A shared spreadsheet tracks open enquiries.',
          reading: 'Useful as a starting map. Breaks down once two people edit it on the same day.',
          next: 'Keep the columns that work. Move them into a system the team can rely on.',
          outcome: 'extend',
        },
        {
          id: 'a-hubspot',
          situation: 'A CRM is in place but barely used.',
          reading:
            'Usually a setup problem, not a tool problem. The team has no clear rhythm against it.',
          next: 'Audit what is configured, what is ignored and what would actually be used.',
          outcome: 'integrate',
        },
        {
          id: 'a-admin',
          situation: 'An admin or office manager chases everything by hand.',
          reading: 'Works while one person remembers. Falls over the day they are unwell or away.',
          next: 'Make the chase rhythm a system. The admin still owns judgement, not memory.',
          outcome: 'extend',
        },
        {
          id: 'a-mixed',
          situation: 'Inbox, phone notes, and a calendar app, depending on the day.',
          reading:
            'Three sources of truth means none. Leads land somewhere, but ownership is invisible.',
          next: 'Bring lead status into one place before adding any automation.',
          outcome: 'replace',
        },
      ],
      closing:
        'Every CRM build starts with what is already in place. The system replaces effort, not the team.',
    },
    readinessFilter: {
      header: {
        kicker: 'Readiness',
        title: 'Useful when leads exist and handling is scattered.',
        description:
          'The fit filter separates businesses that need lead ownership from those that only need a contact form or a one-off cleanup.',
      },
      columns: [
        {
          id: 'fit',
          variant: 'fit',
          label: 'Strong fit',
          title: 'A team handling real enquiries with shaky ownership.',
          signals: [
            'Leads arrive every week across more than one channel.',
            'More than one person touches enquiries.',
            'Quotes go out, then the team forgets where they landed.',
            'Owners want visibility instead of asking every morning.',
          ],
        },
        {
          id: 'not-fit',
          variant: 'not-fit',
          label: 'Not a fit yet',
          title: 'Too early or wanting CRM as a magic fix.',
          signals: [
            'Almost no enquiries to track.',
            'One person owns everything and it works.',
            'The goal is dashboards rather than ownership.',
            'No willingness to change how the team handles leads.',
          ],
        },
      ],
      closing:
        'CRM is most useful when ownership is already a real problem. It does not replace the willingness to follow up.',
    },
    faq: {
      header: {
        kicker: 'Questions',
        title: 'Common questions about CRM setup.',
        description: 'Short answers about existing tools, team adoption, integration and scope.',
      },
      items: [
        {
          id: 'crm-faq-existing-tools',
          question: 'Can this work with tools we already use?',
          answer:
            'Usually, yes. The first step is to look at where enquiries arrive now, what must stay, and what needs to be connected or replaced.',
        },
        {
          id: 'crm-faq-team-use',
          question: 'Will the team need to learn a complicated system?',
          answer:
            'The setup matches how the team actually handles leads. The goal is visible ownership and simpler follow-up, not extra admin.',
        },
        {
          id: 'crm-faq-ai',
          question: 'Is this the same as AI lead handling?',
          answer:
            'No. AI Lead Handling covers first response and routing. CRM owns what happens after the lead is captured.',
        },
        {
          id: 'crm-faq-tool',
          question: 'Which tool do you set up?',
          answer:
            'Tool choice depends on what already exists, what the team will actually use, and the level of integration needed. We recommend a working setup, not a brand.',
        },
        {
          id: 'crm-faq-reporting',
          question: 'Do we get reports?',
          answer:
            'You get visible lead status and what needs attention now. Heavy reporting is a separate decision and only added when it would actually be used.',
        },
      ],
    },
  },
  cta: {
    heading: {
      kicker: 'Next Step',
      title: 'Find the follow-up gap.',
      description:
        'Tell us where leads arrive, who handles them, and what tends to get missed. We will map the ownership gaps before recommending a setup.',
    },
    actions: [{ label: PRIMARY_CTA_LABEL, href: contactHref, primary: true }],
    expectations: [
      { num: '01', text: 'We look at how leads arrive today.' },
      { num: '02', text: 'We identify the ownership and follow-up gaps.' },
      { num: '03', text: 'We outline the simplest CRM structure needed.' },
    ],
  },
};
