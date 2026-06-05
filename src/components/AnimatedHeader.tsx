import { useEffect, useState } from 'react';
import { HEADER_CYCLE_FONTS } from '../lib/headerFonts';

type Props = {
  homeHref?: string;
  intervalMs?: number;
};

export default function AnimatedHeader({ homeHref = '/', intervalMs = 500 }: Props) {
  const [fontIndex, setFontIndex] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const timer = window.setInterval(() => {
      setFontIndex((i) => (i + 1) % HEADER_CYCLE_FONTS.length);
    }, intervalMs);
    return () => window.clearInterval(timer);
  }, [intervalMs]);

  const fontFamily = HEADER_CYCLE_FONTS[fontIndex];

  return (
    <h1 className="site-header__title site-header__title--cycle">
      <a href={homeHref} style={{ fontFamily }}>
        DRAKE SAID
      </a>
    </h1>
  );
}
