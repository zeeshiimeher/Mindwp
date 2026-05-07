'use client';

import { useState } from 'react';
import { Layers } from 'lucide-react';

import { SignalDot } from './SignalDot';

// -- Types --------------------------------------------------------------------

export type TabsBand = {
  name: string;
  purpose: string;
  includedItems: string[];
  icon?: React.ReactNode;
};

export type TabsProps = {
  bands: readonly TabsBand[];
  barTitle: string;
  areaLabel?: string;
  areasSuffix?: string;
  includedLabel?: string;
  className?: string;
};

// -- Constants ----------------------------------------------------------------

const DEFAULT_AREA_LABEL = 'Coverage Area';
const DEFAULT_AREAS_SUFFIX = 'areas in scope';
const DEFAULT_INCLUDED_LABEL = 'Included';

// -- Component ----------------------------------------------------------------

/**
 * Tabs — generic coverage/feature tabs primitive.
 *
 * Replaces SWSCoverageTabs. barTitle is now a required prop.
 * Band icons are passed as React nodes in each band item.
 *
 * Rules:
 * - No page-specific classes.
 * - No sws-* classes.
 * - Uses mw-tabs* CSS from primitives.css.
 */
export function Tabs({
  bands,
  barTitle,
  areaLabel = DEFAULT_AREA_LABEL,
  areasSuffix = DEFAULT_AREAS_SUFFIX,
  includedLabel = DEFAULT_INCLUDED_LABEL,
  className,
}: TabsProps) {
  const [active, setActive] = useState(0);
  const band = bands[active];
  const total = String(bands.length).padStart(2, '0');
  const current = String(active + 1).padStart(2, '0');

  if (!band) return null;

  return (
    <div className={`mw-tabs${className ? ` ${className}` : ''}`}>
      <div className='mw-tabs__bar'>
        <span className='mw-tabs__bar-title'>{barTitle}</span>
        <span className='mw-tabs__bar-count' aria-hidden={true}>
          {current} / {total} {areasSuffix}
        </span>
      </div>
      <div className='mw-tabs__layout'>
        <aside className='mw-tabs__sidebar' role='tablist' aria-label='Coverage areas'>
          {bands.map((b, i) => (
            <button
              key={b.name}
              id={`mw-tabs-tab-${i}`}
              className={`mw-tabs__tab${i === active ? ' mw-tabs__tab--active' : ''}`}
              role='tab'
              aria-selected={i === active}
              aria-controls='mw-tabs-panel'
              onClick={() => setActive(i)}
            >
              <span className='mw-tabs__tab-icon' aria-hidden={true}>
                {b.icon ?? <Layers size={16} />}
              </span>
              <span className='mw-tabs__tab-body'>
                <span className='mw-tabs__tab-name'>{b.name}</span>
                <span className='mw-tabs__tab-desc'>{b.purpose}</span>
              </span>
              <span className='mw-tabs__tab-num' aria-hidden={true}>
                {String(i + 1).padStart(2, '0')}
              </span>
            </button>
          ))}
        </aside>
        <div
          id='mw-tabs-panel'
          className='mw-tabs__panel'
          role='tabpanel'
          aria-labelledby={`mw-tabs-tab-${active}`}
          aria-live='polite'
        >
          <p className='mw-tabs__area-label'>
            {areaLabel} · {current}
          </p>
          <h3 className='mw-tabs__panel-name'>{band.name}</h3>
          <p className='mw-tabs__panel-purpose'>{band.purpose}</p>
          <p className='mw-tabs__col-label' aria-hidden={true}>
            {includedLabel}
          </p>
          <ul className='mw-tabs__items'>
            {band.includedItems.map(item => (
              <li key={item} className='mw-tabs__item'>
                <SignalDot accent='green' />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
