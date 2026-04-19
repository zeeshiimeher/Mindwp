import type { FeaturePageData } from '@/domains/features/types';
import CalendarsRenderer from '@/domains/features/renderers/CalendarsRenderer';

interface CalendarsPageProps {
  data: FeaturePageData;
}

export default function CalendarsPage({ data }: CalendarsPageProps) {
  return <CalendarsRenderer data={data} />;
}
