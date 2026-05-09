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

type ServicePagesDecisionSections = {
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

const slug = 'service-pages-vs-one-generic-services-page';
const system = 'smart-website-systems';
const contactHref = buildServiceContactHref({ system, slug });

export const servicePagesVsOneGenericServicesPage: ServicePageData<ServicePagesDecisionSections> = {
  seo: buildServiceSeo({
    slug,
    title: 'Service Pages vs One Generic Services Page',
    description:
      'A focused comparison for deciding between a single services page and dedicated pages for each service.',
  }),
  slug,
  badge: 'Service Pages Decision',
  category: 'Decision Support',
  systems: [system],
  topics: ['service-page-architecture', 'service-pages', 'website-infrastructure', 'local-seo'],
  hero: {
    badge: 'Service Pages Decision',
    title: 'One Services Page Can Hide Intent.',
    description:
      'A single page that lists every service is fast to ship. It also blurs the buyer signal. The honest decision is whether each service deserves its own path.',
    list: ['Page structure', 'Buyer intent', 'Service depth'],
  },
  sections: {
    decisionStakes: {
      header: {
        kicker: 'What The Decision Controls',
        title: 'The choice is about how clearly each service is named.',
        description:
          'A generic services page is convenient. A page per service is specific. The decision is whether the buyer can find what they actually need.',
      },
      stakes: [
        {
          id: 'sps-01',
          num: '01',
          point: 'How buyer intent is matched.',
          hint: 'A general overview, or a page that names the exact service.',
        },
        {
          id: 'sps-02',
          num: '02',
          point: 'How search visibility behaves.',
          hint: 'One page competing for everything, or a page per service competing for specifics.',
        },
        {
          id: 'sps-03',
          num: '03',
          point: 'How the team explains the work.',
          hint: 'A short summary of all services, or a complete answer for each.',
        },
      ],
    },
    comparison: {
      header: {
        kicker: 'Side By Side',
        title: 'Both structures are honest. They serve different intents.',
        description:
          'A generic services page is faster. Service-specific pages do more work — for the buyer and for search.',
      },
      optionALabel: 'Option A',
      optionATitle: 'One generic services page',
      optionBLabel: 'Option B',
      optionBTitle: 'A page per service',
      rows: [
        {
          id: 'spm-01',
          aspect: 'Buyer journey',
          optionA: 'A short overview. The buyer fills in the rest.',
          optionB: 'A full answer for the exact service.',
        },
        {
          id: 'spm-02',
          aspect: 'Best fit',
          optionA: 'Few services, similar audience, no real overlap with competitors.',
          optionB: 'Multiple services, distinct audiences, competitive search.',
        },
        {
          id: 'spm-03',
          aspect: 'Search behaviour',
          optionA: 'Competes broadly. Hard to rank for specifics.',
          optionB: 'Each page can rank for the service it names.',
        },
        {
          id: 'spm-04',
          aspect: 'Conversion clarity',
          optionA: 'One CTA serves every service.',
          optionB: 'A CTA aligned to the named service.',
        },
        {
          id: 'spm-05',
          aspect: 'Long-term maintenance',
          optionA: 'Lighter to maintain. Harder to evolve.',
          optionB: 'More to maintain. Easier to evolve service by service.',
        },
      ],
    },
    whenToChoose: {
      header: {
        kicker: 'When To Choose Which',
        title: 'The right answer depends on the service mix and the buyer.',
        description: 'Both routes are honest. The question is what the visitor needs to see.',
      },
      columns: [
        {
          id: 'a',
          variant: 'a',
          label: 'Lean toward one services page',
          title: 'Few services, narrow audience, low competitive pressure.',
          signals: [
            'Two or three services with similar buyers.',
            'No real difference in how each service is bought.',
            'No need to compete on individual service search terms.',
            'Limited capacity to maintain multiple pages.',
          ],
        },
        {
          id: 'b',
          variant: 'b',
          label: 'Lean toward a page per service',
          title: 'Distinct services, distinct buyers, real search demand.',
          signals: [
            'Each service is bought differently.',
            'Different buyer questions per service.',
            'Real search volume for the specific service.',
            'Capacity to maintain pages without neglect.',
          ],
        },
      ],
      closing:
        'Most established service businesses underestimate the cost of hiding services on one page.',
    },
    handoffNext: {
      header: {
        kicker: 'Where The Next Step Belongs',
        title: 'The page handles the decision. The build belongs elsewhere.',
        description: 'Once the route is chosen, the work moves to the right service area.',
      },
      rows: [
        {
          id: 'sph-01',
          when: 'You decide each service deserves its own page.',
          route: 'Smart Website Systems owns the page architecture.',
        },
        {
          id: 'sph-02',
          when: 'You need each service page to rank locally.',
          route: 'Local SEO Authority handles the visibility layer.',
        },
        {
          id: 'sph-03',
          when: 'You need a CTA tuned to each service.',
          route: 'Conversion Layer under Revenue Growth.',
        },
        {
          id: 'sph-04',
          when: 'You need follow-up that depends on the service chosen.',
          route: 'CRM & Automation routes by service.',
        },
      ],
      rule: 'This page supports the decision only. The build runs through Smart Website Systems first.',
    },
    faq: {
      header: {
        kicker: 'Questions',
        title: 'Common questions about service page structure.',
        description: 'Short answers about scope, search and maintenance.',
      },
      items: [
        {
          id: 'spdec-faq-seo',
          question: 'Does a page per service really help search?',
          answer:
            'Usually, yes — when each page is a full answer to a real query. Thin pages do not help.',
        },
        {
          id: 'spdec-faq-many',
          question: 'Is there a maximum number of services?',
          answer: 'No. The limit is whether each page can be kept current and complete.',
        },
        {
          id: 'spdec-faq-overlap',
          question: 'What if the services overlap?',
          answer:
            'Overlap is fine. Each page should still answer the buyer question for that service clearly.',
        },
      ],
    },
  },
  cta: {
    heading: {
      kicker: 'Next Step',
      title: 'Decide whether each service needs its own page.',
      description:
        'Tell us what services you offer and how each one is bought. We will help identify whether one page is enough — and which system owns the build.',
    },
    actions: [{ label: PRIMARY_CTA_LABEL, href: contactHref, primary: true }],
    expectations: [
      { num: '01', text: 'We review your current services page.' },
      { num: '02', text: 'We identify hidden buyer intent.' },
      { num: '03', text: 'We recommend a page structure.' },
    ],
  },
};
