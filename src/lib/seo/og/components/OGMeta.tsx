import { OG_TOKENS } from '@/lib/seo/og/components/OGContainer';

type OGMetaProps = {
  eyebrow?: string;
  tone?: 'light' | 'dark';
};

export function OGMeta({ eyebrow, tone = 'dark' }: OGMetaProps) {
  const darkTone = tone === 'dark';

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: OG_TOKENS.spacing.md,
      }}
    >
      <div
        style={{
          padding: `${OG_TOKENS.spacing.xs}px ${OG_TOKENS.spacing.sm}px`,
          borderRadius: OG_TOKENS.radius.pill,
          border: `2px solid ${darkTone ? 'rgba(15, 23, 42, 0.18)' : 'rgba(255, 255, 255, 0.28)'}`,
          color: darkTone ? OG_TOKENS.colors.ink : OG_TOKENS.colors.white,
          background: darkTone ? 'rgba(255, 255, 255, 0.58)' : 'rgba(15, 23, 42, 0.22)',
          ...OG_TOKENS.typography.eyebrow,
        }}
      >
        {eyebrow ?? 'MINDWP'}
      </div>
      <div
        style={{
          ...OG_TOKENS.typography.meta,
          color: darkTone ? OG_TOKENS.colors.inkSoft : OG_TOKENS.colors.cloud,
        }}
      >
        MINDWP
      </div>
    </div>
  );
}
