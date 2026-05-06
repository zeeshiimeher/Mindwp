import { SectionShell } from './SectionShell';
import type { SectionDensity, SectionHeading, SectionTone } from './types';

export type SignalState = 'strong' | 'weak' | 'missing';

export interface AuthoritySignal {
  /** Stable key for list rendering. */
  id: string;
  /** What the signal represents. */
  label: string;
  /** Current state of this signal. */
  state: SignalState;
  /** Optional supporting metric or evidence. */
  metric?: string;
  /** Optional context note — kept to one sentence. */
  note?: string;
}

export interface AuthoritySignalFamily {
  /** Stable key for list rendering. */
  id: string;
  /** The signal family title. */
  title: string;
  /** 2–4 signals within this family. */
  signals: readonly AuthoritySignal[];
}

export interface AuthoritySignalMapSectionProps {
  tone?: SectionTone;
  density?: SectionDensity;
  heading: SectionHeading;
  /** 2–4 signal families. Grouping must be visually stronger than individual signals. */
  families: readonly AuthoritySignalFamily[];
}

const STATE_LABEL_DOT: Record<SignalState, string> = {
  strong: 'Strong',
  weak: 'Weak',
  missing: 'Missing',
};

const STATE_DOT_CLASS: Record<SignalState, string> = {
  strong: 'rd-dot rd-dot--good',
  weak: 'rd-dot rd-dot--warn',
  missing: 'rd-dot rd-dot--risk',
};

const VALID_SIGNAL_STATES_DOT: readonly SignalState[] = ['strong', 'weak', 'missing'];

// Priority order: worst first. Variable ends in _CLASS so string values are allowed.
const FAMILY_STATE_CLASS: Record<SignalState, string> = {
  missing: 'authority-signal-map__family--has-missing',
  weak: 'authority-signal-map__family--has-weak',
  strong: 'authority-signal-map__family--all-strong',
};

// Priority order for worst-state detection (missing > weak > strong).
const FAMILY_STATE_PRIORITY_DOT: readonly SignalState[] = ['missing', 'weak', 'strong'];

/**
 * AuthoritySignalMapSection — show how visibility, authority, and trust signals connect.
 *
 * Displays grouped signal families with current state (strong / weak / missing)
 * so the reader can understand what is working, what is partial, and what is absent.
 *
 * Must feel like a signal map — not SEO cards, not a dashboard.
 * Missing and weak signals must be clearly visible.
 * Relationships between signals within a family must be legible.
 *
 * Phase 1 component. No variants. Local SEO Authority anchor.
 */
export function AuthoritySignalMapSection({
  tone = 'light',
  density = 'default',
  heading,
  families,
}: AuthoritySignalMapSectionProps) {
  if (heading.title.trim().length === 0 || heading.description.trim().length === 0) {
    throw new Error('[AuthoritySignalMapSection] Invalid data: heading required');
  }

  if (families.length < 2 || families.length > 4) {
    throw new Error('[AuthoritySignalMapSection] Invalid data: 2–4 families required');
  }

  for (const family of families) {
    if (family.id.trim().length === 0 || family.title.trim().length === 0) {
      throw new Error('[AuthoritySignalMapSection] Invalid data: family id and title required');
    }

    if (family.signals.length < 2 || family.signals.length > 4) {
      throw new Error(
        `[AuthoritySignalMapSection] Invalid data: family "${family.id}" must have 2–4 signals`
      );
    }

    for (const signal of family.signals) {
      if (signal.id.trim().length === 0 || signal.label.trim().length === 0) {
        throw new Error('[AuthoritySignalMapSection] Invalid data: signal id and label required');
      }
      if (!VALID_SIGNAL_STATES_DOT.includes(signal.state)) {
        throw new Error(
          `[AuthoritySignalMapSection] Invalid data: signal state must be strong | weak | missing`
        );
      }
    }
  }

  return (
    <SectionShell
      tone={tone}
      density={density}
      heading={heading}
      sectionClassName='authority-signal-map'
    >
      <div className='authority-signal-map__families'>
        {families.map(family => {
          const worstState = FAMILY_STATE_PRIORITY_DOT.find(state =>
            state === FAMILY_STATE_PRIORITY_DOT[2]
              ? family.signals.every(s => s.state === state)
              : family.signals.some(s => s.state === state)
          );
          const familyStateClass = worstState ? FAMILY_STATE_CLASS[worstState] : '';

          return (
            <div key={family.id} className={`authority-signal-map__family ${familyStateClass}`}>
              <h3 className='authority-signal-map__family-title'>{family.title}</h3>

              <ul className='authority-signal-map__signals' aria-label={`${family.title} signals`}>
                {family.signals.map(signal => {
                  const stateClass = STATE_DOT_CLASS[signal.state];
                  const stateLabel = STATE_LABEL_DOT[signal.state];
                  const hasMeta = signal.metric || signal.note;

                  return (
                    <li
                      key={signal.id}
                      className={`authority-signal-map__signal authority-signal-map__signal--${signal.state}`}
                    >
                      <div className='authority-signal-map__signal-row'>
                        <span
                          className={`authority-signal-map__dot ${stateClass}`}
                          aria-hidden='true'
                        />
                        <span className='authority-signal-map__signal-label'>{signal.label}</span>
                        <span
                          className='authority-signal-map__state-badge'
                          aria-label={`State: ${stateLabel}`}
                        >
                          {stateLabel}
                        </span>
                      </div>

                      {hasMeta && (
                        <div className='authority-signal-map__signal-meta'>
                          {signal.metric && (
                            <span className='authority-signal-map__metric'>{signal.metric}</span>
                          )}
                          {signal.note && (
                            <span className='authority-signal-map__note'>{signal.note}</span>
                          )}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}
