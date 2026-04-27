import type { LucideIcon } from 'lucide-react';

export interface DiagnosticItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface DiagnosticLeakageSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  items: ReadonlyArray<DiagnosticItem>;
}

export function DiagnosticLeakageSection({
  eyebrow,
  title,
  description,
  items,
}: DiagnosticLeakageSectionProps) {
  return (
    <section className='rd-section rd-section--diagnostic'>
      <div className='rd-container rd-container--wide'>
        <div className='rd-section-inner'>
          <div className='rd-section-head'>
            <span className='rd-section-kicker'>
              <span className='rd-dot rd-dot--risk' />
              {eyebrow}
            </span>
            <h2 className='rd-section-title'>{title}</h2>
            <p className='rd-section-description'>{description}</p>
          </div>

          <div className='rd-sws-diagnostic__grid rd-stagger'>
            {items.map((item, index) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className='rd-sws-diagnostic__card rd-hover-lift'>
                  <div className='rd-sws-diagnostic__card-head'>
                    <span className='rd-sws-diagnostic__icon' aria-hidden='true'>
                      <Icon size={20} />
                    </span>
                    <span className='rd-sws-diagnostic__index' aria-hidden='true'>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className='rd-sws-diagnostic__card-title'>{item.title}</h3>
                  <p className='rd-sws-diagnostic__card-body'>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
