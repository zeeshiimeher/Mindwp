/**
 * SummaryCard — Reusable stat card for dashboard panels.
 */

export function SummaryCard({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color?: string;
}) {
  return (
    <div
      style={{
        padding: '1rem 1.5rem',
        border: '1px solid #e5e7eb',
        borderRadius: 8,
        minWidth: 140,
      }}
    >
      <div style={{ fontSize: '0.75rem', color: '#666', textTransform: 'uppercase' }}>{label}</div>
      <div style={{ fontSize: '1.5rem', fontWeight: 700, color: color ?? 'inherit' }}>{value}</div>
    </div>
  );
}
