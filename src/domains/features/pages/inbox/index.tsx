import type { FeaturePageData } from '@/domains/features/types';
import InboxRenderer from '@/domains/features/renderers/InboxRenderer';

interface InboxPageProps {
  data: FeaturePageData;
}

export default function InboxPage({ data }: InboxPageProps) {
  return <InboxRenderer data={data} />;
}
