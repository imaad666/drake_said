import type { AlbumRecord } from './types';

export const albums: AlbumRecord[] = [
  {
    slug: 'so-far-gone',
    name: 'So Far Gone',
    cover: '/covers/so-far-gone.jpg',
    theme: {
      mode: 'dark',
      accent: '#c9a227',
      background: 'linear-gradient(160deg, #1a1208 0%, #3d2e14 45%, #0d0b08 100%)',
      text: '#f5f0e6',
      muted: 'rgba(245, 240, 230, 0.55)',
    },
    fonts: { lyrics: 'Xanh Mono', songTitle: 'Moonscape' },
    quotes: [
      {
        song: 'Best I Ever Had',
        lines: ['SUCCESFUL,', 'BELIEVE ME WHEN I SAY THAT'],
      },
    ],
  },
  {
    slug: 'thank-me-later',
    name: 'Thank Me Later',
    cover: '/covers/Thank-Me-Later-1.jpg',
    theme: {
      mode: 'dark',
      accent: '#8b7355',
      background: 'linear-gradient(165deg, #141210 0%, #2a2420 50%, #0a0908 100%)',
      text: '#f2ece4',
      muted: 'rgba(242, 236, 228, 0.5)',
    },
    fonts: { lyrics: 'Xanh Mono', songTitle: 'Moonscape' },
    quotes: [
      {
        song: 'Over',
        lines: ['I KNOW WAY TOO MANY PEOPLE HERE', 'THAT I DIDN\'T KNOW LAST YEAR'],
      },
    ],
  },
  {
    slug: 'take-care',
    name: 'Take Care',
    cover: '/covers/take-care.jpg',
    theme: {
      mode: 'dark',
      accent: '#b8860b',
      background: 'linear-gradient(180deg, #0f0e0c 0%, #1c1814 40%, #080807 100%)',
      text: '#efe8dc',
      muted: 'rgba(239, 232, 220, 0.5)',
    },
    fonts: { lyrics: 'Xanh Mono', songTitle: 'Moonscape' },
    quotes: [
      {
        song: 'Headlines',
        lines: ['I MIGHT BE TOO STRUNG OUT ON COMPLIMENTS', 'OVERDOSED ON CONFIDENCE'],
      },
    ],
  },
  {
    slug: 'nothing-was-the-same',
    name: 'Nothing Was The Same',
    cover: '/covers/NWST.jpg',
    theme: {
      mode: 'dark',
      accent: '#6eb5ff',
      background: 'linear-gradient(200deg, #0a1018 0%, #152535 55%, #06080c 100%)',
      text: '#e8f2ff',
      muted: 'rgba(232, 242, 255, 0.5)',
    },
    fonts: { lyrics: 'Xanh Mono', songTitle: 'Moonscape' },
    quotes: [
      {
        song: 'Started From The Bottom',
        lines: ['STARTED FROM THE BOTTOM NOW WE\'RE HERE', 'STARTED FROM THE BOTTOM'],
      },
    ],
  },
  {
    slug: 'iyrtitl',
    name: 'If You\'re Reading This It\'s Too Late',
    cover: '/covers/IYRTITL.jpg',
    theme: {
      mode: 'dark',
      accent: '#e8e4dc',
      background: 'linear-gradient(180deg, #121110 0%, #2a2826 50%, #080807 100%)',
      text: '#f5f3ef',
      muted: 'rgba(245, 243, 239, 0.45)',
    },
    fonts: { lyrics: 'Xanh Mono', songTitle: 'Moonscape' },
    quotes: [
      {
        song: 'Energy',
        lines: ['GOT A LOT OF ENEMIES,', 'GOT A LOT OF PEOPLE TRYNA DRAIN ME OF MY ENERGY'],
      },
    ],
  },
  {
    slug: 'what-a-time-to-be-alive',
    name: 'What A Time To Be Alive',
    cover: '/covers/what-a-time-to-be-alive.jpg',
    theme: {
      mode: 'dark',
      accent: '#d4af37',
      background: 'linear-gradient(145deg, #18140a 0%, #3a3018 45%, #0c0a06 100%)',
      text: '#f8f4e8',
      muted: 'rgba(248, 244, 232, 0.5)',
    },
    fonts: { lyrics: 'Xanh Mono', songTitle: 'Moonscape' },
    quotes: [
      {
        song: 'Jumpman',
        lines: ['IF YOU AIN\'T ON TEAM I GOT A SACK FOR YOU', 'JUMPMAN, JUMPMAN, JUMPMAN'],
      },
    ],
  },
  {
    slug: 'views',
    name: 'Views',
    cover: '/covers/views.jpg',
    theme: {
      mode: 'dark',
      accent: '#7ec8e3',
      background: 'linear-gradient(190deg, #0c1418 0%, #1a3040 50%, #060a0c 100%)',
      text: '#e8f6fc',
      muted: 'rgba(232, 246, 252, 0.5)',
    },
    fonts: { albumTitle: 'Drake Viewz', lyrics: 'Xanh Mono', songTitle: 'Drake Viewz' },
    quotes: [
      {
        song: 'One Dance',
        lines: ['STAY UP ALL NIGHT,', 'GET ME SOME VIEWS'],
      },
    ],
  },
  {
    slug: 'more-life',
    name: 'More Life',
    cover: '/covers/more-life.jpg',
    theme: {
      mode: 'dark',
      accent: '#4ade80',
      background: 'linear-gradient(175deg, #0a120e 0%, #143020 55%, #060a08 100%)',
      text: '#ecfdf5',
      muted: 'rgba(236, 253, 245, 0.5)',
    },
    fonts: { lyrics: 'Xanh Mono', songTitle: 'Moonscape' },
    quotes: [
      {
        song: 'Passionfruit',
        lines: ['PASSIONATE FROM MILES AWAY', 'PASSIVE WITH THE THINGS YOU SAY'],
      },
    ],
  },
  {
    slug: 'scorpion',
    name: 'Scorpion',
    cover: '/covers/scorpion.jpg',
    theme: {
      mode: 'dark',
      accent: '#fbbf24',
      background: 'linear-gradient(180deg, #141008 0%, #2a2010 45%, #080604 100%)',
      text: '#fef9e7',
      muted: 'rgba(254, 249, 231, 0.5)',
    },
    fonts: { lyrics: 'Xanh Mono', songTitle: 'Moonscape' },
    quotes: [
      {
        song: 'God\'s Plan',
        lines: ['GOD\'S PLAN, GOD\'S PLAN', 'I CAN\'T DO THIS ON MY OWN'],
      },
    ],
  },
  {
    slug: 'dark-lane-demo-tapes',
    name: 'Dark Lane Demo Tapes',
    cover: '/covers/dld.jpg',
    theme: {
      mode: 'dark',
      accent: '#a78bfa',
      background: 'linear-gradient(200deg, #100c18 0%, #221a35 50%, #08060c 100%)',
      text: '#f3efff',
      muted: 'rgba(243, 239, 255, 0.5)',
    },
    fonts: { lyrics: 'Xanh Mono', songTitle: 'Moonscape' },
    quotes: [
      {
        song: 'Toosie Slide',
        lines: ['IT GO RIGHT FOOT UP, LEFT FOOT SLIDE', 'LEFT FOOT UP, RIGHT FOOT SLIDE'],
      },
    ],
  },
  {
    slug: 'certified-lover-boy',
    name: 'Certified Lover Boy',
    cover: '/covers/clb.jpg',
    theme: {
      mode: 'dark',
      accent: '#f472b6',
      background: 'linear-gradient(165deg, #180c14 0%, #351a28 50%, #0a0608 100%)',
      text: '#fdf2f8',
      muted: 'rgba(253, 242, 248, 0.5)',
    },
    fonts: { lyrics: 'Xanh Mono', songTitle: 'Moonscape' },
    quotes: [
      {
        song: 'Way 2 Sexy',
        lines: ['TOO SEXY FOR THIS GRID', 'TOO SEXY FOR THIS WORLD'],
      },
    ],
  },
  {
    slug: 'honestly-nevermind',
    name: 'Honestly, Nevermind',
    cover: '/covers/honestly-nevermind.jpg',
    theme: {
      mode: 'dark',
      accent: '#22d3ee',
      background: 'linear-gradient(190deg, #0a1014 0%, #12303a 55%, #060a0c 100%)',
      text: '#ecfeff',
      muted: 'rgba(236, 254, 255, 0.5)',
    },
    fonts: { lyrics: 'Xanh Mono', songTitle: 'Moonscape' },
    quotes: [
      {
        song: 'Sticky',
        lines: ['LINK UP, MEET AT THE BAR', 'STICKY, STICKY, STICKY'],
      },
    ],
  },
  {
    slug: 'her-loss',
    name: 'Her Loss',
    cover: '/covers/her-loss.jpg',
    theme: {
      mode: 'dark',
      accent: '#fb7185',
      background: 'linear-gradient(180deg, #140a0c 0%, #2a1418 50%, #080406 100%)',
      text: '#fff1f2',
      muted: 'rgba(255, 241, 242, 0.5)',
    },
    fonts: { lyrics: 'Xanh Mono', songTitle: 'Moonscape' },
    quotes: [
      {
        song: 'Rich Flex',
        lines: ['WE AIN\'T GOIN FOR A SPIN', 'WE AIN\'T GOIN FOR A RIDE'],
      },
    ],
  },
  {
    slug: 'for-all-the-dogs',
    name: 'For All The Dogs',
    cover: '/covers/for-all-the-dogs.jpg',
    theme: {
      mode: 'dark',
      accent: '#f97316',
      background: 'linear-gradient(175deg, #14100a 0%, #2a1c10 50%, #080604 100%)',
      text: '#fff7ed',
      muted: 'rgba(255, 247, 237, 0.5)',
    },
    fonts: { lyrics: 'Xanh Mono', songTitle: 'Moonscape' },
    quotes: [
      {
        song: 'First Person Shooter',
        lines: ['FIRST PERSON SHOOTER MODE', 'WE TURNIN\' YOUR SQUAD TO A MEME'],
      },
    ],
  },
  {
    slug: 'scary-hours',
    name: 'Scary Hours',
    cover: '/covers/some-sexy-songs.jpg',
    theme: {
      mode: 'dark',
      accent: '#94a3b8',
      background: 'linear-gradient(180deg, #0e1014 0%, #1e2430 50%, #06080a 100%)',
      text: '#f1f5f9',
      muted: 'rgba(241, 245, 249, 0.5)',
    },
    fonts: { lyrics: 'Xanh Mono', songTitle: 'Moonscape' },
    quotes: [
      {
        song: 'God\'s Plan',
        lines: ['BAD THINGS, IT\'S A LOT OF BAD THINGS', 'THEY WISHIN\' AND WISHIN\''],
      },
    ],
  },
  {
    slug: 'habibti',
    name: 'Habibti',
    cover: '/covers/HABIBTI.jpg',
    theme: {
      mode: 'dark',
      accent: '#d4c4a8',
      background:
        'linear-gradient(175deg, #141210 0%, #2a2620 45%, #0a0908 100%)',
      text: '#f0ebe3',
      muted: 'rgba(240, 235, 227, 0.5)',
    },
    fonts: { lyrics: 'Xanh Mono', songTitle: 'Moonscape' },
    quotes: [
      {
        song: 'WNBA',
        lines: [
          'FROM THE BIGGEST SOUND,',
          'MY BELOVED.',
        ],
      },
      {
        song: 'Slap The City',
        lines: [
          'SLAP THE CITY,',
          'MAKE IT RING OUT.',
        ],
      },
    ],
  },
  {
    slug: 'iceman',
    name: 'Iceman',
    cover: '/covers/ice.png',
    featured: true,
    theme: {
      mode: 'dark',
      accent: '#4da6ff',
      background:
        'radial-gradient(ellipse 120% 80% at 50% 20%, rgba(77, 166, 255, 0.12) 0%, transparent 55%), linear-gradient(180deg, #0a0c10 0%, #12161c 35%, #06080a 100%)',
      text: '#f5f8fc',
      muted: 'rgba(245, 248, 252, 0.55)',
    },
    fonts: { albumTitle: 'Zaberro', lyrics: 'Xanh Mono', songTitle: 'Moonscape' },
    quotes: [
      {
        song: 'Janice STFU',
        lines: [
          'THOUGHT THEY HAD ME IN A DEEP SLEEP, BABY.',
          'I\'M STILL SCORCHIN\' HOT IN THESE STREETS,',
          'BABY.',
        ],
      },
      {
        song: 'Whisper My Name',
        lines: [
          'WHISPER MY NAME AND DON\'T SAY IT TOO LOUD',
          '\'CAUSE YOU GOTTA COME HERE AND YOU KNOW I POP OUT',
        ],
      },
    ],
  },
  {
    slug: 'maid-of-honour',
    name: 'Maid of Honour',
    cover: '/covers/maid.png',
    theme: {
      mode: 'dark',
      accent: '#c9a88a',
      background:
        'linear-gradient(165deg, #1a1410 0%, #352820 50%, #0c0a08 100%)',
      text: '#f5ede6',
      muted: 'rgba(245, 237, 230, 0.5)',
    },
    fonts: { lyrics: 'Xanh Mono', songTitle: 'Moonscape' },
    quotes: [
      {
        song: 'Maid of Honour',
        lines: [
          'STANDING RIGHT BESIDE YOU',
          'WHEN THE NIGHT GETS HEAVY',
        ],
      },
    ],
  },
];

export const albumBySlug = new Map(albums.map((a) => [a.slug, a]));

export const navAlbumSlugs = [
  'thank-me-later',
  'take-care',
  'nothing-was-the-same',
  'views',
  'more-life',
  'habibti',
  'iceman',
  'maid-of-honour',
  'scorpion',
  'dark-lane-demo-tapes',
  'certified-lover-boy',
  'honestly-nevermind',
  'for-all-the-dogs',
] as const;

export function getNavAlbums(): AlbumRecord[] {
  return navAlbumSlugs
    .map((slug) => albumBySlug.get(slug))
    .filter((a): a is AlbumRecord => Boolean(a));
}

export function getAlbum(slug: string): AlbumRecord | undefined {
  return albumBySlug.get(slug);
}

export function pickQuote(album: AlbumRecord, index?: number): AlbumRecord['quotes'][0] {
  const quotes = album.quotes;
  if (index !== undefined && index >= 0 && index < quotes.length) {
    return quotes[index];
  }
  return quotes[Math.floor(Math.random() * quotes.length)] ?? quotes[0];
}
