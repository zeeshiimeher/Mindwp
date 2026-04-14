import { conversionLayerPage } from '@/domains/services/data/conversion-layer';
import { ConversionLayerRenderer } from '@/domains/services/renderers/ConversionLayerRenderer';

export default function ConversionLayerPage() {
  return <ConversionLayerRenderer data={conversionLayerPage} slug='conversion-layer' />;
}