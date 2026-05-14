import { ArrowRight } from 'lucide-react';

// -- Types --------------------------------------------------------------------

type DecisionPanelAction = {
  label: string;
  href: string;
  variant?: 'primary' | 'white' | 'ghost';
};

type DecisionPanelExpectation = {
  num?: string;
  text: string;
};

type DecisionPanelHeading = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
};

export type DecisionPanelProps = {
  heading: DecisionPanelHeading;
  actions: readonly DecisionPanelAction[];
  expectations?: readonly DecisionPanelExpectation[];
  expectationsLabel?: string;
  reassurance?: {
    noSell?: string;
    tone?: string;
  };
  className?: string;
  dataTestId?: string;
};

// -- Component ----------------------------------------------------------------

/**
 * DecisionPanel — shared final conversion section.
 *
 * Owns data-testid='smart-cta' (required by publishable contract).
 */
export function DecisionPanel({
  heading,
  actions,
  expectations,
  expectationsLabel = 'What to expect',
  reassurance,
  className,
  dataTestId = 'smart-cta',
}: DecisionPanelProps) {
  const action = actions[0];

  if (!action) {
    throw new Error('[DecisionPanel] requires at least one primary action');
  }

  if (!heading.title) {
    throw new Error('[DecisionPanel] requires heading.title');
  }

  return (
    <section
      className={`mw-decision-panel${className ? ` ${className}` : ''}`}
      data-testid={dataTestId}
    >
      <div className='mw-container'>
        <div className='mw-decision-panel__wrap'>
          <div className='mw-decision-panel__texture' aria-hidden='true' />
          <div className='mw-decision-panel__layout'>
            <div className='mw-decision-panel__copy mw-animate-up'>
              {heading.eyebrow && (
                <div className='mw-decision-panel__eyebrow'>
                  <span className='mw-decision-panel__eyebrow-dot' aria-hidden='true' />
                  <span>{heading.eyebrow}</span>
                </div>
              )}
              <h2 className='mw-decision-panel__title'>
                {heading.title}
                {heading.subtitle && (
                  <>
                    <br />
                    <span className='mw-decision-panel__title--muted'>{heading.subtitle}</span>
                  </>
                )}
              </h2>
              {heading.description && (
                <p className='mw-decision-panel__description'>{heading.description}</p>
              )}
              <a
                href={action.href}
                className={`mw-decision-panel__action mw-btn mw-btn--${action.variant ?? 'white'}`}
              >
                {action.label}
                <ArrowRight size={16} aria-hidden='true' />
              </a>
            </div>

            {expectations && expectations.length > 0 && (
              <div className='mw-decision-panel__expectations mw-animate-panel'>
                <div className='mw-decision-panel__expectations-label'>{expectationsLabel}</div>
                <div className='mw-decision-panel__expectations-list'>
                  {expectations.map((item, i) => (
                    <div key={item.num ?? String(i)} className='mw-decision-panel__expectation'>
                      {item.num && (
                        <span className='mw-decision-panel__expectation-num'>{item.num}</span>
                      )}
                      <span className='mw-decision-panel__expectation-text'>{item.text}</span>
                    </div>
                  ))}
                </div>
                {reassurance && (reassurance.noSell || reassurance.tone) && (
                  <div className='mw-decision-panel__footer'>
                    {reassurance.noSell && <span>{reassurance.noSell}</span>}
                    {reassurance.tone && (
                      <span className='mw-decision-panel__footer-tone'>
                        <span className='mw-decision-panel__footer-tone-dot' aria-hidden={true} />
                        {reassurance.tone}
                      </span>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
