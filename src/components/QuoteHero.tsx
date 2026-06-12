import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

type Props = {
  song: string;
  features?: string;
  lines: string[];
  albumSlug: string;
};

export default function QuoteHero({ song, features, lines, albumSlug }: Props) {
  const rootRef = useRef<HTMLElement>(null);
  const songRef = useRef<HTMLParagraphElement>(null);
  const linesRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const hasEntered = useRef(
    typeof sessionStorage !== 'undefined' && sessionStorage.getItem('album-nav') === '1',
  );

  useGSAP(
    () => {
      const lineEls = linesRef.current?.querySelectorAll('.album-hero__line');
      const targets = [songRef.current, ...(lineEls ? Array.from(lineEls) : []), linksRef.current].filter(
        Boolean,
      );

      sessionStorage.setItem('album-nav', '1');

      if (!hasEntered.current) {
        gsap.set(targets, { opacity: 0, y: 20 });
        gsap.to(targets, {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.07,
          ease: 'power3.out',
          delay: 0.08,
        });
        hasEntered.current = true;
        return;
      }

      gsap.fromTo(
        targets,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.05, ease: 'power2.out' },
      );
    },
    { dependencies: [albumSlug, song], scope: rootRef },
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
