import { OG_TOKENS, OGContainer } from '@/lib/seo/og/components/OGContainer';
import { OGMeta } from '@/lib/seo/og/components/OGMeta';
import { OGTitle } from '@/lib/seo/og/components/OGTitle';
import type { OGInput } from '@/lib/seo/og/contract';

type StandardOGLayoutProps = {
  input: OGInput;
};

export function StandardOGLayout({ input }: StandardOGLayoutProps) {
  return (
    <OGContainer
      background={`linear-gradient(135deg, ${OG_TOKENS.colors.paper} 0%, ${OG_TOKENS.colors.sand} 100%)`}
      borderColor='rgba(180, 83, 9, 0.18)'
      accent={
        <>
          <div
            style={{
              position: 'absolute',
              top: -120,
              right: -90,
              width: 360,
              height: 360,
              borderRadius: '50%',
              background: 'rgba(180, 83, 9, 0.12)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: -140,
              left: -80,
              width: 420,
              height: 260,
              borderRadius: 48,
              background: 'rgba(29, 78, 216, 0.1)',
              transform: 'rotate(-12deg)',
            }}
          />
        </>
      }
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
        }}
      >
        <OGMeta eyebrow={input.eyebrow} />
        <OGTitle title={input.title} subtitle={input.subtitle} maxWidth={880} />
      </div>
    </OGContainer>
  );
}
