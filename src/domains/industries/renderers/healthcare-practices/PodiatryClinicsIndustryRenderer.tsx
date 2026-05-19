import { IndustryDetailResetRenderer } from '@/domains/industries/renderers/IndustryDetailResetRenderer';
import type { IndustryDetailRendererProps } from '@/domains/industries/types';

export function PodiatryClinicsIndustryRenderer(props: IndustryDetailRendererProps) {
  return <IndustryDetailResetRenderer {...props} />;
}
