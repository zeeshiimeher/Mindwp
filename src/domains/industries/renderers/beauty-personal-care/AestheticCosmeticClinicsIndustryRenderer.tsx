import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { IndustryDetailRendererProps } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

/**
 * AestheticCosmeticClinicsIndustryRenderer — page-owned composition.
 *
 * Trust-led clinic page. Signature visual: a 6-step trust-led
 * consultation path with a proof / boundaries sidecar.
 * Sections (8): hero · leaks · trust path · before/after ·
 * starting points · scenario · FAQ · CTA.
 */

const TRUST_PATH = [
  {
    id: 'q',
    title: 'A careful question lands',
    hint: 'A long-form enquiry — often the start of a comparison shortlist.',
  },
  {
    id: 'context',
    title: 'Context held',
    hint: 'Goals, history, and concerns captured. No assumptions, no urgency tactics.',
  },
  {
    id: 'consult',
    title: 'Consult routed',
    hint: 'A real path forward — virtual or in-clinic — offered without pressure.',
  },
  {
    id: 'visit',
    title: 'Appointment',
    hint: 'The practitioner has the full record before the consult.',
  },
  {
    id: 'follow',
    title: 'Considered follow-up',
    hint: 'Aftercare prompt at the right moment. Sensitive cases handled by a person.',
  },
  {
    id: 'review',
    title: 'Trust signal',
    hint: 'Reviews requested only where appropriate. No proof claims fabricated.',
  },
];

const TRUST_BOUNDARIES = [
  { id: 'b1', text: 'No outcome promises in any reply or page.' },
  { id: 'b2', text: 'No before/after images presented as guaranteed results.' },
  { id: 'b3', text: 'No automated review request after a sensitive consult.' },
  { id: 'b4', text: 'Records stay structured so the next conversation continues, not restarts.' },
  { id: 'b5', text: 'Practitioner sign-off on anything that touches medical context.' },
];

export function AestheticCosmeticClinicsIndustryRenderer({ data }: IndustryDetailRendererProps) {
  const primarySystem = data.systems[0];
  if (!primarySystem) {
    throw new Error(`[${data.slug}] Missing primary industry system.`);
  }

  const contactHref = buildIndustryContactHref({ system: primarySystem, slug: data.slug });
  const actions = [{ label: PRIMARY_CTA_LABEL, href: contactHref, variant: 'white' }] as const;

  const leaks = data.industryPattern.leaks ?? [];
  const before = data.beforeAfter.before;
  const after = data.beforeAfter.after;
  const startingPoints = data.startingPoints.startingPoints ?? [];
  const scenario = data.scenario.scenario;

  return (
    <main className='beauty-detail-page beauty-detail-page--aesthetic-clinic'>
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
            kicker: 'Trust is decided before the consultation',
            title: 'Three places aesthetic-clinic enquiries usually slip',
            description:
              'Most leaks here are quiet. The enquiry sits, the comparison continues, and the consult lands somewhere else.',
          }}
          tone='white'
        >
          <ul className='beauty-leakboard'>
            {leaks.map(l => (
              <li
                key={l.id}
                className={`beauty-leakboard__tile beauty-leakboard__tile--${l.state}`}
              >
                <div className='beauty-leakboard__head'>
                  <p className='beauty-leakboard__leak'>{l.leak}</p>
                  <span className={`beauty-pill beauty-pill--${l.state}`}>
                    <span className={`beauty-dot beauty-dot--${l.state}`} aria-hidden='true' />
                    {l.state}
                  </span>
                </div>
                <p className='beauty-leakboard__observed'>{l.observed}</p>
              </li>
            ))}
          </ul>
        </SectionFrame>
      ) : null}

      <SectionFrame
        heading={{
          kicker: 'Question · context · consult · follow-up',
          title: 'Questions, consultation requests, and follow-up on a careful route',
          description:
            'Same practitioners. The system holds the route so trust is built between enquiry and consult.',
        }}
        tone='dark'
      >
        <div className='aesthetic-clinic-trust-path'>
          <ol className='aesthetic-clinic-trust-path__rail'>
            {TRUST_PATH.map((step, i) => (
              <li key={step.id} className='aesthetic-clinic-trust-path__step'>
                <span className='aesthetic-clinic-trust-path__num'>{i + 1}</span>
                <div className='aesthetic-clinic-trust-path__body'>
                  <p className='aesthetic-clinic-trust-path__title'>{step.title}</p>
                  <p className='aesthetic-clinic-trust-path__hint'>{step.hint}</p>
                </div>
              </li>
            ))}
          </ol>
          <aside
            className='aesthetic-clinic-trust-path__boundaries'
            aria-label='Proof and review boundaries'
          >
            <span className='aesthetic-clinic-trust-path__boundaries-label'>
              Proof &amp; review boundaries
            </span>
            <p className='aesthetic-clinic-trust-path__boundaries-title'>
              Reviews and proof must stay honest and controlled.
            </p>
            <ul className='aesthetic-clinic-trust-path__boundaries-list'>
              {TRUST_BOUNDARIES.map(b => (
                <li key={b.id} className='aesthetic-clinic-trust-path__boundary'>
                  <span className='aesthetic-clinic-trust-path__boundary-bullet'>·</span>
                  <span>{b.text}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </SectionFrame>

      {before || after ? (
        <SectionFrame
          heading={{
            kicker: 'Proof and reviews must stay honest and controlled',
            title: 'The clinic, before and after',
            description:
              'Same practitioners. The layer behind the enquiry is what changes — not the work itself.',
          }}
          tone='mist'
        >
          <div className='beauty-state-grid'>
            {before ? (
              <div className='beauty-state-grid__col beauty-state-grid__col--before'>
                <span className='beauty-state-grid__label'>{before.label}</span>
                <ul className='beauty-state-grid__list'>
                  {before.items.map((item, i) => (
                    <li key={`b-${i}`} className='beauty-state-grid__item'>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {after ? (
              <div className='beauty-state-grid__col beauty-state-grid__col--after'>
                <span className='beauty-state-grid__label'>{after.label}</span>
                <ul className='beauty-state-grid__list'>
                  {after.items.map((item, i) => (
                    <li key={`a-${i}`} className='beauty-state-grid__item'>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </SectionFrame>
      ) : null}

      {startingPoints.length ? (
        <SectionFrame
          heading={{
            kicker: 'Which system starts first',
            title: 'Three signals, three different first systems',
            description: 'The leak you actually have decides the first move.',
          }}
          tone='white'
        >
          <ul className='beauty-starts'>
            {startingPoints.map(sp => (
              <li key={sp.id} className='beauty-starts__option'>
                <span className='beauty-starts__signal'>If you</span>
                <p className='beauty-starts__when'>{sp.signalIfYou}</p>
                <p className='beauty-starts__fix'>{sp.fix}</p>
                <span className='beauty-starts__system'>{sp.leadingSystem}</span>
              </li>
            ))}
          </ul>
        </SectionFrame>
      ) : null}

      {scenario ? (
        <SectionFrame
          heading={{
            kicker: 'A realistic consultation enquiry scenario',
            title: 'A week with the layer in place',
            description:
              'Illustrative. No fabricated client. No medical or cosmetic outcome claim.',
          }}
          tone='mist'
        >
          <div className='beauty-scenario'>
            <span className='beauty-scenario__label'>{scenario.label}</span>
            <p className='beauty-scenario__body'>{scenario.body}</p>
            {scenario.observedChange ? (
              <p className='beauty-scenario__change'>{scenario.observedChange}</p>
            ) : null}
          </div>
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
