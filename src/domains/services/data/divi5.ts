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

type Divi5Sections = {
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

const slug = 'divi5';
const system = 'smart-website-systems';
const contactHref = buildServiceContactHref({ system, slug });

export const divi5Page: ServicePageData<Divi5Sections> = {
  seo: buildServiceSeo({
    slug,
    title: 'Divi 5 Website Implementation',
    description:
      'Practical Divi 5 implementation and rebuilds for service businesses keeping a familiar editing surface.',
  }),
  slug,
  badge: 'Divi 5',
  category: 'Builder Implementation',
  systems: [system],
  topics: ['website-infrastructure'],
  hero: {
    badge: 'Divi 5',
    title: 'Divi Can Stay. [[muted:The Structure Still Matters.]]',
    description:
      'If Divi already runs the site, the question is not the builder. The question is whether the pages, enquiry routes and handoff are doing their job.',
    list: ['Existing sites', 'Controlled rebuilds', 'Practical handoff'],
  },
  sections: {
    capabilityFit: {
      header: {
        kicker: 'Builder Fit',
        title: 'Divi makes sense to keep when it is already doing the job.',
        description:
          'A familiar editing surface has real value. The question is whether keeping Divi helps or holds the site back.',
      },
      label: 'When Divi is the right tool to keep',
      rows: [
        {
          id: 'd-fit-01',
          variant: 'fit',
          label: 'Working Divi site with content the team already manages',
          detail: 'Switching builders would lose familiarity for marginal gain.',
        },
        {
          id: 'd-fit-02',
          variant: 'fit',
          label: 'Templates and global styles already configured well',
          detail: 'Existing structure can be tightened rather than thrown away.',
        },
        {
          id: 'd-fit-03',
          variant: 'fit',
          label: 'Page edits happen weekly without developer help',
          detail: 'A builder switch would slow down the team that owns it.',
        },
        {
          id: 'd-fit-04',
          variant: 'not-fit',
          label: 'Site struggles with speed and the cause is plugin sprawl',
          detail: 'A clean rebuild often resolves more than a Divi tweak can.',
        },
        {
          id: 'd-fit-05',
          variant: 'not-fit',
          label: 'Page structure has grown messy over years',
          detail: 'No builder fixes a structural mess. The work belongs upstream.',
        },
      ],
      closing: 'Divi is one route. Familiarity counts. So does whether the site still works.',
    },
    deliveryPath: {
      header: {
        kicker: 'Delivery',
        title: 'A controlled rebuild inside Divi, not a fresh canvas every time.',
        description:
          'The work follows a defined path so the editing surface stays familiar after launch.',
      },
      steps: [
        {
          id: 'd-p-01',
          num: '01',
          title: 'Audit what the current site actually does',
          detail: 'Pages, traffic, enquiries and editing patterns mapped before changes.',
        },
        {
          id: 'd-p-02',
          num: '02',
          title: 'Decide what stays and what is removed',
          detail: 'Cut anything that no longer earns its place on the site.',
        },
        {
          id: 'd-p-03',
          num: '03',
          title: 'Rebuild structure inside Divi templates',
          detail: 'Global styles, reusable modules and a tight type scale.',
        },
        {
          id: 'd-p-04',
          num: '04',
          title: 'Wire enquiries to where they belong',
          detail: 'Forms and call paths connected to the right destinations.',
        },
        {
          id: 'd-p-05',
          num: '05',
          title: 'Editing rules for the team',
          detail: 'Keep the canvas useful without letting layout drift over time.',
        },
      ],
      closing:
        'Divi stays. Structure improves. The team still recognises the editor on Monday morning.',
    },
    proofContext: {
      header: {
        kicker: 'Proof',
        title: 'Useful proof is operational, not visual.',
        description:
          'The right check is not how Divi looks in a portfolio. It is how the site behaves after launch.',
      },
      label: 'How we judge whether the rebuild worked',
      checks: [
        {
          id: 'd-pc-01',
          label: 'Editing speed',
          signal: 'The team makes routine changes in minutes, not days.',
          notSignal: 'Every edit waits for someone with builder knowledge.',
        },
        {
          id: 'd-pc-02',
          label: 'Page weight',
          signal: 'Pages load on a phone signal without spinning.',
          notSignal: 'Modules and plugins make the site feel slow.',
        },
        {
          id: 'd-pc-03',
          label: 'Layout stability',
          signal: 'Updates do not break the page on mobile.',
          notSignal: 'Small tweaks cascade into hours of cleanup.',
        },
        {
          id: 'd-pc-04',
          label: 'Enquiry handling',
          signal: 'Forms reach the right inbox and get followed up.',
          notSignal: 'Enquiries land in a forgotten address.',
        },
      ],
      closing:
        'A familiar editor is a feature. A familiar editor that quietly drains the team is not.',
    },
    boundaries: {
      header: {
        kicker: 'Boundaries',
        title: 'What Divi does. What structure does.',
        description:
          'Divi is the build layer. Smart Website Systems decides whether the site path is sound.',
      },
      columns: [
        {
          id: 'd-col-builder',
          variant: 'builder',
          label: 'Divi layer',
          title: 'Divi handles the build and editing surface.',
          items: [
            'Templates, global styles and reusable modules.',
            'In-place editing for the team.',
            'Page assembly inside agreed structure.',
            'Visual consistency across the site.',
          ],
        },
        {
          id: 'd-col-structure',
          variant: 'structure',
          label: 'Structure layer',
          title: 'Smart Website Systems decides the site path.',
          items: [
            'Why the site exists and what it has to handle.',
            'Page order and how visitors travel through.',
            'Where enquiries go and how they are handled.',
            'How the site connects to the rest of the system.',
          ],
        },
      ],
      rule: 'A builder problem and a structure problem look the same on screen. Only the structure layer fixes the structure problem.',
    },
    nextStep: {
      header: {
        kicker: 'Next Step',
        title: 'Decide whether Divi is helping or holding back.',
        description:
          'The first question is whether keeping Divi is a constraint, a preference or simply the right call.',
      },
      bullets: [
        'If Divi is a constraint: we work inside it with a controlled rebuild.',
        'If Divi is a preference: we check whether keeping it serves the site path.',
        'If structure is the real problem: the work belongs in Smart Website Systems first.',
      ],
      closing: 'Familiar editing surface, sound structure underneath. Both, ideally.',
    },
  },
  cta: {
    heading: {
      kicker: 'Next Step',
      title: 'Check whether Divi should stay.',
      description:
        'Tell us what is already built, what needs to change, and whether keeping Divi is a constraint or a preference.',
    },
    actions: [{ label: PRIMARY_CTA_LABEL, href: contactHref, primary: true }],
    expectations: [
      { num: '01', text: 'We check the current Divi setup.' },
      { num: '02', text: 'We identify whether the structure can be fixed inside it.' },
      { num: '03', text: 'We explain the right rebuild path.' },
    ],
  },
};
