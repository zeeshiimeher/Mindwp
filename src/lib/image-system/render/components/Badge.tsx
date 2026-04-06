export function Badge({ badge, accent }: { badge: string | null; accent: string }) {
  if (!badge) return null;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8px 14px',
        borderRadius: 999,
        background: accent,
        color: '#ffffff',
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: 0.8,
        boxShadow: '0 10px 24px rgba(0, 0, 0, 0.2)',
      }}
    >
      {badge}
    </div>
  );
}