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
      <div className={styles['cta-bg-art']} aria-hidden="true">
        <svg className={styles['cta-bg-art-svg']} viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="gridGradient" x1="0" y1="0" x2="800" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#e6eaf3" stopOpacity="0.5" />
              <stop offset="1" stopColor="#e6eaf3" stopOpacity="0.05" />
            </linearGradient>
            <mask id="fadeMask">
              <linearGradient id="fadeGradient" x1="0" y1="0" x2="800" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#fff" stopOpacity="1" />
                <stop offset="1" stopColor="#fff" stopOpacity="0" />
              </linearGradient>
              <rect x="0" y="0" width="800" height="600" fill="url(#fadeGradient)" />
            </mask>
          </defs>
          <g mask="url(#fadeMask)">
            {Array.from({ length: 13 }).map((_, i) => (
              <line key={i} x1={i * 64} y1="0" x2={i * 64} y2="600" stroke="url(#gridGradient)" strokeWidth="1.2" />
            ))}
            {Array.from({ length: 10 }).map((_, i) => (
              <line key={i} x1="0" y1={i * 60} x2="800" y2={i * 60} stroke="url(#gridGradient)" strokeWidth="1.2" />
            ))}
            <path d="M0,600 Q400,200 800,600" stroke="url(#gridGradient)" strokeWidth="2.5" fill="none" />
          </g>
        </svg>
      </div>

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
