import { buildServiceSeo } from '@/domains/services/seo';
import type { ServicePageData } from '@/domains/services/types';
import { buildServiceContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

type SectionHeader = { kicker: string; title: string; description?: string };

type FitRow = { id: string; label: string; variant: 'fit' | 'not-fit'; detail: string };
type PathStep = { id: string; num: string; title: string; detail: string };
type ProofCheck = { id: string; label: string; signal: string; notSignal: string };
type BoundaryColumn = {
  id: string;
  variant: 'builder' | 'structure';
  label: string;
  title: string;
  items: string[];
};

type BricksBuilderSections = {
  capabilityFit: { header: SectionHeader; label: string; rows: FitRow[]; closing: string };
  deliveryPath: { header: SectionHeader; steps: PathStep[]; closing: string };
  proofContext: {
    header: SectionHeader;
    label: string;
    checks: ProofCheck[];
    closing: string;
  };
  boundaries: { header: SectionHeader; columns: BoundaryColumn[]; rule: string };
  nextStep: { header: SectionHeader; bullets: string[]; closing: string };
};

const slug = 'bricks-builder';
const system = 'smart-website-systems';
const contactHref = buildServiceContactHref({ system, slug });

export const bricksBuilderPage: ServicePageData<BricksBuilderSections> = {
  seo: buildServiceSeo({
    slug,
    title: 'Bricks Builder Website Implementation',
    description:
      'Practical Bricks Builder implementation for controlled service-business websites that need clean output and tight performance.',
  }),
  slug,
  badge: 'Bricks Builder',
  category: 'Builder Implementation',
  systems: [system],
  topics: ['website-infrastructure'],
  hero: {
    badge: 'Bricks Builder',
    title: 'Bricks Is A Build Route. [[muted:Not The Strategy.]]',
    description:
      'Bricks builds clean, fast WordPress sites when control matters. The important work is still the structure and enquiry path behind it.',
    list: ['Builder fit', 'Clean output', 'Site structure'],
  },
  sections: {
    capabilityFit: {
      header: {
        kicker: 'Builder Fit',
        title: 'Use Bricks when control, output quality and speed matter.',
        description:
          'Bricks earns its place when the build needs clean markup, tight performance and developer-grade control.',
      },
      label: 'When Bricks is the right build route',
      rows: [
        {
          id: 'b-fit-01',
          variant: 'fit',
          label: 'Performance is part of the brief',
          detail: 'Lean output and fewer plugin assumptions help here.',
        },
        {
          id: 'b-fit-02',
          variant: 'fit',
          label: 'Custom layout work that other builders make awkward',
          detail: 'Bricks gives more control without dropping to raw code.',
        },
        {
          id: 'b-fit-03',
          variant: 'fit',
          label: 'Team comfortable working inside a more technical builder',
          detail: 'Editing safety relies on a small set of guardrails.',
        },
        {
          id: 'b-fit-04',
          variant: 'not-fit',
          label: 'Non-technical team who edit pages daily',
          detail: 'A simpler editor often serves them better.',
        },
        {
          id: 'b-fit-05',
          variant: 'not-fit',
          label: 'Site path and enquiry route are still undecided',
          detail: 'Pick the structure first. Pick the builder second.',
        },
      ],
      closing:
        'Bricks rewards control. It is the wrong call for a team that just needs to edit a sentence.',
    },
    deliveryPath: {
      header: {
        kicker: 'Delivery',
        title: 'A clean build with strict guardrails.',
        description:
          'Bricks gives a lot of freedom. The delivery path keeps that freedom from becoming chaos later.',
      },
      steps: [
        {
          id: 'b-p-01',
          num: '01',
          title: 'Site path decided before any build',
          detail: 'Pages, intent and enquiry route locked first.',
        },
        {
          id: 'b-p-02',
          num: '02',
          title: 'Theme settings, classes and tokens',
          detail: 'A small, named system of styles — not freestyle every section.',
        },
        {
          id: 'b-p-03',
          num: '03',
          title: 'Components and templates',
          detail: 'Reusable blocks the team can place safely.',
        },
        {
          id: 'b-p-04',
          num: '04',
          title: 'Pages assembled inside the system',
          detail: 'No one-off styling buried inside individual pages.',
        },
        {
          id: 'b-p-05',
          num: '05',
          title: 'Editing rules and handoff',
          detail: 'Team gets the controls they need, not the entire toolbox.',
        },
      ],
      closing: 'A site that stays clean six months after launch — that is the goal.',
    },
    proofContext: {
      header: {
        kicker: 'Proof',
        title: 'The right proof is how the site behaves later.',
        description: 'Bricks looks great in a portfolio. The honest test is the lived experience.',
      },
      label: 'How we judge whether the build holds up',
      checks: [
        {
          id: 'b-pc-01',
          label: 'Performance',
          signal: 'Fast pages on a phone signal, not just a lab test.',
          notSignal: 'Pages bloated by visual extras the brief never asked for.',
        },
        {
          id: 'b-pc-02',
          label: 'Output cleanliness',
          signal: 'Markup the team can extend without fighting it.',
          notSignal: 'Nested wrappers and class soup nobody can read.',
        },
        {
          id: 'b-pc-03',
          label: 'Layout stability',
          signal: 'Components hold up after edits and additions.',
          notSignal: 'A small tweak cascades into a layout fix everywhere.',
        },
        {
          id: 'b-pc-04',
          label: 'Editing safety',
          signal: 'The team has clear, safe controls.',
          notSignal: 'Every change asks "is this safe to publish?"',
        },
      ],
      closing:
        'Performance and clean output are the easy wins. Editing safety is the harder one. Both matter.',
    },
    boundaries: {
      header: {
        kicker: 'Boundaries',
        title: 'What Bricks does. What structure does.',
        description: 'Bricks is the build layer. Site path and enquiry handling sit upstream.',
      },
      columns: [
        {
          id: 'b-col-builder',
          variant: 'builder',
          label: 'Bricks layer',
          title: 'Bricks handles the build.',
          items: [
            'Theme settings, tokens and class system.',
            'Templates and reusable components.',
            'Lean markup and asset control.',
            'Editing surface for the team.',
          ],
        },
        {
          id: 'b-col-structure',
          variant: 'structure',
          label: 'Structure layer',
          title: 'Smart Website Systems decides the path.',
          items: [
            'Why the site exists and who it is for.',
            'Page order and how visitors travel through.',
            'Where enquiries land and how they are handled.',
            'How the site connects to the rest of the system.',
          ],
        },
      ],
      rule: 'A clean build of a confused site is still a confused site.',
    },
    nextStep: {
      header: {
        kicker: 'Next Step',
        title: 'Pick the structure. Then pick the builder.',
        description:
          'Bricks is a strong option once the path is clear. The order matters more than the brand.',
      },
      bullets: [
        'If Bricks is fixed: we work inside it with strict guardrails.',
        'If Bricks is optional: we check whether it suits the team that will edit it.',
        'If structure is the real problem: the work belongs in Smart Website Systems first.',
      ],
      closing:
        'No tool-loyalty. The shortest honest path to a clean, working site is the priority.',
    },
  },
  cta: {
    heading: {
      kicker: 'Next Step',
      title: 'Check whether Bricks fits the build.',
      description:
        'Tell us what needs building or rebuilding, and who will edit it after launch. We will check whether Bricks is the right route.',
    },
    actions: [{ label: PRIMARY_CTA_LABEL, href: contactHref, primary: true }],
    expectations: [
      { num: '01', text: 'We check the current site and build goal.' },
      { num: '02', text: 'We identify whether Bricks is a good fit.' },
      { num: '03', text: 'We explain the simplest implementation route.' },
    ],
  },
};
