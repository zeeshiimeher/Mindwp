import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { IndustryDetailRendererProps } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

/**
 * RealtorsIndustryRenderer — page-owned composition.
 *
 * Lead-led realtor page. Signature visual: lead → context → showing →
 * follow-up → referral path with a viewing-day sidecar.
 * Sections (8): hero · leaks · lead-to-showing path · before/after ·
 * starting points · scenario · FAQ · CTA.
 */

const LEAD_PATH = [
  {
    id: 'lead',
    title: 'Lead lands',
    hint: 'Buyer or seller enquiry from a portal, listing, or referral.',
  },
  {
    id: 'context',
    title: 'Context captured',
    hint: 'Property of interest, timeline, situation — held in one place.',
  },
  {
    id: 'showing',
    title: 'Showing or consultation',
    hint: 'Slot offered while the lead is still warm.',
  },
  {
    id: 'follow',
    title: 'Follow-up after viewing',
    hint: 'Same-day prompt — never left to memory.',
  },
  {
    id: 'referral',
    title: 'Referral or review',
    hint: 'Past clients stay on a quiet cadence — review prompt at the right moment.',
  },
];

const SHOWING_DAY = [
  { id: 'morning', when: 'Before 10am', text: 'Saturday open-house registrations queue up.' },
  { id: 'mid', when: 'Showing 1', text: 'Agent on site — calls go to voicemail.' },
  { id: 'late', when: 'Showing 2', text: 'New enquiry lands — reply runs without the agent.' },
  { id: 'evening', when: 'Sunday', text: 'Follow-up prompts already sent — replies waiting.' },
];

export function RealtorsIndustryRenderer({ data }: IndustryDetailRendererProps) {
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
    <main className='property-detail-page property-detail-page--realtors'>
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
            kicker: 'The day moves to the next showing',
            title: 'The lead waits while the day moves to the next showing',
            description: 'Most realtors will see at least two of these.',
          }}
          tone='white'
        >
          <ul className='property-leakboard'>
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
          kicker: 'Enquiry · showing · follow-up · referral',
          title: 'A lead with a next step before it goes cold',
          description:
            'Same agent, same listings. The enquiry, the viewing, and the follow-up sit on one path.',
        }}
        tone='mist'
      >
        <div className='realtor-lead-to-showing-path'>
          <ol className='realtor-lead-to-showing-path__rail'>
            {LEAD_PATH.map((step, i) => (
              <li key={step.id} className='realtor-lead-to-showing-path__step'>
                <span className='realtor-lead-to-showing-path__num'>Step {i + 1}</span>
                <p className='realtor-lead-to-showing-path__title'>{step.title}</p>
                <p className='realtor-lead-to-showing-path__hint'>{step.hint}</p>
              </li>
            ))}
          </ol>
          <aside
            className='realtor-lead-to-showing-path__sidecar'
            aria-label='A typical showing day'
          >
            <span className='realtor-lead-to-showing-path__sidecar-label'>
              A showing day · illustrative
            </span>
            <ul className='realtor-lead-to-showing-path__sidecar-list'>
              {SHOWING_DAY.map(d => (
                <li key={d.id} className='realtor-lead-to-showing-path__sidecar-item'>
                  <span className='realtor-lead-to-showing-path__sidecar-when'>{d.when}</span>
                  <span>{d.text}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </SectionFrame>

      {before || after ? (
        <SectionFrame
          heading={{
            kicker: 'Every serious lead needs a next step',
            title: 'The book of business, before and after',
            description: 'Same agent. A different layer behind the lead list.',
          }}
          tone='white'
        >
          <div className='property-state-grid'>
            {before ? (
              <div className='property-state-grid__col property-state-grid__col--before'>
                <span className='property-state-grid__label'>{before.label}</span>
                <ul className='property-state-grid__list'>
                  {before.items.map((item, i) => (
                    <li key={`b-${i}`} className='property-state-grid__item'>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {after ? (
              <div className='property-state-grid__col property-state-grid__col--after'>
                <span className='property-state-grid__label'>{after.label}</span>
                <ul className='property-state-grid__list'>
                  {after.items.map((item, i) => (
                    <li key={`a-${i}`} className='property-state-grid__item'>
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
          tone='mist'
        >
          <ul className='property-starts'>
            {startingPoints.map(sp => (
              <li key={sp.id} className='property-starts__option'>
                <span className='property-starts__signal'>If you</span>
                <p className='property-starts__when'>{sp.signalIfYou}</p>
                <p className='property-starts__fix'>{sp.fix}</p>
                <span className='property-starts__system'>{sp.leadingSystem}</span>
              </li>
            ))}
          </ul>
        </SectionFrame>
      ) : null}

      {scenario ? (
        <SectionFrame
          heading={{
            kicker: 'A realistic showing-day scenario',
            title: 'A weekend with the layer in place',
            description: 'Illustrative. No fabricated client. No promised result.',
          }}
          tone='white'
        >
          <div className='property-scenario'>
            <span className='property-scenario__label'>{scenario.label}</span>
            <p className='property-scenario__body'>{scenario.body}</p>
            {scenario.observedChange ? (
              <p className='property-scenario__change'>{scenario.observedChange}</p>
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
