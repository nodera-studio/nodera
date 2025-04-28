
import React from 'react';
import { Button } from "@/components/ui/button";
import styles from './CallToAction.module.css';

const CallToAction = () => {
  return (
    <div className={`${styles['cta-section']} bg-transparent text-center relative overflow-hidden h-[500px] pt-24`}>
      <div className={styles['background-image']} aria-hidden="true" />
      
      <div className="flex items-center justify-center w-full h-full relative z-10">
        <div className={styles['cta-content-wrapper']}>
          <div
            className={`${styles['cta-tagline-text']} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-baloo font-medium mb-8 md:mb-12 text-white`}
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
            className={`${styles['cta-button-blue']} relative z-10 hover:scale-103 transition-transform transition-colors duration-200 ease-in-out`}
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
