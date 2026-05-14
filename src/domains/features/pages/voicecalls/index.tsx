import type { FeaturePageDataBySlug } from '@/domains/features/pageData';
import VoiceCallsRenderer from '@/domains/features/renderers/VoiceCallsRenderer';

interface VoiceCallsPageProps {
  data: FeaturePageDataBySlug['voicecalls'];
}

export default function VoiceCallsPage({ data }: VoiceCallsPageProps) {
  return <VoiceCallsRenderer data={data} />;
}
