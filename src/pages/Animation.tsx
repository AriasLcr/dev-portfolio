import { pieces } from '../content/animation';
import { Frame } from '../components/Frame';
import './Animation.css';

export function Animation() {
  return (
    <div className="animation">
      <div className="animation__inner">
        <p className="animation__intro">
          Though not an animation major, I have had the chance to take foundational animation
          courses at RIT that have honed my interest in the craft, from timing and weight to
          character performance and concept art.
        </p>
        <p className="animation__intro">
          The coursework collects sample works using: Maya, Adobe After Effects, TVPaint, 
          Rostrum Camera, Krita, Clip Studio Paint, Pencil, and Paper.
        </p>
        <div className="mosaic">
          {pieces.map((p, i) => {
            const [aw, ah] = p.aspect.split('/').map(Number);
            return (
            <div
              key={i}
              className="mosaic__item"
              style={{ '--ar': aw / ah } as React.CSSProperties}
            >
              <Frame
                src={p.src}
                poster={p.poster}
                alt={p.alt}
                label={p.label}
                aspect={p.aspect}
                expandable
              />
            </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
