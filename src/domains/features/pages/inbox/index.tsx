import type { FeaturePageDataBySlug } from '@/domains/features/pageData';
import InboxRenderer from '@/domains/features/renderers/InboxRenderer';

interface InboxPageProps {
  data: FeaturePageDataBySlug['inbox'];
}

export default function InboxPage({ data }: InboxPageProps) {
  return <InboxRenderer data={data} />;
}
