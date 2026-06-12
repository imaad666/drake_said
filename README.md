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

- **Home header**: cycles every 500ms through 11 display fonts (`src/lib/headerFonts.ts`) — Amonk Outline, Combat Sport, Drake Viewz, Iced Latte, Ice Princess, Organical, Playfair Display (regular / bold / black), Top View, Winter Ice
- **Album header**: Playfair Display (stable)
- **Lyrics**: Xanh Mono
- **Song titles**: Moonscape
- **Iceman accent**: Zaberro

2026 trilogy albums: **Habibti** (`/habibti`), **Iceman** (`/iceman`), **Maid of Honour** (`/maid-of-honour`).

Legacy static HTML (`index.html`, `iceman.html`) remains in the repo root for reference.
