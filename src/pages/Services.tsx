
// src/pages/Services.tsx

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import Portfolio from '../components/Portfolio'; 
import ServiceModal from '../components/ServiceModal'; 
import ServiceGrid from '../components/service/ServiceGrid'; // Import the new ServiceGrid component
import PricingSection from '../components/service/PricingSection';
import CallToActionSection from '../components/service/CallToActionSection';

// Import the updated data structure and type
import serviceCategories, { ServiceItem } from '../data/serviceData';

const Services: React.FC = () => {
	// State to manage which service's modal is currently open
	const [selectedService, setSelectedService] = useState<ServiceItem | null>(
		null,
	);

	// Function passed to ServiceGrid to open the modal
	const handleOpenModal = (service: ServiceItem) => {
		setSelectedService(service);
	};

	// Function passed to ServiceModal to handle closing
	const handleCloseModal = () => {
		setSelectedService(null);
	};

	return (
		<div className="min-h-screen flex flex-col overflow-x-hidden bg-gray-50">
			<Header />
			<main className="relative flex-grow pt-[60px]">
				{/* Hero Section */}
				<PageHero
					title="Our Services"
					subtitle="Tailored digital solutions for your business"
				/>
				
				{/* New Service Grid Section - Replacing the ServiceList */}
				<ServiceGrid
					services={serviceCategories.mainServices.filter(s => 
						['Websites', 'E-commerce Solutions', 'Web Applications'].includes(s.title)
					)}
					onOpenModal={handleOpenModal}
				/>
				
				{/* Portfolio Section */}
				<Portfolio />
				
				{/* Pricing Section */}
				<PricingSection />
				
				{/* Final Call to Action Section */}
				<CallToActionSection />
			</main>
			
			{/* Service Modal - Rendered conditionally */}
			{selectedService && (
				<ServiceModal
					isOpen={!!selectedService}
					onClose={handleCloseModal}
					title={selectedService.title}
					description={selectedService.fullDescription}
					// Removed features prop as it no longer exists in the type definitions
					technologyOptions={selectedService.technologyOptions}
					designApproach={selectedService.designApproach}
					standardInclusions={selectedService.standardInclusions}
					optionalAddOns={selectedService.optionalAddOns}
					idealFor={selectedService.idealFor}
				/>
			)}
			<Footer />
		</div>
	);
};

export default Services;
