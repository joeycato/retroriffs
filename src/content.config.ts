import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const blog = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './content/blog/stuff' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      seoTitle: z.string().optional(),
      tags: z.array(z.string()).optional().default([]),
      priority: z.number(),
      date: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      img: image().optional(),
      excerpt: z.string().optional(),
    }),
})

export const collections = { blog }
