export type WorkflowPanel = 'system' | 'content' | 'design' | 'debug';
export type WorkflowEstimatedTime = 'fast' | 'medium' | 'slow';

export interface WorkflowDefinition {
  id: string;
  name: string;
  panel: WorkflowPanel;
  description: string;
  scripts: string[];
  priority: number;
  estimatedTime: WorkflowEstimatedTime;
}

export interface WorkflowProgress {
  workflowId: string;
  completedSteps: number;
  totalSteps: number;
  currentScriptId: string | null;
}

export interface WorkflowStepResult {
  scriptId: string;
  success: boolean;
  output: string;
  error: string | null;
  duration: number;
}

export interface WorkflowExecutionResult {
  workflowId: string;
  success: boolean;
  output: string;
  error: string | null;
  duration: number;
  results: WorkflowStepResult[];
}

const workflowDefinitions: WorkflowDefinition[] = [
  {
    id: 'full-check',
    name: 'Full System Check',
    panel: 'system',
    description: 'Run validation first, then sync current machine state.',
    scripts: ['validate-all', 'system-sync'],
    priority: 1,
    estimatedTime: 'medium',
  },
  {
    id: 'check-generated-workflow',
    name: 'Check Generated',
    panel: 'system',
    description: 'Verify generated files, then resync the current system state.',
    scripts: ['check-generated', 'system-sync'],
    priority: 2,
    estimatedTime: 'fast',
  },
  {
    id: 'lint-fix-workflow',
    name: 'Lint Fix',
    panel: 'system',
    description: 'Apply ESLint fixes, then revalidate the full system.',
    scripts: ['lint-fix', 'validate-all'],
    priority: 3,
    estimatedTime: 'medium',
  },
  {
    id: 'content-audit',
    name: 'Content Audit',
    panel: 'content',
    description: 'Run consistency and gap audits for current content coverage.',
    scripts: ['audit-content-consistency', 'generate-content-gaps'],
    priority: 1,
    estimatedTime: 'medium',
  },
  {
    id: 'content-intelligence-workflow',
    name: 'Content Intelligence',
    panel: 'content',
    description: 'Refresh intelligence outputs and content scoring signals.',
    scripts: ['generate-content-intelligence', 'score-content'],
    priority: 2,
    estimatedTime: 'medium',
  },
  {
    id: 'readiness-report-workflow',
    name: 'Readiness Report',
    panel: 'content',
    description: 'Build readiness output and export the readable report set.',
    scripts: ['report-content-readiness', 'export-readable-report'],
    priority: 3,
    estimatedTime: 'medium',
  },
  {
    id: 'visual-audit-workflow',
    name: 'Visual Audit',
    panel: 'design',
    description: 'Run the isolated visual audit, then confirm design validation.',
    scripts: ['phase7-run-visual-audit', 'validate-design-system'],
    priority: 1,
    estimatedTime: 'slow',
  },
  {
    id: 'token-validation-workflow',
    name: 'Token Validation',
    panel: 'design',
    description: 'Validate token usage and verify the Token V2 snapshot.',
    scripts: ['validate-tokens', 'token-v2-validator'],
    priority: 2,
    estimatedTime: 'fast',
  },
  {
    id: 'design-validation-workflow',
    name: 'Design Validation',
    panel: 'design',
    description: 'Check design-system rules and inline-style violations together.',
    scripts: ['validate-design-system', 'validate-inline-styles'],
    priority: 3,
    estimatedTime: 'fast',
  },
  {
    id: 'graph-inspect-workflow',
    name: 'Graph Inspect',
    panel: 'debug',
    description: 'Inspect graph diagnostics, then confirm graph integrity.',
    scripts: ['inspect-graph', 'validate-graph'],
    priority: 1,
    estimatedTime: 'fast',
  },
  {
    id: 'report-export-workflow',
    name: 'Report Export',
    panel: 'debug',
    description: 'Export machine and readable report outputs together.',
    scripts: ['export-report', 'export-readable-report'],
    priority: 2,
    estimatedTime: 'medium',
  },
  {
    id: 'editing-stability-workflow',
    name: 'Editing Stability',
    panel: 'debug',
    description: 'Run edit-stability checks, then validate the system surface.',
    scripts: ['test-editing-stability', 'validate-all'],
    priority: 3,
    estimatedTime: 'medium',
  },
];

export function loadWorkflowDefinitions(): WorkflowDefinition[] {
  return [...workflowDefinitions].sort((left, right) => left.priority - right.priority);
}

export function getWorkflowDefinition(workflowId: string): WorkflowDefinition | null {
  return workflowDefinitions.find(workflow => workflow.id === workflowId) ?? null;
}

export async function executeWorkflowSequentially(
  workflow: WorkflowDefinition,
  runScript: (scriptId: string) => Promise<WorkflowStepResult>,
  onProgress?: (progress: WorkflowProgress) => void
): Promise<WorkflowExecutionResult> {
  const startedAt = Date.now();
  const results: WorkflowStepResult[] = [];

  onProgress?.({
    workflowId: workflow.id,
    completedSteps: 0,
    totalSteps: workflow.scripts.length,
    currentScriptId: workflow.scripts[0] ?? null,
  });

  for (let index = 0; index < workflow.scripts.length; index += 1) {
    const scriptId = workflow.scripts[index];
    const result = await runScript(scriptId);
    results.push(result);

    onProgress?.({
      workflowId: workflow.id,
      completedSteps: index + 1,
      totalSteps: workflow.scripts.length,
      currentScriptId: workflow.scripts[index + 1] ?? null,
    });

    if (!result.success) {
      return {
        workflowId: workflow.id,
        success: false,
        output: results
          .map(step => step.output)
          .filter(Boolean)
          .join('\n\n'),
        error: result.error,
        duration: Date.now() - startedAt,
        results,
      };
    }
  }

  return {
    workflowId: workflow.id,
    success: true,
    output: results
      .map(step => step.output)
      .filter(Boolean)
      .join('\n\n'),
    error: null,
    duration: Date.now() - startedAt,
    results,
  };
}
