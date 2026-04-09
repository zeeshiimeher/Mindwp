import IndustriesLanding from '@/domains/industries/pages';
import { ensureGraphInitialized } from '@/domains/init/ensureGraphInitialized';
import { getInventoryMetadata } from '@/lib/content-quality/inventory';

export const dynamic = 'force-static';
export const revalidate = false;

export async function generateMetadata() {
  await ensureGraphInitialized();
  const reactModule = await import('react');
  globalThis.React ??= reactModule.default;

  const { getContentGraph } = await import('../../lib/content-graph/registry');
  const categoryNodes = Object.values(getContentGraph()).filter(
    node => node.type === 'industry-category'
  );

  const hasInvalidCategoryPath = categoryNodes.some(node => !node.path.startsWith('/industries/'));
  if (hasInvalidCategoryPath) {
    throw new Error('[industries-index] invalid industry category path in contentGraph');
  }

  return getInventoryMetadata('/industries');
}

export default function IndustriesPage() {
  return <IndustriesLanding />;
}
