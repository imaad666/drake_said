import type { Track } from '../types';
import { icemanTracks } from './iceman';

const tracksByAlbum = new Map<string, Track[]>([['iceman', icemanTracks]]);

export function albumHasTracks(slug: string): boolean {
  return tracksByAlbum.has(slug);
}

export function getTracksForAlbum(albumSlug: string): Track[] {
  return tracksByAlbum.get(albumSlug) ?? [];
}

export function getTrack(albumSlug: string, trackSlug: string): Track | undefined {
  return getTracksForAlbum(albumSlug).find((t) => t.slug === trackSlug);
}

export function getAdjacentTracks(
  albumSlug: string,
  trackSlug: string,
): { prev: Track | null; next: Track | null } {
  const tracks = getTracksForAlbum(albumSlug);
  const index = tracks.findIndex((t) => t.slug === trackSlug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? tracks[index - 1] : null,
    next: index < tracks.length - 1 ? tracks[index + 1] : null,
  };
}

export function getTrackAlbumsWithPaths(): { album: string; track: string }[] {
  const paths: { album: string; track: string }[] = [];
  for (const [album, tracks] of tracksByAlbum) {
    for (const track of tracks) {
      paths.push({ album, track: track.slug });
    }
  }
  return paths;
}
