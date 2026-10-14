import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Ett case = en mapp i src/content/work/ med index.md och bilder.
const work = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      client: z.string(),
      year: z.number(),
      role: z.string().default('Creative director'),
      services: z.array(z.string()).default([]),
      summary: z.string(),
      cover: image(),
      coverAlt: z.string(),
      order: z.number().default(100),
      draft: z.boolean().default(false),
      quote: z
        .object({ text: z.string(), name: z.string(), title: z.string() })
        .optional(),
    }),
});

export const collections = { work };
