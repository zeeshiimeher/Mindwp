import React from 'react';

import { SectionWrapper } from '@/components/reusable/primitives';
import { SectionIntro, WorkflowStepCard } from '@/components/reusable/single';

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
    <SectionWrapper className={BLOCK}>
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
    </SectionWrapper>
  );
}
