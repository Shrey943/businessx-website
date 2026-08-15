/**
 * next/og can't use next/font, so fetch the actual font file straight from
 * Google Fonts at request/build time. Standard pattern from Vercel's OG examples.
 */
export async function loadGoogleFont(font: string, text: string): Promise<ArrayBuffer> {
  const url = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const match = css.match(/src: url\(([^)]+)\) format\('(opentype|truetype)'\)/);

  if (match) {
    const res = await fetch(match[1]);
    if (res.status === 200) {
      return await res.arrayBuffer();
    }
  }

  throw new Error(`Failed to load Google Font: ${font}`);
}
