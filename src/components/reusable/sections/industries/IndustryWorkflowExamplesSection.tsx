import { SectionIntro, WorkflowStepCard } from '@/components/reusable/single';
import { cn } from '@/components/ui/utils';

const BLOCK = 'c-industry-workflow-examples-section';

type WorkflowExample = {
  trigger: string;
  actions: string[];
};

export interface IndustryWorkflowExamplesSectionProps {
  badge?: string;
  title: string;
  description?: string;
  workflows: WorkflowExample[];
  backgroundColor?: string;
  cssPrefix?: string;
}

export function IndustryWorkflowExamplesSection({
  badge,
  title,
  description,
  workflows,
  backgroundColor = '',
  cssPrefix = '',
}: IndustryWorkflowExamplesSectionProps) {
  return (
    <section className={cn(BLOCK, 'l-section', backgroundColor, cssPrefix)}>
      <div className='l-container'>
        <SectionIntro
          {...(badge !== undefined && { badge })}
          title={title}
          {...(description !== undefined && { description })}
          className={`${BLOCK}__header`}
        />

        <div className={`${BLOCK}__grid`}>
          {workflows.map((workflow, index) => (
            <WorkflowStepCard
              key={`${workflow.trigger}-${index}`}
              trigger={workflow.trigger}
              actions={workflow.actions}
              cssPrefix={`${BLOCK}__card`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
