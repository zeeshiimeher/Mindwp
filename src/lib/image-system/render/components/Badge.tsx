import { tokens } from '../design-system/tokens';

export function Badge({ badge, accent }: { badge: string | null; accent: string }) {
  if (!badge) return null;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        padding: '10px 18px',
        borderRadius: 999,
        background: 'rgba(15, 23, 42, 0.82)',
        border: `1px solid ${accent}33`,
        color: '#ffffff',
        fontSize: tokens.typography.label.fontSize,
        fontWeight: 500,
        letterSpacing: 0.4,
        textTransform: 'uppercase',
      }}
    >
      {badge}
    </div>
  );
}
