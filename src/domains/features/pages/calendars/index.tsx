import CalendarsRenderer from '@/domains/features/renderers/CalendarsRenderer';
import type { FeaturePageData } from '@/domains/features/types';

interface CalendarsPageProps {
  data: FeaturePageData;
}

export default function CalendarsPage({ data }: CalendarsPageProps) {
  return <CalendarsRenderer data={data} />;
}
