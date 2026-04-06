import { AccentBar } from '../components/AccentBar';
import { Background } from '../components/Background';
import { Badge } from '../components/Badge';
import { ImageLayer } from '../components/ImageLayer';
import { Title } from '../components/Title';
import type { LayoutRenderProps } from '../renderer';

export function L3Bold(props: LayoutRenderProps) {
  const titleHeight = props.metrics.lineHeight * props.metrics.titleLines.length;
  const titleTop = Math.max(56, props.metrics.titleY - titleHeight - 12);
  const mediaUnderlay = props.design.visualMode !== 'illustration';

  return (
    <div
      style={{
        position: 'relative',
        width: props.width,
        height: props.height,
        display: 'flex',
        overflow: 'hidden',
        background: '#091018',
        color: '#ffffff',
      }}
    >
      {mediaUnderlay ? <ImageLayer imageSrc={props.imageSrc} design={props.design} /> : null}
      <Background width={props.width} height={props.height} design={props.design} brightness={props.brightness} />
      {mediaUnderlay ? null : <ImageLayer imageSrc={props.imageSrc} design={props.design} />}
      <div
        style={{
          position: 'absolute',
          left: props.metrics.textX - 24,
          top: titleTop,
          display: 'flex',
          alignItems: 'flex-start',
          gap: 20,
        }}
      >
        <AccentBar accent={props.design.palette.accent} height={titleHeight + 68} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: props.metrics.maxTextWidth }}>
          <Badge badge={props.badge} accent={props.design.palette.accent} />
          <Title title={props.title} metrics={props.metrics} />
          {props.subtitle ? (
            <div
              style={{
                display: 'flex',
                maxWidth: Math.min(props.metrics.maxTextWidth, 460),
                color: 'rgba(255, 255, 255, 0.86)',
                fontSize: 24,
                fontWeight: 600,
                lineHeight: '30px',
                letterSpacing: '-0.2px',
                textShadow: '0 6px 18px rgba(0, 0, 0, 0.28)',
              }}
            >
              {props.subtitle}
            </div>
          ) : null}
        </div>
      </div>
      {props.design.treatment === 'depth' ? (
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            right: 72,
            bottom: 78,
            width: 300,
            height: 180,
            borderRadius: 32,
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.02) 100%)',
          }}
        />
      ) : null}
    </div>
  );
}