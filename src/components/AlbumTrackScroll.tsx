import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { Track } from '../lib/types';
import '../styles/track-scroll.css';

gsap.registerPlugin(ScrollTrigger);

type Props = {
  albumSlug: string;
  tracks: Track[];
};

export default function AlbumTrackScroll({ albumSlug, tracks }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [activeSlug, setActiveSlug] = useState(tracks[0]?.slug ?? '');

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const sections = root.querySelectorAll<HTMLElement>('.track-section');
    const chrome = document.getElementById('album-nav');

    const triggers: ScrollTrigger[] = [];

    if (chrome) {
      triggers.push(
        ScrollTrigger.create({
          trigger: chrome,
          start: 'top 55%',
          end: 'bottom 55%',
          onEnter: () => setActiveSlug(''),
          onEnterBack: () => setActiveSlug(''),
        }),
      );
    }

    sections.forEach((section) => {
      const slug = section.dataset.trackSlug;
      const title = section.querySelector('.track-section__title');
      const lines = section.querySelectorAll('.track-section__line');

      if (title) {
        gsap.set(title, { opacity: 0, y: 32 });
        triggers.push(
          ScrollTrigger.create({
            trigger: section,
            start: 'top 72%',
            once: true,
            onEnter: () => {
              gsap.to(title, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' });
            },
          }),
        );
      }

      if (lines.length) {
        gsap.set(lines, { opacity: 0, y: 40 });
        triggers.push(
          ScrollTrigger.create({
            trigger: section,
            start: 'top 65%',
            once: true,
            onEnter: () => {
              gsap.to(lines, {
                opacity: 1,
                y: 0,
                duration: 0.85,
                stagger: 0.1,
                ease: 'power3.out',
                delay: 0.12,
              });
            },
          }),
        );
      }

      triggers.push(
        ScrollTrigger.create({
          trigger: section,
          start: 'top 45%',
          end: 'bottom 45%',
          onEnter: () => slug && setActiveSlug(slug),
          onEnterBack: () => slug && setActiveSlug(slug),
        }),
      );
    });

    const hash = window.location.hash.slice(1);
    if (hash) {
      const target = root.querySelector<HTMLElement>(`#${CSS.escape(hash)}`);
      if (target) {
        requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: 'instant', block: 'start' });
          setActiveSlug(hash);
        });
      }
    }

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, [albumSlug, tracks]);

  const scrollToTrack = (slug: string) => {
    const el = rootRef.current?.querySelector<HTMLElement>(`#${CSS.escape(slug)}`);
    if (!el) return;
    el.scrollIntoView({ behavior: 'instant', block: 'start' });
    history.replaceState(null, '', `#${slug}`);
    setActiveSlug(slug);
  };

  return (
    <div className="track-scroll" ref={rootRef}>
      <nav className="track-rail" aria-label="Tracks">
        <ol className="track-rail__list">
          {tracks.map((track) => (
            <li key={track.slug}>
              <a
                href={`#${track.slug}`}
                className={`track-rail__item${activeSlug === track.slug ? ' track-rail__item--active' : ''}`}
                aria-current={activeSlug === track.slug ? 'true' : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTrack(track.slug);
                }}
              >
                <span className="track-rail__num">{String(track.number).padStart(2, '0')}</span>
                <span className="track-rail__title">{track.title}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="track-sections">
        {tracks.map((track) => (
          <section
            key={track.slug}
            id={track.slug}
            className="track-section"
            data-track-slug={track.slug}
            aria-label={track.title}
          >
            <div className="track-section__inner">
              <h2 className="track-section__title">
                {track.title}
                {track.features && (
                  <span className="track-section__feat">feat. {track.features}</span>
                )}
              </h2>
              <div className="track-section__lines">
                {track.lines.map((line) => (
                  <p className="track-section__line" key={line}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
