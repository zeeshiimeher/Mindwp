import React from 'react';

import { SectionWrapper } from '@/components/reusable/primitives/SectionWrapper';
import { CostRoiCard, SectionIntro } from '@/components/reusable/single';

const DEFAULT_LABELS = {
  investmentCardTitle: 'Investment',
  setupFeeLabel: 'Setup Fee',
  monthlyLabel: 'Monthly Subscription',
  totalFirstYearLabel: 'Total First Year',
  returnCardTitle: 'Return on Investment',
  roiSummaryLabel: 'ROI Summary',
  totalFirstYearUnavailableLabel: 'N/A',
} as const;

export interface CaseStudyInvestmentSectionProps {
  investmentBadgeLabel: string;
  investmentSectionTitle: string;
  investmentFooterNoteHtml: React.ReactNode;
  investment: {
    setup?: string;
    monthly?: string;
    roi?: string;
  };
}

export function CaseStudyInvestmentSection({
  investmentBadgeLabel,
  investmentSectionTitle,
  investmentFooterNoteHtml,
  investment,
}: CaseStudyInvestmentSectionProps) {
  const setupFee: string = investment.setup || '';
  const monthlyFee: string = investment.monthly || '';
  const roi: string = investment.roi || '';

  function parseGBPAmount(input: string): number | null {
    // Accept patterns like: "£499", "£499 one-time", "499", "499/month", "£99/mo".
    // Reject descriptive strings with no digits.
    const match = input.replace(/,/g, '').match(/\b(\d{1,9})\b/);
    if (!match) return null;
    const value = Number.parseInt(match[1] ?? '', 10);
    return Number.isFinite(value) ? value : null;
  }

  const setupValue = parseGBPAmount(setupFee);
  const monthlyValue = parseGBPAmount(monthlyFee);
  const totalFirstYearValue =
    setupValue !== null && monthlyValue !== null ? setupValue + monthlyValue * 12 : null;

  return (
    <SectionWrapper padding='none' className='case-study-detail-investment'>
      <SectionIntro
        badge={investmentBadgeLabel}
        title={investmentSectionTitle}
        cssPrefix='case-study-detail-investment-header'
      />

      <div className='case-study-detail-investment__grid'>
        <CostRoiCard
          variant='cost'
          title={DEFAULT_LABELS.investmentCardTitle}
          items={[
            {
              label: DEFAULT_LABELS.setupFeeLabel,
              value: setupFee,
            },
            {
              label: DEFAULT_LABELS.monthlyLabel,
              value: monthlyFee,
            },
            {
              label: DEFAULT_LABELS.totalFirstYearLabel,
              value:
                totalFirstYearValue !== null
                  ? `£${totalFirstYearValue.toLocaleString()}`
                  : DEFAULT_LABELS.totalFirstYearUnavailableLabel,
            },
          ]}
        />

        <CostRoiCard
          variant='roi'
          title={DEFAULT_LABELS.returnCardTitle}
          summary={roi}
          summaryLabel={DEFAULT_LABELS.roiSummaryLabel}
        />
      </div>

      <div className='case-study-detail-investment__footer'>
        <p className='case-study-detail-investment__footer-text'>{investmentFooterNoteHtml}</p>
      </div>
    </SectionWrapper>
  );
}
