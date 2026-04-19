import type { FeaturePageData } from '@/domains/features/types';
import ReputationRenderer from '@/domains/features/renderers/ReputationRenderer';

interface ReputationPageProps {
  data: FeaturePageData;
}

export default function ReputationPage({ data }: ReputationPageProps) {
  return <ReputationRenderer data={data} />;
}
