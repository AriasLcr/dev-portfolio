import { useRef, useState, useEffect } from 'react';
import './Frame.css';

interface FrameProps {
  src: string;
  poster?: string;
  alt: string;
  label?: string;
  aspect?: string;
  expandable?: boolean;
}

function isVideo(src: string) {
  return /\.(mp4|webm|mov)$/i.test(src);
}

export function Frame({ src, poster, alt, label, aspect, expandable }: FrameProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [open, setOpen] = useState(false);
  const vid = isVideo(src);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function handleMouseEnter() {
    if (!prefersReduced) videoRef.current?.play();
  }

  function handleMouseLeave() {
    const v = videoRef.current;
    if (v) { v.pause(); v.currentTime = 0; }
  }

  function handleClick() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); } else { v.pause(); v.currentTime = 0; }
  }

  return (
    <>
    <figure className="frame">
      <div
        className={`frame__media${expandable ? ' frame__media--expandable' : ''}`}
        style={aspect ? { aspectRatio: aspect } : undefined}
        onMouseEnter={vid ? handleMouseEnter : undefined}
        onMouseLeave={vid ? handleMouseLeave : undefined}
        onClick={expandable ? () => setOpen(true) : (vid ? handleClick : undefined)}
      >
        {vid ? (
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={alt}
          />
        ) : (
          <img src={src} alt={alt} loading="lazy" />
        )}
      </div>
      {label && <figcaption className="frame__label">{label}</figcaption>}
    </figure>

    {open && (
      <div className="lightbox" onClick={() => setOpen(false)} role="dialog" aria-modal="true" aria-label={alt}>
        <div className="lightbox__inner" onClick={e => e.stopPropagation()}>
          <button className="lightbox__close" onClick={() => setOpen(false)} aria-label="Close">✕</button>
          {vid ? (
            <video
              className="lightbox__video"
              src={src}
              poster={poster}
              muted
              loop
              playsInline
              autoPlay
              controls
              aria-label={alt}
            />
          ) : (
            <img src={src} alt={alt} className="lightbox__img" />
          )}
          {label && <p className="lightbox__label">{label}</p>}
        </div>
      </div>
    )}
    </>
  );
}
