import { gradients } from '../design-system/gradients';

export function FlowUI() {
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        width: 452,
        height: 322,
        overflow: 'hidden',
      }}
    >
      <div style={{ display: 'flex', position: 'absolute', inset: 0, borderRadius: 22, background: gradients.glowPrimary }} />
      <div style={{ display: 'flex', position: 'absolute', inset: 8, borderRadius: 22, background: 'rgba(8,15,32,0.72)' }} />
      <div style={{ display: 'flex', position: 'absolute', left: 46, top: 48, width: 112, height: 58, borderRadius: 18, background: 'rgba(255,255,255,0.08)' }} />
      <div style={{ display: 'flex', position: 'absolute', left: 170, top: 48, width: 112, height: 58, borderRadius: 18, background: 'rgba(139,92,246,0.28)' }} />
      <div style={{ display: 'flex', position: 'absolute', left: 294, top: 48, width: 112, height: 58, borderRadius: 18, background: 'rgba(255,255,255,0.08)' }} />
      <div style={{ display: 'flex', position: 'absolute', left: 158, top: 74, width: 12, height: 4, borderRadius: 999, background: 'rgba(255,255,255,0.18)' }} />
      <div style={{ display: 'flex', position: 'absolute', left: 282, top: 74, width: 12, height: 4, borderRadius: 999, background: 'rgba(255,255,255,0.18)' }} />
      <div style={{ display: 'flex', position: 'absolute', left: 214, top: 106, width: 4, height: 48, borderRadius: 999, background: 'rgba(255,255,255,0.18)' }} />
      <div style={{ display: 'flex', position: 'absolute', left: 138, top: 170, width: 160, height: 82, borderRadius: 22, background: 'rgba(255,255,255,0.05)' }} />
      <div style={{ display: 'flex', position: 'absolute', left: 320, top: 170, width: 86, height: 82, borderRadius: 22, background: 'rgba(255,255,255,0.05)' }} />
      <div style={{ display: 'flex', position: 'absolute', left: 168, top: 192, width: 100, height: 12, borderRadius: 999, background: 'rgba(255,255,255,0.1)' }} />
      <div style={{ display: 'flex', position: 'absolute', left: 168, top: 216, width: 66, height: 10, borderRadius: 999, background: 'rgba(255,255,255,0.08)' }} />
      <div style={{ display: 'flex', position: 'absolute', left: 340, top: 192, width: 44, height: 44, borderRadius: 14, background: 'rgba(56,189,248,0.2)' }} />
      <div style={{ display: 'flex', position: 'absolute', left: 204, top: 142, width: 24, height: 24, borderRadius: 999, background: 'rgba(139,92,246,0.82)' }} />
    </div>
  );
}