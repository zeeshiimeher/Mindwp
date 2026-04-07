import { gradients } from '../design-system/gradients';

export function PipelineUI() {
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
      <div style={{ position: 'absolute', inset: 0, borderRadius: 22, background: gradients.glowPrimary }} />
      <div style={{ display: 'flex', position: 'absolute', inset: 8, borderRadius: 22, background: 'rgba(8,15,32,0.72)' }} />
      <div style={{ display: 'flex', position: 'absolute', left: 24, top: 22, width: 404, height: 42, borderRadius: 16, background: 'rgba(255,255,255,0.06)' }} />
      <div style={{ display: 'flex', position: 'absolute', left: 44, top: 36, width: 122, height: 12, borderRadius: 999, background: 'rgba(255,255,255,0.12)' }} />
      <div style={{ display: 'flex', position: 'absolute', right: 44, top: 31, width: 78, height: 22, borderRadius: 11, background: 'rgba(139,92,246,0.32)' }} />
      <div style={{ display: 'flex', position: 'absolute', left: 34, top: 82, width: 86, height: 194, borderRadius: 18, background: 'rgba(255,255,255,0.04)' }} />
      <div style={{ display: 'flex', position: 'absolute', left: 128, top: 82, width: 86, height: 194, borderRadius: 18, background: 'rgba(255,255,255,0.04)' }} />
      <div style={{ display: 'flex', position: 'absolute', left: 222, top: 82, width: 86, height: 194, borderRadius: 18, background: 'rgba(255,255,255,0.04)' }} />
      <div style={{ display: 'flex', position: 'absolute', left: 316, top: 82, width: 102, height: 194, borderRadius: 18, background: 'rgba(255,255,255,0.04)' }} />
      <div style={{ display: 'flex', position: 'absolute', left: 54, top: 102, width: 44, height: 10, borderRadius: 999, background: 'rgba(255,255,255,0.1)' }} />
      <div style={{ display: 'flex', position: 'absolute', left: 148, top: 102, width: 44, height: 10, borderRadius: 999, background: 'rgba(255,255,255,0.1)' }} />
      <div style={{ display: 'flex', position: 'absolute', left: 242, top: 102, width: 44, height: 10, borderRadius: 999, background: 'rgba(255,255,255,0.1)' }} />
      <div style={{ display: 'flex', position: 'absolute', left: 336, top: 102, width: 44, height: 10, borderRadius: 999, background: 'rgba(255,255,255,0.1)' }} />
      <div style={{ display: 'flex', position: 'absolute', left: 52, top: 130, width: 60, height: 42, borderRadius: 14, background: 'rgba(255,255,255,0.08)' }} />
      <div style={{ display: 'flex', position: 'absolute', left: 52, top: 182, width: 60, height: 52, borderRadius: 14, background: 'rgba(255,255,255,0.06)' }} />
      <div style={{ display: 'flex', position: 'absolute', left: 146, top: 130, width: 60, height: 56, borderRadius: 14, background: 'rgba(56,189,248,0.16)' }} />
      <div style={{ display: 'flex', position: 'absolute', left: 146, top: 196, width: 60, height: 42, borderRadius: 14, background: 'rgba(255,255,255,0.06)' }} />
      <div style={{ display: 'flex', position: 'absolute', left: 240, top: 130, width: 60, height: 74, borderRadius: 14, background: 'rgba(255,255,255,0.08)' }} />
      <div style={{ display: 'flex', position: 'absolute', left: 334, top: 130, width: 66, height: 92, borderRadius: 16, background: 'rgba(139,92,246,0.72)' }} />
      <div style={{ display: 'flex', position: 'absolute', left: 334, top: 232, width: 66, height: 18, borderRadius: 9, background: 'rgba(255,255,255,0.08)' }} />
    </div>
  );
}