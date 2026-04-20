import WorkflowsRenderer from '@/domains/features/renderers/WorkflowsRenderer';
import type { FeaturePageData } from '@/domains/features/types';

interface WorkflowsPageProps {
  data: FeaturePageData;
}

export default function WorkflowsPage({ data }: WorkflowsPageProps) {
  return <WorkflowsRenderer data={data} />;
}
