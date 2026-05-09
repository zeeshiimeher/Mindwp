import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import { buildServiceContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

interface Props {
  data: ServicePageDataBySlug['service-pages-vs-one-generic-services-page'];
  slug: string;
}

const ARIA_HERO_DOT = 'Service Pages Decision -- page hero';
const ARIA_STAKES_DOT = 'What the decision controls';
const ARIA_MATRIX_DOT = 'Side by side comparison';
const ARIA_LEANS_DOT = 'When to choose which';
const ARIA_HANDOFF_DOT = 'Where the next step belongs';
const ARIA_FAQ_DOT = 'Frequently asked questions';

const ASPECT_DOT = 'Aspect';

function requireHeadingTitle(t: string | undefined, s: string) {
  if (!t || !t.trim()) throw new Error(`[${s}] Missing heading title`);
  return t;
}

export function ServicePagesDecisionRenderer({ data, slug: _slug }: Props) {
  const { hero, sections, cta } = data;
  const { decisionStakes, comparison, whenToChoose, handoffNext, faq } = sections;
  const primarySystem = data.systems[0];
  if (!primarySystem) throw new Error('[service-pages-decision] Missing service system');
  const contactHref = buildServiceContactHref({ system: primarySystem, slug: data.slug });

  return (
    <div className='service-pages-decision-page decision-page'>
      <HeroFrame
        className='service-pages-decision-hero decision-hero'
        ariaLabel={ARIA_HERO_DOT}
        badge={hero.badge}
        title={hero.title}
        description={hero.description}
        actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref, variant: 'white' }]}
        chips={hero.list}
        chipDotVariant='subtle'
      />

      <SectionFrame
        heading={decisionStakes.header}
        tone='white'
        className='decision-stakes'
        ariaLabel={ARIA_STAKES_DOT}
      >
        {(() => {
          requireHeadingTitle(decisionStakes.header.title, 'decisionStakes');
          return (
            <div className='decision-stakes__grid'>
              {decisionStakes.stakes.map(s => (
                <article key={s.id} className='decision-stakes__card'>
                  <span className='decision-stakes__num'>{s.num}</span>
                  <p className='decision-stakes__point'>{s.point}</p>
                  <p className='decision-stakes__hint'>{s.hint}</p>
                </article>
              ))}
            </div>
          );
        })()}
      </SectionFrame>

      <SectionFrame
        heading={comparison.header}
        tone='mist'
        className='decision-matrix'
        ariaLabel={ARIA_MATRIX_DOT}
      >
        {(() => {
          requireHeadingTitle(comparison.header.title, 'comparison');
          return (
            <div className='decision-matrix__panel'>
              <header className='decision-matrix__head'>
                <span className='decision-matrix__head-cell'>{ASPECT_DOT}</span>
                <span className='decision-matrix__head-cell decision-matrix__head-cell--a'>
                  {comparison.optionALabel}
                  <span className='decision-matrix__head-title'>{comparison.optionATitle}</span>
                </span>
                <span className='decision-matrix__head-cell decision-matrix__head-cell--b'>
                  {comparison.optionBLabel}
                  <span className='decision-matrix__head-title'>{comparison.optionBTitle}</span>
                </span>
              </header>
              <ul className='decision-matrix__rows'>
                {comparison.rows.map(r => (
                  <li key={r.id} className='decision-matrix__row'>
                    <span className='decision-matrix__aspect'>{r.aspect}</span>
                    <span className='decision-matrix__cell decision-matrix__cell--a'>
                      {r.optionA}
                    </span>
                    <span className='decision-matrix__cell decision-matrix__cell--b'>
                      {r.optionB}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })()}
      </SectionFrame>

      <SectionFrame
        heading={whenToChoose.header}
        tone='white'
        className='decision-leans'
        ariaLabel={ARIA_LEANS_DOT}
      >
        {(() => {
          requireHeadingTitle(whenToChoose.header.title, 'whenToChoose');
          return (
            <div className='decision-leans__wrap'>
              <div className='decision-leans__columns'>
                {whenToChoose.columns.map(col => (
                  <article
                    key={col.id}
                    className={`decision-leans__col decision-leans__col--${col.variant}`}
                  >
                    <header className='decision-leans__head'>
                      <span className='decision-leans__label'>{col.label}</span>
                      <h3 className='decision-leans__title'>{col.title}</h3>
                    </header>
                    <ul className='decision-leans__items'>
                      {col.signals.map((s, i) => (
                        <li key={`${col.id}-${i}`}>
                          <span className='decision-leans__bullet' aria-hidden='true' />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
              <p className='decision-leans__closing'>{whenToChoose.closing}</p>
            </div>
          );
        })()}
      </SectionFrame>

      <SectionFrame
        heading={handoffNext.header}
        tone='gradient-dark'
        className='decision-handoff'
        ariaLabel={ARIA_HANDOFF_DOT}
      >
        {(() => {
          requireHeadingTitle(handoffNext.header.title, 'handoffNext');
          return (
            <div className='decision-handoff__wrap'>
              <ul className='decision-handoff__rows'>
                {handoffNext.rows.map(r => (
                  <li key={r.id} className='decision-handoff__row'>
                    <span className='decision-handoff__when'>{r.when}</span>
                    <span className='decision-handoff__route'>{r.route}</span>
                  </li>
                ))}
              </ul>
              <p className='decision-handoff__rule'>{handoffNext.rule}</p>
            </div>
          );
        })()}
      </SectionFrame>

      <FAQSection
        eyebrow={faq.header.kicker}
        title={faq.header.title}
        description={faq.header.description}
        items={faq.items}
        tone='white'
        variant='split'
        className='decision-faq'
        ariaLabel={ARIA_FAQ_DOT}
      />

      <DecisionPanel
        className='service-pages-decision-cta decision-cta'
        heading={cta.heading}
        actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref }]}
        expectations={cta.expectations}
        reassurance={cta.footer}
      />
    </div>
  );
}
