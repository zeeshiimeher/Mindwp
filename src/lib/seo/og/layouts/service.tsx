import { OG_TOKENS, OGContainer } from '@/lib/seo/og/components/OGContainer';
import { OGMeta } from '@/lib/seo/og/components/OGMeta';
import { OGTitle } from '@/lib/seo/og/components/OGTitle';
import type { OGInput } from '@/lib/seo/og/contract';

type ServiceOGLayoutProps = {
  input: OGInput;
};

function AccentGrid() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
      }}
    >
      <div style={{ flex: 1 }} />
      <div
        style={{
          width: 360,
          height: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 18,
          padding: 36,
          opacity: 0.9,
        }}
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={`og-grid-${index}`}
            style={{
              borderRadius: 28,
              border: '2px solid rgba(226, 232, 240, 0.18)',
              background: index % 2 === 0 ? 'rgba(29, 78, 216, 0.18)' : 'rgba(15, 118, 110, 0.18)',
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function ServiceOGLayout({ input }: ServiceOGLayoutProps) {
  return (
    <OGContainer
      background={`linear-gradient(135deg, ${OG_TOKENS.colors.slate} 0%, ${OG_TOKENS.colors.slateSoft} 54%, #0B3B55 100%)`}
      borderColor='rgba(203, 213, 225, 0.18)'
      accent={<AccentGrid />}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: 720,
          height: '100%',
        }}
      >
        <OGMeta eyebrow={input.eyebrow} tone='light' />
        <OGTitle
          title={input.title}
          subtitle={input.subtitle}
          compact
          color={OG_TOKENS.colors.white}
          subtitleColor={OG_TOKENS.colors.cloud}
          maxWidth={700}
        />
      </div>
    </OGContainer>
  );
}
