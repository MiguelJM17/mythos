// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // "file" output (about.html) makes the site work on any static host,
  // including hosts that don't rewrite /about to /about/index.html.
  build: { format: 'file', inlineStylesheets: 'always', assets: 'assets' },
  trailingSlash: 'never',
});
