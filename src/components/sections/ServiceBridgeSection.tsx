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

/**
 * ServiceBridgeSection — controlled system handoff context.
 *
 * Shows how the current system connects to adjacent systems without
 * changing page ownership or becoming a service catalog.
 * Each bridge shows the from/to relationship, what transfers, and
 * what the owning page does not cover.
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
      <ol className='service-bridge__list rd-animate-stagger' aria-label={heading.title}>
        {bridges.map((bridge, index) => (
          <li key={bridge.id} className='service-bridge__item rd-animate-up'>
            <div className='service-bridge__index-col'>
              <span className='service-bridge__index' aria-hidden='true'>
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            <div className='service-bridge__content'>
              <div className='service-bridge__flow' aria-label={`${bridge.from} to ${bridge.to}`}>
                <span className='service-bridge__system service-bridge__system--from'>
                  {bridge.from}
                </span>
                <span className='service-bridge__arrow' aria-hidden='true'>
                  →
                </span>
                <span className='service-bridge__system service-bridge__system--to'>
                  {bridge.to}
                </span>
              </div>

              <dl className='service-bridge__fields'>
                <div className='service-bridge__field'>
                  <dt className='service-bridge__field-label'>Handoff</dt>
                  <dd className='service-bridge__field-value'>{bridge.handoff}</dd>
                </div>
                <div className='service-bridge__field service-bridge__field--boundary'>
                  <dt className='service-bridge__field-label'>Boundary</dt>
                  <dd className='service-bridge__field-value'>{bridge.boundary}</dd>
                </div>
              </dl>
            </div>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
