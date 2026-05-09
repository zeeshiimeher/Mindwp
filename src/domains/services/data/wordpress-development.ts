import { buildServiceSeo } from '@/domains/services/seo';
import type { ServicePageData } from '@/domains/services/types';
import { buildServiceContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

type SectionHeader = { kicker: string; title: string; description?: string };
type ContextRow = {
  id: string;
  origin: string;
  ageBand: string;
  signal: string;
  state: 'workable' | 'caution' | 'leave';
};
type SequenceStep = { id: string; num: string; timing: string; title: string; detail: string };
type RuleRow = { id: string; criterion: string; good: string; bad: string };
type BridgeRow = { id: string; belongsTo: 'wp' | 'parent'; point: string };
type FitColumn = {
  id: string;
  variant: 'fit' | 'not-fit';
  label: string;
  title: string;
  signals: string[];
};

type WPSections = {
  fitContext: { header: SectionHeader; label: string; sources: ContextRow[]; closing: string };
  buildPath: { header: SectionHeader; steps: SequenceStep[]; closing: string };
  operatingBoundaries: { header: SectionHeader; rows: RuleRow[]; closing: string };
  handoffIntoSystems: { header: SectionHeader; rows: BridgeRow[]; rule: string };
  fitBoundaries: { header: SectionHeader; columns: FitColumn[]; closing: string };
  faq: { header: SectionHeader; items: Array<{ id: string; question: string; answer: string }> };
};

const slug = 'wordpress-development';
const system = 'smart-website-systems';
const contactHref = buildServiceContactHref({ system, slug });

export const wordpressDevelopmentPage: ServicePageData<WPSections> = {
  seo: buildServiceSeo({
    slug,
    title: 'WordPress Development for Service Businesses',
    description:
      'WordPress implementation for service businesses that need a controlled site, not a generic agency build.',
  }),
  slug,
  badge: 'WordPress Development',
  category: 'Implementation Pathway',
  systems: [system],
  topics: ['website-infrastructure', 'systems-first-websites'],
  hero: {
    badge: 'WordPress Development',
    title: 'WordPress Is The Tool. [[muted:Handling Is The Job.]]',
    description:
      'A WordPress site can look finished while enquiries still leak. WordPress is an implementation route under Smart Website Systems — chosen for control, not for the logo.',
    list: ['Structured pages', 'Honest enquiry path', 'Maintainable build'],
  },
  sections: {
    fitContext: {
      header: {
        kicker: 'When WordPress Fits',
        title: 'WordPress is a route, not a strategy.',
        description:
          'It earns its place when the team needs control, custom structure and a base they can maintain.',
      },
      label: 'How WordPress usually shows up in a real brief',
      sources: [
        {
          id: 'wp-01',
          origin: 'Custom page structure required',
          ageBand: 'New build',
          signal: 'Service-page system, industry pages, decision pages — WordPress handles them.',
          state: 'workable',
        },
        {
          id: 'wp-02',
          origin: 'Existing WordPress site to evolve',
          ageBand: 'Active',
          signal: 'Building on a stack the team already knows.',
          state: 'workable',
        },
        {
          id: 'wp-03',
          origin: 'Need for editor control',
          ageBand: 'Ongoing',
          signal: 'The team needs to update content without engineering.',
          state: 'workable',
        },
        {
          id: 'wp-04',
          origin: 'Heavy ecommerce alongside services',
          ageBand: 'Mixed',
          signal: 'Possible. Decide between WordPress route and a dedicated platform.',
          state: 'caution',
        },
        {
          id: 'wp-05',
          origin: 'Pure SaaS product or app marketing only',
          ageBand: 'N/A',
          signal: 'WordPress is not the right base. Different scope.',
          state: 'leave',
        },
      ],
      closing: 'WordPress is chosen for control and maintainability. Not for novelty.',
    },
    buildPath: {
      header: {
        kicker: 'Build Path',
        title: 'The build follows the page system, not the other way around.',
        description:
          'Structure, content and capture are decided first. WordPress implements them — it does not lead them.',
      },
      steps: [
        {
          id: 'b-01',
          num: '01',
          timing: 'Plan',
          title: 'Confirm the page system and content shape.',
          detail:
            'Service pages, industry pages and decision pages are defined before the build starts.',
        },
        {
          id: 'b-02',
          num: '02',
          timing: 'Build',
          title: 'Implement the structure with editor control.',
          detail:
            'Reusable patterns. Editable content. No fragile shortcodes the team cannot touch.',
        },
        {
          id: 'b-03',
          num: '03',
          timing: 'Connect',
          title: 'Wire forms, lead routes and integrations.',
          detail: 'Forms feed the right inboxes and CRM with named owners.',
        },
        {
          id: 'b-04',
          num: '04',
          timing: 'Hand over',
          title: 'Document so the team can run it.',
          detail: 'Editing notes and a maintenance route. Nothing relies on tribal knowledge.',
        },
      ],
      closing: 'A handover the team can actually use is part of the build, not a bonus.',
    },
    operatingBoundaries: {
      header: {
        kicker: 'Operating Rules',
        title: 'A WordPress build has rules that protect it.',
        description:
          'Plugin choices, builder use and integrations follow rules so the build stays maintainable after handover.',
      },
      rows: [
        {
          id: 'or-01',
          criterion: 'Plugin selection',
          good: 'Few, well-supported plugins with clear ownership.',
          bad: 'Plugin sprawl. Updates skipped because of fear.',
        },
        {
          id: 'or-02',
          criterion: 'Page builder use',
          good: 'Used inside agreed limits. Patterns reusable across pages.',
          bad: 'Every page styled differently. No consistent system underneath.',
        },
        {
          id: 'or-03',
          criterion: 'Custom code',
          good: 'Versioned, documented, narrow in scope.',
          bad: 'Anonymous snippets nobody can trace later.',
        },
        {
          id: 'or-04',
          criterion: 'Updates and security',
          good: 'Routine, owned, with rollback plan.',
          bad: 'Updates avoided until something breaks first.',
        },
      ],
      closing: 'The build is meant to keep working — including in three years.',
    },
    handoffIntoSystems: {
      header: {
        kicker: 'System Bridge',
        title: 'WordPress builds the site. Smart Website Systems carries the framework.',
        description:
          'The build supplies the surface. The strategic framework on top of it belongs to Smart Website Systems.',
      },
      rows: [
        { id: 'wb-01', belongsTo: 'wp', point: 'Implementing the page structure in WordPress.' },
        {
          id: 'wb-02',
          belongsTo: 'wp',
          point: 'Setting up forms, integrations and editor controls.',
        },
        { id: 'wb-03', belongsTo: 'wp', point: 'Documenting the build for the team.' },
        { id: 'wb-04', belongsTo: 'parent', point: 'Owning the page system and content strategy.' },
        {
          id: 'wb-05',
          belongsTo: 'parent',
          point: 'Carrying the conversion structure of every page.',
        },
        {
          id: 'wb-06',
          belongsTo: 'parent',
          point: 'Holding the long-term framework that defines what gets built.',
        },
      ],
      rule: 'WordPress is one route. The framework decides what it implements.',
    },
    fitBoundaries: {
      header: {
        kicker: 'Fit Filter',
        title: 'Useful when WordPress is the honest base for the site.',
        description: 'A practical WordPress build is different from a full site strategy decision.',
      },
      columns: [
        {
          id: 'fit',
          variant: 'fit',
          label: 'Strong fit',
          title: 'Service businesses needing controlled, maintainable WordPress.',
          signals: [
            'Custom service-page system needed.',
            'Existing WordPress base to evolve.',
            'Editor control required for the team.',
            'Multiple integrations with CRM and lead handling.',
          ],
        },
        {
          id: 'not-fit',
          variant: 'not-fit',
          label: 'Not a fit',
          title: 'Wrong tool, wrong scope or template-only need.',
          signals: [
            'Pure SaaS product marketing site.',
            'Single-page brochure with no enquiry handling.',
            'Template-only refresh with no structural change.',
            'Team unwilling to maintain a real CMS.',
          ],
        },
      ],
      closing:
        'For template-only or fully managed needs, the right route is different. Not WordPress development.',
    },
    faq: {
      header: {
        kicker: 'Questions',
        title: 'Common questions about WordPress development.',
        description: 'Short answers about scope, builders, maintenance and handoff.',
      },
      items: [
        {
          id: 'wp-faq-builder',
          question: 'Is this just a WordPress build?',
          answer:
            'No. The build implements an agreed page system. WordPress is the route, not the strategy.',
        },
        {
          id: 'wp-faq-builders',
          question: 'Do you use page builders?',
          answer:
            'Sometimes — within rules that keep the build maintainable. Builders never replace structural decisions.',
        },
        {
          id: 'wp-faq-maintenance',
          question: 'What about long-term maintenance?',
          answer:
            'A maintenance route and clear owner are part of the handover. Updates and security follow agreed rules.',
        },
        {
          id: 'wp-faq-strategy',
          question: 'How does this fit Smart Website Systems?',
          answer: 'Smart Website Systems decides the framework. WordPress implements it.',
        },
      ],
    },
  },
  cta: {
    heading: {
      kicker: 'Next Step',
      title: 'See whether WordPress is the right base.',
      description:
        'Tell us what the site needs to do for the business. We will look at whether WordPress is the honest implementation route, or whether a different scope fits better.',
    },
    actions: [{ label: PRIMARY_CTA_LABEL, href: contactHref, primary: true }],
    expectations: [
      { num: '01', text: 'We confirm the page system the build will follow.' },
      { num: '02', text: 'We agree the operating rules of the build.' },
      { num: '03', text: 'We outline handover so the team can run it.' },
    ],
  },
};
