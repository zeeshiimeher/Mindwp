import { gradients } from '../design-system/gradients';

export function DashboardUI() {
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
      <div style={{ display: 'flex', position: 'absolute', left: 24, top: 22, width: 404, height: 42, borderRadius: 16, background: 'rgba(255,255,255,0.06)' }} />
      <div style={{ display: 'flex', position: 'absolute', left: 42, top: 36, width: 104, height: 12, borderRadius: 999, background: 'rgba(255,255,255,0.12)' }} />
      <div style={{ display: 'flex', position: 'absolute', right: 42, top: 31, width: 62, height: 22, borderRadius: 11, background: 'rgba(255,255,255,0.09)' }} />
      <div style={{ display: 'flex', position: 'absolute', left: 34, top: 82, width: 114, height: 80, borderRadius: 18, background: 'rgba(255,255,255,0.06)' }} />
      <div style={{ display: 'flex', position: 'absolute', left: 160, top: 82, width: 114, height: 80, borderRadius: 18, background: 'rgba(139,92,246,0.18)' }} />
      <div style={{ display: 'flex', position: 'absolute', left: 286, top: 82, width: 132, height: 80, borderRadius: 18, background: 'rgba(255,255,255,0.06)' }} />
      <div style={{ display: 'flex', position: 'absolute', left: 34, top: 176, width: 252, height: 104, borderRadius: 20, background: 'rgba(255,255,255,0.04)' }} />
      <div style={{ display: 'flex', position: 'absolute', left: 298, top: 176, width: 120, height: 104, borderRadius: 20, background: 'rgba(255,255,255,0.05)' }} />
      <div style={{ display: 'flex', position: 'absolute', left: 56, top: 196, width: 98, height: 12, borderRadius: 999, background: 'rgba(255,255,255,0.1)' }} />
      <div style={{ display: 'flex', position: 'absolute', left: 56, top: 220, width: 46, height: 42, borderRadius: 14, background: 'rgba(255,255,255,0.12)' }} />
      <div style={{ display: 'flex', position: 'absolute', left: 114, top: 208, width: 46, height: 54, borderRadius: 14, background: 'rgba(255,255,255,0.12)' }} />
      <div style={{ display: 'flex', position: 'absolute', left: 172, top: 194, width: 46, height: 68, borderRadius: 14, background: 'rgba(139,92,246,0.8)' }} />
      <div style={{ display: 'flex', position: 'absolute', left: 230, top: 214, width: 34, height: 48, borderRadius: 14, background: 'rgba(56,189,248,0.22)' }} />
      <div style={{ display: 'flex', position: 'absolute', left: 316, top: 198, width: 78, height: 12, borderRadius: 999, background: 'rgba(255,255,255,0.12)' }} />
      <div style={{ display: 'flex', position: 'absolute', left: 316, top: 224, width: 58, height: 10, borderRadius: 999, background: 'rgba(255,255,255,0.08)' }} />
      <div style={{ display: 'flex', position: 'absolute', left: 316, top: 246, width: 64, height: 18, borderRadius: 9, background: 'rgba(139,92,246,0.32)' }} />
    </div>
  );
}