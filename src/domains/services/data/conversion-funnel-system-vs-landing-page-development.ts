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

type FunnelDecisionSections = {
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

const slug = 'conversion-funnel-system-vs-landing-page-development';
const system = 'revenue-growth';
const contactHref = buildServiceContactHref({ system, slug });

export const conversionFunnelSystemVsLandingPageDevelopmentPage: ServicePageData<FunnelDecisionSections> =
  {
    seo: buildServiceSeo({
      slug,
      title: 'Conversion Funnel System vs Landing Page Development',
      description:
        'A focused comparison for deciding between a one-off landing page and a connected conversion path.',
    }),
    slug,
    badge: 'Funnel Decision',
    category: 'Decision Support',
    systems: [system],
    topics: ['conversion-optimization', 'lead-capture', 'service-page-architecture'],
    hero: {
      badge: 'Funnel Decision',
      title: 'A Landing Page May Not Be Enough.',
      description:
        'A page can collect clicks and still fail to move the buyer forward. The honest decision is whether one focused page is enough, or whether a connected path is doing the real work.',
      list: ['Decision support', 'Page path', 'Next step'],
    },
    sections: {
      decisionStakes: {
        header: {
          kicker: 'What The Decision Controls',
          title: 'The choice is about what happens after the click.',
          description:
            'A landing page solves a narrow problem. A connected funnel solves a longer one. Knowing which problem the business actually has decides the route.',
        },
        stakes: [
          {
            id: 's-01',
            num: '01',
            point: 'Where the buyer lands.',
            hint: 'A single focused page or a wider site with structured service paths.',
          },
          {
            id: 's-02',
            num: '02',
            point: 'How the next step is handled.',
            hint: 'A form into an inbox, or a sequence with named ownership and follow-up.',
          },
          {
            id: 's-03',
            num: '03',
            point: 'How outcomes are measured.',
            hint: 'Clicks and submissions, or conversations and booked work.',
          },
        ],
      },
      comparison: {
        header: {
          kicker: 'Side By Side',
          title: 'A landing page and a connected path are not the same job.',
          description:
            'Each handles a different range of buyer behaviour. The trade-off is honest, not theatrical.',
        },
        optionALabel: 'Option A',
        optionATitle: 'Landing page development',
        optionBLabel: 'Option B',
        optionBTitle: 'Conversion funnel system',
        rows: [
          {
            id: 'm-01',
            aspect: 'Scope',
            optionA: 'One focused page with a single primary action.',
            optionB: 'A connected sequence across pages, forms and follow-up.',
          },
          {
            id: 'm-02',
            aspect: 'Best fit',
            optionA: 'Single offer, single audience, narrow campaign window.',
            optionB: 'Multiple services, longer decisions, repeated buyer journeys.',
          },
          {
            id: 'm-03',
            aspect: 'After the click',
            optionA: 'Form submission into an inbox; team takes over.',
            optionB: 'Named owner, visible state, structured follow-up.',
          },
          {
            id: 'm-04',
            aspect: 'Speed to launch',
            optionA: 'Fast. A focused page can ship in days.',
            optionB: 'Slower. A funnel touches more of the site and the team.',
          },
          {
            id: 'm-05',
            aspect: 'Ongoing role',
            optionA: 'Lives or dies with the campaign.',
            optionB: 'Becomes part of how the business runs.',
          },
        ],
      },
      whenToChoose: {
        header: {
          kicker: 'When To Choose Which',
          title: 'The right answer depends on the work behind the page.',
          description:
            'Both routes are honest. The question is which one matches what the team actually has to handle.',
        },
        columns: [
          {
            id: 'a',
            variant: 'a',
            label: 'Lean toward landing page',
            title: 'A focused offer that does not need a wider system around it.',
            signals: [
              'A single, clearly defined offer.',
              'Short campaign window with a defined audience.',
              'Team can handle every form submission directly.',
              'No need to repeat the path for other services.',
            ],
          },
          {
            id: 'b',
            variant: 'b',
            label: 'Lean toward funnel system',
            title: 'Several services and a longer buyer decision.',
            signals: [
              'Multiple services with different buyer paths.',
              'Buyer takes days or weeks to decide.',
              'Inboxes already overflow without ownership.',
              'The same path will be needed again and again.',
            ],
          },
        ],
        closing:
          'Most service businesses end up with both: a couple of focused pages inside a wider connected path.',
      },
      handoffNext: {
        header: {
          kicker: 'Where The Next Step Belongs',
          title: 'The page handles the decision. The next step belongs elsewhere.',
          description:
            'Once the route is chosen, the work moves to the right service area. This page does not own the build.',
        },
        rows: [
          {
            id: 'h-01',
            when: 'You need a focused page for one campaign.',
            route: 'Landing page development inside Smart Website Systems.',
          },
          {
            id: 'h-02',
            when: 'You need conversions handled across the whole site.',
            route: 'Conversion Layer under Revenue Growth.',
          },
          {
            id: 'h-03',
            when: 'You need ownership and follow-up after submission.',
            route: 'CRM & Automation handles the lifecycle.',
          },
          {
            id: 'h-04',
            when: 'You need both reach and conversion in the same plan.',
            route: 'Smart Website Systems plus Local SEO Authority together.',
          },
        ],
        rule: 'This page supports the decision. The implementation route is one of the systems above.',
      },
      faq: {
        header: {
          kicker: 'Questions',
          title: 'Common questions about funnel vs landing page.',
          description: 'Short answers about scope, speed and ownership.',
        },
        items: [
          {
            id: 'fdec-faq-fast',
            question: 'Is a landing page always faster?',
            answer:
              'Often, yes. A focused page can ship in days. A connected funnel touches more of the site and the team — so it is slower, on purpose.',
          },
          {
            id: 'fdec-faq-both',
            question: 'Can we do both?',
            answer:
              'Yes. Most service businesses end up with focused pages sitting inside a wider connected path.',
          },
          {
            id: 'fdec-faq-ads',
            question: 'Does this depend on whether we run ads?',
            answer:
              'Ads change the front of the path, not the decision behind it. A page can be ad-fed or organic; the funnel decision is the same.',
          },
        ],
      },
    },
    cta: {
      heading: {
        kicker: 'Next Step',
        title: 'Decide what the page actually has to handle.',
        description:
          'Tell us what the page is meant to do and what happens after someone responds. We will help identify whether one page is enough — and which system owns the build.',
      },
      actions: [{ label: PRIMARY_CTA_LABEL, href: contactHref, primary: true }],
      expectations: [
        { num: '01', text: 'We clarify the business decision.' },
        { num: '02', text: 'We identify whether a single page is enough.' },
        { num: '03', text: 'We route the build to the right system.' },
      ],
    },
  };
