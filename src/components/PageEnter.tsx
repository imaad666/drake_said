import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { createEnterTimeline } from '../lib/animations/enterTimeline';

type Props = {
  selector?: string;
};

/** Animates persisted header + first paint on album pages */
export default function PageEnter({ selector = '.site-header' }: Props) {
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Only animate on first mount, not on subsequent navigations
    if (hasAnimated.current) return;
    
    const header = document.querySelector(selector);
    if (!header) return;

    gsap.set(header, { opacity: 0, y: -12 });
    createEnterTimeline({ header });
    hasAnimated.current = true;
  }, [selector]);

  return null;
}
