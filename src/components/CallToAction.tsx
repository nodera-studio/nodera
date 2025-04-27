import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { useIsMobile } from '../hooks/use-mobile';

const CallToAction = () => {
  const isMobile = useIsMobile();
  const sectionHeadingRef = useRef<HTMLDivElement>(null);

  const lines = [
    "You've got a vision. We've got the code.",
    "Let's build something remarkable."
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    
    if (sectionHeadingRef.current) {
      observer.observe(sectionHeadingRef.current);
    }
    
    return () => {
      if (sectionHeadingRef.current) {
        observer.unobserve(sectionHeadingRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-white py-16 md:py-24 lg:py-32 px-6 text-center border-b border-[#F1F1F1] relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        <div 
          ref={sectionHeadingRef}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-baloo font-medium leading-tight mb-8 md:mb-12 space-y-4 section-title"
        >
          {lines.map((line, index) => (
            <div key={index} className="overflow-hidden">
              <span className="inline-block">
                {line}
              </span>
            </div>
          ))}
        </div>
        
        <Button 
          asChild
          size="lg" 
          className="bg-black hover:bg-zinc-800 text-white rounded-xl font-baloo font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 relative z-10 hover:scale-105 transition-transform"
        >
          <a href="#contact">
            Get in Touch
          </a>
        </Button>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
        <div className="text-[20vw] font-comfortaa font-bold text-white whitespace-nowrap">
          Nodera
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
