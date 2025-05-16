
import React, { useState, useEffect, useRef } from 'react';
import { ServiceItem } from '@/data/serviceData';
import { cn } from '@/lib/utils';
import { Card, CardHeader, CardContent } from "@/components/ui/card";

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
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-comfortaa font-bold text-center mb-16">Core Service Offerings</h2>
        
        {/* Tabs Navigation - Apple-style with proper spacing and centered underline */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-16">
            {services.map((service, index) => (
              <button
                key={service.title}
                ref={el => tabsRef.current[index] = el}
                className={cn(
                  "pb-2 text-lg font-baloo font-medium relative transition-all duration-300",
                  activeTab === service.title 
                    ? "text-black" 
                    : "text-gray-500 hover:text-gray-800"
                )}
                onClick={() => setActiveTab(service.title)}
              >
                {service.title === "E-commerce Solutions" ? "E-commerce" : service.title}
                {/* Custom underline that's centered and just wider than the text */}
                {activeTab === service.title && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%+16px)] h-0.5 bg-black"></span>
                )}
              </button>
            ))}
          </div>
        </div>
        
        {/* Content for active tab - Apple-style card arrangement */}
        {activeService && (
          <div className="container max-w-6xl mx-auto">
            {/* Card Grid - Use the new content arrangement */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Card 1: What's Included (Tall, Left) */}
              <Card 
                ref={el => cardsRef.current[0] = el}
                className="md:col-span-5 bg-[#F8F8F8] rounded-xl opacity-0 translate-y-8 transition-all duration-500 shadow-sm"
              >
                <CardHeader>
                  <h3 className="text-2xl font-comfortaa font-bold">What's Included</h3>
                </CardHeader>
                <CardContent className="pt-2">
                  <ul className="list-disc pl-5 font-baloo font-medium text-base md:text-lg space-y-2">
                    {activeService.standardInclusions.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              {/* Right column for Cards 2 & 3 */}
              <div className="md:col-span-7 flex flex-col gap-6">
                {/* Card 2: Our Design Approach (Top Right) */}
                <Card 
                  ref={el => cardsRef.current[1] = el}
                  className="bg-[#F8F8F8] rounded-xl opacity-0 translate-y-8 transition-all duration-500 shadow-sm"
                >
                  <CardHeader>
                    <h3 className="text-2xl font-comfortaa font-bold">Our Design Approach</h3>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <p className="font-baloo font-medium text-base md:text-lg">
                      {activeService.designApproach}
                    </p>
                  </CardContent>
                </Card>
                
                {/* Card 3: Technologies/Core Platform (Bottom Right) */}
                <Card 
                  ref={el => cardsRef.current[2] = el}
                  className="bg-[#F8F8F8] rounded-xl opacity-0 translate-y-8 transition-all duration-500 shadow-sm"
                >
                  <CardHeader>
                    <h3 className="text-2xl font-comfortaa font-bold">
                      {activeTab === "E-commerce Solutions" ? "Core Platform" : "Technologies We Use"}
                    </h3>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <div className="font-baloo font-medium text-base md:text-lg space-y-4">
                      {activeService.technologyOptions.map((tech, index) => (
                        <div key={index}>
                          <p className="font-medium mb-1">{tech.name}</p>
                          <p>{tech.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Card 4: Available Add-ons (Bottom, Full Width) */}
              <Card 
                ref={el => cardsRef.current[3] = el}
                className="md:col-span-12 bg-[#F8F8F8] rounded-xl opacity-0 translate-y-8 transition-all duration-500 shadow-sm"
              >
                <CardHeader>
                  <h3 className="text-2xl font-comfortaa font-bold">Available Add-ons</h3>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="font-baloo font-medium text-base md:text-lg">
                    {activeService.optionalAddOns}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceGrid;
