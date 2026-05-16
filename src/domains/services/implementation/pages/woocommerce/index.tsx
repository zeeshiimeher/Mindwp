import { woocommercePage } from '@/domains/services/implementation/data/woocommerce';
import WooCommerceRenderer from '@/domains/services/implementation/renderers/WooCommerceRenderer';

export default function WooCommercePage() {
  return <WooCommerceRenderer data={woocommercePage} slug='woocommerce' />;
}
