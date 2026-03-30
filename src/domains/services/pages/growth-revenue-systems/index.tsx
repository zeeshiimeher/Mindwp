import { growthRevenueSystemsPage } from '@/domains/services/data/growth-revenue-systems';
import { GrowthRevenueSystemsRenderer } from '@/domains/services/renderers/GrowthRevenueSystemsRenderer';

export default function GrowthRevenueSystemsPage() {
  return (
    <GrowthRevenueSystemsRenderer data={growthRevenueSystemsPage} slug='growth-revenue-systems' />
  );
}
