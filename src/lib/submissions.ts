// Demo-only submission store. Lives in this browser's localStorage.
// A real version would replace these two functions with API calls.
export const STAGES = [
  { key: 'received', label: 'Received', note: 'Your work is in. We remove your name before anyone reads it.' },
  { key: 'review', label: 'In blind review', note: 'Two student editors are reading it without knowing who wrote it.' },
  { key: 'decision', label: 'Editorial decision', note: 'The editors meet and decide: accept, revise, or not this time.' },
  { key: 'published', label: 'Published', note: 'Your piece appears in an issue of Mythos.' },
] as const;

export interface Submission {
  code: string; title: string; type: string; name: string; date: string; stage: number;
}

const KEY = 'mythos-submissions';

/** A built-in example so the tracker can be tried without submitting anything. */
export const DEMO: Submission = {
  code: 'MYT-0001', title: 'Example submission', type: 'Philosophic paper',
  name: 'Sample student', date: '2026-11-02', stage: 1,
};

export function loadAll(): Submission[] {
  try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch { return []; }
}

/** Returns false if the browser refused to store it. */
export function save(s: Submission): boolean {
  try {
    const all = loadAll().filter((x) => x.code !== s.code);
    localStorage.setItem(KEY, JSON.stringify([s, ...all]));
    return true;
  } catch { return false; }
}

export function find(code: string): Submission | undefined {
  const c = normalize(code);
  if (c === DEMO.code) return DEMO;
  return loadAll().find((s) => s.code === c);
}

export function normalize(code: string): string {
  const digits = code.toUpperCase().replace(/[^0-9]/g, '');
  return digits ? 'MYT-' + digits.padStart(4, '0').slice(-4) : code.trim().toUpperCase();
}

export function newCode(): string {
  return 'MYT-' + String(Math.floor(1000 + Math.random() * 9000));
}
