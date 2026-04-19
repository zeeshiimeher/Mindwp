import type { FeaturePageData } from '@/domains/features/types';
import CRMRenderer from '@/domains/features/renderers/CRMRenderer';

interface CRMPageProps {
  data: FeaturePageData;
}

export default function CRMPage({ data }: CRMPageProps) {
  return <CRMRenderer data={data} />;
}
