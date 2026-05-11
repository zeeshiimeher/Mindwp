import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { IndustryDetailRendererProps } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

/**
 * MortgageBrokersIndustryRenderer — page-owned composition.
 *
 * Document-led page. Signature visual: enquiry → context → document request →
 * status update → follow-up → next step path with a document checklist
 * sidecar. No approval, rate, or outcome promises.
 * Sections (8): hero · leaks · document/status path · before/after ·
 * starting points · scenario · FAQ · CTA.
 */

type DocState = 'in' | 'waiting' | 'missing';

const DOC_PATH: { id: string; title: string; hint: string; state: DocState; tag: string }[] = [
  {
    id: 'enquiry',
    title: 'Enquiry lands',
    hint: 'Pre-approval enquiry from a portal, agent referral, or open house.',
    state: 'in',
    tag: 'Captured',
  },
  {
    id: 'context',
    title: 'Context captured',
    hint: 'Situation, timeline, and goal — held without re-asking.',
    state: 'in',
    tag: 'Captured',
  },
  {
    id: 'request',
    title: 'Document request sent',
    hint: 'Checklist with a clear path — not a wall of email.',
    state: 'waiting',
    tag: 'Awaiting',
  },
  {
    id: 'status',
    title: 'Status update',
    hint: 'Lender or stage change pushed to the client without manual chasing.',
    state: 'waiting',
    tag: 'Awaiting',
  },
  {
    id: 'follow',
    title: 'Follow-up on stalled docs',
    hint: 'Reminder cadence runs until missing items arrive.',
    state: 'missing',
    tag: 'Stalled',
  },
  {
    id: 'next',
    title: 'Next step',
    hint: 'Submission, conditional, or settlement handoff — visible to the client.',
    state: 'in',
    tag: 'On track',
  },
];

const DOC_CHECKLIST: { id: string; name: string; state: DocState; tag: string }[] = [
  { id: 'id', name: 'Identification', state: 'in', tag: 'In' },
  { id: 'income', name: 'Recent payslips', state: 'waiting', tag: 'Awaiting' },
  { id: 'bank', name: 'Bank statements (3 months)', state: 'in', tag: 'In' },
  { id: 'tax', name: 'Tax assessment', state: 'missing', tag: 'Missing' },
  { id: 'rates', name: 'Existing loan statement', state: 'waiting', tag: 'Awaiting' },
  { id: 'cost', name: 'Living-cost summary', state: 'in', tag: 'In' },
];

export function MortgageBrokersIndustryRenderer({ data }: IndustryDetailRendererProps) {
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
    <main className='property-detail-page property-detail-page--mortgage-brokers'>
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
            kicker: 'A document week, on the desk',
            title: 'A mortgage enquiry can go cold before the documents arrive',
            description: 'Most brokers will see at least two of these.',
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
          kicker: 'Enquiry · documents · status · follow-up',
          title: 'Missing documents should not stall quietly',
          description:
            'Same broker, same lenders. Document state and client status sit on one path.',
        }}
        tone='dark'
      >
        <div className='mortgage-broker-document-status-path'>
          <ol className='mortgage-broker-document-status-path__rail'>
            {DOC_PATH.map((step, i) => (
              <li key={step.id} className='mortgage-broker-document-status-path__step'>
                <span className='mortgage-broker-document-status-path__num'>{i + 1}</span>
                <div className='mortgage-broker-document-status-path__body'>
                  <p className='mortgage-broker-document-status-path__title'>{step.title}</p>
                  <p className='mortgage-broker-document-status-path__hint'>{step.hint}</p>
                </div>
                <span
                  className={`mortgage-broker-document-status-path__state mortgage-broker-document-status-path__state--${step.state}`}
                >
                  {step.tag}
                </span>
              </li>
            ))}
          </ol>
          <aside
            className='mortgage-broker-document-status-path__sidecar'
            aria-label='Document checklist · illustrative'
          >
            <span className='mortgage-broker-document-status-path__sidecar-label'>
              Document checklist · illustrative
            </span>
            <p className='mortgage-broker-document-status-path__sidecar-title'>
              The state of the file at a glance — not buried in email.
            </p>
            <ul className='mortgage-broker-document-status-path__doclist'>
              {DOC_CHECKLIST.map(d => (
                <li key={d.id} className='mortgage-broker-document-status-path__doc'>
                  <span className='mortgage-broker-document-status-path__doc-name'>{d.name}</span>
                  <span
                    className={`mortgage-broker-document-status-path__doc-tag mortgage-broker-document-status-path__doc-tag--${d.state}`}
                  >
                    {d.tag}
                  </span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </SectionFrame>

      {before || after ? (
        <SectionFrame
          heading={{
            kicker: 'When the layer holds',
            title: 'The pipeline, before and after',
            description: 'Same broker. A different layer behind the application.',
          }}
          tone='mist'
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
          tone='white'
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
            kicker: 'A realistic document-chase scenario',
            title: 'A week with the layer in place',
            description: 'Illustrative. No fabricated client. No promised result.',
          }}
          tone='mist'
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
