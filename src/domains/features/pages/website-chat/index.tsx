import type { FeaturePageDataBySlug } from '@/domains/features/pageData';
import WebsiteChatRenderer from '@/domains/features/renderers/WebsiteChatRenderer';

interface WebsiteChatPageProps {
  data: FeaturePageDataBySlug['website-chat'];
}

export default function WebsiteChatPage({ data }: WebsiteChatPageProps) {
  return <WebsiteChatRenderer data={data} />;
}
