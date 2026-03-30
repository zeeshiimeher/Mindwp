import React from 'react';

import { SectionIntro, WorkflowStepCard } from '@/components/reusable/single';
import { cn } from '@/components/ui/utils';

export interface CaseStudyWorkflow {
  trigger: string;
  actions: string[];
}

export interface CaseStudyWorkflowsSectionProps {
  badge?: string;
  title: string;
  description?: string;
  workflows: CaseStudyWorkflow[];
}

export function CaseStudyWorkflowsSection({
  badge,
  title,
  description,
  workflows,
}: CaseStudyWorkflowsSectionProps) {
  const BLOCK = 'case-study-detail-workflows';

  return (
    <section className={cn(BLOCK, 'l-section')}>
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
              key={index}
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
