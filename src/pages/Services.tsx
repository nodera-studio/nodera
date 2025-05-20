
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CallToActionSection from '../components/service/CallToActionSection';
import PricingSection from '../components/service/PricingSection';
import ServiceHero from '../components/service/ServiceHero';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import BrowserWindow from '../components/whatwedo/BrowserWindow';

// Import the service data
import serviceCategories from '../data/serviceData';

const Services: React.FC = () => {
	// Function to create slugs from titles
	const convertToSlug = (title: string): string => {
		return title
			.toLowerCase()
			.replace(/[^\w ]+/g, '')
			.replace(/ +/g, '-');
	};
  
	return (
		<div className="min-h-screen flex flex-col overflow-x-hidden bg-gray-50">
			<Header />
			<main className="relative flex-grow pt-[60px]">
				{/* Hero Section */}
				<ServiceHero />
				
				{/* Service Overview Section - Apple-inspired layout */}
				<section className="py-16 md:py-24" style={{ backgroundColor: '#f1f3fb' }}>
					<div className="container mx-auto">
						<h2 className="text-3xl md:text-4xl font-comfortaa font-bold text-center mb-16">Core Service Offerings</h2>
						
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[85%] mx-auto">
							{serviceCategories.mainServices.map((service) => (
								<div key={service.title} className="flex flex-col">
									{/* Service showcase with image */}
									<div className="mb-6 aspect-[4/3]">
										<BrowserWindow className="h-full">
											<div className="bg-gradient-to-b from-gray-50 to-gray-100 h-full flex items-center justify-center p-4">
												<div className="text-center">
													<h3 className="text-xl font-comfortaa font-bold mb-2">{service.title}</h3>
													<p className="text-sm text-gray-600">Professional digital solutions</p>
												</div>
											</div>
										</BrowserWindow>
									</div>
									
									{/* Service description */}
									<h3 className="text-xl font-comfortaa font-bold mb-2">{service.title}</h3>
									<p className="text-base font-baloo text-gray-600 mb-4 flex-grow">
										{service.description}
									</p>
									
									{/* Learn more button */}
									<div className="mt-auto">
										<Button asChild className="w-full">
											<Link to={`/services/${convertToSlug(service.title)}`}>
												Learn more
											</Link>
										</Button>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
				
				{/* Pricing Section */}
				<PricingSection />
				
				{/* Final Call to Action Section */}
				<CallToActionSection />
			</main>
			<Footer />
		</div>
	);
};

export default Services;
