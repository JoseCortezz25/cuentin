import { z, defineCollection } from 'astro:content';

export const blogCollections = {
  cuentos: defineCollection({
    schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
    }),
  }),
}