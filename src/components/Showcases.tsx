
import React, { useEffect, useRef } from 'react';
import { useIsMobile } from '../hooks/use-mobile';

const Showcases = () => {
  const isMobile = useIsMobile();
  const sectionTitleRef = useRef<HTMLHeadingElement>(null);

  // Intersection Observer for section title animation
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    
    if (sectionTitleRef.current) {
      observer.observe(sectionTitleRef.current);
    }
    
    return () => {
      if (sectionTitleRef.current) {
        observer.unobserve(sectionTitleRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-white py-16 md:py-24 lg:py-32 px-6 sm:px-10 lg:px-16 border-b border-[#F1F1F1]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between items-center mb-12 md:mb-16 lg:mb-20 gap-4">
          <h2 ref={sectionTitleRef} className="text-5xl sm:text-6xl md:text-7xl font-comfortaa font-bold text-black section-title">
            Digital <span className="gradient-word">Showcases</span>
          </h2>
          <a 
            href="#" 
            className="text-xl sm:text-2xl font-comfortaa font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent hover:translate-x-1 transition-transform"
          >
            View All →
          </a>
        </div>
        
        <div className="bg-[#F9F9F9] rounded-3xl p-6 md:p-10 mb-12 md:mb-16 lg:mb-20 overflow-hidden showcase-card card-hover">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="lg:w-1/2 space-y-4 md:space-y-6 order-2 lg:order-1">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-baloo font-semibold">Museum CMS Platform</h3>
              <p className="text-lg md:text-xl font-baloo font-medium text-zinc-700">
                The behind-the-scenes system that powers museum mobile guides, intuitive for staff, informative for visitors.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="#" 
                  className="px-6 py-3 bg-black text-white rounded-full font-baloo font-semibold text-lg hover:scale-105 transition-transform"
                >
                  The Full Story
                </a>
                <a 
                  href="#" 
                  className="px-6 py-3 bg-white border border-black text-black rounded-full font-baloo font-semibold text-lg hover:scale-105 transition-transform"
                >
                  More Creations
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <img 
                src="/lovable-uploads/nous-cms.png" 
                alt="Museum CMS Platform" 
                className="showcase-image rounded-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="bg-[#F9F9F9] rounded-3xl p-6 md:p-10 overflow-hidden showcase-card card-hover">
          <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="lg:w-1/2">
              <img 
                src="/lovable-uploads/8379e5c3-25c3-48da-9e3b-916491ac1570.png" 
                alt="Furnihaus Collection" 
                className="showcase-image rounded-xl w-full h-auto object-cover"
              />
            </div>
            <div className="lg:w-1/2 space-y-4 md:space-y-6">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-baloo font-semibold">Furnihaus Collection</h3>
              <p className="text-lg md:text-xl font-baloo font-medium text-zinc-700">
                Where craftsmanship meets digital presence. Elegantly showcasing custom furniture and connecting artisans with clients.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="#" 
                  className="px-6 py-3 bg-black text-white rounded-full font-baloo font-semibold text-lg hover:scale-105 transition-transform"
                >
                  The Full Story
                </a>
                <a 
                  href="#" 
                  className="px-6 py-3 bg-white border border-black text-black rounded-full font-baloo font-semibold text-lg hover:scale-105 transition-transform"
                >
                  More Creations
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcases;
