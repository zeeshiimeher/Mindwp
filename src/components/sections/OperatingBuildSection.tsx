import { SectionShell } from './SectionShell';
import type { SectionDensity, SectionHeading, SectionTone } from './types';

export interface OperatingBuildStage {
    title: string;
    description: string;
    /** What this stage produces — 2–3 short items */
    outputs: readonly string[];
}

export interface OperatingFinalState {
    title: string;
    items: readonly string[];
}

export interface OperatingBuildSectionProps {
    tone?: SectionTone;
    density?: SectionDensity;
    heading: SectionHeading;
    /** Raw inputs we start with: calls, forms, existing pages, etc. */
    inputs: readonly string[];
    /** The 4 build stages: map → structure → connect → hand over */
    stages: readonly OperatingBuildStage[];
    /** The operating state after delivery */
    finalState: OperatingFinalState;
}

const INPUTS_LABEL_DOT = 'What we start with';
const OUTPUTS_LABEL_DOT = 'What is working after';

/**
 * OperatingBuildSection — implementation process section.
 *
 * Workbench layout: inputs → build stages → operating output.
 * NOT a numbered decorative timeline. Numbers are secondary metadata only.
 * Final operating state is visually strongest.
 *
 * Replaces ProcessStepsSection for Smart Website Systems.
 *
 * Phase 1 component. No variant — single approved pattern.
 */
export function OperatingBuildSection({
    tone = 'soft',
    density = 'default',
    heading,
    inputs,
    stages,
    finalState,
}: OperatingBuildSectionProps) {
    if (!heading.title.trim() || !heading.description?.trim()) {
        throw new Error('[OperatingBuildSection] Invalid data: heading required');
    }

    if (inputs.length < 2) {
        throw new Error('[OperatingBuildSection] Invalid data: at least 2 inputs required');
    }

    if (stages.length < 2 || stages.length > 6) {
        throw new Error('[OperatingBuildSection] Invalid data: 2–6 stages required');
    }

    return (
        <SectionShell
            tone={tone}
            density={density}
            heading={heading}
            sectionClassName='operating-build'
        >
            {/* Top: messy inputs strip */}
            <div className='operating-build__inputs'>
                <span className='operating-build__strip-label'>{INPUTS_LABEL_DOT}</span>
                <ul className='operating-build__input-list'>
                    {inputs.map(input => (
                        <li key={input} className='operating-build__input-item'>
                            <span className='rd-dot' aria-hidden='true' />
                            <span>{input}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Middle: build stage grid */}
            <ol className='operating-build__stages'>
                {stages.map((stage, index) => (
                    <li key={stage.title} className='operating-build__stage'>
                        <span className='operating-build__stage-index' aria-hidden='true'>
                            {String(index + 1).padStart(2, '0')}
                        </span>
                        <h3 className='operating-build__stage-title'>{stage.title}</h3>
                        <p className='operating-build__stage-description'>{stage.description}</p>
                        {stage.outputs.length > 0 ? (
                            <ul className='operating-build__stage-outputs'>
                                {stage.outputs.map(output => (
                                    <li key={output} className='operating-build__stage-output'>
                                        <span className='rd-dot rd-dot--info' aria-hidden='true' />
                                        <span>{output}</span>
                                    </li>
                                ))}
                            </ul>
                        ) : null}
                    </li>
                ))}
            </ol>

            {/* Bottom: operating output — visually strongest */}
            <div className='operating-build__final'>
                <div className='operating-build__final-head'>
                    <span className='operating-build__strip-label'>{OUTPUTS_LABEL_DOT}</span>
                    <p className='operating-build__final-title'>{finalState.title}</p>
                </div>
                <ul className='operating-build__final-items'>
                    {finalState.items.map(item => (
                        <li key={item} className='operating-build__final-item'>
                            <span className='rd-dot rd-dot--good' aria-hidden='true' />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </SectionShell>
    );
}
