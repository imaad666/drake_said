# Drake Said (drizzy)

Quote gallery inspired by [drakesaid.com](https://drakesaid.com), rebuilt with **Astro 6**, **React islands**, **GSAP**, **Lenis**, and **View Transitions**.

## Stack

- **Astro** — layouts, static album routes, client router for smooth navigations
- **React** — `AlbumStrip`, `QuoteHero`, `AlbumGrid`, scroll + enter animations
- **GSAP** — page enter timelines, grid stagger, strip animations
- **Lenis** — smooth scroll on album pages

## Commands

```bash
npm install
npm run dev      # http://localhost:4321
npm run build
npm run preview
```

## Routes

| Path | Page |
|------|------|
| `/` | Album grid (home) |
| `/iceman` | Vertical scroll through all 18 tracks |
| `/iceman/{track-slug}` | Redirects to `/iceman#{track-slug}` |
| `/{album-slug}` | Any album in `src/lib/albums.ts` |

## Project layout

```
src/
  components/     # Reusable UI (strip, hero, grid, lenis)
  layouts/        # BaseLayout + theme CSS variables
  lib/albums.ts   # Album metadata + quotes (edit here)
  lib/tracks/     # Per-album tracklists (iceman.ts → 18 tracks)
  pages/          # index + [album] template
public/
  covers/ → ../covers
  fonts/  → ../fonts
```

## Fonts

- **Home header**: cycles every 500ms through 11 display fonts (`src/lib/headerFonts.ts`)
- **Album header** (“DRAKE SAID”): Playfair Display on quote pages; **Drake Viewz** on lyrics/track pages (Iceman)
- **Lyrics**: Xanh Mono — set per album via `album.fonts.lyrics`
- **Song titles**: Moonscape — `album.fonts.songTitle`
- **Album accent** (track/song labels): e.g. Zaberro on Iceman — `album.fonts.albumTitle`

## Lyrics view navigation

- **Switch albums**: cover strip below the header — persists across navigations (no full reload feel)
- **Switch tracks** (Iceman): scroll down (snaps per track) or use the **vertical track list** on the left; scroll **up** from track 01 to reach the album strip
- **Home**: click “DRAKE SAID” or go to `/`

Album-to-album transitions keep the **header**, **strip**, and **background** in place; only lyrics/content crossfade. Theme colors tween smoothly via `AlbumTheme`.

2026 trilogy albums: **Habibti** (`/habibti`), **Iceman** (`/iceman`), **Maid of Honour** (`/maid-of-honour`).

Legacy static HTML (`index.html`, `iceman.html`) remains in the repo root for reference.
