'use client';

import { useState } from 'react';
import { Eye, Layers, Mail, PackageOpen, Shield } from 'lucide-react';

type Band = {
  name: string;
  purpose: string;
  includedItems: string[];
};

const ICON_MAP: Record<string, React.ReactNode> = {
  Structure: <Layers size={16} />,
  'Capture & Routing': <Mail size={16} />,
  Visibility: <Eye size={16} />,
  Protection: <Shield size={16} />,
  Handover: <PackageOpen size={16} />,
};

const BAR_TITLE_DOT = 'Coverage blueprint — Smart Website System';
const COVERAGE_AREA_PREFIX_DOT = 'Coverage Area';
const INCLUDED_LABEL_DOT = 'Included';
const AREAS_SUFFIX_DOT = 'areas in scope';

export default function SWSCoverageTabs({ bands }: { bands: Band[] }) {
  const [active, setActive] = useState(0);
  const band = bands[active];
  const total = String(bands.length).padStart(2, '0');
  const current = String(active + 1).padStart(2, '0');

  return (
    <div className='sws-ctabs'>
      <div className='sws-ctabs__bar'>
        <span className='sws-ctabs__bar-title'>{BAR_TITLE_DOT}</span>
        <span className='sws-ctabs__bar-count' aria-hidden={true}>
          {current} / {total} {AREAS_SUFFIX_DOT}
        </span>
      </div>
      <div className='sws-ctabs__layout'>
        <aside className='sws-ctabs__sidebar' role='tablist' aria-label='Coverage areas'>
          {bands.map((b, i) => (
            <button
              key={b.name}
              id={`sws-ctabs-tab-${i}`}
              className={`sws-ctabs__tab${i === active ? ' sws-ctabs__tab--active' : ''}`}
              role='tab'
              aria-selected={i === active}
              aria-controls='sws-ctabs-panel'
              onClick={() => setActive(i)}
            >
              <span className='sws-ctabs__tab-icon' aria-hidden={true}>
                {ICON_MAP[b.name] ?? <Layers size={16} />}
              </span>
              <span className='sws-ctabs__tab-body'>
                <span className='sws-ctabs__tab-name'>{b.name}</span>
                <span className='sws-ctabs__tab-desc'>{b.purpose}</span>
              </span>
              <span className='sws-ctabs__tab-num' aria-hidden={true}>
                {String(i + 1).padStart(2, '0')}
              </span>
            </button>
          ))}
        </aside>
        <div
          id='sws-ctabs-panel'
          className='sws-ctabs__panel'
          role='tabpanel'
          aria-labelledby={`sws-ctabs-tab-${active}`}
          aria-live='polite'
        >
          <p className='sws-ctabs__area-label'>
            {COVERAGE_AREA_PREFIX_DOT} · {current}
          </p>
          <h3 className='sws-ctabs__panel-name'>{band.name}</h3>
          <p className='sws-ctabs__panel-purpose'>{band.purpose}</p>
          <p className='sws-ctabs__col-label' aria-hidden={true}>
            {INCLUDED_LABEL_DOT}
          </p>
          <ul className='sws-ctabs__items'>
            {band.includedItems.map(item => (
              <li key={item} className='sws-ctabs__item'>
                <span className='sws-dot sws-dot--green' aria-hidden={true} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
