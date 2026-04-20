import type { PageIntelligenceItem, PriorityType } from './system-report';

export const typeReasonMap: Record<PriorityType, string> = {
  conversion: 'Conversion path is weaker than it should be.',
  cta: 'Call-to-action pattern needs attention.',
  contract: 'Required page structure is drifting.',
  content: 'Page content is not supporting the next decision clearly.',
  lint: 'Implementation cleanup is still visible in the run.',
};

export const typeHintMap: Record<PriorityType, string> = {
  conversion: 'Tighten the next action on the affected page.',
  cta: 'Standardize the CTA and restore the lead path.',
  contract: 'Bring the page back to the expected structure.',
  content: 'Clarify the page message and support content.',
  lint: 'Clean the implementation issue before it spreads.',
};

const pageTypeMap: Array<{ type: PriorityType; label: string; matchers: string[] }> = [
  { type: 'cta', label: 'CTA', matchers: ['cta', 'call to action', 'lead capture'] },
  { type: 'conversion', label: 'Conversion', matchers: ['conversion', 'capture path', 'lead'] },
  {
    type: 'contract',
    label: 'Structure',
    matchers: ['contract', 'structure', 'template', 'domain'],
  },
  { type: 'content', label: 'Content', matchers: ['content', 'copy', 'coverage', 'quality'] },
  { type: 'lint', label: 'Implementation', matchers: ['lint', 'typecheck', 'implementation'] },
];

export function detectPrimaryIssueType(page: PageIntelligenceItem): PriorityType {
  const joined = page.issues.join(' ').toLowerCase();

  if (page.cta.issues > 0) {
    return 'cta';
  }

  for (const entry of pageTypeMap) {
    if (entry.matchers.some(matcher => joined.includes(matcher))) {
      return entry.type;
    }
  }

  if (page.content.status !== 'OK') {
    return 'content';
  }

  return 'conversion';
}

export function issueLabel(type: PriorityType) {
  return pageTypeMap.find(entry => entry.type === type)?.label ?? 'Attention';
}
