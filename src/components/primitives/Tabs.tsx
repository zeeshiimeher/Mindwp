'use client';

import { useState } from 'react';
import { Layers } from 'lucide-react';

import { SignalDot } from './SignalDot';

// -- Types --------------------------------------------------------------------

export type TabItem = {
  name: string;
  description: string;
  entries: string[];
  icon?: React.ReactNode;
};

export type TabsProps = {
  items: readonly TabItem[];
  barTitle: string;
  itemLabel?: string;
  countSuffix?: string;
  entriesLabel?: string;
  className?: string;
};

// -- Constants ----------------------------------------------------------------

const DEFAULT_ITEM_LABEL = 'Coverage Area';
const DEFAULT_COUNT_SUFFIX = 'areas in scope';
const DEFAULT_ENTRIES_LABEL = 'Included';

// -- Component ----------------------------------------------------------------

/**
 * Tabs — generic tabbed panel primitive.
 *
 * Rules:
 * - No page-specific classes.
 * - No sws-* or lsa-* imports.
 * - Uses mw-tabs* CSS from primitives.css.
 */
export function Tabs({
  items,
  barTitle,
  itemLabel = DEFAULT_ITEM_LABEL,
  countSuffix = DEFAULT_COUNT_SUFFIX,
  entriesLabel = DEFAULT_ENTRIES_LABEL,
  className,
}: TabsProps) {
  const [active, setActive] = useState(0);
  const item = items[active];
  const total = String(items.length).padStart(2, '0');
  const current = String(active + 1).padStart(2, '0');

  if (!item) return null;

  return (
    <div className={`mw-tabs${className ? ` ${className}` : ''}`}>
      <div className='mw-tabs__bar'>
        <span className='mw-tabs__bar-title'>{barTitle}</span>
        <span className='mw-tabs__bar-count' aria-hidden={true}>
          {current} / {total} {countSuffix}
        </span>
      </div>
      <div className='mw-tabs__layout'>
        <aside className='mw-tabs__sidebar' role='tablist' aria-label='Tabs'>
          {items.map((t, i) => (
            <button
              key={t.name}
              id={`mw-tabs-tab-${i}`}
              className={`mw-tabs__tab${i === active ? ' mw-tabs__tab--active' : ''}`}
              role='tab'
              aria-selected={i === active}
              aria-controls='mw-tabs-panel'
              onClick={() => setActive(i)}
            >
              <span className='mw-tabs__tab-icon' aria-hidden={true}>
                {t.icon ?? <Layers size={16} />}
              </span>
              <span className='mw-tabs__tab-body'>
                <span className='mw-tabs__tab-name'>{t.name}</span>
                <span className='mw-tabs__tab-desc'>{t.description}</span>
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
            {itemLabel} · {current}
          </p>
          <h3 className='mw-tabs__panel-name'>{item.name}</h3>
          <p className='mw-tabs__panel-purpose'>{item.description}</p>
          <p className='mw-tabs__col-label' aria-hidden={true}>
            {entriesLabel}
          </p>
          <ul className='mw-tabs__items'>
            {item.entries.map(entry => (
              <li key={entry} className='mw-tabs__item'>
                <SignalDot accent='green' />
                <span>{entry}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
