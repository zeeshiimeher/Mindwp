import { tokens } from '../design-system/tokens';
import type { RenderMetrics } from '../renderer';

export function Title({ title, metrics }: { title: string; metrics: RenderMetrics }) {
  void title;
  const isCenterAligned = metrics.textAlign === 'center';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        width: '100%',
        maxWidth: metrics.maxTextWidth,
        color: metrics.titleColor,
        fontWeight: tokens.typography.title.fontWeight,
        lineHeight: `${metrics.lineHeight}px`,
        letterSpacing: `${tokens.typography.title.letterSpacing}px`,
        textShadow: '0 6px 18px rgba(0, 0, 0, 0.35)',
        wordBreak: 'break-word',
        textAlign: metrics.textAlign,
      }}
    >
      {metrics.titleLines.map((line, index) =>
        isCenterAligned ? (
          <div
            key={`${line}-${index}`}
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
              fontSize: metrics.fontSize,
              lineHeight: `${metrics.lineHeight}px`,
              whiteSpace: 'nowrap',
            }}
          >
            <div
              style={{
                display: 'flex',
                textAlign: 'center',
                whiteSpace: 'nowrap',
              }}
            >
              {line}
            </div>
          </div>
        ) : (
          <div
            key={`${line}-${index}`}
            style={{
              display: 'block',
              width: '100%',
              fontSize: metrics.fontSize,
              lineHeight: `${metrics.lineHeight}px`,
              whiteSpace: 'nowrap',
            }}
          >
            {line}
          </div>
        )
      )}
    </div>
  );
}
