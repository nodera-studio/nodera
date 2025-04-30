// src/data/serviceData.ts

interface ServiceFeature {
	title: string;
}

interface TechnologyOption {
	name: string;
	description: string;
}

interface ServiceItemData {
	title: string;
	description: string;
	fullDescription: string;
	designApproach: string;
	technologyOptions: TechnologyOption[];
	standardInclusions: string[];
	optionalAddOns: string;
	// features field is removed based on request
	idealFor?: string;
}

export const serviceCategories: { mainServices: ServiceItemData[] } = {
	mainServices: [
		// Service 1: Websites
		{
			title: 'Websites',
			description:
				'Professionally designed, responsive websites tailored to showcase your brand or business effectively online.',
			fullDescription:
				'We craft responsive, high-performance websites focused on achieving your business objectives through exceptional design and user experience. We translate your vision into a professional online presence that effectively communicates your brand value, engages visitors, and meets modern web standards for performance and accessibility.',
			designApproach:
				'We offer flexible design options: choose from expertly customized templates for faster deployment or opt for a fully bespoke, custom design crafted uniquely for your brand, animations, and interaction goals. The best approach depends on your timeline, budget, and vision.',
			technologyOptions: [
				{
					name: 'Framer',
					description:
						'A modern design tool for building highly interactive marketing sites and landing pages with advanced animations.',
				},
				{
					name: 'Webflow',
					description:
						'A powerful visual development platform allowing extensive design customization and CMS capabilities without traditional coding.',
				},
				{
					name: 'Next.js',
					description:
						'A flexible React framework enabling fast, server-rendered or static websites with excellent performance and SEO capabilities.',
				},
			],
			standardInclusions: [
				'Domain Name Assistance & Setup',
				'Reliable Hosting Configuration',
				'Foundational SEO Strategy & Implementation',
				'Mobile & Tablet Responsive Design',
				'Cross-Browser Compatibility Testing',
				'Setup Assistance & Launch Support',
				'Optional Ongoing Maintenance Plans',
			],
			optionalAddOns:
				'Enhance your website with features like simple booking forms (using integrated tools), basic member areas, advanced animations, extensive blog capabilities, or specific third-party API integrations (priced separately). For complex custom systems, please see our Web Applications service.',
			// features array removed
			idealFor:
				'Ideal for businesses, professionals, artists, and organizations requiring a high-quality informational site, portfolio, blog, or online brochure.',
		},
		// Service 2: E-commerce Solutions
		{
			title: 'E-commerce Solutions',
			description:
				'Powerful online stores built to sell your products effectively and scale your business.',
			fullDescription:
				'Launch and grow your online store with our comprehensive e-commerce solutions. We build secure, scalable, and user-friendly online shops designed to convert visitors into customers and streamline your entire sales process from Browse to checkout.',
			designApproach:
				"Your store's design is crucial for trust and sales. We can expertly customize premium Shopify themes to align with your brand or develop a completely custom theme for a truly unique and optimized shopping experience, based on your specific goals and budget.",
			technologyOptions: [
				{
					name: 'Shopify',
					description:
						'We specialize in Shopify, the leading hosted e-commerce platform renowned for its robust features, security, scalability, extensive app ecosystem, and ease of management.',
				},
			],
			standardInclusions: [
				'Shopify Store Setup & Configuration',
				'Theme Customization or Development',
				'Product Catalog Setup Guidance',
				'Secure Payment Gateway Integration',
				'Mobile & Tablet Optimized Shopping Experience',
				'Foundational SEO for E-commerce',
				'Launch Support & Basic Training',
				'Optional Ongoing Maintenance Plans',
			],
			optionalAddOns:
				"Expand your store's capabilities with custom Shopify app features, complex third-party integrations (like ERP, CRM, advanced analytics), subscription models, international currency/language setup, or advanced marketing automation connections.",
			// features array removed
			idealFor:
				'Perfect for retailers, artisans, direct-to-consumer (DTC) brands, and any business looking to establish or significantly grow their online sales channel.',
		},
		// Service 3: Web Applications
		{
			title: 'Web Applications',
			description:
				'Custom-built applications designed to solve specific business challenges or offer unique online functionalities.',
			fullDescription:
				'For requirements extending beyond standard content presentation or out-of-the-box e-commerce, our Web Applications service delivers bespoke digital solutions. We engineer robust, scalable platforms with custom backend logic, complex database interactions, API integrations, and unique user workflows designed to automate processes, provide specialized online services, or tackle specific operational challenges.',
			designApproach:
				'Web applications demand a user-centric, function-first design approach. We focus on creating intuitive interfaces (UI/UX) for potentially complex workflows, ensuring usability, security, and performance are prioritized throughout the custom architecture and development lifecycle.',
			technologyOptions: [
				// Renamed and updated stacks
				{
					name: 'Next.js + Supabase',
					description:
						'Combines the powerful Next.js framework for frontend development with Supabase for managed PostgreSQL database, authentication, and real-time backend services. Ideal for rapid development and projects benefiting from cloud functions and managed infrastructure.',
				},
				{
					name: 'Full-Stack Custom Architecture',
					description:
						'Offers complete architectural control using frontend frameworks like Angular or React (with Next.js), combined with custom backend development via Node.js (using Express or Nest.js). Integrates with self-managed databases (PostgreSQL, MongoDB) or cloud options (Supabase). Best suited for complex, tailored requirements and maximum system control.',
				},
			],
			standardInclusions: [
				'In-depth Requirements Analysis & Solution Architecture',
				'Custom UI/UX Design & Interactive Prototyping',
				'Agile Frontend & Backend Development Sprints',
				'Secure Authentication & Authorization Implementation',
				'Database Schema Design & ORM/Query Builder Setup',
				'RESTful/GraphQL API Design & Development',
				'Scalable Cloud Deployment (e.g., Vercel, AWS, Azure) & CI/CD Pipeline',
				'Comprehensive Unit, Integration & End-to-End Testing',
				'Deployment & Post-Launch Monitoring Configuration',
				'Optional Service Level Agreements (SLAs) & Evolution Plans',
			],
			optionalAddOns:
				'Integrate complex third-party APIs, implement advanced data visualization or reporting dashboards, develop progressive web app (PWA) capabilities, add real-time collaboration features (WebSockets), build sophisticated administrative control panels, or incorporate AI/ML model integrations.',
			// features array removed
			idealFor:
				'Ideal for startups launching SaaS products, established businesses needing process automation, companies requiring specialized online tools, custom booking/membership platforms, or projects demanding functionality beyond standard websites or e-commerce platforms.', // Updated to include examples
		},
	],
};

export type ServiceItem = ServiceItemData;

export default serviceCategories;
