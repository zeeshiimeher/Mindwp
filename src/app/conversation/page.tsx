import { redirect } from 'next/navigation';

import { buildContactHref } from '@/lib/contact/contactHref';

export default function Page() {
  redirect(
    buildContactHref({
      system: 'smart-website-systems',
      sourceType: 'global',
      slug: 'conversation',
    })
  );
}
