import ReputationRenderer from '@/domains/features/renderers/ReputationRenderer';
import type { FeaturePageData } from '@/domains/features/types';

interface ReputationPageProps {
  data: FeaturePageData;
}

export default function ReputationPage({ data }: ReputationPageProps) {
  return <ReputationRenderer data={data} />;
}
