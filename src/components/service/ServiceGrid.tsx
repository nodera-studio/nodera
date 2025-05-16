
import React, { useState, useEffect, useRef } from 'react';
import { ServiceItem } from '@/data/serviceData';
import { cn } from '@/lib/utils';

interface ServiceGridProps {
  services: ServiceItem[];
}

const ServiceGrid: React.FC<ServiceGridProps> = ({ services }) => {
  const [activeTab, setActiveTab] = useState<string>("Websites");
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Filter service by active tab
  const activeService = services.find(service => service.title === activeTab);
  
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
    
    // Observe all cards
    cardsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });
    
    return () => observer.disconnect();
  }, [activeTab]);
  
  return (
    <section className="py-20 md:py-24 lg:py-32 bg-white">
      <div className="px-0">
        <h2 className="text-3xl md:text-4xl font-comfortaa font-bold text-center mb-16">Core Service Offerings</h2>
        
        {/* Tabs Navigation */}
        <div className="flex justify-center mb-12 border-b border-gray-200">
          <div className="flex space-x-8 md:space-x-12">
            {services.map((service, index) => (
              <button
                key={service.title}
                ref={el => tabsRef.current[index] = el}
                className={cn(
                  "pb-2 text-lg font-baloo font-medium relative transition-all duration-300",
                  activeTab === service.title 
                    ? "text-black after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black" 
                    : "text-gray-500 hover:text-gray-800"
                )}
                onClick={() => setActiveTab(service.title)}
              >
                {service.title === "E-commerce Solutions" ? "E-commerce" : service.title}
              </button>
            ))}
          </div>
        </div>
        
        {/* Content for active tab */}
        {activeService && (
          <div className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
              {/* Card 1: Design Approach (Left, Tall) */}
              <div 
                ref={el => cardsRef.current[0] = el}
                className="md:col-span-5 bg-[#F5F5F5] p-8 opacity-0 translate-y-8 transition-all duration-500"
              >
                <h3 className="text-2xl font-comfortaa font-bold mb-4">Our Design Approach</h3>
                <p className="font-baloo font-medium text-base md:text-lg">
                  {activeService.designApproach}
                </p>
              </div>
              
              {/* Right column for Cards 2 & 3 */}
              <div className="md:col-span-7 flex flex-col gap-5">
                {/* Card 2: Technologies */}
                <div 
                  ref={el => cardsRef.current[1] = el}
                  className="bg-[#F5F5F5] p-8 opacity-0 translate-y-8 transition-all duration-500"
                >
                  <h3 className="text-2xl font-comfortaa font-bold mb-4">
                    {activeTab === "E-commerce Solutions" ? "Core Platform" : "Technologies We Use"}
                  </h3>
                  <div className="font-baloo font-medium text-base md:text-lg">
                    {activeService.technologyOptions.map((tech, index) => (
                      <div key={index} className="mb-4">
                        <p className="font-bold mb-1">{tech.name}</p>
                        <p>{tech.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Card 3: What's Included */}
                <div 
                  ref={el => cardsRef.current[2] = el}
                  className="bg-[#F5F5F5] p-8 opacity-0 translate-y-8 transition-all duration-500"
                >
                  <h3 className="text-2xl font-comfortaa font-bold mb-4">What's Included</h3>
                  <ul className="list-disc pl-5 font-baloo font-medium text-base md:text-lg">
                    {activeService.standardInclusions.map((item, index) => (
                      <li key={index} className="mb-2">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Card 4: Available Add-ons (Full Width) */}
              <div 
                ref={el => cardsRef.current[3] = el}
                className="md:col-span-12 bg-[#F5F5F5] p-8 opacity-0 translate-y-8 transition-all duration-500"
              >
                <h3 className="text-2xl font-comfortaa font-bold mb-4">Available Add-ons</h3>
                <p className="font-baloo font-medium text-base md:text-lg">
                  {activeService.optionalAddOns}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceGrid;
