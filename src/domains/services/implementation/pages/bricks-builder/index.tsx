import { bricksBuilderPage } from '@/domains/services/implementation/data/bricks-builder';
import BricksBuilderRenderer from '@/domains/services/implementation/renderers/BricksBuilderRenderer';

export default function BricksBuilderPage() {
  return <BricksBuilderRenderer data={bricksBuilderPage} slug='bricks-builder' />;
}
