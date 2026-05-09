import { buildServiceSeo } from '@/domains/services/seo';
import type { ServicePageData } from '@/domains/services/types';
import { buildServiceContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

type SectionHeader = { kicker: string; title: string; description?: string };
type SignalRow = {
  id: string;
  origin: string;
  ageBand: string;
  signal: string;
  state: 'workable' | 'caution' | 'leave';
};
type SequenceStep = { id: string; num: string; timing: string; title: string; detail: string };
type RiskRow = { id: string; criterion: string; good: string; bad: string };
type BridgeRow = { id: string; belongsTo: 'migration' | 'parent'; point: string };
type FitColumn = {
  id: string;
  variant: 'fit' | 'not-fit';
  label: string;
  title: string;
  signals: string[];
};

type MigrationSections = {
  migrationSignals: { header: SectionHeader; label: string; sources: SignalRow[]; closing: string };
  consolidationPath: { header: SectionHeader; steps: SequenceStep[]; closing: string };
  riskBoundaries: { header: SectionHeader; rows: RiskRow[]; closing: string };
  handoffPlan: { header: SectionHeader; rows: BridgeRow[]; rule: string };
  fitBoundaries: { header: SectionHeader; columns: FitColumn[]; closing: string };
  faq: { header: SectionHeader; items: Array<{ id: string; question: string; answer: string }> };
};

const slug = 'system-migration-platform-consolidation';
const system = 'smart-website-systems';
const contactHref = buildServiceContactHref({ system, slug });

export const systemMigrationPlatformConsolidationPage: ServicePageData<MigrationSections> = {
  seo: buildServiceSeo({
    slug,
    title: 'System Migration and Platform Consolidation',
    description:
      'A practical route for moving scattered website and lead-handling tools into a clearer setup, without losing what still works.',
  }),
  slug,
  badge: 'System Migration',
  category: 'Implementation Pathway',
  systems: [system],
  topics: ['website-infrastructure'],
  hero: {
    badge: 'System Migration',
    title: 'Too Many Tools. [[muted:No Clear Owner.]]',
    description:
      'Old plugins, builders, forms and contact routes can keep working long after they stop making sense. Migration work clears the path without breaking what the business still relies on.',
    list: ['Quiet signals', 'Tool cleanup', 'Safer handoff'],
  },
  sections: {
    migrationSignals: {
      header: {
        kicker: 'Migration Signals',
        title: 'Migration starts when the current setup creates real risk.',
        description:
          'Most teams notice the symptoms before they name the cause. The signals show up as friction, not failure.',
      },
      label: 'How an aging setup usually shows itself',
      sources: [
        {
          id: 'm-01',
          origin: 'Form builders nobody owns',
          ageBand: 'Years old',
          signal: 'Different forms across pages, different inboxes, no shared rules.',
          state: 'workable',
        },
        {
          id: 'm-02',
          origin: 'Plugin stack with abandoned tools',
          ageBand: 'Stale',
          signal: 'Updates skipped to avoid breakage. Risk grows quietly.',
          state: 'workable',
        },
        {
          id: 'm-03',
          origin: 'Multiple booking or quote tools',
          ageBand: 'Overlap',
          signal: 'Same job done two or three different ways across the site.',
          state: 'workable',
        },
        {
          id: 'm-04',
          origin: 'Brand or domain changes overdue',
          ageBand: 'Pending',
          signal: 'Big move waiting on cleanup that never happens.',
          state: 'caution',
        },
        {
          id: 'm-05',
          origin: 'Tools the team likes and uses well',
          ageBand: 'Healthy',
          signal: 'Leave alone. Migration is about risk, not novelty.',
          state: 'leave',
        },
      ],
      closing:
        'Not every old tool is a problem. The work begins where age starts to slow real decisions down.',
    },
    consolidationPath: {
      header: {
        kicker: 'Consolidation Path',
        title: 'The goal is fewer weak points, not a tool swap.',
        description:
          'Useful parts stay. Dead parts go. Handoffs get clearer before any move is called finished.',
      },
      steps: [
        {
          id: 'mp-01',
          num: '01',
          timing: 'Audit',
          title: 'Map what is actually in use.',
          detail:
            'Tools, forms, integrations, contact routes. What runs the business — and what just runs.',
        },
        {
          id: 'mp-02',
          num: '02',
          timing: 'Decide',
          title: 'Mark stay, replace, retire.',
          detail: 'Each item has a clear future. Nothing carries forward by default.',
        },
        {
          id: 'mp-03',
          num: '03',
          timing: 'Move',
          title: 'Migrate in safe, named stages.',
          detail: 'Forms, lead routes and live integrations move with rollback in mind.',
        },
        {
          id: 'mp-04',
          num: '04',
          timing: 'Verify',
          title: 'Confirm enquiries still arrive and route.',
          detail: 'Nothing is signed off until the lead path works end to end on the new setup.',
        },
      ],
      closing: 'Migration is not a swap event. It is a sequence of small, reversible moves.',
    },
    riskBoundaries: {
      header: {
        kicker: 'Risk Check',
        title: 'Some migration risks are real. Some are imagined.',
        description:
          'Knowing the difference keeps the work focused — and keeps the team out of avoidable rebuild loops.',
      },
      rows: [
        {
          id: 'rb-01',
          criterion: 'Live forms and booking links',
          good: 'Mapped, redirected and tested before cutover.',
          bad: 'Quietly broken on the day. Lost enquiries discovered later.',
        },
        {
          id: 'rb-02',
          criterion: 'SEO and indexed URLs',
          good: 'Redirect plan in place. Authority preserved where possible.',
          bad: 'Old URLs dropped without redirects. Visibility resets.',
        },
        {
          id: 'rb-03',
          criterion: 'Integrations with CRM or email',
          good: 'Verified message-by-message during cutover.',
          bad: 'Assumed to work. Silent breakage for days.',
        },
        {
          id: 'rb-04',
          criterion: 'Team workflow change',
          good: 'Trained, documented, owned by name.',
          bad: 'New tools dropped on a team mid-week with no warning.',
        },
      ],
      closing: 'Migration risk is operational. Treat it that way and the work stays calm.',
    },
    handoffPlan: {
      header: {
        kicker: 'System Bridge',
        title: 'Migration prepares the ground. Smart Website Systems lives on it.',
        description:
          'This work clears the setup. The structural framework that runs on top is owned by Smart Website Systems.',
      },
      rows: [
        {
          id: 'mb-01',
          belongsTo: 'migration',
          point: 'Auditing the current tool and integration stack.',
        },
        { id: 'mb-02', belongsTo: 'migration', point: 'Planning the staged moves and rollbacks.' },
        {
          id: 'mb-03',
          belongsTo: 'migration',
          point: 'Cutting over forms, lead routes and integrations.',
        },
        {
          id: 'mb-04',
          belongsTo: 'parent',
          point: 'Owning the page flow that runs on the new setup.',
        },
        {
          id: 'mb-05',
          belongsTo: 'parent',
          point: 'Holding the conversion structure of every key page.',
        },
        { id: 'mb-06', belongsTo: 'parent', point: 'Carrying the long-term framework forward.' },
      ],
      rule: 'Migration is a one-off operational move. Smart Website Systems is the long-term framework.',
    },
    fitBoundaries: {
      header: {
        kicker: 'Fit Filter',
        title: 'Useful when the current setup is slowing real change down.',
        description: 'Migration is the right scope when the cost is operational, not just visual.',
      },
      columns: [
        {
          id: 'fit',
          variant: 'fit',
          label: 'Strong fit',
          title: 'Established setup with real risk underneath.',
          signals: [
            'Years of plugin and tool sprawl.',
            'Forms or booking routes nobody fully owns.',
            'Pending domain, brand or platform change.',
            'Team avoiding updates because of fear of breakage.',
          ],
        },
        {
          id: 'not-fit',
          variant: 'not-fit',
          label: 'Not a fit',
          title: 'New build or low-risk current setup.',
          signals: [
            'Recently rebuilt, low operational risk.',
            'Single tool stack already understood by the team.',
            'No integrations to consolidate.',
            'Need is design refresh, not migration.',
          ],
        },
      ],
      closing:
        'When the answer is design refresh, the right route is Smart Website Systems instead.',
    },
    faq: {
      header: {
        kicker: 'Questions',
        title: 'Common questions about migration work.',
        description: 'Short answers about risk, tools and what moves first.',
      },
      items: [
        {
          id: 'migration-faq-tools',
          question: 'Do all tools need to be replaced?',
          answer: 'No. The audit marks each tool stay, replace or retire. Healthy tools stay.',
        },
        {
          id: 'migration-faq-seo',
          question: 'What about SEO and rankings?',
          answer:
            'A redirect plan and URL map are part of the work. Authority is preserved where possible — but no claim is made about ranking outcomes.',
        },
        {
          id: 'migration-faq-downtime',
          question: 'Will the site be down?',
          answer:
            'Cutovers are staged. Real downtime is short and planned. Forms and lead routes are tested both sides of the move.',
        },
        {
          id: 'migration-faq-rebuild',
          question: 'Is this a website rebuild?',
          answer:
            'No. A full rebuild is a different scope under Smart Website Systems. Migration moves what exists into a cleaner setup.',
        },
      ],
    },
  },
  cta: {
    heading: {
      kicker: 'Next Step',
      title: 'See whether migration is the right scope.',
      description:
        'Tell us what is in the current stack and where the friction is. We will look at whether migration, consolidation or a full system rebuild is the honest answer.',
    },
    actions: [{ label: PRIMARY_CTA_LABEL, href: contactHref, primary: true }],
    expectations: [
      { num: '01', text: 'We map current tools and integrations.' },
      { num: '02', text: 'We separate real risk from cosmetic noise.' },
      { num: '03', text: 'We outline the staged move and handoff.' },
    ],
  },
};
