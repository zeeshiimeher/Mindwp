import { resolveSectionIcon, type SectionIconKey } from './icons';
import { SectionShell } from './SectionShell';
import type { SectionDensity, SectionHeading, SectionTone } from './types';

export type ScopeSectionVariant = 'layered-list' | 'service-map';

export interface ScopeGroup {
  /** Group label (e.g. "Included", "Foundation"). */
  label: string;
  /** Optional supporting line shown beneath the label. */
  description?: string;
  iconKey?: SectionIconKey;
  items: readonly string[];
}

export interface ScopeSectionProps {
  variant?: ScopeSectionVariant;
  tone?: SectionTone;
  density?: SectionDensity;
  heading: SectionHeading;
  groups: readonly ScopeGroup[];
}

/**
 * ScopeSection — explains scope/inclusions of a service.
 *
 * Generic two-or-more column scope/list layout. Callers supply a small
 * number of groups; each group renders its own header + bullet list.
 */
export function ScopeSection({
  variant = 'layered-list',
  tone = 'light',
  density = 'default',
  heading,
  groups,
}: ScopeSectionProps) {
  return (
    <SectionShell
      tone={tone}
      density={density}
      heading={heading}
      sectionClassName={`scope-section scope-section--${variant}`}
    >
      <div className='scope-section__inner rd-animate-stagger'>
        {groups.map(group => {
          const Icon = resolveSectionIcon(group.iconKey);
          return (
            <article key={group.label} className='scope-section__column rd-card'>
              <header className='scope-section__head'>
                {Icon ? (
                  <span className='rd-icon-tile' aria-hidden='true'>
                    <Icon size={20} />
                  </span>
                ) : null}
                <div>
                  <h3 className='scope-section__label'>{group.label}</h3>
                  {group.description ? (
                    <p className='scope-section__description'>{group.description}</p>
                  ) : null}
                </div>
              </header>
              <ul className='scope-section__list'>
                {group.items.map(item => (
                  <li key={item} className='scope-section__item'>
                    <span className='rd-dot rd-dot--info' aria-hidden='true' />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}
