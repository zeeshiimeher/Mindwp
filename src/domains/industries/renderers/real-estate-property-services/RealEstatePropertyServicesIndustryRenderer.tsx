import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { IndustryCategoryRendererProps } from '@/domains/industries/types';
import { InternalLink } from '@/global/InternalLink';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

/**
 * RealEstatePropertyServicesIndustryRenderer — page-owned composition.
 *
 * Category page. Signature visual: property operating-shape selector
 * (lead-led / maintenance-led / report-led / document-led) routing into
 * the four detail pages.
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
    id: 'lead',
    tag: 'Lead-led',
    name: 'Buyer / seller enquiries · long timelines',
    cue: 'Open houses, viewings, and follow-up after viewing decide the week.',
    href: '/industries/real-estate-property-services/realtors',
    label: 'Realtors',
  },
  {
    id: 'maintenance',
    tag: 'Maintenance-led',
    name: 'Tenants · owners · trades',
    cue: 'Tenant requests, owner updates, and vendor handoff sit in scattered channels.',
    href: '/industries/real-estate-property-services/property-managers',
    label: 'Property Managers',
  },
  {
    id: 'report',
    tag: 'Report-led',
    name: 'Bookings on the move · reports promised',
    cue: 'Inspector is on site. Bookings, report delivery, and follow-up need a clear route.',
    href: '/industries/real-estate-property-services/home-inspectors',
    label: 'Home Inspectors',
  },
  {
    id: 'document',
    tag: 'Document-led',
    name: 'Enquiries · documents · status updates',
    cue: 'A pre-approval becomes a real loan only when documents move on time.',
    href: '/industries/real-estate-property-services/mortgage-brokers',
    label: 'Mortgage Brokers',
  },
];

export function RealEstatePropertyServicesIndustryRenderer({
  data,
}: IndustryCategoryRendererProps) {
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
    <main className='property-cat-page'>
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
            kicker: 'Where property work slips',
            title:
              'Property work slips between the enquiry, the appointment, the document, and the update',
            description: 'Most operators see at least three of these.',
          }}
          tone='white'
        >
          <ul className='property-leakboard property-leakboard--four'>
            {leaks.map(l => (
              <li
                key={l.id}
                className={`property-leakboard__tile property-leakboard__tile--${l.state}`}
              >
                <div className='property-leakboard__head'>
                  <p className='property-leakboard__leak'>{l.leak}</p>
                  <span className={`property-pill property-pill--${l.state}`}>
                    <span className={`property-dot property-dot--${l.state}`} aria-hidden='true' />
                    {l.state}
                  </span>
                </div>
                <p className='property-leakboard__observed'>{l.observed}</p>
              </li>
            ))}
          </ul>
        </SectionFrame>
      ) : null}

      <SectionFrame
        heading={{
          kicker: 'Choose the closest path',
          title: 'Which property-service shape looks like yours?',
          description:
            'Four operating shapes. Each one opens the detail page tuned to that working week.',
        }}
        tone='dark'
      >
        <div className='property-cat-operating-shape-selector'>
          <ul className='property-cat-operating-shape-selector__grid'>
            {SHAPES.map(shape => (
              <li key={shape.id} className='property-cat-operating-shape-selector__shape'>
                <span className='property-cat-operating-shape-selector__tag'>{shape.tag}</span>
                <p className='property-cat-operating-shape-selector__name'>{shape.name}</p>
                <p className='property-cat-operating-shape-selector__cue'>{shape.cue}</p>
                <p className='property-cat-operating-shape-selector__route'>
                  <InternalLink href={shape.href}>{shape.label} detail</InternalLink>
                </p>
              </li>
            ))}
          </ul>
          <p className='property-cat-operating-shape-selector__caption'>
            Lead-led routes to realtors. Maintenance-led to property managers. Report-led to home
            inspectors. Document-led to mortgage brokers.
          </p>
        </div>
      </SectionFrame>

      {breaks.length ? (
        <SectionFrame
          heading={{
            kicker: 'Moments that need an owner',
            title: 'Four places property-service work usually leaks',
            description: 'These are the moments the system has to hold automatically.',
          }}
          tone='mist'
        >
          <ul className='property-cat-breaks'>
            {breaks.map((item, i) => (
              <li key={i} className='property-cat-breaks__chip'>
                {item}
              </li>
            ))}
          </ul>
        </SectionFrame>
      ) : null}

      {models.length ? (
        <SectionFrame
          heading={{
            kicker: 'How operators differ',
            title: 'Lead-led vs maintenance-led vs report-led vs document-led',
            description: 'Most operators tilt toward one of the two broader shapes below.',
          }}
          tone='white'
        >
          <ul className='property-cat-models'>
            {models.map(m => (
              <li key={m.id} className='property-cat-models__card'>
                <span className='property-cat-models__label'>{m.label}</span>
                <p className='property-cat-models__title'>{m.label}</p>
                <ul className='property-cat-models__traits'>
                  {m.traits.map((t, i) => (
                    <li key={`${m.id}-${i}`} className='property-cat-models__trait'>
                      {t}
                    </li>
                  ))}
                </ul>
                {m.differentiator ? (
                  <p className='property-cat-models__diff'>{m.differentiator}</p>
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
            title: 'What changes when handoffs and follow-up are owned',
            description: 'Same pipeline. Same hours. Less manual chasing.',
          }}
          tone='mist'
        >
          <ul className='property-cat-handled'>
            {handled.map(h => (
              <li key={h.id} className='property-cat-handled__card'>
                <span className='property-cat-handled__label'>{h.label}</span>
                <p className='property-cat-handled__note'>{h.note}</p>
              </li>
            ))}
          </ul>
        </SectionFrame>
      ) : null}

      {routes.length ? (
        <SectionFrame
          heading={{
            kicker: 'Detail pages',
            title: 'Explore the four property paths',
            description: 'Each route opens a page tuned to the way that property work moves.',
          }}
          tone='white'
        >
          <ul className='property-cat-routes'>
            {routes.map(r => (
              <li key={r.detailHref} className='property-cat-routes__route'>
                <InternalLink href={r.detailHref}>
                  <div className='property-cat-routes__head'>
                    <p className='property-cat-routes__label'>{r.label}</p>
                  </div>
                  <p className='property-cat-routes__one'>{r.oneLine}</p>
                  <span className='property-cat-routes__system'>{r.leadingSystem}</span>
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
