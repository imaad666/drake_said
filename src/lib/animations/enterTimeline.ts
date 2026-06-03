import gsap from 'gsap';

type EnterTargets = {
  header?: Element | null;
  strip?: Element | null;
  song?: Element | null;
  lines?: Element | Element[] | null;
  links?: Element | null;
  extras?: Element | Element[] | null;
};

export function createEnterTimeline(targets: EnterTargets) {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  if (targets.header) {
    tl.fromTo(targets.header, { opacity: 0, y: -12 }, { opacity: 1, y: 0, duration: 0.9 });
  }

  if (targets.strip) {
    tl.fromTo(
      targets.strip,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.7 },
      targets.header ? '-=0.5' : 0,
    );
  }

  if (targets.song) {
    tl.fromTo(
      targets.song,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.75 },
      '-=0.35',
    );
  }

  if (targets.lines) {
    tl.fromTo(
      targets.lines,
      { opacity: 0, y: 36 },
      { opacity: 1, y: 0, duration: 0.95, stagger: 0.12 },
      '-=0.45',
    );
  }

  if (targets.links) {
    tl.fromTo(
      targets.links,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.65 },
      '-=0.5',
    );
  }

  if (targets.extras) {
    tl.fromTo(
      targets.extras,
      { opacity: 0, scale: 0.85 },
      { opacity: 1, scale: 1, duration: 0.5, stagger: 0.05 },
      '-=0.4',
    );
  }

  return tl;
}

export function createExitTimeline(targets: {
  song?: Element | null;
  lines?: Element | Element[] | null;
}) {
  const tl = gsap.timeline({ defaults: { ease: 'power2.in' } });

  if (targets.lines) {
    tl.to(targets.lines, { opacity: 0, y: -20, duration: 0.35, stagger: 0.06 });
  }

  if (targets.song) {
    tl.to(targets.song, { opacity: 0, y: -12, duration: 0.3 }, '-=0.2');
  }

  return tl;
}
