import type { FeaturePageData } from '@/domains/features/types';
import WorkflowsRenderer from '@/domains/features/renderers/WorkflowsRenderer';

interface WorkflowsPageProps {
  data: FeaturePageData;
}

export default function WorkflowsPage({ data }: WorkflowsPageProps) {
  return <WorkflowsRenderer data={data} />;
}
