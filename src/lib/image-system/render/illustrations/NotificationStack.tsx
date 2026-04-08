import { gradients } from '../design-system/gradients';
import { tokens } from '../design-system/tokens';

export function NotificationStack() {
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
      <div style={{ position: 'absolute', inset: 0, background: gradients.glowPrimary }} />
      <div
        style={{
          position: 'absolute',
          left: 108,
          top: 58,
          width: 284,
          height: 82,
          borderRadius: 22,
          background: 'rgba(255,255,255,0.08)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 92,
          top: 118,
          width: 316,
          height: 92,
          borderRadius: 22,
          background: 'rgba(255,255,255,0.08)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 74,
          top: 180,
          width: 352,
          height: 112,
          borderRadius: 24,
          background: 'rgba(15,23,42,0.96)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 106,
          top: 212,
          width: 40,
          height: 40,
          borderRadius: 999,
          background: 'rgba(139,92,246,0.85)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 166,
          top: 216,
          width: 184,
          height: 14,
          borderRadius: 999,
          background: 'rgba(255,255,255,0.14)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 166,
          top: 240,
          width: 138,
          height: 12,
          borderRadius: 999,
          background: 'rgba(255,255,255,0.1)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 166,
          top: 266,
          width: 100,
          height: 12,
          borderRadius: 999,
          background: 'rgba(139,92,246,0.35)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 356,
          top: 220,
          width: 38,
          height: 38,
          borderRadius: 14,
          background: 'rgba(255,255,255,0.12)',
        }}
      />
    </div>
  );
}
