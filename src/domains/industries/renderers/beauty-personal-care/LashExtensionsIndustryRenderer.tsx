import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { IndustryDetailRendererProps } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

/**
 * LashExtensionsIndustryRenderer — page-owned composition.
 *
 * DM-led lash studio page. Signature visual: a 6-step DM-to-appointment
 * path with a prep-question sidecar.
 * Sections (8): hero · leaks · DM-to-appointment path · before/after ·
 * starting points · scenario · FAQ · CTA.
 */

const DM_PATH = [
  {
    id: 'dm',
    title: 'DM lands',
    hint: 'Instagram, form, or text — usually outside salon hours.',
  },
  {
    id: 'answer',
    title: 'Question answered',
    hint: 'Service options and prep info sent without the artist looking up from the bed.',
  },
  {
    id: 'slot',
    title: 'Slot offered',
    hint: 'Real availability proposed from the booking board.',
  },
  {
    id: 'prep',
    title: 'Prep note shared',
    hint: 'Care guidance shared. No outcome promises.',
  },
  {
    id: 'visit',
    title: 'Appointment',
    hint: 'Reminder the day before — no-show drift quietly reduced.',
  },
  {
    id: 'refill',
    title: 'Refill reminder',
    hint: 'Maintenance window prompted at the right interval.',
  },
];

const PREP_QUESTIONS = [
  { id: 'q1', when: 'Most asked', text: '“How long does a full set last?”' },
  { id: 'q2', when: 'Most asked', text: '“Do I need a patch test?”' },
  { id: 'q3', when: 'Often', text: '“Can I bring photos as a reference?”' },
  { id: 'q4', when: 'Often', text: '“What should I do before my appointment?”' },
];

export function LashExtensionsIndustryRenderer({ data }: IndustryDetailRendererProps) {
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
    <main className='beauty-detail-page beauty-detail-page--lash'>
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
            kicker: 'DMs arrive while the bed is full',
            title: 'Three places lash bookings usually slip',
            description:
              'The artist is hands-on for hours. The DMs and questions stack up in the meantime.',
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
          kicker: 'Enquiry · prep · appointment · refill',
          title: 'A DM with a real next step before the bed turns over',
          description:
            'Same artist. The route from DM to confirmed appointment is held by the system.',
        }}
        tone='dark'
      >
        <div className='lash-studio-dm-booking-path'>
          <ol className='lash-studio-dm-booking-path__path'>
            {DM_PATH.map((step, i) => (
              <li key={step.id} className='lash-studio-dm-booking-path__step'>
                <span className='lash-studio-dm-booking-path__num'>Step {i + 1}</span>
                <p className='lash-studio-dm-booking-path__title'>{step.title}</p>
                <p className='lash-studio-dm-booking-path__hint'>{step.hint}</p>
              </li>
            ))}
          </ol>
          <aside
            className='lash-studio-dm-booking-path__sidecar'
            aria-label='Prep questions answered automatically'
          >
            <span className='lash-studio-dm-booking-path__sidecar-label'>
              Prep questions · answered automatically
            </span>
            <p className='lash-studio-dm-booking-path__sidecar-title'>
              The DM gets a real reply before the bed turns over.
            </p>
            <ul className='lash-studio-dm-booking-path__qlist'>
              {PREP_QUESTIONS.map(q => (
                <li key={q.id} className='lash-studio-dm-booking-path__q'>
                  <span className='lash-studio-dm-booking-path__q-when'>{q.when}</span>
                  <span>{q.text}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </SectionFrame>

      {before || after ? (
        <SectionFrame
          heading={{
            kicker: 'Maintenance windows should not disappear',
            title: 'The cycle, before and after',
            description:
              'Same artist, same regulars. The fill window and refill reminder no longer rely on memory.',
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
            kicker: 'A realistic DM-to-booking scenario',
            title: 'A week with the layer in place',
            description: 'Illustrative. No fabricated client. No outcome claim.',
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
