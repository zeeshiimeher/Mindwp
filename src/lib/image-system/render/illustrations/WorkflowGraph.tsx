import { gradients } from '../design-system/gradients';
import { tokens } from '../design-system/tokens';

export function WorkflowGraph() {
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
          left: 66,
          top: 68,
          width: 128,
          height: 70,
          borderRadius: 22,
          background: 'rgba(255,255,255,0.08)',
        }}
      />
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          left: 308,
          top: 68,
          width: 128,
          height: 70,
          borderRadius: 22,
          background: 'rgba(139,92,246,0.22)',
        }}
      />
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          left: 186,
          top: 222,
          width: 128,
          height: 70,
          borderRadius: 22,
          background: 'rgba(255,255,255,0.08)',
        }}
      />
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          left: 194,
          top: 102,
          width: 114,
          height: 4,
          borderRadius: 999,
          background: 'rgba(255,255,255,0.16)',
        }}
      />
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          left: 248,
          top: 138,
          width: 4,
          height: 84,
          borderRadius: 999,
          background: 'rgba(255,255,255,0.16)',
        }}
      />
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          left: 238,
          top: 212,
          width: 24,
          height: 24,
          borderRadius: 999,
          background: 'rgba(139,92,246,0.85)',
        }}
      />
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          left: 104,
          top: 96,
          width: 52,
          height: 12,
          borderRadius: 999,
          background: 'rgba(255,255,255,0.12)',
        }}
      />
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          left: 346,
          top: 96,
          width: 52,
          height: 12,
          borderRadius: 999,
          background: 'rgba(255,255,255,0.12)',
        }}
      />
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          left: 224,
          top: 248,
          width: 52,
          height: 12,
          borderRadius: 999,
          background: 'rgba(255,255,255,0.12)',
        }}
      />
    </div>
  );
}
