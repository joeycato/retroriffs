import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const blog = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './content/blog/stuff' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tags: z.array(z.string()).optional().default([]),
      date: z.coerce.date(),
      img: image().optional(),
      excerpt: z.string().optional(),
    }),
})

export const collections = { blog }
