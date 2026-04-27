'use client';

import { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { ChevronDown, Eye, Inbox, Repeat, Route as RouteIcon, ShieldCheck } from 'lucide-react';

export type SystemLayerIconKey = 'visibility' | 'capture' | 'routing' | 'follow-up' | 'proof';

export interface SystemLayer {
  key: string;
  index: string;
  title: string;
  meta: string;
  iconKey: SystemLayerIconKey;
  bullets: readonly string[];
}

const ICON_BY_KEY: Record<SystemLayerIconKey, LucideIcon> = {
  visibility: Eye,
  capture: Inbox,
  routing: RouteIcon,
  'follow-up': Repeat,
  proof: ShieldCheck,
};

interface SystemLayerStackProps {
  eyebrow: string;
  title: string;
  description: string;
  layers: readonly SystemLayer[];
}

export function SystemLayerStack({ eyebrow, title, description, layers }: SystemLayerStackProps) {
  const [activeKey, setActiveKey] = useState<string>(layers[0]?.key ?? '');

  return (
    <section className='rd-section rd-section--soft'>
      <div className='rd-container rd-container--wide'>
        <div className='rd-section-inner'>
          <div className='rd-section-head'>
            <span className='rd-section-kicker'>
              <span className='rd-dot rd-dot--neutral' />
              {eyebrow}
            </span>
            <h2 className='rd-section-title'>{title}</h2>
            <p className='rd-section-description'>{description}</p>
          </div>

          <div className='rd-sws-stack rd-stagger'>
            {layers.map(layer => {
              const Icon = ICON_BY_KEY[layer.iconKey];
              const isOpen = layer.key === activeKey;
              const panelId = `rd-sws-stack-panel-${layer.key}`;
              const buttonId = `rd-sws-stack-btn-${layer.key}`;
              return (
                <div
                  key={layer.key}
                  className={
                    isOpen ? 'rd-sws-stack__card rd-sws-stack__card--open' : 'rd-sws-stack__card'
                  }
                >
                  <button
                    type='button'
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className='rd-sws-stack__head'
                    onClick={() => setActiveKey(isOpen ? '' : layer.key)}
                  >
                    <span className='rd-sws-stack__index'>{layer.index}</span>
                    <span className='rd-sws-stack__icon' aria-hidden='true'>
                      <Icon size={18} />
                    </span>
                    <span className='rd-sws-stack__title-group'>
                      <span className='rd-sws-stack__title'>{layer.title}</span>
                      <span className='rd-sws-stack__meta'>{layer.meta}</span>
                    </span>
                    <span className='rd-sws-stack__chevron' aria-hidden='true'>
                      <ChevronDown size={18} />
                    </span>
                  </button>
                  <div
                    id={panelId}
                    role='region'
                    aria-labelledby={buttonId}
                    className='rd-sws-stack__panel'
                    hidden={!isOpen}
                  >
                    <div className='rd-sws-stack__panel-inner'>
                      <ul className='rd-sws-stack__bullets'>
                        {layer.bullets.map(bullet => (
                          <li key={bullet} className='rd-sws-stack__bullet'>
                            <span className='rd-sws-stack__bullet-marker' aria-hidden='true' />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
