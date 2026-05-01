import type { CSSProperties, ReactNode } from 'react';

export const OG_CANVAS = {
  width: 1200,
  height: 630,
} as const;

export const OG_TOKENS = {
  colors: {
    ink: '#0F172A',
    inkSoft: '#334155',
    paper: '#F6F3EB',
    paperStrong: '#E8E1D0',
    slate: '#111827',
    slateSoft: '#1F2937',
    steel: '#CBD5E1',
    cloud: '#E2E8F0',
    cyan: '#1D4ED8',
    teal: '#0F766E',
    amber: '#B45309',
    sand: '#F4E7C8',
    white: '#FFFFFF',
  },
  spacing: {
    xs: 12,
    sm: 20,
    md: 28,
    lg: 40,
    xl: 56,
    xxl: 72,
  },
  radius: {
    panel: 34,
    pill: 999,
  },
  typography: {
    eyebrow: {
      fontSize: 20,
      letterSpacing: '0.18em',
      fontWeight: 700,
      textTransform: 'uppercase' as const,
    },
    title: {
      fontSize: 68,
      lineHeight: 1.02,
      fontWeight: 800,
      letterSpacing: '-0.05em',
    },
    titleCompact: {
      fontSize: 60,
      lineHeight: 1.04,
      fontWeight: 800,
      letterSpacing: '-0.05em',
    },
    subtitle: {
      fontSize: 28,
      lineHeight: 1.34,
      fontWeight: 500,
      letterSpacing: '-0.02em',
    },
    meta: {
      fontSize: 18,
      lineHeight: 1.2,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase' as const,
    },
  },
} as const;

type OGContainerProps = {
  background: string;
  children: ReactNode;
  accent?: ReactNode;
  borderColor?: string;
};

export function OGContainer({ background, children, accent, borderColor }: OGContainerProps) {
  const frameStyle: CSSProperties = {
    width: OG_CANVAS.width,
    height: OG_CANVAS.height,
    display: 'flex',
    position: 'relative',
    overflow: 'hidden',
    background,
    color: OG_TOKENS.colors.ink,
    fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
  };

  const panelStyle: CSSProperties = {
    position: 'absolute',
    inset: 22,
    borderRadius: OG_TOKENS.radius.panel,
    border: `2px solid ${borderColor ?? 'rgba(15, 23, 42, 0.1)'}`,
    overflow: 'hidden',
  };

  const contentStyle: CSSProperties = {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    width: '100%',
    height: '100%',
    padding: OG_TOKENS.spacing.xxl,
  };

  return (
    <div style={frameStyle}>
      <div style={panelStyle}>
        {accent ? <div style={{ position: 'absolute', inset: 0 }}>{accent}</div> : null}
        <div style={contentStyle}>{children}</div>
      </div>
    </div>
  );
}
