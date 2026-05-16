import { divi5Page } from '@/domains/services/implementation/data/divi5';
import Divi5Renderer from '@/domains/services/implementation/renderers/Divi5Renderer';

export default function Divi5Page() {
  return <Divi5Renderer data={divi5Page} slug='divi5' />;
}
