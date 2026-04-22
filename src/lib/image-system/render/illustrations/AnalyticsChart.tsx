import { gradients } from '../design-system/gradients';
import { tokens } from '../design-system/tokens';

export function AnalyticsChart() {
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        width: 500,
        height: 360,
        borderRadius: tokens.radius,
        background: gradients.base,
        border: '1px solid rgba(255,255,255,0.05)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          inset: 0,
          background: gradients.glowPrimary,
        }}
      />
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          inset: 0,
          background: gradients.glowSecondary,
        }}
      />
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          left: 34,
          top: 36,
          width: 432,
          height: 240,
          borderRadius: 24,
          background: 'rgba(15,23,42,0.94)',
        }}
      />
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          left: 58,
          top: 72,
          width: 4,
          height: 156,
          borderRadius: 999,
          background: 'rgba(255,255,255,0.12)',
        }}
      />
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          left: 58,
          top: 224,
          width: 360,
          height: 4,
          borderRadius: 999,
          background: 'rgba(255,255,255,0.12)',
        }}
      />
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          left: 102,
          top: 176,
          width: 66,
          height: 12,
          borderRadius: 999,
          background: 'rgba(255,255,255,0.12)',
        }}
      />
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          left: 168,
          top: 148,
          width: 72,
          height: 12,
          borderRadius: 999,
          background: 'rgba(255,255,255,0.12)',
        }}
      />
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          left: 240,
          top: 126,
          width: 76,
          height: 12,
          borderRadius: 999,
          background: 'rgba(139,92,246,0.85)',
        }}
      />
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          left: 316,
          top: 98,
          width: 78,
          height: 12,
          borderRadius: 999,
          background: 'rgba(139,92,246,0.85)',
        }}
      />
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          left: 34,
          top: 296,
          width: 132,
          height: 44,
          borderRadius: 18,
          background: 'rgba(255,255,255,0.08)',
        }}
      />
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          left: 184,
          top: 296,
          width: 132,
          height: 44,
          borderRadius: 18,
          background: 'rgba(139,92,246,0.22)',
        }}
      />
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          left: 334,
          top: 296,
          width: 132,
          height: 44,
          borderRadius: 18,
          background: 'rgba(255,255,255,0.08)',
        }}
      />
    </div>
  );
}
