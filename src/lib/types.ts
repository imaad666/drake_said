export type AlbumQuote = {
  song: string;
  lines: string[];
};

export type AlbumTheme = {
  mode: 'dark' | 'light';
  accent: string;
  background: string;
  text: string;
  muted: string;
};

export type AlbumRecord = {
  slug: string;
  name: string;
  cover: string;
  theme: AlbumTheme;
  fonts: {
    albumTitle?: string;
    lyrics: string;
    songTitle: string;
  };
  quotes: AlbumQuote[];
  featured?: boolean;
};
