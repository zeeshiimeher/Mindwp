import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { IndustryDetailRendererProps } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

/**
 * AccountingFirmsIndustryRenderer — page-owned composition.
 *
 * Deadline-led firm page. Signature visual: a 5-step deadline rail
 * paired with a 6-item document-status sidecar.
 * Sections (8): hero · leaks · deadline map + status · before/after ·
 * starting points · scenario · FAQ · CTA.
 */

const DEADLINE_RAIL = [
  {
    id: 'early',
    when: 'T - 21d',
    what: 'Early heads-up to the client. Documents requested with a clear list.',
    state: 'Heads-up',
    kind: 'early' as const,
  },
  {
    id: 'collect',
    when: 'T - 14d',
    what: 'Documents arriving. Status visible per item.',
    state: 'Collecting',
    kind: 'collect' as const,
  },
  {
    id: 'remind',
    when: 'T - 7d',
    what: 'Considered reminder for missing items. Routed to the right contact.',
    state: 'Reminding',
    kind: 'remind' as const,
  },
  {
    id: 'filing',
    when: 'T - 2d',
    what: 'Filing window. Anything still missing escalates to a partner.',
    state: 'Window',
    kind: 'filing' as const,
  },
  {
    id: 'filed',
    when: 'T  ✓',
    what: 'Filed. Client confirmation sent. Notes preserved on the matter.',
    state: 'Filed',
    kind: 'filed' as const,
  },
];

const DOC_LIST = [
  { id: 'd1', name: 'Prior-year return', tag: 'In', state: 'in' as const },
  { id: 'd2', name: 'W-2 / payroll summary', tag: 'In', state: 'in' as const },
  { id: 'd3', name: '1099 set', tag: 'Waiting', state: 'waiting' as const },
  { id: 'd4', name: 'Bank statements', tag: 'Waiting', state: 'waiting' as const },
  { id: 'd5', name: 'Mortgage interest', tag: 'Missing', state: 'missing' as const },
  { id: 'd6', name: 'Charitable receipts', tag: 'Missing', state: 'missing' as const },
];

export function AccountingFirmsIndustryRenderer({ data }: IndustryDetailRendererProps) {
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
    <main className='pro-detail-page pro-detail-page--accounting-firms'>
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
            kicker: 'Missing documents should not stall quietly',
            title: 'Three places accounting work usually leaks',
            description:
              'These are quiet leaks. Documents land late, reminders miss, and the filing window narrows.',
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
          kicker: 'Request · document · deadline · follow-up',
          title: 'A deadline with a visible next step',
          description:
            'Same returns, same deadlines. The request, the missing document, and the reminder sit on one map.',
        }}
        tone='white'
      >
        <div className='accounting-firm-deadline-map'>
          <div>
            <span className='accounting-firm-deadline-map__lane-label'>Filing rail</span>
            <ol className='accounting-firm-deadline-map__rail'>
              {DEADLINE_RAIL.map(s => (
                <li
                  key={s.id}
                  className={`accounting-firm-deadline-map__step accounting-firm-deadline-map__step--${s.kind}`}
                >
                  <span className='accounting-firm-deadline-map__when'>{s.when}</span>
                  <p className='accounting-firm-deadline-map__what'>{s.what}</p>
                  <span className='accounting-firm-deadline-map__state'>{s.state}</span>
                </li>
              ))}
            </ol>
          </div>
          <aside
            className='accounting-firm-document-status'
            aria-label='Document status — example client'
          >
            <span className='accounting-firm-document-status__label'>Document status</span>
            <p className='accounting-firm-document-status__client'>Example client · Q2 filing</p>
            <ul className='accounting-firm-document-status__list'>
              {DOC_LIST.map(d => (
                <li
                  key={d.id}
                  className={`accounting-firm-document-status__doc accounting-firm-document-status__doc--${d.state}`}
                >
                  <span className='accounting-firm-document-status__doc-name'>{d.name}</span>
                  <span className='accounting-firm-document-status__doc-tag'>{d.tag}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </SectionFrame>

      {before || after ? (
        <SectionFrame
          heading={{
            kicker: 'Tax season pressure needs visible next steps',
            title: 'The deadline week, before and after',
            description:
              'Same partners, same returns. The visibility behind the missing document is what changes.',
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
            kicker: 'A realistic deadline-week scenario',
            title: 'A filing week with the layer in place',
            description: 'Illustrative. No fabricated client. No tax-saving claim.',
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
