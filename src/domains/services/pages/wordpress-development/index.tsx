import { wordpressDevelopmentPage } from '@/domains/services/data/wordpress-development';
import { WordPressDevelopmentRenderer } from '@/domains/services/renderers/WordPressDevelopmentRenderer';

export default function WordPressDevelopmentPage() {
  return (
    <WordPressDevelopmentRenderer data={wordpressDevelopmentPage} slug='wordpress-development' />
  );
}
