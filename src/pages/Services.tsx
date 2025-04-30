
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import Portfolio from '../components/Portfolio';
import ServiceModal from '../components/ServiceModal';
import ServiceList from '../components/service/ServiceList';
import PricingSection from '../components/service/PricingSection';
import CallToActionSection from '../components/service/CallToActionSection';
import serviceCategories from '../data/serviceData';

interface ServiceItem {
  title: string;
  description: string;
  fullDescription: string;
  features: { title: string }[];
  technologyOptions?: { name: string; description: string }[];
  designApproach?: string;
  standardInclusions?: string[];
  optionalAddOns?: string;
  idealFor?: string;
}

const Services = () => {
  const [selectedService, setSelectedService] = useState<null | ServiceItem>(null);
  
  const handleOpenModal = (service: ServiceItem) => {
    setSelectedService(service);
  };
  
  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />

      <main className="relative flex-grow pt-[60px]">
        <PageHero 
          title="Our Services" 
          subtitle="Tailored digital solutions for your business" 
        />

        <ServiceList 
          title="Website Services" 
          services={serviceCategories.websites}
          onOpenModal={handleOpenModal}
        />

        <Portfolio />

        <ServiceList 
          title="Web Application Services" 
          services={serviceCategories.applications}
          onOpenModal={handleOpenModal}
        />

        <PricingSection />
        
        <CallToActionSection />
      </main>

      {selectedService && (
        <ServiceModal
          isOpen={!!selectedService}
          onClose={handleCloseModal}
          title={selectedService.title}
          description={selectedService.fullDescription}
          features={selectedService.features}
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
