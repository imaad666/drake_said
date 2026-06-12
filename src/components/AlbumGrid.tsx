import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import type { AlbumRecord } from '../lib/types';
import { averageColorFromImage, rgbString } from '../lib/colorFromCover';

type Props = {
  albums: AlbumRecord[];
};

export default function AlbumGrid({ albums }: Props) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = gridRef.current?.querySelectorAll('.album-grid__item');
    if (!items?.length) return;

    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.75,
      stagger: 0.06,
      ease: 'power3.out',
      delay: 0.2,
    });
  }, []);

  const handleEnter = (img: HTMLImageElement) => {
    const color = averageColorFromImage(img);
    if (!color) return;
    gsap.to(document.body, {
      backgroundColor: rgbString(color),
      duration: 0.55,
      ease: 'power2.out',
    });
  };

  const handleLeave = () => {
    gsap.to(document.body, {
      backgroundColor: '#fafafa',
      duration: 0.55,
      ease: 'power2.out',
    });
  };

  return (
    <div className="album-grid" ref={gridRef}>
      {albums.map((album) => (
        <div className="album-grid__item" key={album.slug}>
          <a
            href={`/${album.slug}`}
            data-astro-prefetch="load"
            onMouseEnter={(e) => {
              const img = e.currentTarget.querySelector('img');
              if (img?.complete) handleEnter(img);
              else img?.addEventListener('load', () => handleEnter(img), { once: true });
            }}
            onMouseLeave={handleLeave}
          >
            <img src={album.cover} alt={album.name} width={300} height={300} loading="lazy" />
          </a>
        </div>
      ))}
    </div>
  );
}
