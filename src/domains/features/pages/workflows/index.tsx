import type { FeaturePageDataBySlug } from '@/domains/features/pageData';
import WorkflowsRenderer from '@/domains/features/renderers/WorkflowsRenderer';

interface WorkflowsPageProps {
  data: FeaturePageDataBySlug['workflows'];
}

export default function WorkflowsPage({ data }: WorkflowsPageProps) {
  return <WorkflowsRenderer data={data} />;
}
