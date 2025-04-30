// src/data/serviceData.ts

// Interface defining the structure for a single service item
interface ServiceFeature {
	title: string;
	// Add description if features need explanations too
	// description?: string;
}

interface TechnologyOption {
	name: string; // Name of the technology (Tooltip Trigger)
	description: string; // Explanation (Tooltip Content)
	heading?: string; // Optional heading for the tech stack section
	intro?: string; // Optional introductory sentence before the list
	note?: string; // Optional note after the list
}

interface ServiceItemData {
	title: string; // Service Name (Card & Modal Title)
	description: string; // Short description for the service card
	fullDescription: string; // Detailed introductory paragraph for the modal
	designApproach: string; // Explanation of design options for the modal
	technologyOptions: TechnologyOption[]; // Tech stack details for the modal (used with tooltips)
	standardInclusions: { heading: string; items: string[] }; // List of standard included items for the modal
	optionalAddOns: { heading: string; description: string }; // Description of available add-ons for the modal
	features: ServiceFeature[]; // List of key service-specific highlights/features for the modal
	idealFor?: string; // Optional: Who the service is best suited for (for the modal)
}

// Main data export
export const serviceCategories: { mainServices: ServiceItemData[] } = {
	mainServices: [
		// Service 1: Websites
		{
			title: 'Websites',
			description:
				'Professionally designed, responsive websites tailored to showcase your brand or business effectively online.',
			fullDescription:
				'We create beautifully designed, high-performing websites tailored to your specific business goals. From stunning portfolios to professional corporate sites, we focus on user experience, responsive design, and achieving your online presence objectives.',
			designApproach:
				'We offer flexible design options: choose from expertly customized templates for faster deployment or opt for a fully bespoke, custom design crafted uniquely for your brand, animations, and interaction goals. The best approach depends on your timeline, budget, and vision.',
			technologyOptions: [
				{
					heading: 'Technology Options',
					intro: 'We build websites using the best platform for your needs:',
					name: 'Framer',
					description:
						'A modern tool for highly interactive sites with smooth animations, great for visually rich projects.',
				},
				{
					name: 'Webflow',
					description:
						'A powerful visual platform allowing custom design and CMS features without traditional coding, ideal for content-focused sites.',
				},
				{
					name: 'Next.js',
					description:
						'A flexible code-based framework for fast, scalable sites, offering high performance and customization for complex needs.',
					note: '(Platform choice impacts cost and timeline. We\'ll guide you to the best fit.)',
				},
			],
			standardInclusions: {
				heading: 'Standard Inclusions',
				items: [
					'✓ Domain Name Assistance & Setup',
					'✓ Reliable Hosting Configuration',
					'✓ Foundational SEO Strategy & Implementation',
					'✓ Mobile & Tablet Responsive Design',
					'✓ Setup Assistance & Launch Support',
					'✓ Optional Ongoing Maintenance Plans',
				],
			},
			optionalAddOns: {
				heading: 'Available Add-ons',
				description:
					'Enhance your website with features like online booking systems, member areas, advanced animations, blog integration, or specific third-party service integrations (priced separately).',
			},
			features: [
				{ title: 'Custom Visual Design' },
				{ title: 'Mobile-Responsive Layout' },
				{ title: 'Content Management System (CMS)' },
				{ title: 'Optimized Image Galleries' },
				{ title: 'Contact & Inquiry Forms' },
				{ title: 'Performance Optimization' },
			],
			idealFor:
				'Ideal for businesses needing a professional online presence, portfolios, corporate sites, and content-driven websites.',
		},
		// Service 2: Blogs & Content Hubs
		{
			title: 'Blogs & Content Hubs',
			description:
				'Engaging blog platforms designed to share your voice, build community, and drive traffic through valuable content.',
			fullDescription:
				'Establish thought leadership and connect with your audience through a professionally designed blog or content hub. We build platforms optimized for readability, content discovery, and seamless publishing workflows.',
			designApproach:
				'We can tailor established themes to fit your brand or create a fully custom blog design focused on optimal reading experience, clear navigation, and unique brand expression.',
			technologyOptions: [
				{
					heading: 'Content Management Systems',
					intro: 'We build blogs on industry-leading CMS platforms:',
					name: 'Webflow',
					description:
						'Excellent for visually customized blogs with integrated CMS capabilities, offering design flexibility without deep coding.',
				},
				{
					name: 'WordPress',
					description:
						'The most popular blogging platform, known for its vast plugin ecosystem, flexibility, and strong community support. Ideal for feature-rich blogs.',
					note: '(Platform choice depends on customization needs, technical comfort, and desired features.)',
				},
			],
			standardInclusions: {
				heading: 'Standard Inclusions',
				items: [
					'✓ CMS Setup & Configuration (Webflow or WordPress)',
					'✓ Theme Customization or Custom Design Implementation',
					'✓ Responsive Design for All Devices',
					'✓ Foundational SEO Setup (Titles, Metas, Sitemaps)',
					'✓ Category & Tag Structure Planning',
					'✓ Basic Content Publishing Training',
					'✓ Optional Ongoing Maintenance Plans',
				],
			},
			optionalAddOns: {
				heading: 'Available Add-ons',
				description:
					'Enhance your blog with newsletter integration, advanced SEO packages, comment systems (like Disqus), custom post types, membership features, or e-commerce integration for simple products/services.',
			},
			features: [
				{ title: 'Intuitive Content Editor' },
				{ title: 'SEO-Friendly Structure' },
				{ title: 'Customizable Layouts' },
				{ title: 'Social Sharing Integration' },
				{ title: 'Author Profiles & Management' },
				{ title: 'Analytics Integration' },
			],
			idealFor:
				'Businesses, creators, and organizations looking to engage audiences, build authority, drive organic traffic, and manage content effectively.',
		},
		// Service 3: E-commerce Solutions
		{
			title: 'E-commerce Solutions',
			description:
				'Powerful online stores built to sell your products effectively and scale your business.',
			fullDescription:
				'Launch and grow your online store with our comprehensive e-commerce solutions. We build secure, scalable, and user-friendly platforms designed to convert visitors into customers and streamline your sales process.',
			designApproach:
				"Your store's design is crucial. We can customize premium Shopify themes to match your brand identity or develop a completely custom theme for a unique shopping experience, depending on your requirements and budget.",
			technologyOptions: [
				{
					heading: 'Core Platform',
					name: 'Shopify',
					description:
						'We specialize in Shopify, the leading e-commerce platform renowned for its robust features, scalability, app ecosystem, and ease of management for selling products online.',
				},
			],
			standardInclusions: {
				heading: 'Standard Inclusions',
				items: [
					'✓ Shopify Store Setup & Configuration',
					'✓ Theme Customization or Development',
					'✓ Product Setup Guidance',
					'✓ Payment Gateway Integration',
					'✓ Mobile & Tablet Responsive Design',
					'✓ Foundational SEO for E-commerce',
					'✓ Launch Support & Training',
					'✓ Optional Ongoing Maintenance Plans',
				],
			},
			optionalAddOns: {
				heading: 'Available Add-ons',
				description:
					"Expand your store's capabilities with custom Shopify app development, complex third-party integrations (ERP, CRM), subscription models, advanced analytics setup, or internationalization features.",
			},
			features: [
				{ title: 'Intuitive Product Catalogs' },
				{ title: 'Secure Payment Processing' },
				{ title: 'Inventory Management Integration' },
				{ title: 'Mobile Shopping Experience' },
				{ title: 'Order Management & Tracking' },
				{ title: 'Sales Analytics Integration' },
			],
			idealFor:
				'Perfect for retailers, artisans, direct-to-consumer brands, and businesses looking to establish or expand their online sales channels.',
		},
		// Service 4: Web Applications
		{
			title: 'Web Applications',
			description:
				'Custom-built applications designed to solve specific business challenges or offer unique online functionalities.',
			fullDescription:
				'Beyond standard websites, we design and develop custom web applications to automate processes, provide unique online services, or solve specific business challenges. We build scalable, secure, and intuitive applications tailored precisely to your requirements.',
			designApproach:
				"Web applications typically require a fully custom design focused on user workflows, data interaction, and achieving specific functional goals. We prioritize intuitive UI/UX tailored to the application's purpose.",
			technologyOptions: [
				{
					heading: 'Technology Stacks',
					intro: 'We select the optimal technology stack for performance, scalability, and project needs:',
					name: 'Stack 1 (e.g., Angular/Next.js Frontend Focus)',
					description:
						'Utilizes frameworks like Angular or Next.js for complex user interfaces, combined with robust backend databases (Supabase, MongoDB, PostgreSQL). Ideal for data-intensive applications or specific UI requirements.',
				},
				{
					name: 'Stack 2 (e.g., Full-Stack Next.js/Nest.js)',
					description:
						'A modern JavaScript approach using Next.js (frontend/backend) potentially with Nest.js for complex custom backend logic, often paired with Supabase for real-time features and database management. Efficient for streamlined development.',
					note: '(The specific stack is chosen collaboratively based on detailed project analysis.)',
				},
			],
			standardInclusions: {
				heading: 'Standard Inclusions',
				items: [
					'✓ Custom Application Design & Development',
					'✓ Secure Authentication & User Management',
					'✓ Database Design & Integration',
					'✓ API Development & Integration (if needed)',
					'✓ Scalable Cloud Hosting Setup (configuration may vary)',
					'✓ Testing & Quality Assurance',
					'✓ Deployment & Launch Support',
					'✓ Optional Maintenance & Evolution Plans',
				],
			},
			optionalAddOns: {
				heading: 'Available Add-ons',
				description:
					'Integrate third-party APIs, implement advanced reporting dashboards, develop progressive web app (PWA) features, add real-time collaboration tools, or build administrative control panels.',
			},
			features: [
				{ title: 'Tailored User Interfaces (UI)' },
				{ title: 'Custom Business Logic Implementation' },
				{ title: 'Secure Data Management' },
				{ title: 'Role-Based Access Control' },
				{ title: 'Automated Testing Suites' },
				{ title: 'Scalability & Performance Tuning' },
			],
			idealFor:
				'Ideal for startups, established businesses needing automation, SaaS products, or companies requiring specialized online tools beyond standard website functionality.',
		},
	],
};

// Adjusting the ServiceItem type to reflect the new structure for inclusions and add-ons
// And adding optional fields to TechnologyOption for heading, intro, and note
export type ServiceItem = Omit<ServiceItemData, 'technologyOptions' | 'standardInclusions' | 'optionalAddOns'> & {
	technologyOptions: Array<
		TechnologyOption & { heading?: string; intro?: string; note?: string }
	>;
	standardInclusions: { heading: string; items: string[] };
	optionalAddOns: { heading: string; description: string };
};

export default serviceCategories;
