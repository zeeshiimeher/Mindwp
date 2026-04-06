import type { RenderMetrics } from '../renderer';

export function Title({ title, metrics }: { title: string; metrics: RenderMetrics }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
        maxWidth: metrics.maxTextWidth,
        color: '#ffffff',
        fontWeight: 700,
        lineHeight: `${metrics.lineHeight}px`,
        letterSpacing: `${metrics.letterSpacing}px`,
        textShadow: '0 6px 18px rgba(0, 0, 0, 0.35)',
      }}
    >
      {metrics.titleLines.map((line, index) => (
        <div
          key={`${line}-${index}`}
          style={{
            display: 'flex',
            flexWrap: 'nowrap',
            fontSize: metrics.fontSize,
            whiteSpace: 'pre',
          }}
        >
          {line}
        </div>
      ))}
    </div>
  );
}