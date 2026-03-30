import { ArrowRight, Zap } from 'lucide-react';

const BLOCK = 'workflow';

/**
 * WorkflowStepCard - Automation workflow example card component
 *
 * Displays an automation workflow with a trigger and a list of automated actions.
 * Used for showcasing how automation workflows work in practice.
 */
export interface WorkflowStepCardProps {
  trigger: string;
  actions: string[];
  triggerLabel?: string; // Label for trigger section (defaults to "When...")
  actionsLabel?: string; // Label for actions section (defaults to "Then automatically:")
  /**
   * Additional class(es) for the root element.
   *
   * Note: The component always applies its internal BEM block class (`workflow`).
   * This prop is additive and will not change the BEM base.
   */
  cssPrefix?: string;
}

export function WorkflowStepCard({
  trigger,
  actions,
  triggerLabel = 'When...',
  actionsLabel = 'Then automatically:',
  cssPrefix = '',
}: WorkflowStepCardProps) {
  return (
    <div className={[BLOCK, cssPrefix].filter(Boolean).join(' ')}>
      <div className={`${BLOCK}__content`}>
        <div className={`${BLOCK}__trigger`}>
          <Zap className={`${BLOCK}__trigger-icon`} />
          <span className={`${BLOCK}__trigger-label`}>{triggerLabel}</span>
        </div>
        <p className={`${BLOCK}__trigger-text`}>{trigger}</p>
        <div className={`${BLOCK}__actions`}>
          <div className={`${BLOCK}__actions-label`}>{actionsLabel}</div>
          {actions.map((action, index) => (
            <div key={index} className={`${BLOCK}__action`}>
              <ArrowRight className={`${BLOCK}__action-icon`} />
              <span>{action}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
