import { notFound } from 'next/navigation';

import { CTARegistryProvider } from '@/components/system/PageEnforcement';
import { SmartCTA } from '@/components/system/SmartCTA';
import { resolveCtaLabel } from '@/config/ctaLabels';
import { getIsSystemEnabled } from '@/system/isSystemEnabled';

const SMART_CTA_CASES = [
  {
    testId: 'smart-website-cta',
    system: 'smart-website-systems',
    pageType: 'service',
    slug: 'cta-label-contract-smart-website',
  },
  {
    testId: 'ai-lead-handling-cta',
    system: 'ai-lead-handling',
    pageType: 'service',
    slug: 'cta-label-contract-ai-lead-handling',
  },
  {
    testId: 'revenue-growth-cta',
    system: 'revenue-growth',
    pageType: 'service',
    slug: 'cta-label-contract-revenue-growth',
  },
] as const;

export default function CtaLabelContractPage() {
  if (!getIsSystemEnabled()) {
    notFound();
  }

  return (
    <main className='l-container l-section' data-testid='cta-label-contract-page'>
      <h1>CTA Label Contract</h1>
      <p>Deterministic SmartCTA coverage for label and href consistency.</p>

      <div style={{ display: 'grid', gap: '2rem' }}>
        {SMART_CTA_CASES.map(testCase => (
          <CTARegistryProvider
            key={testCase.testId}
            pageId={`service:${testCase.slug}`}
            pageType='service'
          >
            <div data-testid={testCase.testId}>
              <SmartCTA
                system={testCase.system}
                pageType={testCase.pageType}
                slug={testCase.slug}
                title={`Contract case: ${testCase.system}`}
                description='Deterministic SmartCTA contract validation.'
              />
            </div>
          </CTARegistryProvider>
        ))}

        <div data-testid='fallback-labels'>
          <p data-testid='fallback-unknown'>
            {resolveCtaLabel({ system: 'unknown-system', pageType: 'service' })}
          </p>
          <p data-testid='fallback-empty'>
            {resolveCtaLabel({ system: '', pageType: 'resource' })}
          </p>
        </div>
      </div>
    </main>
  );
}
