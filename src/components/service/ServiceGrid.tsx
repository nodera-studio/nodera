
import React, { useState, useEffect, useRef } from 'react';
import { ServiceItem } from '@/data/serviceData';
import { cn } from '@/lib/utils';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ServiceGridProps {
  services: ServiceItem[];
}

const ServiceGrid: React.FC<ServiceGridProps> = ({ services }) => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  
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
  }, []);
  
  // Function to create slugs from titles
  const convertToSlug = (title: string): string => {
    return title
      .toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-');
  };

  return (
    <section className="py-20 md:py-24 lg:py-32" style={{ backgroundColor: '#f1f3fb' }}>
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-comfortaa font-bold text-center mb-16">Core Service Offerings</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[85%] mx-auto">
          {services.map((service, index) => (
            <div 
              key={service.title}
              ref={el => cardsRef.current[index] = el}
              className="flex flex-col opacity-0 translate-y-8 transition-all duration-500"
            >
              <Card className="flex flex-col h-full bg-white rounded-xl shadow-sm border-0">
                <CardHeader>
                  <h3 className="text-xl font-comfortaa font-bold">{service.title}</h3>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="font-baloo font-medium text-base text-gray-600">
                    {service.description}
                  </p>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  {/* Replace button with highlighted text link */}
                  <Link 
                    to={`/services/${convertToSlug(service.title)}`}
                    className="font-baloo font-medium inline-flex items-center transition-colors duration-200"
                    style={{ 
                      color: 'rgba(0, 122, 255, 0.9)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(0, 122, 255, 1)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0, 122, 255, 0.9)'}
                  >
                    Learn more about our {service.title.toLowerCase()} solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
