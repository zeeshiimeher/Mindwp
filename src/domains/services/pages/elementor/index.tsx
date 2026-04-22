import { elementorPage } from '@/domains/services/data/elementor';
import { ElementorRenderer } from '@/domains/services/renderers/ElementorRenderer';

export default function ElementorPage() {
  return <ElementorRenderer data={elementorPage} slug='elementor' />;
}
