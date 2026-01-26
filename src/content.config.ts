import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const products = defineCollection({
	loader: glob({ base: './src/content/products', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			id: z.number(),
			name: z.string(),
			description: z.string(),
			price: z.number(),
			image: z.string(),
		}),
});

export const collections = { products };