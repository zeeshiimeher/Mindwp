import { SectionShell } from './SectionShell';
import type { SectionDensity, SectionHeading, SectionTone } from './types';

export interface ServiceBridge {
  /** Stable key for list rendering. */
  id: string;
  /** The originating system or point in the current page's scope. */
  from: string;
  /** The adjacent system that takes ownership at the handoff point. */
  to: string;
  /** What the handoff is — specifically. What transfers, and how. */
  handoff: string;
  /** What the current page does not own on the other side of this bridge. */
  boundary: string;
}

export interface ServiceBridgeSectionProps {
  tone?: SectionTone;
  density?: SectionDensity;
  heading: SectionHeading;
  /** 2–4 system bridges. Owning system must remain dominant. */
  bridges: readonly ServiceBridge[];
}

const SOURCE_LABEL_DOT = 'Entry point';
const SOURCE_CAPTION_DOT = 'Captures the enquiry';
const SOURCE_OWNERSHIP_DOT = 'Owns the website structure, page clarity, and entry point.';
const CARD_META_DOT = 'Connected system';
const HANDOFF_LABEL_DOT = 'Handoff';
const BOUNDARY_LABEL_DOT = 'Boundary';
const BOARD_NOTE_DOT =
  'The website is the entry point. Connected systems decide what happens after.';

/**
 * ServiceBridgeSection — handoff map showing system ownership boundaries.
 *
 * Left: the owning source system as the stable entry point.
 * Right: adjacent systems that take ownership after the handoff.
 * Each bridge card shows what transfers and what the source does not own.
 *
 * Phase 1 component. No variants — single approved pattern.
 */
export function ServiceBridgeSection({
  tone = 'light',
  density = 'default',
  heading,
  bridges,
}: ServiceBridgeSectionProps) {
  if (heading.title.trim().length === 0 || heading.description.trim().length === 0) {
    throw new Error('[ServiceBridgeSection] Invalid data: heading required');
  }

  if (bridges.length < 2 || bridges.length > 4) {
    throw new Error('[ServiceBridgeSection] Invalid data: 2–4 bridges required');
  }

  for (const bridge of bridges) {
    if (
      bridge.id.trim().length === 0 ||
      bridge.from.trim().length === 0 ||
      bridge.to.trim().length === 0 ||
      bridge.handoff.trim().length === 0 ||
      bridge.boundary.trim().length === 0
    ) {
      throw new Error('[ServiceBridgeSection] Invalid data: bridge fields required');
    }
  }

  return (
    <SectionShell tone={tone} density={density} heading={heading} sectionClassName='service-bridge'>
      <div className='service-bridge__board'>
        {/* Source system — stable entry point */}
        <aside className='service-bridge__source'>
          <p className='service-bridge__source-label'>{SOURCE_LABEL_DOT}</p>
          <h3 className='service-bridge__source-name'>{bridges[0].from}</h3>
          <p className='service-bridge__source-caption'>{SOURCE_CAPTION_DOT}</p>
          <p className='service-bridge__source-ownership'>{SOURCE_OWNERSHIP_DOT}</p>
          {/* Connection diagram — fan-out from source to connected systems */}
          <div className='service-bridge__source-visual' aria-hidden='true'>
            <svg
              className='service-bridge__flow-diagram'
              viewBox='0 0 160 80'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle cx='16' cy='40' r='6' className='service-bridge__flow-node' />
              <line x1='22' y1='40' x2='138' y2='16' className='service-bridge__flow-line' />
              <line x1='22' y1='40' x2='138' y2='40' className='service-bridge__flow-line' />
              <line x1='22' y1='40' x2='138' y2='64' className='service-bridge__flow-line' />
              <circle cx='144' cy='16' r='4' className='service-bridge__flow-target' />
              <circle cx='144' cy='40' r='4' className='service-bridge__flow-target' />
              <circle cx='144' cy='64' r='4' className='service-bridge__flow-target' />
            </svg>
          </div>
        </aside>

        {/* Connected systems — stacked bridge cards */}
        <ul className='service-bridge__connections rd-animate-stagger'>
          {bridges.map(bridge => (
            <li key={bridge.id} className='service-bridge__card rd-animate-up'>
              <p className='service-bridge__card-meta'>{CARD_META_DOT}</p>
              <h4 className='service-bridge__card-name'>{bridge.to}</h4>
              <dl className='service-bridge__card-fields'>
                <div className='service-bridge__card-field'>
                  <dt className='service-bridge__card-field-label'>{HANDOFF_LABEL_DOT}</dt>
                  <dd className='service-bridge__card-field-value'>{bridge.handoff}</dd>
                </div>
                <div className='service-bridge__card-field service-bridge__card-field--boundary'>
                  <dt className='service-bridge__card-field-label'>{BOUNDARY_LABEL_DOT}</dt>
                  <dd className='service-bridge__card-field-value'>{bridge.boundary}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      </div>
      <p className='service-bridge__note'>{BOARD_NOTE_DOT}</p>
    </SectionShell>
  );
}
