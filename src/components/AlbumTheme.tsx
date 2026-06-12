import { useEffect } from 'react';
import gsap from 'gsap';
import { fontFamilyCss } from '../lib/fonts';

type Theme = {
  accent: string;
  background: string;
  text: string;
  muted: string;
  mode: 'dark' | 'light';
};

type Fonts = {
  lyrics?: string;
  songTitle?: string;
  albumTitle?: string;
};

type Props = {
  theme: Theme;
  fonts?: Fonts;
};

function applyFonts(fonts?: Fonts) {
  const el = document.documentElement;
  if (fonts?.lyrics) el.style.setProperty('--font-lyrics', fontFamilyCss(fonts.lyrics));
  if (fonts?.songTitle) el.style.setProperty('--font-song', fontFamilyCss(fonts.songTitle));
  if (fonts?.albumTitle) el.style.setProperty('--font-accent', fontFamilyCss(fonts.albumTitle));
}

export default function AlbumTheme({ theme, fonts }: Props) {
  useEffect(() => {
    const root = document.documentElement;
    const bg = document.querySelector<HTMLElement>('.album-bg');
    const glow = document.querySelector<HTMLElement>('.album-bg__glow');

    applyFonts(fonts);

    gsap.to(root, {
      '--accent': theme.accent,
      '--text': theme.text,
      '--muted': theme.muted,
      duration: 0.55,
      ease: 'power2.inOut',
      overwrite: 'auto',
    });

    if (bg) {
      gsap.to(bg, {
        opacity: 0,
        duration: 0.28,
        ease: 'power2.in',
        onComplete: () => {
          bg.style.background = theme.background;
          gsap.to(bg, { opacity: 1, duration: 0.45, ease: 'power2.out' });
        },
      });
    }

    if (glow) {
      gsap.to(glow, {
        opacity: 0,
        duration: 0.28,
        onComplete: () => {
          gsap.to(glow, { opacity: 0.35, duration: 0.45 });
        },
      });
    }
  }, [theme, fonts]);

  useEffect(() => {
    const resetScroll = () => window.scrollTo({ top: 0, behavior: 'instant' });
    document.addEventListener('astro:after-swap', resetScroll);
    return () => document.removeEventListener('astro:after-swap', resetScroll);
  }, []);

  return null;
}
