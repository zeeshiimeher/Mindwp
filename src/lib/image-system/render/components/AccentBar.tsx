export function AccentBar({ accent, height }: { accent: string; height: number }) {
  return (
    <div
      style={{
        display: 'flex',
        width: 6,
        height,
        borderRadius: 999,
        background: `linear-gradient(180deg, ${accent} 0%, rgba(255, 255, 255, 0.35) 100%)`,
        boxShadow: `0 0 28px ${accent}66`,
      }}
    />
  );
}