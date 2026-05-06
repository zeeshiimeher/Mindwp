import { resolveSectionIcon, type SectionIconKey } from './icons';
import { SectionShell } from './SectionShell';
import type { SectionDensity, SectionHeading, SectionTone } from './types';

export type GridCardsVariant = 'diagnostic-grid' | 'signal-board' | 'feature-grid';

export type GridCardsColumns = 2 | 3 | 4;

export interface GridCardItem {
  /** Stable id for keys (preferred over title for stability). */
  id?: string;
  iconKey?: SectionIconKey;
  /** Optional short label above the title (e.g. signal code). */
  badge?: string;
  title: string;
  description?: string;
  /** Optional evidence bullets — rendered in feature-grid variant. */
  bullets?: readonly string[];
  status?: 'good' | 'risk' | 'warn' | 'info';
}

export interface GridCardsSectionProps {
  variant?: GridCardsVariant;
  tone?: SectionTone;
  density?: SectionDensity;
  columns?: GridCardsColumns;
  heading: SectionHeading;
  items: readonly GridCardItem[];
}

const COLUMN_CLASS: Record<GridCardsColumns, string> = {
  2: 'grid-cards__list--2',
  3: 'grid-cards__list--3',
  4: 'grid-cards__list--4',
};

const STATUS_CLASS: Record<NonNullable<GridCardItem['status']>, string> = {
  good: 'grid-cards__item--good',
  risk: 'grid-cards__item--risk',
  warn: 'grid-cards__item--warn',
  info: 'grid-cards__item--info',
};

/**
 * GridCardsSection — premium reusable card grid.
 *
 * Replaces prototype `DiagnosticLeakageSection`. Must look distinct from
 * `ProcessStepsSection`: cards are status-tagged, icon-led, hover-lift,
 * not numbered timeline steps.
 */
export function GridCardsSection({
  variant = 'diagnostic-grid',
  tone = 'soft',
  density = 'default',
  columns = 3,
  heading,
  items,
}: GridCardsSectionProps) {
  if (items.length === 0) {
    throw new Error('[GridCardsSection] Invalid data');
  }

  for (const item of items) {
    if (!item.id || item.id.trim().length === 0 || item.title.trim().length === 0) {
      throw new Error('[GridCardsSection] Invalid data');
    }

    if (item.description !== undefined && item.description.trim().length === 0) {
      throw new Error('[GridCardsSection] Invalid data');
    }

    if (item.badge !== undefined && item.badge.trim().length === 0) {
      throw new Error('[GridCardsSection] Invalid data');
    }

    if (item.bullets?.some(b => b.trim().length === 0)) {
      throw new Error('[GridCardsSection] Invalid data');
    }
  }

  return (
    <SectionShell
      tone={tone}
      density={density}
      heading={heading}
      sectionClassName={`grid-cards grid-cards--${variant}`}
    >
      <ul className={`grid-cards__list ${COLUMN_CLASS[columns]} rd-animate-stagger`}>
        {items.map((item, index) => {
          const Icon = resolveSectionIcon(item.iconKey);

          /* feature-grid: numbered layout with optional bullets */
          if (variant === 'feature-grid') {
            return (
              <li
                key={item.id}
                className={`grid-cards__item grid-cards__item--feature rd-card ${item.status ? STATUS_CLASS[item.status] : ''}`}
              >
                <div className='grid-cards__feature-header'>
                  <span className='grid-cards__feature-index' aria-hidden='true'>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {Icon ? (
                    <span className='rd-icon-tile rd-icon-tile--lg' aria-hidden='true'>
                      <Icon size={22} />
                    </span>
                  ) : null}
                </div>
                <div className='grid-cards__feature-body'>
                  <h3 className='grid-cards__title'>{item.title}</h3>
                  {item.description ? (
                    <p className='grid-cards__description'>{item.description}</p>
                  ) : null}
                  {item.bullets && item.bullets.length > 0 ? (
                    <ul className='grid-cards__bullets'>
                      {item.bullets.map(bullet => (
                        <li key={bullet} className='grid-cards__bullet'>
                          <span className='rd-dot rd-dot--info' aria-hidden='true' />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </li>
            );
          }

          /* signal-board: assumption label at top, belief title, reality description */
          if (variant === 'signal-board') {
            return (
              <li
                key={item.id}
                className={`grid-cards__item grid-cards__item--signal rd-card ${item.status ? STATUS_CLASS[item.status] : ''}`}
              >
                {item.badge ? (
                  <div className='grid-cards__signal-top'>
                    <span className='grid-cards__signal-label'>{item.badge}</span>
                  </div>
                ) : null}
                <div className='grid-cards__signal-body'>
                  {Icon ? (
                    <span className='rd-icon-tile rd-icon-tile--sm' aria-hidden='true'>
                      <Icon size={16} />
                    </span>
                  ) : null}
                  <h3 className='grid-cards__signal-belief'>{item.title}</h3>
                  {item.description ? (
                    <p className='grid-cards__signal-reality'>{item.description}</p>
                  ) : null}
                </div>
              </li>
            );
          }

          /* default: diagnostic-grid */
          return (
            <li
              key={item.id}
              className={`grid-cards__item rd-card ${item.status ? STATUS_CLASS[item.status] : ''}`}
            >
              <div className='grid-cards__head'>
                {Icon ? (
                  <span className='rd-icon-tile' aria-hidden='true'>
                    <Icon size={20} />
                  </span>
                ) : null}
              </div>
              <h3 className='grid-cards__title'>{item.title}</h3>
              {item.description ? (
                <p className='grid-cards__description'>{item.description}</p>
              ) : null}
            </li>
          );
        })}
      </ul>
    </SectionShell>
  );
}
