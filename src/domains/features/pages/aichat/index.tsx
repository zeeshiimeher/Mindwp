import type { FeaturePageData } from '@/domains/features/types';
import AIChatRenderer from '@/domains/features/renderers/AIChatRenderer';

interface AIChatPageProps {
  data: FeaturePageData;
}

export default function AIChatPage({ data }: AIChatPageProps) {
  return <AIChatRenderer data={data} />;
}
