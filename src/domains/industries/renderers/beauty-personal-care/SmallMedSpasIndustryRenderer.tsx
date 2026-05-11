import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { IndustryDetailRendererProps } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

/**
 * SmallMedSpasIndustryRenderer — page-owned composition.
 *
 * Considered, consultation-led page. Signature visual: a 6-step
 * consultation handling board with care-note guidance underneath.
 * Sections (8): hero · leaks · consultation board · before/after ·
 * starting points · scenario · FAQ · CTA.
 */

const CONSULT_FLOW = [
  {
    id: 'enquiry',
    step: '1 · Enquiry',
    title: 'Question lands',
    detail: 'Form, call, or DM about a treatment or fit.',
  },
  {
    id: 'first-reply',
    step: '2 · First reply',
    title: 'Considered acknowledgement',
    detail: 'Specific, calm reply — not a generic auto-message.',
  },
  {
    id: 'context',
    step: '3 · Context',
    title: 'Qualification + notes',
    detail: 'Goals and history captured cleanly. No assumptions.',
  },
  {
    id: 'consult',
    step: '4 · Consult',
    title: 'Consultation booked',
    detail: 'Real availability offered. Reminder before the day.',
  },
  {
    id: 'visit',
    step: '5 · Visit',
    title: 'Treatment / appointment',
    detail: 'Practitioner has full context before they walk in.',
  },
  {
    id: 'after',
    step: '6 · After',
    title: 'Care check-in',
    detail: 'Aftercare prompt, then a quiet review request when appropriate.',
  },
];

const CARE_NOTES = [
  {
    id: 'tone',
    label: 'Tone',
    body: 'Replies stay considered. No urgency tactics. No outcome promises. The voice the clinic uses in person.',
  },
  {
    id: 'records',
    label: 'Records',
    body: 'Client history, prior treatments, and notes sit in one place — accessible to whichever team member follows up.',
  },
  {
    id: 'reviews',
    label: 'Reviews',
    body: 'Asked only after appropriate appointments. Never tied to a specific result. Never automated for sensitive cases.',
  },
];

export function SmallMedSpasIndustryRenderer({ data }: IndustryDetailRendererProps) {
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
    <main className='beauty-detail-page beauty-detail-page--med-spa'>
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
            kicker: 'Consultation requests need careful handling',
            title: 'Three places med-spa enquiries usually slip',
            description:
              'These are quieter leaks. They show up as long-form enquiries that go cold rather than calls dropped at the desk.',
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
          kicker: 'Enquiry · consult · appointment · follow-up',
          title: 'A clear route from enquiry through follow-up',
          description:
            'Trust is built through timing, clarity, and records — not through louder marketing.',
        }}
        tone='mist'
      >
        <div className='med-spa-consultation-board'>
          <span className='med-spa-consultation-board__lane-label'>
            Consultation handling · illustrative
          </span>
          <ol className='med-spa-consultation-board__flow'>
            {CONSULT_FLOW.map(node => (
              <li key={node.id} className='med-spa-consultation-board__node'>
                <span className='med-spa-consultation-board__step'>{node.step}</span>
                <p className='med-spa-consultation-board__title'>{node.title}</p>
                <p className='med-spa-consultation-board__detail'>{node.detail}</p>
              </li>
            ))}
          </ol>
          <ul className='med-spa-consultation-board__notes'>
            {CARE_NOTES.map(n => (
              <li key={n.id} className='med-spa-consultation-board__note'>
                <span className='med-spa-consultation-board__note-label'>{n.label}</span>
                <p className='med-spa-consultation-board__note-body'>{n.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </SectionFrame>

      {before || after ? (
        <SectionFrame
          heading={{
            kicker: 'Trust is built through timing, clarity, and records',
            title: 'The clinic, before and after',
            description: 'Same practitioners. The layer behind the enquiry is what changes.',
          }}
          tone='white'
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
          tone='mist'
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
            kicker: 'A realistic consultation scenario',
            title: 'A week with the layer in place',
            description: 'Illustrative. No fabricated client. No treatment outcome claim.',
          }}
          tone='white'
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
