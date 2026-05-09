import { buildServiceSeo } from '@/domains/services/seo';
import type { ServicePageData } from '@/domains/services/types';
import { buildServiceContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

type SectionHeader = { kicker: string; title: string; description?: string };
type StakeCard = { id: string; num: string; point: string; hint: string };
type MatrixRow = { id: string; aspect: string; optionA: string; optionB: string };
type LeansColumn = {
  id: string;
  variant: 'a' | 'b';
  label: string;
  title: string;
  signals: string[];
};
type HandoffRow = { id: string; when: string; route: string };

type CRMDecisionSections = {
  decisionStakes: { header: SectionHeader; stakes: StakeCard[] };
  comparison: {
    header: SectionHeader;
    optionALabel: string;
    optionATitle: string;
    optionBLabel: string;
    optionBTitle: string;
    rows: MatrixRow[];
  };
  whenToChoose: { header: SectionHeader; columns: LeansColumn[]; closing: string };
  handoffNext: { header: SectionHeader; rows: HandoffRow[]; rule: string };
  faq: { header: SectionHeader; items: Array<{ id: string; question: string; answer: string }> };
};

const slug = 'website-crm-integration-vs-manual-lead-handling';
const system = 'crm-automation';
const contactHref = buildServiceContactHref({ system, slug });

export const websiteCrmIntegrationVsManualLeadHandlingPage: ServicePageData<CRMDecisionSections> = {
  seo: buildServiceSeo({
    slug,
    title: 'Website CRM Integration vs Manual Lead Handling',
    description: 'A focused comparison for deciding when manual lead handling stops being enough.',
  }),
  slug,
  badge: 'CRM Decision',
  category: 'Decision Support',
  systems: [system],
  topics: ['crm-pipeline', 'crm-integration', 'lead-qualification', 'pipeline-architecture'],
  hero: {
    badge: 'CRM Decision',
    title: 'Manual Handling Works. [[muted:Until It Does Not.]]',
    description:
      'At first, leads can be handled from memory, email and quick replies. As volume grows, the question becomes whether every enquiry still has an owner and a next step.',
    list: ['Manual handling', 'CRM ownership', 'Follow-up'],
  },
  sections: {
    decisionStakes: {
      header: {
        kicker: 'What The Decision Controls',
        title: 'The choice is about ownership, not tools.',
        description:
          'A CRM is only useful when the team needs visible ownership and follow-up that does not rely on memory.',
      },
      stakes: [
        {
          id: 'cs-01',
          num: '01',
          point: 'Who owns each enquiry.',
          hint: 'Named ownership versus "whoever sees it first".',
        },
        {
          id: 'cs-02',
          num: '02',
          point: 'Where the conversation lives.',
          hint: 'Personal inbox versus shared, visible state.',
        },
        {
          id: 'cs-03',
          num: '03',
          point: 'What the team can see.',
          hint: 'Memory and notes versus a visible pipeline.',
        },
      ],
    },
    comparison: {
      header: {
        kicker: 'Side By Side',
        title: 'Manual handling and CRM ownership fail in different places.',
        description:
          'Each handles a different range of volume and complexity. The honest comparison helps decide when to switch.',
      },
      optionALabel: 'Option A',
      optionATitle: 'Manual lead handling',
      optionBLabel: 'Option B',
      optionBTitle: 'Website CRM integration',
      rows: [
        {
          id: 'cm-01',
          aspect: 'Where leads live',
          optionA: 'Email inboxes, notebooks, memory.',
          optionB: 'A shared pipeline with named owners.',
        },
        {
          id: 'cm-02',
          aspect: 'Best fit',
          optionA: 'Low volume, single owner, short decisions.',
          optionB: 'Multiple owners, longer decisions, visibility needed.',
        },
        {
          id: 'cm-03',
          aspect: 'Risk profile',
          optionA: 'Quiet drops. Forgotten replies. No audit trail.',
          optionB: 'Operational discipline. Updates required.',
        },
        {
          id: 'cm-04',
          aspect: 'Setup cost',
          optionA: 'Almost none. Already running.',
          optionB: 'Real setup work. Workflow change.',
        },
        {
          id: 'cm-05',
          aspect: 'Long-term role',
          optionA: 'Eventually breaks under growth.',
          optionB: 'Becomes the spine of how leads are handled.',
        },
      ],
    },
    whenToChoose: {
      header: {
        kicker: 'When To Choose Which',
        title: 'The right answer depends on volume, owners and visibility.',
        description:
          'Both routes are honest. The question is what the team can keep up with reliably.',
      },
      columns: [
        {
          id: 'a',
          variant: 'a',
          label: 'Lean toward manual',
          title: 'Low volume, single owner, short decisions.',
          signals: [
            'A small handful of enquiries per week.',
            'One owner who actually sees every message.',
            'Decisions usually close in a single conversation.',
            'No appetite for new tools right now.',
          ],
        },
        {
          id: 'b',
          variant: 'b',
          label: 'Lean toward CRM',
          title: 'Multiple owners, longer decisions, visibility needed.',
          signals: [
            'Enquiries arrive across multiple channels.',
            'More than one person needs to see the pipeline.',
            'Decisions take days or weeks.',
            'Things are slipping that nobody can name.',
          ],
        },
      ],
      closing:
        'Most established service teams cross the line before they realise it. The signs are quiet at first.',
    },
    handoffNext: {
      header: {
        kicker: 'Where The Next Step Belongs',
        title: 'The page handles the decision. The next step belongs elsewhere.',
        description: 'Once the route is chosen, the work moves to the right service area.',
      },
      rows: [
        {
          id: 'ch-01',
          when: 'You need ownership and pipeline visibility.',
          route: 'CRM & Automation owns the implementation.',
        },
        {
          id: 'ch-02',
          when: 'You need messages routed to the right owner first.',
          route: 'Unified Communication sits in front of the CRM.',
        },
        {
          id: 'ch-03',
          when: 'You need first-response on calls and forms.',
          route: 'AI Lead Handling owns the live response.',
        },
        {
          id: 'ch-04',
          when: 'You need quotes and proposals managed inside the pipeline.',
          route: 'CRM & Automation again — extended scope.',
        },
      ],
      rule: 'This page supports the decision only. The build belongs in CRM & Automation.',
    },
    faq: {
      header: {
        kicker: 'Questions',
        title: 'Common questions about CRM versus manual handling.',
        description: 'Short answers about volume, tools and team change.',
      },
      items: [
        {
          id: 'cdec-faq-volume',
          question: 'Is there a volume threshold?',
          answer:
            'No fixed number. Multiple owners and visibility needs usually matter more than raw volume.',
        },
        {
          id: 'cdec-faq-tool',
          question: 'Which CRM do you use?',
          answer:
            'The right CRM depends on the team. The decision page is about whether to use one — not which one.',
        },
        {
          id: 'cdec-faq-change',
          question: 'Will the team have to change how they work?',
          answer:
            'Yes — that is the point. CRM only helps if the team uses it. Workflow change is part of the work.',
        },
      ],
    },
  },
  cta: {
    heading: {
      kicker: 'Next Step',
      title: 'See where manual handling is actually breaking.',
      description:
        'Tell us how leads are handled today and where things slip. We will look for the point where ownership, follow-up or visibility is the real cost.',
    },
    actions: [{ label: PRIMARY_CTA_LABEL, href: contactHref, primary: true }],
    expectations: [
      { num: '01', text: 'We map the current manual path.' },
      { num: '02', text: 'We identify where ownership breaks.' },
      { num: '03', text: 'We explain whether CRM is needed yet.' },
    ],
  },
};
