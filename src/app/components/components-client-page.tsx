'use client';

import dynamic from 'next/dynamic';

const ComponentLibrary = dynamic(
  () => import('@/screens/ComponentLibrary').then(mod => mod.ComponentLibrary),
  {
    ssr: false,
    loading: () => <div className='l-section' aria-hidden='true' />,
  }
);

export default function ComponentsClientPage() {
  return <ComponentLibrary />;
}
