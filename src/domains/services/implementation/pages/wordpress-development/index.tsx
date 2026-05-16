import { wordpressDevelopmentPage } from '@/domains/services/implementation/data/wordpress-development';
import WordPressDevelopmentRenderer from '@/domains/services/implementation/renderers/WordPressDevelopmentRenderer';

export default function WordPressDevelopmentPage() {
  return (
    <WordPressDevelopmentRenderer data={wordpressDevelopmentPage} slug='wordpress-development' />
  );
}
