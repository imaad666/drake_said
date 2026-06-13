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
  brandTitle?: string;
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
  if (fonts?.brandTitle) {
    el.style.setProperty('--font-brand', fontFamilyCss(fonts.brandTitle));
  } else {
    el.style.removeProperty('--font-brand');
  }
  if (fonts?.lyrics) el.style.setProperty('--font-lyrics', fontFamilyCss(fonts.lyrics));
  if (fonts?.songTitle) el.style.setProperty('--font-song', fontFamilyCss(fonts.songTitle));
  if (fonts?.albumTitle) el.style.setProperty('--font-accent', fontFamilyCss(fonts.albumTitle));
}

let hasThemed = false;

export default function AlbumTheme({ theme, fonts }: Props) {
  useEffect(() => {
    const root = document.documentElement;
    const bg = document.querySelector<HTMLElement>('.album-bg');
    const glow = document.querySelector<HTMLElement>('.album-bg__glow');

    applyFonts(fonts);

    if (!hasThemed) {
      hasThemed = true;
      root.style.setProperty('--accent', theme.accent);
      root.style.setProperty('--text', theme.text);
      root.style.setProperty('--muted', theme.muted);
      if (bg) bg.style.background = theme.background;
      return;
    }

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
    const resetScroll = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'instant', block: 'start' });
        return;
      }
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    document.addEventListener('astro:after-swap', resetScroll);
    return () => document.removeEventListener('astro:after-swap', resetScroll);
  }, []);

  return null;
}
