import { tokens } from '../design-system/tokens';

export function AccentBar({ accent, height }: { accent: string; height?: number }) {
  return (
    <div
      style={{
        display: 'flex',
        width: 4,
        height: height ?? 140,
        borderRadius: 999,
        background: `linear-gradient(180deg, ${accent} 0%, rgba(255, 255, 255, 0.35) 100%)`,
        marginTop: tokens.spacing[0],
      }}
    />
  );
}
