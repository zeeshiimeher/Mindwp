import { Badge } from '../components/Badge';
import { ImageLayer } from '../components/ImageLayer';
import { Title } from '../components/Title';
import { getContainerWidth } from '../contentAware';
import { tokens } from '../design-system/tokens';
import type { LayoutRenderProps } from '../renderer';

export function CenterLayout(props: LayoutRenderProps) {
  const isResource = props.design.domain === 'resources';
  const isCaseStudy = props.design.domain === 'case-studies';
  const isIndustry = props.design.domain === 'industries';
  const isPhotoCenter = !isCaseStudy;
  const containerWidth = Number.parseInt(getContainerWidth(), 10);
  const slabHeight = isResource ? 336 : isCaseStudy ? 320 : 300;
  const slabLeft = Math.round((props.width - containerWidth) / 2);
  const slabTop = Math.round((props.height - slabHeight) / 2);
  const caseStudyPatternLines = Array.from({ length: 30 }, (_, index) => {
    const column = index % 10;
    const row = Math.floor(index / 10);
    const leftOffsets = [0, 48, 14] as const;
    const rowTops = [18, 248, 470] as const;
    const rowOpacity = [0.24, 0.18, 0.22] as const;
    const left = 74 + (column * 115) + leftOffsets[row];
    const top = rowTops[row] + ((column % 3) * (row === 1 ? 10 : 12));
    const height = row === 1 ? 62 + ((column % 4) * 14) : 74 + ((column % 4) * 18);
    const opacity = rowOpacity[row] + ((column % 3) * 0.06);

    return {
      left,
      top,
      height,
      opacity,
    };
  });

  return (
    <div
      style={{
        position: 'relative',
        width: props.width,
        height: props.height,
        display: 'flex',
        overflow: 'hidden',
        background: tokens.colors.darkBg,
        color: props.metrics.titleColor,
      }}
    >
      <ImageLayer imageSrc={props.imageSrc} design={props.design} />
      {isCaseStudy ? (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            background: 'radial-gradient(circle at 30% 40%, rgba(37,99,235,0.14) 0%, rgba(37,99,235,0) 32%), linear-gradient(135deg, #040816 0%, #07111f 52%, #020617 100%)',
          }}
        >
          {caseStudyPatternLines.map((line, index) => (
            <div
              key={`case-study-line-${index}`}
              style={{
                position: 'absolute',
                left: line.left,
                top: line.top,
                width: 2,
                height: line.height,
                background: `linear-gradient(180deg, rgba(56,189,248,0) 0%, rgba(56,189,248,${line.opacity}) 18%, rgba(56,189,248,${line.opacity + 0.2}) 50%, rgba(56,189,248,${line.opacity}) 82%, rgba(56,189,248,0) 100%)`,
              }}
            />
          ))}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(2,6,23,0.8) 0%, rgba(2,6,23,0.12) 18%, rgba(2,6,23,0.12) 82%, rgba(2,6,23,0.78) 100%)',
            }}
          />
          <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 160, background: 'linear-gradient(180deg, rgba(2,6,23,0) 0%, rgba(2,6,23,0.74) 100%)' }} />
        </div>
      ) : null}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          background: isCaseStudy
            ? 'linear-gradient(to bottom, rgba(0,0,0,0.12), rgba(0,0,0,0.34))'
            : `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.75)), ${props.metrics.overlayColor}`,
        }}
      />
      {isPhotoCenter ? (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            background: 'radial-gradient(circle at 50% 50%, rgba(15,23,42,0.12) 0%, rgba(2,6,23,0.28) 48%, rgba(2,6,23,0.56) 100%)',
          }}
        />
      ) : null}
      {isResource ? (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: 64,
              top: 56,
              width: 280,
              height: 280,
              borderRadius: 999,
              background: 'radial-gradient(circle, rgba(139,92,246,0.34) 0%, rgba(139,92,246,0.16) 44%, rgba(139,92,246,0) 74%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              right: 86,
              top: 98,
              width: 220,
              height: 220,
              borderRadius: 999,
              background: 'radial-gradient(circle, rgba(56,189,248,0.28) 0%, rgba(56,189,248,0.1) 48%, rgba(56,189,248,0) 74%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: 168,
              bottom: 62,
              width: 360,
              height: 120,
              borderRadius: 999,
              background: 'radial-gradient(circle, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.05) 45%, rgba(255,255,255,0) 74%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              right: 126,
              bottom: 108,
              width: 144,
              height: 78,
              borderRadius: 24,
              border: '1px solid rgba(255,255,255,0.14)',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.05) 100%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: 120,
              bottom: 124,
              width: 112,
              height: 16,
              borderRadius: 999,
              background: 'rgba(255,255,255,0.16)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: 120,
              bottom: 96,
              width: 84,
              height: 12,
              borderRadius: 999,
              background: 'rgba(255,255,255,0.1)',
            }}
          />
        </div>
      ) : null}
      <div
        style={{
          position: 'absolute',
          left: slabLeft,
          top: slabTop,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: containerWidth,
          height: slabHeight,
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            width: containerWidth,
            maxWidth: containerWidth,
            minHeight: slabHeight,
            textAlign: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              minHeight: slabHeight,
              background: isResource
                ? 'linear-gradient(135deg, rgba(15,23,42,0.42) 0%, rgba(15,23,42,0.3) 100%)'
                : isCaseStudy
                  ? 'rgba(10, 18, 34, 0.88)'
                  : isIndustry
                    ? 'linear-gradient(135deg, rgba(15,23,42,0.34) 0%, rgba(15,23,42,0.22) 100%)'
                    : 'linear-gradient(135deg, rgba(15,23,42,0.28) 0%, rgba(15,23,42,0.18) 100%)',
              border: isCaseStudy ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(255,255,255,0.18)',
              boxShadow: isCaseStudy ? 'none' : '0 18px 42px rgba(2,6,23,0.22)',
              backdropFilter: isCaseStudy ? 'none' : 'blur(8px)',
              padding: isResource ? '52px 64px' : isCaseStudy ? '44px 60px' : '44px 60px',
              borderRadius: 24,
              boxSizing: 'border-box',
              gap: isResource ? 24 : isCaseStudy ? 18 : 20,
            }}
          >
            {props.badge ? (
              <div
                style={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'center',
                }}
              >
                <Badge badge={props.badge} accent={tokens.colors.accent} />
              </div>
            ) : null}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                maxWidth: isResource ? 700 : isCaseStudy ? 640 : isIndustry ? 640 : 720,
                padding: isIndustry ? '0 28px' : isResource ? '0 24px' : '0 20px',
                boxSizing: 'border-box',
                textAlign: 'center',
              }}
            >
              <Title title={props.title} metrics={props.metrics} />
            </div>
            {props.subtitle ? (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  color: props.metrics.subtitleColor,
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    maxWidth: isResource ? 620 : isCaseStudy ? 500 : 540,
                    padding: isIndustry ? '0 20px' : '0 12px',
                    boxSizing: 'border-box',
                    fontSize: tokens.typography.subtitle.fontSize,
                    lineHeight: `${tokens.typography.subtitle.fontSize * tokens.typography.subtitle.lineHeight}px`,
                    textAlign: 'center',
                  }}
                >
                  {props.subtitle}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}