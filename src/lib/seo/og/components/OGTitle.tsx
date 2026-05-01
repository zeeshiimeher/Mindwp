import { OG_TOKENS } from '@/lib/seo/og/components/OGContainer';

type OGTitleProps = {
  title: string;
  subtitle?: string;
  compact?: boolean;
  color?: string;
  subtitleColor?: string;
  maxWidth?: number | string;
};

export function OGTitle({
  title,
  subtitle,
  compact = false,
  color,
  subtitleColor,
  maxWidth = '100%',
}: OGTitleProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: OG_TOKENS.spacing.md,
        maxWidth,
      }}
    >
      <div
        style={{
          ...(compact ? OG_TOKENS.typography.titleCompact : OG_TOKENS.typography.title),
          color: color ?? OG_TOKENS.colors.ink,
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {title}
      </div>
      {subtitle ? (
        <div
          style={{
            ...OG_TOKENS.typography.subtitle,
            color: subtitleColor ?? OG_TOKENS.colors.inkSoft,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {subtitle}
        </div>
      ) : null}
    </div>
  );
}
