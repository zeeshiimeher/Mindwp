import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { IndustryDetailRendererProps } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

/**
 * ConsultantsIndustryRenderer — page-owned composition.
 *
 * Proposal-led page. Signature visual: a 6-step discovery-to-proposal
 * path with a follow-up cadence sidecar.
 * Sections (8): hero · leaks · discovery path + follow-ups ·
 * before/after · starting points · scenario · FAQ · CTA.
 */

const DISCOVERY_PATH = [
  {
    id: 'enquiry',
    title: 'Enquiry lands',
    hint: 'Referral, form, or LinkedIn DM. Held in one place, not five.',
  },
  {
    id: 'discovery',
    title: 'Discovery call booked',
    hint: 'Real availability offered. Reminder sent. Notes captured.',
  },
  {
    id: 'proposal',
    title: 'Proposal sent',
    hint: 'Scope, price, and timeline written from the discovery notes.',
  },
  {
    id: 'follow',
    title: 'Considered follow-up',
    hint: 'A short sequence — not a chase. Specific to the proposal.',
  },
  {
    id: 'delivery',
    title: 'Delivery check-in',
    hint: 'Mid-engagement signal. Quiet adjustment before it becomes a problem.',
  },
  {
    id: 'renewal',
    title: 'Renewal · referral',
    hint: 'Wrap with a clear next step. Referral request only when fitting.',
  },
];

const FOLLOWUPS = [
  {
    id: 'f1',
    when: 'Day 1',
    text: 'Short note confirming the proposal landed and how to ask anything.',
  },
  { id: 'f2', when: 'Day 3', text: 'Specific clarifier referencing one part of the proposal.' },
  { id: 'f3', when: 'Day 7', text: 'Considered nudge with one concrete next step.' },
  { id: 'f4', when: 'Week 2', text: 'Final check-in — close the loop either way, no chase.' },
];

export function ConsultantsIndustryRenderer({ data }: IndustryDetailRendererProps) {
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
    <main className='pro-detail-page pro-detail-page--consultants'>
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
            kicker: 'Discovery calls are easy to book and easy to forget',
            title: 'Three places consulting work usually leaks',
            description:
              'These are quiet leaks. The discovery is good, the proposal lands well, and then the thread goes silent.',
          }}
          tone='white'
        >
          <ul className='pro-leakboard'>
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
          kicker: 'Enquiry · discovery · proposal · follow-up',
          title: 'Proposals need a visible next step',
          description:
            'Same advisor. The discovery, the proposal, and the follow-up sit on one path — held by the system, not by memory.',
        }}
        tone='white'
      >
        <div className='consultant-discovery-to-proposal-path'>
          <ol className='consultant-discovery-to-proposal-path__path'>
            {DISCOVERY_PATH.map((step, i) => (
              <li key={step.id} className='consultant-discovery-to-proposal-path__step'>
                <span className='consultant-discovery-to-proposal-path__num'>Step {i + 1}</span>
                <p className='consultant-discovery-to-proposal-path__title'>{step.title}</p>
                <p className='consultant-discovery-to-proposal-path__hint'>{step.hint}</p>
              </li>
            ))}
          </ol>
          <aside
            className='consultant-discovery-to-proposal-path__sidecar'
            aria-label='Follow-up cadence after a proposal'
          >
            <span className='consultant-discovery-to-proposal-path__sidecar-label'>
              Follow-up cadence
            </span>
            <p className='consultant-discovery-to-proposal-path__sidecar-title'>
              Considered, specific, and finite — not a chase.
            </p>
            <ul className='consultant-discovery-to-proposal-path__followups'>
              {FOLLOWUPS.map(f => (
                <li key={f.id} className='consultant-discovery-to-proposal-path__follow'>
                  <span className='consultant-discovery-to-proposal-path__follow-when'>
                    {f.when}
                  </span>
                  <span>{f.text}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </SectionFrame>

      {before || after ? (
        <SectionFrame
          heading={{
            kicker: 'Proposals need a visible next step',
            title: 'The proposal week, before and after',
            description: 'Same engagements. The visibility behind the silence is what changes.',
          }}
          tone='mist'
        >
          <div className='pro-state-grid'>
            {before ? (
              <div className='pro-state-grid__col pro-state-grid__col--before'>
                <span className='pro-state-grid__label'>{before.label}</span>
                <ul className='pro-state-grid__list'>
                  {before.items.map((item, i) => (
                    <li key={`b-${i}`} className='pro-state-grid__item'>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {after ? (
              <div className='pro-state-grid__col pro-state-grid__col--after'>
                <span className='pro-state-grid__label'>{after.label}</span>
                <ul className='pro-state-grid__list'>
                  {after.items.map((item, i) => (
                    <li key={`a-${i}`} className='pro-state-grid__item'>
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
          <ul className='pro-starts'>
            {startingPoints.map(sp => (
              <li key={sp.id} className='pro-starts__option'>
                <span className='pro-starts__signal'>If you</span>
                <p className='pro-starts__when'>{sp.signalIfYou}</p>
                <p className='pro-starts__fix'>{sp.fix}</p>
                <span className='pro-starts__system'>{sp.leadingSystem}</span>
              </li>
            ))}
          </ul>
        </SectionFrame>
      ) : null}

      {scenario ? (
        <SectionFrame
          heading={{
            kicker: 'A realistic proposal-follow-up scenario',
            title: 'A proposal week with the layer in place',
            description: 'Illustrative. No fabricated client. No revenue claim.',
          }}
          tone='mist'
        >
          <div className='pro-scenario'>
            <span className='pro-scenario__label'>{scenario.label}</span>
            <p className='pro-scenario__body'>{scenario.body}</p>
            {scenario.observedChange ? (
              <p className='pro-scenario__change'>{scenario.observedChange}</p>
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
