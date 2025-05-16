
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ServiceItem } from '@/data/serviceData';

interface ServiceGridProps {
  services: ServiceItem[];
}

const ServiceGrid: React.FC<ServiceGridProps> = ({ services }) => {
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
  
  // Function to create slugs from titles
  function convertToSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-');
  }
  
  return (
    <section className="py-20 md:py-24 lg:py-32 px-4 sm:px-6 bg-[#F5F5F7]">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-comfortaa font-bold text-center mb-16">Core Service Offerings</h2>
        
        <div className="flex flex-col gap-2.5">
          {/* Top row - two services side by side */}
          <div className="flex flex-col md:flex-row gap-2.5 w-full">
            {services.slice(0, 2).map((service, index) => (
              <Link
                key={service.title}
                to={`/services/${convertToSlug(service.title)}`}
                className="w-full md:w-1/2"
              >
                <div
                  ref={el => gridItemsRef.current[index] = el}
                  className="relative overflow-hidden flex flex-col items-center justify-end
                    bg-[#222222] h-[450px] p-8 text-center
                    transform transition-all duration-300 ease-out 
                    opacity-0 translate-y-8 hover:opacity-95"
                >
                  <div className="z-10 flex flex-col items-center">
                    <h3 className="text-3xl md:text-4xl font-comfortaa font-bold mb-3 text-white">{service.title}</h3>
                    <p className="text-base md:text-lg font-comfortaa opacity-90 mb-6 max-w-md text-white">{service.description}</p>
                    <Button 
                      variant="secondary" 
                      size="lg"
                      className="font-comfortaa font-medium text-white border border-white/30 bg-white/10 hover:bg-white/20 rounded-full"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Bottom row - one service spanning full width */}
          <div className="w-full">
            {services.slice(2, 3).map((service, index) => (
              <Link
                key={service.title}
                to={`/services/${convertToSlug(service.title)}`}
                className="w-full"
              >
                <div
                  ref={el => gridItemsRef.current[index + 2] = el}
                  className="relative overflow-hidden flex flex-col items-center justify-end
                    bg-[#222222] h-[450px] p-8 text-center
                    transform transition-all duration-300 ease-out 
                    opacity-0 translate-y-8 hover:opacity-95"
                >
                  <div className="z-10 flex flex-col items-center">
                    <h3 className="text-3xl md:text-4xl font-comfortaa font-bold mb-3 text-white">{service.title}</h3>
                    <p className="text-base md:text-lg font-comfortaa opacity-90 mb-6 max-w-md text-white">{service.description}</p>
                    <Button 
                      variant="secondary" 
                      size="lg"
                      className="font-comfortaa font-medium text-white border border-white/30 bg-white/10 hover:bg-white/20 rounded-full"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
