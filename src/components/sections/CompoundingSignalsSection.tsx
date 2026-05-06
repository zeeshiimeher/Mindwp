import { SectionShell } from './SectionShell';
import type { SectionDensity, SectionHeading, SectionTone } from './types';

export type SignalRowStatus = 'active' | 'waiting' | 'clear';

export interface SignalRow {
    label: string;
    value: string;
    status?: SignalRowStatus;
}

export interface LiveSignal {
    /** Panel heading: e.g. "Enquiry received" */
    title: string;
    rows: readonly SignalRow[];
}

export interface CompoundingSignal {
    /** Numbered title: what changes */
    title: string;
    /** The before state */
    before: string;
    /** The after state */
    after: string;
}

export interface CompoundingSummary {
    before: string;
    after: string;
}

export interface CompoundingSignalsSectionProps {
    tone?: SectionTone;
    density?: SectionDensity;
    heading: SectionHeading;
    /** Simulated live feed panel — shows what is now visible in the system */
    liveSignal: LiveSignal;
    /** 3–4 compounding outcome cards */
    signals: readonly CompoundingSignal[];
    /** Bottom before/after summary strip */
    summary: CompoundingSummary;
}

const STATUS_CLASS_DOT: Record<SignalRowStatus, string> = {
    active: 'rd-dot rd-dot--good',
    waiting: 'rd-dot rd-dot--warn',
    clear: 'rd-dot',
};

const BEFORE_LABEL_DOT = 'Before';
const AFTER_LABEL_DOT = 'After';

/**
 * CompoundingSignalsSection — outcome section showing what starts improving after the system is live.
 *
 * Not proof. Not process. Not scope.
 * Shows: less waste → less chasing → search picks up → team sees what happened.
 *
 * Replaces ImageStorySection for "What changes when the site actually works".
 *
 * Phase 1 component. No variant — single approved pattern.
 */
export function CompoundingSignalsSection({
    tone = 'light',
    density = 'default',
    heading,
    liveSignal,
    signals,
    summary,
}: CompoundingSignalsSectionProps) {
    if (!heading.title.trim() || !heading.description?.trim()) {
        throw new Error('[CompoundingSignalsSection] Invalid data: heading required');
    }

    if (signals.length < 2 || signals.length > 4) {
        throw new Error('[CompoundingSignalsSection] Invalid data: 2–4 signals required');
    }

    return (
        <SectionShell
            tone={tone}
            density={density}
            heading={heading}
            sectionClassName='compounding-signals'
        >
            <div className='compounding-signals__board'>
                {/* Left: dark live-signal panel */}
                <div className='compounding-signals__live'>
                    <div className='live-feed-card'>
                        <p className='live-feed-card__title'>{liveSignal.title}</p>
                        <ul className='live-feed-card__rows'>
                            {liveSignal.rows.map(row => (
                                <li key={row.label} className='live-feed-card__row'>
                                    {row.status ? (
                                        <span className={STATUS_CLASS_DOT[row.status]} aria-hidden='true' />
                                    ) : null}
                                    <span className='live-feed-card__row-label'>{row.label}</span>
                                    <span className='live-feed-card__row-value'>{row.value}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right: stacked outcome cards */}
                <ul className='compounding-signals__stack'>
                    {signals.map((signal, index) => (
                        <li key={signal.title} className='signal-card'>
                            <span className='signal-card__index' aria-hidden='true'>
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <div className='signal-card__body'>
                                <h3 className='signal-card__title'>{signal.title}</h3>
                                <div className='signal-card__states'>
                                    <div className='signal-card__state signal-card__state--before'>
                                        <span className='signal-card__state-label'>{BEFORE_LABEL_DOT}</span>
                                        <p className='signal-card__state-value'>{signal.before}</p>
                                    </div>
                                    <div className='signal-card__state signal-card__state--after'>
                                        <span className='signal-card__state-label'>{AFTER_LABEL_DOT}</span>
                                        <p className='signal-card__state-value'>{signal.after}</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Bottom summary strip */}
            <div className='compounding-signals__summary'>
                <div className='compounding-signals__summary-before'>
                    <span className='compounding-signals__summary-label'>{BEFORE_LABEL_DOT}</span>
                    <p className='compounding-signals__summary-text'>{summary.before}</p>
                </div>
                <div className='compounding-signals__summary-after'>
                    <span className='compounding-signals__summary-label'>{AFTER_LABEL_DOT}</span>
                    <p className='compounding-signals__summary-text'>{summary.after}</p>
                </div>
            </div>
        </SectionShell>
    );
}
