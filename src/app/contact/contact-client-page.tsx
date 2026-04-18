'use client';

import { CTARegistryProvider } from '@/components/system/PageEnforcement';
import { Contact } from '@/screens/Contact';

export default function ContactClientPage() {
  return (
    <CTARegistryProvider pageId='page:contact' pageType='page'>
      <Contact />
    </CTARegistryProvider>
  );
}
