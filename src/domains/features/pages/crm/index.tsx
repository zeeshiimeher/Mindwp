import CRMRenderer from '@/domains/features/renderers/CRMRenderer';
import type { FeaturePageData } from '@/domains/features/types';

interface CRMPageProps {
  data: FeaturePageData;
}

export default function CRMPage({ data }: CRMPageProps) {
  return <CRMRenderer data={data} />;
}
