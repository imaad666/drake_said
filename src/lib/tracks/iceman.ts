import type { Track } from '../types';

const placeholder = (title: string): string[] => [`${title.toUpperCase()} — LYRICS COMING SOON`];

export const icemanTracks: Track[] = [
  {
    slug: 'make-them-cry',
    number: 1,
    title: 'Make Them Cry',
    lines: placeholder('Make Them Cry'),
  },
  {
    slug: 'dust',
    number: 2,
    title: 'Dust',
    lines: placeholder('Dust'),
  },
  {
    slug: 'whisper-my-name',
    number: 3,
    title: 'Whisper My Name',
    lines: [
      'WHISPER MY NAME AND DON\'T SAY IT TOO LOUD',
      '\'CAUSE YOU GOTTA COME HERE AND YOU KNOW I POP OUT',
    ],
  },
  {
    slug: 'janice-stfu',
    number: 4,
    title: 'Janice STFU',
    lines: [
      'THOUGHT THEY HAD ME IN A DEEP SLEEP, BABY.',
      'I\'M STILL SCORCHIN\' HOT IN THESE STREETS,',
      'BABY.',
    ],
  },
  {
    slug: 'ran-to-atlanta',
    number: 5,
    title: 'Ran To Atlanta',
    features: 'Future & Molly Santana',
    lines: placeholder('Ran To Atlanta'),
  },
  {
    slug: 'shabang',
    number: 6,
    title: 'Shabang',
    lines: placeholder('Shabang'),
  },
  {
    slug: 'make-them-pay',
    number: 7,
    title: 'Make Them Pay',
    lines: placeholder('Make Them Pay'),
  },
  {
    slug: 'burning-bridges',
    number: 8,
    title: 'Burning Bridges',
    lines: placeholder('Burning Bridges'),
  },
  {
    slug: 'national-treasures',
    number: 9,
    title: 'National Treasures',
    lines: placeholder('National Treasures'),
  },
  {
    slug: 'bs-on-the-table',
    number: 10,
    title: "B's On The Table",
    features: '21 Savage',
    lines: placeholder("B's On The Table"),
  },
  {
    slug: 'what-did-i-miss',
    number: 11,
    title: 'What Did I Miss?',
    lines: placeholder('What Did I Miss?'),
  },
  {
    slug: 'plot-twist',
    number: 12,
    title: 'Plot Twist',
    lines: placeholder('Plot Twist'),
  },
  {
    slug: '2-hard-4-the-radio',
    number: 13,
    title: '2 Hard 4 The Radio',
    lines: placeholder('2 Hard 4 The Radio'),
  },
  {
    slug: 'make-them-remember',
    number: 14,
    title: 'Make Them Remember',
    lines: placeholder('Make Them Remember'),
  },
  {
    slug: 'little-birdie',
    number: 15,
    title: 'Little Birdie',
    lines: placeholder('Little Birdie'),
  },
  {
    slug: 'dont-worry',
    number: 16,
    title: "Don't Worry",
    lines: placeholder("Don't Worry"),
  },
  {
    slug: 'firm-friends',
    number: 17,
    title: 'Firm Friends',
    lines: placeholder('Firm Friends'),
  },
  {
    slug: 'make-them-know',
    number: 18,
    title: 'Make Them Know',
    lines: placeholder('Make Them Know'),
  },
];
