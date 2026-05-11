import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { IndustryCategoryRendererProps } from '@/domains/industries/types';
import { InternalLink } from '@/global/InternalLink';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

/**
 * LegalProfessionalServicesIndustryRenderer — page-owned composition.
 *
 * Category page. Signature visual: professional operating-shape selector
 * (consultation-led / deadline-led / proposal-led) routing into three
 * detail pages.
 * Sections (9): hero · category leaks · shape selector · breakpoints ·
 * operating models · handled state · detail routes · FAQ · CTA.
 */

type ShapeBlock = {
  id: string;
  tag: string;
  name: string;
  cue: string;
  href: string;
  label: string;
};

const SHAPES: ShapeBlock[] = [
  {
    id: 'consultation',
    tag: 'Consultation-led',
    name: 'Serious enquiries · trusted intake',
    cue: 'A consultation request lands once. Slow triage costs the matter.',
    href: '/industries/legal-professional-services/small-law-firms',
    label: 'Small Law Firms',
  },
  {
    id: 'deadline',
    tag: 'Deadline-led',
    name: 'Documents on a clock · filing windows',
    cue: 'A missing document stalls the return. The reminder needs an owner.',
    href: '/industries/legal-professional-services/accounting-firms',
    label: 'Accounting Firms',
  },
  {
    id: 'proposal',
    tag: 'Proposal-led',
    name: 'Discovery calls · proposals · follow-up',
    cue: 'The proposal lands well, then the thread goes silent.',
    href: '/industries/legal-professional-services/consultants',
    label: 'Consultants',
  },
];

