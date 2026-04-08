import { SmartCTA } from '@/components/system/SmartCTA';
import { resolveCtaLabel } from '@/config/cta-labels';

const SMART_CTA_CASES = [
  {
    testId: 'smart-website-cta',
    system: 'smart-website-systems',
    slug: 'cta-label-contract-smart-website',
  },
  {
    testId: 'ai-lead-handling-cta',
    system: 'ai-lead-handling',
    slug: 'cta-label-contract-ai-lead-handling',
  },
  {
    testId: 'revenue-growth-cta',
    system: 'revenue-growth',
    slug: 'cta-label-contract-revenue-growth',
  },
] as const;

export default function CtaLabelContractPage() {
  return (
    <main className='l-container l-section' data-testid='cta-label-contract-page'>
      <h1>CTA Label Contract</h1>
      <p>Deterministic SmartCTA coverage for label and href consistency.</p>

      <div style={{ display: 'grid', gap: '2rem' }}>
        {SMART_CTA_CASES.map(testCase => (
          <section key={testCase.testId} data-testid={testCase.testId}>
            <SmartCTA
              pageType='service'
              system={testCase.system}
              slug={testCase.slug}
              title={`Contract case: ${testCase.system}`}
              description='Deterministic SmartCTA contract validation.'
            />
          </section>
        ))}

        <section data-testid='fallback-labels'>
          <p data-testid='fallback-unknown'>{resolveCtaLabel('unknown-system')}</p>
          <p data-testid='fallback-empty'>{resolveCtaLabel('')}</p>
        </section>
      </div>
    </main>
  );
}
