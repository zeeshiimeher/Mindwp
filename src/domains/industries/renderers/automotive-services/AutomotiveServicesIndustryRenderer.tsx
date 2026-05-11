import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { IndustryCategoryRendererProps } from '@/domains/industries/types';
import { InternalLink } from '@/global/InternalLink';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

/**
 * AutomotiveServicesIndustryRenderer — page-owned composition.
 *
 * Category page. Signature visual: operating-shape selector that routes
 * to the four detail pages (counter-led / stage-led / appointment-led /
 * route-led).
 * Sections (9): hero · category leaks · shape selector · breakpoints ·
 * operating models · handled state · detail routes · FAQ · CTA.
 */

const SHAPE_TAG_BY_BRANCH: Record<string, string> = {
  'auto-repair': 'Counter-led',
  'body-shops': 'Stage-led',
  detailing: 'Appointment-led',
  mobile: 'Route-led',
};

export function AutomotiveServicesIndustryRenderer({ data }: IndustryCategoryRendererProps) {
  const primarySystem = data.systems[0];
  if (!primarySystem) {
    throw new Error(`[${data.slug}] Missing primary industry system.`);
  }

  const contactHref = buildIndustryContactHref({ system: primarySystem, slug: data.slug });
  const actions = [{ label: PRIMARY_CTA_LABEL, href: contactHref, variant: 'white' }] as const;

  const leaks = data.categoryLeaks.leaks ?? [];
  const breaks = data.breakpoints.items ?? [];
  const models = data.operatingModels.models ?? [];
  const branches = data.pathwayMap.branches ?? [];
  const handled = data.handledState.handled ?? [];
  const routes = data.detailRoutes.routeEntries ?? [];

  return (
    <main className='auto-cat-page'>
      <HeroFrame
        badge={data.hero.badge}
        title={data.hero.title}
        description={data.hero.description}
        actions={actions}
        chips={data.hero.list}
        chipDotVariant='neutral'
      />

      {leaks.length ? (
        <SectionFrame heading={data.categoryLeaks.header} tone='white'>
          <ul className='auto-leakboard auto-leakboard--four'>
            {leaks.map(l => (
              <li key={l.id} className={`auto-leakboard__tile auto-leakboard__tile--${l.state}`}>
                <div className='auto-leakboard__head'>
                  <p className='auto-leakboard__leak'>{l.leak}</p>
                  <span className={`auto-pill auto-pill--${l.state}`}>
                    <span className={`auto-dot auto-dot--${l.state}`} aria-hidden='true' />
                    {l.state}
                  </span>
                </div>
                <p className='auto-leakboard__observed'>{l.observed}</p>
              </li>
            ))}
          </ul>
        </SectionFrame>
      ) : null}

      {branches.length ? (
        <SectionFrame
          heading={{
            kicker: 'Choose the closest shape',
            title: 'Which automotive shape looks like yours?',
            description:
              'Counter-led, stage-led, appointment-led, route-led. Pick the one that matches the day you actually run.',
          }}
          tone='dark'
        >
          <div className='auto-cat-shape-selector'>
            <ul className='auto-cat-shape-selector__grid'>
              {branches.map(b => (
                <li key={b.id}>
                  <InternalLink href={b.detailHref} className='auto-cat-shape-selector__shape'>
                    <span className='auto-cat-shape-selector__tag'>
                      {SHAPE_TAG_BY_BRANCH[b.id] ?? b.leadingSystem}
                    </span>
                    <p className='auto-cat-shape-selector__name'>{b.segment}</p>
                    <p className='auto-cat-shape-selector__cue'>{b.recognition}</p>
                    <span className='auto-cat-shape-selector__route'>{b.detailLabel}</span>
                  </InternalLink>
                </li>
              ))}
            </ul>
            <p className='auto-cat-shape-selector__caption'>
              Each shape opens a page tuned to that operating reality — same six systems, different
              order, different first move.
            </p>
          </div>
        </SectionFrame>
      ) : null}

      {breaks.length ? (
        <SectionFrame heading={data.breakpoints.header} tone='mist'>
          <ul className='auto-cat-breaks'>
            {breaks.map((b, i) => (
              <li key={`brk-${i}`} className='auto-cat-breaks__chip'>
                <span className='auto-dot auto-dot--attention' aria-hidden='true' />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </SectionFrame>
      ) : null}

      {models.length ? (
        <SectionFrame heading={data.operatingModels.header} tone='white'>
          <ul className='auto-cat-models'>
            {models.map(m => (
              <li key={m.id} className='auto-cat-models__card'>
                <span className='auto-cat-models__label'>{m.label}</span>
                <h3 className='auto-cat-models__title'>{m.label}</h3>
                <ul className='auto-cat-models__traits'>
                  {m.traits.map((t, i) => (
                    <li key={`t-${i}`} className='auto-cat-models__trait'>
                      {t}
                    </li>
                  ))}
                </ul>
                <p className='auto-cat-models__diff'>{m.differentiator}</p>
              </li>
            ))}
          </ul>
        </SectionFrame>
      ) : null}

      {handled.length ? (
        <SectionFrame heading={data.handledState.header} tone='mist'>
          <ul className='auto-cat-handled'>
            {handled.map(h => (
              <li key={h.id} className='auto-cat-handled__card'>
                <p className='auto-cat-handled__label'>{h.label}</p>
                <p className='auto-cat-handled__note'>{h.note}</p>
              </li>
            ))}
          </ul>
        </SectionFrame>
      ) : null}

      {routes.length ? (
        <SectionFrame heading={data.detailRoutes.header} tone='white'>
          <ul className='auto-cat-routes'>
            {routes.map(r => (
              <li key={r.detailHref} className='auto-cat-routes__route'>
                <InternalLink href={r.detailHref} className='auto-cat-routes__link'>
                  <div className='auto-cat-routes__head'>
                    <p className='auto-cat-routes__label'>{r.label}</p>
                    <span className='auto-cat-routes__system'>{r.leadingSystem}</span>
                  </div>
                  <p className='auto-cat-routes__one'>{r.oneLine}</p>
                  <span className='auto-cat-routes__arrow' aria-hidden='true' />
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
