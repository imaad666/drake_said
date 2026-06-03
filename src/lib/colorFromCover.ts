export type Rgb = { r: number; g: number; b: number };

export function averageColorFromImage(img: HTMLImageElement): Rgb | null {
  if (!img.naturalWidth || !img.naturalHeight) return null;

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  const size = 32;
  canvas.width = size;
  canvas.height = size;
  ctx.drawImage(img, 0, 0, size, size);

  try {
    const { data } = ctx.getImageData(0, 0, size, size);
    let r = 0;
    let g = 0;
    let b = 0;
    let count = 0;
    const step = 4 * 6;

    for (let i = 0; i < data.length; i += step) {
      r += data[i];
      g += data[i + 1];
      b += data[i + 2];
      count += 1;
    }

    if (!count) return null;
    return {
      r: Math.round(r / count),
      g: Math.round(g / count),
      b: Math.round(b / count),
    };
  } catch {
    return null;
  }
}

export function rgbString({ r, g, b }: Rgb): string {
  return `rgb(${r}, ${g}, ${b})`;
}
