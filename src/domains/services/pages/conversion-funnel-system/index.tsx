import { conversionFunnelSystemPage } from '@/domains/services/data/conversion-funnel-system';
import { ConversionFunnelSystemRenderer } from '@/domains/services/renderers/ConversionFunnelSystemRenderer';

export default function ConversionFunnelSystemPage() {
  return (
    <ConversionFunnelSystemRenderer
      data={conversionFunnelSystemPage}
      slug='conversion-funnel-system'
    />
  );
}
