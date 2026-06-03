import { useEffect } from 'react';
import gsap from 'gsap';
import { createEnterTimeline } from '../lib/animations/enterTimeline';

type Props = {
  selector?: string;
};

/** Animates persisted header + first paint on album pages */
export default function PageEnter({ selector = '.site-header' }: Props) {
  useEffect(() => {
    const header = document.querySelector(selector);
    if (!header) return;

    gsap.set(header, { opacity: 0, y: -12 });
    createEnterTimeline({ header });
  }, [selector]);

  return null;
}
