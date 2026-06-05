/** Header title cycles through these (see README — Header Animation). */
export const HEADER_CYCLE_FONTS = [
  'Amonk Outline',
  'Combat Sport',
  'Drake Viewz',
  'Iced Latte',
  'Ice Princess',
  'Organical',
  'Playfair Display',
  'Playfair Display Bold',
  'Playfair Display Black',
  'Top View',
  'Winter Ice',
] as const;

export type HeaderCycleFont = (typeof HEADER_CYCLE_FONTS)[number];
