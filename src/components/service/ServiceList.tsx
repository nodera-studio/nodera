
import React from 'react';
import ServiceCard from './ServiceCard';

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

interface ServiceListProps {
  title: string;
  services: ServiceItem[];
  onOpenModal: (service: ServiceItem) => void;
}

const ServiceList = ({ title, services, onOpenModal }: ServiceListProps) => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-comfortaa font-bold text-center mb-12">{title}</h2>
        <div className="max-w-3xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              onOpenModal={() => onOpenModal(service)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceList;
