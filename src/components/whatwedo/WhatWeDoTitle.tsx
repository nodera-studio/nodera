import React, { useEffect, useRef } from 'react';
import { useIsMobile } from '../../hooks/use-mobile';

const WhatWeDoTitle: React.FC = () => {
  const sectionTitleRef = useRef<HTMLHeadingElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    
    const currentTitleRef = sectionTitleRef.current;
    if (currentTitleRef) {
      observer.observe(currentTitleRef);
    }
    
    return () => {
      if (currentTitleRef) {
        observer.unobserve(currentTitleRef);
      }
    };
  }, []);

  return (
    <div className="bg-[#F9F9F9] py-10 text-center mt-2.5 mb-2.5">
      <h2 ref={sectionTitleRef} className="section-title mx-auto">
        What We <span className="gradient-word">Do</span>
      </h2>
    </div>
  );
};

export default WhatWeDoTitle;