export function LegalProfessionalServicesIndustryRenderer({ data }: IndustryCategoryRendererProps) {
  const primarySystem = data.systems[0];
  if (!primarySystem) {
    throw new Error(`[${data.slug}] Missing primary industry system.`);
  }

  const contactHref = buildIndustryContactHref({ system: primarySystem, slug: data.slug });
  const actions = [{ label: PRIMARY_CTA_LABEL, href: contactHref, variant: 'white' }] as const;

  const leaks = data.categoryLeaks.leaks ?? [];
  const breaks = data.breakpoints.items ?? [];
  const models = data.operatingModels.models ?? [];
  const handled = data.handledState.handled ?? [];
  const routes = data.detailRoutes.routeEntries ?? [];

  return (
    <main className='pro-cat-page'>
      <HeroFrame
        badge={data.hero.badge}
        title={data.hero.title}
        description={data.hero.description}
        actions={actions}
        chips={data.hero.list}
        chipDotVariant='neutral'
      />

      {leaks.length ? (
        <SectionFrame
          heading={{
            kicker: 'Where professional work slips',
            title: 'Professional work slips between the enquiry, the document, and the follow-up',
            description: 'Most firms see at least three of these.',
          }}
          tone='white'
        >
          <ul className='pro-leakboard pro-leakboard--four'>
            {leaks.map(l => (
              <li key={l.id} className={`pro-leakboard__tile pro-leakboard__tile--${l.state}`}>
                <div className='pro-leakboard__head'>
                  <p className='pro-leakboard__leak'>{l.leak}</p>
                  <span className={`pro-pill pro-pill--${l.state}`}>
                    <span className={`pro-dot pro-dot--${l.state}`} aria-hidden='true' />
                    {l.state}
                  </span>
                </div>
                <p className='pro-leakboard__observed'>{l.observed}</p>
              </li>
            ))}
          </ul>
        </SectionFrame>
      ) : null}

      <SectionFrame
        heading={{
          kicker: 'Choose the closest shape',
          title: 'Which professional-services shape looks like yours?',
          description:
            'Three operating shapes. Each one opens the detail page tuned to that working week.',
        }}
        tone='dark'
      >
        <div className='pro-cat-operating-shape-selector'>
          <ul className='pro-cat-operating-shape-selector__grid'>
            {SHAPES.map(shape => (
              <li key={shape.id} className='pro-cat-operating-shape-selector__shape'>
                <span className='pro-cat-operating-shape-selector__tag'>{shape.tag}</span>
                <p className='pro-cat-operating-shape-selector__name'>{shape.name}</p>
                <p className='pro-cat-operating-shape-selector__cue'>{shape.cue}</p>
                <p className='pro-cat-operating-shape-selector__route'>
                  <InternalLink href={shape.href}>{shape.label} detail</InternalLink>
                </p>
              </li>
            ))}
          </ul>
          <p className='pro-cat-operating-shape-selector__caption'>
            Consultation-led routes to small law firms. Deadline-led to accounting firms.
            Proposal-led to consultants.
          </p>
        </div>
      </SectionFrame>

      {breaks.length ? (
        <SectionFrame
          heading={{
            kicker: 'Moments that need an owner',
            title: 'Four places professional-service work usually leaks',
            description: 'These are the moments the system has to hold automatically.',
          }}
          tone='mist'
        >
          <ul className='pro-cat-breaks'>
            {breaks.map((item, i) => (
              <li key={i} className='pro-cat-breaks__chip'>
                {item}
              </li>
            ))}
          </ul>
        </SectionFrame>
      ) : null}

      {models.length ? (
        <SectionFrame
          heading={{
            kicker: 'How firms differ',
            title: 'Consultation-led, deadline-led, proposal-led',
            description:
              'Most firms tilt toward one of these shapes — the system follows that tilt.',
          }}
          tone='white'
        >
          <ul className='pro-cat-models'>
            {models.map(m => (
              <li key={m.id} className='pro-cat-models__card'>
                <span className='pro-cat-models__label'>{m.label}</span>
                <p className='pro-cat-models__title'>{m.label}</p>
                <ul className='pro-cat-models__traits'>
                  {m.traits.map((t, i) => (
                    <li key={`${m.id}-${i}`} className='pro-cat-models__trait'>
                      {t}
                    </li>
                  ))}
                </ul>
                {m.differentiator ? (
                  <p className='pro-cat-models__diff'>{m.differentiator}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </SectionFrame>
      ) : null}

      {handled.length ? (
        <SectionFrame
          heading={{
            kicker: 'When the layer holds',
            title: 'What changes when intake and follow-up are owned',
            description: 'Same partners. Same matters. Less manual chasing.',
          }}
          tone='mist'
        >
          <ul className='pro-cat-handled'>
            {handled.map(h => (
              <li key={h.id} className='pro-cat-handled__card'>
                <span className='pro-cat-handled__label'>{h.label}</span>
                <p className='pro-cat-handled__note'>{h.note}</p>
              </li>
            ))}
          </ul>
        </SectionFrame>
      ) : null}

      {routes.length ? (
        <SectionFrame
          heading={{
            kicker: 'Detail pages',
            title: 'Explore the three professional paths',
            description: 'Each route opens a page tuned to the way that practice moves.',
          }}
          tone='white'
        >
          <ul className='pro-cat-routes'>
            {routes.map(r => (
              <li key={r.detailHref} className='pro-cat-routes__route'>
                <InternalLink href={r.detailHref}>
                  <div className='pro-cat-routes__head'>
                    <p className='pro-cat-routes__label'>{r.label}</p>
                  </div>
                  <p className='pro-cat-routes__one'>{r.oneLine}</p>
                  <span className='pro-cat-routes__system'>{r.leadingSystem}</span>
                </InternalLink>
              </li>
            ))}
          </ul>
        </SectionFrame>
      ) : null}

      <FAQSection
        eyebrow={data.faq.header.kicker}
        title={data.faq.header.title}
        description={data.faq.header.description}
        items={data.faq.items}
        variant='split'
      />

      <DecisionPanel
        heading={data.cta.heading}
        actions={actions}
        expectations={data.cta.expectations}
        reassurance={data.cta.reassurance}
      />
    </main>
  );
}
