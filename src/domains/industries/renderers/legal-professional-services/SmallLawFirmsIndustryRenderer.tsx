import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { IndustryDetailRendererProps } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

/**
 * SmallLawFirmsIndustryRenderer — page-owned composition.
 *
 * Consultation-led law firm page. Signature visual: a 6-step
 * consultation intake path with a trust-before-anyone-signs sidecar.
 * Sections (8): hero · leaks · intake path · before/after · starting
 * points · scenario · FAQ · CTA.
 */

const INTAKE_PATH = [
  {
    id: 'request',
    title: 'Consultation request lands',
    hint: 'Form, call, or referral — often outside the partner’s available hours.',
  },
  {
    id: 'context',
    title: 'Context captured',
    hint: 'Matter type, situation, and timeline held cleanly in one place.',
  },
  {
    id: 'qualify',
    title: 'Qualification + handoff',
    hint: 'Routed to the right attorney without loose notes or memory.',
  },
  {
    id: 'consult',
    title: 'Consultation booked',
    hint: 'Real availability offered. Reminder before the appointment.',
  },
  {
    id: 'follow',
    title: 'Considered follow-up',
    hint: 'Documents and next steps requested with a clear sequence.',
  },
  {
    id: 'trust',
    title: 'Trust signal',
    hint: 'Reviews and referrals requested only where appropriate.',
  },
];

const TRUST_SIGNALS = [
  { id: 't1', text: 'Replies stay considered. No urgency tactics. No outcome promises.' },
  { id: 't2', text: 'Notes follow the matter — the next conversation continues, not restarts.' },
  { id: 't3', text: 'Sensitive matters never enter automated review prompts.' },
  { id: 't4', text: 'Attorney sign-off on anything that touches legal context.' },
  { id: 't5', text: 'Referrals tracked so a quiet thank-you reaches the right source.' },
];

export function SmallLawFirmsIndustryRenderer({ data }: IndustryDetailRendererProps) {
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
    <main className='pro-detail-page pro-detail-page--small-law-firms'>
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
            kicker: 'The consultation request should not sit in an inbox',
            title: 'Three places legal intake usually slips',
            description:
              'These are quiet leaks. The enquiry waits, the prospective client compares firms, and the matter lands somewhere else.',
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
          kicker: 'Intake · context · handoff · follow-up',
          title: 'A consultation request with a real route forward',
          description:
            'Same attorneys. The intake, qualification, and follow-up sit on one path — held by the system, not by memory.',
        }}
        tone='dark'
      >
        <div className='law-firm-intake-path'>
          <ol className='law-firm-intake-path__rail'>
            {INTAKE_PATH.map((step, i) => (
              <li key={step.id} className='law-firm-intake-path__step'>
                <span className='law-firm-intake-path__num'>{i + 1}</span>
                <div className='law-firm-intake-path__body'>
                  <p className='law-firm-intake-path__title'>{step.title}</p>
                  <p className='law-firm-intake-path__hint'>{step.hint}</p>
                </div>
              </li>
            ))}
          </ol>
          <aside
            className='law-firm-intake-path__trust'
            aria-label='Trust is built before anyone signs'
          >
            <span className='law-firm-intake-path__trust-label'>
              Trust is built before anyone signs
            </span>
            <p className='law-firm-intake-path__trust-title'>
              How the firm’s voice carries through the system.
            </p>
            <ul className='law-firm-intake-path__trust-list'>
              {TRUST_SIGNALS.map(t => (
                <li key={t.id} className='law-firm-intake-path__trust-item'>
                  <span className='law-firm-intake-path__trust-bullet'>·</span>
                  <span>{t.text}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </SectionFrame>

      {before || after ? (
        <SectionFrame
          heading={{
            kicker: 'Trust is built before anyone signs',
            title: 'The intake, before and after',
            description:
              'Same partners, same matters. The layer behind the enquiry is what changes.',
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
            kicker: 'A realistic consultation-request scenario',
            title: 'A week with the layer in place',
            description: 'Illustrative. No fabricated client. No legal outcome claim.',
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
