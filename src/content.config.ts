import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Tools we build. Entries are Markdown files in src/content/tools/.
 *
 * `status` drives how an entry is presented, so a planned tool can be listed
 * honestly instead of being hidden until launch:
 *   planned  — scoped, not started
 *   building — in active development
 *   beta     — usable, still changing
 *   released — stable
 */
const tools = defineCollection({
  loader: glob({ base: './src/content/tools', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.enum(['planned', 'building', 'beta', 'released']),
    // Lower sorts first; ties fall back to title.
    order: z.number().default(100),
    repo: z.string().url().optional(),
    site: z.string().url().optional(),
    docs: z.string().url().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

/**
 * Writing: method notes, development logs, research.
 */
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('BabelStacks'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { tools, blog };
