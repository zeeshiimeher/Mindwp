import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { IndustryDetailRendererProps } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

/**
 * PropertyManagersIndustryRenderer — page-owned composition.
 *
 * Maintenance-led page. Signature visual: 6-node maintenance request board
 * (tenant → triage → vendor → owner update → close-out → review).
 * Sections (8): hero · leaks · maintenance board · before/after ·
 * starting points · scenario · FAQ · CTA.
 */

type MaintNodeKind = 'tenant' | 'triage' | 'vendor' | 'owner' | 'close' | 'review';

const MAINT_FLOW: {
  id: string;
  kind: MaintNodeKind;
  step: string;
  title: string;
  detail: string;
  owner: string;
}[] = [
    {
      id: 'tenant',
      kind: 'tenant',
      step: 'Step 1',
      title: 'Tenant request lands',
      detail: 'Acknowledged with a ticket and an expected window.',
      owner: 'AI Lead Handling',
    },
    {
      id: 'triage',
      kind: 'triage',
      step: 'Step 2',
      title: 'Triage',
      detail: 'Routed by urgency, property, and trade type.',
      owner: 'CRM & Automation',
    },
    {
      id: 'vendor',
      kind: 'vendor',
      step: 'Step 3',
      title: 'Vendor / contractor',
      detail: 'Dispatch with appointment window — tenant notified.',
      owner: 'CRM & Automation',
    },
    {
      id: 'owner',
      kind: 'owner',
      step: 'Step 4',
      title: 'Owner update',
      detail: 'Status note runs without manual prep.',
      owner: 'CRM & Automation',
    },
    {
      id: 'close',
      kind: 'close',
      step: 'Step 5',
      title: 'Close-out',
      detail: 'Confirmation request — fix landed, tenant happy.',
      owner: 'CRM & Automation',
    },
    {
      id: 'review',
      kind: 'review',
      step: 'Step 6',
      title: 'Review or renewal',
      detail: 'Review prompt at the right moment — renewal queued in cadence.',
      owner: 'Reputation & Reviews',
    },
  ];

export function PropertyManagersIndustryRenderer({ data }: IndustryDetailRendererProps) {
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
    <main className='property-detail-page property-detail-page--property-managers'>
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
            kicker: 'Tenants · owners · trades · all at once',
            title: 'A tenant message should not become an owner problem later',
            description: 'Most managers will see at least two of these.',
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
          kicker: 'Request · vendor · owner update · close-out',
          title: 'Maintenance and communication need one visible route',
          description:
            'Same portfolio, same team. Tenant request, vendor work, and owner update sit on one board.',
        }}
        tone='dark'
      >
        <div className='property-manager-maintenance-board'>
          <span className='property-manager-maintenance-board__lane-label'>
            One maintenance request · six handoffs
          </span>
          <ol className='property-manager-maintenance-board__flow'>
            {MAINT_FLOW.map(node => (
              <li
                key={node.id}
                className={`property-manager-maintenance-board__node property-manager-maintenance-board__node--${node.kind}`}
              >
                <span className='property-manager-maintenance-board__step'>{node.step}</span>
                <p className='property-manager-maintenance-board__title'>{node.title}</p>
                <p className='property-manager-maintenance-board__detail'>{node.detail}</p>
                <span className='property-manager-maintenance-board__owner'>{node.owner}</span>
              </li>
            ))}
          </ol>
          <p className='property-manager-maintenance-board__caption'>
            Tenant, vendor, owner, and review sit on one route. The manager stops carrying status in
            their head.
          </p>
        </div>
      </SectionFrame>

      {before || after ? (
        <SectionFrame
          heading={{
            kicker: 'When the layer holds',
            title: 'The portfolio, before and after',
            description: 'Same manager. A different layer behind the inbox.',
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
            kicker: 'A realistic maintenance-request scenario',
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
