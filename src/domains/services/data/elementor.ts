import { buildServiceSeo } from '@/domains/services/seo';
import type { ServicePageData } from '@/domains/services/types';
import { buildServiceContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

type SectionHeader = { kicker: string; title: string; description?: string };

type FitRow = {
  id: string;
  label: string;
  variant: 'fit' | 'not-fit';
  detail: string;
};

type PathStep = {
  id: string;
  num: string;
  title: string;
  detail: string;
};

type ProofCheck = {
  id: string;
  label: string;
  signal: string;
  notSignal: string;
};

type BoundaryColumn = {
  id: string;
  variant: 'builder' | 'structure';
  label: string;
  title: string;
  items: string[];
};

type ElementorSections = {
  capabilityFit: {
    header: SectionHeader;
    label: string;
    rows: FitRow[];
    closing: string;
  };
  deliveryPath: {
    header: SectionHeader;
    steps: PathStep[];
    closing: string;
  };
  proofContext: {
    header: SectionHeader;
    label: string;
    checks: ProofCheck[];
    closing: string;
  };
  boundaries: {
    header: SectionHeader;
    columns: BoundaryColumn[];
    rule: string;
  };
  nextStep: {
    header: SectionHeader;
    bullets: string[];
    closing: string;
  };
};

const slug = 'elementor';
const system = 'smart-website-systems';
const contactHref = buildServiceContactHref({ system, slug });

export const elementorPage: ServicePageData<ElementorSections> = {
  seo: buildServiceSeo({
    slug,
    title: 'Elementor Website Implementation',
    description:
      'Practical Elementor implementation for service businesses that need a controlled website build with a clear enquiry path.',
  }),
  slug,
  badge: 'Elementor',
  category: 'Builder Implementation',
  systems: [system],
  topics: ['website-infrastructure'],
  hero: {
    badge: 'Elementor',
    title: 'Elementor Can Work. [[muted:If The Structure Does.]]',
    description:
      'Elementor is a build method, not the offer. It can fit when delivery stays controlled and the site has a clear enquiry path.',
    list: ['Builder fit', 'Controlled build', 'Clear handoff'],
  },
  sections: {
    capabilityFit: {
      header: {
        kicker: 'Builder Fit',
        title: 'Use Elementor when the constraint is real and the path is clear.',
        description:
          'A builder is a means, not a brief. Elementor fits when these signals are already in place.',
      },
      label: 'When Elementor is the right tool',
      rows: [
        {
          id: 'fit-01',
          variant: 'fit',
          label: 'Existing Elementor site that already runs',
          detail: 'Refining what is there, not starting from a blank page.',
        },
        {
          id: 'fit-02',
          variant: 'fit',
          label: 'In-house team comfortable maintaining pages',
          detail: 'Edits happen without a developer in the loop every time.',
        },
        {
          id: 'fit-03',
          variant: 'fit',
          label: 'Service path and enquiry route already decided',
          detail: 'The builder implements the path. It does not invent it.',
        },
        {
          id: 'fit-04',
          variant: 'not-fit',
          label: 'Heavy custom logic or strict performance budget',
          detail: 'A different build route handles those constraints better.',
        },
        {
          id: 'fit-05',
          variant: 'not-fit',
          label: 'Page structure is the actual problem',
          detail: 'No builder fixes a structure issue. The work belongs upstream.',
        },
      ],
      closing: 'Elementor is one route. The site path decides whether it is the right one.',
    },
    deliveryPath: {
      header: {
        kicker: 'Delivery',
        title: 'A controlled build, not a free-form page exercise.',
        description: 'Elementor work follows the same delivery path as any structured site build.',
      },
      steps: [
        {
          id: 'p-01',
          num: '01',
          title: 'Site path before page design',
          detail: 'Decide what the site is for and where enquiries should land.',
        },
        {
          id: 'p-02',
          num: '02',
          title: 'Page structure agreed in writing',
          detail: 'Sections, order and intent locked before any visual work.',
        },
        {
          id: 'p-03',
          num: '03',
          title: 'Build inside guardrails',
          detail:
            'Reusable blocks, fixed type scale, controlled spacing — not freestyle drag-and-drop.',
        },
        {
          id: 'p-04',
          num: '04',
          title: 'Enquiry route wired in',
          detail: 'Forms, calls and follow-up paths connected to the right destinations.',
        },
        {
          id: 'p-05',
          num: '05',
          title: 'Handover with editing rules',
          detail: 'The team gets a small set of safe controls, not the whole canvas.',
        },
      ],
      closing:
        'Same path as any controlled build. Elementor is the implementation layer, not the brief.',
    },
    proofContext: {
      header: {
        kicker: 'Proof',
        title: 'Useful proof is operational, not visual.',
        description:
          'A builder portfolio does not say much. The real check is whether the site handles enquiries.',
      },
      label: 'How we judge whether the build worked',
      checks: [
        {
          id: 'pc-01',
          label: 'Enquiry path',
          signal: 'A first-time visitor reaches the right next step quickly.',
          notSignal: 'Visitors guess where to click or scroll.',
        },
        {
          id: 'pc-02',
          label: 'Editing safety',
          signal: 'The team can update content without breaking layout.',
          notSignal: 'Every change asks "is this safe to publish?"',
        },
        {
          id: 'pc-03',
          label: 'Performance',
          signal: 'Pages load fast enough on a phone signal.',
          notSignal: 'Heavy widgets stack up and slow the site down.',
        },
        {
          id: 'pc-04',
          label: 'Handoff to handling',
          signal: 'Enquiries land in the right place and get followed up.',
          notSignal: 'The form posts somewhere nobody reads.',
        },
      ],
      closing: 'Visual polish is a baseline. Whether the site does its job is the proof.',
    },
    boundaries: {
      header: {
        kicker: 'Boundaries',
        title: 'What the builder does. What structure does.',
        description:
          'Elementor is the build layer. Smart Website Systems owns the structure that decides whether the page works at all.',
      },
      columns: [
        {
          id: 'col-builder',
          variant: 'builder',
          label: 'Builder layer',
          title: 'Elementor handles the build.',
          items: [
            'Page assembly inside agreed structure.',
            'Reusable blocks and components.',
            'Editing controls for the team.',
            'Visual consistency across the site.',
          ],
        },
        {
          id: 'col-structure',
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
      rule: 'A builder problem and a structure problem look the same on screen. Only the structure layer fixes the structure problem.',
    },
    nextStep: {
      header: {
        kicker: 'Next Step',
        title: 'Start with the question, not the tool.',
        description:
          'The first question is whether Elementor is fixed, optional or wrong for the situation.',
      },
      bullets: [
        'If Elementor is fixed: we work inside it with controlled delivery.',
        'If Elementor is optional: we check whether the site path needs a different route.',
        'If structure is the real problem: the work belongs in Smart Website Systems first.',
      ],
      closing: 'No tool-loyalty. The shortest honest path to a site that works is the priority.',
    },
  },
  cta: {
    heading: {
      kicker: 'Next Step',
      title: 'Check whether Elementor fits the job.',
      description:
        'Tell us what already exists, what needs changing, and whether Elementor is fixed or optional. We will start with the site path, not the builder.',
    },
    actions: [{ label: PRIMARY_CTA_LABEL, href: contactHref, primary: true }],
    expectations: [
      { num: '01', text: 'We check the current site and build constraint.' },
      { num: '02', text: 'We identify whether Elementor is the right route.' },
      { num: '03', text: 'We explain the simplest next step.' },
    ],
  },
};
