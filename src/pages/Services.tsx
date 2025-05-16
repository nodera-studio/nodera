
// src/pages/Services.tsx

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import Portfolio from '../components/Portfolio'; 
import ServiceGrid from '../components/service/ServiceGrid'; 
import PricingSection from '../components/service/PricingSection';
import CallToActionSection from '../components/service/CallToActionSection';

// Import the updated data structure
import serviceCategories from '../data/serviceData';

const Services: React.FC = () => {
	return (
		<div className="min-h-screen flex flex-col overflow-x-hidden bg-gray-50">
			<Header />
			<main className="relative flex-grow pt-[60px]">
				{/* Hero Section */}
				<PageHero
					title="Our Services"
					subtitle="Tailored digital solutions for your business"
				/>
				
				{/* New Service Grid Section */}
				<ServiceGrid
					services={serviceCategories.mainServices.filter(s => 
						['Websites', 'E-commerce Solutions', 'Web Applications'].includes(s.title)
					)}
				/>
				
				{/* Portfolio Section */}
				<Portfolio />
				
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
