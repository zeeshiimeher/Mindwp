import { OG_TOKENS, OGContainer } from '@/lib/seo/og/components/OGContainer';
import { OGMeta } from '@/lib/seo/og/components/OGMeta';
import { OGTitle } from '@/lib/seo/og/components/OGTitle';
import type { OGInput } from '@/lib/seo/og/contract';

type IndustryOGLayoutProps = {
  input: OGInput;
};

export function IndustryOGLayout({ input }: IndustryOGLayoutProps) {
  return (
    <OGContainer
      background={`linear-gradient(160deg, ${OG_TOKENS.colors.paper} 0%, #F0E2BC 48%, #E8C97F 100%)`}
      borderColor='rgba(180, 83, 9, 0.22)'
      accent={
        <>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'linear-gradient(rgba(180, 83, 9, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(180, 83, 9, 0.08) 1px, transparent 1px)',
              backgroundSize: '56px 56px',
            }}
          />
          <div
            style={{
              position: 'absolute',
              right: -60,
              top: 70,
              width: 300,
              height: 300,
              borderRadius: '50%',
              background: 'rgba(15, 118, 110, 0.14)',
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: OG_TOKENS.spacing.xl,
          }}
        >
          <OGTitle title={input.title} subtitle={input.subtitle} compact maxWidth={760} />
          <div
            style={{
              width: 180,
              height: 180,
              borderRadius: 36,
              border: '2px solid rgba(15, 23, 42, 0.14)',
              background: 'rgba(255, 255, 255, 0.36)',
            }}
          />
        </div>
      </div>
    </OGContainer>
  );
}
