import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { createEnterTimeline } from '../lib/animations/enterTimeline';
type Props = {
  song: string;
  features?: string;
  lines: string[];
  albumSlug: string;
  trackSlug?: string;
};

export default function QuoteHero({ song, features, lines, albumSlug, trackSlug }: Props) {
  const rootRef = useRef<HTMLElement>(null);
  const songRef = useRef<HTMLParagraphElement>(null);
  const linesRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const lines = linesRef.current?.querySelectorAll('.album-hero__line');
      createEnterTimeline({
        song: songRef.current,
        lines: lines ? Array.from(lines) : null,
        links: linksRef.current,
      });
    },
    { dependencies: [albumSlug, trackSlug ?? song], scope: rootRef },
  );

  return (
    <section className="album-hero" ref={rootRef} aria-live="polite">
      <p className="album-hero__song" ref={songRef}>
        {song}
        {features && <span className="album-hero__feat"> — feat. {features}</span>}
      </p>
      <div className="album-hero__lines" ref={linesRef}>
        {lines.map((line) => (
          <p className="album-hero__line" key={line}>
            {line}
          </p>
        ))}
      </div>
      <div ref={linksRef}>
        <nav className="music-links" aria-label="Streaming links">
          <a href="https://open.spotify.com/artist/3TVXtAsR1lmumwmvQ5VfCt" target="_blank" rel="noopener noreferrer">
            Spotify
          </a>
          <a href="https://www.youtube.com/@Drake" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
          <a href="https://music.apple.com/us/artist/drake/271256" target="_blank" rel="noopener noreferrer">
            Apple Music
          </a>
        </nav>
      </div>
    </section>
  );
}
