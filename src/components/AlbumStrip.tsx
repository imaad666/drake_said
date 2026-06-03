import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import type { AlbumRecord } from '../lib/types';
import '../styles/album-strip.css';

type Props = {
  albums: AlbumRecord[];
  activeSlug: string;
};

export default function AlbumStrip({ albums, activeSlug }: Props) {
  const stripRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;

    const links = strip.querySelectorAll('.album-strip__link');
    gsap.fromTo(
      links,
      { opacity: 0, y: 12, scale: 0.92 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.55,
        stagger: 0.04,
        ease: 'power3.out',
        delay: 0.15,
      },
    );
  }, [activeSlug]);

  useEffect(() => {
    const active = stripRef.current?.querySelector('.album-strip__link--active');
    active?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
  }, [activeSlug]);

  return (
    <nav className="album-strip" ref={stripRef} aria-label="Albums">
      {albums.map((album) => {
        const isActive = album.slug === activeSlug;
        return (
          <a
            key={album.slug}
            href={`/${album.slug}`}
            className={`album-strip__link${isActive ? ' album-strip__link--active' : ''}`}
            aria-current={isActive ? 'page' : undefined}
            data-astro-prefetch
          >
            <img src={album.cover} alt={album.name} width={64} height={64} loading="lazy" />
          </a>
        );
      })}
    </nav>
  );
}
