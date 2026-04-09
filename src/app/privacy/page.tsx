import { getInventoryMetadata } from '@/lib/content-quality/inventory';
import PrivacyPolicy from '@/screens/PrivacyPolicy';

export const dynamic = 'force-static';
export const revalidate = false;

export async function generateMetadata() {
  return getInventoryMetadata('/privacy');
}

export default function Page() {
  return <PrivacyPolicy />;
}
