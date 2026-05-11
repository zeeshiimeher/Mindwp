import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { IndustryDetailRendererProps } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

/**
 * SmallPrivateClinicsIndustryRenderer — page-owned composition.
 *
 * Considered-led private clinic page. Signature visual: an intake-to-
 * follow-up path with care cues that make the careful handling visible.
 * Sections (8): hero · leaks · intake path · trust cues · starting
 * points · scenario · FAQ · CTA.
 */

const INTAKE_STEPS = [
  { id: 'enquiry', num: 1, name: 'Enquiry', hint: 'Calm reply within minutes' },
  { id: 'context', num: 2, name: 'Context', hint: 'Intake form sized to the work' },
  { id: 'appointment', num: 3, name: 'Appointment', hint: 'Slot offered with practitioner' },
  { id: 'reminder', num: 4, name: 'Reminder', hint: 'Two-step before the consult' },
  { id: 'visit', num: 5, name: 'Visit', hint: 'Notes sit beside the next prompt' },
  { id: 'followup', num: 6, name: 'Follow-up', hint: 'Plan reminder or recall scheduled' },
];

const TRUST_CUES = [
  {
    id: 'voice',
    label: 'Tone',
    body: 'Replies are written in the clinic’s voice and reviewed before launch — no scripted bot feel.',
  },
  {
    id: 'records',
    label: 'Records',
    body: 'The operating board sits beside your clinical record system. It does not duplicate clinical data.',
  },
  {
    id: 'cadence',
    label: 'Cadence',
    body: 'Reminder rhythm tuned to your treatment mix. Patients aren’t over-messaged.',
  },
];

export function SmallPrivateClinicsIndustryRenderer({ data }: IndustryDetailRendererProps) {
  const primarySystem = data.systems[0];
  if (!primarySystem) {
    throw new Error(`[${data.slug}] Missing primary industry system.`);
  }

  const contactHref = buildIndustryContactHref({ system: primarySystem, slug: data.slug });
  const actions = [{ label: PRIMARY_CTA_LABEL, href: contactHref, variant: 'white' }] as const;

  const leaks = data.industryPattern.leaks ?? [];
  const startingPoints = data.startingPoints.startingPoints ?? [];
  const scenario = data.scenario.scenario;

  return (
    <main className='appt-detail-page appt-detail-page--small-private-clinics'>
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
            kicker: 'Considered enquiries judge the first reply',
            title: 'Consultation requests need a careful route',
            description: 'Most clinics see at least two of these.',
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
          kicker: 'Intake · appointment · reminder · follow-up',
          title: 'A considered enquiry, held end-to-end',
          description:
            'Each step is small. The clarity is what wins the booking and holds the treatment plan.',
        }}
        tone='mist'
      >
        <div className='private-clinic-intake-path'>
          <ol className='private-clinic-intake-path__rail'>
            {INTAKE_STEPS.map(step => (
              <li key={step.id} className='private-clinic-intake-path__step'>
                <span className='private-clinic-intake-path__num'>{step.num}</span>
                <p className='private-clinic-intake-path__name'>{step.name}</p>
                <p className='private-clinic-intake-path__hint'>{step.hint}</p>
              </li>
            ))}
          </ol>
        </div>
      </SectionFrame>

      <SectionFrame
        heading={{
          kicker: 'Trust is built through clear handling, not generic replies',
          title: 'How the layer stays careful',
          description:
            'Three things matter most for trust-led work: the voice, the records boundary, and the cadence.',
        }}
        tone='white'
      >
        <ul className='private-clinic-intake-path__cues'>
          {TRUST_CUES.map(cue => (
            <li key={cue.id} className='private-clinic-intake-path__cue'>
              <span className='private-clinic-intake-path__cue-label'>{cue.label}</span>
              <p className='private-clinic-intake-path__cue-body'>{cue.body}</p>
            </li>
          ))}
        </ul>
      </SectionFrame>

      {startingPoints.length ? (
        <SectionFrame
          heading={{
            kicker: 'Which system starts first',
            title: 'Three signals, three different first systems',
            description: 'The leak you actually have decides the first move.',
          }}
          tone='mist'
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
            kicker: 'A realistic clinic enquiry scenario',
            title: 'A week with the layer in place',
            description: 'Illustrative. No fabricated patient. No clinical outcome promise.',
          }}
          tone='white'
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
