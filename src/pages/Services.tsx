// src/pages/Services.tsx

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import Portfolio from '../components/Portfolio'; // Renders Portfolio section - ensure styling is consistent
import ServiceModal from '../components/ServiceModal'; // This component needs tooltip logic inside
import ServiceList from '../components/service/ServiceList'; // Renders the 3 service cards
import PricingSection from '../components/service/PricingSection'; // Renders Pricing - ensure styling is consistent
import CallToActionSection from '../components/service/CallToActionSection'; // Renders final CTA - ensure styling is consistent

// Import the updated data structure and type
import serviceCategories, { ServiceItem } from '../data/serviceData';

// The ServiceItem type is now imported from serviceData.ts
// Ensure the props in ServiceModal component match this interface accurately

const Services: React.FC = () => {
	// State to manage which service's modal is currently open
	const [selectedService, setSelectedService] = useState<ServiceItem | null>(
		null,
	);

	// Function passed to ServiceList -> ServiceCard to open the modal
	const handleOpenModal = (service: ServiceItem) => {
		setSelectedService(service);
	};

	// Function passed to ServiceModal to handle closing
	const handleCloseModal = () => {
		setSelectedService(null);
	};

	return (
		<div className="min-h-screen flex flex-col overflow-x-hidden bg-gray-50">
			{' '}
			{/* Example background */}
			<Header />
			<main className="relative flex-grow pt-[60px]">
				{' '}
				{/* Adjust padding top based on Header height */}
				{/* Hero Section */}
				<PageHero
					title="Our Services"
					subtitle="Tailored digital solutions for your business"
					// Ensure PageHero uses Comfortaa font and adheres to design guide
				/>
				{/* Service List Section */}
				<ServiceList
					title="Core Service Offerings" // Updated title for clarity
					services={serviceCategories.mainServices} // Uses the updated data with 3 services
					onOpenModal={handleOpenModal} // Callback to open modal
					// Ensure ServiceList and its child ServiceCard adhere to design guide
				/>
				{/* Portfolio Section */}
				<Portfolio /> {/* Ensure Portfolio styling aligns */}
				{/* Pricing Section */}
				<PricingSection /> {/* Ensure Pricing styling aligns */}
				{/* Final Call to Action Section */}
				<CallToActionSection /> {/* Ensure CTA styling aligns */}
			</main>
			{/* Service Modal - Rendered conditionally */}
			{/* The actual tooltip implementation happens within ServiceModal */}
			{selectedService && (
				<ServiceModal
					isOpen={!!selectedService}
					onClose={handleCloseModal}
					// Pass all the data for the selected service to the modal
					title={selectedService.title}
					description={selectedService.fullDescription} // Use fullDescription here
					features={selectedService.features}
					technologyOptions={selectedService.technologyOptions}
					designApproach={selectedService.designApproach}
					standardInclusions={selectedService.standardInclusions}
					optionalAddOns={selectedService.optionalAddOns}
					idealFor={selectedService.idealFor}
					// Ensure ServiceModal correctly uses these props to render the structured content
					// and implements tooltips for technologyOptions
				/>
			)}
			<Footer />
		</div>
	);
};

export default Services;
