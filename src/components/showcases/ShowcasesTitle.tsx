
import React, { useEffect, useRef } from 'react';
import styles from '../styles/Showcases.module.css';

const ShowcasesTitle: React.FC = () => {
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
    <div className="flex flex-wrap justify-between items-center mb-12 md:mb-16 lg:mb-20">
      <h2 ref={sectionTitleRef} className="text-black section-title text-left">
        Digital <span className="gradient-word">Showcases</span>
      </h2>
      <a 
        href="#" 
        className="view-all-link"
      >
        View All →
      </a>
    </div>
  );
};

export default ShowcasesTitle;
