import { bricksBuilderPage } from '@/domains/services/data/bricks-builder';
import { BricksBuilderRenderer } from '@/domains/services/renderers/BricksBuilderRenderer';

export default function BricksBuilderPage() {
  return <BricksBuilderRenderer data={bricksBuilderPage} slug='bricks-builder' />;
}
