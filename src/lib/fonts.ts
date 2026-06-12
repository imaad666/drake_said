const FONT_FALLBACKS: Record<string, string> = {
  'Xanh Mono': 'ui-monospace, monospace',
  Moonscape: 'system-ui, sans-serif',
  Zaberro: 'system-ui, sans-serif',
  'Playfair Display': 'Georgia, serif',
  'Drake Viewz': 'system-ui, sans-serif',
};

export function fontFamilyCss(name: string): string {
  const fallback = FONT_FALLBACKS[name] ?? 'sans-serif';
  return `'${name}', ${fallback}`;
}
