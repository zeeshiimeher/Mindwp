import { IndustryDetailResetRenderer } from '@/domains/industries/renderers/IndustryDetailResetRenderer';
import type { IndustryDetailRendererProps } from '@/domains/industries/types';

export function PhysiotherapyClinicsIndustryRenderer(props: IndustryDetailRendererProps) {
  return <IndustryDetailResetRenderer {...props} />;
}
