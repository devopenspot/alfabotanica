import type { Availability } from 'astro:content';

export interface OrganizationSchema {
	name: string;
	url: string;
	logo: string;
	phone: string;
	email?: string;
}

export interface WebsiteSchema {
	name: string;
	url: string;
	description: string;
}

export interface LocalBusinessSchema {
	name: string;
	url: string;
	logo: string;
	phone: string;
	email?: string;
	address: {
		streetAddress?: string;
		addressLocality: string;
		addressRegion: string;
		postalCode?: string;
		addressCountry: string;
	};
	geo?: {
		latitude: string;
		longitude: string;
	};
	openingHours?: string[];
	priceRange?: string;
}

export interface BreadcrumbItem {
	name: string;
	url: string;
}

export interface BreadcrumbSchema {
	items: BreadcrumbItem[];
}

export interface FAQItem {
	question: string;
	answer: string;
}

export interface FAQSchema {
	mainEntity: FAQItem[];
}

export interface ProductSchema {
	name: string;
	description: string;
	image: string;
	category: string;
	price: string;
	currency: string;
	availability: Availability;
	brand?: string;
	sku?: string;
}

interface StructuredDataOptions {
	organization: OrganizationSchema;
	website: WebsiteSchema;
	localBusiness?: LocalBusinessSchema;
	breadcrumb?: BreadcrumbSchema;
	faq?: FAQSchema;
	product?: ProductSchema;
}

export function generateOrganizationSchema(org: OrganizationSchema): object {
	return {
		'@type': 'Organization',
		'@id': `${org.url}/#organization`,
		name: org.name,
		url: org.url,
		logo: {
			'@type': 'ImageObject',
			url: org.logo,
		},
		contactPoint: {
			'@type': 'ContactPoint',
			telephone: `+${org.phone}`,
			contactType: 'customer service',
			availableLanguage: 'Spanish',
		},
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Colombia',
			addressCountry: 'CO',
		},
		sameAs: [`https://wa.me/${org.phone}`],
	};
}

export function generateWebsiteSchema(site: WebsiteSchema): object {
	return {
		'@type': 'WebSite',
		'@id': `${site.url}/#website`,
		url: site.url,
		name: site.name,
		description: site.description,
		inLanguage: 'es-CO',
	};
}

export function generateProductSchema(product: ProductSchema): object {
	const offer: Record<string, unknown> = {
		'@type': 'Offer',
		price: product.price,
		priceCurrency: product.currency,
		availability: `https://schema.org/${product.availability === 'in_stock' ? 'InStock' : product.availability === 'out_of_stock' ? 'OutOfStock' : 'PreOrder'}`,
	};

	if (product.sku) {
		offer.sku = product.sku;
	}

	return {
		'@type': 'Product',
		name: product.name,
		description: product.description,
		image: product.image,
		category: product.category,
		brand: product.brand ? {
			'@type': 'Brand',
			name: product.brand,
		} : undefined,
		offers: offer,
	};
}

export function generateLocalBusinessSchema(business: LocalBusinessSchema): object {
	return {
		'@type': 'LocalBusiness',
		'@id': `${business.url}/#business`,
		name: business.name,
		url: business.url,
		logo: business.logo,
		telephone: `+${business.phone}`,
		email: business.email,
		address: {
			'@type': 'PostalAddress',
			streetAddress: business.address.streetAddress,
			addressLocality: business.address.addressLocality,
			addressRegion: business.address.addressRegion,
			postalCode: business.address.postalCode,
			addressCountry: business.address.addressCountry,
		},
		geo: business.geo ? {
			'@type': 'GeoCoordinates',
			latitude: business.geo.latitude,
			longitude: business.geo.longitude,
		} : undefined,
		openingHoursSpecification: business.openingHours?.map(hours => {
			const [days, timeRange] = hours.split(' ');
			const [openTime, closeTime] = timeRange.split('-');
			return {
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: days === 'Mo-Fr' ? ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] : days === 'Sa' ? 'Saturday' : days === 'Su' ? 'Sunday' : days,
				opens: openTime,
				closes: closeTime,
			};
		}),
		priceRange: business.priceRange,
	};
}

export function generateBreadcrumbListSchema(breadcrumb: BreadcrumbSchema): object {
	return {
		'@type': 'BreadcrumbList',
		itemListElement: breadcrumb.items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: item.url,
		})),
	};
}

export function generateFAQPageSchema(faq: FAQSchema): object {
	return {
		'@type': 'FAQPage',
		mainEntity: faq.mainEntity.map(faqItem => ({
			'@type': 'Question',
			name: faqItem.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: faqItem.answer,
			},
		})),
	};
}

export function generateStructuredData(options: StructuredDataOptions): string {
	const graph: object[] = [
		generateOrganizationSchema(options.organization),
		generateWebsiteSchema(options.website),
	];

	if (options.localBusiness) {
		graph.push(generateLocalBusinessSchema(options.localBusiness));
	}

	if (options.breadcrumb) {
		graph.push(generateBreadcrumbListSchema(options.breadcrumb));
	}

	if (options.faq) {
		graph.push(generateFAQPageSchema(options.faq));
	}

	if (options.product) {
		graph.push(generateProductSchema(options.product));
	}

	const schema: Record<string, unknown> = {
		'@context': 'https://schema.org',
		'@graph': graph,
	};

	return JSON.stringify(schema);
}
