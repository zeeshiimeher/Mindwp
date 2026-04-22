import { notFound } from 'next/navigation';

import { readDashboardBundle } from '@/lib/dev/dashboard-reports';
import { resolveSEO } from '@/lib/seo/seoResolver';
import { getIsSystemEnabled } from '@/system/isSystemEnabled';

import PureSystemDashboard from './PureSystemDashboard';

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  return resolveSEO({ path: '/dev/system-dashboard', type: 'static', slug: 'system-dashboard' });
}

export default function SystemDashboardPage() {
  if (!getIsSystemEnabled()) {
    notFound();
  }

  const reports = readDashboardBundle();

  if (!reports) {
    return (
      <div className='mx-auto max-w-6xl px-6 py-8'>
        <div className='rounded-[28px] border border-stone-200 bg-white p-5 shadow-[0_20px_60px_rgba(28,25,23,0.08)]'>
          <h1 className='text-lg font-semibold text-stone-950'>System Dashboard</h1>
          <p className='mt-2 text-sm text-stone-600'>
            Run <code>npm run system:full</code> and reload this page.
          </p>
        </div>
      </div>
    );
  }

  return <PureSystemDashboard reports={reports} />;
}
