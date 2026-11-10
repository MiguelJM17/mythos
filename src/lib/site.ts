/**
 * Builds links that work both in `astro dev` (/about) and in the static
 * build (about.html, relative), so the site runs from any folder or host.
 */
export function href(path: string, currentPath: string): string {
  const clean = path.replace(/^\/+/, '');
  if (import.meta.env.DEV) return '/' + clean;
  const depth = currentPath.replace(/^\/+/, '').split('/').length - 1;
  const prefix = depth > 0 ? '../'.repeat(depth) : './';
  if (clean === '') return prefix + 'index.html';
  const [p, hash] = clean.split('#');
  return prefix + p + '.html' + (hash ? '#' + hash : '');
}

export const SECTIONS = [
  { id: 'philosophy', label: 'Philosophy', blurb: 'Philosophic papers: a thesis, the strongest objection, and a reply.' },
  { id: 'literature', label: 'Literature', blurb: 'Short essays, poems and other literary work.' },
] as const;
export type SectionId = (typeof SECTIONS)[number]['id'];

export function readingTime(body = ''): string {
  const words = body.replace(/[#>*_`\-\[\]()]/g, ' ').split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 230));
  return `${minutes} min read`;
}

export function formatDate(d: Date): string {
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', timeZone: 'UTC' });
}
