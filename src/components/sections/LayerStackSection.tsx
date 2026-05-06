import { resolveSectionIcon, type SectionIconKey } from './icons';
import { SectionShell } from './SectionShell';
import type { SectionDensity, SectionHeading } from './types';

/** Approved variant for LayerStackSection. */
export type LayerStackVariant = 'stack';

export interface LayerStackLayer {
  key: string;
  /** Position label (e.g. "01"). */
  index: string;
  iconKey?: SectionIconKey;
  title: string;
  /** Short meta line shown next to title (e.g. "always-on"). */
  meta?: string;
  /** Long-form summary shown in the layer card. */
  summary: string;
  /** Optional bullet list of evidence inside the layer card. */
  bullets?: readonly string[];
}

export interface LayerStackSectionProps {
  variant?: LayerStackVariant;
  density?: SectionDensity;
  heading: SectionHeading;
  layers: readonly LayerStackLayer[];
}

/**
 * LayerStackSection — always-expanded layer cards.
 *
 * Each layer is shown as its own card with index, icon, title, meta,
 * summary and bullets. No tabs, no accordion: every layer is visible
 * at once for scannability.
 */
export function LayerStackSection({
  variant = 'stack',
  density = 'default',
  heading,
  layers,
}: LayerStackSectionProps) {
  if (layers.length === 0) {
    throw new Error('[LayerStackSection] Invalid data');
  }

  for (const layer of layers) {
    if (
      layer.key.trim().length === 0 ||
      layer.index.trim().length === 0 ||
      layer.title.trim().length === 0 ||
      layer.summary.trim().length === 0
    ) {
      throw new Error('[LayerStackSection] Invalid data');
    }

    if (layer.meta !== undefined && layer.meta.trim().length === 0) {
      throw new Error('[LayerStackSection] Invalid data');
    }

    if (layer.bullets?.some(bullet => bullet.trim().length === 0)) {
      throw new Error('[LayerStackSection] Invalid data');
    }
  }

  return (
    <SectionShell
      tone='soft'
      density={density}
      heading={heading}
      sectionClassName={`layer-stack layer-stack--${variant}`}
    >
      <ol className='layer-stack__cards rd-animate-stagger' aria-label={heading.title}>
        {layers.map(layer => {
          const Icon = resolveSectionIcon(layer.iconKey);
          return (
            <li key={layer.key} className='layer-stack__card rd-animate-up'>
              <div className='layer-stack__card-content'>
                <header className='layer-stack__card-head'>
                  <span className='layer-stack__card-index' aria-hidden='true'>
                    {layer.index}
                  </span>
                  {Icon ? (
                    <span className='rd-icon-tile rd-icon-tile--sm' aria-hidden='true'>
                      <Icon size={16} />
                    </span>
                  ) : null}
                  <div className='layer-stack__card-text'>
                    <h3 className='layer-stack__card-title'>{layer.title}</h3>
                    {layer.meta ? (
                      <span className='layer-stack__card-meta'>{layer.meta}</span>
                    ) : null}
                  </div>
                </header>
                <p className='layer-stack__card-summary'>{layer.summary}</p>
                {layer.bullets && layer.bullets.length > 0 ? (
                  <ul className='layer-stack__card-bullets'>
                    {layer.bullets.map(bullet => (
                      <li key={bullet} className='layer-stack__card-bullet'>
                        <span className='rd-dot rd-dot--info' aria-hidden='true' />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </li>
          );
        })}
      </ol>
    </SectionShell>
  );
}
