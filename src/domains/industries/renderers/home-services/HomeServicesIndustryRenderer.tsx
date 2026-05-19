import { IndustryCategoryResetRenderer } from '@/domains/industries/renderers/IndustryCategoryResetRenderer';
import type { IndustryCategoryRendererProps } from '@/domains/industries/types';

export function HomeServicesIndustryRenderer(props: IndustryCategoryRendererProps) {
  return <IndustryCategoryResetRenderer {...props} />;
}
