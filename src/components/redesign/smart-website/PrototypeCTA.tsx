import { ArrowRight } from 'lucide-react';

interface PrototypeCTAProps {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  panelTitle: string;
  panelItems: readonly string[];
}

export function PrototypeCTA({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  panelTitle,
  panelItems,
}: PrototypeCTAProps) {
  return (
    <section className='rd-section rd-section--final'>
      <div className='rd-container rd-container--wide'>
        <div className='rd-sws-final-inner'>
          <div className='rd-reveal-up'>
            <span className='rd-section-kicker'>
              <span className='rd-dot rd-dot--neutral rd-pulse' />
              {eyebrow}
            </span>
            <h2 className='rd-sws-final-title'>{title}</h2>
            <p className='rd-sws-final-description'>{description}</p>
            <div className='rd-sws-final-actions rd-stagger'>
              <a className='rd-btn rd-btn--primary-dark' href={primaryHref}>
                {primaryLabel}
                <ArrowRight aria-hidden='true' size={16} />
              </a>
              {secondaryLabel && secondaryHref ? (
                <a className='rd-btn rd-btn--ghost-dark' href={secondaryHref}>
                  {secondaryLabel}
                </a>
              ) : null}
            </div>
          </div>

          <aside className='rd-sws-final-aside rd-glow-in' aria-hidden='true'>
            <span className='rd-sws-final-aside-title'>{panelTitle}</span>
            <ul className='rd-sws-final-aside-list rd-stagger'>
              {panelItems.map(item => (
                <li key={item} className='rd-sws-final-aside-item'>
                  <span className='rd-sws-final-aside-marker' aria-hidden='true' />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
