import { buildServiceSeo } from '@/domains/services/seo';
import type { ServicePageData } from '@/domains/services/types';
import { buildServiceContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

type SectionHeader = { kicker: string; title: string; description?: string };
type ChannelRow = {
  id: string;
  origin: string;
  ageBand: string;
  signal: string;
  state: 'workable' | 'caution' | 'leave';
};
type SequenceStep = { id: string; num: string; timing: string; title: string; detail: string };
type RuleRow = { id: string; criterion: string; good: string; bad: string };
type BridgeRow = { id: string; belongsTo: 'unified' | 'parent'; point: string };
type FitColumn = {
  id: string;
  variant: 'fit' | 'not-fit';
  label: string;
  title: string;
  signals: string[];
};

type UnifiedSections = {
  channelScatter: { header: SectionHeader; label: string; sources: ChannelRow[]; closing: string };
  routingPath: { header: SectionHeader; steps: SequenceStep[]; closing: string };
  handoffRules: { header: SectionHeader; rows: RuleRow[]; closing: string };
  ownershipBridge: { header: SectionHeader; rows: BridgeRow[]; rule: string };
  fitBoundaries: { header: SectionHeader; columns: FitColumn[]; closing: string };
  faq: { header: SectionHeader; items: Array<{ id: string; question: string; answer: string }> };
};

const slug = 'unified-communication-system';
const system = 'ai-lead-handling';
const contactHref = buildServiceContactHref({ system, slug });

export const unifiedCommunicationSystemPage: ServicePageData<UnifiedSections> = {
  seo: buildServiceSeo({
    slug,
    title: 'Unified Communication for Service Businesses',
    description:
      'A focused route for bringing calls, forms and messages into one place with clear ownership and a visible next step.',
  }),
  slug,
  badge: 'Unified Communication',
  category: 'Lead Response',
  systems: [system],
  topics: ['lead-routing', 'lead-management'],
  hero: {
    badge: 'Unified Communication',
    title: 'Messages Arrive Everywhere.',
    description:
      'Calls, forms, email and social messages all hold real enquiries. Unified Communication gives scattered contact routes a clearer place to land and a visible owner.',
    list: ['Channel scatter', 'Visible owner', 'Clear next step'],
  },
  sections: {
    channelScatter: {
      header: {
        kicker: 'Channel Scatter',
        title: 'The problem is not the volume. It is where messages land.',
        description:
          'Most teams already cover the channels. They lose enquiries to inboxes and apps that nobody owns.',
      },
      label: 'Where enquiries usually arrive',
      sources: [
        {
          id: 'c-01',
          origin: 'Website contact form',
          ageBand: 'Live',
          signal: 'Owned route. Should always be visible.',
          state: 'workable',
        },
        {
          id: 'c-02',
          origin: 'Phone calls',
          ageBand: 'Live',
          signal: 'Highest intent. Needs the fastest path.',
          state: 'workable',
        },
        {
          id: 'c-03',
          origin: 'Email to a shared address',
          ageBand: 'Daily',
          signal: 'Useful if a person owns the inbox each day.',
          state: 'workable',
        },
        {
          id: 'c-04',
          origin: 'Social DMs and Messenger',
          ageBand: 'Sporadic',
          signal: 'Worth routing if used often. Otherwise let go.',
          state: 'caution',
        },
        {
          id: 'c-05',
          origin: 'Personal mobiles and ad-hoc apps',
          ageBand: 'Hidden',
          signal: 'No shared visibility. Encourage routing back to owned channels.',
          state: 'leave',
        },
      ],
      closing:
        'Unification is about the routes you actually use. Cover those well. Drop the ones nobody watches.',
    },
    routingPath: {
      header: {
        kicker: 'Routing Path',
        title: 'Every channel needs a clear way in and a clear way on.',
        description:
          'A short, predictable path turns scattered channels into a single conversation surface.',
      },
      steps: [
        {
          id: 'rp-01',
          num: '01',
          timing: 'Arrival',
          title: 'Every message lands in one shared place.',
          detail: 'Owned channels feed a single inbox view, not several siloed apps.',
        },
        {
          id: 'rp-02',
          num: '02',
          timing: 'Triage',
          title: 'A clear owner picks each conversation up.',
          detail: 'Ownership is visible at a glance. Nothing waits for someone to "see it".',
        },
        {
          id: 'rp-03',
          num: '03',
          timing: 'Action',
          title: 'Reply, route or escalate.',
          detail: 'Most messages get a direct reply. Sensitive ones get escalated by name.',
        },
        {
          id: 'rp-04',
          num: '04',
          timing: 'Handoff',
          title: 'Real opportunities move to CRM ownership.',
          detail:
            'When a message becomes an enquiry, it leaves the chat surface and joins the pipeline.',
        },
      ],
      closing:
        'Three to four steps cover most contact. The rules sit on top of that, not before it.',
    },
    handoffRules: {
      header: {
        kicker: 'Routing Rules',
        title: 'Not every message needs the same path.',
        description:
          'Simple rules decide what gets a fast reply, what waits, and what reaches a named owner immediately.',
      },
      rows: [
        {
          id: 'h-01',
          criterion: 'New enquiry, normal hours',
          good: 'Owner sees it within minutes and replies.',
          bad: 'Sits in a shared inbox with no name attached.',
        },
        {
          id: 'h-02',
          criterion: 'Existing customer query',
          good: 'Routed to the person who owns that account.',
          bad: 'Treated as a new lead and answered from scratch.',
        },
        {
          id: 'h-03',
          criterion: 'Out-of-hours message',
          good: 'Acknowledged automatically. Replied to first thing.',
          bad: 'Stays unread until the inbox is opened the next day.',
        },
        {
          id: 'h-04',
          criterion: 'Sensitive or urgent message',
          good: 'Escalated by name to the right person.',
          bad: 'Treated like every other message.',
        },
      ],
      closing:
        'The rules are calm. They reduce the chance that anything important sits without an owner.',
    },
    ownershipBridge: {
      header: {
        kicker: 'System Bridge',
        title: 'Unified Communication owns the inbox surface. CRM owns the relationship.',
        description:
          'This work covers the place messages land. The pipeline beyond that belongs to CRM & Automation.',
      },
      rows: [
        {
          id: 'b-01',
          belongsTo: 'unified',
          point: 'Pulling owned channels into one shared inbox view.',
        },
        {
          id: 'b-02',
          belongsTo: 'unified',
          point: 'Making ownership and reply state visible at a glance.',
        },
        {
          id: 'b-03',
          belongsTo: 'unified',
          point: 'Setting routing rules for hours, urgency and account.',
        },
        {
          id: 'b-04',
          belongsTo: 'parent',
          point: 'Holding the long pipeline of qualified enquiries.',
        },
        { id: 'b-05', belongsTo: 'parent', point: 'Tracking conversations through to a decision.' },
        { id: 'b-06', belongsTo: 'parent', point: 'Holding the customer relationship over time.' },
      ],
      rule: 'Unified Communication clears the front door. CRM & Automation owns the building beyond it.',
    },
    fitBoundaries: {
      header: {
        kicker: 'Fit Filter',
        title: 'Useful when channels are scattered and ownership is unclear.',
        description:
          'The work pays off when real enquiries are getting lost between inboxes, phones and apps.',
      },
      columns: [
        {
          id: 'fit',
          variant: 'fit',
          label: 'Strong fit',
          title: 'Multi-channel teams without a shared inbox.',
          signals: [
            'Enquiries arrive across phone, form, email and DMs.',
            'Nobody can see all messages in one view.',
            'Ownership shifts depending on who happens to look.',
            'Customer issues get answered twice or not at all.',
          ],
        },
        {
          id: 'not-fit',
          variant: 'not-fit',
          label: 'Not a fit',
          title: 'Single-channel teams already in control.',
          signals: [
            'Almost every enquiry arrives through one channel.',
            'A reception or admin owner already routes everything.',
            'Volume too low for shared-inbox structure to matter.',
            'No appetite to consolidate channels.',
          ],
        },
      ],
      closing:
        'For single-owner, single-channel businesses, this scope is overkill. Keep it simple.',
    },
    faq: {
      header: {
        kicker: 'Questions',
        title: 'Common questions about unified communication.',
        description: 'Short answers about channels, routing and ownership.',
      },
      items: [
        {
          id: 'unified-faq-channels',
          question: 'Does every channel need to be connected?',
          answer:
            'No. The aim is to cover the channels that actually carry enquiries. Channels nobody monitors are dropped, not patched in.',
        },
        {
          id: 'unified-faq-personal',
          question: 'What about personal mobiles?',
          answer:
            'Personal-mobile traffic is encouraged back to owned channels. Hidden side-conversations are the main risk.',
        },
        {
          id: 'unified-faq-crm',
          question: 'Is this CRM?',
          answer:
            'No. Unified Communication owns the inbox surface. CRM & Automation owns the pipeline that follows.',
        },
        {
          id: 'unified-faq-tools',
          question: 'Do you replace existing tools?',
          answer:
            'Often, no. The work is about routing and ownership, not adding more tools to the stack.',
        },
      ],
    },
  },
  cta: {
    heading: {
      kicker: 'Next Step',
      title: 'See where messages are getting lost.',
      description:
        'Tell us where enquiries usually arrive and how they get owned. We will look at where unification is honest, and where it would just add noise.',
    },
    actions: [{ label: PRIMARY_CTA_LABEL, href: contactHref, primary: true }],
    expectations: [
      { num: '01', text: 'We map current contact routes and ownership.' },
      { num: '02', text: 'We mark which channels deserve unification.' },
      { num: '03', text: 'We outline the inbox surface and routing rules.' },
    ],
  },
};
