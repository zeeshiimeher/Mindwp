import { notFound, redirect } from 'next/navigation';

import { getIsSystemEnabled } from '@/system/isSystemEnabled';

export default function SystemDashboardAliasPage() {
  if (!getIsSystemEnabled()) {
    notFound();
  }

  redirect('/dev/system-dashboard');
}
