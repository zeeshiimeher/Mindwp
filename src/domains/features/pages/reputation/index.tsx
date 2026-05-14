import type { FeaturePageDataBySlug } from '@/domains/features/pageData';
import ReputationRenderer from '@/domains/features/renderers/ReputationRenderer';

interface ReputationPageProps {
  data: FeaturePageDataBySlug['reputation'];
}

export default function ReputationPage({ data }: ReputationPageProps) {
  return <ReputationRenderer data={data} />;
}
