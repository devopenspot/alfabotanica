import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const products = defineCollection({
	loader: glob({ base: 'src/content/products', pattern: '**/*.md' }),
	schema: ({ image }) =>
		z.object({
		id: z.number(),
		name: z.string(),
		title: z.string(),
		description: z.string(),
		price: z.array(z.string()),
		heroImage: image().optional(),
		benefits: z.array(z.string()),
		extracts: z.array(z.string()),
		useMode: z.string().optional(),
	}),
});

export const collections = { products };