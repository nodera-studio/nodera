
import React, { useRef, useEffect } from 'react';
import styles from '../styles/TheProcess.module.css';

const ProcessTitle = () => {
  const sectionTitleRef = useRef<HTMLHeadingElement>(null);

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
    <div className="bg-[#F9F9F9] text-center mb-2.5 w-full">
      <h2 ref={sectionTitleRef} className="section-title text-4xl sm:text-5xl font-bold mx-auto">
        The <span className="gradient-word">Process</span>
      </h2>
    </div>
  );
};

export default ProcessTitle;
