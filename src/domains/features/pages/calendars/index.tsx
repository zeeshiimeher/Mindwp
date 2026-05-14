import type { FeaturePageDataBySlug } from '@/domains/features/pageData';
import CalendarsRenderer from '@/domains/features/renderers/CalendarsRenderer';

interface CalendarsPageProps {
  data: FeaturePageDataBySlug['calendars'];
}

export default function CalendarsPage({ data }: CalendarsPageProps) {
  return <CalendarsRenderer data={data} />;
}
