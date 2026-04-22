import { AccentBar } from '../components/AccentBar';
import { Badge } from '../components/Badge';
import { ImageLayer } from '../components/ImageLayer';
import { Title } from '../components/Title';
import { gradients } from '../design-system/gradients';
import { tokens } from '../design-system/tokens';
import type { LayoutRenderProps } from '../renderer';

export function SplitLayout(props: LayoutRenderProps) {
  return (
    <div
      style={{
        position: 'relative',
        width: props.width,
        height: props.height,
        display: 'flex',
        overflow: 'hidden',
        background: gradients.base,
        color: props.metrics.titleColor,
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          background: gradients.glowPrimary,
        }}
      />
      <div
        style={{
          position: 'relative',
          display: 'flex',
          width: '100%',
          height: '100%',
          padding: 80,
          gap: 48,
          boxSizing: 'border-box',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 48,
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 24,
              flex: '1 1 0',
              minWidth: 0,
              maxWidth: 540,
            }}
          >
            <AccentBar accent={tokens.colors.accent} />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 18,
                width: '100%',
                maxWidth: 500,
                minWidth: 0,
              }}
            >
              <Badge
                badge={props.badge ?? (props.design.domain === 'services' ? 'Service' : 'Feature')}
                accent={tokens.colors.accent}
              />
              <Title title={props.title} metrics={props.metrics} />
              {props.subtitle ? (
                <div
                  style={{
                    color: props.metrics.subtitleColor,
                    fontSize: 20,
                    lineHeight: '30px',
                    maxWidth: 488,
                  }}
                >
                  {props.subtitle}
                </div>
              ) : null}
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flex: '1 1 0',
              minWidth: 0,
              minHeight: 370,
              maxWidth: 452,
            }}
          >
            <div
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                maxWidth: 452,
                height: 356,
                borderRadius: 30,
                border: '1px solid rgba(255,255,255,0.12)',
                background:
                  'linear-gradient(180deg, rgba(15,23,42,0.88) 0%, rgba(8,15,32,0.92) 100%)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: 30,
                  background:
                    'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 100%)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: '-34px -28px -34px -28px',
                  borderRadius: 40,
                  background:
                    'radial-gradient(circle at center, rgba(139,92,246,0.18) 0%, rgba(59,130,246,0.1) 40%, rgba(2,6,23,0) 72%)',
                }}
              />
              <div
                style={{
                  position: 'relative',
                  display: 'flex',
                  width: '100%',
                  height: '100%',
                  padding: 18,
                  boxSizing: 'border-box',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 22,
                  }}
                >
                  <ImageLayer imageSrc={null} design={props.design} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
