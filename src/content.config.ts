import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const products = defineCollection({
	loader: glob({ base: 'src/content/products', pattern: '**/*.md' }),
	schema: z.object({
		id: z.number(),
		name: z.string(),
		description: z.string(),
		price: z.number(),
		image: z.string(),
		benefits: z.array(z.string()),
		extracts: z.array(z.string()),
	}),
});

export const collections = { products };