import { getInventoryMetadata } from '@/lib/content-quality/inventory';
import TermsConditions from '@/screens/TermsConditions';

export const dynamic = 'force-static';
export const revalidate = false;

export async function generateMetadata() {
  return getInventoryMetadata('/terms');
}

export default function Page() {
  return <TermsConditions />;
}
