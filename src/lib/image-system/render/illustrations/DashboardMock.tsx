import { gradients } from '../design-system/gradients';
import { tokens } from '../design-system/tokens';

export function DashboardMock() {
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
          left: 28,
          top: 28,
          width: 444,
          height: 52,
          borderRadius: 16,
          background: 'rgba(255,255,255,0.08)',
        }}
      />
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          left: 28,
          top: 104,
          width: 124,
          height: 84,
          borderRadius: 20,
          background: 'rgba(255,255,255,0.08)',
        }}
      />
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          left: 168,
          top: 104,
          width: 124,
          height: 84,
          borderRadius: 20,
          background: 'rgba(139,92,246,0.22)',
        }}
      />
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          left: 308,
          top: 104,
          width: 164,
          height: 84,
          borderRadius: 20,
          background: 'rgba(255,255,255,0.08)',
        }}
      />
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          left: 28,
          top: 214,
          width: 444,
          height: 118,
          borderRadius: 22,
          background: 'rgba(15,23,42,0.92)',
        }}
      />
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          left: 56,
          top: 278,
          width: 64,
          height: 26,
          borderRadius: 999,
          background: 'rgba(255,255,255,0.08)',
        }}
      />
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          left: 148,
          top: 248,
          width: 44,
          height: 56,
          borderRadius: 14,
          background: 'rgba(255,255,255,0.12)',
        }}
      />
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          left: 212,
          top: 232,
          width: 44,
          height: 72,
          borderRadius: 14,
          background: 'rgba(255,255,255,0.16)',
        }}
      />
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          left: 276,
          top: 214,
          width: 44,
          height: 90,
          borderRadius: 14,
          background: 'rgba(139,92,246,0.8)',
        }}
      />
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          left: 340,
          top: 244,
          width: 44,
          height: 60,
          borderRadius: 14,
          background: 'rgba(255,255,255,0.14)',
        }}
      />
    </div>
  );
}
