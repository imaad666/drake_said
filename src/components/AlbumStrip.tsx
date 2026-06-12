import { useEffect, useRef } from 'react';
import type { AlbumRecord } from '../lib/types';
import '../styles/album-strip.css';

type Props = {
  albums: AlbumRecord[];
  activeSlug: string;
};

export default function AlbumStrip({ albums, activeSlug }: Props) {
  const stripRef = useRef<HTMLElement>(null);

  // Scroll to active album when it changes
  useEffect(() => {
    const active = stripRef.current?.querySelector('.album-strip__link--active');
    if (active) {
      active.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
    }
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
