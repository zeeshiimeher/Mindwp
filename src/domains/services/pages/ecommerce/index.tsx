import { woocommercePage } from '@/domains/services/data/woocommerce';
import { WooCommerceRenderer } from '@/domains/services/renderers/WooCommerceRenderer';

export default function EcommercePage() {
  return <WooCommerceRenderer data={woocommercePage} slug='ecommerce' />;
}
