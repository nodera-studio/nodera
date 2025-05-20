
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
import { Check } from 'lucide-react';

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
				
				{/* Why Choose Nodera Section */}
				<section className="py-16 md:py-24" style={{ backgroundColor: '#f1f3fb' }}>
					<div className="container mx-auto px-4">
						<h2 className="text-3xl md:text-4xl font-comfortaa font-bold text-center mb-10">Why Choose Nodera?</h2>
						
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
							<div className="bg-white rounded-lg p-6 shadow-sm flex flex-col items-start">
								<div className="bg-blue-100 p-3 rounded-full mb-4">
									<Check className="h-6 w-6 text-blue-600" />
								</div>
								<h3 className="font-comfortaa font-bold text-xl mb-2">Expertise & Experience</h3>
								<p className="text-gray-600 font-baloo">Our team brings years of industry expertise to every project, ensuring professional results.</p>
							</div>
							
							<div className="bg-white rounded-lg p-6 shadow-sm flex flex-col items-start">
								<div className="bg-blue-100 p-3 rounded-full mb-4">
									<Check className="h-6 w-6 text-blue-600" />
								</div>
								<h3 className="font-comfortaa font-bold text-xl mb-2">Client-Centered Approach</h3>
								<p className="text-gray-600 font-baloo">We prioritize your vision and goals, maintaining close communication throughout the process.</p>
							</div>
							
							<div className="bg-white rounded-lg p-6 shadow-sm flex flex-col items-start">
								<div className="bg-blue-100 p-3 rounded-full mb-4">
									<Check className="h-6 w-6 text-blue-600" />
								</div>
								<h3 className="font-comfortaa font-bold text-xl mb-2">Innovative Solutions</h3>
								<p className="text-gray-600 font-baloo">We leverage cutting-edge technologies to deliver modern, future-proof digital experiences.</p>
							</div>
						</div>
					</div>
				</section>
				
				{/* Service Overview Section - Apple-inspired layout with vertical gradient */}
				<section className="py-16 md:py-24" style={{ background: 'linear-gradient(to bottom, #f1f3fb 0%, #f9f9f9 100%)' }}>
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
