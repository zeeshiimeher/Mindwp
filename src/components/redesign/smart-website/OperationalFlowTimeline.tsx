export interface FlowStep {
  number: string;
  title: string;
  description: string;
}

interface OperationalFlowTimelineProps {
  eyebrow: string;
  title: string;
  description: string;
  steps: readonly FlowStep[];
}

export function OperationalFlowTimeline({
  eyebrow,
  title,
  description,
  steps,
}: OperationalFlowTimelineProps) {
  return (
    <section className='rd-section rd-section--dark'>
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

          <div className='rd-sws-flow rd-stagger'>
            {steps.map(step => (
              <article key={step.number} className='rd-sws-flow__step rd-hover-lift'>
                <div className='rd-sws-flow__step-head'>
                  <span className='rd-sws-flow__step-number'>{step.number}</span>
                  <span>Step {step.number}</span>
                </div>
                <h3 className='rd-sws-flow__step-title'>{step.title}</h3>
                <p className='rd-sws-flow__step-body'>{step.description}</p>
                <span className='rd-sws-flow__step-connector rd-line-grow' aria-hidden='true' />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
