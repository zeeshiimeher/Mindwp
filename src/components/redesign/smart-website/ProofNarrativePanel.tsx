export interface ProofCard {
  label: string;
  title: string;
  description: string;
  points: readonly string[];
  featured?: boolean;
}

interface ProofNarrativePanelProps {
  eyebrow: string;
  title: string;
  description: string;
  cards: readonly ProofCard[];
}

export function ProofNarrativePanel({
  eyebrow,
  title,
  description,
  cards,
}: ProofNarrativePanelProps) {
  return (
    <section className='rd-section'>
      <div className='rd-container rd-container--wide'>
        <div className='rd-section-inner'>
          <div className='rd-section-head'>
            <span className='rd-section-kicker'>
              <span className='rd-dot rd-dot--good' />
              {eyebrow}
            </span>
            <h2 className='rd-section-title'>{title}</h2>
            <p className='rd-section-description'>{description}</p>
          </div>

          <div className='rd-sws-proof rd-stagger'>
            {cards.map(card => (
              <article
                key={card.title}
                className={
                  card.featured
                    ? 'rd-sws-proof__card rd-sws-proof__card--featured rd-hover-lift'
                    : 'rd-sws-proof__card rd-hover-lift'
                }
              >
                <span className='rd-sws-proof__label'>{card.label}</span>
                <h3 className='rd-sws-proof__title'>{card.title}</h3>
                <p className='rd-sws-proof__body'>{card.description}</p>
                <ul className='rd-sws-proof__list'>
                  {card.points.map(point => (
                    <li key={point} className='rd-sws-proof__list-item'>
                      <span className='rd-sws-proof__list-marker' aria-hidden='true' />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <span className='rd-sws-proof__connector' aria-hidden='true' />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
