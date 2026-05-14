import type { FeaturePageDataBySlug } from '@/domains/features/pageData';
import CRMRenderer from '@/domains/features/renderers/CRMRenderer';

interface CRMPageProps {
  data: FeaturePageDataBySlug['crm'];
}

export default function CRMPage({ data }: CRMPageProps) {
  return <CRMRenderer data={data} />;
}
