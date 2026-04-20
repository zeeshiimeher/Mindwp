import InboxRenderer from '@/domains/features/renderers/InboxRenderer';
import type { FeaturePageData } from '@/domains/features/types';

interface InboxPageProps {
  data: FeaturePageData;
}

export default function InboxPage({ data }: InboxPageProps) {
  return <InboxRenderer data={data} />;
}
