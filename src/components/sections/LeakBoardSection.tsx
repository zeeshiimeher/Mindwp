import { SectionShell } from './SectionShell';
import type { SectionDensity, SectionHeading, SectionTone } from './types';

export interface LeakCard {
    /** Short label: failure type / zone (e.g. "Response"). */
    label: string;
    /** Headline: what actually goes wrong. */
    title: string;
    /** Situation: how it plays out. Specific, not vague. */
    situation: string;
    /** What it costs the business. */
    cost: string;
    /** What the handled state looks like. */
    handledState: string;
}

export interface LeakBoardSectionProps {
    tone?: SectionTone;
    density?: SectionDensity;
    heading: SectionHeading;
    /** The most costly / most common leak. Rendered large on the left. */
    primaryLeak: LeakCard;
    /** Up to 4 supporting leaks. Rendered as supporting diagnostic tiles on the right. */
    leaks: readonly LeakCard[];
    /** Optional summary statement at the bottom. */
    summary?: string;
}

const PRIMARY_LABEL_DOT = 'Main leak';
const COST_LABEL_DOT = 'What it costs';
const HANDLED_LABEL_DOT = 'Handled';

/**
 * LeakBoardSection — recognition section for "Where enquiries leak".
 *
 * Not a process flow. Not a comparison table.
 * One dominant leak + up to 4 supporting leaks arranged as a diagnostic board.
 *
 * Phase 1 component. No variant — single approved pattern.
 */
export function LeakBoardSection({
    tone = 'soft',
    density = 'default',
    heading,
    primaryLeak,
    leaks,
    summary,
}: LeakBoardSectionProps) {
    if (!heading.title.trim() || !heading.description?.trim()) {
        throw new Error('[LeakBoardSection] Invalid data: heading required');
    }

    if (leaks.length < 1 || leaks.length > 4) {
        throw new Error('[LeakBoardSection] Invalid data: 1–4 supporting leaks required');
    }

    return (
        <SectionShell tone={tone} density={density} heading={heading} sectionClassName='leak-board'>
            <div className='leak-board__layout'>
                {/* Primary leak — dominant left panel */}
                <article className='leak-board__primary'>
                    <span className='leak-board__label'>{PRIMARY_LABEL_DOT}</span>
                    <h3 className='leak-board__primary-title'>{primaryLeak.title}</h3>

                    <div className='leak-board__primary-zone leak-board__primary-zone--failure'>
                        <span className='leak-board__zone-label'>{primaryLeak.label}</span>
                        <p className='leak-board__primary-situation'>{primaryLeak.situation}</p>
                    </div>

                    <div className='leak-board__primary-zone leak-board__primary-zone--cost'>
                        <span className='leak-board__zone-label'>{COST_LABEL_DOT}</span>
                        <p className='leak-board__primary-cost'>{primaryLeak.cost}</p>
                    </div>

                    <div className='leak-board__primary-zone leak-board__primary-zone--handled'>
                        <span className='leak-board__zone-label'>{HANDLED_LABEL_DOT}</span>
                        <p className='leak-board__primary-handled'>{primaryLeak.handledState}</p>
                    </div>
                </article>

                {/* Supporting leaks — diagnostic tiles on the right */}
                <ul className='leak-board__secondary'>
                    {leaks.map(leak => (
                        <li key={leak.label} className='leak-board__card'>
                            <span className='leak-board__card-label'>{leak.label}</span>
                            <h4 className='leak-board__card-title'>{leak.title}</h4>
                            <p className='leak-board__card-situation'>{leak.situation}</p>
                            <div className='leak-board__card-handled'>
                                <span className='leak-board__card-handled-label'>{HANDLED_LABEL_DOT}</span>
                                <p className='leak-board__card-handled-value'>{leak.handledState}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {summary ? <p className='leak-board__summary'>{summary}</p> : null}
        </SectionShell>
    );
}
