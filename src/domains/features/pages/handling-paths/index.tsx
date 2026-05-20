import type { FeaturePageDataBySlug } from '@/domains/features/pageData';
import HandlingPathsRenderer from '@/domains/features/renderers/HandlingPathsRenderer';

interface HandlingPathsPageProps {
  data: FeaturePageDataBySlug['handling-paths'];
}

export default function HandlingPathsPage({ data }: HandlingPathsPageProps) {
  return <HandlingPathsRenderer data={data} />;
}
