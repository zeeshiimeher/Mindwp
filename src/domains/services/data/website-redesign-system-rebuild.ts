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

type RedesignDecisionSections = {
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

const slug = 'website-redesign-system-rebuild';
const system = 'smart-website-systems';
const contactHref = buildServiceContactHref({ system, slug });

export const websiteRedesignSystemRebuildPage: ServicePageData<RedesignDecisionSections> = {
  seo: buildServiceSeo({
    slug,
    title: 'Website Redesign vs System Rebuild',
    description:
      'A focused comparison for deciding between a surface redesign and a system-level rebuild.',
  }),
  slug,
  badge: 'Redesign Decision',
  category: 'Decision Support',
  systems: [system],
  topics: ['website-infrastructure', 'service-page-architecture', 'systems-first-websites'],
  hero: {
    badge: 'Redesign Decision',
    title: 'A New Look May Not Fix The Leak.',
    description:
      'A redesign changes how the site looks. A rebuild changes how it works. The honest decision is whether the problem is on the surface — or underneath it.',
    list: ['Surface vs system', 'Real cost', 'Right scope'],
  },
  sections: {
    decisionStakes: {
      header: {
        kicker: 'What The Decision Controls',
        title: 'The choice is about what is actually broken.',
        description:
          'A redesign treats appearance. A rebuild treats how the site routes, captures and follows up. The decision starts with naming the real problem.',
      },
      stakes: [
        {
          id: 'rs-01',
          num: '01',
          point: 'Where the problem lives.',
          hint: 'On the surface, or in the page paths and capture logic.',
        },
        {
          id: 'rs-02',
          num: '02',
          point: 'How long the change holds.',
          hint: 'A look that ages, or a system that stays useful.',
        },
        {
          id: 'rs-03',
          num: '03',
          point: 'How the team will operate it.',
          hint: 'A nicer brochure, or a working part of the business.',
        },
      ],
    },
    comparison: {
      header: {
        kicker: 'Side By Side',
        title: 'Redesign and rebuild solve different problems.',
        description:
          'A redesign is faster and lighter. A rebuild is slower and deeper. Each is honest about a different situation.',
      },
      optionALabel: 'Option A',
      optionATitle: 'Surface redesign',
      optionBLabel: 'Option B',
      optionBTitle: 'System rebuild',
      rows: [
        {
          id: 'rm-01',
          aspect: 'Scope of change',
          optionA: 'Visual: typography, imagery, layout polish.',
          optionB: 'Structural: page paths, capture, ownership.',
        },
        {
          id: 'rm-02',
          aspect: 'Best fit',
          optionA: 'The site works. It just looks dated.',
          optionB: 'The site looks fine. Enquiries still slip.',
        },
        {
          id: 'rm-03',
          aspect: 'Time and cost',
          optionA: 'Lower. Faster to ship.',
          optionB: 'Higher. Touches more of the operation.',
        },
        {
          id: 'rm-04',
          aspect: 'Result',
          optionA: 'A modern surface on the same logic.',
          optionB: 'A site that handles what it could not before.',
        },
        {
          id: 'rm-05',
          aspect: 'Risk',
          optionA: 'Same leaks, new wallpaper.',
          optionB: 'Disruption while the rebuild lands.',
        },
      ],
    },
    whenToChoose: {
      header: {
        kicker: 'When To Choose Which',
        title: 'The right answer depends on what is actually slipping.',
        description: 'Both routes are honest. The question is whether the surface is the problem.',
      },
      columns: [
        {
          id: 'a',
          variant: 'a',
          label: 'Lean toward redesign',
          title: 'The site works. It just feels behind.',
          signals: [
            'Enquiries arrive at a healthy rate.',
            'Buyers say the brand "looks dated".',
            'Pages convert; structure is solid.',
            'No reports of dropped or lost enquiries.',
          ],
        },
        {
          id: 'b',
          variant: 'b',
          label: 'Lean toward rebuild',
          title: 'The site looks fine. Enquiries still slip.',
          signals: [
            'Forms arrive but no one owns the next step.',
            'Buyers cannot find specific services.',
            'Calls and emails go to scattered inboxes.',
            'Recent design work did not change results.',
          ],
        },
      ],
      closing:
        'A rebuild often includes a redesign. A redesign rarely turns into a rebuild on its own.',
    },
    handoffNext: {
      header: {
        kicker: 'Where The Next Step Belongs',
        title: 'The page handles the decision. The build belongs elsewhere.',
        description: 'Once the route is chosen, the work moves to the right service area.',
      },
      rows: [
        {
          id: 'rh-01',
          when: 'You decide a rebuild is warranted.',
          route: 'Smart Website Systems owns the page architecture.',
        },
        {
          id: 'rh-02',
          when: 'You decide a redesign is enough.',
          route: 'WordPress Development handles the visual rebuild on the same logic.',
        },
        {
          id: 'rh-03',
          when: 'You need conversion handled across the site.',
          route: 'Conversion Layer under Revenue Growth.',
        },
        {
          id: 'rh-04',
          when: 'You need ownership for what the site captures.',
          route: 'CRM & Automation owns the lifecycle.',
        },
      ],
      rule: 'This page supports the decision only. The build belongs in Smart Website Systems first.',
    },
    faq: {
      header: {
        kicker: 'Questions',
        title: 'Common questions about redesign vs rebuild.',
        description: 'Short answers about scope, cost and disruption.',
      },
      items: [
        {
          id: 'rdec-faq-cost',
          question: 'Is a rebuild always more expensive?',
          answer:
            'Usually, yes. It touches more of the operation. The trade-off is that it changes results, not just appearance.',
        },
        {
          id: 'rdec-faq-overlap',
          question: 'Can we redesign as part of a rebuild?',
          answer:
            'Yes. A rebuild almost always includes a refreshed surface. The reverse is rarely true.',
        },
        {
          id: 'rdec-faq-disrupt',
          question: 'Will the rebuild disrupt our current site?',
          answer:
            'There is some disruption. We stage the work so the live site keeps running through the transition.',
        },
      ],
    },
  },
  cta: {
    heading: {
      kicker: 'Next Step',
      title: 'See whether the surface is actually the problem.',
      description:
        'Tell us what is slipping today. We will help name whether the issue is on the surface — or underneath it.',
    },
    actions: [{ label: PRIMARY_CTA_LABEL, href: contactHref, primary: true }],
    expectations: [
      { num: '01', text: 'We review the current site.' },
      { num: '02', text: 'We name where leaks are happening.' },
      { num: '03', text: 'We recommend redesign, rebuild — or both.' },
    ],
  },
};
