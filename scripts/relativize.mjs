// Rewrites absolute /assets/ asset URLs in dist/ to relative ones,
// so the built site works from any folder (or a preview host that isn't at "/").
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, relative, dirname } from 'node:path';

const root = new URL('../dist/', import.meta.url).pathname;
async function walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) await walk(p);
    else if (/\.(html|css|js)$/.test(e.name)) {
      const src = await readFile(p, 'utf8');
      let rel = relative(dirname(p), join(root, 'assets')) || '.';
      if (!rel.startsWith('.')) rel = './' + rel;
      // Inside _astro/ itself, files reference siblings.
      const out = src.replace(/(["'(])\/assets\//g, `$1${rel}/`);
      if (out !== src) await writeFile(p, out);
    }
  }
}
await walk(root);
console.log('relativized asset paths');
