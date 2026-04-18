import IndustriesLanding from '@/domains/industries/pages';
import { getInitializedContentGraph } from '@/domains/init/ensureGraphInitialized';
import { getInventoryMetadata } from '@/lib/content-quality/inventory';

export const dynamic = 'force-static';
export const revalidate = false;

const industryCategoryNodesPromise = getInitializedContentGraph().then(graph =>
  Object.values(graph).filter(node => node.type === 'industry-category')
);

export async function generateMetadata() {
  const categoryNodes = await industryCategoryNodesPromise;

  const hasInvalidCategoryPath = categoryNodes.some(node => !node.path.startsWith('/industries/'));
  if (hasInvalidCategoryPath) {
    throw new Error('[industries-index] invalid industry category path in contentGraph');
  }

  return getInventoryMetadata('/industries');
}

export default async function IndustriesPage() {
  return <IndustriesLanding />;
}
