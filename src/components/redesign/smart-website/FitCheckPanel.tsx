export interface FitItem {
  title: string;
  description: string;
}

interface FitCheckPanelProps {
  eyebrow: string;
  title: string;
  description: string;
  goodLabel: string;
  goodTitle: string;
  goodItems: readonly FitItem[];
  notLabel: string;
  notTitle: string;
  notItems: readonly FitItem[];
}

export function FitCheckPanel({
  eyebrow,
  title,
  description,
  goodLabel,
  goodTitle,
  goodItems,
  notLabel,
  notTitle,
  notItems,
}: FitCheckPanelProps) {
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

          <div className='rd-sws-fit'>
            <article className='rd-sws-fit__col rd-sws-fit__col--good rd-reveal-up'>
              <div className='rd-sws-fit__col-head'>
                <span className='rd-dot rd-dot--good' />
                {goodLabel}
              </div>
              <h3 className='rd-sws-fit__col-title'>{goodTitle}</h3>
              <ul className='rd-sws-fit__list rd-stagger'>
                {goodItems.map(item => (
                  <li key={item.title} className='rd-sws-fit__item'>
                    <span className='rd-dot rd-dot--good' />
                    <div>
                      <div className='rd-sws-fit__item-title'>{item.title}</div>
                      <div className='rd-sws-fit__item-body'>{item.description}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </article>

            <article className='rd-sws-fit__col rd-sws-fit__col--not rd-reveal-up'>
              <div className='rd-sws-fit__col-head'>
                <span className='rd-dot rd-dot--risk' />
                {notLabel}
              </div>
              <h3 className='rd-sws-fit__col-title'>{notTitle}</h3>
              <ul className='rd-sws-fit__list rd-stagger'>
                {notItems.map(item => (
                  <li key={item.title} className='rd-sws-fit__item'>
                    <span className='rd-dot rd-dot--risk' />
                    <div>
                      <div className='rd-sws-fit__item-title'>{item.title}</div>
                      <div className='rd-sws-fit__item-body'>{item.description}</div>
                    </div>
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
