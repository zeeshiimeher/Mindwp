import { getInventoryMetadata } from '@/lib/content-quality/inventory';
import { About } from '@/screens/About';

export const dynamic = 'force-static';
export const revalidate = false;

export async function generateMetadata() {
  return getInventoryMetadata('/about');
}

export default function AboutPage() {
  return <About />;
}
