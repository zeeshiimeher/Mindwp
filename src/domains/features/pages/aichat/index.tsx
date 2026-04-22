import AIChatRenderer from '@/domains/features/renderers/AIChatRenderer';
import type { FeaturePageData } from '@/domains/features/types';

interface AIChatPageProps {
  data: FeaturePageData;
}

export default function AIChatPage({ data }: AIChatPageProps) {
  return <AIChatRenderer data={data} />;
}
