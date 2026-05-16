import { elementorPage } from '@/domains/services/implementation/data/elementor';
import ElementorRenderer from '@/domains/services/implementation/renderers/ElementorRenderer';

export default function ElementorPage() {
  return <ElementorRenderer data={elementorPage} slug='elementor' />;
}
