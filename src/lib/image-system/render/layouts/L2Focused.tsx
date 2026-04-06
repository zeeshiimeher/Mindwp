import { AccentBar } from '../components/AccentBar';
import { Background } from '../components/Background';
import { Badge } from '../components/Badge';
import { ImageLayer } from '../components/ImageLayer';
import { Title } from '../components/Title';
import type { LayoutRenderProps } from '../renderer';

export function L2Focused(props: LayoutRenderProps) {
  const isIllustration = props.design.visualMode === 'illustration';
  const titleHeight = props.metrics.lineHeight * props.metrics.titleLines.length;
  const titleTop = isIllustration
    ? 118
    : Math.max(72, props.metrics.titleY - Math.round(titleHeight * 0.55));
  const mediaUnderlay = !isIllustration;
  const showSubtitle = Boolean(props.subtitle);

  return (
    <div
      style={{
        position: 'relative',
        width: props.width,
        height: props.height,
        display: 'flex',
        overflow: 'hidden',
        background: '#0b1018',
        color: '#ffffff',
      }}
    >
      {mediaUnderlay ? <ImageLayer imageSrc={props.imageSrc} design={props.design} /> : null}
      <Background width={props.width} height={props.height} design={props.design} brightness={props.brightness} />
      {mediaUnderlay ? null : <ImageLayer imageSrc={props.imageSrc} design={props.design} />}
      {isIllustration ? (
        <>
          <div
            style={{
              position: 'absolute',
              left: 622,
              top: 28,
              width: 652,
              height: 574,
              display: 'flex',
              borderRadius: 48,
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: 666,
              top: 86,
              width: 448,
              height: 312,
              display: 'flex',
              borderRadius: 30,
              backgroundColor: 'rgba(255, 255, 255, 0.13)',
              border: '1px solid rgba(255, 255, 255, 0.16)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: 694,
              top: 112,
              width: 348,
              height: 46,
              display: 'flex',
              borderRadius: 16,
              backgroundColor: 'rgba(255, 255, 255, 0.22)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: 694,
              top: 186,
              width: 154,
              height: 150,
              display: 'flex',
              borderRadius: 22,
              backgroundColor: props.design.palette.accent,
              opacity: 0.78,
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: 876,
              top: 186,
              width: 174,
              height: 68,
              display: 'flex',
              borderRadius: 22,
              backgroundColor: 'rgba(255, 255, 255, 0.18)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: 876,
              top: 268,
              width: 174,
              height: 68,
              display: 'flex',
              borderRadius: 22,
              backgroundColor: 'rgba(255, 255, 255, 0.14)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: 666,
              top: 428,
              width: 448,
              height: 18,
              display: 'flex',
              borderRadius: 999,
              backgroundColor: 'rgba(255, 255, 255, 0.18)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: 718,
              top: 462,
              width: 208,
              height: 208,
              display: 'flex',
              borderRadius: 999,
              backgroundColor: props.design.palette.accent,
              opacity: 0.22,
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: 954,
              top: 486,
              width: 144,
              height: 110,
              display: 'flex',
              borderRadius: 24,
              backgroundColor: 'rgba(255, 255, 255, 0.14)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
            }}
          />
        </>
      ) : null}
      <div
        style={{
          position: 'absolute',
          left: props.metrics.textX - 28,
          top: titleTop,
          display: 'flex',
          alignItems: 'flex-start',
          gap: 22,
        }}
      >
        <AccentBar accent={props.design.palette.accent} height={titleHeight + 48} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: props.metrics.maxTextWidth }}>
          <Badge badge={props.badge} accent={props.design.palette.accent} />
          <Title title={props.title} metrics={props.metrics} />
          {showSubtitle ? (
            <div
              style={{
                display: 'flex',
                maxWidth: 420,
                color: 'rgba(255, 255, 255, 0.82)',
                fontSize: 18,
                lineHeight: '26px',
                letterSpacing: '-0.2px',
              }}
            >
              {props.subtitle}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}