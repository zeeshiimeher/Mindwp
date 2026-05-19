import { IndustryCategoryResetRenderer } from '@/domains/industries/renderers/IndustryCategoryResetRenderer';
import type { IndustryCategoryRendererProps } from '@/domains/industries/types';

export function HealthcarePracticesIndustryRenderer(props: IndustryCategoryRendererProps) {
  return <IndustryCategoryResetRenderer {...props} />;
}
