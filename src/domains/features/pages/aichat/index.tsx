import type { FeaturePageDataBySlug } from '@/domains/features/pageData';
import AIChatRenderer from '@/domains/features/renderers/AIChatRenderer';

interface AIChatPageProps {
  data: FeaturePageDataBySlug['aichat'];
}

export default function AIChatPage({ data }: AIChatPageProps) {
  return <AIChatRenderer data={data} />;
}
