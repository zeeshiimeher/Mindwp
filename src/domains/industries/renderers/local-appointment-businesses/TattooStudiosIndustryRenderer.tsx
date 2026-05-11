import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { IndustryDetailRendererProps } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

/**
 * TattooStudiosIndustryRenderer — page-owned composition.
 *
 * Studio-led page. Signature visual: consult-to-booking loop with a
 * sidecar listing prep, reschedule, aftercare, review timing.
 * Sections (8): hero · leaks · consult-to-booking loop · before/after ·
 * starting points · scenario · FAQ · CTA.
 */

const CONSULT_PATH = [
  {
    id: 'dm',
    num: '1 · DM',
    title: 'DM or form lands while the artist is mid-line',
    body: 'Acknowledged with the next artist opening, no manual chase needed.',
  },
  {
    id: 'idea',
    num: '2 · Idea',
    title: 'Idea, size, placement captured into one card',
    body: 'Reference images attached and routed to the right artist.',
  },
  {
    id: 'artist',
    num: '3 · Artist match',
    title: 'Artist availability and style matched to the request',
    body: 'Studio voice preserved. Artist still owns the conversation.',
  },
  {
    id: 'consult',
    num: '4 · Consult · slot',
    title: 'Consult booked, then the session slot held',
    body: 'Reminder rhythm queued from the moment the slot lands.',
  },
];

const STUDIO_SIDECAR = [
  { id: 'prep', when: 'Before', body: 'Prep note sent so the client arrives ready.' },
  { id: 'reschedule', when: '48h / 24h', body: 'Two-step reminder with reschedule link.' },
  { id: 'aftercare', when: 'After', body: 'Aftercare note sent the same evening.' },
  { id: 'review', when: '14 days', body: 'Heal-check + review prompt timed to the work.' },
];

export function TattooStudiosIndustryRenderer({ data }: IndustryDetailRendererProps) {
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
    <main className='appt-detail-page appt-detail-page--tattoo-studios'>
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
            kicker: 'The desk drowns while the artist works',
            title: 'DMs arrive while the artist is with a client',
            description: 'Most studios see at least two of these.',
          }}
          tone='white'
        >
          <ul className='appt-leakboard'>
            {leaks.map(l => (
              <li key={l.id} className={`appt-leakboard__tile appt-leakboard__tile--${l.state}`}>
                <div className='appt-leakboard__head'>
                  <p className='appt-leakboard__leak'>{l.leak}</p>
                  <span className={`appt-pill appt-pill--${l.state}`}>
                    <span className={`appt-dot appt-dot--${l.state}`} aria-hidden='true' />
                    {l.state}
                  </span>
                </div>
                <p className='appt-leakboard__observed'>{l.observed}</p>
              </li>
            ))}
          </ul>
        </SectionFrame>
      ) : null}

      <SectionFrame
        heading={{
          kicker: 'Idea · consult · artist · booking',
          title: 'A consult-to-booking loop the studio actually keeps up with',
          description:
            'Prep, reschedule, aftercare, and review timing sit beside the loop. Nothing is in someone’s memory.',
        }}
        tone='dark'
      >
        <div className='tattoo-studio-consult-loop'>
          <ol className='tattoo-studio-consult-loop__path'>
            {CONSULT_PATH.map(step => (
              <li key={step.id} className='tattoo-studio-consult-loop__step'>
                <span className='tattoo-studio-consult-loop__step-num'>{step.num}</span>
                <p className='tattoo-studio-consult-loop__step-title'>{step.title}</p>
                <p className='tattoo-studio-consult-loop__step-body'>{step.body}</p>
              </li>
            ))}
          </ol>
          <aside
            className='tattoo-studio-consult-loop__sidecar'
            aria-label='Prep, reschedule, aftercare, review'
          >
            <span className='tattoo-studio-consult-loop__sidecar-label'>
              Prep · reschedule · aftercare · review
            </span>
            <p className='tattoo-studio-consult-loop__sidecar-title'>
              The four messages every session needs
            </p>
            <ul className='tattoo-studio-consult-loop__sidecar-list'>
              {STUDIO_SIDECAR.map(item => (
                <li key={item.id} className='tattoo-studio-consult-loop__sidecar-item'>
                  <span className='tattoo-studio-consult-loop__sidecar-when'>{item.when}</span>
                  <span>{item.body}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </SectionFrame>

      {before || after ? (
        <SectionFrame
          heading={{
            kicker: 'What changes when the calendar holds',
            title: 'The studio, before and after',
            description: 'Same artists. A different layer behind the DMs.',
          }}
          tone='mist'
        >
          <div className='appt-state-grid'>
            {before ? (
              <div className='appt-state-grid__col appt-state-grid__col--before'>
                <span className='appt-state-grid__label'>{before.label}</span>
                <ul className='appt-state-grid__list'>
                  {before.items.map((item, i) => (
                    <li key={`b-${i}`} className='appt-state-grid__item'>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {after ? (
              <div className='appt-state-grid__col appt-state-grid__col--after'>
                <span className='appt-state-grid__label'>{after.label}</span>
                <ul className='appt-state-grid__list'>
                  {after.items.map((item, i) => (
                    <li key={`a-${i}`} className='appt-state-grid__item'>
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
          <ul className='appt-starts'>
            {startingPoints.map(sp => (
              <li key={sp.id} className='appt-starts__option'>
                <span className='appt-starts__signal'>If you</span>
                <p className='appt-starts__when'>{sp.signalIfYou}</p>
                <p className='appt-starts__fix'>{sp.fix}</p>
                <span className='appt-starts__system'>{sp.leadingSystem}</span>
              </li>
            ))}
          </ul>
        </SectionFrame>
      ) : null}

      {scenario ? (
        <SectionFrame
          heading={{
            kicker: 'A realistic studio-week scenario',
            title: 'A week with the layer in place',
            description: 'Illustrative. No fabricated client. No promised result.',
          }}
          tone='mist'
        >
          <div className='appt-scenario'>
            <span className='appt-scenario__label'>{scenario.label}</span>
            <p className='appt-scenario__body'>{scenario.body}</p>
            {scenario.observedChange ? (
              <p className='appt-scenario__change'>{scenario.observedChange}</p>
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
