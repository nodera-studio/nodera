import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ServiceItem } from '@/data/serviceData';

interface ServiceGridProps {
  services: ServiceItem[];
  onOpenModal: (service: ServiceItem) => void;
}

const ServiceGrid: React.FC<ServiceGridProps> = ({ services, onOpenModal }) => {
  const gridItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    // Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add small delay for staggered animation
          setTimeout(() => {
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }, index * 150);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    // Observe all grid items
    gridItemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });
    
    return () => observer.disconnect();
  }, []);
  
  // Gradient backgrounds for each service
  const gradients = [
    'bg-gradient-to-br from-blue-400 to-purple-600', // Websites
    'bg-gradient-to-br from-green-400 to-teal-600',  // E-commerce Solutions
    'bg-gradient-to-br from-zinc-700 to-neutral-900' // Web Applications
  ];

  return (
    <section className="py-20 md:py-24 lg:py-32 px-4 sm:px-6 bg-[#F5F5F7]">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-comfortaa font-bold text-center mb-16">Core Service Offerings</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* First row - two services side by side */}
          {services.slice(0, 2).map((service, index) => (
            <div
              key={service.title}
              ref={el => gridItemsRef.current[index] = el}
              className={`relative overflow-hidden rounded-3xl min-h-[450px] flex items-end 
                ${gradients[index]} transform transition-all duration-300 ease-out 
                opacity-0 translate-y-8 hover:scale-[1.03] cursor-pointer`}
              onClick={() => onOpenModal(service)}
            >
              <div className="absolute inset-0 opacity-20">
                {/* Optional background pattern or graphic could go here */}
              </div>
              <div className="p-8 md:p-12 text-white z-10">
                <h3 className="text-3xl md:text-4xl font-comfortaa font-bold mb-3">{service.title}</h3>
                <p className="text-base md:text-lg font-comfortaa opacity-90 mb-6 max-w-md">{service.description}</p>
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="font-comfortaa font-medium text-white border-2 border-white/70 bg-white/10 hover:bg-white/20"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Second row - one service spanning full width (or centered) */}
        <div className="mt-6 md:mt-8">
          {services.slice(2, 3).map((service, index) => (
            <div
              key={service.title}
              ref={el => gridItemsRef.current[index + 2] = el}
              className={`relative overflow-hidden rounded-3xl min-h-[450px] flex items-end 
                ${gradients[index + 2]} transform transition-all duration-300 ease-out 
                opacity-0 translate-y-8 hover:scale-[1.03] cursor-pointer md:max-w-full mx-auto`}
              onClick={() => onOpenModal(service)}
            >
              <div className="absolute inset-0 opacity-20">
                {/* Optional background pattern or graphic could go here */}
              </div>
              <div className="p-8 md:p-12 text-white z-10">
                <h3 className="text-3xl md:text-4xl font-comfortaa font-bold mb-3">{service.title}</h3>
                <p className="text-base md:text-lg font-comfortaa opacity-90 mb-6 max-w-md">{service.description}</p>
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="font-comfortaa font-medium text-white border-2 border-white/70 bg-white/10 hover:bg-white/20"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
