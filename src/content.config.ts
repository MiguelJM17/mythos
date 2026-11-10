import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const pieces = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pieces' }),
  schema: z.object({
    title: z.string(),
    dek: z.string(),
    author: z.string(),
    section: z.enum(['philosophy', 'literature']),
    form: z.string(), // e.g. "Philosophic paper", "Short essay", "Poem"
    context: z.string().optional(),
    tags: z.array(z.string()).default([]),
    issue: z.string(),
    date: z.coerce.date(),
    featured: z.boolean().default(false),
    references: z.array(z.string()).default([]),
    example: z.boolean().default(false),
  }),
});

export const collections = { pieces };
