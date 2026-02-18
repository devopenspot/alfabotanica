import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const products = defineCollection({
	loader: glob({ base: 'src/content/products', pattern: '**/*.md' }),
	schema: ({ image }) =>
		z.object({
			id: z.number().describe('Unique product identifier'),
			slug: z.string().describe('URL-friendly product slug'),
			name: z.string().min(1).max(100).describe('Product display name'),
			title: z.string().min(1).max(200).describe('Product subtitle/tagline'),
			description: z.string().min(10).max(1000).describe('Product description'),
			price: z.array(z.string().min(1)).min(1).describe('Price options (e.g., "60 ml $30.000")'),
			heroImage: image().optional().describe('Product hero image'),
			benefits: z.array(z.string().min(1)).min(1).describe('List of product benefits'),
			extracts: z.array(z.string().min(1)).describe('Botanical extracts used'),
			useMode: z.string().optional().describe('How to use the product'),
			publishDate: z.date().optional().describe('Publication date for sorting'),
		}),
});

export const collections = { products };
