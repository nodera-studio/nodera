import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { useIsMobile } from '../hooks/use-mobile';
import styles from './CallToAction.module.css';

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
    <div className={`${styles['cta-section']} bg-white text-center relative overflow-hidden h-[400px]`}>
      <div className={styles['gradient-background']} aria-hidden="true" />
      
      <div className="flex items-center justify-center w-full h-full relative z-10">
        <div className={styles['cta-content-wrapper']}>
          <div
            ref={sectionHeadingRef}
            className={styles['cta-tagline-text'] + " text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-baloo font-medium mb-8 md:mb-12 section-title"}
          >
            <span className="inline-block w-full">
              You've got a vision. We've got the code.
            </span>
            <div className="inline-block w-full mt-2">
              Let's build something remarkable.
            </div>
          </div>
          
          <Button
            asChild
            size="lg"
            className={styles['cta-button-blue'] + " relative z-10 hover:scale-103 transition-transform transition-colors duration-200 ease-in-out"}
          >
            <a href="#contact">
              Get in Touch
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
