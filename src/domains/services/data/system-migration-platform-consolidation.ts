import { buildServiceSeo } from '@/domains/services/seo';
import type { ServicePageData } from '@/domains/services/types';
import { buildServiceContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

type HeaderOnlySection = {
  header: {
    kicker: string;
    title: string;
    description: string;
  };
};

type FAQSectionData = HeaderOnlySection & {
  items: Array<{ id: string; question: string; answer: string }>;
};

type SystemMigrationSections = {
  migrationSignals: HeaderOnlySection;
  consolidationPath: HeaderOnlySection;
  riskBoundaries: HeaderOnlySection;
  handoffPlan: HeaderOnlySection;
  fitBoundaries: HeaderOnlySection;
  faq: FAQSectionData;
};

const slug = 'system-migration-platform-consolidation';
const system = 'smart-website-systems';
const contactHref = buildServiceContactHref({ system, slug });

export const systemMigrationPlatformConsolidationPage: ServicePageData<SystemMigrationSections> = {
  seo: buildServiceSeo({
    slug,
    title: 'System Migration and Platform Consolidation',
    description:
      'A practical route for moving scattered website and lead-handling tools into a clearer setup.',
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
      'Old plugins, builders, forms, calendars, and contact routes can keep working long after they stop making sense. Migration work clears the path without losing what the business still needs.',
    list: ['Migration signals', 'Tool cleanup', 'Safer handoff'],
  },
  sections: {
    migrationSignals: {
      header: {
        kicker: 'Signals',
        title: 'Migration starts when the current setup creates risk.',
        description:
          'The signs usually show up as brittle forms, plugin clutter, unclear ownership, and broken handoffs.',
      },
    },
    consolidationPath: {
      header: {
        kicker: 'Consolidation',
        title: 'The goal is fewer weak points, not a tool swap.',
        description:
          'Useful parts stay, dead parts go, and handoffs become clearer before the move is treated as finished.',
      },
    },
    riskBoundaries: {
      header: {
        kicker: 'Risk',
        title: 'Migration work needs a clean boundary.',
        description:
          'This work is about safer movement and clearer structure, not promises around rankings, traffic, or instant revenue.',
      },
    },
    handoffPlan: {
      header: {
        kicker: 'Handoff',
        title: 'The rebuilt setup must still catch and route enquiries.',
        description:
          'Bridge back to Smart Website Systems when the migration affects page flow, forms, or contact paths.',
      },
    },
    fitBoundaries: {
      header: {
        kicker: 'Fit',
        title: 'Useful when the current setup is slowing change down.',
        description:
          'Qualify whether the business needs migration, consolidation, or a more complete system rebuild.',
      },
    },
    faq: {
      header: {
        kicker: 'Questions',
        title: 'Common questions about migration work.',
        description: 'Short answers about risk, tools, and what should move first.',
      },
      items: [
        {
          id: 'migration-faq-tools',
          question: 'Do all tools need to be replaced?',
          answer:
            'No. The first step is deciding what still earns its place and what creates risk, clutter, or manual work.',
        },
        {
          id: 'migration-faq-risk',
          question: 'How do you avoid breaking what works?',
          answer:
            'The migration plan should identify what must keep working, what can move safely, and what needs a staged handoff.',
        },
      ],
    },
  },
  cta: {
    heading: {
      kicker: 'Next Step',
      title: 'Check what should move and what should stay.',
      description:
        'Tell us what tools, site parts, or lead paths are causing friction. We will identify the safest first move.',
    },
    actions: [{ label: PRIMARY_CTA_LABEL, href: contactHref, primary: true }],
    expectations: [
      { num: '01', text: 'We look at the current setup.' },
      { num: '02', text: 'We identify risk and useful parts.' },
      { num: '03', text: 'We outline the migration path.' },
    ],
  },
};
