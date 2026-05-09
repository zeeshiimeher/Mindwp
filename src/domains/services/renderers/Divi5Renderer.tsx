import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import { buildServiceContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

// Divi5Renderer — uses shared .builder-* CSS with .divi-page accent override.

interface Props {
  data: ServicePageDataBySlug['divi5'];
  slug: string;
}

const ARIA_HERO_DOT = 'Divi 5 -- page hero';
const ARIA_FIT_DOT = 'Builder fit';
const ARIA_PATH_DOT = 'Delivery path';
const ARIA_PROOF_DOT = 'Operational proof';
const ARIA_BOUNDARY_DOT = 'Builder vs structure';
const ARIA_NEXT_DOT = 'Next step routing';

const FIT_LABEL_DOT = 'Fit';
const NOT_FIT_LABEL_DOT = 'Not a fit';
const SIGNAL_DOT = 'Signal';
const NOT_SIGNAL_DOT = 'Not signal';
const RULE_DOT = 'Rule';
const ROUTE_DOT = 'Route';

function requireHeadingTitle(t: string | undefined, s: string) {
  if (!t || !t.trim()) throw new Error(`[${s}] Missing heading title`);
  return t;
}

export function Divi5Renderer({ data, slug: _slug }: Props) {
  const { hero, sections, cta } = data;
  const { capabilityFit, deliveryPath, proofContext, boundaries, nextStep } = sections;
  const primarySystem = data.systems[0];
  if (!primarySystem) throw new Error('[divi5] Missing service system');
  const contactHref = buildServiceContactHref({ system: primarySystem, slug: data.slug });

  return (
    <div className='divi-page builder-page'>
      <HeroFrame
        className='divi-hero builder-hero'
        ariaLabel={ARIA_HERO_DOT}
        layout='center'
        badge={hero.badge}
        title={hero.title}
        description={hero.description}
        actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref, variant: 'white' }]}
        chips={hero.list}
        chipDotVariant='subtle'
      />

      <SectionFrame
        heading={capabilityFit.header}
        tone='white'
        className='builder-fit'
        ariaLabel={ARIA_FIT_DOT}
      >
        {(() => {
          requireHeadingTitle(capabilityFit.header.title, 'capabilityFit');
          return (
            <div className='builder-fit__panel'>
              <header className='builder-fit__head'>
                <span className='builder-fit__title'>{capabilityFit.label}</span>
              </header>
              <ul className='builder-fit__list'>
                {capabilityFit.rows.map(r => (
                  <li key={r.id} className={`builder-fit__row builder-fit__row--${r.variant}`}>
                    <span className={`builder-fit__badge builder-fit__badge--${r.variant}`}>
                      <span className='builder-fit__dot' aria-hidden='true' />
                      {r.variant === 'fit' ? FIT_LABEL_DOT : NOT_FIT_LABEL_DOT}
                    </span>
                    <span className='builder-fit__text'>
                      <span className='builder-fit__label'>{r.label}</span>
                      <span className='builder-fit__detail'>{r.detail}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className='builder-fit__closing'>{capabilityFit.closing}</p>
            </div>
          );
        })()}
      </SectionFrame>

      <SectionFrame
        heading={deliveryPath.header}
        tone='mist'
        className='builder-path'
        ariaLabel={ARIA_PATH_DOT}
      >
        {(() => {
          requireHeadingTitle(deliveryPath.header.title, 'deliveryPath');
          return (
            <div className='builder-path__wrap'>
              <ol className='builder-path__steps'>
                {deliveryPath.steps.map(s => (
                  <li key={s.id} className='builder-path__step'>
                    <span className='builder-path__num'>{s.num}</span>
                    <span className='builder-path__body'>
                      <span className='builder-path__title'>{s.title}</span>
                      <span className='builder-path__detail'>{s.detail}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <p className='builder-path__closing'>{deliveryPath.closing}</p>
            </div>
          );
        })()}
      </SectionFrame>

      <SectionFrame
        heading={proofContext.header}
        tone='white'
        className='builder-proof'
        ariaLabel={ARIA_PROOF_DOT}
      >
        {(() => {
          requireHeadingTitle(proofContext.header.title, 'proofContext');
          return (
            <div className='builder-proof__wrap'>
              <header className='builder-proof__head'>
                <span className='builder-proof__title'>{proofContext.label}</span>
              </header>
              <ul className='builder-proof__list'>
                {proofContext.checks.map(c => (
                  <li key={c.id} className='builder-proof__row'>
                    <span className='builder-proof__label'>{c.label}</span>
                    <span className='builder-proof__signal builder-proof__signal--good'>
                      <span className='builder-proof__pill'>{SIGNAL_DOT}</span>
                      {c.signal}
                    </span>
                    <span className='builder-proof__signal builder-proof__signal--bad'>
                      <span className='builder-proof__pill builder-proof__pill--bad'>
                        {NOT_SIGNAL_DOT}
                      </span>
                      {c.notSignal}
                    </span>
                  </li>
                ))}
              </ul>
              <p className='builder-proof__closing'>{proofContext.closing}</p>
            </div>
          );
        })()}
      </SectionFrame>

      <SectionFrame
        heading={boundaries.header}
        tone='gradient-dark'
        className='builder-boundary'
        ariaLabel={ARIA_BOUNDARY_DOT}
      >
        {(() => {
          requireHeadingTitle(boundaries.header.title, 'boundaries');
          return (
            <div className='builder-boundary__wrap'>
              <div className='builder-boundary__columns'>
                {boundaries.columns.map(col => (
                  <article
                    key={col.id}
                    className={`builder-boundary__col builder-boundary__col--${col.variant}`}
                  >
                    <header className='builder-boundary__head'>
                      <span className='builder-boundary__label'>{col.label}</span>
                      <h3 className='builder-boundary__title'>{col.title}</h3>
                    </header>
                    <ul className='builder-boundary__items'>
                      {col.items.map((it, i) => (
                        <li key={`${col.id}-${i}`}>
                          <span className='builder-boundary__bullet' aria-hidden='true' />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
              <p className='builder-boundary__rule'>
                <strong>{RULE_DOT}.</strong> {boundaries.rule}
              </p>
            </div>
          );
        })()}
      </SectionFrame>

      <SectionFrame
        heading={nextStep.header}
        tone='white'
        className='builder-next'
        ariaLabel={ARIA_NEXT_DOT}
      >
        {(() => {
          requireHeadingTitle(nextStep.header.title, 'nextStep');
          return (
            <div className='builder-next__panel'>
              <ul className='builder-next__list'>
                {nextStep.bullets.map((b, i) => (
                  <li key={`b-${i}`}>
                    <span className='builder-next__pill'>{ROUTE_DOT}</span>
                    {b}
                  </li>
                ))}
              </ul>
              <p className='builder-next__closing'>{nextStep.closing}</p>
            </div>
          );
        })()}
      </SectionFrame>

      <DecisionPanel
        className='divi-cta builder-cta'
        heading={cta.heading}
        actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref }]}
        expectations={cta.expectations}
        reassurance={cta.footer}
      />
    </div>
  );
}
