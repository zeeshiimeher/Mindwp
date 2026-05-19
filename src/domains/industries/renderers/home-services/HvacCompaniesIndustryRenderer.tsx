import { IndustryDetailResetRenderer } from '@/domains/industries/renderers/IndustryDetailResetRenderer';
import type { IndustryDetailRendererProps } from '@/domains/industries/types';

export function HvacCompaniesIndustryRenderer(props: IndustryDetailRendererProps) {
  return <IndustryDetailResetRenderer {...props} />;
}
