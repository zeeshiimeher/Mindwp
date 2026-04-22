'use client';

import { CTARegistryProvider } from '@/components/system/PageEnforcement';
import { Contact } from '@/screens/Contact';

type ContactClientPageProps = {
  initialSystem?: string;
  initialSource?: string;
};

export default function ContactClientPage({
  initialSystem,
  initialSource,
}: ContactClientPageProps) {
  return (
    <CTARegistryProvider pageId='page:contact' pageType='page'>
      <Contact initialSystem={initialSystem} initialSource={initialSource} />
    </CTARegistryProvider>
  );
}
