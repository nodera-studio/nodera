
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceGrid from '../components/service/ServiceGrid'; 
import PricingSection from '../components/service/PricingSection';
import CallToActionSection from '../components/service/CallToActionSection';
import ServiceHero from '../components/service/ServiceHero';

// Import the updated data structure
import serviceCategories from '../data/serviceData';

const Services: React.FC = () => {
	return (
		<div className="min-h-screen flex flex-col overflow-x-hidden bg-gray-50">
			<Header />
			<main className="relative flex-grow pt-[60px]">
				{/* Hero Section */}
				<ServiceHero />
				
				{/* Tabbed Service Grid Section */}
				<ServiceGrid
					services={serviceCategories.mainServices}
				/>
				
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
