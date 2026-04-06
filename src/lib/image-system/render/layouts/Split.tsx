import { AccentBar } from '../components/AccentBar';
import { Background } from '../components/Background';
import { Badge } from '../components/Badge';
import { ImageLayer } from '../components/ImageLayer';
import { Title } from '../components/Title';
import type { LayoutRenderProps } from '../renderer';

export function Split(props: LayoutRenderProps) {
  const titleHeight = props.metrics.lineHeight * props.metrics.titleLines.length;
  const panelTop = Math.max(56, props.metrics.titleY - Math.round(titleHeight * 0.7));
  const panelHeight = Math.max(280, titleHeight + 164);
  const mediaUnderlay = props.design.visualMode !== 'illustration';

  return (
    <div
      style={{
        position: 'relative',
        width: props.width,
        height: props.height,
        display: 'flex',
        overflow: 'hidden',
        background: '#0b0f16',
        color: '#ffffff',
      }}
    >
      {mediaUnderlay ? <ImageLayer imageSrc={props.imageSrc} design={props.design} /> : null}
      <Background width={props.width} height={props.height} design={props.design} brightness={props.brightness} />
      {mediaUnderlay ? null : <ImageLayer imageSrc={props.imageSrc} design={props.design} />}
      <div
        style={{
          position: 'absolute',
          left: 64,
          top: panelTop,
          width: 620,
          height: panelHeight,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          padding: '42px 40px',
          borderRadius: 28,
          background: 'rgba(8, 12, 20, 0.62)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 32px 72px rgba(0, 0, 0, 0.28)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 18 }}>
          <AccentBar accent={props.design.palette.accent} height={titleHeight + 42} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 480 }}>
            <Badge badge={props.badge} accent={props.design.palette.accent} />
            <Title title={props.title} metrics={props.metrics} />
            {props.subtitle ? (
              <div
                style={{
                  display: 'flex',
                  maxWidth: 420,
                  color: 'rgba(255, 255, 255, 0.84)',
                  fontSize: 21,
                  fontWeight: 600,
                  lineHeight: '28px',
                  letterSpacing: '-0.2px',
                }}
              >
                {props.subtitle}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}