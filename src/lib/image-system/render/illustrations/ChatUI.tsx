import { gradients } from '../design-system/gradients';
import { tokens } from '../design-system/tokens';

export function ChatUI() {
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        width: 420,
        height: 300,
        borderRadius: 24,
        background: gradients.base,
        border: '1px solid rgba(255,255,255,0.08)',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, background: gradients.glowPrimary }} />
      <div style={{ position: 'absolute', left: 26, top: 24, width: 368, height: 42, borderRadius: 14, background: 'rgba(255,255,255,0.08)' }} />
      <div style={{ position: 'absolute', left: 32, top: 92, width: 188, height: 56, borderRadius: 18, background: 'rgba(255,255,255,0.1)' }} />
      <div style={{ position: 'absolute', left: 160, top: 168, width: 228, height: 62, borderRadius: 18, background: 'rgba(139,92,246,0.34)' }} />
      <div style={{ position: 'absolute', left: 32, top: 248, width: 152, height: 14, borderRadius: 999, background: 'rgba(255,255,255,0.1)' }} />
      <div style={{ position: 'absolute', left: 248, top: 248, width: 110, height: 14, borderRadius: 999, background: 'rgba(255,255,255,0.14)' }} />
      <div style={{ position: 'absolute', right: 30, top: 100, width: 66, height: 66, borderRadius: 999, background: 'rgba(15,23,42,0.9)', border: `1px solid ${tokens.colors.accent}55` }} />
    </div>
  );
}