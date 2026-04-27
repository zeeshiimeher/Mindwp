import { Check, Minus } from 'lucide-react';

interface BeforeAfterSystemPanelProps {
  eyebrow: string;
  title: string;
  description: string;
  beforeLabel: string;
  beforeTitle: string;
  beforeItems: readonly string[];
  afterLabel: string;
  afterTitle: string;
  afterItems: readonly string[];
}

export function BeforeAfterSystemPanel({
  eyebrow,
  title,
  description,
  beforeLabel,
  beforeTitle,
  beforeItems,
  afterLabel,
  afterTitle,
  afterItems,
}: BeforeAfterSystemPanelProps) {
  return (
    <section className='rd-section rd-section--blue'>
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

          <div className='rd-sws-ba'>
            <article className='rd-sws-ba__panel rd-sws-ba__panel--before rd-reveal-up'>
              <div className='rd-sws-ba__head'>
                <span className='rd-sws-ba__label'>{beforeLabel}</span>
              </div>
              <h3 className='rd-sws-ba__title'>{beforeTitle}</h3>
              <ul className='rd-sws-ba__list rd-stagger'>
                {beforeItems.map(item => (
                  <li key={item} className='rd-sws-ba__item rd-sws-ba__item--risk'>
                    <span className='rd-sws-ba__item-icon' aria-hidden='true'>
                      <Minus size={14} strokeWidth={3} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <div className='rd-sws-ba__bridge rd-line-reveal' aria-hidden='true'>
              <svg viewBox='0 0 56 56' fill='none'>
                <defs>
                  <linearGradient id='rd-sws-bridge' x1='0' y1='28' x2='56' y2='28'>
                    <stop offset='0%' stopColor='rgba(141,216,232,0)' />
                    <stop offset='50%' stopColor='#8dd8e8' />
                    <stop offset='100%' stopColor='rgba(141,216,232,0)' />
                  </linearGradient>
                </defs>
                <line x1='4' y1='28' x2='52' y2='28' stroke='url(#rd-sws-bridge)' strokeWidth='2' />
                <polyline
                  points='42,18 52,28 42,38'
                  fill='none'
                  stroke='#8dd8e8'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>

            <article className='rd-sws-ba__panel rd-sws-ba__panel--after rd-reveal-up'>
              <div className='rd-sws-ba__head'>
                <span className='rd-sws-ba__label'>{afterLabel}</span>
              </div>
              <h3 className='rd-sws-ba__title'>{afterTitle}</h3>
              <ul className='rd-sws-ba__list rd-stagger'>
                {afterItems.map(item => (
                  <li key={item} className='rd-sws-ba__item rd-sws-ba__item--good'>
                    <span className='rd-sws-ba__item-icon' aria-hidden='true'>
                      <Check size={14} strokeWidth={3} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
